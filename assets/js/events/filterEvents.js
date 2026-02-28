import { getCurrentFilters, clearFilters as clearFiltersLogic } from '../logic/filter.js';
import { filterVehicles } from '../logic/filter.js';
import { renderVehicles } from '../ui/render.js';
import {
    getYearFilter,
    getColorFilter,
    getDoorsFilter,
    getTransmissionFilter,
    getClearFiltersBtn
} from '../selectors.js';

export function setupFilterEvents(vehicles, onFilterChange) {
    if (!Array.isArray(vehicles)) {
        return;
    }
    
    const yearFilter = getYearFilter();
    const colorFilter = getColorFilter();
    const doorsFilter = getDoorsFilter();
    const transmissionFilter = getTransmissionFilter();
    const clearFiltersBtn = getClearFiltersBtn();
    
    if (!yearFilter || !colorFilter || !doorsFilter || !transmissionFilter || !clearFiltersBtn) {
        console.error('One or more filter elements not found');
        return;
    }
    
    const handleFilterChange = () => {
        if (typeof onFilterChange === 'function') {
            onFilterChange();
        }
    };
    
    yearFilter.addEventListener('change', handleFilterChange);
    colorFilter.addEventListener('change', handleFilterChange);
    doorsFilter.addEventListener('change', handleFilterChange);
    transmissionFilter.addEventListener('change', handleFilterChange);
    
    clearFiltersBtn.addEventListener('click', () => {
        clearFiltersLogic();
        handleFilterChange();
    });
}

export function applyFilters(vehicles) {
    const filters = getCurrentFilters();
    const filteredVehicles = filterVehicles(vehicles, filters);
    renderVehicles(filteredVehicles);
}