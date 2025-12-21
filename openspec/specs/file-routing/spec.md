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

