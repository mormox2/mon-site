import { currentLang, getCurrentTranslation } from '../core/i18n.js';
import { removeTrapFocus, trapFocus } from '../utils/focus-trap.js';

// ==================== MODALES ARTICLES / GUIDES ====================
window.openArticleModal = function(index) {
    const t = getCurrentTranslation();
    const p = t.blogPosts[index];
    if (!p) return;
    document.getElementById('articleModalTitle').innerHTML = p.title;
    document.getElementById('articleModalDate').innerHTML = p.date;
    document.getElementById('articleModalDate').style.display = 'block';
    document.getElementById('articleModalBody').innerHTML = p.content;
    document.getElementById('articleModalTitle').style.textAlign = currentLang === 'ar' ? 'right' : 'left';
   const modal = document.getElementById('articleModal');
   modal.classList.add('active');
   modal.setAttribute('aria-hidden', 'false');
   trapFocus(modal);  // ← Active le piège
};

window.openGuideModal = function(index) {
    const t = getCurrentTranslation();
    const g = t.kbItems[index];
    if (!g) return;
    document.getElementById('articleModalTitle').innerHTML = g.title + ' ' + g.icon;
    document.getElementById('articleModalDate').style.display = 'none';
    document.getElementById('articleModalBody').innerHTML = g.content;
    document.getElementById('articleModalTitle').style.textAlign = currentLang === 'ar' ? 'right' : 'left';
    const modal = document.getElementById('articleModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    trapFocus(modal);  // ← Active le piège
};

const articleModal = document.getElementById('articleModal');

function closeArticleModal() {
    articleModal.classList.remove('active');
    articleModal.setAttribute('aria-hidden', 'true');
    removeTrapFocus();  // ← Libère le focus
}

articleModal.addEventListener('click', function(e) {
    if (e.target === this) closeArticleModal();
});
document.getElementById('articleModalClose').addEventListener('click', closeArticleModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && articleModal.classList.contains('active')) {
        closeArticleModal();
    }
});
