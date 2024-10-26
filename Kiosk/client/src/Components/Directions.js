import React from "react";
import "../Styling/Directions.css";

export default function DirectionsPopup({
  directions,
  totalDistance,
  totalDuration,
  onClose,
}) {
  if (!directions) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Directions</h2>
        <p>
          <strong>Total Distance:</strong> {totalDistance.toFixed(2)} miles
        </p>
        <p>
          <strong>Total Duration:</strong> {totalDuration} minutes
        </p>
        <ul>
          {directions.map((step, index) => (
            <li key={index}>{step.instruction}</li>
          ))}
        </ul>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
