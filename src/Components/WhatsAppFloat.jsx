import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://wa.me/7765855895?text=Hello%20OrbitClasses%20Team%2C%20I%20Need%20Help"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          ...styles.button,
          transform: hover ? "scale(1.12)" : "scale(1)",
          boxShadow: hover
            ? "0 12px 25px rgba(0,0,0,0.35)"
            : "0 8px 20px rgba(0,0,0,0.25)",
        }}
      >
        <FaWhatsapp size={30} />
      </div>
    </a>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "25px",
    right: "25px",
    zIndex: 999,
    textDecoration: "none",
  },

  button: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #25D366, #128C7E)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    cursor: "pointer",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(5px)",
    transition: "all 0.3s ease",
  },
};

export default WhatsAppFloat;
