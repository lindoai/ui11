// Shared Theme Manager for Design System
// Handles dark mode functionality across all pages

export class ThemeManager {
  constructor() {
    this.theme = this.getStoredTheme() || this.getSystemTheme()
    this.init()
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  getStoredTheme() {
    return localStorage.getItem('theme')
  }

  setTheme(theme) {
    this.theme = theme
    localStorage.setItem('theme', theme)
    this.applyTheme()
    this.updateToggleButtons()
  }

  applyTheme() {
    // Disable all CSS transitions temporarily for instant theme switching
    this.disableTransitions()
    
    if (this.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Re-enable transitions after a brief delay to ensure theme is applied
    setTimeout(() => {
      this.enableTransitions()
    }, 10)
  }

  disableTransitions() {
    // Add a global style to disable all transitions
    const style = document.createElement('style')
    style.id = 'disable-transitions'
    style.textContent = `
      *, *::before, *::after {
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
      }
    `
    document.head.appendChild(style)
  }

  enableTransitions() {
    // Remove the transition-disabling style
    const style = document.getElementById('disable-transitions')
    if (style) {
      style.remove()
    }
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark')
  }

  updateToggleButtons() {
    const toggleButtons = document.querySelectorAll('[data-theme-toggle]')
    toggleButtons.forEach(button => {
      const icon = button.querySelector('svg')
      if (icon) {
        if (this.theme === 'dark') {
          // Sun icon for light mode
          icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>`
        } else {
          // Moon icon for dark mode
          icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>`
        }
      }
    })
  }

  init() {
    this.applyTheme()
    this.updateToggleButtons()

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light')
      }
    })
  }

  // Initialize theme toggle functionality
  initializeToggleButtons() {
    const themeToggleButtons = document.querySelectorAll('[data-theme-toggle]')
    themeToggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.toggleTheme()
      })
    })
  }
}

// Create global theme manager instance
export const themeManager = new ThemeManager() 