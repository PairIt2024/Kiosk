import React from "react";
import Map from "../Components/Map";
import EventTitle from "../Components/EventTitle";
import Events from "../Components/Events";
import "../Styling/Home.css";
import SearchResults from "../Components/SearchResults";

export default function Home() {
  const [otherbuildingName, setotherBuildingName] = useState("");
  return (
    <div className="home-container">
      <div className="event-container">
        <EventTitle />
        <Events />
      </div>
      <div className="map-section">
        <Map buildingName={{ otherbuildingName }} />
        <SearchResults setBuildingName={setotherBuildingName} />
      </div>
    </div>
  );
}
