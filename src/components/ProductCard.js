import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {product.price}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          <Button variant="danger">Remove from cart</Button>
          <Button disabled={!product.inStock}>
            {!product.inStock ? "Out of Stock" : "Add to cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
