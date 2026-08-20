#!/usr/bin/env python3
"""Add detailed first-principles blocks to deep-dive family lines."""

from __future__ import annotations

import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGES = sorted(ROOT.glob("*-deepdive.html"))
START = "<!-- family-principles:start -->"
END = "<!-- family-principles:end -->"

CSS = """
.family-principles{background:#fffdf4;border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:0 8px 8px 0;padding:10px 12px;margin:7px 0 9px}
.family-principles p{margin:6px 0;font-size:13.8px;line-height:1.58;color:#23302C}
.family-principles b{color:var(--ink)}
.family-principles a{font-family:var(--mono);font-size:12px;color:var(--accent-deep);margin-right:8px}
"""

THEME_DEFAULTS = {
    "video": {
        "hidden": "a changing state through time: object identity, camera motion, action, and the causes that make the next frame follow from the last one",
        "evidence": "ordered frames, optical flow, masks, camera pose, object tracks, and whether a prediction remains self-consistent many steps later",
        "principle": "state-space modeling. The visible frame is only an observation; the model must keep an internal state that explains the past and predicts the future",
        "equation": "state_next = dynamics(state_now, action_or_motion) and frame = renderer_or_decoder(state). The hard requirement is that the same hidden state must explain both today and the next frame",
        "counter": "if an object changes identity, a camera path bends for no physical reason, or a long rollout slowly forgets its first frame, the family has not solved the real problem",
        "links": [("video-math.html", "video state"), ("flow-math.html", "motion field"), ("kalman-filter-math.html", "predict then correct")],
    },
    "vlm": {
        "hidden": "the grounded claim: which words are supported by which pixels, regions, documents, actions, or retrieved facts",
        "evidence": "image regions, text spans, answer choices, tool results, retrieval scores, masks, and contradictions between the visual evidence and the sentence",
        "principle": "conditional evidence. A useful answer is not just likely language; it is a statement whose probability should rise because the image actually supports it",
        "equation": "score(answer | image, question) should change when the relevant pixels change. If the score stays high after the evidence is removed, the model is using language habit instead of vision",
        "counter": "if a fluent answer survives when the object is hidden, moved, or replaced, then the reasoning chain is not grounded even if the final sentence sounds right",
        "links": [("clip-math.html", "shared meaning"), ("attention-math.html", "evidence lookup"), ("uncertainty-math.html", "calibrated belief")],
    },
    "generation": {
        "hidden": "the data distribution behind the picture: identity, layout, style, geometry, and the constraints that make a sample count as the requested image",
        "evidence": "conditioning text, reference images, masks, denoising steps, preference judgments, reconstruction losses, and consistency checks across edits or views",
        "principle": "probability mass transport. Generation starts from an easy source of randomness and learns how to move it into the shape of real or desired images",
        "equation": "noise -> image is not decoration; it is a learned path that must preserve the requested condition while removing impossible samples from the path",
        "counter": "if the output is pretty but changes the requested identity, ignores the layout, breaks geometry, or cannot be steered predictably, the sample came from the wrong part of the distribution",
        "links": [("diffusion-math.html", "denoising path"), ("fm-math.html", "learned flow"), ("optimal-transport-math.html", "moving distributions")],
    },
    "threed": {
        "hidden": "the 3D scene that caused the 2D pictures: depth, camera pose, surfaces, empty space, material, and how light travels through the scene",
        "evidence": "multi-view images, rays, depth hints, point matches, silhouettes, camera calibration, rendering error, and whether novel views agree with each other",
        "principle": "inverse geometry. Many 3D worlds can explain one picture, so the method must add constraints until only geometrically consistent worlds remain plausible",
        "equation": "pixel color = integral of scene content along a camera ray. The same scene variables must explain every view, not a separate story for each image",
        "counter": "if a new view reveals floating blobs, inconsistent depth, wrong scale, or surfaces that move when the camera moves, the reconstruction has fit pictures without recovering the scene",
        "links": [("nerf-math.html", "ray field"), ("gsplat-math.html", "3D blobs"), ("depth-math.html", "hidden distance")],
    },
    "perceive": {
        "hidden": "the object or region assignment: what exists, where it is, what pixels belong to it, and which parts should stay separate",
        "evidence": "boxes, masks, labels, edges, keypoints, feature maps, matching costs, and errors on small, rare, crowded, or shifted examples",
        "principle": "structured prediction. The answer is not one number; it is a set of linked decisions that must agree with each other across pixels and objects",
        "equation": "prediction = argmin(cost of wrong label + cost of wrong location + cost of inconsistent structure). The terms matter because a good label with a bad boundary is still wrong",
        "counter": "if the model merges two objects, misses thin parts, duplicates one instance, or works only on common categories, it has not learned the visual structure the task asks for",
        "links": [("detr-math.html", "set prediction"), ("sam-math.html", "mask boundary"), ("bias-variance-math.html", "generalization")],
    },
    "learning": {
        "hidden": "the reusable rule inside data: what should transfer, what should adapt, what should be forgotten, and what must remain stable",
        "evidence": "training examples, gradients, teacher outputs, uncertainty, shifted test batches, old-task accuracy, new-task accuracy, and compute limits",
        "principle": "controlled updating. Learning is useful only when the update improves the target behavior without damaging information the system still needs",
        "equation": "new_parameters = old_parameters - step_size * estimated_error_direction, with extra terms that preserve old behavior, compress redundancy, or adapt to the new setting",
        "counter": "if an update helps a fresh batch but erases old skills, copies teacher mistakes, overfits the tiny adaptation set, or saves compute by losing the rare cases, the update rule is too crude",
        "links": [("optimization-math.html", "update rule"), ("distill-math.html", "teacher shape"), ("tta-math.html", "test-time shift")],
    },
    "embodied": {
        "hidden": "the action-relevant world state: object pose, contact, friction, goal, safety margin, and what will happen after the next move",
        "evidence": "camera observations, robot proprioception, touch, trajectories, rewards, collisions, interventions, and whether success survives a new body or scene",
        "principle": "sequential decision-making under partial observation. The agent never sees the full state, so it must estimate enough state to choose safe future actions",
        "equation": "choose action = argmax expected future reward subject to safety constraints. The action is judged by the whole future it causes, not by how good the current frame looks",
        "counter": "if a policy succeeds in simulation but fails on contact, ignores uncertainty, or chooses a move that looks reasonable now but causes a later crash, the visual understanding has not become control",
        "links": [("rl-math.html", "future reward"), ("vla-math.html", "vision to action"), ("kalman-filter-math.html", "hidden state")],
    },
    "emerging": {
        "hidden": "the usable signal inside a new sensing or trust problem: events, brain activity, provenance, attacks, satellite changes, or scientific structure",
        "evidence": "sensor timing, calibration, paired measurements, attack probes, provenance traces, scientific labels, and behavior under controlled changes",
        "principle": "measurement modeling. A model must first understand what the sensor or trust signal actually measures before ordinary vision tools can be applied safely",
        "equation": "observation = measurement_process(hidden_world) + noise. The inverse problem is to recover the hidden world without pretending the measurement is an ordinary photo",
        "counter": "if the method treats a new sensor, security signal, or scientific measurement like a normal image and ignores its noise or timing, it will produce confident but unsupported structure",
        "links": [("information-theory-math.html", "signal and bits"), ("uncertainty-math.html", "doubt"), ("adversarial-math.html", "stress test")],
    },
}

KEYWORD_OVERRIDES = [
    (("event camera", "event-based", "spike", "spiking", "asynchronous", "brightness-change", "neuromorphic"), {
        "hidden": "the continuous visual change that happened between ordinary frames",
        "evidence": "brightness-change events, spike times, occasional frames, blur, depth hints, and whether reconstructed motion stays sharp",
        "principle": "sampling in time. A frame samples the whole image rarely; an event sensor samples only changes almost immediately, so the math must rebuild a dense signal from sparse times",
        "equation": "event fires when brightness change crosses a threshold. Reconstruction asks which moving image would have produced that exact stream of threshold crossings",
        "counter": "if the reconstruction is sharp in still regions but wrong during fast motion, it has used the frame prior while wasting the sensor's real advantage",
        "links": [("fourier-math.html", "time signals"), ("flow-math.html", "motion"), ("kalman-filter-math.html", "state update")],
    }),
    (("brain", "eeg", "fmri"), {
        "hidden": "the visual content encoded indirectly in neural activity",
        "evidence": "brain signals, timing, subject identity, image embeddings, language descriptions, and whether reconstructions preserve the seen object rather than a generic prior",
        "principle": "noisy inverse mapping. The brain recording is a compressed, person-specific measurement of perception, so the decoder must separate real evidence from the generator's prior",
        "equation": "brain_signal = encoder_seen_image + noise. Decoding asks for the image whose representation best explains the signal without letting the prior invent unsupported detail",
        "counter": "if two different stimuli produce the same reconstruction because the generator likes that image, the system is painting from prior belief rather than reading the brain signal",
        "links": [("information-theory-math.html", "compressed signal"), ("uncertainty-math.html", "prior and evidence"), ("vae-math.html", "latent code")],
    }),
    (("backdoor", "attack", "jailbreak", "poison", "watermark", "provenance"), {
        "hidden": "the smallest hidden cause that can flip, fake, steal, or misattribute the model's output",
        "evidence": "trigger patterns, perturbation size, ownership marks, provenance records, confidence under stress, and behavior after controlled input changes",
        "principle": "worst-case analysis. Average behavior is not enough; safety depends on the nearest harmful input or hidden trigger that changes the decision",
        "equation": "risk = max over allowed changes of damage(model(input + change)). The question is how bad things can get inside the allowed budget",
        "counter": "if the defense only works on known attacks, or the mark disappears after a common edit, the protected quantity was not stable enough",
        "links": [("adversarial-math.html", "nearby failure"), ("uncertainty-math.html", "risk"), ("information-theory-math.html", "signal ownership")],
    }),
    (("distill", "teacher", "student", "compress", "pruning", "quant"), {
        "hidden": "which part of a large model's behavior is essential and which part is waste",
        "evidence": "teacher probabilities, student errors, intermediate features, parameter count, latency, and rare-case accuracy",
        "principle": "function approximation under a resource constraint. The smaller model must match the important shape of the larger function while spending fewer parameters or operations",
        "equation": "minimize task_error + imitation_error + resource_cost. The resource term matters because matching everything exactly would just rebuild the large model",
        "counter": "if the compressed model keeps average accuracy but loses uncertainty, rare classes, or hard examples, it copied the visible answers but not the useful function",
        "links": [("distill-math.html", "teacher function"), ("svd-math.html", "low rank"), ("information-theory-math.html", "compression")],
    }),
    (("retriev", "contrast", "align", "caption", "text"), {
        "hidden": "the shared meaning coordinate where visual evidence and words should refer to the same thing",
        "evidence": "paired images and text, negative examples, region matches, retrieval rank, captions, and failures under swapped attributes",
        "principle": "metric learning. Similarity should be high only when two observations share the relevant cause, not merely when their words or backgrounds are common",
        "equation": "similarity(match) > similarity(mismatch) by a margin. The important part is choosing mismatches that expose false shortcuts",
        "counter": "if the model retrieves a dog because the caption says park, or grounds red when the red object moved, the shared space is matching context instead of evidence",
        "links": [("clip-math.html", "shared space"), ("kernels-math.html", "similarity"), ("attention-math.html", "evidence selection")],
    }),
    (("depth", "pose", "geometry", "reconstruction", "view", "gaussian", "splat", "nerf"), {
        "hidden": "the stable 3D cause behind changing 2D views",
        "evidence": "camera rays, matches across views, depth estimates, masks, rendering loss, and whether the same surface appears in the right place from a new camera",
        "principle": "multi-view constraint. Each image is ambiguous alone; several views reduce ambiguity because the same 3D point must project consistently into all cameras",
        "equation": "project(camera, point_3d) = observed_pixel. A method earns trust when one set of 3D points satisfies many such projection equations",
        "counter": "if the model makes a plausible front view but the side view exposes wrong depth or floating content, it solved image synthesis rather than geometry",
        "links": [("depth-math.html", "distance"), ("nerf-math.html", "rays"), ("gsplat-math.html", "scene blobs")],
    }),
    (("reward", "policy", "robot", "driving", "action", "navigation", "control"), {
        "hidden": "the future consequence of each possible action",
        "evidence": "states, actions, rewards, trajectories, collisions, human corrections, and whether the policy still works when the scene changes",
        "principle": "credit assignment through time. The model must connect a later success or failure back to earlier decisions that caused it",
        "equation": "value(state, action) = immediate reward + discounted value(next_state). This is why a visually attractive action can be bad if it leads to future danger",
        "counter": "if a policy gets the training reward by exploiting a shortcut, or succeeds only when the simulator is forgiving, the learned value does not match the real task",
        "links": [("rl-math.html", "value"), ("q-learning-math.html", "future score"), ("vla-math.html", "grounded action")],
    }),
]


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def strip_tags(value: str) -> str:
    return " ".join(re.sub(r"<[^>]+>", " ", value).split())


def theme_for(path: Path) -> str:
    return path.name.removesuffix("-deepdive.html")


def remove_existing(text: str) -> str:
    return re.sub(re.escape(START) + r".*?" + re.escape(END), "", text, flags=re.S)


def upsert_css(text: str) -> str:
    if ".family-principles{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def lens_for(theme: str, context: str) -> dict[str, object]:
    lower = strip_tags(context).lower()
    if theme == "threed" and any(
        key in lower for key in ("depth", "pose", "geometry", "reconstruction", "view", "gaussian", "splat", "nerf", "point-map")
    ):
        for keys, lens in KEYWORD_OVERRIDES:
            if "depth" in keys:
                return lens
    if theme == "video" and any(key in lower for key in ("reasoning", "answer", "language model", "question")):
        return THEME_DEFAULTS["vlm"]
    for keys, lens in KEYWORD_OVERRIDES:
        if any(key in lower for key in keys):
            return lens
    return THEME_DEFAULTS.get(theme, THEME_DEFAULTS["emerging"])


def title_for(context: str) -> str:
    matches = re.findall(r"<p[^>]*>\s*<b>▸\s*(.*?)</b>\s*</p>", context, flags=re.S)
    if matches:
        return strip_tags(matches[-1])
    return "this family"


def render(theme: str, context: str) -> str:
    lens = lens_for(theme, context)
    title = title_for(context)
    links = "".join(f'<a href="{esc(href)}">{esc(label)}</a>' for href, label in lens["links"])  # type: ignore[index]
    return (
        START
        + '<div class="family-principles">'
        + f"<p><b>Deeper first-principles read.</b> In <b>{esc(title)}</b>, the hidden quantity is {esc(str(lens['hidden']))}. This is the thing the paper family is really trying to estimate, preserve, or control, even when the surface words are about a model name, a benchmark, or a dataset.</p>"
        + f"<p><b>What counts as evidence.</b> The useful evidence is {esc(str(lens['evidence']))}. A result is convincing only when changes in that evidence change the conclusion in the expected direction.</p>"
        + f"<p><b>Mathematical principle.</b> The principle underneath is {esc(str(lens['principle']))}. In plain terms, the method is trying to keep one hidden rule true while the input, viewpoint, time step, domain, or compute budget changes.</p>"
        + f"<p><b>Equation-level idea.</b> {esc(str(lens['equation']))}</p>"
        + f"<p><b>What would break it.</b> {esc(str(lens['counter']))}</p>"
        + f'<p><b>Math pages to connect:</b> {links}</p>'
        + "</div>"
        + END
    )


FUNDAMENTAL_RE = re.compile(
    r'(<p style="margin:2px 0 4px;font-size:14px;color:var\(--accent-deep\)">'
    r"<b>The fundamental point\.</b>.*?</p>)",
    flags=re.S,
)


def augment_page(path: Path) -> int:
    text = remove_existing(path.read_text(encoding="utf-8"))
    text = upsert_css(text)
    theme = theme_for(path)
    count = 0

    def repl(match: re.Match[str]) -> str:
        nonlocal count
        # Use only this family's local title/problem/approach/fundamental-point text.
        family_start = text.rfind('<p style="margin:10px 0 2px"><b>▸', 0, match.start())
        if family_start == -1:
            family_start = max(0, match.start() - 1200)
        prefix = text[family_start:match.end()]
        count += 1
        return match.group(1) + render(theme, prefix)

    out = FUNDAMENTAL_RE.sub(repl, text)
    path.write_text(out, encoding="utf-8")
    return count


def main() -> None:
    totals = {}
    for path in PAGES:
        count = augment_page(path)
        if count:
            totals[path.name] = count
    total = sum(totals.values())
    print(f"added family-principles blocks: {total}")
    for name, count in totals.items():
        print(f"{name}: {count}")


if __name__ == "__main__":
    main()
