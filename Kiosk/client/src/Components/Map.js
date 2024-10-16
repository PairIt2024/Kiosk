import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../Styling/Map.css";

//add token
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const currentmarker = useRef(null);
  currentmarker.className = "marker";
  const [currentlocation, setCurrentLocation] = useState(false);

  useEffect(() => {
    if (map.current) return;

    //initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-121.8811, 37.3352],
      zoom: 16.3,
      bearing: -30.5,
      dragPan: false, //disable dragging
      scrollZoom: false, //disable zooming
      doubleClickZoom: false, //disable double click zoom
    });
  }, []);
  //get user's location
  //only get location after a start button is pressed
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates = [
            position.coords.longitude,
            position.coords.latitude,
          ];

          //center map and stop moving animation
          
          map.current.setZoom(16.3);

          //add marker for user's current location
          if (currentmarker.current) {
            currentmarker.current.remove();
          }

          const el = document.createElement("div");
          el.className = "marker"; 

          currentmarker.current = new mapboxgl.Marker({"color": "#ff0000"})
            .setLngLat(userCoordinates)
            .addTo(map.current);

          currentmarker.current = new mapboxgl.Marker(el)
            .setLngLat(userCoordinates)
            .addTo(map.current);

          //disable all map movements
          map.current.dragPan.disable();
          map.current.scrollZoom.disable();
          map.current.doubleClickZoom.disable();
          map.current.boxZoom.disable();
          map.current.keyboard.disable();
          map.current.touchZoomRotate.disable();

          setCurrentLocation(true);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    //set "Location Set" to the microphone button
    <div className="outercontainer">
      <div ref={mapContainer} className="container" />
      <button
        className="start-button"
        onClick={getUserLocation}
        disabled={currentlocation}
      >
        {currentlocation ? "Location Set" : "START"}
      </button>
    </div>
  );
}
