import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container-row">
        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>Email: support@elearn.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Location Map */}
        <div className="footer-box">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2554969693306!2d77.20986937473693!3d28.62210368455554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b4bb44bc73%3A0x50d2740b3b6480ec!2sNITI%20Aayog%20New%20Delhi!5e0!3m2!1sen!2sin!4v1753611948263!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
