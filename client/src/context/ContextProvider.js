import AppContext from "./app-context";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [navbarIsShown, setNavbarIsShown] = useState(false);
  const [message, setMessage] = useState(null);

  const cartContext = {
    cartIsShown,
    showCart: () => setCartIsShown(true),
    hideCart: () => setCartIsShown(false),
    navbarIsShown,
    showNavbar: () => setNavbarIsShown(true),
    hideNavbar: () => setNavbarIsShown(false),
    hideAll: () => {
      setCartIsShown(false);
      setNavbarIsShown(false);
    },
    message,
    setMessage: (message) => setMessage(message),
    clearMessage: () => setMessage(null),
  };

  return (
    <AppContext.Provider value={cartContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default CartProvider;
