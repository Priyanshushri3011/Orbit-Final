import React from "react";
import "./AboutContactSection.css";

function AboutContactSection() {
  return (
    <section className="about-contact">
      <div className="contact-image">
        <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png" alt="Contact Us" />
      </div>

      <div className="contact-side">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="number" placeholder="Your Number" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default AboutContactSection;
