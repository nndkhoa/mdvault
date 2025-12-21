## MODIFIED Requirements

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

