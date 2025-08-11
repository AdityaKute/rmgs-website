import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef(null);
  const [showText, setShowText] = useState(false);

  const socialLinks = [
    {
      name: "WhatsApp",
      src: "src/assets/whatsapp.png",
      link: "https://wa.me/917507491737",
    },
    {
      name: "Facebook",
      src: "src/assets/facebook.png",
      link: "https://facebook.com/rmgs", // Replace with actual
    },
    {
      name: "Instagram",
      src: "src/assets/instagram.png",
      link: "https://instagram.com/rmgs", // Replace with actual
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowText(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div>
        <b>RMGS - Royal Motors Garage Services</b> | Narayangaon, Pune, India |
        <br />
        Phone:{" "}
        <a href="tel:+919987429427">+91 75074 91737</a> | Email:{" "}
        <a href="mailto:info@rmgs-pune.com">rmgs21@gmail.com</a>
        <br />
        <div className="social-icons-footer">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-footer"
            >
              <img
                src={item.src}
                alt={item.name}
                className="social-icon"
              />
              <span className={`footer-rmgs-text ${showText ? "visible" : ""}`}>
                RMGS
              </span>
            </a>
          ))}
        </div>
        <br />
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <b style={{ color: "black", fontSize: "1.1rem" }}>*Terms & Conditions apply</b>
      </div>
        &copy; {new Date().getFullYear()} RMGS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
