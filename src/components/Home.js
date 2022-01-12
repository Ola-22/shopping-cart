import ProductCard from "./ProductCard";
import "./home.css";
import Filters from "./Filters";
import { CartState } from "../context/Context";

export default function Home() {
  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}
