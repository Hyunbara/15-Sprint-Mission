import { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./ProductList.css";

const ProductList = ({ products }) => {
  /*
    전체 상품 리스트 보여주기
    상품 정렬: 최신순 / 좋아요 순
    카드 형태로 출력 (컴포넌트 새로 빼서)
  */
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const pageSize = 10; // 한 페이지에 보여줄 상품 수

  const totalPages = Math.ceil(products.length / pageSize);

  // option 값에 따라 정렬된 상품 리스트를 보여줌 (desc)
  const sortedProducts = [...products].sort((a, b) => {
    if (orderBy === "favorite") return b.favoriteCount - a.favoriteCount;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // 1~10, 11~20, ... 순으로 페이지 안의 데이터를 보여줌
  const paginatedProducts = sortedProducts.slice((page - 1) * pageSize, page * pageSize);

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
    setPage(1); // 정렬 바꿀 때 첫 페이지로 이동
  };

  return (
    <section>
      <div>
        <h3>전체 상품</h3>
        <select value={orderBy} onChange={handleOrderChange}>
          <option value="createdAt">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </div>

      <div className="product-list-grid">
        {paginatedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <div>
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={(newPage) => setPage(newPage)} />
      </div>
    </section>
  );
};

export default ProductList;
