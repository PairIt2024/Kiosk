import React, { useEffect, useRef, useState } from "react";
import VoiceRecord from "../Components/VoiceRecord";
import ClassPopup from '../Components/ClassPopup';  
import DirectionsPopup from "../Components/Directions";
import Events from "./Events/Events"; // Import the Events component
import mapboxgl from "mapbox-gl";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
import "../Styling/Map.css";
import QRCode from "../Components/QRCode";

//mapbox token
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const currentmarker = useRef(null);
  currentmarker.className = "marker";
  const [showPopup, setShowPopup] = useState(false);
  const [directions, setDirections] = useState([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [showVoiceRecord, setShowVoiceRecord] = useState(false);
  const inactivityTimeout = useRef(null);
  const routeLayerId = "route-layer";

  //testing building name
  const [buildingName, setBuildingName] = useState("MLK Library");

  const [isShrinking, setIsShrinking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  //coords of SJSU campus
  const initialCoordinates = [-121.8811, 37.3352];
  const bbcCoordinates = [-121.8787279, 37.336733];

  // store the lat lng coordinates for the QR code
  const [qrCoordinates, setQrCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,

      style: "mapbox://styles/mapbox/streets-v12",

      center: [-121.8811, 37.3352],
      zoom: 16.5, // change zoom if location is parking garage
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
      console.log("Route data:", routeData);
      console.log("Route steps:", response.data.steps);

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

      setDirections(response.data.steps);
      const totalDistance = response.data.distance / 1609.34;
      const totalDuration = Math.floor(response.data.duration / 60);
      setTotalDistance(totalDistance);
      setTotalDuration(totalDuration);

      setShowPopup(true);

      // Set the coordinates for the QR code
      const [longitude, latitude] = routeData[0];
      setQrCoordinates({ latitude, longitude });

    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  const handleGetRoute = () => {
    fetchAndPlotRoute(buildingName);
    console.log("Directions:", directions);
  };

  //controls direction pop up
  const closePopup = () => {
    setShowPopup(false);
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
    map.current.setZoom(16.5);

    //disable map interactions
    map.current.dragPan.disable();
    map.current.scrollZoom.disable();
    map.current.doubleClickZoom.disable();
    map.current.boxZoom.disable();
    map.current.keyboard.disable();
    map.current.touchZoomRotate.disable();

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

  const toggleDiv = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div className="outercontainer">
      <div ref={mapContainer} className="container" />

      {showVoiceRecord ? (
        <VoiceRecord />
      ) : (
        <button
          className={`start-button ${isShrinking ? "afterShrink" : ""}`}
          onClick={() => {
            handleStartClick();
            handleButtonClick();
          }}
        >
          START
        </button>
      )}

      <button className="toggle-button" onClick={toggleDiv}>
        {isVisible ? "Hide Classes Popup" : "Show Classes Popup"}
      </button>

      {/* The sliding box div */}
      <ClassPopup isVisible={isVisible} toggleVisibility={toggleDiv} />

      {/* test to get route to a building */}
      <button onClick={handleGetRoute}>Get Route to {buildingName}</button>

      {/* display  QRCode component with the lat lng coords */}
      {qrCoordinates.latitude && qrCoordinates.longitude && (
        <QRCode latitude={qrCoordinates.latitude} longitude={qrCoordinates.longitude} />
      )}
    </div>
  );
}
