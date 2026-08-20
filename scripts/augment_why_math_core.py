#!/usr/bin/env python3
"""Add explicit mathematical-core blocks to first-principles why pages."""

from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
START = "<!-- why-math-core:start -->"
END = "<!-- why-math-core:end -->"

CSS = """
.wcore{border:1px solid var(--line);border-left:3px solid var(--good);border-radius:0 12px 12px 0;background:#f3faf4;padding:15px 18px;margin:18px 0 22px}
.wcore .wlabel{font-family:var(--mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--good);font-weight:700;margin-bottom:6px}
.wcore p{font-size:14.5px;line-height:1.62;margin:7px 0;color:#23302C}
.wcore b{color:var(--ink)}
"""

CORE = {
    "attention": ("which other pieces of context matter right now", "queries, keys, values, token positions, and the downstream loss", "compare every query with possible sources, turn similarities into weights, then average the values those weights select", "if the weights point at the wrong evidence, the model receives context but not truth; if every token compares with every other token, cost grows quadratically."),
    "mamba": ("the running memory state that can replace full attention over long sequences", "the ordered input stream, gates, state updates, prediction loss, latency, and memory use", "scan through the sequence with a selective state update that keeps useful history and discards the rest", "if the state forgets the wrong detail, speed is gained by losing the long-range fact the task needed."),
    "moe": ("which expert should handle each token, patch, task, or scene", "router scores, expert outputs, capacity limits, load balance, and task loss", "activate only a small subset of specialists for each input while keeping the rest inactive", "routing can collapse onto a few experts, starve rare cases, or split related examples across incompatible specialists."),
    "mixture-of-lora": ("the small low-rank change needed to adapt a frozen model", "base-model activations, adapter matrices, routing signals, ranks, and validation loss", "express each adaptation as a low-rank direction, then choose or combine directions without rewriting the base model", "adapters can interfere, overwrite identity or style, or help one domain while damaging another."),
    "distill": ("the behavior of a larger system that a smaller one should preserve", "teacher probabilities, intermediate features, gradients, examples, and student errors", "match the teacher's function shape rather than only the final hard label", "the student can copy the answer while losing uncertainty, rare-case behavior, or the reason the teacher generalized."),
    "equivariance": ("which transformations should move the answer predictably", "rotations, shifts, permutations, views, coordinate frames, and consistency losses", "tie the model's output to the symmetry of the task, so transformed input gives transformed output", "without the symmetry, the model has to relearn the same fact in every pose and fails outside the seen geometry."),
    "gnn": ("the relational state carried by nodes and edges", "node features, edges, messages, graph attention, topology, and prediction loss", "update each node by passing messages through the graph instead of treating examples as isolated rows", "missing edges, false edges, or too many message-passing rounds can blur distinct nodes into the same representation."),
    "node": ("the continuous derivative field that moves a state through time or depth", "states, time stamps, controls, residuals, and integration error", "learn the local rate of change and integrate it to recover a full trajectory", "small derivative errors compound as the integration runs, so the predicted path can drift away from the true system."),
    "flow": ("the correspondence field from one frame to the next", "two frames, local texture, edges, occlusion cues, smoothness, and matching error", "assign each point a motion that explains the second observation while staying spatially coherent", "flat texture, repeated patterns, and occlusion create multiple possible matches, so the wrong correspondence breaks motion reasoning."),
    "video": ("the hidden trajectory of objects, camera, identity, and cause", "ordered frames, memory, flow, actions, and temporal consistency", "model the sequence as connected states, where each frame constrains what can happen next", "small frame errors accumulate into flicker, identity swaps, impossible motion, or long-horizon drift."),
    "wm": ("the hidden world state that predicts future observations and rewards", "past observations, actions, latent state, predicted frames, rewards, and rollout error", "learn a compact simulator that updates under actions so planning can happen inside imagined futures", "model error compounds during rollout, so imagined futures can become confident but physically wrong."),
    "sam": ("the mask boundary for the requested object or part", "points, boxes, text prompts, image features, edges, masks, and overlap or physical success", "condition segmentation on a prompt and separate the target pixels from the rest while keeping useful boundary detail", "a mask can look reasonable but still merge objects, cut off thin parts, or give a robot the wrong grasp region."),
    "slots": ("which pixels or features belong to the same object", "image features, slot vectors, attention weights, reconstruction loss, and competition between slots", "let a small set of object memories compete to explain the scene so each slot binds one coherent part", "slots can collapse onto the same object, split one object into pieces, or bind background texture instead of object identity."),
    "detr": ("the set of objects and the assignment between predictions and real instances", "object queries, image features, boxes, masks, classes, and matching loss", "predict a set directly and use one-to-one matching so each object is claimed once", "queries can duplicate one object, miss small instances, or bind a confident prediction to the wrong evidence."),
    "diffusion": ("the reverse path from noise to a clean sample", "noisy samples, time step, conditioning, the true noise or score, and denoising loss", "learn to undo one small corruption step and repeat that step until noise becomes data", "a wrong denoising direction can create sharp but unsupported detail, drift from the condition, or collapse to only a few modes."),
    "depth": ("the hidden distance or surface behind each pixel", "perspective, scale cues, stereo or motion, priors, and geometric consistency", "infer a depth field that makes the flat image plausible as a 3D scene", "one image can match many worlds, so weak constraints produce plausible but wrong scale, shape, or free space."),
    "clip": ("the shared meaning coordinate where text and image evidence meet", "caption-image pairs, region features, negatives, prompts, and similarity scores", "pull matching text and visual examples together while pushing mismatches apart", "language can overpower seeing, so the model may retrieve or ground a likely concept instead of the visible one."),
    "ssl": ("the visual structure that survives without labels", "augmentations, masked views, teacher predictions, agreement losses, and downstream transfer", "make representations stable under harmless changes while preserving information later tasks need", "bad augmentations can teach shortcuts, erase important detail, or collapse different examples into the same representation."),
    "vq": ("the discrete code that stands in for continuous detail", "encoder outputs, codebook entries, reconstruction loss, commitment loss, and token usage", "quantize continuous signals into reusable symbols that later models can predict or compose", "the codebook can collapse, waste entries, or throw away detail the downstream model needs."),
    "tta": ("the correction needed after deployment when the test data shifts", "unlabeled test batches, entropy, confidence, augmentations, batch statistics, and pseudo-labels", "adapt using only deployment evidence while preventing the model from reinforcing its own wrong guesses", "test-time learning can become self-confirming collapse if confident mistakes are treated as truth."),
    "ttc": ("the measurable cause of a model failure", "stress tests, subgroup scores, confidence, attribution, shift checks, and counterexamples", "turn a vague failure into a named variable that can be measured and fixed", "if the wrong failure variable is measured, the repair improves a dashboard while leaving the real weakness untouched."),
    "uncertainty": ("how much support the evidence gives the prediction", "probability shape, disagreement, samples, residuals, shift signals, and downstream cost", "make confidence track actual error risk so probability behaves like calibrated belief", "a wrong but confident model gives no warning to abstain, ask for review, or choose a safer action."),
    "rl": ("the future value of actions under a policy", "states, actions, rewards, trajectories, demonstrations, and constraint violations", "choose behavior by expected future return and assign credit to the actions that caused it", "reward can be delayed, sparse, hacked, or credited to the wrong step, so the learned policy optimizes the wrong behavior."),
    "vla": ("the action-relevant state that connects words, pixels, and motor commands", "instructions, image regions, robot state, affordances, past actions, and success feedback", "ground language into scene variables and choose actions that satisfy the goal under physical limits", "a fluent instruction can still produce an unsafe action if grounding, reachability, or hidden state is wrong."),
    "nerf": ("the continuous scene field that explains camera rays", "posed images, rays, colors, densities, depth hints, and rendering error", "fit a function that renders the observed views and can be queried from new cameras", "underconstrained views can create blurred surfaces, floating density, or geometry that only works from training angles."),
    "gsplat": ("the finite set of 3D Gaussian blobs that approximates the scene", "projected splats, opacity, depth ordering, color error, camera pose, and geometry priors", "optimize blob position, size, opacity, and color so fast rendering matches the photos", "nice-looking views can hide floating blobs, broken depth, unstable motion, or bad material structure."),
    "fm": ("the velocity field that transports simple noise into data", "source samples, target samples, time, conditioning, and path-matching loss", "learn the direction each sample should move so generation follows a short stable path", "a wrong velocity field sends samples off the data path, causing artifacts, poor conditioning, or mode loss."),
    "ar": ("the next token, pixel, frame, action, or latent given the past", "previous sequence elements, causal masks, likelihood, and rollout error", "factor a hard joint distribution into a chain of next-step predictions", "early mistakes become part of the future context, so errors compound over long rollouts."),
    "ebm": ("the energy score that ranks valid states below invalid states", "positive examples, negative samples, gradients, constraints, and sampling behavior", "shape a landscape where good explanations sit in low-energy valleys", "sampling can get stuck, negatives can miss important failures, or shortcuts can receive low energy."),
    "normflow": ("the invertible map between simple noise and complex data", "latent variables, exact likelihood, inverse reconstruction, and Jacobian terms", "transform probability mass while tracking how density changes exactly", "the map may be exact but too constrained to represent the true data shape."),
    "adversarial": ("the nearest direction or trigger that flips behavior", "gradients, perturbation budgets, corrupted inputs, confidence, and stress tests", "measure worst-case risk around each example instead of average accuracy alone", "a model can be accurate on clean data while a tiny, targeted change crosses a nearby decision boundary."),
}


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def slug_for(path: Path) -> str:
    return path.name.removesuffix("-why.html")


def render(slug: str) -> str:
    hidden, evidence, rule, failure = CORE[slug]
    return (
        START
        + '<section class="wcore" id="mathematical-core"><div class="wlabel">Mathematical core</div>'
        + f"<p><b>Hidden quantity.</b> The page is really about estimating {esc(hidden)}.</p>"
        + f"<p><b>Evidence.</b> The model sees {esc(evidence)}.</p>"
        + f"<p><b>Rule.</b> The fundamental rule is to {esc(rule)}.</p>"
        + f"<p><b>Failure test.</b> {esc(failure[:1].upper() + failure[1:])}</p>"
        + "</section>"
        + END
    )


def upsert_css(text: str) -> str:
    if ".wcore{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_block(text: str, block: str) -> str:
    if START in text and END in text:
        before, rest = text.split(START, 1)
        _, after = rest.split(END, 1)
        return before + block + after
    marker = "<h2 id=\"problem\""
    if marker not in text:
        raise ValueError("missing problem section marker")
    return text.replace(marker, block + marker, 1)


def main() -> None:
    pages = sorted(ROOT.glob("*-why.html"))
    changed = []
    for path in pages:
        slug = slug_for(path)
        if slug not in CORE:
            raise ValueError(f"missing core data for {path.name}")
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
