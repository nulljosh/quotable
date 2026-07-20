# Quotable Roadmap

## Stashed 2026-07-10
- [x] Synced quotes.json into ios/QuoteGuess/Resources and macos/Quotable/Resources (only diff was already-in-sync em-dash encoding); index.html/style.css/game.js already matched. iOS build verified (`xcodebuild ... generic/platform=iOS Simulator` → BUILD SUCCEEDED), sim run skipped per usage-conscious default. Ship via asc still blocked — no ASC app record yet (bundle ID com.heyitsmejosh.quoteguess), needs asc-app-create-ui skill (browser automation, confirm before running).
- [ ] Poster art: iTunes Search API now returns 0 results for ALL queries (tested 2026-07-19, even 'inception' — source is dead/blocked, not rate-limited). Need alternate source: TMDB API (free key) or OMDb. 143/193 entries still missing `art`; flash silently skips missing ones — blocked on obtaining a free TMDB/OMDb API key (interactive signup)
