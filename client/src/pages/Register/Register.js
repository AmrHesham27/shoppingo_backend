// react and components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout/Layout";

// css
import styles from "./styles.module.css";

// context
import { useContext } from "react";
import AppContext from "../../context/app-context";

// libraries
import { useForm } from "react-hook-form";

// bootstarp
import { Form, Col } from "react-bootstrap";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();
  const ctx = useContext(AppContext);
  const [formIsPending, setFormIsPeding] = useState(false);

  const onSubmit = async (data) => {
    setFormIsPeding(true);

    const response = await fetch(`${process.env.REACT_APP_SERVER}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      ctx.setMessage({
        text: "You were registered successfully",
        type: "success",
      });
      return navigate("/login");
    } else {
      ctx.setMessage({
        text: "Error happened, try again",
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
          <h4 className="my-4">Register</h4>

          <Form.Group as={Col} className="mb-4" style={{ maxWidth: "213px" }}>
            <Form.Label className="form-label" htmlFor="email">
              Email address
            </Form.Label>
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

          <Form.Group
            className="form-outline mb-4"
            style={{ maxWidth: "213px" }}
          >
            <Form.Label className="form-label" htmlFor="password">
              Password
            </Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
              isInvalid={Object.keys(errors).includes("password")}
            />
            {Object.keys(errors).includes("password") && (
              <Form.Control.Feedback type="invalid">
                {errors["password"]["message"]}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group
            className="form-outline mb-4"
            style={{ maxWidth: "213px" }}
          >
            <Form.Label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </Form.Label>
            <Form.Control
              type="password"
              {...register("confirmedPassword", {
                required: "confirmed password is required",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              isInvalid={Object.keys(errors).includes("confirmedPassword")}
            />
            {Object.keys(errors).includes("confirmedPassword") && (
              <Form.Control.Feedback type="invalid">
                {errors["confirmedPassword"]["message"]}
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <button
            disabled={formIsPending}
            type="submit"
            className="btn btn-primary btn-block mb-4"
          >
            Register
          </button>
        </Form>
        <div className="text-center">
          <p>
            Have an account?{" "}
            <a className={styles.bold} href="/login">
              Login
            </a>
          </p>
        </div>
      </Layout>
    </>
  );
}

export default Register;
