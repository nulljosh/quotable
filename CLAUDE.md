# Quotable

Movie-quote guessing game. Static site, no build step, no backend.

## Stack
Plain HTML/CSS/JS. Quote bank in `quotes.json` (100 hand-seeded quotes — see root roadmap.md for plan to pull from a real quotes API). High score persisted via localStorage. Genre-colored badges/icons and correct/wrong feedback animations added in v1.1.0. v1.2.0: full-viewport layout, larger type/spacing, per-genre badge text color (fixes low-contrast text on drama/sci-fi badges), flat backgrounds (no gradients), quote bank doubled to 100. v1.3.0: quote bank to 143 (verified, no fabricated attributions), stronger accent color (panel left border, deeper bg tint), auto light/dark only (toggle removed), 100dvh mobile fix.

## iOS/macOS sync
`ios/QuoteGuess/Resources/` and `macos/Quotable/Resources/` are plain file copies of the root `index.html`/`style.css`/`game.js`/`quotes.json`, not symlinks or a build step. Re-copy the four files into both Resources dirs whenever the root web files change.

## Deploy
GitHub Pages via `.github/workflows/deploy.yml` (Settings → Pages → Source: GitHub Actions).

## iOS
`ios/` — SwiftUI wrapper (WKWebView loading the same `index.html`/`game.js`/`quotes.json` bundled as resources). Scaffold only, not built/signed. See root roadmap.md for TestFlight status.

## macOS
`macos/` — same pattern as iOS, AppKit `NSViewRepresentable` wrapping WKWebView. Scaffold only, not built/signed.
