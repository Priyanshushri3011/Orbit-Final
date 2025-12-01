import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="Welcome-text">
                    Welcome To <br /> Orbit Classes
                </h1>
                <p>
                    Unlock your potential, achieve your dreams, and soar to success with expert guidance, personalized mentorship, and innovative learning solutions. At Orbit Classes, your future is our mission!
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">VIEW COURSES</button>
                    {/* <button className="btn-outline">VIEW COURSE</button> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
