import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import Header from "../header/header";
import "./boards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import addIcon from "../../images/add.png";

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
  const [showModal, setShowModal] = useState(false);
  const [createRequest, setCreateRequest] = useState({});

  function handleCreate() {
    setShowModal(true);
  }

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
  }, [boards]);

  useEffect(() => {
    fetch(API, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: createRequest.name,
        createdBy: createRequest.createdBy,
        createdAt: createRequest.createdAt,
      }),
    })
      .then((res) => res.json())
      .then((res) => setBoards(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createBoard = (
    <div
      className="boardCreate"
      style={{
        borderStyle: "dotted",
        borderColor: "lightgray",
      }}
    >
      <img
        src={addIcon}
        style={{ width: "70px", height: "70px" }}
        onClick={handleCreate}
      ></img>
    </div>
  );
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
            <Button className="m-auto" variant="primary">
              Detail
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <div>
        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title className="m-auto">Create Board</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form
              onSubmit={(e) => {
                setCreateRequest({
                  name: e.currentTarget.name.value,
                  createdBy: "duyquangtruong",
                  createAt: Date.now(),
                });
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter board name"
                  required
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Create
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <div className="boardList">
        {createBoard}
        {boardList}
      </div>
    </div>
  );
}

export default Boards;
