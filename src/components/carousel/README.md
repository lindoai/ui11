# Carousel Component

Interactive carousel component for displaying content slides with smooth transitions, navigation controls, and responsive behavior.

## Variations

### 1. Auto-play Carousel
- Automatically progresses through slides
- Play/pause control button
- Smooth transitions with 3-second intervals
- Ideal for hero sections and featured content

```html
<div class="carousel-container relative overflow-hidden rounded-lg bg-white dark:bg-neutral-900 shadow-lg" data-carousel="autoplay">
  <div class="carousel-track flex transition-transform duration-500 ease-out">
    <!-- Slides here -->
  </div>
  <button class="carousel-play-pause absolute top-4 right-4 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg transition-colors" aria-label="Play or pause carousel">
    <!-- Play/pause icons -->
  </button>
</div>
```

### 2. Navigation Carousel
- Manual navigation with arrow buttons
- User-controlled slide progression
- Previous/next navigation
- Perfect for image galleries

```html
<div class="carousel-container relative overflow-hidden rounded-lg bg-white dark:bg-neutral-900 shadow-lg" data-carousel="navigation">
  <div class="carousel-track flex transition-transform duration-500 ease-out">
    <!-- Slides here -->
  </div>
  <button class="carousel-prev absolute left-4 top-1/2 -translate-y-1/2" aria-label="Previous slide">
    <!-- Previous arrow -->
  </button>
  <button class="carousel-next absolute right-4 top-1/2 -translate-y-1/2" aria-label="Next slide">
    <!-- Next arrow -->
  </button>
</div>
```

### 3. Indicators Carousel
- Visual page indicators
- Click-to-navigate functionality
- Progress tracking for users
- Great for feature showcases

```html
<div class="carousel-container relative overflow-hidden rounded-lg bg-white dark:bg-neutral-900 shadow-lg" data-carousel="indicators">
  <div class="carousel-track flex transition-transform duration-500 ease-out">
    <!-- Slides here -->
  </div>
  <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
    <button class="carousel-indicator w-3 h-3 rounded-full bg-white bg-opacity-50" data-slide="0" aria-label="Go to slide 1"></button>
    <!-- More indicators -->
  </div>
</div>
```

### 4. Responsive Carousel
- Adapts to different screen sizes
- Shows multiple items per view
- Mobile: 1 item, Tablet: 2 items, Desktop: 3 items
- Ideal for product showcases

```html
<div class="carousel-container relative overflow-hidden rounded-lg bg-white dark:bg-neutral-900 shadow-lg" data-carousel="responsive">
  <div class="carousel-track flex transition-transform duration-500 ease-out">
    <div class="carousel-slide w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2">
      <!-- Slide content -->
    </div>
  </div>
</div>
```

## Features

- **Smooth Transitions**: CSS-based transitions with Apple-like easing
- **Touch Support**: Swipe gestures on mobile devices
- **Keyboard Navigation**: Arrow key support for accessibility
- **Dark Mode**: Complete dark mode support
- **Responsive Design**: Adapts to all screen sizes
- **Accessibility**: ARIA labels and screen reader support

## Usage Guidelines

- Use auto-play carousels for showcasing hero content or featured items
- Provide navigation arrows for user-controlled browsing
- Include indicators for long carousels to show progress
- Implement responsive behavior for optimal mobile experience
- Ensure all slides have consistent content structure
- Add proper alt text for images and ARIA labels for accessibility

## Accessibility Features

- Keyboard navigation support (arrow keys, tab navigation)
- ARIA labels and roles for screen reader compatibility
- Focus indicators on interactive elements
- Pause functionality for auto-playing content
- Proper semantic markup for slide content
- High contrast indicators and navigation elements

## Dependencies

- Tailwind CSS for styling
- JavaScript for interactive functionality
- No external libraries required

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile) 