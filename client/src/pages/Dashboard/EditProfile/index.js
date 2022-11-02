// bootstrap
import { Col, Row, Card, Form } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";
import { useState } from "react";

// css
import styles from "./styles.module.css";

// context
import { useContext } from "react";
import AppContext from "../../../context/app-context";

// libraries
import { useForm } from "react-hook-form";

function EditProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const ctx = useContext(AppContext);

  const returnError = (field) => {
    if (Object.keys(errors).includes(field)) {
      return <span className={styles.error}>{errors[field]["message"]}</span>;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formIsPending, setFormIsPeding] = useState(false);

  const onSubmit = async (data) => {
    setFormIsPeding(true);
    const response = await fetch(
      `${process.env.REACT_APP_SERVER}/editProfile`,
      {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        }),
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      ctx.setMessage({
        text: "Your profile was updated successfully",
        type: "success",
      });
      const responseData = await response.json();
      localStorage.setItem("user", JSON.stringify(responseData["data"]));
    } else {
      ctx.setMessage({
        text: "Error happened",
        type: "error",
      });
    }
    setFormIsPeding(false);
  };

  return (
    <Col xl={9}>
      <Card className="rounded-0">
        <Card.Body className="p-lg-5">
          <h5 className="mb-4 fw-bold">Edit Details</h5>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="g-3" xs={1}>
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.name}
                  className="rounded-0"
                  {...register("name", {
                    minLength: {
                      value: 4,
                      message: "Min length is 4 characters",
                    },
                  })}
                  isInvalid={Object.keys(errors).includes("name")}
                />

                {returnError("name")}
              </Col>
              <Col>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.phone}
                  className="rounded-0"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "please enter valid number",
                    },
                  })}
                  isInvalid={Object.keys(errors).includes("phone")}
                />

                {returnError("phone")}
              </Col>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="rounded-0"
                  placeholder={user.email}
                  type="email"
                  disabled
                />

                {returnError("email")}
              </Col>
              <Col>
                <Row>
                  <Col>
                    <FormCheck
                      type="radio"
                      inline
                      name="gender"
                      value="male"
                      {...register("gender")}
                    />
                    <Form.Label>Male</Form.Label>
                  </Col>
                  <Col>
                    <FormCheck
                      type="radio"
                      inline
                      name="gender"
                      value="female"
                      {...register("gender")}
                    />
                    <Form.Label>Female</Form.Label>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  className="rounded-0"
                  {...register("birthDate")}
                />
              </Col>
              <Col>
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  className="rounded-0"
                  placeholder={user.location}
                  {...register("location", {
                    minLength: {
                      value: 4,
                      text: "Min length is 4 characters",
                    },
                  })}
                  isInvalid={Object.keys(errors).includes("location")}
                />
                {returnError("location")}
              </Col>
              <Col>
                <button
                  className="btn btn-dark py-3 btn-ecomm w-100 rounded-0"
                  disabled={formIsPending}
                >
                  Save Details
                </button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default EditProfile;
