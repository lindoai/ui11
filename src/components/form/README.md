# Form Component

Comprehensive form components with validation, flexible layouts, grouped fieldsets, and multi-step functionality for creating professional data collection interfaces with Apple-inspired design.

## Overview

The Form component offers four main variations:
- **Validation**: Forms with comprehensive client-side validation and error handling
- **Layout**: Flexible grid-based responsive form layouts
- **Fieldsets**: Grouped form sections for better organization
- **Multi-step**: Progressive forms for complex data collection

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant form styling with sophisticated validation states
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop devices
- ✅ **Real-time Validation**: Live validation with clear error messaging
- 🎯 **Flexible Layouts**: Grid-based responsive layouts for complex forms
- 📋 **Fieldset Organization**: Logical grouping of related form fields
- 🔄 **Multi-step Progress**: Step-by-step forms with progress indication
- 💫 **Smooth Transitions**: Elegant validation states and form interactions

## Usage

### Basic Form with Validation

```html
<form class="space-y-6" novalidate>
  <div>
    <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
      Email Address <span class="text-red-500">*</span>
    </label>
    <input type="email" id="email" name="email" required 
           class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    <div class="error-message hidden mt-2 text-sm text-red-600 dark:text-red-400"></div>
  </div>

  <div>
    <label for="password" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
      Password <span class="text-red-500">*</span>
    </label>
    <input type="password" id="password" name="password" required minlength="8"
           class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    <div class="error-message hidden mt-2 text-sm text-red-600 dark:text-red-400"></div>
    <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Must be at least 8 characters long</p>
  </div>

  <button type="submit" class="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
    Submit
  </button>
</form>
```

### Grid Layout Form

```html
<form class="space-y-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="first-name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
      <input type="text" id="first-name" name="first-name" 
             class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    </div>
    <div>
      <label for="last-name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
      <input type="text" id="last-name" name="last-name" 
             class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>
      <label for="phone" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Phone</label>
      <input type="tel" id="phone" name="phone" 
             class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    </div>
    <div>
      <label for="city" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">City</label>
      <input type="text" id="city" name="city" 
             class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    </div>
    <div>
      <label for="zip" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">ZIP Code</label>
      <input type="text" id="zip" name="zip" 
             class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    </div>
  </div>
</form>
```

### Fieldset Organization

```html
<form class="space-y-8">
  <fieldset class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
    <legend class="text-lg font-medium text-neutral-900 dark:text-neutral-100 px-2">Personal Information</legend>
    <div class="space-y-4 mt-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="first-name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
          <input type="text" id="first-name" name="first-name" class="form-input">
        </div>
        <div>
          <label for="last-name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
          <input type="text" id="last-name" name="last-name" class="form-input">
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset class="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
    <legend class="text-lg font-medium text-neutral-900 dark:text-neutral-100 px-2">Contact Information</legend>
    <div class="space-y-4 mt-4">
      <div>
        <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
        <input type="email" id="email" name="email" class="form-input">
      </div>
    </div>
  </fieldset>
</form>
```

## JavaScript API

### Form Validation

Initialize comprehensive form validation:

```javascript
function initializeValidation() {
  const form = document.getElementById('validation-form');
  const inputs = form.querySelectorAll('input[required], input[type="email"]');
  
  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearError);
  });

  form.addEventListener('submit', handleSubmit);

  function validateField(e) {
    const input = e.target;
    const errorElement = input.parentElement.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';

    // Clear previous styles
    input.classList.remove('border-red-500', 'border-green-500');

    if (input.hasAttribute('required') && !input.value.trim()) {
      isValid = false;
      errorMessage = 'This field is required';
    } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    } else if (input.type === 'password' && input.value && input.value.length < 8) {
      isValid = false;
      errorMessage = 'Password must be at least 8 characters long';
    }

    if (isValid && input.value) {
      input.classList.add('border-green-500');
      if (errorElement) {
        errorElement.classList.add('hidden');
      }
    } else if (!isValid) {
      input.classList.add('border-red-500');
      if (errorElement) {
        errorElement.textContent = errorMessage;
        errorElement.classList.remove('hidden');
      }
    }

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
```

### Multi-step Form Management

Handle multi-step form progression:

```javascript
function initializeMultiStep() {
  let currentStep = 0;
  const steps = document.querySelectorAll('.form-step');
  const nextButtons = document.querySelectorAll('.step-next');
  const prevButtons = document.querySelectorAll('.step-prev');
  const progressBar = document.querySelector('.step-progress-bar');

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.classList.toggle('hidden', index !== stepIndex);
    });
    
    updateProgress(stepIndex);
    updateButtons(stepIndex);
  }

  function updateProgress(stepIndex) {
    const progress = ((stepIndex + 1) / steps.length) * 100;
    progressBar.style.width = `${progress}%`;
  }

  function updateButtons(stepIndex) {
    nextButtons.forEach(btn => {
      btn.textContent = stepIndex === steps.length - 1 ? 'Submit' : 'Next';
    });
    
    prevButtons.forEach(btn => {
      btn.style.display = stepIndex === 0 ? 'none' : 'block';
    });
  }

  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });

  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
      }
    });
  });

  // Initialize first step
  showStep(0);
}
```

### Data Attributes

#### Form Validation
- `required` - Marks field as required
- `minlength="8"` - Minimum length validation
- `type="email"` - Email format validation
- `pattern="[0-9]*"` - Custom regex validation
- `novalidate` - Disable browser validation

#### Multi-step Forms
- `data-step="1"` - Step number identifier
- `data-step-title="Personal Info"` - Step display title
- `data-validation="required"` - Step validation requirements

### CSS Classes

#### Form Structure
- `.form-container` - Main form wrapper
- `.form-step` - Individual form step container
- `.form-section` - Logical form section grouping
- `.form-grid` - Grid layout container for form fields

#### Input Styling
- `.form-input` - Base input field styling
- `.form-textarea` - Textarea specific styling
- `.form-select` - Select dropdown styling
- `.form-checkbox` - Checkbox input styling
- `.form-radio` - Radio input styling

#### Validation States
- `.border-red-500` - Error state border
- `.border-green-500` - Success state border
- `.error-message` - Error message text styling
- `.success-message` - Success message text styling

#### Layout Classes
- `.grid-cols-1` - Single column layout
- `.md:grid-cols-2` - Two column responsive layout
- `.md:grid-cols-3` - Three column responsive layout
- `.space-y-4` - Vertical spacing between elements

## Styling Guide

### Color Scheme
- **Backgrounds**: `bg-white dark:bg-neutral-950` for form containers
- **Input Backgrounds**: `bg-white dark:bg-neutral-950` for input fields
- **Borders**: `border-neutral-200 dark:border-neutral-700` for default state
- **Focus States**: `focus:border-primary-500 dark:focus:border-primary-400` for active fields
- **Error States**: `border-red-500` with `text-red-600 dark:text-red-400` messages
- **Success States**: `border-green-500` for validated fields

### Typography
- **Labels**: `text-sm font-medium text-neutral-700 dark:text-neutral-300`
- **Input Text**: `text-neutral-900 dark:text-neutral-100`
- **Help Text**: `text-sm text-neutral-500 dark:text-neutral-400`
- **Error Messages**: `text-sm text-red-600 dark:text-red-400`
- **Required Indicators**: `text-red-500` for asterisks

### Layout
- **Form Spacing**: `space-y-6` for form sections
- **Field Spacing**: `space-y-4` for individual fields
- **Grid Gaps**: `gap-6` for responsive grid layouts
- **Input Padding**: `px-4 py-3` for comfortable touch targets
- **Border Radius**: `rounded-lg` for modern appearance

### Interactive States
- **Focus Rings**: `focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20`
- **Hover Effects**: Subtle background color changes on interactive elements
- **Transition**: `transition-colors` for smooth state changes
- **Button States**: Primary buttons with hover and active states

## Accessibility Features

### ARIA Support
- `aria-required="true"` for required fields
- `aria-invalid="true"` for fields with errors
- `aria-describedby` linking fields to help text and errors
- `role="group"` for fieldset organization
- `aria-live="polite"` for validation announcements

### Screen Reader Support
- Clear labels associated with all form fields
- Descriptive error messages and help text
- Proper heading hierarchy for form sections
- Fieldset legends for grouped content

### Keyboard Navigation
- Tab order follows logical form flow
- All interactive elements keyboard accessible
- Enter key submits forms appropriately
- Escape key cancels modal forms

### Color Accessibility
- High contrast ratios for all text elements
- Error states don't rely on color alone
- Focus indicators visible for keyboard users
- Dark mode compliance with WCAG standards

## Form Validation Types

### Client-side Validation
- **Email**: Format validation with regex pattern
- **Password**: Minimum length and complexity requirements
- **Confirmation**: Password confirmation matching
- **Required**: Non-empty field validation
- **Pattern**: Custom regex pattern matching
- **Length**: Minimum and maximum character limits

### Real-time Validation
- **On Blur**: Validate when user leaves field
- **On Input**: Clear errors as user types
- **On Submit**: Final validation before submission
- **Debounced**: Delayed validation to avoid flickering

### Error Handling
- **Inline Errors**: Messages displayed below fields
- **Field Highlighting**: Border color changes for invalid fields
- **Summary**: Overall form validation status
- **Toast Notifications**: Success/error feedback on submission

## Layout Patterns

### Single Column
```html
<form class="max-w-md mx-auto space-y-6">
  <!-- Form fields stack vertically -->
</form>
```

### Two Column
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Responsive two-column layout -->
</div>
```

### Three Column
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Responsive three-column layout -->
</div>
```

### Mixed Layout
```html
<form class="space-y-6">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Two columns for name fields -->
  </div>
  <div>
    <!-- Full width for email -->
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Three columns for address fields -->
  </div>
</form>
```

## Best Practices

1. **Progressive Enhancement**: Start with basic HTML forms and enhance with JavaScript
2. **Clear Labels**: Use descriptive, action-oriented labels for all fields
3. **Logical Grouping**: Group related fields using fieldsets or visual sections
4. **Immediate Feedback**: Provide validation feedback as soon as possible
5. **Error Recovery**: Make it easy for users to correct mistakes
6. **Mobile Optimization**: Ensure forms work well on touch devices
7. **Performance**: Minimize validation overhead and optimize for large forms

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Customization

The form component can be customized by modifying Tailwind classes:

```html
<!-- Custom validation styles -->
<input class="border-2 border-blue-500 focus:border-blue-700 focus:ring-blue-200">

<!-- Custom grid layouts -->
<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
  <!-- Custom responsive breakpoints -->
</div>

<!-- Custom fieldset styling -->
<fieldset class="border-2 border-dashed border-neutral-300 rounded-xl p-8">
  <!-- Enhanced fieldset appearance -->
</fieldset>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 