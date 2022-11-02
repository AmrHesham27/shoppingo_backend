// react
import React from "react";

// css & bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

function App() {
  return <Outlet />;
}

export default App;
