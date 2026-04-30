import { getCurrentTranslation } from '../core/i18n.js';

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
