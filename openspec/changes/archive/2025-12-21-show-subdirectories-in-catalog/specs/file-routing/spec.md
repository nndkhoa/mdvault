## MODIFIED Requirements

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

