import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import BestProduct from "../components/BestProducts";
import ProductList from "../components/ProductList";

const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("?page=1&pageSize=300&orderBy=recent").then((data) => {
      setProducts(data.list);
    });
  }, []);

  return (
    <div>
      <h2>상품 리스트</h2>
      <BestProduct />
      <ProductList products={products} />
    </div>
  );
};

export default Items;
