# Dropdown Component

A versatile dropdown component that provides single selection, searchable options, and multi-selection capabilities with Apple-inspired design.

## Overview

The Dropdown component offers three main variations:
- **Select-like**: Standard dropdown behavior similar to HTML select elements
- **With Search**: Searchable dropdown with real-time filtering for large option lists
- **Multi-select**: Multiple selection with checkbox-based options and tag display

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant styling with subtle shadows and smooth animations
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop devices
- 🔍 **Search Functionality**: Real-time filtering for searchable dropdowns
- ✅ **Multi-selection**: Tag-based display with easy removal of selected items
- 🎯 **Focus Management**: Proper focus handling and keyboard navigation
- 🎨 **Customizable**: Easily customizable through Tailwind utility classes

## Usage

### Basic Select-like Dropdown

```html
<div class="dropdown-container relative" data-dropdown="basic">
  <button class="dropdown-toggle w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-3 text-left text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500" aria-haspopup="listbox" aria-expanded="false">
    <span class="dropdown-selected">Select option...</span>
    <svg class="dropdown-arrow absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <ul class="dropdown-menu absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg hidden" role="listbox">
    <li class="dropdown-option px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="option1" role="option">Option 1</li>
    <li class="dropdown-option px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="option2" role="option">Option 2</li>
    <li class="dropdown-option px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="option3" role="option">Option 3</li>
  </ul>
</div>
```

### Searchable Dropdown

```html
<div class="dropdown-container relative" data-dropdown="search">
  <div class="relative">
    <input type="text" class="dropdown-search w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-3 pr-10 placeholder-neutral-400 focus:ring-2 focus:ring-primary-500" placeholder="Search options..." autocomplete="off">
    <svg class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  </div>
  <ul class="dropdown-menu absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg hidden" role="listbox">
    <li class="dropdown-option px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="js" data-text="JavaScript" role="option">JavaScript</li>
    <li class="dropdown-option px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="py" data-text="Python" role="option">Python</li>
  </ul>
</div>
```

### Multi-select Dropdown

```html
<div class="dropdown-container relative" data-dropdown="multiselect">
  <button class="dropdown-toggle w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-3 text-left focus:ring-2 focus:ring-primary-500 min-h-[44px]" aria-haspopup="listbox" aria-expanded="false">
    <div class="dropdown-selected-container">
      <span class="dropdown-placeholder text-neutral-500">Select options...</span>
      <div class="dropdown-selected-items flex flex-wrap gap-1 hidden"></div>
    </div>
    <svg class="dropdown-arrow absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  <ul class="dropdown-menu absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg hidden" role="listbox">
    <li class="dropdown-option flex items-center px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="html" data-text="HTML" role="option">
      <input type="checkbox" class="option-checkbox mr-3" aria-label="Select HTML">
      <span>HTML</span>
    </li>
    <li class="dropdown-option flex items-center px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="css" data-text="CSS" role="option">
      <input type="checkbox" class="option-checkbox mr-3" aria-label="Select CSS">
      <span>CSS</span>
    </li>
  </ul>
</div>
```

## JavaScript API

### Initialization

The dropdown component is automatically initialized when the page loads. Each dropdown type requires specific HTML structure and data attributes:

```javascript
// Basic dropdown
initializeBasicDropdown(dropdownElement);

// Search dropdown
initializeSearchDropdown(dropdownElement);

// Multi-select dropdown
initializeMultiselectDropdown(dropdownElement);
```

### Data Attributes

- `data-dropdown="basic"` - Standard single-selection dropdown
- `data-dropdown="search"` - Searchable dropdown with filtering
- `data-dropdown="multiselect"` - Multi-selection dropdown with checkboxes

### CSS Classes

#### Container Classes
- `.dropdown-container` - Main wrapper with relative positioning
- `.dropdown-toggle` - Button that toggles the dropdown menu
- `.dropdown-menu` - The options list container
- `.dropdown-option` - Individual option items

#### State Classes
- `.hidden` - Hides the dropdown menu
- `.rotate-180` - Rotates the dropdown arrow when open
- `aria-expanded="true/false"` - Indicates dropdown state for accessibility

#### Search-specific Classes
- `.dropdown-search` - Search input field
- `.dropdown-selected` - Selected value display

#### Multi-select Classes
- `.dropdown-placeholder` - Placeholder text when no items selected
- `.dropdown-selected-items` - Container for selected item tags
- `.option-checkbox` - Checkbox inputs for multi-selection

## Styling Guide

### Color Scheme
- **Background**: `bg-white dark:bg-neutral-800` for clean, neutral backgrounds
- **Borders**: `border-neutral-200 dark:border-neutral-700` for subtle definition
- **Text**: `text-neutral-900 dark:text-neutral-100` for optimal readability
- **Focus**: `focus:ring-2 focus:ring-primary-500` for accessibility
- **Hover**: `hover:bg-neutral-50 dark:hover:bg-neutral-700` for interaction feedback

### Spacing
- **Padding**: `px-4 py-3` for comfortable click targets
- **Margins**: `mt-1` between trigger and menu
- **Border Radius**: `rounded-lg` for modern Apple-like appearance

### Shadows
- **Menu Shadow**: `shadow-lg` for elevated appearance
- **Focus Ring**: `ring-2` with primary color for accessibility

## Accessibility Features

### ARIA Support
- `role="listbox"` on dropdown menu
- `role="option"` on each dropdown option
- `aria-haspopup="listbox"` on trigger button
- `aria-expanded` to indicate dropdown state
- `aria-label` on interactive elements

### Keyboard Navigation
- **Space/Enter**: Open/close dropdown
- **Arrow Keys**: Navigate through options
- **Escape**: Close dropdown
- **Tab**: Proper focus management

### Screen Reader Support
- Descriptive labels for all interactive elements
- Status announcements for selection changes
- Proper heading hierarchy and landmarks

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Examples

### With Icons
Add icons to dropdown options for better visual hierarchy:

```html
<li class="dropdown-option flex items-center px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer" data-value="high" role="option">
  <div class="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
  High Priority
</li>
```

### Grouped Options
Organize options with group headers:

```html
<ul class="dropdown-menu">
  <li class="px-4 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Languages</li>
  <li class="dropdown-option px-4 py-2 hover:bg-neutral-50 cursor-pointer" data-value="js">JavaScript</li>
  <li class="dropdown-option px-4 py-2 hover:bg-neutral-50 cursor-pointer" data-value="py">Python</li>
</ul>
```

### Disabled Options
Make certain options non-selectable:

```html
<li class="px-4 py-2 text-neutral-400 cursor-not-allowed" data-value="disabled">Disabled Option</li>
```

## Best Practices

1. **Option Limits**: Use search functionality when there are 8+ options
2. **Clear Labels**: Keep option text concise and descriptive
3. **Selection Feedback**: Provide clear visual indication of selected state
4. **Mobile Optimization**: Ensure adequate touch targets (44px minimum)
5. **Loading States**: Show loading indicators for dynamic content
6. **Error Handling**: Provide feedback for failed operations
7. **Keyboard Support**: Test all functionality with keyboard-only navigation
8. **Screen Reader Testing**: Verify compatibility with assistive technologies

## Customization

The dropdown component can be customized by modifying Tailwind classes:

```html
<!-- Custom styling example -->
<div class="dropdown-container relative">
  <button class="dropdown-toggle w-full bg-blue-50 border-2 border-blue-200 rounded-xl px-6 py-4 text-blue-900 focus:ring-4 focus:ring-blue-100">
    <!-- Custom button content -->
  </button>
  <!-- Custom menu styling -->
</div>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 