import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div>
      <b>RMGS - Royal Motors Garage Services</b>| Narayangaon,Pune, India |
      <br />
      Phone:{" "}
      <a href="tel:+919987429427">+91 99874 29427</a> | Email:{" "}
      <a href="mailto:info@rmgs-pune.com">info@rmgs-pune.com</a>
      <br />
      <span>
        <a
          href="https://wa.me/919657491738"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/24/000000/whatsapp--v1.png"
            alt="WhatsApp"
            style={{ verticalAlign: "middle" }}
          />
        </a>
        <a href="#" style={{ margin: "0 0.5rem" }}>
          <img
            src="https://img.icons8.com/color/24/000000/facebook-new.png"
            alt="Facebook"
            style={{ verticalAlign: "middle" }}
          />
        </a>
        <a href="#" style={{ margin: "0 0.5rem" }}>
          <img
            src="https://img.icons8.com/color/24/000000/instagram-new.png"
            alt="Instagram"
            style={{ verticalAlign: "middle" }}
          />
        </a>
      </span>
      <br />
      &copy; {new Date().getFullYear()} RMGS. All rights reserved.
    </div>
  </footer>
);

export default Footer;
