import React from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAppContext } from "../context/appContext";

const PageBtnsContainer = () => {
  const { numOfPages, page } = useAppContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  return (
    <div>
      <button>
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div>
        {pages.map((pageNumber) => {
          return (
            <button type="button" key={pageNumber}>
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button>
        Next
        <HiChevronDoubleRight />
      </button>
    </div>
  );
};

export default PageBtnsContainer;
