import React from "react";
import proprietorImg from "../assets/proprietor.jpg";
import developerImg from "../assets/developer.jpg";
import { translations } from "../assets/translations";
import { useLanguage } from "../context/LanguageContext";

const cloudStyle = {
  background: "linear-gradient(135deg, #e3f0ff 70%, #f9f9f9 100%)",
  borderRadius: "1.2rem",
  boxShadow: "0 2px 12px rgba(26,35,126,0.10)",
  padding: "1rem 1.5rem",
  margin: "0.7rem 0",
  fontSize: "1.05rem",
  fontStyle: "italic",
  border: "1px solid #cce0ff",
  textAlign: "center"
};

const About = () => {
  const { lang } = useLanguage();
  const currentTranslations = translations[lang];

  const aboutPoints = [
  currentTranslations["about_point_1"],
  currentTranslations["about_point_2"],
  currentTranslations["about_point_3"],
  currentTranslations["about_point_4"],
  currentTranslations["about_point_5"],
  currentTranslations["about_point_6"],
  currentTranslations["about_point_7"],
  currentTranslations["about_point_8"],
  currentTranslations["about_point_9"]
];

  return (
    <div
      className="about"
      style={{
        maxWidth: 700,
        margin: "2rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: "1rem",
        boxShadow: "0 2px 12px #eee"
      }}
    >
      {/* About title and T&C */}
      <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>{currentTranslations["about_title"]}</h2>
      

    {/* Points in cloud boxes */}
    <div>
      {aboutPoints.map((point, idx) => (
        <div key={idx} style={cloudStyle}>
          {point}
        </div>
      ))}
    </div>

    {/* Owner & Developer section */}
    <div style={{ display: "flex", justifyContent: "center", gap: "5rem", alignItems: "center", margin: "2.5rem 0 0 0" }}>
      <div style={{ textAlign: "center" }}>
        <img
          src={proprietorImg}
          alt="Owner"
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "0.5rem"
          }}
        />
        <div style={{ fontWeight: "bold", marginTop: "0.3rem" }}>{currentTranslations["about_owner"]}</div>
        <div style={{ fontWeight: "bold", marginTop: "0.3rem" }}>{currentTranslations["about_ownername"]}</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          src={developerImg}
          alt="Developer/Handler"
          style={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "0.5rem"
          }}
        />
        <div style={{ fontWeight: "bold", marginTop: "0.3rem" }}>{currentTranslations["about_developer"]}</div>
        <div style={{ fontWeight: "bold", marginTop: "0.3rem" }}>{currentTranslations["about_developername"]}</div>
        </div>
      </div>
    </div>
  );
}
export default About;