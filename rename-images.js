const fs = require('fs');
const path = require('path');

const galleryPath = path.join(__dirname, 'public', 'Gallery Images');
const files = fs.readdirSync(galleryPath);

let count = 1;
files.forEach((file) => {
  // Skip if it's already properly named
  if (file.startsWith('safe_gallery_')) return;

  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)) return;

  const newName = `safe_gallery_${count}${ext}`;
  const oldPath = path.join(galleryPath, file);
  const newPath = path.join(galleryPath, newName);

  try {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${file} -> ${newName}`);
    count++;
  } catch (err) {
    console.error(`Error renaming ${file}:`, err);
  }
});

console.log('All images have been renamed to completely safe URL formats.');
