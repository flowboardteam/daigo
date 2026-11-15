const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');
  const targetFiles = [
    'built-for-enterprise.jpg',
    'engineers-at-work.jpg',
    'investor-relations.jpg',
    'fde-model.jpg',
    'thought-leadership.jpg',
    'documentation.jpg',
    'announcement.jpg',
    'industries/agriculture.jpg',
    'industries/energy.jpg',
    'industries/finance.jpg',
    'industries/healthcare.jpg',
    'industries/mining.jpg',
    'industries/supply-chain.jpg',
  ];

  console.log('Optimizing images...');
  for (const relPath of targetFiles) {
    const fullPath = path.join(publicDir, relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      continue;
    }

    const originalSize = fs.statSync(fullPath).size;
    const tempJpg = fullPath + '.tmp.jpg';
    const webpPath = fullPath.replace(/\.jpg$/, '.webp');

    // 1. Optimize JPEG
    await sharp(fullPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toFile(tempJpg);

    // 2. Generate WebP
    await sharp(fullPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(webpPath);

    fs.renameSync(tempJpg, fullPath);
    const newJpgSize = fs.statSync(fullPath).size;
    const newWebpSize = fs.statSync(webpPath).size;

    console.log(`[${relPath}] ${(originalSize / 1024 / 1024).toFixed(2)} MB -> JPG: ${(newJpgSize / 1024).toFixed(0)} KB, WebP: ${(newWebpSize / 1024).toFixed(0)} KB`);
  }
}

optimizeImages()
  .then(() => console.log('Image optimization complete!'))
  .catch(err => {
    console.error('Error optimizing images:', err);
    process.exit(1);
  });
