import { createContext, useReducer, useContext } from "react";
import products from "../products";
import { cartReducer } from "./Reducers";

export const Cart = createContext();

function Context({ children }) {
  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
