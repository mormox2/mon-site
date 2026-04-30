import { translations } from '../data/translations.js';
import { uiMessages } from '../data/ui-messages.js';
import { renderDynamicSections } from '../render/dynamic-sections.js';
import { safeSet, safeSetText, readFromStorage, writeToStorage} from '../utils/helpers.js';

// ==================== TRADUCTIONS (FR/EN/AR) ====================
const SUPPORTED_LANGS = ['fr', 'en', 'ar'];

function normalizeLanguage(lang, fallback = 'fr') {
    return SUPPORTED_LANGS.includes(lang) ? lang : fallback;
}

function getCurrentTranslation() {
    return translations[normalizeLanguage(currentLang, 'fr')] || translations.fr;
}

function getCurrentUiMessages() {
    return uiMessages[normalizeLanguage(currentLang, 'fr')] || uiMessages.fr;
}

// ==================== AUTO-DETECT & INIT LANG ====================
const urlParams = new URLSearchParams(window.location.search);
const urlLang = normalizeLanguage(urlParams.get('lang'), null);
let currentLang = normalizeLanguage(urlLang || readFromStorage('lang'), null);

if (!currentLang) {
    const browserLang = navigator.language.slice(0, 2);
    currentLang = normalizeLanguage(browserLang, 'fr');
}

// ==================== SYSTÈME DE NOTIFICATIONS TOAST ====================
function showToast(message, type = 'info', duration = 4000) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');

    let icon = '';
    if (type === 'success') icon = '✅';
    else if (type === 'error') icon = '❌';
    else if (type === 'warning') icon = '⚠️';
    else icon = 'ℹ️';

    const iconEl = document.createElement('span');
    iconEl.className = 'toast-icon';
    iconEl.textContent = icon;

    const contentEl = document.createElement('span');
    contentEl.className = 'toast-content';
    contentEl.textContent = String(message ?? '');

    const closeLabels = { fr: 'Fermer', en: 'Close', ar: 'إغلاق'};
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', closeLabels[currentLang] || 'Fermer');
    closeBtn.textContent = 'x';

    toast.append(iconEl, contentEl, closeBtn);
    closeBtn.addEventListener('click', () => removeToast(toast));

    container.appendChild(toast);

    const timeout = setTimeout(() => removeToast(toast), duration);
    toast.dataset.timeout = timeout;
}

function removeToast(toast) {
    if (!toast) return;
    clearTimeout(parseInt(toast.dataset.timeout));
    toast.classList.add('hiding');
    setTimeout(() => {
        if (toast.parentNode) toast.remove();
}, 300);
}

function setLanguage(lang) {
    const normalizedLang = normalizeLanguage(lang, 'fr');
    currentLang = normalizedLang;
    writeToStorage('lang', normalizedLang);
    const t = translations[normalizedLang] || translations.fr;

    // Mise à jour de l'URL sans rechargement
    const url = new URL(window.location);
    url.searchParams.set('lang', normalizedLang);
    window.history.pushState({}, '', url);

    // Direction et balise HTML
    document.documentElement.lang = normalizedLang;
    document.documentElement.dir = normalizedLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', normalizedLang === 'ar');

    // Textes basiques
    document.title = t.headerTitle;
    safeSetText('headerTitle', t.headerTitle);
    safeSetText('headerSubtitle', t.headerSubtitle);
    safeSetText('skipLink', t.skipLink);
    safeSet('ctaBookBtn', t.ctaBook);

    // Navigation
    safeSetText('navAbout', t.navAbout);
    safeSetText('navServices', t.navServices);
    safeSetText('navTestimonials', t.navTestimonials);
    safeSetText('navGallery', t.navGallery);
    safeSetText('navVideos', t.navVideos);
    safeSetText('navBlog', t.navBlog);
    safeSetText('navKb', t.navKb);
    safeSetText('navFaq', t.navFaq);
    safeSetText('navRdv', t.navRdv);
    safeSetText('navContact', t.navContact);

    // Sections principales
    safeSet('aboutTitle', t.aboutTitle);
    safeSet('aboutText1', t.aboutText1);
    const about2 = document.getElementById('aboutText2');
    if (about2) {
        about2.innerText = t.aboutText2;
        about2.style.display = normalizedLang === 'ar' ? 'block' : 'none';
}
    safeSetText('aboutText3', t.aboutText3);

    renderDynamicSections(t, normalizedLang);

    // Formulaire RDV et Contact
    safeSet('rdvTitle', t.rdvTitle);
    safeSetText('nameLabel', t.nameLabel);
    safeSetText('phoneLabel', t.phoneLabel);
    safeSetText('typeLabel', t.typeLabel);
    safeSetText('selectDefault', t.selectDefault);
    safeSetText('optImplant', t.optImplant);
    safeSetText('optEsthetique', t.optEsthetique);
    safeSetText('optOrtho', t.optOrtho);
    safeSetText('optUrgence', t.optUrgence);
    safeSetText('optAutre', t.optAutre);
    safeSetText('dateLabel', t.dateLabel);
    safeSetText('messageLabel', t.messageLabel);
    safeSetText('consentLabel', t.consentLabel);
    safeSet('waFallbackText', t.waFallback);
    safeSetText('submitBtn', t.submitBtn);

    safeSet('contactTitle', t.contactTitle);
    safeSet('addressLabel', t.addressLabel);
    safeSet('phoneContactLabel', t.phoneContactLabel);
    safeSet('emailLabel', t.emailLabel);
    safeSet('hoursLabel', t.hoursLabel);
    safeSetText('hoursText', t.hoursText);
    safeSetText('quickMsgTitle', t.quickMsgTitle);
    safeSetText('quickMsgLabel', t.quickMsgLabel);
    safeSetText('quickSendBtn', t.quickSendBtn);

    safeSetText('modalTitle', t.modalTitle);
    safeSetText('modalSub', t.modalSub);

    // Footer
    safeSetText('footerTitle', t.footerTitle);
    safeSet('footerAddress', t.footerAddress);
    safeSetText('quickLinksTitle', t.quickLinksTitle);
    safeSetText('footerServices', t.footerServices);
    safeSetText('footerGallery', t.footerGallery);
    safeSetText('footerRdv', t.footerRdv);
    safeSetText('footerFaq', t.footerFaq);
    safeSetText('legalTitle', t.legalTitle);
    safeSetText('copyright', t.copyright);
    safeSetText('credits', t.credits);
    safeSetText('footerBottomText', t.footerBottomText);

    // Nouveaux textes hero/trust
    safeSetText('heroTagline', t.heroTagline);
    safeSetText('heroRdvBtn', t.heroRdvBtn);
    safeSetText('heroUrgenceBtn', t.heroUrgenceBtn);
    safeSetText('trustSafetyTitle', t.trustSafetyTitle);
    safeSetText('trustSafetyDesc', t.trustSafetyDesc);
    safeSetText('trustTechTitle', t.trustTechTitle);
    safeSetText('trustTechDesc', t.trustTechDesc);
    safeSetText('trustPatientsTitle', t.trustPatientsTitle);
    safeSetText('trustPatientsDesc', t.trustPatientsDesc);

    // Placeholders
    const searchInput = document.getElementById('siteSearch');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.placeholder = t.datePlaceholder;
        if (dateInput._flatpickr && isFlatpickrAvailable()) {
            const fpLocale = getFlatpickrLocale(normalizedLang);
            if (fpLocale) {
                dateInput._flatpickr.set('locale', fpLocale);
}
}
}

    // Boutons de langue actifs
    document.getElementById('langFr').classList.toggle('active', normalizedLang === 'fr');
    document.getElementById('langEn').classList.toggle('active', normalizedLang === 'en');
    document.getElementById('langAr').classList.toggle('active', normalizedLang === 'ar');
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.setAttribute('aria-pressed', btn.dataset.lang === normalizedLang ? 'true' : 'false');
});

    window.updateHours?.();
    
    // Réattacher la lightbox car le DOM de la galerie a été régénéré !
    
        window.attachLightboxToImages?.();
}



export { setLanguage, currentLang, translations, uiMessages, getCurrentTranslation, getCurrentUiMessages, showToast, normalizeLanguage};

window.showToast = showToast; window.setLanguage = setLanguage; window.currentLang = currentLang; window.normalizeLanguage = normalizeLanguage; window.translations = translations;

