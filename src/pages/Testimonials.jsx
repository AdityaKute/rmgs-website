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
      <em>We have 22 real reviews with a rating of 4.8 ⭐ on map and is increasing!!!</em>
    </p>
    <div className="testimonial-grid" style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
      <div className="testimonial" style={cloudStyle}>
        <p>“On June 22, our Ertiga petrol CNG car's engine got blocked. The car stopped on the spot, the car had come for Ashtavinayak Darshan. The car was at the bypass road of Manchar and Narayangaon, nothing was found. I searched on Google and found the contact number of Royal Motor Garage and Service. I called them and they reached the car within 30 minutes. They checked the car and said that you should not take any tension. They will do the work of your car as if it were your own car. They kept their word. Their colleague Anwar Bhai who was with them is a very great mechanic. He gave me complete information about the problem due to which the car stopped and what to do to make it start, as well as which parts of the car can be used and which new ones need to be installed. And according to the information and promise they gave, they did the work very well on the car. I am grateful to them for that.”</p>
        <strong style={nameStyle}>- Prashant Khedekar</strong>
      </div>
      <div className="testimonial" style={cloudStyle}>
        <p>“I'm compelled to share my exceptional experience with this car service centre, owned by a true legend in the industry! 🙌 When my car broke down near Narayngaon at night, the owner went above and beyond to help me. He prioritized my repair, and when spare parts weren't available, he kindly dropped us off at the bus stand and ensured we boarded the right bus. What's more, he waited with us for 1.5 hours until the bus arrived! 🚌 His family-like approach and genuine helpfulness left a lasting impression. If you're looking for trustworthy and top-notch service, look no further! 🙏 5 stars isn't enough - this place deserves a gold medal! 🏅”</p>
        <strong style={nameStyle}>- Nimbalkar Shrikant Meghraj</strong>
      </div>
      <div className="testimonial" style={cloudStyle}>
        <p>“The service was satisfying and the work job was performed on priority, overall I was satisfied by the service.”</p>
        <strong style={nameStyle}>- Sanket Ghanwat</strong>
      </div>
      <div className="testimonial" style={cloudStyle}>
        <p>“The owner and technician at the garage are truly kind-hearted individuals. They provided assistance to me late at night when my car broke down near Narayangaon. They are very reliable people.”</p>
        <strong style={nameStyle}>- Sandip Biraris</strong>
      </div>
      <div className="testimonial" style={cloudStyle}>
        <p>“This garage owner Sachin Kute is gem of a person, so polite,so knowledgable, so nice that he will treat you as a family. Any teachnical issue of any type of 4 wheeler cars will be solved promptly and reasonably.”</p>
        <strong style={nameStyle}>- Anil Gawde</strong>
      </div>
    </div>
  </div>
);

export default Testimonials;
