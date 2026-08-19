export const stageEvidence = {
  "memory": 94,
  "physics": 94,
  "rollout": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "short-stable",
    "title": "Short stable rollout",
    "rolloutLength": 24,
    "identityDensity": 28,
    "physicsViolations": 14,
    "memoryWindow": 72
  },
  {
    "id": "crowded-memory",
    "title": "Crowded identity memory",
    "rolloutLength": 36,
    "identityDensity": 76,
    "physicsViolations": 26,
    "memoryWindow": 82
  },
  {
    "id": "contact-heavy",
    "title": "Contact-heavy prediction",
    "rolloutLength": 56,
    "identityDensity": 52,
    "physicsViolations": 20,
    "memoryWindow": 82
  },
  {
    "id": "long-rollout-drift",
    "title": "Long rollout drift",
    "rolloutLength": 66,
    "identityDensity": 68,
    "physicsViolations": 12,
    "memoryWindow": 92
  }
];
export const records = [
  {
    "id": "short-stable",
    "title": "Short stable rollout",
    "system": "video-world-model",
    "cluster": "Video generation and world models",
    "sourceStages": [
      "temporal-memory",
      "physics-consistency",
      "future-rollout"
    ],
    "controls": {
      "rolloutLength": 24,
      "identityDensity": 28,
      "physicsViolations": 14,
      "memoryWindow": 72
    },
    "metrics": {
      "memoryLoad": 26.6,
      "identityStability": 80.6,
      "contactConsistency": 86.6,
      "rolloutPlausibility": 85.7,
      "drift": 21.0,
      "readiness": 83.3
    },
    "cachedGpuMetrics": {
      "readiness": 86.1,
      "identityStability": 86.4,
      "contactConsistency": 85.9,
      "rolloutPlausibility": 85.8,
      "drift": 13.5,
      "memoryLoad": 24.0
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
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "crowded-memory",
    "title": "Crowded identity memory",
    "system": "video-world-model",
    "cluster": "Video generation and world models",
    "sourceStages": [
      "temporal-memory",
      "physics-consistency",
      "future-rollout"
    ],
    "controls": {
      "rolloutLength": 36,
      "identityDensity": 76,
      "physicsViolations": 26,
      "memoryWindow": 82
    },
    "metrics": {
      "memoryLoad": 43.8,
      "identityStability": 73.8,
      "contactConsistency": 79.4,
      "rolloutPlausibility": 80.0,
      "drift": 33.0,
      "readiness": 75.9
    },
    "cachedGpuMetrics": {
      "readiness": 80.3,
      "identityStability": 79.9,
      "contactConsistency": 82.6,
      "rolloutPlausibility": 79.5,
      "drift": 21.6,
      "memoryLoad": 40.3
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
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "contact-heavy",
    "title": "Contact-heavy prediction",
    "system": "video-world-model",
    "cluster": "Video generation and world models",
    "sourceStages": [
      "temporal-memory",
      "physics-consistency",
      "future-rollout"
    ],
    "controls": {
      "rolloutLength": 56,
      "identityDensity": 52,
      "physicsViolations": 20,
      "memoryWindow": 82
    },
    "metrics": {
      "memoryLoad": 42.5,
      "identityStability": 74.0,
      "contactConsistency": 83.6,
      "rolloutPlausibility": 77.1,
      "drift": 34.3,
      "readiness": 76.2
    },
    "cachedGpuMetrics": {
      "readiness": 81.9,
      "identityStability": 81.5,
      "contactConsistency": 84.3,
      "rolloutPlausibility": 80.9,
      "drift": 19.7,
      "memoryLoad": 38.8
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
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "long-rollout-drift",
    "title": "Long rollout drift",
    "system": "video-world-model",
    "cluster": "Video generation and world models",
    "sourceStages": [
      "temporal-memory",
      "physics-consistency",
      "future-rollout"
    ],
    "controls": {
      "rolloutLength": 66,
      "identityDensity": 68,
      "physicsViolations": 12,
      "memoryWindow": 92
    },
    "metrics": {
      "memoryLoad": 48.1,
      "identityStability": 72.7,
      "contactConsistency": 86.5,
      "rolloutPlausibility": 75.5,
      "drift": 36.1,
      "readiness": 75.9
    },
    "cachedGpuMetrics": {
      "readiness": 81.3,
      "identityStability": 79.0,
      "contactConsistency": 86.4,
      "rolloutPlausibility": 79.7,
      "drift": 20.7,
      "memoryLoad": 44.4
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
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "temporal-rollout",
    "caseId": "short-stable",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:05:38Z",
    "model": {
      "tracker": "torchvision-raft-small",
      "flow": "Raft_Small_Weights.C_T_V2",
      "rolloutProbe": "cuda-optical-flow-consistency"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 24,
        "identityDensity": 28,
        "physicsViolations": 14,
        "memoryWindow": 72
      },
      "asset": "synthetic://temporal/short-stable.mp4"
    },
    "outputs": {
      "identityTracks": "synthetic://temporal/short-stable-raft-tracks.json",
      "contactEvents": "synthetic://temporal/short-stable-contacts.json",
      "driftCurve": [
        2.7,
        5.4,
        8.1,
        10.8,
        13.5
      ],
      "rolloutPlausibility": 85.8,
      "flowProfile": {
        "meanMagnitude": 1.6017,
        "meanRoughness": 0.0288,
        "meanAcceleration": 0.1546,
        "elapsedMs": 1191.22,
        "pairs": 5
      }
    },
    "metrics": {
      "readiness": 86.1,
      "identityStability": 86.4,
      "contactConsistency": 85.9,
      "rolloutPlausibility": 85.8,
      "drift": 13.5,
      "memoryLoad": 24.0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "temporal-rollout",
    "caseId": "crowded-memory",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:05:38Z",
    "model": {
      "tracker": "torchvision-raft-small",
      "flow": "Raft_Small_Weights.C_T_V2",
      "rolloutProbe": "cuda-optical-flow-consistency"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 36,
        "identityDensity": 76,
        "physicsViolations": 26,
        "memoryWindow": 82
      },
      "asset": "synthetic://temporal/crowded-memory.mp4"
    },
    "outputs": {
      "identityTracks": "synthetic://temporal/crowded-memory-raft-tracks.json",
      "contactEvents": "synthetic://temporal/crowded-memory-contacts.json",
      "driftCurve": [
        4.3,
        8.6,
        12.9,
        17.2,
        21.6
      ],
      "rolloutPlausibility": 79.5,
      "flowProfile": {
        "meanMagnitude": 1.7887,
        "meanRoughness": 0.0288,
        "meanAcceleration": 0.0894,
        "elapsedMs": 168.5,
        "pairs": 5
      }
    },
    "metrics": {
      "readiness": 80.3,
      "identityStability": 79.9,
      "contactConsistency": 82.6,
      "rolloutPlausibility": 79.5,
      "drift": 21.6,
      "memoryLoad": 40.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "temporal-rollout",
    "caseId": "contact-heavy",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:05:38Z",
    "model": {
      "tracker": "torchvision-raft-small",
      "flow": "Raft_Small_Weights.C_T_V2",
      "rolloutProbe": "cuda-optical-flow-consistency"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 56,
        "identityDensity": 52,
        "physicsViolations": 20,
        "memoryWindow": 82
      },
      "asset": "synthetic://temporal/contact-heavy.mp4"
    },
    "outputs": {
      "identityTracks": "synthetic://temporal/contact-heavy-raft-tracks.json",
      "contactEvents": "synthetic://temporal/contact-heavy-contacts.json",
      "driftCurve": [
        3.9,
        7.9,
        11.8,
        15.7,
        19.7
      ],
      "rolloutPlausibility": 80.9,
      "flowProfile": {
        "meanMagnitude": 1.732,
        "meanRoughness": 0.0313,
        "meanAcceleration": 0.1067,
        "elapsedMs": 164.0,
        "pairs": 5
      }
    },
    "metrics": {
      "readiness": 81.9,
      "identityStability": 81.5,
      "contactConsistency": 84.3,
      "rolloutPlausibility": 80.9,
      "drift": 19.7,
      "memoryLoad": 38.8
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "temporal-rollout",
    "caseId": "long-rollout-drift",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:05:38Z",
    "model": {
      "tracker": "torchvision-raft-small",
      "flow": "Raft_Small_Weights.C_T_V2",
      "rolloutProbe": "cuda-optical-flow-consistency"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 66,
        "identityDensity": 68,
        "physicsViolations": 12,
        "memoryWindow": 92
      },
      "asset": "synthetic://temporal/long-rollout-drift.mp4"
    },
    "outputs": {
      "identityTracks": "synthetic://temporal/long-rollout-drift-raft-tracks.json",
      "contactEvents": "synthetic://temporal/long-rollout-drift-contacts.json",
      "driftCurve": [
        4.1,
        8.3,
        12.4,
        16.6,
        20.7
      ],
      "rolloutPlausibility": 79.7,
      "flowProfile": {
        "meanMagnitude": 1.8144,
        "meanRoughness": 0.0331,
        "meanAcceleration": 0.1629,
        "elapsedMs": 162.79,
        "pairs": 5
      }
    },
    "metrics": {
      "readiness": 81.3,
      "identityStability": 79.0,
      "contactConsistency": 86.4,
      "rolloutPlausibility": 79.7,
      "drift": 20.7,
      "memoryLoad": 44.4
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench",
      "execution": "torchvision-raft-small-temporal-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
