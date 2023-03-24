import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAppContext } from "../context/appContext";

const PageBtnsContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };

  return (
    <div>
      <button type="button" onClick={prevPage}>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div>
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type="button" onClick={nextPage}>
        Next
        <HiChevronDoubleRight />
      </button>
    </div>
  );
};

export default PageBtnsContainer;
