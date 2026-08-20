#!/usr/bin/env python3
"""Build a visible review queue for first-principles paper notes."""

from __future__ import annotations

import html
import json
import re
from collections import defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SEARCH = ROOT / "search.html"
OUT = ROOT / "paper-review-queue.html"

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

PRIORITY = (
    "benchmark", "dataset", "adversarial", "attack", "backdoor", "watermark",
    "3d", "depth", "pose", "reconstruction", "diffusion", "generation",
    "vision-language", "vlm", "grounding", "segmentation", "detection",
    "robot", "driving", "policy", "federated", "continual", "quantization",
)


def esc(value: str) -> str:
    return html.escape(value or "", quote=True)


def load_records() -> list[dict]:
    text = SEARCH.read_text(encoding="utf-8")
    match = re.search(r"const D=(.*?);const THT=", text, re.S)
    if not match:
        raise ValueError("missing search corpus")
    return json.loads(match.group(1))


def score(record: dict) -> int:
    blob = " ".join(
        [record.get("t", ""), record.get("p", ""), record.get("fp", ""), record.get("ff", "")]
        + list(record.get("tg") or [])
    ).lower()
    value = sum(8 for word in PRIORITY if word in blob)
    value += max(0, 180 - len(record.get("p", ""))) // 20
    if record.get("r"):
        value += 2
    return value


def select(records: list[dict], per_theme: int = 8) -> list[dict]:
    by_theme: dict[str, list[dict]] = defaultdict(list)
    for record in records:
        if isinstance(record.get("pd"), dict):
            by_theme[record.get("th", "other")].append(record)
    chosen = []
    for theme in THEME_NAMES:
        ranked = sorted(by_theme[theme], key=lambda r: (-score(r), r["t"]))
        chosen.extend(ranked[:per_theme])
    return chosen


def card(record: dict, idx: int) -> str:
    pd = record["pd"]
    tags = "".join(f'<span class="tag">{esc(tag)}</span>' for tag in (record.get("tg") or [])[:8])
    repo = f'<a href="{esc(record["r"])}" target="_blank" rel="noopener">code</a>' if record.get("r") else ""
    search_blob = " ".join(
        [
            record.get("t", ""),
            record.get("fp", ""),
            record.get("p", ""),
            record.get("ff", ""),
            pd["h"],
            pd["e"],
            pd["m"],
            pd["n"],
            pd["p"],
            pd["b"],
            " ".join(record.get("tg") or []),
        ]
    ).lower()
    return f"""<article class="card" id="paper-{idx}" data-theme="{esc(record.get("th", ""))}" data-search="{esc(search_blob)}">
<div class="meta"><span>{idx:02d}</span><span>{esc(THEME_NAMES.get(record.get("th"), record.get("th", "")))}</span>{repo}</div>
<h2>{esc(record["t"])}</h2>
<p class="one">{esc(record.get("fp") or record.get("p") or "")}</p>
<div class="depth">
<p><b>What to review.</b> {esc(pd["s"])}</p>
<p><b>Hidden thing.</b> {esc(pd["h"])}</p>
<p><b>Evidence.</b> {esc(pd["e"])}</p>
<p><b>Math rule.</b> {esc(pd["m"])}</p>
<p><b>Why the simple method fails.</b> {esc(pd["n"])}</p>
<p><b>What would prove it.</b> {esc(pd["p"])}</p>
<p><b>What would break it.</b> {esc(pd["b"])}</p>
</div>
<details><summary>Original paper-note text</summary><p>{esc(record.get("p", ""))}</p><p>{esc(record.get("ff", ""))}</p></details>
<div class="tags">{tags}</div>
</article>"""


def render(records: list[dict], chosen: list[dict]) -> str:
    counts = defaultdict(int)
    for record in chosen:
        counts[record["th"]] += 1
    stat_cards = "".join(
        f'<div class="stat"><b>{counts[theme]}</b><span>{esc(name)}</span></div>'
        for theme, name in THEME_NAMES.items()
    )
    cards = "".join(card(record, idx) for idx, record in enumerate(chosen, 1))
    options = "".join(f'<option value="{esc(theme)}">{esc(name)}</option>' for theme, name in THEME_NAMES.items())
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Paper Review Queue — CVPR 2026</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--accent-deep:#0A5A62;--warn:#B37A1E;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.58}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,.meta,.stat span,nav a,summary,label,.count{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:var(--accent-deep)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0}}.stat{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:11px}}.stat b{{display:block;font-size:24px}}.stat span{{font-size:11px;color:var(--muted)}}.controls{{position:sticky;top:0;z-index:4;background:rgba(245,246,244,.97);border-bottom:1px solid var(--line);padding:12px 0;display:grid;grid-template-columns:1fr 260px auto;gap:10px;align-items:end}}label{{display:block;font-size:11px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase}}input,select{{width:100%;border:1px solid var(--line);border-radius:6px;background:#fff;color:var(--ink);font:14px var(--sans);padding:8px 9px;margin-top:4px}}.count{{font-size:12px;color:var(--accent-deep);white-space:nowrap;padding-bottom:9px}}.queue{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:18px 0 36px}}.card{{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:8px;padding:15px 16px}}.card[hidden]{{display:none}}.meta{{display:flex;gap:9px;align-items:center;flex-wrap:wrap;font-size:11px;color:var(--muted)}}.meta span:first-child{{color:var(--accent-deep);font-weight:700}}.card h2{{font-size:19px;line-height:1.22;margin:7px 0 8px}}.one{{font-size:14.5px;color:#23302C}}.depth{{background:#fffdf4;border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:0 8px 8px 0;padding:9px 11px;margin:10px 0}}.depth p{{font-size:13.5px;line-height:1.55;margin:6px 0}}details{{margin-top:10px}}summary{{cursor:pointer;color:var(--accent-deep);font-size:12px}}details p{{font-size:13.5px;color:#23302C}}.tag{{display:inline-block;font-family:var(--mono);font-size:10.5px;color:var(--muted);background:#E4ECEB;border-radius:4px;padding:1px 6px;margin:2px 3px 0 0}}footer{{border-top:1px solid var(--line);padding:22px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.queue,.stats,.controls{{grid-template-columns:1fr}}h1{{font-size:34px}}.count{{padding-bottom:0}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · paper review</div><h1>Paper Review Queue</h1><p>A smaller review surface for checking whether the new paper notes are truly first-principles, detailed, and plain. Each card shows the hidden quantity, evidence, math rule, simple failure, proof test, and break test.</p><nav><a href="index.html">all themes</a><a href="search.html">all papers</a><a href="first-principles-audit.html">audit</a><a href="math.html">math pages</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{len(chosen)}</b><span>review papers</span></div><div class="stat"><b>{len(records)}</b><span>source papers</span></div><div class="stat"><b>8</b><span>themes balanced</span></div><div class="stat"><b>7</b><span>depth fields per paper</span></div>{stat_cards}</section><section class="controls"><label>Search<input id="q" placeholder="title, evidence, failure, tag"></label><label>Theme<select id="theme"><option value="">All themes</option>{options}</select></label><div class="count" id="count"></div></section><section class="queue" id="queue">{cards}</section></main>
<footer><div class="wrap">Generated by scripts/build_paper_review_queue.py from search.html paper-depth records.</div></footer><script>
const cards=[...document.querySelectorAll(".card")], q=document.getElementById("q"), theme=document.getElementById("theme"), count=document.getElementById("count");
function applyFilters(){{ const term=q.value.trim().toLowerCase(), th=theme.value; let shown=0; for (const card of cards){{ const okTheme=!th || card.dataset.theme===th; const okText=!term || card.dataset.search.includes(term); const show=okTheme && okText; card.hidden=!show; if(show) shown++; }} count.textContent=`showing ${{shown}} / ${{cards.length}} papers`; }}
q.addEventListener("input", applyFilters); theme.addEventListener("change", applyFilters); applyFilters();
</script></body></html>"""


def main() -> None:
    records = load_records()
    chosen = select(records)
    OUT.write_text(render(records, chosen), encoding="utf-8")
    print(f"wrote {OUT.name}: {len(chosen)} review papers from {len(records)} source papers")


if __name__ == "__main__":
    main()
