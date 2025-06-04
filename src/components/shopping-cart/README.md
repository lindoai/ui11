# Shopping Cart Component

Complete shopping cart components with item management, quantity controls, price calculations, and checkout process for e-commerce applications with Apple-inspired design.

## Overview

The Shopping Cart component offers four main variations:
- **Items**: Cart item display with product details and management controls
- **Quantities**: Quantity adjustment controls with increase/decrease buttons
- **Totals**: Price calculation and order summary display
- **Checkout**: Checkout process with payment integration (shown in API documentation)

## Features

- 🎨 **Apple-inspired Design**: Clean, professional cart interface with elegant styling
- 🌙 **Dark Mode Support**: Seamless switching between light and dark themes
- ♿ **Accessibility**: Full ARIA support, keyboard navigation, and screen reader compatibility
- 📱 **Responsive Design**: Optimized layouts for all device sizes
- 🛒 **Real-time Updates**: Instant price calculation and quantity changes
- 💳 **Promo Codes**: Discount code application functionality
- 🔢 **Smart Calculations**: Automatic subtotal, tax, and total computation

## Usage

### Basic Cart Item
```html
<div class="flex items-center space-x-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <img src="product-image.jpg" alt="Product Name" class="w-20 h-20 object-cover rounded-lg">
  <div class="flex-1">
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Product Name</h3>
    <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-2">Product description</p>
    <p class="text-primary-500 dark:text-primary-400 font-medium">$199.99</p>
  </div>
  <div class="flex items-center space-x-3">
    <div class="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-lg">
      <button class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" aria-label="Decrease quantity">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
        </svg>
      </button>
      <span class="px-4 py-2 text-neutral-900 dark:text-neutral-100 font-medium">2</span>
      <button class="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" aria-label="Increase quantity">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </button>
    </div>
    <button class="p-2 text-neutral-400 hover:text-red-500 transition-colors" aria-label="Remove item">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
      </svg>
    </button>
  </div>
</div>
```

### Order Summary with Totals
```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Order Summary</h3>
  
  <div class="space-y-3">
    <div class="flex justify-between text-neutral-600 dark:text-neutral-400">
      <span>Subtotal (3 items)</span>
      <span>$1,299.97</span>
    </div>
    
    <div class="flex justify-between text-neutral-600 dark:text-neutral-400">
      <span>Shipping</span>
      <span class="text-green-600 dark:text-green-400">Free</span>
    </div>
    
    <div class="flex justify-between text-neutral-600 dark:text-neutral-400">
      <span>Tax</span>
      <span>$104.00</span>
    </div>
    
    <div class="border-t border-neutral-200 dark:border-neutral-700 pt-3">
      <div class="flex justify-between text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        <span>Total</span>
        <span>$1,403.97</span>
      </div>
    </div>
  </div>

  <div class="mt-6 space-y-3">
    <input type="text" placeholder="Enter promo code" class="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 focus:ring-3 focus:ring-primary-100 dark:focus:ring-primary-900/20 focus:border-primary-500 dark:focus:border-primary-400 transition-colors">
    <button class="w-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium py-3 px-4 rounded-lg transition-colors">
      Apply Code
    </button>
  </div>
</div>
```

## JavaScript API

### Cart Management
```javascript
class ShoppingCart {
  constructor() {
    this.items = [];
    this.taxRate = 0.08; // 8% tax
    this.freeShippingThreshold = 50;
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        ...product,
        quantity: quantity
      });
    }
    
    this.updateDisplay();
    this.saveToStorage();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.updateDisplay();
    this.saveToStorage();
  }

  updateQuantity(productId, newQuantity) {
    const item = this.items.find(item => item.id === productId);
    
    if (item) {
      if (newQuantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = newQuantity;
        this.updateDisplay();
        this.saveToStorage();
      }
    }
  }

  getSubtotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  getShippingCost() {
    const subtotal = this.getSubtotal();
    return subtotal >= this.freeShippingThreshold ? 0 : 9.99;
  }

  getTax() {
    return this.getSubtotal() * this.taxRate;
  }

  getTotal() {
    return this.getSubtotal() + this.getShippingCost() + this.getTax();
  }

  applyPromoCode(code) {
    // Promo code logic
    const promoCodes = {
      'SAVE10': { type: 'percentage', value: 0.10 },
      'FLAT20': { type: 'fixed', value: 20 },
      'FREESHIP': { type: 'shipping', value: 0 }
    };

    const promo = promoCodes[code.toUpperCase()];
    
    if (promo) {
      this.appliedPromo = promo;
      this.updateDisplay();
      return { success: true, message: 'Promo code applied successfully!' };
    } else {
      return { success: false, message: 'Invalid promo code' };
    }
  }

  updateDisplay() {
    // Update cart display
    this.renderCartItems();
    this.renderOrderSummary();
  }

  saveToStorage() {
    localStorage.setItem('shopping-cart', JSON.stringify(this.items));
  }

  loadFromStorage() {
    const saved = localStorage.getItem('shopping-cart');
    if (saved) {
      this.items = JSON.parse(saved);
      this.updateDisplay();
    }
  }
}
```

### Quantity Controls
```javascript
function initializeQuantityControls() {
  document.addEventListener('click', function(e) {
    if (e.target.closest('[data-action="increase"]')) {
      const productId = e.target.closest('[data-product-id]').dataset.productId;
      const currentQty = parseInt(e.target.closest('.quantity-control').querySelector('.quantity-display').textContent);
      cart.updateQuantity(productId, currentQty + 1);
    }
    
    if (e.target.closest('[data-action="decrease"]')) {
      const productId = e.target.closest('[data-product-id]').dataset.productId;
      const currentQty = parseInt(e.target.closest('.quantity-control').querySelector('.quantity-display').textContent);
      cart.updateQuantity(productId, Math.max(0, currentQty - 1));
    }
    
    if (e.target.closest('[data-action="remove"]')) {
      const productId = e.target.closest('[data-product-id]').dataset.productId;
      cart.removeItem(productId);
    }
  });
}
```

## Variations

### 1. Items (items)
- Product image display
- Product name and description
- Price display
- Quantity controls
- Remove item functionality

### 2. Quantities (quantities)
- Increase/decrease buttons
- Current quantity display
- Minimum quantity handling
- Maximum quantity limits

### 3. Totals (totals)
- Subtotal calculation
- Shipping cost display
- Tax calculation
- Grand total
- Promo code application

### 4. Checkout (API)
```html
<div class="bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
  <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-6">Checkout</h3>
  
  <!-- Payment Method Selection -->
  <div class="mb-6">
    <h4 class="font-medium text-neutral-900 dark:text-neutral-100 mb-3">Payment Method</h4>
    <div class="space-y-3">
      <label class="flex items-center">
        <input type="radio" name="payment" value="card" class="mr-3" checked>
        <span class="text-neutral-700 dark:text-neutral-300">Credit/Debit Card</span>
      </label>
      <label class="flex items-center">
        <input type="radio" name="payment" value="paypal" class="mr-3">
        <span class="text-neutral-700 dark:text-neutral-300">PayPal</span>
      </label>
    </div>
  </div>

  <!-- Shipping Address -->
  <div class="mb-6">
    <h4 class="font-medium text-neutral-900 dark:text-neutral-100 mb-3">Shipping Address</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="First Name" class="px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
      <input type="text" placeholder="Last Name" class="px-4 py-3 border border-neutral-200 dark:border-neutral-700 rounded-lg">
    </div>
  </div>

  <button class="w-full bg-primary-500 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
    Complete Order
  </button>
</div>
```

## Styling Guidelines

### Cart Item Layout
- Use `flex items-center space-x-4` for horizontal item layout
- Product images: `w-20 h-20 object-cover rounded-lg`
- Product info: `flex-1` to take remaining space
- Controls: `flex items-center space-x-3` for proper spacing

### Price Display
- Product price: `text-primary-500 dark:text-primary-400 font-medium`
- Subtotal: `text-neutral-600 dark:text-neutral-400`
- Total: `text-lg font-semibold text-neutral-900 dark:text-neutral-100`

### Interactive Elements
- Quantity buttons: `p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800`
- Remove button: `text-neutral-400 hover:text-red-500`
- Apply button: `bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200`

## State Management

### Cart State
```javascript
const cartState = {
  items: [],
  loading: false,
  error: null,
  appliedPromo: null,
  shipping: {
    method: 'standard',
    cost: 0
  }
};
```

### Local Storage
```javascript
// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem('shopping-cart', JSON.stringify({
    items: cart.items,
    appliedPromo: cart.appliedPromo,
    timestamp: Date.now()
  }));
}

// Load cart from localStorage
function loadCart() {
  const saved = localStorage.getItem('shopping-cart');
  if (saved) {
    const data = JSON.parse(saved);
    // Check if cart is not too old (e.g., 7 days)
    if (Date.now() - data.timestamp < 7 * 24 * 60 * 60 * 1000) {
      return data;
    }
  }
  return null;
}
```

## Security Considerations

### Price Validation
- Always validate prices on the server side
- Don't trust client-side calculations
- Verify promo codes server-side
- Implement rate limiting for cart updates

### Data Protection
- Encrypt sensitive cart data
- Implement CSRF protection
- Validate all user inputs
- Use secure payment processing

## Accessibility Features

- Screen reader support for cart item details and actions
- ARIA labels for quantity controls and remove buttons
- Keyboard navigation through cart interface
- Price announcements for screen readers
- High contrast focus indicators on interactive elements
- Semantic HTML structure for cart organization

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- **Button**: Action buttons and interactive controls
- **Input**: Form inputs for promo codes and checkout
- **Modal**: Checkout dialogs and confirmations
- **Loading**: Loading states during cart operations 