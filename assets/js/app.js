import { loadVehicles } from './logic/dataLoader.js';
import { initializeTheme } from './ui/theme.js';
import { setupThemeEvents } from './events/themeEvents.js';
import { setupFilterEvents, applyFilters } from './events/filterEvents.js';
import { populateFilterOptions, showLoading, hideLoading, showError } from './ui/render.js';
import { initializeScrollToTop } from './ui/scrollToTop.js';

let allVehicles = [];

async function initializeApp() {
    showLoading();
    
    try {
        // Initialize theme
        initializeTheme();
        setupThemeEvents();
        
        // Load vehicles data
        allVehicles = await loadVehicles();
        
        // Populate filter dropdowns with unique values
        populateFilterOptions(allVehicles);
        
        // Setup filter event listeners
        setupFilterEvents(allVehicles, () => applyFilters(allVehicles));
        
        // Apply initial filters (shows all vehicles)
        applyFilters(allVehicles);
        
        // Initialize scroll to top button
        initializeScrollToTop();
        
        hideLoading();
    } catch (error) {
        hideLoading();
        showError(error.message);
        console.error('Failed to initialize app:', error);
    }
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}