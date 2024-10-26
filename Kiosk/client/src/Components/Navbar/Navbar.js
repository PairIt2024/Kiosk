import React, { useState } from "react";
import "../../Styling/Navbar.css";
import SearchBar from "../Navbar/Searching";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  return (
    <div className="navbar">
      <img src="/pairitlogo.png" alt="Logo" className="logo" />
      <div className="search-bar">
        <SearchBar
          onSearch={(query) => console.log(`Searching for: ${query}`)}
        />
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
