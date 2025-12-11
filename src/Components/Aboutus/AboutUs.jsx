import React from "react";
import "./AboutUs.css"; // About Us specific styles
import Navbar from "../Components/Navbar";
import Faculty from "../Components/Faculty/Faculty";
import Footer from "../Footer";

const AboutUs = () => {
    return (
        <>
            <Navbar />
            {/* 1️⃣ About Us Section */}
            <section className="aboutus-section">
                <div className="container">
                    <h1>About Us</h1>
                    <p>
                        <strong>OrbitClasses</strong> is a premier educational institute committed to delivering high-quality academic coaching and skill development.
                        We focus on structured learning, expert guidance, and practical knowledge to empower students to achieve both academic and professional excellence.
                        Our comprehensive curriculum, experienced faculty, and student-centric approach nurture talent and foster success in every learner.
                    </p>
                </div>
            </section>

            {/* 2️⃣ Our Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>
                        At <strong>OrbitClasses</strong>, our mission is to equip every student with the knowledge, skills, and confidence to excel academically and professionally.
                        We are committed to providing a supportive environment and structured learning programs that encourage curiosity, critical thinking, and personal growth.
                    </p>
                    <ul className="mission-points">
                        <li>Deliver comprehensive, up-to-date curriculum tailored to each student’s needs.</li>
                        <li>Foster an engaging and interactive learning experience that bridges theory with practice.</li>
                        <li>Encourage a culture of continuous learning, discipline, and excellence.</li>
                        <li>Prepare students to achieve their academic and career goals effectively.</li>
                    </ul>
                    <p>
                        Education at OrbitClasses is not just about learning—it’s about building a solid foundation for lifelong success.
                    </p>
                </div>
            </section>

            {/* 3️⃣ Leadership Team Section */}
            <section className="team-section">
                <div className="container team-cards">
                    {/* Director Card */}
                    <div className="team-card">
                        <img src="/director.jpg" alt="Director" className="team-photo" />
                        <h3>Director</h3>
                        <p>
                            The Director guides OrbitClasses with strategic vision and dedication, ensuring every program meets the highest standards of excellence.
                        </p>
                    </div>

                    {/* MD Card */}
                    <div className="team-card">
                        <img src="/md.jpg" alt="Managing Director" className="team-photo" />
                        <h3>Managing Director</h3>
                        <p>
                            The Managing Director oversees operational excellence and ensures that all students receive a holistic and rewarding learning experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Faculty Section */}
            <Faculty />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default AboutUs;
