import fs from 'fs';
import path from 'path';

const contentDir = '/app/applet/public/assets/images/content';
const files = fs.readdirSync(contentDir);

// Build map from photo id/keyword to local path
const photoMap = new Map();
for (const f of files) {
  // e.g. content_1_photo-1556742049-0cfed4f6a45d.jpg -> photo-1556742049-0cfed4f6a45d
  const match = f.match(/content_\d+_(.+)\.jpg/);
  if (match) {
    photoMap.set(match[1], `/assets/images/content/${f}`);
  }
}

const filesToUpdate = [
  'src/pages/mobile-app-development/components/IndustrySolutionsSection.jsx',
  'src/pages/mobile-app-development/components/InteractiveDemoSection.jsx',
  'src/pages/mobile-app-development/components/AppStoreSuccessSection.jsx',
  'src/pages/about-us/components/GujaratFocusSection.jsx',
  'src/pages/about-us/components/CompanyCultureSection.jsx',
  'src/pages/homepage/components/ClientTestimonials.jsx',
  'src/pages/portfolio/components/IndustryShowcase.jsx',
  'src/pages/portfolio/index.jsx'
];

for (const filePath of filesToUpdate) {
  if (!fs.existsSync(filePath)) continue;
  let code = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  code = code.replace(/https:\/\/(images\.unsplash\.com|images\.pexels\.com|images\.pixabay\.com)[^"'\s)]+/g, (matched) => {
    // Find matching local file
    for (const [key, localPath] of photoMap.entries()) {
      if (matched.includes(key)) {
        changed = true;
        return localPath;
      }
    }
    // Fallback if not directly matched: use a high-quality local image from content or generated assets
    changed = true;
    return '/assets/images/content/content_1_photo-1556742049-0cfed4f6a45d.jpg';
  });

  if (changed) {
    fs.writeFileSync(filePath, code, 'utf8');
    console.log(`Updated ${filePath} with local images.`);
  }
}
