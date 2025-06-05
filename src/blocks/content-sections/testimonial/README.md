# Testimonial Block

Customer testimonials, reviews, and social proof layouts for building trust and showcasing positive feedback with authentic user experiences and compelling visual presentation.

## Variations

### 1. Customer Quotes
Prominent customer testimonials with photos, ratings, and company attribution for trust building.

**Use Cases:**
- Landing page social proof
- Product testimonials
- Service endorsements
- Trust-building sections

**Features:**
- Featured testimonial with gradient background
- Grid layout for multiple testimonials
- Star ratings and verification badges
- Customer photos and company attribution
- Responsive design with hover effects

### 2. Review Cards
Detailed customer reviews with ratings, photos, and comprehensive feedback for product validation.

**Use Cases:**
- Product review sections
- Service feedback display
- E-commerce testimonials
- Customer satisfaction showcase

**Features:**
- Card-based layout
- Detailed review content
- Rating displays
- Customer verification
- Responsive grid system

### 3. Video Testimonials
Video-based customer testimonials with thumbnails and play controls for authentic social proof.

**Use Cases:**
- High-impact testimonials
- Service demonstrations
- Customer story videos
- Brand advocacy content

**Features:**
- Video thumbnail previews
- Play button overlays
- Customer information display
- Responsive video grid
- Modal video playback

### 4. Company Logos
Customer company logos and brand testimonials for B2B credibility and enterprise social proof.

**Use Cases:**
- B2B landing pages
- Enterprise client showcase
- Partnership displays
- Brand credibility sections

**Features:**
- Logo grid layouts
- Company name displays
- Industry categorization
- Responsive logo sizing
- Hover effects and tooltips

### 5. Social Proof Wall
Comprehensive social proof with statistics, testimonials, and trust indicators for maximum credibility.

**Use Cases:**
- High-conversion landing pages
- Sales page social proof
- Trust-building sections
- Comprehensive credibility display

**Features:**
- Mixed content types
- Statistics and numbers
- Multiple testimonial formats
- Trust badges and certifications
- Comprehensive social proof

## Design Principles

### Visual Hierarchy
- Featured testimonials with prominent placement
- Clear customer attribution and credentials
- Consistent rating displays
- Balanced content layouts

### Trust Indicators
- Customer photos for authenticity
- Company logos and affiliations
- Verification badges
- Specific details and metrics

### Content Strategy
- Mix of testimonial lengths
- Diverse customer backgrounds
- Specific benefits mentioned
- Recent and relevant feedback

## Implementation

### Basic Structure
```html
<div class="bg-white dark:bg-neutral-950 py-16">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        What Our Customers Say
      </h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">
        Real feedback from customers who have experienced value.
      </p>
    </div>

    <!-- Testimonials Content -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Testimonial items -->
    </div>
  </div>
</div>
```

### Testimonial Card
```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
  <div class="flex items-center mb-4">
    <img src="..." alt="Customer Name" class="w-12 h-12 rounded-full mr-3">
    <div>
      <div class="font-semibold text-neutral-900 dark:text-neutral-100">Customer Name</div>
      <div class="text-sm text-neutral-600 dark:text-neutral-400">Title, Company</div>
    </div>
  </div>
  
  <!-- Star Rating -->
  <div class="flex mb-4">
    <!-- Star icons -->
  </div>
  
  <p class="text-neutral-600 dark:text-neutral-400 mb-4">
    "Testimonial content goes here..."
  </p>
  
  <div class="text-sm text-neutral-500 dark:text-neutral-500">
    Verified Customer • Date
  </div>
</div>
```

## Styling Classes

### Layout Classes
- `bg-white dark:bg-neutral-950` - Background colors
- `py-16` - Vertical padding
- `max-w-6xl mx-auto` - Container width and centering
- `grid md:grid-cols-2 lg:grid-cols-3 gap-8` - Responsive grid

### Card Styling
- `border border-neutral-200 dark:border-neutral-700` - Card borders
- `rounded-xl` - Card border radius
- `p-6` - Card padding
- `hover:shadow-lg transition-shadow` - Hover effects

### Typography
- `text-3xl font-bold` - Section headings
- `text-lg` - Subheadings
- `font-semibold` - Customer names
- `text-sm` - Metadata text

## Accessibility

### Screen Reader Support
- Proper heading hierarchy (h2, h3)
- Alt text for customer images
- Semantic blockquote elements
- Descriptive text for ratings

### Keyboard Navigation
- Focus indicators for interactive elements
- Logical tab order
- Keyboard accessible buttons

### Color Contrast
- WCAG AA compliant text contrast
- Dark mode support
- Sufficient contrast for all elements

## Best Practices

### Content Guidelines
- Use real customer photos when possible
- Include specific benefits and metrics
- Vary testimonial lengths for visual interest
- Update testimonials regularly

### Trust Building
- Include verification badges
- Display customer company logos
- Use recent testimonials
- Show diverse customer base

### Performance
- Optimize customer images
- Use appropriate image formats
- Lazy load images when possible
- Minimize bundle size

## Common Use Cases

1. **Landing Page Social Proof** - Featured testimonials section
2. **Product Reviews** - Detailed customer feedback
3. **Service Testimonials** - Professional endorsements
4. **B2B Credibility** - Enterprise customer logos
5. **Conversion Optimization** - Trust-building elements

## Integration Examples

### With Hero Sections
Combine with hero blocks for immediate social proof on landing pages.

### With Feature Sections
Pair testimonials with feature highlights to validate benefits.

### With Pricing Sections
Use customer quotes to support pricing and value propositions.

### With Contact Forms
Include testimonials near contact forms to build trust before conversion. 