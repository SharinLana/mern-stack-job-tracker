import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import Wrapper from "../../../assets/wrappers/LargeNavbar";
import NavLinks from "../NavLinks";
import Logo from "../../Logo";
import { useAppContext } from "../../../context/appContext";

const LargeSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <>
      {showSidebar && (
        <Wrapper>
          <div className="logo-container">
            <Logo />
            <button className="nav-btn" onClick={toggleSidebar}>
              <FaAlignLeft size={25} color={"#2e2e41c7"} />
            </button>
          </div>

          <div className="list-container">
            <NavLinks toggleSidebar={toggleSidebar} />
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default LargeSidebar;
