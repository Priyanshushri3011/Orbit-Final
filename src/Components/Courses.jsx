import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Courses() {
  const courses = [
    
    {
      link: '/foundationcourse',
      title: "Foundation Course",
      description:
        "Strengthen your basics for Class 11th & 12th with in-depth conceptual learning and regular assessments.",
    },
    {
        link: '/targetbatch',
      title: "Target Board Exams",
      description:
        "Master your board syllabus with focused preparation, revision classes, and expert guidance.",
    },
    {
      link: '/dropperbatch',
      title: "Dropper Batch for NEET & JEE",
      description:
        "Specialized batch for NEET & JEE droppers focusing on speed, accuracy, and exam-oriented strategy.",
    },
    {
      link: '/ndatargetbatch',
      title: "Target Batch for NDA",
      description:
        "Focused preparation for NDA aspirants with academic and personality development support.",
    },
    {
      link:'/crashcourse',
      title: "Crash Course",
      description:
        "Fast-track revision course with intensive practice sessions and short-cut techniques.",
    },
    {
      link:'/testseries',
      title: "Test Series",
      description:
        "Regular tests, performance analysis, and personalized feedback to boost confidence and accuracy.",
    },
  ];

  return (
    <section className="course-section" id="courses">
      <h2 className="course-heading">Our Courses</h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <Link to={course.link}>
                <button className="explore-btn">Explore</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
}

export default Courses;
