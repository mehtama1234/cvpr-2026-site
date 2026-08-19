export const stageEvidence = {
  "grounding": 94,
  "retrieval": 94,
  "inspection": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "common-clean",
    "title": "Common clean object",
    "queryRarity": 18,
    "distractorOverlap": 16,
    "boxAmbiguity": 18,
    "evidenceThreshold": 54
  },
  {
    "id": "rare-visible",
    "title": "Rare visible object",
    "queryRarity": 66,
    "distractorOverlap": 12,
    "boxAmbiguity": 34,
    "evidenceThreshold": 62
  },
  {
    "id": "rare-distractors",
    "title": "Rare object with distractors",
    "queryRarity": 78,
    "distractorOverlap": 28,
    "boxAmbiguity": 28,
    "evidenceThreshold": 76
  },
  {
    "id": "unsupported-query",
    "title": "Unsupported text query",
    "queryRarity": 82,
    "distractorOverlap": 30,
    "boxAmbiguity": 32,
    "evidenceThreshold": 84
  }
];
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
export const cachedGpuResults = [
  {
    "jobId": "open-vocab-grounding",
    "caseId": "common-clean",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:01:17Z",
    "model": {
      "embedding": "google/siglip-base-patch16-224",
      "detector": "IDEA-Research/grounding-dino-tiny"
    },
    "inputs": {
      "textQuery": "teal rectangle.",
      "controls": {
        "queryRarity": 18,
        "distractorOverlap": 16,
        "boxAmbiguity": 18,
        "evidenceThreshold": 54
      },
      "asset": "synthetic://common-clean"
    },
    "outputs": {
      "boxes": [
        {
          "label": "teal rectangle",
          "xywh": [
            0.178,
            0.216,
            0.305,
            0.288
          ],
          "score": 0.742
        },
        {
          "label": "teal rectangle",
          "xywh": [
            0.512,
            0.255,
            0.272,
            0.266
          ],
          "score": 0.417
        }
      ],
      "regionScores": {
        "target": 26.8,
        "longTail": 39.7
      },
      "embeddingScore": 8.3,
      "localizedEvidence": 50.2
    },
    "metrics": {
      "readiness": 48.0,
      "proposalRecall": 74.2,
      "textRegionScore": 26.8,
      "longTailRecall": 39.7,
      "localizedEvidence": 50.2,
      "unsupportedRisk": 21.0
    },
    "provenance": {
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
    "jobId": "open-vocab-grounding",
    "caseId": "rare-visible",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:01:18Z",
    "model": {
      "embedding": "google/siglip-base-patch16-224",
      "detector": "IDEA-Research/grounding-dino-tiny"
    },
    "inputs": {
      "textQuery": "teal target rectangle.",
      "controls": {
        "queryRarity": 66,
        "distractorOverlap": 12,
        "boxAmbiguity": 34,
        "evidenceThreshold": 62
      },
      "asset": "synthetic://rare-visible"
    },
    "outputs": {
      "boxes": [
        {
          "label": "teal target rectangle",
          "xywh": [
            0.178,
            0.216,
            0.305,
            0.288
          ],
          "score": 0.752
        },
        {
          "label": "teal target rectangle",
          "xywh": [
            0.522,
            0.256,
            0.273,
            0.266
          ],
          "score": 0.381
        }
      ],
      "regionScores": {
        "target": 26.7,
        "longTail": 43.2
      },
      "embeddingScore": 7.8,
      "localizedEvidence": 52.2
    },
    "metrics": {
      "readiness": 49.4,
      "proposalRecall": 75.2,
      "textRegionScore": 26.7,
      "longTailRecall": 43.2,
      "localizedEvidence": 52.2,
      "unsupportedRisk": 21.2
    },
    "provenance": {
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
    "jobId": "open-vocab-grounding",
    "caseId": "rare-distractors",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:01:18Z",
    "model": {
      "embedding": "google/siglip-base-patch16-224",
      "detector": "IDEA-Research/grounding-dino-tiny"
    },
    "inputs": {
      "textQuery": "teal target rectangle near orange distractor.",
      "controls": {
        "queryRarity": 78,
        "distractorOverlap": 28,
        "boxAmbiguity": 28,
        "evidenceThreshold": 76
      },
      "asset": "synthetic://rare-distractors"
    },
    "outputs": {
      "boxes": [
        {
          "label": "teal target rectangle orange distract",
          "xywh": [
            0.177,
            0.216,
            0.307,
            0.289
          ],
          "score": 0.794
        },
        {
          "label": "orange distractor",
          "xywh": [
            0.484,
            0.257,
            0.273,
            0.266
          ],
          "score": 0.587
        }
      ],
      "regionScores": {
        "target": 93.1,
        "longTail": 85.2
      },
      "embeddingScore": 98.4,
      "localizedEvidence": 84.5
    },
    "metrics": {
      "readiness": 88.0,
      "proposalRecall": 79.4,
      "textRegionScore": 93.1,
      "longTailRecall": 85.2,
      "localizedEvidence": 84.5,
      "unsupportedRisk": 8.9
    },
    "provenance": {
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
    "jobId": "open-vocab-grounding",
    "caseId": "unsupported-query",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:01:18Z",
    "model": {
      "embedding": "google/siglip-base-patch16-224",
      "detector": "IDEA-Research/grounding-dino-tiny"
    },
    "inputs": {
      "textQuery": "transparent glass elephant.",
      "controls": {
        "queryRarity": 82,
        "distractorOverlap": 30,
        "boxAmbiguity": 32,
        "evidenceThreshold": 84
      },
      "asset": "synthetic://unsupported-query"
    },
    "outputs": {
      "boxes": [
        {
          "label": "transparent glass elephant",
          "xywh": [
            0.178,
            0.216,
            0.304,
            0.288
          ],
          "score": 0.606
        },
        {
          "label": "transparent glass elephant",
          "xywh": [
            0.48,
            0.256,
            0.271,
            0.266
          ],
          "score": 0.524
        },
        {
          "label": "transparent glass elephant",
          "xywh": [
            0.178,
            0.216,
            0.575,
            0.306
          ],
          "score": 0.285
        }
      ],
      "regionScores": {
        "target": 17.0,
        "longTail": 40.6
      },
      "embeddingScore": 0.0,
      "localizedEvidence": 47.0
    },
    "metrics": {
      "readiness": 44.0,
      "proposalRecall": 60.6,
      "textRegionScore": 17.0,
      "longTailRecall": 40.6,
      "localizedEvidence": 47.0,
      "unsupportedRisk": 24.9
    },
    "provenance": {
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
