# Change: Build MDVault MVP Foundation

## Why

MDVault needs a working MVP that demonstrates core functionality: converting markdown files to a beautiful, navigable static site with zero configuration. This establishes the foundation for all future features and validates the core value proposition of "beautiful markdown viewer for GitHub Pages."

The MVP must prove:
- File-based routing works seamlessly (markdown files → clean URLs)
- Rich markdown rendering (GFM, code highlighting, math equations)
- Beautiful claymorphism UI with theme support
- Auto-generated navigation (TOC, breadcrumbs, titles)
- Successful GitHub Pages deployment

## What Changes

This proposal introduces the complete MVP stack:

- **Markdown Rendering**: GFM parser with syntax highlighting, math equations (KaTeX), and enhanced markdown features
- **File-based Routing**: Astro pages that map `/content/*.md` files to clean URLs without `.md` extensions
- **UI Theming**: Claymorphism design system with light/dark themes, CSS custom properties, and theme switcher
- **Content Navigation**: Auto-generated table of contents from headings, breadcrumb navigation, and page title extraction
- **Build System**: Astro + Vite configuration optimized for GitHub Pages deployment
- **Deployment Pipeline**: GitHub Actions workflow for automatic builds and deployments

**Scope Boundaries** (MVP excludes):
- Mermaid/PlantUML diagrams (future enhancement)
- Search functionality
- Last modified dates from git
- Multiple theme variants (only light/dark for MVP)
- Advanced markdown plugins (task lists, footnotes)

## Impact

**New Capabilities:**
- `markdown-rendering` - Parse and render markdown with rich features
- `file-routing` - Map markdown files to URL paths
- `ui-theming` - Claymorphism design system with theme switching
- `content-navigation` - Auto-generated TOC, breadcrumbs, titles

**Affected Code:**
- New project structure (src/, public/, layouts/, components/)
- Astro configuration for static site generation
- Tailwind 4 configuration for claymorphism styling
- GitHub Actions deployment workflow

**Dependencies Added:**
- Astro (static site generator)
- Vite 6 (build tool)
- Tailwind CSS 4 (styling)
- markdown-it (parser)
- markdown-it-katex (math)
- markdown-it-anchor (TOC anchors)
- highlight.js (code syntax)
- KaTeX (math rendering)

**User Impact:**
- Users can create markdown files in `public/content/` and see them rendered immediately
- Clean URLs work without configuration
- Beautiful claymorphism UI out of the box
- Automatic navigation features reduce manual work
