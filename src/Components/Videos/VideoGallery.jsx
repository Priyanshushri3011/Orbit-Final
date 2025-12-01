import React from "react";
import "./VideoGallery.css";

function VideoGallery() {
  const videos = [
    {
      title: "Introduction to Physics",
      url: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      title: "Class 11 Biology Basics",
      url: "https://www.youtube.com/embed/fLexgOxsZu0",
    },
    {
      title: "IIT-JEE Maths Tricks",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "NEET Preparation Strategy",
      url: "https://www.youtube.com/embed/3fumBcKC6RE",
    },
  ];

  return (
    <section className="video-gallery">
      <h2>Explore Our Video Courses</h2>
      <div className="video-scroll-container">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={video.url}
              title={`video-${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="video-title">{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoGallery;
