import "./ProductCard.css";
import noImage from "../assets/noImage.jpg";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        {<img src={item.images.length > 0 ? item.images[0] : noImage} alt={item.name} className="product-card__image" />}
      </div>
      <div className="product-card__text-group">
        <p className="product-card__title">{item.name}</p>
        <p className="product-card__price">{item.price.toLocaleString()}원</p>
        <p className="product-card__favorite">❤️ {item.favoriteCount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
