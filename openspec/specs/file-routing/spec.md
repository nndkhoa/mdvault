# file-routing Specification

## Purpose
TBD - created by archiving change build-mvp-foundation. Update Purpose after archive.
## Requirements
### Requirement: Markdown File to URL Mapping
The system SHALL map markdown files in the content directory to clean URLs without file extensions.

#### Scenario: Route blog post
- **WHEN** a file exists at `public/content/blog/my-post.md`
- **THEN** the page SHALL be accessible at `/blog/my-post`

#### Scenario: Route nested documentation
- **WHEN** a file exists at `public/content/docs/api/getting-started.md`
- **THEN** the page SHALL be accessible at `/docs/api/getting-started`

#### Scenario: Handle index files
- **WHEN** a file exists at `public/content/blog/index.md`
- **THEN** the page SHALL be accessible at `/blog/` and `/blog/index`

### Requirement: Dynamic Route Resolution
The system SHALL use a dynamic catch-all route to resolve markdown file paths at build time.

#### Scenario: Parse slug from URL
- **WHEN** a user visits `/docs/guide`
- **THEN** the system SHALL extract the slug `docs/guide` and attempt to load `public/content/docs/guide.md`

#### Scenario: Handle root path
- **WHEN** a user visits the root path `/`
- **THEN** the system SHALL load `public/content/index.md`

#### Scenario: Support trailing slashes
- **WHEN** a user visits `/blog/post/` with a trailing slash
- **THEN** the system SHALL resolve to the same content as `/blog/post`

#### Scenario: Directory catalog fallback
- **WHEN** a user visits a directory route like `/docs` and no `index.md` exists in `public/content/docs/`
- **THEN** the system SHALL display a catalog page listing all markdown files in that directory as clickable links
- **AND** each catalog entry SHALL link to the corresponding markdown file route
- **AND** catalog entries SHALL display readable titles derived from filenames (e.g., `getting-started.md` → "Getting Started")

#### Scenario: Prefer index.md over catalog
- **WHEN** a user visits a directory route like `/docs` and `index.md` exists in `public/content/docs/`
- **THEN** the system SHALL display the `index.md` content instead of the catalog

#### Scenario: Catalog for nested directories
- **WHEN** a user visits a nested directory route like `/docs/api` and no `index.md` exists in `public/content/docs/api/`
- **THEN** the system SHALL display a catalog page listing markdown files in that nested directory

### Requirement: 404 Error Handling
The system SHALL display a custom 404 page when a requested markdown file does not exist.

#### Scenario: Missing markdown file
- **WHEN** a user requests `/nonexistent-page`
- **THEN** the system SHALL display a 404 error page with navigation options

#### Scenario: Invalid path format
- **WHEN** a user requests a path with invalid characters
- **THEN** the system SHALL display a 404 error page without breaking

#### Scenario: Provide helpful navigation
- **WHEN** the 404 page is displayed
- **THEN** it SHALL include a link back to the homepage and suggestion to check the URL

### Requirement: Static Site Generation
The system SHALL pre-render all markdown pages at build time for static hosting.

#### Scenario: Build all pages
- **WHEN** the build command is executed
- **THEN** the system SHALL generate static HTML files for all markdown content

#### Scenario: Output to dist directory
- **WHEN** pages are generated
- **THEN** each page SHALL be output to `dist/[slug]/index.html` for clean URLs

#### Scenario: Include base path for GitHub Pages
- **WHEN** configured with a base path like `/mdvault/`
- **THEN** all generated links and assets SHALL include the correct base path

### Requirement: Content Directory Convention
The system SHALL use `public/content/` as the standard location for markdown files.

#### Scenario: Discover markdown files
- **WHEN** the system builds pages
- **THEN** it SHALL only process files within `public/content/` directory

#### Scenario: Ignore non-markdown files
- **WHEN** the content directory contains non-markdown files like images or JSON
- **THEN** those files SHALL not be processed as pages but remain accessible as static assets

#### Scenario: Preserve directory structure
- **WHEN** markdown files are organized in nested directories
- **THEN** the URL structure SHALL mirror the directory hierarchy

### Requirement: Directory Catalog Display
The system SHALL display a catalog of markdown files and subdirectories when accessing a directory route without an `index.md` file.

#### Scenario: List markdown files in directory
- **WHEN** a directory route is accessed and no `index.md` exists
- **THEN** the system SHALL discover all `.md` files in the corresponding directory
- **AND** exclude `index.md` from the catalog listing (if it exists)

#### Scenario: List subdirectories in directory
- **WHEN** a directory route is accessed and no `index.md` exists
- **THEN** the system SHALL discover all subdirectories in the corresponding directory
- **AND** include subdirectories as catalog entries alongside markdown files
- **AND** only include subdirectories that contain markdown files (excluding `index.md`) or contain nested subdirectories with content
- **AND** exclude subdirectories that have an `index.md` file (as those will display their index content instead of a catalog)

#### Scenario: Format catalog entries as links
- **WHEN** catalog entries are displayed
- **THEN** each entry SHALL be rendered as a clickable link
- **AND** file entry links SHALL use the correct URL path format (e.g., `/docs/getting-started` for `docs/getting-started.md`)
- **AND** directory entry links SHALL use the correct URL path format (e.g., `/docs/api` for `docs/api/` subdirectory)

#### Scenario: Generate readable titles from filenames
- **WHEN** catalog entries are displayed
- **THEN** filenames SHALL be converted to readable titles by:
  - Removing the `.md` extension
  - Replacing hyphens with spaces
  - Applying title case (e.g., `getting-started.md` → "Getting Started")
- **AND** directory names SHALL be converted to readable titles using the same formatting rules (e.g., `exam-csr-fit-2025dec` → "Exam Csr Fit 2025dec")

#### Scenario: Visual distinction between files and directories
- **WHEN** catalog entries are displayed
- **THEN** directory entries SHALL be visually distinct from file entries
- **AND** directory entries SHALL use a folder icon
- **AND** file entries SHALL use a document icon
- **AND** both entry types SHALL maintain consistent styling with the claymorphism design system

#### Scenario: Catalog entry sorting
- **WHEN** catalog entries are displayed
- **THEN** entries SHALL be sorted appropriately (e.g., directories first, then files, or alphabetical within groups)
- **AND** sorting SHALL be consistent and predictable

#### Scenario: Handle empty directories
- **WHEN** a directory route is accessed and the directory contains no markdown files or subdirectories
- **THEN** the system SHALL display a message indicating no content is available
- **OR** redirect to 404 page

#### Scenario: Catalog page styling
- **WHEN** a catalog page is displayed
- **THEN** it SHALL use the same layout structure as markdown pages (header, breadcrumbs, footer)
- **AND** catalog entries SHALL be styled consistently with the claymorphism design system
- **AND** the catalog SHALL be responsive and accessible

