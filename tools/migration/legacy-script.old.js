
function normalizePhoneNumber(phone) {
    return phone.replace(/[\s().-]/g, '');
}

function validatePhone() {
    const phone = normalizePhoneNumber(phoneInput.value.trim());
    const isValid = /^(?:(?:\+|00)?216)?\d{8}$/.test(phone);
    if (phoneValidation) {
        phoneValidation.textContent = isValid ? '✅' : '❌';
        phoneValidation.style.color = isValid ? '#10b981' : '#dc2626';
    }
    return isValid;
}
phoneInput.addEventListener('input', validatePhone);

function validateDate() {
    let val = dateInput.value.trim();
    if (!val) return false;

    if (dateInput._flatpickr && dateInput._flatpickr.selectedDates.length > 0) {
        const fpDate = new Date(dateInput._flatpickr.selectedDates[0].getTime());
        fpDate.setHours(0, 0, 0, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return fpDate >= today;
    }

    // Fallback parsing
    let year, month, day;
    if (val.includes('/')) {
        const parts = val.split('/');
        if (parts.length === 3) { day = parseInt(parts[0], 10); month = parseInt(parts[1], 10) - 1; year = parseInt(parts[2], 10); }
    } else if (val.includes('-')) {
        const parts = val.split('-');
        if (parts.length === 3) { year = parseInt(parts[0], 10); month = parseInt(parts[1], 10) - 1; day = parseInt(parts[2], 10); }
    }

    if (year !== undefined && month !== undefined && day !== undefined) {
        const selectedDate = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const isExactCalendarDate = !isNaN(selectedDate.getTime())
            && selectedDate.getFullYear() === year
            && selectedDate.getMonth() === month
            && selectedDate.getDate() === day;

        return isExactCalendarDate && selectedDate >= today;
    }
    return false;
}

dateInput.addEventListener('change', () => {
    const t = getCurrentTranslation();
    // Si le champ vient d'être vidé (ex: reset du formulaire après succès), on ne lève pas d'erreur
    if (!dateInput.value.trim()) {
        errorDiv.classList.remove('show');
        return;
    }
    
    if (!validateDate()) {
        errorDiv.textContent = t.errDate;
        errorDiv.classList.add('show');
    } else {
        errorDiv.classList.remove('show');
    }
});

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const t = getCurrentTranslation();
    const ui = getCurrentUiMessages();

    // 1. Anti-spam (honeypot + délai)
    if (isSpamSubmission(e.target)) {
        errorDiv.textContent = ui.antiSpamForm;
        errorDiv.classList.add('show');
        return;
    }
    errorDiv.classList.remove('show');
    errorDiv.textContent = '';

    // 2. Limite de soumissions
    if (!checkSubmissionLimit()) {
        showToast(ui.submissionLimitForm, "error");
        return;
    }

    // 3. Récupération et nettoyage des champs
    let name = document.getElementById('name').value.trim();
    let phone = phoneInput.value.trim();
    const typeSelect = document.getElementById('type');
    const type = typeSelect.options[typeSelect.selectedIndex].text;
    const date = dateInput.value;
    let msgBody = document.getElementById('message').value.trim() || '-';
    const consent = document.getElementById('consent').checked;

    // 4. Détection de motifs suspects
    if (containsSuspiciousPattern(name) || containsSuspiciousPattern(msgBody)) {
        showToast(ui.invalidCharactersForm, "error");
        return;
    }
    // On garde les données brutes pour l'email
    const rawName = name;
    const rawPhone = phone;
    const rawMsg = msgBody;
    // 5. Nettoyage (sanitization)
    name = sanitizeInput(name);
    phone = sanitizeInput(phone);
    msgBody = sanitizeInput(msgBody);

    // 6. Validations classiques
    if (!name) {
        errorDiv.textContent = t.errName;
        errorDiv.classList.add('show');
        return;
    }
    if (!validatePhone()) {
        errorDiv.textContent = t.errPhone;
        errorDiv.classList.add('show');
        return;
    }
    if (typeSelect.value === "") {
        errorDiv.textContent = t.errType;
        errorDiv.classList.add('show');
        return;
    }
    if (!dateInput.value.trim()) {
        errorDiv.textContent = ui.emptyDate;
        errorDiv.classList.add('show');
        return;
    }
    if (!validateDate()) {
        errorDiv.textContent = t.errDate;
        errorDiv.classList.add('show');
        return;
    }
    if (!consent) return;

    const emailMsg = t.waTemplate(name, phone, type, date, msgBody);
    const mailtoLink = buildMailtoLink(`Demande de RDV - ${name}`, emailMsg);

    if (!isEmailJsAvailable()) {
        openMailtoFallback(mailtoLink, currentLang);
        return;
    }

    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span> ' + t.txtSending;

    try {
        // 7. Envoi via EmailJS avec données nettoyées
        await emailjs.send('Dental website', 'template_z7asu16', {
    name: rawName,
    phone: rawPhone,
    type: type,
    date: date,
    message: rawMsg
    }, 'SE67PfF6urnha7Oom');

        // 8. Incrémentation du compteur après succès
        incrementSubmissionCounter();

        await new Promise(resolve => setTimeout(resolve, 800));

        const emailFallbackTag = document.getElementById('emailFallback');
        if (emailFallbackTag) emailFallbackTag.href = mailtoLink;

        modalMessage.textContent = t.successMsg(name, date);
        confirmationModal.classList.add('active');
        confirmationModal.setAttribute('aria-hidden', 'false');
        trapFocus(confirmationModal);

        form.reset();
        if (phoneValidation) phoneValidation.textContent = '';
        if (dateInput._flatpickr) dateInput._flatpickr.clear();

        setTimeout(() => {
            confirmationModal.classList.remove('active');
            confirmationModal.setAttribute('aria-hidden', 'true');
        }, 8000);

    } catch (err) {
        console.error("Erreur lors de la soumission :", err);
        openMailtoFallback(mailtoLink, currentLang);
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

function closeConfirmationModal() {
    confirmationModal.classList.remove('active');
    confirmationModal.setAttribute('aria-hidden', 'true');
    removeTrapFocus();
}

modalClose.addEventListener('click', closeConfirmationModal);
confirmationModal.addEventListener('click', (e) => {
    if (e.target === confirmationModal) closeConfirmationModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && confirmationModal.classList.contains('active')) {
        closeConfirmationModal();
    }
});


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

// ==================== HORAIRES EN DIRECT ====================
const TUNISIA_TIMEZONE = 'Africa/Tunis';

function getTunisiaTimeParts() {
    const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: TUNISIA_TIMEZONE,
        weekday: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23'
    }).formatToParts(new Date());

    const weekday = parts.find(part => part.type === 'weekday')?.value;
    const hour = parseInt(parts.find(part => part.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find(part => part.type === 'minute')?.value || '0', 10);
    const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    return {
        day: weekdayMap[weekday] ?? 0,
        minutes: (hour * 60) + minute
    };
}

function updateHours() {
    const { day, minutes } = getTunisiaTimeParts();
    const open = (day >= 1 && day <= 5 && minutes >= 480 && minutes < 1080) || (day === 6 && minutes >= 480 && minutes < 780);
    const badge = document.getElementById('hoursStatus');
    if (!badge) return;
    badge.className = 'hours-badge ' + (open ? 'open' : 'closed');
    const tr = getCurrentTranslation();
    badge.textContent = open ? tr.badgeOpen : tr.badgeClosed;
}
updateHours();
setInterval(updateHours, 60000);


window.updateHours = updateHours;
