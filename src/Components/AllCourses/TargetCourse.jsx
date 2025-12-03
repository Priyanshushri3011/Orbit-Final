import React from "react";
import "./TargetCourse.css";
import { BookOpen, ClipboardList, GraduationCap } from "lucide-react";
import Navbar from "../Navbar";

const TargetCourse = () => {
  return (
    
    <div className="target-container">

        <Navbar/>
      <h1 className="target-title">
        🎯 Target Board Batches – Aim High, Score Higher!
      </h1>

      <p className="target-subtitle">
        Get exam-ready with our Target Board Programs specially designed for Class 12th students of all major boards:
      </p>

      <div className="target-boards">
        <span className="board bseb">📘 BSEB</span>
        <span className="board cbse">📗 CBSE</span>
        <span className="board icse">📙 ICSE</span>
      </div>

      {/* Duration Line Added */}
      <p className="target-duration">⏳ Duration of Course: 1 Year</p>

      <div className="target-cards">
        <div className="target-card">
          <BookOpen className="target-icon blue" />
          <h2>Concept Clarity</h2>
          <p>
            Strengthen your understanding with focused lessons on board-level concepts, ensuring a crystal-clear grasp of every topic.
          </p>
        </div>

        <div className="target-card">
          <ClipboardList className="target-icon yellow" />
          <h2>Answer Writing Mastery</h2>
          <p>
            Learn smart presentation and answer writing techniques that impress examiners and secure maximum marks.
          </p>
        </div>

        <div className="target-card">
          <GraduationCap className="target-icon green" />
          <h2>Board-Specific Guidance</h2>
          <p>
            Get expert mentoring aligned with your board syllabus, focusing on scoring strategies, test practice, and time management.
          </p>
        </div>
      </div>

      <div className="target-footer">
        <p>
          With regular tests, revision plans, and one-on-one doubt sessions, we make sure you shine in your final exams!
        </p>

        <button className="join-btn">
          ✨ Join our Target Board Batches – Because every mark matters!
        </button>
      </div>
    </div>
  );
};

export default TargetCourse;
