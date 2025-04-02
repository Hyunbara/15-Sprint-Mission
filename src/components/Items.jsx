import { useEffect, useState } from "react";
import { getProduct } from "../api/productApi";

const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProduct();
        console.log("data", data);
        setProducts(data.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>ID: {product.id}</p>
            <p>Name: {product.name}</p>
            <img src={product.images[0]} alt={product.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
