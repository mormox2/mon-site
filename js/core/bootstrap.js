import { currentLang, setLanguage } from './i18n.js';

document.getElementById('ctaBookBtn')?.addEventListener('click', () => {
    document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('langFr')?.addEventListener('click', () => setLanguage('fr'));
document.getElementById('langEn')?.addEventListener('click', () => setLanguage('en'));
document.getElementById('langAr')?.addEventListener('click', () => setLanguage('ar'));

window.addEventListener('load', () => {
    setLanguage(currentLang);
});
