import { getCurrentTranslation, showToast } from '../core/i18n.js';

// ==================== IMPROVEMENTS & PWA LOGIC ====================
(function() {
    // 1. Auto-save Form Draft
    const fieldIds = ['name', 'phone', 'type', 'date', 'message'];
fieldIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        // Clé de stockage unique par champ (ex: draft_name)
        const storageKey = 'draft_' + id;
        const saved = window.localStorage.getItem(storageKey);
        if (saved) el.value = saved;
        el.addEventListener('input', (e) => {
            window.localStorage.setItem(storageKey, e.target.value);
        });
    }
});

    // 2. Parallax Header Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.hero-header');
        if (header) {
            const scroll = window.scrollY;
            header.style.backgroundPositionY = (scroll * 0.4) + 'px';
        }
    });

    // 3. Dynamic Translation Injection for PWA
    const pwaStrings = {
        fr: { pwaBtnText: "Installer l'app", pwaIosTitle: "📲 Installer sur iPhone", pwaIosStep1: "1. Appuyez sur le bouton <strong>Partager</strong>.", pwaIosStep2: "2. Choisissez <strong>'Sur l'écran d'accueil'</strong>.", pwaIosStep3: "3. Cliquez sur <strong>Ajouter</strong>.", pwaInstallSuccess: "Application installée avec succès !", pwaNotSupported: "Pour installer l'application, ouvrez ce site dans Chrome sur mobile Android, ou utilisez Safari sur iPhone/iPad." },
        en: { pwaBtnText: "Install App", pwaIosTitle: "📲 Install on iPhone", pwaIosStep1: "1. Tap the <strong>Share</strong> button.", pwaIosStep2: "2. Tap <strong>'Add to Home Screen'</strong>.", pwaIosStep3: "3. Tap <strong>Add</strong>.", pwaInstallSuccess: "App installed successfully!", pwaNotSupported: "To install the app, open this site in Chrome on Android, or use Safari on iPhone/iPad." },
        ar: { pwaBtnText: "تثبيت التطبيق", pwaIosTitle: "📲 تثبيت على iPhone", pwaIosStep1: "1. اضغط على زر <strong>المشاركة</strong>.", pwaIosStep2: "2. اختر <strong>'إضافة إلى الشاشة الرئيسية'</strong>.", pwaIosStep3: "3. اضغط <strong>إضافة</strong>.", pwaInstallSuccess: "تم تثبيت التطبيق بنجاح!", pwaNotSupported: "لتثبيت التطبيق، افتح هذا الموقع في Chrome على هاتف Android أو استخدم Safari على iPhone/iPad." }
    };
    
    // Inject safely into existing translations object
        // Dynamic Translation Injection for PWA (safe version)
    if (typeof translations !== 'undefined' && translations) {
        for (const lang in pwaStrings) {
            if (translations[lang] && typeof translations[lang] === 'object') {
                Object.assign(translations[lang], pwaStrings[lang]);
            }
        }
    } else {
        console.warn('translations not ready yet, PWA texts won’t be updated.');
    }
    // 4. PWA Installation Handler
    let deferredPrompt;
    const pwaBtn = document.getElementById('pwaInstallBtn');
    const pwaBtnText = document.getElementById('pwaBtnText');
    const pwaIosModal = document.getElementById('pwaIosModal');
    const pwaIosClose = document.getElementById('pwaIosClose');

    const isIos = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
    const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || isInStandaloneMode();

    // Masquer le bouton si déjà en mode app installée
    if (pwaBtn && isStandalone()) {
        pwaBtn.style.display = 'none';
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
    });

    if (pwaBtn) {
        pwaBtn.addEventListener('click', async () => {
            const t = getCurrentTranslation();
            
            // iOS : afficher le guide d'installation
            if (isIos()) {
                if (pwaIosModal) {
                    document.getElementById('pwaIosTitle').textContent = t.pwaIosTitle;
                    document.getElementById('pwaIosStep1').innerHTML = t.pwaIosStep1;
                    document.getElementById('pwaIosStep2').innerHTML = t.pwaIosStep2;
                    document.getElementById('pwaIosStep3').innerHTML = t.pwaIosStep3;
                    pwaIosModal.classList.add('active');
                }
                return;
            }

            // Android / Chrome Desktop : installation native
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    pwaBtn.style.display = 'none';
                    showToast(t.pwaInstallSuccess || 'Application installée avec succès !', 'success');
                }
                deferredPrompt = null;
                return;
            }

            // Navigateur non compatible : afficher un message d'aide
            const msg = t.pwaNotSupported || "Pour installer l'application, ouvrez ce site dans Chrome sur mobile Android, ou utilisez Safari sur iPhone/iPad.";
            showToast(msg, 'info', 6000);
        });
    }

    if (pwaIosClose) {
        pwaIosClose.addEventListener('click', () => pwaIosModal.classList.remove('active'));
    }

    // Language Sync for PWA Button
    ['langFr', 'langEn', 'langAr'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                setTimeout(() => {
                    const t = getCurrentTranslation();
                    if (pwaBtnText) pwaBtnText.textContent = t.pwaBtnText;
                }, 50);
            });
        }
    });
})();

