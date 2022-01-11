import products from "../products";
import ProductCard from "./ProductCard";
import "./home.css";
import Filters from "./Filters";

export default function Home() {
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
