# Project Context

## Purpose

**MDVault** is a beautiful, zero-config markdown viewer for GitHub Pages that transforms markdown files into a fully-featured documentation site with auto-routing, table of contents, and rich rendering capabilities.

**Key Goals:**
- Zero configuration file-based routing (markdown files → clean URLs)
- Beautiful, accessible UI with multiple theme options
- Rich markdown features (LaTeX math, diagrams, syntax highlighting)
- Static site deployment via GitHub Pages
- Auto-generated navigation (TOC, breadcrumbs, titles)

**Target Users:** Developers, technical writers, and content creators who want to publish markdown documentation without complex setup.

## Tech Stack

### Core Framework
- **Astro** - Static site generator with file-based routing
- **Vite 7.3** - Build tool and dev server

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Claymorphism UI Design** - Modern, tactile design style with soft shadows and glass effects
- **GitHub Markdown CSS** - Base markdown styles

### Markdown Processing
- **markdown-it@^14.1.0** - Core markdown parser (GFM support)
- **markdown-it-katex@^2.0.3** - LaTeX math rendering
- **markdown-it-footnote@^4.0.0** - Footnote support
- **markdown-it-task-lists@^2.1.1** - Interactive task lists
- **markdown-it-anchor@^9.2.0** - Heading anchors for TOC generation
- **KaTeX@^0.16.11** - Math typesetting library

### Syntax & Diagrams
- **Highlight.js@^11.10.0** - Code syntax highlighting (100+ languages)
- **Mermaid@^11.4.1** - Flowcharts, sequence diagrams, etc.
- **plantuml-encoder@^1.4.0** - PlantUML diagram encoding (external rendering)

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline

## Project Conventions

### Code Style
- **Language:** TypeScript/JavaScript (ES modules)
- **Framework:** Astro components (.astro files)
- **Styling:** Tailwind utility classes with claymorphism design tokens
- **Formatting:** 
  - 2-space indentation
  - Single quotes for strings
  - Trailing commas in multiline objects/arrays
- **Naming:**
  - Components: PascalCase (e.g., `MarkdownViewer.astro`)
  - Utils/libs: camelCase (e.g., `generateTOC.js`)
  - CSS classes: Tailwind utilities + custom claymorphism classes
  - Files: kebab-case for markdown content (e.g., `getting-started.md`)

### Architecture Patterns

#### File-based Routing
- Markdown files in `public/content/` map directly to URLs
- `index.md` serves as directory index
- No `.md` extension in URLs
- Examples:
  - `/content/blog/post.md` → `/blog/post`
  - `/content/docs/api/intro.md` → `/docs/api/intro`

#### Auto-extraction Pattern
- **Page titles:** Extract from first H1 in markdown
- **TOC:** Generate from H2-H6 headings
- **Breadcrumbs:** Build from URL path structure
- **Metadata:** Optional git-based last modified dates

#### Component Architecture
- **Astro Islands:** Use for interactive components (theme switcher, TOC)
- **Client-side hydration:** Minimal - only for interactivity
- **Static-first:** Pre-render everything possible at build time

#### Claymorphism Design System
- **Soft shadows:** Layered box-shadows for depth
- **Rounded corners:** Generous border-radius values
- **Subtle gradients:** Background gradients for dimension
- **Glass effects:** Backdrop blur for overlays
- **Tactile feel:** Button states with shadow transitions
- **Color palette:** CSS custom properties for theming

### Testing Strategy
- **Build verification:** Ensure clean builds with no errors
- **Link checking:** Verify internal links resolve correctly
- **Visual regression:** Manual review of theme variations
- **Accessibility:** WCAG 2.1 AA compliance testing
- **Browser testing:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Responsive testing:** Mobile (320px+), tablet, desktop breakpoints

### Git Workflow
- **Main branch:** Production-ready code
- **Direct commits:** Small content changes to `public/content/`
- **Feature branches:** For new features or significant changes
- **Commit conventions:**
  - `feat: Add X feature`
  - `fix: Resolve Y issue`
  - `docs: Update documentation`
  - `style: UI/theme improvements`
  - `refactor: Code restructuring`
- **Auto-deployment:** Push to main triggers GitHub Actions build

## Domain Context

### Markdown Rendering Pipeline
1. **Parse:** markdown-it converts .md to HTML
2. **Enhance:** Apply plugins (math, diagrams, anchors)
3. **Extract:** Pull title (H1), generate TOC (H2-H6)
4. **Render:** Insert into Astro layout with navigation
5. **Style:** Apply github-markdown-css + claymorphism theme

### Content Structure Philosophy
- **Hierarchy:** Use directory structure for content organization
- **H1 = Title:** First H1 becomes page title (only one per page)
- **H2-H6 = TOC:** All other headings build the table of contents
- **Index files:** Use `index.md` for category landing pages

### Theme System
- **CSS Variables:** All colors/spacing defined as custom properties
- **Theme variants:** Light, dark, sepia, high-contrast
- **LocalStorage:** User preference persists across sessions
- **System preference:** Respect `prefers-color-scheme`

### Diagram Rendering
- **Mermaid:** Client-side rendering via JavaScript
- **PlantUML:** Server-side rendering via plantuml.com API
- **Lazy loading:** Only load renderers when diagram blocks detected
- **Performance:** Use Intersection Observer for viewport-based rendering

## Important Constraints

### Static Site Requirements
- **No backend:** Everything must work as static files
- **Client-side routing:** Hash-based or rely on GitHub Pages 404 fallback
- **Build time only:** No server-side rendering at runtime
- **Asset hosting:** All assets served from GitHub Pages CDN

### GitHub Pages Limitations
- **Base path:** Must configure for project pages (`/mdvault/` or custom domain)
- **HTTPS only:** All external resources must use HTTPS
- **File size:** Individual files < 100MB, total repo < 1GB recommended
- **Build time:** Keep under 10 minutes for Actions

### Browser Support
- **Modern browsers only:** ES2020+ JavaScript features
- **No IE11:** Use modern CSS (Grid, Custom Properties, etc.)
- **Progressive enhancement:** Core content works without JavaScript
- **Graceful degradation:** Diagrams show source code if rendering fails

### Performance Targets
- **Bundle size:** Initial JS < 80KB gzipped
- **First paint:** < 1 second
- **Time to interactive:** < 2 seconds
- **Lighthouse score:** > 90 on all metrics

### Accessibility Requirements
- **WCAG 2.1 AA:** Full compliance mandatory
- **Keyboard navigation:** All interactive elements accessible
- **Screen readers:** Semantic HTML with ARIA labels
- **Color contrast:** Minimum 4.5:1 for text
- **Focus indicators:** Clear :focus-visible styles

## External Dependencies

### Required Services
- **GitHub Pages:** Static hosting platform
- **GitHub Actions:** CI/CD for automated builds and deployments
- **plantuml.com:** External API for PlantUML diagram rendering
  - Endpoint: `https://www.plantuml.com/plantuml/png/{encoded}`
  - Fallback: Show source code if service unavailable

### CDN Resources
- **KaTeX fonts:** Math rendering typography
- **Highlight.js themes:** Code syntax highlighting styles
- **GitHub Markdown CSS:** Base typography and styles

### Build-time Dependencies
- **Node.js:** v20+ for development and builds
- **npm:** Package management
- **Vite:** Dev server and production bundler

### Optional Integrations
- **Git history:** For last modified dates (build-time only)
- **Analytics:** Can add via GitHub Pages settings
- **Custom domains:** Supported via GitHub Pages configuration

## UI/UX Guidelines

### Claymorphism Design Principles
- **Soft, extruded elements:** Cards and components appear to rise from the background
- **Multiple shadow layers:** Use 2-3 shadow layers for depth
- **Subtle borders:** Light borders to define edges
- **Rounded everything:** Buttons, cards, inputs, code blocks
- **Pastel color palette:** Soft, muted colors with good contrast
- **Smooth transitions:** Animate shadows and transforms on interaction
- **Glass overlays:** Modal dialogs and dropdowns use backdrop-blur

### Component Design Patterns
- **Cards:** Main content container with soft shadows
- **Buttons:** Pressed/unpressed shadow states
- **Code blocks:** Inset appearance with subtle border
- **TOC sidebar:** Floating panel with glass effect
- **Theme toggle:** Morphing icon with shadow animation
- **Breadcrumbs:** Flat with separator elements

### Responsive Behavior
- **Desktop (>1024px):** Side-by-side TOC + content
- **Tablet (768-1024px):** Collapsible TOC drawer
- **Mobile (<768px):** TOC in dropdown menu, full-width content
- **Touch targets:** Minimum 44x44px for mobile interactions

### Animation Guidelines
- **Duration:** 150-300ms for micro-interactions
- **Easing:** cubic-bezier(0.4, 0.0, 0.2, 1) for smooth feel
- **Transform:** Use for performance (translate, scale)
- **Avoid:** Layout shifts, jarring animations
- **Respect:** `prefers-reduced-motion` media query
