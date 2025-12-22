## ADDED Requirements

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

