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
      "readiness": 83.3,
      "identityStability": 80.6,
      "contactConsistency": 86.6,
      "rolloutPlausibility": 85.7,
      "drift": 21.0,
      "memoryLoad": 26.6
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
      "sourceBench": "cvpr-temporal-rollout-bench"
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
      "readiness": 75.9,
      "identityStability": 73.8,
      "contactConsistency": 79.4,
      "rolloutPlausibility": 80.0,
      "drift": 33.0,
      "memoryLoad": 43.8
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
      "sourceBench": "cvpr-temporal-rollout-bench"
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
      "readiness": 76.2,
      "identityStability": 74.0,
      "contactConsistency": 83.6,
      "rolloutPlausibility": 77.1,
      "drift": 34.3,
      "memoryLoad": 42.5
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
      "sourceBench": "cvpr-temporal-rollout-bench"
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
      "readiness": 75.9,
      "identityStability": 72.7,
      "contactConsistency": 86.5,
      "rolloutPlausibility": 75.5,
      "drift": 36.1,
      "memoryLoad": 48.1
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
      "sourceBench": "cvpr-temporal-rollout-bench"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "temporal-rollout",
    "caseId": "short-stable",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "tracker": "video-feature-tracker",
      "flow": "raft-lite",
      "rolloutProbe": "world-rollout-probe"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 24,
        "identityDensity": 28,
        "physicsViolations": 14,
        "memoryWindow": 72
      },
      "asset": "fixtures/temporal/short-stable.mp4"
    },
    "outputs": {
      "identityTracks": "fixtures/temporal/short-stable-identity-tracks.json",
      "contactEvents": "fixtures/temporal/short-stable-contacts.json",
      "driftCurve": [
        5.2,
        10.5,
        15.8,
        21.0
      ],
      "rolloutPlausibility": 85.7
    },
    "metrics": {
      "readiness": 83.3,
      "identityStability": 80.6,
      "contactConsistency": 86.6,
      "rolloutPlausibility": 85.7,
      "drift": 21.0,
      "memoryLoad": 26.6
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench"
    }
  },
  {
    "jobId": "temporal-rollout",
    "caseId": "crowded-memory",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "tracker": "video-feature-tracker",
      "flow": "raft-lite",
      "rolloutProbe": "world-rollout-probe"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 36,
        "identityDensity": 76,
        "physicsViolations": 26,
        "memoryWindow": 82
      },
      "asset": "fixtures/temporal/crowded-memory.mp4"
    },
    "outputs": {
      "identityTracks": "fixtures/temporal/crowded-memory-identity-tracks.json",
      "contactEvents": "fixtures/temporal/crowded-memory-contacts.json",
      "driftCurve": [
        8.2,
        16.5,
        24.8,
        33.0
      ],
      "rolloutPlausibility": 80.0
    },
    "metrics": {
      "readiness": 75.9,
      "identityStability": 73.8,
      "contactConsistency": 79.4,
      "rolloutPlausibility": 80.0,
      "drift": 33.0,
      "memoryLoad": 43.8
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench"
    }
  },
  {
    "jobId": "temporal-rollout",
    "caseId": "contact-heavy",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "tracker": "video-feature-tracker",
      "flow": "raft-lite",
      "rolloutProbe": "world-rollout-probe"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 56,
        "identityDensity": 52,
        "physicsViolations": 20,
        "memoryWindow": 82
      },
      "asset": "fixtures/temporal/contact-heavy.mp4"
    },
    "outputs": {
      "identityTracks": "fixtures/temporal/contact-heavy-identity-tracks.json",
      "contactEvents": "fixtures/temporal/contact-heavy-contacts.json",
      "driftCurve": [
        8.6,
        17.1,
        25.7,
        34.3
      ],
      "rolloutPlausibility": 77.1
    },
    "metrics": {
      "readiness": 76.2,
      "identityStability": 74.0,
      "contactConsistency": 83.6,
      "rolloutPlausibility": 77.1,
      "drift": 34.3,
      "memoryLoad": 42.5
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench"
    }
  },
  {
    "jobId": "temporal-rollout",
    "caseId": "long-rollout-drift",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "tracker": "video-feature-tracker",
      "flow": "raft-lite",
      "rolloutProbe": "world-rollout-probe"
    },
    "inputs": {
      "trackingControls": {
        "rolloutLength": 66,
        "identityDensity": 68,
        "physicsViolations": 12,
        "memoryWindow": 92
      },
      "asset": "fixtures/temporal/long-rollout-drift.mp4"
    },
    "outputs": {
      "identityTracks": "fixtures/temporal/long-rollout-drift-identity-tracks.json",
      "contactEvents": "fixtures/temporal/long-rollout-drift-contacts.json",
      "driftCurve": [
        9.0,
        18.1,
        27.1,
        36.1
      ],
      "rolloutPlausibility": 75.5
    },
    "metrics": {
      "readiness": 75.9,
      "identityStability": 72.7,
      "contactConsistency": 86.5,
      "rolloutPlausibility": 75.5,
      "drift": 36.1,
      "memoryLoad": 48.1
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-temporal-rollout-bench"
    }
  }
];
