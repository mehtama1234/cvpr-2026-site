#!/usr/bin/env python3
"""Update first-principles audit page with current depth-pass coverage."""

from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "first-principles-audit.html"
START = "<!-- depth-ledger:start -->"
END = "<!-- depth-ledger:end -->"
NAV_EXCLUDE_SUFFIXES = (
    "-math.html",
    "-why.html",
    "-playground.html",
    "-in-the-wild.html",
    "-deep-reads.html",
    "-deepdive.html",
)

CSS = """
.depth-ledger{border:1px solid var(--line);border-left:3px solid var(--good);border-radius:0 12px 12px 0;background:#f3faf4;padding:15px 18px;margin:16px 0 22px}
.depth-ledger h3{margin:0 0 7px;font-size:17px;color:var(--accent-deep)}
.depth-ledger p{font-size:14.5px;line-height:1.6;margin:7px 0;color:#23302C}
.depth-ledger .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:8px;margin-top:10px}
.depth-ledger .cell{border:1px solid var(--line);background:#fff;border-radius:8px;padding:9px 11px}
.depth-ledger .cell b{font-size:18px;color:var(--ink)}
.depth-ledger .cell span{display:block;font-family:var(--mono);font-size:10.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--graphite);margin-top:2px}
"""


def count_pages(pattern: str, marker: str, *, exclude: set[str] | None = None) -> tuple[int, int]:
    exclude = exclude or set()
    pages = [p for p in sorted(ROOT.glob(pattern)) if p.name not in exclude]
    covered = sum(1 for p in pages if marker in p.read_text(encoding="utf-8", errors="ignore"))
    return len(pages), covered


def count_occurrences(pattern: str, marker: str, *, exclude: set[str] | None = None) -> int:
    exclude = exclude or set()
    return sum(
        p.read_text(encoding="utf-8", errors="ignore").count(marker)
        for p in ROOT.glob(pattern)
        if p.name not in exclude
    )


def count_navigation_pages() -> tuple[int, int]:
    pages = [
        p
        for p in sorted(ROOT.rglob("*.html"))
        if not p.name.startswith(("cvpr-", "cluster-")) and not p.name.endswith(NAV_EXCLUDE_SUFFIXES)
    ]
    covered = sum(1 for p in pages if "navigation-principles:start" in p.read_text(encoding="utf-8", errors="ignore"))
    return len(pages), covered


def render() -> str:
    math_total, math_covered = count_pages("*-math.html", "The key turn")
    why_total, why_covered = count_pages("*-why.html", "Mathematical core")
    playground_total, playground_covered = count_pages("*-playground.html", "First-principles guide")
    wild_total, wild_covered = count_pages("*-in-the-wild.html", "Mathematical move")
    subdeep_total, subdeep_covered = count_pages("*-deep-reads.html", "dr-math-lens:start", exclude={"deep-reads.html"})
    cluster_total, cluster_covered = count_pages("cluster-*.html", "cluster-principles:start")
    deepdives_total, deepdives_covered = count_pages("*-deepdive.html", "mathematical principles underneath")
    cvpr_total, cvpr_covered = count_pages("cvpr-*.html", "decision-math:start")
    nav_total, nav_covered = count_navigation_pages()

    deep = (ROOT / "deep-reads.html").read_text(encoding="utf-8")
    cards = deep.count('<div class="pc"')
    card_lenses = deep.count("paper-math-lens:start")
    sub_blocks = count_occurrences("*-deep-reads.html", '<div class="dr"', exclude={"deep-reads.html"})
    sub_lenses = count_occurrences("*-deep-reads.html", "dr-math-lens:start", exclude={"deep-reads.html"})
    pattern_blocks = count_occurrences("*-in-the-wild.html", '<div class="pat"')
    pattern_moves = count_occurrences("*-in-the-wild.html", "pattern-math-move:start")

    cells = [
        ("math pages", f"{math_covered}/{math_total}", "key turn + failure + examples"),
        ("why essays", f"{why_covered}/{why_total}", "hidden quantity / evidence / rule / failure"),
        ("playgrounds", f"{playground_covered}/{playground_total}", "quantity + control meaning + failure"),
        ("in-the-wild pages", f"{wild_covered}/{wild_total}", "pattern-level mathematical moves"),
        ("subtheme deep reads", f"{subdeep_covered}/{subdeep_total}", "paper-block math lenses"),
        ("cluster pages", f"{cluster_covered}/{cluster_total}", "cluster principle bridges"),
        ("broad theme pages", f"{deepdives_covered}/{deepdives_total}", "theme principle modules"),
        ("cvpr operational pages", f"{cvpr_covered}/{cvpr_total}", "decision math for gates and demos"),
        ("navigation & specialty", f"{nav_covered}/{nav_total}", "first-principles page reading guides"),
        ("standout papers", f"{card_lenses}/{cards}", "paper-card mathematical lenses"),
        ("subtheme paper blocks", f"{sub_lenses}/{sub_blocks}", "hidden/evidence/objective/failure"),
        ("usage patterns", f"{pattern_moves}/{pattern_blocks}", "quantity/rule/why-this-use"),
    ]
    grid = "".join(f'<div class="cell"><b>{value}</b><span>{name}</span><p>{note}</p></div>' for name, value, note in cells)
    return (
        START
        + '<section class="depth-ledger" id="depth-ledger"><h3>Current depth-pass ledger</h3>'
        + "<p>This ledger is generated from the HTML that is live in the repo. A count is credited only when the expected first-principles marker is present on the page or block.</p>"
        + f'<div class="grid">{grid}</div>'
        + "<p><b>Interpretation.</b> The main teaching spine now carries the same explicit structure across levels: hidden quantity, available evidence, mathematical rule or move, and the failure mode. Remaining unmarked pages are mostly release dashboards, validation consoles, or specialty product demos rather than the core explanatory corpus.</p>"
        + "</section>"
        + END
    )


def upsert_css(text: str) -> str:
    if ".depth-ledger{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_block(text: str, block: str) -> str:
    if START in text and END in text:
        before, rest = text.split(START, 1)
        _, after = rest.split(END, 1)
        return before + block + after
    marker = '<h2 id="risk">Highest-risk records to deepen first</h2>'
    if marker not in text:
        raise ValueError("missing risk marker")
    return text.replace(marker, block + marker, 1)


def main() -> None:
    text = PAGE.read_text(encoding="utf-8")
    text = text.replace(
        "plus <b>35</b> math concept pages.",
        "plus <b>59</b> math concept pages, with added route, primitive, worked-example, failure, and principle layers.",
    )
    text = re.sub(
        r"<div class=\"pc\"><h3>math-concept</h3><p><b>35</b> records · <b>0</b> high-risk · avg 1174\.7 words · avg first-principles markers 2\.77</p></div>",
        '<div class="pc"><h3>math-concept</h3><p><b>59</b> records · <b>0</b> high-risk · current depth-pass coverage tracked below</p></div>',
        text,
        count=1,
    )
    out = upsert_block(upsert_css(text), render())
    PAGE.write_text(out, encoding="utf-8")
    print("updated first-principles-audit.html")


if __name__ == "__main__":
    main()
