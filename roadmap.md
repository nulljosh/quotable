# Quotable Roadmap

## Stashed 2026-07-10
- [ ] Poster art: iTunes Search API now returns 0 results for ALL queries (tested 2026-07-19, even 'inception' — source is dead/blocked, not rate-limited). Backfill script ready at `scripts/fetch-tmdb-art.mjs` (TMDB API, run once with `TMDB_API_KEY=... node scripts/fetch-tmdb-art.mjs`) — still blocked on the key itself: TMDB requires an actual account signup (not just an already-logged-in session), so `get-api-key` couldn't grab it headlessly. Josh: sign up free at themoviedb.org, grab the v3 API key from Settings → API, then run the script. 143/193 `movie`-type entries missing `art` (the 50 `music` entries already have it from the original iTunes fill).

## Visual verification 2026-07-25 (headless Chrome, CDP)
- [ ] Panel still has roughly 90px of dead space below the answers (likely a reserved feedback/next-button area). Not measured precisely — session usage cap hit. Probe `#game`'s children heights to confirm before tightening.
