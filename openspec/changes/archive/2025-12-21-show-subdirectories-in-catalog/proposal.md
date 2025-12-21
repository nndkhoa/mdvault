# Change: Show Subdirectories in Catalog Listing

## Why
Currently, when users access a directory route without an `index.md` file, the catalog only displays markdown files. Users cannot see or navigate to subdirectories, making it difficult to discover nested content. This limits the discoverability of organized content structures.

## What Changes
- Catalog listings SHALL include both markdown files and subdirectories
- Subdirectories SHALL be displayed as clickable entries that navigate to the subdirectory route
- Subdirectory entries SHALL be visually distinct from file entries (e.g., folder icon vs document icon)
- Subdirectories SHALL be formatted with readable titles (similar to markdown files)
- Catalog entries SHALL be sorted with directories and files grouped appropriately

## Impact
- Affected specs: `file-routing` (Directory Catalog Display requirement)
- Affected code:
  - `src/lib/content.ts` - `listDirectoryFiles()` function needs to include directories
  - `src/pages/[...slug].astro` - Catalog rendering needs to handle directory entries
  - `CatalogEntry` interface may need extension to distinguish file vs directory entries

