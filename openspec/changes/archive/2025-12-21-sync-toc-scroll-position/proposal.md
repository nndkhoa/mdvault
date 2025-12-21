# Change: Sync Scroll Position with Table of Contents

## Why
Currently, the table of contents provides navigation links to page sections, but it doesn't provide visual feedback about which section the user is currently viewing as they scroll. This makes it difficult for users to understand their position in long documents. The spec already includes a requirement for highlighting the active section, but it hasn't been implemented yet.

## What Changes
- Add client-side JavaScript to track scroll position and detect which heading is currently in view
- Highlight the corresponding TOC item when a section becomes active
- Ensure smooth transitions between active states as the user scrolls
- Handle edge cases like multiple headings in viewport and page load with hash anchor
- Maintain accessibility by ensuring active state is visually distinct and keyboard navigable

## Impact
- Affected specs: `content-navigation` (modifies existing "Highlight active section" requirement)
- Affected code:
  - `src/components/TableOfContents.astro` - Add client-side script for scroll tracking
  - `src/layouts/MarkdownLayout.astro` - May need to coordinate scroll tracking initialization
  - CSS styles for active TOC link state

