import React from "react";
import "./CrashCourse.css";
import { FaBolt, FaBookOpen, FaClock } from "react-icons/fa";
import Navbar from "../Navbar";

const CrashCourse = () => {
  return (
    <>
    <Navbar/>
    <div className="dropper-container">
      <div className="dropper-header">
        <h1>Crash Course</h1>
        <p>High-Intensity Fast Track Preparation for NEET, JEE & Boards</p>
      </div>

      <div className="dropper-note">
        <p>Note: Specially Designed for Fast Revision & Quick Boost</p>
      </div>

      <div className="dropper-cards">

        {/* Crash Course NEET/JEE */}
        <div className="dropper-card">
          <FaBolt className="dropper-icon" />
          <h2>NEET / JEE Crash Course</h2>
          <p>
            A focused 90-day crash program covering the entire syllabus,
            high-yield topics, chapter-wise tests, and full-length mock exams.
            Ideal for students targeting maximum score improvement.
          </p>
          <div className="dropper-duration">
            <FaClock className="dropper-duration-icon" />
            <span>Duration: 90 Days</span>
          </div>
        </div>

        {/* Crash Course 12th Boards */}
        <div className="dropper-card">
          <FaBookOpen className="dropper-icon" />
          <h2>12th Boards Crash Course</h2>
          <p>
            A power-packed 45-day revision program for Class 12 Boards focusing
            on important concepts, exam pattern strategy, practice papers,
            and quick revision notes.
          </p>
          <div className="dropper-duration">
            <FaClock className="dropper-duration-icon" />
            <span>Duration: 45 Days</span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default CrashCourse;
