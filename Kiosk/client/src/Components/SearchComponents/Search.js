import React, { useState } from 'react';
import { Box } from '@mui/material';
import '../../Styling/SearchStyling/SearchBar.css';
import '../../Styling/SearchStyling/SearchButton.css';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';

export default function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (onSearch) {
      onSearch(query);
    }

    console.log("Search query:", query); // Displays what the user's search query (user input) is to console
    
    const url = `http://localhost:5001/buildings/bbcroutes/${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url, {
          method: 'GET',
        });
  
        if (!response.ok) { // checks if response status is in range 200-299 (error if not)
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('Building Information:', data);
      } 
      catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }

  };

  return (
    <Box className="search-bar-container">
      <SearchBar query={query} setQuery={setQuery} />
      <SearchButton onSearch={handleSearch} />
    </Box>
  )
}