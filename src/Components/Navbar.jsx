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
          <Link to="/aboutus">About</Link>
        </li>

        <li>
          <Link to="/allcourses">Courses</Link>
        </li>

        <li>
          <Link to="/faculty">Faculty</Link>
        </li>
        <li>Event</li>
        <li>
          <Link to="/contactus">Contact</Link>
        </li>
      </ul>

      <div className="header-right">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <a
          href="https://www.youtube.com/@Orbitclassespatna"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

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


