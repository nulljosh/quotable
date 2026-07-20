# Quotable Roadmap

## Stashed 2026-07-10
- [ ] Sync root web files (index.html/style.css/game.js/quotes.json) into ios/ and macos/ Resources (plain copies, see CLAUDE.md), then build+test iOS in sim (poster-flash feature included) and ship via asc (no ASC record yet: icon, bundle ID com.heyitsmejosh.quoteguess, screenshots, submit)
- [ ] Poster art: iTunes Search API now returns 0 results for ALL queries (tested 2026-07-19, even 'inception' — source is dead/blocked, not rate-limited). Need alternate source: TMDB API (free key) or OMDb. 143/193 entries still missing `art`; flash silently skips missing ones
