import React, { useEffect } from "react";
import "../../Styling/Events.css";
import { useState } from "react";

export default function Events() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/events/getEvents")
      .then((response) => response.json())
      .then((data) => setEventsData(data));
  }, []);

  return (
    <div className="events-wrapper">
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div className="event-item" key={index}>
            <img
              src={event.img_src}
              alt={`Event ${index + 1}`}
              className="event-image"
            />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
