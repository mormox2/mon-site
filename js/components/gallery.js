// ==================== LIGHTBOX ====================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');
let currentGalleryImages = [];
let currentIndex = 0;

function updateGalleryImages() {
    currentGalleryImages = Array.from(document.querySelectorAll('.photo-gallery-item img, .blog-card img, .kb-card img'));
}

function attachLightboxToImages() {
    updateGalleryImages();
    currentGalleryImages.forEach((img, idx) => {
        const triggerArea = img.closest('.photo-gallery-item, .blog-card, .kb-card') || img;
        triggerArea.removeEventListener('click', triggerArea._lightboxHandler);
        triggerArea.removeEventListener('keydown', triggerArea._lightboxKeydown);
        
        triggerArea._lightboxHandler = (e) => {
            e.stopPropagation();
            openLightbox(idx);
        };
        triggerArea._lightboxKeydown = (e) => {
            if (e.key === 'Enter') {
                e.stopPropagation();
                openLightbox(idx);
            }
        };
        
        triggerArea.addEventListener('click', triggerArea._lightboxHandler);
        triggerArea.addEventListener('keydown', triggerArea._lightboxKeydown);
    });
}

function openLightbox(index) {
    if (!currentGalleryImages.length) updateGalleryImages();
    if (index < 0) index = 0;
    if (index >= currentGalleryImages.length) index = currentGalleryImages.length - 1;
    currentIndex = index;
    lightboxImg.src = currentGalleryImages[currentIndex].src;
    lightboxImg.alt = currentGalleryImages[currentIndex].alt || '';
    lightbox.setAttribute('aria-hidden', 'false');
    lightboxClose.focus();
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
}

function showPrev() { openLightbox(currentIndex - 1); }
function showNext() { openLightbox(currentIndex + 1); }

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'Escape') closeLightbox();
});

// Initialisation et observation globale
attachLightboxToImages();

const lightboxObserver = new MutationObserver((mutations) => {
    let needsUpdate = false;
    for (let mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length) {
            for (let node of mutation.addedNodes) {
                if (node.nodeType === 1) {
                    if (node.matches && (node.matches('img') || node.querySelector('img'))) {
                        needsUpdate = true;
                        break;
                    }
                }
            }
        }
        if (needsUpdate) break;
    }
    if (needsUpdate) attachLightboxToImages();
});

lightboxObserver.observe(document.body, { childList: true, subtree: true });


window.attachLightboxToImages = attachLightboxToImages;
