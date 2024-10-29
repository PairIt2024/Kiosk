const getUserLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = [position.coords.longitude, position.coords.latitude];
        setUserCoordinates(coords);
        console.log(coords);

        //center map and stop moving animation
        map.current.setZoom(16.4);

        //add marker for user's current location
        if (currentmarker.current) {
          currentmarker.current.remove();
        }

        const el = document.createElement("div");
        el.className = "marker";

        currentmarker.current = new mapboxgl.Marker({ color: "#ff0000" })
          .setLngLat(coords)
          .addTo(map.current);

        currentmarker.current = new mapboxgl.Marker(el)
          .setLngLat(coords)
          .addTo(map.current);

        //disable all map movements
        map.current.dragPan.disable();
        map.current.scrollZoom.disable();
        map.current.doubleClickZoom.disable();
        map.current.boxZoom.disable();
        map.current.keyboard.disable();
        map.current.touchZoomRotate.disable();

        setCurrentLocation(true);
        resetMapAndState();
        sendUserCoordinates(coords);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};
//commented out because we only need to run this once
const sendUserCoordinates = async (coords) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/calculate-routes",
      { userCoords: coords }
    );
    console.log("Routes saved:", response.data);
  } catch (error) {
    console.error("Error sending coordinates:", error);
  }
};
