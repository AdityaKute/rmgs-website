import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
      <h2><u>Contact Us</u></h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="message" placeholder="Message" onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>

      <button
        type="button"
        className="whatsapp-btn"
        onClick={() => window.open("https://wa.me/919987429427", "_blank")}
      >
        Chat on WhatsApp
      </button>
    </div>
  );
};

export default Contact;
