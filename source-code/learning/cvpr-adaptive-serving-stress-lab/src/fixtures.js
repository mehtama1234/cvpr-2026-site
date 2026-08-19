export const records = [
  {
    "id": "desktop-batch",
    "title": "Desktop batch review",
    "system": "efficient-vision-serving",
    "cluster": "Efficient vision",
    "sourceStages": [
      "token-budget",
      "quantized-serving",
      "student-routing"
    ],
    "controls": {
      "tokenBudget": 90,
      "quantizationLevel": 16,
      "studentRouting": 30,
      "escalationCost": 10
    },
    "metrics": {
      "latency": 58.7,
      "retainedEvidence": 90.9,
      "qualityFloor": 87.4,
      "escalationRate": 17.3,
      "costSaving": 38.5,
      "risk": 13.1,
      "readiness": 76.6
    },
    "cachedGpuMetrics": {
      "readiness": 89.1,
      "latency": 91.8,
      "retainedEvidence": 86.6,
      "qualityFloor": 85.8,
      "escalationRate": 14.7,
      "costSaving": 22.7,
      "risk": 7.2
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
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "mobile-live",
    "title": "Mobile live inference",
    "system": "efficient-vision-serving",
    "cluster": "Efficient vision",
    "sourceStages": [
      "token-budget",
      "quantized-serving",
      "student-routing"
    ],
    "controls": {
      "tokenBudget": 82,
      "quantizationLevel": 18,
      "studentRouting": 60,
      "escalationCost": 10
    },
    "metrics": {
      "latency": 55.5,
      "retainedEvidence": 87.5,
      "qualityFloor": 81.6,
      "escalationRate": 29.8,
      "costSaving": 45.2,
      "risk": 18.8,
      "readiness": 74.6
    },
    "cachedGpuMetrics": {
      "readiness": 87.3,
      "latency": 93.7,
      "retainedEvidence": 85.0,
      "qualityFloor": 81.8,
      "escalationRate": 24.9,
      "costSaving": 38.2,
      "risk": 10.3
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
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "edge-camera",
    "title": "Edge camera stream",
    "system": "efficient-vision-serving",
    "cluster": "Efficient vision",
    "sourceStages": [
      "token-budget",
      "quantized-serving",
      "student-routing"
    ],
    "controls": {
      "tokenBudget": 78,
      "quantizationLevel": 20,
      "studentRouting": 55,
      "escalationCost": 8
    },
    "metrics": {
      "latency": 56.9,
      "retainedEvidence": 85.7,
      "qualityFloor": 81.2,
      "escalationRate": 28.3,
      "costSaving": 44.2,
      "risk": 19.5,
      "readiness": 73.5
    },
    "cachedGpuMetrics": {
      "readiness": 87.0,
      "latency": 94.2,
      "retainedEvidence": 84.0,
      "qualityFloor": 80.9,
      "escalationRate": 22.3,
      "costSaving": 36.8,
      "risk": 10.1
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
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "fleet-peak-load",
    "title": "Fleet peak load",
    "system": "efficient-vision-serving",
    "cluster": "Efficient vision",
    "sourceStages": [
      "token-budget",
      "quantized-serving",
      "student-routing"
    ],
    "controls": {
      "tokenBudget": 84,
      "quantizationLevel": 22,
      "studentRouting": 65,
      "escalationCost": 8
    },
    "metrics": {
      "latency": 52.5,
      "retainedEvidence": 87.6,
      "qualityFloor": 80.1,
      "escalationRate": 31.3,
      "costSaving": 48.2,
      "risk": 20.3,
      "readiness": 74.6
    },
    "cachedGpuMetrics": {
      "readiness": 86.9,
      "latency": 93.2,
      "retainedEvidence": 84.9,
      "qualityFloor": 81.0,
      "escalationRate": 25.7,
      "costSaving": 42.6,
      "risk": 10.7
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
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const profiles = [
  {
    "id": "balanced-release",
    "title": "Balanced release",
    "tokenShift": 0,
    "quantShift": 0,
    "routingShift": 0,
    "escalationShift": 0,
    "intent": "Keep the Pro+ backed default policy and inspect the evidence floor."
  },
  {
    "id": "latency-squeeze",
    "title": "Latency squeeze",
    "tokenShift": -18,
    "quantShift": 16,
    "routingShift": 14,
    "escalationShift": -2,
    "intent": "Trade evidence for lower compute and see where quality starts to degrade."
  },
  {
    "id": "quality-guard",
    "title": "Quality guard",
    "tokenShift": 8,
    "quantShift": -10,
    "routingShift": -18,
    "escalationShift": 18,
    "intent": "Spend more budget and escalate more often when retained evidence matters."
  }
];
export const stageEvidence = {
  "token": 94,
  "quantized": 94,
  "routing": 94,
  "evidenceDepth": 94
};
export const stressRows = [
  {
    "id": "desktop-batch/balanced-release",
    "caseId": "desktop-batch",
    "caseTitle": "Desktop batch review",
    "profileId": "balanced-release",
    "profileTitle": "Balanced release",
    "intent": "Keep the Pro+ backed default policy and inspect the evidence floor.",
    "controls": {
      "tokenBudget": 90.0,
      "quantizationLevel": 16.0,
      "studentRouting": 30.0,
      "escalationCost": 10.0
    },
    "metrics": {
      "latency": 58.7,
      "retainedEvidence": 90.9,
      "qualityFloor": 87.4,
      "escalationRate": 17.3,
      "costSaving": 38.5,
      "risk": 13.1,
      "readiness": 76.6
    },
    "decision": "release",
    "evidenceDelta": 0.0,
    "readinessDelta": 0.0,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "desktop-batch/latency-squeeze",
    "caseId": "desktop-batch",
    "caseTitle": "Desktop batch review",
    "profileId": "latency-squeeze",
    "profileTitle": "Latency squeeze",
    "intent": "Trade evidence for lower compute and see where quality starts to degrade.",
    "controls": {
      "tokenBudget": 72.0,
      "quantizationLevel": 32.0,
      "studentRouting": 44.0,
      "escalationCost": 8.0
    },
    "metrics": {
      "latency": 57.6,
      "retainedEvidence": 81.5,
      "qualityFloor": 78.7,
      "escalationRate": 26.3,
      "costSaving": 44.6,
      "risk": 23.2,
      "readiness": 71.1
    },
    "decision": "release",
    "evidenceDelta": -9.4,
    "readinessDelta": -5.5,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "desktop-batch/quality-guard",
    "caseId": "desktop-batch",
    "caseTitle": "Desktop batch review",
    "profileId": "quality-guard",
    "profileTitle": "Quality guard",
    "intent": "Spend more budget and escalate more often when retained evidence matters.",
    "controls": {
      "tokenBudget": 98.0,
      "quantizationLevel": 6.0,
      "studentRouting": 12.0,
      "escalationCost": 28.0
    },
    "metrics": {
      "latency": 64.2,
      "retainedEvidence": 95.5,
      "qualityFloor": 93.7,
      "escalationRate": 12.5,
      "costSaving": 30.7,
      "risk": 6.9,
      "readiness": 79.0
    },
    "decision": "release",
    "evidenceDelta": 4.6,
    "readinessDelta": 2.4,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "mobile-live/balanced-release",
    "caseId": "mobile-live",
    "caseTitle": "Mobile live inference",
    "profileId": "balanced-release",
    "profileTitle": "Balanced release",
    "intent": "Keep the Pro+ backed default policy and inspect the evidence floor.",
    "controls": {
      "tokenBudget": 82.0,
      "quantizationLevel": 18.0,
      "studentRouting": 60.0,
      "escalationCost": 10.0
    },
    "metrics": {
      "latency": 55.5,
      "retainedEvidence": 87.5,
      "qualityFloor": 81.6,
      "escalationRate": 29.8,
      "costSaving": 45.2,
      "risk": 18.8,
      "readiness": 74.6
    },
    "decision": "release",
    "evidenceDelta": 0.0,
    "readinessDelta": 0.0,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "mobile-live/latency-squeeze",
    "caseId": "mobile-live",
    "caseTitle": "Mobile live inference",
    "profileId": "latency-squeeze",
    "profileTitle": "Latency squeeze",
    "intent": "Trade evidence for lower compute and see where quality starts to degrade.",
    "controls": {
      "tokenBudget": 64.0,
      "quantizationLevel": 34.0,
      "studentRouting": 74.0,
      "escalationCost": 8.0
    },
    "metrics": {
      "latency": 54.4,
      "retainedEvidence": 78.1,
      "qualityFloor": 72.9,
      "escalationRate": 38.8,
      "costSaving": 51.3,
      "risk": 29.0,
      "readiness": 69.0
    },
    "decision": "release",
    "evidenceDelta": -9.4,
    "readinessDelta": -5.6,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "mobile-live/quality-guard",
    "caseId": "mobile-live",
    "caseTitle": "Mobile live inference",
    "profileId": "quality-guard",
    "profileTitle": "Quality guard",
    "intent": "Spend more budget and escalate more often when retained evidence matters.",
    "controls": {
      "tokenBudget": 90.0,
      "quantizationLevel": 8.0,
      "studentRouting": 42.0,
      "escalationCost": 28.0
    },
    "metrics": {
      "latency": 61.0,
      "retainedEvidence": 92.2,
      "qualityFloor": 87.9,
      "escalationRate": 25.0,
      "costSaving": 37.3,
      "risk": 12.7,
      "readiness": 76.9
    },
    "decision": "release",
    "evidenceDelta": 4.7,
    "readinessDelta": 2.3,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "edge-camera/balanced-release",
    "caseId": "edge-camera",
    "caseTitle": "Edge camera stream",
    "profileId": "balanced-release",
    "profileTitle": "Balanced release",
    "intent": "Keep the Pro+ backed default policy and inspect the evidence floor.",
    "controls": {
      "tokenBudget": 78.0,
      "quantizationLevel": 20.0,
      "studentRouting": 55.0,
      "escalationCost": 8.0
    },
    "metrics": {
      "latency": 56.9,
      "retainedEvidence": 85.7,
      "qualityFloor": 81.2,
      "escalationRate": 28.3,
      "costSaving": 44.2,
      "risk": 19.5,
      "readiness": 73.5
    },
    "decision": "release",
    "evidenceDelta": 0.0,
    "readinessDelta": 0.0,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "edge-camera/latency-squeeze",
    "caseId": "edge-camera",
    "caseTitle": "Edge camera stream",
    "profileId": "latency-squeeze",
    "profileTitle": "Latency squeeze",
    "intent": "Trade evidence for lower compute and see where quality starts to degrade.",
    "controls": {
      "tokenBudget": 60.0,
      "quantizationLevel": 36.0,
      "studentRouting": 69.0,
      "escalationCost": 6.0
    },
    "metrics": {
      "latency": 55.8,
      "retainedEvidence": 76.3,
      "qualityFloor": 72.6,
      "escalationRate": 37.3,
      "costSaving": 50.3,
      "risk": 29.7,
      "readiness": 68.0
    },
    "decision": "release",
    "evidenceDelta": -9.4,
    "readinessDelta": -5.5,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "edge-camera/quality-guard",
    "caseId": "edge-camera",
    "caseTitle": "Edge camera stream",
    "profileId": "quality-guard",
    "profileTitle": "Quality guard",
    "intent": "Spend more budget and escalate more often when retained evidence matters.",
    "controls": {
      "tokenBudget": 86.0,
      "quantizationLevel": 10.0,
      "studentRouting": 37.0,
      "escalationCost": 26.0
    },
    "metrics": {
      "latency": 62.4,
      "retainedEvidence": 90.3,
      "qualityFloor": 87.5,
      "escalationRate": 23.4,
      "costSaving": 36.3,
      "risk": 13.4,
      "readiness": 75.9
    },
    "decision": "release",
    "evidenceDelta": 4.6,
    "readinessDelta": 2.4,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "fleet-peak-load/balanced-release",
    "caseId": "fleet-peak-load",
    "caseTitle": "Fleet peak load",
    "profileId": "balanced-release",
    "profileTitle": "Balanced release",
    "intent": "Keep the Pro+ backed default policy and inspect the evidence floor.",
    "controls": {
      "tokenBudget": 84.0,
      "quantizationLevel": 22.0,
      "studentRouting": 65.0,
      "escalationCost": 8.0
    },
    "metrics": {
      "latency": 52.5,
      "retainedEvidence": 87.6,
      "qualityFloor": 80.1,
      "escalationRate": 31.3,
      "costSaving": 48.2,
      "risk": 20.3,
      "readiness": 74.6
    },
    "decision": "release",
    "evidenceDelta": 0.0,
    "readinessDelta": 0.0,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "fleet-peak-load/latency-squeeze",
    "caseId": "fleet-peak-load",
    "caseTitle": "Fleet peak load",
    "profileId": "latency-squeeze",
    "profileTitle": "Latency squeeze",
    "intent": "Trade evidence for lower compute and see where quality starts to degrade.",
    "controls": {
      "tokenBudget": 66.0,
      "quantizationLevel": 38.0,
      "studentRouting": 79.0,
      "escalationCost": 6.0
    },
    "metrics": {
      "latency": 51.4,
      "retainedEvidence": 78.2,
      "qualityFloor": 71.4,
      "escalationRate": 40.3,
      "costSaving": 54.3,
      "risk": 30.4,
      "readiness": 69.1
    },
    "decision": "release",
    "evidenceDelta": -9.4,
    "readinessDelta": -5.5,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  },
  {
    "id": "fleet-peak-load/quality-guard",
    "caseId": "fleet-peak-load",
    "caseTitle": "Fleet peak load",
    "profileId": "quality-guard",
    "profileTitle": "Quality guard",
    "intent": "Spend more budget and escalate more often when retained evidence matters.",
    "controls": {
      "tokenBudget": 92.0,
      "quantizationLevel": 12.0,
      "studentRouting": 47.0,
      "escalationCost": 26.0
    },
    "metrics": {
      "latency": 58.0,
      "retainedEvidence": 92.3,
      "qualityFloor": 86.4,
      "escalationRate": 26.5,
      "costSaving": 40.3,
      "risk": 14.2,
      "readiness": 77.0
    },
    "decision": "release",
    "evidenceDelta": 4.7,
    "readinessDelta": 2.4,
    "sourceBenchPage": "cvpr-compute-serving-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench",
      "execution": "torch-cuda-compute-serving-live-demo",
      "promotedFrom": "live-colab",
      "canonicalMode": "cached-real"
    }
  }
];
export const summary = {
  "demo": "cvpr-adaptive-serving-stress-lab",
  "status": "release",
  "backlogGoal": "Adaptive serving stress lab",
  "backlogTasksCovered": 3,
  "theme": "Learning more from less, and not breaking",
  "system": "efficient-vision-serving",
  "bench": "cvpr-compute-serving-bench",
  "cases": 4,
  "profiles": 3,
  "stressRows": 12,
  "release": 12,
  "review": 0,
  "block": 0,
  "gpuBackedCases": 4,
  "minRetainedEvidence": 76.3,
  "maxRisk": 30.4,
  "avgReadiness": 73.8,
  "proPlusJob": "compute-serving",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
