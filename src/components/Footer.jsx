import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import whatsappIcon from "../assets/whatsapp.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import PhoneIcon from "../assets/phoneicon.png";
import EmailIcon from "../assets/emailicon.png";

const Footer = () => {
  const footerRef = useRef(null);
  const [showText, setShowText] = useState(false);

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
  <div className="footer-left">
    <p><b>RMGS - Royal Motors Garage Services</b></p>
    <p>Narayangaon, Pune, India</p>
    <p> 
      <img src={PhoneIcon} alt="Phone" className="footer-icon" /><b>Phone:</b>
      <a href="tel:+919987429427">+91 75074 91737</a></p>
    <p> 
      <img src={EmailIcon} alt="Email" className="footer-icon" /><b>Email:</b>
      <a href="mailto:info@rmgs-pune.com">rmgs21@gmail.com</a></p>

    <p> 
      <img src={whatsappIcon} alt="WhatsApp" className="footer-icon" /><b>WhatsApp:</b>
      <a href="https://wa.me/917507491737" target="_blank" rel="noopener noreferrer">
        Chat Now
      </a>
    </p>
    <p>
      <img src={facebookIcon} alt="Facebook" className="footer-icon" /><b>Facebook:</b>
      <a href="https://facebook.com/rmgs" target="_blank" rel="noopener noreferrer">
         Visit Page
      </a>
    </p>
    <p>
      <img src={instagramIcon} alt="Instagram" className="footer-icon" /><b>Instagram:</b>
      <a href="https://instagram.com/rmgs" target="_blank" rel="noopener noreferrer">
        Follow Us
      </a>
    </p>

    <p className="tnc"><b>*Terms & Conditions apply</b></p>
  </div>

  <div className="footer-center">
    <p>&copy; {new Date().getFullYear()} RMGS. All rights reserved.</p>
  </div>
</footer>
  );
};

export default Footer;
