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

const Services = () => (
  <div className="services">
    <h2>Our Services</h2>
    <div className="service-grid">
      {services.map(service => (
        <div className="service-card" key={service.title}>
          <img
            src={iconMap[service.icon]}
            alt={service.title}
            className="service-icon"
          />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
