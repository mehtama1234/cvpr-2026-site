export const provenanceRecords = [
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
export const attacks = [
  {
    "id": "clean-audit",
    "title": "Clean audit",
    "attackShift": 0,
    "watermarkShift": 0,
    "unlearningShift": 0,
    "clinicalRiskShift": 0
  },
  {
    "id": "watermark-scrub",
    "title": "Watermark scrub",
    "attackShift": 28,
    "watermarkShift": -42,
    "unlearningShift": 8,
    "clinicalRiskShift": 6
  },
  {
    "id": "perturbation-camouflage",
    "title": "Perturbation camouflage",
    "attackShift": 47,
    "watermarkShift": -22,
    "unlearningShift": 16,
    "clinicalRiskShift": 12
  },
  {
    "id": "unlearning-leak",
    "title": "Unlearning leak",
    "attackShift": 35,
    "watermarkShift": -14,
    "unlearningShift": 44,
    "clinicalRiskShift": 16
  }
];
export const stageEvidence = {
  "attack": 94,
  "provenance": 94,
  "unlearning": 94,
  "evidenceDepth": 94
};
export const clinicalRisk = 11.1;
export const redTeamRows = [
  {
    "id": "clean-camera/clean-audit",
    "caseId": "clean-camera",
    "caseTitle": "Clean camera image",
    "attackId": "clean-audit",
    "attackTitle": "Clean audit",
    "controls": {
      "attackStrength": 0,
      "generationSource": 56.0,
      "watermarkVisibility": 100,
      "unlearningProbe": 0
    },
    "metrics": {
      "attackCoverage": 44.7,
      "provenanceConfidence": 86.4,
      "leakageRisk": 9.0,
      "evidence": 82.5,
      "mediaRisk": 17.9,
      "deploymentRisk": 15.7,
      "readiness": 78.6
    },
    "evidenceDelta": 17.8,
    "riskDelta": 4.1,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "clean-camera/watermark-scrub",
    "caseId": "clean-camera",
    "caseTitle": "Clean camera image",
    "attackId": "watermark-scrub",
    "attackTitle": "Watermark scrub",
    "controls": {
      "attackStrength": 28.0,
      "generationSource": 56.0,
      "watermarkVisibility": 58.0,
      "unlearningProbe": 8.0
    },
    "metrics": {
      "attackCoverage": 57.5,
      "provenanceConfidence": 71.8,
      "leakageRisk": 26.3,
      "evidence": 78.8,
      "mediaRisk": 33.2,
      "deploymentRisk": 28.0,
      "readiness": 72.5
    },
    "evidenceDelta": 14.1,
    "riskDelta": 16.4,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "clean-camera/perturbation-camouflage",
    "caseId": "clean-camera",
    "caseTitle": "Clean camera image",
    "attackId": "perturbation-camouflage",
    "attackTitle": "Perturbation camouflage",
    "controls": {
      "attackStrength": 47.0,
      "generationSource": 56.0,
      "watermarkVisibility": 78.0,
      "unlearningProbe": 16.0
    },
    "metrics": {
      "attackCoverage": 59.7,
      "provenanceConfidence": 75.5,
      "leakageRisk": 31.4,
      "evidence": 79.7,
      "mediaRisk": 40.8,
      "deploymentRisk": 35.2,
      "readiness": 72.4
    },
    "evidenceDelta": 15.0,
    "riskDelta": 23.6,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "clean-camera/unlearning-leak",
    "caseId": "clean-camera",
    "caseTitle": "Clean camera image",
    "attackId": "unlearning-leak",
    "attackTitle": "Unlearning leak",
    "controls": {
      "attackStrength": 35.0,
      "generationSource": 56.0,
      "watermarkVisibility": 86.0,
      "unlearningProbe": 44.0
    },
    "metrics": {
      "attackCoverage": 58.7,
      "provenanceConfidence": 79.0,
      "leakageRisk": 38.8,
      "evidence": 79.9,
      "mediaRisk": 38.8,
      "deploymentRisk": 35.0,
      "readiness": 73.1
    },
    "evidenceDelta": 15.2,
    "riskDelta": 23.4,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "edited-social-post/clean-audit",
    "caseId": "edited-social-post",
    "caseTitle": "Edited social post",
    "attackId": "clean-audit",
    "attackTitle": "Clean audit",
    "controls": {
      "attackStrength": 0,
      "generationSource": 64.0,
      "watermarkVisibility": 98.0,
      "unlearningProbe": 10.0
    },
    "metrics": {
      "attackCoverage": 47.2,
      "provenanceConfidence": 87.9,
      "leakageRisk": 14.8,
      "evidence": 82.9,
      "mediaRisk": 21.0,
      "deploymentRisk": 17.9,
      "readiness": 78.9
    },
    "evidenceDelta": 28.3,
    "riskDelta": -5.8,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "edited-social-post/watermark-scrub",
    "caseId": "edited-social-post",
    "caseTitle": "Edited social post",
    "attackId": "watermark-scrub",
    "attackTitle": "Watermark scrub",
    "controls": {
      "attackStrength": 28.0,
      "generationSource": 64.0,
      "watermarkVisibility": 56.0,
      "unlearningProbe": 18.0
    },
    "metrics": {
      "attackCoverage": 60.1,
      "provenanceConfidence": 73.4,
      "leakageRisk": 32.1,
      "evidence": 79.1,
      "mediaRisk": 36.3,
      "deploymentRisk": 30.2,
      "readiness": 72.8
    },
    "evidenceDelta": 24.5,
    "riskDelta": 6.5,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "edited-social-post/perturbation-camouflage",
    "caseId": "edited-social-post",
    "caseTitle": "Edited social post",
    "attackId": "perturbation-camouflage",
    "attackTitle": "Perturbation camouflage",
    "controls": {
      "attackStrength": 47.0,
      "generationSource": 64.0,
      "watermarkVisibility": 76.0,
      "unlearningProbe": 26.0
    },
    "metrics": {
      "attackCoverage": 62.3,
      "provenanceConfidence": 77.1,
      "leakageRisk": 37.2,
      "evidence": 80.1,
      "mediaRisk": 44.0,
      "deploymentRisk": 37.3,
      "readiness": 72.7
    },
    "evidenceDelta": 25.5,
    "riskDelta": 13.6,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "edited-social-post/unlearning-leak",
    "caseId": "edited-social-post",
    "caseTitle": "Edited social post",
    "attackId": "unlearning-leak",
    "attackTitle": "Unlearning leak",
    "controls": {
      "attackStrength": 35.0,
      "generationSource": 64.0,
      "watermarkVisibility": 84.0,
      "unlearningProbe": 54.0
    },
    "metrics": {
      "attackCoverage": 61.3,
      "provenanceConfidence": 80.5,
      "leakageRisk": 44.6,
      "evidence": 80.2,
      "mediaRisk": 41.9,
      "deploymentRisk": 37.2,
      "readiness": 73.5
    },
    "evidenceDelta": 25.6,
    "riskDelta": 13.5,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "synthetic-watermarked/clean-audit",
    "caseId": "synthetic-watermarked",
    "caseTitle": "Synthetic watermarked media",
    "attackId": "clean-audit",
    "attackTitle": "Clean audit",
    "controls": {
      "attackStrength": 0,
      "generationSource": 84.0,
      "watermarkVisibility": 94.0,
      "unlearningProbe": 44.0
    },
    "metrics": {
      "attackCoverage": 54.4,
      "provenanceConfidence": 92.0,
      "leakageRisk": 32.9,
      "evidence": 83.6,
      "mediaRisk": 29.9,
      "deploymentRisk": 23.9,
      "readiness": 79.7
    },
    "evidenceDelta": 32.3,
    "riskDelta": -5.8,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "synthetic-watermarked/watermark-scrub",
    "caseId": "synthetic-watermarked",
    "caseTitle": "Synthetic watermarked media",
    "attackId": "watermark-scrub",
    "attackTitle": "Watermark scrub",
    "controls": {
      "attackStrength": 28.0,
      "generationSource": 84.0,
      "watermarkVisibility": 52.0,
      "unlearningProbe": 52.0
    },
    "metrics": {
      "attackCoverage": 67.2,
      "provenanceConfidence": 77.4,
      "leakageRisk": 50.2,
      "evidence": 79.8,
      "mediaRisk": 45.2,
      "deploymentRisk": 36.2,
      "readiness": 73.6
    },
    "evidenceDelta": 28.5,
    "riskDelta": 6.5,
    "decision": "review",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "synthetic-watermarked/perturbation-camouflage",
    "caseId": "synthetic-watermarked",
    "caseTitle": "Synthetic watermarked media",
    "attackId": "perturbation-camouflage",
    "attackTitle": "Perturbation camouflage",
    "controls": {
      "attackStrength": 47.0,
      "generationSource": 84.0,
      "watermarkVisibility": 72.0,
      "unlearningProbe": 60.0
    },
    "metrics": {
      "attackCoverage": 69.4,
      "provenanceConfidence": 81.1,
      "leakageRisk": 55.3,
      "evidence": 80.8,
      "mediaRisk": 52.9,
      "deploymentRisk": 43.4,
      "readiness": 73.5
    },
    "evidenceDelta": 29.5,
    "riskDelta": 13.7,
    "decision": "review",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "synthetic-watermarked/unlearning-leak",
    "caseId": "synthetic-watermarked",
    "caseTitle": "Synthetic watermarked media",
    "attackId": "unlearning-leak",
    "attackTitle": "Unlearning leak",
    "controls": {
      "attackStrength": 35.0,
      "generationSource": 84.0,
      "watermarkVisibility": 80.0,
      "unlearningProbe": 88.0
    },
    "metrics": {
      "attackCoverage": 68.5,
      "provenanceConfidence": 84.6,
      "leakageRisk": 62.7,
      "evidence": 80.9,
      "mediaRisk": 50.8,
      "deploymentRisk": 43.2,
      "readiness": 74.3
    },
    "evidenceDelta": 29.6,
    "riskDelta": 13.5,
    "decision": "review",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "adaptive-attack/clean-audit",
    "caseId": "adaptive-attack",
    "caseTitle": "Adaptive provenance attack",
    "attackId": "clean-audit",
    "attackTitle": "Clean audit",
    "controls": {
      "attackStrength": 12.0,
      "generationSource": 89.0,
      "watermarkVisibility": 100,
      "unlearningProbe": 0
    },
    "metrics": {
      "attackCoverage": 52.6,
      "provenanceConfidence": 93.8,
      "leakageRisk": 17.4,
      "evidence": 85.3,
      "mediaRisk": 30.3,
      "deploymentRisk": 24.1,
      "readiness": 80.5
    },
    "evidenceDelta": 34.1,
    "riskDelta": -8.6,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "adaptive-attack/watermark-scrub",
    "caseId": "adaptive-attack",
    "caseTitle": "Adaptive provenance attack",
    "attackId": "watermark-scrub",
    "attackTitle": "Watermark scrub",
    "controls": {
      "attackStrength": 40.0,
      "generationSource": 89.0,
      "watermarkVisibility": 58.0,
      "unlearningProbe": 8.0
    },
    "metrics": {
      "attackCoverage": 65.4,
      "provenanceConfidence": 79.2,
      "leakageRisk": 34.7,
      "evidence": 81.6,
      "mediaRisk": 45.5,
      "deploymentRisk": 36.4,
      "readiness": 74.4
    },
    "evidenceDelta": 30.4,
    "riskDelta": 3.7,
    "decision": "release",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "adaptive-attack/perturbation-camouflage",
    "caseId": "adaptive-attack",
    "caseTitle": "Adaptive provenance attack",
    "attackId": "perturbation-camouflage",
    "attackTitle": "Perturbation camouflage",
    "controls": {
      "attackStrength": 59.0,
      "generationSource": 89.0,
      "watermarkVisibility": 78.0,
      "unlearningProbe": 16.0
    },
    "metrics": {
      "attackCoverage": 67.6,
      "provenanceConfidence": 82.9,
      "leakageRisk": 39.8,
      "evidence": 82.5,
      "mediaRisk": 53.2,
      "deploymentRisk": 43.6,
      "readiness": 74.3
    },
    "evidenceDelta": 31.3,
    "riskDelta": 10.9,
    "decision": "review",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
    "id": "adaptive-attack/unlearning-leak",
    "caseId": "adaptive-attack",
    "caseTitle": "Adaptive provenance attack",
    "attackId": "unlearning-leak",
    "attackTitle": "Unlearning leak",
    "controls": {
      "attackStrength": 47.0,
      "generationSource": 89.0,
      "watermarkVisibility": 86.0,
      "unlearningProbe": 44.0
    },
    "metrics": {
      "attackCoverage": 66.7,
      "provenanceConfidence": 86.4,
      "leakageRisk": 47.2,
      "evidence": 82.7,
      "mediaRisk": 51.1,
      "deploymentRisk": 43.5,
      "readiness": 75.0
    },
    "evidenceDelta": 31.5,
    "riskDelta": 10.8,
    "decision": "review",
    "sourceBenchPage": "cvpr-adversarial-provenance-bench.html",
    "runtimeEvidence": "cached-real",
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
export const summary = {
  "demo": "cvpr-provenance-red-team-arena",
  "status": "inspect",
  "backlogGoal": "Provenance red-team arena",
  "backlogTasksCovered": 3,
  "theme": "The frontier - new senses and new duties",
  "systems": [
    "adversarial-provenance-gate",
    "medical-vision-validation"
  ],
  "benches": [
    "cvpr-adversarial-provenance-bench",
    "cvpr-clinical-shift-bench"
  ],
  "cases": 4,
  "attacks": 4,
  "arenaRows": 16,
  "release": 11,
  "review": 5,
  "block": 0,
  "gpuBackedCases": 8,
  "clinicalResidualRisk": 11.1,
  "minEvidence": 78.8,
  "maxDeploymentRisk": 43.6,
  "avgReadiness": 75.0,
  "proPlusJobs": [
    "adversarial-provenance",
    "clinical-shift"
  ],
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
