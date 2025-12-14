import React from "react";
import "./Faculty.css";
import Biofaculty from "../Faculty/Image/Biofaculty.jpg"
import Physicsfaculty from "../Faculty/Image/Physicsfaculty.jpg"
import Chemfaculty from "../Faculty/Image/Chemfaculty.jpg"

function Faculty() {
    const team = [
        {
                name: "Mr. Adarsh Srivastava",
                role: "Physics Faculty",
                img: Physicsfaculty,
                
        },
        {
            name: "Mr. V. K Gupta",
            role: "Chemistry Faculty",
            img: Chemfaculty,
        },
        {
            name: "Mr. Tahsheen Raza",
            role: "Biology Faculty",
            img: Biofaculty,
        },
        {
            name: "Mr.",
            role: "Mathematics Faculty",
            img:"https://via.placeholder.com/300x300.png?text=Mathematics+Faculty",
        },
    ];

    return (
        <section className="faculty-section" id="faculty">
            <h2 className="faculty-heading">Meet Our Faculty</h2>
            <p className="faculty-subtext">
                Expert mentors from India’s top institutes dedicated to your success
            </p>

            <div className="faculty-grid">
                {team.map((member, index) => (
                    <div className="faculty-card" key={index}>
                        <div className="faculty-image">
                            <img src={member.img} alt={member.name} />
                        </div>
                        <div className="faculty-info">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Faculty;
