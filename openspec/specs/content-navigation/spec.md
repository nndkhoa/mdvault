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

#### Scenario: Track scroll position automatically
- **WHEN** the user scrolls the page content
- **THEN** the system SHALL automatically detect which heading is currently in the viewport
- **AND** the TOC item for that heading SHALL be marked as active

#### Scenario: Handle multiple headings in viewport
- **WHEN** multiple headings are visible in the viewport simultaneously
- **THEN** the system SHALL highlight the heading closest to the top of the viewport (or the first one encountered)

#### Scenario: Update active state smoothly
- **WHEN** the user scrolls from one section to another
- **THEN** the active highlight SHALL transition smoothly from the previous TOC item to the new one
- **AND** visual feedback SHALL be immediate (no noticeable delay)

#### Scenario: Handle initial page load with hash anchor
- **WHEN** a page loads with a hash anchor in the URL (e.g., `/docs/intro#section-2`)
- **THEN** the system SHALL scroll to that section
- **AND** the corresponding TOC item SHALL be highlighted as active

#### Scenario: Maintain active state visibility
- **WHEN** a TOC item is marked as active
- **THEN** it SHALL be visually distinct from inactive items (e.g., different color, background, or font weight)
- **AND** the active state SHALL be accessible to screen readers via appropriate ARIA attributes

#### Scenario: Handle nested TOC items
- **WHEN** a nested heading (child or grandchild) becomes active
- **THEN** the nested TOC item SHALL be highlighted
- **AND** parent items MAY also be visually indicated to show context

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

### Requirement: TOC Visibility Toggle
The system SHALL provide a toggle control to show or hide the table of contents sidebar.

#### Scenario: Show toggle button
- **WHEN** a page with a TOC is rendered
- **THEN** a toggle button SHALL be displayed in or near the TOC header
- **AND** the button SHALL have an appropriate icon (e.g., eye, collapse/expand icon)

#### Scenario: Hide TOC on toggle
- **WHEN** the user clicks the toggle button while TOC is visible
- **THEN** the TOC sidebar SHALL be hidden from view
- **AND** the main content area SHALL expand to use the space previously occupied by the TOC

#### Scenario: Show TOC on toggle
- **WHEN** the user clicks the toggle button while TOC is hidden
- **THEN** the TOC sidebar SHALL become visible
- **AND** the main content area SHALL resize to accommodate the TOC

#### Scenario: Persist visibility preference
- **WHEN** the user toggles the TOC visibility
- **THEN** the visibility state SHALL be saved to localStorage
- **AND** the saved state SHALL be restored when the user navigates to another page or reloads

#### Scenario: Accessible toggle control
- **WHEN** the toggle button is rendered
- **THEN** it SHALL have appropriate ARIA attributes (e.g., aria-pressed, aria-label)
- **AND** it SHALL be keyboard accessible (Tab, Enter, Space)

### Requirement: TOC Text Filter
The system SHALL provide a text input field to filter table of contents entries by heading text.

#### Scenario: Display filter input
- **WHEN** a page with a TOC is rendered
- **THEN** a text input field SHALL be displayed in the TOC header
- **AND** the input SHALL have a placeholder like "Filter sections..."

#### Scenario: Filter TOC items in real-time
- **WHEN** the user types text into the filter input
- **THEN** TOC items SHALL be filtered in real-time (as the user types)
- **AND** only items whose heading text contains the filter text SHALL be visible

#### Scenario: Case-insensitive filtering
- **WHEN** the user enters filter text
- **THEN** the filter SHALL match heading text case-insensitively
- **AND** both "API" and "api" SHALL match if the user types "api"

#### Scenario: Filter nested items
- **WHEN** a nested item (child or grandchild) matches the filter
- **THEN** the nested item SHALL be visible
- **AND** all parent items in the hierarchy SHALL also be visible to provide context

#### Scenario: Show no results message
- **WHEN** the filter text does not match any TOC items
- **THEN** a message SHALL be displayed (e.g., "No matching sections")
- **AND** the TOC list SHALL be empty

#### Scenario: Clear filter button
- **WHEN** the filter input contains text
- **THEN** a clear button (e.g., X icon) SHALL be displayed inside or next to the input
- **AND** clicking the clear button SHALL remove all filter text and restore all TOC items

#### Scenario: Preserve filter across interactions
- **WHEN** the user filters TOC items and then clicks a TOC link
- **THEN** the page SHALL scroll to the selected section
- **AND** the filter SHALL remain active (not cleared)

#### Scenario: Filter applies to all levels
- **WHEN** the user enters filter text
- **THEN** the filter SHALL search headings at all levels (H2, H3, H4, H5, H6)
- **AND** any matching heading SHALL be displayed regardless of its level

