import React, { useState, useEffect } from "react";
import "../../Styling/SearchBar.css";
import axios from "axios";

const SearchBar = ({ onSearch, suggestions }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    if (query.length === 0) {
      setShowSuggestions(false);
    }
  }, [query]);




const handleInputChange = (e) => {
  const input = e.target.value;
  setQuery(input);
  if (input.trim().length > 0) {
    onSearch(input);
    setShowSuggestions(true);
  } else {
    setShowSuggestions(false);
  }
};

const handleSuggestionClick = (suggestion) => {
  setQuery(suggestion);
  setShowSuggestions(false);
  onSearch(suggestion);
};

return (
  <div className="search-container">
    <form className="search-bar" onSubmit={(e) => e.preventDefault}>
      <input
        type="text"
        placeholder="Enter a building name"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
      />
      <button type="submit">Search</button>
    </form>
    {showSuggestions && suggestions.length > 0 && (
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            className={index === highlightedIndex ? "highlighted" : ""}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )}
  </div>
);
}
export default SearchBar;
