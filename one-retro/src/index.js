import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Button, Card, Navbar, ListGroup } from "react-bootstrap";
import logo from "./images/logo.png";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Api = "https://duyquangtruong-oneretro.herokuapp.com/boards";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="page-content">
        <h3>My Boards</h3>
        <hr />
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
  const [boards, setBoards] = useState([]);

  function fetchUrl() {
    fetch(Api, {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => setBoards(res))
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  const createBoard = <div></div>;
  const boardList = boards.map((board) => {
    return (
      <div className="boardItems">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{board.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <div className="boardList">{boardList}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
