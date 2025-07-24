import React from 'react';
import services from "../assets/services.json";
import oil from '../assets/oil.png';
import brake from '../assets/brake.png';
import tire from '../assets/tire.png';
import engine from '../assets/engine.png';
import ac from '../assets/ac.png';
import transmission from '../assets/transmission.png';
import roadside from '../assets/roadside.png';
import battery from '../assets/battery.png';

const iconMap = {
  "oil.png": oil,
  "brake.png": brake,
  "tire.png": tire,
  "engine.png": engine,
  "ac.png": ac,
  "transmission.png": transmission,
  "roadside.png": roadside,
  "battery.png": battery,
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <img src={icon} alt={title} className="service-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => (
  <section className="services-preview">
    {services.map((service, idx) => (
      <ServiceCard
        key={idx}
        icon={iconMap[service.icon]}
        title={service.title}
        description={service.description}
      />
    ))}
  </section>
);

export default Services;
