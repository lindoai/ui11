# Team Block

Team member showcases, leadership profiles, and company culture displays for building trust and highlighting the people behind your organization with professional layouts and engaging presentations.

## Variations

### 1. Team Grid
Team member cards with photos, roles, and social links in a clean grid layout for comprehensive team displays.

**Use Cases:**
- Company about pages
- Team introduction sections
- Staff directory displays
- Department showcases

**Features:**
- Responsive grid layout
- Hover effects on photos
- Social media links
- Role and department info
- Professional headshots

### 2. Leadership Team
Executive team showcase with detailed profiles, accomplishments, and comprehensive bios for building authority.

**Use Cases:**
- Executive team pages
- Board member displays
- Leadership introductions
- Investor relations content

**Features:**
- Detailed biographical content
- Alternating layout design
- Professional credentials
- Leadership photos
- Contact information

### 3. Team Stats
Team size, diversity metrics, and organizational statistics for showcasing company scale and culture.

**Use Cases:**
- Company overview sections
- Diversity and inclusion pages
- Recruitment marketing
- Investor presentations

**Features:**
- Animated counters
- Diversity metrics
- Growth statistics
- Visual data representation
- Achievement highlights

### 4. Team Culture
Culture and values showcase highlighting work environment, benefits, and company personality.

**Use Cases:**
- Careers pages
- Culture marketing
- Employee engagement
- Recruitment content

**Features:**
- Culture photography
- Values statements
- Benefit highlights
- Work environment showcase
- Employee testimonials

### 5. Hiring Section
Open positions, culture showcase, and recruitment content for attracting top talent.

**Use Cases:**
- Careers pages
- Job listings
- Talent acquisition
- Recruitment campaigns

**Features:**
- Open position listings
- Application processes
- Company benefits
- Culture highlights
- Contact forms

## Design Principles

### Visual Consistency
- Professional photography standards
- Consistent image dimensions
- Unified design language
- Brand color integration

### Trust Building
- Real employee photos
- Authentic content
- Professional credentials
- Social proof elements

### Engagement
- Interactive hover effects
- Social media integration
- Clear contact methods
- Compelling narratives

## Implementation

### Basic Team Grid
```html
<div class="bg-white dark:bg-neutral-950 py-16">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        Meet Our Team
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        We're a diverse group of talented individuals.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div class="text-center group">
        <div class="relative mb-4">
          <img src="..." alt="Team Member" class="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300">
        </div>
        <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Name</h3>
        <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-3">Role</p>
        <div class="flex justify-center space-x-3">
          <!-- Social links -->
        </div>
      </div>
    </div>
  </div>
</div>
```

### Leadership Profile
```html
<div class="flex flex-col lg:flex-row items-center lg:items-start gap-8">
  <div class="flex-shrink-0">
    <img src="..." alt="Leader" class="w-32 h-32 rounded-2xl object-cover">
  </div>
  <div class="flex-1 text-center lg:text-left">
    <h3 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Name</h3>
    <p class="text-primary-500 font-medium mb-4">Title</p>
    <p class="text-neutral-600 dark:text-neutral-400 mb-6">
      Detailed biography and experience...
    </p>
    <div class="flex justify-center lg:justify-start space-x-4">
      <!-- Social links -->
    </div>
  </div>
</div>
```

## Styling Classes

### Layout Classes
- `bg-white dark:bg-neutral-950` - Background colors
- `py-16` - Vertical spacing
- `max-w-6xl mx-auto` - Container width
- `grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8` - Responsive grid

### Image Styling
- `w-24 h-24 rounded-full` - Team member avatars
- `w-32 h-32 rounded-2xl` - Leadership photos
- `object-cover` - Image fit
- `group-hover:scale-105 transition-transform` - Hover effects

### Typography
- `text-3xl font-bold` - Section headings
- `text-lg font-semibold` - Member names
- `text-neutral-600 dark:text-neutral-400` - Role descriptions
- `text-primary-500` - Leadership titles

## Accessibility

### Screen Reader Support
- Alt text for all team photos
- Proper heading hierarchy
- Semantic markup for roles
- Descriptive link text

### Keyboard Navigation
- Focus indicators for links
- Logical tab order
- Accessible social links
- Interactive element support

### Color Contrast
- WCAG AA compliant text
- Dark mode support
- Sufficient contrast ratios
- Clear visual hierarchy

## Best Practices

### Photography Guidelines
- Use high-quality, professional headshots
- Maintain consistent lighting and style
- Ensure diverse representation
- Standardize image dimensions

### Content Strategy
- Keep role descriptions concise
- Include relevant credentials
- Add personality to bios
- Update regularly

### Performance
- Optimize image sizes
- Use responsive images
- Lazy load when appropriate
- Minimize layout shift

## Common Use Cases

1. **Company About Pages** - Complete team overview
2. **Department Pages** - Specific team showcases
3. **Leadership Pages** - Executive team profiles
4. **Careers Pages** - Culture and hiring content
5. **Contact Pages** - Key personnel information

## Integration Examples

### With Hero Sections
Combine team showcases with company mission statements.

### With Testimonial Sections
Pair team profiles with customer testimonials for credibility.

### With Contact Forms
Include team contact information near inquiry forms.

### With Culture Content
Integrate team profiles with company values and culture. 