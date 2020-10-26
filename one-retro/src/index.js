import React from "react";
import ReactDOM from "react-dom";
import { Button, Card, Navbar, ListGroup } from "react-bootstrap";
import logo from "./images/logo.png";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <RetroList />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{" "}
          OneRetro
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

function RetroList() {
  const createCard = <div></div>;
  const card = (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
  return (
    <div>
      <div className="boardList">
        <div className="boardItems">{card}</div>
        <div className="boardItems">{card}</div>
        <div className="boardItems">{card}</div>
        <div className="boardItems">{card}</div>
        <div className="boardItems">{card}</div>
        <div className="boardItems">{card}</div>
        <div className="boardItems">{card}</div>
        <div className="boardItems">{card}</div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
