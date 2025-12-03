import React from "react";
import "./NDATargetBatch.css";
import { FaBullseye, FaUserGraduate, FaClock } from "react-icons/fa";
import Navbar from "../Navbar";

const NDATargetBatch = () => {
  return (
    <>
      <Navbar />
      <div className="dropper-container">
        <div className="dropper-header">
          <h1>Target Batch for NDA</h1>
          <p>Best 6-Month Focused Program for NDA Aspirants</p>
        </div>

        <div className="dropper-note">
          <p>Note: Only for 12th Passed Candidates</p>
        </div>

        <div className="dropper-cards">

          <div className="dropper-card">
            <FaBullseye className="dropper-icon" />
            <h2>Target NDA Batch</h2>
            <p>
              A structured and intensive course designed to strengthen conceptual clarity,
              improve problem-solving skills, and boost performance in NDA written examination.
            </p>
            <div className="dropper-duration">
              <FaClock className="dropper-duration-icon" />
              <span>Duration: 6 Months</span>
            </div>
          </div>

          <div className="dropper-card">
            <FaUserGraduate className="dropper-icon" />
            <h2>Who Can Join?</h2>
            <p>
              Students who have completed Class 12 and are aiming to clear NDA Written Examination
              with strong fundamentals and guided mentorship.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default NDATargetBatch;
