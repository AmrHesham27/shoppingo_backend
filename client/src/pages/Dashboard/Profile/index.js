// bootstrap
import { Col, Card, Table } from "react-bootstrap";

// font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Col xl={9}>
      <Card className="rounded-0">
        <Card.Body className="p-lg-5">
          <h5 className="mb-4 fw-bold">Profile Details</h5>
          <Table striped>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{user.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td>Birth date</td>
                <td>{user.birthDate}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{user.location}</td>
              </tr>
            </tbody>
          </Table>
          <div className="">
            <button
              type="button"
              className="btn btn-outline-dark btn-ecomm px-5 rounded-0"
            >
              <FontAwesomeIcon icon={faPencil} />{" "}
              <span className="mx-2">Edit</span>
            </button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Profile;
