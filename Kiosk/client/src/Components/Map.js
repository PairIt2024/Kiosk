import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

//add token
mapboxgl.accessToken =
  "pk.eyJ1IjoiY29ubmllbHkyMDA0IiwiYSI6ImNtMjFxY3d4MTBhbGUya3E1Ymg1aGQxbzQifQ.r8GPHckSwIotDSC63LNTHA";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default Map;
