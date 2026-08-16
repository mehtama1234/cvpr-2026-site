export const stageEvidence = {
  "domain": 94,
  "triage": 94,
  "clinical": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "same-site-clean",
    "title": "Same-site clean validation",
    "scannerShift": 16,
    "cohortMix": 22,
    "labelNoise": 8,
    "reviewThreshold": 62
  },
  {
    "id": "new-scanner",
    "title": "New scanner protocol",
    "scannerShift": 58,
    "cohortMix": 34,
    "labelNoise": 16,
    "reviewThreshold": 68
  },
  {
    "id": "external-hospital",
    "title": "External hospital cohort",
    "scannerShift": 52,
    "cohortMix": 72,
    "labelNoise": 16,
    "reviewThreshold": 74
  },
  {
    "id": "noisy-rare-cohort",
    "title": "Noisy rare cohort",
    "scannerShift": 76,
    "cohortMix": 84,
    "labelNoise": 20,
    "reviewThreshold": 84
  }
];
export const records = [
  {
    "id": "same-site-clean",
    "title": "Same-site clean validation",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 16,
      "cohortMix": 22,
      "labelNoise": 8,
      "reviewThreshold": 62
    },
    "metrics": {
      "shiftLoad": 16.7,
      "calibration": 84.3,
      "domainEvidence": 89.1,
      "triageRate": 25.4,
      "residualRisk": 9.6,
      "clinicalEvidence": 90.3,
      "readiness": 88.5
    },
    "cachedGpuMetrics": {
      "readiness": 88.5,
      "shiftLoad": 16.7,
      "calibration": 84.3,
      "domainEvidence": 89.1,
      "triageRate": 25.4,
      "residualRisk": 9.6,
      "clinicalEvidence": 90.3
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
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  },
  {
    "id": "new-scanner",
    "title": "New scanner protocol",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 58,
      "cohortMix": 34,
      "labelNoise": 16,
      "reviewThreshold": 68
    },
    "metrics": {
      "shiftLoad": 40.5,
      "calibration": 77.5,
      "domainEvidence": 78.6,
      "triageRate": 39.7,
      "residualRisk": 21.6,
      "clinicalEvidence": 84.8,
      "readiness": 80.5
    },
    "cachedGpuMetrics": {
      "readiness": 80.5,
      "shiftLoad": 40.5,
      "calibration": 77.5,
      "domainEvidence": 78.6,
      "triageRate": 39.7,
      "residualRisk": 21.6,
      "clinicalEvidence": 84.8
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
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  },
  {
    "id": "external-hospital",
    "title": "External hospital cohort",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 52,
      "cohortMix": 72,
      "labelNoise": 16,
      "reviewThreshold": 74
    },
    "metrics": {
      "shiftLoad": 52.4,
      "calibration": 75.4,
      "domainEvidence": 72.9,
      "triageRate": 47.0,
      "residualRisk": 26.4,
      "clinicalEvidence": 82.3,
      "readiness": 77.1
    },
    "cachedGpuMetrics": {
      "readiness": 77.1,
      "shiftLoad": 52.4,
      "calibration": 75.4,
      "domainEvidence": 72.9,
      "triageRate": 47.0,
      "residualRisk": 26.4,
      "clinicalEvidence": 82.3
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
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  },
  {
    "id": "noisy-rare-cohort",
    "title": "Noisy rare cohort",
    "system": "medical-vision-validation",
    "cluster": "Vision for science and medicine",
    "sourceStages": [
      "domain-shift",
      "uncertainty-triage",
      "clinical-evidence"
    ],
    "controls": {
      "scannerShift": 76,
      "cohortMix": 84,
      "labelNoise": 20,
      "reviewThreshold": 84
    },
    "metrics": {
      "shiftLoad": 67.8,
      "calibration": 72.4,
      "domainEvidence": 66.0,
      "triageRate": 57.0,
      "residualRisk": 33.5,
      "clinicalEvidence": 79.1,
      "readiness": 72.5
    },
    "cachedGpuMetrics": {
      "readiness": 72.5,
      "shiftLoad": 67.8,
      "calibration": 72.4,
      "domainEvidence": 66.0,
      "triageRate": 57.0,
      "residualRisk": 33.5,
      "clinicalEvidence": 79.1
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
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "clinical-shift",
    "caseId": "same-site-clean",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "dicom-embedding-shift-probe",
      "calibration": "temperature-calibration-head",
      "triage": "uncertainty-triage-head"
    },
    "inputs": {
      "clinicalControls": {
        "scannerShift": 16,
        "cohortMix": 22,
        "labelNoise": 8,
        "reviewThreshold": 62
      },
      "asset": "fixtures/clinical/same-site-clean.json"
    },
    "outputs": {
      "domainEmbeddings": "fixtures/clinical/same-site-clean-domain-embeddings.npy",
      "calibrationCurve": "fixtures/clinical/same-site-clean-calibration.json",
      "triageScores": "fixtures/clinical/same-site-clean-triage.json",
      "clinicalEvidence": 90.3
    },
    "metrics": {
      "readiness": 88.5,
      "shiftLoad": 16.7,
      "calibration": 84.3,
      "domainEvidence": 89.1,
      "triageRate": 25.4,
      "residualRisk": 9.6,
      "clinicalEvidence": 90.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  },
  {
    "jobId": "clinical-shift",
    "caseId": "new-scanner",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "dicom-embedding-shift-probe",
      "calibration": "temperature-calibration-head",
      "triage": "uncertainty-triage-head"
    },
    "inputs": {
      "clinicalControls": {
        "scannerShift": 58,
        "cohortMix": 34,
        "labelNoise": 16,
        "reviewThreshold": 68
      },
      "asset": "fixtures/clinical/new-scanner.json"
    },
    "outputs": {
      "domainEmbeddings": "fixtures/clinical/new-scanner-domain-embeddings.npy",
      "calibrationCurve": "fixtures/clinical/new-scanner-calibration.json",
      "triageScores": "fixtures/clinical/new-scanner-triage.json",
      "clinicalEvidence": 84.8
    },
    "metrics": {
      "readiness": 80.5,
      "shiftLoad": 40.5,
      "calibration": 77.5,
      "domainEvidence": 78.6,
      "triageRate": 39.7,
      "residualRisk": 21.6,
      "clinicalEvidence": 84.8
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  },
  {
    "jobId": "clinical-shift",
    "caseId": "external-hospital",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "dicom-embedding-shift-probe",
      "calibration": "temperature-calibration-head",
      "triage": "uncertainty-triage-head"
    },
    "inputs": {
      "clinicalControls": {
        "scannerShift": 52,
        "cohortMix": 72,
        "labelNoise": 16,
        "reviewThreshold": 74
      },
      "asset": "fixtures/clinical/external-hospital.json"
    },
    "outputs": {
      "domainEmbeddings": "fixtures/clinical/external-hospital-domain-embeddings.npy",
      "calibrationCurve": "fixtures/clinical/external-hospital-calibration.json",
      "triageScores": "fixtures/clinical/external-hospital-triage.json",
      "clinicalEvidence": 82.3
    },
    "metrics": {
      "readiness": 77.1,
      "shiftLoad": 52.4,
      "calibration": 75.4,
      "domainEvidence": 72.9,
      "triageRate": 47.0,
      "residualRisk": 26.4,
      "clinicalEvidence": 82.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  },
  {
    "jobId": "clinical-shift",
    "caseId": "noisy-rare-cohort",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "embedding": "dicom-embedding-shift-probe",
      "calibration": "temperature-calibration-head",
      "triage": "uncertainty-triage-head"
    },
    "inputs": {
      "clinicalControls": {
        "scannerShift": 76,
        "cohortMix": 84,
        "labelNoise": 20,
        "reviewThreshold": 84
      },
      "asset": "fixtures/clinical/noisy-rare-cohort.json"
    },
    "outputs": {
      "domainEmbeddings": "fixtures/clinical/noisy-rare-cohort-domain-embeddings.npy",
      "calibrationCurve": "fixtures/clinical/noisy-rare-cohort-calibration.json",
      "triageScores": "fixtures/clinical/noisy-rare-cohort-triage.json",
      "clinicalEvidence": 79.1
    },
    "metrics": {
      "readiness": 72.5,
      "shiftLoad": 67.8,
      "calibration": 72.4,
      "domainEvidence": 66.0,
      "triageRate": 57.0,
      "residualRisk": 33.5,
      "clinicalEvidence": 79.1
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-clinical-shift-bench"
    }
  }
];
