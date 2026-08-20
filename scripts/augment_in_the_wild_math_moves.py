#!/usr/bin/env python3
"""Add first-principles mathematical moves to in-the-wild usage patterns."""

from __future__ import annotations

import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
START = "<!-- pattern-math-move:start -->"
END = "<!-- pattern-math-move:end -->"

CSS = """
.pmove{border-left:2px solid var(--good);background:#f3faf4;border-radius:0 7px 7px 0;padding:9px 11px;margin:8px 0 10px;color:#23302C}
.pmove .plab{font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--good);font-weight:700;margin-bottom:4px}
.pmove p{font-size:13.5px;line-height:1.55;margin:5px 0;color:#23302C}
.pmove b{color:var(--ink)}
"""

MOVES = {
    "attention": ("which item should look at which other item", "compute a content-based weighted average, then restrict, compress, or redirect that lookup when full all-pairs comparison is too costly or too loose", "all uses differ in what the items are: image patches, text tokens, sensors, agents, or action history."),
    "mamba": ("the running state that carries long context", "replace all-pairs comparison with a selective state update that scans through the sequence and keeps only the history needed later", "the use cases are really different answers to what should be remembered and what can be forgotten."),
    "moe": ("which expert should process this input", "route each token, patch, task, or scene to a small subset of specialists while keeping the inactive experts silent", "capacity grows without paying for every parameter on every example, but routing becomes the central mathematical decision."),
    "mixture-of-lora": ("which low-rank update should modify the frozen model", "express task change as a small matrix direction, then choose, combine, or separate those directions so they do not overwrite one another", "the use cases differ by what the adapter is trying to cross: domain, style, sensor, task, or safety boundary."),
    "distill": ("which behavior from the large system is worth preserving", "train a smaller or cheaper system to match the teacher's probability shape, features, influence, or decisions rather than only hard labels", "distillation is a compression problem over functions, not a copy of final answers."),
    "equivariance": ("which transformation should move the answer in a predictable way", "tie the function to the symmetry of the task so rotating, shifting, permuting, or changing viewpoint does not create arbitrary behavior", "the uses differ by the symmetry they decide to respect."),
    "gnn": ("which relationships carry information", "pass messages along edges so each node is updated by the connected context instead of by isolated features alone", "the pattern changes when the graph is objects, agents, body parts, roads, molecules, or scene regions."),
    "node": ("the continuous rule of motion", "learn a derivative field and integrate it so depth, time, or transformation becomes a smooth path rather than a fixed stack of layers", "the same idea can describe learned dynamics, continuous normalizing flows, or model depth as time."),
    "flow": ("where each visible point moved", "choose correspondences that explain frame-to-frame change while respecting local structure and occlusion", "every use turns motion into a constraint on identity through time."),
    "video": ("the trajectory of hidden scene state", "model ordered states so identity, motion, camera, and cause remain coherent across many frames", "video use cases differ in whether the trajectory is observed, generated, predicted, edited, or used for action."),
    "sam": ("which pixels belong together as one object or part", "condition a segmentation function on a prompt and return a mask whose boundary can be reused by other systems", "the mask becomes evidence for editing, measuring, labeling, mapping, or grasping."),
    "detr": ("the set of objects and their one-to-one assignments", "use object queries plus matching loss so each real instance is claimed once instead of detected through duplicate proposals", "the same set-prediction rule is reused for boxes, masks, parts, tracks, lanes, and robot targets."),
    "depth": ("the hidden distance behind the image", "infer a surface field that makes the 2D measurement geometrically plausible under perspective, scale, and smoothness constraints", "every use is a different way of adding evidence to an underdetermined inverse problem."),
    "clip": ("the shared meaning coordinate for words and images", "pull matching text and visual evidence together while pushing mismatches apart, then use similarity as the query rule", "open vocabulary works because labels become vectors rather than fixed output slots."),
    "ssl": ("the stable structure present without labels", "make representations agree across harmless changes while keeping enough detail for later tasks", "the use cases differ by which change is treated as harmless and which information must survive."),
    "vq": ("the discrete symbol that stands in for visual detail", "map continuous signals into a finite codebook, then model or reuse those codes as tokens", "the codebook is the bottleneck: it decides which details become reusable language for later models."),
    "tta": ("the correction needed for the current test stream", "adapt from unlabeled deployment evidence while trying not to reinforce wrong pseudo-beliefs", "each use is a different safeguard against self-training collapse under shift."),
    "ttc": ("the cause of model failure", "turn an observed mistake into a measurable variable: shift, uncertainty, shortcut, attack, subgroup gap, or missing evidence", "the pattern blocks become a taxonomy of what must be measured before it can be fixed."),
    "uncertainty": ("how much the evidence supports the answer", "make confidence track actual risk by using disagreement, probability shape, residuals, or shift signals", "the same math matters for abstention, triage, planning, medical review, and safety monitors."),
    "rl": ("which action has the best future consequence", "optimize expected return over trajectories instead of judging only the immediate prediction", "the use cases differ by where reward comes from and how credit is assigned across time."),
    "vla": ("the action-relevant state grounded by vision and language", "bind a word-level goal to scene variables, then choose motor commands that satisfy the goal under physical constraints", "language is not the answer; it is a condition on what action should become valid."),
    "nerf": ("the continuous scene field behind the views", "fit a function whose rendered rays reproduce the observed images from many cameras", "every use changes what the field stores or how strongly geometry is constrained."),
    "gsplat": ("the finite set of 3D blobs that can render the scene", "optimize blob position, shape, opacity, and color so projection and alpha blending match the photographs", "splatting is the same inverse-rendering problem made fast enough to become an editable map."),
    "fm": ("the velocity field from simple noise to data", "learn the direction samples should move at each time so generation becomes a short, stable transport path", "the uses differ by what object is transported: pixels, video, geometry, action, or LiDAR."),
    "ar": ("the next piece conditioned on all previous pieces", "factor a hard joint distribution into a chain of next-step predictions", "the method is powerful because each local prediction is simple, and fragile because early errors feed the future."),
    "ebm": ("the energy ranking over possible states", "assign low energy to valid explanations and high energy to invalid ones, then search or sample from the low-energy region", "the uses differ by what counts as a good state: image, label, trajectory, edit, or physical plan."),
    "normflow": ("the invertible map between noise and data", "transform probability mass while tracking exact density through the Jacobian", "the gain is exact likelihood; the cost is that the map must stay invertible."),
    "adversarial": ("the nearest failure direction or hidden trigger", "measure worst-case risk around real examples instead of average accuracy alone", "the use cases differ by where the attack enters: pixels, features, training data, sensors, prompts, or policies."),
}


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def strip_tags(value: str) -> str:
    return " ".join(re.sub(r"<[^>]+>", " ", value).split())


def slug_for(path: Path) -> str:
    return path.name.removesuffix("-in-the-wild.html")


def has_word(text: str, keyword: str) -> bool:
    if " " in keyword or "-" in keyword:
        return keyword in text
    return re.search(rf"(?<![a-z0-9]){re.escape(keyword)}(?![a-z0-9])", text) is not None


def find_blocks(text: str, marker: str) -> list[tuple[int, int]]:
    ranges = []
    i = 0
    while True:
        start = text.find(marker, i)
        if start == -1:
            break
        cursor = start
        depth = 0
        while cursor < len(text):
            next_open = text.find("<div", cursor)
            next_close = text.find("</div>", cursor)
            if next_close == -1:
                raise ValueError("unclosed div")
            if next_open != -1 and next_open < next_close:
                depth += 1
                cursor = next_open + 4
            else:
                depth -= 1
                cursor = next_close + len("</div>")
                if depth == 0:
                    ranges.append((start, cursor))
                    i = cursor
                    break
    return ranges


def title_for(block: str) -> str:
    match = re.search(r"<h3>(.*?)</h3>", block, re.S)
    return strip_tags(match.group(1)) if match else "this use"


def move_for(slug: str, block: str) -> tuple[str, str, str]:
    text = strip_tags(block).lower()
    if any(has_word(text, k) for k in ("adversarial", "attack", "backdoor", "poison", "jailbreak")):
        return MOVES["adversarial"]
    if any(has_word(text, k) for k in ("uncertainty", "calibration", "ood", "out-of-distribution")):
        return MOVES["uncertainty"]
    if slug in {"diffusion", "fm", "normflow"}:
        return MOVES["fm"] if slug != "normflow" else MOVES["normflow"]
    if slug in {"nerf", "gsplat"}:
        return MOVES[slug]
    return MOVES.get(slug, MOVES["ttc"])


def render_move(slug: str, block: str) -> str:
    quantity, rule, consequence = move_for(slug, block)
    title = title_for(block)
    return (
        START
        + '<div class="pmove"><div class="plab">Mathematical move</div>'
        + f"<p><b>Quantity.</b> In {esc(title)}, the recurring quantity is {esc(quantity)}.</p>"
        + f"<p><b>Rule.</b> The mathematical rule is to {esc(rule)}.</p>"
        + f"<p><b>Why this use exists.</b> {esc(consequence[:1].upper() + consequence[1:])}</p>"
        + "</div>"
        + END
    )


def remove_existing(block: str) -> str:
    return re.sub(re.escape(START) + r".*?" + re.escape(END), "", block, flags=re.S)


def insert_after_why(slug: str, block: str) -> str:
    block = remove_existing(block)
    ranges = find_blocks(block, '<div class="why"')
    if not ranges:
        raise ValueError(f"missing why block in {title_for(block)}")
    _, end = ranges[0]
    return block[:end] + render_move(slug, block) + block[end:]


def upsert_css(text: str) -> str:
    if ".pmove{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def main() -> None:
    pages = sorted(ROOT.glob("*-in-the-wild.html"))
    total = 0
    changed_pages = []
    for path in pages:
        text = path.read_text(encoding="utf-8")
        ranges = find_blocks(text, '<div class="pat"')
        if not ranges:
            continue
        slug = slug_for(path)
        text = upsert_css(text)
        ranges = find_blocks(text, '<div class="pat"')
        pieces = []
        last = 0
        changed = 0
        for start, end in ranges:
            block = text[start:end]
            new_block = insert_after_why(slug, block)
            pieces.append(text[last:start])
            pieces.append(new_block)
            last = end
            if new_block != block:
                changed += 1
        pieces.append(text[last:])
        out = "".join(pieces)
        if out != text:
            path.write_text(out, encoding="utf-8")
            changed_pages.append((path.name, changed))
        total += len(ranges)
    print(f"scanned {total} pattern blocks")
    print(f"updated {len(changed_pages)} pages")
    for name, count in changed_pages:
        print(f"{name}: {count}")


if __name__ == "__main__":
    main()
