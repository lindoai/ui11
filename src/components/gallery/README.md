# Gallery Component

Image and media gallery components with grid layouts, lightbox functionality, and filtering capabilities for showcasing visual content with Apple-inspired design.

## Overview

The Gallery component offers three main variations:
- **Image Grid**: Responsive grid layout with hover effects
- **Lightbox**: Gallery with modal viewing and navigation
- **Filtering**: Category-based filtering for large collections

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant gallery layouts with sophisticated hover effects
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop devices
- 🖼️ **Lightbox Modal**: Full-screen image viewing with keyboard navigation
- 🔍 **Filtering System**: Category-based filtering with smooth animations
- 💫 **Smooth Transitions**: Elegant hover effects and state changes
- 🎯 **Performance**: Optimized for lazy loading and large image collections

## Usage

### Image Grid

```html
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="group relative overflow-hidden rounded-lg aspect-square bg-neutral-200 dark:bg-neutral-700">
    <img src="image1.jpg" alt="Gallery image" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
      <button class="opacity-0 group-hover:opacity-100 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 p-2 rounded-full transition-all duration-300 transform scale-75 group-hover:scale-100">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
```

### Lightbox Gallery

```html
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  <button data-lightbox="gallery" data-src="image1.jpg" class="group relative overflow-hidden rounded-lg aspect-video bg-neutral-200 dark:bg-neutral-700 hover:shadow-lg transition-all duration-300">
    <img src="image1-thumb.jpg" alt="Gallery thumbnail" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
      <div class="opacity-0 group-hover:opacity-100 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 p-3 rounded-full transition-all duration-300 transform scale-75 group-hover:scale-100">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10h.01"></path>
        </svg>
      </div>
    </div>
  </button>
</div>

<!-- Lightbox Modal -->
<div id="lightbox-modal" class="fixed inset-0 bg-black bg-opacity-90 hidden z-50 flex items-center justify-center p-4">
  <button id="lightbox-close" class="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
  <img id="lightbox-image" src="" alt="Lightbox image" class="max-w-full max-h-full object-contain">
</div>
```

### Filtering Gallery

```html
<!-- Filter Controls -->
<div class="flex flex-wrap gap-3 mb-6">
  <button data-filter="all" class="filter-btn active px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium transition-colors">
    All
  </button>
  <button data-filter="nature" class="filter-btn px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors">
    Nature
  </button>
  <button data-filter="architecture" class="filter-btn px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg text-sm font-medium transition-colors">
    Architecture
  </button>
</div>

<!-- Gallery Grid -->
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="filterable-gallery">
  <div class="gallery-item nature group relative overflow-hidden rounded-lg aspect-square">
    <img src="nature1.jpg" alt="Nature image" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
  </div>
  <div class="gallery-item architecture group relative overflow-hidden rounded-lg aspect-square">
    <img src="building1.jpg" alt="Architecture image" class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
  </div>
</div>
```

## JavaScript API

### Filtering System

Initialize filtering functionality for category-based gallery filtering:

```javascript
function initializeFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active states
      filterButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-primary-500', 'text-white');
        btn.classList.add('bg-neutral-100', 'dark:bg-neutral-800', 'text-neutral-700', 'dark:text-neutral-300');
      });
      
      button.classList.add('active', 'bg-primary-500', 'text-white');
      button.classList.remove('bg-neutral-100', 'dark:bg-neutral-800', 'text-neutral-700', 'dark:text-neutral-300');
      
      // Filter gallery items
      galleryItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}
```

### Lightbox Functionality

Basic lightbox implementation for full-screen image viewing:

```javascript
function initializeLightbox() {
  const lightboxButtons = document.querySelectorAll('[data-lightbox]');
  const modal = document.getElementById('lightbox-modal');
  const image = document.getElementById('lightbox-image');
  const closeButton = document.getElementById('lightbox-close');

  lightboxButtons.forEach(button => {
    button.addEventListener('click', () => {
      const src = button.getAttribute('data-src');
      image.src = src;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}
```

### Data Attributes

#### Lightbox Elements
- `data-lightbox="group-name"` - Groups images together for navigation
- `data-src="image.jpg"` - Full-size image source for lightbox

#### Filter Elements
- `data-filter="category"` - Category name for filtering
- `data-filter="all"` - Shows all items regardless of category

### CSS Classes

#### Grid Classes
- `.gallery-grid` - Container for image grid layout
- `.gallery-item` - Individual gallery item container
- `.aspect-square` - Square aspect ratio for grid items
- `.aspect-video` - Video aspect ratio for lightbox thumbnails

#### Interactive Classes
- `.group` - Group container for hover effects
- `.group-hover:opacity-100` - Show overlay on hover
- `.group-hover:scale-100` - Scale effect on hover
- `.transition-all duration-300` - Smooth transitions

#### Filter Classes
- `.filter-btn` - Filter button styling
- `.filter-btn.active` - Active filter state
- `.gallery-item.hidden` - Hidden gallery items

#### Lightbox Classes
- `.lightbox-modal` - Full-screen modal container
- `.lightbox-image` - Main lightbox image
- `.lightbox-close` - Close button styling

## Styling Guide

### Color Scheme
- **Background**: `bg-neutral-50 dark:bg-neutral-900` for gallery containers
- **Item Backgrounds**: `bg-neutral-200 dark:bg-neutral-700` for image placeholders
- **Hover Overlays**: `bg-black bg-opacity-30` for subtle darkening
- **Controls**: `bg-white dark:bg-neutral-800` for interactive elements
- **Active Filters**: `bg-primary-500 text-white` for selected filters

### Typography
- **Filter Labels**: `text-sm font-medium` for filter button text
- **Descriptions**: `text-sm text-neutral-600 dark:text-neutral-400` for captions
- **Instructions**: `text-sm` for helper text

### Layout
- **Grid Gaps**: `gap-4` for consistent spacing between items
- **Filter Spacing**: `gap-3` for filter button groups
- **Container Padding**: `p-8` for gallery containers
- **Border Radius**: `rounded-lg` for modern appearance

### Icons
- **Search/Zoom**: Magnifying glass icons for lightbox triggers
- **Navigation**: Arrow icons for lightbox navigation
- **Close**: X icon for closing modals
- **Category**: Relevant icons for filter categories

### Animations
- **Hover Effects**: `transition-all duration-300` for smooth state changes
- **Scale Effects**: `scale-75 group-hover:scale-100` for interactive feedback
- **Opacity**: `opacity-0 group-hover:opacity-100` for reveal effects
- **Shadow**: `hover:shadow-lg` for depth on interaction

## Accessibility Features

### ARIA Support
- `aria-label` for interactive gallery controls
- `aria-expanded` for filter state indication
- `aria-describedby` for additional context
- `role="img"` for decorative image containers
- `aria-live="polite"` for filter announcements

### Screen Reader Support
- Descriptive alt text for all images
- Clear button labels for interactive elements
- Meaningful headings for gallery sections
- Proper reading order for filtered content

### Keyboard Navigation
- Tab navigation through all interactive elements
- Enter/Space activation for buttons and filters
- Escape key to close lightbox modal
- Arrow keys for lightbox navigation (when implemented)

### Color Accessibility
- High contrast ratios for all text
- Focus indicators for keyboard navigation
- No color-only information conveyance
- Dark mode compliance with WCAG standards

## Performance Considerations

### Image Optimization
- Lazy loading for large galleries
- Responsive image sizing with srcset
- WebP format support with fallbacks
- Thumbnail generation for faster loading

### Large Collections
- Virtual scrolling for extensive galleries
- Progressive loading of image batches
- Client-side caching of loaded images
- Efficient filtering without DOM manipulation

### Animation Performance
- GPU-accelerated transforms
- Debounced filter operations
- Smooth 60fps transitions
- Memory-efficient hover effects

## Best Practices

1. **Image Quality**: Use consistent aspect ratios and high-quality thumbnails
2. **Loading States**: Show skeleton loaders during image loading
3. **Error Handling**: Provide fallback images for failed loads
4. **Responsive Design**: Ensure galleries work well on all screen sizes
5. **SEO**: Include descriptive alt text and structured data
6. **Performance**: Implement lazy loading for large collections
7. **User Experience**: Provide clear visual feedback for all interactions

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Customization

The gallery component can be customized by modifying Tailwind classes:

```html
<!-- Custom grid layout example -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
  <!-- Masonry-style layout -->
</div>

<!-- Custom hover effects example -->
<div class="group-hover:scale-105 group-hover:rotate-1 transition-transform duration-500">
  <!-- Creative hover animations -->
</div>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 