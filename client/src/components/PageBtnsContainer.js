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
      <button>Prev</button>
      <div></div>
      <button>Next</button>
    </div>
  );
};

export default PageBtnsContainer;
