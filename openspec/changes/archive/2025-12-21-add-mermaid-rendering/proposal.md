# Change: Add Mermaid Diagram Rendering

## Why

MDVault currently supports rich markdown features including syntax highlighting and LaTeX math, but Mermaid diagrams are not rendered. Users have markdown files with Mermaid code blocks (e.g., `public/content/docs/be.md` contains an ER diagram) that display as plain code blocks instead of rendered diagrams.

The project documentation (`project.md`) already lists Mermaid@^11.4.1 as part of the tech stack and mentions client-side rendering with lazy loading, but this functionality was deferred during MVP development. Adding Mermaid rendering completes the rich markdown feature set and enables users to create visual documentation with flowcharts, sequence diagrams, ER diagrams, and other diagram types.

## What Changes

- **Mermaid Library Integration**: Add Mermaid.js library (via CDN or npm) to the markdown rendering pipeline
- **Code Block Detection**: Detect ` ```mermaid` code blocks in markdown content
- **Client-Side Rendering**: Initialize Mermaid to render detected diagram blocks on page load
- **Theme Support**: Configure Mermaid to respect the document theme (light/dark/sepia) for consistent styling
- **Performance Optimization**: Implement lazy loading and Intersection Observer for viewport-based rendering to maintain fast page loads
- **Graceful Degradation**: Display diagram source code if Mermaid fails to render or JavaScript is disabled

**No Breaking Changes**: This is an additive feature that enhances existing markdown rendering without changing current behavior.

## Impact

**Affected Specs:**
- `markdown-rendering` - Adds new requirement for Mermaid diagram rendering

**Affected Code:**
- `src/lib/markdown.ts` - May need to detect/preprocess mermaid blocks (optional, can be handled client-side)
- `src/layouts/MarkdownLayout.astro` - Add Mermaid library script and initialization logic
- `package.json` - Add mermaid dependency (or use CDN)
- `src/styles/` - May need Mermaid-specific styling adjustments for theme consistency

**Dependencies:**
- Mermaid.js library (v11.4.1+ as specified in project.md)
- No new external services required (client-side rendering)

