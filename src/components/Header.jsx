import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Logo from "../assets/gallery-rmgslogo.png";
import BurgerLogo from "../assets/menu-logo.png";
import Home from "../assets/homeicon.png";
import Services from "../assets/servicesicon.png";
import Pricing from "../assets/pricingicon.png";
import Gallery from "../assets/galleryicon.png";
import Testimonials from "../assets/testimonialsicon.png";
import Location from "../assets/locationicon.png";
import Contact from "../assets/contacticon.png";
import About from "../assets/abouticon.png";
import PhoneIcon from "../assets/phoneicon.png";
import EmailIcon from "../assets/emailicon.png";
import "./Header.css";

const Header = () => {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <span className="full-text">oyal </span><br />
        <span className="letter">M</span>
        <span className="full-text">otors </span>
        <span className="letter">G</span>
        <span className="full-text">arage </span>
        <span className="letter">S</span>
        <span className="full-text">ervices</span>
      </div>
      <hr style={{
        border: "none", /* Removes the default border */
        height: "2px", /* Sets the thickness of the line */
        backgroundColor: "#ff0000", /* Sets the color to red */
      }} />
      <nav
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",     /* ensure horizontal layout */
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div className="lang-container">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="lang-select"
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
        <div className="burger" onClick={() => setMenuOpen(true)}>
          <img src={BurgerLogo} alt="Menu" className="burger-icon" role="button" />
        </div>

        <div className={`burger-menu ${menuOpen ? "show" : ""}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>×</div>
          <Link to="/" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={Home} alt="Home" className="menu-icon" />
            {t.home}
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={Services} alt="Services" className="menu-icon" />
            {t.services}
          </Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={Pricing} alt="Pricing" className="menu-icon" />
            {t.pricing}
          </Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={Gallery} alt="Gallery" className="menu-icon" />
            {t.gallery}
          </Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={Testimonials} alt="Testimonials" className="menu-icon" />
            {t.testimonials}
          </Link>
          <Link to="/location" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={Location} alt="Location" className="menu-icon" />
            {t.location}
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={Contact} alt="Contact" className="menu-icon" />
            {t.contact}
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="menu-link">
            <img src={About} alt="About" className="menu-icon" />
            {t.about}
          </Link>
          <p><img src={PhoneIcon} alt="number" className="menu-icon" /><a href="tel:+919987429427" style={{ color: "black", textDecoration: "underline" }}>+91 75074 91737</a></p>
          <p><img src={EmailIcon} alt="email" className="menu-icon" /><a href="mailto:royalmotorsgarage21@gmail.com" style={{ color: "black", textDecoration: "underline" }}>rmgs21@gmail.com</a></p>
          <p>&copy; {new Date().getFullYear()} RMGS</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;