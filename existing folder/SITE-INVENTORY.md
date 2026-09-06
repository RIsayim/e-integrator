# Design & Co — local Astro inventory

This project is a reusable Astro reproduction of the reference site: <https://design-co.framer.website/>. It captures the public page structure, content model, navigation, responsive visual system, and interaction pattern. The reference media archive is stored locally in `src/assets/reference/` and rendered through the shared media component. See [`REFERENCE-CLONE.md`](REFERENCE-CLONE.md) for the full section-by-section review and reuse guide.

## Routes

| Local route | Reference purpose | Sections |
| --- | --- | --- |
| `/` | Studio home page | Header, hero, featured work, about/stats, services, testimonial, philosophy, team, FAQ, contact form, footer |
| `/projects/` | Portfolio index | Header, portfolio intro, six-project grid, contact CTA, footer |
| `/projects/lumé-studio/` | Project detail | Intro, description, metadata, image gallery, adjacent-project navigation, CTA, footer |
| `/projects/the-horizon-residence/` | Project detail | Same shared detail template |
| `/projects/the-verena-residence/` | Project detail | Same shared detail template |
| `/projects/arden-boutique-hotel/` | Project detail | Same shared detail template |
| `/projects/wavenwood-residence/` | Project detail | Same shared detail template |
| `/projects/ridgeview-loft/` | Project detail | Same shared detail template |

## Section/component map

| Component or source | Responsibility |
| --- | --- |
| `src/layouts/BaseLayout.astro` | HTML shell, global styles, header/footer |
| `src/components/Header.astro` | Desktop nav and mobile menu toggle |
| `src/components/Footer.astro` | Copyright and social navigation |
| `src/components/Scene.astro` | Local media renderer; resolves archived reference images with a CSS fallback |
| `src/components/ProjectCard.astro` | Project teaser used on home and portfolio index |
| `src/data/projects.ts` | The six project records and detail-page content |
| `src/pages/projects/[slug].astro` | Generates all six project pages at build time |
| `src/styles/reference-overrides.css` | Reference-specific visual and responsive fidelity rules |

## Content updates

1. Change a project title, copy, metadata, services, and palette in `src/data/projects.ts`.
2. Replace or add assets under `src/assets/reference/`, then pass the filename through `Scene.astro`. Keep the accessible label meaningful.
3. Update identity, contact details, and social URLs in `Header.astro`, `Footer.astro`, and the contact section in `src/pages/index.astro`.
4. The contact form is deliberately presentation-only. Connect it to a Cloudflare Pages Function, Formspree, Resend, or your own endpoint before accepting submissions.

## Running locally

```sh
npm install
npm run dev
```

Open the local URL shown by Astro. `npm run build` performs type checks then creates a production build in `dist/`.

## Cloudflare Pages deployment

This is a static Astro site, so Cloudflare Pages needs no adapter. Create a Pages project from the Git repository with:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 20 or newer

Set `site` in `astro.config.mjs` to the final `https://your-domain.example` before deploying if canonical URLs or sitemap integrations are added later.

## Reference notes

The reference exposes one home page with anchored About, Services, and Contact navigation; the only distinct route family is Projects and its six details. No authentication, search, checkout, CMS, or working form endpoint was exposed in the public site structure. There are 56 archived local image assets plus local Switzer and Inter font files covering the public site’s home, index, and project-detail media.
