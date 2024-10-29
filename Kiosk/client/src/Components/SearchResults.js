import React from "react";
import "../Styling/SearchResults.css";
import RouteButton from "../Components/RouteButton.js";

const kmToMiles = (km) => (km / 1609.34).toFixed(2);
const secondsToMinutes = (seconds) => Math.floor(seconds / 60);

const ResultsPopup = ({ results, onRouteFetched, onClose }) => {
  if (!results || results.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Search Results</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <h3>
                {result.course_title
                  ? result.course_title
                  : result.buildingName || "Unnamed Building"}
              </h3>
              {result.course_title ? (
                <>
                  <p>
                    <strong>Section:</strong> {result.section}
                  </p>
                  <p>
                    <strong>Instructor:</strong> {result.instructor}
                  </p>
                  <p>
                    <strong>Location:</strong> {result.location}
                  </p>
                  <p>
                    <strong>Time:</strong> {result.times}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Distance:</strong> {kmToMiles(result.distance)}{" "}
                    miles
                  </p>
                  <p>
                    <strong>Walking Duration:</strong>{" "}
                    {secondsToMinutes(result.duration)} minutes
                  </p>
                  <RouteButton
                    buildingName={result.buildingName}
                    onClick={onRouteFetched}
                    closePopup={onClose}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPopup;
