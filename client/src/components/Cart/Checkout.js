// css
import styles from "./Cart.module.css";

function Checkout(props) {
  const { totalPrice, cartItemsObject } = props;

  const redirectToStrapi = async () => {
    const items = Object.values(cartItemsObject).map((item) => {
      return {
        price: item.priceId,
        quantity: item.qty,
      };
    });

    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
        mode: "cors",
      }
    );

    const responseData = await response.json();
    if (response.ok) {
      window.location.replace(responseData["data"]);
    }
  };

  return (
    <button
      type="button"
      onClick={redirectToStrapi}
      className={`btn btn-lg btn-dark ${styles["btn-ecomm"]} py-3`}
    >
      <span className="mx-3">Checkout</span>
      {totalPrice ? `$${totalPrice}` : undefined}
    </button>
  );
}

export default Checkout;
