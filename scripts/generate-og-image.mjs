import { createCanvas, loadImage, GlobalFonts } from '@napi-rs/canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

// Register fonts
GlobalFonts.registerFromPath(join(__dirname, 'RedditSans-SemiBold.ttf'), 'Reddit Sans SemiBold');
GlobalFonts.registerFromPath(join(__dirname, 'RedditSans-Bold.ttf'), 'Reddit Sans Bold');
GlobalFonts.registerFromPath(join(__dirname, 'Satoshi-Bold.ttf'), 'Satoshi Bold');
GlobalFonts.registerFromPath(join(__dirname, 'Satoshi-Medium.ttf'), 'Satoshi Medium');
GlobalFonts.registerFromPath(join(__dirname, 'Figtree-Regular.ttf'), 'Figtree Regular');

// Brand colors
const colors = {
  base: '#FDFBF7',      // Warm eggshell
  baseRgb: [253, 251, 247],
  lantern: '#F58220',   // Lantern orange
  text: '#1a1a1a',      // Warm black (not pure black)
  textLight: '#9ca3af', // Muted gray for beta tag
};

// Canvas dimensions (OG image standard)
const SCALE = 1;
const WIDTH = 1200 * SCALE;
const HEIGHT = 630 * SCALE;

async function generateOGImage() {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');

  // Background - warm eggshell base
  ctx.fillStyle = colors.base;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Hero gradient overlay: blue top → orange bottom
  const heroGradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
  heroGradient.addColorStop(0, 'rgba(128, 178, 253, 0.10)');    // Light blue at top - 10% opacity
  heroGradient.addColorStop(0.43, 'rgba(128, 178, 253, 0.10)'); // Light blue continues to 43%
  heroGradient.addColorStop(1, 'rgba(255, 123, 2, 0.19)');      // Orange at bottom - 19% opacity
  ctx.fillStyle = heroGradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Load and draw waves background
  try {
    const wavesPath = join(rootDir, 'src/assets/waves-trans.png');
    const waves = await loadImage(wavesPath);

    // Draw waves at 70% opacity (reduced by 20%)
    ctx.globalAlpha = 0.7;

    // Scale waves smaller, position lower (moved down 5% more)
    const scale = Math.max(WIDTH / waves.width, HEIGHT / waves.height) * 1.1;
    const scaledWidth = waves.width * scale;
    const scaledHeight = waves.height * scale;
    const offsetX = (WIDTH - scaledWidth) / 2;
    const offsetY = HEIGHT - scaledHeight * 0.58; // Moved up ~125px to show more orange wave

    ctx.drawImage(waves, offsetX, offsetY, scaledWidth, scaledHeight);
    ctx.globalAlpha = 1;

    // Gradient overlay - fades top and bottom edges into background
    const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);
    const [r, g, b] = colors.baseRgb;
    gradient.addColorStop(0, `rgba(${r},${g},${b}, 1)`);      // Top: solid background
    gradient.addColorStop(0.35, `rgba(${r},${g},${b}, 0.6)`); // Upper transition
    gradient.addColorStop(0.6, `rgba(${r},${g},${b}, 0)`);    // Lower: transparent (waves visible)
    gradient.addColorStop(1, `rgba(${r},${g},${b}, 0.3)`);    // Bottom edge: slight fade

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
  } catch (e) {
    console.log('Could not load waves:', e.message);
  }

  // Logo + MitLivMed + beta - top left
  try {
    const logoPath = join(rootDir, 'src/assets/logo.png');
    const logo = await loadImage(logoPath);
    const logoSize = 50 * SCALE;
    const logoX = 50 * SCALE;
    const logoY = 40 * SCALE;
    ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);

    // Company name next to logo - Reddit Sans SemiBold
    ctx.fillStyle = colors.text;
    ctx.font = `600 ${28 * SCALE}px "Reddit Sans SemiBold"`;
    ctx.textAlign = 'left';
    const nameX = logoX + logoSize + 12 * SCALE;
    const nameY = logoY + 35 * SCALE;
    ctx.fillText('MitLivMed', nameX, nameY);

    // "beta" superscript
    const nameWidth = ctx.measureText('MitLivMed').width;
    ctx.fillStyle = colors.textLight;
    ctx.font = `600 ${14 * SCALE}px "Reddit Sans SemiBold"`;
    ctx.fillText('beta', nameX + nameWidth + 4 * SCALE, nameY - 10 * SCALE);
  } catch (e) {
    console.log('Could not load logo:', e.message);
  }

  // Main hook - centered
  const centerX = WIDTH / 2;
  const hookY = HEIGHT * 0.38;

  // Line 1: "Det ingen taler om..." - Satoshi Medium (regular weight)
  ctx.fillStyle = colors.text;
  ctx.font = `500 ${52 * SCALE}px "Satoshi Medium"`;
  ctx.textAlign = 'center';
  ctx.fillText('Det ingen taler om...', centerX, hookY);

  // Line 2: "Hvad sker der efter diagnosen?"
  // Need to draw "efter" with underline in orange
  const line2Y = hookY + 70 * SCALE;
  ctx.font = `700 ${52 * SCALE}px "Satoshi Bold"`;

  const part1 = 'Hvad sker der ';
  const part2 = 'efter';
  const part3 = ' diagnosen?';

  // Measure each part
  const part1Width = ctx.measureText(part1).width;
  const part2Width = ctx.measureText(part2).width;
  const part3Width = ctx.measureText(part3).width;
  const totalWidth = part1Width + part2Width + part3Width;

  const startX = centerX - totalWidth / 2;

  // Draw part1
  ctx.textAlign = 'left';
  ctx.fillStyle = colors.text;
  ctx.fillText(part1, startX, line2Y);

  // Draw "efter" in text color
  ctx.fillText(part2, startX + part1Width, line2Y);

  // Draw underline for "efter" in orange
  ctx.strokeStyle = colors.lantern;
  ctx.lineWidth = 4 * SCALE;
  ctx.beginPath();
  ctx.moveTo(startX + part1Width, line2Y + 8 * SCALE);
  ctx.lineTo(startX + part1Width + part2Width, line2Y + 8 * SCALE);
  ctx.stroke();

  // Draw part3
  ctx.fillStyle = colors.text;
  ctx.fillText(part3, startX + part1Width + part2Width, line2Y);

  // Descriptive text below hook - Figtree Regular (body font)
  const descY = line2Y + 60 * SCALE;
  ctx.font = `400 ${20 * SCALE}px "Figtree Regular"`;
  ctx.textAlign = 'center';
  ctx.fillStyle = colors.text;

  // Split long text into two lines for better readability
  const descLine1 = 'MitLivMed er et digitalt fællesskab, hvor mennesker med bipolar';
  const descLine2 = 'affektiv lidelse kan dele deres historier og erfaringer, skræddersyet til dig.';

  ctx.fillText(descLine1, centerX, descY);
  ctx.fillText(descLine2, centerX, descY + 28 * SCALE);

  // CTA in brand orange - bottom center, prominent
  ctx.font = `500 ${22 * SCALE}px "Satoshi Medium"`;
  const ctaLine1 = 'MitLivMed.dk går live i 2026';
  const ctaLine2 = '– skriv dig op som betatester';

  // Measure text for box sizing
  const ctaLine1Width = ctx.measureText(ctaLine1).width;
  const ctaLine2Width = ctx.measureText(ctaLine2).width;
  const ctaTextWidth = Math.max(ctaLine1Width, ctaLine2Width);

  const padding = 20 * SCALE;
  const boxWidth = ctaTextWidth + padding * 2;
  const boxHeight = 72 * SCALE;
  const boxX = centerX - boxWidth / 2; // Centered horizontally
  const boxY = HEIGHT * 0.84; // Bottom area, above wave overflow
  const borderRadius = 10 * SCALE;

  // Draw rounded rectangle background
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxWidth, boxHeight, borderRadius);
  ctx.fill();

  // Draw border
  ctx.strokeStyle = colors.lantern;
  ctx.lineWidth = 3 * SCALE;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxWidth, boxHeight, borderRadius);
  ctx.stroke();

  // Draw text centered inside box
  ctx.fillStyle = colors.lantern;
  ctx.textAlign = 'center';
  ctx.fillText(ctaLine1, centerX, boxY + 30 * SCALE);
  ctx.fillText(ctaLine2, centerX, boxY + 56 * SCALE);

  // Save
  const buffer = canvas.toBuffer('image/png');
  const outputPath = join(rootDir, 'public/og-image.png');
  writeFileSync(outputPath, buffer);
  console.log(`OG image saved to: ${outputPath}`);
}

generateOGImage().catch(console.error);
