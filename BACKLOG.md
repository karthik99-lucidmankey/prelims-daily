# Prelims Daily — backlog

Decisions as of 26 Oct 2026. In v3 unless listed here.

## Pinned for later

1. Offline mode. A service worker that keeps the app and questions on the phone. Also makes Chrome's install prompt more reliable.
2. Content updates. A regular drop of new questions, Coffee Break facts and PYQs.
   - Current affairs, route 1 (first): questions on the fixed concept behind a news item (a new Ramsar site → the Ramsar Convention). Nothing expires.
   - Route 2 (only if she asks for current affairs): a weekly set of 5 drafted by a scheduled task from PIB, ministries and RBI, each with an "as of" and an expiry date; checked by hand, uploaded as one file; the app hides expired questions.
3. CSAT mini-track.
4. Moving progress between phones (reliability and product issue). Today: backup file or code from Progress → Backup. Later: a QR or link transfer, and a fix for iPhone keeping Safari and Home Screen data separate.
5. CFA Level I quiz on the same engine. It must use its own storage key and folder, because every GitHub Pages app on the account shares one web address and therefore one storage area.

## Dropped

- Printable mistakes notebook
- Monthly progress letter
- Hindi version

## Known limits (from the v3 reliability review)

- Without a service worker, Chrome may not offer its own install prompt; the in-app instructions cover this.
- Browser storage can be cleared by the user or, rarely, by the browser. The app asks for persistent storage after the first set; backups are the safety net.
- Usage numbers count phones, not people: a new phone or cleared data is a new user; restoring a backup keeps the ID.
- The usage sheet's address is public in the page code. The script rejects malformed messages and caps row counts; the address can be replaced in two minutes.
