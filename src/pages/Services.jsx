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

const Services = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="services">
      <h2>{t.ourServices}</h2>
      <div className="service-grid">
        {services.map(service => (
          <div className="service-card" key={service.titleKey}>
            <img
              src={iconMap[service.icon]}
              alt={t[service.titleKey]}
              className="service-icon"
            />
            <h3>{t[service.titleKey]}</h3>
            <p>{t[service.descriptionKey]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
