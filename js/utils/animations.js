// ==================== SCROLL REVEAL & COMPTEURS ANIMÉS ====================
document.querySelectorAll('section, .gmb-reviews-container, .card, .testimonial-card, .blog-card, .kb-card').forEach(el => el.classList.add('reveal'));
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 70);
            revealObs.unobserve(e.target);
        }
    });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

function animateCount(el) {
    const target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '', dec = parseInt(el.dataset.decimals || 0);
    let start = null;
    const run = ts => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / 1600, 1), v = p * target;
        el.textContent = (dec ? v.toFixed(dec) : Math.floor(v)) + suffix;
        if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
}
const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); countObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('.gmb-stat-number[data-count]').forEach(el => countObs.observe(el));

