import React, { useState, useRef } from "react";
import "../Styling/ClassPopup.css";

const classesData = [
    {
        name: "CS151 - Object-Oriented Programming",
        time: "M/W 10:00 AM - 11:15 AM",
        location: "BBC004",
        professor: "Professor",
    },
    {
        name: "CS157A - Database Management Systems",
        time: "T/TH 1:30 PM - 2:45 PM",
        location: "ENG210",
        professor: "Professor",
    },
    {
        name: "CS122 - Python Programming",
        time: "T/TH 3:00 PM - 4:15 PM",
        location: "MLK Library",
        professor: "Professor",
    },
    {
        name: "CS157A - Database Management Systems",
        time: "T/TH 1:30 PM - 2:45 PM",
        location: "ENG210",
        professor: "Professor",
    },
    {
        name: "CS122 - Python Programming",
        time: "M/W 3:00 PM - 4:15 PM",
        location: "MLK Library",
        professor: "Professor",
    },
];

const ClassPopup = ({ isVisible, toggleVisibility, getRoute }) => {
    const popupRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

    // Handle mouse down event
    const handleMouseDown = (e) => {
        setDragging(true);
        setStartPosition({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    // Handle mouse move event
    const handleMouseMove = (e) => {
        if (!dragging) return;
        setPosition({
            x: e.clientX - startPosition.x,
            y: e.clientY - startPosition.y,
        });
    };

    // Handle mouse up event
    const handleMouseUp = () => {
        setDragging(false);
    };

    return (
        <div
            ref={popupRef}
            className={`sliding-div ${isVisible ? 'visible' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                cursor: dragging ? "grabbing" : "grab",
            }}
        >
            <button className="close-button1" onClick={toggleVisibility}>x</button>
            <div className="classes-container">
                {classesData.map((classItem, index) => (
                    <div className="class-item" key={index}>
                        <div className="class-details">
                            <h3 className="class-title">{classItem.name}</h3>
                            <p className="class-time">Time: {classItem.time}</p>
                            <p className="class-location">Location: {classItem.location}</p>
                            <p className="class-details">Professor: {classItem.professor}</p>
                            <button 
                                className="get-route-button" 
                                onClick={() => getRoute(classItem.location)}
                            >
                                Get Route
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClassPopup;
