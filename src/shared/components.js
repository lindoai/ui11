// Shared UI Components for Design System
// This file contains reusable header, sidebar, and footer components

// Generate navigation header component
export function generateHeader(currentPage = '') {
  return `
    <header class="bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-700 fixed top-0 left-0 right-0 z-50 transition-colors duration-normal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <div class="w-8 h-8 bg-primary-500 dark:bg-primary-900 rounded-lg mr-3 transition-colors duration-normal"></div>
              <h1 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 transition-colors duration-normal">UI11</h1>
              <span class="ml-2 text-xs bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-900 px-2 py-1 rounded-full transition-colors duration-normal">v0.0.1</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <a href="/documentation/index.html" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal ${currentPage === 'documentation' ? 'text-primary-500 dark:text-primary-400' : ''}">Documentation</a>
            <a href="/blocks/index.html" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal ${currentPage === 'blocks' ? 'text-primary-500 dark:text-primary-400' : ''}">Blocks</a>
            <a href="https://github.com" target="_blank" rel="noopener" class="text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">GitHub</a>
            
            <!-- Search -->
            <div class="relative">
              <input type="text" placeholder="Search... (Ctrl+/)" class="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 transition-colors duration-normal">
              <div class="absolute right-3 top-2.5 text-neutral-400 dark:text-neutral-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>

            <!-- Theme Toggle -->
            <button data-theme-toggle class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-normal">
              <svg class="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </button>
          </nav>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-normal">
            <svg class="w-6 h-6 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-neutral-200 dark:border-neutral-700 py-4 transition-colors duration-normal">
          <nav class="space-y-4">
            <a href="/documentation/index.html" class="block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Documentation</a>
            <a href="/blocks/index.html" class="block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">Blocks</a>
            <a href="https://github.com" target="_blank" rel="noopener" class="block text-neutral-600 dark:text-neutral-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-normal">GitHub</a>
            <div class="pt-4 flex items-center space-x-4">
              <input type="text" placeholder="Search..." class="flex-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 transition-colors duration-normal">
              <button data-theme-toggle class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-normal">
                <svg class="w-5 h-5 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `;
}

// Generate sidebar navigation component
export function generateSidebar(currentElement = '') {
  // Detect page type from URL to determine which sidebar to show
  const currentPath = window.location.pathname;
  const isBlocksPage = currentPath.includes('/blocks/') || currentPath.includes('/src/blocks/');
  
  // Define sidebar data for Documentation (Atomic + Components)
  const documentationSidebarData = {
    'Atomic Elements': {
      'Form Elements': [
        { name: 'Button', path: '/src/atomic/button/', status: 'pending' },
        { name: 'Input', path: '/src/atomic/input/', status: 'pending' },
        { name: 'Textarea', path: '/src/atomic/textarea/', status: 'pending' },
        { name: 'Select', path: '/src/atomic/select/', status: 'pending' },
        { name: 'Checkbox', path: '/src/atomic/checkbox/', status: 'pending' },
        { name: 'Radio', path: '/src/atomic/radio/', status: 'pending' },
        { name: 'Switch', path: '/src/atomic/switch/', status: 'pending' },
        { name: 'Slider', path: '/src/atomic/slider/', status: 'pending' },
        { name: 'DatePicker', path: '/src/atomic/datepicker/', status: 'pending' },
        { name: 'TimePicker', path: '/src/atomic/timepicker/', status: 'pending' },
        { name: 'ColorPicker', path: '/src/atomic/colorpicker/', status: 'pending' },
        { name: 'FileUpload', path: '/src/atomic/fileupload/', status: 'pending' },
        { name: 'Rating', path: '/src/atomic/rating/', status: 'pending' },
        { name: 'Snackbar', path: '/src/atomic/snackbar/', status: 'pending' },
        { name: 'Loading', path: '/src/atomic/loading/', status: 'pending' }
      ],
      'Display Elements': [
        { name: 'Avatar', path: '/src/atomic/avatar/', status: 'pending' },
        { name: 'Badge', path: '/src/atomic/badge/', status: 'pending' },
        { name: 'Tag', path: '/src/atomic/tag/', status: 'pending' },
        { name: 'Label', path: '/src/atomic/label/', status: 'pending' },
        { name: 'Tooltip', path: '/src/atomic/tooltip/', status: 'pending' },
        { name: 'Progress', path: '/src/atomic/progress/', status: 'pending' },
        { name: 'Skeleton', path: '/src/atomic/skeleton/', status: 'pending' },
        { name: 'Divider', path: '/src/atomic/divider/', status: 'pending' },
        { name: 'Icon', path: '/src/atomic/icon/', status: 'pending' },
        { name: 'Image', path: '/src/atomic/image/', status: 'pending' },
        { name: 'Banner', path: '/src/atomic/banner/', status: 'pending' },
        { name: 'Error', path: '/src/atomic/error/', status: 'pending' }
      ],
      'Navigation Elements': [
        { name: 'Link', path: '/src/atomic/link/', status: 'pending' },
        { name: 'Breadcrumb', path: '/src/atomic/breadcrumb/', status: 'pending' },
        { name: 'Pagination', path: '/src/atomic/pagination/', status: 'pending' },
        { name: 'Anchor', path: '/src/atomic/anchor/', status: 'pending' }
      ],
      'Layout Elements': [
        { name: 'Container', path: '/src/atomic/container/', status: 'pending' },
        { name: 'Grid', path: '/src/atomic/grid/', status: 'pending' },
        { name: 'Spacer', path: '/src/atomic/spacer/', status: 'pending' },
        { name: 'Flex', path: '/src/atomic/flex/', status: 'pending' }
      ]
    },
    'Components': {
      'Interactive': [
        { name: 'Card', path: '/src/components/card/', status: 'pending' },
        { name: 'Modal', path: '/src/components/modal/', status: 'pending' },
        { name: 'Sidebar', path: '/src/components/sidebar/', status: 'pending' },
        { name: 'Tabs', path: '/src/components/tabs/', status: 'pending' },
        { name: 'Accordion', path: '/src/components/accordion/', status: 'pending' },
        { name: 'Carousel', path: '/src/components/carousel/', status: 'pending' },
        { name: 'Steps', path: '/src/components/steps/', status: 'pending' },
        { name: 'Dropdown', path: '/src/components/dropdown/', status: 'pending' }
      ],
      'Data': [
        { name: 'Table', path: '/src/components/table/', status: 'pending' },
        { name: 'List', path: '/src/components/list/', status: 'pending' },
        { name: 'Timeline', path: '/src/components/timeline/', status: 'pending' },
        { name: 'Stats', path: '/src/components/stats/', status: 'pending' },
        { name: 'Gallery', path: '/src/components/gallery/', status: 'pending' },
        { name: 'Profile', path: '/src/components/profile/', status: 'pending' },
        { name: 'Review', path: '/src/components/review/', status: 'pending' }
      ],
      'Forms': [
        { name: 'Form', path: '/src/components/form/', status: 'pending' },
        { name: 'Contact', path: '/src/components/contact/', status: 'pending' },
        { name: 'Login', path: '/src/components/login/', status: 'pending' },
        { name: 'SearchBox', path: '/src/components/searchbox/', status: 'pending' },
        { name: 'Shopping Cart', path: '/src/components/shopping-cart/', status: 'pending' }
      ]
    }
  };

  // Define sidebar data for Blocks only
  const blocksSidebarData = {
    'Blocks': {
      'Hero Sections': [
        { name: 'Hero', path: '/src/blocks/hero-sections/hero/', status: 'pending' },
        { name: 'Feature', path: '/src/blocks/hero-sections/feature/', status: 'pending' },
        { name: 'Call to Action', path: '/src/blocks/hero-sections/cta/', status: 'pending' },
        { name: 'Weather', path: '/src/blocks/hero-sections/weather/', status: 'pending' }
      ],
      'Content Sections': [
        { name: 'Article', path: '/src/blocks/content-sections/article/', status: 'pending' },
        { name: 'Blog', path: '/src/blocks/content-sections/blog/', status: 'pending' },
        { name: 'News', path: '/src/blocks/content-sections/news/', status: 'pending' },
        { name: 'FAQ', path: '/src/blocks/content-sections/faq/', status: 'pending' },
        { name: 'Testimonial', path: '/src/blocks/content-sections/testimonial/', status: 'pending' },
        { name: 'Team', path: '/src/blocks/content-sections/team/', status: 'pending' },
        { name: 'Gallery', path: '/src/blocks/content-sections/gallery/', status: 'pending' },
        { name: 'Pricing', path: '/src/blocks/content-sections/pricing/', status: 'pending' }
      ],
      'Navigation Blocks': [
        { name: 'Header', path: '/src/blocks/navigation-blocks/header/', status: 'pending' },
        { name: 'Footer', path: '/src/blocks/navigation-blocks/footer/', status: 'pending' },
        { name: 'Breadcrumb', path: '/src/blocks/navigation-blocks/breadcrumb/', status: 'pending' },
        { name: 'Sidebar', path: '/src/blocks/navigation-blocks/sidebar/', status: 'pending' }
      ],
      'E-commerce': [
        { name: 'Shopping Cart', path: '/src/blocks/e-commerce/shopping-cart/', status: 'pending' },
        { name: 'Profile', path: '/src/blocks/e-commerce/profile/', status: 'pending' },
        { name: 'Review', path: '/src/blocks/e-commerce/review/', status: 'pending' },
        { name: 'Product', path: '/src/blocks/e-commerce/product/', status: 'pending' },
        { name: 'Checkout', path: '/src/blocks/e-commerce/checkout/', status: 'pending' }
      ],
      'Media & Communication': [
        { name: 'Carousel', path: '/src/blocks/media-communication/carousel/', status: 'pending' },
        { name: 'Timeline', path: '/src/blocks/media-communication/timeline/', status: 'pending' },
        { name: 'Stats', path: '/src/blocks/media-communication/stats/', status: 'pending' },
        { name: 'Contact', path: '/src/blocks/media-communication/contact/', status: 'pending' },
        { name: 'Social', path: '/src/blocks/media-communication/social/', status: 'pending' },
        { name: 'Newsletter', path: '/src/blocks/media-communication/newsletter/', status: 'pending' }
      ],
      'Feedback & Status': [
        { name: 'Error', path: '/src/blocks/feedback-status/error/', status: 'pending' },
        { name: 'Loading', path: '/src/blocks/feedback-status/loading/', status: 'pending' },
        { name: 'Modal', path: '/src/blocks/feedback-status/modal/', status: 'pending' },
        { name: 'Banner', path: '/src/blocks/feedback-status/banner/', status: 'pending' }
      ],
      'Specialized': [
        { name: 'Login', path: '/src/blocks/specialized/login/', status: 'pending' },
        { name: 'Steps', path: '/src/blocks/specialized/steps/', status: 'pending' },
        { name: 'Table', path: '/src/blocks/specialized/table/', status: 'pending' },
        { name: 'Tabs', path: '/src/blocks/specialized/tabs/', status: 'pending' }
      ]
    }
  };

  // Choose which sidebar data to use
  const sidebarData = isBlocksPage ? blocksSidebarData : documentationSidebarData;

  let sidebarHtml = `
    <aside class="w-64 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-700 fixed left-0 top-16 bottom-0 overflow-y-auto transition-colors duration-normal z-40">
      <div class="p-6">
        <!-- Search Filter -->
        <div class="mb-6">
          <input 
            type="text" 
            id="sidebar-search"
            placeholder="Filter elements..." 
            class="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 transition-colors duration-normal"
          >
        </div>

        <!-- Navigation Menu -->
        <nav class="space-y-6">
  `;

  // Generate navigation sections
  Object.entries(sidebarData).forEach(([sectionName, categories]) => {
    sidebarHtml += `
      <div class="sidebar-section">
        <h3 class="text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-3 transition-colors duration-normal">${sectionName}</h3>
        <div class="space-y-4">
    `;

    Object.entries(categories).forEach(([categoryName, items]) => {
      sidebarHtml += `
        <div class="sidebar-category">
          <h4 class="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2 transition-colors duration-normal">${categoryName}</h4>
          <ul class="space-y-1 ml-2">
      `;

      items.forEach(item => {
        const isActive = currentElement.toLowerCase() === item.name.toLowerCase();
        const isComplete = item.status === 'complete';
        
        // Status icons: checkmark for completed items only, dot for active items
        let statusIcon = '';
        if (isComplete && !isActive) {
          // Green checkmark for completed items (but not currently active)
          statusIcon = `<svg class="w-4 h-4 text-success-500 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
        } else if (isActive) {
          // Primary dot for currently active item
          statusIcon = `<div class="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"></div>`;
        }
        
        sidebarHtml += `
          <li class="sidebar-item" data-element="${item.name.toLowerCase()}">
            <a href="${item.path}" class="flex items-center justify-between text-sm py-1 px-2 rounded-md transition-colors duration-normal ${
              isActive 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
                : isComplete 
                  ? 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700'
            }">
              <span class="${isComplete ? 'font-medium' : ''}">${item.name}</span>
              ${statusIcon}
            </a>
          </li>
        `;
      });

      sidebarHtml += `
          </ul>
        </div>
      `;
    });

    sidebarHtml += `
        </div>
      </div>
    `;
  });

  sidebarHtml += `
        </nav>
      </div>
    </aside>
  `;

  return sidebarHtml;
}

// Generate footer component
export function generateFooter() {
  return `
    <footer class="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-700 mt-auto transition-colors duration-normal">
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
  `;
}

// Initialize shared component functionality
export function initializeSharedComponents() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Sidebar search filter
  const sidebarSearch = document.getElementById('sidebar-search');
  if (sidebarSearch) {
    sidebarSearch.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const sidebarItems = document.querySelectorAll('.sidebar-item');
      
      sidebarItems.forEach(item => {
        const elementName = item.dataset.element;
        const category = item.closest('.sidebar-category');
        const section = item.closest('.sidebar-section');
        
        if (elementName.includes(searchTerm)) {
          item.style.display = 'block';
          if (category) category.style.display = 'block';
          if (section) section.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Hide empty categories
      const categories = document.querySelectorAll('.sidebar-category');
      categories.forEach(category => {
        const visibleItems = category.querySelectorAll('.sidebar-item[style="display: block"], .sidebar-item:not([style])');
        if (visibleItems.length === 0) {
          category.style.display = 'none';
        }
      });

      // Hide empty sections
      const sections = document.querySelectorAll('.sidebar-section');
      sections.forEach(section => {
        const visibleCategories = section.querySelectorAll('.sidebar-category[style="display: block"], .sidebar-category:not([style])');
        if (visibleCategories.length === 0) {
          section.style.display = 'none';
        }
      });
    });
  }

  // Search functionality (placeholder)
  const searchInputs = document.querySelectorAll('input[type="text"]');
  searchInputs.forEach(input => {
    if (input.placeholder.includes('Search') && !input.id) {
      input.addEventListener('focus', () => {
        console.log('Search focused - search functionality to be implemented');
      });
    }
  });

  // Keyboard shortcut for search (Ctrl+/)
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '/') {
      e.preventDefault();
      const searchInput = document.querySelector('input[placeholder*="Search"]');
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
} 