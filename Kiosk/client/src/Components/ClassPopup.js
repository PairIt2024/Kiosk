import React, { useState, useRef } from "react";
import "../Styling/ClassPopup.css";



const ClassPopup = ({ isVisible, toggleVisibility, getRoute, classesData=[] }) => {
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
            <button className="close-button" onClick={toggleVisibility}>x</button>
            <div className="classes-container">
                {classesData.map((classItem, index) => (
                    <div className="class-item" key={index}>
                        <div className="class-details">
                            <h3 className="class-title">{classItem.course_title}</h3>
                            <p className="class-section">Section: {classItem.section}</p>
                            <p className="class-number">Class Number: {classItem.class_number}</p>
                            <p className="class-mode">Mode of Instruction: {classItem.mode_of_instruction}</p>
                            <p className="class-units">Units: {classItem.units}</p>
                            <p className="class-type">Class Type: {classItem.class_type}</p>
                            <p className="class-days-times">Days/Times: {classItem.days} {classItem.times}</p>
                            <p className="class-dates">Dates: {classItem.dates}</p>
                            <p className="class-seats">Open Seats: {classItem.open_seats}</p>
                            <p className="class-instructor">Instructor: {classItem.instructor}</p>
                            <p className="class-location">Location: {classItem.location}</p>
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
