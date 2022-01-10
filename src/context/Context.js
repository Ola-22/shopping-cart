import { createContext } from "react";

export const Cart = createContext();

export default function Context({ children }) {
  return <Cart.Provider>{children}</Cart.Provider>;
}
