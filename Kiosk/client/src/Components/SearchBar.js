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
  };

return (
    <Box className="search-bar-container">
        <TextField
            value={query} // query holds user's text input
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