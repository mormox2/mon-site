import { setLanguage, currentLang } from '../core/i18n.js';

// Helper functions to prevent crashes if IDs are missing
function safeSet(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
    return el;
}
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
    return el;
}

function readFromStorage(key, fallback = null) {
    try {
        const value = window.localStorage.getItem(key);
        return value === null ? fallback : value;
    } catch (error) {
        console.warn(`Storage read failed for "${key}".`, error);
        return fallback;
    }
}

function writeToStorage(key, value) {
    try {
        window.localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.warn(`Storage write failed for "${key}".`, error);
        return false;
    }
}

function parseSubmissionTracker(rawValue, now = Date.now()) {
    if (!rawValue) return { count: 0, firstAttempt: now };

    try {
        const parsed = JSON.parse(rawValue);
        const count = Number(parsed?.count);
        const firstAttempt = Number(parsed?.firstAttempt);

        if (!Number.isFinite(count) || !Number.isFinite(firstAttempt)) {
            throw new Error('Invalid tracker shape');
        }

        return {
            count: Math.max(0, count),
            firstAttempt
        };
    } catch (error) {
        console.warn('Invalid submission tracker in storage, resetting it.', error);
        return { count: 0, firstAttempt: now };
    }
}

function isEmailJsAvailable() {
    return typeof window.emailjs !== 'undefined'
        && typeof window.emailjs.init === 'function'
        && typeof window.emailjs.send === 'function';
}

function isFlatpickrAvailable() {
    return typeof window.flatpickr === 'function' && !!window.flatpickr.l10ns;
}

function getFlatpickrLocale(lang) {
    if (!isFlatpickrAvailable()) return null;
    return flatpickr.l10ns[lang] || flatpickr.l10ns.default;
}

function buildMailtoLink(subject, body) {
    return `mailto:contact@rtimidental.tn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function getMailFallbackNotice(lang) {
    const notices = {
        fr: "Le service d'envoi est indisponible. Votre messagerie va s'ouvrir.",
        en: 'The email service is unavailable. Your mail app will open.',
        ar: 'خدمة الإرسال غير متاحة حاليا. سيتم فتح البريد الإلكتروني.'
    };

    return notices[lang] || notices.fr;
}

function openMailtoFallback(link, lang) {
    showToast(getMailFallbackNotice(lang), 'warning', 6000);
    window.location.href = link;
}

(function() {
    if (!isEmailJsAvailable()) {
        console.warn('EmailJS unavailable; forms will use the mail fallback.');
        return;
    }

    try {
        emailjs.init("SE67PfF6urnha7Oom");
    } catch (error) {
        console.warn('EmailJS initialization failed; forms will use the mail fallback.', error);
    }
})();


// Scroll vers le formulaire RDV au clic sur le bouton CTA
document.getElementById('ctaBookBtn')?.addEventListener('click', () => {
    document.getElementById('rdv').scrollIntoView({ behavior: 'smooth' });
});

// Écouteurs de langue
document.getElementById('langFr').addEventListener('click', () => setLanguage('fr'));
document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
document.getElementById('langAr').addEventListener('click', () => setLanguage('ar'));

window.addEventListener('load', () => {
    setLanguage(currentLang);
});

// ==================== FORMULAIRE DE RENDEZ-VOUS (SÉCURISÉ) ====================
const form = document.getElementById('appointmentForm');
const submitBtn = document.getElementById('submitBtn');
const phoneInput = document.getElementById('phone');
const phoneValidation = document.getElementById('phone-validation');
const dateInput = document.getElementById('date');
const errorDiv = document.getElementById('formError');
const confirmationModal = document.getElementById('confirmationModal');
const modalMessage = document.getElementById('modalMessage');
const modalClose = confirmationModal.querySelector('.modal-close');

if (dateInput && isFlatpickrAvailable()) {
    flatpickr(dateInput, {
        locale: getFlatpickrLocale(currentLang) || flatpickr.l10ns.default,
        minDate: 'today',
        dateFormat: 'd/m/Y',
        allowInput: true
    });
} else if (dateInput) {
    console.warn('Flatpickr unavailable; using the text date input fallback.');
}

export { safeSet, safeSetText, readFromStorage, writeToStorage, parseSubmissionTracker, isEmailJsAvailable, isFlatpickrAvailable, getFlatpickrLocale, buildMailtoLink, getMailFallbackNotice, openMailtoFallback };

window.safeSet = safeSet; window.safeSetText = safeSetText; window.readFromStorage = readFromStorage; window.writeToStorage = writeToStorage;
