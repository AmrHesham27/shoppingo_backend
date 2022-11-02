const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: req.body["items"],
    mode: "payment",
    success_url: `${process.env.REACT_PORT}`,
    cancel_url: `${process.env.REACT_PORT}`,
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

module.exports = {
  path: "",
  router,
};
