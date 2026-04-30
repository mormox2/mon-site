const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'css', 'style.css');
let content = fs.readFileSync(srcFile, 'utf8');

const sections = [
    { start: '/* ========== CORRECTION DÉBORDEMENTS ========== */', name: 'base/reset.css' },
    { start: '/* ========== HEADER ========== */', name: 'layout/header.css' },
    { start: '/* Navigation Glassmorphism */', name: 'components/navigation.css' },
    { start: '/* Formulaires */', name: 'components/forms.css' },
    { start: '/* Modal */', name: 'components/modals.css' },
    { start: '/* ===== RÉVÉLATION AU SCROLL (REVEAL) ===== */', name: 'utilities/animations.css' },
    { start: '/* ==================== RECHERCHE ==================== */', name: 'components/search.css' },
    { start: '/* ===== NOUVEAU HEADER (HERO + NAV MODERNE) ===== */', name: 'components/hero.css' },
    { start: '/* ========== STYLES MOBILES (max-width: 768px) – UN SEUL BLOC ========== */', name: 'utilities/mobile.css' }
];

// Helper to find exact byte positions and split
let importStatements = ``;
let remainingCSS = content;

// Since we are slicing from bottom to top, it's safer
for (let i = sections.length - 1; i >= 0; i--) {
    const sec = sections[i];
    // Find the start index
    const startIndex = remainingCSS.indexOf(sec.start);
    if (startIndex !== -1) {
        const extracted = remainingCSS.slice(startIndex);
        remainingCSS = remainingCSS.slice(0, startIndex);
        
        const targetPath = path.join(__dirname, 'css', sec.name);
        // Create directory if it doesn't exist
        fs.mkdirSync(path.dirname(targetPath), { recursive: true });
        fs.writeFileSync(targetPath, extracted, 'utf8');
        
        importStatements = `@import './${sec.name}';\n` + importStatements;
        console.log(`Extracted: ${sec.name}`);
    } else {
        console.log(`Failed to find section: ${sec.start}`);
    }
}

// Update the main style.css
// The remainingCSS contains everything before the first extracted block
const finalCSS = remainingCSS + `\n\n/* Imported Modules */\n` + importStatements;
fs.writeFileSync(srcFile, finalCSS, 'utf8');

console.log('CSS Extraction complete.');
