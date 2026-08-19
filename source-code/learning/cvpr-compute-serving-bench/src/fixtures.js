export const stageEvidence = {
  "token": 94,
  "quantized": 94,
  "routing": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "desktop-batch",
    "title": "Desktop batch review",
    "tokenBudget": 90,
    "quantizationLevel": 16,
    "studentRouting": 30,
    "escalationCost": 10
  },
  {
    "id": "mobile-live",
    "title": "Mobile live inference",
    "tokenBudget": 82,
    "quantizationLevel": 18,
    "studentRouting": 60,
    "escalationCost": 10
  },
  {
    "id": "edge-camera",
    "title": "Edge camera stream",
    "tokenBudget": 78,
    "quantizationLevel": 20,
    "studentRouting": 55,
    "escalationCost": 8
  },
  {
    "id": "fleet-peak-load",
    "title": "Fleet peak load",
    "tokenBudget": 84,
    "quantizationLevel": 22,
    "studentRouting": 65,
    "escalationCost": 8
  }
];
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
export const cachedGpuResults = [
  {
    "jobId": "compute-serving",
    "caseId": "desktop-batch",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:06:15Z",
    "model": {
      "encoder": "torch-cuda-matmul-vision-encoder",
      "router": "student-router-profiler",
      "profiler": "cuda-event-latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 90,
        "quantizationLevel": 16,
        "studentRouting": 30,
        "escalationCost": 10
      },
      "title": "Desktop batch review"
    },
    "outputs": {
      "latencyProfile": {
        "perIterationMs": 3.031,
        "repeats": 24,
        "matrix": [
          924,
          156,
          924
        ]
      },
      "qualityFloor": 85.8,
      "routingTrace": {
        "studentRouting": 30,
        "checksum": 0.066269
      },
      "retainedEvidence": 86.6
    },
    "metrics": {
      "readiness": 89.1,
      "latency": 91.8,
      "retainedEvidence": 86.6,
      "qualityFloor": 85.8,
      "escalationRate": 14.7,
      "costSaving": 22.7,
      "risk": 7.2
    },
    "provenance": {
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
    "jobId": "compute-serving",
    "caseId": "mobile-live",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:06:15Z",
    "model": {
      "encoder": "torch-cuda-matmul-vision-encoder",
      "router": "student-router-profiler",
      "profiler": "cuda-event-latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 82,
        "quantizationLevel": 18,
        "studentRouting": 60,
        "escalationCost": 10
      },
      "title": "Mobile live inference"
    },
    "outputs": {
      "latencyProfile": {
        "perIterationMs": 0.168,
        "repeats": 24,
        "matrix": [
          876,
          216,
          876
        ]
      },
      "qualityFloor": 81.8,
      "routingTrace": {
        "studentRouting": 60,
        "checksum": -0.334
      },
      "retainedEvidence": 85.0
    },
    "metrics": {
      "readiness": 87.3,
      "latency": 93.7,
      "retainedEvidence": 85.0,
      "qualityFloor": 81.8,
      "escalationRate": 24.9,
      "costSaving": 38.2,
      "risk": 10.3
    },
    "provenance": {
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
    "jobId": "compute-serving",
    "caseId": "edge-camera",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:06:15Z",
    "model": {
      "encoder": "torch-cuda-matmul-vision-encoder",
      "router": "student-router-profiler",
      "profiler": "cuda-event-latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 78,
        "quantizationLevel": 20,
        "studentRouting": 55,
        "escalationCost": 8
      },
      "title": "Edge camera stream"
    },
    "outputs": {
      "latencyProfile": {
        "perIterationMs": 0.157,
        "repeats": 24,
        "matrix": [
          852,
          206,
          852
        ]
      },
      "qualityFloor": 80.9,
      "routingTrace": {
        "studentRouting": 55,
        "checksum": -0.14627
      },
      "retainedEvidence": 84.0
    },
    "metrics": {
      "readiness": 87.0,
      "latency": 94.2,
      "retainedEvidence": 84.0,
      "qualityFloor": 80.9,
      "escalationRate": 22.3,
      "costSaving": 36.8,
      "risk": 10.1
    },
    "provenance": {
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
    "jobId": "compute-serving",
    "caseId": "fleet-peak-load",
    "mode": "cached-real",
    "createdAt": "2026-08-17T03:06:15Z",
    "model": {
      "encoder": "torch-cuda-matmul-vision-encoder",
      "router": "student-router-profiler",
      "profiler": "cuda-event-latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 84,
        "quantizationLevel": 22,
        "studentRouting": 65,
        "escalationCost": 8
      },
      "title": "Fleet peak load"
    },
    "outputs": {
      "latencyProfile": {
        "perIterationMs": 0.165,
        "repeats": 24,
        "matrix": [
          888,
          226,
          888
        ]
      },
      "qualityFloor": 81.0,
      "routingTrace": {
        "studentRouting": 65,
        "checksum": 0.124414
      },
      "retainedEvidence": 84.9
    },
    "metrics": {
      "readiness": 86.9,
      "latency": 93.2,
      "retainedEvidence": 84.9,
      "qualityFloor": 81.0,
      "escalationRate": 25.7,
      "costSaving": 42.6,
      "risk": 10.7
    },
    "provenance": {
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
