// Centralized DOM selectors to avoid repetition (DRY principle)
// Export functions that return DOM elements by ID

export function getThemeToggle() {
    return document.getElementById('themeToggle');
}

export function getYearFilter() {
    return document.getElementById('yearFilter');
}

export function getColorFilter() {
    return document.getElementById('colorFilter');
}

export function getDoorsFilter() {
    return document.getElementById('doorsFilter');
}

export function getTransmissionFilter() {
    return document.getElementById('transmissionFilter');
}

export function getClearFiltersBtn() {
    return document.getElementById('clearFilters');
}

export function getVehiclesContainer() {
    return document.getElementById('vehiclesContainer');
}

export function getNoResults() {
    return document.getElementById('noResults');
}

export function getResultsCount() {
    return document.getElementById('resultsCount');
}

export function getLoading() {
    return document.getElementById('loading');
}

export function getErrorMessage() {
    return document.getElementById('errorMessage');
}

// Utility function to get element by ID
export function getElementById(id) {
    return document.getElementById(id);
}