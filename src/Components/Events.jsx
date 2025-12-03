import React from "react";
import "./Events.css";

const Events = () => {
  const events = [
    {
      title: "Motivational Seminar",
      description:
        "A power-packed session to inspire students for competitive exam success.",
      image: "/images/event1.jpg",
    },
    {
      title: "Topper Felicitation Program",
      description:
        "Honoring our brilliant achievers for their outstanding performance.",
      image: "/images/event2.jpg",
    },
    {
      title: "Career Guidance Workshop",
      description:
        "Experts guiding students on NEET, JEE, and NDA career pathways.",
      image: "/images/event3.jpg",
    },
    {
      title: "Parent-Teacher Interaction",
      description:
        "Discussing student progress and performance strategies.",
      image: "/images/event4.jpg",
    },
  ];

  return (
    <div className="events-container">
      <h1 className="events-title">Our Events & Activities</h1>
      <p className="events-subtitle">
        Explore highlights of our educational programs, seminars, and student
        achievements.
      </p>

      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
