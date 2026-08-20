#!/usr/bin/env python3
"""Add detailed first-principles math bridges to cluster pages."""

from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


PAGES = {
    "cluster-vlm-reasoning.html": {
        "title": "The principles underneath this cluster",
        "intro": "Vision-language reasoning papers are not only trying to make answers longer. They are trying to make the path from image evidence to language answer inspectable and trainable. The central difficulty is that the model can speak fluently while losing contact with the image. The math underneath is about binding claims to evidence, assigning credit to intermediate steps, and deciding when extra thinking is useful rather than decorative.",
        "links": [("vlm-deepdive.html", "parent VLM theme"), ("attention-math.html", "attention and retrieval"), ("clip-math.html", "image-text alignment"), ("rl-math.html", "reward over reasoning"), ("uncertainty-math.html", "calibrated claims")],
        "items": [
            ("Reasoning is a state, not a slogan", "A final answer hides the route that produced it. If the model counted wrong, looked at the wrong region, or skipped a relation, the final sentence may not reveal where the failure entered.", "The principle is intermediate state. A chain of thought, sketch, tool call, crop, or visual cue is a temporary memory that stores partial evidence. Mathematically, the model is turning one hard mapping from image to answer into a sequence of smaller conditional steps.", "Chain-of-thought, visual scratchpad, chunked reasoning, and adaptive reasoning-length papers all ask what state should be written down, how long it should persist, and when extra state starts to distract from the image."),
            ("Reasoning needs credit assignment", "If only the final answer is scored, the model cannot tell which visual check helped and which sentence was useless. It may learn to sound careful instead of being careful.", "The principle is reward over a trajectory. The reasoning path is a sequence of actions: look, crop, cite, compute, answer. Credit assignment asks which action increased truth, grounding, safety, or usefulness.", "Process-reward models, saliency rewards, token rewards, GRPO-style training, and single-rollout RL all try to attach feedback to the steps that actually changed the outcome."),
            ("Grounding is correspondence", "A claim like 'the red car is behind the bus' is only meaningful if the words can be tied to the right regions and relations in the image.", "The principle is token-region binding. Text tokens, image patches, object boxes, and spatial relations must be mapped onto one another. Attention gives a soft correspondence; grounding losses and saliency checks make that correspondence accountable.", "Region grounding, saliency alignment, rationale decoding, active perception, and token-level grounding papers all try to keep language from floating free of visual evidence."),
            ("Tools turn claims into tests", "Some answers can be checked by a calculator, a simulator, a crop, or a detector. If the model never checks, it can keep a wrong belief alive through fluent text.", "The principle is external verification. A tool call changes reasoning from closed-form generation into a loop: propose a step, observe a result, update the state. This is the same control pattern as act-observe-correct.", "Tool-augmented video reasoning, code-writing VLMs, proof-of-perception systems, spatial tools, and simulator-backed VLA papers all add a checkable outside state to the reasoning loop."),
        ],
    },
    "cluster-efficient.html": {
        "title": "The principles underneath this cluster",
        "intro": "Efficient vision is not just engineering cleanup after the real model is built. It asks what parts of the computation actually carry information. Every speedup makes a mathematical bet: some weights, tokens, channels, bits, layers, or examples can be removed, shared, approximated, or routed without losing the behavior that matters.",
        "links": [("information-bottleneck-math.html", "useful bits"), ("svd-math.html", "low rank"), ("distill-math.html", "teacher to student"), ("mixture-of-lora-math.html", "small updates"), ("attention-math.html", "token cost")],
        "items": [
            ("Computation should follow information", "A high-resolution image may contain many background patches that do not affect the answer. Running the full model on every patch spends equal work on unequal evidence.", "The principle is budgeted information. Each token or feature has a cost, so the model should spend computation where removing evidence would change the prediction.", "Token pruning, token merging, sparse attention, early exiting, and adaptive resolution papers all ask which pieces of the input are worth paying for."),
            ("Large changes often live in low rank", "A model can have billions of weights, but adapting it to a new task may only need a few directions of change.", "The principle is low-dimensional update. SVD and low-rank factorization show that useful variation can sit in a small subspace. LoRA-style methods write updates as small matrix products rather than full rewrites.", "LoRA, mixture-of-LoRA, adapter routing, rank selection, and efficient finetuning papers all exploit the idea that the task update is smaller than the base model."),
            ("A small model can learn the shape of a large one", "Hard labels say only the final answer. A larger teacher also knows which wrong classes are close, where it is uncertain, and which internal features matter.", "The principle is distribution matching. Distillation trains a student to match the teacher's probability shape or intermediate representations, transferring more information than labels alone.", "Distillation, feature imitation, progressive compression, quantization-aware training, and student-teacher papers all ask which behavior of the large model must be preserved."),
            ("Approximation must be measured where it matters", "A model can be faster but fail on the rare cases that made the full model useful. Average speed alone does not prove the approximation is safe.", "The principle is constrained approximation. The goal is not merely fewer operations; it is fewer operations subject to bounded loss in task behavior, calibration, or robustness.", "Quantization, pruning, sparsity, efficient deployment, and hardware-aware papers all trade exact computation for a controlled error budget."),
        ],
    },
    "cluster-recon-nvs.html": {
        "title": "The principles underneath this cluster",
        "intro": "Reconstruction and novel-view synthesis are one inverse problem: infer a hidden 3D scene from 2D measurements, then render it from a new camera. The papers differ in representation, but the deep structure is the same: camera rays constrain geometry, rendering gives supervision, and the scene state must be compact enough to optimize or predict.",
        "links": [("depth-math.html", "hidden depth"), ("nerf-math.html", "neural fields"), ("gsplat-math.html", "Gaussian splats"), ("spectral-graph-math.html", "smooth structure"), ("kalman-filter-math.html", "iterative correction")],
        "items": [
            ("Pixels are ray measurements", "A pixel is not a point in the world. It is the result of light arriving along a camera ray, possibly after passing surfaces, transparency, reflections, or empty space.", "The principle is projective inverse geometry. A 3D point must project consistently into every view that sees it. Camera pose, epipolar geometry, and ray consistency shrink the possible worlds.", "Multi-view stereo, pose-free reconstruction, ray-based matching, epipolar attention, and metric 3D papers all use camera geometry to rule out impossible scenes."),
            ("Rendering closes the learning loop", "If the guessed scene is correct, drawing it from a known camera should reproduce the observed photo. If it does not, the scene representation has evidence for how to change.", "The principle is differentiable rendering. A scene state is rendered into pixels, the pixel error is measured, and gradients update density, color, depth, or Gaussian parameters.", "NeRF, Gaussian splatting, inverse rendering, relighting, material recovery, and feed-forward reconstruction papers all train by comparing rendered evidence with measured evidence."),
            ("The scene needs the right memory", "Storing a separate 3D element for every input pixel creates repeated, unstable, or expensive geometry. Storing too little loses surfaces and thin structures.", "The principle is sufficient scene state. The representation must keep the degrees of freedom needed for new views: fields, Gaussians, meshes, points, planes, or latent scene tokens.", "Large reconstruction models, compact splatting, dynamic point maps, and iterative scene-state methods differ in what they choose to remember and how images update that memory."),
            ("Time and motion make reconstruction 4D", "A person, vehicle, or hand-object scene changes while the camera watches. A static scene model will smear motion or assign different identities across frames.", "The principle is correspondence through time. The scene state must include motion, deformation, rigidity, or time-indexed structure so today's surface can be traced to yesterday's surface.", "Dynamic NeRF, 4D Gaussian splatting, dynamic point maps, motion-scale models, and topology-aware tracking papers all add temporal constraints to the 3D inverse problem."),
        ],
    },
    "cluster-open-vocab.html": {
        "title": "The principles underneath this cluster",
        "intro": "Open-vocabulary vision changes the output space. Instead of choosing from a fixed list of labels, the model must use language as a live query into visual evidence. The deep issue is not naming more classes; it is making a shared geometry where arbitrary words can point to the right regions without losing spatial evidence.",
        "links": [("clip-math.html", "image-text space"), ("embeddings-math.html", "meaning geometry"), ("attention-math.html", "query and retrieval"), ("sam-math.html", "prompted masks"), ("kernels-math.html", "similarity")],
        "items": [
            ("A label becomes a vector", "In closed classification, 'dog' is one fixed output slot. In open vocabulary, 'rusty bicycle wheel' or 'the tool near the sink' must become a searchable description.", "The principle is language-conditioned similarity. Text and image regions are embedded in a shared space, and recognition becomes nearest-neighbor or softmax matching between visual evidence and text queries.", "Open-vocabulary detection, segmentation, retrieval, grounding, and zero-shot recognition papers all replace fixed class heads with text-guided comparison."),
            ("Words must land on regions", "A phrase can be visually true in one part of the image and false elsewhere. Global image-text matching is too coarse when the task asks for a box, mask, or point.", "The principle is local grounding. Region features, masks, object proposals, and patch tokens must preserve enough spatial detail for language to select the right part.", "Grounded detection, open-vocabulary segmentation, phrase grounding, SAM-plus-language systems, and region-text alignment papers all bind text to localized evidence."),
            ("General labels need specific evidence", "A model may know the word 'vehicle' but still need to distinguish a bus from a van, a toy from a real object, or an object partly hidden by another.", "The principle is hierarchical and contextual similarity. Broad concepts, fine concepts, and context must be represented at different scales, not collapsed into one global score.", "Category hierarchy, part-aware open vocab, fine-grained recognition, and context-aware grounding papers all adjust similarity so words match the correct level of detail."),
            ("Open vocab inherits language bias", "Language brings broad knowledge, but it also brings common associations that may overpower what is actually visible.", "The principle is calibrated evidence weighting. Text priors and visual evidence must be balanced so the model does not hallucinate likely objects when the pixels do not support them.", "Debiasing, prompt tuning, calibration, negative prompts, and hallucination-control papers all try to keep language helpful without letting it replace seeing."),
        ],
    },
    "cluster-restoration.html": {
        "title": "The principles underneath this cluster",
        "intro": "Restoration is not simply making images prettier. It is an inverse problem: a clean scene passed through blur, noise, darkness, weather, compression, or missing pixels, and the method tries to infer the clean cause. The difficulty is that many clean images could explain the same corrupted input.",
        "links": [("diffusion-math.html", "learned priors"), ("fourier-math.html", "frequency and blur"), ("information-theory-math.html", "lost bits"), ("vae-math.html", "latent codes"), ("uncertainty-math.html", "ambiguous recovery")],
        "items": [
            ("Corruption destroys information unevenly", "Blur removes sharp edges, noise hides weak signals, darkness reduces photon counts, and compression discards high-frequency detail.", "The principle is measurement loss. The observed image is a degraded measurement of a hidden clean image. Some information is weakened, some is mixed, and some may be gone.", "Deblurring, denoising, low-light, deraining, dehazing, super-resolution, and compression-restoration papers all model what the corruption changed."),
            ("A prior fills what the measurement cannot decide", "When an image is very noisy or missing pixels, the corrupted input alone cannot determine the exact clean image.", "The principle is prior-guided inverse inference. A learned image prior supplies likely structure while the measurement keeps the result tied to the observed input.", "Diffusion restoration, generative priors, masked reconstruction, burst recovery, and low-light enhancement papers all balance measured evidence with learned natural-image structure."),
            ("Frequency explains blur and sharpness", "Edges and fine textures live in faster changes; smooth lighting lives in slower changes. Many corruptions damage these parts differently.", "The principle is frequency separation. Fourier-style thinking separates slow and fast components so the method can restore edges, suppress noise, or avoid amplifying artifacts.", "Deblurring, super-resolution, denoising, JPEG cleanup, and texture restoration papers often differ in how they recover or protect high-frequency information."),
            ("Restoration must not invent unchecked detail", "A restored image can look sharp but add a texture, face detail, lesion boundary, or license-plate stroke that was not supported by evidence.", "The principle is uncertainty-aware reconstruction. The method should distinguish likely detail from proven detail, especially in medical, forensic, or scientific images.", "Faithful restoration, uncertainty maps, reference-guided restoration, medical enhancement, and evaluation papers all ask whether the clean-looking output is actually justified."),
        ],
    },
    "cluster-gaussian-splatting.html": {
        "title": "The principles underneath this cluster",
        "intro": "Gaussian splatting stores a 3D scene as many soft blobs that can be projected and blended quickly. The deeper principle is a trade: replace a slow continuous volume with a finite set of differentiable scene elements, then train those elements by how well they render the observed photos.",
        "links": [("gsplat-math.html", "Gaussian splats"), ("nerf-math.html", "volume rendering"), ("depth-math.html", "hidden geometry"), ("optimization-math.html", "scene fitting"), ("kalman-filter-math.html", "iterative correction")],
        "items": [
            ("A blob is a local scene hypothesis", "Each Gaussian says: there is some colored matter around this 3D location, with this size, direction, opacity, and color.", "The principle is local basis representation. A complex scene is approximated by adding many simple smooth functions. Each blob covers a small part of space, and many blobs together form surfaces.", "Static splatting, compact splatting, avatar splatting, object splatting, and scene editing papers all change what each blob stores and how blobs are placed."),
            ("Fast rendering comes from ordered projection", "To draw a view, blobs are projected onto the image and blended by depth and opacity. The result must approximate how light from surfaces reaches the camera.", "The principle is differentiable alpha compositing. The rendered pixel is a weighted sum of visible blob colors, where opacity and ordering decide how much each blob contributes.", "Real-time rendering, antialiasing, transparency, depth sorting, and quality-improvement papers all tune this projection-and-blend step."),
            ("Geometry is learned through image error", "The training data is often only photos. If a blob is in the wrong place, the rendered image will be wrong from one or more views.", "The principle is inverse rendering by gradient descent. Rendering error supplies gradients that move blob position, shape, opacity, and color toward a scene that explains all views.", "Optimization, feed-forward splatting, iterative refinement, sparse-view splatting, and pose-free splatting papers all differ in how they initialize and correct the blobs."),
            ("Splatting must respect structure beyond appearance", "A scene can look good from training views while having broken depth, floating blobs, unstable motion, or bad materials.", "The principle is additional constraints on the representation. Depth, normals, motion, topology, semantics, lighting, and physical material cues restrict which blob arrangements are acceptable.", "Dynamic splatting, relighting, material recovery, semantic splatting, topology-aware splatting, and driving-scene splatting all add constraints beyond pixel color."),
        ],
    },
    "cluster-medical.html": {
        "title": "The principles underneath this cluster",
        "intro": "Medical and science vision treat images as measurements, not just pictures. A wrong boundary, count, or reconstructed signal can change a scientific claim or clinical decision. The math must respect noise, calibration, uncertainty, and the fact that labels are scarce and expensive.",
        "links": [("uncertainty-math.html", "safe doubt"), ("information-theory-math.html", "measurement cost"), ("bias-variance-math.html", "small data"), ("sam-math.html", "segmentation"), ("mle-math.html", "likelihood")],
        "items": [
            ("The image is an instrument reading", "A scan, microscope image, or scientific sensor output is produced by a measurement device with its own noise, resolution, and bias.", "The principle is observation modeling. The method should account for how the instrument maps the underlying body, cell, material, or physical process into image values.", "Reconstruction, denoising, microscopy, MRI, CT, pathology, and scientific-imaging papers all improve when they model the measurement rather than treating the image as a generic photo."),
            ("Labels are scarce and uneven", "Expert labels take time, disagree, and may cover only small datasets. Rare diseases or rare scientific cases may have very few examples.", "The principle is learning under limited supervision. Priors, self-supervision, transfer, weak labels, active learning, and uncertainty are used to extract more signal from fewer trusted labels.", "Few-shot medical, semi-supervised segmentation, foundation transfer, anomaly detection, and active annotation papers all ask how to learn without a large clean label table."),
            ("Uncertainty is part of the answer", "A boundary in a scan may be unclear. A diagnosis may depend on image quality. A scientific reconstruction may admit several plausible explanations.", "The principle is calibrated uncertainty. The model should say not only what it predicts but how strongly the measurement supports that prediction.", "Uncertainty maps, calibrated classifiers, ambiguous segmentation, risk-aware detection, and human-in-the-loop papers make doubt visible instead of hiding it."),
            ("Structure comes from the domain", "Organs, cells, vessels, crystals, weather systems, and materials are not arbitrary textures. They have shapes, scales, and physical limits.", "The principle is domain-constrained representation. The model should use known anatomy, topology, conservation, smoothness, or physical constraints when visual evidence is weak.", "Medical segmentation, vessel tracing, cell counting, protein or material imaging, and physics-guided reconstruction papers all use domain structure to prevent impossible outputs."),
        ],
    },
    "cluster-video-world.html": {
        "title": "The principles underneath this cluster",
        "intro": "Video generation and world models both ask for imagination over time. The output is not one plausible frame but a path of states that should remain coherent as objects move, collide, disappear, and reappear. The math is about distributions over trajectories.",
        "links": [("video-math.html", "time"), ("wm-math.html", "world state"), ("diffusion-math.html", "trajectory generation"), ("ar-math.html", "next-step factorization"), ("flow-math.html", "motion")],
        "items": [
            ("A video is a path through state space", "A good first frame is not enough. The later frames must preserve identity, geometry, lighting, and cause.", "The principle is trajectory modeling. The model learns a probability distribution over sequences, not independent images. Each frame constrains the next.", "Video diffusion, autoregressive video, long video generation, and temporal consistency papers all model the whole path rather than isolated frames."),
            ("World models need hidden state", "An agent or generator cannot see everything in one frame. It must remember what is behind the camera, what is occluded, and what just happened.", "The principle is latent dynamics. A hidden state compresses history and updates under actions or time, letting the model predict future observations.", "World models, action-conditioned video, navigation prediction, and simulation-for-planning papers all learn a state that stands behind visible frames."),
            ("Motion must be constrained", "Objects should not flicker, teleport, change identity, or violate simple physical continuity unless the scene actually changes that way.", "The principle is temporal correspondence plus dynamics. Motion fields, object states, and physical priors restrict how pixels and entities can move.", "Optical-flow guided generation, object-centric video, physics-aware video, and controllable motion papers all add constraints to keep generated time coherent."),
            ("Long horizons amplify small errors", "A tiny mistake in one frame can become a large drift many frames later.", "The principle is error accumulation in sequential prediction. Autoregressive and recurrent systems feed their own outputs back into future inputs, so calibration and correction matter.", "Long-context video, memory, planning, test-time refinement, and consistency-check papers all fight drift over extended sequences."),
        ],
    },
    "cluster-controllable-gen.html": {
        "title": "The principles underneath this cluster",
        "intro": "Controllable generation is generation with conditions that must be obeyed. The user is not asking for any realistic sample; they are asking for a sample that matches a prompt, layout, identity, pose, depth map, mask, edit, or reference while keeping the rest coherent.",
        "links": [("diffusion-math.html", "noise to data"), ("clip-math.html", "text-image control"), ("attention-math.html", "conditioning"), ("optimal-transport-math.html", "moving distributions"), ("vae-math.html", "latent control")],
        "items": [
            ("Control is evidence, not decoration", "A pose map, mask, sketch, or reference image is information that should restrict the set of valid outputs.", "The principle is conditional generation. The model samples from the data distribution given the condition, not from the unconditional image distribution.", "ControlNet-style methods, layout-to-image, pose-guided generation, depth-guided generation, and mask-conditioned editing all inject extra evidence into the sampling path."),
            ("Edits need locality", "Changing a shirt color should not change the face. Moving one object should not rebuild the whole image.", "The principle is constrained change. The model must alter the degrees of freedom named by the edit while preserving unrelated variables.", "Image editing, inpainting, identity preservation, attention control, and localized diffusion papers all try to separate what should move from what should stay fixed."),
            ("Reference and text can disagree", "A prompt may say one thing while a reference image shows another. A style image may conflict with layout. A mask may be too coarse.", "The principle is multi-condition weighting. Different conditions act like competing constraints, and the model must decide which evidence controls which part of the sample.", "Personalization, style transfer, subject-driven generation, multi-control composition, and prompt-guidance papers all tune the balance among conditions."),
            ("Guidance changes probability mass", "Stronger guidance may improve prompt following but reduce diversity or create artifacts.", "The principle is score shaping. Guidance changes the direction field used during sampling, pushing samples toward the condition while risking movement away from the natural data distribution.", "Classifier-free guidance, preference guidance, negative prompts, reward-guided diffusion, and controllability evaluation papers all study this tradeoff."),
        ],
    },
    "cluster-driving-vla.html": {
        "title": "The principles underneath this cluster",
        "intro": "Driving and vision-language-action turn perception into motion. The model must not only understand a scene; it must choose an action whose consequences unfold over time. The core math is partial information, future value, physical constraints, and uncertainty-aware control.",
        "links": [("vla-math.html", "vision to action"), ("rl-math.html", "future reward"), ("q-learning-math.html", "value"), ("kalman-filter-math.html", "state estimation"), ("uncertainty-math.html", "risk")],
        "items": [
            ("The state is partly hidden", "A camera does not reveal friction, intent, blind spots, exact future motion, or what lies behind an occlusion.", "The principle is state estimation under partial observation. The system must infer a hidden state from sensors, memory, maps, and language instructions.", "Driving perception, robot manipulation, navigation, active perception, and VLA papers all estimate enough hidden state to act."),
            ("Actions are judged by future consequences", "A lane change, grasp, or turn may only reveal its value later. Immediate visual comfort is not the same as safe outcome.", "The principle is expected return. Actions should be chosen by predicted future reward, safety, progress, and constraint satisfaction over a horizon.", "RL, imitation learning, planning, diffusion policy, trajectory scoring, and Q-value papers all turn future consequences into trainable signals."),
            ("Language must ground into affordances", "A command like 'pick up the cup' or 'turn right after the bus' must become actions allowed by the body and scene.", "The principle is symbol-to-control grounding. Words select goals and constraints, but control variables must satisfy geometry, contact, dynamics, and timing.", "VLA, embodied reasoning, robot instruction, navigation, and driving-language papers all map language tokens into action-conditioned scene states."),
            ("Safety is a hard constraint on exploration", "A robot cannot freely try dangerous actions to learn. A car cannot treat rare collision cases as acceptable average error.", "The principle is constrained control under uncertainty. The policy must optimize reward while respecting safety limits and accounting for uncertainty in state and future motion.", "Driving safety, collision avoidance, verifier-guided policies, simulation checks, and uncertainty-aware planning papers all put guardrails around the action choice."),
        ],
    },
    "cluster-adversarial.html": {
        "title": "The principles underneath this cluster",
        "intro": "Adversarial robustness is about the shape of the decision boundary. A model can look accurate on natural data while having a wrong answer very close by in input space. The deep question is how far the model's belief extends before a small change flips it.",
        "links": [("adversarial-math.html", "worst-case change"), ("uncertainty-math.html", "confidence"), ("bias-variance-math.html", "generalization"), ("tta-math.html", "shift"), ("information-theory-math.html", "signal and noise")],
        "items": [
            ("Average accuracy hides nearby failures", "A test set can be passed while tiny input changes still cause wrong answers.", "The principle is local worst-case risk. Robustness asks whether any allowed perturbation inside a small neighborhood can change the prediction.", "Adversarial attack, defense, certified robustness, and corruption benchmark papers all replace average-case evaluation with stress around each example."),
            ("The boundary has geometry", "If the decision boundary passes close to real data, a small change can cross it. If the boundary is farther away, the same change will not matter.", "The principle is margin. The model should not only classify correctly; it should keep a buffer between real examples and wrong regions.", "Margin losses, smoothing, certified radii, adversarial training, and feature regularization papers all reshape or measure the boundary."),
            ("Robustness and invariance are different", "Some changes should not affect the answer, like small lighting shifts. Other changes should affect it, like removing the object.", "The principle is task-respecting invariance. The model must ignore nuisance changes while remaining sensitive to meaningful changes.", "Augmentation, equivariant models, corruption robustness, transformation defenses, and semantic attack papers all define which changes should preserve the label."),
            ("Confidence can fail before accuracy fails", "A model may be wrong and highly confident, or right for the wrong reason. That is dangerous in deployment.", "The principle is calibrated uncertainty under shift. A robust model should know when evidence no longer supports its answer.", "Out-of-distribution detection, calibration, test-time adaptation, safety filtering, and adversarial confidence papers all make uncertainty part of the defense."),
        ],
    },
}


CSS = """
.cbridge{border:1px solid var(--line);border-left:3px solid var(--good);border-radius:0 12px 12px 0;padding:18px 20px;margin:22px 0;background:#f4faf6}
.cbridge h2{margin-top:0}
.cbridge .cintro{font-size:15.5px;line-height:1.65;color:#23302C;margin:10px 0 16px}
.clinks{margin:10px 0 16px}
.clinks .lbl{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--graphite);display:block;margin-bottom:6px}
.clinks a{display:inline-block;font-size:13px;border:1px solid var(--line);border-radius:18px;padding:3px 10px;margin:3px 4px 3px 0;background:#fff;text-decoration:none;color:var(--accent-deep)}
.citem{border-top:1px solid var(--line);padding-top:13px;margin-top:13px}
.citem h3{font-size:17px;margin:0 0 7px;color:var(--accent-deep)}
.citem p{font-size:14.7px;line-height:1.62;margin:8px 0;color:#23302C}
.citem b{color:var(--ink)}
"""


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def render_block(data: dict[str, object]) -> str:
    links = "".join(f'<a href="{esc(href)}">{esc(label)}</a>' for href, label in data["links"])
    items = []
    for name, everyday, principle, papers in data["items"]:
        items.append(
            '<div class="citem">'
            f"<h3>{esc(name)}</h3>"
            f"<p><b>Everyday evidence.</b> {esc(everyday)}</p>"
            f"<p><b>Fundamental math principle.</b> {esc(principle)}</p>"
            f"<p><b>How it shows up in the papers.</b> {esc(papers)}</p>"
            "</div>"
        )
    return (
        "<!-- cluster-principles:start -->"
        '<section class="cbridge" id="math-principles">'
        f"<h2>{esc(data['title'])}</h2>"
        f'<p class="cintro">{esc(data["intro"])}</p>'
        f'<div class="clinks"><span class="lbl">Math pages to keep open</span>{links}</div>'
        + "".join(items)
        + "</section>"
        "<!-- cluster-principles:end -->"
    )


def upsert_css(text: str) -> str:
    if ".cbridge{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_block(text: str, block: str) -> str:
    start = "<!-- cluster-principles:start -->"
    end = "<!-- cluster-principles:end -->"
    if start in text and end in text:
        prefix, rest = text.split(start, 1)
        _, suffix = rest.split(end, 1)
        return prefix + block + suffix
    marker = "<h2>The problem"
    if marker not in text:
        raise ValueError("could not find problem marker")
    return text.replace(marker, block + marker, 1)


def main() -> None:
    changed = []
    for filename, data in PAGES.items():
        path = ROOT / filename
        text = path.read_text(encoding="utf-8")
        text2 = upsert_block(upsert_css(text), render_block(data))
        if text2 != text:
            path.write_text(text2, encoding="utf-8")
            changed.append(filename)
    print(f"updated {len(changed)} pages")
    for filename in changed:
        print(filename)


if __name__ == "__main__":
    main()
