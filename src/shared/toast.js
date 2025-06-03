// Shared Toast Notification System for Design System
// Provides success, error, and info notifications

export class ToastManager {
  constructor() {
    this.container = null
    this.createContainer()
  }

  createContainer() {
    // Create toast container if it doesn't exist
    this.container = document.getElementById('toast-container')
    if (!this.container) {
      this.container = document.createElement('div')
      this.container.id = 'toast-container'
      this.container.className = 'fixed top-4 right-4 z-50 space-y-2'
      document.body.appendChild(this.container)
    }
  }

  show(message, type = 'success', duration = 3000) {
    const toast = this.createToast(message, type)
    this.container.appendChild(toast)

    // Trigger animation
    setTimeout(() => {
      toast.classList.remove('translate-x-full', 'opacity-0')
      toast.classList.add('translate-x-0', 'opacity-100')
    }, 100)

    // Auto dismiss
    setTimeout(() => {
      this.dismiss(toast)
    }, duration)

    return toast
  }

  createToast(message, type) {
    const toast = document.createElement('div')
    
    // Base classes with white blur background
    const baseClasses = 'flex items-center p-4 rounded-lg shadow-lg transform transition-all duration-300 ease-out translate-x-full opacity-0 min-w-80 max-w-md backdrop-blur-md bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/50 dark:border-neutral-700/50'
    
    // Type-specific icon styling (keep colored icons for distinction)
    let icon = ''
    
    switch (type) {
      case 'success':
        icon = `
          <svg class="w-5 h-5 text-success-500 dark:text-success-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        `
        break
      case 'error':
        icon = `
          <svg class="w-5 h-5 text-error-500 dark:text-error-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        `
        break
      case 'info':
        icon = `
          <svg class="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        `
        break
      default:
        icon = `
          <svg class="w-5 h-5 text-neutral-500 dark:text-neutral-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        `
    }

    toast.className = baseClasses
    
    toast.innerHTML = `
      ${icon}
      <div class="flex-1 text-sm font-medium text-neutral-900 dark:text-neutral-100">${message}</div>
      <button class="ml-3 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-200" onclick="this.parentElement.remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    `

    return toast
  }

  dismiss(toast) {
    toast.classList.remove('translate-x-0', 'opacity-100')
    toast.classList.add('translate-x-full', 'opacity-0')
    
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast)
      }
    }, 300)
  }

  // Convenience methods
  success(message, duration = 3000) {
    return this.show(message, 'success', duration)
  }

  error(message, duration = 3000) {
    return this.show(message, 'error', duration)
  }

  info(message, duration = 3000) {
    return this.show(message, 'info', duration)
  }
}

// Create global toast manager instance
export const toast = new ToastManager()

// Global toast functions for easy access
window.showToast = (message, type, duration) => toast.show(message, type, duration)
window.showSuccessToast = (message, duration) => toast.success(message, duration)
window.showErrorToast = (message, duration) => toast.error(message, duration)
window.showInfoToast = (message, duration) => toast.info(message, duration) 