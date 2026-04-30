import { currentLang, getCurrentTranslation, showToast } from '../core/i18n.js';

// ==================== RECHERCHE AMÉLIORÉE ====================
function performSearch(e) {
    if (e) e.preventDefault();
    
    const searchInput = document.getElementById('siteSearch');
    const query = searchInput.value.trim();
    const t = getCurrentTranslation();
    
    // Gestion champ vide
    const emptySearchMsg = { fr: 'Veuillez saisir un terme de recherche.', en: 'Please enter a search term.', ar: 'الرجاء إدخال مصطلح بحث.' };
    if (!query) {
        searchInput.focus();
        searchInput.setAttribute('aria-invalid', 'true');
        showToast(emptySearchMsg[currentLang] || emptySearchMsg.fr, "warning");
        return;
    }
    
    searchInput.setAttribute('aria-invalid', 'false');
    
    const sections = document.querySelectorAll('section');
    let foundElement = null;
    const lowerQuery = query.toLowerCase();
    
    for (let section of sections) {
        if (section.innerText.toLowerCase().includes(lowerQuery)) {
            foundElement = section;
            break;
        }
    }
    
    if (foundElement) {
        foundElement.scrollIntoView({ behavior: 'smooth' });
        
        // Surbrillance temporaire
        foundElement.style.transition = 'box-shadow 0.3s';
        foundElement.style.boxShadow = '0 0 0 4px var(--primary-light)';
        setTimeout(() => foundElement.style.boxShadow = '', 1500);
        
        // Annonce pour lecteurs d'écran
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.className = 'sr-only';
        const sectionTitle = foundElement.querySelector('h2')?.textContent || '';
        liveRegion.textContent = `Résultat trouvé dans la section ${sectionTitle}`;
        document.body.appendChild(liveRegion);
        setTimeout(() => liveRegion.remove(), 2000);
    } else {
        showToast(t.alertNoRes + query, 'warning');
    }
}

// Connexion du bouton de recherche et de la touche Entrée
document.getElementById('searchButton')?.addEventListener('click', performSearch);
document.getElementById('siteSearch')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch(e);
});

