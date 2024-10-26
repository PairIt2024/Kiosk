import React from 'react';
import { TextField, Box } from '@mui/material';
import '../../Styling/SearchStyling/SearchBar.css';

export default function SearchBar({ query, setQuery }) {
  return (
    <Box className="search-bar-container">
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter class information..."
        variant="outlined"
        className="search-input"
      />
    </Box>
  );
}