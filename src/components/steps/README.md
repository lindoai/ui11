# Steps Component

Step indicators for multi-step processes, workflows, and navigation with visual progress tracking and status indicators.

## Variations

### 1. Process Steps
- Linear process flow with clear progression
- Completed, current, and upcoming states
- Connected progress lines
- Ideal for onboarding and setup workflows

```html
<div class="steps-container">
  <ol class="flex items-center">
    <!-- Step 1 - Completed -->
    <li class="relative flex-1">
      <div class="flex items-center">
        <div class="flex items-center justify-center w-10 h-10 bg-success-500 rounded-full text-white">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div class="ml-4">
          <h3 class="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Account Setup</h3>
          <p class="text-xs text-neutral-500 dark:text-neutral-400">Create your account</p>
        </div>
      </div>
      <div class="absolute top-5 left-10 w-full h-0.5 bg-success-500"></div>
    </li>
    <!-- Additional steps... -->
  </ol>
</div>
```

### 2. Navigation Steps
- Interactive step navigation
- Clickable steps for jumping between sections
- Progress bar indicator
- Perfect for multi-step forms

```html
<nav class="steps-navigation" data-steps="navigation">
  <ol class="flex justify-between">
    <li class="step-item active" data-step="0">
      <button class="step-button flex flex-col items-center group" aria-label="Go to step 1">
        <div class="flex items-center justify-center w-8 h-8 bg-primary-500 dark:bg-primary-600 rounded-full text-white text-sm font-semibold">
          1
        </div>
        <span class="mt-2 text-xs font-medium text-primary-600 dark:text-primary-400">Details</span>
      </button>
    </li>
    <!-- Additional steps... -->
  </ol>
  
  <!-- Progress Bar -->
  <div class="relative mt-4">
    <div class="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 dark:bg-neutral-700 -translate-y-1/2"></div>
    <div class="step-progress absolute top-1/2 left-0 h-0.5 bg-primary-500 dark:bg-primary-600 -translate-y-1/2 transition-all duration-300"></div>
  </div>
</nav>
```

### 3. Status Steps
- Various status indicators
- Different completion states
- Alert-style presentations
- Great for order tracking and notifications

```html
<!-- Completed Status -->
<div class="flex items-center p-4 bg-success-50 dark:bg-success-900/20 rounded-lg border border-success-200 dark:border-success-800">
  <div class="flex items-center justify-center w-8 h-8 bg-success-500 rounded-full text-white mr-4">
    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  </div>
  <div class="flex-1">
    <h3 class="text-sm font-semibold text-success-800 dark:text-success-200">Order Confirmed</h3>
    <p class="text-xs text-success-600 dark:text-success-300">Your order has been successfully confirmed</p>
  </div>
  <span class="text-xs font-medium text-success-600 dark:text-success-400 bg-success-100 dark:bg-success-800 px-2 py-1 rounded">Completed</span>
</div>
```

### 4. Vertical Steps
- Vertical timeline layout
- Detailed step descriptions
- Mobile-friendly design
- Ideal for complex processes

```html
<div class="steps-vertical">
  <ol class="space-y-8">
    <li class="relative">
      <div class="flex items-start">
        <div class="flex items-center justify-center w-10 h-10 bg-success-500 rounded-full text-white z-10">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div class="ml-6 min-w-0 flex-1">
          <h3 class="text-base font-semibold text-neutral-900 dark:text-neutral-100">Create Account</h3>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Set up your personal account with basic information.</p>
          <div class="mt-2">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200">
              Completed
            </span>
          </div>
        </div>
      </div>
      <div class="absolute top-10 left-5 w-0.5 h-8 bg-success-300 dark:bg-success-700"></div>
    </li>
    <!-- Additional steps... -->
  </ol>
</div>
```

## Features

- **Multiple Layouts**: Horizontal, vertical, and status-based presentations
- **Interactive Navigation**: Clickable steps for form navigation
- **Progress Tracking**: Visual progress indicators and completion states
- **Status Indicators**: Success, warning, error, and pending states
- **Dark Mode**: Complete dark mode support
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: ARIA labels and keyboard navigation

## Usage Guidelines

- Use process steps for linear workflows with clear progression
- Implement navigation steps for forms where users can jump between sections
- Apply status steps to show different completion states and alerts
- Choose vertical layout for mobile interfaces or detailed step descriptions
- Ensure step numbers and titles are descriptive and meaningful
- Provide clear visual distinction between completed, current, and upcoming steps

## Accessibility Features

- ARIA labels for step navigation and progress indicators
- Keyboard navigation support for interactive step elements
- High contrast colors for step status identification
- Screen reader compatible step descriptions and status
- Focus indicators on clickable step elements
- Semantic markup using ordered lists for proper structure

## JavaScript API

### Navigation Steps
```javascript
// Initialize navigation steps with click handlers
function initializeSteps() {
  const navigationSteps = document.querySelectorAll('[data-steps="navigation"]');
  navigationSteps.forEach(stepsContainer => {
    const stepButtons = stepsContainer.querySelectorAll('.step-button');
    const progressBar = stepsContainer.querySelector('.step-progress');
    
    stepButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        updateStepDisplay(index);
      });
    });
  });
}
```

### Programmatic Control
```javascript
// Update step programmatically
function goToStep(stepIndex) {
  currentStep = stepIndex;
  updateStepDisplay();
}

// Get current step
function getCurrentStep() {
  return currentStep;
}
```

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