import { useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./ProductList.css";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

/**
 * 전체 상품 목록을 카드 형태로 표시하는 컴포넌트입니다.
 * 검색어 필터링, 정렬, 페이징기능 포함
 * @param {Array} products  - 전체 상품 데이터 배열
 *
 */

const ProductList = ({ products }) => {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  const nav = useNavigate(); // 페이지 이동을 위한 hook 사용

  const pageSize = 10; // 한 페이지에 보여줄 상품 수

  const totalPages = Math.ceil(products.length / pageSize);

  // option 값에 따라 정렬된 상품 리스트를 보여줌 (desc)
  const sortedProducts = [...products].sort((a, b) => {
    if (orderBy === "favorite") return b.favoriteCount - a.favoriteCount;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  // 1. 검색어에 따라 필터링된 상품 리스트 리턴
  // 2. 필터링된 상품중 현재 페이지에 해당하는 10개 추출 (ex. 3페이지면 (3-1) * 10 = 20 ~ 30번째까지 자름)
  const paginatedProducts = sortedProducts.filter((product) => product.name.includes(searchKeyword)).slice((page - 1) * pageSize, page * pageSize);

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
    setPage(1); // 정렬 바꿀 때 첫 페이지로 이동
  };

  // 검색
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
    setPage(1);
  };

  return (
    <section>
      <div className="product-list__header">
        <h3>전체 상품</h3>
        <div className="product-list__actions">
          <SearchInput onSearch={handleSearch} />
          <button onClick={() => nav("/additem")} className="add-item-button">
            <span>상품 등록하기</span>
          </button>
          <select value={orderBy} onChange={handleOrderChange} className="order-select">
            <option value="createdAt">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
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
