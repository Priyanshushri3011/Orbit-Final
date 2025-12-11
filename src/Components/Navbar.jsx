import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>

        <li>
          <Link to="/allcourses">Courses</Link>
        </li>

        <li>Faculty</li>
        <li>Event</li>
        <li>Contact</li>
      </ul>

      <div className="header-right">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>

      {/* Hamburger Icon */}
      <div
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
}

export default Navbar;


