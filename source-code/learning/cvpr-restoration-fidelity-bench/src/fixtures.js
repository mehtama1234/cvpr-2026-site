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
      "readiness": 81.6,
      "degradationLoad": 21.6,
      "diagnosisConfidence": 78.4,
      "fidelityScore": 80.6,
      "artifactRisk": 19.3,
      "downstreamUtility": 85.1,
      "fabricatedDetailRisk": 19.3
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
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
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
      "readiness": 78.5,
      "degradationLoad": 43.6,
      "diagnosisConfidence": 56.4,
      "fidelityScore": 85.2,
      "artifactRisk": 13.0,
      "downstreamUtility": 78.8,
      "fabricatedDetailRisk": 13.0
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
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
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
      "readiness": 80.5,
      "degradationLoad": 41.2,
      "diagnosisConfidence": 58.8,
      "fidelityScore": 85.0,
      "artifactRisk": 10.9,
      "downstreamUtility": 82.6,
      "fabricatedDetailRisk": 10.9
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
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
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
      "readiness": 78.9,
      "degradationLoad": 45.9,
      "diagnosisConfidence": 54.1,
      "fidelityScore": 85.8,
      "artifactRisk": 13.4,
      "downstreamUtility": 81.2,
      "fabricatedDetailRisk": 13.4
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
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "restoration-fidelity",
    "caseId": "mild-noise",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:02:40Z",
    "model": {
      "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
      "artifactProbe": "pixel-delta-artifact-map"
    },
    "inputs": {
      "degradationControls": {
        "blur": 18,
        "noise": 24,
        "compression": 18,
        "lowLight": 20,
        "hallucinationPenalty": 36
      },
      "asset": "synthetic://mild-noise"
    },
    "outputs": {
      "restoredImage": "synthetic://restoration/mild-noise-restored.png",
      "artifactMap": "synthetic://restoration/mild-noise-artifact-map.png",
      "downstreamScore": 85.1,
      "fidelityScore": 80.6,
      "deltaScore": 2.102
    },
    "metrics": {
      "readiness": 81.6,
      "degradationLoad": 21.6,
      "diagnosisConfidence": 78.4,
      "fidelityScore": 80.6,
      "artifactRisk": 19.3,
      "downstreamUtility": 85.1,
      "fabricatedDetailRisk": 19.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "restoration-fidelity",
    "caseId": "compressed-low-light",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:02:42Z",
    "model": {
      "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
      "artifactProbe": "pixel-delta-artifact-map"
    },
    "inputs": {
      "degradationControls": {
        "blur": 32,
        "noise": 38,
        "compression": 54,
        "lowLight": 64,
        "hallucinationPenalty": 16
      },
      "asset": "synthetic://compressed-low-light"
    },
    "outputs": {
      "restoredImage": "synthetic://restoration/compressed-low-light-restored.png",
      "artifactMap": "synthetic://restoration/compressed-low-light-artifact-map.png",
      "downstreamScore": 78.8,
      "fidelityScore": 85.2,
      "deltaScore": 1.12
    },
    "metrics": {
      "readiness": 78.5,
      "degradationLoad": 43.6,
      "diagnosisConfidence": 56.4,
      "fidelityScore": 85.2,
      "artifactRisk": 13.0,
      "downstreamUtility": 78.8,
      "fabricatedDetailRisk": 13.0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "restoration-fidelity",
    "caseId": "motion-blur-task",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:02:43Z",
    "model": {
      "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
      "artifactProbe": "pixel-delta-artifact-map"
    },
    "inputs": {
      "degradationControls": {
        "blur": 64,
        "noise": 36,
        "compression": 38,
        "lowLight": 36,
        "hallucinationPenalty": 16
      },
      "asset": "synthetic://motion-blur-task"
    },
    "outputs": {
      "restoredImage": "synthetic://restoration/motion-blur-task-restored.png",
      "artifactMap": "synthetic://restoration/motion-blur-task-artifact-map.png",
      "downstreamScore": 82.6,
      "fidelityScore": 85.0,
      "deltaScore": 1.597
    },
    "metrics": {
      "readiness": 80.5,
      "degradationLoad": 41.2,
      "diagnosisConfidence": 58.8,
      "fidelityScore": 85.0,
      "artifactRisk": 10.9,
      "downstreamUtility": 82.6,
      "fabricatedDetailRisk": 10.9
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "restoration-fidelity",
    "caseId": "over-restored-detail",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:02:45Z",
    "model": {
      "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
      "artifactProbe": "pixel-delta-artifact-map"
    },
    "inputs": {
      "degradationControls": {
        "blur": 48,
        "noise": 54,
        "compression": 38,
        "lowLight": 56,
        "hallucinationPenalty": 18
      },
      "asset": "synthetic://over-restored-detail"
    },
    "outputs": {
      "restoredImage": "synthetic://restoration/over-restored-detail-restored.png",
      "artifactMap": "synthetic://restoration/over-restored-detail-artifact-map.png",
      "downstreamScore": 81.2,
      "fidelityScore": 85.8,
      "deltaScore": 1.348
    },
    "metrics": {
      "readiness": 78.9,
      "degradationLoad": 45.9,
      "diagnosisConfidence": 54.1,
      "fidelityScore": 85.8,
      "artifactRisk": 13.4,
      "downstreamUtility": 81.2,
      "fabricatedDetailRisk": 13.4
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-restoration-fidelity-bench",
      "execution": "transformers-swin2sr-restoration-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
