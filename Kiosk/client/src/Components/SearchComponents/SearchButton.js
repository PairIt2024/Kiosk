import React from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../../Styling/SearchStyling/SearchButton.css';

export default function SearchButton({ onSearch }) {
  return (
    <Button
      onClick={onSearch}
      variant="contained"
      style={{ backgroundColor: '#172f5e', color: 'white' }}
      className="search-button"
    >
      <SearchIcon />
    </Button>
  );
}