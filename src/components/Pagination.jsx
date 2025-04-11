import "./Pagination.css";

/**
 * 페이징 처리를 하는 컴포넌트입니다.
 * 현재 페이지를 기준으로 그룹화 시켜 한 그룹당 5개의 페이지를 보여줍니다.
 *  선택된 페이지를 클릭 시 페이지 번호를 상위 컴포넌트로 전달합니다.
 *  파라미터 (currentPage: 현재 페이지 / totalPage: 전체 페이지 수 / onPageChange: 페이지 클릭 시 실행하는 함수)
 */
const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  // 5개씩 자르기위한 그룹의 크기(한 그룹당 5개).
  const pageGroupSize = 5;

  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);

  // 현재 페이지 그룹의 시작 번호
  const startPage = currentGroup * pageGroupSize + 1;

  const endPage = Math.min(startPage + pageGroupSize - 1, totalPage);

  const pageButtons = [];

  // 이전 페이지 그룹으로 이동하는 버튼
  pageButtons.push(
    <button key="prev" onClick={() => onPageChange(Math.max(1, startPage - pageGroupSize))} className="pagination__button">
      &lt;
    </button>
  );

  // 그룹 안의 페이지 번호들
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button key={i} onClick={() => onPageChange(i)} className="pagination__button">
        {i}
      </button>
    );
  }

  // 다음 그룹 페이지로 이동하는 버튼
  if (endPage < totalPage) {
    pageButtons.push(
      <button key="next" onClick={() => onPageChange(endPage + 1)} className="pagination__button">
        &gt;
      </button>
    );
  }

  return <div className="pagination">{pageButtons}</div>;
};

export default Pagination;
