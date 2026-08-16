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
      "readiness": 76.6,
      "latency": 58.7,
      "retainedEvidence": 90.9,
      "qualityFloor": 87.4,
      "escalationRate": 17.3,
      "costSaving": 38.5,
      "risk": 13.1
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
      "sourceBench": "cvpr-compute-serving-bench"
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
      "readiness": 74.6,
      "latency": 55.5,
      "retainedEvidence": 87.5,
      "qualityFloor": 81.6,
      "escalationRate": 29.8,
      "costSaving": 45.2,
      "risk": 18.8
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
      "sourceBench": "cvpr-compute-serving-bench"
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
      "readiness": 73.5,
      "latency": 56.9,
      "retainedEvidence": 85.7,
      "qualityFloor": 81.2,
      "escalationRate": 28.3,
      "costSaving": 44.2,
      "risk": 19.5
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
      "sourceBench": "cvpr-compute-serving-bench"
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
      "readiness": 74.6,
      "latency": 52.5,
      "retainedEvidence": 87.6,
      "qualityFloor": 80.1,
      "escalationRate": 31.3,
      "costSaving": 48.2,
      "risk": 20.3
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
      "sourceBench": "cvpr-compute-serving-bench"
    }
  }
];
export const cachedGpuResults = [
  {
    "jobId": "compute-serving",
    "caseId": "desktop-batch",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "encoder": "quantized-vision-encoder",
      "router": "student-router",
      "profiler": "latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 90,
        "quantizationLevel": 16,
        "studentRouting": 30,
        "escalationCost": 10
      },
      "asset": "fixtures/compute/desktop-batch.json"
    },
    "outputs": {
      "latencyProfile": "fixtures/compute/desktop-batch-latency.json",
      "qualityFloor": 87.4,
      "routingTrace": "fixtures/compute/desktop-batch-routing.json",
      "retainedEvidence": 90.9
    },
    "metrics": {
      "readiness": 76.6,
      "latency": 58.7,
      "retainedEvidence": 90.9,
      "qualityFloor": 87.4,
      "escalationRate": 17.3,
      "costSaving": 38.5,
      "risk": 13.1
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench"
    }
  },
  {
    "jobId": "compute-serving",
    "caseId": "mobile-live",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "encoder": "quantized-vision-encoder",
      "router": "student-router",
      "profiler": "latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 82,
        "quantizationLevel": 18,
        "studentRouting": 60,
        "escalationCost": 10
      },
      "asset": "fixtures/compute/mobile-live.json"
    },
    "outputs": {
      "latencyProfile": "fixtures/compute/mobile-live-latency.json",
      "qualityFloor": 81.6,
      "routingTrace": "fixtures/compute/mobile-live-routing.json",
      "retainedEvidence": 87.5
    },
    "metrics": {
      "readiness": 74.6,
      "latency": 55.5,
      "retainedEvidence": 87.5,
      "qualityFloor": 81.6,
      "escalationRate": 29.8,
      "costSaving": 45.2,
      "risk": 18.8
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench"
    }
  },
  {
    "jobId": "compute-serving",
    "caseId": "edge-camera",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "encoder": "quantized-vision-encoder",
      "router": "student-router",
      "profiler": "latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 78,
        "quantizationLevel": 20,
        "studentRouting": 55,
        "escalationCost": 8
      },
      "asset": "fixtures/compute/edge-camera.json"
    },
    "outputs": {
      "latencyProfile": "fixtures/compute/edge-camera-latency.json",
      "qualityFloor": 81.2,
      "routingTrace": "fixtures/compute/edge-camera-routing.json",
      "retainedEvidence": 85.7
    },
    "metrics": {
      "readiness": 73.5,
      "latency": 56.9,
      "retainedEvidence": 85.7,
      "qualityFloor": 81.2,
      "escalationRate": 28.3,
      "costSaving": 44.2,
      "risk": 19.5
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench"
    }
  },
  {
    "jobId": "compute-serving",
    "caseId": "fleet-peak-load",
    "mode": "cached-real",
    "createdAt": "2026-08-15T00:00:00Z",
    "model": {
      "encoder": "quantized-vision-encoder",
      "router": "student-router",
      "profiler": "latency-profiler"
    },
    "inputs": {
      "servingControls": {
        "tokenBudget": 84,
        "quantizationLevel": 22,
        "studentRouting": 65,
        "escalationCost": 8
      },
      "asset": "fixtures/compute/fleet-peak-load.json"
    },
    "outputs": {
      "latencyProfile": "fixtures/compute/fleet-peak-load-latency.json",
      "qualityFloor": 80.1,
      "routingTrace": "fixtures/compute/fleet-peak-load-routing.json",
      "retainedEvidence": 87.6
    },
    "metrics": {
      "readiness": 74.6,
      "latency": 52.5,
      "retainedEvidence": 87.6,
      "qualityFloor": 80.1,
      "escalationRate": 31.3,
      "costSaving": 48.2,
      "risk": 20.3
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-compute-serving-bench"
    }
  }
];
