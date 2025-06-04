# Card Component

Flexible card components for displaying content with clean layouts, image integration, action buttons, and sophisticated hover effects for Apple-inspired design systems.

## Overview

The Card component offers four main variations:
- **Basic**: Simple content cards with titles, descriptions, and clean layouts
- **Image**: Cards with image headers for visual content presentation
- **Actions**: Cards with action buttons and interactive elements
- **Hover Effects**: Cards with sophisticated hover animations (documented in API)

## Features

- 🎨 **Apple-inspired Design**: Clean, professional card interfaces with elegant styling
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- 📱 **Responsive Layout**: Mobile-first design that works on all devices
- ♿ **Accessibility**: WCAG-compliant with proper ARIA labels and keyboard navigation
- 🎯 **Interactive States**: Hover and focus states for better user experience
- 🔧 **Customizable**: Easy to modify layouts, colors, and content structure
- ⚡ **Performance**: Lightweight and optimized for fast loading

## Variations

### 1. Basic Card
Simple content cards with titles, descriptions, and metadata.

**Key Features:**
- Clean typography hierarchy
- Consistent padding and spacing
- Metadata support with icons
- Semantic HTML structure

**Use Cases:**
- Information panels
- Feature highlights
- Content summaries
- Dashboard widgets

### 2. Image Card
Cards with image headers for visual content presentation.

**Key Features:**
- Full-width image headers
- Optimized image loading
- Content below image
- Date and reading time metadata

**Use Cases:**
- Blog post previews
- Article cards
- Product showcases
- Media galleries

### 3. Action Cards
Cards with action buttons and interactive elements.

**Key Features:**
- Icon headers with context
- Menu options
- Status badges
- Primary and secondary actions

**Use Cases:**
- Call-to-action cards
- Product selections
- Feature announcements
- Process steps

### 4. Hover Effects (API Documentation)
Cards with sophisticated hover animations and transitions.

**Available Effects:**
- Lift animations with shadow
- Scale transformations
- Border glow effects
- Color transitions

## Usage Examples

### Basic Implementation
```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Card Title</h3>
  <p class="text-neutral-600 dark:text-neutral-400 mb-4">Card description with relevant information.</p>
  <div class="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    Updated 2 hours ago
  </div>
</div>
```

### With Image Header
```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
  <img src="image-url.jpg" alt="Image description" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Card Title</h3>
    <p class="text-neutral-600 dark:text-neutral-400 mb-4">Card description.</p>
    <div class="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
      <span>March 15, 2024</span>
      <span>5 min read</span>
    </div>
  </div>
</div>
```

### With Actions
```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <div class="flex items-start justify-between mb-4">
    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
      <svg class="w-6 h-6 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    </div>
    <button class="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300" aria-label="Card options">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
    </button>
  </div>
  <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Card Title</h3>
  <p class="text-neutral-600 dark:text-neutral-400 mb-6">Card description with action-oriented content.</p>
  <div class="flex items-center space-x-3">
    <button class="bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
      Primary Action
    </button>
    <button class="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
      Secondary
    </button>
  </div>
</div>
```

## Layout Guidelines

### Grid Layouts
- **Single Column**: Use for detailed content or forms
- **Two Column**: Ideal for comparison or related content
- **Three Column**: Perfect for feature highlights or product grids
- **Four+ Columns**: Use for compact information display

### Responsive Behavior
```html
<!-- Responsive grid example -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards go here -->
</div>
```

### Spacing Standards
- **Card Padding**: Use `p-6` for standard content
- **Grid Gaps**: Use `gap-6` for card grids
- **Section Spacing**: Use `mb-4` for elements within cards

## Customization

### Color Variants
```html
<!-- Success theme -->
<div class="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-700">
  <!-- Content -->
</div>

<!-- Warning theme -->
<div class="bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-700">
  <!-- Content -->
</div>
```

### Size Variations
```html
<!-- Compact card -->
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
  <!-- Content -->
</div>

<!-- Large card -->
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8">
  <!-- Content -->
</div>
```

## Best Practices

### Content Guidelines
1. **Keep titles concise** - 1-2 lines maximum
2. **Write scannable descriptions** - 2-3 sentences ideal
3. **Use meaningful metadata** - Include relevant timestamps or counts
4. **Optimize images** - Use appropriate sizes and formats
5. **Limit actions** - Focus on primary action, max 2-3 buttons

### Performance Tips
1. **Lazy load images** - For better page load performance
2. **Optimize image sizes** - Use responsive images with proper dimensions
3. **Minimize DOM complexity** - Keep card structure simple
4. **Use efficient selectors** - Avoid deep nesting in styles

### Accessibility Guidelines
1. **Semantic HTML** - Use proper heading hierarchy
2. **Alt text** - Include descriptive alt text for all images
3. **Button labels** - Add ARIA labels for icon-only buttons
4. **Keyboard navigation** - Ensure all interactive elements are accessible
5. **Color contrast** - Maintain WCAG AA compliance

## Integration Notes

### JavaScript Requirements
- Tab switching functionality for demo pages
- Copy-to-clipboard for code examples
- Theme switching support
- Toast notifications for user feedback

### Dependencies
- Tailwind CSS 3.4.17+
- Inter font family (system fonts fallback)
- Tabler Icons for consistent iconography
- Prism.js for code syntax highlighting

### Browser Support
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

## API Reference

### CSS Classes
- `.card-basic` - Basic card styling (deprecated, use Tailwind classes)
- `.card-image` - Image card styling (deprecated, use Tailwind classes)
- `.card-actions` - Action card styling (deprecated, use Tailwind classes)

### Data Attributes
- `data-card-type` - Identifies card variation type
- `data-interactive` - Marks cards with hover effects

### Events
- `card:click` - Fired when card is clicked
- `card:action` - Fired when action button is clicked

---

For live examples and interactive demos, visit the [Card Component Documentation](./index.html). 