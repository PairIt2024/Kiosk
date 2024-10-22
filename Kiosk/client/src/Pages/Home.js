import React from "react";
import Map from "../Components/Map";
import Title from "../Components/Title";
import EventTitle from "../Components/EventTitle";
import SearchBar from "../Components/SearchBar";
import "../Styling/Home.css";

export default function Home() {
  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Implement search functionality here
  };
  return (
    <div className="home-container">
      <div className="navbar-container">

      </div>
      <div className="event-container">
        <EventTitle />
      </div>
      <div className="title-container">
        <Title />
        <SearchBar onSearch={handleSearch} />
        <div className="map-microphone-container">
          <Map />
        </div>
      </div>
    </div>
  );
}
