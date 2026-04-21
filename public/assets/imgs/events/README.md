# Event images

Each event has its own folder under `public/assets/imgs/events/<event-slug>/`.
Each folder typically contains a `cover.jpg` (hero + events-index card) and optional `photo1.jpg`, `photo2.jpg`, ... for the in-page gallery.

## Convention

- `cover.jpg` — 1920×1080 (16:9), JPG, under ~500 KB. Used for the page header and the events-index card.
- `photoN.jpg` — 1200×800 or larger, JPG. Shown in the in-page gallery.
- Slug format: `<event-type>-<semester>-<year>` (e.g. `clubfair-fall-2025`). The slug must match the `app/<slug>/` route folder.

## Current events

| Slug | Route | Images |
| --- | --- | --- |
| `hackathon2024` | `/hackathon2024` | `1.jpg`, `1_old.jpg`, `2.jpg`, `3.jpg`, `5.jpg`, `6.jpg` |
| `clubfair-fall-2025` | `/clubfair-fall-2025` | `cover.jpg`, `photo1.jpg` |
| `clubfair-spring-2025` | `/clubfair-spring-2025` | `cover.jpg` |
| `course-intro-lectures-fall-2025` | `/course-intro-lectures-fall-2025` | `cover.jpg` |
| `research-info-sessions-spring-2025` | `/research-info-sessions-spring-2025` | `cover.jpg`, `photo1.jpg`, `photo2.jpg` |
| `onboarding-spring-2025` | _(no route yet)_ | raw upload present |
