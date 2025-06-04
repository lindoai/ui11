# List Component

Flexible list components for displaying collections of data with various layouts including basic, avatar, actions, and nested structures.

## Overview

The List component offers four main variations:
- **Basic**: Simple list layout for displaying basic information
- **Avatar**: List with avatar images for user profiles and people
- **Actions**: List items with interactive buttons and actions
- **Nested**: Hierarchical list structure for complex data

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant styling with subtle shadows
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support and keyboard navigation
- 📱 **Responsive**: Works perfectly on all device sizes
- 🔄 **Interactive States**: Hover effects and focus indicators
- 🏗️ **Flexible Layout**: Support for various content types and structures
- 💫 **Smooth Transitions**: Gentle animations for better UX

## Usage

### Basic List

```html
<ul class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg divide-y divide-neutral-200 dark:divide-neutral-700">
  <li class="px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
    <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Dashboard</div>
    <div class="text-sm text-neutral-500 dark:text-neutral-400">Overview of your account</div>
  </li>
  <li class="px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
    <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Projects</div>
    <div class="text-sm text-neutral-500 dark:text-neutral-400">Manage your projects</div>
  </li>
  <li class="px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
    <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Team</div>
    <div class="text-sm text-neutral-500 dark:text-neutral-400">Collaborate with your team</div>
  </li>
</ul>
```

### Avatar List

```html
<ul class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg divide-y divide-neutral-200 dark:divide-neutral-700">
  <li class="px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
    <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
        <div class="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
          <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">JD</span>
        </div>
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100 truncate">John Doe</div>
        <div class="text-sm text-neutral-500 dark:text-neutral-400 truncate">john@example.com</div>
      </div>
      <div class="flex-shrink-0">
        <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Active</span>
      </div>
    </div>
  </li>
</ul>
```

### Actions List

```html
<ul class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg divide-y divide-neutral-200 dark:divide-neutral-700">
  <li class="px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <div class="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
            <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">JS</span>
          </div>
        </div>
        <div>
          <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Jane Smith</div>
          <div class="text-sm text-neutral-500 dark:text-neutral-400">Product Manager</div>
        </div>
      </div>
      <div class="flex items-center space-x-2">
        <button class="px-3 py-1 bg-primary-500 dark:bg-primary-600 text-white text-xs font-medium rounded-md hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors">
          Edit
        </button>
        <button class="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
          Delete
        </button>
      </div>
    </div>
  </li>
</ul>
```

### Nested List

```html
<ul class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg">
  <li class="border-b border-neutral-200 dark:border-neutral-700">
    <div class="px-6 py-4 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer">
      <div class="flex items-center justify-between">
        <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Development Team</div>
        <svg class="w-4 h-4 text-neutral-400 dark:text-neutral-500 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
    <ul class="pl-6 border-l border-neutral-200 dark:border-neutral-700 ml-6">
      <li class="px-6 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
        <div class="text-sm text-neutral-900 dark:text-neutral-100">Frontend Developer</div>
        <div class="text-xs text-neutral-500 dark:text-neutral-400">React & TypeScript</div>
      </li>
      <li class="px-6 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
        <div class="text-sm text-neutral-900 dark:text-neutral-100">Backend Developer</div>
        <div class="text-xs text-neutral-500 dark:text-neutral-400">Node.js & Python</div>
      </li>
    </ul>
  </li>
</ul>
```

## Styling Guide

### Color Scheme
- **List Background**: `bg-white dark:bg-neutral-950` for clean appearance
- **Item Borders**: `border-neutral-200 dark:border-neutral-700` for subtle separation
- **Hover States**: `hover:bg-neutral-50 dark:hover:bg-neutral-800` for interaction feedback
- **Primary Text**: `text-neutral-900 dark:text-neutral-100` for main content
- **Secondary Text**: `text-neutral-500 dark:text-neutral-400` for descriptions

### Spacing
- **List Padding**: `rounded-lg` for container border radius
- **Item Padding**: `px-6 py-4` for comfortable content spacing
- **Avatar Spacing**: `space-x-4` between avatar and content
- **Nested Indentation**: `pl-6 ml-6` for hierarchical structure

### Typography
- **Primary Text**: `text-sm font-medium` for item titles
- **Secondary Text**: `text-sm` for descriptions and metadata
- **Nested Text**: `text-xs` for sub-items in nested lists

## CSS Classes

### List Structure
- `.list-container` - Main list wrapper
- `.list-item` - Individual list item
- `.list-content` - Content area within item
- `.list-actions` - Action buttons container

### Interactive Elements
- `.list-item-hover` - Hover state styling
- `.list-item-active` - Active/selected state
- `.list-item-disabled` - Disabled state styling

### Layout Classes
- `.list-avatar` - Avatar container styling
- `.list-title` - Primary text styling
- `.list-description` - Secondary text styling
- `.list-badge` - Status badges and labels

## Accessibility Features

### ARIA Support
- `role="list"` and `role="listitem"` for proper structure
- `aria-label` for action buttons
- `aria-expanded` for collapsible nested lists
- `aria-current` for current/active items

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate clickable list items
- **Arrow Keys**: Navigate between list items
- **Escape**: Close expanded nested lists

### Screen Reader Support
- Descriptive labels for all interactive elements
- Status announcements for list updates
- Clear indication of list structure and nesting
- Proper heading hierarchy for nested content

## Best Practices

1. **Content Structure**: Use semantic HTML list elements (ul/ol/li)
2. **Visual Hierarchy**: Maintain clear typography hierarchy
3. **Interactive Feedback**: Provide hover states for clickable items
4. **Loading States**: Show skeleton loaders during data fetching
5. **Empty States**: Display helpful messages when lists are empty
6. **Performance**: Virtualize large lists for better performance
7. **Mobile Optimization**: Ensure touch-friendly interaction areas

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Customization

The list component can be customized by modifying Tailwind classes:

```html
<!-- Custom styling example -->
<ul class="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-xl">
  <li class="px-8 py-6 hover:bg-blue-100 dark:hover:bg-blue-800">
    <div class="text-blue-900 dark:text-blue-100 font-semibold">Custom Item</div>
  </li>
</ul>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 