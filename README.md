# UI/UX Portfolio

A hand-built portfolio site — Astro + MDX, deployed free on GitHub Pages.

## What's in here

```
src/
├── layouts/               Page shells (Base + CaseStudy)
├── components/            Reusable pieces
│   ├── Hero.astro         Landing hero with animated character
│   ├── Character.astro    Placeholder illustrated character (swap SVG later)
│   ├── StickyBoard.astro  Sticky-note "how I work" section
│   ├── StickyNote.astro   Individual sticky
│   ├── CaseStudyCard.astro Card used on the home page grid
│   ├── BeforeAfterImage.astro Screenshot with pulsing markers
│   └── Marker.astro       One clickable pulsing marker
├── content/case-studies/  Your 5 case studies as .mdx files
├── pages/
│   ├── index.astro        Home
│   ├── about.astro        About
│   └── work/[...slug].astro  Dynamic case-study route
└── styles/global.css      Design tokens + reset
```

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321 — the site reloads as you edit.

Build a production copy with `npm run build`, preview it with `npm run preview`.

## Editing a case study

Every case study is one Markdown file in `src/content/case-studies/`. The
frontmatter block at the top controls the metadata; the body is Markdown with
two custom pieces available:

```mdx
import BeforeAfterImage from '../../components/BeforeAfterImage.astro';
import Marker from '../../components/Marker.astro';

<BeforeAfterImage src="/screens/case1-before.png" alt="..." label="Before">
  <Marker x="35%" y="45%" title="Search bar too small" severity="high" n={1}>
    Longer description of what was failing at this spot.
  </Marker>
</BeforeAfterImage>
```

`x` / `y` are percentages relative to the image. `severity` is `low` / `med` / `high`.
Add as many `<Marker>` children as you want.

Put your real screenshots in `public/screens/` and reference them as
`/screens/filename.png`.

To hide a case study from the site while you work on it, add `draft: true` to
its frontmatter.

## Swapping the placeholder character

`src/components/Character.astro` contains a simple SVG stick figure. When you
have a proper illustration:

1. Export it as an SVG with clean groups (`.head`, `.body`, `.arm-right`, etc.).
2. Replace the SVG body inside `Character.astro` — keep the group class names
   and the animations keep working.

## Design system

Colors, spacing, and typography live as CSS custom properties in
`src/styles/global.css` under `:root`. Change them there and every component
picks the change up. Dark mode swaps a smaller set of the same variables.

Typography is Fraunces (display) + Inter (body), both from Google Fonts, both
loaded once in `src/layouts/BaseLayout.astro`.

## Hosting on GitHub Pages

There's a workflow at `.github/workflows/deploy.yml` that builds and
publishes the site every time you push to `main`.

**One-time setup on GitHub:**

1. Push this repository to GitHub (already done if you're reading this).
2. On the repository page → **Settings** → **Pages**.
3. Under "Build and deployment", set **Source** to **GitHub Actions**.
4. Merge (or push) to `main` — the workflow runs, and a URL appears at the
   top of the Pages settings page (something like
   `https://<user>.github.io/<repo>/`).

The build ships to `https://inquireraincityav.github.io/ui-ux/` by default
(configured in `astro.config.mjs`).

## Buying a domain and going live on it

1. **Buy a domain** — [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)
   charges at-cost (usually ~$10/yr for `.com`). Namecheap and Porkbun are
   fine alternatives. Avoid GoDaddy.
2. **Point it at GitHub Pages** — in your DNS provider, add these records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  <your-github-username>.github.io.
   ```
3. **Add a CNAME file** in `public/` with a single line — your domain, e.g.
   `yourname.com`.
4. **Tell Astro about the domain** — in `astro.config.mjs`, change
   `site` to `https://yourname.com` and delete the `base` line.
5. In GitHub → Settings → Pages, set **Custom domain** to your domain and
   enable **Enforce HTTPS** once the certificate provisions (takes a few
   minutes to an hour).

## Video / motion later

Astro handles `<video>` natively. Drop `mp4`/`webm` into `public/motion/` and
reference them from any page or MDX file. For anything more sophisticated
(scroll-driven timelines, Lottie), we'll add the library at the moment we
need it — no need to bake it in now.

## Roadmap

- [ ] Swap placeholder character for real illustration
- [ ] Replace placeholder screenshots with real project images in `public/screens/`
- [ ] Rewrite case study bodies with real content
- [ ] Fill in `about.astro` bio
- [ ] Update social links in `BaseLayout.astro` footer
- [ ] Buy domain, wire DNS, add CNAME
