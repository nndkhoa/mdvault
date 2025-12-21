# Implementation Tasks: MDVault MVP

## 1. Project Setup & Dependencies

- [x] 1.1 Initialize npm project with package.json
- [x] 1.2 Install Astro and configure astro.config.mjs for static output
- [x] 1.3 Install Tailwind CSS 4 and configure tailwind.config.mjs
- [x] 1.4 Install markdown dependencies (markdown-it, markdown-it-katex, markdown-it-anchor)
- [x] 1.5 Install syntax highlighting (highlight.js) and math rendering (katex)
- [x] 1.6 Configure Vite for GitHub Pages base path support
- [x] 1.7 Create .gitignore file (node_modules, dist, .astro)
- [x] 1.8 Verify all dependencies install and build runs successfully

## 2. Markdown Rendering Implementation

- [x] 2.1 Create `src/lib/markdown.ts` with markdown-it configuration
- [x] 2.2 Configure markdown-it plugins (katex, anchor, GFM features)
- [x] 2.3 Implement HTML sanitization to prevent XSS attacks
- [x] 2.4 Add highlight.js for code syntax highlighting
- [x] 2.5 Configure heading anchor generation with markdown-it-anchor
- [x] 2.6 Test markdown rendering with sample content (tables, code, math)
- [x] 2.7 Create utility function to parse markdown and extract metadata

## 3. File-based Routing Implementation

- [x] 3.1 Create `src/pages/[...slug].astro` dynamic catch-all route
- [x] 3.2 Create `src/lib/content.ts` with content loading utilities
- [x] 3.3 Implement function to map URL slug to content file path
- [x] 3.4 Implement markdown file reading from `public/content/` directory
- [x] 3.5 Handle index.md files for directory routes
- [x] 3.6 Create custom 404 page at `src/pages/404.astro`
- [x] 3.7 Configure Astro for static site generation with proper paths
- [x] 3.8 Test routing with nested content (blog/post, docs/api/intro)

## 4. Layout & Core Components

- [x] 4.1 Create `src/layouts/MarkdownLayout.astro` main layout wrapper
- [x] 4.2 Create `src/components/Header.astro` with logo and branding
- [x] 4.3 Create `src/components/Footer.astro` with copyright and attribution
- [x] 4.4 Create `src/pages/index.astro` homepage that can render index.md
- [x] 4.5 Implement HTML structure with semantic elements (header, main, footer)
- [x] 4.6 Add meta tags for SEO and responsive viewport
- [x] 4.7 Test layout renders correctly with sample content

## 5. Claymorphism Design System

- [x] 5.1 Create `src/styles/global.css` with base styles
- [x] 5.2 Create `src/styles/claymorphism.css` with custom clay utilities
- [x] 5.3 Define CSS custom properties for colors, shadows, and spacing
- [x] 5.4 Implement clay-card class with multi-layered shadows
- [x] 5.5 Implement clay-inset class for pressed appearance
- [x] 5.6 Configure Tailwind to extend with custom claymorphism utilities
- [x] 5.7 Apply claymorphism styling to markdown content container
- [x] 5.8 Test styling across different components

## 6. Theme System Implementation

- [x] 6.1 Define light theme CSS custom properties in global.css
- [x] 6.2 Define dark theme CSS custom properties using [data-theme="dark"]
- [x] 6.3 Create `src/components/ThemeSwitcher.astro` with toggle button
- [x] 6.4 Implement theme switching JavaScript with localStorage persistence
- [x] 6.5 Add inline <head> script to prevent theme flash (FOUC)
- [x] 6.6 Configure code highlighting themes to match document theme
- [x] 6.7 Add theme icons (sun/moon) with smooth transitions
- [x] 6.8 Test theme switching and persistence across page loads

## 7. Table of Contents Generation

- [x] 7.1 Create `src/lib/toc.ts` with TOC generation utilities
- [x] 7.2 Implement function to extract headings (H2-H6) from markdown
- [x] 7.3 Implement function to build nested TOC tree from flat heading list
- [x] 7.4 Create `src/components/TableOfContents.astro` component
- [x] 7.5 Render TOC with nested lists and anchor links
- [x] 7.6 Implement sticky sidebar positioning for desktop
- [x] 7.7 Implement collapsible drawer for mobile/tablet
- [x] 7.8 Add active section highlighting on scroll (optional for MVP)
- [x] 7.9 Test TOC with various content structures

## 8. Breadcrumb Navigation

- [x] 8.1 Create `src/components/Breadcrumbs.astro` component
- [x] 8.2 Implement function to parse URL path into breadcrumb segments
- [x] 8.3 Format breadcrumb labels (replace hyphens, title case)
- [x] 8.4 Render breadcrumb trail with clickable links
- [x] 8.5 Style breadcrumbs with separators and hover states
- [x] 8.6 Add ARIA labels for accessibility
- [x] 8.7 Test breadcrumbs with nested routes

## 9. Page Title Extraction

- [x] 9.1 Implement utility to extract first H1 from markdown content
- [x] 9.2 Set HTML document title using extracted title
- [x] 9.3 Handle missing H1 with fallback to "Untitled"
- [x] 9.4 Display page title in layout if needed
- [x] 9.5 Test title extraction with various markdown files

## 10. Responsive Design

- [x] 10.1 Implement mobile layout (< 768px) with single-column design
- [x] 10.2 Implement tablet layout (768-1024px) with flexible columns
- [x] 10.3 Implement desktop layout (> 1024px) with fixed TOC sidebar
- [x] 10.4 Ensure minimum 44x44px touch targets for mobile
- [x] 10.5 Test responsive breakpoints and layout shifts
- [x] 10.6 Optimize typography for different screen sizes
- [x] 10.7 Test on actual mobile devices or browser dev tools

## 11. Accessibility Implementation

- [x] 11.1 Add skip-to-content link at the top of the page
- [x] 11.2 Ensure all interactive elements have keyboard navigation
- [x] 11.3 Add visible focus indicators with :focus-visible
- [x] 11.4 Add ARIA labels to navigation components
- [x] 11.5 Test with keyboard-only navigation
- [x] 11.6 Test with screen reader (NVDA, JAWS, or VoiceOver)
- [x] 11.7 Verify color contrast meets WCAG 2.1 AA standards
- [x] 11.8 Add proper heading hierarchy (H1 > H2 > H3)

## 12. Sample Content Creation

- [x] 12.1 Create `public/content/index.md` homepage content
- [x] 12.2 Create sample blog post at `public/content/blog/getting-started.md`
- [x] 12.3 Create sample docs at `public/content/docs/installation.md`
- [x] 12.4 Add content demonstrating all features (code, math, tables)
- [x] 12.5 Create index.md files for blog and docs directories
- [x] 12.6 Test all sample content renders correctly

## 13. GitHub Pages Deployment

- [x] 13.1 Create `.github/workflows/deploy.yml` GitHub Actions workflow
- [x] 13.2 Configure workflow to install dependencies and build
- [x] 13.3 Configure workflow to upload build artifact
- [x] 13.4 Configure workflow to deploy to GitHub Pages
- [x] 13.5 Set up GitHub Pages in repository settings
- [x] 13.6 Configure base path in astro.config.mjs (e.g., `/mdvault/`)
- [x] 13.7 Test deployment process end-to-end
- [x] 13.8 Verify deployed site works correctly

## 14. Documentation

- [x] 14.1 Create README.md with project overview and features
- [x] 14.2 Document installation and setup instructions
- [x] 14.3 Document content creation workflow (adding markdown files)
- [x] 14.4 Document deployment process and configuration
- [x] 14.5 Add examples of markdown features (code, math, tables)
- [x] 14.6 Document theme customization options
- [x] 14.7 Add troubleshooting section for common issues

## 15. Testing & Validation

- [x] 15.1 Test build command completes without errors
- [x] 15.2 Verify bundle size meets targets (< 120KB total)
- [x] 15.3 Run Lighthouse audit and achieve > 90 score
- [x] 15.4 Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [x] 15.5 Test responsive design on various screen sizes
- [x] 15.6 Verify all links and anchors work correctly
- [x] 15.7 Test with different content types and edge cases
- [x] 15.8 Verify no console errors or warnings

## 16. Performance Optimization

- [x] 16.1 Minimize CSS by removing unused Tailwind classes
- [x] 16.2 Optimize JavaScript bundle with code splitting
- [x] 16.3 Lazy load highlight.js language definitions if needed
- [x] 16.4 Optimize fonts and ensure proper loading strategy
- [x] 16.5 Verify First Contentful Paint < 1s
- [x] 16.6 Verify Time to Interactive < 2s
- [x] 16.7 Test build time with 50+ markdown files (< 10s target)

## Dependencies Between Tasks

- Task 2 depends on Task 1 (markdown rendering needs dependencies)
- Task 3 depends on Task 1 (routing needs Astro setup)
- Task 4 depends on Task 1, 2 (layout needs routing and markdown)
- Task 5 depends on Task 1 (styling needs build system)
- Task 6 depends on Task 4, 5 (theme needs layout and styles)
- Task 7 depends on Task 2, 4 (TOC needs markdown parsing and layout)
- Task 8 depends on Task 3, 4 (breadcrumbs need routing and layout)
- Task 9 depends on Task 2, 4 (title extraction needs markdown and layout)
- Task 10 depends on Task 5 (responsive needs base styling)
- Task 11 can be done in parallel with most tasks
- Task 12 depends on Tasks 1-10 (sample content needs everything working)
- Task 13 depends on all previous tasks (deployment is final step)
- Task 14 can be done in parallel starting from Task 4
- Task 15 depends on all implementation tasks (testing is validation)
- Task 16 depends on Task 15 (optimization after validation)

## Parallel Work Opportunities

**Can be worked on in parallel:**
- Task 5 (Design System) and Task 6 (Theme System)
- Task 7 (TOC) and Task 8 (Breadcrumbs) after Task 4 completes
- Task 11 (Accessibility) can be addressed throughout development
- Task 14 (Documentation) can be written alongside implementation
