const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageButtons = [];

  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button key={i} onClick={() => onPageChange(i)}>
        {i}
      </button>
    );
  }

  return <div>{pageButtons}</div>;
};

export default Pagination;
