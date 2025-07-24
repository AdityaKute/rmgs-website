import React from 'react';
import '../App.css';

const Gallery = () => (
  <div className="gallery">
    <h2>Gallery</h2>
    <div className="gallery-grid">
      {[1, 2, 3, 4].map(i => <div key={i} className="gallery-item">Image {i}</div>)}
    </div>
  </div>
);

export default Gallery;
