// Events.js
import React from "react";
import "../Styling/Events.css";

const eventsData = [
  { 
    title: "Theta Tau PNM Fundraising",
    date: "Date: Wednesday 10/23 @ 11-4PM", 
    location: "Location: 7th St. Plaza", 
    description: "Details: Dalgona & Cookies",
    imageUrl: "/sammyspartan.jpg" 
  },
  { 
    title: "Theta Tau PNM Fundraising",
    date: "Date: Thursday 10/24 @ 11-4PM", 
    location: "Location: 7th St. Plaza", 
    description: "Details: Pie a PNM",
    imageUrl: "/sammyspartan.jpg"
  },
  { 
    title: "Theta Tau PNM Meeting #7",
    date: "Date: Thursday 10/24 @ 9-12AM", 
    location: "Location: BBC004", 
    description: "Details: Alumni Panel",
    imageUrl: "/sammyspartan.jpg"
  },
  { 
    title: "Theta Tau PNM Community Service",
    date: "Date: Friday 10/25 @ 9-12PM", 
    location: "Location: RAFT", 
    description: "Details: RAFT Organization",
    imageUrl: "/sammyspartan.jpg"
  },
  { 
    title: "Theta Tau Big/Little Reveal",
    date: "Date: Saturday 10/26 @ 4-10PM", 
    location: "Location: Tower Lawn", 
    description: "",
    imageUrl: "/sammyspartan.jpg"
  },
  { 
    title: "Theta Tau Brotherhood",
    date: "Date: Sunday 10/27 @ 4-8PM", 
    location: "Location: TBA", 
    description: "",
    imageUrl: "/sammyspartan.jpg"
  },
  { 
    title: "TBA",
    date: "Date: Monday 10/28", 
    location: "Location: TBA", 
    description: "",
    imageUrl: "/sammyspartan.jpg"
  }
];

export default function Events() {
  return (
    <div className="events-wrapper">
      <div className="events-container">
        {eventsData.map((event, index) => (
          <div className="event-item" key={index}>
            <img 
              src={event.imageUrl} 
              alt={`Event ${index + 1}`} 
              className="event-image"
            />
            <div className="event-details">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-location">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
