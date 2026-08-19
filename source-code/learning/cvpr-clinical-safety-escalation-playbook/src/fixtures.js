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
      "avgReadiness": 84.0,
      "maxResidualRisk": 11.1,
      "minClinicalEvidence": 85.3,
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
      "avgReadiness": 75.2,
      "maxRisk": 34.8,
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
          "sceneGrounding": 78.7,
          "timeToCollision": 5.15,
          "risk": 33.6,
          "ruleViolation": 22.9,
          "abstention": 15.5,
          "readiness": 75.3
        },
        "simulatedMetrics": {
          "sceneGrounding": 85.7,
          "timeToCollision": 5.15,
          "risk": 33.4,
          "ruleViolation": 24.0,
          "abstention": 7.6,
          "readiness": 68.1
        },
        "cachedGpuMetrics": {
          "readiness": 57.4,
          "sceneGrounding": 58.1,
          "timeToCollision": 5.15,
          "risk": 33.6,
          "ruleViolation": 32.9,
          "abstention": 15.5
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
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
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
          "sceneGrounding": 78.9,
          "timeToCollision": 5.73,
          "risk": 31.9,
          "ruleViolation": 22.8,
          "abstention": 16.0,
          "readiness": 75.8
        },
        "simulatedMetrics": {
          "sceneGrounding": 84.2,
          "timeToCollision": 5.73,
          "risk": 31.7,
          "ruleViolation": 23.5,
          "abstention": 7.8,
          "readiness": 68.2
        },
        "cachedGpuMetrics": {
          "readiness": 57.1,
          "sceneGrounding": 55.4,
          "timeToCollision": 5.73,
          "risk": 31.9,
          "ruleViolation": 32.8,
          "abstention": 16.0
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
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
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
          "sceneGrounding": 77.9,
          "timeToCollision": 4.34,
          "risk": 34.8,
          "ruleViolation": 23.9,
          "abstention": 16.0,
          "readiness": 74.3
        },
        "simulatedMetrics": {
          "sceneGrounding": 87.3,
          "timeToCollision": 4.34,
          "risk": 34.6,
          "ruleViolation": 24.1,
          "abstention": 7.4,
          "readiness": 68.2
        },
        "cachedGpuMetrics": {
          "readiness": 56.5,
          "sceneGrounding": 57.0,
          "timeToCollision": 4.34,
          "risk": 34.8,
          "ruleViolation": 33.9,
          "abstention": 16.0
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
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
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
          "sceneGrounding": 78.8,
          "timeToCollision": 5.82,
          "risk": 32.1,
          "ruleViolation": 23.0,
          "abstention": 17.3,
          "readiness": 75.5
        },
        "simulatedMetrics": {
          "sceneGrounding": 83.9,
          "timeToCollision": 5.82,
          "risk": 31.9,
          "ruleViolation": 23.7,
          "abstention": 9.1,
          "readiness": 68.2
        },
        "cachedGpuMetrics": {
          "readiness": 57.1,
          "sceneGrounding": 55.1,
          "timeToCollision": 5.82,
          "risk": 32.1,
          "ruleViolation": 33.0,
          "abstention": 17.3
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
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      }
    ]
  },
  "canary": {
    "summary": {
      "demo": "cvpr-remediation-canary-monitor",
      "status": "watching",
      "sourceDemo": "cvpr-remediation-promotion-board",
      "rows": 53,
      "sourcePromotions": 53,
      "clean": 18,
      "watch": 35,
      "rollback": 0,
      "promotedRows": 18,
      "monitoredRows": 35,
      "maxRollbackRisk": 27.0,
      "maxDrift": 9.3,
      "themes": 8,
      "incidents": 7,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "canaryRows": [
      {
        "id": "adaptive-serving/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "adaptive-serving/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 80.8,
          "risk": 31.4,
          "evidence": 82.3,
          "resilience": 77.0
        },
        "metrics": {
          "drift": 6.2,
          "rollbackRisk": 20.0,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "adaptive-serving/adversarial-text-overlay/review-hardening/retest/promotion/canary",
        "promotionId": "adaptive-serving/adversarial-text-overlay/review-hardening/retest/promotion",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 77.8,
          "risk": 39.4,
          "evidence": 78.3,
          "resilience": 72.1
        },
        "metrics": {
          "drift": 7.4,
          "rollbackRisk": 24.6,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "adaptive-serving/unsupported-query/review-hardening/retest/promotion/canary",
        "promotionId": "adaptive-serving/unsupported-query/review-hardening/retest/promotion",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 75.8,
          "risk": 42.4,
          "evidence": 74.3,
          "resilience": 69.3
        },
        "metrics": {
          "drift": 4.4,
          "rollbackRisk": 12.2,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
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
        "id": "constraint-edit/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "constraint-edit/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 84.8,
          "risk": 38.4,
          "evidence": 85.1,
          "resilience": 77.0
        },
        "metrics": {
          "drift": 6.8,
          "rollbackRisk": 23.5,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "constraint-edit/adversarial-text-overlay/review-hardening/retest/promotion/canary",
        "promotionId": "constraint-edit/adversarial-text-overlay/review-hardening/retest/promotion",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 81.8,
          "risk": 46.4,
          "evidence": 81.1,
          "resilience": 72.1
        },
        "metrics": {
          "drift": 4.4,
          "rollbackRisk": 13.1,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "constraint-edit/unsupported-query/review-hardening/retest/promotion/canary",
        "promotionId": "constraint-edit/unsupported-query/review-hardening/retest/promotion",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 79.8,
          "risk": 49.4,
          "evidence": 77.1,
          "resilience": 69.3
        },
        "metrics": {
          "drift": 4.7,
          "rollbackRisk": 14.0,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
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
        "id": "open-vocab/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "open-vocab/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 87.3,
          "risk": 36.6,
          "evidence": 87.6,
          "resilience": 79.2
        },
        "metrics": {
          "drift": 6.4,
          "rollbackRisk": 22.3,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "open-vocab/adversarial-text-overlay/review-hardening/retest/promotion/canary",
        "promotionId": "open-vocab/adversarial-text-overlay/review-hardening/retest/promotion",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 84.3,
          "risk": 44.6,
          "evidence": 83.6,
          "resilience": 74.3
        },
        "metrics": {
          "drift": 4.2,
          "rollbackRisk": 12.6,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "open-vocab/unsupported-query/review-hardening/retest/promotion/canary",
        "promotionId": "open-vocab/unsupported-query/review-hardening/retest/promotion",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 82.3,
          "risk": 47.6,
          "evidence": 79.6,
          "resilience": 71.5
        },
        "metrics": {
          "drift": 4.5,
          "rollbackRisk": 13.4,
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
        "id": "3d-edit-provenance/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "3d-edit-provenance/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 85.8,
          "risk": 43.3,
          "evidence": 82.1,
          "resilience": 75.1
        },
        "metrics": {
          "drift": 4.1,
          "rollbackRisk": 12.2,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/adversarial-text-overlay/review-hardening/retest/promotion/canary",
        "promotionId": "3d-edit-provenance/adversarial-text-overlay/review-hardening/retest/promotion",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 82.8,
          "risk": 51.3,
          "evidence": 78.1,
          "resilience": 70.2
        },
        "metrics": {
          "drift": 4.8,
          "rollbackRisk": 14.5,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/unsupported-query/review-hardening/retest/promotion/canary",
        "promotionId": "3d-edit-provenance/unsupported-query/review-hardening/retest/promotion",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 87.8,
          "risk": 47.3,
          "evidence": 78.1,
          "resilience": 73.7
        },
        "metrics": {
          "drift": 4.5,
          "rollbackRisk": 13.4,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
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
        "id": "temporal-counterfactual/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "temporal-counterfactual/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 86.4,
          "risk": 45.4,
          "evidence": 69.8,
          "resilience": 71.9
        },
        "metrics": {
          "drift": 4.7,
          "rollbackRisk": 13.1,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/adversarial-text-overlay/evidence-repair/retest/promotion/canary",
        "promotionId": "temporal-counterfactual/adversarial-text-overlay/evidence-repair/retest/promotion",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 77.4,
          "risk": 59.4,
          "evidence": 73.8,
          "resilience": 64.1
        },
        "metrics": {
          "drift": 5.4,
          "rollbackRisk": 19.4,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/unsupported-query/risk-containment/retest/promotion/canary",
        "promotionId": "temporal-counterfactual/unsupported-query/risk-containment/retest/promotion",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 91.4,
          "risk": 40.4,
          "evidence": 63.8,
          "resilience": 74.5
        },
        "metrics": {
          "drift": 8.5,
          "rollbackRisk": 26.4,
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
        "id": "grounded-answer/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "grounded-answer/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 83.2,
          "risk": 48.6,
          "evidence": 67.9,
          "resilience": 69.0
        },
        "metrics": {
          "drift": 5.0,
          "rollbackRisk": 14.0,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/adversarial-text-overlay/review-hardening/retest/promotion/canary",
        "promotionId": "grounded-answer/adversarial-text-overlay/review-hardening/retest/promotion",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 88.2,
          "risk": 48.6,
          "evidence": 67.9,
          "resilience": 71.2
        },
        "metrics": {
          "drift": 5.0,
          "rollbackRisk": 14.0,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/unsupported-query/evidence-repair/retest/promotion/canary",
        "promotionId": "grounded-answer/unsupported-query/evidence-repair/retest/promotion",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 79.2,
          "risk": 58.6,
          "evidence": 71.9,
          "resilience": 64.7
        },
        "metrics": {
          "drift": 5.5,
          "rollbackRisk": 19.3,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
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
          "readiness": 89.0,
          "risk": 31.6,
          "evidence": 90.8,
          "resilience": 82.4
        },
        "metrics": {
          "drift": 5.6,
          "rollbackRisk": 19.4,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "provenance-red-team/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "provenance-red-team/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 82.0,
          "risk": 44.6,
          "evidence": 84.8,
          "resilience": 73.6
        },
        "metrics": {
          "drift": 4.1,
          "rollbackRisk": 12.5,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/adversarial-text-overlay/review-hardening/retest/promotion/canary",
        "promotionId": "provenance-red-team/adversarial-text-overlay/review-hardening/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 79.0,
          "risk": 52.6,
          "evidence": 80.8,
          "resilience": 68.7
        },
        "metrics": {
          "drift": 4.7,
          "rollbackRisk": 14.7,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/unsupported-query/review-hardening/retest/promotion/canary",
        "promotionId": "provenance-red-team/unsupported-query/review-hardening/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 85.0,
          "risk": 47.6,
          "evidence": 80.8,
          "resilience": 73.0
        },
        "metrics": {
          "drift": 4.4,
          "rollbackRisk": 13.4,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
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
          "readiness": 75.0,
          "risk": 43.6,
          "evidence": 83.8,
          "resilience": 70.6
        },
        "metrics": {
          "drift": 4.1,
          "rollbackRisk": 12.3,
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
          "readiness": 81.0,
          "risk": 49.6,
          "evidence": 82.8,
          "resilience": 71.0
        },
        "metrics": {
          "drift": 4.8,
          "rollbackRisk": 14.1,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/compound-launch/review-hardening/retest/promotion/canary",
        "promotionId": "provenance-red-team/compound-launch/review-hardening/retest/promotion",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 74.0,
          "risk": 53.6,
          "evidence": 77.8,
          "resilience": 65.5
        },
        "metrics": {
          "drift": 5.4,
          "rollbackRisk": 18.1,
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
        "promotion": "promote",
        "afterDecision": "release",
        "after": {
          "readiness": 71.6,
          "risk": 33.1,
          "evidence": 69.5,
          "resilience": 69.5
        },
        "metrics": {
          "drift": 7.3,
          "rollbackRisk": 22.0,
          "trafficPct": 20
        },
        "canaryStatus": "clean",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "safety-deployment/rare-object-distractor/review-hardening/retest/promotion/canary",
        "promotionId": "safety-deployment/rare-object-distractor/review-hardening/retest/promotion",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 72.6,
          "risk": 38.1,
          "evidence": 67.5,
          "resilience": 67.8
        },
        "metrics": {
          "drift": 4.4,
          "rollbackRisk": 14.0,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/adversarial-text-overlay/evidence-repair/retest/promotion/canary",
        "promotionId": "safety-deployment/adversarial-text-overlay/evidence-repair/retest/promotion",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 63.6,
          "risk": 52.1,
          "evidence": 71.5,
          "resilience": 60.0
        },
        "metrics": {
          "drift": 5.1,
          "rollbackRisk": 17.6,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/unsupported-query/evidence-repair/retest/promotion/canary",
        "promotionId": "safety-deployment/unsupported-query/evidence-repair/retest/promotion",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "promotion": "monitor",
        "afterDecision": "review",
        "after": {
          "readiness": 61.6,
          "risk": 55.1,
          "evidence": 67.5,
          "resilience": 57.2
        },
        "metrics": {
          "drift": 5.4,
          "rollbackRisk": 18.4,
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
          "readiness": 71.6,
          "risk": 45.1,
          "evidence": 64.5,
          "resilience": 64.4
        },
        "metrics": {
          "drift": 4.9,
          "rollbackRisk": 15.9,
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
          "readiness": 65.6,
          "risk": 49.1,
          "evidence": 73.5,
          "resilience": 62.3
        },
        "metrics": {
          "drift": 5.1,
          "rollbackRisk": 16.9,
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
          "readiness": 66.6,
          "risk": 39.1,
          "evidence": 58.5,
          "resilience": 62.9
        },
        "metrics": {
          "drift": 5.3,
          "rollbackRisk": 14.9,
          "trafficPct": 8
        },
        "canaryStatus": "watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      }
    ],
    "promotionRows": [
      {
        "id": "adaptive-serving/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "adaptive-serving/rare-object-distractor/review-hardening/retest",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 80.8,
          "risk": 31.4,
          "evidence": 82.3,
          "resilience": 77.0
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "adaptive-serving/adversarial-text-overlay/review-hardening/retest/promotion",
        "retestId": "adaptive-serving/adversarial-text-overlay/review-hardening/retest",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 77.8,
          "risk": 39.4,
          "evidence": 78.3,
          "resilience": 72.1
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "adaptive-serving/unsupported-query/review-hardening/retest/promotion",
        "retestId": "adaptive-serving/unsupported-query/review-hardening/retest",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 75.8,
          "risk": 42.4,
          "evidence": 74.3,
          "resilience": 69.3
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
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
        "id": "constraint-edit/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "constraint-edit/rare-object-distractor/review-hardening/retest",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 84.8,
          "risk": 38.4,
          "evidence": 85.1,
          "resilience": 77.0
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "constraint-edit/adversarial-text-overlay/review-hardening/retest/promotion",
        "retestId": "constraint-edit/adversarial-text-overlay/review-hardening/retest",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 81.8,
          "risk": 46.4,
          "evidence": 81.1,
          "resilience": 72.1
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "constraint-edit/unsupported-query/review-hardening/retest/promotion",
        "retestId": "constraint-edit/unsupported-query/review-hardening/retest",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 79.8,
          "risk": 49.4,
          "evidence": 77.1,
          "resilience": 69.3
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
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
        "id": "open-vocab/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "open-vocab/rare-object-distractor/review-hardening/retest",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "release",
        "after": {
          "readiness": 87.3,
          "risk": 36.6,
          "evidence": 87.6,
          "resilience": 79.2
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "open-vocab/adversarial-text-overlay/review-hardening/retest/promotion",
        "retestId": "open-vocab/adversarial-text-overlay/review-hardening/retest",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 84.3,
          "risk": 44.6,
          "evidence": 83.6,
          "resilience": 74.3
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "open-vocab/unsupported-query/review-hardening/retest/promotion",
        "retestId": "open-vocab/unsupported-query/review-hardening/retest",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 82.3,
          "risk": 47.6,
          "evidence": 79.6,
          "resilience": 71.5
        },
        "clearedBlock": false,
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
        "id": "3d-edit-provenance/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "3d-edit-provenance/rare-object-distractor/review-hardening/retest",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 85.8,
          "risk": 43.3,
          "evidence": 82.1,
          "resilience": 75.1
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/adversarial-text-overlay/review-hardening/retest/promotion",
        "retestId": "3d-edit-provenance/adversarial-text-overlay/review-hardening/retest",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 82.8,
          "risk": 51.3,
          "evidence": 78.1,
          "resilience": 70.2
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "3d-edit-provenance/unsupported-query/review-hardening/retest/promotion",
        "retestId": "3d-edit-provenance/unsupported-query/review-hardening/retest",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 87.8,
          "risk": 47.3,
          "evidence": 78.1,
          "resilience": 73.7
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
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
        "id": "temporal-counterfactual/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "temporal-counterfactual/rare-object-distractor/review-hardening/retest",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 86.4,
          "risk": 45.4,
          "evidence": 69.8,
          "resilience": 71.9
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/adversarial-text-overlay/evidence-repair/retest/promotion",
        "retestId": "temporal-counterfactual/adversarial-text-overlay/evidence-repair/retest",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 77.4,
          "risk": 59.4,
          "evidence": 73.8,
          "resilience": 64.1
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "temporal-counterfactual/unsupported-query/risk-containment/retest/promotion",
        "retestId": "temporal-counterfactual/unsupported-query/risk-containment/retest",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "critical",
        "beforeDecision": "block",
        "afterDecision": "release",
        "after": {
          "readiness": 91.4,
          "risk": 40.4,
          "evidence": 63.8,
          "resilience": 74.5
        },
        "clearedBlock": true,
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
        "id": "grounded-answer/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "grounded-answer/rare-object-distractor/review-hardening/retest",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 83.2,
          "risk": 48.6,
          "evidence": 67.9,
          "resilience": 69.0
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/adversarial-text-overlay/review-hardening/retest/promotion",
        "retestId": "grounded-answer/adversarial-text-overlay/review-hardening/retest",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 88.2,
          "risk": 48.6,
          "evidence": 67.9,
          "resilience": 71.2
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "grounded-answer/unsupported-query/evidence-repair/retest/promotion",
        "retestId": "grounded-answer/unsupported-query/evidence-repair/retest",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 79.2,
          "risk": 58.6,
          "evidence": 71.9,
          "resilience": 64.7
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
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
          "readiness": 89.0,
          "risk": 31.6,
          "evidence": 90.8,
          "resilience": 82.4
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "provenance-red-team/rare-object-distractor/review-hardening/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 82.0,
          "risk": 44.6,
          "evidence": 84.8,
          "resilience": 73.6
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/adversarial-text-overlay/review-hardening/retest/promotion",
        "retestId": "provenance-red-team/adversarial-text-overlay/review-hardening/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 79.0,
          "risk": 52.6,
          "evidence": 80.8,
          "resilience": 68.7
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/unsupported-query/review-hardening/retest/promotion",
        "retestId": "provenance-red-team/unsupported-query/review-hardening/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 85.0,
          "risk": 47.6,
          "evidence": 80.8,
          "resilience": 73.0
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
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
          "readiness": 75.0,
          "risk": 43.6,
          "evidence": 83.8,
          "resilience": 70.6
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
        "priority": "focused",
        "beforeDecision": "review",
        "afterDecision": "review",
        "after": {
          "readiness": 81.0,
          "risk": 49.6,
          "evidence": 82.8,
          "resilience": 71.0
        },
        "clearedBlock": false,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "provenance-red-team/compound-launch/review-hardening/retest/promotion",
        "retestId": "provenance-red-team/compound-launch/review-hardening/retest",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 74.0,
          "risk": 53.6,
          "evidence": 77.8,
          "resilience": 65.5
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
        "afterDecision": "release",
        "after": {
          "readiness": 71.6,
          "risk": 33.1,
          "evidence": 69.5,
          "resilience": 69.5
        },
        "clearedBlock": false,
        "promotedRelease": true,
        "promotion": "promote",
        "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/rare-object-distractor/review-hardening/retest/promotion",
        "retestId": "safety-deployment/rare-object-distractor/review-hardening/retest",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "rare-object-distractor",
        "incidentTitle": "Rare-object distractor",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 72.6,
          "risk": 38.1,
          "evidence": 67.5,
          "resilience": 67.8
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/adversarial-text-overlay/evidence-repair/retest/promotion",
        "retestId": "safety-deployment/adversarial-text-overlay/evidence-repair/retest",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "adversarial-text-overlay",
        "incidentTitle": "Adversarial text overlay",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 63.6,
          "risk": 52.1,
          "evidence": 71.5,
          "resilience": 60.0
        },
        "clearedBlock": true,
        "promotedRelease": false,
        "promotion": "monitor",
        "reason": "block cleared or review improved, but still requires launch monitoring",
        "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "safety-deployment/unsupported-query/evidence-repair/retest/promotion",
        "retestId": "safety-deployment/unsupported-query/evidence-repair/retest",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "unsupported-query",
        "incidentTitle": "Unsupported query",
        "priority": "high",
        "beforeDecision": "block",
        "afterDecision": "review",
        "after": {
          "readiness": 61.6,
          "risk": 55.1,
          "evidence": 67.5,
          "resilience": 57.2
        },
        "clearedBlock": true,
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
          "readiness": 71.6,
          "risk": 45.1,
          "evidence": 64.5,
          "resilience": 64.4
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
          "readiness": 65.6,
          "risk": 49.1,
          "evidence": 73.5,
          "resilience": 62.3
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
          "readiness": 66.6,
          "risk": 39.1,
          "evidence": 58.5,
          "resilience": 62.9
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
      "dashboard": "cvpr-validation-center",
      "status": "interactive",
      "gateStatus": "release",
      "fullStackStatus": "valid",
      "commands": 286,
      "steps": 51,
      "packageTests": 26,
      "workerJobs": 14,
      "promotedRunners": 14,
      "cachedResults": 56,
      "importIssues": 0,
      "promotionDeltaStatus": "release",
      "promotionRegressions": 0,
      "maxReadinessDrop": 0.0,
      "validImportJobs": 14,
      "implementedBenches": 11,
      "benchCases": 44,
      "benchBlock": 0,
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
      "importValidator": "scripts/validate_cvpr_colab_results.py",
      "statusLabel": "all gates valid",
      "releaseGate": true,
      "slowest": [
        {
          "command": "python3 scripts/validate_cvpr_colab_results.py",
          "returnCode": 0,
          "durationSec": 0.247,
          "stdoutTail": [
            "validated CVPR Colab results: 56 results, 0 issues"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
          "returnCode": 0,
          "durationSec": 0.187,
          "stdoutTail": [
            "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
          "returnCode": 0,
          "durationSec": 0.184,
          "stdoutTail": [
            "wrote cvpr-colab-handoff-package.html: 14 jobs, 8 zip entries"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_systems_lab.py",
          "returnCode": 0,
          "durationSec": 0.179,
          "stdoutTail": [
            "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
          "returnCode": 0,
          "durationSec": 0.159,
          "stdoutTail": [
            "verified CVPR Colab handoff package: 14 jobs, 8 zip entries"
          ],
          "stderrTail": []
        }
      ]
    },
    "slowest": [
      {
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "returnCode": 0,
        "durationSec": 0.247,
        "stdoutTail": [
          "validated CVPR Colab results: 56 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.187,
        "stdoutTail": [
          "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.184,
        "stdoutTail": [
          "wrote cvpr-colab-handoff-package.html: 14 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.179,
        "stdoutTail": [
          "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.159,
        "stdoutTail": [
          "verified CVPR Colab handoff package: 14 jobs, 8 zip entries"
        ],
        "stderrTail": []
      }
    ],
    "fullStack": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 51,
      "packageTests": 26,
      "workerJobs": 14,
      "promotedRunners": 14,
      "cachedResults": 56,
      "importIssues": 0,
      "durationSec": 6.061
    },
    "importReport": {
      "validator": "validate_cvpr_colab_results",
      "runtimePlane": "google-colab-pro-plus",
      "expectedMode": "cached-real",
      "jobs": 14,
      "expectedResults": 56,
      "actualResults": 56,
      "validJobs": 14,
      "issues": 0,
      "status": "valid"
    },
    "worker": {
      "worker": "cvpr-colab-gpu-worker",
      "runtimePlane": "google-colab-pro-plus",
      "controlPlane": "local-static-cvpr-site",
      "resultPlane": "registry-and-cached-json",
      "jobs": 14,
      "liveCapable": 14,
      "promotedRunners": 14,
      "runnerRows": 14,
      "cachedCapable": 14,
      "cachedResults": 56,
      "validCachedResults": 56,
      "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
      "notebookNativeJobs": 10,
      "externalLiveJobs": 4,
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
      "importValidator": "scripts/validate_cvpr_colab_results.py",
      "validationReport": "analysis/cvpr_colab_gpu_worker/import_validation.json",
      "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
      "liveIntakeGate": "scripts/stage_cvpr_live_colab_export.py",
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
      "fullStackReport": "analysis/cvpr_full_stack_validation/registry.json",
      "status": "interactive-contract"
    },
    "runnerCoverage": [
      {
        "jobId": "open-vocab-grounding",
        "caseSymbol": "GROUNDING_CASES",
        "loader": "load_open_vocab_models",
        "runner": "run_open_vocab_grounding_batch",
        "execution": "transformers-grounding-dino-siglip",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "restoration-fidelity",
        "caseSymbol": "RESTORATION_CASES",
        "loader": "load_restoration_models",
        "runner": "run_restoration_fidelity_batch",
        "execution": "transformers-swin2sr-restoration",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "adversarial-provenance",
        "caseSymbol": "ADVERSARIAL_CASES",
        "loader": "load_adversarial_models",
        "runner": "run_adversarial_provenance_batch",
        "execution": "transformers-clip-provenance-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "temporal-rollout",
        "caseSymbol": "TEMPORAL_CASES",
        "loader": "load_temporal_models",
        "runner": "run_temporal_rollout_batch",
        "execution": "torchvision-raft-temporal-flow",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "clinical-shift",
        "caseSymbol": "CLINICAL_CASES",
        "loader": "load_clinical_models",
        "runner": "run_clinical_shift_batch",
        "execution": "torch-clinical-shift-embedding-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "compute-serving",
        "caseSymbol": "COMPUTE_CASES",
        "loader": "load_compute_models",
        "runner": "run_compute_serving_batch",
        "execution": "torch-serving-latency-profiler",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "constraint-generation",
        "caseSymbol": "CONSTRAINT_CASES",
        "loader": "load_constraint_models",
        "runner": "run_constraint_generation_batch",
        "execution": "torch-layout-identity-reward-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "driving-safety",
        "caseSymbol": "DRIVING_CASES",
        "loader": "load_driving_models",
        "runner": "run_driving_safety_batch",
        "execution": "torch-driving-scene-risk-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "depth-normal-consistency",
        "caseSymbol": "DEPTH_NORMAL_CASES",
        "loader": "load_depth_normal_models",
        "runner": "run_depth_normal_consistency_batch",
        "execution": "torch-cuda-depth-normal-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "corruption-robustness",
        "caseSymbol": "CORRUPTION_CASES",
        "loader": "load_corruption_models",
        "runner": "run_corruption_robustness_batch",
        "execution": "torchvision-resnet-corruption-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "prompt-segmentation-robustness",
        "caseSymbol": "PROMPT_SEGMENTATION_CASES",
        "loader": "load_prompt_segmentation_models",
        "runner": "run_prompt_segmentation_robustness_batch",
        "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "video-identity-tracking",
        "caseSymbol": "VIDEO_TRACKING_CASES",
        "loader": "load_video_tracking_models",
        "runner": "run_video_identity_tracking_batch",
        "execution": "torch-cuda-video-tracking-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "metric-geometry",
        "caseSymbol": "GEOMETRY_CASES",
        "loader": "load_metric_geometry_models",
        "runner": "run_metric_geometry_batch",
        "execution": "torch-metric-geometry-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "gaussian-splatting",
        "caseSymbol": "SPLATTING_CASES",
        "loader": "load_gaussian_splatting_models",
        "runner": "run_gaussian_splatting_batch",
        "execution": "torch-gaussian-splatting-render-probe",
        "strictMode": "require_real_models=True"
      }
    ],
    "mission": {
      "systems": 11,
      "stages": 33,
      "themesCovered": 8,
      "clustersCovered": 11,
      "demos": 41,
      "flagshipDemos": 8,
      "stageDemos": 33,
      "arenaPairings": 328,
      "arenaRelease": 328,
      "arenaReview": 0,
      "arenaBlock": 0,
      "playbookPlays": 8,
      "implementedBenches": 11,
      "missingImplementations": 0,
      "benchCases": 44,
      "benchRelease": 44,
      "benchReview": 0,
      "benchBlock": 0,
      "benchAcceptanceRate": 100.0,
      "benchBlockRate": 0.0,
      "status": "interactive"
    },
    "promotionDelta": {
      "delta": "cvpr-colab-promotion-delta",
      "status": "release",
      "cases": 56,
      "jobs": 14,
      "missing": 0,
      "modeMismatches": 0,
      "regressions": 0,
      "maxReadinessDrop": 0.0,
      "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "promotedArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
      "promotionStatus": "valid"
    }
  }
};
export const escalationRows = [
  {
    "id": "clinical/clear-baseline",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "Clear baseline",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 89.9,
      "safetyRisk": 20.6,
      "evidence": 92.5,
      "rollbackRisk": 17.3
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "release-watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "clinical/scanner-shift",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "Scanner shift",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 83.2,
      "safetyRisk": 38.5,
      "evidence": 88.0,
      "rollbackRisk": 21.8
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "release-watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "clinical/rare-presentation",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "Rare presentation",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 81.9,
      "safetyRisk": 43.7,
      "evidence": 86.5,
      "rollbackRisk": 23.1
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "release-watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "clinical/motion-artifact",
    "system": "medical-vision-validation",
    "theme": "Using vision to act in the world",
    "title": "Motion artifact",
    "targetPage": "cvpr-clinical-shift-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 81.1,
      "safetyRisk": 43.8,
      "evidence": 86.2,
      "rollbackRisk": 23.1
    },
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "release-watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "driving/urban-cut-in",
    "system": "driving-vla-release-gate",
    "theme": "Using vision to act in the world",
    "title": "Urban cut-in",
    "targetPage": "cvpr-driving-safety-bench.html",
    "sourceDecision": "release",
    "escalation": {
      "readiness": 75.3,
      "safetyRisk": 53.0,
      "evidence": 71.0,
      "rollbackRisk": 27.0
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
      "readiness": 75.8,
      "safetyRisk": 48.9,
      "evidence": 70.9,
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
      "readiness": 74.3,
      "safetyRisk": 58.2,
      "evidence": 69.9,
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
      "readiness": 75.5,
      "safetyRisk": 48.9,
      "evidence": 70.1,
      "rollbackRisk": 25.8
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
  "releaseWatch": 4,
  "humanReview": 4,
  "safetyHold": 0,
  "rollbackRehearsal": 0,
  "maxSafetyRisk": 58.2,
  "minEvidence": 69.9,
  "canaryRollback": 0,
  "rollbackStressStatus": "ready",
  "fullStackStatus": "valid",
  "familyFlowCommand": "python3 scripts/run_cvpr_safety_deployment_flow.py",
  "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
