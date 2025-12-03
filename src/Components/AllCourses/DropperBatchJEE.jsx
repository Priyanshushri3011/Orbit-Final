import React from "react";
import "./DropperBatchJEE.css";
import { Zap } from "lucide-react";
import Navbar from "../Navbar";

const DropperBatchJEE = () => {
  return (
    <>
      <Navbar />
      <div className="jee-dropper-container">
        <h1 className="jee-dropper-title">
          ⚡ JEE Dropper Batch – 6 Months Intensive Program
        </h1>

        <p className="jee-dropper-subtitle">
          A focused crash-style dropper program designed for 12th passed students aiming to crack JEE Main & Advanced with strong problem-solving skills and conceptual clarity.
        </p>

        <div className="jee-dropper-cards">
          <div className="jee-dropper-card">
            <Zap className="jee-dropper-icon blue" />
            <h2>🚀 JEE Dropper Batch</h2>
            <p>
              A highly structured and strategic 6-month program for engineering aspirants looking to improve their rank with advanced practice, concept revision, and high-level test series.
            </p>

            <p className="duration">
              ⏳ Duration of Course: <span>6 Months</span>
            </p>

            <p className="note">📝 Eligibility: Only for 12th Passed Candidates</p>
          </div>
        </div>

        <div className="jee-dropper-footer">
          <p>
            Join our advanced JEE Dropper Batch and boost your chances of getting into top IITs, NITs, and premier engineering colleges!
          </p>

          <button className="join-btn">
            ⚡ Enroll Now & Start Your JEE Journey!
          </button>
        </div>
      </div>
    </>
  );
};

export default DropperBatchJEE;
