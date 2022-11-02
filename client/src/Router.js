// react
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import React, { Suspense } from "react";

// css & bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";

// loaders
import { getHomeData } from "./pages/Home/Home";
import App from "./App";

// pages
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About/About"));
const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
const Register = React.lazy(() => import("./pages/Register/Register"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Orders = React.lazy(() => import("./pages/Dashboard/Orders"));
const Profile = React.lazy(() => import("./pages/Dashboard/Profile"));
const EditProfile = React.lazy(() => import("./pages/Dashboard/EditProfile"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

const SpinnerPage = () => {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner animation="grow" variant="dark" className="m-3" />
      <Spinner animation="grow" variant="dark" className="m-3" />
      <Spinner animation="grow" variant="dark" className="m-3" />
    </div>
  );
};

function Router() {
  const NotLoggedInRoute = () => {
    if (localStorage.getItem("isLoggedIn") === "true")
      throw redirect("/dashboard/orders");
    return;
  };

  const ProtectedRoute = () => {
    if (localStorage.getItem("isLoggedIn") !== "true") throw redirect("/login");
    return;
  };

  const loginUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/me`, {
        method: "GET",
        headers: new Headers({
          Authorization: `${token}`,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data["data"]));
        localStorage.setItem("isLoggedIn", true);
      } else {
        localStorage.setItem("user", null);
        localStorage.setItem("isLoggedIn", false);
      }
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader: loginUser,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <Home />
            </Suspense>
          ),
          loader: getHomeData,
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <ContactUs />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <Login />
            </Suspense>
          ),
          loader: NotLoggedInRoute,
        },
        {
          path: "register",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <Register />
            </Suspense>
          ),
          loader: NotLoggedInRoute,
        },
        {
          path: "dashboard",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <Dashboard />
            </Suspense>
          ),
          loader: ProtectedRoute,
          children: [
            {
              path: "orders",
              element: (
                <Suspense fallback={<SpinnerPage />}>
                  <Orders />
                </Suspense>
              ),
            },
            {
              path: "profile",
              element: (
                <Suspense fallback={<SpinnerPage />}>
                  <Profile />
                </Suspense>
              ),
            },
            {
              path: "editProfile",
              element: (
                <Suspense fallback={<SpinnerPage />}>
                  <EditProfile />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<SpinnerPage />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
