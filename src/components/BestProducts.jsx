import { getProducts } from "../api/productApi";
import { useState, useEffect } from "react";
import "./BestProducts.css";

const BestProduct = () => {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    getProducts("?page=1&pageSize=4&orderBy=favorite").then((data) => {
      setBestProducts(data.list);
    });
  }, []);

  return (
    <section className="best-products">
      <h3 className="best-products__title">베스트 상품</h3>
      <div className="best-products__grid">
        {bestProducts.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-card__image-wrapper">
              <img src={item.images.length > 0 ? item.images[0] : ""} alt={item.name} className="product-card__image" />
            </div>
            <div className="product-card__text-group">
              <p className="product-card__title">{item.name}</p>
              <p className="product-card__price">{item.price.toLocaleString()}원</p>
              <p className="product-card__favorite">❤️ {item.favoriteCount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProduct;
