import React from "react";

import "./pagination.css";
import { PAGINATION_OPTIONS } from "./pagination.constant";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  pageSize,
  setPageSize,
}) => {
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e?.target?.value));
    setCurrentPage(0);
  };

  const PAGE_WINDOW = 2; // pages before & after current

  const startPage = Math.max(0, currentPage - PAGE_WINDOW);
  const endPage = Math.min(totalPages - 1, currentPage + PAGE_WINDOW);

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <div className="pagination-container">
      {currentPage !== 0 && (
        <button
          className="pagination-button"
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
          }}
        >
          Prev
        </button>
      )}
      {visiblePages.map((index) => {
        const selected = currentPage === index ? "selected" : "";
        return (
          <button
            key={index}
            className={`pagination-button ${selected}`}
            onClick={() => {
              setCurrentPage(index);
            }}
          >
            {index + 1}
          </button>
        );
      })}
      {currentPage !== totalPages - 1 && (
        <button
          className="pagination-button"
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      )}

      <div className="page-size">
        <label>Results Per Page:</label>
        <select
          className="page-select"
          value={pageSize}
          onChange={handlePageSizeChange}
        >
          {PAGINATION_OPTIONS.map((pageOption) => {
            return (
              <option key={pageOption} value={pageOption}>
                {pageOption}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
