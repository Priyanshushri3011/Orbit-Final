import React from "react";
import "./DropperBatchNEET.css";
import { GraduationCap } from "lucide-react";
import Navbar from "../Navbar";

const DropperBatchNEET = () => {
  return (
    <>
      <Navbar />
      <div className="dropper-container">
        <h1 className="dropper-title">
          🎯 Dropper Batch – NEET Preparation for 12th Passed Students
        </h1>

        <p className="dropper-subtitle">
          Specialized program designed for students who have completed Class 12th and aim to excel in NEET. Strengthen your concepts, maximize your performance, and achieve your medical dreams!
        </p>

        <div className="dropper-cards">
          <div className="dropper-card">
            <GraduationCap className="dropper-icon purple" />
            <h2>🌟 NEET Dropper Batch</h2>
            <p>
              Focused preparation for 12th pass students who want to take a year to crack NEET with confidence. Personalized guidance, doubt-solving sessions, and intensive practice.
            </p>
            <p className="duration">⏳ Duration of Course: <span>1 Year</span></p>
            <p className="note">📝 Eligibility: Only for 12th Passed Candidates</p>
          </div>
        </div>

        <div className="dropper-footer">
          <p>
            Join our expert-led Dropper Batch to stay ahead of the competition and turn your NEET dream into reality!
          </p>
          <button className="join-btn">
            🚀 Enroll Now & Begin Your NEET Journey!
          </button>
        </div>
      </div>
    </>
  );
};

export default DropperBatchNEET;
