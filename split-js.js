const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'js', 'legacy-script.js');
const srcContent = fs.readFileSync(srcFile, 'utf8');

const sections = [
    { name: 'search', pattern: /\/\/ ==================== RECHERCHE AMÉLIORÉE ====================(.*?)(?=\/\/ ====================|$)/s, file: 'js/components/search.js' },
    { name: 'lightbox', pattern: /\/\/ ==================== LIGHTBOX ====================(.*?)(?=\/\/ ====================|$)/s, file: 'js/components/gallery.js' },
    { name: 'theme', pattern: /\/\/ ==================== THEME DARK\/LIGHT ====================(.*?)(?=\/\/ ====================|$)/s, file: 'js/core/theme.js' },
    { name: 'navigation', pattern: /\/\/ ==================== PROGRESS BAR & HAMBURGER ====================(.*?)(?=\/\/ ====================|$)/s, file: 'js/components/navigation.js' },
    { name: 'animations', pattern: /\/\/ ==================== SCROLL REVEAL & COMPTEURS ANIMÉS ====================(.*?)(?=\/\/ ====================|$)/s, file: 'js/utils/animations.js' },
    { name: 'chatbot', pattern: /\/\/ ==================== CHATBOT STATE HELPER ====================(.*?)(?=\/\/ ==================== MODALES ARTICLES \/ GUIDES |$)/s, file: 'js/components/chatbot.js' },
    { name: 'modals', pattern: /\/\/ ==================== MODALES ARTICLES \/ GUIDES ====================(.*?)(?=\/\/ ====================|$)/s, file: 'js/components/modals.js' },
    { name: 'pwa', pattern: /\/\/ ==================== IMPROVEMENTS & PWA LOGIC ====================(.*?)(?=\/\/ ====================|$)/s, file: 'js/utils/pwa.js' }
];

let remainingContent = srcContent;

sections.forEach(sec => {
    const match = srcContent.match(sec.pattern);
    if (match) {
        fs.writeFileSync(path.join(__dirname, sec.file), match[0], 'utf8');
        remainingContent = remainingContent.replace(match[0], '');
        console.log(`Extracted: ${sec.name} -> ${sec.file}`);
    }
});

// Update main.js
let mainJsContent = `import '../css/style.css';\n\n`;
sections.forEach(sec => {
    mainJsContent += `import './${sec.file.replace('js/', '')}';\n`;
});
mainJsContent += `import './legacy-script.js';\n`;

fs.writeFileSync(path.join(__dirname, 'js', 'main.js'), mainJsContent, 'utf8');
fs.writeFileSync(srcFile, remainingContent, 'utf8');

console.log('Extraction complete.');
