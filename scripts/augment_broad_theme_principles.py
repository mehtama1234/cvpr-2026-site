#!/usr/bin/env python3
"""Add detailed first-principles math bridges to the eight broad theme pages."""

from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


PAGES = {
    "emerging-deepdive.html": {
        "title": "The mathematical principles underneath the frontier",
        "intro": "The frontier papers look scattered at first: event cameras, radar, forensics, unlearning, single-photon sensors, and scientific images. The common problem is measurement mismatch. The data is not the ordinary clean photo the old toolbox expects, or the duty is not the ordinary prediction task the old benchmark measured. These papers work when they turn the mismatch into a precise mathematical object.",
        "items": [
            {
                "name": "Sparse evidence still has structure",
                "everyday": "An event camera does not give a full picture. It gives a stream of tiny changes. A single-photon sensor does not give a clean image. It gives rare hits. The first mistake is to treat that as broken image data.",
                "principle": "The principle is inverse measurement. A sensor applies a rule that turns the hidden world into observations. If you know the rule, even sparse observations can constrain the hidden cause. The math asks: which image, depth, motion, or scene could have produced these sparse measurements?",
                "papers": "Event reconstruction, spike-camera video, SPAD reconstruction, and event-depth papers all use this move. They do not ask the sensor to behave like a normal camera; they build a model around what the sensor actually measures.",
            },
            {
                "name": "Time can be the signal",
                "everyday": "A normal frame may blur a fast object because it sums too much time into one picture. An event stream keeps the timing and throws away the unchanged background.",
                "principle": "The principle is continuous-time evidence. Instead of sampling the world on a fixed clock, the sensor reports changes when they happen. The mathematical object is no longer a grid of pixels but a sequence of events with position, sign, and time.",
                "papers": "Tracking, deblurring, event recognition, and spiking-network papers use timing as the main evidence. They treat perception as something updated between frames, not only at frame boundaries.",
            },
            {
                "name": "Trust becomes part of the task",
                "everyday": "Once generated images, face models, and large vision systems are used in the real world, the question is not only whether the answer is accurate. It is whether the system can be audited, corrected, or made to forget.",
                "principle": "The principle is constraint on information flow. Forensics asks whether an image came from one source or another. Unlearning asks whether a model still carries information it should not carry. Robustness asks whether small changes can force the wrong answer.",
                "papers": "Deepfake detection, watermarking, provenance, model unlearning, and safety papers are all versions of this. They make trust measurable: source, retained information, uncertainty, and failure under pressure.",
            },
            {
                "name": "Old visual priors must be translated",
                "everyday": "Medical scans, radar, satellite data, microscopy, event streams, and quanta bursts do not look like web photos. But they still contain shape, boundaries, motion, and repeated structure.",
                "principle": "The principle is representation transfer. A useful model must preserve what is special about the new measurement while mapping it into a space where existing visual knowledge can help.",
                "papers": "Foundation-model transfer, synthetic-data factories, scientific-imaging models, and cross-sensor alignment papers use this bridge. They borrow structure without pretending every sensor is the same.",
            },
        ],
    },
    "threed-deepdive.html": {
        "title": "The mathematical principles underneath 3D recovery",
        "intro": "The 3D pages are not just about making meshes, Gaussians, or depth maps. The first-principles problem is choosing a hidden world from flat evidence. A camera collapses distance, scale, and occlusion into a rectangle. The math matters because many different worlds can cast the same pixels.",
        "items": [
            {
                "name": "One image underdetermines the world",
                "everyday": "A small nearby object and a large faraway object can cover the same number of pixels. A flat poster and a real object can look similar from one view.",
                "principle": "The principle is underdetermination. The image gives fewer facts than the 3D world contains. Depth, surface shape, and hidden backsides must be inferred using priors, extra views, motion, or physical constraints.",
                "papers": "Monocular depth, metric reconstruction, single-view 3D, and feed-forward reconstruction papers all fight this missing-information problem. The stronger papers say where the missing evidence comes from.",
            },
            {
                "name": "Camera geometry is a hard constraint",
                "everyday": "If two cameras see the same point, its two image locations cannot be arbitrary. They must line up according to the camera positions.",
                "principle": "The principle is projective geometry. Rays leave the camera through pixels and meet the world. Multi-view methods use ray consistency, epipolar lines, and camera poses to reduce the set of possible depths.",
                "papers": "Stereo, multi-view depth, DUSt3R-style reconstruction, pose-aware VLMs, and epipolar-attention papers use geometry to forbid impossible matches before learning begins.",
            },
            {
                "name": "Rendering can train geometry",
                "everyday": "If a guessed 3D scene is right, drawing it from the camera should reproduce the photo. If the drawing is wrong, the scene guess should change.",
                "principle": "The principle is differentiable rendering. A scene representation is passed through a rendering equation, the rendered pixels are compared with real pixels, and the error is pushed back into depth, density, color, or Gaussian blobs.",
                "papers": "NeRF, Gaussian splatting, 3D reconstruction, relighting, and novel-view papers use the same loop: guess scene, render scene, compare image, update scene.",
            },
            {
                "name": "A scene needs a compact state",
                "everyday": "A high-resolution video has too many pixels to turn every pixel into its own permanent 3D object. Most pixels are repeated evidence about the same surfaces.",
                "principle": "The principle is compressed scene representation. The model needs a smaller state that can absorb many views: points, Gaussians, voxels, planes, latent tokens, or a neural field.",
                "papers": "Gaussian-splatting, compact reconstruction, iterative scene-state, and large reconstruction model papers differ mainly in what state they keep and how image evidence updates it.",
            },
        ],
    },
    "video-deepdive.html": {
        "title": "The mathematical principles underneath video",
        "intro": "Video is not many images pasted together. The extra thing is time. Time creates identity, motion, cause, and drift. A model has to decide what stayed the same, what moved, what disappeared, and what the next frame is allowed to be.",
        "items": [
            {
                "name": "Identity must persist through change",
                "everyday": "A person walking behind a pole is still the same person after they come out. A point on a hand should stay attached to that hand as the hand moves.",
                "principle": "The principle is temporal correspondence. The model must match entities across frames under motion, deformation, occlusion, and viewpoint change.",
                "papers": "Tracking, optical flow, video segmentation, point tracking, and object persistence papers all ask which thing at time t is the same thing at time t plus one.",
            },
            {
                "name": "Motion is a field, not a label",
                "everyday": "A frame difference can show that something changed, but not cleanly where every part went.",
                "principle": "The principle is vector-valued change over space and time. Optical flow and motion fields assign local arrows, while video models learn longer-range state updates.",
                "papers": "Flow, action, video prediction, and temporal reconstruction papers use motion fields or hidden state to make change measurable.",
            },
            {
                "name": "Long memory is expensive",
                "everyday": "To understand a long video, a model may need a fact from many seconds ago. Rereading every frame against every other frame is too costly.",
                "principle": "The principle is temporal compression. The model must keep a state, memory, or sparse set of important tokens that preserves what later frames need.",
                "papers": "Long-video transformers, Mamba-style sequence models, memory banks, token pruning, and video diffusion papers all choose what past evidence is worth carrying forward.",
            },
            {
                "name": "Generated time must obey consistency",
                "everyday": "A generated image can look good alone. A generated video fails if a face changes identity, an object flickers, or motion breaks physics.",
                "principle": "The principle is sequential constraint. Each frame must be plausible by itself and compatible with the frames around it. The distribution is over paths, not isolated images.",
                "papers": "Video diffusion, world-model, temporal editing, and controllable-video papers are judged by path consistency: appearance, geometry, action, and cause over time.",
            },
        ],
    },
    "generation-deepdive.html": {
        "title": "The mathematical principles underneath generation",
        "intro": "Generation is the reverse bridge: from meaning to pixels. The hard part is that there is no single correct image. A prompt names a region of possible images, and the model must land inside that region while still looking real.",
        "items": [
            {
                "name": "Real data is a thin target",
                "everyday": "Most possible pixel grids are static, nonsense, or broken shapes. Real images occupy a tiny structured part of the space.",
                "principle": "The principle is distribution modeling on a manifold. The generator learns the shape of real data and then samples from it.",
                "papers": "Diffusion, flow matching, GANs, VAEs, normalizing flows, and autoregressive image models are different ways to move samples onto that thin data region.",
            },
            {
                "name": "Noise gives a path into structure",
                "everyday": "Drawing a whole image in one step is hard. Cleaning a slightly noisy image is easier. Repeating small cleanups can make a full image.",
                "principle": "The principle is learned reverse process. Diffusion corrupts data into noise, then learns the direction back from noise to data at each noise level.",
                "papers": "Image, video, 3D, action, editing, and acceleration papers all reuse this: learn a direction field that turns disorder into structured samples.",
            },
            {
                "name": "Control is conditioning",
                "everyday": "A user does not only want a realistic image. They want this object, this pose, this layout, this identity, or this edit while the rest stays stable.",
                "principle": "The principle is conditional probability. The generated sample should come from the data distribution given extra evidence: text, mask, depth, pose, reference image, camera, or trajectory.",
                "papers": "Text-to-image, controllable generation, image editing, personalization, layout control, and guided video papers differ in what evidence they condition on and how strongly it steers the sample.",
            },
            {
                "name": "Fidelity and diversity pull against each other",
                "everyday": "A model can make safe similar outputs, or varied outputs that sometimes miss the request. Both failures matter.",
                "principle": "The principle is probability mass allocation. The model must put enough mass on all valid answers without spreading mass onto invalid ones.",
                "papers": "Distillation, guidance, preference optimization, adversarial training, and evaluation papers all tune this balance: sharpness, diversity, prompt faithfulness, and safety.",
            },
        ],
    },
    "vlm-deepdive.html": {
        "title": "The mathematical principles underneath vision-language models",
        "intro": "A vision-language model is not just an image captioner. It is a system that must align two kinds of evidence: visual structure and language structure. The hard part is grounding words in pixels without losing the geometry and uncertainty of the image.",
        "items": [
            {
                "name": "Images and words need a shared space",
                "everyday": "The word 'mug' and the pixels of a mug are different forms of data. The model needs a place where they can be compared.",
                "principle": "The principle is embedding alignment. Image features and text features are mapped into vectors where matching pairs are close and mismatched pairs are far.",
                "papers": "CLIP-style training, open-vocabulary recognition, retrieval, grounding, and VLM pretraining papers all depend on this shared space.",
            },
            {
                "name": "Grounding is not the same as naming",
                "everyday": "A model can say 'dog' because dogs are common in training data, but still fail to point to the right dog in a crowded image.",
                "principle": "The principle is correspondence between tokens and regions. Language tokens must attend to the image regions that support them, and image regions must carry enough spatial detail to be checked.",
                "papers": "Referring expression, visual question answering, grounded captioning, region-level VLM, and hallucination-reduction papers all test whether words are tied to evidence.",
            },
            {
                "name": "Reasoning needs state over evidence",
                "everyday": "A question may require counting, comparing, reading text, checking relations, or combining clues across an image.",
                "principle": "The principle is structured inference. The model must keep intermediate facts and combine them instead of jumping from image to answer.",
                "papers": "Chain-of-thought VLMs, tool-using VLMs, chart reasoning, document understanding, spatial reasoning, and multi-image reasoning papers all add machinery for intermediate evidence.",
            },
            {
                "name": "Confidence must be calibrated",
                "everyday": "A fluent answer can be wrong. In language, wrong confidence sounds like knowledge; in vision, it becomes hallucination.",
                "principle": "The principle is uncertainty over grounded claims. A claim should be strong only when the visual evidence supports it and weak when the image does not decide it.",
                "papers": "Answer verification, hallucination detection, refusal, calibration, and evidence-citation papers make the model account for what in the image supports the words.",
            },
        ],
    },
    "perceive-deepdive.html": {
        "title": "The mathematical principles underneath perception",
        "intro": "Perception is the classic core: find, name, outline, count, and read what is in the picture. The first-principles issue is turning a grid of brightness values into discrete things with boundaries, identities, and relations.",
        "items": [
            {
                "name": "A pixel is not an object",
                "everyday": "A cat is spread across many pixels. Some pixels belong to the cat, some to the background, and some sit on the boundary.",
                "principle": "The principle is grouping. Features must be assigned to objects, regions, or parts. Segmentation, detection, and keypoint estimation are different forms of assigning pixels or patches to structured outputs.",
                "papers": "Detection, segmentation, pose, part parsing, and object-centric papers all ask how local evidence becomes object-level structure.",
            },
            {
                "name": "Boundaries are decisions under uncertainty",
                "everyday": "Edges can be blurry, occluded, transparent, shadowed, or partly outside the image.",
                "principle": "The principle is spatial classification with smoothness and evidence. The model must decide where one thing ends and another begins while respecting local texture and larger shape.",
                "papers": "SAM-like segmentation, medical segmentation, matting, edge detection, and camouflaged-object papers all depend on boundary evidence plus shape priors.",
            },
            {
                "name": "Open vocabulary changes the label space",
                "everyday": "A fixed classifier can only name classes it was trained to name. Real users ask for any phrase.",
                "principle": "The principle is label as embedding. Instead of a fixed output slot for every class, the label becomes a text vector that can be compared with visual regions.",
                "papers": "Open-vocabulary detection, grounding, zero-shot segmentation, and text-guided recognition papers all replace closed labels with language-aligned similarity.",
            },
            {
                "name": "Counting and relations need structure",
                "everyday": "Knowing that objects are present is not enough to answer how many, which one is left of another, or whether one part belongs to another.",
                "principle": "The principle is set and relation modeling. The output is not one label but a structured collection of entities and links.",
                "papers": "DETR-like set prediction, scene graphs, counting, relationship detection, and compositional perception papers all turn perception into structured prediction.",
            },
        ],
    },
    "embodied-deepdive.html": {
        "title": "The mathematical principles underneath embodied vision",
        "intro": "Embodied vision closes the loop. Seeing is no longer only description; it changes what a robot or car does next. The first-principles problem is that perception errors become physical errors.",
        "items": [
            {
                "name": "Action depends on hidden state",
                "everyday": "A robot sees one camera view, but the real state includes object weight, friction, contact, goal, and what happened a moment ago.",
                "principle": "The principle is partial observability. The policy must act from incomplete evidence, often by carrying memory or estimating a hidden state.",
                "papers": "Robot policy, driving, navigation, manipulation, and world-model papers all try to infer enough hidden state to act safely.",
            },
            {
                "name": "Reward is delayed",
                "everyday": "A steering choice may look fine now and cause trouble later. A grasp may look awkward now but lead to success.",
                "principle": "The principle is future return. Reinforcement learning values actions by the outcomes they lead to over time, not only by the immediate result.",
                "papers": "RL, imitation, planning, driving policy, and VLA papers all deal with credit assignment across action sequences.",
            },
            {
                "name": "Plans need a model of what changes",
                "everyday": "Before moving, an agent benefits from asking what will happen if it moves left, speeds up, grasps here, or waits.",
                "principle": "The principle is predictive dynamics. A world model or planner estimates how state changes under action, allowing search before real-world commitment.",
                "papers": "World models, model-predictive control, diffusion policies, trajectory generation, and navigation papers all learn or use dynamics.",
            },
            {
                "name": "Safety is a constraint, not an afterthought",
                "everyday": "In a deployed robot or car, a rare failure can matter more than average accuracy.",
                "principle": "The principle is constrained decision-making under uncertainty. The action must satisfy safety margins, physical limits, and uncertainty-aware checks, not only maximize expected reward.",
                "papers": "Driving safety, collision avoidance, robot reliability, uncertainty, and test-time verification papers all add checks around the action loop.",
            },
        ],
    },
    "learning-deepdive.html": {
        "title": "The mathematical principles underneath learning more from less",
        "intro": "This theme is the survival layer of the whole field. A method is not useful only because it works once on a benchmark. It must learn with limited labels, adapt to new data, stay small enough to run, and avoid breaking when the world shifts.",
        "items": [
            {
                "name": "Labels are only one source of signal",
                "everyday": "Most images and videos are unlabeled. Waiting for humans to annotate everything wastes the structure already present in the data.",
                "principle": "The principle is self-supervised constraint. The model creates learning problems from the data itself: match two views, predict a missing part, reconstruct, cluster, or enforce consistency.",
                "papers": "Self-supervised, semi-supervised, masked modeling, contrastive learning, and pseudo-labeling papers all convert unlabeled data into training signal.",
            },
            {
                "name": "Generalization is a balance",
                "everyday": "A model can memorize the examples it saw, or it can be too simple to learn the real pattern.",
                "principle": "The principle is bias, variance, and compression. The model needs enough freedom to fit real structure, but enough restriction to ignore accidents.",
                "papers": "Regularization, data augmentation, scaling, bottleneck, pruning, and grokking papers all ask which structure survives new data.",
            },
            {
                "name": "Deployment data is not training data",
                "everyday": "A camera changes, lighting changes, weather changes, hospitals differ, and users ask for new categories.",
                "principle": "The principle is distribution shift. The test distribution differs from the training distribution, so the model must adapt, calibrate, or know when not to trust itself.",
                "papers": "Domain adaptation, test-time adaptation, continual learning, calibration, and robustness papers all treat shift as a core mathematical problem, not a nuisance.",
            },
            {
                "name": "Efficiency is part of the model",
                "everyday": "A method that only works on a giant server may not help a phone, car, robot, or clinic.",
                "principle": "The principle is resource-constrained approximation. Compression, distillation, pruning, quantization, and low-rank updates trade exact capacity for usable speed and memory.",
                "papers": "Efficient vision, token pruning, model compression, distillation, LoRA, and deployment papers all ask what can be removed while preserving the behavior that matters.",
            },
        ],
    },
}

MATH_LINKS = {
    "emerging-deepdive.html": [
        ("uncertainty-math.html", "uncertainty"),
        ("information-theory-math.html", "information flow"),
        ("tta-math.html", "shift and adaptation"),
        ("adversarial-math.html", "stress tests"),
        ("diffusion-math.html", "generative priors"),
    ],
    "threed-deepdive.html": [
        ("depth-math.html", "underdetermined depth"),
        ("nerf-math.html", "differentiable rendering"),
        ("gsplat-math.html", "scene blobs"),
        ("optimal-transport-math.html", "moving distributions"),
        ("kalman-filter-math.html", "state correction"),
    ],
    "video-deepdive.html": [
        ("flow-math.html", "motion fields"),
        ("video-math.html", "time and state"),
        ("mamba-math.html", "compressed history"),
        ("wm-math.html", "future prediction"),
        ("diffusion-math.html", "generated paths"),
    ],
    "generation-deepdive.html": [
        ("diffusion-math.html", "noise reversal"),
        ("fm-math.html", "flow fields"),
        ("gan-math.html", "learned judge"),
        ("vae-math.html", "tidy code"),
        ("normflow-math.html", "reversible density"),
        ("information-theory-math.html", "probability cost"),
    ],
    "vlm-deepdive.html": [
        ("embeddings-math.html", "meaning as geometry"),
        ("clip-math.html", "image-text alignment"),
        ("attention-math.html", "retrieval"),
        ("uncertainty-math.html", "calibrated claims"),
        ("kernels-math.html", "similarity"),
    ],
    "perceive-deepdive.html": [
        ("detr-math.html", "set prediction"),
        ("sam-math.html", "prompted masks"),
        ("slots-math.html", "object grouping"),
        ("convolution-math.html", "local detectors"),
        ("equivariance-math.html", "known transforms"),
    ],
    "embodied-deepdive.html": [
        ("rl-math.html", "future reward"),
        ("q-learning-math.html", "stored value"),
        ("wm-math.html", "learned futures"),
        ("vla-math.html", "vision to action"),
        ("kalman-filter-math.html", "hidden state"),
        ("uncertainty-math.html", "safe doubt"),
    ],
    "learning-deepdive.html": [
        ("ssl-math.html", "self-supervision"),
        ("bias-variance-math.html", "generalization"),
        ("information-bottleneck-math.html", "useful compression"),
        ("distill-math.html", "small students"),
        ("scaling-laws-math.html", "resource curves"),
        ("tta-math.html", "test-time shift"),
    ],
}


CSS = """
.bridge{border:1px solid var(--line);border-left:3px solid var(--good);border-radius:0 12px 12px 0;padding:18px 20px;margin:22px 0;background:#f4faf6}
.bridge h2{margin-top:0}
.bridge .bintro{font-size:15.5px;line-height:1.65;color:#23302C;margin:10px 0 16px}
.blink{margin:10px 0 16px}
.blink .lbl{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--graphite);display:block;margin-bottom:6px}
.blink a{display:inline-block;font-size:13px;border:1px solid var(--line);border-radius:18px;padding:3px 10px;margin:3px 4px 3px 0;background:#fff;text-decoration:none;color:var(--accent-deep)}
.bitem{border-top:1px solid var(--line);padding-top:13px;margin-top:13px}
.bitem h3{font-size:17px;margin:0 0 7px;color:var(--accent-deep)}
.bitem p{font-size:14.7px;line-height:1.62;margin:8px 0;color:#23302C}
.bitem b{color:var(--ink)}
"""


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def render_block(filename: str, data: dict[str, object]) -> str:
    items = []
    for item in data["items"]:
        items.append(
            '<div class="bitem">'
            f"<h3>{esc(item['name'])}</h3>"
            f"<p><b>Everyday evidence.</b> {esc(item['everyday'])}</p>"
            f"<p><b>Fundamental math principle.</b> {esc(item['principle'])}</p>"
            f"<p><b>How it shows up in the papers.</b> {esc(item['papers'])}</p>"
            "</div>"
        )
    return (
        "<!-- broad-principles:start -->"
        '<section class="bridge" id="math-principles">'
        f"<h2>{esc(data['title'])}</h2>"
        f'<p class="bintro">{esc(data["intro"])}</p>'
        + '<div class="blink"><span class="lbl">Math pages to keep open</span>'
        + "".join(
            f'<a href="{esc(href)}">{esc(label)}</a>'
            for href, label in MATH_LINKS[filename]
        )
        + "</div>"
        + "".join(items)
        + "</section>"
        "<!-- broad-principles:end -->"
    )


def upsert_css(text: str) -> str:
    if ".bridge{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_block(text: str, block: str) -> str:
    start = "<!-- broad-principles:start -->"
    end = "<!-- broad-principles:end -->"
    if start in text and end in text:
        prefix, rest = text.split(start, 1)
        _, suffix = rest.split(end, 1)
        return prefix + block + suffix
    marker = "<h2>The approaches"
    if marker not in text:
        raise ValueError("could not find approaches marker")
    return text.replace(marker, block + marker, 1)


def main() -> None:
    changed = []
    for filename, data in PAGES.items():
        path = ROOT / filename
        text = path.read_text(encoding="utf-8")
        text2 = upsert_block(upsert_css(text), render_block(filename, data))
        if text2 != text:
            path.write_text(text2, encoding="utf-8")
            changed.append(filename)
    print(f"updated {len(changed)} pages")
    for filename in changed:
        print(filename)


if __name__ == "__main__":
    main()
