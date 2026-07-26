# Quotable Roadmap

## Stashed 2026-07-10
- [ ] Poster art: iTunes Search API now returns 0 results for ALL queries (tested 2026-07-19, even 'inception' — source is dead/blocked, not rate-limited). Need alternate source: TMDB API (free key) or OMDb. 143/193 entries still missing `art`; flash silently skips missing ones — blocked on obtaining a free TMDB/OMDb API key (interactive signup)

## Visual verification 2026-07-25 (headless Chrome, CDP)
- [ ] Panel still has roughly 90px of dead space below the answers (likely a reserved feedback/next-button area). Not measured precisely — session usage cap hit. Probe `#game`'s children heights to confirm before tightening.
