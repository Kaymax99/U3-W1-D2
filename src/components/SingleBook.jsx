import { Col, Card, Button } from "react-bootstrap";

export const SingleBook = ({ book }) => {
  return (
    <>
      <Col xs={12} md={6} lg={3} className="my-2">
        <Card>
          <Card.Img
            variant="top"
            src={book.img}
            style={{ aspectRatio: 1 / 1.5 }}
          />
          <Card.Body>
            <Card.Title className="text-truncate fs-4">{book.title}</Card.Title>
            <div className="d-flex align-items-center justify-content-center">
              <Card.Text className="mb-0 me-3">{book.price}€</Card.Text>
              <Button variant="primary">Buy Now!</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};