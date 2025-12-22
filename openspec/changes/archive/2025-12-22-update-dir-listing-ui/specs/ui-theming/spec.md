## ADDED Requirements

### Requirement: Directory Catalog Typography and Layout Modes
The system SHALL provide typography and layout variants specifically tuned for directory catalog pages, including support for smaller fonts, multi-line titles, and multiple catalog view modes.

#### Scenario: Use compact typography for catalog entries
- **WHEN** directory catalog entries are rendered
- **THEN** the base font size and line height for catalog entry text SHALL be small enough to display many entries on screen while still meeting WCAG readability guidelines
- **AND** vertical padding between entries SHALL be reduced compared to main content typography to increase information density.

#### Scenario: Allow multi-line catalog titles
- **WHEN** directory or file titles in the catalog are longer than the available width
- **THEN** titles SHALL be allowed to wrap onto multiple lines instead of being truncated with ellipsis
- **AND** catalog rows or cards SHALL maintain visual alignment so that multi-line titles do not break the overall layout.

#### Scenario: Provide multiple catalog layout variants
- **WHEN** directory catalog pages are styled
- **THEN** the theme layer SHALL define styling variants for at least three catalog layouts, such as Large Icons, Compact List, and Details
- **AND** each layout variant SHALL specify icon sizing, spacing, and typography appropriate for its density level.

#### Scenario: Style catalog view mode switcher
- **WHEN** the catalog view mode switcher control is rendered
- **THEN** it SHALL be styled consistently with the claymorphism design system (rounded corners, soft shadows, clear selected state)
- **AND** selected and unselected view modes SHALL be visually distinguishable while preserving sufficient color contrast.


