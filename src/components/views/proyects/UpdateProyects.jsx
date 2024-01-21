import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpdateProyects = () => {
    return (
        <Container>
        <Row>
        <Col><i className="bi bi-arrow-left"> Back</i></Col>
        <Col><h4 className="fw-bold">Edit Proyect</h4></Col>
      </Row>
      <Form>
        <Form.Group className="mb-3" controlId="nameProyect">
          <Form.Label>Name Proyect</Form.Label>
          <Form.Control type="text" placeholder="Landing Page" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descriptionProyect">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Some description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="manager">
            <Form.Label>Proyect Manager</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Walt Cosani</option>
            <option value="1"> Manager One</option>
            <option value="2"> Manager Two</option>
            <option value="3"> Manager Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="assigned">
            <Form.Label>Assigned to</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Ignacio Truffa</option>
            <option value="1">person One</option>
            <option value="2">person Two</option>
            <option value="3">person Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Enabled</option>
            <option value="1">Status one</option>
            <option value="2">Status Two</option>
            <option value="3">Status Three</option>
          </Form.Select>
        </Form.Group>

        <Button variant="btn btn-danger" type="submit">
          Save changes
        </Button>
      </Form>
    </Container>
    );
};

export default UpdateProyects;