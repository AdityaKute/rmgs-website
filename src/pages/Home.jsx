import React from 'react';
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../assets/translations";
import proprietorImg from '../assets/proprietor.jpg';

const Home = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div>
      <section className="hero" id="home">
        <h1>{t.welcome}</h1>
        <p>
          {t.heroDesc}
          <br />
          <b>{t.call}:{" "}

            <a href="tel:+919987429427" style={{ color: "blue", textDecoration: "underline" }}>
              +91 99874 29427
            </a>
          </b>
        </p>
        <a href="tel:+919987429427" className="cta-btn red-rounded-btn">
          {t.requestHelp}
        </a>
      </section>

      {/* Owner Info Section */}
      <section id="about-proprietor">
        <Link to="/login">
          <img
            src={proprietorImg}
            alt="Proprietor"
            className="proprietor-img"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <h4>{t.aboutProprietor}</h4>
        <p>
          <h3>{t.proprietorDesc}</h3>
          <br />
          <span>
            "{t.proprietorQuote}"
          </span>
        </p>
        <div className="proprietor-btn">
          <a href="/contact" className="cta-btn blue-rounded-btn">
            {t.contactProprietor}
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;