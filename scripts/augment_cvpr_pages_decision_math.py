#!/usr/bin/env python3
"""Add first-principles decision-math sections to generated cvpr pages."""

from __future__ import annotations

import html
import re
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
START = "<!-- decision-math:start -->"
END = "<!-- decision-math:end -->"

CSS = """
.decision-math{border:1px solid var(--line,#d8ded8);border-left:3px solid var(--accent,#2f6f5e);border-radius:0 12px 12px 0;background:#f7fbf8;margin:18px auto;padding:16px 18px;max-width:1120px}
.decision-math h2{margin:0 0 8px;font-size:20px;color:var(--ink,#16211d)}
.decision-math h3{margin:0 0 6px;font-size:14px;color:var(--ink,#16211d)}
.decision-math p{margin:7px 0;line-height:1.62;color:var(--muted,#46524c);font-size:14.5px}
.decision-math .dm-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-top:10px}
.decision-math article{background:#fff;border:1px solid var(--line,#d8ded8);border-radius:8px;padding:10px 12px}
.decision-math .dm-links{font-size:13px}
.decision-math a{color:var(--accent,#2f6f5e)}
"""


@dataclass(frozen=True)
class Profile:
    family: str
    hidden: str
    evidence: str
    rule: str
    failure: str
    links: tuple[tuple[str, str], ...]


PROFILES = {
    "release": Profile(
        "release gate",
        "readiness: the chance that the page's system will still behave correctly after the clean demo path is gone and a real user, new data, or a time delay changes the input.",
        "Use the page's statuses, counts, links, commands, receipts, and failed rows as samples. A single green label is weak evidence; agreement across independent checks is stronger because the same mistake is less likely to fool every check.",
        "Treat release as an inequality, not a mood: ship only when measured evidence is above the required floor and measured residual risk is below the allowed ceiling. This is optimization with constraints.",
        "The decision breaks if the evidence is circular, stale, or selected only from easy cases. A release gate must count the uncomfortable rows because those rows estimate the part of the distribution that causes outages.",
        (("optimization", "optimization-math.html"), ("uncertainty", "uncertainty-math.html"), ("bias-variance", "bias-variance-math.html")),
    ),
    "validation": Profile(
        "validation truth",
        "validity: whether the page is measuring the behavior it claims to measure, rather than a nearby proxy that is easier to count.",
        "Look for independent records: rebuild logs, replay receipts, package tests, link checks, fixture hashes, and command outputs. Each record is a noisy measurement of the same hidden truth.",
        "Combine evidence by asking what would have to be false for the page to pass while the system is broken. The more independent facts that must all be wrong, the stronger the validation claim.",
        "Validation fails when a test checks the report instead of the underlying behavior. It also fails when a missing artifact is treated as success because there was no row where the failure could appear.",
        (("mle", "mle-math.html"), ("information theory", "information-theory-math.html"), ("uncertainty", "uncertainty-math.html")),
    ),
    "bench": Profile(
        "measured capability",
        "capability under stress: how much task performance remains when the input becomes harder, rarer, noisier, slower, or more adversarial than the easy case.",
        "Use the page's cases as samples from a task distribution. Each pass or failure is a measurement, and each scenario tells which direction the distribution was pushed.",
        "A benchmark is a controlled comparison. Hold the goal fixed, change one pressure at a time, and watch whether the output crosses the failure boundary.",
        "The benchmark is misleading if it rewards shortcuts that do not solve the real task, if it mixes many pressures without naming them, or if it averages away the rare case that matters most.",
        (("bias-variance", "bias-variance-math.html"), ("optimization", "optimization-math.html"), ("uncertainty", "uncertainty-math.html")),
    ),
    "evidence": Profile(
        "evidential weight",
        "support: how much the available record should change belief about the system, compared with belief before seeing the record.",
        "A receipt, replay, artifact, or linked source is evidence only if it could have looked different when the claim was false. Evidence gets stronger when it is specific, reproducible, and tied to a failure mode.",
        "Update belief by comparing two explanations: the system works as claimed, or the system only appears to work because the evidence is incomplete. Good evidence makes the second explanation expensive.",
        "The evidence layer breaks when provenance is unclear, when records cannot be replayed, or when the page reports conclusions without exposing the observations that forced them.",
        (("Bayes", "uncertainty-math.html"), ("information theory", "information-theory-math.html"), ("mcmc", "mcmc-math.html")),
    ),
    "remediation": Profile(
        "remaining risk",
        "residual risk: the part of the problem still left after fixes, retests, rollbacks, and reruns have removed the obvious failures.",
        "Use blocked rows, owner assignments, retest results, canary checks, rollback drills, and changed thresholds as evidence about whether risk is shrinking or just moving.",
        "A fix is accepted only when it reduces the measured failure probability without creating a larger hidden cost elsewhere. This is constrained optimization over a changing system.",
        "Remediation fails when it optimizes the visible metric while leaving the cause untouched. It also fails when a retest repeats the original easy path instead of the path that produced the failure.",
        (("optimization", "optimization-math.html"), ("kalman filtering", "kalman-filter-math.html"), ("uncertainty", "uncertainty-math.html")),
    ),
    "demo": Profile(
        "demonstrated mechanism",
        "mechanism strength: whether the interactive control changes the intended mathematical quantity, not just the surface appearance of the demo.",
        "A slider, canvas, card, or scenario is evidence when moving it changes the predicted quantity in the expected direction and exposes where the effect stops working.",
        "The demo should behave like a small experiment: change one input, hold the rest steady, and compare the observed output with the rule the page claims to teach.",
        "The demo becomes theater if it has no counterexample, no measurable output, or no way to see the difference between a real mechanism and a hard-coded visual change.",
        (("causal intervention", "q-learning-math.html"), ("optimization", "optimization-math.html"), ("information theory", "information-theory-math.html")),
    ),
    "reproduction": Profile(
        "reproducible behavior",
        "repeatability: whether the result belongs to the method and data, not to one lucky run, one cached image, one machine, or one hidden manual step.",
        "Use commands, artifacts, fixtures, hashes, environment notes, and replay outputs as evidence. The important question is whether another run has enough information to land on the same claim.",
        "A reproduction page estimates variance: if the same setup is repeated, how much can the output move before the claim changes? Small movement supports the claim; large movement demands a narrower claim.",
        "Reproduction fails when the path cannot be rerun, when missing files are silently replaced, or when the displayed output is disconnected from the command that supposedly produced it.",
        (("mle", "mle-math.html"), ("bias-variance", "bias-variance-math.html"), ("uncertainty", "uncertainty-math.html")),
    ),
    "coverage": Profile(
        "coverage mass",
        "covered mass: how much of the real conference, theme, system, or failure space is actually represented by the rows on the page.",
        "Counts are evidence only after the denominator is known. Covered items, missing items, duplicates, and untested branches all matter because coverage is a fraction, not a raw number.",
        "The mathematical move is set accounting: define the universe, mark which elements have evidence, and inspect the uncovered complement instead of celebrating the covered set alone.",
        "Coverage fails when the page counts easy-to-find items while the missing region contains the actual risk. A high numerator means little if the denominator was chosen after looking.",
        (("sets and embeddings", "embeddings-math.html"), ("information theory", "information-theory-math.html"), ("uncertainty", "uncertainty-math.html")),
    ),
    "scenario": Profile(
        "counterfactual behavior",
        "counterfactual behavior: what the system would do if the scene, input, user goal, timing, or failure condition changed in a specific way.",
        "A scenario is evidence when it states the changed condition and shows the resulting decision. The comparison is between the original world and the changed world.",
        "The rule is causal: change one cause, measure the effect, and reject explanations that cannot predict the direction of the change.",
        "Scenario testing fails when every scenario is a renamed happy path. It needs uncomfortable changes that distinguish a robust rule from memorized behavior.",
        (("q-learning", "q-learning-math.html"), ("kalman filtering", "kalman-filter-math.html"), ("uncertainty", "uncertainty-math.html")),
    ),
}


KEYWORDS = (
    ("remediation", ("remediation", "rollback", "retest", "canary", "closeout", "failure-atlas", "gauntlet")),
    ("reproduction", ("reproduction", "replay", "viewer", "repo", "forge", "paper-reproduction")),
    ("scenario", ("scenario", "incident", "drill", "stress", "counterfactual", "red-team", "injection")),
    ("coverage", ("coverage", "portfolio", "matrix", "scoreboard", "map", "systems-coverage")),
    ("demo", ("demo", "lab", "playbook", "roadmap", "backlog", "workbench", "arena", "simulator", "tournament")),
    ("validation", ("validation", "validator", "audit", "integrity", "slo", "health", "dependency")),
    ("release", ("release", "promotion", "readiness", "manifest", "seal", "launch", "change-control")),
    ("evidence", ("evidence", "receipt", "ledger", "handoff", "intake", "artifact", "provenance", "colab", "gpu", "worker", "harness")),
    ("bench", ("bench", "gate", "courtroom", "command", "center", "dashboard", "monitor", "planner", "queue")),
)


def text_between(source: str, tag: str) -> str:
    match = re.search(rf"<{tag}[^>]*>(.*?)</{tag}>", source, flags=re.S | re.I)
    if not match:
        return ""
    raw = re.sub(r"<[^>]+>", " ", match.group(1))
    return html.unescape(" ".join(raw.split()))


def choose_profile(path: Path, title: str, summary: str) -> Profile:
    stem = path.stem.lower()
    for key, words in KEYWORDS:
        if any(word in stem for word in words):
            return PROFILES[key]
    haystack = f"{title} {summary}".lower()
    for key, words in KEYWORDS:
        if any(word in haystack for word in words):
            return PROFILES[key]
    return PROFILES["bench"]


def page_subject(path: Path, title: str) -> str:
    if title:
        return title
    return path.stem.replace("cvpr-", "").replace("-", " ")


def render_block(path: Path, source: str) -> str:
    title = text_between(source, "h1")
    summary = text_between(source, "p")
    subject = page_subject(path, title)
    profile = choose_profile(path, title, summary)
    escaped_subject = html.escape(subject)
    escaped_summary = html.escape(summary) if summary else "Use the visible rows, controls, links, commands, and status labels as the observations."
    links = " · ".join(f'<a href="{href}">{html.escape(label)}</a>' for label, href in profile.links)
    return (
        f"{START}<section class=\"decision-math\" id=\"decision-math\"><h2>Decision math</h2>"
        f"<p><b>{escaped_subject}</b> is not just a screen of labels. It is a measurement problem: the page is trying to decide whether a claim about the conference system should be trusted under pressure. The page summary says: {escaped_summary}</p>"
        f"<div class=\"dm-grid\"><article><h3>Hidden quantity</h3><p>The quantity underneath this page is <b>{html.escape(profile.hidden)}</b></p></article>"
        f"<article><h3>Evidence</h3><p>{html.escape(profile.evidence)}</p></article>"
        f"<article><h3>Decision rule</h3><p>{html.escape(profile.rule)}</p></article>"
        f"<article><h3>Failure test</h3><p>{html.escape(profile.failure)}</p></article></div>"
        f"<p class=\"dm-links\"><b>Fundamental principles at play:</b> {links}. These are the same mathematical ideas used in the math pages, but here they are attached to operational decisions: what is measured, how uncertain the measurement is, and what action the evidence permits.</p>"
        f"</section>{END}"
    )


def upsert_css(source: str) -> str:
    if ".decision-math{" in source:
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
    return source.replace("<body>", "<body>" + block, 1)


def main() -> None:
    updated = 0
    for path in sorted(ROOT.glob("cvpr-*.html")):
        source = path.read_text(encoding="utf-8", errors="ignore")
        block = render_block(path, source)
        out = upsert_block(upsert_css(source), block)
        if out != source:
            path.write_text(out, encoding="utf-8")
            updated += 1
    print(f"updated {updated} cvpr pages")


if __name__ == "__main__":
    main()
