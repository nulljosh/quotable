# Quotable Roadmap

## From Apple Notes (imported 2026-08-04)
- [ ] Add dad-favorite films and more music quotes. Source note: "Research dad films etc. Add some films dads would like. Same with music. Add music etc to this, if it's not there already. Should be all media, not just film." Status: all-media support already exists — `quotes.json` has 193 entries with a `type` field (`movie` | `music`, 143 movie / 50 music) and the `movie` field was renamed to `answer` in v1.5.0, so this is a **data-only add**, no schema or UI change needed. Existing genres: movies drama/action/comedy/scifi/classic, music pop/rock/hiphop/rnb/country. Gaps for a "dad" pass — movies: Shawshank, Goodfellas, Caddyshack, Full Metal Jacket, spaghetti westerns, Cool Hand Luke, Gladiator, Braveheart, Saving Private Ryan, Blues Brothers, Raiders, First Blood, Lethal Weapon, Tombstone, The Untouchables, Heat, Rain Man, Airplane!, Ghostbusters, Blazing Saddles; music: Springsteen, Eagles, Led Zeppelin, AC/DC, CCR, Tom Petty, Fleetwood Mac, Billy Joel, Van Halen, Lynyrd Skynyrd, Willie Nelson, Neil Young, Bob Dylan, Bob Seger. Each entry needs `quote`, `answer`, `options` (4), `genre`, `type`, `year` (movies). Art backfill: `TMDB_API_KEY=... node scripts/fetch-tmdb-art.mjs` for movies (key is in `.env`); music `art` uses iTunes Search API URLs. `art` is optional — `game.js` no-ops when absent. Per CLAUDE.md, re-copy `index.html`/`style.css`/`game.js`/`quotes.json` into `ios/QuoteGuess/Resources/` and `macos/Quotable/Resources/` after changing quotes.json.

## Visual verification 2026-07-25 (headless Chrome, CDP)
- [ ] Panel still has roughly 90px of dead space below the answers (likely a reserved feedback/next-button area). Not measured precisely — session usage cap hit. Probe `#game`'s children heights to confirm before tightening.

## From Apple Notes (imported 2026-08-11)
- [ ] Website works but has lots of unused white space — tighten the layout

> Resume note (2026-08-11): a `wip: partial work from /work notes ingest` commit holds unfinished, unverified changes for the items above. Review `git show HEAD` before building on it — it was committed mid-flight, not reviewed, and is unpushed.

## Ingested 2026-08-18
- [ ] Top-left corner icon has text in the logo but it's too small to read.
- [ ] App uses way too much white space — take up some of that space somehow.
