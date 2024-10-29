import React, { useState } from "react";
import "../../Styling/Navbar.css";
import SearchBar from "../Navbar/Searching";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/">
        <img src="/pairitlogo.png" alt="Logo" className="logo" />
      </Link>
      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="navbar-links">
        <Link to="/" className={`navbar-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
        <Link to="/about" className={`navbar-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
        <Link to="/contact" className={`navbar-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
