import React from "react";
import { FaTimes } from "react-icons/fa";
import NavLinks from "../NavLinks";
import Wrapper from "../../../assets/wrappers/SmallSidebar";
import { useAppContext } from "../../../context/appContext";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext();

  return (
    <main>
      {showSidebar && (
        <Wrapper>
          <div className="sidebar-container">
            <div className="cross-btn-container">
              <button className="cross-btn" onClick={toggleSidebar}>
                <FaTimes size={25} />
              </button>
            </div>

            <div className="list-container">
              <NavLinks toggleSidebar={toggleSidebar} />
            </div>
          </div>
        </Wrapper>
      )}
    </main>
  );
};

export default SmallSidebar;
