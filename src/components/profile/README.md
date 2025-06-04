# Profile Component

User profile components for displaying personal information, avatars, social links, and user statistics with elegant Apple-inspired design.

## Overview

The Profile component offers four main variations:
- **User Info**: Complete user profile with personal information and contact details
- **Avatar**: Focused avatar displays with different sizes and status indicators
- **Social Links**: Profile with integrated social media links and contact methods
- **Stats**: Profile with user statistics, achievements, and performance metrics

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant profile layouts with professional appearance
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, screen reader compatibility, and proper color contrast
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop devices
- 👤 **Avatar Support**: Multiple avatar sizes with status indicators and fallback initials
- 📊 **Statistics Display**: Progress bars, metrics, and achievement tracking
- 🔗 **Social Integration**: Easy-to-use social media links with proper icons
- 💫 **Status Indicators**: Online/offline status with color-coded presence indicators

## Usage

### User Info Profile

```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <div class="flex items-start space-x-6">
    <div class="flex-shrink-0">
      <img src="avatar.jpg" alt="Profile" class="w-24 h-24 rounded-full">
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100">John Doe</h3>
          <p class="text-neutral-600 dark:text-neutral-400">Senior Product Designer</p>
        </div>
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
          <span class="w-1.5 h-1.5 mr-1.5 bg-green-400 rounded-full"></span>
          Online
        </span>
      </div>
      
      <div class="space-y-3">
        <div class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
          <svg class="w-4 h-4 mr-3 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          john.doe@company.com
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Passionate product designer with expertise in user experience and interface design.
        </p>
      </div>
    </div>
  </div>
</div>
```

### Avatar Profile

```html
<div class="text-center">
  <div class="relative inline-block mb-4">
    <img src="avatar.jpg" alt="User avatar" class="w-32 h-32 rounded-full">
    <div class="absolute bottom-2 right-2 w-6 h-6 bg-green-400 border-4 border-white dark:border-neutral-950 rounded-full"></div>
  </div>
  <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Alex Smith</h4>
  <p class="text-sm text-neutral-600 dark:text-neutral-400">Team Lead</p>
</div>
```

### Social Links Profile

```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <div class="text-center mb-6">
    <img src="avatar.jpg" alt="Profile" class="w-24 h-24 rounded-full mx-auto mb-4">
    <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Emily Chen</h3>
    <p class="text-neutral-600 dark:text-neutral-400 mb-4">UI/UX Designer & Developer</p>
    <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
      Creating beautiful and functional digital experiences.
    </p>
  </div>

  <div class="space-y-3">
    <a href="#" class="flex items-center p-3 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors group">
      <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775..."></path>
        </svg>
      </div>
      <div class="ml-3 flex-1">
        <p class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Twitter</p>
        <p class="text-xs text-neutral-500 dark:text-neutral-400">@emilychen</p>
      </div>
      <svg class="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
      </svg>
    </a>
  </div>
</div>
```

### Stats Profile

```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <div class="text-center mb-6">
    <img src="avatar.jpg" alt="Profile" class="w-20 h-20 rounded-full mx-auto mb-4">
    <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">David Miller</h3>
    <p class="text-neutral-600 dark:text-neutral-400 mb-1">Software Engineer</p>
    <div class="flex items-center justify-center space-x-2">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        <span class="w-1.5 h-1.5 mr-1.5 bg-blue-400 rounded-full"></span>
        Level 5
      </span>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-6 mb-6">
    <div class="text-center">
      <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">156</div>
      <div class="text-sm text-neutral-600 dark:text-neutral-400">Projects</div>
    </div>
    <div class="text-center">
      <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">4.8</div>
      <div class="text-sm text-neutral-600 dark:text-neutral-400">Rating</div>
    </div>
    <div class="text-center">
      <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">892</div>
      <div class="text-sm text-neutral-600 dark:text-neutral-400">Reviews</div>
    </div>
  </div>

  <div class="space-y-4">
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Profile Completion</span>
        <span class="text-sm text-neutral-600 dark:text-neutral-400">85%</span>
      </div>
      <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
        <div class="bg-green-500 h-2 rounded-full" style="width: 85%"></div>
      </div>
    </div>
  </div>
</div>
```

## Avatar Variations

### Avatar Sizes
- **Large**: `w-32 h-32` (128px) - For profile headers and detailed views
- **Medium**: `w-20 h-20` (80px) - For user cards and moderate detail views
- **Small**: `w-16 h-16` (64px) - For compact listings and minimal spaces
- **Tiny**: `w-12 h-12` (48px) - For comments and very compact layouts

### Status Indicators
- **Online**: `bg-green-400` - User is currently active
- **Away**: `bg-yellow-400` - User is away or idle
- **Offline**: `bg-gray-400` - User is offline or invisible
- **Busy**: `bg-red-400` - User is busy or in do-not-disturb mode

### Status Indicator Positioning
```html
<!-- Large avatar status -->
<div class="absolute bottom-2 right-2 w-6 h-6 bg-green-400 border-4 border-white dark:border-neutral-950 rounded-full"></div>

<!-- Medium avatar status -->
<div class="absolute bottom-1 right-1 w-4 h-4 bg-yellow-400 border-3 border-white dark:border-neutral-950 rounded-full"></div>

<!-- Small avatar status -->
<div class="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-white dark:border-neutral-950 rounded-full"></div>
```

## Social Media Icons

### Supported Platforms
- **Twitter**: Blue background (`bg-blue-500`)
- **GitHub**: Dark background (`bg-gray-800 dark:bg-gray-700`)
- **LinkedIn**: Blue background (`bg-blue-600`)
- **Email**: Green background (`bg-green-500`)
- **Website**: Purple background (`bg-purple-500`)
- **Instagram**: Gradient background (`bg-gradient-to-br from-purple-500 to-pink-500`)

### Icon Implementation
```html
<div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <!-- Platform-specific icon path -->
  </svg>
</div>
```

## Statistics and Progress Bars

### Progress Bar Types
- **Profile Completion**: Green progress bar (`bg-green-500`)
- **Skills Progress**: Blue progress bar (`bg-blue-500`)
- **Activity Level**: Purple progress bar (`bg-purple-500`)
- **Goal Achievement**: Orange progress bar (`bg-orange-500`)

### Progress Bar Implementation
```html
<div>
  <div class="flex justify-between items-center mb-2">
    <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">Progress Label</span>
    <span class="text-sm text-neutral-600 dark:text-neutral-400">85%</span>
  </div>
  <div class="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
    <div class="bg-green-500 h-2 rounded-full" style="width: 85%"></div>
  </div>
</div>
```

### Statistics Display
```html
<div class="grid grid-cols-3 gap-6">
  <div class="text-center">
    <div class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">156</div>
    <div class="text-sm text-neutral-600 dark:text-neutral-400">Projects</div>
  </div>
</div>
```

## User Badges and Labels

### Badge Types
- **Status Badge**: Shows online/offline status with colored dot
- **Level Badge**: Shows user level or tier with colored background
- **Role Badge**: Shows user role or position
- **Achievement Badge**: Shows special achievements or certifications

### Badge Implementation
```html
<!-- Status Badge -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
  <span class="w-1.5 h-1.5 mr-1.5 bg-green-400 rounded-full"></span>
  Online
</span>

<!-- Level Badge -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
  <span class="w-1.5 h-1.5 mr-1.5 bg-blue-400 rounded-full"></span>
  Level 5
</span>

<!-- Role Badge -->
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  Senior
</span>
```

## Styling Guide

### Color Scheme
- **Profile Background**: `bg-white dark:bg-neutral-950` for main profile containers
- **Secondary Background**: `bg-neutral-50 dark:bg-neutral-900` for social links and stats sections
- **Text Primary**: `text-neutral-900 dark:text-neutral-100` for names and headings
- **Text Secondary**: `text-neutral-600 dark:text-neutral-400` for roles and descriptions
- **Text Tertiary**: `text-neutral-500 dark:text-neutral-400` for supporting information
- **Borders**: `border-neutral-200 dark:border-neutral-700` for subtle divisions

### Typography
- **User Names**: `text-xl font-semibold` for primary profile names
- **User Roles**: `text-neutral-600 dark:text-neutral-400` for job titles and roles
- **Contact Info**: `text-sm` for email addresses and contact details
- **Statistics Numbers**: `text-2xl font-bold` for large statistics
- **Statistics Labels**: `text-sm text-neutral-600 dark:text-neutral-400` for stat descriptions

### Layout
- **Profile Spacing**: `p-6` for main profile containers
- **Avatar Margins**: `mb-4` for spacing below avatars
- **Section Gaps**: `space-y-3` for consistent spacing between elements
- **Grid Gaps**: `gap-6` for statistics grids
- **Social Link Spacing**: `space-y-3` for social media links

### Animations and Interactions
- **Hover Effects**: `hover:bg-neutral-100 dark:hover:bg-neutral-800` for interactive elements
- **Transition**: `transition-colors` for smooth color changes
- **Group Hover**: `group-hover:text-neutral-600 dark:group-hover:text-neutral-300` for secondary elements
- **Scale Effects**: `hover:scale-105` for subtle avatar interactions

## Accessibility Features

### ARIA Support
- `aria-label` for avatar images and profile photos
- `aria-describedby` for additional profile context
- `role="img"` for decorative profile elements
- `aria-live="polite"` for dynamic status updates
- `aria-expanded` for collapsible profile sections

### Screen Reader Support
- Descriptive alt text for all profile images
- Clear heading structure for profile sections
- Meaningful link text for social media profiles
- Proper reading order for profile information
- Alternative text for status indicators

### Keyboard Navigation
- Tab navigation through all interactive elements
- Enter/Space activation for social links
- Focus indicators for all clickable elements
- Skip links for lengthy profile sections

### Color Accessibility
- High contrast ratios for all text elements
- Status indicators use both color and text/icons
- No color-only information conveyance
- Dark mode compliance with WCAG standards

## Performance Considerations

### Image Optimization
- Lazy loading for profile avatars
- Multiple avatar sizes for different use cases
- WebP format support with fallbacks
- Efficient avatar placeholder generation

### Social Media Integration
- Lightweight icon implementations
- Efficient SVG usage for platform icons
- Minimal external dependencies
- Progressive enhancement for social features

### Data Loading
- Skeleton loaders for profile information
- Progressive disclosure of detailed information
- Client-side caching of user data
- Efficient status update mechanisms

## Best Practices

1. **Avatar Images**: Always provide fallback initials or placeholder images
2. **Status Indicators**: Use both color and text/icons for accessibility
3. **Social Links**: Include proper external link indicators and security measures
4. **Progress Bars**: Always include percentage labels for screen readers
5. **Contact Information**: Format email addresses and phone numbers properly
6. **Privacy**: Allow users to control visibility of personal information
7. **Responsive Design**: Ensure profiles work well on all screen sizes

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Customization

The profile component can be customized by modifying Tailwind classes:

```html
<!-- Custom avatar sizes example -->
<img src="avatar.jpg" alt="Profile" class="w-40 h-40 rounded-full border-4 border-primary-500">

<!-- Custom social link styling example -->
<div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
  <!-- Custom gradient backgrounds -->
</div>

<!-- Custom progress bar colors example -->
<div class="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style="width: 75%">
  <!-- Gradient progress bars -->
</div>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 