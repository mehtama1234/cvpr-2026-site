#!/usr/bin/env python3
"""Build a current quality audit for paper-depth records in search.html."""

from __future__ import annotations

import collections
import html
import json
import re
from pathlib import Path
from urllib.parse import urlencode


ROOT = Path(__file__).resolve().parents[1]
SEARCH = ROOT / "search.html"
OUT = ROOT / "paper-note-quality.html"

THEME_NAMES = {
    "emerging": "Frontier sensors, science, and trust",
    "threed": "3D reconstruction and geometry",
    "video": "Video, motion, and time",
    "generation": "Generation, editing, and restoration",
    "vlm": "Vision-language reasoning",
    "perceive": "Detection, segmentation, and recognition",
    "embodied": "Robotics, driving, and action",
    "learning": "Learning, adaptation, and efficiency",
}

WEAK_PHRASES = [
    "the claim gets stronger",
    "it breaks if",
    "the simple method",
    "hidden thing",
    "convenient visual prior",
    "useful rule",
    "real signal inside a hard measurement",
    "robust framework",
    "captures semantics",
    "leverage",
    "leveraging",
]

STOP = {
    "a", "an", "and", "are", "as", "at", "be", "between", "by", "for",
    "from", "how", "in", "into", "is", "it", "its", "of", "on", "or",
    "the", "this", "to", "toward", "towards", "via", "with", "without",
    "using", "based", "learning", "model", "models", "vision", "image",
    "images", "video", "videos", "data", "dataset", "datasets", "cvpr",
}


def esc(value: str) -> str:
    return html.escape(str(value or ""), quote=True)


def records() -> list[dict]:
    text = SEARCH.read_text(encoding="utf-8")
    match = re.search(r"const D=(.*?);const THT=", text, re.S)
    if not match:
        raise ValueError("missing search corpus")
    return json.loads(match.group(1))


def words(value: str) -> set[str]:
    return {
        token
        for token in re.findall(r"[A-Za-z][A-Za-z0-9-]{2,}", value.lower())
        if token not in STOP and not token.isdigit()
    }


def generated_text(record: dict) -> str:
    pd = record.get("pd") or {}
    return " ".join(str(pd.get(key, "")) for key in ("h", "e", "m", "n", "p", "b"))


def all_depth_text(record: dict) -> str:
    pd = record.get("pd") or {}
    return " ".join(str(pd.get(key, "")) for key in ("s", "h", "e", "m", "n", "p", "b"))


def specificity(record: dict) -> tuple[int, list[str]]:
    title_words = words(record.get("t", ""))
    body_words = words(
        " ".join(
            [
                record.get("fp", ""),
                record.get("ff", ""),
                record.get("p", ""),
                generated_text(record),
                " ".join(record.get("tg") or []),
            ]
        )
    )
    missing = sorted(title_words - body_words)
    return len(title_words) - len(missing), missing


def risk_score(record: dict) -> tuple[int, int, int, str]:
    overlap, missing = specificity(record)
    pd = record.get("pd") or {}
    title_terms = words(record.get("t", ""))
    generated_overlap = len(title_terms & words(generated_text(record)))
    missing_penalty = min(8, len(missing))
    lens_penalty = 3 if generated_overlap == 0 else 0
    short_penalty = 2 if len(record.get("fp", "")) < 100 else 0
    return (missing_penalty + lens_penalty + short_penalty, generated_overlap, -overlap, record.get("t", ""))


def theme_rows(data: list[dict]) -> str:
    by_theme = collections.Counter(record.get("th", "other") for record in data)
    return "".join(
        f"<tr><td>{esc(THEME_NAMES.get(theme, theme))}</td><td>{count}</td></tr>"
        for theme, count in by_theme.most_common()
    )


def lens_cards(data: list[dict]) -> str:
    by_rule: dict[str, list[dict]] = collections.defaultdict(list)
    for record in data:
        pd = record.get("pd") or {}
        by_rule[pd.get("m", "")].append(record)
    cards = []
    for rule, rows in sorted(by_rule.items(), key=lambda item: (-len(item[1]), item[0])):
        examples = "".join(
            f"""<li><a href="search.html#{esc(urlencode({"q": row.get("t", ""), "theme": row.get("th", "")}))}">{esc(row['t'])}</a></li>"""
            for row in rows[:4]
        )
        hidden = rows[0].get("pd", {}).get("h", "")
        counter = rows[0].get("pd", {}).get("b", "")
        lens_query = urlencode({"q": rule})
        cards.append(
            f"""<article class="card"><div class="meta">{len(rows)} papers</div>
<h3>{esc(rule)}</h3>
<p><b>Hidden quantity:</b> {esc(hidden)}</p>
<p><b>Counterexample:</b> {esc(counter)}</p>
<p><a href="search.html#{esc(lens_query)}">Review this lens in search</a></p>
<details><summary>Example papers</summary><ul>{examples}</ul></details></article>"""
        )
    return "".join(cards)


def phrase_rows(data: list[dict]) -> str:
    rows = []
    for phrase in WEAK_PHRASES:
        generated = sum(generated_text(record).lower().count(phrase) for record in data)
        full = sum(all_depth_text(record).lower().count(phrase) for record in data)
        source = "generated depth" if generated else ("title or prompt title" if full else "none")
        rows.append(f"<tr><td>{esc(phrase)}</td><td>{generated}</td><td>{full}</td><td>{source}</td></tr>")
    return "".join(rows)


def candidate_rows(data: list[dict], limit: int = 80) -> str:
    ranked = sorted(data, key=risk_score, reverse=True)[:limit]
    rows = []
    for record in ranked:
        overlap, missing = specificity(record)
        pd = record.get("pd") or {}
        missing_text = ", ".join(missing[:10])
        query = urlencode({"q": record.get("t", ""), "theme": record.get("th", "")})
        rows.append(
            f"""<tr><td><a href="search.html#{esc(query)}"><b>{esc(record.get('t', ''))}</b></a><br><span>{esc(THEME_NAMES.get(record.get('th'), record.get('th', '')))}</span></td>
<td>{overlap}</td><td>{esc(missing_text)}</td><td>{esc(pd.get('m', ''))}</td>
<td>{esc(pd.get('b', ''))}</td></tr>"""
        )
    return "".join(rows)


def render(data: list[dict]) -> str:
    depth_count = sum(1 for record in data if isinstance(record.get("pd"), dict))
    distinct_rules = len({record.get("pd", {}).get("m", "") for record in data})
    weak_generated = sum(
        generated_text(record).lower().count(phrase)
        for record in data
        for phrase in WEAK_PHRASES
    )
    by_rule = collections.Counter(record.get("pd", {}).get("m", "") for record in data)
    largest_lens = by_rule.most_common(1)[0][1]
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Paper-note quality - CVPR 2026</title>
<style>:root{{--ink:#0F1619;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--accent-deep:#0A5A62;--warn:#B37A1E;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.58}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,.meta,nav a,th,td span,footer{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:90ch;color:#AEBABD}}nav{{background:#142326;border-top:1px solid #263237}}nav .wrap{{display:flex;gap:12px;flex-wrap:wrap;padding-top:10px;padding-bottom:10px}}nav a{{font-size:12px;color:#B7DDE1}}a{{color:var(--accent-deep)}}.stats,.grid{{display:grid;gap:12px}}.stats{{grid-template-columns:repeat(4,minmax(0,1fr));margin:18px 0}}.stat,.card,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span,.meta,td span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:14px 0}}.grid{{grid-template-columns:repeat(2,minmax(0,1fr));margin:14px 0}}.card{{border-left:4px solid var(--accent);padding:14px}}.card h3{{font-size:17px;line-height:1.25;margin:5px 0 8px}}.card p{{font-size:13.7px;color:#23302C;margin:7px 0}}summary{{cursor:pointer;color:var(--accent-deep);font-family:var(--mono);font-size:12px}}table{{width:100%;border-collapse:collapse;font-size:13px}}th{{text-align:left;font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);background:#E4ECEB}}th,td{{border-bottom:1px solid var(--line);padding:9px 10px;vertical-align:top}}.table-wrap{{overflow:auto;border:1px solid var(--line);border-radius:8px;background:var(--panel)}}.table-wrap table{{min-width:920px}}footer{{border-top:1px solid var(--line);padding:22px 0 54px;color:var(--muted);font-size:12px;margin-top:24px}}@media(max-width:850px){{.stats,.grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 - paper-depth quality</div><h1>Paper-Note Quality Audit</h1><p>This page audits the current first-principles paper-depth records from search.html. It checks coverage, repeated mathematical lenses, stale generic phrases, and candidates where the assigned lens may need a more paper-specific manual review.</p></div></header>
<nav><div class="wrap"><a href="index.html">all themes</a><a href="search.html">search papers</a><a href="paper-review-queue.html">review queue</a><a href="first-principles-audit.html">first-principles audit</a></div></nav>
<main class="wrap"><section class="stats"><div class="stat"><b>{len(data)}</b><span>search records</span></div><div class="stat"><b>{depth_count}</b><span>paper-depth records</span></div><div class="stat"><b>{distinct_rules}</b><span>mathematical lenses</span></div><div class="stat"><b>{weak_generated}</b><span>weak phrase hits in generated fields</span></div></section>
<section class="panel"><h2>What This Audit Means</h2><p>The paper notes now use a two-level design. Each paper keeps its own title, tags, paper focus, and first-principles summary, then receives one deeper mathematical lens: hidden quantity, evidence, mathematical rule, naive failure, proof test, and counterexample. Repetition is expected at the lens level because many papers share the same underlying move. The quality question is whether the repeated lens is the right one for the paper and whether old generic wording has been removed.</p><p>The largest lens currently covers <b>{largest_lens}</b> papers. That is not automatically a bug; it is a signal that this lens is doing a lot of work and deserves manual review sampling.</p></section>
<section class="panel"><h2>Theme Coverage</h2><div class="table-wrap"><table><thead><tr><th>Theme</th><th>Paper-depth records</th></tr></thead><tbody>{theme_rows(data)}</tbody></table></div></section>
<section class="panel"><h2>Repeated Mathematical Lenses</h2><p>These are the reusable first-principles frames assigned across the corpus. Review the largest lenses first when checking whether depth is accurate rather than merely present.</p><div class="grid">{lens_cards(data)}</div></section>
<section class="panel"><h2>Stale Generic Phrase Check</h2><p>Generated fields exclude the title-bearing prompt, so this table separates words that still come from generated explanatory text from words that only appear inside official titles.</p><div class="table-wrap"><table><thead><tr><th>Phrase</th><th>Generated fields</th><th>All depth text</th><th>Source</th></tr></thead><tbody>{phrase_rows(data)}</tbody></table></div></section>
<section class="panel"><h2>Manual Review Candidates</h2><p>These are not failures. They are the records most worth sampling because the title contains several specific terms that are weakly echoed by the current explanatory text or because the reusable lens may be too broad for the paper.</p><div class="table-wrap"><table><thead><tr><th>Paper</th><th>Specificity score</th><th>Missing title terms</th><th>Assigned mathematical rule</th><th>Counterexample</th></tr></thead><tbody>{candidate_rows(data)}</tbody></table></div></section></main>
<footer><div class="wrap">Generated by scripts/build_paper_note_quality.py from search.html paper-depth records.</div></footer></body></html>"""


def main() -> None:
    data = records()
    OUT.write_text(render(data), encoding="utf-8")
    print(f"wrote {OUT.name}: {len(data)} records")


if __name__ == "__main__":
    main()
