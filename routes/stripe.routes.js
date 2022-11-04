const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");

const auth = require("../middleware/authUser");

router.post("/create-checkout-session", auth, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body["items"],
    mode: "payment",
    success_url: `${process.env.REACT_PORT}/dashboard/orders`,
    cancel_url: `${process.env.REACT_PORT}`,
    customer_email: req.user.email,
  });

  try {
    res.status(200).send({
      data: session.url,
      apiStatus: true,
    });
  } catch (e) {
    res.status(500).send({
      data: e,
      message: e.message,
      apiStatus: false,
    });
  }
});

router.post("/webhook", async (request, response) => {
  // verify the endpoint
  const signature = request.headers["stripe-signature"];
  const endpointSecret = process.env.STRIPE_HOOK_KEY;
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      request.rawBody,
      signature,
      endpointSecret
    );
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err.message);
    return response.sendStatus(400);
  }

  // Handle the event (add order to db)
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { line_items } = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["line_items"],
    });

    let productsObject = {};
    let priceIds = [];

    line_items["data"].forEach((item) => {
      productsObject[item["price"]["id"]] = {
        data: null,
        quantity: item.quantity,
      };
      priceIds.push(item["price"]["id"]);
    });

    let productsData = await productModel.find({ priceId: { $in: priceIds } });

    productsData.forEach((product) => {
      productsObject[product.priceId]["data"] = product;
    });

    const newOrder = new orderModel({
      email: event["data"]["object"]["customer_email"],
      products: JSON.stringify(productsObject),
      totalAmount: event["data"]["object"]["amount_total"],
    });
    await newOrder.save();
  }

  response.send();
});

module.exports = {
  path: "",
  router,
};
