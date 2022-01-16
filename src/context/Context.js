import { createContext, useReducer, useContext } from "react";
import products from "../products";
import { cartReducer, productReducer } from "./Reducers";

export const Cart = createContext();

function Context({ children }) {
  console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
