import { getBackToTopBtn } from '../selectors.js';

const SCROLL_THRESHOLD = 300; // Mostrar botón después de 300px de scroll
const SCROLL_DURATION = 800; // Duración de la animación en ms

export function initializeScrollToTop() {
    const backToTopBtn = getBackToTopBtn();
    
    if (!backToTopBtn) {
        console.error('Back to top button not found');
        return;
    }
    
    // Mostrar/ocultar botón basado en scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Configurar evento click para scroll suave
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollToTop();
    });
}

function smoothScrollToTop() {
    const startPosition = window.scrollY;
    const startTime = performance.now();
    
    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / SCROLL_DURATION, 1);
        
        // Función de easing (easeOutCubic)
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        window.scrollTo(0, startPosition * (1 - easedProgress));
        
        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }
    
    requestAnimationFrame(scrollStep);
}