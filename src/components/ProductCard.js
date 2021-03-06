import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import "./ProductCard.css";
import { CartState } from "../context/Context";

export default function ProductCard({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

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
            <Rating rating={product.rating} />
          </Card.Subtitle>

          {cart.some((p) => p.id === product.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
              disabled={!product.inStock}
            >
              {!product.inStock ? "Out of Stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
