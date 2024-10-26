import React, { useState } from "react";
import "../Styling/ClassPopup.css";  

const ClassPopup = ({ isVisible, toggleVisibility }) => {
    return (
        <div className={`sliding-div ${isVisible ? 'visible' : ''}`}>
            <button className="close-button" onClick={toggleVisibility}>
                X {/* Plain text for the close button */}
            </button>
            <p>This is a sliding box!</p>
        </div>
    );
};
  
  export default ClassPopup;