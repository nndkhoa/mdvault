# ui-theming Specification

## Purpose
TBD - created by archiving change build-mvp-foundation. Update Purpose after archive.
## Requirements
### Requirement: Claymorphism Design System
The system SHALL implement a claymorphism design aesthetic with soft shadows, rounded corners, and tactile elements.

#### Scenario: Apply clay card styling
- **WHEN** content cards are rendered
- **THEN** they SHALL have multi-layered shadows creating a raised, extruded appearance

#### Scenario: Apply clay inset styling
- **WHEN** form inputs or code blocks are rendered
- **THEN** they SHALL have inset shadows creating a pressed-in appearance

#### Scenario: Use rounded corners consistently
- **WHEN** any UI element is rendered (buttons, cards, inputs, code blocks)
- **THEN** it SHALL have generous border-radius values (minimum 8px, typically 12-16px)

### Requirement: CSS Custom Properties
The system SHALL use CSS custom properties for all design tokens to enable dynamic theming.

#### Scenario: Define color variables
- **WHEN** the stylesheet is loaded
- **THEN** all colors SHALL be defined as CSS custom properties (e.g., `--clay-bg`, `--text-primary`)

#### Scenario: Define spacing variables
- **WHEN** the stylesheet is loaded
- **THEN** all spacing values SHALL be defined as CSS custom properties (e.g., `--spacing-sm`, `--spacing-md`)

#### Scenario: Define shadow variables
- **WHEN** the stylesheet is loaded
- **THEN** all shadow values SHALL be defined as CSS custom properties for light and dark shadows

### Requirement: Light and Dark Themes
The system SHALL provide both light and dark theme variants.

#### Scenario: Light theme colors
- **WHEN** light theme is active
- **THEN** the UI SHALL use light background colors (#f0f0f3), dark text, and subtle shadows

#### Scenario: Dark theme colors
- **WHEN** dark theme is active
- **THEN** the UI SHALL use dark background colors (#1a1a2e), light text, and adjusted shadow intensity

#### Scenario: Code block theme matching
- **WHEN** a theme is active
- **THEN** code syntax highlighting SHALL use a color scheme that matches the theme

### Requirement: Theme Switcher Component
The system SHALL provide an interactive theme switcher in the header.

#### Scenario: Toggle theme
- **WHEN** a user clicks the theme switcher button
- **THEN** the theme SHALL immediately switch between light and dark

#### Scenario: Update theme icon
- **WHEN** the theme changes
- **THEN** the theme switcher icon SHALL update to reflect the new theme state

#### Scenario: Accessible theme switcher
- **WHEN** the theme switcher is rendered
- **THEN** it SHALL have proper ARIA labels and keyboard navigation support

### Requirement: Theme Persistence
The system SHALL remember the user's theme preference across browser sessions.

#### Scenario: Save theme preference
- **WHEN** a user changes the theme
- **THEN** the preference SHALL be saved to localStorage under the key `mdvault-theme`

#### Scenario: Load saved theme
- **WHEN** a page loads
- **THEN** the system SHALL check localStorage and apply the saved theme before rendering

#### Scenario: Default to light theme
- **WHEN** no saved theme preference exists
- **THEN** the system SHALL default to light theme

### Requirement: Prevent Theme Flash
The system SHALL prevent flash of unstyled content (FOUC) during theme initialization.

#### Scenario: Inline theme script
- **WHEN** the HTML document loads
- **THEN** an inline script in the <head> SHALL apply the theme before any content renders

#### Scenario: No theme flicker
- **WHEN** a user navigates between pages
- **THEN** the theme SHALL remain consistent without flickering or changing unexpectedly

### Requirement: Responsive Design
The system SHALL provide a responsive layout that adapts to different screen sizes.

#### Scenario: Mobile layout (< 768px)
- **WHEN** the viewport width is less than 768px
- **THEN** the layout SHALL use a single-column design with full-width content

#### Scenario: Tablet layout (768px - 1024px)
- **WHEN** the viewport width is between 768px and 1024px
- **THEN** the layout SHALL use a flexible two-column design with collapsible sidebar

#### Scenario: Desktop layout (> 1024px)
- **WHEN** the viewport width exceeds 1024px
- **THEN** the layout SHALL use a side-by-side design with fixed TOC sidebar

#### Scenario: Touch target sizing
- **WHEN** interactive elements are rendered on mobile
- **THEN** all buttons and links SHALL have minimum 44x44px touch targets

### Requirement: Tailwind CSS Integration
The system SHALL use Tailwind CSS 4 for utility-first styling with custom claymorphism utilities.

#### Scenario: Apply utility classes
- **WHEN** components are styled
- **THEN** they SHALL primarily use Tailwind utility classes for layout and spacing

#### Scenario: Extend with custom utilities
- **WHEN** claymorphism-specific styles are needed
- **THEN** custom utility classes SHALL be defined in the Tailwind configuration

#### Scenario: Purge unused styles
- **WHEN** the production build runs
- **THEN** Tailwind SHALL remove all unused CSS classes to minimize bundle size

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

