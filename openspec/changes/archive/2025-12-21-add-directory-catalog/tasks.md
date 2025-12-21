## 1. Implementation
- [x] 1.1 Add function to list markdown files in a directory (`src/lib/content.ts`)
- [x] 1.2 Add function to check if a directory path exists and contains markdown files
- [x] 1.3 Modify route handler (`src/pages/[...slug].astro`) to detect directory routes and check for `index.md`
- [x] 1.4 Create catalog component or template for displaying directory listings
- [x] 1.5 Extract readable titles from filenames (convert kebab-case to Title Case)
- [x] 1.6 Generate proper links for catalog entries using the slug path
- [x] 1.7 Style catalog view to match claymorphism design system
- [x] 1.8 Update `getStaticPaths()` to include directory routes for catalog pages

## 2. Validation
- [x] 2.1 Test catalog display when visiting `/docs` (no index.md)
- [x] 2.2 Test that existing `index.md` files still work correctly
- [x] 2.3 Test nested directories (e.g., `/docs/api` without index.md)
- [x] 2.4 Verify catalog links navigate correctly
- [x] 2.5 Test edge cases: empty directories, directories with only non-markdown files
- [x] 2.6 Verify build succeeds with catalog pages
- [x] 2.7 Test responsive design for catalog view

