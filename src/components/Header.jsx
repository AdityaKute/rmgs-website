import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Header.css";

const Divider = () => <span style={{ color: "#888" }}>|</span>;

const Header = () => {
  const { lang, setLang } = useLanguage();

  return (
    <header className="header">
      <div className="logo">RMGS</div>
      <hr />
      <nav
        className="nav"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="nav-row" style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
          <Link to="/">Home</Link>
          <Divider />
          <Link to="/services">Services</Link>
          <Divider />
          <Link to="/pricing">Pricing</Link>
          <Divider />
          <Link to="/gallery">Gallery</Link>
        </div>
        <div className="nav-row" style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
          <Link to="/testimonials">Testimonials</Link>
          <Divider />
          <Link to="/location">Location</Link>
          <Divider />
          <Link to="/contact">Contact</Link>
          <Divider />
          <Link to="/about">About</Link>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{
              marginLeft: "0.5rem",
              padding: "0.3rem",
              borderRadius: "6px",
            }}
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
            <option value="hi">हिंदी</option>
            <option value="gu">ગુજરાતી</option>
            <option value="kn">ಕನ್ನಡ</option>
            <option value="te">తెలుగు</option>
            <option value="ur">اردو</option>
            <option value="kok">कोंकणी</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
