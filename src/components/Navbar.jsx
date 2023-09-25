import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const handleActiveLink = ({ isActive }) => {
    return isActive ? { color: "red" } : null;
  };

  return (
   
    <nav className="navBar">
      <ul>
        <li> 
      <NavLink style={handleActiveLink} to="/">
        Home
      </NavLink>
      </li>
      <li> 
      <NavLink style={handleActiveLink} to="/projects">
        Projects
      </NavLink>
      </li>
      </ul>
    </nav>
  );
}

export default Navbar;
