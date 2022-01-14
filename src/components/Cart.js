import { CartState } from "../context/Context";
import {
  ListGroup,
  Button,
  ListGroupItem,
  Row,
  Col,
  Form,
  Image,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((product) => (
            <ListGroupItem key={product.id}>
              <Row>
                <Col md={2}>
                  <Image src={product.image} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{product.name}</span>
                </Col>
                <Col md={2}>
                  <span>${product.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={product.rating} />
                </Col>
                <Col md={2}>
                  <Form.Select
                    value={product.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: product.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(product.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Button
                    variant="light"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: product })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ${total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
