/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./documentation/**/*.html",
    "./blocks/**/*.html"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      // Black/Gray Only Color Palette
      colors: {
        primary: {
          50: '#fafafa',   // Almost white (for dark mode backgrounds)
          100: '#f5f5f5',  // Very light gray (for dark mode backgrounds)
          200: '#e5e5e5',  // Light gray
          300: '#d4d4d4',  // Medium light gray
          400: '#a3a3a3',  // Medium gray
          500: '#000000',  // Pure black (brand color in light mode)
          600: '#171717',  // Near black
          700: '#262626',  // Almost black
          800: '#404040',  // Very dark gray
          900: '#ffffff'   // Pure white (brand color in dark mode)
        },
        neutral: {
          50: '#fafafa',   // Almost white
          100: '#f5f5f5',  // Very light gray
          200: '#e5e5e5',  // Light gray
          300: '#d4d4d4',  // Medium light gray
          400: '#a3a3a3',  // Medium gray
          500: '#737373',  // True gray
          600: '#525252',  // Dark gray
          700: '#404040',  // Very dark gray
          800: '#262626',  // Almost black
          900: '#171717',  // Near black
          950: '#0a0a0a'   // Ultra dark (for dark mode backgrounds)
        },
        success: {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Medium light green
          300: '#86efac',  // Medium green
          400: '#4ade80',  // Light success green
          500: '#22c55e',  // Success green
          600: '#16a34a',  // Darker green
          700: '#15803d',  // Dark green
          800: '#166534',  // Very dark green
          900: '#14532d'   // Ultra dark green
        },
        warning: {
          50: '#fffbeb',   // Very light amber
          100: '#fef3c7',  // Light amber
          200: '#fde68a',  // Medium light amber
          300: '#fcd34d',  // Medium amber
          400: '#fbbf24',  // Light warning amber
          500: '#f59e0b',  // Warning amber
          600: '#d97706',  // Darker amber
          700: '#b45309',  // Dark amber
          800: '#92400e',  // Very dark amber
          900: '#78350f'   // Ultra dark amber
        },
        error: {
          50: '#fef2f2',   // Very light red
          100: '#fee2e2',  // Light red
          200: '#fecaca',  // Medium light red
          300: '#fca5a5',  // Medium red
          400: '#f87171',  // Light error red
          500: '#ef4444',  // Error red
          600: '#dc2626',  // Darker red
          700: '#b91c1c',  // Dark red
          800: '#991b1b',  // Very dark red
          900: '#7f1d1d'   // Ultra dark red
        },
        blue: {
          50: '#eff6ff',   // Very light blue
          100: '#dbeafe',  // Light blue
          200: '#bfdbfe',  // Medium light blue
          300: '#93c5fd',  // Medium blue
          400: '#60a5fa',  // Light info blue
          500: '#3b82f6',  // Info blue
          600: '#2563eb',  // Darker blue
          700: '#1d4ed8',  // Dark blue
          800: '#1e40af',  // Very dark blue
          900: '#1e3a8a'   // Ultra dark blue
        },
        green: {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Medium light green
          300: '#86efac',  // Medium green
          400: '#4ade80',  // Light success green
          500: '#22c55e',  // Success green
          600: '#16a34a',  // Darker green
          700: '#15803d',  // Dark green
          800: '#166534',  // Very dark green
          900: '#14532d'   // Ultra dark green
        },
        red: {
          50: '#fef2f2',   // Very light red
          100: '#fee2e2',  // Light red
          200: '#fecaca',  // Medium light red
          300: '#fca5a5',  // Medium red
          400: '#f87171',  // Light error red
          500: '#ef4444',  // Error red
          600: '#dc2626',  // Darker red
          700: '#b91c1c',  // Dark red
          800: '#991b1b',  // Very dark red
          900: '#7f1d1d'   // Ultra dark red
        },
        purple: {
          50: '#faf5ff',   // Very light purple
          100: '#f3e8ff',  // Light purple
          200: '#e9d5ff',  // Medium light purple
          300: '#d8b4fe',  // Medium purple
          400: '#c084fc',  // Light purple
          500: '#a855f7',  // Purple
          600: '#9333ea',  // Darker purple
          700: '#7c3aed',  // Dark purple
          800: '#6b21a8',  // Very dark purple
          900: '#581c87'   // Ultra dark purple
        },
        pink: {
          50: '#fdf2f8',   // Very light pink
          100: '#fce7f3',  // Light pink
          200: '#fbcfe8',  // Medium light pink
          300: '#f9a8d4',  // Medium pink
          400: '#f472b6',  // Light pink
          500: '#ec4899',  // Pink
          600: '#db2777',  // Darker pink
          700: '#be185d',  // Dark pink
          800: '#9d174d',  // Very dark pink
          900: '#831843'   // Ultra dark pink
        }
      },
      
      // Apple System Fonts and Typography Scale
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      fontSize: {
        // Display Text - Hero Headlines
        '7xl': ['60px', { lineHeight: '1.1', fontWeight: '600' }], // Large hero
        '6xl': ['48px', { lineHeight: '1.1', fontWeight: '600' }], // Medium hero
        '5xl': ['36px', { lineHeight: '1.1', fontWeight: '600' }], // Small hero
        
        // Heading Text - Section Titles
        '4xl': ['30px', { lineHeight: '1.2', fontWeight: '600' }], // Large heading
        '3xl': ['24px', { lineHeight: '1.3', fontWeight: '600' }], // Medium heading
        '2xl': ['20px', { lineHeight: '1.4', fontWeight: '600' }], // Small heading
        
        // Body Text - Content
        'lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],  // Large body
        'base': ['16px', { lineHeight: '1.6', fontWeight: '400' }], // Regular body
        'sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],   // Small body
        'xs': ['12px', { lineHeight: '1.4', fontWeight: '500' }]    // Caption/label
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600'
      },
      
      // Apple-like Generous Spacing
      spacing: {
        '18': '72px',  // Custom spacing
        '22': '88px',  // Custom spacing
        '26': '104px', // Custom spacing
        '30': '120px'  // Custom spacing
      },
      
      // Sophisticated Apple-like Shadows
      boxShadow: {
        'apple-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'apple-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'apple-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'apple-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'apple-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'apple-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)'
      },
      
      // Smooth Natural Motion
      transitionDuration: {
        'fast': '150ms',    // Quick interactions
        'normal': '200ms',  // Standard transitions
        'slow': '300ms'     // Deliberate animations
      },
      transitionTimingFunction: {
        'apple-out': 'cubic-bezier(0.16, 1, 0.3, 1)',           // Standard ease out
        'apple-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',         // Smooth both ways
        'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // Gentle bounce
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px'
      },
      
      // Transform scales for interactive states
      scale: {
        '98': '0.98'  // For active:scale-98
      },
      
      // Animation keyframes
      keyframes: {
        'toast-slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'toast-slide-out': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        }
      },
      animation: {
        'toast-in': 'toast-slide-in 0.3s ease-apple-out',
        'toast-out': 'toast-slide-out 0.3s ease-apple-out'
      }
    },
  },
  plugins: [],
}

