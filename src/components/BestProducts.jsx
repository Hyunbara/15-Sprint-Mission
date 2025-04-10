import { getProducts } from "../api/productApi";
import { useState, useEffect } from "react";
import "./BestProducts.css";

const BestProduct = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4); // default pc

  useEffect(() => {
    getProducts("?page=1&pageSize=4&orderBy=favorite").then((data) => {
      setBestProducts(data.list);
    });
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        // mobile
        setVisibleCount(1);
      } else if (width <= 1199) {
        // tablet
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount); // resize 시 eventListener

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <section className="best-products">
      <h3 className="best-products__title">베스트 상품</h3>
      <div className="best-products__grid">
        {bestProducts.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="best-products__card">
            <div className="best-products__image-wrapper">
              <img src={item.images.length > 0 ? item.images[0] : ""} alt={item.name} className="best-products__image" />
            </div>
            <div className="best-products__text-group">
              <p className="best-products__title-text">{item.name}</p>
              <p className="best-products__price">{item.price.toLocaleString()}원</p>
              <p className="best-products__favorite">❤️ {item.favoriteCount}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProduct;
