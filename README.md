# Rice RobotΠ Lab website

A static site with no build step. Open `index.html` directly, or serve the folder:

```
python3 -m http.server 8000 --bind 127.0.0.1
```

## Updating content

Most content lives in `data/`. Edit the file, refresh the page.

| To change | Edit |
| --- | --- |
| Recent Work cards, news, Research Highlights cards, footer contact details | `data/site.js` |
| PI, current members, alumni | `data/people.js` |
| Publications | `data/publications.js` |
| Join Us text | `join.html` |
| Hero headline, hero buttons, intro paragraph and topic chips | `index.html` |
| Navigation tabs | `NAV` at the top of `assets/js/main.js` |
| Venue groups in the Publications filter | `VENUE_GROUPS` in `assets/js/main.js` |

- **New paper:** copy an entry to the top of `data/publications.js`. Names that match someone in `data/people.js` are shown in bold. The year and venue filters pick it up automatically.
- **New Recent Work card:** add an entry to `LAB_HIGHLIGHTS` in `data/site.js` with the paper's title, venue, video, poster image and link.
- **New person:** add a square photo to `assets/img/people/` and an entry in `data/people.js`. Someone who leaves moves from `phd` to `alumni`.
- **New news item:** add an entry to the top of `LAB_NEWS` in `data/site.js`. The home page shows the first six.

## Videos

The videos in `assets/video/` are muted H.264 with a poster frame. Source footage is not kept in this
repository. To prepare a new clip:

```
ffmpeg -i clip.mp4 -t 20 -an -vf "scale=960:540:force_original_aspect_ratio=increase,crop=960:540,fps=30,format=yuv420p" \
  -c:v libx264 -crf 27 -preset slow -movflags +faststart assets/video/clip.mp4
ffmpeg -ss 2 -i assets/video/clip.mp4 -frames:v 1 -q:v 5 assets/video/clip.jpg
```

### Home-page background video

`assets/video/hero.mp4` is a loop assembled from several clips, with crossfades between them. The small human
video in the corner is a separate file (`assets/video/hero-inset.mp4`) that the page shows only during part of
the loop, set by the `data-from` / `data-to` times on the `.hero-inset` element in `index.html`. The source
footage and the script that builds the loop are kept outside this repository.

## Design

Rice Blue `#00205B` and Rice Gray `#7C7E7F`. The font stacks in `assets/css/style.css` list Rice's
brand faces (Copernicus, Mallory) first and fall back to Source Serif 4 and Hanken Grotesk from Google Fonts.
