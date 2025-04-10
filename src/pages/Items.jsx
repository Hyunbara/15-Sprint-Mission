import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import BestProduct from "../components/BestProducts";
import ProductList from "../components/ProductList";
import "./Items.css";

/**
 *
 * 상품 목록 페이지 컴포넌트
 * 베스트 상품 컴포넌트(BestProduct)와 전체 상품 목록 컴포넌트 (ProductList)로 구성되어있습니다.
 */
const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts("?page=1&pageSize=300&orderBy=recent").then((data) => {
      setProducts(data.list);
    });
  }, []);

  return (
    <div className="items">
      <BestProduct />
      <ProductList products={products} />
    </div>
  );
};

export default Items;
