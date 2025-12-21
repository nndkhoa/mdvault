## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Directory Catalog Display
The system SHALL display a catalog of markdown files when accessing a directory route without an `index.md` file.

#### Scenario: List markdown files in directory
- **WHEN** a directory route is accessed and no `index.md` exists
- **THEN** the system SHALL discover all `.md` files in the corresponding directory
- **AND** exclude `index.md` from the catalog listing (if it exists)

#### Scenario: Format catalog entries as links
- **WHEN** catalog entries are displayed
- **THEN** each entry SHALL be rendered as a clickable link
- **AND** links SHALL use the correct URL path format (e.g., `/docs/getting-started` for `docs/getting-started.md`)

#### Scenario: Generate readable titles from filenames
- **WHEN** catalog entries are displayed
- **THEN** filenames SHALL be converted to readable titles by:
  - Removing the `.md` extension
  - Replacing hyphens with spaces
  - Applying title case (e.g., `getting-started.md` → "Getting Started")

#### Scenario: Handle empty directories
- **WHEN** a directory route is accessed and the directory contains no markdown files
- **THEN** the system SHALL display a message indicating no content is available
- **OR** redirect to 404 page

#### Scenario: Catalog page styling
- **WHEN** a catalog page is displayed
- **THEN** it SHALL use the same layout structure as markdown pages (header, breadcrumbs, footer)
- **AND** catalog entries SHALL be styled consistently with the claymorphism design system
- **AND** the catalog SHALL be responsive and accessible

