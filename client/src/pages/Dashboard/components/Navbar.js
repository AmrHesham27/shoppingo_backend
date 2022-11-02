import React from "react";
import styles from "../styles/index.module.css";
import { Col, Navbar, Offcanvas } from "react-bootstrap";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faUserCircle,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

function MyNavbar(props) {
  const currentPage =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  const handleCloseNavbar = () => {
    const setNavbarIsShown = props.setNavbarIsShown;
    setNavbarIsShown(false);
  };

  const isShown = props.isShown;

  return (
    <Col xl={3}>
      <Navbar className="p-0">
        <Offcanvas
          show={isShown}
          onHide={handleCloseNavbar}
          responsive="xl"
          className="w-100 p-0"
          style={{ maxWidth: "360px" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Account</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className={`list-group w-100 rounded-0 ${styles["nav-links"]}`}
            >
              <a
                href="/dashboard/orders"
                className={`list-group-item ${styles.link} ${
                  currentPage === "orders" ? styles.active : ""
                }`}
              >
                <FontAwesomeIcon icon={faBox} />
                <span style={{ marginLeft: "15px" }}>Orders</span>
              </a>
              <a
                href="/dashboard/profile"
                className={`list-group-item ${styles.link} ${
                  currentPage === "profile" ? styles.active : ""
                }`}
              >
                <FontAwesomeIcon icon={faUserCircle} />{" "}
                <span style={{ marginLeft: "10px" }}>Profile</span>
              </a>
              <a
                href="/dashboard/editProfile"
                className={`list-group-item ${styles.link} ${
                  currentPage === "editProfile" ? styles.active : ""
                }`}
              >
                <FontAwesomeIcon icon={faPencil} />
                <span style={{ marginLeft: "15px" }}>Edit Profile</span>
              </a>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </Col>
  );
}

export default MyNavbar;
