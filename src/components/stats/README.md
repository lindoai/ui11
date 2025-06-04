# Stats Component

Statistical display components for showcasing key metrics, counters, trends, and data comparisons with professional Apple-inspired styling.

## Overview

The Stats component offers four main variations:
- **Counters**: Animated number counters for impressive statistics
- **Metrics**: Key performance indicators with descriptive context
- **Trends**: Statistical trends with visual growth/decline indicators
- **Comparisons**: Side-by-side comparisons with progress bars

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant statistical displays with professional appearance
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, screen reader compatibility, and proper color contrast
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop devices
- 📊 **Animated Counters**: Smooth number animation on scroll
- 📈 **Visual Indicators**: Clear trend arrows and progress bars
- 💫 **Smooth Transitions**: Gentle animations for better UX
- 🎯 **Performance**: Intersection Observer API for efficient counter animations

## Usage

### Counters

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div class="text-center">
    <div class="counter text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2" data-target="10000">0</div>
    <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Active Users</div>
  </div>
  <div class="text-center">
    <div class="counter text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2" data-target="250">0</div>
    <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Projects Completed</div>
  </div>
  <div class="text-center">
    <div class="counter text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2" data-target="95">0</div>
    <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Customer Satisfaction</div>
  </div>
  <div class="text-center">
    <div class="counter text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2" data-target="24">0</div>
    <div class="text-sm font-medium text-neutral-600 dark:text-neutral-400">Support Availability</div>
  </div>
</div>
```

### Metrics

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </div>
    </div>
    <div class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">12,543</div>
    <div class="text-sm text-neutral-600 dark:text-neutral-400">Total Users</div>
    <div class="text-xs text-green-600 dark:text-green-400 mt-2">+12% from last month</div>
  </div>
</div>
```

### Trends

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="text-center">
    <div class="flex items-center justify-center mb-3">
      <svg class="w-6 h-6 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
      </svg>
    </div>
    <div class="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">+23.5%</div>
    <div class="text-sm text-neutral-600 dark:text-neutral-400">Sales Growth</div>
    <div class="text-xs text-green-600 dark:text-green-400 mt-1">↗ Trending up</div>
  </div>
</div>
```

### Comparisons

```html
<div class="space-y-6">
  <div class="flex items-center justify-between">
    <div class="flex-1">
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Desktop Traffic</span>
        <span class="text-sm text-neutral-600 dark:text-neutral-400">68%</span>
      </div>
      <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
        <div class="bg-blue-500 h-2 rounded-full transition-all duration-500" style="width: 68%"></div>
      </div>
    </div>
  </div>

  <div class="pt-4 border-t border-neutral-200 dark:border-neutral-700">
    <div class="grid grid-cols-2 gap-6">
      <div class="text-center">
        <div class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">24,789</div>
        <div class="text-sm text-neutral-600 dark:text-neutral-400">This Month</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">19,234</div>
        <div class="text-sm text-neutral-600 dark:text-neutral-400">Last Month</div>
      </div>
    </div>
  </div>
</div>
```

## JavaScript API

### Counter Animation

The counter animation uses the Intersection Observer API for performance:

```javascript
function initializeCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
      }
    }, duration / steps);
  };

  // Start animation when component is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  counters.forEach(counter => observer.observe(counter));
}
```

### Data Attributes

#### Counter Elements
- `data-target="number"` - Target number for counter animation

### CSS Classes

#### Counter Classes
- `.counter` - Main counter element that will be animated
- `text-4xl font-semibold` - Large, bold text for impressive numbers
- `text-sm font-medium` - Labels for counter descriptions

#### Metric Classes
- `.metric-card` - Container for metric displays
- `.metric-icon` - Icon container with background
- `.metric-value` - Primary metric value
- `.metric-label` - Metric description
- `.metric-change` - Change indicator

#### Trend Classes
- `.trend-up` - Green color for positive trends
- `.trend-down` - Red color for negative trends
- `.trend-stable` - Yellow/neutral color for stable metrics

#### Progress Classes
- `.progress-bar` - Container for progress bars
- `.progress-fill` - Animated fill element

## Styling Guide

### Color Scheme
- **Background**: `bg-white dark:bg-neutral-950` for clean metric displays
- **Card Backgrounds**: `bg-neutral-50 dark:bg-neutral-900` for preview areas
- **Icon Backgrounds**: Semantic colors (`bg-blue-100`, `bg-green-100`, etc.)
- **Text**: `text-neutral-900 dark:text-neutral-100` for primary values
- **Labels**: `text-neutral-600 dark:text-neutral-400` for descriptions
- **Trends**: Green for positive, red for negative, yellow for stable

### Typography
- **Large Numbers**: `text-4xl font-semibold` for impressive counters
- **Medium Numbers**: `text-2xl font-semibold` for metric values
- **Small Text**: `text-sm font-medium` for labels and descriptions
- **Change Indicators**: `text-xs` for trend descriptions

### Icons
- **Trend Icons**: Directional arrows and charts
- **Metric Icons**: Relevant business/analytics icons
- **Status Icons**: Growth, decline, and stability indicators

### Spacing
- **Grid Gaps**: `gap-6` to `gap-8` for proper separation
- **Card Padding**: `p-6` for comfortable internal spacing
- **Icon Padding**: `p-3` for icon containers
- **Margins**: `mb-2` to `mb-4` for vertical rhythm

## Accessibility Features

### ARIA Support
- `aria-label` for complex statistical displays
- `role="img"` for decorative trend icons
- `aria-describedby` for additional context
- `aria-live="polite"` for counter updates

### Screen Reader Support
- Descriptive labels for all numerical values
- Clear indication of trends and changes
- Proper reading order for comparative data
- Alternative text for visual indicators

### Color Accessibility
- High contrast ratios for all text
- Semantic colors with additional text indicators
- No color-only information conveyance
- Dark mode compliance with WCAG standards

## Performance Considerations

### Animation Optimization
- Intersection Observer for efficient trigger detection
- Smooth 60fps counter animations
- Debounced progress bar updates
- GPU-accelerated transitions

### Large Datasets
- Lazy loading for extensive statistical displays
- Virtual scrolling for large comparison lists
- Progressive loading of complex metrics
- Client-side caching for repeated data

## Best Practices

1. **Data Accuracy**: Ensure all statistics are current and accurate
2. **Context**: Provide meaningful comparisons and timeframes
3. **Visual Hierarchy**: Use size and color to emphasize importance
4. **Loading States**: Show skeleton loaders during data fetching
5. **Error Handling**: Display meaningful messages for data failures
6. **Responsive Design**: Ensure readability on all screen sizes
7. **Performance**: Optimize animations for smooth user experience

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Customization

The stats component can be customized by modifying Tailwind classes:

```html
<!-- Custom color scheme example -->
<div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl p-8">
  <div class="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
  <div class="text-blue-700 dark:text-blue-300 font-medium">Uptime</div>
</div>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 