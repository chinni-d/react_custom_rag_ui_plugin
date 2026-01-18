const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, '../../public');
const outDir = path.resolve(__dirname, '../src');

const logoPath = path.join(publicDir, 'bot_logo.jpg');
const soundPath = path.join(publicDir, 'sound.mp3');

console.log(`Reading assets from: ${publicDir}`);
console.log(`Writing assets to: ${outDir}`);

function fileToBase64(filePath, mimeType) {
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return '';
    }
    const fileData = fs.readFileSync(filePath);
    return `data:${mimeType};base64,${fileData.toString('base64')}`;
}

const logoBase64 = fileToBase64(logoPath, 'image/jpeg');
const soundBase64 = fileToBase64(soundPath, 'audio/mpeg');

const content = `// This file is auto-generated. Do not edit.
export const DEFAULT_LOGO = "${logoBase64}";
export const DEFAULT_SOUND = "${soundBase64}";
`;

fs.writeFileSync(path.join(outDir, 'assets.ts'), content);
console.log('Assets generated in src/assets.ts');
