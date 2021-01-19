import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/home">
        <button className="nav-button">Home</button>
      </Link>
      <Link to="/get-material">
        <button className="nav-button">Get Some New Material</button>
      </Link>
      <Link to="/my-set">
        <button className="nav-button">My Set</button>
      </Link>
      <h1>DevWit</h1>
    </nav>
  );
}

export default NavBar;
