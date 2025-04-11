import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import "./ProductList.css";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

/**
 *  전체 상품 목록을 카드 형태로 표시하는 컴포넌트 입니다.
 *  검색어 기능, 정렬, 페이징 기능이 포함되어있습니다.
 */
const ProductList = ({ products }) => {
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  const nav = useNavigate(); // 페이지 이동을 위한 hook 사용

  const pageSize = 10; // 한 페이지에 보여줄 상품 수

  const [responsivePageSize, setResponsivePageSize] = useState(10); // 기본값 10

  // option 값에 따라 정렬된 상품 리스트를 보여줌 (desc)
  const sortedProducts = [...products].sort((a, b) => {
    if (orderBy === "favorite") return b.favoriteCount - a.favoriteCount;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const filteredProducts = sortedProducts.filter((product) => product.name.includes(searchKeyword));

  useEffect(() => {
    const updatePageSize = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setResponsivePageSize(4);
      } else if (width <= 1199) {
        setResponsivePageSize(6);
      } else {
        setResponsivePageSize(10);
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => {
      // 메모리 누수가 일어 날 수 있으니 참조 해제
      window.removeEventListener("resize", updatePageSize);
    };
  }, []);

  // 페이징 처리
  const paginatedProducts = filteredProducts.slice((page - 1) * responsivePageSize, page * responsivePageSize);
  const totalPage = Math.ceil(filteredProducts.length / responsivePageSize);

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
          <button onClick={() => nav("/additem")} className="product-list__add-button">
            <span>상품 등록하기</span>
          </button>
          <select value={orderBy} onChange={handleOrderChange} className="product-list__select">
            <option value="createdAt">최신순</option>
            <option value="favorite">좋아요순</option>
          </select>
        </div>
      </div>

      <div className="product-list__grid">
        {paginatedProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      <div>
        <Pagination currentPage={page} totalPage={totalPage} onPageChange={(newPage) => setPage(newPage)} />
      </div>
    </section>
  );
};

export default ProductList;
