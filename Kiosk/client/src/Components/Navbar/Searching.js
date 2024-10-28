// SearchBar.js
import React, { useState } from "react";
import "../../Styling/SearchBar.css";
import axios from "axios";
import { set } from "mongoose";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [courseResults, setCourseResults] = useState(null);
  const [routeResults, setRouteResults] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handlecourseSearch = async () => {
    try {
      let url;
      if (query.match(/[a-zA-Z]/)) {
        // If input contains letters, assume course search
        url = `http://localhost:5001/courses/search?query=${encodeURIComponent(
          query
        )}`;
      }

      const response = await axios.get(url);
      setResults(response.data);
      console.log("Results:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setCourseResults([]);
    }
  };
  const handlerouteSearch = async () => {
    try {
      let url;
      if (query.match(/[a-zA-Z]/)) {
        url = `http://localhost:5001/routes/route?query=${encodeURIComponent(
          query.toLowerCase()
        )}`;
      }

      const response = await axios.get(url);
      setResults(response.data);
      console.log("Results:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setRouteResults([]);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    handlecourseSearch();
    handlerouteSearch();
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
