import React from "react";
import "./DropperBatch.css";
import { HeartPulse, Zap } from "lucide-react";
import Navbar from "../Navbar";

const DropperBatch = () => {
  return (
    <>
      <Navbar />

      <div className="dropper-container">
        <h1 className="dropper-title">🎯 Dropper Batches for NEET & JEE</h1>

        <p className="dropper-subtitle">
          Designed exclusively for 12th passed students aiming for a focused and
          result-driven preparation. Choose NEET or JEE Dropper Batch and start
          your journey towards a top medical or engineering college.
        </p>

        <div className="dropper-cards">
          {/* NEET CARD */}
          <div className="dropper-card">
            <HeartPulse className="dropper-icon pink" />

            <h2>❤️ NEET Dropper Batch</h2>
            <p>
              A complete 1-year preparation program for medical aspirants aiming
              to crack NEET with strong concepts, disciplined strategy, and
              rigorous practice.
            </p>

            <p className="duration">
              ⏳ Duration: <span>1 Year</span>
            </p>

            <p className="note">📝 Eligibility: Only for 12th Passed Candidates</p>
          </div>

          {/* JEE CARD */}
          <div className="dropper-card">
            <Zap className="dropper-icon blue" />

            <h2>⚡ JEE Dropper Batch</h2>
            <p>
              A 6-month intensive learning program for engineering aspirants
              targeting JEE Main & Advanced with structured practice and
              advanced problem-solving sessions.
            </p>

            <p className="duration">
              ⏳ Duration: <span>6 Months</span>
            </p>

            <p className="note">📝 Eligibility: Only for 12th Passed Candidates</p>
          </div>
        </div>

        <div className="dropper-footer">
          <p>
            With expert faculty, chapter-wise analysis, doubt-solving support,
            and full-length tests, our Dropper Batches help students achieve
            their dream ranks with confidence and excellence.
          </p>

          <button className="join-btn">🚀 Enroll Now & Begin Your Journey!</button>
        </div>
      </div>
    </>
  );
};

export default DropperBatch;
