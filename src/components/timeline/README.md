# Timeline Component

Visual timeline components for displaying chronological events, milestones, and progress with vertical, horizontal, and custom icon layouts.

## Overview

The Timeline component offers three main variations:
- **Vertical**: Standard vertical timeline layout for chronological events
- **Horizontal**: Horizontal timeline layout for sequential steps and processes
- **Custom Icons**: Timeline with custom icons for different event types

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant styling with professional appearance
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support and semantic HTML structure
- 📱 **Responsive**: Works perfectly on all device sizes
- 🔄 **Flexible Layout**: Support for various timeline orientations
- 🎯 **Custom Icons**: Differentiate event types with custom icons and colors
- 💫 **Smooth Transitions**: Gentle animations for better UX

## Usage

### Vertical Timeline

```html
<div class="relative">
  <!-- Timeline line -->
  <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
  
  <!-- Timeline items -->
  <div class="space-y-8">
    <div class="relative flex items-start">
      <!-- Timeline dot -->
      <div class="relative z-10 flex items-center justify-center w-8 h-8 bg-primary-500 dark:bg-primary-600 rounded-full">
        <div class="w-3 h-3 bg-white dark:bg-neutral-100 rounded-full"></div>
      </div>
      <!-- Content -->
      <div class="ml-6">
        <div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Project Started</h3>
            <time class="text-xs text-neutral-500 dark:text-neutral-400">March 2024</time>
          </div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">Initial project setup and requirements gathering phase completed.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Horizontal Timeline

```html
<div class="relative">
  <!-- Timeline line -->
  <div class="absolute top-4 left-4 right-4 h-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
  
  <!-- Timeline items -->
  <div class="grid grid-cols-4 gap-8">
    <div class="relative">
      <!-- Timeline dot -->
      <div class="relative z-10 flex items-center justify-center w-8 h-8 bg-primary-500 dark:bg-primary-600 rounded-full mx-auto">
        <div class="w-3 h-3 bg-white dark:bg-neutral-100 rounded-full"></div>
      </div>
      <!-- Content -->
      <div class="mt-6 text-center">
        <h3 class="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1">Planning</h3>
        <p class="text-xs text-neutral-600 dark:text-neutral-400">Requirements and strategy</p>
        <time class="text-xs text-neutral-500 dark:text-neutral-400 mt-2 block">Week 1</time>
      </div>
    </div>
  </div>
</div>
```

### Custom Icons Timeline

```html
<div class="relative">
  <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
  
  <div class="space-y-8">
    <div class="relative flex items-start">
      <div class="relative z-10 flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full">
        <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div class="ml-6">
        <div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Task Completed</h3>
            <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Success</span>
          </div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">User authentication system successfully implemented and tested.</p>
          <time class="text-xs text-neutral-500 dark:text-neutral-400 mt-2 block">2 hours ago</time>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Styling Guide

### Color Scheme
- **Timeline Line**: `bg-neutral-200 dark:bg-neutral-700` for subtle connection
- **Timeline Dots**: `bg-primary-500 dark:bg-primary-600` for active items
- **Inactive Dots**: `bg-neutral-300 dark:bg-neutral-600` for future items
- **Content Cards**: `bg-white dark:bg-neutral-950` with borders
- **Text Colors**: Standard neutral hierarchy for readability

### Spacing
- **Vertical Spacing**: `space-y-8` between timeline items
- **Horizontal Gaps**: `gap-8` for horizontal layout
- **Content Padding**: `p-4` for timeline item content
- **Timeline Position**: `left-4` (vertical) or `top-4` (horizontal)

### Typography
- **Event Titles**: `text-sm font-medium` for importance
- **Descriptions**: `text-sm` for content readability
- **Timestamps**: `text-xs` for subtle metadata
- **Status Badges**: `text-xs font-semibold` for clear status

### Timeline Indicators
- **Active Events**: Primary color dots with white center
- **Completed Events**: Success color (green) with checkmark icon
- **Warning Events**: Warning color (yellow) with alert icon
- **Info Events**: Info color (blue) with information icon

## CSS Classes

### Timeline Structure
- `.timeline-container` - Main timeline wrapper
- `.timeline-line` - Connecting line between events
- `.timeline-item` - Individual timeline event
- `.timeline-dot` - Timeline indicator/dot
- `.timeline-content` - Event content container

### Layout Variations
- `.timeline-vertical` - Vertical timeline layout
- `.timeline-horizontal` - Horizontal timeline layout
- `.timeline-custom` - Custom icon timeline layout

### State Classes
- `.timeline-active` - Active/current event styling
- `.timeline-completed` - Completed event styling
- `.timeline-pending` - Future/pending event styling

## Icon System

### Status Icons
- **Success**: Checkmark icon with green background
- **Warning**: Alert triangle icon with yellow background
- **Info**: Information circle icon with blue background
- **Error**: X mark icon with red background

### Event Type Icons
- **Project**: Folder icon
- **Meeting**: Calendar icon
- **Task**: Check circle icon
- **Milestone**: Flag icon
- **Release**: Rocket icon

## Accessibility Features

### ARIA Support
- `role="list"` and `role="listitem"` for timeline structure
- `aria-label` for timeline icons and status indicators
- `aria-current="step"` for current timeline position
- Proper heading hierarchy for event titles

### Semantic HTML
- `<time>` elements for all dates and timestamps
- Semantic headings for event titles
- Descriptive alt text for timeline icons
- Proper landmark structure

### Keyboard Navigation
- **Tab**: Navigate through interactive timeline items
- **Enter/Space**: Activate expandable timeline events
- **Arrow Keys**: Navigate between timeline items
- **Home/End**: Jump to first/last timeline event

### Screen Reader Support
- Descriptive labels for all timeline elements
- Status announcements for timeline updates
- Clear indication of timeline progress and position
- Proper reading order for chronological events

## Best Practices

1. **Chronological Order**: Always arrange events in logical time sequence
2. **Consistent Spacing**: Maintain uniform spacing between timeline items
3. **Clear Status**: Use colors and icons to indicate event status clearly
4. **Concise Content**: Keep event descriptions brief and scannable
5. **Responsive Design**: Adapt timeline layout for mobile devices
6. **Loading States**: Show skeleton placeholders during data loading
7. **Error Handling**: Display meaningful messages for missing data

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Performance Considerations

### Large Timelines
- Implement virtual scrolling for timelines with many events
- Lazy load timeline content as needed
- Use pagination for very long timelines
- Optimize timeline rendering for smooth scrolling

### Mobile Optimization
- Responsive design that works on small screens
- Touch-friendly interactive elements
- Optimized spacing and sizing for mobile
- Horizontal scroll for wide timeline content

## Customization

The timeline component can be customized by modifying Tailwind classes:

```html
<!-- Custom colored timeline -->
<div class="relative">
  <div class="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
  <div class="space-y-8">
    <div class="relative flex items-start">
      <div class="relative z-10 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      <!-- Content -->
    </div>
  </div>
</div>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 