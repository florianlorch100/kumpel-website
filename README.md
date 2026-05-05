# Kumpel Website

A modern, static Next.js website for the Kumpel organization with automatic FTP deployment via GitHub Actions.

## Features

- **Static Export**: Built with Next.js for static HTML/CSS/JS export
- **No External Dependencies**: All fonts self-hosted locally
- **Responsive Design**: Mobile-first, works on all devices
- **Multiple Pages**: Home, Manifest, About, and Contact sections
- **Automated Deployment**: GitHub Actions → FTP push on commit to `main`
- **Smoke Testing**: Local webserver test run before FTP upload
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **SEO Ready**: Meta tags, semantic HTML, proper structure

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Edit pages** in `src/app/` and see changes instantly.

### Build & Test

1. **Build static export:**
   ```bash
   npm run build
   ```
   
   This creates an `out/` directory with all static files.

2. **Preview built site locally:**
   ```bash
   npm run serve:out
   ```
   
   Opens [http://localhost:3000](http://localhost:3000) serving from the `out/` directory.

3. **Linting:**
   ```bash
   npm run lint
   ```

4. **Format code:**
   ```bash
   npm run format
   ```

## Project Structure

```
kumpel-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles & fonts
│   │   ├── page.tsx            # Home page (/)
│   │   ├── manifest/
│   │   │   └── page.tsx        # Manifest page (/manifest)
│   │   ├── about/
│   │   │   └── page.tsx        # About page (/about)
│   │   └── contact/
│   │       └── page.tsx        # Contact page (/contact)
│   └── components/             # Reusable React components
├── public/
│   ├── fonts/                  # Self-hosted fonts
│   └── static/                 # Logo, images, manifests (from ./static)
├── package.json                # Dependencies & scripts
├── next.config.js              # Next.js config (static export)
├── tsconfig.json               # TypeScript config
├── .eslintrc.json              # ESLint config
├── .prettierrc                 # Prettier config
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Content Updates

### Update Organization Summary & Manifests

1. Open `src/app/page.tsx` (home page)
2. Replace `[TODO: ...]` placeholders with your content
3. Link to manifest files at `src/app/manifest/page.tsx`

### Update Contact Information

1. Open `src/app/contact/page.tsx`
2. Replace placeholder email, phone, address, and social media links
3. Update contact form submission endpoint if needed

### Add/Update Link Tree Items

1. Open `src/app/page.tsx` (Quick Links section)
2. Modify the link cards template with real URLs and descriptions

### Update Logo & Images

1. Replace or add images to `public/` directory
2. Reference with:
   ```tsx
   import Image from 'next/image';
   <Image src="/image-name.png" alt="Description" width={100} height={100} />
   ```

## Font Installation

Custom fonts must be self-hosted locally with no CDN dependencies.

### To Add Your Brand Fonts

1. Place font files (.woff2, .woff) in `public/fonts/`
2. Edit `src/app/globals.css` and update the `@font-face` declarations
3. Update the `body` font-family rule to use your new font names
4. Test locally with `npm run build && npm run serve:out`

See `public/fonts/README.md` for detailed instructions.

## Deployment

### Prerequisites for CI/CD

Set these GitHub Secrets in your repository settings:

- `FTP_SERVER` - FTP server hostname (e.g., `ftp.example.com`)
- `FTP_USERNAME` - FTP username
- `FTP_PASSWORD` - FTP password
- `FTP_PORT` (optional) - FTP port, defaults to 21

### Automatic Deployment

**Trigger**: Push to `main` branch
**Process**:
1. Checkout code
2. Install dependencies
3. Build static export (`npm run build`)
4. Run smoke test with local webserver
5. Deploy `out/` directory to FTP `/public_html`

### Manual Deployment

To manually trigger deployment, use GitHub Actions UI or:
```bash
gh workflow run deploy.yml --ref main
```

### FTP Deployment Details

- **Source**: `out/` directory (static export)
- **Destination**: FTP `/public_html`
- **Files only**: Source files are excluded; only exported HTML/CSS/JS is uploaded
- **Automatic overwrite**: Existing files are replaced

## Architecture Decisions

- **Next.js App Router**: Modern React routing with strong TypeScript support
- **Static Export**: No server needed; works on any static host (including FTP)
- **Tailwind CSS**: Minimal CSS output, utility-first approach
- **TypeScript**: Catch errors early, better IDE support
- **Font Display Swap**: Ensures text is visible while fonts load

## Scripts Reference

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server (hot reload) |
| `npm run build` | Build static export to `out/` |
| `npm run start` | Start production server (local testing) |
| `npm run export` | Alias for build (Next.js compatibility) |
| `npm run serve:out` | Serve `out/` directory locally for testing |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format code with Prettier |

## Environment Variables

Currently none required for development or deployment. All configuration is in `next.config.js`.

## Troubleshooting

### Fonts Not Loading

1. Check browser DevTools → Network tab
2. Verify font files exist in `public/fonts/`
3. Confirm paths in `src/app/globals.css` match actual filenames
4. Run `npm run build && npm run serve:out` to test static export

### Build Fails

1. Check TypeScript errors: `npx tsc --noEmit`
2. Check for ESLint problems: `npm run lint`
3. Clear cache: `rm -rf .next out node_modules && npm install`

### Static Export Issues

If `npm run build` fails with "export must be configured":
- Verify `output: 'export'` is in `next.config.js`
- Ensure no dynamic routes without proper `generateStaticParams`
- Check for API routes (these don't work with static export)

### FTP Upload Not Working

1. Verify FTP credentials are correct in GitHub Secrets
2. Check FTP server is reachable from GitHub Actions runner
3. Ensure `/public_html` directory exists and is writable
4. Review workflow logs in GitHub Actions for detailed errors

## Support

For issues, questions, or contributions, please contact the team at [TODO: email].

## License

[TODO: Add license information]

---

**Last Updated**: May 5, 2025
**Next Steps**: 
1. Install dependencies: `npm install`
2. Update content in `src/app/` pages with real information
3. Add brand fonts to `public/fonts/`
4. Configure GitHub Secrets for FTP deployment
5. Push to `main` branch to trigger deployment
