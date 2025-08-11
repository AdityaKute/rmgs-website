import React, { useState } from 'react';
import { translations } from '../assets/translations';
import { useLanguage } from '../context/LanguageContext';
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { lang } = useLanguage();
      const currentTranslations = translations[lang];

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Get existing messages or empty array
    const messages = JSON.parse(localStorage.getItem("rmgs_messages") || "[]");
    // Add new message
    messages.push(form);
    // Save back to localStorage
    localStorage.setItem("rmgs_messages", JSON.stringify(messages));
    alert("Message Sent!");
  };

  return (
    <div className="contact">
      <h2><u>{currentTranslations.contactUs}</u></h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder={currentTranslations.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder={currentTranslations.email} onChange={handleChange} required />
        <input name="message" placeholder={currentTranslations.message} onChange={handleChange} required />
        <button type="submit">{currentTranslations.send}</button>
      </form>

      <button
        type="button"
        className="whatsapp-btn"
        onClick={() => window.open("https://wa.me/917507491737", "_blank")}
      >
        {currentTranslations.whatsapp}
      </button>
    </div>
  );
};

export default Contact;
