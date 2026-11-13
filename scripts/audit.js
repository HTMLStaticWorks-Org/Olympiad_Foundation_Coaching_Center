const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'images');

const expectedPages = [
  'index.html', 'home-2.html', 'about.html', 'programs.html',
  'mathematics.html', 'science.html', 'reasoning.html', 'english.html',
  'grades.html', 'results.html', 'success-stories.html', 'faculty.html',
  'methodology.html', 'resources.html', 'contact.html', 'login.html',
  'register.html', 'dashboard.html', 'practice-tests.html', 'performance.html',
  'schedule.html'
];

let allImagesFound = new Map();
let totalMissingPages = 0;
let brokenImageLinks = [];

// 1. Check all expected pages
expectedPages.forEach(p => {
  const fullPath = path.join(rootDir, p);
  if (!fs.existsSync(fullPath)) {
    console.error('Missing page: ' + p);
    totalMissingPages++;
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const matches = content.match(/images\/image-\d+\.png/g) || [];
  matches.forEach(img => {
    if (!allImagesFound.has(img)) allImagesFound.set(img, []);
    allImagesFound.get(img).push(p);

    // Verify file actually exists on disk
    const imgDiskPath = path.join(rootDir, img);
    if (!fs.existsSync(imgDiskPath)) {
      brokenImageLinks.push({ page: p, image: img });
    }
  });
});

console.log('--- AUDIT REPORT ---');
console.log('Pages checked: ' + expectedPages.length + ' (Missing: ' + totalMissingPages + ')');
console.log('Total unique image paths referenced in HTML: ' + allImagesFound.size);

// 2. Check images 1 to 85 coverage
let missingImages = [];
for (let i = 1; i <= 85; i++) {
  const imgName = 'images/image-' + i + '.png';
  if (!allImagesFound.has(imgName)) {
    missingImages.push(imgName);
  }
  const diskFile = path.join(rootDir, imgName);
  if (!fs.existsSync(diskFile)) {
    console.warn('Warning: File does not exist on disk: ' + imgName);
  }
}

console.log('Images (1 to 85) unreferenced in site count: ' + missingImages.length);
if (missingImages.length > 0) {
  console.log('Unreferenced images: ', missingImages);
} else {
  console.log('SUCCESS: All 85 images (image-1.png to image-85.png) are actively referenced!');
}

console.log('Broken image references count: ' + brokenImageLinks.length);
if (brokenImageLinks.length > 0) {
  console.error('Broken image links found: ', brokenImageLinks);
} else {
  console.log('SUCCESS: Zero broken image references!');
}
