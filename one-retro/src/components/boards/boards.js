import React, { useState, useEffect } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import Header from "../header/header";
import "./boards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import addIcon from "../../images/add.png";

const GET_BOARD_LIST_API =
  "https://duyquangtruong-oneretro.herokuapp.com/boards";
const CREATE_BOARD_API = "http://localhost:3001/boards/create";

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

  function handleCreateSubmit(event) {
    setCreateRequest({
      name: event.currentTarget.name.value,
      description: event.currentTarget.description.value,
      createdBy: sessionStorage.getItem("_id"),
      createAt: Date.now(),
    });
    setShowModal(false);
  }

  useEffect(() => {}, showModal);

  useEffect(() => {
    fetch(GET_BOARD_LIST_API, {
      mode: "cors",
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setBoards(res))
      .catch((err) => {
        console.log(err);
      });
  }, [boards]);

  useEffect(() => {
    if (Object.keys(createRequest).length > 0) {
      fetch(CREATE_BOARD_API, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: createRequest.name,
          description: createRequest.description,
          createdBy: createRequest.createdBy,
          createdAt: createRequest.createdAt,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.result === 201) {
            setBoards(res.boardList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [createRequest]);

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
        onClick={() => setShowModal(true)}
      ></img>
    </div>
  );
  const boardList = boards.map((board) => {
    return (
      <div className="boardItems">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{board.name}</Card.Title>
            <Card.Text>{board.description}</Card.Text>
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
              onSubmit={(event) => {
                handleCreateSubmit(event);
                event.preventDefault();
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
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={3}
                  placeholder="Some description about new board"
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
