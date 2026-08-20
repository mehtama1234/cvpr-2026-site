#!/usr/bin/env python3
"""Add plain first-principles failure sections to foundation math pages."""

from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

PAGES = {
    "backprop": "backprop-math.html",
    "optimization": "optimization-math.html",
    "normalization": "normalization-math.html",
    "residual": "residual-math.html",
    "convolution": "convolution-math.html",
    "mle": "mle-math.html",
    "svd": "svd-math.html",
    "kernels": "kernels-math.html",
    "bias-variance": "bias-variance-math.html",
    "embeddings": "embeddings-math.html",
    "gan": "gan-math.html",
    "vae": "vae-math.html",
    "optimal-transport": "optimal-transport-math.html",
    "q-learning": "q-learning-math.html",
    "fourier": "fourier-math.html",
    "information-theory": "information-theory-math.html",
    "mcmc": "mcmc-math.html",
    "variational-inference": "variational-inference-math.html",
    "em": "em-math.html",
    "convex-duality": "convex-duality-math.html",
    "natural-gradient": "natural-gradient-math.html",
    "kalman-filter": "kalman-filter-math.html",
    "spectral-graph": "spectral-graph-math.html",
    "hopfield": "hopfield-math.html",
}

FAILURES = {
    "backprop": {
        "breaks": "If you do not have backprop, learning becomes guesswork. You can change one weight, run the whole network again, and see whether the error moved. But a real network has millions or billions of weights. Trying them one by one would make one training step take far too long.",
        "why": "The hard part is not making a wrong answer. The hard part is telling each inside number how much it helped make that wrong answer. The answer comes from a long chain of small operations, so blame has to travel back through that chain.",
        "gives": "Backprop gives every number its share of the blame in one backward pass. It turns one final error into many small local instructions.",
    },
    "optimization": {
        "breaks": "If you only know that the model is wrong, nothing tells the numbers where to move. Random changes may help once, hurt next time, and waste most of the work.",
        "why": "Training is a search over settings. The error surface may slope gently in one direction and sharply in another. A step that is safe on the sharp side may be painfully slow on the flat side.",
        "gives": "Optimization turns error into movement. The slope gives a direction, and the optimizer decides how large the step should be for each kind of ground.",
    },
    "normalization": {
        "breaks": "Without normalization, each layer keeps receiving numbers whose scale can drift while training. One layer may send values that are tiny today and huge tomorrow. The next layer has to learn while its input keeps changing under its feet.",
        "why": "Deep networks pass numbers through many stages. If the scale grows, later steps can become wild. If it shrinks, later steps can become too weak to matter.",
        "gives": "Normalization resets the scale before the next layer works. It does not solve learning by itself; it keeps the numbers in a range where learning can keep going.",
    },
    "residual": {
        "breaks": "Without skip paths, a deep network has to pass every signal through every layer in order. Useful information can fade before it reaches the end, and useful blame can fade before it reaches the start.",
        "why": "Each layer changes the signal a little. Many small changes in a row can turn into one large unwanted change. The network then has to learn how to preserve information before it can learn the task.",
        "gives": "A residual path gives the signal a clean road through the layer. The layer only has to learn the change to add, not rebuild the whole message.",
    },
    "convolution": {
        "breaks": "Without convolution, the model must learn the same visual detector again and again in different places. A corner in the left side of an image and the same corner on the right side look like unrelated facts.",
        "why": "Images have local patterns that move around. Edges, spots, and textures do not become new ideas just because they appear a few pixels over.",
        "gives": "Convolution learns one small detector and slides it across the image. The same weights look for the same pattern everywhere.",
    },
    "mle": {
        "breaks": "Without maximum likelihood, training has no clear rule for what the numbers should prefer. A model can fit labels, but it may not learn how expected or unexpected the data really is.",
        "why": "A prediction is not only right or wrong. A model can be barely confident, very confident, or confidently wrong. Those differences matter.",
        "gives": "Maximum likelihood says: choose the settings that make the data you actually saw as expected as possible. It gives training one clean target.",
    },
    "svd": {
        "breaks": "Without low-rank thinking, a large table looks like a wall of unrelated numbers. You keep all of it, even when most of the useful shape lives in a few directions.",
        "why": "Many data tables repeat themselves. Rows and columns often move together. The table is large, but the real movement inside it may be small.",
        "gives": "SVD finds the strongest directions first. It lets you keep the main structure and measure what you lose when you drop the rest.",
    },
    "kernels": {
        "breaks": "Without kernels, a straight rule can only draw straight borders in the original inputs. Many simple patterns look curved from that view.",
        "why": "Sometimes two things are alike in a way that raw coordinates do not show directly. The useful question is not where a point sits, but which old points it resembles.",
        "gives": "A kernel lets the model judge by similarity. It can act as if the data lived in a richer space without writing that space down.",
    },
    "bias-variance": {
        "breaks": "Without the bias-variance view, you can mistake training success for real success. A model can miss the main pattern because it is too stiff, or chase noise because it is too flexible.",
        "why": "Data is only a sample of the world. Some errors come from a model that cannot bend enough. Other errors come from a model that bends to every accident in the sample.",
        "gives": "Bias and variance name the two ways a model can fail. The point is not to make the training error smallest; it is to choose a shape that survives new data.",
    },
    "embeddings": {
        "breaks": "Without embeddings, symbols stay isolated. The model sees cat, kitten, car, and truck as separate labels unless someone gives it a way to compare them.",
        "why": "Meaning depends on relation. Words, image patches, and objects become useful when near things behave alike and far things behave differently.",
        "gives": "An embedding turns an item into a point. Distance and direction then carry usable meaning.",
    },
    "gan": {
        "breaks": "Without an adversary, a generator may learn the average of many possible answers. The result can look safe but dull, because the loss rewards being close in a blunt way.",
        "why": "For images, there are many possible correct outputs. Pixel-by-pixel closeness does not know whether an image looks real.",
        "gives": "A GAN trains a maker against a judge. The maker improves because the judge learns what real samples look like.",
    },
    "vae": {
        "breaks": "Without a tidy code space, a generator can hide each example in a messy private code. It may rebuild training data but fail when asked to make new examples between old ones.",
        "why": "A useful generator needs two things at once: a code that can rebuild the input, and a code space that is smooth enough to sample from.",
        "gives": "A VAE forces the code to stay near a simple random source while still carrying enough information to rebuild the data.",
    },
    "optimal-transport": {
        "breaks": "Without transport, matching two probability shapes can ignore how far the mass has to move. Two changes with the same before-and-after totals can have very different costs.",
        "why": "A probability shape is not just a list of amounts. The positions matter. Moving a little mass nearby is not the same as moving it across the whole space.",
        "gives": "Optimal transport asks for the cheapest movement plan. It keeps both the amount moved and the distance moved in view.",
    },
    "q-learning": {
        "breaks": "Without future value, an agent grabs the reward in front of it and misses the cost or gain that comes later.",
        "why": "Actions have delayed effects. A move can look bad now and lead to a better state, or look good now and lead into trouble.",
        "gives": "Q-learning stores the long-run value of taking an action in a state. It turns delayed reward into a number the agent can compare now.",
    },
    "fourier": {
        "breaks": "Without the frequency view, blur, edges, noise, compression, and repeated patterns look like separate problems.",
        "why": "A signal can be messy in its original form but simple when split into slow and fast changes. Smooth parts and sharp parts behave differently.",
        "gives": "Fourier analysis separates a signal into waves. Once separated, you can keep, remove, compress, or compare the parts directly.",
    },
    "information-theory": {
        "breaks": "Without information theory, a model can be called good or bad without saying how much it wastes. Confidence, surprise, compression, and error stay disconnected.",
        "why": "Every wrong probability has a cost. If the model says an event is unlikely and it happens, you pay extra bits to describe the surprise.",
        "gives": "Information theory measures that cost. It turns uncertainty and wasted prediction into numbers you can compare.",
    },
    "mcmc": {
        "breaks": "Without sampling, some probability questions stay stuck. You may know what makes a state likely, but not the huge total needed to turn every score into an exact probability.",
        "why": "In large spaces, adding up all possible states is often impossible. But you may still be able to compare two nearby states.",
        "gives": "MCMC walks through the space so that common visits stand in for probability. It uses nearby comparisons to answer a question about the whole space.",
    },
    "variational-inference": {
        "breaks": "Without approximation, exact belief updates can be too large to compute. The true answer exists on paper but cannot be used in time.",
        "why": "Hidden causes create many possible explanations for the same data. Summing over all of them grows fast.",
        "gives": "Variational inference picks an easier family of beliefs and moves it close to the hard answer. You trade exactness for an answer you can use.",
    },
    "em": {
        "breaks": "Without EM, hidden labels can leave training in a loop: you need labels to fit the model, but you need the model to guess the labels.",
        "why": "Many data points come from causes you cannot see. A point may partly belong to one cause and partly to another.",
        "gives": "EM alternates between guessing the hidden causes and refitting the model. Each step makes the current story fit the data no worse than before.",
    },
    "convex-duality": {
        "breaks": "Without convex thinking, optimization can be hard to trust. You may find a low point but not know whether a better one is hiding elsewhere.",
        "why": "Some surfaces have many dips. Convex surfaces have one true bottom. Constraints also have prices: tightening one rule can raise the best possible cost.",
        "gives": "Convex duality gives checks and bounds. It tells you when a solution is truly best, not just the best one you found.",
    },
    "natural-gradient": {
        "breaks": "Without natural gradient, two steps in the settings that look equal can change the model by very different amounts.",
        "why": "The settings are not the real object. The real object is what the model predicts. In some places, a tiny settings move changes the prediction a lot; in other places, a large move barely matters.",
        "gives": "Natural gradient measures distance by change in the model's behavior. It makes steps in the space of predictions, not just in the space of settings.",
    },
    "kalman-filter": {
        "breaks": "Without filtering, each noisy measurement can pull the estimate around, or an old prediction can be trusted long after it should be.",
        "why": "A sensor is not the state. A motion model is not the state either. Both are partial clues with different amounts of uncertainty.",
        "gives": "A Kalman filter carries a best guess and an uncertainty. Each new measurement is weighted by how trustworthy it is compared with the prediction.",
    },
    "spectral-graph": {
        "breaks": "Without spectral graph thinking, a graph is only a pile of nodes and edges. It is hard to see smooth regions, cuts, or repeated structure.",
        "why": "On a graph, smooth means neighboring nodes have similar values. Sharp means values change across many edges. That is the graph version of low and high frequency.",
        "gives": "Spectral graph theory gives the graph its own waves. Those waves reveal clusters, bottlenecks, and smooth signals over irregular data.",
    },
    "hopfield": {
        "breaks": "Without associative memory, a partial or noisy cue has no natural way to pull back toward a stored pattern.",
        "why": "Memory is not only storage. It is also retrieval: given a broken version of something, the system must decide which stored thing it is closest to.",
        "gives": "A Hopfield network stores patterns as low-score states. Updating the state rolls a noisy cue toward a remembered pattern.",
    },
}

CSS = """
.fail{border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:0 12px 12px 0;padding:16px 18px;margin:20px 0;background:#fff8ea}
.fail h2{margin-top:0}
.fail p{font-size:14.7px;line-height:1.62;margin:10px 0;color:#23302C}
.fail b{color:var(--ink)}
"""


def esc(value: str) -> str:
    return html.escape(value, quote=True)


def render_block(item: dict[str, str]) -> str:
    return (
        "<!-- depth-failure:start -->"
        '<section class="fail" id="what-breaks">'
        "<h2>What breaks without this</h2>"
        f"<p><b>What goes wrong.</b> {esc(item['breaks'])}</p>"
        f"<p><b>Why it goes wrong.</b> {esc(item['why'])}</p>"
        f"<p><b>What this idea gives you.</b> {esc(item['gives'])}</p>"
        "</section>"
        "<!-- depth-failure:end -->"
    )


def upsert_css(text: str) -> str:
    if ".fail{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_block(text: str, block: str) -> str:
    start = "<!-- depth-failure:start -->"
    end = "<!-- depth-failure:end -->"
    if start in text and end in text:
        prefix, rest = text.split(start, 1)
        _, suffix = rest.split(end, 1)
        return prefix + block + suffix
    marker = '<div class="fp"><b>The through-line.</b>'
    if marker not in text:
        raise ValueError("could not find through-line marker")
    return text.replace(marker, block + "\n" + marker, 1)


def main() -> None:
    changed = []
    for slug, filename in PAGES.items():
        path = ROOT / filename
        text = path.read_text(encoding="utf-8")
        text2 = upsert_block(upsert_css(text), render_block(FAILURES[slug]))
        if text2 != text:
            path.write_text(text2, encoding="utf-8")
            changed.append(filename)
    print(f"updated {len(changed)} pages")
    for filename in changed:
        print(filename)


if __name__ == "__main__":
    main()
