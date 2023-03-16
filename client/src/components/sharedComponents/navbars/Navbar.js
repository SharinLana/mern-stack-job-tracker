import React from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../../../assets/wrappers/Navbar";
import { useAppContext } from "../../../context/appContext";

const Navbar = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className="nav-container">
        <button className="nav-btn" onClick={toggleSidebar}>
          <FaAlignLeft size={25} color={"#2e2e41"} />
        </button>

        <h2>Dashboard</h2>

        <button className="user-btn">
          <FaUserCircle size={20} />
          <span className="user-name">user name</span>
          <FaCaretDown size={20} />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
