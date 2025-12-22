# Change: Improve directory catalog listing UI

## Why
The current directory catalog page uses relatively large typography and truncates long directory or file titles with ellipsis, which makes it harder to scan long names and distinguish entries, especially in dense content trees.
The product also only supports a single catalog layout, limiting discoverability for users who prefer large icon grids or detail-oriented list views similar to desktop file explorers.

## What Changes
- Reduce the base font size and vertical spacing for directory catalog entries to improve information density while remaining accessible.
- Stop truncating catalog entry titles with ellipsis; instead allow titles to wrap across multiple lines while keeping rows or cards aligned.
- Introduce multiple directory catalog view modes (for example: Large Icons, Compact List, and Details) inspired by file explorer UIs.
- Provide a per-page toggle to switch view mode on the directory catalog page, with a sensible default and a persistent preference per device.
- Ensure all new layouts remain responsive, keyboard-accessible, and consistent with the claymorphism design system.

## Impact
- Affected specs: `file-routing` (Directory Catalog Display behaviour), `ui-theming` (catalog layout variants and typography)
- Affected code: directory catalog Astro component(s), catalog item card or list styles, and any client-side state managing the selected view mode


