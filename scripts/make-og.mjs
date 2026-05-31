// Genera public/og.png (1200x630) para previews sociales.
// Uso: node scripts/make-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const W = 1200;
const H = 630;
const PHOTO = 300;
const PX = 800; // left of photo
const PY = 165; // top of photo
const CX = PX + PHOTO / 2;
const CY = PY + PHOTO / 2;

const bgSvg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0e1a"/>
      <stop offset="1" stop-color="#111726"/>
    </linearGradient>
    <radialGradient id="glow1" cx="78%" cy="12%" r="55%">
      <stop offset="0" stop-color="#38d6c4" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#38d6c4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0%" cy="85%" r="55%">
      <stop offset="0" stop-color="#6ea8fe" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#6ea8fe" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#38d6c4"/>
      <stop offset="1" stop-color="#6ea8fe"/>
    </linearGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#38d6c4"/>
      <stop offset="1" stop-color="#6ea8fe"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <!-- brand mark -->
  <rect x="90" y="86" width="56" height="56" rx="15" fill="url(#mark)"/>
  <text x="118" y="124" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#04121a" text-anchor="middle">MR</text>

  <!-- eyebrow -->
  <text x="90" y="258" font-family="'Consolas', 'Courier New', monospace" font-size="25" letter-spacing="3" fill="#38d6c4">DATA ENGINEERING &amp; ANALYTICS</text>

  <!-- name -->
  <text x="86" y="350" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="82" font-weight="800" fill="#e7ecf5">Matías Roubaud</text>

  <!-- subtitle -->
  <text x="90" y="420" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="36" font-weight="500" fill="#93a0b8">Cloud · Data · AI · BI</text>

  <!-- domain -->
  <text x="90" y="540" font-family="'Consolas', 'Courier New', monospace" font-size="27" fill="#38d6c4">matiasroubaud.com</text>

  <!-- photo ring -->
  <circle cx="${CX}" cy="${CY}" r="${PHOTO / 2 + 6}" fill="none" stroke="url(#ring)" stroke-width="5"/>
</svg>`;

const maskSvg = `<svg width="${PHOTO}" height="${PHOTO}" xmlns="http://www.w3.org/2000/svg"><circle cx="${PHOTO / 2}" cy="${PHOTO / 2}" r="${PHOTO / 2}" fill="#fff"/></svg>`;

const photo = await sharp(resolve(root, "src/assets/matias.jpg"))
  .resize(PHOTO, PHOTO, { fit: "cover", position: "top" })
  .composite([{ input: Buffer.from(maskSvg), blend: "dest-in" }])
  .png()
  .toBuffer();

await sharp(Buffer.from(bgSvg))
  .composite([{ input: photo, top: PY, left: PX }])
  .png()
  .toFile(resolve(root, "public/og.png"));

console.log("✓ public/og.png generado (1200x630)");
