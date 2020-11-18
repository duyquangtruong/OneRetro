import Header from "../header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./boardDetail.css";
import AddButton from "../../images/add.png";
import EditButton from "../../images/edit.png";
import { Row, Col, Card, Button, Form, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const GET_ALL_CARD_API = "http://localhost:3001/boards/detail/";
const CREATE_NEW_CARD_API = "http://localhost:3001/boards/detail/newcard";
const CARD_TYPE_WENTWELL = 0;
const CARD_TYPE_TOIMPROVE = 1;
const CARD_TYPE_ACTIONITEMS = 2;
const NUMBER_OF_COLUMN = 3;

function BoardDetail() {
  let { boardId } = useParams();
  sessionStorage.setItem("boardId", boardId);
  return (
    <div>
      <Header />
      <div className="page-content">
        <CardList />
      </div>
    </div>
  );
}

function CardList() {
  const [wentWellCards, setWentWellCards] = useState([{}]);
  const [toImproveCards, setToImproveCards] = useState([{}]);
  const [actionItemsCards, setActionItemsCards] = useState([{}]);
  const [newCardSubmit, setNewCardSubmit] = useState({ type: -1 });
  const [showModal, setShowModal] = useState(false);
  const boardId = sessionStorage.getItem("boardId");

  function fetchAllCards() {
    debugger;
    const test = GET_ALL_CARD_API + boardId.toString();
    fetch(GET_ALL_CARD_API + boardId.toString(), {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setWentWellCards(res.wentWellCards);
        setToImproveCards(res.toImproveCards);
        setActionItemsCards(res.actionItemsCards);
      });
  }

  useEffect(() => {
    fetchAllCards();
  }, []);

  useEffect(() => {
    if (newCardSubmit.type !== -1) {
      if (showModal === false) {
        setShowModal(true);
      } else {
        setShowModal(false);
        fetch(CREATE_NEW_CARD_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCardSubmit),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.result === 201) {
              fetchAllCards();
            } else {
              console.log(response.result);
            }
          });
        setNewCardSubmit({ type: -1 });
      }
    }
  }, [newCardSubmit]);

  const wentWellList = wentWellCards.map((card, index) => {
    return (
      <Row className="justify-content-center mb-3">
        {" "}
        <Card body style={{ width: "95%" }}>
          <Row>
            <Col sm={11}>{card.content}</Col>
            <Col sm={1}>
              <img src={EditButton} style={{ width: "15px" }} />
            </Col>
          </Row>
        </Card>
      </Row>
    );
  });

  const toImpoveList = toImproveCards.map((card, index) => {
    return (
      <Row className="justify-content-center mb-3">
        {" "}
        <Card body style={{ width: "95%" }}>
          <Row>
            <Col sm={11}>{card.content}</Col>
            <Col sm={1}>
              <img src={EditButton} style={{ width: "15px" }} />
            </Col>
          </Row>
        </Card>
      </Row>
    );
  });

  const actionItemsList = actionItemsCards.map((card, index) => {
    return (
      <Row className="justify-content-center mb-3">
        {" "}
        <Card body style={{ width: "95%" }}>
          <Row>
            <Col sm={11}>{card.content}</Col>
            <Col sm={1}>
              <img src={EditButton} style={{ width: "15px" }} />
            </Col>
          </Row>
        </Card>
      </Row>
    );
  });

  function handleAddCard(event) {
    setNewCardSubmit({ type: event.currentTarget.id });
  }
  function handleCreateSubmit(event) {
    setNewCardSubmit({
      type: newCardSubmit.type,
      content: event.currentTarget.content.value,
      boardBelongTo: boardId,
      createdAt: Date.now(),
      createdBy: sessionStorage.getItem("_id"),
    });
  }

  let addButtons = [];
  let i;
  for (i = 0; i < NUMBER_OF_COLUMN; i++) {
    addButtons.push(
      <Col className="addButton">
        <img
          src={AddButton}
          className="addImage"
          id={i}
          onClick={(event) => {
            handleAddCard(event);
          }}
        />
      </Col>
    );
  }

  return (
    <div>
      <div>
        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title className="m-auto">Create Card</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form
              onSubmit={(event) => {
                handleCreateSubmit(event);
                event.preventDefault();
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" name="content" rows={3} required />
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
      <Row>
        <Col>
          <h2>Went Well</h2>
        </Col>
        <Col>
          <h2>To Improve</h2>
        </Col>
        <Col>
          <h2>Action Items</h2>
        </Col>
      </Row>

      <Row>{addButtons}</Row>

      <Row>
        <Col>{wentWellList}</Col>
        <Col>{toImpoveList}</Col>
        <Col>{actionItemsList}</Col>
      </Row>
    </div>
  );
}

export default BoardDetail;
