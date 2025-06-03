# Button Component

Interactive button component with 9 variations for different use cases and states.

## Overview

The Button component is the foundation of user interactions in the UI11 design system. It provides consistent styling, behavior, and accessibility features across all button types.

## Variations

### 1. Primary Button
Main call-to-action buttons for key user actions.

```html
<button class="bg-primary-500 dark:bg-primary-900 text-white dark:text-black hover:bg-primary-600 dark:hover:bg-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 active:scale-98 px-6 py-3 rounded-lg font-medium shadow-apple-md hover:shadow-apple-lg transition-all duration-normal ease-apple-out disabled:opacity-40 disabled:cursor-not-allowed">
    Get Started
</button>
```

### 2. Secondary Button
Secondary actions and alternative options.

```html
<button class="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:ring-3 focus:ring-neutral-100 dark:focus:ring-neutral-800 border border-neutral-200 dark:border-neutral-700 active:scale-98 px-6 py-3 rounded-lg font-medium transition-all duration-normal ease-apple-out disabled:opacity-40 disabled:cursor-not-allowed">
    Learn More
</button>
```

### 3. Outline Button
Subtle actions that need less visual weight.

```html
<button class="bg-transparent text-primary-500 dark:text-primary-900 hover:bg-primary-50 dark:hover:bg-primary-900/10 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 border border-primary-500 dark:border-primary-900 active:scale-98 px-6 py-3 rounded-lg font-medium transition-all duration-normal ease-apple-out disabled:opacity-40 disabled:cursor-not-allowed">
    View Details
</button>
```

### 4. Ghost Button
Minimal actions, often used in navigation.

```html
<button class="bg-transparent text-primary-500 dark:text-primary-900 hover:bg-primary-50 dark:hover:bg-primary-900/10 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 active:scale-98 px-6 py-3 rounded-lg font-medium transition-all duration-normal ease-apple-out disabled:opacity-40 disabled:cursor-not-allowed">
    Cancel
</button>
```

### 5. Danger Button
Destructive actions like delete or remove.

```html
<button class="bg-red-500 dark:bg-red-600 text-white hover:bg-red-600 dark:hover:bg-red-700 focus:ring-3 focus:ring-red-100 dark:focus:ring-red-900/20 active:scale-98 px-6 py-3 rounded-lg font-medium shadow-apple-md hover:shadow-apple-lg transition-all duration-normal ease-apple-out disabled:opacity-40 disabled:cursor-not-allowed">
    Delete
</button>
```

### 6. Success Button
Positive actions like save or confirm.

```html
<button class="bg-green-500 dark:bg-green-600 text-white hover:bg-green-600 dark:hover:bg-green-700 focus:ring-3 focus:ring-green-100 dark:focus:ring-green-900/20 active:scale-98 px-6 py-3 rounded-lg font-medium shadow-apple-md hover:shadow-apple-lg transition-all duration-normal ease-apple-out disabled:opacity-40 disabled:cursor-not-allowed">
    Save Changes
</button>
```

### 7. Icon Button
Actions represented by icons only.

```html
<button class="bg-primary-500 dark:bg-primary-900 text-white dark:text-black hover:bg-primary-600 dark:hover:bg-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 active:scale-98 p-3 rounded-lg shadow-apple-md hover:shadow-apple-lg transition-all duration-normal ease-apple-out" aria-label="Settings">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
</button>
```

### 8. Loading Button
Show progress during async operations.

```html
<button class="bg-primary-500 dark:bg-primary-900 text-white dark:text-black px-6 py-3 rounded-lg font-medium shadow-apple-md transition-all duration-normal ease-apple-out flex items-center gap-2 opacity-75 cursor-not-allowed" disabled>
    <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Loading...
</button>
```

### 9. Disabled Button
Inactive state when action is unavailable.

```html
<button class="bg-primary-500 dark:bg-primary-900 text-white dark:text-black px-6 py-3 rounded-lg font-medium shadow-apple-md transition-all duration-normal ease-apple-out opacity-40 cursor-not-allowed" disabled>
    Disabled
</button>
```

## Sizes

### Small Button
```html
<button class="bg-primary-500 dark:bg-primary-900 text-white dark:text-black hover:bg-primary-600 dark:hover:bg-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 active:scale-98 px-4 py-2 rounded-lg font-medium text-sm shadow-apple-md hover:shadow-apple-lg transition-all duration-normal ease-apple-out">
    Small
</button>
```

### Medium Button (Default)
```html
<button class="bg-primary-500 dark:bg-primary-900 text-white dark:text-black hover:bg-primary-600 dark:hover:bg-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 active:scale-98 px-6 py-3 rounded-lg font-medium shadow-apple-md hover:shadow-apple-lg transition-all duration-normal ease-apple-out">
    Medium
</button>
```

### Large Button
```html
<button class="bg-primary-500 dark:bg-primary-900 text-white dark:text-black hover:bg-primary-600 dark:hover:bg-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 active:scale-98 px-8 py-4 rounded-lg font-medium text-lg shadow-apple-md hover:shadow-apple-lg transition-all duration-normal ease-apple-out">
    Large
</button>
```

## Usage Guidelines

### When to Use Each Variation

- **Primary**: Use for the main action on a page or section. Limit to one primary button per view.
- **Secondary**: Use for secondary actions that support the primary action.
- **Outline**: Use when you need a button with less visual weight than secondary.
- **Ghost**: Use for tertiary actions or in navigation contexts.
- **Danger**: Use for destructive actions that require user confirmation.
- **Success**: Use for positive confirmations or completion actions.
- **Icon**: Use when space is limited or the action is universally understood.
- **Loading**: Use to show progress during async operations.
- **Disabled**: Use when an action is temporarily unavailable.

### Best Practices

1. **Button Hierarchy**: Use only one primary button per page section
2. **Consistent Sizing**: Use the same size buttons within a group
3. **Clear Labels**: Use action-oriented text (e.g., "Save Changes" not "Submit")
4. **Icon Accessibility**: Always include `aria-label` for icon-only buttons
5. **Loading States**: Show loading state for operations taking >1 second
6. **Disabled State**: Provide clear feedback why a button is disabled

## Accessibility

- All buttons include proper focus states with visible focus rings
- Icon-only buttons include `aria-label` attributes for screen readers
- Disabled buttons use `disabled` attribute and appropriate cursor styling
- Color contrast meets WCAG AA standards in both light and dark modes
- Buttons are keyboard accessible and support Enter/Space activation

## Dark Mode

All button variations include comprehensive dark mode support:
- Primary buttons invert colors (black background becomes white in dark mode)
- Text colors adjust for proper contrast
- Focus rings adapt to dark backgrounds
- Hover states maintain visual hierarchy

## Technical Details

### CSS Classes Used
- **Layout**: `px-*`, `py-*`, `rounded-lg`
- **Typography**: `font-medium`, `text-*`
- **Colors**: `bg-*`, `text-*`, `border-*`
- **States**: `hover:*`, `focus:*`, `active:*`, `disabled:*`
- **Dark Mode**: `dark:*` variants for all properties
- **Transitions**: `transition-all`, `duration-normal`, `ease-apple-out`

### Interactive States
- **Hover**: Color shifts and shadow increases
- **Focus**: Visible focus ring with proper contrast
- **Active**: Slight scale reduction (`active:scale-98`)
- **Disabled**: Reduced opacity and disabled cursor

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Related Components

- [Input](../input/) - Form input elements
- [Link](../link/) - Text-based navigation
- [Icon](../icon/) - Standalone icons 