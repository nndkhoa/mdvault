# Design: MDVault MVP Architecture

## Context

MDVault is a static site generator focused on converting markdown files to beautiful web pages with zero configuration. The MVP must prove the core value proposition while maintaining simplicity and performance.

**Key Constraints:**
- Static-only (no backend/server required)
- GitHub Pages deployment (base path handling)
- Build time < 10 seconds for typical content
- Bundle size < 120KB initial load
- Works on modern browsers (no IE11)

**Stakeholders:**
- Developers publishing documentation
- Technical writers creating content
- Open source maintainers hosting project docs

## Goals / Non-Goals

**Goals:**
- Zero-configuration file-based routing
- Beautiful claymorphism UI that works out of the box
- Rich markdown rendering (GFM, math, code highlighting)
- Auto-generated navigation (TOC, breadcrumbs, titles)
- Fast builds and page loads
- Successful GitHub Pages deployment

**Non-Goals (deferred to future iterations):**
- Diagram rendering (Mermaid/PlantUML)
- Full-text search
- Multiple theme variants (only light/dark for MVP)
- Git-based metadata (last modified dates)
- Advanced markdown plugins (footnotes, task lists)
- Custom domain configuration helpers

## Decisions

### Decision 1: Astro as Static Site Generator

**Choice:** Astro with static output mode

**Rationale:**
- File-based routing built-in (pages/ directory)
- Minimal JavaScript by default (perfect for static sites)
- Component islands for interactive features (theme switcher)
- Excellent Vite integration for fast builds
- Strong markdown support with frontmatter

**Alternatives Considered:**
- Next.js SSG: Too heavy, React overhead unnecessary
- 11ty: Less modern tooling, harder TypeScript integration
- Custom Vite setup: Reinventing routing, more maintenance

**Trade-offs:**
- Learning curve for Astro-specific syntax
- Smaller ecosystem than Next.js
- Acceptable for simpler, focused use case

### Decision 2: Markdown-it for Parsing

**Choice:** markdown-it with plugin ecosystem

**Rationale:**
- Battle-tested GFM support
- Rich plugin ecosystem (katex, anchor, etc.)
- Synchronous API (simpler builds)
- Smaller bundle than alternatives

**Alternatives Considered:**
- Remark: Async API complicates build process
- Marked: Less extensible plugin system
- Native Astro markdown: Limited customization

### Decision 3: Tailwind 4 + Claymorphism Design System

**Choice:** Tailwind CSS 4 with custom claymorphism utilities

**Rationale:**
- Utility-first matches rapid prototyping needs
- CSS-in-JS avoided (better performance)
- Easy theming via CSS custom properties
- Tailwind 4 has improved performance
- Claymorphism requires custom shadow/gradient utilities

**Implementation:**
```css
/* Custom claymorphism utilities */
.clay-card {
  background: var(--clay-bg);
  box-shadow: 
    8px 8px 16px var(--clay-shadow-dark),
    -8px -8px 16px var(--clay-shadow-light);
  border-radius: 16px;
  border: 1px solid var(--clay-border);
}

.clay-inset {
  box-shadow: 
    inset 4px 4px 8px var(--clay-shadow-dark),
    inset -4px -4px 8px var(--clay-shadow-light);
}
```

**Alternatives Considered:**
- Vanilla CSS: Too verbose for rapid development
- Styled-components: Adds runtime overhead
- CSS modules: Less flexible for theming

### Decision 4: File-based Routing Pattern

**Choice:** Dynamic catch-all route with content directory mapping

**Pattern:**
```
public/content/blog/post.md → /blog/post
public/content/docs/api/intro.md → /docs/api/intro
```

**Implementation:**
- Astro dynamic route: `pages/[...slug].astro`
- Read from `public/content/${slug}.md`
- Extract frontmatter and metadata
- Render with layout

**Rationale:**
- Single route file handles all markdown pages
- No build-time page generation complexity
- Users just add markdown files
- Clean URLs without configuration

**Alternatives Considered:**
- Build-time page generation: More complex, unnecessary
- Hash-based routing: Ugly URLs, poor SEO
- Server-side routing: Not available on GitHub Pages

### Decision 5: Table of Contents Auto-generation

**Choice:** Build-time TOC generation from markdown headings

**Implementation:**
```typescript
// Extract headings during markdown parsing
md.use(markdownItAnchor, {
  permalink: true,
  permalinkSymbol: '#'
});

// Generate TOC structure
function generateTOC(headings: Heading[]): TOCTree {
  // Build nested tree from H2-H6
  // H1 is page title, excluded from TOC
}
```

**Rationale:**
- No manual TOC maintenance
- Consistent navigation structure
- Anchor links work automatically
- markdown-it-anchor handles IDs

**Alternatives Considered:**
- Manual TOC in frontmatter: Error-prone, tedious
- Client-side TOC: Slower, layout shift
- No TOC: Poor UX for long documents

### Decision 6: Theme Implementation

**Choice:** CSS custom properties with localStorage persistence

**Implementation:**
```javascript
// Theme switching
function setTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('mdvault-theme', theme);
}

// Load saved theme
const saved = localStorage.getItem('mdvault-theme') || 'light';
setTheme(saved);
```

**CSS Variables:**
```css
:root[data-theme="light"] {
  --clay-bg: #f0f0f3;
  --clay-shadow-dark: rgba(163, 177, 198, 0.6);
  --clay-shadow-light: rgba(255, 255, 255, 0.5);
  --text-primary: #2c3e50;
}

:root[data-theme="dark"] {
  --clay-bg: #1a1a2e;
  --clay-shadow-dark: rgba(0, 0, 0, 0.4);
  --clay-shadow-light: rgba(255, 255, 255, 0.05);
  --text-primary: #eaeaea;
}
```

**Rationale:**
- No JavaScript required for initial render
- Instant theme switching (no page reload)
- Easy to extend with more themes later
- Respects user preference

**Alternatives Considered:**
- Class-based theming: Less flexible
- Tailwind dark mode: Limited claymorphism support
- Multiple CSS files: Performance overhead

## Architecture Overview

```
┌─────────────────────────────────────────┐
│         User adds markdown file         │
│      public/content/blog/post.md        │
└───────────────┬─────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────┐
│       Astro Build Process (SSG)         │
├─────────────────────────────────────────┤
│ 1. Find all markdown files              │
│ 2. Parse with markdown-it               │
│ 3. Extract title (H1)                   │
│ 4. Generate TOC (H2-H6)                 │
│ 5. Generate breadcrumbs from path       │
│ 6. Render with layout                   │
│ 7. Apply claymorphism styles            │
└───────────────┬─────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────┐
│         Static HTML Output              │
│           /dist/blog/post/              │
│              index.html                 │
└───────────────┬─────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────┐
│       GitHub Pages Deployment           │
│  https://user.github.io/mdvault/blog/post │
└─────────────────────────────────────────┘
```

### Component Hierarchy

```
Layout.astro
├── Header.astro
│   └── ThemeSwitcher.astro (client:load)
├── Breadcrumbs.astro
├── ContentWrapper.astro
│   ├── TableOfContents.astro
│   └── MarkdownContent.astro
│       └── [rendered HTML]
└── Footer.astro
```

### File Structure

```
mdvault-app/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   └── [...slug].astro          # Dynamic route for all markdown
│   ├── layouts/
│   │   └── MarkdownLayout.astro     # Main layout wrapper
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── TableOfContents.astro
│   │   └── ThemeSwitcher.astro
│   ├── lib/
│   │   ├── markdown.ts              # markdown-it configuration
│   │   ├── toc.ts                   # TOC generation utilities
│   │   └── content.ts               # Content loading helpers
│   └── styles/
│       ├── global.css               # Base styles
│       └── claymorphism.css         # Custom clay utilities
├── public/
│   └── content/
│       ├── index.md                 # Homepage content
│       └── [user markdown files]
├── astro.config.mjs                 # Astro configuration
├── tailwind.config.mjs              # Tailwind configuration
└── package.json
```

## Risks / Trade-offs

### Risk 1: GitHub Pages Base Path Handling

**Risk:** Users might struggle with base path configuration for project pages

**Mitigation:**
- Provide clear documentation with examples
- Auto-detect from repository name in package.json
- Include both project and user page examples
- Vite config handles base path automatically

### Risk 2: Bundle Size from Dependencies

**Risk:** markdown-it + plugins + highlight.js could exceed 120KB target

**Mitigation:**
- Use tree-shaking (Vite handles automatically)
- Lazy load highlight.js language definitions
- Minify all assets in production
- Monitor bundle size in build output

**Measured:**
- markdown-it: ~25KB gzipped
- highlight.js (core + 5 languages): ~20KB
- KaTeX: ~30KB
- Remaining budget: ~45KB for app code

### Risk 3: Content Loading Performance

**Risk:** Large markdown files could slow page loads

**Mitigation:**
- Static generation pre-renders everything
- No runtime markdown parsing
- Optimize images with Astro image integration (future)
- Recommend content chunking in docs

### Risk 4: Theme Flash (FOUC)

**Risk:** Wrong theme might flash before JavaScript loads

**Mitigation:**
- Inline theme detection script in <head>
- Load from localStorage before render
- CSS custom properties work without JS
- Minimal hydration delay with Astro islands

**Implementation:**
```html
<script is:inline>
  const theme = localStorage.getItem('mdvault-theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
</script>
```

## Migration Plan

**N/A** - This is the initial MVP, no migration required.

**Future migrations:**
- v1 → v2: If routing changes, provide migration script
- Content format: Always backwards compatible markdown

## Performance Budget

| Metric | Target | Measurement |
|--------|--------|-------------|
| Initial JS bundle | < 80KB gzipped | Vite build output |
| Initial CSS | < 20KB gzipped | Vite build output |
| Total first load | < 120KB | Lighthouse |
| First Contentful Paint | < 1s | Lighthouse |
| Time to Interactive | < 2s | Lighthouse |
| Lighthouse Score | > 90 | CI check |
| Build time (50 pages) | < 10s | Local timer |

## Open Questions

1. **Code highlighting theme:** Should we match document theme or use separate syntax theme?
   - **Proposal:** Match document theme (light code theme for light mode, dark for dark mode)
   - **Rationale:** Visual consistency, better readability

2. **404 handling:** How to handle missing markdown files gracefully?
   - **Proposal:** Custom 404.astro page with helpful navigation
   - **Rationale:** Better UX than default GitHub Pages 404

3. **Image handling:** Should images be in content/ or public/?
   - **Proposal:** `public/content/assets/` for content images
   - **Rationale:** Co-located with markdown, easy relative paths

4. **Homepage behavior:** Should homepage be special or just render index.md?
   - **Proposal:** Dedicated `pages/index.astro` that can render `content/index.md` with custom layout
   - **Rationale:** Flexibility for homepage design without breaking content pattern

## Success Criteria

MVP is complete when:

- [ ] User can add `public/content/blog/post.md` and access `/blog/post`
- [ ] Page title extracts from first H1 automatically
- [ ] TOC generates from H2-H6 headings
- [ ] Breadcrumbs show correct navigation path
- [ ] Code blocks have syntax highlighting
- [ ] Math equations render with KaTeX
- [ ] Theme switcher toggles between light/dark
- [ ] Theme preference persists across page loads
- [ ] Site builds successfully with `npm run build`
- [ ] GitHub Actions deploys to GitHub Pages
- [ ] Lighthouse score > 90 on all metrics
- [ ] Mobile responsive (320px+ viewports)
- [ ] Keyboard navigation works for all interactive elements
