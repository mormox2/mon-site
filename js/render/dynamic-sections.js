import { safeSet, safeSetText } from '../utils/helpers.js';

export function renderDynamicSections(t, normalizedLang) {
    safeSet('servicesTitle', t.servicesTitle);    
    safeSet('servicesList', t.services.map(s => `<div class="card"><span class="icon">${s.icon}</span><h3>${s.title}</h3><p>${s.desc}</p></div>`).join(''));    
        
    safeSet('testimonialsTitle', t.testimonialsTitle);    
    safeSetText('googleRatingLabel', t.googleRatingLabel);    
    safeSetText('reviewsCountLabel', t.reviewsCountLabel);    
    safeSetText('satisfactionLabel', t.satisfactionLabel);    
    safeSet('gmbLink', t.gmbLink);    
    safeSet('testimonialsGrid', t.testimonials.map(tm => {    
    const starCount = (tm.stars.match(/⭐/g) || []).length;    
    const starLabels = { fr: `Note de ${starCount} étoiles sur 5`, en: `Rating: ${starCount} out of 5 stars`, ar: `التقييم: ${starCount} من 5 نجوم`};    
    return `<div class="testimonial-card">    
        <div class="stars" aria-label="${starLabels[normalizedLang] || starLabels.fr}">    
            <span aria-hidden="true">${tm.stars}</span>    
        </div>    
        <p class="testimonial-text">"${tm.text}"</p>    
        <div class="testimonial-author">${tm.author}</div>    
        <div class="testimonial-role">${tm.role}</div>    
    </div>`;    
    }).join(''));    
        
    // Galerie Photos avec aperçu + "Voir plus"    
    safeSet('galleryTitle', t.galleryTitle);    
    const photoGallery = document.getElementById('photoGallery');    
    if (photoGallery && t.galleryPhotos) {    
        const previewCount = t.galleryPreviewCount || 4;    
        const allPhotos = t.galleryPhotos;    
        
        function renderGalleryItem(photo, idx, hidden) {    
            return `<div class="photo-gallery-item${hidden ? ' gallery-hidden' : ''}" data-idx="${idx}" tabindex="0" role="button" aria-label="${photo.alt}">    
                <img src="${photo.src}" alt="${photo.alt}" width="400" height="300" loading="lazy" decoding="async"    
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">    
                <div class="photo-gallery-placeholder" style="display:none;">📷<span>${photo.caption}</span></div>    
                <div class="photo-gallery-overlay">    
                    <span class="photo-gallery-caption">${photo.caption}</span>    
                </div>    
                <div class="photo-gallery-zoom">🔍</div>    
            </div>`;    
    }    
        
        let html = allPhotos.map((photo, idx) => renderGalleryItem(photo, idx, idx >= previewCount)).join('');    
        
        // Bouton "Voir plus" uniquement si plus de photos que l'aperçu    
        if (allPhotos.length > previewCount) {    
            html += `<div class="gallery-toggle-wrapper">    
                <button type="button" class="gallery-toggle-btn" id="galleryToggleBtn" aria-expanded="false">    
                    <span class="gallery-toggle-text">${t.galleryShowMore}</span>    
                    <span class="gallery-toggle-icon">▼</span>    
                </button>    
            </div>`;    
    }    
        
        photoGallery.innerHTML = html;    
        
        // Gestion du bouton toggle    
        const toggleBtn = document.getElementById('galleryToggleBtn');    
        if (toggleBtn) {    
            toggleBtn.addEventListener('click', () => {    
                const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';    
                const hiddenItems = photoGallery.querySelectorAll('.gallery-hidden');    
                if (!isExpanded) {    
                    hiddenItems.forEach(item => item.classList.add('gallery-visible'));    
                    toggleBtn.setAttribute('aria-expanded', 'true');    
                    toggleBtn.querySelector('.gallery-toggle-text').textContent = t.galleryShowLess;    
                    toggleBtn.querySelector('.gallery-toggle-icon').textContent = '▲';    
    } else {    
                    hiddenItems.forEach(item => item.classList.remove('gallery-visible'));    
                    toggleBtn.setAttribute('aria-expanded', 'false');    
                    toggleBtn.querySelector('.gallery-toggle-text').textContent = t.galleryShowMore;    
                    toggleBtn.querySelector('.gallery-toggle-icon').textContent = '▼';    
                    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth'});    
    }    
    });    
    }    
    }    
        
    // Vidéos, Blog, Guides, FAQ    
    const vTitle = document.getElementById('videosTitle');    
    if (vTitle) vTitle.innerHTML = t.videosTitle;    
    safeSet('blogTitle', t.blogTitle);    
    safeSet('blogGrid', t.blogPosts.map((p, index) => `    
        <div class="blog-card">    
            <div class="blog-image">${p.title.includes('implant') || p.title.includes('زرع') ? '🦷' : '✨'}</div>    
            <div class="blog-content">    
                <div class="blog-date">${p.date}</div>    
                <h3>${p.title}</h3>    
                <p>${p.desc}</p>    
                <button type="button" class="blog-link" data-article-index="${index}" style="background:none; border:none; color:var(--primary); font-family:inherit; font-weight:600; font-size:0.95rem; cursor:pointer; padding:0;">${t.blogReadMore}</button>    
            </div>    
        </div>    
    `).join(''));    
        
    
    document.querySelectorAll('.blog-link[data-article-index]').forEach(button => {
        button.addEventListener('click', () => {
            window.openArticleModal?.(Number(button.dataset.articleIndex));
        });
    });

safeSet('kbTitle', t.kbTitle);    
    safeSet('kbGrid', t.kbItems.map((k, index) => `    
        <div class="kb-card">    
            <span class="icon">${k.icon}</span>    
            <h3>${k.title}</h3>    
            <p>${k.desc}</p>    
            <button type="button" class="kb-link" data-guide-index="${index}" style="background:none; border:none; color:var(--primary); font-family:inherit; font-weight:600; font-size:0.95rem; cursor:pointer; padding:0; margin-top:10px;">${t.kbReadMore}</button>    
        </div>    
    `).join(''));    
        
    
    document.querySelectorAll('.kb-link[data-guide-index]').forEach(button => {
        button.addEventListener('click', () => {
            window.openGuideModal?.(Number(button.dataset.guideIndex));
        });
    });

// FAQ    
    safeSet('faqTitle', t.faqTitle);    
    const faqContainer = document.getElementById('faqContainer');    
    if (faqContainer) {    
        const categoriesHTML = `<div class="faq-filters">    
            ${Object.entries(t.faqCategories).map(([k, v]) => `<button class="faq-filter-btn ${k === 'all' ? 'active' : ''}" data-cat="${k}">${v}</button>`).join('')}    
        </div>`;    
        const faqsHTML = `<div class="faq-list">` + t.faqs.map(faq => `<div class="faq-item reveal" data-cat="${faq.category}"><div class="faq-header"><div class="faq-title">${faq.q}</div><span class="faq-icon">▼</span></div><div class="faq-answer">${faq.a}</div></div>`).join('') + `</div>`;    
        faqContainer.innerHTML = categoriesHTML + faqsHTML;    
        
        // Réattacher les écouteurs FAQ    
        document.querySelectorAll('.faq-item').forEach(item => {    
            item.addEventListener('click', () => {    
                const isActive = item.classList.contains('active');    
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));    
                if (!isActive) item.classList.add('active');    
    });    
    });    
        
        const filterBtns = document.querySelectorAll('.faq-filter-btn');    
        filterBtns.forEach(btn => btn.addEventListener('click', () => {    
            filterBtns.forEach(b => b.classList.remove('active'));    
            btn.classList.add('active');    
            const cat = btn.getAttribute('data-cat');    
            document.querySelectorAll('.faq-item').forEach(item => {    
                item.classList.remove('active');    
                if (cat === 'all' || item.getAttribute('data-cat') === cat) {    
                    item.style.display = 'block';    
                    setTimeout(() => item.classList.add('visible'), 50);    
    } else {    
                    item.style.display = 'none';    
                    item.classList.remove('visible');    
    }    
    });    
    }));    
        
        // Afficher toutes les FAQ par défaut    
        const defaultFilter = document.querySelector('.faq-filter-btn.active');    
        if (defaultFilter) defaultFilter.click();    
    }    
        
    // Section Technologie    
    const tTech = t.techCards;    
    if (tTech) {    
        safeSetText('techTitle', t.techTitle);    
        safeSetText('techBadge', t.techBadge);    
        const techGrid = document.getElementById('techGrid');    
        if (techGrid) {    
            techGrid.innerHTML = tTech.map(card => `    
                <div class="card tech-card">    
                    <span class="icon">${card.icon}</span>    
                    <h3>${card.title}</h3>    
                    <p><strong>${card.shortDesc}</strong></p>    
                    <div class="article-text">${card.fullDesc}</div>    
                </div>    
            `).join('');    
            document.querySelectorAll('.tech-card').forEach(card => {    
                card.addEventListener('click', function() { this.classList.toggle('expanded');});    
    });    
    }    
    }    
        
    
}

