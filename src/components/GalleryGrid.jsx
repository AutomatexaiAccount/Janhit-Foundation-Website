"use client";

import { useState } from 'react';
import styles from '../app/janhit-gallery/janhit-gallery.module.css';

export default function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={styles.grid}>
        {(() => {
          try {
            return images.map((file, index) => (
          <div key={index} className={styles.imageCard} onClick={() => openLightbox(file)}>
            <img 
              src={`/Gallery Images/${encodeURIComponent(file)}`} 
              alt={`Janhit Gallery Image ${index + 1}`} 
              loading="lazy"
            />
            <div className={styles.overlayHover}>
              <span>Click to view large</span>
            </div>
          </div>
        ));
          } catch (err) {
            return <div style={{ color: 'red', fontSize: '20px', padding: '20px', background: 'white' }}>ERROR in GalleryGrid map: {err.toString()}</div>;
          }
        })()}
        {images.length === 0 && (
          <p>No images found in the gallery.</p>
        )}
      </div>

      {selectedImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>×</button>
            <img src={`/Gallery Images/${encodeURIComponent(selectedImage)}`} alt="Enlarged" />
          </div>
        </div>
      )}
    </>
  );
}
