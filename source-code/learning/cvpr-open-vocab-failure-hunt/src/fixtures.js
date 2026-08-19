export const records = [
  {
    "id": "common-clean",
    "title": "Common clean object",
    "system": "open-vocab-visual-search",
    "cluster": "Open-vocabulary vision",
    "sourceStages": [
      "text-query-grounding",
      "long-tail-retrieval",
      "evidence-inspection"
    ],
    "controls": {
      "queryRarity": 18,
      "distractorOverlap": 16,
      "boxAmbiguity": 18,
      "evidenceThreshold": 54
    },
    "metrics": {
      "proposalRecall": 74.2,
      "textRegionScore": 26.8,
      "longTailRecall": 39.7,
      "localizedEvidence": 62.8,
      "unsupportedRisk": 21.0,
      "readiness": 74.3
    },
    "simulatedMetrics": {
      "proposalRecall": 82.8,
      "textRegionScore": 84.7,
      "longTailRecall": 71.7,
      "localizedEvidence": 88.9,
      "unsupportedRisk": 8.3,
      "readiness": 84.7
    },
    "cachedGpuMetrics": {
      "readiness": 48.0,
      "proposalRecall": 74.2,
      "textRegionScore": 26.8,
      "longTailRecall": 39.7,
      "localizedEvidence": 50.2,
      "unsupportedRisk": 21.0
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
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-visible",
    "title": "Rare visible object",
    "system": "open-vocab-visual-search",
    "cluster": "Open-vocabulary vision",
    "sourceStages": [
      "text-query-grounding",
      "long-tail-retrieval",
      "evidence-inspection"
    ],
    "controls": {
      "queryRarity": 66,
      "distractorOverlap": 12,
      "boxAmbiguity": 34,
      "evidenceThreshold": 62
    },
    "metrics": {
      "proposalRecall": 75.2,
      "textRegionScore": 26.7,
      "longTailRecall": 43.2,
      "localizedEvidence": 63.6,
      "unsupportedRisk": 21.2,
      "readiness": 75.3
    },
    "simulatedMetrics": {
      "proposalRecall": 76.8,
      "textRegionScore": 85.0,
      "longTailRecall": 76.9,
      "localizedEvidence": 87.7,
      "unsupportedRisk": 16.3,
      "readiness": 83.9
    },
    "cachedGpuMetrics": {
      "readiness": 49.4,
      "proposalRecall": 75.2,
      "textRegionScore": 26.7,
      "longTailRecall": 43.2,
      "localizedEvidence": 52.2,
      "unsupportedRisk": 21.2
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
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-distractors",
    "title": "Rare object with distractors",
    "system": "open-vocab-visual-search",
    "cluster": "Open-vocabulary vision",
    "sourceStages": [
      "text-query-grounding",
      "long-tail-retrieval",
      "evidence-inspection"
    ],
    "controls": {
      "queryRarity": 78,
      "distractorOverlap": 28,
      "boxAmbiguity": 28,
      "evidenceThreshold": 76
    },
    "metrics": {
      "proposalRecall": 79.4,
      "textRegionScore": 93.1,
      "longTailRecall": 85.2,
      "localizedEvidence": 95.6,
      "unsupportedRisk": 8.9,
      "readiness": 113.8
    },
    "simulatedMetrics": {
      "proposalRecall": 76.0,
      "textRegionScore": 83.6,
      "longTailRecall": 81.4,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 19.0,
      "readiness": 83.8
    },
    "cachedGpuMetrics": {
      "readiness": 88.0,
      "proposalRecall": 79.4,
      "textRegionScore": 93.1,
      "longTailRecall": 85.2,
      "localizedEvidence": 84.5,
      "unsupportedRisk": 8.9
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
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "unsupported-query",
    "title": "Unsupported text query",
    "system": "open-vocab-visual-search",
    "cluster": "Open-vocabulary vision",
    "sourceStages": [
      "text-query-grounding",
      "long-tail-retrieval",
      "evidence-inspection"
    ],
    "controls": {
      "queryRarity": 82,
      "distractorOverlap": 30,
      "boxAmbiguity": 32,
      "evidenceThreshold": 84
    },
    "metrics": {
      "proposalRecall": 60.6,
      "textRegionScore": 17.0,
      "longTailRecall": 40.6,
      "localizedEvidence": 56.0,
      "unsupportedRisk": 23.9,
      "readiness": 69.3
    },
    "simulatedMetrics": {
      "proposalRecall": 75.3,
      "textRegionScore": 84.0,
      "longTailRecall": 82.1,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 20.1,
      "readiness": 83.8
    },
    "cachedGpuMetrics": {
      "readiness": 44.0,
      "proposalRecall": 60.6,
      "textRegionScore": 17.0,
      "longTailRecall": 40.6,
      "localizedEvidence": 47.0,
      "unsupportedRisk": 24.9
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
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const probes = [
  {
    "id": "clean-confirmation",
    "title": "Clean confirmation",
    "rarityShift": 0,
    "distractorShift": 0,
    "ambiguityShift": 0,
    "thresholdShift": 0
  },
  {
    "id": "rare-synonym",
    "title": "Rare synonym",
    "rarityShift": 14,
    "distractorShift": 4,
    "ambiguityShift": 6,
    "thresholdShift": 4
  },
  {
    "id": "distractor-pack",
    "title": "Distractor pack",
    "rarityShift": 8,
    "distractorShift": 26,
    "ambiguityShift": 16,
    "thresholdShift": 6
  },
  {
    "id": "unsupported-pressure",
    "title": "Unsupported pressure",
    "rarityShift": 18,
    "distractorShift": 22,
    "ambiguityShift": 20,
    "thresholdShift": -18
  }
];
export const stageEvidence = {
  "grounding": 94,
  "retrieval": 94,
  "inspection": 94,
  "evidenceDepth": 94
};
export const failureRows = [
  {
    "id": "common-clean/clean-confirmation",
    "caseId": "common-clean",
    "caseTitle": "Common clean object",
    "probeId": "clean-confirmation",
    "probeTitle": "Clean confirmation",
    "controls": {
      "queryRarity": 18.0,
      "distractorOverlap": 16.0,
      "boxAmbiguity": 18.0,
      "evidenceThreshold": 54.0
    },
    "metrics": {
      "proposalRecall": 82.8,
      "textRegionScore": 84.7,
      "longTailRecall": 71.7,
      "localizedEvidence": 88.9,
      "unsupportedRisk": 8.3,
      "readiness": 84.7
    },
    "evidenceDelta": 26.1,
    "riskDelta": -12.7,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "common-clean/rare-synonym",
    "caseId": "common-clean",
    "caseTitle": "Common clean object",
    "probeId": "rare-synonym",
    "probeTitle": "Rare synonym",
    "controls": {
      "queryRarity": 32.0,
      "distractorOverlap": 20.0,
      "boxAmbiguity": 24.0,
      "evidenceThreshold": 58.0
    },
    "metrics": {
      "proposalRecall": 79.9,
      "textRegionScore": 83.8,
      "longTailRecall": 72.9,
      "localizedEvidence": 88.0,
      "unsupportedRisk": 12.2,
      "readiness": 83.6
    },
    "evidenceDelta": 25.2,
    "riskDelta": -8.8,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "common-clean/distractor-pack",
    "caseId": "common-clean",
    "caseTitle": "Common clean object",
    "probeId": "distractor-pack",
    "probeTitle": "Distractor pack",
    "controls": {
      "queryRarity": 26.0,
      "distractorOverlap": 42.0,
      "boxAmbiguity": 34.0,
      "evidenceThreshold": 60.0
    },
    "metrics": {
      "proposalRecall": 73.8,
      "textRegionScore": 78.6,
      "longTailRecall": 68.9,
      "localizedEvidence": 85.2,
      "unsupportedRisk": 19.7,
      "readiness": 79.1
    },
    "evidenceDelta": 22.4,
    "riskDelta": -1.3,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "common-clean/unsupported-pressure",
    "caseId": "common-clean",
    "caseTitle": "Common clean object",
    "probeId": "unsupported-pressure",
    "probeTitle": "Unsupported pressure",
    "controls": {
      "queryRarity": 36.0,
      "distractorOverlap": 38.0,
      "boxAmbiguity": 38.0,
      "evidenceThreshold": 36.0
    },
    "metrics": {
      "proposalRecall": 69.7,
      "textRegionScore": 75.4,
      "longTailRecall": 66.6,
      "localizedEvidence": 83.4,
      "unsupportedRisk": 23.8,
      "readiness": 76.4
    },
    "evidenceDelta": 20.6,
    "riskDelta": 2.8,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-visible/clean-confirmation",
    "caseId": "rare-visible",
    "caseTitle": "Rare visible object",
    "probeId": "clean-confirmation",
    "probeTitle": "Clean confirmation",
    "controls": {
      "queryRarity": 66.0,
      "distractorOverlap": 12.0,
      "boxAmbiguity": 34.0,
      "evidenceThreshold": 62.0
    },
    "metrics": {
      "proposalRecall": 76.8,
      "textRegionScore": 85.0,
      "longTailRecall": 76.9,
      "localizedEvidence": 87.7,
      "unsupportedRisk": 16.3,
      "readiness": 83.9
    },
    "evidenceDelta": 24.1,
    "riskDelta": -4.9,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-visible/rare-synonym",
    "caseId": "rare-visible",
    "caseTitle": "Rare visible object",
    "probeId": "rare-synonym",
    "probeTitle": "Rare synonym",
    "controls": {
      "queryRarity": 80.0,
      "distractorOverlap": 16.0,
      "boxAmbiguity": 40.0,
      "evidenceThreshold": 66.0
    },
    "metrics": {
      "proposalRecall": 73.9,
      "textRegionScore": 84.0,
      "longTailRecall": 78.1,
      "localizedEvidence": 86.8,
      "unsupportedRisk": 20.1,
      "readiness": 82.8
    },
    "evidenceDelta": 23.2,
    "riskDelta": -1.1,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-visible/distractor-pack",
    "caseId": "rare-visible",
    "caseTitle": "Rare visible object",
    "probeId": "distractor-pack",
    "probeTitle": "Distractor pack",
    "controls": {
      "queryRarity": 74.0,
      "distractorOverlap": 38.0,
      "boxAmbiguity": 50.0,
      "evidenceThreshold": 68.0
    },
    "metrics": {
      "proposalRecall": 67.8,
      "textRegionScore": 78.8,
      "longTailRecall": 74.1,
      "localizedEvidence": 84.0,
      "unsupportedRisk": 27.6,
      "readiness": 78.2
    },
    "evidenceDelta": 20.4,
    "riskDelta": 6.4,
    "failureLevel": "watch",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-visible/unsupported-pressure",
    "caseId": "rare-visible",
    "caseTitle": "Rare visible object",
    "probeId": "unsupported-pressure",
    "probeTitle": "Unsupported pressure",
    "controls": {
      "queryRarity": 84.0,
      "distractorOverlap": 34.0,
      "boxAmbiguity": 54.0,
      "evidenceThreshold": 44.0
    },
    "metrics": {
      "proposalRecall": 63.7,
      "textRegionScore": 75.7,
      "longTailRecall": 71.9,
      "localizedEvidence": 82.2,
      "unsupportedRisk": 31.8,
      "readiness": 75.6
    },
    "evidenceDelta": 18.6,
    "riskDelta": 10.6,
    "failureLevel": "watch",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-distractors/clean-confirmation",
    "caseId": "rare-distractors",
    "caseTitle": "Rare object with distractors",
    "probeId": "clean-confirmation",
    "probeTitle": "Clean confirmation",
    "controls": {
      "queryRarity": 78.0,
      "distractorOverlap": 28.0,
      "boxAmbiguity": 28.0,
      "evidenceThreshold": 76.0
    },
    "metrics": {
      "proposalRecall": 76.0,
      "textRegionScore": 83.6,
      "longTailRecall": 81.4,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 19.0,
      "readiness": 83.8
    },
    "evidenceDelta": -8.5,
    "riskDelta": 10.1,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-distractors/rare-synonym",
    "caseId": "rare-distractors",
    "caseTitle": "Rare object with distractors",
    "probeId": "rare-synonym",
    "probeTitle": "Rare synonym",
    "controls": {
      "queryRarity": 92.0,
      "distractorOverlap": 32.0,
      "boxAmbiguity": 34.0,
      "evidenceThreshold": 80.0
    },
    "metrics": {
      "proposalRecall": 73.1,
      "textRegionScore": 82.6,
      "longTailRecall": 82.6,
      "localizedEvidence": 86.2,
      "unsupportedRisk": 22.9,
      "readiness": 82.7
    },
    "evidenceDelta": -9.4,
    "riskDelta": 14.0,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-distractors/distractor-pack",
    "caseId": "rare-distractors",
    "caseTitle": "Rare object with distractors",
    "probeId": "distractor-pack",
    "probeTitle": "Distractor pack",
    "controls": {
      "queryRarity": 86.0,
      "distractorOverlap": 54.0,
      "boxAmbiguity": 44.0,
      "evidenceThreshold": 82.0
    },
    "metrics": {
      "proposalRecall": 66.9,
      "textRegionScore": 77.4,
      "longTailRecall": 78.6,
      "localizedEvidence": 83.4,
      "unsupportedRisk": 30.4,
      "readiness": 78.1
    },
    "evidenceDelta": -12.2,
    "riskDelta": 21.5,
    "failureLevel": "watch",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-distractors/unsupported-pressure",
    "caseId": "rare-distractors",
    "caseTitle": "Rare object with distractors",
    "probeId": "unsupported-pressure",
    "probeTitle": "Unsupported pressure",
    "controls": {
      "queryRarity": 96.0,
      "distractorOverlap": 50.0,
      "boxAmbiguity": 48.0,
      "evidenceThreshold": 58.0
    },
    "metrics": {
      "proposalRecall": 62.8,
      "textRegionScore": 74.3,
      "longTailRecall": 76.3,
      "localizedEvidence": 81.6,
      "unsupportedRisk": 34.5,
      "readiness": 75.5
    },
    "evidenceDelta": -14.0,
    "riskDelta": 25.6,
    "failureLevel": "watch",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "unsupported-query/clean-confirmation",
    "caseId": "unsupported-query",
    "caseTitle": "Unsupported text query",
    "probeId": "clean-confirmation",
    "probeTitle": "Clean confirmation",
    "controls": {
      "queryRarity": 82.0,
      "distractorOverlap": 30.0,
      "boxAmbiguity": 32.0,
      "evidenceThreshold": 84.0
    },
    "metrics": {
      "proposalRecall": 75.3,
      "textRegionScore": 84.0,
      "longTailRecall": 82.1,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 20.1,
      "readiness": 83.8
    },
    "evidenceDelta": 31.1,
    "riskDelta": -3.8,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "unsupported-query/rare-synonym",
    "caseId": "unsupported-query",
    "caseTitle": "Unsupported text query",
    "probeId": "rare-synonym",
    "probeTitle": "Rare synonym",
    "controls": {
      "queryRarity": 96.0,
      "distractorOverlap": 34.0,
      "boxAmbiguity": 38.0,
      "evidenceThreshold": 88.0
    },
    "metrics": {
      "proposalRecall": 72.4,
      "textRegionScore": 83.1,
      "longTailRecall": 83.3,
      "localizedEvidence": 86.2,
      "unsupportedRisk": 23.9,
      "readiness": 82.8
    },
    "evidenceDelta": 30.2,
    "riskDelta": 0.0,
    "failureLevel": "clear",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "unsupported-query/distractor-pack",
    "caseId": "unsupported-query",
    "caseTitle": "Unsupported text query",
    "probeId": "distractor-pack",
    "probeTitle": "Distractor pack",
    "controls": {
      "queryRarity": 90.0,
      "distractorOverlap": 56.0,
      "boxAmbiguity": 48.0,
      "evidenceThreshold": 90.0
    },
    "metrics": {
      "proposalRecall": 66.3,
      "textRegionScore": 77.9,
      "longTailRecall": 79.2,
      "localizedEvidence": 83.4,
      "unsupportedRisk": 31.5,
      "readiness": 78.2
    },
    "evidenceDelta": 27.4,
    "riskDelta": 7.6,
    "failureLevel": "watch",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "unsupported-query/unsupported-pressure",
    "caseId": "unsupported-query",
    "caseTitle": "Unsupported text query",
    "probeId": "unsupported-pressure",
    "probeTitle": "Unsupported pressure",
    "controls": {
      "queryRarity": 100,
      "distractorOverlap": 52.0,
      "boxAmbiguity": 52.0,
      "evidenceThreshold": 66.0
    },
    "metrics": {
      "proposalRecall": 62.1,
      "textRegionScore": 74.7,
      "longTailRecall": 77.0,
      "localizedEvidence": 81.6,
      "unsupportedRisk": 35.6,
      "readiness": 75.5
    },
    "evidenceDelta": 25.6,
    "riskDelta": 11.7,
    "failureLevel": "watch",
    "sourceBenchPage": "cvpr-long-tail-grounding-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench",
      "execution": "transformers-grounding-dino-siglip-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const summary = {
  "demo": "cvpr-open-vocab-failure-hunt",
  "status": "release",
  "backlogGoal": "Open-vocabulary failure hunt",
  "backlogTasksCovered": 3,
  "theme": "Naming and locating what's in the picture",
  "system": "open-vocab-visual-search",
  "bench": "cvpr-long-tail-grounding-bench",
  "cases": 4,
  "probes": 4,
  "probeRows": 16,
  "clear": 10,
  "watch": 6,
  "hunt": 0,
  "gpuBackedCases": 4,
  "minLocalizedEvidence": 81.6,
  "maxUnsupportedRisk": 35.6,
  "avgReadiness": 80.3,
  "proPlusJob": "open-vocab-grounding",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
