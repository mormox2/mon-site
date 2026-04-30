let previousActiveElement = null;
let currentModal = null;

export function trapFocus(element) {
    if (!element) return;
    currentModal = element;
    previousActiveElement = document.activeElement;

    const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])'
    ];
    const focusableElements = element.querySelectorAll(focusableSelectors.join(','));
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (firstFocusable) firstFocusable.focus();

    function handleTabKey(e) {
        if (e.key !== 'Tab') return;

        if (!focusableElements.length) {
            e.preventDefault();
            return;
        }

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            }
        } else if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }

    element._handleTabKey = handleTabKey;
    document.addEventListener('keydown', handleTabKey);
}

export function removeTrapFocus() {
    if (currentModal && currentModal._handleTabKey) {
        document.removeEventListener('keydown', currentModal._handleTabKey);
        delete currentModal._handleTabKey;
    }
    if (previousActiveElement) {
        previousActiveElement.focus();
        previousActiveElement = null;
    }
    currentModal = null;
}

window.trapFocus = trapFocus;
window.removeTrapFocus = removeTrapFocus;
