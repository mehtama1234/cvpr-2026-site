export const sources = {
  "clinical": {
    "summary": {
      "bench": "cvpr-clinical-shift-bench",
      "sourceSystem": "medical-vision-validation",
      "sourceStages": [
        "domain-shift",
        "uncertainty-triage",
        "clinical-evidence"
      ],
      "cases": 4,
      "release": 4,
      "review": 0,
      "block": 0,
      "avgReadiness": 79.7,
      "maxResidualRisk": 33.5,
      "minClinicalEvidence": 79.1,
      "acceptancePass": true,
      "noBlock": true,
      "runtimeModes": [
        "simulated",
        "cached-real"
      ],
      "gpuBacked": true,
      "cachedRealCases": 4,
      "colabWorker": "cvpr-colab-gpu-worker",
      "playbookSource": "03-vision-for-science-and-medicine-clinical-shift",
      "status": "interactive"
    },
    "stageEvidence": {
      "domain": 94,
      "triage": 94,
      "clinical": 94,
      "evidenceDepth": 94
    },
    "records": [
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
    ]
  },
  "driving": {
    "summary": {
      "bench": "cvpr-driving-safety-bench",
      "sourceSystem": "driving-vla-release-gate",
      "sourceStage": "scene-grounding",
      "cases": 4,
      "release": 4,
      "review": 0,
      "block": 0,
      "avgReadiness": 68.2,
      "maxRisk": 34.6,
      "acceptancePass": true,
      "runtimeModes": [
        "simulated",
        "cached-real"
      ],
      "gpuBacked": true,
      "cachedRealCases": 4,
      "colabWorker": "cvpr-colab-gpu-worker",
      "playbookSource": "01-driving-and-vision-language-action-safety-critical-action",
      "status": "interactive"
    },
    "stage": {
      "system": "driving-vla-release-gate",
      "systemTitle": "Driving VLA release gate",
      "stage": "scene-grounding",
      "stageTitle": "Ground the driving scene",
      "theme": "Using vision to act in the world",
      "themeSlug": "embodied",
      "cluster": "Driving and vision-language-action",
      "clusterSlug": "driving_vla",
      "themePaperCount": 0,
      "clusterPaperCount": 0,
      "gateScore": 94,
      "residualRiskPct": 10,
      "evidenceDepthScore": 94,
      "decision": "pass",
      "releaseRule": "bind actions to lanes, actors, signs, and free space",
      "reusableRule": "Driving VLA release gate stage 'Ground the driving scene' should bind actions to lanes, actors, signs, and free space using measured CVPR evidence, not only paper novelty."
    },
    "records": [
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
    ]
  },
  "canary": {
    "summary": {
      "demo": "cvpr-remediation-canary-monitor",
      "status": "watching",
      "sourceDemo": "cvpr-remediation-promotion-board",
      "rows": 29,
      "sourcePromotions": 29,
      "clean": 12,
      "watch": 17,
      "rollback": 0,
      "promotedRows": 12,
      "monitoredRows": 17,
      "maxRollbackRisk": 27.0,
      "maxDrift": 9.3,
      "themes": 8,
      "incidents": 4,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "canaryRows": [
      {
        "id": "adaptive-serving/gpu-brownout/review-hardening/retest/promotion/canary",
        "promotionId": "adaptive-serving/gpu-brownout/review-hardening/retest/promotion",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 73.8,
          "risk": 30.4,
          "evidence": 81.3,
          "resilience": 74.0
        },
        "metrics": {
          "drift": 6.2,
          "rollbackRisk": 19.6,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "adaptive-serving/adversarial-content/review-hardening/retest/promotion/canary",
        "promotionId": "adaptive-serving/adversarial-content/review-hardening/retest/promotion",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 79.8,
          "risk": 36.4,
          "evidence": 80.3,
          "resilience": 74.4
        },
        "metrics": {
          "drift": 7.4,
          "rollbackRisk": 23.4,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "adaptive-serving/compound-launch/review-hardening/retest/promotion/canary",
        "promotionId": "adaptive-serving/compound-launch/review-hardening/retest/promotion",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 72.8,
          "risk": 40.4,
          "evidence": 75.3,
          "resilience": 68.9
        },
        "metrics": {
          "drift": 8.6,
          "rollbackRisk": 26.5,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "constraint-edit/gpu-brownout/review-hardening/retest/promotion/canary",
        "promotionId": "constraint-edit/gpu-brownout/review-hardening/retest/promotion",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 77.8,
          "risk": 37.4,
          "evidence": 84.1,
          "resilience": 74.0
        },
        "metrics": {
          "drift": 6.7,
          "rollbackRisk": 23.0,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "constraint-edit/adversarial-content/review-hardening/retest/promotion/canary",
        "promotionId": "constraint-edit/adversarial-content/review-hardening/retest/promotion",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 83.8,
          "risk": 43.4,
          "evidence": 83.1,
          "resilience": 74.4
        },
        "metrics": {
          "drift": 4.4,
          "rollbackRisk": 12.5,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "constraint-edit/compound-launch/review-hardening/retest/promotion/canary",
        "promotionId": "constraint-edit/compound-launch/review-hardening/retest/promotion",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 76.8,
          "risk": 47.4,
          "evidence": 78.1,
          "resilience": 68.9
        },
        "metrics": {
          "drift": 5.0,
          "rollbackRisk": 13.7,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "open-vocab/gpu-brownout/review-hardening/retest/promotion/canary",
        "promotionId": "open-vocab/gpu-brownout/review-hardening/retest/promotion",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 80.3,
          "risk": 35.6,
          "evidence": 86.6,
          "resilience": 76.3
        },
        "metrics": {
          "drift": 6.4,
          "rollbackRisk": 21.9,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "open-vocab/adversarial-content/review-hardening/retest/promotion/canary",
        "promotionId": "open-vocab/adversarial-content/review-hardening/retest/promotion",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 86.3,
          "risk": 41.6,
          "evidence": 85.6,
          "resilience": 76.7
        },
        "metrics": {
          "drift": 7.6,
          "rollbackRisk": 25.8,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "open-vocab/compound-launch/review-hardening/retest/promotion/canary",
        "promotionId": "open-vocab/compound-launch/review-hardening/retest/promotion",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 79.3,
          "risk": 45.6,
          "evidence": 80.6,
          "resilience": 71.1
        },
        "metrics": {
          "drift": 4.8,
          "rollbackRisk": 13.2,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/launch-audit/review-hardening/retest/promotion/canary",
        "promotionId": "3d-edit-provenance/launch-audit/review-hardening/retest/promotion",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 91.8,
          "risk": 31.3,
          "evidence": 88.1,
          "resilience": 83.1
        },
        "metrics": {
          "drift": 5.8,
          "rollbackRisk": 19.5,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "3d-edit-provenance/gpu-brownout/review-hardening/retest/promotion/canary",
        "promotionId": "3d-edit-provenance/gpu-brownout/review-hardening/retest/promotion",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 79.8,
          "risk": 41.3,
          "evidence": 82.1,
          "resilience": 73.1
        },
        "metrics": {
          "drift": 7.3,
          "rollbackRisk": 25.3,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "3d-edit-provenance/adversarial-content/review-hardening/retest/promotion/canary",
        "promotionId": "3d-edit-provenance/adversarial-content/review-hardening/retest/promotion",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 83.8,
          "risk": 49.3,
          "evidence": 80.1,
          "resilience": 71.7
        },
        "metrics": {
          "drift": 4.8,
          "rollbackRisk": 14.0,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/compound-launch/review-hardening/retest/promotion/canary",
        "promotionId": "3d-edit-provenance/compound-launch/review-hardening/retest/promotion",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 79.8,
          "risk": 50.3,
          "evidence": 76.1,
          "resilience": 68.8
        },
        "metrics": {
          "drift": 5.3,
          "rollbackRisk": 14.6,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/launch-audit/review-hardening/retest/promotion/canary",
        "promotionId": "temporal-counterfactual/launch-audit/review-hardening/retest/promotion",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 85.4,
          "risk": 40.4,
          "evidence": 71.8,
          "resilience": 73.6
        },
        "metrics": {
          "drift": 7.9,
          "rollbackRisk": 25.6,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "temporal-counterfactual/gpu-brownout/review-hardening/retest/promotion/canary",
        "promotionId": "temporal-counterfactual/gpu-brownout/review-hardening/retest/promotion",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 79.4,
          "risk": 44.4,
          "evidence": 68.8,
          "resilience": 69.0
        },
        "metrics": {
          "drift": 4.7,
          "rollbackRisk": 12.9,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/adversarial-content/review-hardening/retest/promotion/canary",
        "promotionId": "temporal-counterfactual/adversarial-content/review-hardening/retest/promotion",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 85.4,
          "risk": 50.4,
          "evidence": 67.8,
          "resilience": 69.4
        },
        "metrics": {
          "drift": 5.4,
          "rollbackRisk": 14.7,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/compound-launch/risk-containment/retest/promotion/canary",
        "promotionId": "temporal-counterfactual/compound-launch/risk-containment/retest/promotion",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 80.4,
          "risk": 46.4,
          "evidence": 60.8,
          "resilience": 67.0
        },
        "metrics": {
          "drift": 5.6,
          "rollbackRisk": 16.7,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/launch-audit/review-hardening/retest/promotion/canary",
        "promotionId": "grounded-answer/launch-audit/review-hardening/retest/promotion",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 89.2,
          "risk": 36.6,
          "evidence": 73.9,
          "resilience": 77.1
        },
        "metrics": {
          "drift": 7.4,
          "rollbackRisk": 23.5,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "grounded-answer/gpu-brownout/review-hardening/retest/promotion/canary",
        "promotionId": "grounded-answer/gpu-brownout/review-hardening/retest/promotion",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 77.2,
          "risk": 46.6,
          "evidence": 67.9,
          "resilience": 67.1
        },
        "metrics": {
          "drift": 4.9,
          "rollbackRisk": 16.2,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/adversarial-content/review-hardening/retest/promotion/canary",
        "promotionId": "grounded-answer/adversarial-content/review-hardening/retest/promotion",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 89.2,
          "risk": 46.6,
          "evidence": 69.9,
          "resilience": 72.8
        },
        "metrics": {
          "drift": 5.1,
          "rollbackRisk": 13.6,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/compound-launch/risk-containment/retest/promotion/canary",
        "promotionId": "grounded-answer/compound-launch/risk-containment/retest/promotion",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 87.2,
          "risk": 39.6,
          "evidence": 63.9,
          "resilience": 73.0
        },
        "metrics": {
          "drift": 9.3,
          "rollbackRisk": 27.0,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "provenance-red-team/launch-audit/review-hardening/retest/promotion/canary",
        "promotionId": "provenance-red-team/launch-audit/review-hardening/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 87.3,
          "risk": 38.7,
          "evidence": 90.8,
          "resilience": 79.2
        },
        "metrics": {
          "drift": 6.4,
          "rollbackRisk": 23.2,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "provenance-red-team/gpu-brownout/review-hardening/retest/promotion/canary",
        "promotionId": "provenance-red-team/gpu-brownout/review-hardening/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 73.3,
          "risk": 50.7,
          "evidence": 83.8,
          "resilience": 67.5
        },
        "metrics": {
          "drift": 4.5,
          "rollbackRisk": 16.9,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/adversarial-content/review-hardening/retest/promotion/canary",
        "promotionId": "provenance-red-team/adversarial-content/review-hardening/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 87.3,
          "risk": 48.7,
          "evidence": 86.8,
          "resilience": 75.0
        },
        "metrics": {
          "drift": 4.6,
          "rollbackRisk": 13.8,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/compound-launch/risk-containment/retest/promotion/canary",
        "promotionId": "provenance-red-team/compound-launch/risk-containment/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 82.3,
          "risk": 44.7,
          "evidence": 79.8,
          "resilience": 72.6
        },
        "metrics": {
          "drift": 4.8,
          "rollbackRisk": 13.0,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/launch-audit/review-hardening/retest/promotion/canary",
        "promotionId": "safety-deployment/launch-audit/review-hardening/retest/promotion",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 70.1,
          "risk": 40.2,
          "evidence": 69.5,
          "resilience": 66.5
        },
        "metrics": {
          "drift": 4.4,
          "rollbackRisk": 14.5,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/gpu-brownout/readiness-recovery/retest/promotion/canary",
        "promotionId": "safety-deployment/gpu-brownout/readiness-recovery/retest/promotion",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 70.1,
          "risk": 52.2,
          "evidence": 64.5,
          "resilience": 61.3
        },
        "metrics": {
          "drift": 5.3,
          "rollbackRisk": 17.7,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/adversarial-content/evidence-repair/retest/promotion/canary",
        "promotionId": "safety-deployment/adversarial-content/evidence-repair/retest/promotion",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 64.1,
          "risk": 56.2,
          "evidence": 73.5,
          "resilience": 59.3
        },
        "metrics": {
          "drift": 5.5,
          "rollbackRisk": 18.7,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/compound-launch/risk-containment/retest/promotion/canary",
        "promotionId": "safety-deployment/compound-launch/risk-containment/retest/promotion",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 65.1,
          "risk": 46.2,
          "evidence": 58.5,
          "resilience": 59.8
        },
        "metrics": {
          "drift": 5.7,
          "rollbackRisk": 16.7,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      }
    ],
    "promotionRows": [
      {
        "id": "adaptive-serving/gpu-brownout/review-hardening/retest/promotion",
        "retestId": "adaptive-serving/gpu-brownout/review-hardening/retest",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 73.8,
          "risk": 30.4,
          "evidence": 81.3,
          "resilience": 74.0
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "adaptive-serving/adversarial-content/review-hardening/retest/promotion",
        "retestId": "adaptive-serving/adversarial-content/review-hardening/retest",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 79.8,
          "risk": 36.4,
          "evidence": 80.3,
          "resilience": 74.4
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "adaptive-serving/compound-launch/review-hardening/retest/promotion",
        "retestId": "adaptive-serving/compound-launch/review-hardening/retest",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "release",
        "after": {
          "readiness": 72.8,
          "risk": 40.4,
          "evidence": 75.3,
          "resilience": 68.9
        },
        "clearedBlock": true,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "constraint-edit/gpu-brownout/review-hardening/retest/promotion",
        "retestId": "constraint-edit/gpu-brownout/review-hardening/retest",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 77.8,
          "risk": 37.4,
          "evidence": 84.1,
          "resilience": 74.0
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "constraint-edit/adversarial-content/review-hardening/retest/promotion",
        "retestId": "constraint-edit/adversarial-content/review-hardening/retest",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 83.8,
          "risk": 43.4,
          "evidence": 83.1,
          "resilience": 74.4
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "constraint-edit/compound-launch/review-hardening/retest/promotion",
        "retestId": "constraint-edit/compound-launch/review-hardening/retest",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 76.8,
          "risk": 47.4,
          "evidence": 78.1,
          "resilience": 68.9
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "open-vocab/gpu-brownout/review-hardening/retest/promotion",
        "retestId": "open-vocab/gpu-brownout/review-hardening/retest",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 80.3,
          "risk": 35.6,
          "evidence": 86.6,
          "resilience": 76.3
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "open-vocab/adversarial-content/review-hardening/retest/promotion",
        "retestId": "open-vocab/adversarial-content/review-hardening/retest",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 86.3,
          "risk": 41.6,
          "evidence": 85.6,
          "resilience": 76.7
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "open-vocab/compound-launch/review-hardening/retest/promotion",
        "retestId": "open-vocab/compound-launch/review-hardening/retest",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 79.3,
          "risk": 45.6,
          "evidence": 80.6,
          "resilience": 71.1
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/launch-audit/review-hardening/retest/promotion",
        "retestId": "3d-edit-provenance/launch-audit/review-hardening/retest",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 91.8,
          "risk": 31.3,
          "evidence": 88.1,
          "resilience": 83.1
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/gpu-brownout/review-hardening/retest/promotion",
        "retestId": "3d-edit-provenance/gpu-brownout/review-hardening/retest",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 79.8,
          "risk": 41.3,
          "evidence": 82.1,
          "resilience": 73.1
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/adversarial-content/review-hardening/retest/promotion",
        "retestId": "3d-edit-provenance/adversarial-content/review-hardening/retest",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 83.8,
          "risk": 49.3,
          "evidence": 80.1,
          "resilience": 71.7
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/compound-launch/review-hardening/retest/promotion",
        "retestId": "3d-edit-provenance/compound-launch/review-hardening/retest",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 79.8,
          "risk": 50.3,
          "evidence": 76.1,
          "resilience": 68.8
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/launch-audit/review-hardening/retest/promotion",
        "retestId": "temporal-counterfactual/launch-audit/review-hardening/retest",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 85.4,
          "risk": 40.4,
          "evidence": 71.8,
          "resilience": 73.6
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/gpu-brownout/review-hardening/retest/promotion",
        "retestId": "temporal-counterfactual/gpu-brownout/review-hardening/retest",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 79.4,
          "risk": 44.4,
          "evidence": 68.8,
          "resilience": 69.0
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/adversarial-content/review-hardening/retest/promotion",
        "retestId": "temporal-counterfactual/adversarial-content/review-hardening/retest",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 85.4,
          "risk": 50.4,
          "evidence": 67.8,
          "resilience": 69.4
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/compound-launch/risk-containment/retest/promotion",
        "retestId": "temporal-counterfactual/compound-launch/risk-containment/retest",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "critical",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 80.4,
          "risk": 46.4,
          "evidence": 60.8,
          "resilience": 67.0
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/launch-audit/review-hardening/retest/promotion",
        "retestId": "grounded-answer/launch-audit/review-hardening/retest",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 89.2,
          "risk": 36.6,
          "evidence": 73.9,
          "resilience": 77.1
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/gpu-brownout/review-hardening/retest/promotion",
        "retestId": "grounded-answer/gpu-brownout/review-hardening/retest",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 77.2,
          "risk": 46.6,
          "evidence": 67.9,
          "resilience": 67.1
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/adversarial-content/review-hardening/retest/promotion",
        "retestId": "grounded-answer/adversarial-content/review-hardening/retest",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 89.2,
          "risk": 46.6,
          "evidence": 69.9,
          "resilience": 72.8
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/compound-launch/risk-containment/retest/promotion",
        "retestId": "grounded-answer/compound-launch/risk-containment/retest",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "critical",
        "beforeDecision": "block",
        "afterDecision": "release",
        "after": {
          "readiness": 87.2,
          "risk": 39.6,
          "evidence": 63.9,
          "resilience": 73.0
        },
        "clearedBlock": true,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/launch-audit/review-hardening/retest/promotion",
        "retestId": "provenance-red-team/launch-audit/review-hardening/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 87.3,
          "risk": 38.7,
          "evidence": 90.8,
          "resilience": 79.2
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/gpu-brownout/review-hardening/retest/promotion",
        "retestId": "provenance-red-team/gpu-brownout/review-hardening/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 73.3,
          "risk": 50.7,
          "evidence": 83.8,
          "resilience": 67.5
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/adversarial-content/review-hardening/retest/promotion",
        "retestId": "provenance-red-team/adversarial-content/review-hardening/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 87.3,
          "risk": 48.7,
          "evidence": 86.8,
          "resilience": 75.0
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/compound-launch/risk-containment/retest/promotion",
        "retestId": "provenance-red-team/compound-launch/risk-containment/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "critical",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 82.3,
          "risk": 44.7,
          "evidence": 79.8,
          "resilience": 72.6
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/launch-audit/review-hardening/retest/promotion",
        "retestId": "safety-deployment/launch-audit/review-hardening/retest",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 70.1,
          "risk": 40.2,
          "evidence": 69.5,
          "resilience": 66.5
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/gpu-brownout/readiness-recovery/retest/promotion",
        "retestId": "safety-deployment/gpu-brownout/readiness-recovery/retest",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 70.1,
          "risk": 52.2,
          "evidence": 64.5,
          "resilience": 61.3
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/adversarial-content/evidence-repair/retest/promotion",
        "retestId": "safety-deployment/adversarial-content/evidence-repair/retest",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 64.1,
          "risk": 56.2,
          "evidence": 73.5,
          "resilience": 59.3
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/compound-launch/risk-containment/retest/promotion",
        "retestId": "safety-deployment/compound-launch/risk-containment/retest",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "critical",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 65.1,
          "risk": 46.2,
          "evidence": 58.5,
          "resilience": 59.8
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      }
    ],
    "sources": {
      "promotion": "analysis/cvpr_remediation_promotion_board/registry.json"
    }
  },
  "rollbackStress": {
    "summary": {
      "demo": "cvpr-3d-temporal-rollback-stress-lab",
      "status": "ready",
      "stressRows": 6,
      "systems": 2,
      "watch": 3,
      "rehearse": 3,
      "block": 0,
      "rollbackMisses": 0,
      "maxRisk": 74.4,
      "minEvidence": 44.8,
      "rehearsalStatus": "release",
      "scenarioStatus": "ready",
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "stressRows": [
      {
        "id": "geometry-occlusion",
        "title": "3D geometry occlusion",
        "system": "3d",
        "targetPage": "cvpr-3d-edit-provenance-room.html",
        "sourceRow": "thin-structure/dense-novel-view/scene-rewrite",
        "baseline": {
          "readiness": 74.3,
          "risk": 43.3,
          "evidence": 79.2
        },
        "shifts": {
          "readiness": -9,
          "risk": 14,
          "evidence": -10
        },
        "stressed": {
          "readiness": 65.3,
          "risk": 57.3,
          "evidence": 69.2
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "watch"
      },
      {
        "id": "splat-edit-leakage",
        "title": "Splat edit leakage",
        "system": "3d",
        "targetPage": "cvpr-3d-edit-provenance-room.html",
        "sourceRow": "thin-structure/dense-novel-view/scene-rewrite",
        "baseline": {
          "readiness": 74.3,
          "risk": 43.3,
          "evidence": 79.2
        },
        "shifts": {
          "readiness": -11,
          "risk": 18,
          "evidence": -12
        },
        "stressed": {
          "readiness": 63.3,
          "risk": 61.3,
          "evidence": 67.2
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "watch"
      },
      {
        "id": "camera-jump",
        "title": "Camera jump after semantic edit",
        "system": "3d",
        "targetPage": "cvpr-3d-edit-provenance-room.html",
        "sourceRow": "thin-structure/dense-novel-view/scene-rewrite",
        "baseline": {
          "readiness": 74.3,
          "risk": 43.3,
          "evidence": 79.2
        },
        "shifts": {
          "readiness": -13,
          "risk": 20,
          "evidence": -13
        },
        "stressed": {
          "readiness": 61.3,
          "risk": 63.3,
          "evidence": 66.2
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "watch"
      },
      {
        "id": "identity-switch",
        "title": "Temporal identity switch",
        "system": "temporal",
        "targetPage": "cvpr-temporal-counterfactual-lab.html",
        "sourceRow": "long-rollout-drift/long-horizon-fork",
        "baseline": {
          "readiness": 64.6,
          "risk": 52.4,
          "evidence": 59.8
        },
        "shifts": {
          "readiness": -12,
          "risk": 18,
          "evidence": -14
        },
        "stressed": {
          "readiness": 52.6,
          "risk": 70.4,
          "evidence": 45.8
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "rehearse"
      },
      {
        "id": "frame-drop",
        "title": "Dropped frames near contact",
        "system": "temporal",
        "targetPage": "cvpr-temporal-counterfactual-lab.html",
        "sourceRow": "long-rollout-drift/long-horizon-fork",
        "baseline": {
          "readiness": 64.6,
          "risk": 52.4,
          "evidence": 59.8
        },
        "shifts": {
          "readiness": -10,
          "risk": 16,
          "evidence": -11
        },
        "stressed": {
          "readiness": 54.6,
          "risk": 68.4,
          "evidence": 48.8
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "rehearse"
      },
      {
        "id": "long-horizon-drift",
        "title": "Long-horizon drift rollback",
        "system": "temporal",
        "targetPage": "cvpr-temporal-counterfactual-lab.html",
        "sourceRow": "long-rollout-drift/long-horizon-fork",
        "baseline": {
          "readiness": 64.6,
          "risk": 52.4,
          "evidence": 59.8
        },
        "shifts": {
          "readiness": -14,
          "risk": 22,
          "evidence": -15
        },
        "stressed": {
          "readiness": 50.6,
          "risk": 74.4,
          "evidence": 44.8
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "rehearse"
      }
    ],
    "sources": {
      "room": "analysis/cvpr_3d_edit_provenance_room/registry.json",
      "temporal": "analysis/cvpr_temporal_counterfactual_lab/registry.json",
      "rehearsal": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
      "scenarioPack": "analysis/cvpr_scenario_expansion_pack/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 153,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 25.216
    },
    "steps": [
      {
        "command": "python3 scripts/build_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR systems lab: 11 systems, 33 stages, 11 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.022,
        "stdoutTail": [
          "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "wrote cvpr-demo-arena.html: 41 demos x 8 scenarios = 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR demo arena: 41 demos, 8 scenarios, 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "wrote cvpr-demo-playbook.html: 8 plays, 0 critical"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR demo playbook: 8 plays, 0 critical, 8 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.6"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 82.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 33.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.024,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.042,
        "stdoutTail": [
          "wrote cvpr-colab-gpu-worker.html: 10 jobs, 40 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "returnCode": 0,
        "durationSec": 0.049,
        "stdoutTail": [
          "validated CVPR Colab results: 40 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR Colab GPU worker: 10 jobs, 40 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.041,
        "stdoutTail": [
          "wrote cvpr-colab-handoff-package.html: 10 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR Colab handoff package: 10 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.6"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR driving safety bench: 4 cases, max risk 34.6"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR constraint generation bench: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.024,
        "stdoutTail": [
          "verified CVPR compute serving bench: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 33.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR clinical shift bench: 4 cases, max risk 33.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 82.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR adversarial provenance bench: 4 cases, min evidence 82.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 87.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR long-tail grounding bench: 4 cases, min evidence 87.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR restoration fidelity bench: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR temporal rollout bench: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR VLM answer verification bench: 4 cases, max unsupported risk 32.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR metric geometry bench: 4 cases, max scale drift 29.9"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR Gaussian Splatting bench: 4 cases, max edit leakage 27.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_mission_control.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-mission-control.html: 11 systems, 11 benches"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_mission_control.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR mission control: 11 systems, 11 benches, 44 cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.039,
        "stdoutTail": [
          "wrote cvpr-failure-atlas.html: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR failure atlas: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/cvpr_paper_system_gate_experiments.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate experiment results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_paper_system_gate.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate package and page"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 51 steps, 26 tests"
        ],
        "stderrTail": []
      },
      {
        "command": "node source-code/learning/*/tests/core.test.js",
        "returnCode": 0,
        "durationSec": 20.437,
        "testCount": 148,
        "log": "/tmp/cvpr-core-tests.log",
        "stdoutTail": [
          "ok metric-3d-reconstruction: 94 3D reconstruction and novel views",
          "ok open-vocab-visual-search: 94 Open-vocabulary vision",
          "ok restoration-reliability-stack: 94 Image restoration",
          "ok video-world-model: 94 Video generation and world models",
          "ok vlm-grounded-reasoning: 94 Vision-language reasoning"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 53 steps, 148 tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR validation center: 53 steps, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_intake.py",
        "returnCode": 0,
        "durationSec": 0.092,
        "stdoutTail": [
          "verified CVPR live Colab intake: 40 live results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_promotion.py",
        "returnCode": 0,
        "durationSec": 0.083,
        "stdoutTail": [
          "verified CVPR live Colab promotion: 40 promoted cached-real results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-colab-promotion-delta.html: 40 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR Colab promotion delta: 40 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-colab-release-bundle.html: 10 runners, 40 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.024,
        "stdoutTail": [
          "verified CVPR Colab release bundle: 10 runners, 40 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.041,
        "stdoutTail": [
          "wrote cvpr-colab-evidence-ledger.html: 7 artifacts, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR Colab evidence ledger: 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-colab-run-receipt.html: 8 stages, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR Colab run receipt: 8 stages, 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-theme-release-matrix.html: 8 themes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR theme release matrix: 8 themes, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.043,
        "stdoutTail": [
          "wrote cvpr-production-release-brief.html: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR production release brief: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-production-coverage-audit.html: release gate, 10 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR production coverage audit: 11 systems, 10 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-remediation-board.html: 0 block tasks, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation board: 0 block tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "wrote cvpr-remediation-sprint-plan.html: 3 sprints, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR remediation sprint plan: 3 sprints, 0 tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.039,
        "stdoutTail": [
          "wrote cvpr-colab-operations-dashboard.html: 10 jobs, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR Colab operations dashboard: 10 jobs, 53 steps"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "wrote cvpr-colab-execution-planner.html: 3 waves, 40 expected results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR Colab execution planner: 3 waves, 40 expected results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-demo-evidence-cockpit.html: 41 demos, 40 expected live results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR demo evidence cockpit: 41 demos, 40 expected live results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-colab-result-replay.html: 40/40 results, 30 demos, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR Colab result replay: 40/40 results, 30 stage demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-release-slo-dashboard.html: 10/10 SLOs, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release SLO dashboard: 10/10 SLOs, readiness floor 68.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.042,
        "stdoutTail": [
          "wrote cvpr-release-regression-drillbook.html: 10/10 drills, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release regression drillbook: 10/10 drills"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.047,
        "stdoutTail": [
          "wrote cvpr-launch-readiness-pack.html: launch-ready, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR launch readiness pack: launch-ready, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "wrote cvpr-release-manifest.html: 13 artifacts, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release manifest: 13 artifacts, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_change_control.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-release-change-control.html: 13/13 rows, status controlled"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_change_control.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release change control: 13/13 rows"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_dependency_graph.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-release-dependency-graph.html: 15 nodes, 19 edges, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_dependency_graph.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR release dependency graph: 15 nodes, 19 edges"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_post_launch_monitoring.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-post-launch-monitoring.html: 9/9 monitors, status watching"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_post_launch_monitoring.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR post-launch monitoring: 9/9 monitors"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_audit_trail.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-release-audit-trail.html: 58/58 events, status complete"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_audit_trail.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR release audit trail: 58/58 events"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_command_center.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-release-command-center.html: 8/8 surfaces, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_command_center.py",
        "returnCode": 0,
        "durationSec": 0.046,
        "stdoutTail": [
          "verified CVPR release command center: 8/8 surfaces"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_theme_portfolio_map.py",
        "returnCode": 0,
        "durationSec": 0.041,
        "stdoutTail": [
          "wrote cvpr-theme-portfolio-map.html: 8 themes, 11 systems, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_theme_portfolio_map.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR theme portfolio map: 8 themes, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_next_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-next-demo-roadmap.html: 8 goals, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_next_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR next-demo roadmap: 8 goals, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_build_backlog.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-demo-build-backlog.html: 24 tasks, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_build_backlog.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR demo build backlog: 8 goals, 24 tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adaptive_serving_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-adaptive-serving-stress-lab.html: 12 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_adaptive_serving_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR adaptive serving stress lab: 12 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_edit_tournament.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-constraint-edit-tournament.html: 48 matches, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_constraint_edit_tournament.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR constraint edit tournament: 48 matches, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_open_vocab_failure_hunt.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-open-vocab-failure-hunt.html: 16 probes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_open_vocab_failure_hunt.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR open-vocab failure hunt: 16 probes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_3d_edit_provenance_room.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-3d-edit-provenance-room.html: 48 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_3d_edit_provenance_room.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR 3D edit provenance room: 48 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_counterfactual_lab.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-temporal-counterfactual-lab.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_temporal_counterfactual_lab.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR temporal counterfactual lab: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_grounded_answer_courtroom.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-grounded-answer-courtroom.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_grounded_answer_courtroom.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR grounded answer courtroom: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_provenance_red_team_arena.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-provenance-red-team-arena.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_provenance_red_team_arena.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR provenance red-team arena: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_safety_deployment_simulator.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-safety-deployment-simulator.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_safety_deployment_simulator.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR safety deployment simulator: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_cross_theme_incident_gauntlet.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-cross-theme-incident-gauntlet.html: 32 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR cross-theme incident gauntlet: 32 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gauntlet_remediation_sprint.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-gauntlet-remediation-sprint.html: 29 actions, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR gauntlet remediation sprint: 29 actions, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_retest_harness.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-remediation-retest-harness.html: 29 retests, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation retest harness: 29 retests, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_promotion_board.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-remediation-promotion-board.html: 12 promote, 17 monitor, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR remediation promotion board: 12 promote, 17 monitor"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_canary_monitor.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-remediation-canary-monitor.html: 12 clean, 17 watch, status watching"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_canary_monitor.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR remediation canary monitor: 12 clean, 17 watch"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_rollback_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-remediation-rollback-drillbook.html: 12 drills, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR remediation rollback drillbook: 12 drills, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_rollback_rehearsal_lab.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-remediation-rollback-rehearsal-lab.html: 12 rehearsals, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation rollback rehearsal lab: 12 rehearsals, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_audit_ledger.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-remediation-audit-ledger.html: 7 stages, status complete"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_audit_ledger.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR remediation audit ledger: 7 stages, status complete"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_command_center.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-remediation-command-center.html: 7 surfaces, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_command_center.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation command center: 7 surfaces, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-remediation-release-brief.html: release gate, controlled-watch posture"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR remediation release brief: release gate, controlled-watch posture"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_closeout_pack.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-remediation-closeout-pack.html: 7 rows, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_closeout_pack.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation closeout pack: 7 rows, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_second_round_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-second-round-demo-roadmap.html: 6 goals, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_second_round_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR second-round demo roadmap: 6 goals, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_visual_qa_sweep_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.046,
        "stdoutTail": [
          "wrote cvpr-visual-qa-sweep-dashboard.html: 8/8 surfaces, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_visual_qa_sweep_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR visual QA sweep dashboard: 8/8 surfaces ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_scenario_expansion_pack.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-scenario-expansion-pack.html: 12 scenarios, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_scenario_expansion_pack.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR scenario expansion pack: 12 scenarios, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_3d_temporal_rollback_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-3d-temporal-rollback-stress-lab.html: 6 rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_3d_temporal_rollback_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR 3D temporal rollback stress lab: 6 rows, status ready"
        ],
        "stderrTail": []
      }
    ]
  }
};
export const escalationRows = [
  {
    "id": "clinical/same-site-clean",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "Same-site clean validation",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 88.5,
      "safetyRisk": 22.2,
      "evidence": 87.9,
      "rollbackRisk": 17.7
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "release-watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "clinical/new-scanner",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "New scanner protocol",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 80.5,
      "safetyRisk": 47.3,
      "evidence": 80.3,
      "rollbackRisk": 24.0
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "release-watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "clinical/external-hospital",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "External hospital cohort",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 77.1,
      "safetyRisk": 58.7,
      "evidence": 76.9,
      "rollbackRisk": 26.8
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "human-review",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "clinical/noisy-rare-cohort",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "Noisy rare cohort",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 72.5,
      "safetyRisk": 74.5,
      "evidence": 72.5,
      "rollbackRisk": 30.8
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "safety-hold",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_canary_monitor.py"
  },
  {
    "id": "driving/urban-cut-in",
    "system": "driving-vla-release-gate",
    "theme": "Using vision to act in the world",
    "title": "Urban cut-in",
    "targetPage": "cvpr-driving-safety-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 68.1,
      "safetyRisk": 53.6,
      "evidence": 81.9,
      "rollbackRisk": 27.2
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "human-review",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "driving/night-crosswalk",
    "system": "driving-vla-release-gate",
    "theme": "Using vision to act in the world",
    "title": "Night crosswalk",
    "targetPage": "cvpr-driving-safety-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 68.2,
      "safetyRisk": 49.2,
      "evidence": 80.3,
      "rollbackRisk": 25.9
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "human-review",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "driving/highway-merge",
    "system": "driving-vla-release-gate",
    "theme": "Using vision to act in the world",
    "title": "Highway merge",
    "targetPage": "cvpr-driving-safety-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 68.2,
      "safetyRisk": 58.1,
      "evidence": 83.6,
      "rollbackRisk": 28.4
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "human-review",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "driving/construction-zone",
    "system": "driving-vla-release-gate",
    "theme": "Using vision to act in the world",
    "title": "Construction zone",
    "targetPage": "cvpr-driving-safety-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 68.2,
      "safetyRisk": 49.2,
      "evidence": 79.4,
      "rollbackRisk": 25.9
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "human-review",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  }
];
export const summary = {
  "demo": "cvpr-clinical-safety-escalation-playbook",
  "status": "ready",
  "rows": 8,
  "systems": 2,
  "releaseWatch": 2,
  "humanReview": 5,
  "safetyHold": 1,
  "rollbackRehearsal": 0,
  "maxSafetyRisk": 74.5,
  "minEvidence": 72.5,
  "canaryRollback": 0,
  "rollbackStressStatus": "ready",
  "fullStackStatus": "valid",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
