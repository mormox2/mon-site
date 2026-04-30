import { parseSubmissionTracker, readFromStorage, writeToStorage } from './helpers.js';

const pageLoadTime = Date.now();

export function isSpamSubmission(form) {
    // 1. Vérification du honeypot (doit être vide)
    const honeypot = form.querySelector('input[name="website2"], input[name="website3"]');
    if (honeypot && honeypot.value.trim() !== '') {
        console.warn('Soumission bloquée : honeypot rempli');
        return true;
}
    
    // 2. Vérification du délai minimum (3 secondes)
    const timeSinceLoad = Date.now() - pageLoadTime;
    if (timeSinceLoad < 3000) {
        console.warn('Soumission bloquée : trop rapide');
        return true;
}
    
    return false;
}

// ==================== SÉCURITÉ RENFORCÉE ====================
const SUBMISSION_LIMIT = 5;
const LIMIT_WINDOW_HOURS = 24;

export function checkSubmissionLimit() {
    const now = Date.now();
    let tracker = parseSubmissionTracker(readFromStorage('submissionTracker'), now);
    
    if (now - tracker.firstAttempt > LIMIT_WINDOW_HOURS * 60 * 60 * 1000) {
        tracker = { count: 0, firstAttempt: now};
}
    
    return tracker.count < SUBMISSION_LIMIT;
}

export function incrementSubmissionCounter() {
    const now = Date.now();
    let tracker = parseSubmissionTracker(readFromStorage('submissionTracker'), now);
    
    if (now - tracker.firstAttempt > LIMIT_WINDOW_HOURS * 60 * 60 * 1000) {
        tracker = { count: 0, firstAttempt: now};
}
    
    tracker.count += 1;
    writeToStorage('submissionTracker', JSON.stringify(tracker));
}

export function sanitizeInput(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export function containsSuspiciousPattern(str) {
    const suspicious = /<script|javascript:|on\w+\s*=|data:text\/html/i;
    return suspicious.test(str);
}
