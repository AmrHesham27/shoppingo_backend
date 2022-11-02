import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ContextProvider from "./context/ContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ContextProvider>
      <Router />
    </ContextProvider>
  </Provider>
);
