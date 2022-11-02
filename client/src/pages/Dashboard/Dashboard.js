import { useState } from "react";
import Layout from "../../components/layout/Layout/Layout";
import { Row, Col, Button, Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import styles from "./styles/index.module.css";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [navbarIsShown, setNavbarIsShown] = useState(false);

  const handleShowNavbar = () => setNavbarIsShown(true);

  const currentPage =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

  const pageTitle = {
    editProfile: "Edit Profile",
    profile: "Profile Details",
    orders: "Orders",
  };

  return (
    <Layout>
      <section className="section-padding">
        <Button
          variant="primary"
          className={`d-xl-none ${styles["account-btn"]}`}
          onClick={handleShowNavbar}
        >
          ACCOUNT
        </Button>
        <Container>
          <div className="d-flex align-items-center px-3 py-2 border mb-4">
            <div className="text-start">
              <h4 className="mb-0 h4 fw-bold">{pageTitle[currentPage]}</h4>
            </div>
          </div>

          <Row>
            <Navbar
              isShown={navbarIsShown}
              setNavbarIsShown={setNavbarIsShown}
            />
            <Col xl={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default Dashboard;
