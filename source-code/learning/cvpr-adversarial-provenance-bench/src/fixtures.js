export const stageEvidence = {
  "attack": 94,
  "provenance": 94,
  "unlearning": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "clean-camera",
    "title": "Clean camera image",
    "attackStrength": 0,
    "generationSource": 56,
    "watermarkVisibility": 100,
    "unlearningProbe": 0
  },
  {
    "id": "edited-social-post",
    "title": "Edited social post",
    "attackStrength": 0,
    "generationSource": 64,
    "watermarkVisibility": 98,
    "unlearningProbe": 10
  },
  {
    "id": "synthetic-watermarked",
    "title": "Synthetic watermarked media",
    "attackStrength": 0,
    "generationSource": 84,
    "watermarkVisibility": 94,
    "unlearningProbe": 44
  },
  {
    "id": "adaptive-attack",
    "title": "Adaptive provenance attack",
    "attackStrength": 12,
    "generationSource": 89,
    "watermarkVisibility": 100,
    "unlearningProbe": 0
  }
];
export const records = [
  {
    "id": "clean-camera",
    "title": "Clean camera image",
    "system": "adversarial-provenance-gate",
    "cluster": "Adversarial robustness",
    "sourceStages": [
      "attack-surface",
      "provenance-detection",
      "unlearning-check"
    ],
    "controls": {
      "attackStrength": 0,
      "generationSource": 56,
      "watermarkVisibility": 100,
      "unlearningProbe": 0
    },
    "metrics": {
      "attackCoverage": 3.7,
      "provenanceConfidence": 50.8,
      "leakageRisk": 15.1,
      "evidence": 64.7,
      "risk": 11.6,
      "readiness": 76.2
    },
    "simulatedMetrics": {
      "attackCoverage": 44.7,
      "provenanceConfidence": 86.4,
      "leakageRisk": 9.0,
      "evidence": 82.5,
      "risk": 17.9,
      "readiness": 79.7
    },
    "cachedGpuMetrics": {
      "readiness": 66.8,
      "attackCoverage": 3.7,
      "provenanceConfidence": 50.8,
      "leakageRisk": 1.8,
      "evidence": 52.2,
      "risk": 11.6
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-real"
    ],
    "preferredRuntime": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "edited-social-post",
    "title": "Edited social post",
    "system": "adversarial-provenance-gate",
    "cluster": "Adversarial robustness",
    "sourceStages": [
      "attack-surface",
      "provenance-detection",
      "unlearning-check"
    ],
    "controls": {
      "attackStrength": 0,
      "generationSource": 64,
      "watermarkVisibility": 98,
      "unlearningProbe": 10
    },
    "metrics": {
      "attackCoverage": 2.6,
      "provenanceConfidence": 39.8,
      "leakageRisk": 27.2,
      "evidence": 54.6,
      "risk": 23.7,
      "readiness": 66.3
    },
    "simulatedMetrics": {
      "attackCoverage": 47.2,
      "provenanceConfidence": 87.9,
      "leakageRisk": 14.8,
      "evidence": 82.9,
      "risk": 21.0,
      "readiness": 79.8
    },
    "cachedGpuMetrics": {
      "readiness": 57.7,
      "attackCoverage": 2.6,
      "provenanceConfidence": 39.8,
      "leakageRisk": 4.4,
      "evidence": 44.2,
      "risk": 23.7
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-real"
    ],
    "preferredRuntime": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "synthetic-watermarked",
    "title": "Synthetic watermarked media",
    "system": "adversarial-provenance-gate",
    "cluster": "Adversarial robustness",
    "sourceStages": [
      "attack-surface",
      "provenance-detection",
      "unlearning-check"
    ],
    "controls": {
      "attackStrength": 0,
      "generationSource": 84,
      "watermarkVisibility": 94,
      "unlearningProbe": 44
    },
    "metrics": {
      "attackCoverage": 0.1,
      "provenanceConfidence": 39.1,
      "leakageRisk": 33.2,
      "evidence": 51.3,
      "risk": 29.7,
      "readiness": 63.2
    },
    "simulatedMetrics": {
      "attackCoverage": 54.4,
      "provenanceConfidence": 92.0,
      "leakageRisk": 32.9,
      "evidence": 83.6,
      "risk": 29.9,
      "readiness": 79.9
    },
    "cachedGpuMetrics": {
      "readiness": 53.8,
      "attackCoverage": 0.1,
      "provenanceConfidence": 39.1,
      "leakageRisk": 14.1,
      "evidence": 41.5,
      "risk": 29.7
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-real"
    ],
    "preferredRuntime": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "adaptive-attack",
    "title": "Adaptive provenance attack",
    "system": "adversarial-provenance-gate",
    "cluster": "Adversarial robustness",
    "sourceStages": [
      "attack-surface",
      "provenance-detection",
      "unlearning-check"
    ],
    "controls": {
      "attackStrength": 12,
      "generationSource": 89,
      "watermarkVisibility": 100,
      "unlearningProbe": 0
    },
    "metrics": {
      "attackCoverage": 19.1,
      "provenanceConfidence": 39.9,
      "leakageRisk": 36.2,
      "evidence": 51.2,
      "risk": 32.7,
      "readiness": 64.6
    },
    "simulatedMetrics": {
      "attackCoverage": 52.6,
      "provenanceConfidence": 93.8,
      "leakageRisk": 17.4,
      "evidence": 85.3,
      "risk": 30.3,
      "readiness": 80.8
    },
    "cachedGpuMetrics": {
      "readiness": 53.9,
      "attackCoverage": 19.1,
      "provenanceConfidence": 39.9,
      "leakageRisk": 13.1,
      "evidence": 42.8,
      "risk": 32.7
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-real"
    ],
    "preferredRuntime": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "adversarial-provenance",
    "caseId": "clean-camera",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:04:05Z",
    "model": {
      "detector": "openai/clip-vit-base-patch32",
      "probe": "clip-provenance-prompt-bank"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 0,
        "generationSource": 56,
        "watermarkVisibility": 100,
        "unlearningProbe": 0
      },
      "asset": "synthetic://clean-camera"
    },
    "outputs": {
      "provenanceConfidence": 50.8,
      "attackHeatmap": "synthetic://adversarial/clean-camera-clip-heatmap.png",
      "leakageRisk": 1.8,
      "evidence": 52.2,
      "clipProbeScores": {
        "a clean camera photograph": 41.3,
        "a synthetic generated image": 45.2,
        "an edited social media image": 0.8,
        "an adversarially perturbed image": 6.6,
        "a watermarked image": 6.1
      }
    },
    "metrics": {
      "readiness": 66.8,
      "attackCoverage": 3.7,
      "provenanceConfidence": 50.8,
      "leakageRisk": 1.8,
      "evidence": 52.2,
      "risk": 11.6
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "adversarial-provenance",
    "caseId": "edited-social-post",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:04:05Z",
    "model": {
      "detector": "openai/clip-vit-base-patch32",
      "probe": "clip-provenance-prompt-bank"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 0,
        "generationSource": 64,
        "watermarkVisibility": 98,
        "unlearningProbe": 10
      },
      "asset": "synthetic://edited-social-post"
    },
    "outputs": {
      "provenanceConfidence": 39.8,
      "attackHeatmap": "synthetic://adversarial/edited-social-post-clip-heatmap.png",
      "leakageRisk": 4.4,
      "evidence": 44.2,
      "clipProbeScores": {
        "a clean camera photograph": 0.7,
        "a synthetic generated image": 91.0,
        "an edited social media image": 1.6,
        "an adversarially perturbed image": 4.2,
        "a watermarked image": 2.4
      }
    },
    "metrics": {
      "readiness": 57.7,
      "attackCoverage": 2.6,
      "provenanceConfidence": 39.8,
      "leakageRisk": 4.4,
      "evidence": 44.2,
      "risk": 23.7
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "adversarial-provenance",
    "caseId": "synthetic-watermarked",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:04:05Z",
    "model": {
      "detector": "openai/clip-vit-base-patch32",
      "probe": "clip-provenance-prompt-bank"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 0,
        "generationSource": 84,
        "watermarkVisibility": 94,
        "unlearningProbe": 44
      },
      "asset": "synthetic://synthetic-watermarked"
    },
    "outputs": {
      "provenanceConfidence": 39.1,
      "attackHeatmap": "synthetic://adversarial/synthetic-watermarked-clip-heatmap.png",
      "leakageRisk": 14.1,
      "evidence": 41.5,
      "clipProbeScores": {
        "a clean camera photograph": 0.0,
        "a synthetic generated image": 99.1,
        "an edited social media image": 0.0,
        "an adversarially perturbed image": 0.1,
        "a watermarked image": 0.8
      }
    },
    "metrics": {
      "readiness": 53.8,
      "attackCoverage": 0.1,
      "provenanceConfidence": 39.1,
      "leakageRisk": 14.1,
      "evidence": 41.5,
      "risk": 29.7
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "adversarial-provenance",
    "caseId": "adaptive-attack",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:04:05Z",
    "model": {
      "detector": "openai/clip-vit-base-patch32",
      "probe": "clip-provenance-prompt-bank"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 12,
        "generationSource": 89,
        "watermarkVisibility": 100,
        "unlearningProbe": 0
      },
      "asset": "synthetic://adaptive-attack"
    },
    "outputs": {
      "provenanceConfidence": 39.9,
      "attackHeatmap": "synthetic://adversarial/adaptive-attack-clip-heatmap.png",
      "leakageRisk": 13.1,
      "evidence": 42.8,
      "clipProbeScores": {
        "a clean camera photograph": 0.7,
        "a synthetic generated image": 85.7,
        "an edited social media image": 1.7,
        "an adversarially perturbed image": 8.1,
        "a watermarked image": 3.9
      }
    },
    "metrics": {
      "readiness": 53.9,
      "attackCoverage": 19.1,
      "provenanceConfidence": 39.9,
      "leakageRisk": 13.1,
      "evidence": 42.8,
      "risk": 32.7
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench",
      "execution": "transformers-clip-provenance-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
