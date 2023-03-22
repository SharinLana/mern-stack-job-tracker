import React from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../../../assets/wrappers/Navbar";
import { useAppContext } from "../../../context/appContext";

const Navbar = () => {
  const { toggleSidebar, user } = useAppContext();

  return (
    <Wrapper>
      <div className="nav-container">
        <button className="nav-btn" onClick={toggleSidebar}>
          <FaAlignLeft size={25} color={"#716F81"} />
        </button>

        <h2>Dashboard</h2>

        <button className="user-btn">
          <FaUserCircle size={20} />
          <span className="user-name">{user.firstName}</span>
          <FaCaretDown size={20} />
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
