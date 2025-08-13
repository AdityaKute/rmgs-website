import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Logo from "../assets/gallery-rmgslogo.png";
import "./Header.css";

const Divider = () => <span style={{ color: "green" }}>|</span>;

const Header = () => {
  const { lang, setLang } = useLanguage();
const [isScrolled, setIsScrolled] = useState(false);
const translations = {
  en: {
    home: "Home", services: "Services", pricing: "Pricing", gallery: "Gallery",
    testimonials: "Testimonials", location: "Location", contact: "Contact", about: "About"
  },
  mr: {
    home: "मुख्यपृष्ठ", services: "सेवा", pricing: "किंमत", gallery: "गॅलरी",
    testimonials: "प्रशंसापत्रे", location: "ठिकाण", contact: "संपर्क", about: "आमच्याबद्दल"
  },
  hi: {
    home: "होम", services: "सेवाएं", pricing: "मूल्य निर्धारण", gallery: "गैलरी",
    testimonials: "साक्षात्कार", location: "स्थान", contact: "संपर्क करें", about: "हमारे बारे में"
  },
  gu: {
    home: "હોમ", services: "સેવાઓ", pricing: "કિંમત", gallery: "ગેલેરી",
    testimonials: "પ્રતિસાદ", location: "સ્થાન", contact: "સંપર્ક કરો", about: "અમારા વિશે"
  },
  kn: {
    home: "ಮುಖಪುಟ", services: "ಸೇವೆಗಳು", pricing: "ಬೆಲೆ", gallery: "ಗ್ಯಾಲರಿ",
    testimonials: "ಸಾಕ್ಷ್ಯಗಳು", location: "ಸ್ಥಳ", contact: "ಸಂಪರ್ಕಿಸಿ", about: "ನಮ್ಮ ಬಗ್ಗೆ"
  },
  te: {
    home: "హోమ్", services: "సేవలు", pricing: "ధర", gallery: "గ్యాలరీ",
    testimonials: "సాక్ష్యాలు", location: "స్థానం", contact: "సంప్రదించండి", about: "మా గురించి"
  },
  ur: {
    home: "ہوم", services: "خدمات", pricing: "قیمتیں", gallery: "گیلری",
    testimonials: "شہادتیں", location: "مقام", contact: "رابطہ کریں", about: "ہمارے بارے میں"
  },
  kok: {
    home: "मुख्यपृष्ठ", services: "सेवा", pricing: "किंमत", gallery: "गॅलरी",
    testimonials: "प्रशंसापत्रे", location: "ठिकाण", contact: "संपर्क", about: "आमच्याबद्दल"
  },
};
const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <img src={Logo} alt="RMGS Logo" className="header-logo" />
      <div className={`logo ${isScrolled ? "scrolled" : ""}`}>
        <span className="letter">R</span>
        <span className="full-text">oyal </span><br></br>
        <span className="letter">M</span>
        <span className="full-text">otors </span>
        <span className="letter">G</span>
        <span className="full-text">arage </span>
        <span className="letter">S</span>
        <span className="full-text">ervices</span>
      </div>
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
          <Link to="/">{t.home}</Link>
          <Divider />
          <Link to="/services">{t.services}</Link>
          <Divider />
          <Link to="/pricing">{t.pricing}</Link>
          <Divider />
          <Link to="/gallery">{t.gallery}</Link>
        </div>
        <div className="nav-row" style={{ display: "flex", gap: "0.7rem", alignItems: "center" }}>
          <Link to="/testimonials">{t.testimonials}</Link>
          <Divider />
          <Link to="/location">{t.location}</Link>
          <Divider />
          <Link to="/contact">{t.contact}</Link>
          <Divider />
          <Link to="/about">{t.about}</Link>
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