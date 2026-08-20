#!/usr/bin/env python3
"""Add first-principles math lens rows to subtheme deep-read paper blocks."""

from __future__ import annotations

import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
START = "<!-- dr-math-lens:start -->"
END = "<!-- dr-math-lens:end -->"

CSS = """
.dr-math{background:#f3faf4;border-left:2px solid var(--good);padding:8px 10px;border-radius:0 7px 7px 0}
.dr-math p{margin:5px 0;font-size:13.4px;line-height:1.55;color:#23302C}
.dr-math b{color:var(--ink)}
"""

BASE = {
    "attention": ("which tokens, regions, frames, or agents should exchange information.",
                  "queries, keys, values, saliency, token positions, modality streams, and measured task loss.",
                  "learn a weighted lookup that spends comparison only where information changes the answer.",
                  "attention can become expensive, diffuse, or pointed at the wrong evidence, so the model pays for context without gaining truth."),
    "mamba": ("the compact running state that can carry long-range information without comparing every token pair.",
              "ordered tokens, previous state, gates, sequence loss, latency, and memory use.",
              "replace all-pairs lookup with a state update that keeps enough history for the next decision.",
              "if the state forgets the wrong detail, long-range dependencies disappear even though the computation is fast."),
    "moe": ("which expert or submodel should handle the current example, token, task, or domain.",
            "routing scores, expert capacity, token features, load balance, and downstream loss.",
            "allocate computation conditionally so different inputs use different parameters without activating the whole model.",
            "routing can collapse onto a few experts, waste capacity, or send rare cases to the wrong specialist."),
    "mixture-of-lora": ("the small adapter direction or low-rank update needed for this task or condition.",
                        "base-model features, LoRA weights, routing signals, rank limits, and task performance.",
                        "compose small low-rank changes while preserving the useful behavior of the shared base model.",
                        "adapters can interfere, overfit, or move the model in a direction that helps one condition while harming another."),
    "distill": ("the teacher behavior that is worth preserving in a smaller or cheaper model.",
                "teacher probabilities, intermediate features, gradients, examples, and student error.",
                "match the useful shape of the teacher's function, not only its hard final labels.",
                "the student can copy surface answers while losing uncertainty, rare behavior, or the reason the teacher generalized."),
    "equivariance": ("which transformations should change the representation predictably and which should leave the answer unchanged.",
                     "rotations, shifts, views, symmetries, coordinate frames, and consistency losses.",
                     "build the task's symmetry into the function so transformed inputs produce transformed, not arbitrary, outputs.",
                     "the model may relearn the same pattern in every pose and then fail when geometry moves outside the training set."),
    "gnn": ("the node, edge, path, or neighborhood state that explains the structure being predicted.",
            "graph edges, node features, messages, attention weights, topology, and labels or rewards.",
            "update each node by passing information along the graph while respecting who is connected to whom.",
            "oversmoothing, missing edges, or false edges can make different parts of the graph collapse into the same answer."),
    "node": ("the continuous dynamics or hidden derivative that moves the state from one time to the next.",
             "state observations, time stamps, controls, residual error, and stability constraints.",
             "learn a vector field whose integration reproduces the observed trajectory.",
             "a small derivative error can compound over time until the predicted path leaves the real system."),
    "flow": ("the dense motion field that says where each visible point moves next.",
             "pairs of frames, correspondences, occlusions, smoothness, and photometric or feature matching error.",
             "assign motion so the first observation can explain the second while staying spatially coherent.",
             "occlusion, repeated texture, or fast motion can create several plausible matches and the wrong one breaks tracking."),
    "video": ("the latent trajectory: identity, motion, camera state, and cause through time.",
              "ordered frames, memory tokens, flow, action cues, and temporal consistency losses.",
              "model a sequence distribution where each frame agrees with the past and supports the future.",
              "small errors accumulate into drift, flicker, identity swaps, or a video that forgets its own earlier facts."),
    "sam": ("the object, part, or boundary mask requested by a prompt.",
            "points, boxes, text, image features, edges, alpha mattes, masks, and overlap or grasp success.",
            "separate the target region from everything else while preserving the boundary detail needed downstream.",
            "a mask can be visually plausible but still miss a thin part, merge objects, or give a robot the wrong pixels to grasp."),
    "detr": ("the set of objects and the one-to-one assignment between predictions and real instances.",
             "image features, object queries, boxes, masks, class scores, and matching loss.",
             "solve detection as set prediction so each object is claimed once and duplicates are penalized.",
             "queries can miss small objects, duplicate the same object, or bind a box to the wrong visual evidence."),
    "depth": ("the hidden distance or surface layout behind each pixel.",
              "perspective, scale cues, stereo or motion, priors, surface smoothness, and metric supervision.",
              "infer a depth field that explains the image while staying geometrically possible.",
              "a single image admits many depths, so weak scale or occlusion cues create plausible but wrong 3D."),
    "clip": ("the shared meaning position where text and visual evidence should meet.",
             "image regions, captions, prompts, contrastive pairs, negatives, and similarity scores.",
             "pull matching image-text pairs together and push mismatches apart so language can query vision.",
             "language priors can overpower pixels, causing retrieval or grounding that sounds right but sees the wrong thing."),
    "ssl": ("the useful visual structure that can be learned without manual labels.",
            "augmentations, views of the same image, masked patches, teacher predictions, and consistency losses.",
            "make representations stable across harmless changes while preserving information needed for later tasks.",
            "the model can learn shortcuts from augmentations or collapse different examples into unhelpful sameness."),
    "vq": ("the discrete code or token that should stand in for a patch, frame, action, or latent detail.",
           "encoder outputs, codebook entries, reconstruction error, commitment loss, and token frequency.",
           "replace continuous detail with reusable symbols while keeping enough information to rebuild or predict.",
           "the codebook can collapse, waste entries, or quantize away detail the later model needs."),
    "tta": ("the test-time adjustment that makes the model fit the current input distribution without labels.",
            "entropy, confidence, batch statistics, augmentations, pseudo-labels, and shift indicators.",
            "adapt parameters or predictions using only evidence available at deployment.",
            "self-training on wrong guesses can amplify errors and make the model worse exactly when the data shifted."),
    "ttc": ("the hidden cause of a failure: data shift, shortcut, uncertainty, attack, or evaluation gap.",
            "stress cases, confidence, attribution, subgroup metrics, and behavior under controlled changes.",
            "turn a vague failure into a measurable variable that can be checked and corrected.",
            "without the right diagnostic variable, the fix may improve the benchmark while leaving the true failure untouched."),
    "uncertainty": ("how much support the evidence really gives the prediction.",
                    "probabilities, disagreement, samples, residuals, shifted inputs, and downstream cost.",
                    "make confidence track actual error risk so probability means calibrated belief.",
                    "a wrong but confident prediction gives later systems no signal to slow down, abstain, or ask for review."),
    "rl": ("the action value, policy, or hidden state that predicts future consequence.",
           "states, actions, rewards, trajectories, demonstrations, and constraint violations.",
           "choose behavior by expected future return under uncertainty rather than by immediate appearance alone.",
           "credit can go to the wrong action, exploration can be unsafe, or short-term reward can damage long-term outcome."),
    "vla": ("the action-relevant state connecting language, vision, and motor control.",
            "instructions, images, robot state, past actions, affordances, and success or safety feedback.",
            "ground words into scene variables and then choose actions that satisfy the goal and physical constraints.",
            "a fluent instruction parse can still produce an unsafe move if the grounding or hidden state is wrong."),
    "nerf": ("the continuous scene field that returns color and density along any camera ray.",
             "posed images, rays, depth hints, rendering error, and view consistency.",
             "fit a field whose rendered views reproduce the observations from many cameras.",
             "the field can overfit views, blur surfaces, or place density in empty space when geometry is underconstrained."),
    "gsplat": ("the set of 3D Gaussian blobs that approximates the scene.",
               "camera rays, projected splats, opacity, depth ordering, color error, and geometry priors.",
               "adjust blob position, shape, color, and opacity so rendered images match measured ones.",
               "good-looking training views can hide floating blobs, broken depth, or unstable motion."),
    "fm": ("the velocity field that carries noise or a simple distribution into data.",
           "source samples, target samples, time, conditioning, and path-matching loss.",
           "learn the direction of movement at each point so samples follow a tractable path into realistic data.",
           "a wrong velocity can send samples off the data path, producing artifacts or poor conditioning."),
    "ar": ("the next token, pixel, frame, action, or latent variable given the past.",
           "previous tokens, causal masks, likelihood, history, and rollout error.",
           "factor a hard joint distribution into a chain of next-step predictions.",
           "early mistakes feed into later predictions, so small errors can compound across a long rollout."),
    "ebm": ("the energy landscape that ranks good states below bad states.",
            "positive examples, negative samples, gradients, and constraints over images or actions.",
            "shape an energy function whose low valleys correspond to valid explanations or behaviors.",
            "sampling can get stuck, the landscape can assign low energy to shortcuts, or the negatives can miss important failures."),
    "normflow": ("the invertible map between a simple noise distribution and complex data.",
                 "exact likelihood, latent variables, Jacobian terms, and reconstruction through the inverse map.",
                 "transform probability mass without losing track of density.",
                 "an overly restricted map may be exact but unable to represent the true data shape."),
    "adversarial": ("the nearby input change, trigger, or shift that causes a wrong output.",
                    "gradients, perturbation budgets, attack success, corruption tests, and confidence under stress.",
                    "measure worst-case risk around each example, not only average test accuracy.",
                    "the model can look strong on clean data while a tiny targeted change crosses a nearby decision boundary."),
}


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def strip_tags(value: str) -> str:
    return " ".join(re.sub(r"<[^>]+>", " ", value).split())


def slug_for(path: Path) -> str:
    return path.name.removesuffix("-deep-reads.html")


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
                raise ValueError("unclosed div block")
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
    match = re.search(r'<div class="dr-head">.*?<b>(.*?)</b>', block, re.S)
    return strip_tags(match.group(1)) if match else "this paper"


def has_word(text: str, keyword: str) -> bool:
    if "-" in keyword or " " in keyword:
        return keyword in text
    return re.search(rf"(?<![a-z0-9]){re.escape(keyword)}(?![a-z0-9])", text) is not None


def lens_for(slug: str, block: str) -> tuple[str, str, str, str]:
    text = strip_tags(block).lower()
    if any(has_word(text, k) for k in ("adversarial", "attack", "backdoor", "poison", "robust")):
        return BASE["adversarial"]
    if any(has_word(text, k) for k in ("uncertainty", "calibration", "ood", "out-of-distribution")):
        return BASE["uncertainty"]

    stable_slug_lens = {
        "attention", "mamba", "moe", "mixture-of-lora", "distill", "equivariance",
        "gnn", "node", "flow", "sam", "detr", "depth", "clip", "ssl", "vq",
        "tta", "rl", "vla", "ebm",
    }
    if slug in stable_slug_lens:
        return BASE[slug]

    if slug in {"diffusion", "fm", "normflow", "ar", "video", "wm"} and any(
        has_word(text, k) for k in ("diffusion", "denoise", "flow matching", "rectified flow")
    ):
        return BASE["fm"]
    if slug in {"diffusion", "nerf", "gsplat", "fm", "threed"} and any(
        has_word(text, k) for k in ("gaussian", "splat", "nerf", "reconstruction", "novel view")
    ):
        if "gaussian" in text or "splat" in text:
            return BASE["gsplat"]
        return BASE["nerf"]
    return BASE.get(slug, BASE["ttc"])


def render_row(slug: str, block: str) -> str:
    hidden, evidence, objective, failure = lens_for(slug, block)
    title = title_for(block)
    body = (
        '<div class="dr-math">'
        f"<p><b>Hidden variable.</b> In {esc(title)}, the paper is estimating {esc(hidden)}</p>"
        f"<p><b>Evidence and constraint.</b> It uses {esc(evidence)} The constraint is to {esc(objective)}</p>"
        f"<p><b>Failure mode.</b> {esc(failure[:1].upper() + failure[1:])}</p>"
        "</div>"
    )
    return (
        START
        + '<div class="dr-row"><span class="dr-lab">Math lens</span><div>'
        + body
        + "</div></div>"
        + END
    )


def remove_existing(block: str) -> str:
    return re.sub(re.escape(START) + r".*?" + re.escape(END), "", block, flags=re.S)


def upsert_css(text: str) -> str:
    if ".dr-math{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def augment_block(slug: str, block: str) -> str:
    block = remove_existing(block)
    insert = render_row(slug, block)
    return block[:-6] + insert + block[-6:]


def main() -> None:
    pages = [p for p in sorted(ROOT.glob("*deep-reads.html")) if p.name != "deep-reads.html"]
    total = 0
    changed_pages = []
    for path in pages:
        text = path.read_text(encoding="utf-8")
        ranges = find_blocks(text, '<div class="dr"')
        if not ranges:
            continue
        slug = slug_for(path)
        text = upsert_css(text)
        ranges = find_blocks(text, '<div class="dr"')
        pieces = []
        last = 0
        changed = 0
        for start, end in ranges:
            block = text[start:end]
            new_block = augment_block(slug, block)
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
    print(f"scanned {total} paper blocks")
    print(f"updated {len(changed_pages)} pages")
    for name, changed in changed_pages:
        print(f"{name}: {changed}")


if __name__ == "__main__":
    main()
