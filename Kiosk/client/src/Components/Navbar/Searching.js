import React, { useState, useEffect } from "react";
import "../../Styling/SearchBar.css";
import axios from "axios";
import ResultsPopup from "../SearchResults.js";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // console.log("Updated State Results:", results);
  }, [results]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCourseSearch = async () => {
    try {
      const url = `http://localhost:5001/courses/search?query=${encodeURIComponent(
        query
      )}`;
      const response = await axios.get(url);
      //console.log("Course Results:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching course data:", error);
      return [];
    }
  };

  const handleRouteSearch = async () => {
    try {
      const url = `http://localhost:5001/routes/route?query=${encodeURIComponent(
        query.toLowerCase()
      )}`;
      const response = await axios.get(url);
      //console.log("Route Results:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching route data:", error);
      return [];
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    try {
      const courseResults = await handleCourseSearch();
      const routeResults = await handleRouteSearch();

      const combinedResults = [...courseResults, ...routeResults];
      setResults(combinedResults);
      setShowPopup(true);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setResults([]);
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

      {showPopup && (
        <>
          <ResultsPopup results={results} onClose={closePopup} />
        </>
      )}
    </div>
  );
};

export default SearchBar;
