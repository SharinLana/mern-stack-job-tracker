import React, { useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/PageBtnsContainer";

const PageBtnsContainer = () => {
  const { numOfPages, page, changePage, visiblePages } = useAppContext();

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

  useEffect(() => {
    changePage(page);
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <button type="button" onClick={prevPage} className="handle-btn">
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div className="page-btns-container">
        {page > 1 && <p className="dots">...</p>}
        {visiblePages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        {visiblePages[2] < numOfPages && <p className="dots">...</p>}
      </div>
      <button type="button" onClick={nextPage} className="handle-btn">
        Next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnsContainer;
