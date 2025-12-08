import React from "react";
import "./VideoGallery.css";

function VideoGallery() {
  const videos = [
    {
      title: "Orbit Classes Patna : By - Adarsh Sir",
      url: "https://www.youtube.com/embed/qbc_dpmW7lk",
    },
    {
      title: "🎯 Our Video Content Plan – Your Thoughts Matter!",
      url: "https://www.youtube.com/embed/QVVTBADO1pw",
    },
    {
      title: "📌 Quantisation of Charge - Class 10 &amp; Class 12 ",
      url: "https://www.youtube.com/embed/au4UzN1C6K0",
    },
    {
      title: "⚡ Method of Charging – Explained",
      url: "https://www.youtube.com/embed/-uqFD2VMVHw",
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
