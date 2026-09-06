# Design & Co Astro reference guide

This repository is a static Astro recreation of the public reference at [design-co.framer.website](https://design-co.framer.website/). It is designed to be reusable: page structure, local media, project data, typography, and interactions are separated so a later edit does not require rebuilding the site from scratch.

## Public route map

| Route | Purpose | Local implementation |
| --- | --- | --- |
| `/` | Studio landing page | `src/pages/index.astro` |
| `/projects/` | Full portfolio | `src/pages/projects/index.astro` |
| `/projects/lumé-studio/` | Lumé Studio detail | Generated from `src/data/projects.ts` |
| `/projects/the-horizon-residence/` | Horizon detail | Generated from `src/data/projects.ts` |
| `/projects/the-verena-residence/` | Verena detail | Generated from `src/data/projects.ts` |
| `/projects/arden-boutique-hotel/` | Arden detail | Generated from `src/data/projects.ts` |
| `/projects/wavenwood-residence/` | Wavenwood detail | Generated from `src/data/projects.ts` |
| `/projects/ridgeview-loft/` | Ridgeview detail | Generated from `src/data/projects.ts` |

`lumé-studio` is intentionally accented to match the public reference URL. Browsers will percent-encode it automatically when necessary.

## Home page, section by section

| Order | Section | Main local media / behaviour |
| --- | --- | --- |
| 1 | Overlay header + hero | `Ccy1uQ02SCJ8HiMkVcGWyTM6alk.jpg`; full-image dark hero, location pill, primary CTA |
| 2 | Featured works | First four project records, two-column image/title-only gallery with zoom and title-slide hover |
| 3 | About + statistics | `bJNj6NXoXoIvo22mXzc3o9O4wI.jpg`; `60+`, `10+`, and `30+` counters animate from zero on reveal |
| 4 | Services | `HMrCV…`, `qWwDec…`, `K7Ab…`; three divider-separated image/text rows |
| 5 | Testimonials | Four source avatar photos/backdrops, clickable selection, 15-second auto-advance, and color/grayscale selection state |
| 6 | Design philosophy | `JUjPpl…`, `TOIXo…`, `ueCM…`; three grey image cards |
| 7 | Team | Four local portraits and click/tap expandable biography panels |
| 8 | FAQ | Native accessible disclosure controls with animated plus state |
| 9 | Contact | Studio details, visual and presentation-only form |
| 10 | Footer | Large `DESIGN & CO` wordmark, copyright and source social links |

## Projects page

The portfolio index has a dark, full-screen hero (`HyqCAf6NgzshiNuV4vQk6bedw.jpg`), an explicit down cue, the complete six-project grid, and the large photographic project CTA (`Tfm28BpIxFLGYajzCgnTkG7OqrQ.jpg`).

Each tile uses only the project image and uppercase title, matching the reference. Project records are deliberately kept in one file so sorting, copy changes, and media replacements are straightforward.

## Shared project-detail template

Every project route uses the same sequence:

1. Full-screen dark image hero with back control, project title and translucent location pill.
2. `project description` copy and a two-column lead image / metadata area.
3. An explicit six-photo gallery rhythm: full width, two-up, full width, two-up.
4. Previous/next project navigation.
5. The photographic CTA and global footer.

The hero image and all seven post-hero photos for each project are specified in `src/data/projects.ts`. The first `gallery` image is the lead image; the remaining six form the 1+2+1+2 gallery layout.

## Local design system

- Background: `#f7f7f7`; dark hero: `#090909`; pale section: `#eee`; CTA cream: `#e6e1d8`.
- Content max-width: `1400px`; desktop grids use 20px gaps, while project-gallery mosaics use 10px gaps.
- Responsive breakpoints: desktop `1200px+`, tablet `810px–1199px`, mobile `<810px`.
- `Switzer` is bundled for headings/UI and `Inter` is bundled for body copy under `src/assets/reference/fonts/`.
- All reference images, avatars, SVG identity assets, and bundled fonts are stored locally under `src/assets/reference/`; runtime rendering does not depend on Framer media URLs.

## Interaction inventory

- Scroll reveal: content rises about 20–30px and fades in; media resolves from a subtle scale.
- Gallery cards: image scale plus duplicated-title vertical slide on hover.
- Navigation: duplicated-label desktop rollover; compact frosted mobile menu.
- Testimonials: selectable real avatar photos/backdrops with grayscale/opacity transitions and 15-second auto-advance.
- FAQ: accessible open/close disclosure with rotating plus.
- Team: click/tap expansion of the normal-flow biography panel.

All motion respects `prefers-reduced-motion` for reveal/image scale effects.

## Files to change when reusing the site

| Need | File |
| --- | --- |
| Change projects, route slugs, descriptions, metadata or project photos | `src/data/projects.ts` |
| Change home-only copy, services, team, FAQ, contact details | `src/pages/index.astro` |
| Change project-index wording or CTA | `src/pages/projects/index.astro` |
| Change shared project page layout | `src/pages/projects/[slug].astro` |
| Replace local media | `src/assets/reference/`, then use its filename with `Scene.astro` |
| Change visual tokens and responsive layout | `src/styles/global.css` and `src/styles/reference-overrides.css` |
| Change navigation, logo, socials or footer text | `src/components/Header.astro`, `src/components/Footer.astro` |

`Scene.astro` resolves asset filenames from the local archive. Use it for any new project images so Astro includes them in the production build.

## Local development and Cloudflare Pages

```sh
npm install
npm run dev
npm run build
```

The project uses Astro static output. For Cloudflare Pages configure:

- Build command: `npm run build`
- Build output directory: `dist`
- Node: 20 or newer

There is no server runtime requirement. The contact form is intentionally visual only; connect it to a Cloudflare Pages Function or external form handler before collecting submissions.

## Verification baseline

`npm run build` performs `astro check` and produces all eight static routes. Before deployment, check the home, portfolio, one desktop project page, and a mobile viewport against the reference—especially if copy or images have been replaced.
