export const stageEvidence = {
  "diagnosis": 94,
  "fidelity": 94,
  "downstream": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "mild-noise",
    "title": "Mild sensor noise",
    "blur": 18,
    "noise": 24,
    "compression": 18,
    "lowLight": 20,
    "hallucinationPenalty": 36
  },
  {
    "id": "compressed-low-light",
    "title": "Compressed low-light image",
    "blur": 32,
    "noise": 38,
    "compression": 54,
    "lowLight": 64,
    "hallucinationPenalty": 16
  },
  {
    "id": "motion-blur-task",
    "title": "Motion blur task frame",
    "blur": 64,
    "noise": 36,
    "compression": 38,
    "lowLight": 36,
    "hallucinationPenalty": 16
  },
  {
    "id": "over-restored-detail",
    "title": "Over-restored fine detail",
    "blur": 48,
    "noise": 54,
    "compression": 38,
    "lowLight": 56,
    "hallucinationPenalty": 18
  }
];
export const records = [
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
export const cachedGpuResults = [
  {
    "jobId": "restoration-fidelity",
    "caseId": "mild-noise",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "restorer": "swinir-lightweight",
      "artifactProbe": "real-esrgan-x2"
    },
    "inputs": {
      "degradationControls": {
        "blur": 18,
        "noise": 24,
        "compression": 18,
        "lowLight": 20,
        "hallucinationPenalty": 36
      },
      "asset": "fixtures/restoration/mild-noise.png"
    },
    "outputs": {
      "restoredImage": "fixtures/restoration/mild-noise-restored.png",
      "artifactMap": "fixtures/restoration/mild-noise-artifact-map.png",
      "downstreamScore": 85.3,
      "fidelityScore": 82.2
    },
    "metrics": {
      "readiness": 82.0,
      "downstreamUtility": 85.3,
      "fabricatedDetailRisk": 25.8,
      "fidelityScore": 82.2
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  },
  {
    "jobId": "restoration-fidelity",
    "caseId": "compressed-low-light",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "restorer": "swinir-lightweight",
      "artifactProbe": "real-esrgan-x2"
    },
    "inputs": {
      "degradationControls": {
        "blur": 32,
        "noise": 38,
        "compression": 54,
        "lowLight": 64,
        "hallucinationPenalty": 16
      },
      "asset": "fixtures/restoration/compressed-low-light.png"
    },
    "outputs": {
      "restoredImage": "fixtures/restoration/compressed-low-light-restored.png",
      "artifactMap": "fixtures/restoration/compressed-low-light-artifact-map.png",
      "downstreamScore": 80.9,
      "fidelityScore": 80.3
    },
    "metrics": {
      "readiness": 77.7,
      "downstreamUtility": 80.9,
      "fabricatedDetailRisk": 29.4,
      "fidelityScore": 80.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  },
  {
    "jobId": "restoration-fidelity",
    "caseId": "motion-blur-task",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "restorer": "swinir-lightweight",
      "artifactProbe": "real-esrgan-x2"
    },
    "inputs": {
      "degradationControls": {
        "blur": 64,
        "noise": 36,
        "compression": 38,
        "lowLight": 36,
        "hallucinationPenalty": 16
      },
      "asset": "fixtures/restoration/motion-blur-task.png"
    },
    "outputs": {
      "restoredImage": "fixtures/restoration/motion-blur-task-restored.png",
      "artifactMap": "fixtures/restoration/motion-blur-task-artifact-map.png",
      "downstreamScore": 81.5,
      "fidelityScore": 79.0
    },
    "metrics": {
      "readiness": 77.7,
      "downstreamUtility": 81.5,
      "fabricatedDetailRisk": 26.5,
      "fidelityScore": 79.0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  },
  {
    "jobId": "restoration-fidelity",
    "caseId": "over-restored-detail",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "restorer": "swinir-lightweight",
      "artifactProbe": "real-esrgan-x2"
    },
    "inputs": {
      "degradationControls": {
        "blur": 48,
        "noise": 54,
        "compression": 38,
        "lowLight": 56,
        "hallucinationPenalty": 18
      },
      "asset": "fixtures/restoration/over-restored-detail.png"
    },
    "outputs": {
      "restoredImage": "fixtures/restoration/over-restored-detail-restored.png",
      "artifactMap": "fixtures/restoration/over-restored-detail-artifact-map.png",
      "downstreamScore": 81.2,
      "fidelityScore": 80.1
    },
    "metrics": {
      "readiness": 77.8,
      "downstreamUtility": 81.2,
      "fabricatedDetailRisk": 28.6,
      "fidelityScore": 80.1
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench"
    }
  }
];
