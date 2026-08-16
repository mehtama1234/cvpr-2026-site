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
      "attackCoverage": 44.7,
      "provenanceConfidence": 86.4,
      "leakageRisk": 9.0,
      "evidence": 82.5,
      "risk": 17.9,
      "readiness": 79.7
    },
    "cachedGpuMetrics": {
      "readiness": 79.7,
      "evidence": 82.5,
      "risk": 17.9,
      "leakageRisk": 9.0,
      "provenanceConfidence": 86.4,
      "attackCoverage": 44.7
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
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
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
      "attackCoverage": 47.2,
      "provenanceConfidence": 87.9,
      "leakageRisk": 14.8,
      "evidence": 82.9,
      "risk": 21.0,
      "readiness": 79.8
    },
    "cachedGpuMetrics": {
      "readiness": 79.8,
      "evidence": 82.9,
      "risk": 21.0,
      "leakageRisk": 14.8,
      "provenanceConfidence": 87.9,
      "attackCoverage": 47.2
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
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
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
      "attackCoverage": 54.4,
      "provenanceConfidence": 92.0,
      "leakageRisk": 32.9,
      "evidence": 83.6,
      "risk": 29.9,
      "readiness": 79.9
    },
    "cachedGpuMetrics": {
      "readiness": 79.9,
      "evidence": 83.6,
      "risk": 29.9,
      "leakageRisk": 32.9,
      "provenanceConfidence": 92.0,
      "attackCoverage": 54.4
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
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
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
      "attackCoverage": 52.6,
      "provenanceConfidence": 93.8,
      "leakageRisk": 17.4,
      "evidence": 85.3,
      "risk": 30.3,
      "readiness": 80.8
    },
    "cachedGpuMetrics": {
      "readiness": 80.8,
      "evidence": 85.3,
      "risk": 30.3,
      "leakageRisk": 17.4,
      "provenanceConfidence": 93.8,
      "attackCoverage": 52.6
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
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "adversarial-provenance",
    "caseId": "clean-camera",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "detector": "watermark-detector",
      "probe": "clip-perturbation-probe"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 0,
        "generationSource": 56,
        "watermarkVisibility": 100,
        "unlearningProbe": 0
      },
      "asset": "fixtures/adversarial/clean-camera.png"
    },
    "outputs": {
      "provenanceConfidence": 86.4,
      "attackHeatmap": "fixtures/adversarial/clean-camera-attack-heatmap.png",
      "leakageRisk": 9.0,
      "evidence": 82.5
    },
    "metrics": {
      "readiness": 79.7,
      "evidence": 82.5,
      "risk": 17.9,
      "leakageRisk": 9.0,
      "provenanceConfidence": 86.4,
      "attackCoverage": 44.7
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
    }
  },
  {
    "jobId": "adversarial-provenance",
    "caseId": "edited-social-post",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "detector": "watermark-detector",
      "probe": "clip-perturbation-probe"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 0,
        "generationSource": 64,
        "watermarkVisibility": 98,
        "unlearningProbe": 10
      },
      "asset": "fixtures/adversarial/edited-social-post.png"
    },
    "outputs": {
      "provenanceConfidence": 87.9,
      "attackHeatmap": "fixtures/adversarial/edited-social-post-attack-heatmap.png",
      "leakageRisk": 14.8,
      "evidence": 82.9
    },
    "metrics": {
      "readiness": 79.8,
      "evidence": 82.9,
      "risk": 21.0,
      "leakageRisk": 14.8,
      "provenanceConfidence": 87.9,
      "attackCoverage": 47.2
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
    }
  },
  {
    "jobId": "adversarial-provenance",
    "caseId": "synthetic-watermarked",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "detector": "watermark-detector",
      "probe": "clip-perturbation-probe"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 0,
        "generationSource": 84,
        "watermarkVisibility": 94,
        "unlearningProbe": 44
      },
      "asset": "fixtures/adversarial/synthetic-watermarked.png"
    },
    "outputs": {
      "provenanceConfidence": 92.0,
      "attackHeatmap": "fixtures/adversarial/synthetic-watermarked-attack-heatmap.png",
      "leakageRisk": 32.9,
      "evidence": 83.6
    },
    "metrics": {
      "readiness": 79.9,
      "evidence": 83.6,
      "risk": 29.9,
      "leakageRisk": 32.9,
      "provenanceConfidence": 92.0,
      "attackCoverage": 54.4
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
    }
  },
  {
    "jobId": "adversarial-provenance",
    "caseId": "adaptive-attack",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "detector": "watermark-detector",
      "probe": "clip-perturbation-probe"
    },
    "inputs": {
      "attackControls": {
        "attackStrength": 12,
        "generationSource": 89,
        "watermarkVisibility": 100,
        "unlearningProbe": 0
      },
      "asset": "fixtures/adversarial/adaptive-attack.png"
    },
    "outputs": {
      "provenanceConfidence": 93.8,
      "attackHeatmap": "fixtures/adversarial/adaptive-attack-attack-heatmap.png",
      "leakageRisk": 17.4,
      "evidence": 85.3
    },
    "metrics": {
      "readiness": 80.8,
      "evidence": 85.3,
      "risk": 30.3,
      "leakageRisk": 17.4,
      "provenanceConfidence": 93.8,
      "attackCoverage": 52.6
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-adversarial-provenance-bench"
    }
  }
];
