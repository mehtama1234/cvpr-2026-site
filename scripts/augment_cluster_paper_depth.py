#!/usr/bin/env python3
"""Reuse search paper-depth records inside cluster representative paper lists."""

from __future__ import annotations

import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SEARCH = ROOT / "search.html"
START = "<!-- cluster-paper-depth:start -->"
END = "<!-- cluster-paper-depth:end -->"

CSS = """
.cluster-paper-depth{background:#fffdf4;border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:0 8px 8px 0;padding:8px 10px;margin:7px 0 2px}
.cluster-paper-depth p{font-size:13.2px;line-height:1.55;margin:5px 0;color:#23302C}
.cluster-paper-depth b{color:var(--ink)}
"""

FALLBACKS = {
    "Phrase-grounded APO for Improving Chest X-ray Report Generation": {
        "s": "Phrase-grounded APO for Improving Chest X-ray Report Generation should be read as a claim about whether generated medical sentences are tied to the image regions that justify them, not as a claim that a fluent report is enough.",
        "h": "the grounded medical claim: which phrase in the report is supported by which visible region or clinical finding",
        "e": "chest X-ray regions, generated phrases, phrase-region matches, preference feedback, and whether a factual correction changes the report in the expected place",
        "m": "grounded preference optimization: reward reports that are both preferred and tied to evidence, while penalizing text that sounds plausible but lacks visual support",
        "n": "the simple method optimizes report fluency or global similarity, so it can produce a medically smooth sentence that is not supported by the scan",
        "p": "the claim gets stronger when changing or masking the relevant image region changes the specific phrase that refers to it",
        "b": "it breaks if the report keeps the same finding after the supporting region is hidden, contradicted, or replaced",
    },
    "Fuel Gauge: Estimating Chain-of-Thought Length Ahead of Time in Large Language Models": {
        "s": "Fuel Gauge should be read as a claim about predicting how much reasoning a question needs before spending tokens, not as a claim that longer reasoning is automatically better.",
        "h": "the needed reasoning length: how many intermediate steps are useful before the model should stop and answer",
        "e": "question difficulty, early hidden states, past reasoning traces, answer correctness, token cost, and failures from stopping too early or thinking too long",
        "m": "cost-aware prediction: estimate the value of more computation before paying for it, balancing answer quality against wasted reasoning tokens",
        "n": "the simple method uses a fixed reasoning length, so easy questions waste work and hard questions stop before enough evidence has been combined",
        "p": "the claim gets stronger when predicted length rises on genuinely harder examples and shorter predicted traces keep easy answers correct",
        "b": "it breaks if the length predictor mostly follows surface wording, or if saving tokens lowers correctness on cases that truly need multiple steps",
    },
}


def strip_tags(value: str) -> str:
    return " ".join(re.sub(r"<[^>]+>", " ", value).split())


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def load_depth() -> dict[str, dict]:
    text = SEARCH.read_text(encoding="utf-8")
    match = re.search(r"const D=(.*?);const THT=", text, re.S)
    if not match:
        raise ValueError("missing search data")
    records = json.loads(match.group(1))
    return {html.unescape(record["t"]).strip(): record["pd"] for record in records if isinstance(record.get("pd"), dict)}


def remove_existing(text: str) -> str:
    return re.sub(re.escape(START) + r".*?" + re.escape(END), "", text, flags=re.S)


def upsert_css(text: str) -> str:
    if ".cluster-paper-depth{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def title_for(li: str) -> str | None:
    match = re.search(r"<a [^>]*>(.*?)</a>", li, re.S)
    if not match:
        return None
    return html.unescape(strip_tags(match.group(1))).strip()


def render(pd: dict) -> str:
    return (
        START
        + '<div class="cluster-paper-depth">'
        + f"<p><b>First-principles depth.</b> {esc(pd['s'])}</p>"
        + f"<p><b>Hidden thing.</b> {esc(pd['h'])}</p>"
        + f"<p><b>Evidence.</b> {esc(pd['e'])}</p>"
        + f"<p><b>Math rule.</b> {esc(pd['m'])}</p>"
        + f"<p><b>Simple failure.</b> {esc(pd['n'])}</p>"
        + f"<p><b>Proof and break test.</b> {esc(pd['p'])} {esc(pd['b'])}</p>"
        + "</div>"
        + END
    )


LI_RE = re.compile(r'(<li style="margin:9px 0">)(.*?)(</li>)', re.S)


def augment_page(path: Path, depth: dict[str, dict]) -> tuple[int, int]:
    text = upsert_css(remove_existing(path.read_text(encoding="utf-8")))
    total = 0
    covered = 0

    def repl(match: re.Match[str]) -> str:
        nonlocal total, covered
        body = match.group(2)
        title = title_for(body)
        if not title:
            return match.group(0)
        total += 1
        pd = depth.get(title) or FALLBACKS.get(title)
        if not pd:
            return match.group(0)
        covered += 1
        return match.group(1) + body + render(pd) + match.group(3)

    out = LI_RE.sub(repl, text)
    path.write_text(out, encoding="utf-8")
    return total, covered


def main() -> None:
    depth = load_depth()
    total = 0
    covered = 0
    for path in sorted(ROOT.glob("cluster-*.html")):
        page_total, page_covered = augment_page(path, depth)
        if page_total:
            print(f"{path.name}: {page_covered}/{page_total}")
        total += page_total
        covered += page_covered
    print(f"cluster paper depth: {covered}/{total}")
    if covered != total:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
