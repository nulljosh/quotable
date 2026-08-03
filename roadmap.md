# Quotable Roadmap

## Stashed 2026-07-10
- [x] Poster art: DONE 2026-08-03. TMDB account created, API key issued, `TMDB_API_KEY` stored in `.env` (gitignored). Ran `scripts/fetch-tmdb-art.mjs` — 191/193 entries now have `art`. 2 misses: "Game of Thrones" and "Star Trek" (TV entries, TMDB search needs a year-agnostic/TV-type query tweak — minor follow-up if wanted).

## Visual verification 2026-07-25 (headless Chrome, CDP)
- [ ] Panel still has roughly 90px of dead space below the answers (likely a reserved feedback/next-button area). Not measured precisely — session usage cap hit. Probe `#game`'s children heights to confirm before tightening.
