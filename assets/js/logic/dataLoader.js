export async function loadVehicles() {
    try {
        const response = await fetch('../../data/vehicles.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const vehicles = await response.json();
        return vehicles;
    } catch (error) {
        console.error('Error loading vehicles:', error);
        throw new Error('No se pudo cargar la base de datos de vehículos. Por favor, recarga la página.');
    }
}

export function extractUniqueValues(vehicles, property) {
    if (!Array.isArray(vehicles) || vehicles.length === 0) {
        return [];
    }
    
    const uniqueValues = [...new Set(vehicles.map(vehicle => vehicle[property]))];
    return uniqueValues.sort((a, b) => {
        if (property === 'año') return b - a; // Descending for years
        return String(a).localeCompare(String(b));
    });
}