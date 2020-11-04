import React, { useState, useEffect } from "react";
import { Button, Card, Navbar, Nav } from "react-bootstrap";
import Header from "../header/header";
import "./boards.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API = "https://duyquangtruong-oneretro.herokuapp.com/boards";

function Boards() {
  return (
    <div>
      <Header />
      <div className="page-content">
        <h3>My Boards</h3>
        <hr />
        <RetroList />
      </div>
    </div>
  );
}

function RetroList() {
  const [boards, setBoards] = useState([]);

  function fetchUrl() {
    fetch(API, {
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

export default Boards;
