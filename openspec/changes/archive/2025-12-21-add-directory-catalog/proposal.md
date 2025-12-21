# Change: Add Directory Catalog Feature

## Why
When users navigate to a directory route (e.g., `/docs`), if no `index.md` file exists in that directory, they currently see a 404 error page. This creates a poor user experience as users cannot discover available content in that directory. A catalog view that lists all markdown files in the directory as clickable links would improve discoverability and navigation.

## What Changes
- **MODIFIED** `file-routing`: Add directory catalog fallback behavior when `index.md` is missing
- When a directory route is accessed and no `index.md` exists, display a catalog of markdown files in that directory
- Catalog entries should be formatted as proper links with readable titles extracted from filenames or file content
- Maintain existing behavior when `index.md` exists (show the index page)

## Impact
- **Affected specs:** `file-routing`
- **Affected code:**
  - `src/pages/[...slug].astro` - Route handler logic
  - `src/lib/content.ts` - Content loading and directory listing functions
  - `src/layouts/MarkdownLayout.astro` - Layout for catalog display (or new catalog component)

