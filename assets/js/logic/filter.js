import {
    getYearFilter,
    getColorFilter,
    getDoorsFilter,
    getTransmissionFilter
} from '../selectors.js';

export function filterVehicles(vehicles, filters) {
    if (!Array.isArray(vehicles)) {
        return [];
    }
    
    return vehicles.filter(vehicle => {
        // Filter by year
        if (filters.year && vehicle.año !== parseInt(filters.year)) {
            return false;
        }
        
        // Filter by color
        if (filters.color && vehicle.color !== filters.color) {
            return false;
        }
        
        // Filter by doors
        if (filters.doors && vehicle.puertas !== parseInt(filters.doors)) {
            return false;
        }
        
        // Filter by transmission
        if (filters.transmission && vehicle.tipo_caja !== filters.transmission) {
            return false;
        }
        
        return true;
    });
}

export function getCurrentFilters() {
    const yearFilter = getYearFilter();
    const colorFilter = getColorFilter();
    const doorsFilter = getDoorsFilter();
    const transmissionFilter = getTransmissionFilter();
    
    return {
        year: yearFilter ? yearFilter.value : '',
        color: colorFilter ? colorFilter.value : '',
        doors: doorsFilter ? doorsFilter.value : '',
        transmission: transmissionFilter ? transmissionFilter.value : ''
    };
}

export function clearFilters() {
    const yearFilter = getYearFilter();
    const colorFilter = getColorFilter();
    const doorsFilter = getDoorsFilter();
    const transmissionFilter = getTransmissionFilter();
    
    if (yearFilter) yearFilter.value = '';
    if (colorFilter) colorFilter.value = '';
    if (doorsFilter) doorsFilter.value = '';
    if (transmissionFilter) transmissionFilter.value = '';
}