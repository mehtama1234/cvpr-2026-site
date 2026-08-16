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
      "proposalRecall": 82.8,
      "textRegionScore": 84.7,
      "longTailRecall": 71.7,
      "localizedEvidence": 88.9,
      "unsupportedRisk": 8.3,
      "readiness": 84.7
    },
    "cachedGpuMetrics": {
      "readiness": 84.7,
      "localizedEvidence": 88.9,
      "unsupportedRisk": 8.3
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
      "sourceBench": "cvpr-long-tail-grounding-bench"
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
      "proposalRecall": 76.8,
      "textRegionScore": 85.0,
      "longTailRecall": 76.9,
      "localizedEvidence": 87.7,
      "unsupportedRisk": 16.3,
      "readiness": 83.9
    },
    "cachedGpuMetrics": {
      "readiness": 83.9,
      "localizedEvidence": 87.7,
      "unsupportedRisk": 16.3
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
      "sourceBench": "cvpr-long-tail-grounding-bench"
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
      "proposalRecall": 76.0,
      "textRegionScore": 83.6,
      "longTailRecall": 81.4,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 19.0,
      "readiness": 83.8
    },
    "cachedGpuMetrics": {
      "readiness": 83.8,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 19.0
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
      "sourceBench": "cvpr-long-tail-grounding-bench"
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
      "proposalRecall": 75.3,
      "textRegionScore": 84.0,
      "longTailRecall": 82.1,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 20.1,
      "readiness": 83.8
    },
    "cachedGpuMetrics": {
      "readiness": 83.8,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 20.1
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
      "sourceBench": "cvpr-long-tail-grounding-bench"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "open-vocab-grounding",
    "caseId": "common-clean",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "siglip-base-patch16-224",
      "detector": "grounding-dino-tiny",
      "segmenter": "sam-vit-b"
    },
    "inputs": {
      "textQuery": "common clean object",
      "controls": {
        "queryRarity": 18,
        "distractorOverlap": 16,
        "boxAmbiguity": 18,
        "evidenceThreshold": 54
      },
      "asset": "fixtures/open-vocab/common-clean.png"
    },
    "outputs": {
      "boxes": [
        {
          "label": "target",
          "xywh": [
            0.18,
            0.22,
            0.26,
            0.24
          ],
          "score": 0.828
        },
        {
          "label": "distractor",
          "xywh": [
            0.56,
            0.26,
            0.21,
            0.2
          ],
          "score": 0.917
        }
      ],
      "regionScores": {
        "target": 84.7,
        "longTail": 71.7
      },
      "localizedEvidence": 88.9
    },
    "metrics": {
      "readiness": 84.7,
      "localizedEvidence": 88.9,
      "unsupportedRisk": 8.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench"
    }
  },
  {
    "jobId": "open-vocab-grounding",
    "caseId": "rare-visible",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "siglip-base-patch16-224",
      "detector": "grounding-dino-tiny",
      "segmenter": "sam-vit-b"
    },
    "inputs": {
      "textQuery": "rare visible object",
      "controls": {
        "queryRarity": 66,
        "distractorOverlap": 12,
        "boxAmbiguity": 34,
        "evidenceThreshold": 62
      },
      "asset": "fixtures/open-vocab/rare-visible.png"
    },
    "outputs": {
      "boxes": [
        {
          "label": "target",
          "xywh": [
            0.18,
            0.22,
            0.26,
            0.24
          ],
          "score": 0.768
        },
        {
          "label": "distractor",
          "xywh": [
            0.56,
            0.26,
            0.21,
            0.2
          ],
          "score": 0.837
        }
      ],
      "regionScores": {
        "target": 85.0,
        "longTail": 76.9
      },
      "localizedEvidence": 87.7
    },
    "metrics": {
      "readiness": 83.9,
      "localizedEvidence": 87.7,
      "unsupportedRisk": 16.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench"
    }
  },
  {
    "jobId": "open-vocab-grounding",
    "caseId": "rare-distractors",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "siglip-base-patch16-224",
      "detector": "grounding-dino-tiny",
      "segmenter": "sam-vit-b"
    },
    "inputs": {
      "textQuery": "rare object with distractors",
      "controls": {
        "queryRarity": 78,
        "distractorOverlap": 28,
        "boxAmbiguity": 28,
        "evidenceThreshold": 76
      },
      "asset": "fixtures/open-vocab/rare-distractors.png"
    },
    "outputs": {
      "boxes": [
        {
          "label": "target",
          "xywh": [
            0.18,
            0.22,
            0.26,
            0.24
          ],
          "score": 0.76
        },
        {
          "label": "distractor",
          "xywh": [
            0.56,
            0.26,
            0.21,
            0.2
          ],
          "score": 0.81
        }
      ],
      "regionScores": {
        "target": 83.6,
        "longTail": 81.4
      },
      "localizedEvidence": 87.1
    },
    "metrics": {
      "readiness": 83.8,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 19.0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench"
    }
  },
  {
    "jobId": "open-vocab-grounding",
    "caseId": "unsupported-query",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "siglip-base-patch16-224",
      "detector": "grounding-dino-tiny",
      "segmenter": "sam-vit-b"
    },
    "inputs": {
      "textQuery": "unsupported text query",
      "controls": {
        "queryRarity": 82,
        "distractorOverlap": 30,
        "boxAmbiguity": 32,
        "evidenceThreshold": 84
      },
      "asset": "fixtures/open-vocab/unsupported-query.png"
    },
    "outputs": {
      "boxes": [
        {
          "label": "target",
          "xywh": [
            0.18,
            0.22,
            0.26,
            0.24
          ],
          "score": 0.753
        },
        {
          "label": "distractor",
          "xywh": [
            0.56,
            0.26,
            0.21,
            0.2
          ],
          "score": 0.799
        }
      ],
      "regionScores": {
        "target": 84.0,
        "longTail": 82.1
      },
      "localizedEvidence": 87.1
    },
    "metrics": {
      "readiness": 83.8,
      "localizedEvidence": 87.1,
      "unsupportedRisk": 20.1
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-long-tail-grounding-bench"
    }
  }
];
