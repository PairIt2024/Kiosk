import React, { useEffect, useRef, useState } from "react";
import VoiceRecord from "../Components/VoiceRecord";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "../Styling/Map.css";

//mapbox token
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null); 
  const currentmarker = useRef(null);
  currentmarker.className = "marker";
  const [currentlocation, setCurrentLocation] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);

  //coords of SJSU campus
  const initialCoordinates = [-121.8811, 37.3352];

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-121.8811, 37.3352],
      zoom: 16.4,
      bearing: -30.5,
      dragPan: false,
      scrollZoom: false,
      doubleClickZoom: false,
    });
  }, []);

  //get user's location only get location after a start button is pressed
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoordinates = [
            position.coords.longitude,
            position.coords.latitude,
          ];

          //center map and stop moving animation

          map.current.setZoom(16.4);

          //add marker for user's current location
          if (currentmarker.current) {
            currentmarker.current.remove();
          }

          const el = document.createElement("div");
          el.className = "marker";

          currentmarker.current = new mapboxgl.Marker({ color: "#ff0000" })
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
          setIsShrinking(true);
          resetMapAndState();
        },

        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  //reset all state and map after 1 minute (60,000 ms)
  const resetMapAndState = () => {
    setTimeout(() => {
      // Remove the marker from the map
      if (currentmarker.current) {
        currentmarker.current.remove();
        currentmarker.current = null;
      }

      //reset the map center and zoom level to the initial state
      map.current.setCenter(initialCoordinates);
      map.current.setZoom(16.3);

      map.current.dragPan.disable();
      map.current.scrollZoom.disable();
      map.current.doubleClickZoom.disable();
      map.current.boxZoom.disable();
      map.current.keyboard.disable();
      map.current.touchZoomRotate.disable();

      setCurrentLocation(false);
      setIsShrinking(false);
    }, 60000);
  };

  const handleButtonClick = () => {
    // Trigger the location retrieval
    getUserLocation();

    // Add shrink animation class
    setIsShrinking(true);

    // Remove the shrink animation class after the animation duration
    setTimeout(() => {
      setIsShrinking(false);
    }, 800); // Match this duration to your animation duration in CSS
  };
  
  return (
    <div className="outercontainer">
      <div ref={mapContainer} className="container" />

      {/* Conditionally render START button or microphone button */}
      {currentlocation ? (
        <VoiceRecord /> // Show microphone button when location is set
      ) : (
        <button
        className={`start-button ${isShrinking ? "afterShrink" : ""}`} 
        onClick={() => {
          handleButtonClick();
          getUserLocation();
      }}
         
        >
          START
        </button>
      )}
    </div>
  );
}
