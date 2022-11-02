// React
import { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "../../context/app-context";

// redux
import { useSelector } from "react-redux";

// Components
import CartItem from "./CartItem";
import Modal from "../../components/UI/Modal/Modal";

// css
import styles from "./Cart.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Checkout from "./Checkout";

function Cart() {
  const ctx = useContext(AppContext);

  const { items: cartItemsObject, itemsNumber: cartItemsNumber } = useSelector(
    (state) => state.cart
  );
  let totalPrice = 0;
  if (cartItemsNumber)
    Object.values(cartItemsObject).forEach(
      (item) => (totalPrice += item.qty * item.price)
    );

  const [cartItemsElements, setCartItemsElements] = useState([]);

  const turnItemsToElements = useCallback((cartItemsObject) => {
    const cartItemsArray = Object.values(cartItemsObject);
    setCartItemsElements(
      cartItemsArray.map((product, index) => (
        <CartItem product={product} key={index} />
      ))
    );
  }, []);

  useEffect(() => {
    if (cartItemsObject) {
      turnItemsToElements(cartItemsObject);
    }
  }, [cartItemsObject, turnItemsToElements]);

  return (
    <Modal>
      <div className={styles.overlay}>
        <div className={styles.header}>
          <h4 className="mb-0 fw-bold">Your Cart</h4>
          <FontAwesomeIcon icon={faClose} size={"2x"} onClick={ctx.hideCart} />
        </div>

        <div className={styles.body}>{cartItemsElements}</div>

        <div className={`${styles.footer}`}>
          <Checkout totalPrice={totalPrice} cartItemsObject={cartItemsObject} />
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
