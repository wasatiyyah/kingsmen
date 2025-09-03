const fs = require('fs');
const path = require('path');

// Create team directory if it doesn't exist
const teamDir = path.join(__dirname, '../public/team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

// Create a simple SVG placeholder for team members
const createTeamPlaceholder = (name, role) => {
  const initials = name.split(' ').map(n => n[0]).join('');
  const colors = ['#3182ce', '#1a365d', '#d69e2e', '#2563eb', '#7c3aed', '#059669'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return `<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${color}" rx="20"/>
    <text x="100" y="120" font-family="Inter, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">${initials}</text>
    <text x="100" y="150" font-family="Inter, sans-serif" font-size="14" text-anchor="middle" fill="white" opacity="0.8">${role}</text>
  </svg>`;
};

// Team members data
const teamMembers = [
  { name: 'Michael Kingston', role: 'CEO & Founder', filename: 'ceo.jpg' },
  { name: 'Sarah Chen', role: 'CTO', filename: 'cto.jpg' },
  { name: 'David Martinez', role: 'Head of Engineering', filename: 'engineering.jpg' },
  { name: 'Emily Watson', role: 'Head of Design', filename: 'design.jpg' },
  { name: 'James Thompson', role: 'Head of Cloud Services', filename: 'cloud.jpg' },
  { name: 'Priya Patel', role: 'Head of AI/ML', filename: 'ai.jpg' }
];

// Generate placeholder images
teamMembers.forEach(member => {
  const svgContent = createTeamPlaceholder(member.name, member.role);
  const filePath = path.join(teamDir, member.filename.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`Generated placeholder for ${member.name}: ${filePath}`);
});

// Create other missing assets
const assets = [
  { name: 'og-image.svg', content: `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#1a365d"/>
    <rect x="100" y="100" width="400" height="400" fill="#3182ce" rx="20"/>
    <text x="600" y="200" font-family="Inter, sans-serif" font-size="48" font-weight="bold" text-anchor="middle" fill="white">KINGSMEN</text>
    <text x="600" y="250" font-family="Inter, sans-serif" font-size="24" text-anchor="middle" fill="white" opacity="0.8">CONSULTANCY</text>
    <text x="600" y="350" font-family="Inter, sans-serif" font-size="32" text-anchor="middle" fill="white">World-Class Software Solutions</text>
    <text x="600" y="400" font-family="Inter, sans-serif" font-size="20" text-anchor="middle" fill="white" opacity="0.7">Cloud Architecture • Custom Development • Digital Transformation</text>
  </svg>` },
  { name: 'hero-bg.svg', content: `<svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#eff6ff;stop-opacity:1" />
        <stop offset="50%" style="stop-color:#ffffff;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f3e8ff;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#bg)"/>
    <circle cx="300" cy="200" r="150" fill="#dbeafe" opacity="0.3"/>
    <circle cx="1600" cy="300" r="200" fill="#fde68a" opacity="0.3"/>
    <circle cx="400" cy="800" r="180" fill="#e9d5ff" opacity="0.3"/>
  </svg>` }
];

assets.forEach(asset => {
  const filePath = path.join(__dirname, '../public', asset.name);
  fs.writeFileSync(filePath, asset.content);
  console.log(`Generated asset: ${filePath}`);
});

console.log('\n✅ All placeholder images and assets generated successfully!');
console.log('📁 Check the public/team/ directory for team member placeholders');
console.log('📁 Check the public/ directory for other assets');
