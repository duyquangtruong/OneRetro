import Header from "../header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./boardDetail.css";
import AddButton from "../../images/add.png";
import EditButton from "../../images/edit.png";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
const GET_ALL_CARD_API = "http://localhost:3001/boards/detail";
const CARD_TYPE_WENTWELL = 0;
const CARD_TYPE_TOIMPROVE = 1;
const CARD_TYPE_ACTIONITEMS = 2;
const NUMBER_OF_COLUMN = 3;

function BoardDetail() {
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

  useEffect(() => {
    fetch(GET_ALL_CARD_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((res) => {
        setWentWellCards(res.wentWellCards);
        setToImproveCards(res.toImproveCards);
        setActionItemsCards(res.actionItemsCards);
      });
  }, []);

  const wentWellList = wentWellCards.map((card, index) => {
    return (
      <Row className="justify-content-center mb-3">
        {" "}
        <Card body style={{ width: "95%" }}>
          <Row>
            <Col sm={11}>{card.content}</Col>
            <Col sm={1}>
              <img src={EditButton} style={{ width: "10px" }} />
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
              <img src={EditButton} style={{ width: "10px" }} />
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
              <img src={EditButton} style={{ width: "10px" }} />
            </Col>
          </Row>
        </Card>
      </Row>
    );
  });

  function handleAddCard(event) {
    const cardType = event.currentTarget.id;
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
          onClick={handleAddCard}
        />
      </Col>
    );
  }

  return (
    <div>
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

      <Row>
        <Col className="addButton">
          <img src={AddButton} className="addImage" />
        </Col>
        <Col className="addButton">
          <img src={AddButton} className="addImage" />
        </Col>
        <Col className="addButton">
          <img src={AddButton} className="addImage" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Row className="justify-content-center mb-3">
            {" "}
            <Card body style={{ width: "95%", height: "auto" }}>
              <Row>
                <Col sm={11}>
                  <Row>
                    <textarea
                      className="contentCard"
                      onInput={(event) => {
                        event.currentTarget.style.height =
                          event.currentTarget.scrollHeight + "px";
                      }}
                      readOnly
                    >
                      askjdhaskdhawiudhuiwahdiuawdhaiuwhdiawhdiuaw asdas d as da
                      hdiuawhdihawdiuhaiwdhwiaudhaiwudhiuawhdiuwahdiuawhdiuahwdiuhawiudhawidhaiwdhai
                    </textarea>
                  </Row>
                </Col>
                <Col sm={1}>
                  <img src={EditButton} className="editButton" />
                </Col>
              </Row>
              <Row hidden={true} className="mt-2">
                <Button className="ml-2">Done</Button>
                <Button variant="danger" className="ml-auto mr-2">
                  Delete
                </Button>
              </Row>
            </Card>
          </Row>
        </Col>
        <Col>
          {" "}
          <Row className="justify-content-center mb-3">
            {" "}
            <Card body style={{ width: "95%", height: "auto" }}>
              <Row>
                <Col sm={11}>
                  <Row>
                    <textarea
                      className="contentCard"
                      onInput={(event) => {
                        event.currentTarget.style.height =
                          event.currentTarget.scrollHeight + "px";
                      }}
                    >
                      askjdhaskdhawiudhuiwahdiuawdhaiuwhdiawhdiuaw asdas d as da
                      hdiuawhdihawdiuhaiwdhwiaudhaiwudhiuawhdiuwahdiuawhdiuahwdiuhawiudhawidhaiwdhai
                    </textarea>
                  </Row>
                </Col>
                <Col sm={1}>
                  <img src={EditButton} className="editButton" />
                </Col>
              </Row>
              <Row hidden={false} className="mt-2">
                <Button className="ml-2">Done</Button>
                <Button variant="danger" className="ml-auto mr-2">
                  Delete
                </Button>
              </Row>
            </Card>
          </Row>
        </Col>
        <Col>
          {" "}
          <Row className="justify-content-center mb-3">
            {" "}
            <Card body style={{ width: "95%", height: "auto" }}>
              <Row>
                <Col sm={11}>
                  <Row>
                    <textarea
                      className="contentCard"
                      onInput={(event) => {
                        event.currentTarget.style.height =
                          event.currentTarget.scrollHeight + "px";
                      }}
                    >
                      askjdhaskdhawiudhuiwahdiuawdhaiuwhdiawhdiuaw asdas d as da
                      hdiuawhdihawdiuhaiwdhwiaudhaiwudhiuawhdiuwahdiuawhdiuahwdiuhawiudhawidhaiwdhai
                    </textarea>
                  </Row>
                </Col>
                <Col sm={1}>
                  <img src={EditButton} className="editButton" />
                </Col>
              </Row>
              <Row hidden={false} className="mt-2">
                <Button className="ml-2">Done</Button>
                <Button variant="danger" className="ml-auto mr-2">
                  Delete
                </Button>
              </Row>
            </Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BoardDetail;
