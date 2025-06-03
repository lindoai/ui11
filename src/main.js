import './style.css'

// Dark Mode System
class ThemeManager {
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
    if (this.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
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
}

// Initialize theme manager
const themeManager = new ThemeManager()

// Initialize Design System Showcase
document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-normal">
    <!-- Enhanced Header with Search and Theme Toggle -->
    <header class="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 sticky top-0 z-50 transition-colors duration-normal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-8 h-8 bg-primary-500 dark:bg-primary-900 rounded-lg mr-3 transition-colors duration-normal"></div>
            <h1 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors duration-normal">UI11</h1>
            <span class="ml-2 text-xs bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-900 px-2 py-1 rounded-full transition-colors duration-normal">v0.0.1</span>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a href="documentation/index.html" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Documentation</a>
            <a href="blocks/index.html" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Blocks</a>
            <a href="https://github.com" target="_blank" rel="noopener" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">GitHub</a>
            
            <!-- Search -->
            <div class="relative">
              <input type="text" placeholder="Search... (Ctrl+/)" class="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 transition-colors duration-normal">
              <div class="absolute right-3 top-2.5 text-neutral-400 dark:text-neutral-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>

            <!-- Theme Toggle -->
            <button data-theme-toggle class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-normal">
              <svg class="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </button>
          </nav>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-normal">
            <svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-neutral-200 dark:border-neutral-700 py-4 transition-colors duration-normal">
          <nav class="space-y-4">
            <a href="documentation/index.html" class="block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Documentation</a>
            <a href="blocks/index.html" class="block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Blocks</a>
            <a href="https://github.com" target="_blank" rel="noopener" class="block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">GitHub</a>
            <div class="pt-4 flex items-center space-x-4">
              <input type="text" placeholder="Search..." class="flex-1 bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 transition-colors duration-normal">
              <button data-theme-toggle class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors duration-normal">
                <svg class="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h1 class="text-6xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 transition-colors duration-normal">
          Apple-Inspired<br>
          <span class="text-primary-500 dark:text-primary-400">Design System</span>
        </h1>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-normal">
          A comprehensive UI library with 90 elements built using HTML, Tailwind CSS, and Vanilla JavaScript. 
          Clean, elegant, and purposeful design with complete dark mode support.
        </p>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button class="bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white shadow-apple-md rounded-lg px-8 py-4 font-medium transition-all duration-normal ease-apple-out">
            Get Started
          </button>
          <button class="bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 rounded-lg px-8 py-4 font-medium transition-all duration-normal ease-apple-out">
            View Components
          </button>
        </div>
      </div>
    </section>

    <!-- Feature Highlights -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors duration-normal">Why Choose UI11?</h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto transition-colors duration-normal">Built with modern web standards and Apple's design philosophy in mind</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Apple-Inspired Design -->
        <div class="text-center">
          <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-normal">
            <svg class="w-8 h-8 text-primary-500 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3 transition-colors duration-normal">Apple-Inspired Design</h3>
          <p class="text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Clean, elegant, and purposeful design with attention to every detail</p>
        </div>

        <!-- Modern Tech Stack -->
        <div class="text-center">
          <div class="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-normal">
            <svg class="w-8 h-8 text-success-500 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3 transition-colors duration-normal">Modern Tech Stack</h3>
          <p class="text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Built with HTML, Tailwind CSS 3.4.17, and Vanilla JavaScript</p>
        </div>

        <!-- Comprehensive Library -->
        <div class="text-center">
          <div class="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors duration-normal">
            <svg class="w-8 h-8 text-warning-500 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3 transition-colors duration-normal">Complete Dark Mode</h3>
          <p class="text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Every element supports dark mode with automatic system detection</p>
        </div>
      </div>
    </section>

    <!-- Quick Start Guide -->
    <section class="bg-white dark:bg-neutral-800 py-16 transition-colors duration-normal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors duration-normal">Quick Start</h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Get up and running in minutes</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Installation Steps -->
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-primary-500 dark:bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-normal">1</div>
              <div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors duration-normal">Install Dependencies</h3>
                <div class="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 dark:text-neutral-200 p-4 rounded-lg text-sm font-mono transition-colors duration-normal">
                  npm install tailwindcss@3.4.17
                </div>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-primary-500 dark:bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-normal">2</div>
              <div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors duration-normal">Copy Components</h3>
                <p class="text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Browse our library and copy the HTML for any component you need</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-primary-500 dark:bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-normal">3</div>
              <div>
                <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 transition-colors duration-normal">Start Building</h3>
                <p class="text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Use our design tokens and components to build beautiful interfaces</p>
              </div>
            </div>
          </div>

          <!-- Code Preview -->
          <div class="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 dark:text-neutral-200 p-6 rounded-lg transition-colors duration-normal">
            <div class="text-sm text-neutral-400 dark:text-neutral-500 mb-4 transition-colors duration-normal">Example Button Component</div>
            <pre class="text-sm"><code>&lt;button class="bg-primary-500 hover:bg-primary-600 
        dark:bg-primary-600 dark:hover:bg-primary-700
        text-white shadow-apple-md rounded-lg 
        px-8 py-4 font-medium transition-all 
        duration-normal ease-apple-out"&gt;
  Get Started
&lt;/button&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Component Preview -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors duration-normal">Popular Components</h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Preview of our most-used elements</p>
      </div>

      <!-- Design Token Preview -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <!-- Colors -->
        <div class="bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-apple-sm hover:shadow-apple-md p-6 transition-all duration-normal ease-apple-out">
          <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 transition-colors duration-normal">Sophisticated Colors</h3>
          <div class="flex space-x-2 mb-4">
            <div class="w-8 h-8 bg-primary-500 dark:bg-primary-600 rounded-full transition-colors duration-normal"></div>
            <div class="w-8 h-8 bg-neutral-300 dark:bg-neutral-600 rounded-full transition-colors duration-normal"></div>
            <div class="w-8 h-8 bg-success-500 dark:bg-success-600 rounded-full transition-colors duration-normal"></div>
            <div class="w-8 h-8 bg-warning-500 dark:bg-warning-600 rounded-full transition-colors duration-normal"></div>
            <div class="w-8 h-8 bg-error-500 dark:bg-error-600 rounded-full transition-colors duration-normal"></div>
          </div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Refined palette with black accents and sophisticated neutrals</p>
        </div>

        <!-- Typography -->
        <div class="bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-apple-sm hover:shadow-apple-md p-6 transition-all duration-normal ease-apple-out">
          <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 transition-colors duration-normal">Apple Typography</h3>
          <div class="space-y-2 text-left">
            <div class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors duration-normal">Heading</div>
            <div class="text-base text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Body text with perfect readability</div>
            <div class="text-sm text-neutral-500 dark:text-neutral-500 transition-colors duration-normal">Caption text</div>
          </div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-4 transition-colors duration-normal">System fonts with clear hierarchy and generous spacing</p>
        </div>

        <!-- Components -->
        <div class="bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-lg shadow-apple-sm hover:shadow-apple-md p-6 transition-all duration-normal ease-apple-out">
          <h3 class="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 transition-colors duration-normal">Interactive Elements</h3>
          <div class="space-y-3">
            <button class="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-normal">Primary Button</button>
            <input type="text" placeholder="Input field" class="w-full bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 transition-colors duration-normal">
            <div class="flex items-center space-x-2">
              <input type="checkbox" class="rounded border-neutral-300 dark:border-neutral-600 text-primary-500 dark:text-primary-400 focus:ring-primary-500 dark:focus:ring-primary-400 transition-colors duration-normal">
              <label class="text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-normal">Checkbox option</label>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="bg-neutral-900 dark:bg-neutral-950 text-white py-16 transition-colors duration-normal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-semibold mb-4">By the Numbers</h2>
          <p class="text-lg text-neutral-300 dark:text-neutral-400 transition-colors duration-normal">Comprehensive coverage for all your design needs</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-semibold text-primary-400 dark:text-primary-300 mb-2 transition-colors duration-normal">90</div>
            <div class="text-neutral-300 dark:text-neutral-400 transition-colors duration-normal">Total Elements</div>
          </div>
          <div>
            <div class="text-4xl font-semibold text-primary-400 dark:text-primary-300 mb-2 transition-colors duration-normal">331</div>
            <div class="text-neutral-300 dark:text-neutral-400 transition-colors duration-normal">Variations</div>
          </div>
          <div>
            <div class="text-4xl font-semibold text-primary-400 dark:text-primary-300 mb-2 transition-colors duration-normal">35</div>
            <div class="text-neutral-300 dark:text-neutral-400 transition-colors duration-normal">Atomic Elements</div>
          </div>
          <div>
            <div class="text-4xl font-semibold text-primary-400 dark:text-primary-300 mb-2 transition-colors duration-normal">55</div>
            <div class="text-neutral-300 dark:text-neutral-400 transition-colors duration-normal">Components & Blocks</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Getting Started CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-2xl p-12 text-center text-white transition-colors duration-normal">
        <h2 class="text-4xl font-semibold mb-4">Ready to Get Started?</h2>
        <p class="text-lg text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto transition-colors duration-normal">
          Join thousands of developers building beautiful interfaces with UI11
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-primary-600 dark:text-primary-700 hover:bg-neutral-50 dark:hover:bg-neutral-100 shadow-apple-md rounded-lg px-8 py-4 font-medium transition-all duration-normal ease-apple-out">
            Browse Documentation
          </button>
          <button class="bg-primary-700 dark:bg-primary-800 hover:bg-primary-800 dark:hover:bg-primary-900 text-white border border-primary-400 dark:border-primary-500 rounded-lg px-8 py-4 font-medium transition-all duration-normal ease-apple-out">
            View on GitHub
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-normal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-primary-500 dark:bg-primary-600 rounded-lg mr-3 transition-colors duration-normal"></div>
              <h3 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors duration-normal">UI11 Design System</h3>
            </div>
            <p class="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md transition-colors duration-normal">
              Apple-inspired design system with 90 elements built using HTML, Tailwind CSS, and Vanilla JavaScript.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-neutral-400 dark:text-neutral-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="text-neutral-400 dark:text-neutral-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Documentation -->
          <div>
            <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors duration-normal">Documentation</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Getting Started</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Design Tokens</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Atomic Elements</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Components</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Blocks</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h4 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 transition-colors duration-normal">Resources</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">GitHub Repository</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Figma Kit</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Changelog</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Contributing</a></li>
              <li><a href="#" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">License</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-neutral-200 dark:border-neutral-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-normal">
          <p class="text-neutral-500 dark:text-neutral-400 text-sm transition-colors duration-normal">© 2024 UI11 Design System. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors duration-normal">Privacy Policy</a>
            <a href="#" class="text-neutral-500 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors duration-normal">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
`

// Initialize interactive functionality
function initializeApp() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }

  // Theme toggle functionality
  const themeToggleButtons = document.querySelectorAll('[data-theme-toggle]')
  themeToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      themeManager.toggleTheme()
    })
  })

  // Search functionality (placeholder)
  const searchInputs = document.querySelectorAll('input[type="text"]')
  searchInputs.forEach(input => {
    if (input.placeholder.includes('Search')) {
      input.addEventListener('focus', () => {
        console.log('Search focused - search functionality to be implemented')
      })
    }
  })

  // Keyboard shortcut for search (Ctrl+/)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
      e.preventDefault()
      const searchInput = document.querySelector('input[placeholder*="Search"]')
      if (searchInput) {
        searchInput.focus()
      }
    }
  })
}

// Initialize the app
initializeApp()

// Test Tailwind classes are working
console.log('🎨 UI11 Design System initialized with complete dark mode support')
console.log('🌙 Dark mode system active - theme:', themeManager.theme)
console.log('⚫ Primary color updated to black (#0f172a)')
console.log('✅ Phase 1 Dark Mode Implementation in progress')
