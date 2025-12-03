import React from "react";
import "./TestSeries.css";
import { FaClipboardList, FaBookReader, FaClock } from "react-icons/fa";
import Navbar from "../Navbar";

const TestSeries = () => {
  return (
    <>
    <Navbar/>
    <div className="dropper-container">
      <div className="dropper-header">
        <h1>Test Series with Discussion</h1>
        <p>Focused Test Practice with Expert Solution Discussion Sessions</p>
      </div>

      <div className="dropper-note">
        <p>Note: For NEET, JEE & 12th Board Aspirants</p>
      </div>

      <div className="dropper-cards">

        {/* NEET / JEE 21 Days */}
        <div className="dropper-card">
          <FaClipboardList className="dropper-icon" />
          <h2>NEET / JEE Test Series</h2>
          <p>
            Intensive 21-day test series including chapter-wise tests,
            full-length mock exams, and in-depth discussion sessions
            to improve accuracy, speed, and exam strategy.
          </p>
          <div className="dropper-duration">
            <FaClock className="dropper-duration-icon" />
            <span>Duration: 21 Days</span>
          </div>
        </div>

        {/* 12th Boards 15 Days */}
        <div className="dropper-card">
          <FaBookReader className="dropper-icon" />
          <h2>12th Board Test Series</h2>
          <p>
            A structured 15-day board exam test series with topic-wise
            assessments, answer writing practice, and expert-led
            solution discussions for score enhancement.
          </p>
          <div className="dropper-duration">
            <FaClock className="dropper-duration-icon" />
            <span>Duration: 15 Days</span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default TestSeries;
