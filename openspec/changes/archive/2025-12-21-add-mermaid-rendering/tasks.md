## 1. Setup Mermaid Library
- [x] 1.1 Add mermaid dependency to package.json (or decide on CDN approach)
- [x] 1.2 Verify Mermaid version compatibility (v11.4.1+)

## 2. Markdown Processing
- [x] 2.1 Determine approach: client-side detection vs server-side preprocessing
- [x] 2.2 If preprocessing: add mermaid block detection in markdown.ts
- [x] 2.3 Ensure mermaid code blocks are preserved in HTML output with proper class/attributes

## 3. Client-Side Rendering Implementation
- [x] 3.1 Add Mermaid library script to MarkdownLayout.astro (CDN or bundled)
- [x] 3.2 Create initialization script to detect and render mermaid blocks
- [x] 3.3 Configure Mermaid initialization with appropriate settings
- [x] 3.4 Test rendering with various diagram types (flowchart, sequence, ER, etc.)

## 4. Theme Integration
- [x] 4.1 Configure Mermaid theme to match document theme (light/dark/sepia)
- [x] 4.2 Add theme change handler to update Mermaid diagrams when theme switches
- [x] 4.3 Test theme transitions with rendered diagrams

## 5. Performance Optimization
- [x] 5.1 Implement Intersection Observer for lazy loading diagrams
- [x] 5.2 Only initialize Mermaid when mermaid blocks are detected on page
- [x] 5.3 Verify bundle size impact (target: minimal increase to initial load)

## 6. Error Handling & Accessibility
- [x] 6.1 Add error handling for Mermaid rendering failures
- [x] 6.2 Ensure graceful degradation (show source code if rendering fails)
- [x] 6.3 Add appropriate ARIA labels for rendered diagrams
- [x] 6.4 Test with JavaScript disabled (should show source code)

## 7. Testing & Validation
- [x] 7.1 Test with existing mermaid block in `public/content/docs/be.md`
- [x] 7.2 Test with multiple diagram types (flowchart, sequence, ER, gantt, etc.)
- [x] 7.3 Test theme switching with rendered diagrams
- [x] 7.4 Verify performance metrics (Lighthouse score, bundle size)
- [x] 7.5 Test responsive behavior on mobile devices
- [x] 7.6 Validate accessibility (screen reader compatibility)

## 8. Documentation
- [x] 8.1 Update README.md to mention Mermaid diagram support
- [x] 8.2 Add example mermaid diagram to documentation or sample content

