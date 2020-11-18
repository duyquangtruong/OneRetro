import Header from "../header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./boardDetail.css";
import AddButton from "../../images/add.png";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

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
          <img src={AddButton} style={{ width: "8%" }} />
        </Col>
        <Col className="addButton">
          <img src={AddButton} width="8%" />
        </Col>
        <Col className="addButton">
          <img src={AddButton} width="8%" />
        </Col>
      </Row>

      <Row>
        <Col>
          <Row className="justify-content-center">
            {" "}
            <Card body style={{ width: "95%" }}>
              {" "}
              row1
            </Card>
          </Row>
          <Row className="justify-content-center">
            {" "}
            <Card body style={{ width: "95%" }}>
              {" "}
              row2
            </Card>
          </Row>
          <Row className="justify-content-center">
            {" "}
            <Card body style={{ width: "95%" }}>
              {" "}
              row3
            </Card>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-center">
            {" "}
            <Card body style={{ width: "95%" }}>
              {" "}
              row1
            </Card>
          </Row>
          <Row className="justify-content-center">
            {" "}
            <Card body style={{ width: "95%" }}>
              {" "}
              row2
            </Card>
          </Row>
          <Row className="justify-content-center">
            {" "}
            <Card body style={{ width: "95%" }}>
              {" "}
              row3
            </Card>
          </Row>
        </Col>
        <Col className="col-md">
          <Row className="justify-content-center">
            {" "}
            <Card body> row1</Card>
          </Row>
          <Row className="justify-content-center">
            {" "}
            <Card body className="">
              {" "}
              row2
            </Card>
          </Row>
          <Row className="justify-content-center">
            {" "}
            <Card body> row3</Card>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default BoardDetail;
