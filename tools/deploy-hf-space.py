#!/usr/bin/env python3
"""Build the site and deploy it to the private Hugging Face review Space.

    python tools/deploy-hf-space.py            # build + upload
    python tools/deploy-hf-space.py --build    # build only, don't upload

Requires Hugo on PATH and a Hugging Face login with write access to the org
(`hf auth login`, or set HF_TOKEN).

The review copy is built with `hugo --environment hfspace`, which turns on
uglyURLs: Hugging Face static Spaces serve files literally and do not fall back
to a directory's index.html, so "/publication/" would 404 while
"/publication.html" works. The public GitHub Pages build is unaffected.
"""
import argparse
import os
import shutil
import subprocess
import sys

SPACE_ID = "Rice-RobotPI-Lab/RobotPI_io"
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public-hf")

SPACE_README = """---
title: Rice RobotPI Lab website (preview)
emoji: 🤖
colorFrom: blue
colorTo: gray
sdk: static
app_file: index.html
pinned: false
short_description: Private preview of the redesigned lab site
---

Private review copy of the redesigned **Rice RobotΠ Lab** website.

Source: <https://github.com/robotpilab/robotpilab.github.io>, branch `redesign/modern-2026`.
Do not edit files here by hand — they are generated. To update this Space, run from a
checkout of that branch:

```sh
python tools/deploy-hf-space.py
```

Built with `hugo --environment hfspace` (uglyURLs, because Hugging Face static Spaces do
not serve directory indexes). The public site on GitHub Pages keeps its directory URLs.
"""


def build():
    hugo = shutil.which("hugo")
    if not hugo:
        sys.exit("hugo not found on PATH (winget install Hugo.Hugo.Extended / brew install hugo)")
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    subprocess.run([hugo, "--environment", "hfspace", "--gc", "--minify", "-d", OUT],
                   cwd=REPO, check=True)
    with open(os.path.join(OUT, "README.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write(SPACE_README)
    n = sum(len(fs) for _, _, fs in os.walk(OUT))
    print("built %d files into %s" % (n, OUT))


def upload():
    from huggingface_hub import HfApi
    api = HfApi()
    api.create_repo(repo_id=SPACE_ID, repo_type="space", space_sdk="static",
                    private=True, exist_ok=True)

    local = set()
    for root, _, files in os.walk(OUT):
        for f in files:
            local.add(os.path.relpath(os.path.join(root, f), OUT).replace("\\", "/"))

    api.upload_folder(repo_id=SPACE_ID, repo_type="space", folder_path=OUT,
                      commit_message="Deploy site preview")

    # Drop files left over from an earlier deploy. .gitattributes is managed by the Hub.
    stale = [f for f in api.list_repo_files(SPACE_ID, repo_type="space")
             if f not in local and f != ".gitattributes"]
    if stale:
        api.delete_files(SPACE_ID, stale, repo_type="space",
                         commit_message="Remove files from the previous deploy")
        print("removed %d stale file(s)" % len(stale))

    print("\nuploaded %d files" % len(local))
    print("  space : https://huggingface.co/spaces/%s" % SPACE_ID)
    print("  app   : https://%s.static.hf.space/" % SPACE_ID.replace("/", "-").replace("_", "-").lower())
    print("\nPrivate: only Rice-RobotPI-Lab members can open it.")


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--build", action="store_true", help="build only, skip the upload")
    args = ap.parse_args()
    build()
    if not args.build:
        upload()
