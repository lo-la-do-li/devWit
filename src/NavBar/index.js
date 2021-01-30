import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../devWitLogo2.png";

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
      <div className="name-logo">
        <h1>DevWit</h1>
        <img className="logo" src={logo} alt="DevWit logo laughing laptop" />
      </div>
    </nav>
  );
}

export default NavBar;
