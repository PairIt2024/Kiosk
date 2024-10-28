// import React from "react";
// import axios from "axios";

// const RouteButton = ({ buildingName, onRouteFetched, closePopup }) => {
//   const handleClick = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5001/routes/route/${buildingName.toLowerCase()}`
//       );
//       const routeData = response.data;
//       console.log("Fetched Route Data route button:", routeData);

//       // Call the callback function with route data and building name
//       onRouteFetched(routeData, buildingName);

//       // Close the popup after fetching and plotting the route
//       closePopup();
//     } catch (error) {
//       console.error("Error fetching route:", error);
//     }
//   };

//   return (
//     <button className="route-button" onClick={handleClick}>
//       Get Route to {buildingName}
//     </button>
//   );
// };

// export default RouteButton;

// RouteButton.js
import React from "react";
import axios from "axios";

const RouteButton = ({ buildingName, onBuildingSelect, closePopup }) => {
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/routes/route/${buildingName.toLowerCase()}`
      );
      const routeData = response.data;

      // Update the building name in Map.js and close the popup
      onBuildingSelect(buildingName);
      closePopup();
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  return (
    <button className="route-button" onClick={handleClick}>
      Get Route to {buildingName}
    </button>
  );
};

export default RouteButton;
