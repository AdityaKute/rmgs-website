import React from 'react';
import { translations } from '../assets/translations';
import { useLanguage } from '../context/LanguageContext';
const Location = () => {
    const { lang } = useLanguage();
    const currentTranslations = translations[lang];
    return (
  <div className="location">
    <h2>{currentTranslations.findUs}</h2>
    <iframe
      title="RMGS Location"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d171831.68592465276!2d73.98908829999999!3d19.1244724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd3b0aa6188db3%3A0x458775bcbf242010!2sRoyal%20Motors%20Garage%20Service!5e1!3m2!1sen!2sus!4v1753100930930!5m2!1sen!2sus"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);
}
export default Location;
