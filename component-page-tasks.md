# Component Page Layout Rules & Tasks

## 🏗️ Mandatory Page Structure

### HTML Document Structure
```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Element Name] - UI11 Design System</title>
  <link href="/src/style.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js"></script>
</head>
<body class="min-h-screen bg-white dark:bg-neutral-950">
  <!-- Page Layout Container -->
  <div class="flex min-h-screen">
    <!-- Sidebar Container (Injected) -->
    <div id="sidebar-container"></div>
    
    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col ml-64 mt-16">
      <!-- Header Container (Injected) -->
      <div id="header-container"></div>
      
      <!-- Page Content -->
      <main class="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        <!-- Inner Navigation (Breadcrumb) -->
        <nav class="flex mb-8" aria-label="Breadcrumb">
          <!-- Breadcrumb content -->
        </nav>

        <!-- Page Header -->
        <div class="mb-12">
          <h1 class="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">[Element Name]</h1>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-6 max-w-3xl leading-relaxed">
            [Element description and use cases]
          </p>
        </div>

        <!-- Sections (Elements/Blocks/Variations) -->
        <section id="[section-id]" class="mb-16">
          <!-- Section content with tabs -->
        </section>

        <!-- Usage Guidelines -->
        <div class="bg-white dark:bg-neutral-950 border border-neutral-900 dark:border-neutral-100 rounded-lg p-4 mb-8">
          <!-- Guidelines content -->
        </div>

        <!-- Accessibility Features -->
        <div class="bg-white dark:bg-neutral-950 border border-neutral-900 dark:border-neutral-100 rounded-lg p-4">
          <!-- Accessibility content -->
        </div>

      </main>
      
      <!-- Footer Container (Injected) -->
      <div id="footer-container"></div>
    </div>
  </div>

  <!-- JavaScript -->
  <script type="module">
    <!-- Component initialization -->
  </script>
</body>
</html>
```

## 📋 Section Structure Requirements

### Each Section Must Include:

#### 1. Section Header
```html
<div class="mb-8">
  <div class="flex items-center justify-between mb-6">
    <div>
      <h2 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">[Section Title]</h2>
      <p class="text-neutral-600 dark:text-neutral-400">[Section description]</p>
    </div>
    <div class="flex items-center gap-3">
      <button data-theme-toggle class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400 transition-colors duration-normal" aria-label="Toggle theme">
        <!-- Theme toggle icon -->
      </button>
      <button id="copy-[section-id]-btn" class="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium transition-colors duration-normal">
        <!-- Copy icon -->
        Copy
      </button>
    </div>
  </div>
</div>
```

#### 2. Pill-Style Tab Navigation
```html
<div class="mb-6">
  <nav class="inline-flex bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1">
    <button class="tab-button active px-4 py-2 rounded-md bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 font-medium text-sm shadow-sm transition-all duration-normal" data-tab="[section-id]-preview">
      Preview
    </button>
    <button class="tab-button px-4 py-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 font-medium text-sm transition-all duration-normal" data-tab="[section-id]-html">
      HTML
    </button>
  </nav>
</div>
```

#### 3. Preview Tab
```html
<div id="[section-id]-preview" class="tab-content">
  <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-8">
    <!-- Live interactive examples -->
  </div>
</div>
```

#### 4. HTML Tab (CRITICAL)
```html
<div id="[section-id]-html" class="tab-content hidden w-[768px]">
  <div class="bg-neutral-900 dark:bg-neutral-950 rounded-lg overflow-hidden">
    <div class="w-full">
      <pre class="p-6 text-sm overflow-x-auto"><code class="language-html whitespace-pre break-words" style="word-break: break-all; max-width: 100%;">
        <!-- PROPERLY ESCAPED HTML CODE HERE -->
      </code></pre>
    </div>
  </div>
</div>
```

## ✅ Page Creation Checklist

### Pre-Development Setup
- [ ] **Reference tasks.md** for specific element requirements
- [ ] **Check element variations** (how many sections needed)
- [ ] **Plan section structure** based on element complexity

### Page Structure Implementation
- [ ] **HTML Document Structure** - Follow exact layout above
- [ ] **Body Classes** - `min-h-screen bg-white dark:bg-neutral-950`
- [ ] **Page Layout Container** - `flex min-h-screen`
- [ ] **Sidebar Container** - `id="sidebar-container"`
- [ ] **Main Content Area** - `flex-1 flex flex-col ml-64 mt-16`
- [ ] **Header Container** - `id="header-container"`
- [ ] **Main Element** - `flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden`
- [ ] **Footer Container** - `id="footer-container"`

### Inner Navigation & Header
- [ ] **Breadcrumb Navigation** - Proper navigation structure
- [ ] **Page Header** - Title and description
- [ ] **Responsive Typography** - Correct heading hierarchy

### Section Implementation (Per Variation)
- [ ] **Section Container** - `<section id="[section-id]" class="mb-16">`
- [ ] **Clean Section Header** - Title + description + action buttons (theme toggle + copy)
- [ ] **Pill-Style Tabs** - Preview and HTML tabs with proper styling
- [ ] **Preview Tab Content** - Live, interactive examples with proper background
- [ ] **HTML Tab Content** - **MOST CRITICAL** - Complete, escaped HTML code

### HTML Tab Quality Control (CRITICAL)
- [ ] **HTML Code Present** - Tab shows actual HTML code, not empty
- [ ] **Proper HTML Escaping** - All `<` become `&lt;`, all `>` become `&gt;`
- [ ] **Complete Code** - Code matches preview exactly
- [ ] **Syntax Highlighting** - Prism.js working correctly
- [ ] **Copy Functionality** - Copy button copies correct HTML
- [ ] **No Mixed Entities** - No mixing of regular HTML tags with escaped entities
- [ ] **Width Constraint** - HTML tab has `w-[768px]` class

### JavaScript Implementation
- [ ] **Shared Components Import** - Header, sidebar, footer injection
- [ ] **Theme Manager** - Theme toggle functionality
- [ ] **Toast System** - Copy success/error notifications
- [ ] **Tab Functionality** - Preview/HTML tab switching
- [ ] **Copy Button Events** - All copy buttons working with correct selectors
- [ ] **Interactive Features** - Any element-specific JavaScript

### Dark Mode & Accessibility
- [ ] **Universal Dark Mode** - Every element has dark: classes
- [ ] **Theme Toggle** - Working on all sections
- [ ] **WCAG Compliance** - Proper contrast ratios
- [ ] **Keyboard Navigation** - Tab through all elements
- [ ] **Screen Reader Support** - Proper ARIA labels
- [ ] **Focus Indicators** - Visible focus states

### Bottom Guidelines
- [ ] **Usage Guidelines** - White bg, black border, clear instructions
- [ ] **Accessibility Features** - White bg, black border, accessibility info

### Quality Assurance
- [ ] **Mobile Responsive** - Works on all screen sizes
- [ ] **Cross-browser Testing** - Chrome, Firefox, Safari, Edge
- [ ] **Performance** - Fast loading, smooth interactions
- [ ] **No Console Errors** - Clean JavaScript execution
- [ ] **HTML Validation** - Valid HTML structure

## 🚨 Critical HTML Tab Rules

### HTML Tab Content Must:
1. **Always be visible** when HTML tab is clicked
2. **Show complete code** that produces the exact preview
3. **Use proper HTML escaping** (`&lt;` and `&gt;`)
4. **Never mix** regular HTML tags with escaped entities
5. **Include all wrapper elements** that create the visual result
6. **Have consistent formatting** with proper indentation
7. **Work with copy button** - copying produces working HTML

### Common HTML Tab Errors to Avoid:
- ❌ Empty HTML tabs
- ❌ Incomplete code that doesn't match preview
- ❌ Mixed HTML tags and escaped entities (e.g., `</form&gt;`)
- ❌ Missing wrapper divs or background elements
- ❌ Syntax highlighting not working
- ❌ Copy button not copying or copying wrong content

### HTML Tab Success Criteria:
- ✅ User can copy HTML and paste it anywhere to get exact preview result
- ✅ All HTML properly escaped and displays as code
- ✅ Syntax highlighting working with prism.js
- ✅ Code is properly indented and formatted
- ✅ Copy button shows success toast notification

## 🎯 Process Flow

1. **Choose Element** from tasks.md
2. **Plan Variations** based on element requirements  
3. **Create Page Structure** following layout rules above
4. **Implement Each Section** with Preview + HTML tabs
5. **Test HTML Tabs** - Most critical step
6. **Verify Copy Functionality** for all sections
7. **Test Responsive Design** on multiple screen sizes
8. **Validate Dark Mode** on all elements
9. **Check Accessibility** with keyboard navigation
10. **Mark Complete** in tasks.md and move to next element

## 📝 Reference Example
Perfect implementation example: `src/atomic/textarea/index.html`

## ⚠️ Before Moving to Next Element
- [ ] All HTML tabs working and showing code
- [ ] All copy buttons functional with toast notifications
- [ ] Dark mode working on all sections
- [ ] Page responsive on mobile/tablet/desktop
- [ ] No console errors or HTML parsing issues
- [ ] Element marked complete in tasks.md 