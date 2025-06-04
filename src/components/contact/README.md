# Contact Component

Professional contact components with forms, location maps, contact information displays, and comprehensive validation for effective customer communication interfaces.

## Overview

The Contact component offers four main variations:
- **Contact Form**: Professional contact forms with validation and user-friendly layouts
- **Map**: Interactive location maps with business information
- **Info**: Contact information displays with multiple communication methods
- **Validation**: Form validation with real-time feedback and error handling

## Features

- 🎨 **Apple-inspired Design**: Clean, professional contact interfaces with elegant styling
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive**: Optimized layouts for mobile, tablet, and desktop devices
- ✅ **Form Validation**: Real-time validation with clear error messaging
- 🗺️ **Interactive Maps**: Location display with business information
- 📧 **Multiple Contact Methods**: Forms, phone, email, and address options
- 💫 **Smooth Interactions**: Elegant hover states and form interactions

## Usage

### Basic Contact Form

```html
<form class="space-y-6">
  <div class="text-center mb-8">
    <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Get in Touch</h3>
    <p class="text-neutral-600 dark:text-neutral-400">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label for="first-name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
      <input type="text" id="first-name" name="first-name" required
             class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    </div>
    <div>
      <label for="last-name" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
      <input type="text" id="last-name" name="last-name" required
             class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    </div>
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
    <input type="email" id="email" name="email" required
           class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
    <textarea id="message" name="message" rows="5" required
              class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors resize-none"
              placeholder="Tell us about your project or inquiry..."></textarea>
  </div>

  <button type="submit" class="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
    Send Message
  </button>
</form>
```

### Location Map with Information

```html
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <!-- Map Container -->
  <div class="lg:col-span-2">
    <div class="h-96 rounded-lg overflow-hidden">
      <iframe src="https://www.google.com/maps/embed..." 
              width="100%" height="100%" style="border:0;" 
              allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>

  <!-- Location Info -->
  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Visit Our Office</h3>
      <div class="space-y-4">
        <div class="flex items-start space-x-3">
          <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          </svg>
          <div>
            <p class="font-medium text-neutral-900 dark:text-neutral-100">Address</p>
            <p class="text-neutral-600 dark:text-neutral-400">123 Business Street<br>Suite 100<br>San Francisco, CA 94102</p>
          </div>
        </div>

        <div class="flex items-start space-x-3">
          <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <p class="font-medium text-neutral-900 dark:text-neutral-100">Business Hours</p>
            <p class="text-neutral-600 dark:text-neutral-400">Monday - Friday<br>9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div class="flex items-start space-x-3">
          <svg class="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <div>
            <p class="font-medium text-neutral-900 dark:text-neutral-100">Phone</p>
            <p class="text-neutral-600 dark:text-neutral-400">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>

    <button class="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
      Get Directions
    </button>
  </div>
</div>
```

### Contact Information Cards

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Email Card -->
  <div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
      <svg class="w-6 h-6 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Email Us</h3>
    <p class="text-neutral-600 dark:text-neutral-400 mb-4">Send us an email and we'll get back to you within 24 hours.</p>
    <a href="mailto:contact@company.com" class="text-primary-500 dark:text-primary-400 hover:underline font-medium">
      contact@company.com
    </a>
  </div>

  <!-- Phone Card -->
  <div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
      <svg class="w-6 h-6 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Call Us</h3>
    <p class="text-neutral-600 dark:text-neutral-400 mb-4">Call us directly for immediate assistance and support.</p>
    <a href="tel:+15551234567" class="text-primary-500 dark:text-primary-400 hover:underline font-medium">
      +1 (555) 123-4567
    </a>
  </div>

  <!-- Office Card -->
  <div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 text-center">
    <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
      <svg class="w-6 h-6 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Visit Us</h3>
    <p class="text-neutral-600 dark:text-neutral-400 mb-4">Come visit our office for face-to-face consultations.</p>
    <p class="text-primary-500 dark:text-primary-400 font-medium">
      123 Business Street<br>San Francisco, CA 94102
    </p>
  </div>
</div>
```

## JavaScript API

### Form Validation

Initialize contact form validation:

```javascript
function initializeContactForm() {
  const form = document.getElementById('contact-form');
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  
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
      errorMessage = `${input.labels[0].textContent.replace('*', '').trim()} is required`;
    } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    } else if (input.name === 'message' && input.value && input.value.length < 10) {
      isValid = false;
      errorMessage = 'Message must be at least 10 characters long';
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

  function handleSubmit(e) {
    e.preventDefault();
    
    let isFormValid = true;
    
    inputs.forEach(input => {
      const fieldValid = validateField({ target: input });
      if (!fieldValid) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Show success message
      showSuccessMessage();
      form.reset();
      
      // Clear validation styles
      inputs.forEach(input => {
        input.classList.remove('border-red-500', 'border-green-500');
      });
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg mb-6';
    successDiv.innerHTML = `
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Thank you for your message! We'll get back to you soon.
      </div>
    `;
    
    form.parentElement.insertBefore(successDiv, form);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }
}
```

## CSS Classes

### Contact Form Classes
- `.contact-form` - Main contact form container
- `.form-header` - Form title and description section
- `.form-grid` - Grid layout for form fields
- `.form-field` - Individual form field container
- `.form-actions` - Form submit button area

### Map Classes
- `.map-container` - Map section wrapper
- `.map-embed` - Embedded map iframe container
- `.location-info` - Location information sidebar
- `.location-item` - Individual location detail item
- `.directions-btn` - Get directions button

### Contact Info Classes
- `.contact-cards` - Contact information cards grid
- `.contact-card` - Individual contact card
- `.contact-icon` - Contact method icon
- `.contact-title` - Contact method title
- `.contact-details` - Contact method details

### Validation Classes
- `.error-message` - Error message styling
- `.success-message` - Success message styling
- `.border-red-500` - Error state border
- `.border-green-500` - Success state border

## Styling Guide

### Color Scheme
- **Backgrounds**: `bg-white dark:bg-neutral-950` for main containers
- **Card Backgrounds**: `bg-white dark:bg-neutral-950` with subtle borders
- **Input Backgrounds**: `bg-white dark:bg-neutral-950` for form fields
- **Icon Backgrounds**: `bg-primary-100 dark:bg-primary-900/20` for contact icons
- **Borders**: `border-neutral-200 dark:border-neutral-700` for default state
- **Focus States**: `focus:border-primary-500 dark:focus:border-primary-400`

### Typography
- **Headings**: `text-neutral-900 dark:text-neutral-100` with appropriate font weights
- **Body Text**: `text-neutral-600 dark:text-neutral-400` for descriptions
- **Labels**: `text-sm font-medium text-neutral-700 dark:text-neutral-300`
- **Links**: `text-primary-500 dark:text-primary-400 hover:underline`

### Layout
- **Form Spacing**: `space-y-6` for form sections
- **Grid Layouts**: `grid grid-cols-1 md:grid-cols-2 gap-6` for responsive forms
- **Card Spacing**: `p-6` for contact cards
- **Icon Sizing**: `w-5 h-5` for contact icons, `w-6 h-6` for card icons

### Interactive States
- **Hover Effects**: Subtle background changes and underlines
- **Focus Rings**: `focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20`
- **Button States**: Primary buttons with hover and active states
- **Map Interactions**: Hover states for location items

## Accessibility Features

### ARIA Support
- `aria-required="true"` for required form fields
- `aria-invalid="true"` for fields with validation errors
- `aria-describedby` linking fields to help text and errors
- `role="group"` for contact information sections
- `aria-label` for interactive map elements

### Screen Reader Support
- Descriptive labels for all form fields
- Alternative text for map content
- Clear headings hierarchy for contact sections
- Meaningful link text for contact methods

### Keyboard Navigation
- Tab order follows logical contact flow
- All interactive elements keyboard accessible
- Skip links for complex contact forms
- Focus management for form validation

### Color Accessibility
- High contrast ratios for all text elements
- Error states don't rely on color alone
- Icon reinforcement for contact methods
- WCAG compliant color combinations

## Map Integration

### Google Maps Embed

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1234567890"
        width="100%" 
        height="400" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### OpenStreetMap Alternative

```html
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4244%2C37.7699%2C-122.4144%2C37.7799&layer=mapnik"
        width="100%" 
        height="400" 
        style="border:0;"
        loading="lazy">
</iframe>
```

## Form Handling

### Client-side Processing

```javascript
function handleContactSubmission(formData) {
  // Basic form processing
  const data = {
    firstName: formData.get('first-name'),
    lastName: formData.get('last-name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    timestamp: new Date().toISOString()
  };
  
  // Send to backend or email service
  return fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
}
```

### Spam Protection

```html
<!-- Honeypot field (hidden from users) -->
<div style="display: none;">
  <label for="website">Website</label>
  <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
</div>

<!-- reCAPTCHA integration -->
<div class="g-recaptcha" data-sitekey="your-site-key"></div>
```

## Best Practices

1. **Progressive Enhancement**: Start with working HTML forms and enhance with JavaScript
2. **Clear Communication**: Use descriptive headings and help text
3. **Multiple Contact Options**: Provide various ways for users to reach out
4. **Mobile Optimization**: Ensure forms work well on touch devices
5. **Privacy Considerations**: Be transparent about data usage
6. **Response Times**: Set clear expectations for response times
7. **Error Recovery**: Make it easy to correct form mistakes

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Customization

The contact component can be customized by modifying Tailwind classes:

```html
<!-- Custom form styling -->
<form class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800 p-8 rounded-xl">
  <!-- Enhanced form background -->
</form>

<!-- Custom contact cards -->
<div class="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-6 rounded-xl">
  <!-- Branded contact card -->
</div>

<!-- Custom map container -->
<div class="border-4 border-primary-500 rounded-2xl overflow-hidden shadow-2xl">
  <!-- Enhanced map styling -->
</div>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 