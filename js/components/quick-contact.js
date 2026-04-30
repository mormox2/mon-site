import { currentLang, getCurrentTranslation, getCurrentUiMessages, showToast } from '../core/i18n.js';
import { buildMailtoLink, getFlatpickrLocale, isEmailJsAvailable, isFlatpickrAvailable, openMailtoFallback } from '../utils/helpers.js';
import { checkSubmissionLimit, containsSuspiciousPattern, incrementSubmissionCounter, isSpamSubmission, sanitizeInput } from '../utils/security.js';
import { removeTrapFocus, trapFocus } from '../utils/focus-trap.js';

// Formulaire de contact rapide (avec sécurité renforcée)
const quickForm = document.getElementById('quickContactForm');
if (quickForm) {
    quickForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const t = getCurrentTranslation();
        const ui = getCurrentUiMessages();

        // 1. Vérification anti-spam (honeypot + délai)
        if (isSpamSubmission(e.target)) {
            showToast(ui.antiSpamQuick, "warning");
            return;
        }

        // 2. Vérification de la limite de soumissions
        if (!checkSubmissionLimit()) {
            showToast(ui.submissionLimitQuick, "error");
            return;
        }
        let msg = document.getElementById('quickMessage').value.trim();

        // 3. Vérification champ vide
        if (!msg) {
            showToast(t.alertNoMsg, "warning");
            return;
        }

        // 4. Détection de motifs suspects
        if (containsSuspiciousPattern(msg)) {
            showToast(ui.invalidCharactersQuick, "error");
            return;
        }

        // 5. Nettoyage de la chaîne
        msg = sanitizeInput(msg);

        const mailtoLink = buildMailtoLink('Message depuis le site', msg);

        if (!isEmailJsAvailable()) {
            openMailtoFallback(mailtoLink, currentLang);
            return;
        }

        const btn = document.getElementById('quickSendBtn');
        const prevText = btn.innerText;
        btn.innerText = t.txtSending || "Envoi...";
        btn.disabled = true;

        try {
            // 6. Envoi avec les données nettoyées
            await emailjs.send('Dental website', 'template_z7asu16', {
             name: '(Message rapide)',
             phone: '-',
             type: '-',
             date: '-',
              message: msg
            }, 'SE67PfF6urnha7Oom');

            // 7. Incrémentation du compteur après succès
            incrementSubmissionCounter();

            showToast(t.alertSent.replace('(démo)', '').trim() || "Message envoyé avec succès !", "success");
            quickForm.reset();
        } catch (err) {
            console.error("Erreur envoi contact rapide:", err);
            openMailtoFallback(mailtoLink, currentLang);
        } finally {
            btn.innerText = prevText;
            btn.disabled = false;
        }
    });
}
