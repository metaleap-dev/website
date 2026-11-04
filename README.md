# MetaLeap LLC Website

Official website for MetaLeap LLC, showcasing our innovative digital products.

## Products

- **[Shapemo Arcade](https://games.shapemo.com/)** — Characterful browser games, including Glowsea and BooDash
- **[MotifyUp](https://motifyup.metaleap.so/en)** — Family goals and everyday routines

## Brand assets

The new MetaLeap mark is at `public/brand/metaleap-mark.png`. Generated using the built-in ImageGen tool with this prompt: “A new original MetaLeap logo symbol: abstract M-shaped upward leap, two rhythmic geometric strokes, rounded corners, warm vermilion orange, transparent background, no text.” Product logos and artwork in `public/arcade/` and `public/motifyup/` come from their respective official websites.

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Production runs on the existing Vercel project `sagaggs-projects/website`, serving https://www.metaleap.so/.

**Release policy: manual CLI deployment only.** The Vercel Git integration was disconnected on 2026-11-04. Project inspection confirmed no Git connection and no deployment hooks; this repository contains no GitHub Actions workflows. Do not reconnect Git integration or add a CI deployment job unless deliberately switching the release process. Pushing source changes does not publish the website.

Deploy manually from this checkout without GitHub CI/CD:

```bash
npx --yes vercel@65.11.0 whoami
# First-time setup only; reuse the existing project, do not create a new one.
npx --yes vercel@65.11.0 link --yes --project website --scope sagaggs-projects
npm run build
npx --yes vercel@65.11.0 deploy --prod --yes --scope sagaggs-projects
```

Wait for the deployment to report Ready and verify the production domain. The command uploads the current working tree, including uncommitted source changes. `.vercel/` and `.env*` stay ignored; never commit deployment credentials. Publishing does not commit or push source to GitHub.

## License

Copyright 2026 MetaLeap LLC. All rights reserved.
