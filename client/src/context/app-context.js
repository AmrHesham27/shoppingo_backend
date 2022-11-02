import React from "react";

const AppContext = React.createContext({
  cartIsShown: false,
  showCart: () => {},
  hideCart: () => {},
  navbarIsShown: false,
  showNavbar: () => {},
  hideNavbar: () => {},
  hideAll: () => {},
  message: null,
  setMessage: (message) => {},
  clearMessage: () => {},
});

export default AppContext;
