import React from "react";
import "./Events.css";
import event1 from "./event1.jpg"
import event2 from "./event2.jpg"
import event3 from "./event3.jpg"
import event4 from "./event4.jpg"


const Events = () => {
  const events = [
    {
      // title: "Motivational Seminar",
      // description:
      //   "A power-packed session to inspire students for competitive exam success.",
      image: event1,
    },
    {
      // title: "Topper Felicitation Program",
      // description:
      //   "Honoring our brilliant achievers for their outstanding performance.",
      image:event2,
    },
    {
      // title: "Career Guidance Workshop",
      // description:
      //   "Experts guiding students on NEET, JEE, and NDA career pathways.",
      image: event3,
    },
    {
      // title: "Parent-Teacher Interaction",
      // description:
      //   "Discussing student progress and performance strategies.",
      image:event4,
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
