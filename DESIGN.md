# Loop Appliance Repair - Design System

This document centralizes the foundational design tokens extracted and defined for the Loop Appliance Repair frontend.

## Colors

| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Accent** | `#0D46F2` | Primary buttons, active states, key highlights |
| **Background** | `#FFFFFF` | Main application background (Base) |
| **Surface** | `#F2F2F0` | Cards, secondary backgrounds, input fields |
| **Text (Primary)** | `#0A0A0A` | Main body text, high-emphasis headings |
| **Secondary Text** | `#8C8C8C` | Captions, muted text, placeholders |

## Typography

### Font Families
- **Display & Headlines:** `Instrument Sans` (Weight: Bold, Style: Italic)
- **Body & UI Elements:** `Instrument Sans` (Weight: Regular/Medium)

### Reference Import
To use this font via Google Fonts, include the following in the main stylesheet or HTML head:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,700&display=swap" rel="stylesheet">
```

## CSS Variables mapped

```css
:root {
  --color-primary-accent: #0D46F2;
  --color-background: #FFFFFF;
  --color-surface: #F2F2F0;
  --color-text: #0A0A0A;
  --color-text-secondary: #8C8C8C;
  
  --font-body: 'Instrument Sans', sans-serif;
  --font-display: 'Instrument Sans', sans-serif; 
}
```
