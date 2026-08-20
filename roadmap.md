# Quotable Roadmap

## From Apple Notes (imported 2026-08-04)
- [ ] Add dad-favorite films and more music quotes. Source note: "Research dad films etc. Add some films dads would like. Same with music. Add music etc to this, if it's not there already. Should be all media, not just film." Status: all-media support already exists — `quotes.json` has 193 entries with a `type` field (`movie` | `music`, 143 movie / 50 music) and the `movie` field was renamed to `answer` in v1.5.0, so this is a **data-only add**, no schema or UI change needed. Existing genres: movies drama/action/comedy/scifi/classic, music pop/rock/hiphop/rnb/country. Gaps for a "dad" pass — movies: Shawshank, Goodfellas, Caddyshack, Full Metal Jacket, spaghetti westerns, Cool Hand Luke, Gladiator, Braveheart, Saving Private Ryan, Blues Brothers, Raiders, First Blood, Lethal Weapon, Tombstone, The Untouchables, Heat, Rain Man, Airplane!, Ghostbusters, Blazing Saddles; music: Springsteen, Eagles, Led Zeppelin, AC/DC, CCR, Tom Petty, Fleetwood Mac, Billy Joel, Van Halen, Lynyrd Skynyrd, Willie Nelson, Neil Young, Bob Dylan, Bob Seger. Each entry needs `quote`, `answer`, `options` (4), `genre`, `type`, `year` (movies). Art backfill: `TMDB_API_KEY=... node scripts/fetch-tmdb-art.mjs` for movies (key is in `.env`); music `art` uses iTunes Search API URLs. `art` is optional — `game.js` no-ops when absent. Per CLAUDE.md, re-copy `index.html`/`style.css`/`game.js`/`quotes.json` into `ios/QuoteGuess/Resources/` and `macos/Quotable/Resources/` after changing quotes.json.

## Visual verification 2026-07-25 (headless Chrome, CDP)
- [x] Dead space below the answers — fixed 2026-08-19. It was stacked bottom padding, not a hidden
  element: `.panel` had 40px and `.wrap` another 40px, ~80px of pure padding under the last row.
  Now 28px and 20/24px. `#feedback`'s `min-height: 1.4em` is deliberate and stays — it reserves the
  answer-feedback line so the layout doesn't jump when you answer.

## From Apple Notes (imported 2026-08-11)
- [x] Tightened the layout 2026-08-19 (panel and wrap padding above). Note the panel is vertically
  centred by design (`.wrap` is `flex: 1` + `justify-content: center`), so on a tall desktop window
  it will still sit in the middle with space above and below — that is intentional, not drift.

> Resume note (2026-08-11): a `wip: partial work from /work notes ingest` commit holds unfinished, unverified changes for the items above. Review `git show HEAD` before building on it — it was committed mid-flight, not reviewed, and is unpushed.

## Ingested 2026-08-18
- [x] Logo lettering unreadable — fixed 2026-08-19. Root cause: `icon.svg` draws "QUOTE" at
  font-size 24 inside a 200px viewBox, so at a 32px header render it is about 4px tall. Rather than
  editing the SVG (it also feeds the app icons), the header now pairs the mark with a real HTML
  wordmark. `CLAUDE.md`'s old "icon only, no wordmark" note was corrected so this isn't reverted.
- [x] Covered by the padding pass above (2026-08-19).
