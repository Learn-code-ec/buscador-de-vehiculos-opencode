import { toggleTheme } from '../ui/theme.js';
import { getThemeToggle } from '../selectors.js';

export function setupThemeEvents() {
    const themeToggle = getThemeToggle();
    
    if (!themeToggle) {
        console.error('Theme toggle button not found');
        return;
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}