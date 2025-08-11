import React from 'react';
import services from '../assets/services.json';
import '../assets/translations.js'
import oil from '../assets/oil.png';
import brake from '../assets/brake.png';
import suspension from '../assets/suspension.png';
import clutch from '../assets/clutch.png';
import engine from '../assets/engine.png';
import transmission from '../assets/transmission.png';
import dtc from '../assets/dtc.png';
import electrical from '../assets/electrical.png';
import denting from '../assets/denting.png';
import roadside from '../assets/roadside.png';
import servicing from '../assets/servicing.png';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../assets/translations';

const iconMap = {
  "oil.png": oil,
  "brake.png": brake,
  "suspension.png": suspension,
  "clutch.png": clutch,
  "engine.png": engine,
  "transmission.png": transmission,
  "dtc.png": dtc,
  "electrical.png": electrical,
  "denting.png": denting,
  "roadside.png": roadside,
  "servicing.png": servicing,
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1.5rem",
  background: "#fff"
};

const thtdStyle = {
  borderBottom: "1px solid #ccc",
  padding: "0.7rem",
  textAlign: "left",
  verticalAlign: "middle",
  borderRight: "1px solid #222" // thin black line between columns
};

const lastTdStyle = {
  ...thtdStyle,
  borderRight: "none" // no border after the last column
};

// Assign random prices for each service (you can adjust as needed)
const prices = [
  "500-800", "1500", "1200", "3000-4500", "depends on condition", "3500-5500", "500", "depends on condition", "2500-3500", "500-2500", "1800-2500"
];

const iconStyle = {
  width: "36px",
  height: "36px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto"
};

const Pricing = () => {
  const { lang } = useLanguage();
  const currentTranslations = translations[lang];
  return (
    <div className="pricing">
      <h2 style={{ textAlign: "center" }}>{currentTranslations.servicePricing}</h2>
      <p style={{ 
        textAlign: "center", 
        fontStyle: "italic", 
        color: "#d32f2f", 
        fontWeight: "bold", 
        margin: "0.5rem 0 1rem 0",
        fontSize: "1.1rem"
      }}>
        {currentTranslations.priceDisclaimer}
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thtdStyle}>{currentTranslations.Image}</th>
            <th style={thtdStyle}>{currentTranslations.Service}</th>
            <th style={lastTdStyle}>{currentTranslations.Price} (₹)</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, idx) => (
            <tr key={service.titleKey}>
              <td style={thtdStyle}>
                <img
                  src={iconMap[service.icon]}
                  alt={currentTranslations[service.titleKey]}
                  style={iconStyle}
                />
              </td>
              <td style={thtdStyle}>{currentTranslations[service.titleKey]}</td>
              <td style={lastTdStyle}>₹{prices[idx] || 1000}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;