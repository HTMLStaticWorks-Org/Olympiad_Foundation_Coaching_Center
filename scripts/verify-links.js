const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const pages = [
  'index.html', 'home-2.html', 'about.html', 'programs.html',
  'mathematics.html', 'science.html', 'reasoning.html', 'english.html',
  'grades.html', 'results.html', 'success-stories.html', 'faculty.html',
  'methodology.html', 'resources.html', 'contact.html', 'login.html',
  'register.html', 'dashboard.html', 'practice-tests.html', 'performance.html',
  'schedule.html'
];

let errors = [];

pages.forEach(p => {
  const content = fs.readFileSync(path.join(rootDir, p), 'utf8');

  // Check link validity (internal hrefs)
  const hrefMatches = content.match(/href="([^"#:]+)(\.html)?"/g) || [];
  hrefMatches.forEach(h => {
    const target = h.replace('href="', '').replace('"', '');
    if (target.endsWith('.html') && !pages.includes(target)) {
      errors.push(`Broken link in ${p}: ${target}`);
    }
  });

  // Check image src validity
  const srcMatches = content.match(/src="([^"]+)"/g) || [];
  srcMatches.forEach(s => {
    const target = s.replace('src="', '').replace('"', '');
    if (target.startsWith('images/')) {
      const fullImg = path.join(rootDir, target);
      if (!fs.existsSync(fullImg)) {
        errors.push(`Missing image in ${p}: ${target}`);
      }
    }
  });
});

console.log('Internal link & image path verification completed.');
console.log('Total issues found: ' + errors.length);
if (errors.length > 0) {
  console.log(errors);
} else {
  console.log('ALL internal links and image paths are 100% VALID!');
}

