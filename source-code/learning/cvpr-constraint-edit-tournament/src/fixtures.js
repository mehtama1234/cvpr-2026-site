export const generationRecords = [
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
export const restorationRecords = [
  {
    "id": "mild-noise",
    "title": "Mild sensor noise",
    "system": "restoration-reliability-stack",
    "cluster": "Image restoration",
    "sourceStages": [
      "degradation-diagnosis",
      "fidelity-gate",
      "downstream-validation"
    ],
    "controls": {
      "blur": 18,
      "noise": 24,
      "compression": 18,
      "lowLight": 20,
      "hallucinationPenalty": 36
    },
    "metrics": {
      "degradationLoad": 21.6,
      "diagnosisConfidence": 83.8,
      "fidelityScore": 82.2,
      "artifactRisk": 24.7,
      "downstreamUtility": 85.3,
      "fabricatedDetailRisk": 25.8,
      "readiness": 82.0
    },
    "cachedGpuMetrics": {
      "readiness": 82.0,
      "downstreamUtility": 85.3,
      "fabricatedDetailRisk": 25.8,
      "fidelityScore": 82.2
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
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  },
  {
    "id": "compressed-low-light",
    "title": "Compressed low-light image",
    "system": "restoration-reliability-stack",
    "cluster": "Image restoration",
    "sourceStages": [
      "degradation-diagnosis",
      "fidelity-gate",
      "downstream-validation"
    ],
    "controls": {
      "blur": 32,
      "noise": 38,
      "compression": 54,
      "lowLight": 64,
      "hallucinationPenalty": 16
    },
    "metrics": {
      "degradationLoad": 43.6,
      "diagnosisConfidence": 75.7,
      "fidelityScore": 80.3,
      "artifactRisk": 37.4,
      "downstreamUtility": 80.9,
      "fabricatedDetailRisk": 29.4,
      "readiness": 77.7
    },
    "cachedGpuMetrics": {
      "readiness": 77.7,
      "downstreamUtility": 80.9,
      "fabricatedDetailRisk": 29.4,
      "fidelityScore": 80.3
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
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  },
  {
    "id": "motion-blur-task",
    "title": "Motion blur task frame",
    "system": "restoration-reliability-stack",
    "cluster": "Image restoration",
    "sourceStages": [
      "degradation-diagnosis",
      "fidelity-gate",
      "downstream-validation"
    ],
    "controls": {
      "blur": 64,
      "noise": 36,
      "compression": 38,
      "lowLight": 36,
      "hallucinationPenalty": 16
    },
    "metrics": {
      "degradationLoad": 41.2,
      "diagnosisConfidence": 74.2,
      "fidelityScore": 79.0,
      "artifactRisk": 30.4,
      "downstreamUtility": 81.5,
      "fabricatedDetailRisk": 26.5,
      "readiness": 77.7
    },
    "cachedGpuMetrics": {
      "readiness": 77.7,
      "downstreamUtility": 81.5,
      "fabricatedDetailRisk": 26.5,
      "fidelityScore": 79.0
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
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  },
  {
    "id": "over-restored-detail",
    "title": "Over-restored fine detail",
    "system": "restoration-reliability-stack",
    "cluster": "Image restoration",
    "sourceStages": [
      "degradation-diagnosis",
      "fidelity-gate",
      "downstream-validation"
    ],
    "controls": {
      "blur": 48,
      "noise": 54,
      "compression": 38,
      "lowLight": 56,
      "hallucinationPenalty": 18
    },
    "metrics": {
      "degradationLoad": 45.9,
      "diagnosisConfidence": 75.2,
      "fidelityScore": 80.1,
      "artifactRisk": 35.1,
      "downstreamUtility": 81.2,
      "fabricatedDetailRisk": 28.6,
      "readiness": 77.8
    },
    "cachedGpuMetrics": {
      "readiness": 77.8,
      "downstreamUtility": 81.2,
      "fabricatedDetailRisk": 28.6,
      "fidelityScore": 80.1
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
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  }
];
export const policies = [
  {
    "id": "identity-first",
    "title": "Identity first",
    "constraintWeight": 0.4,
    "identityWeight": 0.3,
    "restorationWeight": 0.18,
    "riskWeight": 0.12
  },
  {
    "id": "layout-first",
    "title": "Layout first",
    "constraintWeight": 0.46,
    "identityWeight": 0.2,
    "restorationWeight": 0.22,
    "riskWeight": 0.12
  },
  {
    "id": "restoration-first",
    "title": "Restoration first",
    "constraintWeight": 0.3,
    "identityWeight": 0.2,
    "restorationWeight": 0.36,
    "riskWeight": 0.14
  }
];
export const tournamentRows = [
  {
    "id": "light-layout-edit/mild-noise/identity-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 82.1,
      "riskScore": 74.2,
      "tournamentScore": 83.1
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/mild-noise/layout-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 82.1,
      "riskScore": 74.2,
      "tournamentScore": 83.1
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/mild-noise/restoration-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 82.1,
      "riskScore": 74.2,
      "tournamentScore": 82.4
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/compressed-low-light/identity-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 81.1
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/compressed-low-light/layout-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 81.0
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/compressed-low-light/restoration-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 79.6
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/motion-blur-task/identity-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 79.1,
      "riskScore": 69.6,
      "tournamentScore": 82.0
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/motion-blur-task/layout-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 79.1,
      "riskScore": 69.6,
      "tournamentScore": 81.9
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/motion-blur-task/restoration-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 79.1,
      "riskScore": 69.6,
      "tournamentScore": 80.6
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/over-restored-detail/identity-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 81.4
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/over-restored-detail/layout-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 81.3
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "light-layout-edit/over-restored-detail/restoration-first",
    "generationCaseId": "light-layout-edit",
    "generationCase": "Light layout edit",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 85.4,
      "identityScore": 84.0,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 80.0
    },
    "decision": "release",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/mild-noise/identity-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 82.1,
      "riskScore": 68.2,
      "tournamentScore": 77.0
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/mild-noise/layout-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 82.1,
      "riskScore": 68.2,
      "tournamentScore": 77.6
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/mild-noise/restoration-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 82.1,
      "riskScore": 68.2,
      "tournamentScore": 77.8
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/compressed-low-light/identity-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 75.8
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/compressed-low-light/layout-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 76.2
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/compressed-low-light/restoration-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 75.8
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/motion-blur-task/identity-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 79.1,
      "riskScore": 68.2,
      "tournamentScore": 76.5
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/motion-blur-task/layout-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 79.1,
      "riskScore": 68.2,
      "tournamentScore": 76.9
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/motion-blur-task/restoration-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 79.1,
      "riskScore": 68.2,
      "tournamentScore": 76.7
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/over-restored-detail/identity-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.1
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/over-restored-detail/layout-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.5
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "style-with-locks/over-restored-detail/restoration-first",
    "generationCaseId": "style-with-locks",
    "generationCase": "Style edit with locks",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.2,
      "identityScore": 74.8,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.2
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/mild-noise/identity-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 82.1,
      "riskScore": 66.9,
      "tournamentScore": 77.0
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/mild-noise/layout-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 82.1,
      "riskScore": 66.9,
      "tournamentScore": 77.5
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/mild-noise/restoration-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 82.1,
      "riskScore": 66.9,
      "tournamentScore": 77.7
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/compressed-low-light/identity-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 75.9
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/compressed-low-light/layout-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 76.3
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/compressed-low-light/restoration-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 75.9
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/motion-blur-task/identity-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 79.1,
      "riskScore": 66.9,
      "tournamentScore": 76.4
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/motion-blur-task/layout-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 79.1,
      "riskScore": 66.9,
      "tournamentScore": 76.8
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/motion-blur-task/restoration-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 79.1,
      "riskScore": 66.9,
      "tournamentScore": 76.6
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/over-restored-detail/identity-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.2
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/over-restored-detail/layout-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.6
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "layout-rewrite/over-restored-detail/restoration-first",
    "generationCaseId": "layout-rewrite",
    "generationCase": "Aggressive layout rewrite",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.1,
      "identityScore": 75.2,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.3
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/mild-noise/identity-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 82.1,
      "riskScore": 65.2,
      "tournamentScore": 76.7
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/mild-noise/layout-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 82.1,
      "riskScore": 65.2,
      "tournamentScore": 77.4
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/mild-noise/restoration-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "mild-noise",
    "restorationCase": "Mild sensor noise",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 82.1,
      "riskScore": 65.2,
      "tournamentScore": 77.4
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/compressed-low-light/identity-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 75.8
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/compressed-low-light/layout-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 76.4
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/compressed-low-light/restoration-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "compressed-low-light",
    "restorationCase": "Compressed low-light image",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 78.8,
      "riskScore": 62.6,
      "tournamentScore": 75.9
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/motion-blur-task/identity-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 79.1,
      "riskScore": 65.2,
      "tournamentScore": 76.2
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/motion-blur-task/layout-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 79.1,
      "riskScore": 65.2,
      "tournamentScore": 76.8
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/motion-blur-task/restoration-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "motion-blur-task",
    "restorationCase": "Motion blur task frame",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 79.1,
      "riskScore": 65.2,
      "tournamentScore": 76.3
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/over-restored-detail/identity-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "identity-first",
    "policy": "Identity first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.1
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/over-restored-detail/layout-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "layout-first",
    "policy": "Layout first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.7
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  },
  {
    "id": "prompt-attack-edit/over-restored-detail/restoration-first",
    "generationCaseId": "prompt-attack-edit",
    "generationCase": "Prompt attack edit",
    "restorationCaseId": "over-restored-detail",
    "restorationCase": "Over-restored fine detail",
    "policyId": "restoration-first",
    "policy": "Restoration first",
    "scores": {
      "constraintScore": 79.9,
      "identityScore": 73.9,
      "restorationScore": 79.0,
      "riskScore": 64.9,
      "tournamentScore": 76.3
    },
    "decision": "review",
    "generationBench": "cvpr-constraint-generation-bench",
    "restorationBench": "cvpr-restoration-fidelity-bench",
    "runtimeEvidence": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "provenance": [
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-constraint-generation-bench"
      },
      {
        "runtime": "google-colab-pro-plus",
        "accelerator": "GPU",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "sourceBench": "cvpr-restoration-fidelity-bench"
      }
    ]
  }
];
export const summary = {
  "demo": "cvpr-constraint-edit-tournament",
  "status": "release",
  "backlogGoal": "Constraint edit tournament",
  "backlogTasksCovered": 3,
  "theme": "Making pixels from meaning",
  "systems": [
    "controllable-generation-studio",
    "restoration-reliability-stack"
  ],
  "benches": [
    "cvpr-constraint-generation-bench",
    "cvpr-restoration-fidelity-bench"
  ],
  "generationCases": 4,
  "restorationCases": 4,
  "policies": 3,
  "matches": 48,
  "release": 9,
  "review": 39,
  "block": 0,
  "gpuBackedCases": 8,
  "minConstraintScore": 79.1,
  "maxJointRisk": 37.4,
  "avgTournamentScore": 77.8,
  "proPlusJobs": [
    "constraint-generation",
    "restoration-fidelity"
  ],
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
