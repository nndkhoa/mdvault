# Change: Add TOC Controls

## Why
Users need control over the table of contents visibility and the ability to filter TOC entries by text. Currently, the TOC is always visible on desktop (occupies fixed space) and users cannot search/filter sections, making navigation difficult in long documents.

## What Changes
- Add show/hide toggle for TOC sidebar with toggle button
- Expand main content to use TOC space when TOC is hidden
- Add text filter input to TOC header for filtering sections by text
- Persist TOC visibility state in localStorage
- Filter TOC items in real-time as user types (case-insensitive, searches all heading levels)

## Impact
- Affected specs: content-navigation
- Affected code:
  - `src/components/TableOfContents.astro` - Add toggle button, filter input, hide/show logic, and filter functionality
  - `src/layouts/MarkdownLayout.astro` - Update grid layout to handle TOC hidden state

