// React and components
import React, { useState } from "react";
import Layout from "../../components/layout/Layout/Layout";
import { useContext } from "react";
import AppContext from "../../context/app-context";
import { useNavigate } from "react-router-dom";

// css
import styles from "./styles.module.css";

// libraries
import { useForm } from "react-hook-form";

// bootstarp
import { Form, Col } from "react-bootstrap";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ctx = useContext(AppContext);
  const navigate = useNavigate();
  const [formIsPending, setFormIsPeding] = useState(false);

  const onSubmit = async (data) => {
    setFormIsPeding(true);
    const response = await fetch(`${process.env.REACT_APP_SERVER}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const reposnseData = await response.json();

    if (response.ok) {
      localStorage.setItem("token", reposnseData["data"]["token"]);
      localStorage.setItem(
        "user",
        JSON.stringify(reposnseData["data"]["user"])
      );
      localStorage.setItem("isLoggedIn", "true");
      ctx.setMessage({
        text: "You were loggedIn successfully",
        type: "success",
      });
      return navigate("/dashboard/orders");
    } else {
      ctx.setMessage({
        text: "Your credientials are wrong",
        type: "error",
      });
    }
    setFormIsPeding(false);
  };

  return (
    <>
      <Layout>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form} d-flex flex-column align-items-center justify-content-center`}
        >
          <h4 className="my-4">Login</h4>

          <Form.Group as={Col} className="mb-4" style={{ maxWidth: "213px" }}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              {...register("email", {
                required: "email is required",
                validate: (value) => value.includes("@"),
              })}
              isInvalid={Object.keys(errors).includes("email")}
            />
            {Object.keys(errors).includes("email") && (
              <Form.Control.Feedback type="invalid">
                {errors["email"]["message"]}
              </Form.Control.Feedback>
            )}
            {Object.keys(errors).includes("email") &&
              errors["email"]["type"] === "validate" && (
                <Form.Control.Feedback type="invalid">
                  please enter valid email
                </Form.Control.Feedback>
              )}
          </Form.Group>

          <Form.Group as={Col} className="mb-4" style={{ maxWidth: "213px" }}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              {...register("password", { required: "password is required" })}
              isInvalid={Object.keys(errors).includes("password")}
            />
            {Object.keys(errors).includes("password") && (
              <Form.Control.Feedback type="invalid">
                {errors["password"]["message"]}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <button
            disabled={formIsPending}
            className="btn btn-primary btn-block mb-4"
          >
            Sign in
          </button>
        </Form>
        <div className="text-center">
          <p>
            Not a member?{" "}
            <a className={styles.bold} href="/register">
              Register
            </a>
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Login;
