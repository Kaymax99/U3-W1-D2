import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import fantasy from "../data/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container className="p-0">
      <Row>
        {fantasy.map((book) => (
          <Col xs={12} md={6} lg={3} className="my-2">
            <Card>
              <Card.Img
                variant="top"
                src={book.img}
                style={{ aspectRatio: 1 / 1.5 }}
              />
              <Card.Body>
                <Card.Title className="text-truncate fs-4">
                  {book.title}
                </Card.Title>
                <div className="d-flex align-items-center justify-content-center">
                  <Card.Text className="mb-0 me-3">{book.price}€</Card.Text>
                  <Button variant="primary">Buy Now!</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;

/*  const AllTheBooks = () => {
  return (
    <Container className="d-flex flex-wrap justify-content-center">
      {fantasy.map((book) => (
        <Card className="m-3">
          <Card.Img
            variant="top"
            src={book.img}
            style={{ aspectRatio: 1 / 1.5 }}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price}€</Card.Text>
            <Button variant="primary">Buy Now!</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};*/
