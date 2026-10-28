# Personal reading covers

These small WebP thumbnails come from cover URLs in Raghav Bali's public
Goodreads read/currently-reading RSS feeds (user 87723774), refreshed manually
on 23 October 2026. `_data/books.yml` records each book's Goodreads ID, source
cover URL and local asset path. Covers link back to Goodreads in the design.

Run `python3 scripts/refresh-bookshelf.py` to fetch new records and missing
covers. Personal notes remain in `_data/book_notes.yml`. See
`docs/design/bookshelf-refresh.md` for maintenance and failure behavior.
