# AGENTS.md - Vehicle Search Application

## Project Overview
Modern vehicle search web application with filtering by year, color, doors, transmission type, and persistent dark mode. Built with vanilla JavaScript using ES modules, functional programming patterns, and local JSON data storage.

## Development Commands

### Local Development Server
```bash
# Using Python's HTTP server (default port 8000)
python -m http.server 8000

# Using Node.js serve (if installed)
npx serve .

# Using PHP (if available)
php -S localhost:8000
```

### Build Tools (Optional)
```bash
# Initialize npm package (if adding build tools)
npm init -y

# Install development dependencies (optional)
npm install --save-dev eslint prettier

# Run ESLint
npx eslint assets/js/

# Run Prettier
npx prettier --write .
```

### Testing
No test framework currently configured. Recommended setup:
```bash
# Install Jest
npm install --save-dev jest

# Run tests
npm test

# Run single test
npm test -- filter.test.js
```

## Code Style Guidelines

### JavaScript
- **Modules**: Use ES modules (`import`/`export`) exclusively
- **Functional Programming**: Prefer pure functions, avoid side effects
- **DOM Selector Centralization**: Use `assets/js/selectors.js` for all DOM element references to avoid repetition
- **File Organization**:
  - `assets/js/app.js` - Main orchestrator
  - `assets/js/selectors.js` - Centralized DOM selectors (DRY principle)
  - `assets/js/events/` - Event handlers
  - `assets/js/logic/` - Business logic (filtering, data processing)
  - `assets/js/ui/` - DOM manipulation and rendering
- **Imports**: Group imports by category (external, internal modules)
- **Exports**: Named exports preferred; default exports only for single-function modules
- **Naming Conventions**:
  - `camelCase` for variables, functions, methods
  - `PascalCase` for classes (if used)
  - `UPPER_SNAKE_CASE` for constants
  - Descriptive names: `filterVehicles`, `renderVehicleCard`
- **Error Handling**: Use `try/catch` for async operations (fetch), provide user-friendly error messages
- **Comments**: Minimal comments; code should be self-documenting with clear function/variable names

### HTML
- **Semantic HTML5**: Use `<header>`, `<main>`, `<section>`, `<article>` appropriately
- **Accessibility**: Include `aria-label` for interactive elements, `alt` for images
- **Structure**: Clean, indented markup with logical sections

### CSS
- **Variables**: Use CSS custom properties for theming (light/dark modes)
- **Naming**: BEM-like naming for complex components (`.vehicle-card`, `.vehicle-card__title`)
- **Responsive Design**: Mobile-first approach with media queries
- **Transitions**: Smooth transitions for theme switching (300ms ease)
- **Color Contrast**: Ensure WCAG AA compliance (4.5:1 for normal text)

### Data Management
- **JSON Structure**: Vehicles array with consistent property names (Spanish: `marca`, `modelo`, `año`, `color`, `puertas`, `tipo_caja`)
- **Local Storage**: Use `localStorage` for theme preference only
- **Data Loading**: Fetch from `data/vehicles.json` with error handling

## Project Structure
```
index.html
assets/css/style.css
assets/js/app.js
assets/js/selectors.js
assets/js/events/filterEvents.js
assets/js/events/themeEvents.js
assets/js/logic/filter.js
assets/js/logic/dataLoader.js
assets/js/ui/render.js
assets/js/ui/theme.js
data/vehicles.json
```

## Key Implementation Patterns

### Filtering
- Cumulative AND filtering across all criteria
- Filter functions return new arrays (immutable)
- Empty filter values show all items

### Rendering
- Clear existing content before re-rendering
- Show "no results" message when filtered array empty
- Responsive grid layout (CSS Grid)

### Theme Management
- Toggle between light/dark modes
- Persist preference in `localStorage`
- Apply theme on page load
- Smooth CSS transitions

## Cursor Rules
No `.cursor/rules/` or `.cursorrules` file found. Create these if needed for:
- Component generation patterns
- Import/export consistency
- Function naming conventions

## Copilot Instructions
No `.github/copilot-instructions.md` file found. Suggested content:
- Use functional programming patterns
- Follow existing module structure
- Prefer descriptive Spanish variable names for vehicle properties
- Implement comprehensive error handling

## Common Tasks for Agents

### Adding New Features
1. Identify appropriate module location (events, logic, or ui)
2. Create pure function for business logic
3. Add event handler in events/ directory
4. Update UI rendering if needed
5. Test with various filter combinations

### Debugging
1. Check browser console for fetch errors
2. Verify filter logic with console.log
3. Inspect localStorage for theme preference
4. Test responsive breakpoints

### Performance Optimization
1. Debounce filter input events if needed
2. Implement virtual scrolling for large datasets
3. Cache DOM references for frequently accessed elements
4. Use CSS containment for complex animations

## Browser Support
Target modern browsers (Chrome 90+, Firefox 88+, Safari 14+). Use feature detection for optional enhancements.