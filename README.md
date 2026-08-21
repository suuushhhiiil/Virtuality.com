# Write From Left

Personal site for **Khushboo Sangwan** — Creative Project Manager & Content Strategist.

Editorial, warm, and intentionally light. Live at [suuushhhiiil.github.io/Virtuality.com](https://suuushhhiiil.github.io/Virtuality.com/).

## Pages

- `/` Homepage invitation
- `/work` Work with me
- `/projects` Project lab
- `/ideas` Thinking / blog
- `/about` About Khushboo
- `/shop` Products
- `/contact` Start a conversation

## Develop

```bash
npm install
npm start
```

Production build:

```bash
npm run build
npm run preview
```

Pushing to `main` builds the site and deploys GitHub Pages (`VITE_BASE=/Virtuality.com/`). If the live site does not update, set **Settings → Pages → Source** to **GitHub Actions**, or to the `gh-pages` branch.

Lenis smooths wheel scrolling (touch stays native). GSAP ScrollTrigger fades a few blocks in once. Both are skipped when the device requests reduced motion.
