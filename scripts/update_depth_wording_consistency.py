#!/usr/bin/env python3
"""Refresh stale depth-count wording after the sitewide first-principles passes."""

from __future__ import annotations

from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

REPLACEMENTS = {
    "index.html": {
        "THE ONE MACHINE — 35 first-principles themes connected into one pipeline: see → understand → hold → imagine → trust → act, plus 24 foundational + deeper-math pages underneath": (
            "THE ONE MACHINE — 35 applied themes plus 24 foundational and deeper-math pages connected into one pipeline: see → understand → hold → imagine → trust → act"
        ),
    },
    "hub.html": {
        "The capstone · one machine, 35 themes": "The capstone · one machine, 35 applied themes + 24 foundations",
        "This site pulls apart modern computer vision one theme at a time — 35 of them, each with its own\nfirst-principles story, a real run, and the papers. Step back and they are not 35 separate tricks. They are": (
            "This site pulls apart modern computer vision one applied theme at a time — 35 of them, each with its own\nfirst-principles story, a real run, and the papers — and now anchors them with 24 foundational and deeper-math pages. Step back and they are not separate tricks. They are"
        ),
        "This site pulls apart modern computer vision one theme at a time — 35 of them, each with its own first-principles story, a real run, and the papers. Step back and they are not 35 separate tricks.": (
            "This site pulls apart modern computer vision one applied theme at a time — 35 of them, each with its own first-principles story, a real run, and the papers — and now anchors them with 24 foundational and deeper-math pages. Step back and they are not separate tricks."
        ),
        '<a href="#all">All 35, one line each</a>': '<a href="#all">Applied themes, one line each</a>',
        '<h2 id="all">All 35, one line each</h2>': '<h2 id="all">Applied themes, one line each</h2>',
        "The one machine · a capstone connecting all 35 first-principles themes into a single\npipeline": (
            "The one machine · a capstone connecting 35 applied themes and 24 foundational math pages into a single\npipeline"
        ),
    },
}


def main() -> None:
    changed = 0
    for name, replacements in REPLACEMENTS.items():
        path = ROOT / name
        text = path.read_text(encoding="utf-8")
        original = text
        for old, new in replacements.items():
            text = text.replace(old, new)
        if text != original:
            path.write_text(text, encoding="utf-8")
            changed += 1
    print(f"updated {changed} files")


if __name__ == "__main__":
    main()
