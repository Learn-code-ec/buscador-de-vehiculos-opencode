import { getThemeToggle } from '../selectors.js';

const THEME_KEY = 'vehicle-search-theme';
const THEME_DARK = 'dark';
const THEME_LIGHT = 'light';

export function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
}

export function setTheme(theme) {
    if (![THEME_LIGHT, THEME_DARK].includes(theme)) {
        theme = THEME_LIGHT;
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    
    // Update toggle button state
    const toggleBtn = getThemeToggle();
    if (toggleBtn) {
        const sunIcon = toggleBtn.querySelector('.fa-sun');
        const moonIcon = toggleBtn.querySelector('.fa-moon');
        
        if (theme === THEME_DARK) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
}

export function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    setTheme(newTheme);
}

export function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light theme
        setTheme(THEME_LIGHT);
    }
}