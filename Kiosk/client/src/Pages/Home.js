import React from "react";
import Map from "../Components/Map";
import Title from "../Components/Title";
import EventTitle from "../Components/EventTitle";
import Search from "../Components/SearchComponents/Search";
import "../Styling/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="event-container">
        <EventTitle />
      </div>
      <div className="title-container">
        <Title />
        <Search />
        <div className="map-microphone-container">
          <Map />
        </div>
      </div>
    </div>
  );
}
