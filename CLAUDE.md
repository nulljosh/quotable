# QuoteGuess

Movie-quote guessing game. Static site, no build step, no backend.

## Stack
Plain HTML/CSS/JS. Quote bank in `quotes.json` (currently ~25 hand-seeded quotes — see root roadmap.md for plan to pull from a real quotes API).

## Deploy
GitHub Pages via `.github/workflows/deploy.yml` (Settings → Pages → Source: GitHub Actions).

## iOS
`ios/` — SwiftUI wrapper (WKWebView loading the same `index.html`/`game.js`/`quotes.json` bundled as resources). See root roadmap.md for TestFlight status.
