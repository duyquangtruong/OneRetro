import Header from "../header/header";
import { useEffect, useState } from "react";
import avatar from "../../images/avatar.jpeg";
import { useHistory } from "react-router-dom";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Modal,
  Button,
  Form,
  Toast,
} from "react-bootstrap";

const API = "http://localhost:3001/users/update";

function Users() {
  const [showModal, setShowModal] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  function fetchUrl() {
    fetch(API, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userInfo.username,
        name: userInfo.name,
        email: userInfo.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 200) {
          setIsSuccess(true);
        }
        console.log(data);
      });
  }

  useEffect(() => {
    if (isFetch) {
      fetchUrl();
    }
  }, [isFetch]);

  function handleSubmit(event) {
    const form = event.currentTarget;
    const newName = form.name.value;
    const newEmail = form.email.value;
    setUserInfo({
      username: userInfo.username,
      name: newName,
      email: newEmail,
      createdAt: userInfo.createdAt,
    });

    setIsFetch(true);
    fetchUrl();

    event.preventDefault();
    setShowModal(false);
    setIsFetch(false);
  }

  return (
    <div>
      <div>
        <Toast
          show={isSuccess}
          onClose={() => setIsSuccess(false)}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Your information is updated !</Toast.Body>
        </Toast>
      </div>
      <div>
        <Modal show={showModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit} action="/users/update">
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Fullname</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Fullname"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save changes
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <Header />
        <div className="page-content">
          <h3>Information</h3>
          <hr />
          <div className="d-flex justify-content-center mt-2">
            <Card style={{ width: "50rem" }}>
              <img className="m-auto" src={avatar} width="300" height="300" />
              <Card.Body className="m-auto">
                <Card.Title>{userInfo.name}</Card.Title>
                <Card.Text>Username: {userInfo.username}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Email: {userInfo.email}</ListGroupItem>
                <ListGroupItem>Registerd: {userInfo.createdAt}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link onClick={() => setShowModal(true)}>Edit</Card.Link>
                <Card.Link href="#">Reset password</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
