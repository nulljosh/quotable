#!/usr/bin/env node
// Backfills `art` (TMDB poster URL) onto quotes.json entries missing it.
// Run once: TMDB_API_KEY=... node scripts/fetch-tmdb-art.mjs
// ponytail: sequential fetches, fine for a one-off 143-item backfill.

import { readFileSync, writeFileSync } from 'node:fs';

const key = process.env.TMDB_API_KEY;
if (!key) {
  console.error('Set TMDB_API_KEY first (get one at themoviedb.org/settings/api).');
  process.exit(1);
}

const path = new URL('../quotes.json', import.meta.url);
const quotes = JSON.parse(readFileSync(path, 'utf8'));

for (const q of quotes) {
  if (q.type !== 'movie' || q.art) continue;
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(q.answer)}&year=${q.year}&api_key=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  const hit = data.results?.[0];
  if (hit?.poster_path) {
    q.art = `https://image.tmdb.org/t/p/w500${hit.poster_path}`;
    console.log('found', q.answer);
  } else {
    console.warn('no match', q.answer, q.year);
  }
}

writeFileSync(path, JSON.stringify(quotes, null, 2) + '\n');
