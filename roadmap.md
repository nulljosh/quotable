# Quotable Roadmap

## Stashed 2026-07-10
- [ ] Poster art: iTunes Search API now returns 0 results for ALL queries (tested 2026-07-19, even 'inception' — source is dead/blocked, not rate-limited). Need alternate source: TMDB API (free key) or OMDb. 143/193 entries still missing `art`; flash silently skips missing ones — blocked on obtaining a free TMDB/OMDb API key (interactive signup)

## Ingested 2026-07-25
- [x] Too much whitespace — needs tighter layout using more of the space. Done 2026-07-25: `.wrap` 720→900px max-width with 40/24 → 24/20 padding, `.panel` 40/36 → 28, blockquote margin 28→20 (size 1.5→1.6rem), and `.options` now auto-fits to two columns at ≥260px/col instead of a single tall list.
- [x] Top-left icon is hardly legible and has text baked into it — redo. Done 2026-07-25: `icon.svg` rebuilt as two geometric quote marks (path + `<use>`, amber on the existing dark tile) — no `<text>`, no font dependency, legible down to 16px. Topbar inline logo in `index.html` uses the same path with `currentColor`.
