# content-navigation Specification

## Purpose
TBD - created by archiving change build-mvp-foundation. Update Purpose after archive.
## Requirements
### Requirement: Auto-extract Page Title
The system SHALL automatically extract the page title from the first H1 heading in the markdown content.

#### Scenario: Extract title from H1
- **WHEN** a markdown file contains a first-level heading like `# Getting Started`
- **THEN** the page title SHALL be set to "Getting Started"

#### Scenario: Set document title
- **WHEN** the page title is extracted
- **THEN** the HTML document title SHALL be set to `{title} - MDVault`

#### Scenario: Handle missing H1
- **WHEN** a markdown file does not contain an H1 heading
- **THEN** the page title SHALL default to "Untitled" or the filename

### Requirement: Table of Contents Generation
The system SHALL automatically generate a table of contents from H2-H6 headings.

#### Scenario: Build TOC from headings
- **WHEN** a markdown file contains multiple H2-H6 headings
- **THEN** a nested table of contents SHALL be generated reflecting the heading hierarchy

#### Scenario: Exclude H1 from TOC
- **WHEN** the TOC is generated
- **THEN** the first H1 heading SHALL be excluded (it is the page title)

#### Scenario: Create anchor links in TOC
- **WHEN** TOC items are rendered
- **THEN** each item SHALL link to the corresponding heading anchor on the page

#### Scenario: Handle empty TOC
- **WHEN** a markdown file has no H2-H6 headings
- **THEN** the TOC component SHALL not render or display a "No sections" message

### Requirement: TOC Sidebar Component
The system SHALL render the table of contents in a sticky sidebar for desktop viewports.

#### Scenario: Display TOC sidebar on desktop
- **WHEN** the viewport width exceeds 1024px
- **THEN** the TOC SHALL appear in a fixed sidebar to the left or right of the content

#### Scenario: Make TOC sticky
- **WHEN** the user scrolls down the page
- **THEN** the TOC sidebar SHALL remain visible by using sticky positioning

#### Scenario: Highlight active section
- **WHEN** the user scrolls to a section
- **THEN** the corresponding TOC item SHALL be highlighted to show the current position

### Requirement: TOC Mobile Handling
The system SHALL provide an alternative TOC presentation for mobile and tablet viewports.

#### Scenario: Collapse TOC on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** the TOC SHALL be hidden by default or displayed in a collapsible dropdown

#### Scenario: Toggle TOC visibility
- **WHEN** a user taps the TOC toggle button on mobile
- **THEN** the TOC SHALL expand or collapse smoothly

### Requirement: Breadcrumb Navigation
The system SHALL generate breadcrumb navigation based on the URL path structure.

#### Scenario: Generate breadcrumbs from path
- **WHEN** a page is accessed at `/docs/api/intro`
- **THEN** breadcrumbs SHALL display: Home > Docs > API > Intro

#### Scenario: Make breadcrumb links clickable
- **WHEN** breadcrumbs are rendered
- **THEN** all items except the current page SHALL be clickable links

#### Scenario: Format breadcrumb labels
- **WHEN** breadcrumb labels are generated from URL segments
- **THEN** hyphens SHALL be replaced with spaces and text SHALL be title-cased

#### Scenario: Handle root breadcrumb
- **WHEN** a user is on the homepage
- **THEN** breadcrumbs SHALL show only "Home" without additional segments

### Requirement: Header Navigation
The system SHALL provide a persistent header with site branding and navigation.

#### Scenario: Display site logo
- **WHEN** the header is rendered
- **THEN** it SHALL include the MDVault logo or text branding linking to the homepage

#### Scenario: Include theme switcher
- **WHEN** the header is rendered
- **THEN** it SHALL include the theme switcher component

#### Scenario: Make header sticky
- **WHEN** the user scrolls down the page
- **THEN** the header SHALL remain visible at the top using sticky positioning

### Requirement: Footer Navigation
The system SHALL provide a footer with metadata and links.

#### Scenario: Display copyright
- **WHEN** the footer is rendered
- **THEN** it SHALL display copyright information or attribution

#### Scenario: Include powered by message
- **WHEN** the footer is rendered
- **THEN** it SHALL include "Powered by MDVault" or similar branding

#### Scenario: Provide social or navigation links
- **WHEN** the footer is rendered
- **THEN** it MAY include links to GitHub repository, documentation, or other resources

### Requirement: Keyboard Navigation
The system SHALL support full keyboard navigation for all interactive elements.

#### Scenario: Tab through interactive elements
- **WHEN** a user presses the Tab key
- **THEN** focus SHALL move through all interactive elements in logical order

#### Scenario: Visible focus indicators
- **WHEN** an element receives keyboard focus
- **THEN** it SHALL display a clear focus indicator (outline or ring)

#### Scenario: Activate with Enter or Space
- **WHEN** a button or link has keyboard focus
- **THEN** pressing Enter or Space SHALL activate the element

#### Scenario: Navigate TOC with keyboard
- **WHEN** the TOC has focus
- **THEN** users SHALL be able to navigate TOC items using arrow keys

