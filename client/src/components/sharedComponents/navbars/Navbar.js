import React, { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../../assets/wrappers/Navbar";
import { useAppContext } from "../../../context/appContext";

const Navbar = () => {
  const { toggleSidebar, user, logoutUser } = useAppContext();
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const logoutBtnHandler = () => {
    logoutUser();
    navigate("/landing");
  };

  return (
    <Wrapper>
      <div className="nav-container">
        <button className="nav-btn" onClick={toggleSidebar}>
          <FaAlignLeft size={25} color={"#716F81"} />
        </button>

        <h2>Dashboard</h2>

        <button
          className="user-btn"
          onMouseOver={() => setShowLogout(true)}
          onMouseOut={() => setShowLogout(false)}
        >
          <FaUserCircle size={20} />
          <span className="user-name">{user?.firstName}</span>
          <FaCaretDown size={20} />
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <div onClick={logoutBtnHandler} className="dropdown-btn">
              logout
            </div>
          </div>
        </button>
      </div>
    </Wrapper>
  );
};

export default Navbar;
