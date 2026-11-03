import fs from 'fs';
import path from 'path';

const outDir = '/app/applet/public/assets/images/content';
fs.mkdirSync(outDir, { recursive: true });

// Collect all unique external image URLs across the codebase
const filesToScan = [
  'src/pages/mobile-app-development/components/IndustrySolutionsSection.jsx',
  'src/pages/mobile-app-development/components/InteractiveDemoSection.jsx',
  'src/pages/mobile-app-development/components/AppStoreSuccessSection.jsx',
  'src/pages/about-us/components/GujaratFocusSection.jsx',
  'src/pages/about-us/components/CompanyCultureSection.jsx',
  'src/pages/homepage/components/ClientTestimonials.jsx',
  'src/pages/portfolio/components/IndustryShowcase.jsx',
  'src/pages/portfolio/index.jsx'
];

async function download(url, filename) {
  const dest = path.join(outDir, filename);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log(`Already exists: ${filename}`);
    return;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`Failed (${res.status}) for ${url}`);
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Saved: ${filename} (${buffer.length} bytes)`);
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
  }
}

async function run() {
  const allUrls = new Set();
  for (const f of filesToScan) {
    if (!fs.existsSync(f)) continue;
    const content = fs.readFileSync(f, 'utf8');
    const matches = content.match(/https:\/\/(images\.unsplash\.com|images\.pexels\.com|images\.pixabay\.com)[^"'\s)]+/g);
    if (matches) {
      matches.forEach(m => allUrls.add(m));
    }
  }

  console.log(`Found ${allUrls.size} unique external image URLs.`);
  let count = 0;
  for (const url of allUrls) {
    count++;
    // Create simple hash or clean name
    let cleanName = url.split('?')[0].split('/').pop();
    if (!cleanName || cleanName.length > 50 || cleanName.includes('.')) {
      cleanName = cleanName.replace(/[^a-zA-Z0-9_-]/g, '_');
    }
    const filename = `content_${count}_${cleanName.slice(0, 30)}.jpg`;
    await download(url, filename);
  }
  console.log('Download complete.');
}

run();
