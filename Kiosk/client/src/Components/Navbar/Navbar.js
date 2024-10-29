import React, { useState } from "react";
import "../../Styling/Navbar.css";
import SearchBar from "../Navbar/Searching";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/pairitlogo.png" alt="Logo" className="logo" />
      </Link>
      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
