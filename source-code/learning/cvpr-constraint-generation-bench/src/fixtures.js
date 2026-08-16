export const stageEvidence = {
  "layout": 94,
  "identity": 94,
  "reward": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "light-layout-edit",
    "title": "Light layout edit",
    "editStrength": 24,
    "layoutLock": 78,
    "identityLock": 82,
    "adversarialPromptPressure": 18
  },
  {
    "id": "style-with-locks",
    "title": "Style edit with locks",
    "editStrength": 52,
    "layoutLock": 68,
    "identityLock": 80,
    "adversarialPromptPressure": 32
  },
  {
    "id": "layout-rewrite",
    "title": "Aggressive layout rewrite",
    "editStrength": 72,
    "layoutLock": 62,
    "identityLock": 92,
    "adversarialPromptPressure": 28
  },
  {
    "id": "prompt-attack-edit",
    "title": "Prompt attack edit",
    "editStrength": 78,
    "layoutLock": 66,
    "identityLock": 92,
    "adversarialPromptPressure": 28
  }
];
export const records = [
  {
    "id": "light-layout-edit",
    "title": "Light layout edit",
    "system": "controllable-generation-studio",
    "cluster": "Controllable generation",
    "sourceStages": [
      "layout-control",
      "identity-preservation",
      "preference-reward"
    ],
    "controls": {
      "editStrength": 24,
      "layoutLock": 78,
      "identityLock": 82,
      "adversarialPromptPressure": 18
    },
    "metrics": {
      "editPressure": 21.0,
      "constraintSatisfaction": 86.1,
      "identityPreservation": 85.0,
      "editLocality": 82.8,
      "rewardAlignment": 87.3,
      "identityDamage": 18.5,
      "provenanceRisk": 17.6,
      "readiness": 84.9
    },
    "cachedGpuMetrics": {
      "readiness": 84.9,
      "editPressure": 21.0,
      "constraintSatisfaction": 86.1,
      "identityPreservation": 85.0,
      "editLocality": 82.8,
      "rewardAlignment": 87.3,
      "identityDamage": 18.5,
      "provenanceRisk": 17.6
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
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  },
  {
    "id": "style-with-locks",
    "title": "Style edit with locks",
    "system": "controllable-generation-studio",
    "cluster": "Controllable generation",
    "sourceStages": [
      "layout-control",
      "identity-preservation",
      "preference-reward"
    ],
    "controls": {
      "editStrength": 52,
      "layoutLock": 68,
      "identityLock": 80,
      "adversarialPromptPressure": 32
    },
    "metrics": {
      "editPressure": 39.2,
      "constraintSatisfaction": 80.9,
      "identityPreservation": 77.3,
      "editLocality": 74.4,
      "rewardAlignment": 81.3,
      "identityDamage": 31.8,
      "provenanceRisk": 29.5,
      "readiness": 77.4
    },
    "cachedGpuMetrics": {
      "readiness": 77.4,
      "editPressure": 39.2,
      "constraintSatisfaction": 80.9,
      "identityPreservation": 77.3,
      "editLocality": 74.4,
      "rewardAlignment": 81.3,
      "identityDamage": 31.8,
      "provenanceRisk": 29.5
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
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  },
  {
    "id": "layout-rewrite",
    "title": "Aggressive layout rewrite",
    "system": "controllable-generation-studio",
    "cluster": "Controllable generation",
    "sourceStages": [
      "layout-control",
      "identity-preservation",
      "preference-reward"
    ],
    "controls": {
      "editStrength": 72,
      "layoutLock": 62,
      "identityLock": 92,
      "adversarialPromptPressure": 28
    },
    "metrics": {
      "editPressure": 45.7,
      "constraintSatisfaction": 81.1,
      "identityPreservation": 78.4,
      "editLocality": 72.9,
      "rewardAlignment": 82.4,
      "identityDamage": 33.1,
      "provenanceRisk": 29.9,
      "readiness": 77.5
    },
    "cachedGpuMetrics": {
      "readiness": 77.5,
      "editPressure": 45.7,
      "constraintSatisfaction": 81.1,
      "identityPreservation": 78.4,
      "editLocality": 72.9,
      "rewardAlignment": 82.4,
      "identityDamage": 33.1,
      "provenanceRisk": 29.9
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
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  },
  {
    "id": "prompt-attack-edit",
    "title": "Prompt attack edit",
    "system": "controllable-generation-studio",
    "cluster": "Controllable generation",
    "sourceStages": [
      "layout-control",
      "identity-preservation",
      "preference-reward"
    ],
    "controls": {
      "editStrength": 78,
      "layoutLock": 66,
      "identityLock": 92,
      "adversarialPromptPressure": 28
    },
    "metrics": {
      "editPressure": 47.7,
      "constraintSatisfaction": 82.3,
      "identityPreservation": 77.3,
      "editLocality": 73.6,
      "rewardAlignment": 82.5,
      "identityDamage": 34.8,
      "provenanceRisk": 30.0,
      "readiness": 77.6
    },
    "cachedGpuMetrics": {
      "readiness": 77.6,
      "editPressure": 47.7,
      "constraintSatisfaction": 82.3,
      "identityPreservation": 77.3,
      "editLocality": 73.6,
      "rewardAlignment": 82.5,
      "identityDamage": 34.8,
      "provenanceRisk": 30.0
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
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "constraint-generation",
    "caseId": "light-layout-edit",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "layout": "layout-controlnet",
      "identity": "identity-embedding-lock",
      "reward": "preference-reward-probe"
    },
    "inputs": {
      "generationControls": {
        "editStrength": 24,
        "layoutLock": 78,
        "identityLock": 82,
        "adversarialPromptPressure": 18
      },
      "asset": "fixtures/generation/light-layout-edit.png"
    },
    "outputs": {
      "editedImage": "fixtures/generation/light-layout-edit-edited.png",
      "layoutMask": "fixtures/generation/light-layout-edit-layout-mask.png",
      "identityEmbeddingDelta": 18.5,
      "rewardTrace": "fixtures/generation/light-layout-edit-reward.json"
    },
    "metrics": {
      "readiness": 84.9,
      "editPressure": 21.0,
      "constraintSatisfaction": 86.1,
      "identityPreservation": 85.0,
      "editLocality": 82.8,
      "rewardAlignment": 87.3,
      "identityDamage": 18.5,
      "provenanceRisk": 17.6
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  },
  {
    "jobId": "constraint-generation",
    "caseId": "style-with-locks",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "layout": "layout-controlnet",
      "identity": "identity-embedding-lock",
      "reward": "preference-reward-probe"
    },
    "inputs": {
      "generationControls": {
        "editStrength": 52,
        "layoutLock": 68,
        "identityLock": 80,
        "adversarialPromptPressure": 32
      },
      "asset": "fixtures/generation/style-with-locks.png"
    },
    "outputs": {
      "editedImage": "fixtures/generation/style-with-locks-edited.png",
      "layoutMask": "fixtures/generation/style-with-locks-layout-mask.png",
      "identityEmbeddingDelta": 31.8,
      "rewardTrace": "fixtures/generation/style-with-locks-reward.json"
    },
    "metrics": {
      "readiness": 77.4,
      "editPressure": 39.2,
      "constraintSatisfaction": 80.9,
      "identityPreservation": 77.3,
      "editLocality": 74.4,
      "rewardAlignment": 81.3,
      "identityDamage": 31.8,
      "provenanceRisk": 29.5
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  },
  {
    "jobId": "constraint-generation",
    "caseId": "layout-rewrite",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "layout": "layout-controlnet",
      "identity": "identity-embedding-lock",
      "reward": "preference-reward-probe"
    },
    "inputs": {
      "generationControls": {
        "editStrength": 72,
        "layoutLock": 62,
        "identityLock": 92,
        "adversarialPromptPressure": 28
      },
      "asset": "fixtures/generation/layout-rewrite.png"
    },
    "outputs": {
      "editedImage": "fixtures/generation/layout-rewrite-edited.png",
      "layoutMask": "fixtures/generation/layout-rewrite-layout-mask.png",
      "identityEmbeddingDelta": 33.1,
      "rewardTrace": "fixtures/generation/layout-rewrite-reward.json"
    },
    "metrics": {
      "readiness": 77.5,
      "editPressure": 45.7,
      "constraintSatisfaction": 81.1,
      "identityPreservation": 78.4,
      "editLocality": 72.9,
      "rewardAlignment": 82.4,
      "identityDamage": 33.1,
      "provenanceRisk": 29.9
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  },
  {
    "jobId": "constraint-generation",
    "caseId": "prompt-attack-edit",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "layout": "layout-controlnet",
      "identity": "identity-embedding-lock",
      "reward": "preference-reward-probe"
    },
    "inputs": {
      "generationControls": {
        "editStrength": 78,
        "layoutLock": 66,
        "identityLock": 92,
        "adversarialPromptPressure": 28
      },
      "asset": "fixtures/generation/prompt-attack-edit.png"
    },
    "outputs": {
      "editedImage": "fixtures/generation/prompt-attack-edit-edited.png",
      "layoutMask": "fixtures/generation/prompt-attack-edit-layout-mask.png",
      "identityEmbeddingDelta": 34.8,
      "rewardTrace": "fixtures/generation/prompt-attack-edit-reward.json"
    },
    "metrics": {
      "readiness": 77.6,
      "editPressure": 47.7,
      "constraintSatisfaction": 82.3,
      "identityPreservation": 77.3,
      "editLocality": 73.6,
      "rewardAlignment": 82.5,
      "identityDamage": 34.8,
      "provenanceRisk": 30.0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-constraint-generation-bench"
    }
  }
];
