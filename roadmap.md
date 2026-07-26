# Quotable Roadmap

## Stashed 2026-07-10
- [ ] Poster art: iTunes Search API now returns 0 results for ALL queries (tested 2026-07-19, even 'inception' — source is dead/blocked, not rate-limited). Need alternate source: TMDB API (free key) or OMDb. 143/193 entries still missing `art`; flash silently skips missing ones — blocked on obtaining a free TMDB/OMDb API key (interactive signup)

## Ingested 2026-07-25
- [x] Too much whitespace — needs tighter layout using more of the space. Done 2026-07-25: `.wrap` 720→900px max-width with 40/24 → 24/20 padding, `.panel` 40/36 → 28, blockquote margin 28→20 (size 1.5→1.6rem), and `.options` now auto-fits to two columns at ≥260px/col instead of a single tall list.
- [x] Top-left icon is hardly legible and has text baked into it — redo. Done 2026-07-25: `icon.svg` rebuilt as two geometric quote marks (path + `<use>`, amber on the existing dark tile) — no `<text>`, no font dependency, legible down to 16px. Topbar inline logo in `index.html` uses the same path with `currentColor`.

## Visual verification 2026-07-25 (headless Chrome, CDP)
- [x] The 2026-07-25 whitespace fix did NOT actually work and was re-fixed (commit 088ac4a). Screenshot showed the panel as a small island in a large void, and `.options` auto-fit at 260px produced 3 columns for 4 answers, leaving an orphan row with a dead gap. Root causes: `.wrap` used `justify-content: center`, centring short content in a tall viewport; and the auto-fit floor was too low. Now `minmax(min(100%, 320px), 1fr)` (measured: 2 columns @1440, 1 column @390) and `justify-content: flex-start`.
- [x] Standing-rule violation found in the same pass: `--g-scifi` was `#9b5de5`, straight purple, on the scifi genre badge. Replaced with cyan `#4cc9d9`, still distinct from drama's navy `#3d5aa8`.
- [x] Icon confirmed text-free and legible; topbar logo renders correctly in-game.
- [ ] Panel still has roughly 90px of dead space below the answers (likely a reserved feedback/next-button area). Not measured precisely — session usage cap hit. Probe `#game`'s children heights to confirm before tightening.
