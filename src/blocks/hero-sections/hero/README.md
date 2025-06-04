# Hero Block

Impactful hero sections with large headlines, supporting subtitles, and prominent call-to-action buttons designed to capture attention and drive engagement with Apple-inspired design.

## Overview

The Hero block offers eight compelling variations:
- **Basic Hero**: Clean hero section with headline, subtitle, and primary call-to-action
- **Centered Hero**: Hero section with centered layout and additional supporting text
- **Split Hero**: Two-column hero layout with content on one side and visual element on the other
- **Video Hero**: Hero section with background video overlay and compelling content
- **Minimal Hero**: Clean, minimal hero focusing on typography and generous whitespace
- **Product Showcase**: Hero with prominent product image and feature highlights
- **Stats-Focused Hero**: Hero section emphasizing key metrics and achievements
- **Newsletter Signup**: Hero focused on email capture and newsletter subscription

## Features

- 🎨 **Apple-inspired Design**: Clean, impactful hero sections with elegant typography and spacing
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, semantic HTML structure, and keyboard navigation
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop experiences
- 🎯 **Conversion Focused**: Strategically designed CTAs and content hierarchy
- ⚡ **Performance Optimized**: Lightweight code with fast loading times
- 🎭 **Multiple Styles**: From minimal to feature-rich, suitable for any brand
- 📊 **Stats Integration**: Built-in support for metrics and achievement display

## Variations

### 1. Basic Hero
Clean, straightforward hero section perfect for most use cases.
- Large, impactful headline with accent color
- Supporting subtitle for context
- Primary and secondary call-to-action buttons
- Centered layout with generous spacing

### 2. Centered Hero
Enhanced centered layout with announcement badge and dual descriptions.
- New version announcement badge
- Extra-large typography for maximum impact
- Dual description text for detailed messaging
- Icon-enhanced call-to-action buttons

### 3. Split Hero
Two-column layout perfect for product showcases.
- Content and visual side-by-side layout
- Component library visualization
- Statistics integration
- Feature highlights and benefits

### 4. Video Hero
Immersive hero with video background capabilities.
- Dark overlay design for video backgrounds
- High-contrast white text on dark backgrounds
- Single, prominent call-to-action
- Cinematic full-width layout

### 5. Minimal Hero
Ultra-clean design focusing on essential elements.
- Elegant typography with refined spacing
- Subtle divider line as design element
- Minimal color palette
- Single, understated call-to-action

### 6. Product Showcase
Dedicated product presentation layout.
- Product-focused two-column design
- Feature bullet points with visual indicators
- Product mockup or screenshot area
- Professional gradient backgrounds

### 7. Stats-Focused Hero
Social proof and metrics-driven hero.
- Large statistical displays
- Grid-based metrics layout
- Community and scale messaging
- Trust-building numerical evidence

### 8. Newsletter Signup
Email capture and engagement focused.
- Colorful gradient background
- Email input with inline submission
- Subscriber count and trust indicators
- Conversion-optimized design

## Usage

### Basic Hero
```html
<section class="bg-white dark:bg-neutral-950 py-20 lg:py-32">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-5xl lg:text-7xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
      Build Amazing
      <span class="text-primary-500 dark:text-primary-400">Products</span>
    </h1>
    <p class="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-3xl mx-auto leading-relaxed">
      Create beautiful, responsive interfaces with our comprehensive design system. From atomic elements to complete page blocks.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
        Get Started
      </button>
      <button class="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
        View Components
      </button>
    </div>
  </div>
</section>
```

### Centered Hero with Badge
```html
<section class="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 py-24 lg:py-40">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="mb-8">
      <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 mb-6">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
        New in v2.0
      </span>
    </div>
    <h1 class="text-6xl lg:text-8xl font-semibold text-neutral-900 dark:text-neutral-100 mb-8 leading-tight">
      Design System
      <br>
      <span class="text-primary-500 dark:text-primary-400">Redefined</span>
    </h1>
    <p class="text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-6 max-w-4xl mx-auto leading-relaxed">
      Experience the next generation of component design with enhanced accessibility, performance, and developer experience.
    </p>
    <p class="text-lg text-neutral-500 dark:text-neutral-500 mb-12 max-w-2xl mx-auto">
      Built with modern standards, optimized for scale, and designed for teams who ship quality products.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white px-10 py-5 rounded-lg text-lg font-medium transition-colors flex items-center justify-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Download Now
      </button>
      <button class="border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-10 py-5 rounded-lg text-lg font-medium transition-colors">
        Documentation
      </button>
    </div>
  </div>
</section>
```

### Split Hero with Visual
```html
<section class="bg-white dark:bg-neutral-950 py-20 lg:py-32">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <!-- Content Side -->
      <div>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success-100 dark:bg-success-900/20 text-success-700 dark:text-success-300 mb-6">
          ✨ Newly Released
        </span>
        <h1 class="text-5xl lg:text-6xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 leading-tight">
          Ship Faster with
          <span class="text-primary-500 dark:text-primary-400">Components</span>
        </h1>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          Pre-built, accessible, and customizable components that help you build beautiful interfaces in minutes, not hours.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <button class="bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Browse Components
          </button>
          <button class="border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            View Docs
          </button>
        </div>
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8">
          <div>
            <div class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">90+</div>
            <div class="text-sm text-neutral-500 dark:text-neutral-400">Components</div>
          </div>
          <div>
            <div class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">350+</div>
            <div class="text-sm text-neutral-500 dark:text-neutral-400">Variations</div>
          </div>
          <div>
            <div class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">100%</div>
            <div class="text-sm text-neutral-500 dark:text-neutral-400">Accessible</div>
          </div>
        </div>
      </div>
      
      <!-- Visual Side -->
      <div class="relative">
        <div class="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 lg:p-12">
          <div class="grid grid-cols-2 gap-4">
            <!-- Component visualization cards -->
            <div class="bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-sm">
              <div class="w-8 h-8 bg-primary-500 dark:bg-primary-400 rounded-lg mb-3"></div>
              <div class="h-3 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div>
              <div class="h-3 bg-neutral-100 dark:bg-neutral-600 rounded w-3/4"></div>
            </div>
            <!-- More cards... -->
          </div>
        </div>
        <!-- Floating decorative elements -->
        <div class="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 dark:bg-primary-400 rounded-full opacity-20"></div>
        <div class="absolute -bottom-6 -left-6 w-12 h-12 bg-success-500 dark:bg-success-400 rounded-full opacity-20"></div>
      </div>
    </div>
  </div>
</section>
```

## Design Guidelines

### Typography Hierarchy
- **Main Headlines**: `text-5xl lg:text-7xl` for impact, can scale up to `text-6xl lg:text-8xl` for premium feel
- **Supporting Text**: `text-xl lg:text-2xl` for primary description, `text-lg` for secondary text
- **Accent Colors**: Use `text-primary-500 dark:text-primary-400` for highlight words in headlines
- **Line Height**: `leading-tight` for headlines, `leading-relaxed` for body text

### Layout Structure
- **Container**: `max-w-4xl` for basic/centered, `max-w-7xl` for split layouts
- **Padding**: `py-20 lg:py-32` for standard height, `py-24 lg:py-40` for premium feel
- **Content Width**: `max-w-3xl` for description text to maintain readability
- **Button Groups**: `flex flex-col sm:flex-row gap-4` for responsive button layouts

### Visual Elements
- **Gradient Backgrounds**: Subtle gradients using `from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950`
- **Status Badges**: `rounded-full` with semantic colors and icons
- **Statistics**: Grid layout with large numbers and descriptive labels
- **Visual Components**: Mock component representations with appropriate spacing

### Interactive Elements
- **Primary Buttons**: `bg-primary-500 dark:bg-primary-600` with large padding `px-8 py-4` or `px-10 py-5`
- **Secondary Buttons**: Neutral backgrounds or borders with hover states
- **Icon Integration**: Meaningful icons that support the message
- **Hover States**: Subtle color transitions with `transition-colors`

## Styling Guidelines

### Button Variations
- **Primary CTA**: Large, prominent buttons with icon support
- **Secondary Actions**: Border or neutral background buttons
- **Icon Buttons**: Include relevant icons for download, documentation, etc.
- **Button Sizing**: Larger buttons in hero sections (`px-8 py-4` minimum)

### Content Structure
- **Badge/Announcement**: Optional announcement or version badge above headline
- **Main Headline**: Primary value proposition with accent color for key words
- **Supporting Description**: Clear explanation of benefits or features
- **Secondary Text**: Additional context or credibility statements
- **Call-to-Action**: One primary and one secondary action maximum

### Background Options
- **Solid Colors**: `bg-white dark:bg-neutral-950` for clean approach
- **Subtle Gradients**: Light gradients for premium feel
- **Visual Integration**: Background elements that don't compete with content

## Responsive Behavior

### Mobile Adaptations
- Headlines scale down gracefully (`text-5xl` to `lg:text-7xl`)
- Button groups stack vertically on mobile (`flex-col sm:flex-row`)
- Split layouts become single column on mobile
- Visual elements adapt to smaller screens

### Tablet Considerations
- Maintain readability with appropriate text scaling
- Button groups may remain horizontal on larger tablets
- Visual elements scale proportionally

### Desktop Enhancements
- Full layout with maximum impact
- Split layouts showcase visual elements effectively
- Generous spacing for premium feel

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy (h1 for main title)
- High contrast text and background color combinations
- Keyboard navigation support for all interactive elements
- Screen reader optimized content structure and alt text
- Focus indicators on interactive buttons and links
- Responsive text scaling for different screen sizes and zoom levels

## Usage Guidelines

- Use hero sections as the primary landing area to communicate value proposition
- Keep headlines concise and impactful, ideally under 10 words
- Include one primary call-to-action to avoid decision paralysis
- Use supporting text to provide context and build credibility
- Ensure hero content is above the fold on all device sizes
- Test different hero variations to optimize conversion rates

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- **Button**: Primary and secondary action buttons
- **Badge**: Announcement and status badges
- **Container**: Layout containers and spacing
- **Typography**: Heading and text components 