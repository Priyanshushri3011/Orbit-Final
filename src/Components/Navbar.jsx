import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><img src="https://drive.google.com/file/d/1h8DlvcOrBIoFOs0MHj8rCyf6It19Z0R4/view?usp=sharing" alt="" /></div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>All Courses</li>
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


