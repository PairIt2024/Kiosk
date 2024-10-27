import React from "react";
import "../Styling/ClassPopup.css";

const classesData = [
    {
        name: "CS151 - Object-Oriented Programming",
        time: "10:00 AM - 11:15 AM",
        location: "BBC004",
        professor: "Professor",
    },
    {
        name: "CS157A - Database Management Systems",
        time: "1:30 PM - 2:45 PM",
        location: "ENG210",
        professor: "Professor",
    },
    {
        name: "CS122 - Python Programming",
        time: "3:00 PM - 4:15 PM",
        location: "MLK Library",
        professor: "Professor",
    },
    {
        name: "CS157A - Database Management Systems",
        time: "1:30 PM - 2:45 PM",
        location: "ENG210",
        professor: "Professor",
    },
    {
        name: "CS122 - Python Programming",
        time: "3:00 PM - 4:15 PM",
        location: "MLK Library",
        professor: "Professor",
    },
    // Add more classes if needed
];

const ClassPopup = ({ isVisible, toggleVisibility, getRoute }) => {
    return (
        <div className={`sliding-div ${isVisible ? 'visible' : ''}`}>
            <button className="close-button" onClick={toggleVisibility}>X</button>
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
