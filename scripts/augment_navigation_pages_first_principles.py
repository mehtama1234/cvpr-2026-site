#!/usr/bin/env python3
"""Add first-principles reading guides to remaining navigation/specialty pages."""

from __future__ import annotations

import html
import re
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
START = "<!-- navigation-principles:start -->"
END = "<!-- navigation-principles:end -->"

EXCLUDE_SUFFIXES = (
    "-math.html",
    "-why.html",
    "-playground.html",
    "-in-the-wild.html",
    "-deep-reads.html",
    "-deepdive.html",
)
EXCLUDE_PREFIXES = ("cvpr-", "cluster-")

CSS = """
.navigation-principles{border:1px solid var(--line,#d8ded8);border-left:3px solid var(--accent,#365f54);border-radius:0 12px 12px 0;background:#f7faf8;margin:18px auto;padding:16px 18px;max-width:1120px}
.navigation-principles h2{margin:0 0 8px;font-size:20px;color:var(--ink,#16211d)}
.navigation-principles h3{margin:0 0 6px;font-size:14px;color:var(--ink,#16211d)}
.navigation-principles p{margin:7px 0;line-height:1.62;color:var(--muted,#46524c);font-size:14.5px}
.navigation-principles .np-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-top:10px}
.navigation-principles article{background:#fff;border:1px solid var(--line,#d8ded8);border-radius:8px;padding:10px 12px}
.navigation-principles .np-links{font-size:13px}
.navigation-principles a{color:var(--accent,#365f54)}
"""


@dataclass(frozen=True)
class Profile:
    kind: str
    hidden: str
    evidence: str
    move: str
    failure: str
    links: tuple[tuple[str, str], ...]


PROFILES = {
    "front_door": Profile(
        "field map",
        "A many-to-one map: thousands of papers are compressed into a smaller set of themes, routes, and repeated mathematical moves.",
        "Treat headings, counts, theme links, and cross-links as evidence about the shape of the corpus. A count says where the mass is; a link says which ideas share machinery.",
        "The mathematical move is compression with preserved signal. The page throws away paper-by-paper detail so the reader can see the larger pattern, but it should keep the distinctions that change understanding.",
        "The map fails if compression becomes distortion: if two different ideas are merged because they share a buzzword, or if a small but important region disappears because its count is low.",
        (("embeddings", "embeddings-math.html"), ("information bottleneck", "information-bottleneck-math.html"), ("spectral graph", "spectral-graph-math.html")),
    ),
    "course": Profile(
        "learning path",
        "A dependency order: some ideas only make sense after earlier ideas have made the missing quantity visible.",
        "Use section order, examples, and route links as evidence. A good course page should make each later idea feel necessary rather than arbitrary.",
        "The mathematical move is building a basis. Each lesson adds one reusable direction of thought, so later pages can be understood as combinations of earlier directions.",
        "The path fails if it assumes the thing it needs to teach, or if it presents terms before the everyday problem that forced those terms to exist.",
        (("linear basis", "svd-math.html"), ("optimization", "optimization-math.html"), ("information theory", "information-theory-math.html")),
    ),
    "math_index": Profile(
        "principle index",
        "Reuse: the same few mathematical rules keep reappearing under different names across vision papers.",
        "The recurring primitive cards, math routes, and idea-graph links are evidence that different papers are sharing one underlying operation.",
        "The mathematical move is abstraction. Strip away implementation detail until the same operation is visible in several places: compare, compress, smooth, sample, optimize, remember, or control.",
        "The index fails if abstraction becomes vague. A real principle must say what quantity changes, what stays fixed, and what mistake the rule is designed to prevent.",
        (("optimization", "optimization-math.html"), ("kernels", "kernels-math.html"), ("mcmc", "mcmc-math.html")),
    ),
    "corpus": Profile(
        "corpus measurement",
        "A distribution over themes, methods, claims, and failure modes, estimated from the papers rather than guessed from memory.",
        "Paper counts, tags, search rows, charts, and note text are samples from that distribution. The denominator matters because a pattern is only meaningful relative to what could have appeared.",
        "The mathematical move is estimation from samples. The page turns many noisy records into a belief about what the conference is really emphasizing.",
        "The measurement fails if the sample is biased, if duplicate language is mistaken for independent evidence, or if the page reports a trend without showing the records that support it.",
        (("mle", "mle-math.html"), ("bias-variance", "bias-variance-math.html"), ("information theory", "information-theory-math.html")),
    ),
    "search": Profile(
        "query surface",
        "Matching: the user has an intent, each paper has evidence, and the page ranks which records are closest to the intent.",
        "Search terms, filters, tags, titles, and snippets are evidence. A good result is not merely a word match; it preserves the reason the user asked.",
        "The mathematical move is nearest-neighbor retrieval in a meaning space. Filtering carves away impossible candidates; ranking orders the survivors by similarity and usefulness.",
        "Search fails when surface words beat meaning, when rare terms vanish, or when the page cannot explain why one result is closer than another.",
        (("embeddings", "embeddings-math.html"), ("kernels", "kernels-math.html"), ("information theory", "information-theory-math.html")),
    ),
    "system": Profile(
        "system overview",
        "A pipeline: pixels, prompts, scenes, or paper claims move through stages, and each stage changes the kind of uncertainty the system carries.",
        "Stage labels, demos, controls, outputs, and risk notes are evidence about where the pipeline gains information and where it can lose it.",
        "The mathematical move is composition. A system is not one magic function; it is several functions chained together, and the output is only as trustworthy as the weakest transformation.",
        "The overview fails if it shows the happy path without the bottleneck: where information is compressed, where a constraint is enforced, where uncertainty should stop the system.",
        (("backprop", "backprop-math.html"), ("kalman filtering", "kalman-filter-math.html"), ("optimization", "optimization-math.html")),
    ),
    "audit": Profile(
        "quality audit",
        "A gap between what the site claims to explain and what the current text actually proves to a careful reader.",
        "Markers, counts, risk rows, broken links, repeated phrases, and missing sections are evidence. The audit is useful only when it can point to the exact page or block that needs work.",
        "The mathematical move is residual analysis. After a model explains what it can, inspect what is left over; the residual tells you where the explanation is still weak.",
        "The audit fails if it becomes a checklist that rewards markers without reading substance, or if it treats absence of an error as proof of depth.",
        (("bias-variance", "bias-variance-math.html"), ("information theory", "information-theory-math.html"), ("optimization", "optimization-math.html")),
    ),
}


PROFILE_RULES = (
    ("audit", ("audit", "quality")),
    ("search", ("search",)),
    ("corpus", ("report", "figures", "landscape", "data-centric", "scarce-data", "paper-note", "cross-conference", "concepts", "deep-reads")),
    ("math_index", ("math", "idea-graph", "mechanisms", "techniques", "engines", "lora", "mixture-of-lora")),
    ("course", ("course", "routes", "through-line", "open-problems")),
    ("system", ("demo", "studio", "serving", "platform", "validation", "reconstruction", "visual-search", "world-model", "reasoning", "reliability", "provenance", "release-gate")),
    ("front_door", ("index", "hub")),
)


def is_target(path: Path) -> bool:
    name = path.name
    if name.startswith(EXCLUDE_PREFIXES) or name.endswith(EXCLUDE_SUFFIXES):
        return False
    return True


def text_between(source: str, tag: str) -> str:
    match = re.search(rf"<{tag}[^>]*>(.*?)</{tag}>", source, flags=re.S | re.I)
    if not match:
        return ""
    raw = re.sub(r"<[^>]+>", " ", match.group(1))
    return html.unescape(" ".join(raw.split()))


def choose_profile(path: Path) -> Profile:
    stem = path.stem.lower()
    for key, words in PROFILE_RULES:
        if any(word in stem for word in words):
            return PROFILES[key]
    return PROFILES["front_door"]


def render_block(path: Path, source: str) -> str:
    clean_source = source
    if START in clean_source and END in clean_source:
        before, rest = clean_source.split(START, 1)
        _, after = rest.split(END, 1)
        clean_source = before + after
    title = text_between(clean_source, "h1") or path.stem.replace("-", " ")
    summary = text_between(clean_source, "p")
    profile = choose_profile(path)
    rel_prefix = "" if path.parent == ROOT else "../" * len(path.relative_to(ROOT).parent.parts)
    links = " · ".join(f'<a href="{rel_prefix}{href}">{html.escape(label)}</a>' for label, href in profile.links)
    summary_sentence = (
        f" The page says: {html.escape(summary)}"
        if summary
        else " Read the visible headings, controls, links, counts, and tables as the page's evidence."
    )
    return (
        f"{START}<section class=\"navigation-principles\" id=\"navigation-principles\"><h2>How to read this page from first principles</h2>"
        f"<p><b>{html.escape(title)}</b> is a {html.escape(profile.kind)}, not just a collection of links or cards.{summary_sentence}</p>"
        f"<div class=\"np-grid\"><article><h3>Hidden structure</h3><p>{html.escape(profile.hidden)}</p></article>"
        f"<article><h3>Evidence on the page</h3><p>{html.escape(profile.evidence)}</p></article>"
        f"<article><h3>Mathematical move</h3><p>{html.escape(profile.move)}</p></article>"
        f"<article><h3>Failure mode</h3><p>{html.escape(profile.failure)}</p></article></div>"
        f"<p class=\"np-links\"><b>Principles underneath:</b> {links}. These links connect the page-level reading move back to the reusable math pages, so the navigation layer is part of the same first-principles graph rather than a separate table of contents.</p>"
        f"</section>{END}"
    )


def upsert_css(source: str) -> str:
    if ".navigation-principles{" in source:
        return source
    if "</style>" in source:
        return source.replace("</style>", CSS + "\n</style>", 1)
    return source.replace("</head>", f"<style>{CSS}</style></head>", 1)


def upsert_block(source: str, block: str) -> str:
    if START in source and END in source:
        before, rest = source.split(START, 1)
        _, after = rest.split(END, 1)
        return before + block + after
    if "</header>" in source:
        return source.replace("</header>", "</header>" + block, 1)
    if "<main" in source:
        return re.sub(r"(<main[^>]*>)", r"\1" + block, source, count=1)
    if "<body>" in source:
        return source.replace("<body>", "<body>" + block, 1)
    raise ValueError("cannot place block")


def main() -> None:
    updated = 0
    targets = [p for p in sorted(ROOT.rglob("*.html")) if is_target(p)]
    for path in targets:
        source = path.read_text(encoding="utf-8", errors="ignore")
        block = render_block(path, source)
        out = upsert_block(upsert_css(source), block)
        if out != source:
            path.write_text(out, encoding="utf-8")
            updated += 1
    print(f"updated {updated} navigation/specialty pages")


if __name__ == "__main__":
    main()
