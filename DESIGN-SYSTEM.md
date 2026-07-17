# CTC Website Design System v0.3.2

Status: Design audit and proposed direction  
Scope: `jlhsctc-official-website`  
Audience: Contributors maintaining the CTC institutional archive website

## 1. Product Character

The CTC website is an institutional record for a student organization. Its
primary jobs are to introduce the club, identify its leadership, preserve
historical material, and present achievements and programs with credibility.

The default experience should feel:

- Clear and documentary rather than promotional
- Official but student-led
- Editorial and spacious rather than dashboard-like
- Quietly confident, with decoration reserved for pages that need a distinct identity

The visual foundation is a white document surface, black or dark brown text,
fine gray borders, restrained interaction states, and a consistent centered
content frame.

## 2. Current Design Audit

### Navigation

The shared `SiteHeader` is the strongest system component in the current site.
It provides:

- A sticky top bar with a subtle bottom border and translucent white backdrop
- A centered `max-w-6xl` navigation frame
- A compact CTC logo lockup on the left
- Desktop links and a mobile disclosure menu at the `md` breakpoint
- Active-route styling, including nested routes such as archive children

Current primary order in the implementation:

`Home` · `Presidents` · `Archive` · `Achievements` · `TEDx` · `Events` · `Contact`

This order is functional, but it does not fully reflect the club’s public
story. Achievements represents CTC’s public reputation and competitive history;
Presidents represents institutional leadership history; and Archive is a
library-like destination for preserved materials. The archive should therefore
not carry the same primary-product emphasis as reputation and leadership pages.

#### Preferred Navigation Order

Recommended order:

`Home` · `Achievements` · `Presidents` · `TEDx` · `Events` · `Archive` · `Contact`

Rationale:

- `Home` provides orientation and the club’s current institutional context.
- `Achievements` follows with the clearest public evidence of CTC’s reputation,
  competitive history, and recognizable accomplishments.
- `Presidents` then provides the leadership history behind that record.
- `TEDx` and `Events` represent active programs and public-facing activity.
- `Archive` remains accessible, but later in the sequence as a library/archive
  destination rather than a primary product section.
- `Contact` closes with practical communication information.

This is a recommendation for the next navigation refinement, not an instruction
to change navigation as part of this documentation update. New top-level
destinations should remain rare and should represent a distinct user task or
program identity.

### Typography Hierarchy

The global body system is a readable sans-serif stack:

`Inter, "Helvetica Neue", Helvetica, Arial, sans-serif`

Observed hierarchy and proposed tokens:

| Token | Typical implementation | Intended use |
| --- | --- | --- |
| Display | `font-display`, `text-5xl` to `text-7xl`, tight tracking | Hero or ceremonial editorial titles when a distinct display treatment is intentional |
| Page Heading | `text-5xl`, `md:text-6xl`, `font-semibold` | Standard page titles such as Archive, Presidents, and Documents |
| Section Heading | `text-2xl` to `text-3xl`, `font-semibold` | Major page sections and grouped content |
| Record Title | `text-base` to `text-2xl`, `font-semibold` | A document, statement, tournament, event, or person record |
| Body | `text-sm`/`text-base`, `leading-6`/`leading-7` | Descriptions, biographies, and explanatory copy |
| Metadata / Caption | `text-xs`/`text-sm`, muted color | Dates, status, role labels, breadcrumbs, and supporting context |

The default font for Body, Page Heading, Section Heading, Record Title, and
Metadata / Caption is the readable sans-serif stack:

`Inter, "Helvetica Neue", Helvetica, Arial, sans-serif`

Display may use an explicit editorial or serif font only when the page has a
clear institutional, ceremonial, or program identity and the choice is
documented. TEDx is an exception with its own Helvetica/Inter-style brand
lockup. The default sans-serif system should remain in place for navigation,
body copy, metadata, archive rows, and most functional headings.

The codebase also uses `font-display` on Achievements and TEDx headings. There
is no explicit display-font declaration in `app/globals.css`, so this utility
is currently an implicit rather than documented typography token. The TEDx hero
correctly overrides the display treatment with a Helvetica/Inter-style lockup.

Recommendation: define the intended display behavior before expanding its use.
Until then, use the global sans stack for normal page titles and reserve a
documented display utility for editorial headings that have a clear reason to
differ. Do not use tracked uppercase as a substitute for hierarchy.

### Card and Container Usage

There are three recognizable surface patterns:

1. **Section panel**: rounded border, gray header strip, white content body.
   Used on the homepage and Presidents archive.
2. **Collection card**: independent bordered link with compact padding and a
   status badge. Used on the Archive landing page.
3. **Archive row**: a full-width bordered list with compact horizontal entries.
   Used for Documents and Official Statements.

The current direction is moving away from large table headers and file-manager
interfaces. That is appropriate for a small institutional archive. Cards should
represent a meaningful collection or repeated item; they should not wrap every
paragraph or individual recognition in nested boxes.

Rules:

- Use `rounded-lg` as the default radius; use `rounded-xl` only for a major
  section panel or page-level grouping.
- Use `border border-[#d0d7de]` for framed surfaces.
- Use `bg-[#f6f8fa]` for restrained headers, metadata treatments, and pending
  states.
- Prefer one surface boundary around a collection over nested cards.
- Use hover background changes for links; avoid shadows and animated lift.
- Keep status/count badges compact and secondary.

### Shape System

Shape is part of hierarchy. Rounded surfaces should clarify grouping, not make
the site feel like a dashboard.

- `rounded-md`: small controls, compact badges, mobile menu items, and short
  action treatments.
- `rounded-lg`: default for collection cards, archive containers, profile
  media frames, and modest grouped surfaces.
- `rounded-xl`: reserved for major page-level section panels or a prominent
  homepage grouping where the larger radius helps establish a boundary.
- Avoid using rounded corners on every paragraph, list item, or individual
  achievement.
- Avoid stacking rounded cards inside rounded cards unless the inner surface is
  a genuinely independent navigation destination.
- A navigation card represents a route or collection the user can enter. It may
  use padding, hover treatment, and a status/count badge.
- A document or archive row represents a record within a collection. It should
  usually use a shared border, compact vertical padding, and editorial text,
  not a floating card treatment.
- Do not turn every content block into a floating card. Use whitespace, type
  hierarchy, and a single divider when those communicate structure more clearly.

### Spacing System

The pages consistently use a small set of Tailwind spacing values, even though
they are not named tokens:

- Page frame: `max-w-6xl`, `px-6`, `py-12`
- Hero frame: `py-16`, expanding to `md:py-24` where appropriate
- Major section rhythm: `mt-10`, `mt-12`, or `mt-20`
- Component gaps: `gap-5`, `gap-6`, `gap-8`, `gap-10`
- Compact text rhythm: `mt-1` through `mt-5`, with `leading-6` or `leading-7`

Recommended spacing rules:

- Keep page titles close to their breadcrumb or top frame: roughly `mt-3`.
- Keep title descriptions at about `mt-5`.
- Start the primary content collection around `mt-10`.
- Use `mt-20` only to separate major editorial sections, not adjacent records.
- For list rows, prefer `px-5 py-4` or `px-5 py-5`.
- For profile/collection panels, use `p-5`; use `p-8` only when a document
  preview genuinely needs breathing room.
- Reduce vertical spacing before secondary labels when they belong to the same
  event or record.

On mobile, preserve horizontal padding and let titles wrap naturally. Avoid
fixed widths, fixed heights, and `whitespace-nowrap` except for short actions or
metadata that can safely remain compact.

### Component Consistency

`SiteHeader` and `SiteFooter` are shared correctly across the public pages.
Most other patterns remain local to their page:

- `SectionBox` and the current-president card are local to `app/page.js`.
- `SectionLabel`, event archive entries, and leadership entries are local to
  `app/tedx/page.js`.
- Achievement result and editorial list helpers are local to
  `app/achievements/page.js`.
- President profile rows and section navigation are local to
  `app/presidents/page.js`.

This is acceptable while the patterns have distinct semantics. Extract a shared
component only when the markup and behavior are genuinely the same across at
least two pages. Shared visual rules should otherwise be documented first and
kept close to the page that owns the content.

### Component Usage Rules

- Use cards for navigation and grouped collections, not for every piece of
  content or every person in an institutional record.
- Prefer editorial lists for documents, official statements, articles, media
  records, and other archive entries.
- Prefer a single horizontal row or vertical record block when the content is a
  small archive rather than a large dataset.
- Avoid unnecessary header bars inside containers. If a collection has only a
  few records, the page title and the records themselves are sufficient.
- Use a header strip only when it materially improves orientation or separates
  a major section from its content.
- Prefer editorial layouts for institutional records: date, title, context,
  and action should read in a clear sequence without dashboard affordances.
- Keep local helpers local when their semantics are page-specific; extract
  shared components only when both structure and behavior are shared.

## 3. Page Identity Matrix

| Page | Role | Visual language |
| --- | --- | --- |
| Home | Institutional introduction / front door | Editorial sections, restrained panels, clear introductions |
| Achievements | Honors archive / record of distinction | Premium editorial typography, restrained award accents, chronological records |
| Presidents | Leadership archive | Biography/document layout, chronological structure, profile records |
| TEDx | Independent brand/event identity | Black, white, TED red, editorial event presentation |
| Events | Activity archive | Event records and timelines |
| Archive | Historical library / collection directory | Collection cards at entry level, document lists inside collections |
| Contact | Practical information | Minimal information block |

The matrix is a content and visual-governance tool. It allows pages to share
the CTC foundation without flattening distinct purposes into one generic
template.

## 4. Content Hierarchy Rules

Use these information orders when designing or extending repeated records:

### Archive Items

1. Title
2. Description
3. Metadata
4. Action

### Achievement Records

1. Year
2. Event
3. Result
4. Recipients

### President Profiles

1. Name
2. Role
3. Biography
4. Achievements

### Location Blocks

1. Organization
2. Campus
3. Address
4. Map/action

The order should remain recognizable across layouts. Typography, spacing, and
page-specific accents may change, but secondary actions should not outrank the
record itself.

## 5. Page-Specific Visual Identity

### Home

The homepage is the institutional front door. It uses a restrained hero with
the CTC logo, followed by framed editorial sections for About, Current
Presidents, Front Office, and Location. Current-president cards may be compact
portrait cards, while organizational information should remain equal and
non-hierarchical.

Use: white surfaces, gray borders, clear introductions, restrained profile
imagery, and practical location information.

### Presidents

The Presidents page is a chronological leadership archive. Its period sections,
profile rows, selected-achievement lists, and responsive section navigation
prioritize scanning and record integrity.

Use: year/term as the primary navigation anchor, one-column achievement lists,
intrinsic image proportions where available, and biographies separated from
achievement metadata. Avoid adding decorative treatments that compete with the
historical sequence.

### Archive

The Archive is a collection directory. Its landing page uses independent
collection cards, while Documents and Official Statements use compact archive
rows because they contain a small number of records.

Use: collection title, description, and status/count as the information order.
Avoid table headers when the collection is too small to need columns.

### Achievements

Achievements is an honors archive, not a dashboard. Its primary unit is the
tournament or event, grouped vertically by year. Team results are highlighted
with restrained gold/bronze treatment; individual honors remain editorial text
lists with recipient names stronger than award titles.

Use: `#8f6d36`/`#765625`-family accents sparingly, especially for championship
results. Keep years stacked vertically and preserve event chronology.

Achievements is the only page allowed to use a restrained
ceremonial/premium treatment. Its distinction should come from hierarchy and
editorial restraint, not from a collection of widgets.

Allowed:

- Editorial/display typography for award emphasis
- Restrained gold/bronze accents
- Stronger visual hierarchy for Champion and placement results

Avoid:

- Dashboard statistics
- Generic cards
- Excessive badges
- Treating awards like ordinary bullet points

### TEDx

TEDx has an independent black, white, and red identity. The black hero, TED red
lockup, and `Transform, Transcend, Transmit` theme should not inherit the gold
honors treatment from Achievements.

Use: Helvetica/Inter-style logo typography, TED red accents, editorial event
archive rows, and red links. Avoid gold, laurel marks, award separators, and
generic profile-card grids.

### Events and Contact

These pages currently use the shared documentation layout and pending-content
rows. Until real records are available, keep them modest and transparent. Do
not make placeholder pages appear more complete than their source material.

## 6. Color and Surface Tokens

These are the current practical tokens to reuse:

| Purpose | Value |
| --- | --- |
| Page background | `#ffffff` |
| Primary text | `#17130d` |
| Border | `#d0d7de` |
| Muted surface | `#f6f8fa` |
| Secondary text | `text-black/55` to `text-black/70` |
| Achievements accent | `#8f6d36` / `#765625` |
| TEDx accent | `#e62b1e` or the page-approved TED red |

The base CTC site should remain primarily monochrome. Accent colors should
communicate page identity or record importance, not decorate every component.

## 7. Interaction and Responsive Rules

- Use semantic links for navigation and archive entries.
- Keep external links marked with `target="_blank"` and `rel="noreferrer"`
  where the existing page pattern requires it.
- Preserve visible focus states when introducing custom link styles.
- Desktop layouts may use two columns for address/map, profile image/content,
  or compact collection grids.
- Mobile layouts should stack columns, allow long titles to wrap, and avoid
  horizontal overflow.
- Horizontal navigation is appropriate for a small set of president periods;
  it should remain compact and avoid obscuring the global navbar.
- Embedded media and maps are supporting elements. Bound their width and height
  so the primary text remains the visual anchor.

## 8. Content and Data Conventions

- Keep content data-driven when a page has repeated years, events, statements,
  documents, or people.
- Preserve exact official names, dates, tournament names, and role titles.
- Do not add placeholder awards or biographies to make a page look fuller.
- Keep personal achievements distinct from club archive content unless they are
  explicitly part of the organization’s record.
- Use bilingual names in the established format when the page calls for person
  attribution: `English Name (Chinese Name)`.

## 9. Do Not Rules

Avoid:

- Wrapping every section in rounded cards
- Using cards for chronological records
- Using table headers for small archive collections
- Using uppercase tracking as the only hierarchy method
- Adding decorative UI without semantic purpose
- Creating different visual languages for similar content types

These rules protect the site’s institutional archive character: documentary,
official but student-led, spacious and editorial, with restrained UI rather
than dashboard aesthetics.

## 10. Implementation Roadmap

The redesign should proceed in practical, bounded phases:

### Phase 1: Foundation

- Establish global typography tokens.
- Clean up shape and radius usage.
- Refine navigation order and hierarchy.

### Phase 2: Archive

- Redesign the Archive landing page as a library-style collection directory.
- Refine Documents as compact institutional document rows.
- Refine Official Statements as compact official-record rows.

### Phase 3: Achievements

- Continue visual refinement of the honors archive, keeping the tournament/event
  as the primary unit and preserving chronological readability.

### Phase 4: Homepage

- Improve consistency among About, Current Presidents, Front Office, and
  Location while keeping the homepage as the institutional front door.

### Phase 5: TEDx

- Complete the TEDx identity polish without blending it into the CTC gold honors
  system or the general archive treatment.

Across every phase, add mobile visual QA and preserve the core philosophy:
institutional archive, documentary, official but student-led, spacious
editorial style, and no dashboard aesthetics.

## 11. Audit Summary

The site already has a coherent foundation: shared navigation and footer,
consistent page framing, restrained borders, and a clear shift toward editorial
archive presentation. The main opportunity is codification, not a broad visual
rewrite. v0.3.2 treats the current visual language as the source of
truth, names its repeated patterns, and sets boundaries for page-specific
identities so future additions remain cohesive without becoming monotonous.
