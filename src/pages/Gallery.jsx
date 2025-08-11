import React, { useEffect, useState } from 'react';
import '../App.css';
import galleryOwner from '../assets/gallery-owner.jpg';
import galleryPoster1 from '../assets/gallery-poster1.jpg';
import galleryDentingPainting from '../assets/gallery-dentingpainting.jpg';
import galleryService from '../assets/gallery-servicing1.jpg';

const galleryGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  padding: '1rem',
};

const galleryItemStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '8px',
};

const Gallery = () => {
  const defaultImages = [
    { src: galleryOwner, alt: 'Gallery Owner' },
    { src: galleryPoster1, alt: 'Poster 1' },
    { src: galleryDentingPainting, alt: 'Denting and Painting' },
    { src: galleryService, alt: 'Servicing' },
  ];

  const [images, setImages] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("rmgs_gallery") || "[]")
      .map((src, i) => ({ src, alt: `Uploaded Photo ${i + 1}` }));

    // Merge and remove duplicates by src
    const allImages = [...defaultImages, ...storedPhotos];
    const uniqueImages = allImages.filter(
      (img, index, self) =>
        index === self.findIndex(t => t.src === img.src)
    );

    setImages(uniqueImages);
  }, []);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div style={galleryGridStyle}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} style={galleryItemStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
