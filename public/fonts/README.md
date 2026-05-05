# Font Installation Guide

## Current Fonts

This directory contains self-hosted font files for the Kumpel website. All fonts are loaded locally to ensure:
- No external CDN dependencies
- Faster page load times
- Privacy compliance
- Full control over typography

## Font Swap Instructions

When you receive your brand font files, follow these steps:

### 1. Add Font Files
1. Place your font files (.woff2, .woff, .ttf) in this directory
2. Recommended format: `[FontName]-[Weight].woff2`
   - Example: `KumpelSans-400.woff2`, `KumpelSans-700.woff2`

### 2. Update Font Declaration
Edit `src/app/globals.css` and replace the placeholder `@font-face` rule with your fonts:

```css
@font-face {
  font-family: 'KumpelSans';
  src: url('/fonts/KumpelSans-400.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'KumpelSans';
  src: url('/fonts/KumpelSans-700.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### 3. Update Font Family Reference
In `src/app/globals.css`, update the body font-family and any other selectors:

```css
body {
  font-family: 'KumpelSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### 4. Test Locally
```bash
npm run build
npm run serve:out
```

Visit `http://localhost:3000` and verify fonts are loading correctly.

### 5. Verify Font Loading
- Open DevTools → Network tab
- Look for `/fonts/[FontName].[extension]` requests
- They should return 200 status, not 404

## Current Placeholder

The website currently uses a placeholder configuration. Once you add final fonts, it will automatically use them instead.

## Font Format Recommendations

- **Primary format**: `.woff2` (best compression, modern browser support)
- **Fallback**: `.woff` (for older browsers)
- **Sizes**: Usually 300, 400, 500, 600, 700, 800 weights

## Performance Tips

1. Use `font-display: swap` to ensure text is visible during font load
2. Minimize font variants (use only weights you actually need)
3. Consider subsetting fonts if they're very large
4. Test with `npm run build` to ensure fonts are included in static export

## Questions?

Refer to `README.md` in the project root for more information.
