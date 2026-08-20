#!/usr/bin/env python3
"""Add a first-principles mathematical lens to each standout paper card."""

from __future__ import annotations

import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "deep-reads.html"

START = "<!-- paper-math-lens:start -->"
END = "<!-- paper-math-lens:end -->"

CSS = """
.mlens{border-left:2px solid var(--good);background:#f3faf4;padding:10px 12px;margin:10px 0;border-radius:0 8px 8px 0}
.mlens .ml-title{font-family:var(--mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--good);font-weight:700;margin-bottom:5px}
.mlens p{font-size:13.5px;line-height:1.58;margin:6px 0;color:#23302C}
.mlens b{color:var(--ink)}
"""

THEMES = {
    "vlm": {
        "hidden": "the hidden object, region, relation, or reasoning state that makes the words true in this image.",
        "evidence": "image patches, region tokens, question words, prior text knowledge, and any intermediate rationale or tool output.",
        "objective": "make the answer probable only when the visual evidence and the language state support the same claim; in math terms, bind text variables to visual variables instead of letting the language prior answer alone.",
        "failure": "a fluent sentence can detach from the pixels, giving a confident answer whose words have no checked visual support.",
    },
    "threed": {
        "hidden": "the 3D scene state: camera pose, depth, surface shape, occupancy, color, motion, or material that produced the observed views.",
        "evidence": "2D pixels seen along camera rays, matches across views, depth cues, pose hints, silhouettes, and rendering errors.",
        "objective": "find a scene representation that, when projected or rendered back through the cameras, explains the images while staying geometrically consistent.",
        "failure": "many different worlds can make similar pictures, so weak constraints create floating geometry, wrong scale, smeared surfaces, or views that look good only from the training cameras.",
    },
    "generation": {
        "hidden": "the clean sample path: the image, video, edit, or latent state that should satisfy the prompt, reference, mask, reward, or control signal.",
        "evidence": "noise, text embeddings, reference images, layouts, masks, preference scores, guidance signals, and learned natural-image statistics.",
        "objective": "move probability mass toward samples that satisfy the condition while keeping them on the learned data distribution; this is conditional inference, not decoration.",
        "failure": "guidance can overpower evidence, causing artifacts, lost diversity, identity drift, prompt mismatch, or edits that change parts the user meant to preserve.",
    },
    "video": {
        "hidden": "the trajectory of the world: object identity, motion, camera change, cause, and future state across time.",
        "evidence": "ordered frames, motion cues, action prompts, memory tokens, optical flow, and consistency between earlier and later observations.",
        "objective": "model a probability distribution over sequences, where each state must explain the past and leave a coherent next state possible.",
        "failure": "small frame-level errors accumulate into drift: objects flicker, identities swap, motion breaks, or the long video forgets what it already established.",
    },
    "perceive": {
        "hidden": "the category, boundary, part, text, pose, or region that the pixel grid only hints at.",
        "evidence": "local texture, edges, masks, boxes, language queries, part relations, and context around the candidate object.",
        "objective": "turn raw measurements into a stable decision about what is present and where it is, while ignoring changes that should not alter the answer.",
        "failure": "the model can latch onto background shortcuts, merge nearby objects, miss small parts, or name a region without proving its boundary.",
    },
    "emerging": {
        "hidden": "the missing rule, structure, or constraint behind a new problem setting: topology, provenance, scaling behavior, uncertainty, or system-level state.",
        "evidence": "measurements from images, metadata, model outputs, repeated trials, graph relations, and stress tests under shift.",
        "objective": "make the new setting measurable by defining the variable being estimated and the constraint that decides whether the estimate is trustworthy.",
        "failure": "without a precise variable and check, the method can look impressive while hiding leakage, weak evidence, poor calibration, or a brittle benchmark trick.",
    },
    "embodied": {
        "hidden": "the action-relevant state: what is reachable, what will move, what other agents may do, and which action is safe next.",
        "evidence": "camera and sensor streams, language commands, maps, past actions, predicted trajectories, contact, and uncertainty estimates.",
        "objective": "choose actions by expected future consequences under partial information, while respecting safety and physical constraints.",
        "failure": "a perception error becomes a physical error: the system may take an unsafe action because the hidden state or future risk was estimated poorly.",
    },
    "learning": {
        "hidden": "the useful training signal: which examples, weights, gradients, clients, tokens, or features carry information that should change the model.",
        "evidence": "loss values, labels, unlabeled samples, teacher outputs, gradients, client updates, class imbalance, and measured uncertainty.",
        "objective": "spend learning pressure where it reduces true error, not merely where data is abundant or easy; mathematically this is allocation under noise, bias, and limited budget.",
        "failure": "the model can overfit, memorize, amplify majority classes, waste compute, leak private data, or become accurate on average while failing the cases that matter.",
    },
}

KEYWORD_OVERRIDES = [
    (
        ("adversarial", "attack", "robust", "backdoor", "poison", "jailbreak"),
        {
            "hidden": "the nearby failure direction or hidden trigger that changes the model's output while leaving the input looking almost unchanged.",
            "evidence": "gradients, confidence, perturbation budgets, corrupted inputs, shifted test cases, and whether the model's answer changes under controlled stress.",
            "objective": "measure worst-case risk around each example, not just average accuracy; the math asks how close the decision boundary sits to real data.",
            "failure": "a system can pass ordinary tests while a small, targeted change or hidden training trigger reliably flips behavior.",
        },
    ),
    (
        ("uncertainty", "calibration", "ood", "out-of-distribution", "safety"),
        {
            "hidden": "how much support the evidence really gives the prediction, especially when the input is shifted, ambiguous, rare, or risky.",
            "evidence": "confidence scores, disagreement, ensembles or samples, residual error, domain shift, and downstream cost of being wrong.",
            "objective": "separate what is known from what is guessed, so probability means calibrated belief rather than decorative confidence.",
            "failure": "the most dangerous error is a wrong answer that stays confident, because no later system knows to slow down or ask for help.",
        },
    ),
    (
        ("federated", "privacy", "client", "data scarcity", "few-shot", "long tail", "semi-supervised"),
        {
            "hidden": "the population signal spread unevenly across clients, classes, labels, and unlabeled examples.",
            "evidence": "local updates, class counts, pseudo-label confidence, gradient noise, privacy clipping, and performance on rare groups.",
            "objective": "combine partial evidence without pretending every client, class, or label source is equally reliable.",
            "failure": "naive averaging or confidence filtering can erase rare classes, leak private information, or turn unlabeled data into repeated mistakes.",
        },
    ),
    (
        ("distill", "distillation", "lora", "pruning", "quant", "efficient", "token", "sparse", "compression"),
        {
            "hidden": "the small subspace, token set, or behavior pattern that carries most of the useful computation.",
            "evidence": "teacher probabilities, feature similarity, ranks, token saliency, latency, memory, and accuracy under compression.",
            "objective": "approximate the original behavior with fewer parameters, tokens, bits, or operations while bounding the loss that matters.",
            "failure": "a cheaper model may preserve average accuracy while losing rare behavior, calibration, long-range context, or the teacher's useful uncertainty.",
        },
    ),
    (
        ("medical", "clinical", "pathology", "mri", "microscopy", "lesion"),
        {
            "hidden": "the biological or physical state behind the measurement: tissue boundary, abnormal region, cell structure, disease signal, or instrument artifact.",
            "evidence": "scanner intensities, microscope pixels, expert labels, anatomical priors, repeated measurements, and uncertainty around unclear regions.",
            "objective": "infer the clinically or scientifically relevant state while respecting measurement noise, scarce labels, and domain constraints.",
            "failure": "a visually neat output can be scientifically wrong if it invents unsupported structure or hides uncertainty at the decision boundary.",
        },
    ),
]


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def strip_tags(value: str) -> str:
    return re.sub(r"<[^>]+>", " ", value)


def current_theme(text: str, pos: int) -> str:
    prefix = text[:pos]
    matches = list(re.finditer(r'<div class="eyebrow" id="([^"]+)"', prefix))
    return matches[-1].group(1) if matches else "emerging"


def card_ranges(text: str) -> list[tuple[int, int]]:
    ranges = []
    i = 0
    marker = '<div class="pc"'
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
                raise ValueError("unclosed paper card")
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


def extract_title(card: str) -> str:
    match = re.search(r"<h3[^>]*>.*?<a [^>]*>(.*?)</a>", card, re.S)
    if not match:
        return "this paper"
    return " ".join(strip_tags(match.group(1)).split())


def problem_text(card: str) -> str:
    match = re.search(r"<p><b>The problem\.</b>(.*?)</p>", card, re.S)
    return " ".join(strip_tags(match.group(1)).split()) if match else ""


def has_keyword(text: str, keyword: str) -> bool:
    if " " in keyword or "-" in keyword:
        return keyword in text
    return re.search(rf"(?<![a-z0-9]){re.escape(keyword)}(?![a-z0-9])", text) is not None


def lens_for(theme: str, card: str) -> dict[str, str]:
    title = extract_title(card)
    text = " ".join((title + " " + problem_text(card)).lower().split())
    lens = dict(THEMES.get(theme, THEMES["emerging"]))
    for keywords, override in KEYWORD_OVERRIDES:
        if any(has_keyword(text, k) for k in keywords):
            lens.update(override)
            break
    if "diffusion" in text or "flow" in text:
        lens.update(
            {
                "hidden": "the denoising or transport path from an easy random state to a structured image, video, or representation.",
                "evidence": "the conditioning signal, the noisy sample, the learned score or velocity field, and checks that the final sample still matches the data.",
                "objective": "follow a sequence of small probability-correcting steps so each step makes the sample less random and more condition-consistent.",
                "failure": "a wrong path can still make a sharp sample, but it may drift from the prompt, break identity, collapse diversity, or add unsupported detail.",
            }
        )
    if "gaussian" in text or "splat" in text or "nerf" in text or "reconstruction" in text:
        lens.update(THEMES["threed"])
    return lens


def render_lens(theme: str, card: str) -> str:
    title = extract_title(card)
    lens = lens_for(theme, card)
    return (
        START
        + '<div class="mlens">'
        '<div class="ml-title">Mathematical lens</div>'
        f"<p><b>What is hidden?</b> In {esc(title)}, the method is estimating {esc(lens['hidden'])}</p>"
        f"<p><b>What counts as evidence?</b> {esc(lens['evidence'])}</p>"
        f"<p><b>What is the objective?</b> {esc(lens['objective'])}</p>"
        f"<p><b>What breaks?</b> {esc(lens['failure'])}</p>"
        "</div>"
        + END
    )


def upsert_css(text: str) -> str:
    if ".mlens{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def remove_existing_lenses(card: str) -> str:
    pattern = re.compile(re.escape(START) + r".*?" + re.escape(END), re.S)
    return pattern.sub("", card)


def augment_card(theme: str, card: str) -> str:
    card = remove_existing_lenses(card)
    lens = render_lens(theme, card)
    marker = '<p style="font-size:12px"><a href="https://openaccess.thecvf.com/'
    if marker not in card:
        raise ValueError(f"official paper marker missing for {extract_title(card)}")
    return card.replace(marker, lens + marker, 1)


def main() -> None:
    text = PAGE.read_text(encoding="utf-8")
    text = upsert_css(text)
    ranges = card_ranges(text)
    if len(ranges) != 286:
        raise ValueError(f"expected 286 paper cards, found {len(ranges)}")

    parts = []
    last = 0
    changed = 0
    for start, end in ranges:
        card = text[start:end]
        theme = current_theme(text, start)
        new_card = augment_card(theme, card)
        parts.append(text[last:start])
        parts.append(new_card)
        last = end
        if new_card != card:
            changed += 1
    parts.append(text[last:])
    out = "".join(parts)
    PAGE.write_text(out, encoding="utf-8")
    print(f"updated {changed} paper cards")


if __name__ == "__main__":
    main()
