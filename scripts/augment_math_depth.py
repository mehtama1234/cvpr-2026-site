#!/usr/bin/env python3
"""Add computed worked examples and cross-theme links to foundation math pages."""

from __future__ import annotations

import html
import math
from pathlib import Path

try:
    import numpy as np
except ModuleNotFoundError as exc:
    raise SystemExit(
        "NumPy is required to recompute these examples. Run in a venv with: "
        "python -m pip install numpy"
    ) from exc


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


def fmt(x: float) -> str:
    if abs(x) >= 100:
        return f"{x:.1f}"
    if abs(x) >= 10:
        return f"{x:.2f}"
    return f"{x:.3f}".rstrip("0").rstrip(".")


def esc(s: object) -> str:
    return html.escape(str(s), quote=True)


def links(*items: tuple[str, str]) -> list[tuple[str, str]]:
    return list(items)


def example_data() -> dict[str, dict[str, object]]:
    rng = np.random.default_rng(7)
    data: dict[str, dict[str, object]] = {}

    x = np.array([0.6, -1.2])
    W1 = np.array([[0.8, -0.4], [0.3, 0.9]])
    b1 = np.array([0.1, -0.2])
    W2 = np.array([[1.1, -0.7]])
    target = np.array([0.4])
    z1 = W1 @ x + b1
    h = np.maximum(z1, 0)
    y = W2 @ h
    loss = 0.5 * float(((y - target) ** 2)[0])
    dy = y - target
    dW2 = dy[:, None] @ h[None, :]
    dz1 = (W2.T @ dy) * (z1 > 0)
    dW1 = dz1[:, None] @ x[None, :]
    data["backprop"] = {
        "title": "Tiny backprop run",
        "setup": "A 2-layer ReLU network sees x=[0.6,-1.2] and target 0.4. The script runs the forward pass, then the actual chain-rule gradients.",
        "rows": [
            ("forward", f"hidden={np.round(h,3).tolist()}, prediction={fmt(y[0])}, loss={fmt(loss)}"),
            ("output blame", f"dL/dW2={np.round(dW2,3).tolist()}"),
            ("first-layer blame", f"dL/dW1={np.round(dW1,3).tolist()}"),
        ],
        "takeaway": "The first hidden unit is inactive, so its row gets zero blame; the active path receives the whole update.",
        "links": links(("normalization-math.html", "Normalization keeps these signals scaled"), ("residual-math.html", "Residual paths shorten the blame chain")),
    }

    def gd(kind: str) -> tuple[int, float, float]:
        w = np.array([5.0, -3.0])
        m = np.zeros(2)
        v = np.zeros(2)
        for t in range(1, 301):
            g = np.array([w[0], 20 * w[1]])
            if kind == "sgd":
                w -= 0.08 * g
            elif kind == "momentum":
                m = 0.9 * m + g
                w -= 0.02 * m
            else:
                m = 0.9 * m + 0.1 * g
                v = 0.999 * v + 0.001 * (g * g)
                mh = m / (1 - 0.9**t)
                vh = v / (1 - 0.999**t)
                w -= 0.25 * mh / (np.sqrt(vh) + 1e-8)
            val = 0.5 * (w[0] ** 2 + 20 * w[1] ** 2)
            if val < 0.01:
                return t, float(val), float(np.linalg.norm(w))
        return 300, float(val), float(np.linalg.norm(w))

    rows = [(name, f"{steps} steps, final loss={fmt(val)}, |w|={fmt(norm)}") for name, (steps, val, norm) in {
        "plain gradient": gd("sgd"),
        "momentum": gd("momentum"),
        "Adam-style scaling": gd("adam"),
    }.items()]
    data["optimization"] = {
        "title": "Three optimizers on the same bowl",
        "setup": "The objective is 0.5*(w1^2 + 20*w2^2), an elongated bowl where one direction is much steeper than the other.",
        "rows": rows,
        "takeaway": "Adaptive scaling survives the steep direction without shrinking every step to the slowest axis.",
        "links": links(("convex-duality-math.html", "Convexity explains the single bottom"), ("natural-gradient-math.html", "Natural gradient changes the distance measure")),
    }

    batch = np.array([[2.0, 8.0, -1.0], [4.0, 12.0, 1.0], [6.0, 16.0, 3.0]])
    mu = batch.mean(axis=0)
    sigma = batch.std(axis=0)
    normed = (batch - mu) / sigma
    data["normalization"] = {
        "title": "Batch statistics before and after normalization",
        "setup": "Three features arrive on different scales. The script normalizes each column with its measured batch mean and standard deviation.",
        "rows": [
            ("means before", np.round(mu, 3).tolist()),
            ("std before", np.round(sigma, 3).tolist()),
            ("after", f"mean={np.round(normed.mean(axis=0),3).tolist()}, std={np.round(normed.std(axis=0),3).tolist()}"),
        ],
        "takeaway": "The learned layer still can rescale later, but the backbone gets a stable numeric range for forward signal and backward blame.",
        "links": links(("backprop-math.html", "Backprop needs stable local slopes"), ("residual-math.html", "Residual blocks pair naturally with norm layers")),
    }

    A = np.array([[0.82, 0.05], [0.02, 0.78]])
    plain = np.linalg.matrix_power(A, 20)
    res = np.linalg.matrix_power(np.eye(2) + 0.1 * (A - np.eye(2)), 20)
    data["residual"] = {
        "title": "Twenty layers with and without a skip path",
        "setup": "Repeated multiplication shows what a deep chain does to signal size. The residual version applies a small correction around identity.",
        "rows": [
            ("plain chain norm", fmt(np.linalg.norm(plain, 2))),
            ("residual chain norm", fmt(np.linalg.norm(res, 2))),
            ("ratio", f"{fmt(np.linalg.norm(res, 2) / np.linalg.norm(plain, 2))}x larger surviving signal"),
        ],
        "takeaway": "A skip path keeps the deep transformation close to identity, so useful signal does not have to survive one long shrinking product.",
        "links": links(("backprop-math.html", "This is the vanishing-gradient fix in matrix form"), ("normalization-math.html", "Normalization controls the factors inside the chain")),
    }

    sig = np.array([1, 2, 0, 1, 3, 2], dtype=float)
    ker = np.array([1, 0, -1], dtype=float)
    conv = np.convolve(sig, ker, mode="valid")
    data["convolution"] = {
        "title": "One filter slid across one signal",
        "setup": "A small edge filter [1,0,-1] is applied to [1,2,0,1,3,2] with the same weights at every location.",
        "rows": [
            ("windows", "[1,2,0], [2,0,1], [0,1,3], [1,3,2]"),
            ("filter outputs", np.round(conv, 3).tolist()),
            ("parameters used", "3 weights, reused 4 times"),
        ],
        "takeaway": "Weight sharing turns one local detector into a position-wide detector.",
        "links": links(("fourier-math.html", "Fourier shows convolution as multiplication"), ("spectral-graph-math.html", "Graph convolution generalizes smoothing to irregular neighborhoods")),
    }

    vals = np.array([0, 1, 1, 1, 0, 1, 1], dtype=float)
    phat = vals.mean()
    nll = -np.sum(vals * np.log(phat) + (1 - vals) * np.log(1 - phat))
    nll_bad = -np.sum(vals * np.log(0.5) + (1 - vals) * np.log(0.5))
    data["mle"] = {
        "title": "Maximum likelihood for a biased coin",
        "setup": "Observed outcomes are 0,1,1,1,0,1,1. The MLE picks the probability that gives this exact sequence the highest likelihood.",
        "rows": [
            ("MLE p(heads)", fmt(phat)),
            ("negative log-likelihood at MLE", fmt(nll)),
            ("negative log-likelihood at p=0.5", fmt(nll_bad)),
        ],
        "takeaway": "The observed frequency is not a slogan here; it is the value that minimizes the measured surprise of the data.",
        "links": links(("information-theory-math.html", "NLL is measured in surprise"), ("em-math.html", "EM uses MLE after guessing hidden assignments")),
    }

    M = np.array([[3.0, 2.0, 0.0], [2.0, 2.0, 0.0], [0.0, 1.0, 1.0]])
    U, S, Vt = np.linalg.svd(M)
    rank1 = S[0] * np.outer(U[:, 0], Vt[0])
    data["svd"] = {
        "title": "Rank-1 compression by singular values",
        "setup": "A 3x3 matrix is decomposed, then rebuilt using only the largest singular component.",
        "rows": [
            ("singular values", np.round(S, 3).tolist()),
            ("rank-1 reconstruction error", fmt(np.linalg.norm(M - rank1))),
            ("energy kept", f"{fmt(100 * S[0] ** 2 / np.sum(S**2))}%"),
        ],
        "takeaway": "Low rank is the part of the matrix that carries the most squared energy per component.",
        "links": links(("mixture-of-lora-math.html", "LoRA trains low-rank updates"), ("embeddings-math.html", "Embeddings often reveal low-rank geometry")),
    }

    pts = np.array([[0.0], [1.0], [3.0]])
    sq = (pts - pts.T) ** 2
    K = np.exp(-sq / 2)
    alpha = np.linalg.solve(K + 0.1 * np.eye(3), np.array([1.0, 2.0, 0.0]))
    k_new = np.exp(-((np.array([[2.0]]) - pts.T) ** 2) / 2).ravel()
    pred = float(k_new @ alpha)
    data["kernels"] = {
        "title": "Similarity-weighted prediction",
        "setup": "Three training points use an RBF kernel. A new point at x=2 predicts by similarity to all stored examples.",
        "rows": [
            ("kernel row for x=2", np.round(k_new, 3).tolist()),
            ("solved weights alpha", np.round(alpha, 3).tolist()),
            ("prediction", fmt(pred)),
        ],
        "takeaway": "The model never needs an explicit feature map; the similarity matrix carries the curved geometry.",
        "links": links(("embeddings-math.html", "Embeddings learn the similarity space"), ("attention-math.html", "Attention is dynamic similarity weighting")),
    }

    xs = np.linspace(-1, 1, 9)
    ys = xs**2 + rng.normal(0, 0.08, xs.shape)
    test = np.linspace(-1, 1, 101)
    true = test**2
    rows_bv = []
    for deg in [1, 2, 8]:
        coef = np.polyfit(xs, ys, deg)
        train = np.mean((np.polyval(coef, xs) - ys) ** 2)
        err = np.mean((np.polyval(coef, test) - true) ** 2)
        rows_bv.append((f"degree {deg}", f"train MSE={fmt(train)}, clean test MSE={fmt(err)}"))
    data["bias-variance"] = {
        "title": "Underfit, fit, overfit on one noisy curve",
        "setup": "Nine noisy samples come from y=x^2. Polynomials of different degrees are fit and tested against the clean curve.",
        "rows": rows_bv,
        "takeaway": "Lower training error is not automatically better; the high-degree curve starts spending capacity on noise.",
        "links": links(("scaling-laws-math.html", "Scale changes the bias-variance balance"), ("grokking-math.html", "Many zero-train-loss solutions can generalize differently")),
    }

    E = np.array([[1.0, 0.0], [0.9, 0.1], [-0.1, 1.0], [0.0, 0.9]])
    names = ["cat", "kitten", "car", "truck"]
    sims = E @ E.T / (np.linalg.norm(E, axis=1)[:, None] * np.linalg.norm(E, axis=1)[None, :])
    data["embeddings"] = {
        "title": "Meaning as angles",
        "setup": "Four tiny 2D embeddings are compared by cosine similarity.",
        "rows": [
            ("cat vs kitten", fmt(sims[0, 1])),
            ("car vs truck", fmt(sims[2, 3])),
            ("cat vs car", fmt(sims[0, 2])),
        ],
        "takeaway": "A downstream model can act on geometry: nearby vectors become similar meanings.",
        "links": links(("clip-math.html", "CLIP aligns image and text embeddings"), ("kernels-math.html", "Kernel methods also reason by similarity")),
    }

    real = np.array([0.8, 0.9, 1.0, 1.1])
    fake = np.array([0.2, 0.4, 0.5, 0.7])
    d_real = 1 / (1 + np.exp(-5 * (real - 0.6)))
    d_fake = 1 / (1 + np.exp(-5 * (fake - 0.6)))
    d_loss = -np.mean(np.log(d_real) + np.log(1 - d_fake))
    g_loss = -np.mean(np.log(d_fake))
    data["gan"] = {
        "title": "Forger and detective losses",
        "setup": "A toy discriminator scores real samples near 1 and fake samples below 0.7. The script computes the two opposing log losses.",
        "rows": [
            ("D(real) mean", fmt(d_real.mean())),
            ("D(fake) mean", fmt(d_fake.mean())),
            ("discriminator loss / generator loss", f"{fmt(d_loss)} / {fmt(g_loss)}"),
        ],
        "takeaway": "The same fake scores make the detective happy when low and the generator unhappy until they rise.",
        "links": links(("optimal-transport-math.html", "Transport offers another distribution-matching view"), ("ebm-math.html", "Energy models also learn by assigning low score to real data")),
    }

    mu, logvar = 0.4, -0.7
    eps = 1.25
    z = mu + math.exp(0.5 * logvar) * eps
    recon = 0.5 * (z - 1.0) ** 2
    kl = 0.5 * (math.exp(logvar) + mu * mu - 1 - logvar)
    data["vae"] = {
        "title": "One latent sample with a KL price",
        "setup": "A 1D encoder outputs mean 0.4 and log-variance -0.7. The reparameterization trick turns fixed noise into a differentiable sample.",
        "rows": [
            ("sampled z", fmt(z)),
            ("reconstruction loss", fmt(recon)),
            ("KL to unit Gaussian", fmt(kl)),
        ],
        "takeaway": "The model can move the encoder through z while paying a measurable price for drifting away from the simple prior.",
        "links": links(("variational-inference-math.html", "The ELBO is the same lower-bound idea"), ("mle-math.html", "Training still chases likelihood")),
    }

    supply = np.array([0.5, 0.5])
    demand = np.array([0.4, 0.6])
    cost = np.array([[0.0, 2.0], [1.0, 0.0]])
    plan = np.array([[0.4, 0.1], [0.0, 0.5]])
    data["optimal-transport"] = {
        "title": "A two-bin transport plan",
        "setup": "Two source piles with mass [0.5,0.5] must become target piles [0.4,0.6]. The computed plan respects both row and column totals.",
        "rows": [
            ("plan", np.round(plan, 3).tolist()),
            ("row sums / col sums", f"{np.round(plan.sum(axis=1),3).tolist()} / {np.round(plan.sum(axis=0),3).tolist()}"),
            ("transport cost", fmt(float(np.sum(plan * cost)))),
        ],
        "takeaway": "Distribution matching becomes a literal movement budget: how much mass moved, where, and at what price.",
        "links": links(("diffusion-math.html", "Diffusion learns distribution movement over noise levels"), ("normflow-math.html", "Flows move density through invertible maps")),
    }

    gamma = 0.9
    Q = 0.0
    rows_q = []
    for i, r in enumerate([1.0, 1.0, 1.0], 1):
        target = r + gamma * 2.0
        Q = Q + 0.5 * (target - Q)
        rows_q.append((f"update {i}", f"target={fmt(target)}, Q={fmt(Q)}"))
    data["q-learning"] = {
        "title": "Bellman updates accumulate future reward",
        "setup": "A state-action starts at Q=0. Each sample sees immediate reward 1 and next-state best value 2, with gamma=0.9 and learning rate 0.5.",
        "rows": rows_q,
        "takeaway": "Q moves toward reward plus discounted future value, not just the reward seen right now.",
        "links": links(("rl-math.html", "Policy learning uses the same future-credit idea"), ("kalman-filter-math.html", "Both update a running estimate from new evidence")),
    }

    n = 8
    t = np.arange(n)
    signal = 2 * np.sin(2 * np.pi * t / n) + 0.5 * np.sin(2 * np.pi * 3 * t / n)
    amps = np.abs(np.fft.rfft(signal)) / (n / 2)
    data["fourier"] = {
        "title": "Recovering frequencies from a mixed signal",
        "setup": "An 8-point signal mixes a strong frequency-1 wave and a weaker frequency-3 wave. FFT amplitudes are computed directly.",
        "rows": [
            ("signal", np.round(signal, 3).tolist()),
            ("amplitude at freq 1", fmt(amps[1])),
            ("amplitude at freq 3", fmt(amps[3])),
        ],
        "takeaway": "The transform separates smooth global variation from sharper oscillation without guessing by eye.",
        "links": links(("convolution-math.html", "Convolution is simple in frequency space"), ("spectral-graph-math.html", "Graphs have frequencies too")),
    }

    p = np.array([0.5, 0.25, 0.25])
    q = np.array([0.4, 0.4, 0.2])
    H = -np.sum(p * np.log2(p))
    CE = -np.sum(p * np.log2(q))
    KL = CE - H
    data["information-theory"] = {
        "title": "Entropy, cross-entropy, wasted bits",
        "setup": "The true distribution is [0.5,0.25,0.25], while the model says [0.4,0.4,0.2]. All quantities are measured in bits.",
        "rows": [
            ("true entropy", fmt(H)),
            ("model cross-entropy", fmt(CE)),
            ("wasted bits KL", fmt(KL)),
        ],
        "takeaway": "Bad probabilities are not just wrong labels; they cost extra bits every time data is described.",
        "links": links(("mle-math.html", "Cross-entropy is negative log-likelihood"), ("information-bottleneck-math.html", "Bottlenecks decide which bits to keep")),
    }

    cur = 0.0
    samples = []
    accepts = 0
    for _ in range(2500):
        prop = cur + rng.normal(0, 1.0)
        a = min(1.0, math.exp(-0.5 * prop**2 + 0.5 * cur**2))
        if rng.random() < a:
            cur = prop
            accepts += 1
        samples.append(cur)
    samples_arr = np.array(samples[500:])
    data["mcmc"] = {
        "title": "Random walk samples a bell curve",
        "setup": "A Metropolis random walk targets a standard normal distribution using only ratios of unnormalized density.",
        "rows": [
            ("acceptance rate", fmt(accepts / 2500)),
            ("sample mean", fmt(samples_arr.mean())),
            ("sample std", fmt(samples_arr.std())),
        ],
        "takeaway": "After burn-in, visit frequency becomes an empirical approximation to the target distribution.",
        "links": links(("variational-inference-math.html", "VI approximates by optimization instead of sampling"), ("uncertainty-math.html", "Sampling represents uncertainty explicitly")),
    }

    sigma2 = 0.25
    x_obs = 1.2
    mu_q = 0.0
    var_q = 1.0
    post_var = 1 / (1 + 1 / sigma2)
    post_mu = post_var * x_obs / sigma2
    kl_q_post = 0.5 * (var_q / post_var + (post_mu - mu_q) ** 2 / post_var - 1 + math.log(post_var / var_q))
    data["variational-inference"] = {
        "title": "Approximating a posterior with a simple Gaussian",
        "setup": "A latent z has prior N(0,1), observation x=1.2, and noise variance 0.25. The exact posterior is computed, then compared to a rough q=N(0,1).",
        "rows": [
            ("exact posterior mean", fmt(post_mu)),
            ("exact posterior variance", fmt(post_var)),
            ("KL(q || posterior)", fmt(kl_q_post)),
        ],
        "takeaway": "The variational job is to move q until this gap to the posterior is small without needing impossible sums.",
        "links": links(("vae-math.html", "VAEs train this approximation inside a neural model"), ("mcmc-math.html", "MCMC takes the sampling route instead")),
    }

    X = np.array([-2.0, -1.5, 1.0, 1.8, 2.2])
    means = np.array([-1.0, 1.0])
    weights = np.array([0.5, 0.5])
    sig = 0.7
    rows_em = []
    for i in range(3):
        probs = np.stack([weights[k] * np.exp(-0.5 * ((X - means[k]) / sig) ** 2) for k in range(2)], axis=1)
        resp = probs / probs.sum(axis=1, keepdims=True)
        means = (resp * X[:, None]).sum(axis=0) / resp.sum(axis=0)
        weights = resp.mean(axis=0)
        ll = np.sum(np.log(probs.sum(axis=1) / (sig * math.sqrt(2 * math.pi))))
        rows_em.append((f"round {i+1}", f"means={np.round(means,3).tolist()}, loglik={fmt(ll)}"))
    data["em"] = {
        "title": "Three rounds of two-Gaussian EM",
        "setup": "Five 1D points are fit by two Gaussians. Each round estimates soft assignments, then refits means and weights.",
        "rows": rows_em,
        "takeaway": "The hidden-cluster guesses sharpen, and the fitted means move toward the two visible groups.",
        "links": links(("mle-math.html", "The M-step is maximum likelihood with guessed labels"), ("variational-inference-math.html", "EM is a structured lower-bound procedure")),
    }

    xs = np.linspace(-2, 4, 301)
    vals_c = (xs - 3) ** 2
    feasible = xs >= 1
    primal = xs[feasible][np.argmin(vals_c[feasible])]
    unconstrained = xs[np.argmin(vals_c)]
    data["convex-duality"] = {
        "title": "Constraint price on a one-dimensional bowl",
        "setup": "Minimize (x-3)^2 subject to x>=1. The unconstrained bottom already satisfies the constraint, so the shadow price should be zero.",
        "rows": [
            ("unconstrained bottom", fmt(unconstrained)),
            ("constrained bottom", fmt(primal)),
            ("constraint price", "0 because the constraint is slack"),
        ],
        "takeaway": "Dual variables become prices only when constraints actually press on the optimum.",
        "links": links(("optimization-math.html", "Gradient descent finds the bowl bottom"), ("natural-gradient-math.html", "Natural gradient changes what distance means")),
    }

    p0 = 0.8
    g_p = 1.0
    fisher = 1 / (p0 * (1 - p0))
    nat = g_p / fisher
    data["natural-gradient"] = {
        "title": "Same gradient, smaller probability-space move",
        "setup": "For a Bernoulli parameter p=0.8, the Fisher information is high because a small p-change noticeably changes the distribution.",
        "rows": [
            ("ordinary gradient in p", fmt(g_p)),
            ("Fisher information", fmt(fisher)),
            ("natural-gradient step direction", fmt(nat)),
        ],
        "takeaway": "Natural gradient dampens moves where the model distribution is highly sensitive.",
        "links": links(("optimization-math.html", "It is still descent, but with a new geometry"), ("mle-math.html", "Fisher comes from likelihood curvature")),
    }

    xhat, P = 0.0, 4.0
    F, Qn, H, R = 1.0, 0.2, 1.0, 1.0
    rows_k = []
    for i, z in enumerate([1.2, 1.8, 2.05], 1):
        xpred, Ppred = F * xhat, F * P * F + Qn
        K = Ppred * H / (H * Ppred * H + R)
        xhat = xpred + K * (z - H * xpred)
        P = (1 - K * H) * Ppred
        rows_k.append((f"measurement {i}", f"K={fmt(K)}, estimate={fmt(xhat)}, uncertainty={fmt(P)}"))
    data["kalman-filter"] = {
        "title": "Predict, then correct, three times",
        "setup": "A 1D tracker starts uncertain at x=0, P=4. Each noisy measurement updates both estimate and uncertainty.",
        "rows": rows_k,
        "takeaway": "The gain falls as uncertainty shrinks, so later measurements correct the estimate more gently.",
        "links": links(("mcmc-math.html", "Both update beliefs from evidence"), ("q-learning-math.html", "Both maintain a running estimate over time")),
    }

    Agraph = np.array([[0, 1, 1, 0], [1, 0, 1, 0], [1, 1, 0, 1], [0, 0, 1, 0]], dtype=float)
    D = np.diag(Agraph.sum(axis=1))
    L = D - Agraph
    evals = np.linalg.eigvalsh(L)
    smoothness = float(np.array([1, 1, -1, -1]) @ L @ np.array([1, 1, -1, -1]))
    data["spectral-graph"] = {
        "title": "Graph frequencies from the Laplacian",
        "setup": "A 4-node graph is converted to its Laplacian. Eigenvalues measure smooth-to-rough variation over the graph.",
        "rows": [
            ("Laplacian eigenvalues", np.round(evals, 3).tolist()),
            ("constant signal frequency", "0"),
            ("cut signal smoothness x^T L x", fmt(smoothness)),
        ],
        "takeaway": "Signals that change across many edges have higher graph frequency.",
        "links": links(("gnn-math.html", "GNNs repeatedly smooth over edges"), ("fourier-math.html", "This is Fourier analysis on an irregular domain")),
    }

    patterns = np.array([[1, 1, 1, -1], [1, -1, 1, -1]])
    W = (patterns.T @ patterns) / patterns.shape[1]
    np.fill_diagonal(W, 0)
    state = np.array([1, 1, 1, 1])
    e0 = -0.5 * state @ W @ state
    state2 = np.sign(W @ state)
    state2[state2 == 0] = state[state2 == 0]
    e1 = -0.5 * state2 @ W @ state2
    data["hopfield"] = {
        "title": "One Hopfield cleanup step",
        "setup": "Two binary memories are stored. A noisy cue updates by weighted agreement with the stored patterns.",
        "rows": [
            ("start state", state.tolist()),
            ("after one update", state2.astype(int).tolist()),
            ("energy before / after", f"{fmt(e0)} / {fmt(e1)}"),
        ],
        "takeaway": "The update rolls the state downhill toward a stored pattern; attention is the soft, continuous cousin of this lookup.",
        "links": links(("attention-math.html", "Attention retrieves by similarity-weighted memory"), ("kernels-math.html", "Kernel similarity is another memory lookup")),
    }

    return data


CSS = """
.worked{border:1px solid var(--line);border-left:3px solid var(--good);border-radius:0 12px 12px 0;padding:16px 18px;margin:20px 0;background:#f4faf6}
.worked h2{margin-top:0}
.worked .wsetup,.worked .wtake{font-size:14.5px;line-height:1.62}
.wrows{margin:10px 0;border:1px solid var(--line);border-radius:8px;overflow:hidden;background:#fff}
.wrow{display:grid;grid-template-columns:160px 1fr;border-bottom:1px solid var(--line)}
.wrow:last-child{border-bottom:0}
.wlab{font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--graphite);background:var(--tint);padding:8px 10px}
.wval{font-family:var(--mono);font-size:13px;padding:8px 10px;overflow-x:auto}
.xlinks{margin-top:10px}
.xlinks a{display:inline-block;font-size:13px;border:1px solid var(--line);border-radius:18px;padding:3px 10px;margin:3px 4px 3px 0;background:#fff;text-decoration:none}
@media(max-width:640px){.wrow{grid-template-columns:1fr}.wlab{border-bottom:1px solid var(--line)}}
"""


def render_block(item: dict[str, object]) -> str:
    rows = "".join(
        f'<div class="wrow"><div class="wlab">{esc(k)}</div><div class="wval">{esc(v)}</div></div>'
        for k, v in item["rows"]
    )
    xlinks = "".join(
        f'<a href="{esc(href)}">{esc(label)}</a>'
        for href, label in item["links"]
    )
    return (
        "<!-- depth-worked-example:start -->"
        '<section class="worked" id="worked-example">'
        "<h2>Worked example — real numbers, computed</h2>"
        f"<h3>{esc(item['title'])}</h3>"
        f'<p class="wsetup">{esc(item["setup"])}</p>'
        f'<div class="wrows">{rows}</div>'
        f'<p class="wtake"><b>What moved:</b> {esc(item["takeaway"])}</p>'
        f'<div class="xlinks"><span class="tgl">You will meet this again</span>{xlinks}</div>'
        "</section>"
        "<!-- depth-worked-example:end -->"
    )


def upsert_css(text: str) -> str:
    if ".worked{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>")


def upsert_block(text: str, block: str) -> str:
    start = "<!-- depth-worked-example:start -->"
    end = "<!-- depth-worked-example:end -->"
    if start in text and end in text:
        prefix, rest = text.split(start, 1)
        _, suffix = rest.split(end, 1)
        return prefix + block + suffix
    marker = '<div class="fp"><b>The through-line.</b>'
    if marker not in text:
        raise ValueError("could not find through-line marker")
    return text.replace(marker, block + "\n" + marker, 1)


def main() -> None:
    data = example_data()
    changed = []
    for slug, filename in PAGES.items():
        path = ROOT / filename
        text = path.read_text(encoding="utf-8")
        text2 = upsert_css(text)
        text2 = upsert_block(text2, render_block(data[slug]))
        if text2 != text:
            path.write_text(text2, encoding="utf-8")
            changed.append(filename)
    print(f"updated {len(changed)} pages")
    for filename in changed:
        print(filename)


if __name__ == "__main__":
    main()
