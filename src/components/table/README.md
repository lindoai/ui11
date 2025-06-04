# Table Component

A comprehensive table component with sorting, filtering, pagination, and responsive capabilities for displaying structured data with Apple-inspired design.

## Overview

The Table component offers four main variations:
- **Sortable**: Tables with clickable column headers for data sorting
- **Filterable**: Tables with filter controls for data searching and filtering
- **Pagination**: Tables with pagination controls for large datasets
- **Responsive**: Tables that adapt to mobile devices with card-based layouts

## Features

- 🎨 **Apple-inspired Design**: Clean, elegant styling with subtle shadows and professional appearance
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive**: Works perfectly on mobile, tablet, and desktop devices
- 🔄 **Sortable Columns**: Click-to-sort functionality with visual indicators
- 🔍 **Advanced Filtering**: Real-time search and dropdown filters
- 📄 **Pagination**: Navigation controls for large datasets
- 💫 **Smooth Interactions**: Hover effects and transitions for better UX

## Usage

### Sortable Table

```html
<div class="overflow-x-auto">
  <table class="w-full sortable-table">
    <thead class="bg-neutral-50 dark:bg-neutral-800">
      <tr>
        <th class="sortable px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors" data-column="name">
          <div class="flex items-center justify-between">
            Name
            <svg class="sort-icon w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
            </svg>
          </div>
        </th>
        <th class="sortable px-6 py-3 text-left cursor-pointer" data-column="email">Email</th>
        <th class="sortable px-6 py-3 text-left cursor-pointer" data-column="role">Role</th>
        <th class="sortable px-6 py-3 text-left cursor-pointer" data-column="status">Status</th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-neutral-950 divide-y divide-neutral-200 dark:divide-neutral-700">
      <tr class="table-row hover:bg-neutral-50 dark:hover:bg-neutral-800" data-name="John Doe" data-email="john@example.com" data-role="Admin" data-status="Active">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
              <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">JD</span>
            </div>
            <div class="ml-4 text-sm font-medium text-neutral-900 dark:text-neutral-100">John Doe</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">john@example.com</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100">Admin</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Active</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Filterable Table

```html
<!-- Filter Controls -->
<div class="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>
    <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Search</label>
    <input type="text" class="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500" placeholder="Search users...">
  </div>
  <div>
    <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Role</label>
    <select class="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500" aria-label="Filter by role">
      <option value="">All Roles</option>
      <option value="Admin">Admin</option>
      <option value="Manager">Manager</option>
      <option value="User">User</option>
    </select>
  </div>
  <div>
    <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Status</label>
    <select class="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500" aria-label="Filter by status">
      <option value="">All Status</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  </div>
</div>

<!-- Table -->
<div class="overflow-x-auto">
  <table class="w-full">
    <thead class="bg-neutral-50 dark:bg-neutral-800">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Email</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Role</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-neutral-950 divide-y divide-neutral-200 dark:divide-neutral-700">
      <tr class="filter-row hover:bg-neutral-50 dark:hover:bg-neutral-800" data-name="Alice Johnson" data-email="alice@example.com" data-role="Admin" data-status="Active">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
              <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">AJ</span>
            </div>
            <div class="ml-4 text-sm font-medium text-neutral-900 dark:text-neutral-100">Alice Johnson</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">alice@example.com</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100">Admin</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Active</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### Pagination Table

```html
<div class="overflow-x-auto">
  <table class="w-full">
    <thead class="bg-neutral-50 dark:bg-neutral-800">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Email</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Role</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-neutral-950 divide-y divide-neutral-200 dark:divide-neutral-700">
      <tr class="hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
              <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">EM</span>
            </div>
            <div class="ml-4 text-sm font-medium text-neutral-900 dark:text-neutral-100">Emma Wilson</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">emma@example.com</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100">Admin</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Active</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Pagination Controls -->
<div class="flex items-center justify-between mt-6">
  <div class="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
    <span>Showing 1 to 3 of 12 results</span>
  </div>
  <nav class="flex items-center space-x-1" aria-label="Pagination">
    <button class="px-3 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-l-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 disabled:opacity-50" disabled>
      Previous
    </button>
    <button class="px-3 py-2 text-sm font-medium text-white bg-primary-500 dark:bg-primary-600 border border-primary-500 dark:border-primary-600">
      1
    </button>
    <button class="px-3 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700">
      2
    </button>
    <button class="px-3 py-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-r-lg hover:bg-neutral-50 dark:hover:bg-neutral-700">
      Next
    </button>
  </nav>
</div>
```

### Responsive Table

```html
<!-- Desktop Table View -->
<div class="hidden md:block overflow-x-auto">
  <table class="w-full">
    <thead class="bg-neutral-50 dark:bg-neutral-800">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Email</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Role</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Status</th>
      </tr>
    </thead>
    <tbody class="bg-white dark:bg-neutral-950 divide-y divide-neutral-200 dark:divide-neutral-700">
      <tr class="hover:bg-neutral-50 dark:hover:bg-neutral-800">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="flex items-center">
            <div class="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
              <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">HI</span>
            </div>
            <div class="ml-4 text-sm font-medium text-neutral-900 dark:text-neutral-100">Henry Irving</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500 dark:text-neutral-400">henry@example.com</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-900 dark:text-neutral-100">Admin</td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Active</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Mobile Card View -->
<div class="md:hidden space-y-4">
  <div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4">
    <div class="flex items-center space-x-4 mb-4">
      <div class="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
        <span class="text-sm font-medium text-neutral-600 dark:text-neutral-300">HI</span>
      </div>
      <div class="flex-1">
        <div class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Henry Irving</div>
        <div class="text-sm text-neutral-500 dark:text-neutral-400">henry@example.com</div>
      </div>
      <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">Active</span>
    </div>
    <div class="text-sm text-neutral-900 dark:text-neutral-100">
      <span class="font-medium">Role:</span> Admin
    </div>
  </div>
</div>
```

## JavaScript API

### Initialization

The table component functionality is automatically initialized when the page loads. Each table type requires specific HTML structure and CSS classes:

```javascript
// Sortable table
initializeSortableTable();

// Filterable table
initializeFilterableTable();

// Pagination table (requires custom pagination logic)
// Responsive table (CSS-based, no JavaScript required)
```

### Sortable Table Functions

```javascript
function initializeSortableTable() {
  const table = document.querySelector('.sortable-table');
  const headers = table.querySelectorAll('.sortable');
  let sortDirection = {};

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const column = header.getAttribute('data-column');
      const tbody = table.querySelector('tbody');
      const rows = Array.from(tbody.querySelectorAll('.table-row'));
      
      // Toggle sort direction
      const currentDirection = sortDirection[column] || 'asc';
      const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';
      sortDirection[column] = newDirection;
      
      // Update sort icons and sort rows
      updateSortIcons(headers, header, newDirection);
      sortRows(rows, column, newDirection, tbody);
    });
  });
}
```

### Filterable Table Functions

```javascript
function initializeFilterableTable() {
  const searchFilter = document.getElementById('search-filter');
  const roleFilter = document.getElementById('role-filter');
  const statusFilter = document.getElementById('status-filter');
  const filterRows = document.querySelectorAll('.filter-row');

  function applyFilters() {
    const searchTerm = searchFilter?.value.toLowerCase() || '';
    const selectedRole = roleFilter?.value || '';
    const selectedStatus = statusFilter?.value || '';

    filterRows.forEach(row => {
      const name = row.getAttribute('data-name').toLowerCase();
      const email = row.getAttribute('data-email').toLowerCase();
      const role = row.getAttribute('data-role');
      const status = row.getAttribute('data-status');

      const matchesSearch = name.includes(searchTerm) || email.includes(searchTerm);
      const matchesRole = !selectedRole || role === selectedRole;
      const matchesStatus = !selectedStatus || status === selectedStatus;

      if (matchesSearch && matchesRole && matchesStatus) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  // Add event listeners
  searchFilter?.addEventListener('input', applyFilters);
  roleFilter?.addEventListener('change', applyFilters);
  statusFilter?.addEventListener('change', applyFilters);
}
```

### Data Attributes

#### Sortable Table
- `data-column="columnName"` - Column identifier for sorting
- `data-name`, `data-email`, `data-role`, `data-status` - Row data for sorting

#### Filterable Table
- `data-name`, `data-email`, `data-role`, `data-status` - Row data for filtering

### CSS Classes

#### Table Structure
- `.sortable-table` - Main sortable table container
- `.filterable-table` - Main filterable table container
- `.pagination-table` - Main pagination table container

#### Interactive Elements
- `.sortable` - Sortable column header
- `.sort-icon` - Sort direction indicator
- `.table-row` - Table row for sorting
- `.filter-row` - Table row for filtering

#### State Classes
- `.hidden` - Hides elements
- `.disabled` - Disabled state for pagination buttons
- `hover:bg-neutral-50` - Hover states for rows

## Styling Guide

### Color Scheme
- **Table Background**: `bg-white dark:bg-neutral-950` for clean data display
- **Header Background**: `bg-neutral-50 dark:bg-neutral-800` for visual separation
- **Row Borders**: `border-neutral-200 dark:border-neutral-700` for subtle division
- **Text Colors**: `text-neutral-900 dark:text-neutral-100` for primary text
- **Secondary Text**: `text-neutral-500 dark:text-neutral-400` for metadata
- **Interactive**: `hover:bg-neutral-50 dark:hover:bg-neutral-800` for feedback

### Spacing
- **Cell Padding**: `px-6 py-4` for comfortable content spacing
- **Header Padding**: `px-6 py-3` for header cells
- **Row Spacing**: `divide-y` utilities for clean row separation

### Typography
- **Headers**: `text-xs font-medium uppercase tracking-wider` for professional headers
- **Primary Text**: `text-sm font-medium` for names and important data
- **Secondary Text**: `text-sm` for emails and descriptions

### Status Badges
- **Active**: `bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200`
- **Inactive**: `bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200`
- **Pending**: `bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200`

## Accessibility Features

### ARIA Support
- `role="table"`, `role="row"`, `role="columnheader"` for proper structure
- `aria-label` attributes for filter controls and buttons
- `aria-expanded` for sortable columns
- `aria-current="page"` for active pagination button

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Enter/Space**: Activate sorting and pagination
- **Arrow Keys**: Navigate table cells
- **Escape**: Clear filters or reset state

### Screen Reader Support
- Descriptive labels for all interactive elements
- Table headers properly associated with data cells
- Status announcements for sort direction changes
- Clear indication of current page and total results

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: iOS 14+
- **Chrome Mobile**: Android 8+

## Performance Considerations

### Large Datasets
- Use pagination for tables with more than 50 rows
- Implement virtual scrolling for very large datasets
- Consider server-side filtering and sorting for massive data
- Lazy load additional data as needed

### Mobile Optimization
- Responsive design switches to card layout on mobile
- Horizontal scroll for tables that don't fit mobile screens
- Touch-friendly interface elements
- Optimized tap targets for mobile interactions

## Best Practices

1. **Data Structure**: Use semantic HTML table structure for accessibility
2. **Responsive Design**: Provide alternative layouts for mobile devices
3. **Loading States**: Show loading indicators during data fetching
4. **Error Handling**: Display meaningful error messages for data failures
5. **Pagination**: Implement pagination for tables with many rows
6. **Sorting**: Provide clear visual feedback for sort direction
7. **Filtering**: Use debounced input for search filters
8. **Empty States**: Show helpful messages when no data is available

## Customization

The table component can be customized by modifying Tailwind classes:

```html
<!-- Custom styling example -->
<table class="w-full border-collapse">
  <thead class="bg-blue-50 dark:bg-blue-900">
    <tr>
      <th class="px-4 py-2 text-left text-xs font-bold text-blue-700 dark:text-blue-200 uppercase">
        Custom Header
      </th>
    </tr>
  </thead>
  <tbody class="divide-y divide-blue-200 dark:divide-blue-700">
    <!-- Custom rows -->
  </tbody>
</table>
```

For extensive customization, extend the component's CSS classes or create variant classes following the established design patterns. 