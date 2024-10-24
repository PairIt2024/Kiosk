import React, { useEffect, useRef, useState } from "react";
import VoiceRecord from "../Components/VoiceRecord";
import Events from "../Components/Events"; // Import the Events component
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import "../Styling/Map.css";


//mapbox token
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null); 
  const currentmarker = useRef(null);
  currentmarker.className = "marker";

  //const [currentlocation, setCurrentLocation] = useState(false);
  const [showVoiceRecord, setShowVoiceRecord] = useState(false);
  const inactivityTimeout = useRef(null);
  //const [userCoordinates, setUserCoordinates] = useState(null);
  const routeLayerId = "route-layer";

  //testing building name
  const [buildingName, setBuildingName] = useState("MLK Library");

  
  const [isShrinking, setIsShrinking] = useState(false);


  //coords of SJSU campus
  const initialCoordinates = [-121.8811, 37.3352];
  const bbcCoordinates = [-121.8787279, 37.336733];

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,

      style: "mapbox://styles/mapbox/streets-v12",

      center: [-121.8811, 37.3352],
      zoom: 16.3,
      bearing: -30.5,
      dragPan: false,
      scrollZoom: false,
      doubleClickZoom: false,
    });

    //add marker for bbc
    addMarkers();

    resetInactivityTimer(); //start reset timer
  }, []);


  //add bbc markers
  const addMarkers = () => {
    const el = document.createElement("div");
    el.className = "marker";

    currentmarker.current = new mapboxgl.Marker({ color: "#ff0000" })
      .setLngLat(bbcCoordinates)
      .addTo(map.current);

    currentmarker.current = new mapboxgl.Marker(el)
      .setLngLat(bbcCoordinates)
      .addTo(map.current);
  };

  //fetch route to a building from backend
  const fetchAndPlotRoute = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/routes/route/${name.toLowerCase()}`

      );

      const routeData = response.data.route.coordinates;
      //console.log("Route data:", routeData);

      //remove the previous route layer if it exists
      if (map.current.getLayer(routeLayerId)) {
        map.current.removeLayer(routeLayerId);
        map.current.removeSource(routeLayerId);
      }

      //add route layer to map
      map.current.addSource(routeLayerId, {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: routeData,
          },
        },
      });

      map.current.addLayer({
        id: routeLayerId,
        type: "line",
        source: routeLayerId,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#ff0000",
          "line-width": 4,
        },
      });
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  const handleGetRoute = () => {
    fetchAndPlotRoute(buildingName);
  };

  //display voice record component when start button is clicked
  const handleStartClick = () => {
    setShowVoiceRecord(true);
  };

  //reset all state and map after 1 minute of inactivity
  const resetMapAndState = () => {
    const el = document.createElement("div");
    el.className = "marker";

    //remove existing marker and add the original one back
    if (currentmarker.current) {
      currentmarker.current.remove();
      addMarkers();
    }
    //remove the route layer if it exists
    if (map.current.getLayer(routeLayerId)) {
      map.current.removeLayer(routeLayerId);
      map.current.removeSource(routeLayerId);
    }

    //reset map
    map.current.setCenter(initialCoordinates);
    map.current.setZoom(16.3);

    //disable map interactions
    map.current.dragPan.disable();
    map.current.scrollZoom.disable();
    map.current.doubleClickZoom.disable();
    map.current.boxZoom.disable();
    map.current.keyboard.disable();
    map.current.touchZoomRotate.disable();

    //setCurrentLocation(false);
    setShowVoiceRecord(false);
    resetInactivityTimer();
  };
  const resetInactivityTimer = () => {
    //remove the existing timer if it exists
    if (inactivityTimeout.current) {
      clearTimeout(inactivityTimeout.current);
    }

    //set a new timer to reset the map after 1 minute of inactivity
    inactivityTimeout.current = setTimeout(() => {
      resetMapAndState();
      setIsShrinking(false);
    }, 60000);
  };

    const handleButtonClick = () => {
    setIsShrinking(true);
    setTimeout(() => {
      setIsShrinking(false);
    }, 800);
  };
  
  //uncomment when setting up a new kiosk in different location
  //get user's location only get location after a start button is pressed
  // const getUserLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const coords = [position.coords.longitude, position.coords.latitude];
  //         setUserCoordinates(coords);
  //         console.log(coords);

  //         //center map and stop moving animation
  //         map.current.setZoom(16.4);

  //         //add marker for user's current location
  //         // if (currentmarker.current) {
  //         //   currentmarker.current.remove();
  //         // }

  //         // const el = document.createElement("div");
  //         // el.className = "marker";

  //         // currentmarker.current = new mapboxgl.Marker({ color: "#ff0000" })
  //         //   .setLngLat(coords)
  //         //   .addTo(map.current);

  //         // currentmarker.current = new mapboxgl.Marker(el)
  //         //   .setLngLat(coords)
  //         //   .addTo(map.current);

  //         //disable all map movements
  //         map.current.dragPan.disable();
  //         map.current.scrollZoom.disable();
  //         map.current.doubleClickZoom.disable();
  //         map.current.boxZoom.disable();
  //         map.current.keyboard.disable();
  //         map.current.touchZoomRotate.disable();

  //         setCurrentLocation(true);
  //         resetMapAndState();
  //         sendUserCoordinates(coords);
  //       },
  //       (error) => {
  //         console.error("Error getting location:", error);
  //       }
  //     );
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };
  // //commented out because we only need to run this once
  //only use if you want to save the users coordinates to the database for a different building
  // const sendUserCoordinates = async (coords) => {
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5001/calculate-routes",
  //       { userCoords: coords }
  //     );
  //     console.log("Routes saved:", response.data.routes);
  //   } catch (error) {
  //     console.error("Error sending coordinates:", error);
  //   }
  // };

  return (
    

    <div className="outercontainer">
      <div ref={mapContainer} className="container" />

      {showVoiceRecord ? (
        <VoiceRecord />
      ) : (

        <button className={`start-button ${isShrinking ? "afterShrink" : ""}`}  onClick={
        handleStartClick();
        handleButtonClick();
        }>
          START
        </button>
      )}

      {/* test to get route to a building */}
      <button onClick={handleGetRoute}>Get Route to {buildingName}</button>
    </div>
  );
}
