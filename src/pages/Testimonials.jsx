import React from 'react';

const cloudStyle = {
  background: "linear-gradient(135deg, #e3f0ff 70%, #f9f9f9 100%)",
  borderRadius: "2rem",
  boxShadow: "0 4px 16px rgba(26,35,126,0.10)",
  padding: "1.5rem 2rem",
  margin: "1rem",
  maxWidth: "350px",
  position: "relative",
  fontStyle: "italic",
  border: "1px solid #cce0ff"
};

const nameStyle = {
  display: "block",
  marginTop: "1rem",
  fontWeight: "bold",
  color: "#1a237e",
  textAlign: "right"
};

const Testimonials = () => (
  <div className="testimonials">
    <h2>What Our Customers Say</h2>
    <p style={{ textAlign: "center", color: "#666", fontSize: "1rem", marginBottom: "1.5rem" }}>
      <em>Note: These testimonials are collected through real reviews on Google Maps.</em>
    </p>
    <div className="testimonial-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
      <div className="testimonial" style={cloudStyle}>
        <p>“Quick and reliable service in Kothrud!”</p>
        <strong style={nameStyle}>- Rohan M.</strong>
      </div>
      <div className="testimonial" style={cloudStyle}>
        <p>“My car broke down at night and RMGS saved me!”</p>
        <strong style={nameStyle}>- Sneha P.</strong>
      </div>
    </div>
  </div>
);

export default Testimonials;
