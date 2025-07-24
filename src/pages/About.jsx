import React from "react";
import proprietorImg from "../assets/proprietor.jpg";
import developerImg from "../assets/developer.jpg";

const aboutPoints = [
  "Genuine Spares or OEM Spares Use in vehicle.",
  "Company Recommended Suitable Grade Best Lubricants Use in Engine, gearbox, Transaxle, Differential, Brakes & Clutch.",
  "Best quality paint, paint material Use for Painting Job's.",
  "Old vehicle Refurbishing",
  "Vehicle polishing",
  "Head light polishing",
  "All Technical work done by experienced Technicians",
  "Wheel alignment",
  "Best paint booth for paint shop"
];

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

const About = () => (
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
    <h2 style={{ textAlign: "center", marginBottom: "0.5rem" }}>About Our Service</h2>
    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
      <b style={{ color: "#b71c1c", fontSize: "1.1rem" }}>Terms and conditions apply</b>
    </div>

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
        <div style={{ fontWeight: "bold", marginTop: "0.3rem" }}>Owner</div>
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
        <div style={{ fontWeight: "bold", marginTop: "0.3rem" }}>Developer / Handler</div>
      </div>
    </div>
  </div>
);

export default About;