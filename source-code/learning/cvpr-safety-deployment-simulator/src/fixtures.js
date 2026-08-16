export const drivingRecords = [
  {
    "id": "urban-cut-in",
    "title": "Urban cut-in",
    "stage": "scene-grounding",
    "system": "driving-vla-release-gate",
    "cluster": "Driving and vision-language-action",
    "controls": {
      "hazardDensity": 48,
      "actorSpeed": 40,
      "occlusion": 10,
      "actionConfidence": 82
    },
    "metrics": {
      "sceneGrounding": 85.7,
      "timeToCollision": 5.15,
      "risk": 33.4,
      "ruleViolation": 24.0,
      "abstention": 7.6,
      "readiness": 68.1
    },
    "cachedGpuMetrics": {
      "readiness": 68.1,
      "sceneGrounding": 85.7,
      "timeToCollision": 5.15,
      "risk": 33.4,
      "ruleViolation": 24.0,
      "abstention": 7.6
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
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "night-crosswalk",
    "title": "Night crosswalk",
    "stage": "scene-grounding",
    "system": "driving-vla-release-gate",
    "cluster": "Driving and vision-language-action",
    "controls": {
      "hazardDensity": 36,
      "actorSpeed": 34,
      "occlusion": 18,
      "actionConfidence": 78
    },
    "metrics": {
      "sceneGrounding": 84.2,
      "timeToCollision": 5.73,
      "risk": 31.7,
      "ruleViolation": 23.5,
      "abstention": 7.8,
      "readiness": 68.2
    },
    "cachedGpuMetrics": {
      "readiness": 68.2,
      "sceneGrounding": 84.2,
      "timeToCollision": 5.73,
      "risk": 31.7,
      "ruleViolation": 23.5,
      "abstention": 7.8
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
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "highway-merge",
    "title": "Highway merge",
    "stage": "scene-grounding",
    "system": "driving-vla-release-gate",
    "cluster": "Driving and vision-language-action",
    "controls": {
      "hazardDensity": 24,
      "actorSpeed": 72,
      "occlusion": 16,
      "actionConfidence": 84
    },
    "metrics": {
      "sceneGrounding": 87.3,
      "timeToCollision": 4.34,
      "risk": 34.6,
      "ruleViolation": 24.1,
      "abstention": 7.4,
      "readiness": 68.2
    },
    "cachedGpuMetrics": {
      "readiness": 68.2,
      "sceneGrounding": 87.3,
      "timeToCollision": 4.34,
      "risk": 34.6,
      "ruleViolation": 24.1,
      "abstention": 7.4
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
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "construction-zone",
    "title": "Construction zone",
    "stage": "scene-grounding",
    "system": "driving-vla-release-gate",
    "cluster": "Driving and vision-language-action",
    "controls": {
      "hazardDensity": 36,
      "actorSpeed": 32,
      "occlusion": 14,
      "actionConfidence": 72
    },
    "metrics": {
      "sceneGrounding": 83.9,
      "timeToCollision": 5.82,
      "risk": 31.9,
      "ruleViolation": 23.7,
      "abstention": 9.1,
      "readiness": 68.2
    },
    "cachedGpuMetrics": {
      "readiness": 68.2,
      "sceneGrounding": 83.9,
      "timeToCollision": 5.82,
      "risk": 31.9,
      "ruleViolation": 23.7,
      "abstention": 9.1
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
      "sourceBench": "cvpr-driving-safety-bench"
    }
  }
];
export const contexts = [
  {
    "id": "nominal-route",
    "title": "Nominal route",
    "hazardShift": 0,
    "speedShift": 0,
    "occlusionShift": 0,
    "confidenceShift": 0,
    "clinicalRiskShift": 0
  },
  {
    "id": "bad-weather",
    "title": "Bad weather",
    "hazardShift": 8,
    "speedShift": -4,
    "occlusionShift": 24,
    "confidenceShift": -10,
    "clinicalRiskShift": 4
  },
  {
    "id": "dense-actors",
    "title": "Dense actors",
    "hazardShift": 24,
    "speedShift": 10,
    "occlusionShift": 14,
    "confidenceShift": -8,
    "clinicalRiskShift": 6
  },
  {
    "id": "new-city-deploy",
    "title": "New city deploy",
    "hazardShift": 18,
    "speedShift": 16,
    "occlusionShift": 20,
    "confidenceShift": -16,
    "clinicalRiskShift": 12
  }
];
export const stageEvidence = 56.2;
export const clinicalRisk = 33.5;
export const deploymentRows = [
  {
    "id": "urban-cut-in/nominal-route",
    "caseId": "urban-cut-in",
    "caseTitle": "Urban cut-in",
    "contextId": "nominal-route",
    "contextTitle": "Nominal route",
    "controls": {
      "hazardDensity": 48.0,
      "actorSpeed": 40.0,
      "occlusion": 10.0,
      "actionConfidence": 82.0
    },
    "metrics": {
      "sceneGrounding": 69.9,
      "timeToCollision": 5.15,
      "risk": 33.4,
      "ruleViolation": 29.0,
      "abstention": 12.1,
      "readiness": 62.0,
      "deploymentRisk": 33.5,
      "deploymentReadiness": 63.7
    },
    "riskDelta": 0.1,
    "readinessDelta": -4.4,
    "decision": "release",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "urban-cut-in/bad-weather",
    "caseId": "urban-cut-in",
    "caseTitle": "Urban cut-in",
    "contextId": "bad-weather",
    "contextTitle": "Bad weather",
    "controls": {
      "hazardDensity": 56.0,
      "actorSpeed": 36.0,
      "occlusion": 34.0,
      "actionConfidence": 72.0
    },
    "metrics": {
      "sceneGrounding": 60.8,
      "timeToCollision": 5.12,
      "risk": 45.1,
      "ruleViolation": 38.7,
      "abstention": 22.8,
      "readiness": 54.3,
      "deploymentRisk": 42.7,
      "deploymentReadiness": 55.6
    },
    "riskDelta": 9.3,
    "readinessDelta": -12.5,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "urban-cut-in/dense-actors",
    "caseId": "urban-cut-in",
    "caseTitle": "Urban cut-in",
    "contextId": "dense-actors",
    "contextTitle": "Dense actors",
    "controls": {
      "hazardDensity": 72.0,
      "actorSpeed": 50.0,
      "occlusion": 24.0,
      "actionConfidence": 74.0
    },
    "metrics": {
      "sceneGrounding": 62.0,
      "timeToCollision": 4.08,
      "risk": 50.1,
      "ruleViolation": 41.2,
      "abstention": 24.9,
      "readiness": 52.9,
      "deploymentRisk": 46.7,
      "deploymentReadiness": 53.9
    },
    "riskDelta": 13.3,
    "readinessDelta": -14.2,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "urban-cut-in/new-city-deploy",
    "caseId": "urban-cut-in",
    "caseTitle": "Urban cut-in",
    "contextId": "new-city-deploy",
    "contextTitle": "New city deploy",
    "controls": {
      "hazardDensity": 66.0,
      "actorSpeed": 56.0,
      "occlusion": 30.0,
      "actionConfidence": 66.0
    },
    "metrics": {
      "sceneGrounding": 59.4,
      "timeToCollision": 3.96,
      "risk": 53.8,
      "ruleViolation": 44.2,
      "abstention": 29.1,
      "readiness": 50.6,
      "deploymentRisk": 51.1,
      "deploymentReadiness": 51.1
    },
    "riskDelta": 17.7,
    "readinessDelta": -17.0,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "night-crosswalk/nominal-route",
    "caseId": "night-crosswalk",
    "caseTitle": "Night crosswalk",
    "contextId": "nominal-route",
    "contextTitle": "Nominal route",
    "controls": {
      "hazardDensity": 36.0,
      "actorSpeed": 34.0,
      "occlusion": 18.0,
      "actionConfidence": 78.0
    },
    "metrics": {
      "sceneGrounding": 68.3,
      "timeToCollision": 5.73,
      "risk": 31.7,
      "ruleViolation": 28.5,
      "abstention": 12.3,
      "readiness": 62.1,
      "deploymentRisk": 32.3,
      "deploymentReadiness": 63.9
    },
    "riskDelta": 0.6,
    "readinessDelta": -4.3,
    "decision": "release",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "night-crosswalk/bad-weather",
    "caseId": "night-crosswalk",
    "caseTitle": "Night crosswalk",
    "contextId": "bad-weather",
    "contextTitle": "Bad weather",
    "controls": {
      "hazardDensity": 44.0,
      "actorSpeed": 30.0,
      "occlusion": 42.0,
      "actionConfidence": 68.0
    },
    "metrics": {
      "sceneGrounding": 59.2,
      "timeToCollision": 5.71,
      "risk": 43.4,
      "ruleViolation": 38.2,
      "abstention": 23.0,
      "readiness": 54.5,
      "deploymentRisk": 41.5,
      "deploymentReadiness": 55.7
    },
    "riskDelta": 9.8,
    "readinessDelta": -12.5,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "night-crosswalk/dense-actors",
    "caseId": "night-crosswalk",
    "caseTitle": "Night crosswalk",
    "contextId": "dense-actors",
    "contextTitle": "Dense actors",
    "controls": {
      "hazardDensity": 60.0,
      "actorSpeed": 44.0,
      "occlusion": 32.0,
      "actionConfidence": 70.0
    },
    "metrics": {
      "sceneGrounding": 60.4,
      "timeToCollision": 4.66,
      "risk": 48.3,
      "ruleViolation": 40.7,
      "abstention": 25.1,
      "readiness": 53.0,
      "deploymentRisk": 45.5,
      "deploymentReadiness": 54.0
    },
    "riskDelta": 13.8,
    "readinessDelta": -14.2,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "night-crosswalk/new-city-deploy",
    "caseId": "night-crosswalk",
    "caseTitle": "Night crosswalk",
    "contextId": "new-city-deploy",
    "contextTitle": "New city deploy",
    "controls": {
      "hazardDensity": 54.0,
      "actorSpeed": 50.0,
      "occlusion": 38.0,
      "actionConfidence": 62.0
    },
    "metrics": {
      "sceneGrounding": 57.8,
      "timeToCollision": 4.55,
      "risk": 52.1,
      "ruleViolation": 43.7,
      "abstention": 29.3,
      "readiness": 50.8,
      "deploymentRisk": 50.0,
      "deploymentReadiness": 51.3
    },
    "riskDelta": 18.3,
    "readinessDelta": -16.9,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "highway-merge/nominal-route",
    "caseId": "highway-merge",
    "caseTitle": "Highway merge",
    "contextId": "nominal-route",
    "contextTitle": "Nominal route",
    "controls": {
      "hazardDensity": 24.0,
      "actorSpeed": 72.0,
      "occlusion": 16.0,
      "actionConfidence": 84.0
    },
    "metrics": {
      "sceneGrounding": 71.4,
      "timeToCollision": 4.34,
      "risk": 34.6,
      "ruleViolation": 29.2,
      "abstention": 11.9,
      "readiness": 62.1,
      "deploymentRisk": 34.2,
      "deploymentReadiness": 63.8
    },
    "riskDelta": -0.4,
    "readinessDelta": -4.4,
    "decision": "release",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "highway-merge/bad-weather",
    "caseId": "highway-merge",
    "caseTitle": "Highway merge",
    "contextId": "bad-weather",
    "contextTitle": "Bad weather",
    "controls": {
      "hazardDensity": 32.0,
      "actorSpeed": 68.0,
      "occlusion": 40.0,
      "actionConfidence": 74.0
    },
    "metrics": {
      "sceneGrounding": 62.4,
      "timeToCollision": 4.31,
      "risk": 46.2,
      "ruleViolation": 38.9,
      "abstention": 22.6,
      "readiness": 54.5,
      "deploymentRisk": 43.4,
      "deploymentReadiness": 55.7
    },
    "riskDelta": 8.8,
    "readinessDelta": -12.5,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "highway-merge/dense-actors",
    "caseId": "highway-merge",
    "caseTitle": "Highway merge",
    "contextId": "dense-actors",
    "contextTitle": "Dense actors",
    "controls": {
      "hazardDensity": 48.0,
      "actorSpeed": 82.0,
      "occlusion": 30.0,
      "actionConfidence": 76.0
    },
    "metrics": {
      "sceneGrounding": 63.5,
      "timeToCollision": 3.26,
      "risk": 51.2,
      "ruleViolation": 41.4,
      "abstention": 24.7,
      "readiness": 53.0,
      "deploymentRisk": 47.4,
      "deploymentReadiness": 54.0
    },
    "riskDelta": 12.8,
    "readinessDelta": -14.2,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "highway-merge/new-city-deploy",
    "caseId": "highway-merge",
    "caseTitle": "Highway merge",
    "contextId": "new-city-deploy",
    "contextTitle": "New city deploy",
    "controls": {
      "hazardDensity": 42.0,
      "actorSpeed": 88.0,
      "occlusion": 36.0,
      "actionConfidence": 68.0
    },
    "metrics": {
      "sceneGrounding": 60.9,
      "timeToCollision": 3.15,
      "risk": 55.4,
      "ruleViolation": 44.6,
      "abstention": 29.2,
      "readiness": 50.6,
      "deploymentRisk": 52.2,
      "deploymentReadiness": 51.1
    },
    "riskDelta": 17.6,
    "readinessDelta": -17.1,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "construction-zone/nominal-route",
    "caseId": "construction-zone",
    "caseTitle": "Construction zone",
    "contextId": "nominal-route",
    "contextTitle": "Nominal route",
    "controls": {
      "hazardDensity": 36.0,
      "actorSpeed": 32.0,
      "occlusion": 14.0,
      "actionConfidence": 72.0
    },
    "metrics": {
      "sceneGrounding": 68.0,
      "timeToCollision": 5.82,
      "risk": 31.9,
      "ruleViolation": 28.8,
      "abstention": 13.6,
      "readiness": 62.1,
      "deploymentRisk": 32.4,
      "deploymentReadiness": 63.8
    },
    "riskDelta": 0.5,
    "readinessDelta": -4.4,
    "decision": "release",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "construction-zone/bad-weather",
    "caseId": "construction-zone",
    "caseTitle": "Construction zone",
    "contextId": "bad-weather",
    "contextTitle": "Bad weather",
    "controls": {
      "hazardDensity": 44.0,
      "actorSpeed": 28.0,
      "occlusion": 38.0,
      "actionConfidence": 62.0
    },
    "metrics": {
      "sceneGrounding": 58.9,
      "timeToCollision": 5.8,
      "risk": 43.6,
      "ruleViolation": 38.4,
      "abstention": 24.3,
      "readiness": 54.4,
      "deploymentRisk": 41.6,
      "deploymentReadiness": 55.6
    },
    "riskDelta": 9.7,
    "readinessDelta": -12.6,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "construction-zone/dense-actors",
    "caseId": "construction-zone",
    "caseTitle": "Construction zone",
    "contextId": "dense-actors",
    "contextTitle": "Dense actors",
    "controls": {
      "hazardDensity": 60.0,
      "actorSpeed": 42.0,
      "occlusion": 28.0,
      "actionConfidence": 64.0
    },
    "metrics": {
      "sceneGrounding": 60.1,
      "timeToCollision": 4.75,
      "risk": 48.6,
      "ruleViolation": 40.9,
      "abstention": 26.4,
      "readiness": 52.9,
      "deploymentRisk": 45.7,
      "deploymentReadiness": 53.9
    },
    "riskDelta": 13.8,
    "readinessDelta": -14.3,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  },
  {
    "id": "construction-zone/new-city-deploy",
    "caseId": "construction-zone",
    "caseTitle": "Construction zone",
    "contextId": "new-city-deploy",
    "contextTitle": "New city deploy",
    "controls": {
      "hazardDensity": 54.0,
      "actorSpeed": 48.0,
      "occlusion": 34.0,
      "actionConfidence": 56.0
    },
    "metrics": {
      "sceneGrounding": 57.5,
      "timeToCollision": 4.64,
      "risk": 52.3,
      "ruleViolation": 43.9,
      "abstention": 30.6,
      "readiness": 50.7,
      "deploymentRisk": 50.1,
      "deploymentReadiness": 51.2
    },
    "riskDelta": 18.2,
    "readinessDelta": -17.0,
    "decision": "review",
    "sourceBenchPage": "cvpr-driving-safety-bench.html",
    "clinicalBenchPage": "cvpr-clinical-shift-bench.html",
    "runtimeEvidence": "cached-real",
    "gpuProvenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "GPU",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "sourceBench": "cvpr-driving-safety-bench"
    }
  }
];
export const summary = {
  "demo": "cvpr-safety-deployment-simulator",
  "status": "release",
  "backlogGoal": "Safety deployment simulator",
  "backlogTasksCovered": 3,
  "theme": "Using vision to act in the world",
  "systems": [
    "driving-vla-release-gate",
    "medical-vision-validation"
  ],
  "benches": [
    "cvpr-driving-safety-bench",
    "cvpr-clinical-shift-bench"
  ],
  "cases": 4,
  "contexts": 4,
  "deploymentRows": 16,
  "release": 4,
  "review": 12,
  "block": 0,
  "gpuBackedCases": 8,
  "clinicalResidualRisk": 33.5,
  "stageEvidence": 56.2,
  "minSceneGrounding": 57.5,
  "maxDeploymentRisk": 52.2,
  "avgDeploymentReadiness": 56.1,
  "proPlusJobs": [
    "clinical-shift",
    "driving-safety"
  ],
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
