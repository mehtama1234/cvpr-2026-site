export const scenarios = [
  {
    "id": "baseline-readiness",
    "title": "Baseline readiness",
    "difficulty": 34,
    "brief": "Normal deployment pressure with balanced evidence, quality, and risk.",
    "pressures": {
      "trust": 0.16,
      "safety": 0.18,
      "medical": 0.15
    }
  },
  {
    "id": "long-tail-open-world",
    "title": "Long-tail open world",
    "difficulty": 61,
    "brief": "Rare categories, domain drift, ambiguous labels, and weak priors.",
    "pressures": {
      "localization": 0.34,
      "grounding": 0.23,
      "medical": 0.2,
      "trust": 0.18
    }
  },
  {
    "id": "noisy-restoration",
    "title": "Noisy sensor recovery",
    "difficulty": 58,
    "brief": "Blur, compression, low light, and downstream fidelity pressure.",
    "pressures": {
      "restoration": 0.36,
      "medical": 0.22,
      "localization": 0.16
    }
  },
  {
    "id": "temporal-rollout",
    "title": "Temporal rollout stress",
    "difficulty": 66,
    "brief": "Long-horizon identity, state, causality, and future-prediction stress.",
    "pressures": {
      "temporal": 0.38,
      "safety": 0.2,
      "grounding": 0.16
    }
  },
  {
    "id": "compute-constrained",
    "title": "Compute constrained serving",
    "difficulty": 54,
    "brief": "Latency, token budgets, quantization, and escalation routing.",
    "pressures": {
      "efficiency": 0.38,
      "grounding": 0.18,
      "splats": 0.14
    }
  },
  {
    "id": "clinical-shift",
    "title": "Clinical and scientific shift",
    "difficulty": 70,
    "brief": "Site, scanner, cohort, measurement, and expert-review pressure.",
    "pressures": {
      "medical": 0.42,
      "restoration": 0.2,
      "trust": 0.18
    }
  },
  {
    "id": "safety-critical-action",
    "title": "Safety-critical action",
    "difficulty": 76,
    "brief": "Closed-loop action under future risk and scene-grounding uncertainty.",
    "pressures": {
      "safety": 0.44,
      "temporal": 0.22,
      "grounding": 0.2,
      "trust": 0.16
    }
  },
  {
    "id": "adversarial-media",
    "title": "Adversarial media and provenance",
    "difficulty": 73,
    "brief": "Perturbations, generated media, watermarking, and unlearning leakage.",
    "pressures": {
      "trust": 0.44,
      "grounding": 0.2,
      "localization": 0.14,
      "editing": 0.16
    }
  }
];
