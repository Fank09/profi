# ProFi Design System Spec (Figma Handoff)

- Source file: `https://www.figma.com/design/D12qa6BgRKjclRmibTEKEb/ProFi`
- Root node: `2843:1541` (`Design System (*update 2026)`)
- Spec generated: `2026-05-12`

## 1. Typography

- Section node: `2853:1689` (`Typography (var_updated)`)
- Font family: `Noto Sans Thai` (fallback `Noto Sans`)

### Text Styles

| Token | Weight | Size | Line Height |
|---|---:|---:|---:|
| H1 | 700 | 48 | 64 |
| H2 | 700 | 32 | 48 |
| H3 | 700 | 24 | 40 |
| H4 | 700 | 20 | 32 |
| Title Large | 700 | 18 | 32 |
| Title | 700 | 16 | 24 |
| Title Small | 700 | 14 | 16 |
| Label Large | 600 | 18 | auto |
| Label | 600 | 16 | auto |
| Label Small | 600 | 14 | auto |
| Label Tiny | 600 | 12 | auto |
| Body Large | 400 | 18 | 32 |
| Body | 400 | 16 | 24 |
| Body Small | 400 | 14 | 20 |
| Body Tiny | 400 | 12 | 16 |
| Button Large | 600 | 18 | auto |
| Button | 600 | 16 | auto |
| Button Small | 600 | 14 | auto |
| Link Large | 600 | 18 | auto |
| Link | 600 | 16 | auto |
| Link Small | 600 | 14 | auto |

## 2. Color System

- Section node: `2877:1725` (`Colors`)

### Brand Palettes (explicit hex in metadata)

#### Primary
- 900 `#0D2D4A`
- 800 `#124069`
- 700 `#175287`
- 600 `#1D65A6`
- 500 `#2277C4` (marked base)
- 400 `#388EDC`
- 300 `#5FA4E3`
- 200 `#86BAEA`
- 100 `#A9CEF0`
- 50 `#CBE2F6`

#### Secondary
- 900 `#13605A`
- 800 `#187E76`
- 700 `#1E9C92`
- 600 `#24B9AE`
- 500 `#2BD6C9` (marked base)
- 400 `#51DDD3`
- 300 `#78E5DD`
- 200 `#9EECE6`
- 100 `#C1F3EF`
- 50 `#E3FAF8`

### Semantic/Utility Families (tokenized, hex not exposed in metadata for all steps)
- Black alpha ramp: `Black/100%` to `Black/10%`
- White alpha ramp: `White/100%` to `White/10%`
- Gray ramp: `900` to `50` (`Gray/100` to `Gray/10`)
- Success (Green): `900` to `50` (`Green/1..10`)
- Error (Red): `900` to `50` (`Red/10..01`)
- Warning (Yellow): `900` to `50` (`Yellow/10..01`)
- Info (Blue): `900` to `50` (`Blue/10..1`)

## 3. Spacing Scale

- Section node: `2893:4420` (`Scale / Spacing (8px-based)`)

| Token Suggestion | px | rem |
|---|---:|---:|
| space-1 | 8 | 0.5 |
| space-2 | 16 | 1 |
| space-3 | 24 | 1.5 |
| space-4 | 32 | 2 |
| space-5 | 40 | 2.5 |
| space-6 | 48 | 3 |
| space-7 | 56 | 3.5 |
| space-8 | 64 | 3.5 |
| space-9 | 72 | 4 |
| space-10 | 80 | 5 |
| space-12 | 96 | 6 |

## 4. Component Inventory

### Buttons
- Section node: `2893:3865`
- Variants:
  - Style: `Fill`, `Outlined`
  - Size: `Large`, `Default`, `Small`
  - State: `Default/Active`, `Hover`, `Focus`, `Disabled`
- Min widths:
  - Large CTA: `150`
  - Default: `120`
  - Small: `80`
- Includes `button-group` tokens/components for all 3 sizes.

### Badge / Chip + Selection Controls
- Section node: `2893:4251` (`Other`)
- Badge/chip:
  - Style: `Fill`, `Outline`
  - Size: `Default`, `Small`
  - State: `Default/Active`, `Hover/Focus`
  - Min width: `64` (Default), `56` (Small)
- Radio:
  - States: `Default`, `Checked`
- Checkbox:
  - States: `Default`, `Checked`

### Inputs
- Component node: `2893:2917`
- Families visible in metadata:
  - `input`
  - `input-tag`
  - `text-area`
- Common states observed across families:
  - `Default`, `Hover`, `Focus`, `Typing`, `Value Typed`, `Disabled`
  - Plus validation states: `Warning`, `Error` (by family)
- Implementation spec for web app inputs:
  - Text input/select height: `48px`
  - Textarea height: `200px`
  - Border: `1px solid #9EA2AE`
  - Border radius: `16px`
  - Hover background: none; keep the same background as default.
  - Focus border remains `#9EA2AE`
  - Focus ring: `0 0 1px 3px #E5E5E5`
  - Label: `14px`, weight `500`, line-height `20px`
  - Label height should remain natural `20px`; avoid grid/flex stretching labels in mixed-height rows.
  - Helper text: `12px`, line-height `16px`, muted gray.
  - Apply this spec consistently to `input`, `select`, `textarea`, and composed input wrappers.

## 5. Icon Sets

- Section node: `2893:3462`

### UI Icons (Phosphor Regular)
`ArrowLeft`, `ArrowRight`, `CaretLeft`, `CaretRight`, `CaretDown`, `CaretUp`, `User`, `EnvelopeSimple`, `PaperPlaneTilt`, `Eye`, `EyeSlash`, `X`, `Check`, `Plus`, `XCircle`, `CheckCircle`, `Minus`, `Trash`, `Info`, `Question`, `LinkSimple`, `Paperclip`, `CalendarBlank`, `MagnifyingGlass`

### Social Icons (Font Awesome)
`facebook`, `twitter-x`, `instagram-ol`, `instagram`, `linkedin`, `youtube`, `youtube-ol`, `tiktok`, `line`

## 6. Logo Variants

- Section node: `2893:4502`
- Families:
  - `logo-profi`
  - `logo-profinder`
- Color variants for each:
  - `Color`, `Gradient`, `Black`, `White`

## 7. Implementation Notes

- Use 8px grid spacing as baseline.
- Treat `500` as primary base step for brand palettes (`Primary`, `Secondary`).
- Keep button/link/label line-height as `auto` in design tokens where specified.
- If engineering requires exact hex for semantic ramps (Gray/Green/Red/Yellow/Blue), resolve via Figma variables/styles export before final token freeze.
