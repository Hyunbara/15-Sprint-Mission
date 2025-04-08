import { getProducts } from "../api/productApi";
import { useState, useEffect } from "react";

const BestProduct = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    getProducts("?page=1&pageSize=4&orderBy=favorite").then((data) => {
      setBestProducts(data.list);
    });
  }, []);

  return (
    <section>
      <h3>🔥 베스트 상품 TOP 4</h3>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {bestProducts.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "12px",
              width: "200px",
            }}
          >
            {item.images.length > 0 && <img src={item.images[0]} alt={item.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />}
            <h4>{item.name}</h4>
            <p>{item.price}원</p>
            <p>❤️ {item.favoriteCount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProduct;
