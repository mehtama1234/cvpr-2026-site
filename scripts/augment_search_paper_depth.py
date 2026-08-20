#!/usr/bin/env python3
"""Add detailed first-principles depth records to every paper in search.html."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PAGE = ROOT / "search.html"

CSS = """
.paper-depth{border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:0 8px 8px 0;background:#fffdf4;padding:10px 12px;margin:9px 0}
.paper-depth p{font-size:13.7px;line-height:1.58;margin:6px 0;color:#23302C}
.paper-depth b{color:var(--ink)}
"""

THEME = {
    "emerging": {
        "hidden": "the real signal inside a hard measurement, such as a new sensor stream, a brain trace, a security mark, or a scientific image",
        "evidence": "the raw measurement, its timing, its noise, its calibration, and the checks that show whether the signal changes when the real world changes",
        "rule": "measurement modeling: first ask what the device or test actually measures, then recover the hidden cause without pretending the data is an ordinary photo",
        "naive": "the simple method treats every input as a normal image, so it can mistake sensor noise, timing artifacts, or a fake clue for real structure",
        "proof": "the claim gets stronger when controlled changes in the hidden cause create the expected change in the measured signal and in the model output",
        "break": "it breaks if the method gives the same confident answer after the sensor cue, provenance mark, or scientific signal is removed or scrambled",
        "prompt": "Read this as a measurement claim: the paper must show which hard signal is being recovered, what noise or nuisance is being separated away, and why the output follows the measurement rather than a convenient visual prior.",
    },
    "threed": {
        "hidden": "the 3D world that caused the flat pictures: depth, camera position, surface shape, empty space, material, and sometimes motion",
        "evidence": "camera views, rays, point matches, silhouettes, depth hints, rendering error, and whether a new view agrees with the old views",
        "rule": "inverse geometry: many 3D worlds can make one image, so the method must use several constraints until one shared world explains all views",
        "naive": "the simple method fits each view separately, which can make a good-looking front view while hiding wrong depth, floating surfaces, or broken scale",
        "proof": "the claim gets stronger when the same recovered scene explains views the model did not directly optimize for",
        "break": "it breaks if moving the camera reveals that surfaces jump, depth flips, objects float, or the same point lands in different places across views",
        "prompt": "Read this as an inverse-geometry claim: the paper must show how flat evidence is constrained into one shared 3D world, and where ambiguity, scale, or view inconsistency would otherwise enter.",
    },
    "video": {
        "hidden": "the changing state through time: object identity, motion, camera movement, cause, and what should remain the same from frame to frame",
        "evidence": "ordered frames, tracks, optical flow, masks, camera cues, sound or language when present, and long rollouts that test whether errors pile up",
        "rule": "state through time: the next frame should follow from a remembered state, not from an unrelated fresh guess",
        "naive": "the simple method predicts or edits each frame on its own, so small mistakes become flicker, identity swaps, or drift over many steps",
        "proof": "the claim gets stronger when identity, geometry, and cause stay stable even after occlusion, fast motion, or a long generated sequence",
        "break": "it breaks if the first frame and later frame cannot be explained by the same object, camera path, or physical event",
        "prompt": "Read this as a time-state claim: the paper must show what is carried forward across frames, what is allowed to change, and how it prevents small errors from turning into drift.",
    },
    "generation": {
        "hidden": "the rule for making a valid image: identity, layout, style, geometry, text instruction, and the range of outputs that still satisfy the request",
        "evidence": "the prompt, reference image, mask, reward signal, denoising path, edit constraint, and checks that the requested content was preserved",
        "rule": "moving probability mass: start from easy randomness and guide it into images that match the condition while avoiding impossible or unwanted samples",
        "naive": "the simple method makes something plausible-looking but may ignore the instruction, change identity, alter layout, or invent details not supported by the condition",
        "proof": "the claim gets stronger when changing one condition changes only the intended part of the output while the protected parts stay fixed",
        "break": "it breaks if a beautiful sample violates the prompt, loses the reference identity, changes the wrong region, or cannot repeat the requested control",
        "prompt": "Read this as a controlled-sampling claim: the paper must show how randomness is pushed toward the requested output while preserving the parts the condition says should not move.",
    },
    "vlm": {
        "hidden": "the grounded claim: which words, answers, tool actions, or reasoning steps are actually supported by visible evidence",
        "evidence": "image regions, text spans, answer options, retrieved facts, masks, clicks, tool results, and contradictions between the sentence and the pixels",
        "rule": "conditional evidence: an answer should become more likely because the image supports it, not because the words are common",
        "naive": "the simple method lets language habit fill gaps, so it can produce a fluent answer that is not tied to the picture",
        "proof": "the claim gets stronger when removing or changing the relevant visual evidence changes the answer, explanation, or action in the right way",
        "break": "it breaks if the model keeps the same confident answer when the object is hidden, replaced, moved, or contradicted by the image",
        "prompt": "Read this as a grounding claim: the paper must show which words, answers, or actions are forced by visual evidence and which would disappear if that evidence changed.",
    },
    "perceive": {
        "hidden": "the set of things in the image: object identity, box, mask, boundary, part, pose, count, or relationship",
        "evidence": "pixels, edges, texture, object proposals, masks, labels, overlap scores, keypoints, and failures on small, crowded, rare, or shifted cases",
        "rule": "structured assignment: the model must assign labels and locations while keeping neighboring pixels, object parts, and duplicate detections consistent",
        "naive": "the simple method classifies local patches or pixels alone, so it can merge nearby objects, miss thin parts, duplicate one object, or trust background shortcuts",
        "proof": "the claim gets stronger when the predicted object, boundary, or part changes exactly when the real object, boundary, or part changes",
        "break": "it breaks if similar objects are merged, rare objects vanish, boxes attach to the wrong evidence, or masks look smooth while cutting off important parts",
        "prompt": "Read this as a structured-assignment claim: the paper must show how pixels, boxes, masks, parts, or labels are assigned without merging distinct things or trusting background shortcuts.",
    },
    "embodied": {
        "hidden": "the action-relevant state: goal, object pose, contact, friction, safety margin, future consequence, and what the agent cannot directly see",
        "evidence": "camera frames, robot state, touch, past actions, rewards, collisions, human corrections, and whether the behavior survives a new scene or body",
        "rule": "future consequence under partial evidence: choose the action whose expected future is good while respecting safety and physical limits",
        "naive": "the simple method maps the current image straight to an action, so it can ignore hidden state, delayed harm, contact physics, or uncertainty",
        "proof": "the claim gets stronger when the same policy succeeds after changes in viewpoint, object placement, timing, or physical conditions",
        "break": "it breaks if the action looks reasonable in the current frame but causes a later crash, missed grasp, unsafe motion, or simulator-only success",
        "prompt": "Read this as an action-under-uncertainty claim: the paper must show how visual evidence becomes a safe future action rather than a reaction to the current frame alone.",
    },
    "learning": {
        "hidden": "the useful rule inside the data: what should transfer, what should adapt, what should be compressed, and what must not be forgotten",
        "evidence": "training examples, gradients, teacher outputs, old-task accuracy, new-task accuracy, uncertainty, shifted test batches, and compute or memory limits",
        "rule": "controlled updating: change the model in the direction that fixes the current error while protecting information still needed later",
        "naive": "the simple method updates everything or averages everything, so it can overfit, erase old skills, copy teacher mistakes, or waste compute on unimportant parts",
        "proof": "the claim gets stronger when the update improves the target case without damaging old behavior, rare cases, or calibration",
        "break": "it breaks if a gain on the new task comes from forgetting, shortcut learning, unstable gradients, or a compressed model that loses the hard examples",
        "prompt": "Read this as a controlled-update claim: the paper must show what changes in the model, what stays protected, and why the update helps without erasing or overfitting.",
    },
}

KEYWORDS = [
    (("remote sensing", "remote-sensing", "sar", "satellite", "geospatial", "ship re-identification", "earth"), THEME["emerging"]),
    (("brain", "eeg", "fmri", "neural activity", "neuroscience"), {
        "hidden": "the seen or imagined visual content that is only indirectly present in a noisy brain measurement",
        "evidence": "brain-signal timing, subject identity, repeated trials, image or language matches, and whether the recovered content changes with the stimulus",
        "rule": "noisy inverse reading: the decoder must find the visual cause that best explains the brain signal without letting a strong image prior invent unsupported detail",
        "naive": "the simple method lets the generator paint a likely image even when the brain evidence is weak or ambiguous",
        "proof": "the claim gets stronger when different stimuli create reliably different decoded content for the same subject and across subjects",
        "break": "it breaks if many different stimuli collapse into the same pleasant reconstruction or if the output follows the image prior more than the brain signal",
        "prompt": "Read this as a noisy-decoding claim: the paper must show that the recovered content follows the measured brain signal, not just the generator's favorite image.",
    }),
    (("event-camera", "event camera", "spike", "spiking", "neuromorphic"), {
        "hidden": "the sharp motion signal that happened between normal camera frames",
        "evidence": "brightness-change events, spike timing, an occasional frame, blur direction, and whether fast edges line up after reconstruction",
        "rule": "time sampling: an event fires when brightness changes enough, so the method asks which moving image would have caused that event stream",
        "naive": "the simple method treats events like a blurry picture, losing the very timing information that made the sensor useful",
        "proof": "the claim gets stronger when fast motion becomes sharper without damaging still regions",
        "break": "it breaks if the output is clean only for slow scenes and fails exactly when motion is fast, dark, or partly hidden",
        "prompt": "Read this as a timing claim: the paper must show that event or spike timing recovers information a normal frame missed, especially under fast motion or low light.",
    }),
    (("benchmark", "dataset", "testbed", "evaluation"), {
        "hidden": "the ability the test is supposed to measure, separated from shortcuts that only pass the test format",
        "evidence": "task cases, labels, splits, scoring rules, stress examples, and comparisons between easy memorized cases and hard controlled cases",
        "rule": "measurement validity: a benchmark is useful only if the score changes when the real ability changes",
        "naive": "the simple method counts a score without asking whether the examples isolate the intended ability",
        "proof": "the claim gets stronger when models that truly handle the hidden ability score higher across controlled variants",
        "break": "it breaks if a model can win by memorizing templates, exploiting dataset bias, or optimizing the metric while failing the intended task",
        "prompt": "Read this as a measurement-validity claim: the paper must show that its dataset, benchmark, or metric measures the intended ability rather than a shortcut in the test design.",
    }),
    (("adversarial", "attack", "backdoor", "poison", "jailbreak", "watermark", "provenance"), {
        "hidden": "the smallest hidden change that can flip, fake, steal, or misattribute the model output",
        "evidence": "trigger size, perturbation budget, attack success, recovered marks, provenance traces, and behavior under controlled edits",
        "rule": "worst-case risk: average success is not enough when a small allowed change can cause large damage",
        "naive": "the simple method checks normal examples only, so it misses failures placed just outside the usual data",
        "proof": "the claim gets stronger when the defense or detector still works after realistic transformations and unseen attacks",
        "break": "it breaks if the protection works only for known attacks or disappears after common edits, compression, cropping, or sensor changes",
        "prompt": "Read this as a worst-case-risk claim: the paper must show what harmful change is allowed, how close it is to normal data, and why the defense survives unseen variants.",
    }),
    (("architecture", "nas", "automl", "fine-tuning", "distillation", "continual", "federated", "compression", "pruning", "quantization", "gradient"), THEME["learning"]),
    (("depth", "3d", "pose", "reconstruction", "view", "gaussian", "splat", "nerf", "point cloud"), THEME["threed"]),
    (("retrieval", "caption", "grounding", "vision-language", "vlm", "language", "question", "answer"), THEME["vlm"]),
    (("diffusion", "image generator", "image generation", "video generation", "generative model", "editing", "inpainting", "super-resolution"), THEME["generation"]),
    (("tracking", "flow", "temporal", "video", "motion", "rollout"), THEME["video"]),
    (("segmentation", "detection", "mask", "object", "keypoint", "pose"), THEME["perceive"]),
    (("robot", "driving", "policy", "reward", "action", "navigation", "grasp"), THEME["embodied"]),
]


def extract_data(text: str) -> tuple[list[dict], str, str]:
    match = re.search(r"const D=(.*?);const THT=", text, re.S)
    if not match:
        raise ValueError("missing search data")
    return json.loads(match.group(1)), text[: match.start(1)], text[match.end(1) :]


def lens_for(record: dict) -> dict:
    blob = " ".join(
        str(record.get(key, "")) for key in ("t", "th", "p", "fp", "ff")
    ).lower() + " " + " ".join(record.get("tg") or []).lower()
    for keys, lens in KEYWORDS:
        if any(key in blob for key in keys):
            return lens
    return THEME.get(record.get("th"), THEME["learning"])


def depth_for(record: dict) -> dict:
    lens = lens_for(record)
    title = record.get("t", "this paper")
    return {
        "h": lens["hidden"],
        "e": lens["evidence"],
        "m": lens["rule"],
        "n": lens["naive"],
        "p": lens["proof"],
        "b": lens["break"],
        "s": f"{title}: {lens["prompt"]}",
    }


def upsert_css(text: str) -> str:
    if ".paper-depth{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_render(text: str) -> str:
    if "paper-depth:start" in text:
        return text
    old = "   ${d.ff?`<p><b>Paper focus.</b> ${esc(d.ff)}</p>`:''}\n   <p>${esc(d.p)}</p>"
    new = (
        "   ${d.ff?`<p><b>Paper focus.</b> ${esc(d.ff)}</p>`:''}\n"
        "   ${d.pd?`<!-- paper-depth:start --><div class=\"paper-depth\"><p><b>Deeper first-principles read.</b> ${esc(d.pd.s)}</p><p><b>Hidden thing.</b> ${esc(d.pd.h)}</p><p><b>Evidence.</b> ${esc(d.pd.e)}</p><p><b>Math rule.</b> ${esc(d.pd.m)}</p><p><b>Why the simple method fails.</b> ${esc(d.pd.n)}</p><p><b>What would prove it.</b> ${esc(d.pd.p)}</p><p><b>What would break it.</b> ${esc(d.pd.b)}</p></div><!-- paper-depth:end -->`:''}\n"
        "   <p>${esc(d.p)}</p>"
    )
    if old not in text:
        raise ValueError("missing render insertion point")
    return text.replace(old, new, 1)


def main() -> None:
    text = PAGE.read_text(encoding="utf-8")
    data, before, after = extract_data(text)
    for record in data:
        record["pd"] = depth_for(record)
    compact = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    out = before + compact + after
    out = upsert_css(upsert_render(out))
    PAGE.write_text(out, encoding="utf-8")
    print(f"updated search.html paper depth: {len(data)} records")


if __name__ == "__main__":
    main()
