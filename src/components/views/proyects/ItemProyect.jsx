import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import MenuKebab from "./MenuKebab";

const ItemProyect = () => {
  return (
    <Card>
      <Container>
        <Row>
          <Col xs={8}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
            </Card.Body>
          </Col>
          <Col>
          <MenuKebab></MenuKebab>
          </Col>
          <Row>
            <Col xs={4}>
              <Image src="holder.js/171x180" roundedCircle />
            </Col>
            <Col xs={8}>
            <Card.Text>
            Nombre
          </Card.Text>
            </Col>
          </Row>
        </Row>
      </Container>
    </Card>
  );
};

export default ItemProyect;
