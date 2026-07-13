# sharvilpatel.dev

Personal portfolio and recruiting site. Static Astro, minimal client-side JavaScript (no bundles, only tiny inline enhancements), editorial-calm minimalist design system.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Dev server at `localhost:4321` (drafts visible) |
| `npm run build` | Type-check (`astro check`) and build to `dist/` |
| `npm run preview` | Serve the production build locally (drafts hidden) |

## Adding content

Content is markdown in `src/content/`; layout code never needs to change.

- **Project writeup:** add `src/content/projects/<slug>.md`. Frontmatter: `title`, `summary`, `date`, `tech` (list), optional `role`, `repo`, `demo`. Set `featured: true` + `order` to surface it on the home page.
- **Blog post:** add `src/content/blog/<slug>.md`. Frontmatter: `title`, `description`, `pubDate`, optional `tags`. Posts with `draft: true` show in dev only.

Schemas live in `src/content.config.ts`.

## Placeholders to replace

- All three project writeups and the draft blog post are **placeholder content**.
- `src/pages/resume.astro` has placeholder jobs/skills/education.
- `public/resume/sharvil-patel-resume.pdf` is a generated stub (`scripts/make-placeholder-pdf.mjs`); replace it with the real PDF export.
- Home page bio/positioning and GitHub links (`Footer.astro`, `index.astro`, `resume.astro`) assume `github.com/sharvilpatel` — fix if different.
- Add `public/og-default.png` (1200×630) and an `og:image` tag in `BaseLayout.astro` when you have an image.

## Deploying to Cloudflare Pages

Dashboard git integration (recommended):

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. Settings → Environment variables: add `NODE_VERSION = 22` (build fails on Pages' older default Node without it).
4. Custom domains → add `sharvilpatel.dev` (and `www`, redirected to apex).

Manual deploy (no config file needed): `npx wrangler pages deploy dist --project-name=sharvilpatel-dev`

Security and cache headers are in `public/_headers` and apply automatically on Pages.

## Design system

Everything lives in `src/styles/global.css` (tokens + base) plus scoped styles per component. Rules of the house: OKLCH colors, one quiet accent, whitespace over rules, no shadows, mono reserved for metadata, and JavaScript stays minimal — only small `is:inline` enhancement scripts that pages work without, never a separate bundle (check `dist/` for `.js` files after building).
