import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./filters.css";
import Rating from "./Rating";
import { CartState } from "../context/Context";

export default function Filters() {
  const [rate, setRate] = useState(2);

  const {
    productState: { byStock, byFastDelivery, byRating, sort, searchQuery },
    productDispatch,
  } = CartState();

  console.log(byStock, byFastDelivery, byRating, sort, searchQuery);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHight",
            })
          }
          checked={sort === "lowToHight" ? true : false}
        />

        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "hightToLow",
            })
          }
          checked={sort === "hightToLow" ? true : false}
        />

        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => productDispatch({ type: "FILTER_BY_STOCK" })}
          checked={byStock}
        />

        <Form.Check
          inline
          label="Fast Delivery"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => productDispatch({ type: "FILTER_BY_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({ type: "FILTER_BY_Rating", payload: i + 1 })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </Button>
    </div>
  );
}
