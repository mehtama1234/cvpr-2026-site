#!/usr/bin/env python3
"""Add descriptive key-turn principle blocks to every math page."""

from __future__ import annotations

import html
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def e(text: str) -> str:
    return html.escape(text, quote=True)


PAGES = {
    "attention-math.html": {
        "problem": "A word, image patch, or object slot cannot be understood only from itself. Its meaning often sits somewhere else: a pronoun needs its noun, a pixel needs a matching edge, and a robot command needs the scene part it refers to.",
        "principle": "The principle is differentiable retrieval. Instead of making a hard lookup, the model gives every possible source a match score, turns those scores into shares that add to one, and reads a weighted blend. The softmax is the mathematical hinge: it turns choice into something smooth enough to learn.",
        "changes": "The model stops carrying fixed messages forward. Each item can ask, at that layer, which other items matter now. The price is the square-law comparison cost: if every item can look at every other item, the number of comparisons grows as n times n.",
    },
    "mamba-math.html": {
        "problem": "Long sequences make full attention expensive because each new item wants to compare itself with all earlier items. For text, video, audio, and sensor streams, the past can be too long to reread every time.",
        "principle": "The principle is state as compressed history. A state-space model keeps a running summary that is updated as the sequence arrives. The mathematics asks what must be remembered so the future can be predicted without storing every past token.",
        "changes": "The model stops rereading the whole past and starts carrying a live summary of it. This makes long streams cheaper, but it also makes the summary itself the bottleneck: anything not stored in the state is gone.",
    },
    "moe-math.html": {
        "problem": "One large model has to spend the same computation on every input, even when different inputs need different skills. A simple image, a rare object, and a hard reasoning case all pass through the same full machinery.",
        "principle": "The principle is conditional work. A router assigns the input to a few experts using soft or nearly hard shares. The mathematical issue is load and choice: choose the right experts while keeping the experts from collapsing into one favorite path.",
        "changes": "Capacity can grow without using all capacity every time. The model becomes a market of specialists, but the router must be trained so the market does not jam, starve some experts, or send hard cases to the wrong place.",
    },
    "mixture-of-lora-math.html": {
        "problem": "A full model update is huge, but most tasks only need a small change in behavior. Storing a separate full model for each task wastes memory and makes switching expensive.",
        "principle": "The principle is low-rank change. LoRA writes the task update as the product of two small matrices, so the change can only move in a few learned directions. A mixture adds routing: different inputs combine different small updates.",
        "changes": "Adaptation stops meaning 'copy and rewrite the whole model.' It becomes 'learn a few useful change directions and choose among them.' The risk is that too few directions miss the task, while too many lose the point of compression.",
    },
    "distill-math.html": {
        "problem": "A large model may know useful distinctions that are not visible in the hard label alone. If a small model only sees the final answer, it misses the teacher's graded sense of which wrong answers are almost right.",
        "principle": "The principle is information transfer through probabilities. The teacher's output distribution carries soft structure: near misses, class relations, and uncertainty. Distillation trains the student to match that distribution, not only the label.",
        "changes": "Learning stops being only imitation of answers and becomes imitation of judgment. The student can inherit part of the teacher's shape of knowledge, but only the parts expressed in the teacher's outputs or intermediate signals.",
    },
    "equivariance-math.html": {
        "problem": "If an object moves, rotates, or changes viewpoint, the answer should change in a predictable way. Without that rule, the model must relearn the same fact for every transformed copy.",
        "principle": "The principle is symmetry as a contract. A function is equivariant when transforming the input transforms the output in the matching way. The equation f(g x) = rho(g) f(x) says the model must respect the world's known transformations.",
        "changes": "The model stops treating every transformed example as new. It builds the transformation rule into the function class, saving data and preventing answers that break known geometry.",
    },
    "gnn-math.html": {
        "problem": "Many things are not grids: molecules, roads, social links, skeletons, and scene graphs. The useful fact is not a left-right pixel order but who is connected to whom.",
        "principle": "The principle is local propagation on a graph. Each node updates itself by mixing information from its neighbors. Algebraically this is smoothing and message passing over the graph's adjacency structure.",
        "changes": "The model stops forcing graph data into a fake image shape. It learns by moving information along real edges. The danger is oversmoothing: after too many rounds, different nodes can become too similar.",
    },
    "node-math.html": {
        "problem": "Some systems change continuously, not in neat layer-sized jumps. A fixed stack of layers can be a poor fit for motion, flows, and processes where time itself is part of the structure.",
        "principle": "The principle is learning a velocity field. A neural ODE says the state changes according to a learned derivative, and the final state is found by integrating that derivative through time.",
        "changes": "A network stops being only a list of blocks and becomes a learned process. Depth becomes time. This gives flexible continuous motion, but the solver and the learned field must stay stable.",
    },
    "flow-math.html": {
        "problem": "A single image cannot tell motion directly. To estimate how pixels move, the model must match pieces across time while handling missing parts, new parts, and repeated textures.",
        "principle": "The principle is correspondence under change. Optical flow assigns a displacement vector so that a point in one frame lines up with its likely source in another. The core math balances matching evidence with smoothness over nearby pixels.",
        "changes": "Motion becomes a field of arrows instead of a vague difference between frames. The model can track change, but it must handle the fact that some matches are hidden, ambiguous, or no longer visible.",
    },
    "video-math.html": {
        "problem": "A frame can show what is present, but not what is changing, causing, approaching, or disappearing. Meaning in video often lives between frames.",
        "principle": "The principle is temporal state. A video model must carry information forward, compare moments, and separate stable identity from changing position. Mathematically this is sequence modeling over visual evidence.",
        "changes": "The model stops treating frames as unrelated pictures. It learns persistence, motion, and order. The hard part is keeping long-range facts without letting small frame errors grow over time.",
    },
    "sam-math.html": {
        "problem": "Segmentation is not only naming pixels. A user may point, box, or hint at what they mean, and the system must carve out the matching region.",
        "principle": "The principle is prompted set selection. The image is encoded once, the prompt becomes a query, and the mask is the set of pixels whose features match that query under learned geometry.",
        "changes": "Segmentation stops being a fixed list of classes. It becomes an interactive selection problem: tell the model what kind of region you mean, and it returns the boundary that fits.",
    },
    "detr-math.html": {
        "problem": "Object detection used to create many overlapping guesses and then clean them up by hand. The same object could be predicted several times because the model had no direct one-object-one-answer rule.",
        "principle": "The principle is set prediction with matching. DETR treats detections as an unordered set and uses bipartite matching to assign predictions to true objects. The loss is built around correspondence, not around a fixed grid of boxes.",
        "changes": "Detection stops being a pile of duplicate proposals. It becomes a matching problem: each prediction either owns one object or owns nothing. The cost is that training must learn stable object queries.",
    },
    "depth-math.html": {
        "problem": "A flat image has lost distance. The same 2D picture can come from many possible 3D worlds, so depth cannot be read directly from pixels alone.",
        "principle": "The principle is inverse geometry with priors. The model combines projective constraints, scale cues, multiple views when available, and learned regularities about the world to choose among many possible depths.",
        "changes": "Depth estimation stops pretending the answer is visible in one pixel. It becomes a constrained guess about the hidden 3D cause of the image. The remaining risk is underdetermination: some worlds still cast the same picture.",
    },
    "slots-math.html": {
        "problem": "A scene is made of things, but an image arrives as pixels. Without a pressure to separate objects, a model can smear several things into one representation.",
        "principle": "The principle is competition for explanation. Slot models give several small memory cells a chance to explain parts of the input. Attention-like assignment makes pixels compete for slots and slots compete for pixels.",
        "changes": "The model stops storing the scene as one undivided feature. It learns separate object files. The danger is collapse: one slot can take too much, or many slots can split one object for the wrong reason.",
    },
    "clip-math.html": {
        "problem": "Images and words live in different forms, but many tasks need them to meet. A picture of a dog and the phrase 'a dog' should land near each other without a custom classifier for every label.",
        "principle": "The principle is contrastive alignment. Matching image-text pairs are pulled together in a shared space, while mismatched pairs are pushed apart. Softmax over many comparisons turns alignment into a learnable probability problem.",
        "changes": "Recognition stops depending only on a fixed label head. Text becomes a way to name directions in image space, enabling open-vocabulary matching. The cost is that the shared space inherits biases and blind spots from the paired data.",
    },
    "ssl-math.html": {
        "problem": "Labels are scarce, but raw data is abundant. The model needs useful structure before humans have named every example.",
        "principle": "The principle is learning from constraints inside the data. Self-supervision creates a task where the answer is already present: predict a missing part, match two views of the same item, or separate different items.",
        "changes": "Learning stops waiting for hand labels. The model extracts invariances and structure from the data itself. The danger is shortcut learning: the created task may be solved in a way that does not build useful meaning.",
    },
    "vq-math.html": {
        "problem": "Continuous features can be hard to store, transmit, or use as discrete symbols. But hard rounding breaks learning because a tiny change can suddenly jump to a different code.",
        "principle": "The principle is learned quantization. A codebook stores reusable vectors, and each input chooses the nearest code. Training uses tricks that let gradients update the encoder and the codebook despite the hard choice.",
        "changes": "The model turns messy continuous signals into a vocabulary of learned tokens. This helps compression and generation, but the codebook must avoid dead entries and overused entries.",
    },
    "tta-math.html": {
        "problem": "A model trained in one world may be used in another: new lighting, new cameras, new weather, new patients. The original settings may no longer be right.",
        "principle": "The principle is cautious adaptation from test evidence. Test-time adaptation changes the model using signals available at deployment, often entropy, consistency, or normalization statistics, without true labels.",
        "changes": "The model stops being frozen at training time. It can adjust to the current stream. The danger is self-confirming error: if the model adapts to its own wrong guesses, it can drift further from the truth.",
    },
    "gsplat-math.html": {
        "problem": "A 3D scene must be stored in a form that can render quickly from new views. A dense volume is expensive, and a mesh can be hard to recover from photos.",
        "principle": "The principle is differentiable scene particles. Gaussian splatting represents the scene as many soft colored blobs in 3D. Rendering projects and blends those blobs, and the image error can train their positions, shapes, colors, and opacity.",
        "changes": "3D reconstruction stops needing a slow ray march through every point in space. The scene becomes a set of editable blobs that draw fast, but quality depends on whether the blobs cover the true surfaces cleanly.",
    },
    "nerf-math.html": {
        "problem": "A set of photos shows a scene from several views, but not the full 3D field of color and density that produced them.",
        "principle": "The principle is differentiable volume rendering. A neural field maps a 3D location and view direction to density and color. Rays through the field produce pixels, and photo error trains the field.",
        "changes": "The model stops storing only observed images and learns the hidden scene that could render them. It can synthesize new views, but training must solve the hard inverse problem of placing density in 3D from 2D evidence.",
    },
    "diffusion-math.html": {
        "problem": "Drawing a realistic image, video, or action in one jump is too hard. The target data lives in a thin, structured part of a huge space.",
        "principle": "The principle is reversing noise by small learned steps. Add noise until data becomes easy random static; then train a model to predict how to step back toward clean data at each noise level.",
        "changes": "Generation stops being one impossible leap. It becomes many easier corrections. The cost is time: many small steps can be slow unless the path is shortened or distilled.",
    },
    "fm-math.html": {
        "problem": "Diffusion gives a path from noise to data, but the path can be long and indirect. We may want a more direct learned motion from one distribution to another.",
        "principle": "The principle is matching a flow field. Flow matching trains a model to predict the velocity that moves samples along a chosen path from noise to data. The object learned is direction of motion, not only noise removal.",
        "changes": "Generation becomes following a learned vector field. If the field is accurate, samples can travel from simple noise to data in fewer, straighter steps.",
    },
    "ar-math.html": {
        "problem": "A large object such as text, an image token grid, or a video cannot be predicted all at once without modeling how its parts depend on earlier parts.",
        "principle": "The principle is chain-rule factorization. A joint probability is broken into a product of next-step probabilities: each new piece is predicted from the pieces already made.",
        "changes": "Generation becomes repeated conditional prediction. This makes huge outputs tractable, but mistakes can accumulate because each new step depends on the previous ones.",
    },
    "adversarial-math.html": {
        "problem": "A model can be right on normal examples but fail when the input is changed in a tiny, targeted way. The change may be nearly invisible to a person but large in the model's decision space.",
        "principle": "The principle is worst-case local change. Instead of asking whether the model handles the average nearby input, adversarial analysis asks whether any allowed small change can flip the answer.",
        "changes": "Robustness stops meaning 'works on the test set' and becomes a boundary question: how far is this point from a wrong decision? Training can then push the boundary away from real data.",
    },
    "wm-math.html": {
        "problem": "An agent cannot plan well if it only reacts to the current observation. It needs some idea of what will happen after possible actions.",
        "principle": "The principle is learned prediction of hidden state. A world model compresses history into a state and learns how that state changes under actions. Planning then happens inside the learned model before acting outside.",
        "changes": "The agent stops choosing only from the present frame. It can test futures in its own model. The danger is model error: a bad imagined future can lead to a bad real action.",
    },
    "normflow-math.html": {
        "problem": "We want a generator that can both sample data and know exact likelihood. Many generators can do one of those well but not the other.",
        "principle": "The principle is invertible change of variables. A normalizing flow transforms simple noise into data through reversible steps, and the determinant of each step tracks how volume changes.",
        "changes": "Generation and density evaluation become two sides of the same map. The price is architectural: every step must stay invertible, which limits what the model can do easily.",
    },
    "ebm-math.html": {
        "problem": "Sometimes it is easier to score whether something looks compatible than to directly produce it or normalize its full probability.",
        "principle": "The principle is energy as preference. An energy model assigns low scores to good states and high scores to bad ones. Learning shapes the energy landscape so data sits in low valleys.",
        "changes": "Modeling stops requiring an explicit normalized probability at every point. The hard part moves to sampling: finding low-energy states can take a search or a learned denoising process.",
    },
    "uncertainty-math.html": {
        "problem": "A model's answer is not enough. A wrong answer with high confidence is much more dangerous than a wrong answer with clear doubt.",
        "principle": "The principle is calibrated belief. Uncertainty methods try to make confidence match observed correctness, either by modeling probability, sampling multiple plausible answers, or measuring distance from known data.",
        "changes": "Prediction stops being only a label or number. It includes a measure of trust. This lets systems defer, ask for help, or choose safer actions when evidence is weak.",
    },
    "ttc-math.html": {
        "problem": "Some problems deserve more work at the moment they are asked. A fixed compute budget spends the same effort on easy and hard cases.",
        "principle": "The principle is spending samples to reduce error. Test-time compute draws, searches, verifies, or refines multiple candidate answers, then uses an aggregation rule to choose.",
        "changes": "The model stops being limited to its first answer. It can trade time for quality. The risk is verifier quality: more attempts help only if the selection rule actually recognizes better answers.",
    },
    "vla-math.html": {
        "problem": "A robot must connect what it sees, what language asks, and what its body can do. A good caption is not enough; the answer must become action.",
        "principle": "The principle is grounding symbols in control. Visual features, language tokens, and action variables are mapped into a shared decision process, often through sequence prediction or policy learning.",
        "changes": "Vision-language stops ending at description. It closes the loop into movement. The hard part is that small perception or language errors can become physical mistakes.",
    },
    "rl-math.html": {
        "problem": "In many tasks, the right action is not the one with the best immediate result. Reward can arrive late, after many choices.",
        "principle": "The principle is optimizing expected future return. Reinforcement learning assigns credit across time: actions are judged by the rewards they lead to, not only by what happens now.",
        "changes": "Learning stops needing a correct action label at every step. The agent can learn from outcomes. The hard part is credit assignment: deciding which earlier choices caused the later result.",
    },
    "information-bottleneck-math.html": {
        "problem": "A representation that keeps everything may keep noise, accidents, and private details that do not help the task. A representation that keeps too little loses the signal.",
        "principle": "The principle is useful compression. The information bottleneck asks for a code that keeps information about the target while discarding information about the input that is not needed.",
        "changes": "Representation learning stops rewarding storage alone. It rewards keeping the bits that predict and dropping the bits that distract.",
    },
    "manifold-hypothesis-math.html": {
        "problem": "Pixel space is enormous, but real images occupy only a tiny part of it. Most possible pixel grids are not meaningful scenes.",
        "principle": "The principle is low-dimensional structure inside a high-dimensional space. Real data varies along a smaller set of hidden causes: pose, lighting, shape, identity, viewpoint, and motion.",
        "changes": "Learning stops searching the whole space blindly. It tries to learn the thin surface where real data lives. This explains why interpolation, generation, and adversarial failure all depend on geometry.",
    },
    "scaling-laws-math.html": {
        "problem": "Model progress can look mysterious if each size is treated as a separate experiment. But loss often changes predictably as data, compute, and parameters grow.",
        "principle": "The principle is smooth error decay with scale. Scaling laws fit curves that relate resources to loss, separating reducible error from the floor that remains.",
        "changes": "Scaling stops being only trial and error. It becomes forecasting. The catch is that capabilities can look sudden when a smooth loss curve crosses a task threshold.",
    },
    "grokking-math.html": {
        "problem": "A model can fit the training set long before it learns the underlying rule. For a while, memorization and understanding can look the same from training loss alone.",
        "principle": "The principle is competing solutions with the same training error. Optimization may first find a memorizing solution, then later drift toward a simpler rule that generalizes better.",
        "changes": "Training stops being judged only by when loss reaches zero. The path through solution space matters, because different zero-loss answers can behave very differently on new data.",
    },
    "backprop-math.html": {
        "problem": "A model's final error is one number, but the model may contain billions of internal numbers. Each one needs to know how it contributed to that error.",
        "principle": "The principle is the chain rule as blame accounting. Each operation knows its local sensitivity, and multiplying those local sensitivities backward gives the effect of an early number on the final loss.",
        "changes": "Learning stops testing weights one by one. One backward pass turns the final error into update directions for all parameters. The same long product also explains why gradients can vanish or explode.",
    },
    "optimization-math.html": {
        "problem": "Knowing the error is not enough. The model needs a rule for how to move its settings so the next error is lower.",
        "principle": "The principle is local slope as a guide to movement. Gradient descent follows the direction where the loss rises fastest, but steps the other way. Momentum and adaptive methods change how steps are carried across uneven ground.",
        "changes": "Training becomes controlled movement through a loss surface. The model does not guess new settings; it uses measured slope, step size, and memory of past slopes.",
    },
    "normalization-math.html": {
        "problem": "Deep layers can send numbers whose scale drifts during training. The next layer then has to learn from inputs that keep changing size and center.",
        "principle": "The principle is scale control. Normalization subtracts a mean and divides by a spread, then lets the model learn a new scale and shift if useful.",
        "changes": "Each layer receives numbers in a stable range. This keeps forward signals and backward gradients from becoming too large or too small, while still allowing the network to choose its own final scale.",
    },
    "residual-math.html": {
        "problem": "A very deep plain network must transform the signal at every layer. Even preserving useful information becomes something the model has to learn.",
        "principle": "The principle is identity plus correction. A residual block passes the input forward and learns only the change to add, written as output = input + small learned update.",
        "changes": "Depth stops forcing every layer to rebuild the whole representation. Information and gradients get a clear path through the network, so added layers can refine instead of overwrite.",
    },
    "convolution-math.html": {
        "problem": "The same visual pattern can appear anywhere in an image. A model that uses different weights for every location wastes data learning the same detector repeatedly.",
        "principle": "The principle is translation sharing. A convolution applies the same small filter at every location, making one learned local test serve across the whole image.",
        "changes": "The model stops treating shifted copies as unrelated. It learns local patterns once and reuses them everywhere, which lowers the number of weights and builds in a basic fact about images.",
    },
    "mle-math.html": {
        "problem": "A model needs a clear way to prefer one setting over another using the data it saw. Accuracy alone throws away confidence and probability.",
        "principle": "The principle is likelihood. Choose the settings that make the observed data most expected. Taking logs turns many probabilities into a sum, which becomes a practical loss.",
        "changes": "Training stops being only right-versus-wrong counting. A confident wrong answer is punished more than an uncertain wrong answer, because it made the real data very surprising.",
    },
    "svd-math.html": {
        "problem": "A large matrix can look like many unrelated numbers, even when most of its useful variation follows a few patterns.",
        "principle": "The principle is ranked directions of stretch. SVD breaks a matrix into directions and singular values, ordered by how much energy each direction carries.",
        "changes": "The table stops being a wall of entries. You can keep the strongest directions, drop small ones, and know exactly how much squared error that choice creates.",
    },
    "kernels-math.html": {
        "problem": "Some patterns are simple only after changing how similarity is measured. In raw coordinates, a straight separator may be too weak.",
        "principle": "The principle is implicit feature space. A kernel computes inner products in a richer space without explicitly building that space, so learning can use curved similarity while keeping the math tractable.",
        "changes": "The model stops depending only on raw coordinates. It predicts by relation to examples through a chosen similarity rule, often gaining curved decisions and uncertainty estimates.",
    },
    "bias-variance-math.html": {
        "problem": "A model can fail because it is too simple to capture the pattern or because it is flexible enough to chase noise.",
        "principle": "The principle is error decomposition. Bias is error from the model's limited shape; variance is error from sensitivity to the particular sample. Generalization depends on both.",
        "changes": "Model choice stops being 'more flexible is always better.' The right question becomes how much structure the data supports, and whether extra capacity learns signal or accidents.",
    },
    "embeddings-math.html": {
        "problem": "Symbols by themselves have no distance. A model cannot know that two words, patches, products, or users are related unless relation is represented somewhere.",
        "principle": "The principle is meaning as geometry. An embedding maps each item to a vector so that useful relations become distances, angles, and directions.",
        "changes": "The model stops handling each symbol as an isolated ID. It can share evidence between nearby items, compare them, retrieve them, and compose them through vector operations.",
    },
    "gan-math.html": {
        "problem": "A generator trained only by simple reconstruction can produce averages that score well numerically but look fake.",
        "principle": "The principle is adversarial distribution matching. A discriminator learns to tell real from fake, while the generator learns to make fake samples that the discriminator cannot separate from real ones.",
        "changes": "The generator stops aiming only at a fixed pixel loss. It receives a moving training signal from a judge that learns realism. The tradeoff is instability because both sides change at once.",
    },
    "vae-math.html": {
        "problem": "A model needs a code that can rebuild data but also remains smooth enough to sample from. A private code per example is not enough.",
        "principle": "The principle is likelihood with a controlled code space. A VAE uses a lower bound that rewards reconstruction while charging a KL cost when the code distribution drifts from a simple prior.",
        "changes": "The model stops memorizing each example in an unstructured hiding place. It learns a code space where nearby points tend to decode to sensible examples.",
    },
    "optimal-transport-math.html": {
        "problem": "Two probability shapes may contain the same total mass but place it in different locations. Matching totals alone ignores the work needed to move one shape into the other.",
        "principle": "The principle is minimum-cost mass movement. Optimal transport searches for a plan that moves all source mass to target mass while minimizing amount moved times distance moved.",
        "changes": "Distribution comparison stops being blind to geometry. The distance between shapes reflects how hard one must be moved to become the other.",
    },
    "q-learning-math.html": {
        "problem": "An action can be useful because of what it leads to later, not because of the reward it gives now.",
        "principle": "The principle is Bellman recursion. The value of an action equals immediate reward plus the discounted value of the best future state it reaches.",
        "changes": "The agent stops judging actions only by the next reward. It learns a table or function of long-run consequences that can be updated from experience.",
    },
    "fourier-math.html": {
        "problem": "A signal may look tangled as raw values: blur, noise, edges, and repeating patterns are mixed together.",
        "principle": "The principle is change of basis into waves. Fourier analysis rewrites the signal as amounts of pure frequencies. Slow waves carry broad structure; fast waves carry sharp changes.",
        "changes": "Filtering, compression, denoising, and convolution become easier because the parts are separated. You can act on frequencies directly instead of guessing from the raw signal.",
    },
    "information-theory-math.html": {
        "problem": "Uncertainty needs a unit. Without one, confidence, surprise, compression, and wasted prediction are separate stories.",
        "principle": "The principle is coding cost. Entropy measures the average number of bits needed when using the true distribution; cross-entropy measures the cost when using the model's distribution.",
        "changes": "Bad probability estimates become measurable waste. Training losses, compression, and uncertainty can be compared through the same idea: how many extra bits did the model spend?",
    },
    "mcmc-math.html": {
        "problem": "Some probability distributions are known only up to an impossible missing total. You can compare two states, but cannot list and normalize every state.",
        "principle": "The principle is sampling by local balance. MCMC builds a random walk whose long-run visit rate equals the target probability, using accept-or-reject rules that cancel the missing total.",
        "changes": "The model stops needing the full sum over all possibilities. Samples become the working representation of belief, as long as the walk mixes well enough.",
    },
    "variational-inference-math.html": {
        "problem": "Exact posterior belief over hidden causes is often too expensive. The desired answer is clear but not usable.",
        "principle": "The principle is approximate belief by optimization. Pick a simpler family of distributions and move it toward the true posterior by optimizing a lower bound or a divergence.",
        "changes": "Inference stops being an impossible exact sum. It becomes a fit: choose the closest usable belief shape and know what approximation you are making.",
    },
    "em-math.html": {
        "problem": "Hidden causes create a circular problem: to fit the model you need assignments, but to know assignments you need the model.",
        "principle": "The principle is alternating hidden guesses and parameter fitting. The E-step estimates soft responsibility for each hidden cause; the M-step refits the model using those responsibilities.",
        "changes": "Training stops being stuck between missing labels and unknown parameters. Each round improves or preserves the current data fit under the model's own hidden-cause story.",
    },
    "convex-duality-math.html": {
        "problem": "Optimization can be hard to trust when constraints and possible local dips hide whether the answer is truly best.",
        "principle": "The principle is one-bottom geometry plus shadow prices. Convexity gives a surface where any local bottom is the global bottom. Duality turns constraints into prices that bound or certify the best value.",
        "changes": "Solving stops being only searching. You can prove optimality, read the cost of constraints, and sometimes solve the shadow problem more easily than the original.",
    },
    "natural-gradient-math.html": {
        "problem": "A step that is small in parameter numbers can be large in model behavior, and a large parameter step can barely change behavior.",
        "principle": "The principle is geometry of distributions. The Fisher information measures how much the output distribution changes when parameters move, and the natural gradient rescales steps by that geometry.",
        "changes": "Optimization stops measuring distance only in settings. It measures distance in what the model predicts, making updates more consistent across curved parameter spaces.",
    },
    "kalman-filter-math.html": {
        "problem": "A noisy sensor is not enough, and a prediction model is not enough. Each can be wrong in different ways at different times.",
        "principle": "The principle is belief update with uncertainty. The Kalman filter carries a mean and variance, predicts both forward, then uses the Kalman gain to mix prediction and measurement according to their uncertainty.",
        "changes": "State estimation stops choosing blindly between sensor and model. The uncertainty decides the blend, and the estimate becomes more or less flexible as evidence changes.",
    },
    "spectral-graph-math.html": {
        "problem": "A graph has no regular grid, so ordinary left-right or low-high frequency does not directly apply.",
        "principle": "The principle is frequency from the Laplacian. The graph Laplacian measures how much a signal changes across edges. Its eigenvectors are the graph's smooth-to-sharp modes.",
        "changes": "Graph structure becomes analyzable like a signal. Clusters, cuts, smoothing, and diffusion over nodes can be described by which graph frequencies are kept or removed.",
    },
    "hopfield-math.html": {
        "problem": "A memory system should recover a stored pattern from a partial or noisy cue, not only store exact copies.",
        "principle": "The principle is energy descent. Stored patterns are made into low-score states, and the update rule moves the current state toward lower score.",
        "changes": "Recall becomes a dynamics problem. A broken cue can roll toward the nearest stored pattern. Modern attention keeps the same retrieval spirit but uses soft, continuous matching.",
    },
}


CSS = """
.turn{border:1px solid var(--line);border-left:3px solid var(--accent);border-radius:0 12px 12px 0;padding:16px 18px;margin:20px 0;background:#eef6f6}
.turn h2{margin-top:0}
.turn p{font-size:14.8px;line-height:1.63;margin:10px 0;color:#23302C}
.turn b{color:var(--ink)}
"""


def render_block(item: dict[str, str]) -> str:
    return (
        "<!-- depth-key-turn:start -->"
        '<section class="turn" id="key-turn">'
        "<h2>The key turn — the principle at work</h2>"
        f"<p><b>The stuck point.</b> {e(item['problem'])}</p>"
        f"<p><b>The mathematical move.</b> {e(item['principle'])}</p>"
        f"<p><b>What changes.</b> {e(item['changes'])}</p>"
        "</section>"
        "<!-- depth-key-turn:end -->"
    )


def upsert_css(text: str) -> str:
    if ".turn{" in text:
        return text
    return text.replace("</style>", CSS + "\n</style>", 1)


def upsert_block(text: str, block: str) -> str:
    start = "<!-- depth-key-turn:start -->"
    end = "<!-- depth-key-turn:end -->"
    if start in text and end in text:
        prefix, rest = text.split(start, 1)
        _, suffix = rest.split(end, 1)
        return prefix + block + suffix
    marker = "<h2>The problem, as a quantity</h2>"
    if marker not in text:
        raise ValueError("could not find problem marker")
    return text.replace(marker, block + "\n" + marker, 1)


def main() -> None:
    changed = []
    missing = sorted(set(p.name for p in ROOT.glob("*-math.html")) - set(PAGES))
    extra = sorted(set(PAGES) - set(p.name for p in ROOT.glob("*-math.html")))
    if missing or extra:
        raise SystemExit(f"page mismatch: missing entries={missing}, extra entries={extra}")
    for filename, item in PAGES.items():
        path = ROOT / filename
        text = path.read_text(encoding="utf-8")
        text2 = upsert_block(upsert_css(text), render_block(item))
        if text2 != text:
            path.write_text(text2, encoding="utf-8")
            changed.append(filename)
    print(f"updated {len(changed)} pages")
    for filename in changed:
        print(filename)


if __name__ == "__main__":
    main()
