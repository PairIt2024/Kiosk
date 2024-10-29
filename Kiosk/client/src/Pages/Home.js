import React from "react";
import Map from "../Components/Map";
import EventTitle from "../Components/Events/EventTitle";
import Events from "../Components/Events/Events";
import "../Styling/Home.css";


export default function Home() {
  return (
    <div className="home-container">
      <div className="event-container">
        <EventTitle />
        <Events />
      </div>
      <div className="map-section">
        <Map />
      </div>
    </div>
  );
}
