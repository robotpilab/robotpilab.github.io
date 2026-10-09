# Rice RobotΠ Lab website

Source of <https://robotpilab.github.io>. Built with [Hugo](https://gohugo.io) (v0.135, no external theme):
all templates live in `layouts/`, styles and scripts in `assets/`, and content in Markdown under `content/`.

## Preview locally

Install Hugo (`winget install Hugo.Hugo.Extended` / `brew install hugo`), then:

```sh
hugo server
```

and open <http://localhost:1313>.

## Deploy

Pushing to `main` runs `.github/workflows/gh-pages.yml`, which builds the site and publishes it to the
`gh-pages` branch that GitHub Pages serves. Pull requests are built but not deployed.

## Private preview on Hugging Face

A private copy for review lives as a static Space at
<https://huggingface.co/spaces/Rice-RobotPI-Lab/RobotPI_io> and is visible only to members of
the `Rice-RobotPI-Lab` organization. To refresh it after pushing changes:

```sh
python tools/deploy-hf-space.py
```

It builds with `hugo --environment hfspace` into `public-hf/` and uploads that. The extra
environment turns on `uglyURLs`, because Hugging Face static Spaces serve files literally and
do not fall back to a directory's `index.html` — so the preview uses `/publication.html`
while the public site keeps `/publication/`. Nothing about the GitHub Pages build changes.

To let someone review it, add them to the Hugging Face organization; there is no way to share
a private Space with a non-member.

## Editing content

| To add…            | Do this                                                                                  |
|--------------------|------------------------------------------------------------------------------------------|
| a publication      | Create `content/publication/<slug>/index.md` (copy a recent one). Optional `cite.bib`, `featured.png`, poster PDF in the same folder. |
| a news post        | Create `content/post/<slug>/index.md` with `title`, `date`, and `image.filename` pointing at an image in the same folder. |
| a person           | Create `content/people/<first-last>/index.md` with `title`, `role`, `group`, `email`, `homepage`, `last_name`, plus `avatar.jpg`. Alumni also need `year` (the year they left), which sub-groups the Alumni section newest first. |
| a research direction | Create `content/research/<slug>/index.md` with `title`, `weight` (order), `members` (people slugs) and a `featured.jpg` (shown at 4:3). Cards appear in the home page's horizontal reel. |
| a lab honor        | Append to `data/honors.yaml`. Paper awards go in the publication's front matter as `award: "..."`. |

Publication front matter fields used by the templates: `title`, `authors`, `publication_types`
(`article-journal`, `paper-conference`, `preprint`), `publication_short`, `publication`, `date`, `abstract`,
`url_pdf`, `url_project`, `url_code`, `url_video`, `url_poster`, `url_dataset`, `url_slides`, `doi`,
`award`, `note`, `research`.

`research` is a list of research-direction slugs (the folder names under `content/research/`). It is
optional, and it powers the “N publications” link on each direction card, which opens
`/publication/?d=<slug>`. The publications page also accepts `?q=<text>` to open a search. Lab members are shown in bold automatically when their name matches a `content/people` entry.

## Homepage video

The hero plays `assets/media/hero.mp4` (and `hero.webm` if present) muted and looped, with
`assets/media/both.jpg` as the poster. Until a video file exists, the poster image is shown.
Recommended: 10–30 s, 1920×1080, H.264, no audio, ≤ 8 MB, e.g.

```sh
ffmpeg -i input.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart assets/media/hero.mp4
ffmpeg -i input.mov -an -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 0 -crf 34 assets/media/hero.webm
```

Site-wide settings (lab name, address, links, hero button text) are in `config/_default/params.yaml`;
the navigation is in `config/_default/menus.yaml`.
