import React from "react";
import "./FoundationCourse.css";
import { GraduationCap, Zap, ShieldCheck } from "lucide-react";
import Navbar from "../Navbar";

const FoundationCourse = () => {
  return (
    <>
      <Navbar/>
          <div className="foundation-container">
      <h1 className="foundation-title">
        🎯 Foundation Batches – Your First Step Towards Success!
      </h1>

      <p className="foundation-subtitle">
        Build a rock-solid foundation with our integrated programs designed for ambitious students of Class 11th & 12th.
      </p>

      <div className="foundation-cards">
        <div className="foundation-card">
          <GraduationCap className="foundation-icon pink" />
          <h2>🌟 11th & 12th + NEET</h2>
          <p>
            For future doctors aiming for top medical colleges. Strengthen your concepts and boost your performance.
          </p>
          <p className="duration">⏳ Duration of Course: <span>2 Year</span></p>
        </div>

        <div className="foundation-card">
          <Zap className="foundation-icon blue" />
          <h2>⚡ 11th & 12th + JEE</h2>
          <p>
            For engineering aspirants determined to crack IITs & NITs with conceptual clarity and problem-solving excellence.
          </p>
          <p className="duration">⏳ Duration of Course: <span>2 Year</span></p>
        </div>

        <div className="foundation-card">
          <ShieldCheck className="foundation-icon green" />
          <h2>💪 11th & 12th + NDA</h2>
          <p>
            For students dreaming to serve the nation with pride. Prepare with strategy and discipline to achieve your NDA goals.
          </p>
          <p className="duration">⏳ Duration of Course: <span>2 Year</span></p>
        </div>
      </div>

      <div className="foundation-footer">
        <p>
          With expert faculty, personalized doubt sessions, and concept-focused learning, our Foundation Batches ensure you stay ahead — every step of the way!
        </p>
        <button className="join-btn">
          🚀 Join Now & Begin Your Journey to Excellence!
        </button>
      </div>
    </div>
    </>
  );
};

export default FoundationCourse;
