# ProFi Stable Sections Handoff

- File: [ProFi](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi)
- Root node: `2843:1541`
- Generated: `2026-05-12`
- Mode: Section-by-section extraction (corruption-avoidance)

## Stable Sections (Verified)

### 1) Typography
- Node ID: `2853:1689`
- Direct link: [Typography](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi?node-id=2853-1689)
- Status: Extracted successfully via `get_design_context` and `get_screenshot`
- Coverage: Full typography scale tables (H1/H2/H3/H4, Title, Label, Body, Button, Link)

### 2) Colors
- Node ID: `2877:1725`
- Direct link: [Colors](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi?node-id=2877-1725)
- Status: Extracted successfully
- Coverage:
  - Primary and Secondary ramps (explicit hex values)
  - Black/White alpha ramps
  - Gray, Success, Error, Warning, Info ramps
- Notable extracted asset URLs (short-lived):
  - `https://www.figma.com/api/mcp/asset/f6ec0530-a7e1-404f-99e0-d6dacecb02cf`
  - `https://www.figma.com/api/mcp/asset/ac4d89d9-38c3-4ef8-8966-b1d4f0aff564`

### 3) Button
- Node ID: `2893:3865`
- Direct link: [Button](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi?node-id=2893-3865)
- Status: Extracted successfully
- Coverage:
  - Styles: Fill, Outlined
  - Sizes: Large, Default, Small
  - States: Default/Active, Hover, Focus, Disabled
  - Button Group variants

### 4) Other (Badge / Radio / Checkbox)
- Node ID: `2893:4251`
- Direct link: [Other](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi?node-id=2893-4251)
- Status: Extracted successfully
- Coverage:
  - Badge/chip: Fill + Outline, Default + Small, Default/Active + Hover/Focus
  - Radio: Default, Checked
  - Checkbox: Default, Checked

### 5) Scale
- Node ID: `2893:4420`
- Direct link: [Scale](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi?node-id=2893-4420)
- Status: Extracted successfully
- Coverage: 8px-based spacing scale (8 to 96)

### 6) Icons
- Node ID: `2893:3462`
- Direct link: [Icons](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi?node-id=2893-3462)
- Status: Extracted successfully
- Coverage:
  - UI set: Phosphor Regular
  - Social set: Font Awesome

### 7) Logo
- Node ID: `2893:4502`
- Direct link: [Logo](https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi?node-id=2893-4502)
- Status: Extracted successfully
- Coverage:
  - `logo-profi` + `logo-profinder`
  - Color variants: Color, Gradient, Black, White
- Notable extracted asset URLs (short-lived):
  - `https://www.figma.com/api/mcp/asset/5945c93c-7fff-4980-a808-fa56381e94df`
  - `https://www.figma.com/api/mcp/asset/9e86787a-cb38-4a79-97ba-064209247631`

## Known Unstable Scope

- The full Design System root/frame can trigger: `File structure error. We couldn’t process this file due to an invalid structure.`
- Workaround in use: process only verified stable section node IDs above.

## Recommended Operational Rule

- Use only the verified node list in this document for automated extraction.
- Avoid root-level extraction until the problematic node(s) are isolated/removed.

## Existing Specs in Workspace

- `/Users/developer/Desktop/Figma MCP/profi-mcp/profi-design-system-spec.md`
- `/Users/developer/Desktop/Figma MCP/profi-mcp/profi-design-system-spec.json`

