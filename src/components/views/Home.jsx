import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>My Proyects</Col>
        <Col><Button variant="danger">Danger</Button></Col>
      </Row>
    </Container>
  );
};

export default Home;
