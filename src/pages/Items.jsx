import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.list);
    });
  }, []);

  return (
    <div>
      <h2>상품 리스트</h2>
      {products.map((item) => (
        <div key={item.id}>
          <h3>제목: {item.name}</h3>
          {item.images.length > 0 && <img src={item.images[0]} alt={item.name} style={{ width: "221px", height: "221px", borderRadius: "16px" }} />}
          <p>설명: {item.description}</p>
          <p>{item.price}원</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
