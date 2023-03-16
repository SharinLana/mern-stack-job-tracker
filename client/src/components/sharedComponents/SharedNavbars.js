import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SmallSidebar, LargeSidebar } from "./navbars/index";

const SharedNavbars = () => {
  return (
    <div>
      <Navbar />
      <SmallSidebar />
      <LargeSidebar />
      <>
      <Outlet/>
      </>
    </div>
  );
};

export default SharedNavbars;
