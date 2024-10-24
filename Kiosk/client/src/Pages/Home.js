import React from "react";
import Map from "../Components/Map";
import Title from "../Components/Title";
import EventTitle from "../Components/EventTitle";
import Events from "../Components/Events";
import "../Styling/Home.css";


export default function Home() {
  return (
    <div className="home-container">
      <div className="event-container">
        <EventTitle />
        <Events />
      </div>
      <div className="map-section"> 
        <Title />
        <Map />
      </div>
    </div>
  );
}
