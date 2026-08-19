export const stageEvidence = {
  "domain": 94,
  "triage": 94,
  "clinical": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "clear-baseline",
    "title": "Clear baseline",
    "scannerShift": 8,
    "cohortMix": 18,
    "labelNoise": 12,
    "reviewThreshold": 68
  },
  {
    "id": "scanner-shift",
    "title": "Scanner shift",
    "scannerShift": 46,
    "cohortMix": 34,
    "labelNoise": 24,
    "reviewThreshold": 72
  },
  {
    "id": "rare-presentation",
    "title": "Rare presentation",
    "scannerShift": 58,
    "cohortMix": 52,
    "labelNoise": 18,
    "reviewThreshold": 78
  },
  {
    "id": "motion-artifact",
    "title": "Motion artifact",
    "scannerShift": 38,
    "cohortMix": 44,
    "labelNoise": 66,
    "reviewThreshold": 74
  }
];
export const records = [
  {
    "id": "clear-baseline",
    "title": "Clear baseline",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 8,
      "cohortMix": 18,
      "labelNoise": 12,
      "reviewThreshold": 68
    },
    "metrics": {
      "shiftLoad": 7.6,
      "calibration": 89.3,
      "domainEvidence": 96.6,
      "triageRate": 68.0,
      "residualRisk": 2.4,
      "clinicalEvidence": 91.6,
      "readiness": 89.9
    },
    "simulatedMetrics": {
      "shiftLoad": 12.6,
      "calibration": 86.0,
      "domainEvidence": 91.4,
      "triageRate": 24.2,
      "residualRisk": 8.5,
      "clinicalEvidence": 91.4,
      "readiness": 90.0
    },
    "cachedGpuMetrics": {
      "readiness": 89.9,
      "shiftScore": 7.6,
      "calibration": 89.3,
      "falseClearRisk": 2.4,
      "escalationThreshold": 68
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
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "scanner-shift",
    "title": "Scanner shift",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 46,
      "cohortMix": 34,
      "labelNoise": 24,
      "reviewThreshold": 72
    },
    "metrics": {
      "shiftLoad": 32.7,
      "calibration": 91.5,
      "domainEvidence": 85.3,
      "triageRate": 72.0,
      "residualRisk": 8.9,
      "clinicalEvidence": 87.1,
      "readiness": 83.2
    },
    "simulatedMetrics": {
      "shiftLoad": 37.0,
      "calibration": 78.0,
      "domainEvidence": 81.0,
      "triageRate": 38.8,
      "residualRisk": 22.0,
      "clinicalEvidence": 85.6,
      "readiness": 81.4
    },
    "cachedGpuMetrics": {
      "readiness": 83.2,
      "shiftScore": 32.7,
      "calibration": 91.5,
      "falseClearRisk": 8.9,
      "escalationThreshold": 72
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
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "rare-presentation",
    "title": "Rare presentation",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 58,
      "cohortMix": 52,
      "labelNoise": 18,
      "reviewThreshold": 78
    },
    "metrics": {
      "shiftLoad": 38.0,
      "calibration": 90.7,
      "domainEvidence": 82.9,
      "triageRate": 78.0,
      "residualRisk": 10.6,
      "clinicalEvidence": 85.8,
      "readiness": 81.9
    },
    "simulatedMetrics": {
      "shiftLoad": 47.7,
      "calibration": 77.2,
      "domainEvidence": 75.3,
      "triageRate": 45.1,
      "residualRisk": 24.6,
      "clinicalEvidence": 83.5,
      "readiness": 78.8
    },
    "cachedGpuMetrics": {
      "readiness": 81.9,
      "shiftScore": 38.0,
      "calibration": 90.7,
      "falseClearRisk": 10.6,
      "escalationThreshold": 78
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
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "motion-artifact",
    "title": "Motion artifact",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 38,
      "cohortMix": 44,
      "labelNoise": 66,
      "reviewThreshold": 74
    },
    "metrics": {
      "shiftLoad": 39.0,
      "calibration": 90.9,
      "domainEvidence": 82.5,
      "triageRate": 74.0,
      "residualRisk": 11.1,
      "clinicalEvidence": 85.3,
      "readiness": 81.1
    },
    "simulatedMetrics": {
      "shiftLoad": 45.9,
      "calibration": 69.2,
      "domainEvidence": 80.8,
      "triageRate": 46.2,
      "residualRisk": 37.1,
      "clinicalEvidence": 82.2,
      "readiness": 75.4
    },
    "cachedGpuMetrics": {
      "readiness": 81.1,
      "shiftScore": 39.0,
      "calibration": 90.9,
      "falseClearRisk": 11.1,
      "escalationThreshold": 74
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
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "clinical-shift",
    "caseId": "clear-baseline",
    "mode": "cached-real",
    "createdAt": "2026-08-17T01:09:30Z",
    "model": {
      "classifier": "ResNet18_Weights.IMAGENET1K_V1",
      "shiftProbe": "resnet-logit-divergence-domain-shift"
    },
    "inputs": {
      "clinicalControls": {
        "domainShift": 8,
        "artifactLoad": 12,
        "escalationThreshold": 68
      },
      "asset": "synthetic://clinical/clear-baseline.png"
    },
    "outputs": {
      "cleanConfidence": 38.6,
      "shiftedConfidence": 35.0,
      "logitDivergence": 0.006642
    },
    "metrics": {
      "readiness": 89.9,
      "shiftScore": 7.6,
      "calibration": 89.3,
      "falseClearRisk": 2.4,
      "escalationThreshold": 68
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "clinical-shift",
    "caseId": "scanner-shift",
    "mode": "cached-real",
    "createdAt": "2026-08-17T01:09:30Z",
    "model": {
      "classifier": "ResNet18_Weights.IMAGENET1K_V1",
      "shiftProbe": "resnet-logit-divergence-domain-shift"
    },
    "inputs": {
      "clinicalControls": {
        "domainShift": 46,
        "artifactLoad": 24,
        "escalationThreshold": 72
      },
      "asset": "synthetic://clinical/scanner-shift.png"
    },
    "outputs": {
      "cleanConfidence": 33.4,
      "shiftedConfidence": 33.9,
      "logitDivergence": 0.014008
    },
    "metrics": {
      "readiness": 83.2,
      "shiftScore": 32.7,
      "calibration": 91.5,
      "falseClearRisk": 8.9,
      "escalationThreshold": 72
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "clinical-shift",
    "caseId": "rare-presentation",
    "mode": "cached-real",
    "createdAt": "2026-08-17T01:09:30Z",
    "model": {
      "classifier": "ResNet18_Weights.IMAGENET1K_V1",
      "shiftProbe": "resnet-logit-divergence-domain-shift"
    },
    "inputs": {
      "clinicalControls": {
        "domainShift": 58,
        "artifactLoad": 18,
        "escalationThreshold": 78
      },
      "asset": "synthetic://clinical/rare-presentation.png"
    },
    "outputs": {
      "cleanConfidence": 39.4,
      "shiftedConfidence": 37.6,
      "logitDivergence": 0.003941
    },
    "metrics": {
      "readiness": 81.9,
      "shiftScore": 38.0,
      "calibration": 90.7,
      "falseClearRisk": 10.6,
      "escalationThreshold": 78
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "jobId": "clinical-shift",
    "caseId": "motion-artifact",
    "mode": "cached-real",
    "createdAt": "2026-08-17T01:09:30Z",
    "model": {
      "classifier": "ResNet18_Weights.IMAGENET1K_V1",
      "shiftProbe": "resnet-logit-divergence-domain-shift"
    },
    "inputs": {
      "clinicalControls": {
        "domainShift": 38,
        "artifactLoad": 66,
        "escalationThreshold": 74
      },
      "asset": "synthetic://clinical/motion-artifact.png"
    },
    "outputs": {
      "cleanConfidence": 26.4,
      "shiftedConfidence": 26.2,
      "logitDivergence": 0.067713
    },
    "metrics": {
      "readiness": 81.1,
      "shiftScore": 39.0,
      "calibration": 90.9,
      "falseClearRisk": 11.1,
      "escalationThreshold": 74
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench",
      "execution": "torchvision-resnet-clinical-shift-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
