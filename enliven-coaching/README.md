# Enliven Coaching

Website for Katie at Enliven Coaching. Built with Next.js (Pages Router) + Tailwind + Vercel.

## Stack

Same as Angela's site (leahfarmer.com):

- Next.js 14 (Pages Router)
- Tailwind CSS
- next/font for Google Fonts (Fraunces, Inter Tight, Parisienne)
- Deployed via Vercel, auto-deploys on push to `main`
- No TypeScript

## File structure

```
pages/
  _app.js          → font setup, global metadata
  index.js         → home
  about.js         → about Katie
  get-started.js   → booking + contact form + FAQ
components/
  Layout.js        → Navbar + Footer wrapper
  Navbar.js        → sticky blur nav with mobile menu
  Footer.js        → warm footer with mountain wash
styles/
  globals.css      → base styles + custom animations
lib/
  images.js        → centralised asset paths + Calendly/social links
public/            → flat, no subfolders, hyphenated filenames only
tailwind.config.js → brand palette (cream, ember, plum, etc.)
jsconfig.json      → required for @/ alias (don't delete!)
```

## Brand tokens

Katie's palette (from her brand guide PDF, renamed to avoid Tailwind built-in clashes):

| Token       | Hex      | Use                                      |
| ----------- | -------- | ---------------------------------------- |
| `cream`     | #F6EFE2  | Page background                          |
| `parchment` | #EFE6D3  | Section background                       |
| `ink`       | #1F1A14  | Body copy                                |
| `smoke`     | #5A544A  | Secondary text                           |
| `ember`     | #E16730  | Primary accent — matches logo coral      |
| `peach`     | #ED9A67  | Secondary warm (from brand guide)        |
| `sunlit`    | #FFD179  | Accents (L. Yellow)                      |
| `dusk`      | #647D98  | Button / L. Blue                         |
| `sage`      | #ACB3A7  | Hover (Sage Blue)                        |
| `plum`      | #3A253B  | Shadows / dark bg (D. Purple)            |
| `gold`      | #C89B4A  | Logo warmth                              |

**Note:** The `ember` accent uses the coral from the "Coaching" script in Katie's logo (#E16730), not the `#ED9A67` listed as "headlines" in her brand guide PDF. The brand guide and logo were inconsistent on the warm-orange family — we chose the logo value so the site reads as visually unified with the logo.

**Fonts:** Fraunces (display), Inter Tight (body), Parisienne (script accents)

## ⚠️ Required assets

Drop all of these flat into `/public`. Do **not** use spaces in filenames.

| Filename                     | What it is                                | Status |
| ---------------------------- | ----------------------------------------- | ------ |
| `enliven-logo.png`           | Full gold lockup, transparent bg          | ✅ In place |
| `mountain-illustration.png`  | Watercolour mountain scene, transparent   | ✅ In place |
| `katie-portrait.jpeg`        | Katie's headshot                          | ✅ In place |
| `hero-meditation.jpg`        | Silhouette meditating at sunrise          | ⚠️ **Download from** `https://enliven-coaching.com/wp-content/themes/jenn/assets/images/hero-image-scaled.jpg` |
| `favicon.ico`                | 32×32 based on the E detail of the logo   | ⚠️ Generate from the logo lockup |

**Note on the logo:** The full gold lockup is used throughout (navbar, footer). We deliberately skipped having a separate "E mark" asset — the background-removal tools couldn't preserve the delicate butterfly detail cleanly enough, and one strong mark used confidently reads better than a logo-plus-mark combination on a small coaching site. If Ryan ever surfaces a clean source file for the standalone E, it's a 5-minute change to reintroduce.

## Calendly + socials

All stored in `lib/images.js`:

- Calendly: `https://calendly.com/enliven-u/60-minute-coaching`
- Instagram: `@enlivencoachkatie`
- Email: `enliven-u@outlook.com`

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

1. Push to GitHub
2. Import in Vercel
3. **Set Framework Preset to "Next.js"** — it sometimes defaults to "Other"
4. Deploy. Every push to `main` auto-deploys.

## TODO before launch

- [x] ~~Get transparent PNG versions of logo and mountain illustration~~ (done)
- [ ] Download `hero-meditation.jpg` from the current WordPress site and add to `/public`
- [ ] Generate a proper `favicon.ico` from the logo
- [ ] Swap mailto contact form → Formspree (or equivalent)
  - Currently the form on `/get-started` opens the user's email client via mailto. This works but isn't a great UX.
- [ ] Point the custom domain at Vercel (DNS stays wherever it is now)
- [ ] Test Calendly link on the live deploy
- [ ] Mobile QA pass — especially the hero overlap elements on narrow screens
- [ ] Cross-browser check (Safari in particular for `backdrop-blur`)
- [ ] SEO: verify page titles, meta descriptions, add OG image
- [ ] (Optional) If Ryan provides a clean source E-mark asset, reintroduce as a floating badge on the hero

## Design notes

The direction is "quiet cartography" — warm, editorial, grounded.

- Asymmetric grid-breaking layouts instead of centred WordPress blocks
- Script font used sparingly for "held breath" moments (hooks, pull-quotes)
- Mountain illustration as subtle 8-10% opacity background wash, never as a hero
- Generous whitespace — the page should feel like room to think, not a brochure
- Numbered editorial "01/02/03" rhythm for the three-pillar section with a slight vertical offset on the middle item to break the grid
- Gold "E" mark floats as a motif (hero badge, footer, nav)

Things to watch out for when editing:
- Don't add `blue`, `yellow`, `orange` as colour tokens — they collide with Tailwind built-ins
- Use `encodeURI()` around image paths in the JSX (see existing components)
- For new images, use hyphenated filenames — spaces in filenames broke two images on Angela's build
