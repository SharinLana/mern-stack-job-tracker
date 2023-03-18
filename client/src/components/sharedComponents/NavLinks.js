import React from "react";
import { NavLink } from "react-router-dom";
import iconLinks from "./IconLinks";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <>
      {iconLinks.map((item) => {
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
            onClick={toggleSidebar}
          >
            <span className="icon">{item.icon}</span>
            {item.text}
          </NavLink>
        );
      })}
    </>
  );
};

export default NavLinks;
