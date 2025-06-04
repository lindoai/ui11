# Login Component

Complete authentication components including sign in, sign up, password recovery, and social login options for secure user access with Apple-inspired design.

## Overview

The Login component offers four main variations:
- **Sign In**: Traditional email/password authentication with remember me option
- **Sign Up**: Account creation with comprehensive form validation
- **Forgot Password**: Password recovery workflow (shown in API documentation)
- **Social Login**: Third-party authentication with popular providers

## Features

- 🎨 **Apple-inspired Design**: Clean, professional authentication forms with elegant styling
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive Design**: Optimized layouts for all device sizes
- 🔒 **Security Features**: Password visibility toggle, validation feedback, secure form handling
- 🚀 **Social Integration**: Support for Google, Facebook, GitHub, and other providers
- ✅ **Real-time Validation**: Instant feedback for form fields and error states

## Usage

### Basic Sign In Form
```html
<form class="space-y-6">
  <div class="text-center mb-8">
    <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Welcome Back</h3>
    <p class="text-neutral-600 dark:text-neutral-400">Sign in to your account to continue</p>
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
    <input type="email" id="email" name="email" required
           class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
  </div>

  <button type="submit" class="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
    Sign In
  </button>
</form>
```

### Social Login Buttons
```html
<div class="space-y-4">
  <button class="w-full flex items-center justify-center px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
    <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
      <!-- Google icon -->
    </svg>
    Continue with Google
  </button>
</div>
```

## JavaScript API

### Password Toggle
```javascript
// Toggle password visibility
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
  input.setAttribute('type', type);
}
```

### Form Validation
```javascript
// Basic form validation example
function validateLoginForm(formData) {
  const errors = {};
  
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.password || formData.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }
  
  return errors;
}
```

### Social Login Integration
```javascript
// Example OAuth integration
async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // Handle successful login
  } catch (error) {
    // Handle errors
    console.error('Google sign-in error:', error);
  }
}
```

## Variations

### 1. Sign In (signin)
- Email/password authentication
- Remember me checkbox
- Forgot password link
- Account creation link

### 2. Sign Up (signup)
- First/last name fields
- Email and password inputs
- Password confirmation
- Terms acceptance checkbox

### 3. Social Login (social)
- Google authentication
- Facebook authentication
- GitHub authentication
- Email fallback option

### 4. Forgot Password (API)
```html
<form class="space-y-6">
  <div class="text-center mb-8">
    <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Reset Password</h3>
    <p class="text-neutral-600 dark:text-neutral-400">Enter your email to receive reset instructions</p>
  </div>

  <div>
    <label for="reset-email" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
    <input type="email" id="reset-email" name="email" required
           class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
  </div>

  <button type="submit" class="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
    Send Reset Link
  </button>
</form>
```

## Styling Guidelines

### Form Containers
- Use `max-w-md mx-auto` for centered form layouts
- Apply `bg-neutral-50 dark:bg-neutral-900` for form backgrounds
- Add `border border-neutral-200 dark:border-neutral-700` for subtle borders

### Input Fields
- Standard classes: `w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg`
- Focus states: `focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20`
- Background: `bg-white dark:bg-neutral-950`

### Buttons
- Primary: `bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700`
- Social: `border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950`
- Full width: `w-full` for primary actions

## Security Considerations

### Password Requirements
- Minimum 8 characters
- Include uppercase, lowercase, numbers
- Special character recommendations
- Password strength indicators

### Form Protection
- CSRF token implementation
- Rate limiting for login attempts
- Secure session management
- Input sanitization and validation

### Social Login Security
- OAuth 2.0 implementation
- Secure token handling
- User data privacy protection
- Scope limitation

## Accessibility Features

- Proper form labels and field associations
- ARIA attributes for validation states
- Keyboard navigation support
- Screen reader announcements
- High contrast focus indicators
- Logical tab order and semantic structure

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- **Form**: Base form components and validation
- **Input**: Individual input field components
- **Button**: Action buttons and interactive elements
- **Modal**: Popup authentication dialogs 