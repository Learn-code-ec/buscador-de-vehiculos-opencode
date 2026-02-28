import {
    getVehiclesContainer,
    getNoResults,
    getResultsCount,
    getYearFilter,
    getColorFilter,
    getLoading,
    getErrorMessage
} from '../selectors.js';

export function renderVehicles(vehicles) {
    const container = getVehiclesContainer();
    const noResults = getNoResults();
    const resultsCount = getResultsCount();
    
    if (!container || !noResults || !resultsCount) return;
    
    // Clear existing cards
    container.innerHTML = '';
    
    // Update results count
    resultsCount.textContent = vehicles.length;
    
    // Show/hide no results message
    if (vehicles.length === 0) {
        noResults.hidden = false;
    } else {
        noResults.hidden = true;
        
        // Create and append vehicle cards
        vehicles.forEach(vehicle => {
            const card = createVehicleCard(vehicle);
            container.appendChild(card);
        });
    }
}

function createVehicleCard(vehicle) {
    const card = document.createElement('article');
    card.className = 'vehicle-card';
    card.setAttribute('data-id', vehicle.id);
    card.setAttribute('data-color', vehicle.color);
    
    const iconClass = getVehicleIcon(vehicle.marca);
    const gradient = getColorGradient(vehicle.color);
    const badgeClass = vehicle.tipo_caja === 'automática' ? 'automatic' : 'manual';
    const badgeIcon = vehicle.tipo_caja === 'automática' ? 'bolt' : 'gear';
    
    card.innerHTML = `
        <div class="vehicle-image" style="background: ${gradient};">
            <i class="${iconClass}"></i>
            <span class="vehicle-badge ${badgeClass}">
                <i class="fas fa-${badgeIcon}"></i>
                ${vehicle.tipo_caja}
            </span>
        </div>
        <div class="vehicle-content">
            <h3 class="vehicle-title">${vehicle.marca} ${vehicle.modelo}</h3>
            <p class="vehicle-subtitle">${vehicle.año} • ${vehicle.color}</p>
            <div class="vehicle-details">
                <span class="detail-item">
                    <i class="fas fa-door-closed"></i>
                    ${vehicle.puertas} puertas
                </span>
                <span class="detail-item">
                    <i class="fas fa-palette"></i>
                    ${vehicle.color}
                </span>
            </div>
            <p class="vehicle-transmission">
                <i class="fas fa-${badgeIcon}"></i>
                Transmisión ${vehicle.tipo_caja}
            </p>
        </div>
    `;
    
    return card;
}

function getVehicleIcon(marca) {
    const iconMap = {
        'Toyota': 'fas fa-car',
        'Honda': 'fas fa-car',
        'Ford': 'fas fa-truck-pickup',
        'Chevrolet': 'fas fa-car',
        'Volkswagen': 'fas fa-car',
        'Nissan': 'fas fa-car',
        'Hyundai': 'fas fa-car',
        'Kia': 'fas fa-car',
        'Mazda': 'fas fa-car',
        'Subaru': 'fas fa-car',
        'Mercedes-Benz': 'fas fa-car',
        'BMW': 'fas fa-car',
        'Audi': 'fas fa-car',
        'Lexus': 'fas fa-car',
        'Volvo': 'fas fa-car',
        'Jeep': 'fas fa-car',
        'Tesla': 'fas fa-bolt',
        'Fiat': 'fas fa-car',
        'Peugeot': 'fas fa-car',
        'Renault': 'fas fa-car'
    };
    
    return iconMap[marca] || 'fas fa-car';
}

function getColorGradient(color) {
    const colorMap = {
        'Rojo': ['#fecaca', '#f87171'],
        'Azul': ['#bfdbfe', '#60a5fa'],
        'Negro': ['#d1d5db', '#6b7280'],
        'Blanco': ['#f9fafb', '#e5e7eb'],
        'Gris': ['#e5e7eb', '#9ca3af'],
        'Plateado': ['#f3f4f6', '#d1d5db'],
        'Verde': ['#bbf7d0', '#34d399'],
        'Amarillo': ['#fef3c7', '#fbbf24'],
        'Naranja': ['#fed7aa', '#fb923c'],
        'Marrón': ['#e7d5c5', '#d97706']
    };
    
    const colors = colorMap[color] || ['#d1d5db', '#9ca3af']; // Default gray
    return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
}

export function populateFilterOptions(vehicles) {
    const yearFilter = getYearFilter();
    const colorFilter = getColorFilter();
    
    if (!yearFilter || !colorFilter) return;
    
    // Extract unique years and colors
    const uniqueYears = [...new Set(vehicles.map(v => v.año))].sort((a, b) => b - a);
    const uniqueColors = [...new Set(vehicles.map(v => v.color))].sort();
    
    // Populate year filter
    uniqueYears.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
    
    // Populate color filter
    uniqueColors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorFilter.appendChild(option);
    });
}

export function showLoading() {
    const loading = getLoading();
    const vehiclesContainer = getVehiclesContainer();
    const noResults = getNoResults();
    const errorMessage = getErrorMessage();
    
    if (loading) loading.hidden = false;
    if (vehiclesContainer) vehiclesContainer.innerHTML = '';
    if (noResults) noResults.hidden = true;
    if (errorMessage) errorMessage.hidden = true;
}

export function hideLoading() {
    const loading = getLoading();
    if (loading) loading.hidden = true;
}

export function showError(message) {
    const errorMessage = getErrorMessage();
    const loading = getLoading();
    const vehiclesContainer = getVehiclesContainer();
    const noResults = getNoResults();
    
    if (errorMessage) {
        errorMessage.hidden = false;
        if (message) {
            const h3 = errorMessage.querySelector('h3');
            if (h3) h3.textContent = message;
        }
    }
    if (loading) loading.hidden = true;
    if (vehiclesContainer) vehiclesContainer.innerHTML = '';
    if (noResults) noResults.hidden = true;
}