# SearchBox Component

Advanced search components with autocomplete suggestions, recent searches, filtering options, and comprehensive result displays for enhanced user discovery with Apple-inspired design.

## Overview

The SearchBox component offers four main variations:
- **Suggestions**: Real-time autocomplete with keyboard navigation
- **Recent Searches**: Search history with quick access and management
- **Filters**: Advanced filtering with categories, price ranges, and sorting
- **Results**: Search result displays (shown in API documentation)

## Features

- 🎨 **Apple-inspired Design**: Clean, intuitive search interfaces with elegant styling
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive Design**: Optimized layouts for all device sizes
- 🔍 **Real-time Suggestions**: Instant autocomplete with dropdown navigation
- 📋 **Search History**: Recent search management with clear and remove options
- 🎛️ **Advanced Filtering**: Category filters, price ranges, and sorting options
- ⌨️ **Keyboard Navigation**: Full keyboard support for dropdown navigation

## Usage

### Basic Search with Suggestions
```html
<div class="relative">
  <div class="relative">
    <input type="text" 
           class="w-full pl-12 pr-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
           placeholder="Search for products, articles, or help...">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
      <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
  </div>
  
  <div class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg z-10">
    <div class="p-2">
      <div class="text-xs font-medium text-neutral-500 dark:text-neutral-400 px-3 py-2">SUGGESTIONS</div>
      <a href="#" class="flex items-center px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors">
        <svg class="w-4 h-4 mr-3 text-neutral-400" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        Search suggestion
      </a>
    </div>
  </div>
</div>
```

### Recent Searches
```html
<div class="space-y-2">
  <div class="flex items-center justify-between mb-3">
    <h3 class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Recent Searches</h3>
    <button class="text-xs text-primary-500 dark:text-primary-400 hover:underline">Clear All</button>
  </div>
  
  <div class="flex items-center justify-between group p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
    <div class="flex items-center">
      <svg class="w-4 h-4 mr-3 text-neutral-400" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <span class="text-sm text-neutral-700 dark:text-neutral-300">Search term</span>
    </div>
    <button class="opacity-0 group-hover:opacity-100 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-all">
      <svg class="w-3 h-3" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</div>
```

## JavaScript API

### Search Suggestions
```javascript
// Debounced search function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Search with suggestions
const searchInput = document.getElementById('search-input');
const suggestionsDropdown = document.getElementById('suggestions-dropdown');

const debouncedSearch = debounce(async (query) => {
  if (query.length > 2) {
    const suggestions = await fetchSuggestions(query);
    renderSuggestions(suggestions);
    suggestionsDropdown.classList.remove('hidden');
  } else {
    suggestionsDropdown.classList.add('hidden');
  }
}, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

### Keyboard Navigation
```javascript
// Keyboard navigation for suggestions
let selectedIndex = -1;
const suggestions = document.querySelectorAll('.suggestion-item');

searchInput.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, suggestions.length - 1);
      updateSelection();
      break;
    case 'ArrowUp':
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, -1);
      updateSelection();
      break;
    case 'Enter':
      e.preventDefault();
      if (selectedIndex >= 0) {
        suggestions[selectedIndex].click();
      }
      break;
    case 'Escape':
      suggestionsDropdown.classList.add('hidden');
      selectedIndex = -1;
      break;
  }
});
```

### Filter Management
```javascript
// Active filters management
class FilterManager {
  constructor() {
    this.activeFilters = new Map();
  }

  addFilter(key, value, label) {
    this.activeFilters.set(key, { value, label });
    this.renderFilters();
    this.applyFilters();
  }

  removeFilter(key) {
    this.activeFilters.delete(key);
    this.renderFilters();
    this.applyFilters();
  }

  clearAll() {
    this.activeFilters.clear();
    this.renderFilters();
    this.applyFilters();
  }

  renderFilters() {
    const container = document.getElementById('active-filters');
    container.innerHTML = Array.from(this.activeFilters.entries())
      .map(([key, filter]) => `
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">
          ${filter.label}
          <button onclick="filterManager.removeFilter('${key}')" class="ml-2 text-primary-500 dark:text-primary-400">
            <svg class="w-3 h-3" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </span>
      `).join('');
  }
}
```

## Variations

### 1. Suggestions (suggestions)
- Real-time autocomplete dropdown
- Keyboard navigation support
- Icon-based suggestions
- Category grouping

### 2. Recent Searches (recent)
- Search history display
- Individual item removal
- Clear all functionality
- Timestamp support

### 3. Filters (filters)
- Category filters
- Price range sliders
- Brand/manufacturer filters
- Active filter display

### 4. Results (results - API)
```html
<div class="search-results">
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Search Results</h2>
    <span class="text-sm text-neutral-600 dark:text-neutral-400">127 results found</span>
  </div>

  <div class="grid gap-6">
    <div class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 bg-white dark:bg-neutral-950">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Search Result Title</h3>
      <p class="text-neutral-600 dark:text-neutral-400 mb-4">Search result description with highlighted matching terms...</p>
      <div class="flex items-center justify-between">
        <span class="text-sm text-neutral-500 dark:text-neutral-400">Category • Brand</span>
        <span class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">$999</span>
      </div>
    </div>
  </div>
</div>
```

## Styling Guidelines

### Search Input
- Use `pl-12` for left padding to accommodate search icon
- Apply `focus:ring-3 focus:ring-primary-100` for focus states
- Include `transition-colors` for smooth color changes

### Dropdown Suggestions
- Use `absolute` positioning with `top-full` and `mt-2`
- Apply `shadow-lg` for proper elevation
- Include `z-10` to ensure proper stacking

### Filter Tags
- Use `rounded-full` for pill-shaped active filters
- Apply `bg-primary-100 dark:bg-primary-900/20` for background
- Include remove buttons with hover states

## Performance Considerations

### Search Optimization
- Implement debouncing for API calls (300ms recommended)
- Use caching for frequently searched terms
- Implement pagination for large result sets
- Consider virtual scrolling for extensive suggestion lists

### Accessibility Best Practices
- Use ARIA live regions for dynamic content
- Implement proper keyboard navigation
- Provide clear focus indicators
- Include screen reader announcements

## Integration Examples

### E-commerce Search
```javascript
const ecommerceSearch = {
  categories: ['Electronics', 'Clothing', 'Home & Garden'],
  priceRanges: ['$0-$50', '$50-$200', '$200-$500', '$500+'],
  brands: ['Apple', 'Samsung', 'Nike', 'Adidas'],
  
  async search(query, filters = {}) {
    const params = new URLSearchParams({
      q: query,
      ...filters
    });
    
    const response = await fetch(`/api/search?${params}`);
    return response.json();
  }
};
```

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions) 
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- **Input**: Base input field components
- **Dropdown**: Dropdown menu components  
- **Button**: Action buttons and controls
- **Badge**: Filter and category tags 