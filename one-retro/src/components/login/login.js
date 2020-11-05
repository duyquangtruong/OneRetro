import React, { useState, useEffect } from "react";
import { Button, Form, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ERRORCODE_INVALID_USERNAME = 400;
const ERRORCODE_WRONG_PASSWORD = 401;

const ERRORMESSAGE_INVALID_USERNAME =
  "Invalid Username ! \n Please try again or create an account.";
const ERRORMESSAGE_WRONG_PASSWORD = "Wrong password !";

const API = "http://localhost:3001/login";

function Login() {
  const [status, setStatus] = useState({
    isFetched: false,
    isShowModal: false,
  });
  const [submitInfo, setSubmitInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [isFetch, setIsFetch] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(async () => {
    if (status.isFetched) {
      await fetch(API, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: submitInfo.username,
          password: submitInfo.password,
          isRemember: submitInfo.isRemember,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUserInfo(data);
          console.log(data);
        });
      if (
        Object.keys(userInfo).length === 0 ||
        Object.keys(userInfo).some((k) => k === "error")
      ) {
        if (userInfo.error === ERRORCODE_INVALID_USERNAME) {
          setErrorMessage(ERRORMESSAGE_INVALID_USERNAME);
        } else {
          setErrorMessage(ERRORMESSAGE_WRONG_PASSWORD);
        }
        setStatus({ isFetched: false, isShowModal: true });
      }
    }
  }, [status.isFetched]);

  return (
    <div>
      <div>
        <Modal show={status.isShowModal}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Login Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{errorMessage}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="primary"
                onClick={() => {
                  setStatus({ isFetched: false, isShowModal: false });
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <h1>Welcome to OneRetro</h1>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Card style={{ width: "50%" }}>
            <Card.Body>
              <Form
                onSubmit={(e) => {
                  setStatus({ isFetched: true, isShowModal: false });
                  setSubmitInfo({
                    username: e.currentTarget.username.value,
                    password: e.currentTarget.password.value,
                    isRemember: e.currentTarget.isRemember.value,
                  });
                  e.preventDefault();
                }}
                action="/boards"
              >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Keep me login"
                    name="isRemember"
                  />
                </Form.Group>
                <Button className="" variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
