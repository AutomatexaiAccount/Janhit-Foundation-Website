import fs from 'fs';
import path from 'path';
import styles from './janhit-gallery.module.css';
import GalleryGrid from '../../components/GalleryGrid';

export default function JanhitGallery() {
  const galleryPath = path.join(process.cwd(), 'public', 'Gallery Images');
  let imageFiles = [];
  
  try {
    const files = fs.readdirSync(galleryPath);
    const uniqueSizes = new Set();
    const seenNames = new Set(); // To filter obvious duplicates by base name
    
    // Filter only images and remove exact duplicates based on file size
    imageFiles = files.filter(file => {
      if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) return false;
      
      // Filter out files that have " (1)", " (2)" or "-small" in the name explicitly
      if (file.includes(' (1)') || file.includes(' (2)') || file.includes('-small')) {
         return false;
      }
      
      const filePath = path.join(galleryPath, file);
      const stats = fs.statSync(filePath);
      
      if (uniqueSizes.has(stats.size)) {
        return false; // Skip duplicate
      }
      
      uniqueSizes.add(stats.size);
      return true;
    });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
  }

  return (
    <div className={styles.galleryPage}>
      <div className={styles.heroSection}>
        <div className="container">
          <h1>Janhit Gallery</h1>
          <p>Explore our moments and memories</p>
        </div>
      </div>
      <div className={`container ${styles.galleryContainer}`}>
        <GalleryGrid images={imageFiles} />
      </div>
    </div>
  );
}
