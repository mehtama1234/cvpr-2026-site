#!/usr/bin/env python3
"""Keep visible corpus-count copy aligned with the search corpus."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SEARCH = ROOT / "search.html"


def search_count() -> int:
    text = SEARCH.read_text(encoding="utf-8")
    match = re.search(r"const D=(.*?);const THT=", text, re.S)
    if not match:
        raise ValueError("missing search corpus")
    return len(json.loads(match.group(1)))


def rewrite(path: Path, replacements: dict[str, str]) -> bool:
    text = path.read_text(encoding="utf-8")
    out = text
    for old, new in replacements.items():
        out = out.replace(old, new)
    if out == text:
        return False
    path.write_text(out, encoding="utf-8")
    return True


def main() -> None:
    count = search_count()
    comma = f"{count:,}"
    plain = str(count)
    changed = []

    if rewrite(
        ROOT / "index.html",
        {
            "CVPR 2026 · 4073 papers analyzed · deep dives by theme": f"CVPR 2026 · {plain} papers analyzed · deep dives by theme",
            "Search all 4073 papers": f"Search all {plain} papers",
            "Every one of the 1,626 papers here is one attempt at some stretch of that crossing.": f"Every one of the {comma} papers here is one attempt at some stretch of that crossing.",
        },
    ):
        changed.append("index.html")

    if rewrite(
        ROOT / "first-principles-audit.html",
        {
            "The site currently builds from <b>4073</b> parsed paper JSON records": f"The site currently builds from <b>{plain}</b> searchable paper records",
            '<div class="pc"><h3>paper</h3><p><b>4073</b> records': f'<div class="pc"><h3>paper</h3><p><b>{plain}</b> records',
            "hidden thing / evidence / rule / proof / break": "hidden quantity / evidence / mathematical rule / proof / counterexample",
        },
    ):
        changed.append("first-principles-audit.html")

    if rewrite(
        ROOT / "landscape.html",
        {
            "CVPR 2026 \\u2014 the paper landscape (4073 analyzed papers, colored by theme)": f"CVPR 2026 \\u2014 the paper landscape ({plain} analyzed papers, colored by theme)",
        },
    ):
        changed.append("landscape.html")

    print(f"corpus count {plain}; updated {', '.join(changed) if changed else 'nothing'}")


if __name__ == "__main__":
    main()
