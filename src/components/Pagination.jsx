//import "./Pagination.css";

// currentPage: 현재 보고 있는 페이지 번호
// totalPages: 전체 페이지 수
// onPageChange: 페이지를 바꿀 때 마다 호출되는 함수 (setPage)
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // 5개씩 자르기위한 그룹의 크기(한 그룹당 5개).
  const pageGroupSize = 5;

  //현재 페이지 그룹. ex. 현재 페이지가 11인 경우, 11은 2번째 그룹의 시작 페이지. ~ 15
  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);

  // 현재 페이지 그룹의 시작 번호
  const startPage = currentGroup * pageGroupSize + 1;

  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const pageButtons = [];

  // 이전 페이지 그룹으로 이동하는 버튼
  pageButtons.push(
    <button key="prev" onClick={() => onPageChange(Math.max(1, startPage - pageGroupSize))} className="pagination-arrow">
      &lt;
    </button>
  );

  // 그룹 안의 페이지 번호들
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button key={i} onClick={() => onPageChange(i)} className={i === currentPage ? "pagination-button active" : "pagination-button"}>
        {i}
      </button>
    );
  }

  // 다음 그룹 페이지로 이동하는 버튼
  if (endPage < totalPages) {
    pageButtons.push(
      <button key="next" onClick={() => onPageChange(endPage + 1)} className="pagination-arrow">
        &gt;
      </button>
    );
  }

  return <div className="pagination">{pageButtons}</div>;
};

export default Pagination;
