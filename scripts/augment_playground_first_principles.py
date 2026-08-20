#!/usr/bin/env python3
"""Add first-principles guide blocks to concept playground pages."""

from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
START = "<!-- playground-principles:start -->"
END = "<!-- playground-principles:end -->"

CSS = """
.pgcore{border:1px solid var(--line);border-left:3px solid var(--good);border-radius:0 12px 12px 0;background:#f3faf4;padding:14px 17px;margin:18px 0 20px}
.pgcore .pglabel{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--good);font-weight:700;margin-bottom:6px}
.pgcore p{font-size:14.5px;line-height:1.6;margin:7px 0;color:#23302C}
.pgcore b{color:var(--ink)}
"""

GUIDE = {
    "attention": ("attention weights", "which earlier token the chosen token borrows information from", "temperature and head choice change how sharp or structured the lookup is", "watch diffuse attention become a weak average, and sharp attention become a committed pointer."),
    "mamba": ("a running memory state", "what the sequence model keeps after each step", "the decay and gate controls change how much past information survives", "watch useful long-range memory disappear when the state forgets too aggressively."),
    "moe": ("expert routing probabilities", "which specialist handles the current input", "routing sharpness and load balance change whether capacity spreads or collapses", "watch a router overuse one expert or split similar cases across the wrong specialists."),
    "mixture-of-lora": ("low-rank adapter directions", "how a frozen model is nudged for a condition", "rank, mixture weights, and interference controls change the adaptation direction", "watch two useful adapters combine into a harmful direction when their changes are not separated."),
    "distill": ("teacher-to-student behavior matching", "which parts of the teacher's function the student preserves", "temperature and target choice change whether the student sees only hard labels or the whole probability shape", "watch a student match easy answers while losing uncertainty or rare behavior."),
    "equivariance": ("transformation consistency", "how an output should move when the input is rotated, shifted, or permuted", "the transformation knob changes whether the answer should stay fixed or move predictably", "watch a model that lacks the symmetry relearn the same fact in each pose."),
    "gnn": ("message passing over edges", "which neighbors update each node", "edge strength and number of rounds change how far information travels", "watch too few rounds miss relations and too many rounds blur distinct nodes together."),
    "node": ("a learned derivative field", "how the state moves locally over time", "step size and field shape change the integrated path", "watch small local errors compound into a wrong trajectory."),
    "flow": ("pixel correspondence", "where the same visible point moves between frames", "motion and ambiguity controls change which match is plausible", "watch repeated texture or an edge make motion underdetermined."),
    "video": ("temporal state", "what must remain coherent across frames", "memory, horizon, and noise controls change how much the sequence remembers", "watch small per-frame errors turn into identity drift or flicker."),
    "sam": ("a prompted mask", "which pixels belong to the requested object or part", "prompt and boundary controls change what region is selected", "watch a plausible mask fail when it merges objects or cuts off a thin part."),
    "slots": ("object-slot binding", "which pixels or features are claimed by the same object memory", "slot count and competition controls change how the scene is partitioned", "watch slots collapse onto one object, split one object apart, or waste a slot on background."),
    "detr": ("object queries and assignments", "which prediction claims which object", "query count and matching controls change duplicates and misses", "watch set prediction fail as duplicate claims or unclaimed small objects."),
    "diffusion": ("a reverse denoising path", "how random noise becomes a structured sample through repeated small corrections", "guidance and step controls change how strongly the path follows the condition and how long it has to settle", "watch too few steps leave noise, and too much guidance collapse diversity or invent unsupported detail."),
    "depth": ("hidden surface distance", "how far each pixel is from the camera", "scale, smoothness, and cue controls change the inferred 3D shape", "watch one flat image support multiple plausible depths."),
    "clip": ("image-text similarity", "where words and visual evidence meet in embedding space", "prompt and negative controls change the direction of the query", "watch language bias pull retrieval toward likely words instead of visible evidence."),
    "ssl": ("label-free representation agreement", "what stays stable across two views of the same data", "augmentation strength changes which facts are treated as harmless", "watch bad augmentations erase the information a later task needs."),
    "vq": ("codebook assignment", "which discrete token stands in for a continuous patch", "codebook size and commitment controls change compression pressure", "watch detail vanish when too few codes must explain too many signals."),
    "tta": ("test-time correction", "how the model changes after seeing shifted unlabeled data", "confidence and update controls change whether adaptation helps or self-confirms mistakes", "watch wrong pseudo-labels pull the model into collapse."),
    "ttc": ("failure diagnosis", "which measurable cause explains a bad output", "shift, subgroup, confidence, and intervention controls change the suspected cause", "watch a repair fail when it fixes the visible symptom instead of the cause."),
    "uncertainty": ("calibrated belief", "how strongly the evidence supports a prediction", "noise and confidence controls change the gap between score and true error", "watch overconfidence become dangerous before accuracy visibly drops."),
    "rl": ("future return", "which action is best after delayed consequences", "reward, horizon, and exploration controls change credit assignment", "watch short-term reward teach behavior that fails later."),
    "vla": ("action-relevant grounded state", "which words, pixels, and robot states make an action valid", "instruction and affordance controls change the chosen action", "watch fluent language fail when the object grounding or reachability is wrong."),
    "nerf": ("a continuous scene field", "what color and density exist along each camera ray", "view and sampling controls change how the field is queried", "watch underconstrained views create blurred or floating geometry."),
    "gsplat": ("3D Gaussian scene elements", "which blobs explain the rendered image", "opacity, size, and camera controls change projection and blending", "watch good-looking renders hide broken depth or floating blobs."),
    "fm": ("a velocity field from noise to data", "which direction each sample should move", "step and guidance controls change the transport path", "watch a wrong velocity create artifacts or miss modes."),
    "ar": ("next-step prediction", "what token, pixel, frame, or action comes next", "temperature and context controls change uncertainty and rollout drift", "watch early mistakes become input for later mistakes."),
    "ebm": ("an energy landscape", "which states are low-cost explanations", "temperature and sampling controls change how the system searches valleys", "watch sampling get stuck in a local low-energy shortcut."),
    "normflow": ("an invertible transform", "how simple noise maps exactly into data", "coupling and scale controls change how probability mass bends", "watch exact likelihood trade off against a restricted shape of possible maps."),
    "adversarial": ("nearest failure direction", "which small input change flips the model", "perturbation size and direction controls change how close the boundary is", "watch accuracy look fine while a tiny targeted nudge crosses the boundary."),
    "wm": ("latent world state", "what imagined future follows from action", "horizon and model-error controls change rollout trust", "watch small prediction errors compound into a false imagined world."),
}


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def slug_for(path: Path) -> str:
    return path.name.removesuffix("-playground.html")


def render(slug: str) -> str:
    quantity, meaning, knob, notice = GUIDE[slug]
    return (
        START
        + '<section class="pgcore" id="playground-principles"><div class="pglabel">First-principles guide</div>'
        + f"<p><b>Quantity shown.</b> This sandbox exposes {esc(quantity)}: {esc(meaning)}.</p>"
        + f"<p><b>What the controls mean.</b> {esc(knob[:1].upper() + knob[1:])}.</p>"
        + f"<p><b>What to watch for.</b> {esc(notice[:1].upper() + notice[1:])}</p>"
        + "</section>"
        + END
    )


def upsert_css(text: str) -> str:
    if ".pgcore{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_block(text: str, block: str) -> str:
    if START in text and END in text:
        before, rest = text.split(START, 1)
        _, after = rest.split(END, 1)
        return before + block + after
    marker = '<div class="wrap"><article class="doc">'
    if marker not in text:
        raise ValueError("missing article marker")
    return text.replace(marker, marker + block, 1)


def main() -> None:
    changed = []
    for path in sorted(ROOT.glob("*-playground.html")):
        slug = slug_for(path)
        if slug not in GUIDE:
            raise ValueError(f"missing guide for {path.name}")
        text = path.read_text(encoding="utf-8")
        out = upsert_block(upsert_css(text), render(slug))
        if out != text:
            path.write_text(out, encoding="utf-8")
            changed.append(path.name)
    print(f"updated {len(changed)} pages")
    for name in changed:
        print(name)


if __name__ == "__main__":
    main()
