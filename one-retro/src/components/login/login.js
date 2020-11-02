import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function handleLogin(e) {
  e.preventDefault();
}

function Login() {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <h1>Welcome to OneRetro</h1>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Card style={{ width: "50%" }}>
          <Card.Body>
            <Form onSubmit={handleLogin} action="/boards">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me login" />
              </Form.Group>
              <Button className="" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Login;
