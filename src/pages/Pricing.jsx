import React from 'react';
import services from '../assets/services.json';
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
  500, 1200, 1500, 1100, 3500, 2500, 600, 800, 2000, 1000, 1800, 2200
];

const iconStyle = {
  width: "36px",
  height: "36px",
  objectFit: "contain",
  display: "block",
  margin: "0 auto"
};

const Pricing = () => (
  <div className="pricing">
    <h2 style={{ textAlign: "center" }}>Service Pricing</h2>
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thtdStyle}>Image</th>
          <th style={thtdStyle}>Service</th>
          <th style={lastTdStyle}>Price (₹)</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service, idx) => (
          <tr key={service.title}>
            <td style={thtdStyle}>
              <img
                src={iconMap[service.icon]}
                alt={service.title}
                style={iconStyle}
              />
            </td>
            <td style={thtdStyle}>{service.title}</td>
            <td style={lastTdStyle}>₹{prices[idx] || 1000}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Pricing;
