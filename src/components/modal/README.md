# Modal Component

Versatile modal dialogs with multiple sizes, backdrop overlays, scrollable content, and nested modal support for complex user interactions in Apple-inspired design systems.

## Overview

The Modal component offers four main variations:
- **Sizes**: Small, medium, and large modal variations for different content types
- **Backdrop**: Modal with backdrop overlay for user focus
- **Scrollable**: Modals with scrollable content for lengthy information
- **Nested**: Nested modal support for complex workflows (documented in API)

## Features

- 🎨 **Apple-inspired Design**: Clean, professional modal interfaces with elegant styling
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- 📱 **Responsive Layout**: Mobile-first design that works on all devices
- ♿ **Accessibility**: WCAG-compliant with focus management and keyboard navigation
- 🎯 **Interactive States**: Backdrop clicks and ESC key for modal dismissal
- 🔧 **Customizable**: Easy to modify sizes, layouts, and content structure
- ⚡ **Performance**: Lightweight and optimized for fast interactions

## Variations

### 1. Modal Sizes
Three different modal sizes for various content requirements.

**Key Features:**
- Small (max-w-sm): Quick confirmations and simple actions
- Medium (max-w-md): Forms and detailed information
- Large (max-w-2xl): Complex forms and multi-column layouts
- Consistent header and footer structure

**Use Cases:**
- Confirmations and alerts
- Contact forms
- User profiles
- Settings panels

### 2. Backdrop Overlay
Modal with semi-transparent backdrop for user focus.

**Key Features:**
- 50% opacity black backdrop
- Click-to-dismiss functionality
- Focus trapping within modal
- Background scroll prevention

**Use Cases:**
- All modal interactions
- User attention focus
- Content isolation

### 3. Scrollable Content
Modals with internal scrolling for lengthy content.

**Key Features:**
- Fixed header and footer
- Scrollable content area (flex-1)
- Maximum height constraint (80vh)
- Consistent internal spacing

**Use Cases:**
- Terms of service
- Long-form content
- Documentation
- Privacy policies

### 4. Nested Modals (API Documentation)
Support for opening modals within modals for complex workflows.

**Available Features:**
- Modal stacking with z-index management
- Individual backdrop handling
- Independent focus management
- Sequential closing behavior

## Usage Examples

### Basic Modal Implementation
```html
<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
  <div class="bg-white dark:bg-neutral-950 rounded-lg shadow-lg max-w-sm w-full">
    <div class="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Modal Title</h3>
      <button class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300" aria-label="Close modal">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="p-6">
      <p class="text-neutral-600 dark:text-neutral-400 mb-4">Modal content goes here.</p>
      <div class="flex justify-end space-x-3">
        <button class="px-4 py-2 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-lg">Cancel</button>
        <button class="px-4 py-2 bg-primary-500 dark:bg-primary-600 text-white rounded-lg">Confirm</button>
      </div>
    </div>
  </div>
</div>
```

### Scrollable Modal
```html
<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
  <div class="bg-white dark:bg-neutral-950 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] flex flex-col">
    <!-- Fixed Header -->
    <div class="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700 flex-shrink-0">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Modal Title</h3>
      <button class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300" aria-label="Close modal">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    
    <!-- Scrollable Content -->
    <div class="p-6 overflow-y-auto flex-1">
      <!-- Long content goes here -->
    </div>
    
    <!-- Fixed Footer -->
    <div class="flex justify-end space-x-3 p-6 border-t border-neutral-200 dark:border-neutral-700 flex-shrink-0">
      <button class="px-4 py-2 text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-lg">Cancel</button>
      <button class="px-4 py-2 bg-primary-500 dark:bg-primary-600 text-white rounded-lg">Confirm</button>
    </div>
  </div>
</div>
```

### JavaScript Modal Control
```javascript
// Open modal
function openModal(modalId) {
  document.getElementById(modalId).classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Focus management
  const modal = document.getElementById(modalId);
  const focusableElements = modal.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

// Close modal
function closeModal(modalId) {
  document.getElementById(modalId).classList.add('hidden');
  document.body.style.overflow = '';
}

// Backdrop click dismissal
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('fixed') && e.target.classList.contains('inset-0')) {
    const modalId = e.target.id;
    if (modalId) {
      closeModal(modalId);
    }
  }
});

// ESC key dismissal
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const openModals = document.querySelectorAll('.fixed.inset-0:not(.hidden)');
    openModals.forEach(modal => {
      if (modal.id) {
        closeModal(modal.id);
      }
    });
  }
});
```

## Size Guidelines

### Modal Sizing
- **Small (max-w-sm)**: 384px max width - Confirmations, simple alerts
- **Medium (max-w-md)**: 448px max width - Forms, detailed content
- **Large (max-w-2xl)**: 672px max width - Complex forms, multi-column layouts
- **Extra Large (max-w-4xl)**: 896px max width - Dashboard-style content

### Height Constraints
- **Standard**: Natural content height with padding
- **Scrollable**: max-h-[80vh] with internal scrolling
- **Full Screen**: For mobile or extensive content

### Responsive Behavior
```html
<!-- Mobile-first responsive modal -->
<div class="max-w-sm sm:max-w-md lg:max-w-2xl w-full mx-4">
  <!-- Modal content -->
</div>
```

## Layout Structure

### Header Section
```html
<div class="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
  <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Title</h3>
  <button class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300" aria-label="Close modal">
    <!-- Close icon -->
  </button>
</div>
```

### Content Section
```html
<div class="p-6">
  <!-- Modal body content -->
</div>
```

### Footer Section
```html
<div class="flex justify-end space-x-3 p-6 border-t border-neutral-200 dark:border-neutral-700">
  <button class="secondary-button">Cancel</button>
  <button class="primary-button">Confirm</button>
</div>
```

## Accessibility Implementation

### Focus Management
```javascript
// Trap focus within modal
const modal = document.getElementById(modalId);
const focusableElements = modal.querySelectorAll(
  'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

// Focus first element when opening
if (focusableElements.length > 0) {
  focusableElements[0].focus();
}

// Handle tab cycling
modal.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
});
```

### ARIA Attributes
```html
<!-- Modal container -->
<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <h3 id="modal-title">Modal Title</h3>
  <!-- Content -->
</div>

<!-- Close button -->
<button aria-label="Close modal" aria-describedby="modal-title">
  <!-- Close icon -->
</button>
```

## Best Practices

### Usage Guidelines
1. **Use sparingly** - Modals interrupt user flow
2. **Clear purpose** - Each modal should have a single, clear objective
3. **Appropriate sizing** - Match modal size to content complexity
4. **Easy dismissal** - Provide multiple ways to close (X button, ESC, backdrop)
5. **Focus management** - Always handle focus properly
6. **Mobile considerations** - Ensure modals work well on small screens

### Performance Tips
1. **Lazy loading** - Load modal content only when needed
2. **Event delegation** - Use efficient event handling
3. **Memory cleanup** - Remove event listeners when modals are destroyed
4. **Minimal DOM** - Keep modal structure lightweight

### Content Guidelines
1. **Concise titles** - Clear, descriptive modal titles
2. **Scannable content** - Use proper spacing and typography
3. **Clear actions** - Label buttons with specific action words
4. **Progress indication** - Show progress for multi-step modals
5. **Error handling** - Provide clear error messages and recovery options

## Integration Notes

### JavaScript Requirements
- Modal open/close functionality
- Focus management and trapping
- Keyboard event handling (ESC key)
- Backdrop click dismissal
- Background scroll prevention

### Dependencies
- Tailwind CSS 3.4.17+
- Inter font family (system fonts fallback)
- Tabler Icons for consistent iconography
- Toast notifications for user feedback

### Browser Support
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## API Reference

### Methods
- `openModal(modalId)` - Open specific modal by ID
- `closeModal(modalId)` - Close specific modal by ID
- `closeAllModals()` - Close all open modals

### Events
- `modal:open` - Fired when modal opens
- `modal:close` - Fired when modal closes
- `modal:backdrop-click` - Fired on backdrop click
- `modal:escape` - Fired on ESC key press

### CSS Classes
- `.modal-backdrop` - Backdrop overlay styling
- `.modal-container` - Modal container positioning
- `.modal-content` - Modal content area
- `.modal-scrollable` - Scrollable content variant

### Data Attributes
- `data-modal-size` - Identifies modal size (sm, md, lg)
- `data-modal-scrollable` - Marks scrollable modals
- `data-modal-persistent` - Prevents backdrop dismissal

---

For live examples and interactive demos, visit the [Modal Component Documentation](./index.html). 