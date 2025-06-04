# Review Component

Review and rating components for user feedback, testimonials, and product evaluations with comprehensive rating systems and interactive features.

## Overview

The Review component offers four main variations:
- **Ratings**: Star rating displays with numerical scores and interactive rating selection
- **Comments**: Review comments with timestamps, user avatars, and formatted content
- **User Info**: Comprehensive review cards with detailed user information and verified badges
- **Helpful Votes**: Interactive review voting system with thumbs up/down and engagement metrics

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant review layouts with professional appearance
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, screen reader compatibility, and proper color contrast
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop devices
- ⭐ **Interactive Ratings**: Clickable star ratings with hover effects and feedback
- 🗳️ **Voting System**: Thumbs up/down voting with real-time count updates
- 👤 **User Verification**: Verified badges and user information display
- 📝 **Rich Comments**: Formatted review text with timestamps and user context

## Usage

### Star Ratings

```html
<!-- Simple Rating -->
<div class="flex items-center space-x-2">
  <div class="flex items-center">
    <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
    <svg class="w-5 h-5 text-neutral-300 dark:text-neutral-600 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  </div>
  <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">4.0</span>
  <span class="text-sm text-neutral-500 dark:text-neutral-400">(142 reviews)</span>
</div>
```

### Interactive Rating

```html
<div class="flex items-center space-x-1 rating-interactive">
  <button class="rating-star text-neutral-300 dark:text-neutral-600 hover:text-yellow-400 transition-colors" data-rating="1" aria-label="Rate 1 star">
    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  </button>
  <!-- Repeat for stars 2-5 -->
</div>
```

### Review Comment

```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <img src="avatar.jpg" alt="User avatar" class="w-12 h-12 rounded-full">
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between mb-2">
        <div>
          <h4 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">John Doe</h4>
          <div class="flex items-center space-x-2 mt-1">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <!-- More stars... -->
            </div>
            <span class="text-xs text-neutral-500 dark:text-neutral-400">5.0</span>
          </div>
        </div>
        <span class="text-xs text-neutral-500 dark:text-neutral-400">2 days ago</span>
      </div>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Excellent product! The quality exceeded my expectations and the delivery was super fast.
      </p>
    </div>
  </div>
</div>
```

### User Info Review

```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <img src="avatar.jpg" alt="User avatar" class="w-16 h-16 rounded-full">
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-start justify-between mb-3">
        <div>
          <div class="flex items-center space-x-2 mb-1">
            <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Alex Johnson</h4>
            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723..."></path>
              </svg>
              Verified
            </span>
          </div>
          <div class="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span>Premium Member</span>
            <span>•</span>
            <span>127 reviews</span>
          </div>
          <div class="flex items-center space-x-2 mt-2">
            <div class="flex items-center">
              <!-- Star rating icons -->
            </div>
            <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">5.0</span>
          </div>
        </div>
        <span class="text-sm text-neutral-500 dark:text-neutral-400">3 days ago</span>
      </div>
      
      <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
        Absolutely fantastic product! As a long-time customer, I can confidently say this exceeds all expectations.
      </p>

      <div class="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-700">
        <div class="flex items-center space-x-4">
          <span class="text-sm text-neutral-500 dark:text-neutral-400">Was this helpful?</span>
          <div class="flex items-center space-x-2">
            <button class="flex items-center space-x-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
              </svg>
              <span>24</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Helpful Votes Review

```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <div class="flex items-start space-x-4">
    <div class="flex-shrink-0">
      <img src="avatar.jpg" alt="User avatar" class="w-12 h-12 rounded-full">
    </div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center space-x-3">
          <h4 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Lisa Wang</h4>
          <div class="flex items-center">
            <!-- Star rating -->
            <span class="ml-2 text-xs text-neutral-500 dark:text-neutral-400">4.0</span>
          </div>
        </div>
        <span class="text-xs text-neutral-500 dark:text-neutral-400">5 days ago</span>
      </div>
      <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
        Great product overall! The design is sleek and functionality is solid.
      </p>
      
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <div class="flex items-center space-x-3">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Helpful?</span>
            <div class="flex items-center space-x-2">
              <button class="flex items-center space-x-1 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-green-100 dark:hover:bg-green-900 text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 rounded-md text-sm font-medium transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.60L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
                <span>18</span>
              </button>
              <button class="flex items-center space-x-1 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-red-100 dark:hover:bg-red-900 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 rounded-md text-sm font-medium transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path>
                </svg>
                <span>3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Rating Types and Styles

### Star Ratings
- **5-star system**: Standard 1-5 star rating scale
- **Half stars**: Support for 0.5 increments (4.5 stars)
- **Color coding**: Yellow stars for positive ratings, neutral for empty
- **Size variants**: Small (w-4 h-4), medium (w-5 h-5), large (w-6 h-6)

### Rating States
```html
<!-- Filled Star -->
<svg class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>

<!-- Empty Star -->
<svg class="w-5 h-5 text-neutral-300 dark:text-neutral-600 fill-current" viewBox="0 0 24 24">
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>

<!-- Hover State -->
<svg class="w-5 h-5 text-yellow-400 hover:text-yellow-500 fill-current transition-colors" viewBox="0 0 24 24">
  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>
```

## Interactive Features

### Rating Selection JavaScript
```javascript
function initializeInteractiveRating() {
  const ratingStars = document.querySelectorAll('.rating-star');
  let currentRating = 0;

  ratingStars.forEach((star, index) => {
    star.addEventListener('mouseenter', () => {
      highlightStars(index + 1);
    });

    star.addEventListener('mouseleave', () => {
      highlightStars(currentRating);
    });

    star.addEventListener('click', () => {
      currentRating = index + 1;
      highlightStars(currentRating);
      // Handle rating submission
    });
  });

  function highlightStars(rating) {
    ratingStars.forEach((star, index) => {
      if (index < rating) {
        star.classList.remove('text-neutral-300', 'dark:text-neutral-600');
        star.classList.add('text-yellow-400');
      } else {
        star.classList.remove('text-yellow-400');
        star.classList.add('text-neutral-300', 'dark:text-neutral-600');
      }
    });
  }
}
```

### Helpful Voting JavaScript
```javascript
function initializeHelpfulVoting() {
  const helpfulButtons = document.querySelectorAll('.helpful-btn');
  
  helpfulButtons.forEach(button => {
    button.addEventListener('click', () => {
      const voteType = button.getAttribute('data-type');
      const voteCount = button.querySelector('.vote-count');
      const currentCount = parseInt(voteCount.textContent);
      
      // Toggle vote state and update count
      if (button.classList.contains('voted')) {
        button.classList.remove('voted');
        voteCount.textContent = currentCount - 1;
      } else {
        button.classList.add('voted');
        voteCount.textContent = currentCount + 1;
      }
      
      // Send vote to backend
      submitVote(voteType, button.classList.contains('voted'));
    });
  });
}
```

## User Information Elements

### Verification Badges
```html
<!-- Verified User Badge -->
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
  </svg>
  Verified
</span>

<!-- Premium Member Badge -->
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  Premium
</span>

<!-- Top Reviewer Badge -->
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
  Top Reviewer
</span>
```

### User Stats
```html
<div class="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400">
  <span>Premium Member</span>
  <span>•</span>
  <span>127 reviews</span>
  <span>•</span>
  <span>Member since 2021</span>
</div>
```

## Voting and Engagement

### Thumbs Up/Down Buttons
```html
<div class="flex items-center space-x-2">
  <!-- Thumbs Up -->
  <button class="flex items-center space-x-1 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-green-100 dark:hover:bg-green-900 text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 rounded-md text-sm font-medium transition-colors">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
    </svg>
    <span>18</span>
  </button>
  
  <!-- Thumbs Down -->
  <button class="flex items-center space-x-1 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-red-100 dark:hover:bg-red-900 text-neutral-600 dark:text-neutral-400 hover:text-red-600 dark:hover:text-red-400 rounded-md text-sm font-medium transition-colors">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018c.163 0 .326.02.485.06L17 4m-7 10v2a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path>
    </svg>
    <span>3</span>
  </button>
</div>
```

### Reply and Share Actions
```html
<div class="flex items-center space-x-4">
  <button class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
    Reply
  </button>
  <button class="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">
    Share
  </button>
  <div class="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
    </svg>
    <span>5 replies</span>
  </div>
</div>
```

## Styling Guide

### Color Scheme
- **Review Background**: `bg-white dark:bg-neutral-950` for main review containers
- **Secondary Background**: `bg-neutral-50 dark:bg-neutral-900` for outer containers
- **Star Colors**: `text-yellow-400` for filled stars, `text-neutral-300 dark:text-neutral-600` for empty
- **Text Primary**: `text-neutral-900 dark:text-neutral-100` for usernames and headings
- **Text Secondary**: `text-neutral-600 dark:text-neutral-400` for review content
- **Text Tertiary**: `text-neutral-500 dark:text-neutral-400` for timestamps and metadata
- **Borders**: `border-neutral-200 dark:border-neutral-700` for subtle divisions

### Typography
- **Usernames**: `text-sm font-semibold` for standard reviews, `text-lg font-semibold` for detailed views
- **Review Content**: `text-sm leading-relaxed` for readability
- **Timestamps**: `text-xs` for compact metadata
- **Rating Numbers**: `text-sm font-medium` for numerical rating displays
- **Vote Counts**: `text-sm` for voting button labels

### Layout
- **Review Spacing**: `p-6` for main review containers
- **Avatar Margins**: `space-x-4` for avatar-to-content spacing
- **Section Gaps**: `space-y-6` for multiple review spacing
- **Button Spacing**: `space-x-2` for vote button groups
- **Content Padding**: `mb-4` for text-to-actions spacing

### Interactive States
- **Hover Effects**: `hover:text-yellow-400` for star ratings
- **Vote Buttons**: Color-coded hover states (green for positive, red for negative)
- **Transition**: `transition-colors` for smooth state changes
- **Focus Indicators**: Proper focus rings for keyboard navigation

## Accessibility Features

### ARIA Support
- `aria-label` for star rating buttons with descriptive text
- `role="button"` for clickable star elements
- `aria-pressed` for vote button states
- `aria-live="polite"` for dynamic rating updates
- `aria-describedby` for rating explanations

### Screen Reader Support
- Descriptive alt text for user avatars
- Rating announcements ("4 out of 5 stars")
- Vote count announcements
- Clear heading structure for review organization
- Meaningful link text for user profiles

### Keyboard Navigation
- Tab navigation through all interactive elements
- Enter/Space activation for stars and vote buttons
- Focus indicators for all clickable elements
- Skip links for long review lists
- Arrow key navigation for star ratings

### Color Accessibility
- High contrast ratios for all text elements
- Color-blind friendly rating indicators
- No color-only information conveyance
- Dark mode compliance with WCAG standards

## Performance Considerations

### Image Optimization
- Lazy loading for user avatars
- Efficient avatar placeholder generation
- WebP format support with fallbacks
- Appropriate image sizing for context

### Interactive Features
- Debounced rating submissions
- Optimistic UI updates for voting
- Efficient event delegation for large review lists
- Client-side caching of user interactions

### Data Loading
- Pagination for large review sets
- Progressive disclosure of review details
- Skeleton loaders for review content
- Efficient sorting and filtering

## Best Practices

1. **Rating Systems**: Always provide both visual and numerical rating indicators
2. **User Trust**: Include verification badges and user history information
3. **Engagement**: Implement helpful voting to surface quality content
4. **Timestamps**: Show review recency to indicate relevance
5. **Moderation**: Provide reporting and flagging mechanisms
6. **Responsive Design**: Ensure reviews work well on all screen sizes
7. **Privacy**: Allow users to control review visibility and personal information

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Customization

The review component can be customized by modifying Tailwind classes:

```html
<!-- Custom star colors -->
<svg class="w-5 h-5 text-blue-400 fill-current" viewBox="0 0 24 24">
  <!-- Blue stars instead of yellow -->
</svg>

<!-- Custom vote button styling -->
<button class="flex items-center space-x-1 px-4 py-2 bg-primary-100 hover:bg-primary-200 text-primary-700 rounded-lg text-sm font-medium transition-colors">
  <!-- Custom brand colors for voting -->
</button>

<!-- Custom verification badges -->
<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400 to-blue-500 text-white">
  <!-- Gradient verification badges -->
</span>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 