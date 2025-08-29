const sharp = require('sharp');
const fs = require('fs');

// Create SVG content
const svgContent = `
<svg width="400" height="120" viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .logo-text { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
        font-weight: bold; 
        fill: #1f2937; 
        letter-spacing: 2px;
      }
      .logo-subtext { 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
        font-weight: 300; 
        fill: #6b7280; 
        letter-spacing: 4px;
      }
    </style>
  </defs>
  
  <rect width="400" height="120" fill="white"/>
  
  <!-- Main Text -->
  <text x="20" y="50" class="logo-text" font-size="36">KINGSMEN</text>
  
  <!-- Subtext -->
  <text x="20" y="80" class="logo-subtext" font-size="18">CONSULTANCY</text>
</svg>`;

// Generate PNG versions
async function generateLogos() {
  try {
    // Original size
    await sharp(Buffer.from(svgContent))
      .png()
      .toFile('./public/logo.png');
    
    // Larger version for high DPI
    await sharp(Buffer.from(svgContent))
      .png()
      .resize(800, 240)
      .toFile('./public/logo-2x.png');
    
    // Smaller version
    await sharp(Buffer.from(svgContent))
      .png()
      .resize(200, 60)
      .toFile('./public/logo-sm.png');
    
    console.log('✅ Logo PNG files generated successfully!');
    console.log('   - logo.png (400x120)');
    console.log('   - logo-2x.png (800x240)');
    console.log('   - logo-sm.png (200x60)');
    
  } catch (error) {
    console.error('❌ Error generating logos:', error);
  }
}

generateLogos();