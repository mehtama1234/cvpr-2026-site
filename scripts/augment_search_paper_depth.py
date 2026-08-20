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
.review-links{font-family:var(--mono);font-size:12px;margin:7px 0}.review-links a{margin-right:10px}
"""

THEME = {
    "emerging": {
        "hidden": "the measured cause behind difficult data, such as a new sensor stream, a brain trace, a security mark, or a scientific image",
        "evidence": "the raw measurement, its timing, its noise, its calibration, and the checks that show whether the signal changes when the real world changes",
        "rule": "measurement modeling: first ask what the device or test actually measures, then recover the hidden cause without pretending the data is an ordinary photo",
        "naive": "A normal-image treatment can confuse sensor noise, timing artifacts, or spoofed traces with real structure.",
        "proof": "Good evidence would show controlled changes in the hidden cause producing the expected change in both the measured signal and the model output.",
        "break": "A counterexample is a stable confident output after the sensor cue, provenance mark, or scientific signal is removed or scrambled.",
        "prompt": "Read this as a measurement claim: the paper must show which hard signal is being recovered, what noise or nuisance is being separated away, and why the output follows the measurement instead of the most visually familiar answer.",
    },
    "threed": {
        "hidden": "the 3D world that caused the flat pictures: depth, camera position, surface shape, empty space, material, and sometimes motion",
        "evidence": "camera views, rays, point matches, silhouettes, depth hints, rendering error, and whether a new view agrees with the old views",
        "rule": "inverse geometry: many 3D worlds can make one image, so the method must use several constraints until one shared world explains all views",
        "naive": "A per-view fit can look correct from the front while hiding wrong depth, floating surfaces, or broken scale.",
        "proof": "Good evidence would show the recovered scene explaining camera views that were not directly optimized.",
        "break": "A counterexample is a new camera view where surfaces jump, depth flips, objects float, or the same point lands in inconsistent places.",
        "prompt": "Read this as an inverse-geometry claim: the paper must show how flat evidence is constrained into one shared 3D world, and where ambiguity, scale, or view inconsistency would otherwise enter.",
    },
    "video": {
        "hidden": "the changing state through time: object identity, motion, camera movement, cause, and what should remain the same from frame to frame",
        "evidence": "ordered frames, tracks, optical flow, masks, camera cues, sound or language when present, and long rollouts that test whether errors pile up",
        "rule": "state through time: the next frame should follow from a remembered state, not from an unrelated fresh guess",
        "naive": "Independent frame prediction loses memory, so small local errors become flicker, identity swaps, or long-run drift.",
        "proof": "Good evidence would show identity, geometry, and cause staying stable through occlusion, fast motion, and long generated sequences.",
        "break": "A counterexample is a later frame that cannot be explained by the same object, camera path, or physical event as the first frame.",
        "prompt": "Read this as a time-state claim: the paper must show what is carried forward across frames, what is allowed to change, and how it prevents small errors from turning into drift.",
    },
    "generation": {
        "hidden": "the rule for making a valid image: identity, layout, style, geometry, text instruction, and the range of outputs that still satisfy the request",
        "evidence": "the prompt, reference image, mask, reward signal, denoising path, edit constraint, and checks that the requested content was preserved",
        "rule": "moving probability mass: start from easy randomness and guide it into images that match the condition while avoiding impossible or unwanted samples",
        "naive": "A plausibility-only generator can make an attractive image while ignoring the instruction, changing identity, moving layout, or inventing unsupported detail.",
        "proof": "Good evidence would show one condition changing only the intended part of the output while protected parts stay fixed.",
        "break": "A counterexample is a polished sample that violates the prompt, loses reference identity, changes the wrong region, or cannot repeat the requested control.",
        "prompt": "Read this as a controlled-sampling claim: the paper must show how randomness is pushed toward the requested output while preserving the parts the condition says should not move.",
    },
    "vlm": {
        "hidden": "the grounded claim: which words, answers, tool actions, or reasoning steps are actually supported by visible evidence",
        "evidence": "image regions, text spans, answer options, retrieved facts, masks, clicks, tool results, and contradictions between the sentence and the pixels",
        "rule": "conditional evidence: an answer should become more likely because the image supports it, not because the words are common",
        "naive": "Language habit can fill missing evidence, producing a fluent answer that is not tied to the picture.",
        "proof": "Good evidence would show the answer, explanation, or action changing when the relevant visual evidence is removed or altered.",
        "break": "A counterexample is the same confident answer after the object is hidden, replaced, moved, or contradicted by the image.",
        "prompt": "Read this as a grounding claim: the paper must show which words, answers, or actions are forced by visual evidence and which would disappear if that evidence changed.",
    },
    "perceive": {
        "hidden": "the set of things in the image: object identity, box, mask, boundary, part, pose, count, or relationship",
        "evidence": "pixels, edges, texture, object proposals, masks, labels, overlap scores, keypoints, and failures on small, crowded, rare, or shifted cases",
        "rule": "structured assignment: the model must assign labels and locations while keeping neighboring pixels, object parts, and duplicate detections consistent",
        "naive": "Local patch or pixel decisions can merge nearby objects, miss thin parts, duplicate one instance, or trust background shortcuts.",
        "proof": "Good evidence would show the predicted object, boundary, or part changing exactly when the real object, boundary, or part changes.",
        "break": "A counterexample is a smooth mask or high score that hides merged objects, missing rare objects, wrong evidence, or cut-off parts.",
        "prompt": "Read this as a structured-assignment claim: the paper must show how pixels, boxes, masks, parts, or labels are assigned without merging distinct things or trusting background shortcuts.",
    },
    "embodied": {
        "hidden": "the action-relevant state: goal, object pose, contact, friction, safety margin, future consequence, and what the agent cannot directly see",
        "evidence": "camera frames, robot state, touch, past actions, rewards, collisions, human corrections, and whether the behavior survives a new scene or body",
        "rule": "future consequence under partial evidence: choose the action whose expected future is good while respecting safety and physical limits",
        "naive": "A direct image-to-action map can ignore hidden state, delayed harm, contact physics, and uncertainty.",
        "proof": "Good evidence would show the policy succeeding after changes in viewpoint, object placement, timing, or physical conditions.",
        "break": "A counterexample is an action that looks reasonable now but later causes a crash, missed grasp, unsafe motion, or simulator-only success.",
        "prompt": "Read this as an action-under-uncertainty claim: the paper must show how visual evidence becomes a safe future action rather than a reaction to the current frame alone.",
    },
    "learning": {
        "hidden": "the reusable rule inside the data: what should transfer, what should adapt, what should be compressed, and what must not be forgotten",
        "evidence": "training examples, gradients, teacher outputs, old-task accuracy, new-task accuracy, uncertainty, shifted test batches, and compute or memory limits",
        "rule": "controlled updating: change the model in the direction that fixes the current error while protecting information still needed later",
        "naive": "Updating or averaging everything can overfit, erase old skills, copy teacher mistakes, or spend compute on parts that do not matter.",
        "proof": "Good evidence would show the update improving the target case without damaging old behavior, rare cases, or calibrated uncertainty.",
        "break": "A counterexample is a new-task gain caused by forgetting, shortcut learning, unstable gradients, or compression that loses hard examples.",
        "prompt": "Read this as a controlled-update claim: the paper must show what changes in the model, what stays protected, and why the update helps without erasing or overfitting.",
    },
}

KEYWORDS = [
    (("remote sensing", "remote-sensing", "sar", "satellite", "geospatial", "ship re-identification", "earth"), THEME["emerging"]),
    (("brain", "eeg", "fmri", "neural activity", "neuroscience"), {
        "hidden": "the seen or imagined visual content that is only indirectly present in a noisy brain measurement",
        "evidence": "brain-signal timing, subject identity, repeated trials, image or language matches, and whether the recovered content changes with the stimulus",
        "rule": "noisy inverse reading: the decoder must find the visual cause that best explains the brain signal without letting a strong image prior invent unsupported detail",
        "naive": "A prior-heavy decoder can paint a likely image even when the brain evidence is weak or ambiguous.",
        "proof": "Good evidence would show different stimuli creating reliably different decoded content for the same subject and across subjects.",
        "break": "A counterexample is many different stimuli collapsing into the same pleasant reconstruction, or an output that follows the image prior more than the brain signal.",
        "prompt": "Read this as a noisy-decoding claim: the paper must show that the recovered content follows the measured brain signal, not just the generator's favorite image.",
    }),
    (("event-camera", "event camera", "spike", "spiking", "neuromorphic"), {
        "hidden": "the sharp motion signal that happened between normal camera frames",
        "evidence": "brightness-change events, spike timing, an occasional frame, blur direction, and whether fast edges line up after reconstruction",
        "rule": "time sampling: an event fires when brightness changes enough, so the method asks which moving image would have caused that event stream",
        "naive": "Treating events like a blurry picture loses the timing information that made the sensor useful.",
        "proof": "Good evidence would show fast motion becoming sharper without damaging still regions.",
        "break": "A counterexample is an output that looks clean only for slow scenes and fails exactly when motion is fast, dark, or partly hidden.",
        "prompt": "Read this as a timing claim: the paper must show that event or spike timing recovers information a normal frame missed, especially under fast motion or low light.",
    }),
    (("benchmark", "dataset", "testbed", "evaluation"), {
        "hidden": "the ability the test is supposed to measure, separated from shortcuts that only pass the test format",
        "evidence": "task cases, labels, splits, scoring rules, stress examples, and comparisons between easy memorized cases and hard controlled cases",
        "rule": "measurement validity: a benchmark is useful only if the score changes when the real ability changes",
        "naive": "Counting a score alone can miss whether the examples isolate the intended ability.",
        "proof": "Good evidence would show models that truly handle the hidden ability scoring higher across controlled variants.",
        "break": "A counterexample is a model winning by memorizing templates, exploiting dataset bias, or optimizing the metric while failing the intended task.",
        "prompt": "Read this as a measurement-validity claim: the paper must show that its dataset, benchmark, or metric measures the intended ability rather than a shortcut in the test design.",
    }),
    (("adversarial", "attack", "backdoor", "poison", "jailbreak", "watermark", "provenance"), {
        "hidden": "the smallest hidden change that can flip, fake, steal, or misattribute the model output",
        "evidence": "trigger size, perturbation budget, attack success, recovered marks, provenance traces, and behavior under controlled edits",
        "rule": "worst-case risk: average success is not enough when a small allowed change can cause large damage",
        "naive": "Checking normal examples only misses failures placed just outside the usual data.",
        "proof": "Good evidence would show the defense or detector still working after realistic transformations and unseen attacks.",
        "break": "A counterexample is protection that works only for known attacks or disappears after common edits, compression, cropping, or sensor changes.",
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
    if ".paper-depth{" not in text:
        return text.replace("</style>", CSS + "\n</style>", 1)
    if ".review-links{" not in text:
        return text.replace("</style>", ".review-links{font-family:var(--mono);font-size:12px;margin:7px 0}.review-links a{margin-right:10px}\n</style>", 1)
    return text


def upsert_render(text: str) -> str:
    if "paper-depth:start" in text:
        text = (
            text.replace("Hidden thing.", "Hidden quantity.")
            .replace("Math rule.", "Mathematical rule.")
            .replace("Why the simple method fails.", "Why the naive version fails.")
            .replace("What would prove it.", "Evidence that would prove it.")
            .replace("What would break it.", "Counterexample.")
        )
        if "reviewHref(d)" not in text:
            marker = "   ${d.pd?`<!-- paper-depth:start -->"
            text = text.replace(
                marker,
                '   <p class="review-links"><a href="${reviewHref(d)}">review this paper</a><a href="${qualityHref(d)}">quality audit</a><a href="${searchHref(d)}">paper permalink</a></p>\n'
                + marker,
                1,
            )
        return text
    old = "   ${d.ff?`<p><b>Paper focus.</b> ${esc(d.ff)}</p>`:''}\n   <p>${esc(d.p)}</p>"
    new = (
        "   ${d.ff?`<p><b>Paper focus.</b> ${esc(d.ff)}</p>`:''}\n"
        "   <p class=\"review-links\"><a href=\"${reviewHref(d)}\">review this paper</a><a href=\"${qualityHref(d)}\">quality audit</a><a href=\"${searchHref(d)}\">paper permalink</a></p>\n"
        "   ${d.pd?`<!-- paper-depth:start --><div class=\"paper-depth\"><p><b>Deeper first-principles read.</b> ${esc(d.pd.s)}</p><p><b>Hidden quantity.</b> ${esc(d.pd.h)}</p><p><b>Evidence.</b> ${esc(d.pd.e)}</p><p><b>Mathematical rule.</b> ${esc(d.pd.m)}</p><p><b>Why the naive version fails.</b> ${esc(d.pd.n)}</p><p><b>Evidence that would prove it.</b> ${esc(d.pd.p)}</p><p><b>Counterexample.</b> ${esc(d.pd.b)}</p></div><!-- paper-depth:end -->`:''}\n"
        "   <p>${esc(d.p)}</p>"
    )
    if old not in text:
        raise ValueError("missing render insertion point")
    return text.replace(old, new, 1)


def upsert_search_depth_filter(text: str) -> str:
    text = text.replace(
        "Search and filter every analyzed paper (4031) by keyword, theme, tag, or whether it released code.",
        "Search and filter every analyzed paper (4031) by keyword, theme, tag, code, hidden quantity, evidence, mathematical rule, naive failure, proof test, or counterexample.",
    ).replace(
        "Search title, problem, tags…",
        "Search title, problem, tags, evidence, counterexamples…",
    )
    old = (
        "   return (d.t+' '+d.p+' '+(d.fp||'')+' '+(d.ff||'')+' '+(d.tg||[]).join(' ')).toLowerCase().includes(term);\n"
        " });"
    )
    new = (
        "   const pd=d.pd||{};\n"
        "   return [d.t,d.p,d.fp,d.ff,(d.tg||[]).join(' '),pd.s,pd.h,pd.e,pd.m,pd.n,pd.p,pd.b].join(' ').toLowerCase().includes(term);\n"
        " });"
    )
    if old in text:
        text = text.replace(old, new, 1)
    elif "pd.s,pd.h,pd.e,pd.m,pd.n,pd.p,pd.b" not in text:
        raise ValueError("missing search filter insertion point")
    old_init = "const q=document.getElementById('q'),th=document.getElementById('th'),cc=document.getElementById('code'),res=document.getElementById('res'),nn=document.getElementById('n');"
    helpers = (
        "function paperParams(d){const p=new URLSearchParams(); p.set('q',d.t||''); if(d.th)p.set('theme',d.th); return p.toString();}\n"
        "function reviewHref(d){return `paper-review-queue.html#${paperParams(d)}`;}\n"
        "function qualityHref(d){const p=new URLSearchParams(); p.set('q',d.t||''); return `paper-note-quality.html#${p}`;}\n"
        "function searchHref(d){return `search.html?${paperParams(d)}`;}"
    )
    if "function reviewHref(d)" not in text:
        text = text.replace(
            "function esc(s){return (s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}",
            "function esc(s){return (s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}\n" + helpers,
            1,
        )
    new_init = (
        "const q=document.getElementById('q'),th=document.getElementById('th'),cc=document.getElementById('code'),res=document.getElementById('res'),nn=document.getElementById('n');\n"
        "const rawParams=location.search?location.search:location.hash.replace(/^#/,'?'); const params=new URLSearchParams(rawParams); q.value=params.get('q')||''; th.value=params.get('theme')||''; cc.checked=params.get('code')==='1';"
    )
    old_params = "const params=new URLSearchParams(location.search); q.value=params.get('q')||''; th.value=params.get('theme')||''; cc.checked=params.get('code')==='1';"
    new_params = "const rawParams=location.search?location.search:location.hash.replace(/^#/,'?'); const params=new URLSearchParams(rawParams); q.value=params.get('q')||''; th.value=params.get('theme')||''; cc.checked=params.get('code')==='1';"
    if old_params in text:
        text = text.replace(old_params, new_params, 1)
    elif old_init in text and "rawParams=location.search" not in text:
        text = text.replace(old_init, new_init, 1)
    elif "rawParams=location.search" not in text:
        raise ValueError("missing search init insertion point")
    old_handlers = "q.oninput=render;th.onchange=render;cc.onchange=render;render();"
    new_handlers = (
        "function syncUrl(){const p=new URLSearchParams(); if(q.value.trim())p.set('q',q.value.trim()); if(th.value)p.set('theme',th.value); if(cc.checked)p.set('code','1'); const next=p.toString()?`${location.pathname}?${p}`:location.pathname; history.replaceState(null,'',next);}\n"
        "q.oninput=()=>{syncUrl();render();};th.onchange=()=>{syncUrl();render();};cc.onchange=()=>{syncUrl();render();};render();"
    )
    if old_handlers in text:
        text = text.replace(old_handlers, new_handlers, 1)
    elif "function syncUrl()" not in text:
        raise ValueError("missing search handler insertion point")
    return text


def main() -> None:
    text = PAGE.read_text(encoding="utf-8")
    data, before, after = extract_data(text)
    for record in data:
        record["pd"] = depth_for(record)
    compact = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    out = before + compact + after
    out = upsert_search_depth_filter(upsert_css(upsert_render(out)))
    PAGE.write_text(out, encoding="utf-8")
    print(f"updated search.html paper depth: {len(data)} records")


if __name__ == "__main__":
    main()
