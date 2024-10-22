import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../Styling/SearchBar.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (onSearch) {
      onSearch(query);
    }
    console.log("Search query:", query); // TEMPORARY: Checks what query is
    // Example of sending the query to a backend as a plain string
    try {
        const response = await fetch('https://REPLACE-ME-WITH-BACKEND-ENDPOINT.com/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain', // tell the server to expect a plain string
          },
          body: query, // Send the query as a plain string
        });
  
        if (!response.ok) { // checks if response status is in range 200-299 (error if not)
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        console.log('Search results:', data);
      } 
      catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
  };

  

return (
    <Box className="search-bar-container">
        <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Updates query to hold user text input when pressing search button
            placeholder="Enter class information..."
            variant="outlined"
            className="search-input"
        />
        <Button
            onClick={handleSearch}
            variant="contained"
            style={{ backgroundColor: '#172f5e', color: 'white' }} // Change the color here
            className="search-button"
        >
            <SearchIcon />
        </Button>
    </Box>
);
}