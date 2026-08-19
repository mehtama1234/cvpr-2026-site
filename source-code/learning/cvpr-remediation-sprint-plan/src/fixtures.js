export const sprintInput = {
  "board": {
    "summary": {
      "board": "cvpr-remediation-board",
      "status": "ready",
      "sourceBlockTasks": 0,
      "blockTasks": 0,
      "criticalTasks": 0,
      "highTasks": 0,
      "focusedTasks": 0,
      "unownedTasks": 0,
      "controlledTasks": 0,
      "families": 0,
      "systems": 0,
      "playbookPlays": 8,
      "coveredThemes": 8,
      "receiptStatus": "ready",
      "receiptArtifacts": 7,
      "maxSeverity": 0
    },
    "tasks": [],
    "sourceRegistries": {
      "failureAtlas": "analysis/cvpr_failure_atlas/registry.json",
      "playbook": "analysis/cvpr_demo_playbook/registry.json",
      "mission": "analysis/cvpr_mission_control/registry.json",
      "themeMatrix": "analysis/cvpr_theme_release_matrix/registry.json",
      "receipt": "analysis/cvpr_colab_run_receipt/registry.json"
    }
  },
  "failureAtlas": {
    "summary": {
      "cases": 44,
      "families": 11,
      "release": 44,
      "review": 0,
      "block": 0,
      "maxSeverity": 0,
      "topFailure": "cvpr-clinical-shift-bench/clear-baseline",
      "status": "interactive"
    },
    "families": [
      {
        "family": "safety risk",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "provenance gap",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "clinical shift",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "evidence loss",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "localization gap",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "temporal drift",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "fabricated detail",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "identity damage",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "unsupported answer",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "metric geometry drift",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      },
      {
        "family": "splat edit leakage",
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "maxSeverity": 0
      }
    ],
    "rankedFailures": [
      {
        "id": "cvpr-clinical-shift-bench/clear-baseline",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "Clear baseline",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 2.4,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 89.9,
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
        "severity": 0
      },
      {
        "id": "cvpr-clinical-shift-bench/scanner-shift",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "Scanner shift",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 8.9,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 83.2,
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
        "severity": 0
      },
      {
        "id": "cvpr-clinical-shift-bench/rare-presentation",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "Rare presentation",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 10.6,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 81.9,
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
        "severity": 0
      },
      {
        "id": "cvpr-clinical-shift-bench/motion-artifact",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "Motion artifact",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 11.1,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 81.1,
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
        "severity": 0
      },
      {
        "id": "cvpr-compute-serving-bench/desktop-batch",
        "bench": "cvpr-compute-serving-bench",
        "page": "cvpr-compute-serving-bench.html",
        "registry": "analysis/cvpr_compute_serving_bench/registry.json",
        "system": "efficient-vision-serving",
        "cluster": "Efficient vision",
        "case": "Desktop batch review",
        "family": "evidence loss",
        "metric": "retainedEvidence",
        "metricValue": 90.9,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 76.6,
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
        "severity": 0
      },
      {
        "id": "cvpr-compute-serving-bench/mobile-live",
        "bench": "cvpr-compute-serving-bench",
        "page": "cvpr-compute-serving-bench.html",
        "registry": "analysis/cvpr_compute_serving_bench/registry.json",
        "system": "efficient-vision-serving",
        "cluster": "Efficient vision",
        "case": "Mobile live inference",
        "family": "evidence loss",
        "metric": "retainedEvidence",
        "metricValue": 87.5,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 74.6,
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
        "severity": 0
      },
      {
        "id": "cvpr-compute-serving-bench/edge-camera",
        "bench": "cvpr-compute-serving-bench",
        "page": "cvpr-compute-serving-bench.html",
        "registry": "analysis/cvpr_compute_serving_bench/registry.json",
        "system": "efficient-vision-serving",
        "cluster": "Efficient vision",
        "case": "Edge camera stream",
        "family": "evidence loss",
        "metric": "retainedEvidence",
        "metricValue": 85.7,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 73.5,
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
        "severity": 0
      },
      {
        "id": "cvpr-compute-serving-bench/fleet-peak-load",
        "bench": "cvpr-compute-serving-bench",
        "page": "cvpr-compute-serving-bench.html",
        "registry": "analysis/cvpr_compute_serving_bench/registry.json",
        "system": "efficient-vision-serving",
        "cluster": "Efficient vision",
        "case": "Fleet peak load",
        "family": "evidence loss",
        "metric": "retainedEvidence",
        "metricValue": 87.6,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 74.6,
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
        "severity": 0
      },
      {
        "id": "cvpr-restoration-fidelity-bench/mild-noise",
        "bench": "cvpr-restoration-fidelity-bench",
        "page": "cvpr-restoration-fidelity-bench.html",
        "registry": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "system": "restoration-reliability-stack",
        "cluster": "Image restoration",
        "case": "Mild sensor noise",
        "family": "fabricated detail",
        "metric": "fabricatedDetailRisk",
        "metricValue": 25.8,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 82.0,
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
        "severity": 0
      },
      {
        "id": "cvpr-restoration-fidelity-bench/compressed-low-light",
        "bench": "cvpr-restoration-fidelity-bench",
        "page": "cvpr-restoration-fidelity-bench.html",
        "registry": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "system": "restoration-reliability-stack",
        "cluster": "Image restoration",
        "case": "Compressed low-light image",
        "family": "fabricated detail",
        "metric": "fabricatedDetailRisk",
        "metricValue": 29.4,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 77.7,
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
        "severity": 0
      },
      {
        "id": "cvpr-restoration-fidelity-bench/motion-blur-task",
        "bench": "cvpr-restoration-fidelity-bench",
        "page": "cvpr-restoration-fidelity-bench.html",
        "registry": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "system": "restoration-reliability-stack",
        "cluster": "Image restoration",
        "case": "Motion blur task frame",
        "family": "fabricated detail",
        "metric": "fabricatedDetailRisk",
        "metricValue": 26.5,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 77.7,
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
        "severity": 0
      },
      {
        "id": "cvpr-restoration-fidelity-bench/over-restored-detail",
        "bench": "cvpr-restoration-fidelity-bench",
        "page": "cvpr-restoration-fidelity-bench.html",
        "registry": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "system": "restoration-reliability-stack",
        "cluster": "Image restoration",
        "case": "Over-restored fine detail",
        "family": "fabricated detail",
        "metric": "fabricatedDetailRisk",
        "metricValue": 28.6,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 77.8,
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
        "severity": 0
      },
      {
        "id": "cvpr-constraint-generation-bench/light-layout-edit",
        "bench": "cvpr-constraint-generation-bench",
        "page": "cvpr-constraint-generation-bench.html",
        "registry": "analysis/cvpr_constraint_generation_bench/registry.json",
        "system": "controllable-generation-studio",
        "cluster": "Controllable generation",
        "case": "Light layout edit",
        "family": "identity damage",
        "metric": "identityDamage",
        "metricValue": 18.5,
        "threshold": 38,
        "direction": "high",
        "decision": "release",
        "readiness": 84.9,
        "controls": {
          "editStrength": 24,
          "layoutLock": 78,
          "identityLock": 82,
          "adversarialPromptPressure": 18
        },
        "metrics": {
          "editPressure": 21.0,
          "constraintSatisfaction": 86.1,
          "identityPreservation": 85.0,
          "editLocality": 82.8,
          "rewardAlignment": 87.3,
          "identityDamage": 18.5,
          "provenanceRisk": 17.6,
          "readiness": 84.9
        },
        "severity": 0
      },
      {
        "id": "cvpr-constraint-generation-bench/style-with-locks",
        "bench": "cvpr-constraint-generation-bench",
        "page": "cvpr-constraint-generation-bench.html",
        "registry": "analysis/cvpr_constraint_generation_bench/registry.json",
        "system": "controllable-generation-studio",
        "cluster": "Controllable generation",
        "case": "Style edit with locks",
        "family": "identity damage",
        "metric": "identityDamage",
        "metricValue": 31.8,
        "threshold": 38,
        "direction": "high",
        "decision": "release",
        "readiness": 77.4,
        "controls": {
          "editStrength": 52,
          "layoutLock": 68,
          "identityLock": 80,
          "adversarialPromptPressure": 32
        },
        "metrics": {
          "editPressure": 39.2,
          "constraintSatisfaction": 80.9,
          "identityPreservation": 77.3,
          "editLocality": 74.4,
          "rewardAlignment": 81.3,
          "identityDamage": 31.8,
          "provenanceRisk": 29.5,
          "readiness": 77.4
        },
        "severity": 0
      },
      {
        "id": "cvpr-constraint-generation-bench/layout-rewrite",
        "bench": "cvpr-constraint-generation-bench",
        "page": "cvpr-constraint-generation-bench.html",
        "registry": "analysis/cvpr_constraint_generation_bench/registry.json",
        "system": "controllable-generation-studio",
        "cluster": "Controllable generation",
        "case": "Aggressive layout rewrite",
        "family": "identity damage",
        "metric": "identityDamage",
        "metricValue": 33.1,
        "threshold": 38,
        "direction": "high",
        "decision": "release",
        "readiness": 77.5,
        "controls": {
          "editStrength": 72,
          "layoutLock": 62,
          "identityLock": 92,
          "adversarialPromptPressure": 28
        },
        "metrics": {
          "editPressure": 45.7,
          "constraintSatisfaction": 81.1,
          "identityPreservation": 78.4,
          "editLocality": 72.9,
          "rewardAlignment": 82.4,
          "identityDamage": 33.1,
          "provenanceRisk": 29.9,
          "readiness": 77.5
        },
        "severity": 0
      },
      {
        "id": "cvpr-constraint-generation-bench/prompt-attack-edit",
        "bench": "cvpr-constraint-generation-bench",
        "page": "cvpr-constraint-generation-bench.html",
        "registry": "analysis/cvpr_constraint_generation_bench/registry.json",
        "system": "controllable-generation-studio",
        "cluster": "Controllable generation",
        "case": "Prompt attack edit",
        "family": "identity damage",
        "metric": "identityDamage",
        "metricValue": 34.8,
        "threshold": 38,
        "direction": "high",
        "decision": "release",
        "readiness": 77.6,
        "controls": {
          "editStrength": 78,
          "layoutLock": 66,
          "identityLock": 92,
          "adversarialPromptPressure": 28
        },
        "metrics": {
          "editPressure": 47.7,
          "constraintSatisfaction": 82.3,
          "identityPreservation": 77.3,
          "editLocality": 73.6,
          "rewardAlignment": 82.5,
          "identityDamage": 34.8,
          "provenanceRisk": 30.0,
          "readiness": 77.6
        },
        "severity": 0
      },
      {
        "id": "cvpr-long-tail-grounding-bench/common-clean",
        "bench": "cvpr-long-tail-grounding-bench",
        "page": "cvpr-long-tail-grounding-bench.html",
        "registry": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "system": "open-vocab-visual-search",
        "cluster": "Open-vocabulary vision",
        "case": "Common clean object",
        "family": "localization gap",
        "metric": "localizedEvidence",
        "metricValue": 62.8,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 74.3,
        "controls": {
          "queryRarity": 18,
          "distractorOverlap": 16,
          "boxAmbiguity": 18,
          "evidenceThreshold": 54
        },
        "metrics": {
          "proposalRecall": 74.2,
          "textRegionScore": 26.8,
          "longTailRecall": 39.7,
          "localizedEvidence": 62.8,
          "unsupportedRisk": 21.0,
          "readiness": 74.3
        },
        "severity": 0
      },
      {
        "id": "cvpr-long-tail-grounding-bench/rare-visible",
        "bench": "cvpr-long-tail-grounding-bench",
        "page": "cvpr-long-tail-grounding-bench.html",
        "registry": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "system": "open-vocab-visual-search",
        "cluster": "Open-vocabulary vision",
        "case": "Rare visible object",
        "family": "localization gap",
        "metric": "localizedEvidence",
        "metricValue": 63.6,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 75.3,
        "controls": {
          "queryRarity": 66,
          "distractorOverlap": 12,
          "boxAmbiguity": 34,
          "evidenceThreshold": 62
        },
        "metrics": {
          "proposalRecall": 75.2,
          "textRegionScore": 26.7,
          "longTailRecall": 43.2,
          "localizedEvidence": 63.6,
          "unsupportedRisk": 21.2,
          "readiness": 75.3
        },
        "severity": 0
      },
      {
        "id": "cvpr-long-tail-grounding-bench/rare-distractors",
        "bench": "cvpr-long-tail-grounding-bench",
        "page": "cvpr-long-tail-grounding-bench.html",
        "registry": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "system": "open-vocab-visual-search",
        "cluster": "Open-vocabulary vision",
        "case": "Rare object with distractors",
        "family": "localization gap",
        "metric": "localizedEvidence",
        "metricValue": 95.6,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 113.8,
        "controls": {
          "queryRarity": 78,
          "distractorOverlap": 28,
          "boxAmbiguity": 28,
          "evidenceThreshold": 76
        },
        "metrics": {
          "proposalRecall": 79.4,
          "textRegionScore": 93.1,
          "longTailRecall": 85.2,
          "localizedEvidence": 95.6,
          "unsupportedRisk": 8.9,
          "readiness": 113.8
        },
        "severity": 0
      },
      {
        "id": "cvpr-long-tail-grounding-bench/unsupported-query",
        "bench": "cvpr-long-tail-grounding-bench",
        "page": "cvpr-long-tail-grounding-bench.html",
        "registry": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "system": "open-vocab-visual-search",
        "cluster": "Open-vocabulary vision",
        "case": "Unsupported text query",
        "family": "localization gap",
        "metric": "localizedEvidence",
        "metricValue": 56.0,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 69.3,
        "controls": {
          "queryRarity": 82,
          "distractorOverlap": 30,
          "boxAmbiguity": 32,
          "evidenceThreshold": 84
        },
        "metrics": {
          "proposalRecall": 60.6,
          "textRegionScore": 17.0,
          "longTailRecall": 40.6,
          "localizedEvidence": 56.0,
          "unsupportedRisk": 23.9,
          "readiness": 69.3
        },
        "severity": 0
      },
      {
        "id": "cvpr-metric-geometry-bench/wide-baseline",
        "bench": "cvpr-metric-geometry-bench",
        "page": "cvpr-metric-geometry-bench.html",
        "registry": "analysis/cvpr_metric_geometry_bench/registry.json",
        "system": "metric-3d-reconstruction",
        "cluster": "3D reconstruction and novel views",
        "case": "Wide-baseline camera recovery",
        "family": "metric geometry drift",
        "metric": "scaleDrift",
        "metricValue": 10.1,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 85.8,
        "controls": {
          "baseline": 82,
          "textureSparsity": 18,
          "scaleAmbiguity": 24,
          "surfaceComplexity": 42
        },
        "metrics": {
          "poseEvidence": 87.0,
          "metricEvidence": 86.9,
          "surfaceConsistency": 83.1,
          "scaleDrift": 10.1,
          "topologyRisk": 13.9,
          "readiness": 85.8
        },
        "severity": 0
      },
      {
        "id": "cvpr-metric-geometry-bench/scale-transfer",
        "bench": "cvpr-metric-geometry-bench",
        "page": "cvpr-metric-geometry-bench.html",
        "registry": "analysis/cvpr_metric_geometry_bench/registry.json",
        "system": "metric-3d-reconstruction",
        "cluster": "3D reconstruction and novel views",
        "case": "Metric scale transfer",
        "family": "metric geometry drift",
        "metric": "scaleDrift",
        "metricValue": 21.5,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 78.7,
        "controls": {
          "baseline": 66,
          "textureSparsity": 28,
          "scaleAmbiguity": 44,
          "surfaceComplexity": 46
        },
        "metrics": {
          "poseEvidence": 79.2,
          "metricEvidence": 78.8,
          "surfaceConsistency": 78.4,
          "scaleDrift": 21.5,
          "topologyRisk": 21.0,
          "readiness": 78.7
        },
        "severity": 0
      },
      {
        "id": "cvpr-metric-geometry-bench/thin-structure",
        "bench": "cvpr-metric-geometry-bench",
        "page": "cvpr-metric-geometry-bench.html",
        "registry": "analysis/cvpr_metric_geometry_bench/registry.json",
        "system": "metric-3d-reconstruction",
        "cluster": "3D reconstruction and novel views",
        "case": "Thin structure surface check",
        "family": "metric geometry drift",
        "metric": "scaleDrift",
        "metricValue": 22.7,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 75.5,
        "controls": {
          "baseline": 58,
          "textureSparsity": 34,
          "scaleAmbiguity": 32,
          "surfaceComplexity": 72
        },
        "metrics": {
          "poseEvidence": 76.8,
          "metricEvidence": 80.4,
          "surfaceConsistency": 72.5,
          "scaleDrift": 22.7,
          "topologyRisk": 30.0,
          "readiness": 75.5
        },
        "severity": 0
      },
      {
        "id": "cvpr-metric-geometry-bench/low-texture-indoor",
        "bench": "cvpr-metric-geometry-bench",
        "page": "cvpr-metric-geometry-bench.html",
        "registry": "analysis/cvpr_metric_geometry_bench/registry.json",
        "system": "metric-3d-reconstruction",
        "cluster": "3D reconstruction and novel views",
        "case": "Low-texture indoor room",
        "family": "metric geometry drift",
        "metric": "scaleDrift",
        "metricValue": 29.9,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 72.0,
        "controls": {
          "baseline": 54,
          "textureSparsity": 58,
          "scaleAmbiguity": 48,
          "surfaceComplexity": 50
        },
        "metrics": {
          "poseEvidence": 70.1,
          "metricEvidence": 74.7,
          "surfaceConsistency": 72.2,
          "scaleDrift": 29.9,
          "topologyRisk": 30.0,
          "readiness": 72.0
        },
        "severity": 0
      },
      {
        "id": "cvpr-adversarial-provenance-bench/clean-camera",
        "bench": "cvpr-adversarial-provenance-bench",
        "page": "cvpr-adversarial-provenance-bench.html",
        "registry": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "system": "adversarial-provenance-gate",
        "cluster": "Adversarial robustness",
        "case": "Clean camera image",
        "family": "provenance gap",
        "metric": "evidence",
        "metricValue": 64.7,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 76.2,
        "controls": {
          "attackStrength": 0,
          "generationSource": 56,
          "watermarkVisibility": 100,
          "unlearningProbe": 0
        },
        "metrics": {
          "attackCoverage": 3.7,
          "provenanceConfidence": 50.8,
          "leakageRisk": 15.1,
          "evidence": 64.7,
          "risk": 11.6,
          "readiness": 76.2
        },
        "severity": 0
      },
      {
        "id": "cvpr-adversarial-provenance-bench/edited-social-post",
        "bench": "cvpr-adversarial-provenance-bench",
        "page": "cvpr-adversarial-provenance-bench.html",
        "registry": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "system": "adversarial-provenance-gate",
        "cluster": "Adversarial robustness",
        "case": "Edited social post",
        "family": "provenance gap",
        "metric": "evidence",
        "metricValue": 54.6,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 66.3,
        "controls": {
          "attackStrength": 0,
          "generationSource": 64,
          "watermarkVisibility": 98,
          "unlearningProbe": 10
        },
        "metrics": {
          "attackCoverage": 2.6,
          "provenanceConfidence": 39.8,
          "leakageRisk": 27.2,
          "evidence": 54.6,
          "risk": 23.7,
          "readiness": 66.3
        },
        "severity": 0
      },
      {
        "id": "cvpr-adversarial-provenance-bench/synthetic-watermarked",
        "bench": "cvpr-adversarial-provenance-bench",
        "page": "cvpr-adversarial-provenance-bench.html",
        "registry": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "system": "adversarial-provenance-gate",
        "cluster": "Adversarial robustness",
        "case": "Synthetic watermarked media",
        "family": "provenance gap",
        "metric": "evidence",
        "metricValue": 51.3,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 63.2,
        "controls": {
          "attackStrength": 0,
          "generationSource": 84,
          "watermarkVisibility": 94,
          "unlearningProbe": 44
        },
        "metrics": {
          "attackCoverage": 0.1,
          "provenanceConfidence": 39.1,
          "leakageRisk": 33.2,
          "evidence": 51.3,
          "risk": 29.7,
          "readiness": 63.2
        },
        "severity": 0
      },
      {
        "id": "cvpr-adversarial-provenance-bench/adaptive-attack",
        "bench": "cvpr-adversarial-provenance-bench",
        "page": "cvpr-adversarial-provenance-bench.html",
        "registry": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "system": "adversarial-provenance-gate",
        "cluster": "Adversarial robustness",
        "case": "Adaptive provenance attack",
        "family": "provenance gap",
        "metric": "evidence",
        "metricValue": 51.2,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 64.6,
        "controls": {
          "attackStrength": 12,
          "generationSource": 89,
          "watermarkVisibility": 100,
          "unlearningProbe": 0
        },
        "metrics": {
          "attackCoverage": 19.1,
          "provenanceConfidence": 39.9,
          "leakageRisk": 36.2,
          "evidence": 51.2,
          "risk": 32.7,
          "readiness": 64.6
        },
        "severity": 0
      },
      {
        "id": "cvpr-driving-safety-bench/urban-cut-in",
        "bench": "cvpr-driving-safety-bench",
        "page": "cvpr-driving-safety-bench.html",
        "registry": "analysis/cvpr_driving_safety_bench/registry.json",
        "system": "driving-vla-release-gate",
        "cluster": "Driving and vision-language-action",
        "case": "Urban cut-in",
        "family": "safety risk",
        "metric": "risk",
        "metricValue": 33.6,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 75.3,
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
        "severity": 0
      },
      {
        "id": "cvpr-driving-safety-bench/night-crosswalk",
        "bench": "cvpr-driving-safety-bench",
        "page": "cvpr-driving-safety-bench.html",
        "registry": "analysis/cvpr_driving_safety_bench/registry.json",
        "system": "driving-vla-release-gate",
        "cluster": "Driving and vision-language-action",
        "case": "Night crosswalk",
        "family": "safety risk",
        "metric": "risk",
        "metricValue": 31.9,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 75.8,
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
        "severity": 0
      },
      {
        "id": "cvpr-driving-safety-bench/highway-merge",
        "bench": "cvpr-driving-safety-bench",
        "page": "cvpr-driving-safety-bench.html",
        "registry": "analysis/cvpr_driving_safety_bench/registry.json",
        "system": "driving-vla-release-gate",
        "cluster": "Driving and vision-language-action",
        "case": "Highway merge",
        "family": "safety risk",
        "metric": "risk",
        "metricValue": 34.8,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 74.3,
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
        "severity": 0
      },
      {
        "id": "cvpr-driving-safety-bench/construction-zone",
        "bench": "cvpr-driving-safety-bench",
        "page": "cvpr-driving-safety-bench.html",
        "registry": "analysis/cvpr_driving_safety_bench/registry.json",
        "system": "driving-vla-release-gate",
        "cluster": "Driving and vision-language-action",
        "case": "Construction zone",
        "family": "safety risk",
        "metric": "risk",
        "metricValue": 32.1,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 75.5,
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
        "severity": 0
      },
      {
        "id": "cvpr-gaussian-splatting-bench/dense-novel-view",
        "bench": "cvpr-gaussian-splatting-bench",
        "page": "cvpr-gaussian-splatting-bench.html",
        "registry": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "system": "gaussian-splatting-platform",
        "cluster": "Gaussian Splatting",
        "case": "Dense novel-view rendering",
        "family": "splat edit leakage",
        "metric": "editLeakageRisk",
        "metricValue": 16.7,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 85.6,
        "controls": {
          "viewCount": 86,
          "splatDensity": 78,
          "semanticEntropy": 24,
          "provenanceVisibility": 70
        },
        "metrics": {
          "renderFidelity": 86.6,
          "semanticAttachment": 86.4,
          "provenanceTrace": 85.5,
          "viewInstability": 9.4,
          "editLeakageRisk": 16.7,
          "readiness": 85.6
        },
        "severity": 0
      },
      {
        "id": "cvpr-gaussian-splatting-bench/semantic-edit",
        "bench": "cvpr-gaussian-splatting-bench",
        "page": "cvpr-gaussian-splatting-bench.html",
        "registry": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "system": "gaussian-splatting-platform",
        "cluster": "Gaussian Splatting",
        "case": "Semantic edit selection",
        "family": "splat edit leakage",
        "metric": "editLeakageRisk",
        "metricValue": 21.4,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 82.2,
        "controls": {
          "viewCount": 74,
          "splatDensity": 72,
          "semanticEntropy": 34,
          "provenanceVisibility": 76
        },
        "metrics": {
          "renderFidelity": 81.5,
          "semanticAttachment": 82.4,
          "provenanceTrace": 86.1,
          "viewInstability": 15.7,
          "editLeakageRisk": 21.4,
          "readiness": 82.2
        },
        "severity": 0
      },
      {
        "id": "cvpr-gaussian-splatting-bench/provenance-transfer",
        "bench": "cvpr-gaussian-splatting-bench",
        "page": "cvpr-gaussian-splatting-bench.html",
        "registry": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "system": "gaussian-splatting-platform",
        "cluster": "Gaussian Splatting",
        "case": "Provenance transfer after edits",
        "family": "splat edit leakage",
        "metric": "editLeakageRisk",
        "metricValue": 24.3,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 80.5,
        "controls": {
          "viewCount": 68,
          "splatDensity": 70,
          "semanticEntropy": 42,
          "provenanceVisibility": 84
        },
        "metrics": {
          "renderFidelity": 78.9,
          "semanticAttachment": 79.8,
          "provenanceTrace": 87.7,
          "viewInstability": 18.8,
          "editLeakageRisk": 24.3,
          "readiness": 80.5
        },
        "severity": 0
      },
      {
        "id": "cvpr-gaussian-splatting-bench/sparse-capture",
        "bench": "cvpr-gaussian-splatting-bench",
        "page": "cvpr-gaussian-splatting-bench.html",
        "registry": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "system": "gaussian-splatting-platform",
        "cluster": "Gaussian Splatting",
        "case": "Sparse capture with thin geometry",
        "family": "splat edit leakage",
        "metric": "editLeakageRisk",
        "metricValue": 27.4,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 77.7,
        "controls": {
          "viewCount": 62,
          "splatDensity": 66,
          "semanticEntropy": 46,
          "provenanceVisibility": 72
        },
        "metrics": {
          "renderFidelity": 76.2,
          "semanticAttachment": 77.8,
          "provenanceTrace": 83.8,
          "viewInstability": 23.2,
          "editLeakageRisk": 27.4,
          "readiness": 77.7
        },
        "severity": 0
      },
      {
        "id": "cvpr-temporal-rollout-bench/short-stable",
        "bench": "cvpr-temporal-rollout-bench",
        "page": "cvpr-temporal-rollout-bench.html",
        "registry": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "system": "video-world-model",
        "cluster": "Video generation and world models",
        "case": "Short stable rollout",
        "family": "temporal drift",
        "metric": "drift",
        "metricValue": 21.0,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 83.3,
        "controls": {
          "rolloutLength": 24,
          "identityDensity": 28,
          "physicsViolations": 14,
          "memoryWindow": 72
        },
        "metrics": {
          "memoryLoad": 26.6,
          "identityStability": 80.6,
          "contactConsistency": 86.6,
          "rolloutPlausibility": 85.7,
          "drift": 21.0,
          "readiness": 83.3
        },
        "severity": 0
      },
      {
        "id": "cvpr-temporal-rollout-bench/crowded-memory",
        "bench": "cvpr-temporal-rollout-bench",
        "page": "cvpr-temporal-rollout-bench.html",
        "registry": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "system": "video-world-model",
        "cluster": "Video generation and world models",
        "case": "Crowded identity memory",
        "family": "temporal drift",
        "metric": "drift",
        "metricValue": 33.0,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 75.9,
        "controls": {
          "rolloutLength": 36,
          "identityDensity": 76,
          "physicsViolations": 26,
          "memoryWindow": 82
        },
        "metrics": {
          "memoryLoad": 43.8,
          "identityStability": 73.8,
          "contactConsistency": 79.4,
          "rolloutPlausibility": 80.0,
          "drift": 33.0,
          "readiness": 75.9
        },
        "severity": 0
      },
      {
        "id": "cvpr-temporal-rollout-bench/contact-heavy",
        "bench": "cvpr-temporal-rollout-bench",
        "page": "cvpr-temporal-rollout-bench.html",
        "registry": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "system": "video-world-model",
        "cluster": "Video generation and world models",
        "case": "Contact-heavy prediction",
        "family": "temporal drift",
        "metric": "drift",
        "metricValue": 34.3,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 76.2,
        "controls": {
          "rolloutLength": 56,
          "identityDensity": 52,
          "physicsViolations": 20,
          "memoryWindow": 82
        },
        "metrics": {
          "memoryLoad": 42.5,
          "identityStability": 74.0,
          "contactConsistency": 83.6,
          "rolloutPlausibility": 77.1,
          "drift": 34.3,
          "readiness": 76.2
        },
        "severity": 0
      },
      {
        "id": "cvpr-temporal-rollout-bench/long-rollout-drift",
        "bench": "cvpr-temporal-rollout-bench",
        "page": "cvpr-temporal-rollout-bench.html",
        "registry": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "system": "video-world-model",
        "cluster": "Video generation and world models",
        "case": "Long rollout drift",
        "family": "temporal drift",
        "metric": "drift",
        "metricValue": 36.1,
        "threshold": 42,
        "direction": "high",
        "decision": "release",
        "readiness": 75.9,
        "controls": {
          "rolloutLength": 66,
          "identityDensity": 68,
          "physicsViolations": 12,
          "memoryWindow": 92
        },
        "metrics": {
          "memoryLoad": 48.1,
          "identityStability": 72.7,
          "contactConsistency": 86.5,
          "rolloutPlausibility": 75.5,
          "drift": 36.1,
          "readiness": 75.9
        },
        "severity": 0
      },
      {
        "id": "cvpr-vlm-answer-verification-bench/visible-count",
        "bench": "cvpr-vlm-answer-verification-bench",
        "page": "cvpr-vlm-answer-verification-bench.html",
        "registry": "analysis/cvpr_vlm_answer_verification_bench/registry.json",
        "system": "vlm-grounded-reasoning",
        "cluster": "Vision-language reasoning",
        "case": "Visible object count",
        "family": "unsupported answer",
        "metric": "unsupportedClaimRisk",
        "metricValue": 11.9,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 77.5,
        "controls": {
          "questionComplexity": 26,
          "priorPressure": 20,
          "toolNeed": 24,
          "evidenceThreshold": 58
        },
        "metrics": {
          "visualCitation": 80.8,
          "toolAgreement": 70.8,
          "contradictionCatch": 71.2,
          "unsupportedClaimRisk": 11.9,
          "readiness": 77.5
        },
        "severity": 0
      },
      {
        "id": "cvpr-vlm-answer-verification-bench/attribute-relation",
        "bench": "cvpr-vlm-answer-verification-bench",
        "page": "cvpr-vlm-answer-verification-bench.html",
        "registry": "analysis/cvpr_vlm_answer_verification_bench/registry.json",
        "system": "vlm-grounded-reasoning",
        "cluster": "Vision-language reasoning",
        "case": "Attribute and relation claim",
        "family": "unsupported answer",
        "metric": "unsupportedClaimRisk",
        "metricValue": 18.0,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 76.8,
        "controls": {
          "questionComplexity": 46,
          "priorPressure": 34,
          "toolNeed": 38,
          "evidenceThreshold": 66
        },
        "metrics": {
          "visualCitation": 78.2,
          "toolAgreement": 72.4,
          "contradictionCatch": 75.3,
          "unsupportedClaimRisk": 18.0,
          "readiness": 76.8
        },
        "severity": 0
      },
      {
        "id": "cvpr-vlm-answer-verification-bench/ocr-trap",
        "bench": "cvpr-vlm-answer-verification-bench",
        "page": "cvpr-vlm-answer-verification-bench.html",
        "registry": "analysis/cvpr_vlm_answer_verification_bench/registry.json",
        "system": "vlm-grounded-reasoning",
        "cluster": "Vision-language reasoning",
        "case": "OCR trap with plausible prior",
        "family": "unsupported answer",
        "metric": "unsupportedClaimRisk",
        "metricValue": 27.1,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 76.8,
        "controls": {
          "questionComplexity": 62,
          "priorPressure": 58,
          "toolNeed": 70,
          "evidenceThreshold": 76
        },
        "metrics": {
          "visualCitation": 74.7,
          "toolAgreement": 77.5,
          "contradictionCatch": 82.0,
          "unsupportedClaimRisk": 27.1,
          "readiness": 76.8
        },
        "severity": 0
      },
      {
        "id": "cvpr-vlm-answer-verification-bench/counterfactual-object",
        "bench": "cvpr-vlm-answer-verification-bench",
        "page": "cvpr-vlm-answer-verification-bench.html",
        "registry": "analysis/cvpr_vlm_answer_verification_bench/registry.json",
        "system": "vlm-grounded-reasoning",
        "cluster": "Vision-language reasoning",
        "case": "Counterfactual unsupported object",
        "family": "unsupported answer",
        "metric": "unsupportedClaimRisk",
        "metricValue": 32.2,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 76.5,
        "controls": {
          "questionComplexity": 78,
          "priorPressure": 72,
          "toolNeed": 82,
          "evidenceThreshold": 84
        },
        "metrics": {
          "visualCitation": 72.5,
          "toolAgreement": 79.2,
          "contradictionCatch": 86.1,
          "unsupportedClaimRisk": 32.2,
          "readiness": 76.5
        },
        "severity": 0
      }
    ]
  },
  "playbook": {
    "summary": {
      "plays": 8,
      "sourceDemos": 41,
      "sourceScenarios": 8,
      "sourcePairings": 328,
      "clustersCovered": 8,
      "scenariosCovered": 7,
      "critical": 0,
      "high": 0,
      "focused": 8,
      "targetReadinessFloor": 68,
      "complete": 8,
      "incomplete": 0
    },
    "plays": [
      {
        "slug": "01-driving-and-vision-language-action-safety-critical-action",
        "rank": 1,
        "cluster": "Driving and vision-language-action",
        "visualMode": "safety",
        "scenario": "safety-critical-action",
        "weakestDemo": "Driving VLA action gate",
        "currentReadiness": 73.6,
        "averageReadiness": 86.7,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Closed-loop scene and action safety bench",
        "controlSurface": "hazard density, actor speed, occlusion, and action confidence",
        "instrumentation": "lane/actor grounding, time-to-collision, rule violation, and abstention traces",
        "acceptanceGate": "raise safety-critical readiness above 62 while keeping risk below 35",
        "arenaFinding": "ready: safety clears the scenario gate",
        "implementationPage": "cvpr-driving-safety-bench.html",
        "deliverables": [
          "upgrade the Driving VLA action gate demo with scenario controls",
          "add visible safety instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      },
      {
        "slug": "02-adversarial-robustness-adversarial-media",
        "rank": 2,
        "cluster": "Adversarial robustness",
        "visualMode": "trust",
        "scenario": "adversarial-media",
        "weakestDemo": "Provenance and adversarial gate",
        "currentReadiness": 74.6,
        "averageReadiness": 86.5,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Adversarial provenance evidence bench",
        "controlSurface": "attack strength, generation source, watermark visibility, and unlearning probe",
        "instrumentation": "real/edited/generated labels, perturbation heatmaps, provenance confidence, and leakage flags",
        "acceptanceGate": "raise adversarial-media readiness above 62 with evidence above 50",
        "arenaFinding": "ready: trust clears the scenario gate",
        "implementationPage": "cvpr-adversarial-provenance-bench.html",
        "deliverables": [
          "upgrade the Provenance and adversarial gate demo with scenario controls",
          "add visible trust instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      },
      {
        "slug": "03-vision-for-science-and-medicine-clinical-shift",
        "rank": 3,
        "cluster": "Vision for science and medicine",
        "visualMode": "medical",
        "scenario": "clinical-shift",
        "weakestDemo": "Measure domain shift",
        "currentReadiness": 76.4,
        "averageReadiness": 86.8,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Clinical shift validation bench",
        "controlSurface": "scanner/site shift, cohort mix, label noise, and review threshold",
        "instrumentation": "uncertainty calibration, domain-shift panels, triage queues, and cohort slices",
        "acceptanceGate": "raise clinical-shift readiness above 62 with no block decisions",
        "arenaFinding": "ready: medical clears the scenario gate",
        "implementationPage": "cvpr-clinical-shift-bench.html",
        "deliverables": [
          "upgrade the Measure domain shift demo with scenario controls",
          "add visible medical instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      },
      {
        "slug": "04-video-generation-and-world-models-temporal-rollout",
        "rank": 4,
        "cluster": "Video generation and world models",
        "visualMode": "temporal",
        "scenario": "temporal-rollout",
        "weakestDemo": "Temporal consistency rollout",
        "currentReadiness": 78.0,
        "averageReadiness": 86.8,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Long-horizon world rollout bench",
        "controlSurface": "rollout length, identity density, physics violations, and memory window",
        "instrumentation": "identity tracks, contact events, drift curves, and future plausibility scores",
        "acceptanceGate": "raise temporal-rollout readiness above 68 with drift under the review threshold",
        "arenaFinding": "ready: temporal clears the scenario gate",
        "implementationPage": "cvpr-temporal-rollout-bench.html",
        "deliverables": [
          "upgrade the Temporal consistency rollout demo with scenario controls",
          "add visible temporal instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      },
      {
        "slug": "05-efficient-vision-compute-constrained",
        "rank": 5,
        "cluster": "Efficient vision",
        "visualMode": "efficiency",
        "scenario": "compute-constrained",
        "weakestDemo": "Token pruning and serving tradeoff",
        "currentReadiness": 79.8,
        "averageReadiness": 86.7,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Compute budget serving bench",
        "controlSurface": "token budget, quantization level, student routing threshold, and escalation cost",
        "instrumentation": "latency, retained evidence, quality floor, and escalation counts",
        "acceptanceGate": "raise compute-constrained readiness above 68 while preserving evidence above 55",
        "arenaFinding": "ready: efficiency clears the scenario gate",
        "implementationPage": "cvpr-compute-serving-bench.html",
        "deliverables": [
          "upgrade the Token pruning and serving tradeoff demo with scenario controls",
          "add visible efficiency instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      },
      {
        "slug": "06-image-restoration-noisy-restoration",
        "rank": 6,
        "cluster": "Image restoration",
        "visualMode": "restoration",
        "scenario": "noisy-restoration",
        "weakestDemo": "Diagnose degradation",
        "currentReadiness": 81.4,
        "averageReadiness": 87.8,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Downstream restoration fidelity bench",
        "controlSurface": "blur, noise, compression, low light, and hallucination penalty",
        "instrumentation": "artifact maps, fidelity gates, downstream task score, and fabricated-detail warnings",
        "acceptanceGate": "raise noisy-restoration readiness above 68 without lowering downstream utility",
        "arenaFinding": "ready: restoration clears the scenario gate",
        "implementationPage": "cvpr-restoration-fidelity-bench.html",
        "deliverables": [
          "upgrade the Diagnose degradation demo with scenario controls",
          "add visible restoration instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      },
      {
        "slug": "07-open-vocabulary-vision-long-tail-open-world",
        "rank": 7,
        "cluster": "Open-vocabulary vision",
        "visualMode": "localization",
        "scenario": "long-tail-open-world",
        "weakestDemo": "Open-vocabulary region grounding",
        "currentReadiness": 81.4,
        "averageReadiness": 88.1,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Long-tail open-vocabulary grounding bench",
        "controlSurface": "query rarity, distractor overlap, box ambiguity, and evidence threshold",
        "instrumentation": "region proposals, text-region scores, long-tail recall, and unsupported-answer flags",
        "acceptanceGate": "raise long-tail readiness above 68 and reduce localization evidence gaps",
        "arenaFinding": "ready: localization clears the scenario gate",
        "implementationPage": "cvpr-long-tail-grounding-bench.html",
        "deliverables": [
          "upgrade the Open-vocabulary region grounding demo with scenario controls",
          "add visible localization instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      },
      {
        "slug": "08-vision-language-reasoning-safety-critical-action",
        "rank": 8,
        "cluster": "Vision-language reasoning",
        "visualMode": "grounding",
        "scenario": "safety-critical-action",
        "weakestDemo": "Grounded reasoning vs hallucination",
        "currentReadiness": 82.7,
        "averageReadiness": 85.5,
        "targetReadiness": 68,
        "priority": "focused",
        "title": "Grounded VLM answer verification bench",
        "controlSurface": "visual evidence strength, question ambiguity, unsupported-claim pressure, and tool verification",
        "instrumentation": "cited regions, answer support scores, hallucination checks, and tool-route traces",
        "acceptanceGate": "raise grounded-answer readiness above 68 while keeping unsupported claims below review",
        "arenaFinding": "ready: grounding clears the scenario gate",
        "implementationPage": "cvpr-vlm-answer-verification-bench.html",
        "deliverables": [
          "upgrade the Grounded reasoning vs hallucination demo with scenario controls",
          "add visible grounding instrumentation and failure traces",
          "feed measured deltas back into the arena registry",
          "add a core test proving readiness lift and bounded risk"
        ]
      }
    ]
  },
  "operations": {
    "summary": {
      "dashboard": "cvpr-colab-operations-dashboard",
      "status": "ready",
      "jobs": 14,
      "runners": 14,
      "cachedResults": 56,
      "liveIntakeResults": 56,
      "promotionResults": 56,
      "deltaStatus": "release",
      "deltaRegressions": 0,
      "maxReadinessDrop": 0.0,
      "importIssues": 0,
      "releaseStatus": "release",
      "ledgerStatus": "release",
      "receiptStatus": "ready",
      "receiptArtifacts": 7,
      "themeMatrixStatus": "release",
      "coveredThemes": 8,
      "remediationStatus": "ready",
      "blockTasks": 0,
      "sourceBlockTasks": 0,
      "sprintPlanStatus": "ready",
      "sprintTasks": 0,
      "validationGate": "release",
      "fullStackStatus": "valid",
      "steps": 53,
      "packageTests": 148,
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
      "handoffZip": "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip",
      "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
      "intakeGate": "scripts/stage_cvpr_live_colab_export.py",
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py"
    },
    "sources": {
      "worker": "analysis/cvpr_colab_gpu_worker/registry.json",
      "handoff": "analysis/cvpr_colab_handoff_package/registry.json",
      "intake": "analysis/cvpr_colab_live_intake/registry.json",
      "promotion": "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json",
      "delta": "analysis/cvpr_colab_promotion_delta/registry.json",
      "release": "analysis/cvpr_colab_release_bundle/registry.json",
      "ledger": "analysis/cvpr_colab_evidence_ledger/registry.json",
      "receipt": "analysis/cvpr_colab_run_receipt/registry.json",
      "themeMatrix": "analysis/cvpr_theme_release_matrix/registry.json",
      "remediation": "analysis/cvpr_remediation_board/registry.json",
      "sprintPlan": "analysis/cvpr_remediation_sprint_plan/registry.json",
      "validation": "analysis/cvpr_validation_center/registry.json"
    },
    "worker": {
      "summary": {
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
      "jobs": [
        {
          "id": "open-vocab-grounding",
          "title": "Open-vocabulary grounding GPU run",
          "bench": "cvpr-long-tail-grounding-bench",
          "page": "cvpr-long-tail-grounding-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "siglip-base-patch16-224",
            "grounding-dino-tiny",
            "sam-vit-b"
          ],
          "inputs": [
            "image",
            "text_query",
            "candidate_regions"
          ],
          "outputs": [
            "boxes",
            "region_scores",
            "embedding_scores",
            "localized_evidence"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 1
        },
        {
          "id": "restoration-fidelity",
          "title": "Restoration fidelity GPU run",
          "bench": "cvpr-restoration-fidelity-bench",
          "page": "cvpr-restoration-fidelity-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "swinir-lightweight",
            "real-esrgan-x2"
          ],
          "inputs": [
            "degraded_image",
            "degradation_controls"
          ],
          "outputs": [
            "restored_image",
            "artifact_map",
            "downstream_score"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 2
        },
        {
          "id": "adversarial-provenance",
          "title": "Adversarial provenance GPU run",
          "bench": "cvpr-adversarial-provenance-bench",
          "page": "cvpr-adversarial-provenance-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "watermark-detector",
            "clip-perturbation-probe"
          ],
          "inputs": [
            "image",
            "attack_controls",
            "watermark_controls"
          ],
          "outputs": [
            "provenance_confidence",
            "attack_heatmap",
            "leakage_risk"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 3
        },
        {
          "id": "temporal-rollout",
          "title": "Temporal rollout GPU run",
          "bench": "cvpr-temporal-rollout-bench",
          "page": "cvpr-temporal-rollout-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "video-feature-tracker",
            "raft-lite",
            "world-rollout-probe"
          ],
          "inputs": [
            "video_clip",
            "tracking_controls"
          ],
          "outputs": [
            "identity_tracks",
            "contact_events",
            "drift_curve"
          ],
          "gpuClass": "L4/A100",
          "priority": 4
        },
        {
          "id": "clinical-shift",
          "title": "Clinical shift validation GPU run",
          "bench": "cvpr-clinical-shift-bench",
          "page": "cvpr-clinical-shift-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "dicom-embedding-shift-probe",
            "temperature-calibration-head",
            "uncertainty-triage-head"
          ],
          "inputs": [
            "medical_image_batch",
            "site_metadata",
            "review_controls"
          ],
          "outputs": [
            "domain_embeddings",
            "calibration_curve",
            "triage_scores",
            "clinical_evidence"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 5
        },
        {
          "id": "compute-serving",
          "title": "Compute constrained serving GPU run",
          "bench": "cvpr-compute-serving-bench",
          "page": "cvpr-compute-serving-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "quantized-vision-encoder",
            "student-router",
            "latency-profiler"
          ],
          "inputs": [
            "image_batch",
            "serving_controls",
            "escalation_policy"
          ],
          "outputs": [
            "latency_profile",
            "quality_floor",
            "routing_trace",
            "retained_evidence"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 6
        },
        {
          "id": "constraint-generation",
          "title": "Constraint preserving generation GPU run",
          "bench": "cvpr-constraint-generation-bench",
          "page": "cvpr-constraint-generation-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "layout-controlnet",
            "identity-embedding-lock",
            "preference-reward-probe"
          ],
          "inputs": [
            "source_image",
            "edit_prompt",
            "constraint_controls"
          ],
          "outputs": [
            "edited_image",
            "layout_mask",
            "identity_embedding_delta",
            "reward_trace"
          ],
          "gpuClass": "L4/A100",
          "priority": 7
        },
        {
          "id": "driving-safety",
          "title": "Driving safety closed-loop GPU run",
          "bench": "cvpr-driving-safety-bench",
          "page": "cvpr-driving-safety-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "vla-scene-grounder",
            "ttc-risk-head",
            "safety-rule-monitor"
          ],
          "inputs": [
            "driving_clip",
            "hazard_controls",
            "action_confidence"
          ],
          "outputs": [
            "scene_grounding_map",
            "time_to_collision",
            "risk_trace",
            "rule_violations"
          ],
          "gpuClass": "L4/A100",
          "priority": 8
        },
        {
          "id": "depth-normal-consistency",
          "title": "Depth-normal consistency GPU run",
          "bench": "cvpr-depth-normal-consistency-bench",
          "page": "cvpr-depth-normal-consistency-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-cuda-depth-normal-probe",
            "finite-difference-normal-consistency"
          ],
          "inputs": [
            "depth_map",
            "normal_controls",
            "scene_geometry"
          ],
          "outputs": [
            "normal_map",
            "consistency_curve",
            "depth_residual_map",
            "surface_alerts"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 9
        },
        {
          "id": "corruption-robustness",
          "title": "Corruption robustness GPU run",
          "bench": "cvpr-corruption-robustness-bench",
          "page": "cvpr-corruption-robustness-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torchvision-resnet18",
            "clean-corrupted-logit-delta"
          ],
          "inputs": [
            "image_batch",
            "corruption_controls",
            "severity_schedule"
          ],
          "outputs": [
            "feature_retention",
            "label_drift_curve",
            "confidence_collapse",
            "corruption_report"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 10
        },
        {
          "id": "prompt-segmentation-robustness",
          "title": "Prompt segmentation robustness GPU run",
          "bench": "cvpr-prompt-segmentation-robustness-bench",
          "page": "cvpr-prompt-segmentation-robustness-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torchvision-maskrcnn-resnet50-fpn",
            "mask-rcnn-click-robustness-proxy"
          ],
          "inputs": [
            "image",
            "prompt_points",
            "prompt_variants"
          ],
          "outputs": [
            "mask_predictions",
            "click_sensitivity",
            "iou_trace",
            "prompt_failure_map"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 11
        },
        {
          "id": "video-identity-tracking",
          "title": "Video identity tracking GPU run",
          "bench": "cvpr-video-identity-tracking-bench",
          "page": "cvpr-video-identity-tracking-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-cuda-centroid-assignment-tracker",
            "mask-sequence-identity-drift"
          ],
          "inputs": [
            "video_clip",
            "identity_seed",
            "tracking_controls"
          ],
          "outputs": [
            "track_sequence",
            "identity_drift_curve",
            "handoff_events",
            "failure_frames"
          ],
          "gpuClass": "T4/L4/A100",
          "priority": 12
        },
        {
          "id": "metric-geometry",
          "title": "Metric geometry GPU run",
          "bench": "cvpr-metric-geometry-bench",
          "page": "cvpr-metric-geometry-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-pose-bundle-adjuster",
            "metric-scale-probe",
            "surface-consistency-head"
          ],
          "inputs": [
            "multi_view_images",
            "camera_controls",
            "scale_controls"
          ],
          "outputs": [
            "pose_graph",
            "scale_trace",
            "surface_residual_map",
            "topology_warnings"
          ],
          "gpuClass": "L4/A100",
          "priority": 9
        },
        {
          "id": "gaussian-splatting",
          "title": "Gaussian Splatting GPU run",
          "bench": "cvpr-gaussian-splatting-bench",
          "page": "cvpr-gaussian-splatting-bench.html",
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-splat-renderer",
            "semantic-splat-attach",
            "provenance-trace-head"
          ],
          "inputs": [
            "scene_views",
            "splat_controls",
            "edit_controls"
          ],
          "outputs": [
            "novel_view_renders",
            "semantic_splat_map",
            "provenance_trace",
            "edit_leakage_report"
          ],
          "gpuClass": "L4/A100",
          "priority": 10
        }
      ],
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
      "notebookNativeJobIds": [
        "open-vocab-grounding",
        "restoration-fidelity",
        "adversarial-provenance",
        "temporal-rollout",
        "clinical-shift",
        "compute-serving",
        "constraint-generation",
        "driving-safety",
        "metric-geometry",
        "gaussian-splatting"
      ],
      "externalLiveJobIds": [
        "depth-normal-consistency",
        "corruption-robustness",
        "prompt-segmentation-robustness",
        "video-identity-tracking"
      ],
      "runManifest": {
        "runtimePlane": "google-colab-pro-plus",
        "controlPlane": "local-static-cvpr-site",
        "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
        "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "jobs": [
          {
            "jobId": "open-vocab-grounding",
            "bench": "cvpr-long-tail-grounding-bench",
            "page": "cvpr-long-tail-grounding-bench.html",
            "priority": 1,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "siglip-base-patch16-224",
              "grounding-dino-tiny",
              "sam-vit-b"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
            "resultFilter": {
              "jobId": "open-vocab-grounding",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "bench": "cvpr-restoration-fidelity-bench",
            "page": "cvpr-restoration-fidelity-bench.html",
            "priority": 2,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "swinir-lightweight",
              "real-esrgan-x2"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
            "resultFilter": {
              "jobId": "restoration-fidelity",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "bench": "cvpr-adversarial-provenance-bench",
            "page": "cvpr-adversarial-provenance-bench.html",
            "priority": 3,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "watermark-detector",
              "clip-perturbation-probe"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
            "resultFilter": {
              "jobId": "adversarial-provenance",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "bench": "cvpr-temporal-rollout-bench",
            "page": "cvpr-temporal-rollout-bench.html",
            "priority": 4,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "video-feature-tracker",
              "raft-lite",
              "world-rollout-probe"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
            "resultFilter": {
              "jobId": "temporal-rollout",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "clinical-shift",
            "bench": "cvpr-clinical-shift-bench",
            "page": "cvpr-clinical-shift-bench.html",
            "priority": 5,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "dicom-embedding-shift-probe",
              "temperature-calibration-head",
              "uncertainty-triage-head"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
            "resultFilter": {
              "jobId": "clinical-shift",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "compute-serving",
            "bench": "cvpr-compute-serving-bench",
            "page": "cvpr-compute-serving-bench.html",
            "priority": 6,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "quantized-vision-encoder",
              "student-router",
              "latency-profiler"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
            "resultFilter": {
              "jobId": "compute-serving",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "bench": "cvpr-constraint-generation-bench",
            "page": "cvpr-constraint-generation-bench.html",
            "priority": 7,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "layout-controlnet",
              "identity-embedding-lock",
              "preference-reward-probe"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
            "resultFilter": {
              "jobId": "constraint-generation",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "driving-safety",
            "bench": "cvpr-driving-safety-bench",
            "page": "cvpr-driving-safety-bench.html",
            "priority": 8,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "vla-scene-grounder",
              "ttc-risk-head",
              "safety-rule-monitor"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
            "resultFilter": {
              "jobId": "driving-safety",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "bench": "cvpr-depth-normal-consistency-bench",
            "page": "cvpr-depth-normal-consistency-bench.html",
            "priority": 9,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-depth-normal-probe",
              "finite-difference-normal-consistency"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
            "resultFilter": {
              "jobId": "depth-normal-consistency",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "bench": "cvpr-corruption-robustness-bench",
            "page": "cvpr-corruption-robustness-bench.html",
            "priority": 10,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-resnet18",
              "clean-corrupted-logit-delta"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
            "resultFilter": {
              "jobId": "corruption-robustness",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "page": "cvpr-prompt-segmentation-robustness-bench.html",
            "priority": 11,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-maskrcnn-resnet50-fpn",
              "mask-rcnn-click-robustness-proxy"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
            "resultFilter": {
              "jobId": "prompt-segmentation-robustness",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "bench": "cvpr-video-identity-tracking-bench",
            "page": "cvpr-video-identity-tracking-bench.html",
            "priority": 12,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-centroid-assignment-tracker",
              "mask-sequence-identity-drift"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
            "resultFilter": {
              "jobId": "video-identity-tracking",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "bench": "cvpr-metric-geometry-bench",
            "page": "cvpr-metric-geometry-bench.html",
            "priority": 13,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-pose-bundle-adjuster",
              "metric-scale-probe",
              "surface-consistency-head"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
            "resultFilter": {
              "jobId": "metric-geometry",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "bench": "cvpr-gaussian-splatting-bench",
            "page": "cvpr-gaussian-splatting-bench.html",
            "priority": 14,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-splat-renderer",
              "semantic-splat-attach",
              "provenance-trace-head"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
            "resultFilter": {
              "jobId": "gaussian-splatting",
              "mode": "cached-real"
            }
          }
        ]
      },
      "cachedResults": [
        {
          "jobId": "open-vocab-grounding",
          "caseId": "common-clean",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:01:17Z",
          "model": {
            "embedding": "google/siglip-base-patch16-224",
            "detector": "IDEA-Research/grounding-dino-tiny"
          },
          "inputs": {
            "textQuery": "teal rectangle.",
            "controls": {
              "queryRarity": 18,
              "distractorOverlap": 16,
              "boxAmbiguity": 18,
              "evidenceThreshold": 54
            },
            "asset": "synthetic://common-clean"
          },
          "outputs": {
            "boxes": [
              {
                "label": "teal rectangle",
                "xywh": [
                  0.178,
                  0.216,
                  0.305,
                  0.288
                ],
                "score": 0.742
              },
              {
                "label": "teal rectangle",
                "xywh": [
                  0.512,
                  0.255,
                  0.272,
                  0.266
                ],
                "score": 0.417
              }
            ],
            "regionScores": {
              "target": 26.8,
              "longTail": 39.7
            },
            "embeddingScore": 8.3,
            "localizedEvidence": 50.2
          },
          "metrics": {
            "readiness": 48.0,
            "proposalRecall": 74.2,
            "textRegionScore": 26.8,
            "longTailRecall": 39.7,
            "localizedEvidence": 50.2,
            "unsupportedRisk": 21.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench",
            "execution": "transformers-grounding-dino-siglip-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-visible",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:01:18Z",
          "model": {
            "embedding": "google/siglip-base-patch16-224",
            "detector": "IDEA-Research/grounding-dino-tiny"
          },
          "inputs": {
            "textQuery": "teal target rectangle.",
            "controls": {
              "queryRarity": 66,
              "distractorOverlap": 12,
              "boxAmbiguity": 34,
              "evidenceThreshold": 62
            },
            "asset": "synthetic://rare-visible"
          },
          "outputs": {
            "boxes": [
              {
                "label": "teal target rectangle",
                "xywh": [
                  0.178,
                  0.216,
                  0.305,
                  0.288
                ],
                "score": 0.752
              },
              {
                "label": "teal target rectangle",
                "xywh": [
                  0.522,
                  0.256,
                  0.273,
                  0.266
                ],
                "score": 0.381
              }
            ],
            "regionScores": {
              "target": 26.7,
              "longTail": 43.2
            },
            "embeddingScore": 7.8,
            "localizedEvidence": 52.2
          },
          "metrics": {
            "readiness": 49.4,
            "proposalRecall": 75.2,
            "textRegionScore": 26.7,
            "longTailRecall": 43.2,
            "localizedEvidence": 52.2,
            "unsupportedRisk": 21.2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench",
            "execution": "transformers-grounding-dino-siglip-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-distractors",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:01:18Z",
          "model": {
            "embedding": "google/siglip-base-patch16-224",
            "detector": "IDEA-Research/grounding-dino-tiny"
          },
          "inputs": {
            "textQuery": "teal target rectangle near orange distractor.",
            "controls": {
              "queryRarity": 78,
              "distractorOverlap": 28,
              "boxAmbiguity": 28,
              "evidenceThreshold": 76
            },
            "asset": "synthetic://rare-distractors"
          },
          "outputs": {
            "boxes": [
              {
                "label": "teal target rectangle orange distract",
                "xywh": [
                  0.177,
                  0.216,
                  0.307,
                  0.289
                ],
                "score": 0.794
              },
              {
                "label": "orange distractor",
                "xywh": [
                  0.484,
                  0.257,
                  0.273,
                  0.266
                ],
                "score": 0.587
              }
            ],
            "regionScores": {
              "target": 93.1,
              "longTail": 85.2
            },
            "embeddingScore": 98.4,
            "localizedEvidence": 84.5
          },
          "metrics": {
            "readiness": 88.0,
            "proposalRecall": 79.4,
            "textRegionScore": 93.1,
            "longTailRecall": 85.2,
            "localizedEvidence": 84.5,
            "unsupportedRisk": 8.9
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench",
            "execution": "transformers-grounding-dino-siglip-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "unsupported-query",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:01:18Z",
          "model": {
            "embedding": "google/siglip-base-patch16-224",
            "detector": "IDEA-Research/grounding-dino-tiny"
          },
          "inputs": {
            "textQuery": "transparent glass elephant.",
            "controls": {
              "queryRarity": 82,
              "distractorOverlap": 30,
              "boxAmbiguity": 32,
              "evidenceThreshold": 84
            },
            "asset": "synthetic://unsupported-query"
          },
          "outputs": {
            "boxes": [
              {
                "label": "transparent glass elephant",
                "xywh": [
                  0.178,
                  0.216,
                  0.304,
                  0.288
                ],
                "score": 0.606
              },
              {
                "label": "transparent glass elephant",
                "xywh": [
                  0.48,
                  0.256,
                  0.271,
                  0.266
                ],
                "score": 0.524
              },
              {
                "label": "transparent glass elephant",
                "xywh": [
                  0.178,
                  0.216,
                  0.575,
                  0.306
                ],
                "score": 0.285
              }
            ],
            "regionScores": {
              "target": 17.0,
              "longTail": 40.6
            },
            "embeddingScore": 0.0,
            "localizedEvidence": 47.0
          },
          "metrics": {
            "readiness": 44.0,
            "proposalRecall": 60.6,
            "textRegionScore": 17.0,
            "longTailRecall": 40.6,
            "localizedEvidence": 47.0,
            "unsupportedRisk": 24.9
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench",
            "execution": "transformers-grounding-dino-siglip-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
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
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "clean-camera",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:04:05Z",
          "model": {
            "detector": "openai/clip-vit-base-patch32",
            "probe": "clip-provenance-prompt-bank"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 0,
              "generationSource": 56,
              "watermarkVisibility": 100,
              "unlearningProbe": 0
            },
            "asset": "synthetic://clean-camera"
          },
          "outputs": {
            "provenanceConfidence": 50.8,
            "attackHeatmap": "synthetic://adversarial/clean-camera-clip-heatmap.png",
            "leakageRisk": 1.8,
            "evidence": 52.2,
            "clipProbeScores": {
              "a clean camera photograph": 41.3,
              "a synthetic generated image": 45.2,
              "an edited social media image": 0.8,
              "an adversarially perturbed image": 6.6,
              "a watermarked image": 6.1
            }
          },
          "metrics": {
            "readiness": 66.8,
            "attackCoverage": 3.7,
            "provenanceConfidence": 50.8,
            "leakageRisk": 1.8,
            "evidence": 52.2,
            "risk": 11.6
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench",
            "execution": "transformers-clip-provenance-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "edited-social-post",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:04:05Z",
          "model": {
            "detector": "openai/clip-vit-base-patch32",
            "probe": "clip-provenance-prompt-bank"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 0,
              "generationSource": 64,
              "watermarkVisibility": 98,
              "unlearningProbe": 10
            },
            "asset": "synthetic://edited-social-post"
          },
          "outputs": {
            "provenanceConfidence": 39.8,
            "attackHeatmap": "synthetic://adversarial/edited-social-post-clip-heatmap.png",
            "leakageRisk": 4.4,
            "evidence": 44.2,
            "clipProbeScores": {
              "a clean camera photograph": 0.7,
              "a synthetic generated image": 91.0,
              "an edited social media image": 1.6,
              "an adversarially perturbed image": 4.2,
              "a watermarked image": 2.4
            }
          },
          "metrics": {
            "readiness": 57.7,
            "attackCoverage": 2.6,
            "provenanceConfidence": 39.8,
            "leakageRisk": 4.4,
            "evidence": 44.2,
            "risk": 23.7
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench",
            "execution": "transformers-clip-provenance-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "synthetic-watermarked",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:04:05Z",
          "model": {
            "detector": "openai/clip-vit-base-patch32",
            "probe": "clip-provenance-prompt-bank"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 0,
              "generationSource": 84,
              "watermarkVisibility": 94,
              "unlearningProbe": 44
            },
            "asset": "synthetic://synthetic-watermarked"
          },
          "outputs": {
            "provenanceConfidence": 39.1,
            "attackHeatmap": "synthetic://adversarial/synthetic-watermarked-clip-heatmap.png",
            "leakageRisk": 14.1,
            "evidence": 41.5,
            "clipProbeScores": {
              "a clean camera photograph": 0.0,
              "a synthetic generated image": 99.1,
              "an edited social media image": 0.0,
              "an adversarially perturbed image": 0.1,
              "a watermarked image": 0.8
            }
          },
          "metrics": {
            "readiness": 53.8,
            "attackCoverage": 0.1,
            "provenanceConfidence": 39.1,
            "leakageRisk": 14.1,
            "evidence": 41.5,
            "risk": 29.7
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench",
            "execution": "transformers-clip-provenance-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "adaptive-attack",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:04:05Z",
          "model": {
            "detector": "openai/clip-vit-base-patch32",
            "probe": "clip-provenance-prompt-bank"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 12,
              "generationSource": 89,
              "watermarkVisibility": 100,
              "unlearningProbe": 0
            },
            "asset": "synthetic://adaptive-attack"
          },
          "outputs": {
            "provenanceConfidence": 39.9,
            "attackHeatmap": "synthetic://adversarial/adaptive-attack-clip-heatmap.png",
            "leakageRisk": 13.1,
            "evidence": 42.8,
            "clipProbeScores": {
              "a clean camera photograph": 0.7,
              "a synthetic generated image": 85.7,
              "an edited social media image": 1.7,
              "an adversarially perturbed image": 8.1,
              "a watermarked image": 3.9
            }
          },
          "metrics": {
            "readiness": 53.9,
            "attackCoverage": 19.1,
            "provenanceConfidence": 39.9,
            "leakageRisk": 13.1,
            "evidence": 42.8,
            "risk": 32.7
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench",
            "execution": "transformers-clip-provenance-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "short-stable",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:05:38Z",
          "model": {
            "tracker": "torchvision-raft-small",
            "flow": "Raft_Small_Weights.C_T_V2",
            "rolloutProbe": "cuda-optical-flow-consistency"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 24,
              "identityDensity": 28,
              "physicsViolations": 14,
              "memoryWindow": 72
            },
            "asset": "synthetic://temporal/short-stable.mp4"
          },
          "outputs": {
            "identityTracks": "synthetic://temporal/short-stable-raft-tracks.json",
            "contactEvents": "synthetic://temporal/short-stable-contacts.json",
            "driftCurve": [
              2.7,
              5.4,
              8.1,
              10.8,
              13.5
            ],
            "rolloutPlausibility": 85.8,
            "flowProfile": {
              "meanMagnitude": 1.6017,
              "meanRoughness": 0.0288,
              "meanAcceleration": 0.1546,
              "elapsedMs": 1191.22,
              "pairs": 5
            }
          },
          "metrics": {
            "readiness": 86.1,
            "identityStability": 86.4,
            "contactConsistency": 85.9,
            "rolloutPlausibility": 85.8,
            "drift": 13.5,
            "memoryLoad": 24.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench",
            "execution": "torchvision-raft-small-temporal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "crowded-memory",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:05:38Z",
          "model": {
            "tracker": "torchvision-raft-small",
            "flow": "Raft_Small_Weights.C_T_V2",
            "rolloutProbe": "cuda-optical-flow-consistency"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 36,
              "identityDensity": 76,
              "physicsViolations": 26,
              "memoryWindow": 82
            },
            "asset": "synthetic://temporal/crowded-memory.mp4"
          },
          "outputs": {
            "identityTracks": "synthetic://temporal/crowded-memory-raft-tracks.json",
            "contactEvents": "synthetic://temporal/crowded-memory-contacts.json",
            "driftCurve": [
              4.3,
              8.6,
              12.9,
              17.2,
              21.6
            ],
            "rolloutPlausibility": 79.5,
            "flowProfile": {
              "meanMagnitude": 1.7887,
              "meanRoughness": 0.0288,
              "meanAcceleration": 0.0894,
              "elapsedMs": 168.5,
              "pairs": 5
            }
          },
          "metrics": {
            "readiness": 80.3,
            "identityStability": 79.9,
            "contactConsistency": 82.6,
            "rolloutPlausibility": 79.5,
            "drift": 21.6,
            "memoryLoad": 40.3
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench",
            "execution": "torchvision-raft-small-temporal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "contact-heavy",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:05:38Z",
          "model": {
            "tracker": "torchvision-raft-small",
            "flow": "Raft_Small_Weights.C_T_V2",
            "rolloutProbe": "cuda-optical-flow-consistency"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 56,
              "identityDensity": 52,
              "physicsViolations": 20,
              "memoryWindow": 82
            },
            "asset": "synthetic://temporal/contact-heavy.mp4"
          },
          "outputs": {
            "identityTracks": "synthetic://temporal/contact-heavy-raft-tracks.json",
            "contactEvents": "synthetic://temporal/contact-heavy-contacts.json",
            "driftCurve": [
              3.9,
              7.9,
              11.8,
              15.7,
              19.7
            ],
            "rolloutPlausibility": 80.9,
            "flowProfile": {
              "meanMagnitude": 1.732,
              "meanRoughness": 0.0313,
              "meanAcceleration": 0.1067,
              "elapsedMs": 164.0,
              "pairs": 5
            }
          },
          "metrics": {
            "readiness": 81.9,
            "identityStability": 81.5,
            "contactConsistency": 84.3,
            "rolloutPlausibility": 80.9,
            "drift": 19.7,
            "memoryLoad": 38.8
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench",
            "execution": "torchvision-raft-small-temporal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "long-rollout-drift",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:05:38Z",
          "model": {
            "tracker": "torchvision-raft-small",
            "flow": "Raft_Small_Weights.C_T_V2",
            "rolloutProbe": "cuda-optical-flow-consistency"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 66,
              "identityDensity": 68,
              "physicsViolations": 12,
              "memoryWindow": 92
            },
            "asset": "synthetic://temporal/long-rollout-drift.mp4"
          },
          "outputs": {
            "identityTracks": "synthetic://temporal/long-rollout-drift-raft-tracks.json",
            "contactEvents": "synthetic://temporal/long-rollout-drift-contacts.json",
            "driftCurve": [
              4.1,
              8.3,
              12.4,
              16.6,
              20.7
            ],
            "rolloutPlausibility": 79.7,
            "flowProfile": {
              "meanMagnitude": 1.8144,
              "meanRoughness": 0.0331,
              "meanAcceleration": 0.1629,
              "elapsedMs": 162.79,
              "pairs": 5
            }
          },
          "metrics": {
            "readiness": 81.3,
            "identityStability": 79.0,
            "contactConsistency": 86.4,
            "rolloutPlausibility": 79.7,
            "drift": 20.7,
            "memoryLoad": 44.4
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench",
            "execution": "torchvision-raft-small-temporal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
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
        },
        {
          "jobId": "constraint-generation",
          "caseId": "light-layout-edit",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:14Z",
          "model": {
            "layout": "torch-layout-probe",
            "identity": "torch-identity-embedding-probe",
            "reward": "constraint-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 24,
              "layoutLock": 78,
              "identityLock": 82,
              "adversarialPromptPressure": 18
            },
            "asset": "synthetic://generation/light-layout-edit.png"
          },
          "outputs": {
            "editedImage": "synthetic://generation/light-layout-edit-edited.png",
            "layoutMask": "synthetic://generation/light-layout-edit-layout-mask.png",
            "identityEmbeddingDelta": 19.2,
            "rewardTrace": "synthetic://generation/light-layout-edit-reward.json"
          },
          "metrics": {
            "readiness": 78.5,
            "editPressure": 21.0,
            "constraintSatisfaction": 80.8,
            "identityPreservation": 80.2,
            "editLocality": 76.2,
            "rewardAlignment": 73.6,
            "identityDamage": 19.2,
            "provenanceRisk": 20.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench",
            "execution": "torch-layout-identity-reward-probe",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "constraint-generation",
          "caseId": "style-with-locks",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:14Z",
          "model": {
            "layout": "torch-layout-probe",
            "identity": "torch-identity-embedding-probe",
            "reward": "constraint-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 52,
              "layoutLock": 68,
              "identityLock": 80,
              "adversarialPromptPressure": 32
            },
            "asset": "synthetic://generation/style-with-locks.png"
          },
          "outputs": {
            "editedImage": "synthetic://generation/style-with-locks-edited.png",
            "layoutMask": "synthetic://generation/style-with-locks-layout-mask.png",
            "identityEmbeddingDelta": 31.3,
            "rewardTrace": "synthetic://generation/style-with-locks-reward.json"
          },
          "metrics": {
            "readiness": 70.9,
            "editPressure": 39.3,
            "constraintSatisfaction": 74.7,
            "identityPreservation": 73.7,
            "editLocality": 67.7,
            "rewardAlignment": 66.0,
            "identityDamage": 31.3,
            "provenanceRisk": 32.2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench",
            "execution": "torch-layout-identity-reward-probe",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "constraint-generation",
          "caseId": "layout-rewrite",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:14Z",
          "model": {
            "layout": "torch-layout-probe",
            "identity": "torch-identity-embedding-probe",
            "reward": "constraint-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 72,
              "layoutLock": 62,
              "identityLock": 92,
              "adversarialPromptPressure": 28
            },
            "asset": "synthetic://generation/layout-rewrite.png"
          },
          "outputs": {
            "editedImage": "synthetic://generation/layout-rewrite-edited.png",
            "layoutMask": "synthetic://generation/layout-rewrite-layout-mask.png",
            "identityEmbeddingDelta": 32.4,
            "rewardTrace": "synthetic://generation/layout-rewrite-reward.json"
          },
          "metrics": {
            "readiness": 70.5,
            "editPressure": 45.7,
            "constraintSatisfaction": 73.2,
            "identityPreservation": 75.0,
            "editLocality": 65.9,
            "rewardAlignment": 66.2,
            "identityDamage": 32.4,
            "provenanceRisk": 33.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench",
            "execution": "torch-layout-identity-reward-probe",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "constraint-generation",
          "caseId": "prompt-attack-edit",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:14Z",
          "model": {
            "layout": "torch-layout-probe",
            "identity": "torch-identity-embedding-probe",
            "reward": "constraint-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 78,
              "layoutLock": 66,
              "identityLock": 92,
              "adversarialPromptPressure": 28
            },
            "asset": "synthetic://generation/prompt-attack-edit.png"
          },
          "outputs": {
            "editedImage": "synthetic://generation/prompt-attack-edit-edited.png",
            "layoutMask": "synthetic://generation/prompt-attack-edit-layout-mask.png",
            "identityEmbeddingDelta": 34.0,
            "rewardTrace": "synthetic://generation/prompt-attack-edit-reward.json"
          },
          "metrics": {
            "readiness": 70.8,
            "editPressure": 47.8,
            "constraintSatisfaction": 74.7,
            "identityPreservation": 74.0,
            "editLocality": 66.7,
            "rewardAlignment": 66.6,
            "identityDamage": 34.0,
            "provenanceRisk": 33.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench",
            "execution": "torch-layout-identity-reward-probe",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "indoor-low-texture",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:22:34Z",
          "model": {
            "depth": "torch-cuda-depth-normal-probe",
            "surface": "finite-difference-normal-consistency"
          },
          "inputs": {
            "depthControls": {
              "textureSparsity": 68,
              "thinStructure": 24,
              "scaleAmbiguity": 54
            },
            "asset": "synthetic://depth/indoor-low-texture.png"
          },
          "outputs": {
            "depthMap": "synthetic://depth/depth-map.pt",
            "normalEnergy": 0.024086,
            "curvature": 0.004773
          },
          "metrics": {
            "readiness": 81.8,
            "depthRange": 0.7193,
            "normalConsistency": 84.4,
            "surfaceConsistency": 89.4,
            "scaleDrift": 29.1,
            "thinStructureRisk": 15.8
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-depth-normal-consistency-bench",
            "execution": "torch-cuda-depth-normal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "thin-chair-legs",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:22:34Z",
          "model": {
            "depth": "torch-cuda-depth-normal-probe",
            "surface": "finite-difference-normal-consistency"
          },
          "inputs": {
            "depthControls": {
              "textureSparsity": 38,
              "thinStructure": 78,
              "scaleAmbiguity": 32
            },
            "asset": "synthetic://depth/thin-chair-legs.png"
          },
          "outputs": {
            "depthMap": "synthetic://depth/depth-map.pt",
            "normalEnergy": 0.019778,
            "curvature": 0.003684
          },
          "metrics": {
            "readiness": 75.7,
            "depthRange": 0.6591,
            "normalConsistency": 87.9,
            "surfaceConsistency": 80.2,
            "scaleDrift": 19.5,
            "thinStructureRisk": 46.8
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-depth-normal-consistency-bench",
            "execution": "torch-cuda-depth-normal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "reflective-surface",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:22:34Z",
          "model": {
            "depth": "torch-cuda-depth-normal-probe",
            "surface": "finite-difference-normal-consistency"
          },
          "inputs": {
            "depthControls": {
              "textureSparsity": 52,
              "thinStructure": 34,
              "scaleAmbiguity": 46
            },
            "asset": "synthetic://depth/reflective-surface.png"
          },
          "outputs": {
            "depthMap": "synthetic://depth/depth-map.pt",
            "normalEnergy": 0.021851,
            "curvature": 0.004147
          },
          "metrics": {
            "readiness": 81.6,
            "depthRange": 0.6839,
            "normalConsistency": 86.3,
            "surfaceConsistency": 87.9,
            "scaleDrift": 25.3,
            "thinStructureRisk": 21.5
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-depth-normal-consistency-bench",
            "execution": "torch-cuda-depth-normal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "wide-room-scale",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:22:34Z",
          "model": {
            "depth": "torch-cuda-depth-normal-probe",
            "surface": "finite-difference-normal-consistency"
          },
          "inputs": {
            "depthControls": {
              "textureSparsity": 44,
              "thinStructure": 22,
              "scaleAmbiguity": 68
            },
            "asset": "synthetic://depth/wide-room-scale.png"
          },
          "outputs": {
            "depthMap": "synthetic://depth/depth-map.pt",
            "normalEnergy": 0.020688,
            "curvature": 0.00388
          },
          "metrics": {
            "readiness": 82.5,
            "depthRange": 0.677,
            "normalConsistency": 87.2,
            "surfaceConsistency": 90.2,
            "scaleDrift": 32.0,
            "thinStructureRisk": 14.4
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-depth-normal-consistency-bench",
            "execution": "torch-cuda-depth-normal-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "motion-blur",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:26:30Z",
          "model": {
            "classifier": "ResNet18_Weights.IMAGENET1K_V1",
            "probe": "clean-corrupted-logit-delta"
          },
          "inputs": {
            "corruptionControls": {
              "corruption": "blur",
              "severity": 46
            },
            "asset": "synthetic://robustness/motion-blur.png"
          },
          "outputs": {
            "cleanConfidence": 35.2,
            "corruptedConfidence": 66.3,
            "jsDivergence": 0.712014,
            "featureCosine": 0.940137
          },
          "metrics": {
            "readiness": 80.8,
            "robustness": 86.3,
            "confidenceCollapse": 15.0,
            "featureRetention": 94.0,
            "labelStability": 74.6,
            "severity": 46,
            "topClassChanged": 1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-corruption-robustness-bench",
            "execution": "torchvision-resnet-corruption-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "sensor-noise",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:26:30Z",
          "model": {
            "classifier": "ResNet18_Weights.IMAGENET1K_V1",
            "probe": "clean-corrupted-logit-delta"
          },
          "inputs": {
            "corruptionControls": {
              "corruption": "noise",
              "severity": 52
            },
            "asset": "synthetic://robustness/sensor-noise.png"
          },
          "outputs": {
            "cleanConfidence": 38.2,
            "corruptedConfidence": 43.1,
            "jsDivergence": 0.06174,
            "featureCosine": 0.963718
          },
          "metrics": {
            "readiness": 84.4,
            "robustness": 91.9,
            "confidenceCollapse": 10.0,
            "featureRetention": 96.4,
            "labelStability": 99.0,
            "severity": 52,
            "topClassChanged": 0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-corruption-robustness-bench",
            "execution": "torchvision-resnet-corruption-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "patch-attack",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:26:30Z",
          "model": {
            "classifier": "ResNet18_Weights.IMAGENET1K_V1",
            "probe": "clean-corrupted-logit-delta"
          },
          "inputs": {
            "corruptionControls": {
              "corruption": "patch",
              "severity": 66
            },
            "asset": "synthetic://robustness/patch-attack.png"
          },
          "outputs": {
            "cleanConfidence": 33.5,
            "corruptedConfidence": 36.9,
            "jsDivergence": 0.031526,
            "featureCosine": 0.973741
          },
          "metrics": {
            "readiness": 81.1,
            "robustness": 90.8,
            "confidenceCollapse": 11.8,
            "featureRetention": 97.4,
            "labelStability": 99.5,
            "severity": 66,
            "topClassChanged": 0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-corruption-robustness-bench",
            "execution": "torchvision-resnet-corruption-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "compression-shift",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:26:30Z",
          "model": {
            "classifier": "ResNet18_Weights.IMAGENET1K_V1",
            "probe": "clean-corrupted-logit-delta"
          },
          "inputs": {
            "corruptionControls": {
              "corruption": "compression",
              "severity": 58
            },
            "asset": "synthetic://robustness/compression-shift.png"
          },
          "outputs": {
            "cleanConfidence": 38.5,
            "corruptedConfidence": 39.9,
            "jsDivergence": 0.009099,
            "featureCosine": 0.9972
          },
          "metrics": {
            "readiness": 84.1,
            "robustness": 92.9,
            "confidenceCollapse": 9.4,
            "featureRetention": 99.7,
            "labelStability": 99.9,
            "severity": 58,
            "topClassChanged": 0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-corruption-robustness-bench",
            "execution": "torchvision-resnet-corruption-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "single-object",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:23:49Z",
          "model": {
            "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
            "promptProbe": "mask-rcnn-click-robustness-proxy"
          },
          "inputs": {
            "promptControls": {
              "objectClutter": 18,
              "promptNoise": 8,
              "occlusion": 10
            },
            "asset": "synthetic://segmentation/single-object.png"
          },
          "outputs": {
            "meanMaskConfidence": 60.7,
            "maskArea": 0.88176,
            "maskOverlap": 0.38536
          },
          "metrics": {
            "readiness": 65.4,
            "maskStability": 57.2,
            "promptSensitivity": 32.4,
            "unsupportedRegionRisk": 20.2,
            "detections": 2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
            "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "cluttered-scene",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:23:49Z",
          "model": {
            "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
            "promptProbe": "mask-rcnn-click-robustness-proxy"
          },
          "inputs": {
            "promptControls": {
              "objectClutter": 64,
              "promptNoise": 18,
              "occlusion": 24
            },
            "asset": "synthetic://segmentation/cluttered-scene.png"
          },
          "outputs": {
            "meanMaskConfidence": 66.3,
            "maskArea": 0.9091,
            "maskOverlap": 0.40537
          },
          "metrics": {
            "readiness": 62.3,
            "maskStability": 59.4,
            "promptSensitivity": 48.0,
            "unsupportedRegionRisk": 22.8,
            "detections": 2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
            "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "ambiguous-clicks",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:23:49Z",
          "model": {
            "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
            "promptProbe": "mask-rcnn-click-robustness-proxy"
          },
          "inputs": {
            "promptControls": {
              "objectClutter": 46,
              "promptNoise": 62,
              "occlusion": 18
            },
            "asset": "synthetic://segmentation/ambiguous-clicks.png"
          },
          "outputs": {
            "meanMaskConfidence": 66.7,
            "maskArea": 0.90569,
            "maskOverlap": 0.38714
          },
          "metrics": {
            "readiness": 58.3,
            "maskStability": 60.7,
            "promptSensitivity": 61.3,
            "unsupportedRegionRisk": 28.2,
            "detections": 2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
            "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "occluded-object",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:23:49Z",
          "model": {
            "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
            "promptProbe": "mask-rcnn-click-robustness-proxy"
          },
          "inputs": {
            "promptControls": {
              "objectClutter": 38,
              "promptNoise": 26,
              "occlusion": 70
            },
            "asset": "synthetic://segmentation/occluded-object.png"
          },
          "outputs": {
            "meanMaskConfidence": 66.3,
            "maskArea": 0.91259,
            "maskOverlap": 0.40266
          },
          "metrics": {
            "readiness": 57.8,
            "maskStability": 53.9,
            "promptSensitivity": 45.5,
            "unsupportedRegionRisk": 35.1,
            "detections": 2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
            "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "clean-crossing",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:24:31Z",
          "model": {
            "tracker": "torch-cuda-centroid-assignment-tracker",
            "temporalProbe": "mask-sequence-identity-drift"
          },
          "inputs": {
            "trackingControls": {
              "occlusion": 12,
              "crowding": 22,
              "velocity": 36
            },
            "asset": "synthetic://tracking/clean-crossing.mp4"
          },
          "outputs": {
            "frames": 8,
            "objects": 3,
            "temporalDelta": 0.01013,
            "trackTensor": "synthetic://tracking/clean-crossing-tracks.pt"
          },
          "metrics": {
            "readiness": 88.8,
            "identityStability": 88.9,
            "occlusionRecovery": 85.0,
            "trackContinuity": 91.5,
            "identityDrift": 1.5
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-video-identity-tracking-bench",
            "execution": "torch-cuda-video-tracking-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "identity-crossing",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:24:31Z",
          "model": {
            "tracker": "torch-cuda-centroid-assignment-tracker",
            "temporalProbe": "mask-sequence-identity-drift"
          },
          "inputs": {
            "trackingControls": {
              "occlusion": 26,
              "crowding": 68,
              "velocity": 42
            },
            "asset": "synthetic://tracking/identity-crossing.mp4"
          },
          "outputs": {
            "frames": 8,
            "objects": 3,
            "temporalDelta": 0.01697,
            "trackTensor": "synthetic://tracking/identity-crossing-tracks.pt"
          },
          "metrics": {
            "readiness": 82.6,
            "identityStability": 81.4,
            "occlusionRecovery": 79.2,
            "trackContinuity": 90.0,
            "identityDrift": 2.7
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-video-identity-tracking-bench",
            "execution": "torch-cuda-video-tracking-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "long-occlusion",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:24:31Z",
          "model": {
            "tracker": "torch-cuda-centroid-assignment-tracker",
            "temporalProbe": "mask-sequence-identity-drift"
          },
          "inputs": {
            "trackingControls": {
              "occlusion": 74,
              "crowding": 36,
              "velocity": 34
            },
            "asset": "synthetic://tracking/long-occlusion.mp4"
          },
          "outputs": {
            "frames": 8,
            "objects": 3,
            "temporalDelta": 0.014317,
            "trackTensor": "synthetic://tracking/long-occlusion-tracks.pt"
          },
          "metrics": {
            "readiness": 79.6,
            "identityStability": 79.2,
            "occlusionRecovery": 75.4,
            "trackContinuity": 91.1,
            "identityDrift": 2.3
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-video-identity-tracking-bench",
            "execution": "torch-cuda-video-tracking-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "fast-motion",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:24:31Z",
          "model": {
            "tracker": "torch-cuda-centroid-assignment-tracker",
            "temporalProbe": "mask-sequence-identity-drift"
          },
          "inputs": {
            "trackingControls": {
              "occlusion": 22,
              "crowding": 42,
              "velocity": 78
            },
            "asset": "synthetic://tracking/fast-motion.mp4"
          },
          "outputs": {
            "frames": 8,
            "objects": 3,
            "temporalDelta": 0.019914,
            "trackTensor": "synthetic://tracking/fast-motion-tracks.pt"
          },
          "metrics": {
            "readiness": 83.1,
            "identityStability": 84.0,
            "occlusionRecovery": 77.9,
            "trackContinuity": 86.7,
            "identityDrift": 3.2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-video-identity-tracking-bench",
            "execution": "torch-cuda-video-tracking-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "wide-baseline",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:31:36Z",
          "model": {
            "solver": "torch-cuda-differentiable-camera-solver",
            "geometry": "bundle-adjustment-scale-probe"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 82,
              "textureSparsity": 18,
              "scaleAmbiguity": 24,
              "surfaceComplexity": 42
            },
            "asset": "synthetic://geometry/wide-baseline.json"
          },
          "outputs": {
            "cameraRecovery": {
              "points": 204,
              "meanReprojectionError": 0.00851,
              "p95ReprojectionError": 0.01639,
              "elapsedMs": 1331.44
            },
            "scaleRecovery": {
              "trueScale": 1.13333,
              "recoveredScale": 1.11517,
              "relativeError": 0.01602
            },
            "optimizationTrace": {
              "initialLoss": 0.00534,
              "finalLoss": 0.001153,
              "iterations": 220,
              "calibratedScale": 1.19754
            }
          },
          "metrics": {
            "poseEvidence": 92.8,
            "metricEvidence": 100.0,
            "surfaceConsistency": 87.8,
            "scaleDrift": 0.6,
            "topologyRisk": 11.6,
            "readiness": 92.9
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench",
            "execution": "torch-cuda-metric-geometry-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "scale-transfer",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:31:37Z",
          "model": {
            "solver": "torch-cuda-differentiable-camera-solver",
            "geometry": "bundle-adjustment-scale-probe"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 66,
              "textureSparsity": 28,
              "scaleAmbiguity": 44,
              "surfaceComplexity": 46
            },
            "asset": "synthetic://geometry/scale-transfer.json"
          },
          "outputs": {
            "cameraRecovery": {
              "points": 196,
              "meanReprojectionError": 0.00963,
              "p95ReprojectionError": 0.0193,
              "elapsedMs": 742.4
            },
            "scaleRecovery": {
              "trueScale": 1.24444,
              "recoveredScale": 1.21153,
              "relativeError": 0.00475
            },
            "optimizationTrace": {
              "initialLoss": 0.004471,
              "finalLoss": 0.001505,
              "iterations": 220,
              "calibratedScale": 1.25036
            }
          },
          "metrics": {
            "poseEvidence": 91.7,
            "metricEvidence": 99.4,
            "surfaceConsistency": 87.2,
            "scaleDrift": 3.8,
            "topologyRisk": 12.5,
            "readiness": 92.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench",
            "execution": "torch-cuda-metric-geometry-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "thin-structure",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:31:38Z",
          "model": {
            "solver": "torch-cuda-differentiable-camera-solver",
            "geometry": "bundle-adjustment-scale-probe"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 58,
              "textureSparsity": 34,
              "scaleAmbiguity": 32,
              "surfaceComplexity": 72
            },
            "asset": "synthetic://geometry/thin-structure.json"
          },
          "outputs": {
            "cameraRecovery": {
              "points": 191,
              "meanReprojectionError": 0.01438,
              "p95ReprojectionError": 0.02784,
              "elapsedMs": 759.71
            },
            "scaleRecovery": {
              "trueScale": 1.17778,
              "recoveredScale": 1.15349,
              "relativeError": 0.01432
            },
            "optimizationTrace": {
              "initialLoss": 0.005345,
              "finalLoss": 0.00322,
              "iterations": 220,
              "calibratedScale": 1.19465
            }
          },
          "metrics": {
            "poseEvidence": 90.2,
            "metricEvidence": 97.3,
            "surfaceConsistency": 83.5,
            "scaleDrift": 3.4,
            "topologyRisk": 18.3,
            "readiness": 89.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench",
            "execution": "torch-cuda-metric-geometry-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "low-texture-indoor",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:31:38Z",
          "model": {
            "solver": "torch-cuda-differentiable-camera-solver",
            "geometry": "bundle-adjustment-scale-probe"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 54,
              "textureSparsity": 58,
              "scaleAmbiguity": 48,
              "surfaceComplexity": 50
            },
            "asset": "synthetic://geometry/low-texture-indoor.json"
          },
          "outputs": {
            "cameraRecovery": {
              "points": 158,
              "meanReprojectionError": 0.01534,
              "p95ReprojectionError": 0.02952,
              "elapsedMs": 768.1
            },
            "scaleRecovery": {
              "trueScale": 1.26667,
              "recoveredScale": 1.23104,
              "relativeError": 0.01505
            },
            "optimizationTrace": {
              "initialLoss": 0.005659,
              "finalLoss": 0.003549,
              "iterations": 220,
              "calibratedScale": 1.2476
            }
          },
          "metrics": {
            "poseEvidence": 88.1,
            "metricEvidence": 95.3,
            "surfaceConsistency": 86.0,
            "scaleDrift": 6.3,
            "topologyRisk": 13.9,
            "readiness": 89.4
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench",
            "execution": "torch-cuda-metric-geometry-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "dense-novel-view",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:29:24Z",
          "model": {
            "renderer": "torch-cuda-gaussian-splat-compositor",
            "semanticProbe": "splat-label-edit-probe"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 86,
              "splatDensity": 78,
              "semanticEntropy": 24,
              "provenanceVisibility": 70
            },
            "asset": "synthetic://splat/dense-novel-view.ply"
          },
          "outputs": {
            "renderProfile": {
              "splats": 337,
              "views": 5,
              "elapsedMs": 71.17,
              "adjacentFrameDelta": 0.13833
            },
            "semanticProbe": {
              "meanConfidence": 0.5302,
              "margin": 0.45706,
              "editLeakageRatio": 0.05605,
              "editLocality": 0.94395
            },
            "provenanceProbe": {
              "visibility": 70,
              "trace": 67.7
            }
          },
          "metrics": {
            "renderFidelity": 85.5,
            "semanticAttachment": 60.9,
            "provenanceTrace": 67.7,
            "viewInstability": 14.1,
            "editLeakageRisk": 10.2,
            "readiness": 74.9
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench",
            "execution": "torch-cuda-gaussian-splatting-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "semantic-edit",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:29:24Z",
          "model": {
            "renderer": "torch-cuda-gaussian-splat-compositor",
            "semanticProbe": "splat-label-edit-probe"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 74,
              "splatDensity": 72,
              "semanticEntropy": 34,
              "provenanceVisibility": 76
            },
            "asset": "synthetic://splat/semantic-edit.ply"
          },
          "outputs": {
            "renderProfile": {
              "splats": 319,
              "views": 5,
              "elapsedMs": 23.13,
              "adjacentFrameDelta": 0.13381
            },
            "semanticProbe": {
              "meanConfidence": 0.55323,
              "margin": 0.45882,
              "editLeakageRatio": 0.07111,
              "editLocality": 0.92889
            },
            "provenanceProbe": {
              "visibility": 76,
              "trace": 72.3
            }
          },
          "metrics": {
            "renderFidelity": 83.7,
            "semanticAttachment": 60.7,
            "provenanceTrace": 72.3,
            "viewInstability": 15.2,
            "editLeakageRisk": 12.1,
            "readiness": 75.2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench",
            "execution": "torch-cuda-gaussian-splatting-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "provenance-transfer",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:29:24Z",
          "model": {
            "renderer": "torch-cuda-gaussian-splat-compositor",
            "semanticProbe": "splat-label-edit-probe"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 68,
              "splatDensity": 70,
              "semanticEntropy": 42,
              "provenanceVisibility": 84
            },
            "asset": "synthetic://splat/provenance-transfer.ply"
          },
          "outputs": {
            "renderProfile": {
              "splats": 313,
              "views": 5,
              "elapsedMs": 22.65,
              "adjacentFrameDelta": 0.13393
            },
            "semanticProbe": {
              "meanConfidence": 0.51926,
              "margin": 0.42126,
              "editLeakageRatio": 0.08418,
              "editLocality": 0.91582
            },
            "provenanceProbe": {
              "visibility": 84,
              "trace": 77.6
            }
          },
          "metrics": {
            "renderFidelity": 82.7,
            "semanticAttachment": 57.0,
            "provenanceTrace": 77.6,
            "viewInstability": 15.9,
            "editLeakageRisk": 13.5,
            "readiness": 75.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench",
            "execution": "torch-cuda-gaussian-splatting-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "sparse-capture",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:29:24Z",
          "model": {
            "renderer": "torch-cuda-gaussian-splat-compositor",
            "semanticProbe": "splat-label-edit-probe"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 62,
              "splatDensity": 66,
              "semanticEntropy": 46,
              "provenanceVisibility": 72
            },
            "asset": "synthetic://splat/sparse-capture.ply"
          },
          "outputs": {
            "renderProfile": {
              "splats": 300,
              "views": 5,
              "elapsedMs": 21.97,
              "adjacentFrameDelta": 0.13495
            },
            "semanticProbe": {
              "meanConfidence": 0.57297,
              "margin": 0.47408,
              "editLeakageRatio": 0.07785,
              "editLocality": 0.92215
            },
            "provenanceProbe": {
              "visibility": 72,
              "trace": 69.6
            }
          },
          "metrics": {
            "renderFidelity": 81.4,
            "semanticAttachment": 60.5,
            "provenanceTrace": 69.6,
            "viewInstability": 16.7,
            "editLeakageRisk": 14.5,
            "readiness": 73.6
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "Tesla T4",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench",
            "execution": "torch-cuda-gaussian-splatting-live-demo",
            "promotedFrom": "live-colab",
            "canonicalMode": "cached-real"
          }
        },
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
        },
        {
          "jobId": "driving-safety",
          "caseId": "urban-cut-in",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:48Z",
          "model": {
            "grounder": "torch-driving-scene-risk-probe",
            "riskHead": "ttc-risk-head",
            "ruleMonitor": "safety-rule-monitor"
          },
          "inputs": {
            "safetyControls": {
              "hazardDensity": 48,
              "actorSpeed": 40,
              "occlusion": 10,
              "actionConfidence": 82
            },
            "asset": "synthetic://driving/urban-cut-in.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "synthetic://driving/urban-cut-in-grounding.png",
            "timeToCollision": 5.15,
            "riskTrace": "synthetic://driving/urban-cut-in-risk.json",
            "ruleViolations": 32.9
          },
          "metrics": {
            "readiness": 57.4,
            "sceneGrounding": 58.1,
            "timeToCollision": 5.15,
            "risk": 33.6,
            "ruleViolation": 32.9,
            "abstention": 15.5
          },
          "provenance": {
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
          "jobId": "driving-safety",
          "caseId": "night-crosswalk",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:48Z",
          "model": {
            "grounder": "torch-driving-scene-risk-probe",
            "riskHead": "ttc-risk-head",
            "ruleMonitor": "safety-rule-monitor"
          },
          "inputs": {
            "safetyControls": {
              "hazardDensity": 36,
              "actorSpeed": 34,
              "occlusion": 18,
              "actionConfidence": 78
            },
            "asset": "synthetic://driving/night-crosswalk.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "synthetic://driving/night-crosswalk-grounding.png",
            "timeToCollision": 5.73,
            "riskTrace": "synthetic://driving/night-crosswalk-risk.json",
            "ruleViolations": 32.8
          },
          "metrics": {
            "readiness": 57.1,
            "sceneGrounding": 55.4,
            "timeToCollision": 5.73,
            "risk": 31.9,
            "ruleViolation": 32.8,
            "abstention": 16.0
          },
          "provenance": {
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
          "jobId": "driving-safety",
          "caseId": "highway-merge",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:48Z",
          "model": {
            "grounder": "torch-driving-scene-risk-probe",
            "riskHead": "ttc-risk-head",
            "ruleMonitor": "safety-rule-monitor"
          },
          "inputs": {
            "safetyControls": {
              "hazardDensity": 24,
              "actorSpeed": 72,
              "occlusion": 16,
              "actionConfidence": 84
            },
            "asset": "synthetic://driving/highway-merge.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "synthetic://driving/highway-merge-grounding.png",
            "timeToCollision": 4.34,
            "riskTrace": "synthetic://driving/highway-merge-risk.json",
            "ruleViolations": 33.9
          },
          "metrics": {
            "readiness": 56.5,
            "sceneGrounding": 57.0,
            "timeToCollision": 4.34,
            "risk": 34.8,
            "ruleViolation": 33.9,
            "abstention": 16.0
          },
          "provenance": {
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
          "jobId": "driving-safety",
          "caseId": "construction-zone",
          "mode": "cached-real",
          "createdAt": "2026-08-17T03:14:48Z",
          "model": {
            "grounder": "torch-driving-scene-risk-probe",
            "riskHead": "ttc-risk-head",
            "ruleMonitor": "safety-rule-monitor"
          },
          "inputs": {
            "safetyControls": {
              "hazardDensity": 36,
              "actorSpeed": 32,
              "occlusion": 14,
              "actionConfidence": 72
            },
            "asset": "synthetic://driving/construction-zone.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "synthetic://driving/construction-zone-grounding.png",
            "timeToCollision": 5.82,
            "riskTrace": "synthetic://driving/construction-zone-risk.json",
            "ruleViolations": 33.0
          },
          "metrics": {
            "readiness": 57.1,
            "sceneGrounding": 55.1,
            "timeToCollision": 5.82,
            "risk": 32.1,
            "ruleViolation": 33.0,
            "abstention": 17.3
          },
          "provenance": {
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
    "handoff": {
      "summary": {
        "handoff": "cvpr-colab-handoff-package",
        "status": "ready",
        "jobs": 14,
        "runners": 14,
        "expectedResults": 56,
        "importIssues": 0,
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
        "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
        "intakeGate": "scripts/stage_cvpr_live_colab_export.py",
        "notebookCells": 22,
        "exportContract": true,
        "zipPath": "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip",
        "zipEntries": [
          "README.md",
          "analysis/cvpr_colab_gpu_worker/import_validation.json",
          "analysis/cvpr_colab_gpu_worker/registry.json",
          "notebooks/cvpr_gpu_worker.ipynb",
          "scripts/stage_cvpr_live_colab_export.py",
          "scripts/validate_cvpr_colab_results.py",
          "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
          "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
        ]
      },
      "worker": {
        "summary": {
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
        "jobs": [
          {
            "id": "open-vocab-grounding",
            "title": "Open-vocabulary grounding GPU run",
            "bench": "cvpr-long-tail-grounding-bench",
            "page": "cvpr-long-tail-grounding-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "siglip-base-patch16-224",
              "grounding-dino-tiny",
              "sam-vit-b"
            ],
            "inputs": [
              "image",
              "text_query",
              "candidate_regions"
            ],
            "outputs": [
              "boxes",
              "region_scores",
              "embedding_scores",
              "localized_evidence"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 1
          },
          {
            "id": "restoration-fidelity",
            "title": "Restoration fidelity GPU run",
            "bench": "cvpr-restoration-fidelity-bench",
            "page": "cvpr-restoration-fidelity-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "swinir-lightweight",
              "real-esrgan-x2"
            ],
            "inputs": [
              "degraded_image",
              "degradation_controls"
            ],
            "outputs": [
              "restored_image",
              "artifact_map",
              "downstream_score"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 2
          },
          {
            "id": "adversarial-provenance",
            "title": "Adversarial provenance GPU run",
            "bench": "cvpr-adversarial-provenance-bench",
            "page": "cvpr-adversarial-provenance-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "watermark-detector",
              "clip-perturbation-probe"
            ],
            "inputs": [
              "image",
              "attack_controls",
              "watermark_controls"
            ],
            "outputs": [
              "provenance_confidence",
              "attack_heatmap",
              "leakage_risk"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 3
          },
          {
            "id": "temporal-rollout",
            "title": "Temporal rollout GPU run",
            "bench": "cvpr-temporal-rollout-bench",
            "page": "cvpr-temporal-rollout-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "video-feature-tracker",
              "raft-lite",
              "world-rollout-probe"
            ],
            "inputs": [
              "video_clip",
              "tracking_controls"
            ],
            "outputs": [
              "identity_tracks",
              "contact_events",
              "drift_curve"
            ],
            "gpuClass": "L4/A100",
            "priority": 4
          },
          {
            "id": "clinical-shift",
            "title": "Clinical shift validation GPU run",
            "bench": "cvpr-clinical-shift-bench",
            "page": "cvpr-clinical-shift-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "dicom-embedding-shift-probe",
              "temperature-calibration-head",
              "uncertainty-triage-head"
            ],
            "inputs": [
              "medical_image_batch",
              "site_metadata",
              "review_controls"
            ],
            "outputs": [
              "domain_embeddings",
              "calibration_curve",
              "triage_scores",
              "clinical_evidence"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 5
          },
          {
            "id": "compute-serving",
            "title": "Compute constrained serving GPU run",
            "bench": "cvpr-compute-serving-bench",
            "page": "cvpr-compute-serving-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "quantized-vision-encoder",
              "student-router",
              "latency-profiler"
            ],
            "inputs": [
              "image_batch",
              "serving_controls",
              "escalation_policy"
            ],
            "outputs": [
              "latency_profile",
              "quality_floor",
              "routing_trace",
              "retained_evidence"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 6
          },
          {
            "id": "constraint-generation",
            "title": "Constraint preserving generation GPU run",
            "bench": "cvpr-constraint-generation-bench",
            "page": "cvpr-constraint-generation-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "layout-controlnet",
              "identity-embedding-lock",
              "preference-reward-probe"
            ],
            "inputs": [
              "source_image",
              "edit_prompt",
              "constraint_controls"
            ],
            "outputs": [
              "edited_image",
              "layout_mask",
              "identity_embedding_delta",
              "reward_trace"
            ],
            "gpuClass": "L4/A100",
            "priority": 7
          },
          {
            "id": "driving-safety",
            "title": "Driving safety closed-loop GPU run",
            "bench": "cvpr-driving-safety-bench",
            "page": "cvpr-driving-safety-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "vla-scene-grounder",
              "ttc-risk-head",
              "safety-rule-monitor"
            ],
            "inputs": [
              "driving_clip",
              "hazard_controls",
              "action_confidence"
            ],
            "outputs": [
              "scene_grounding_map",
              "time_to_collision",
              "risk_trace",
              "rule_violations"
            ],
            "gpuClass": "L4/A100",
            "priority": 8
          },
          {
            "id": "depth-normal-consistency",
            "title": "Depth-normal consistency GPU run",
            "bench": "cvpr-depth-normal-consistency-bench",
            "page": "cvpr-depth-normal-consistency-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-depth-normal-probe",
              "finite-difference-normal-consistency"
            ],
            "inputs": [
              "depth_map",
              "normal_controls",
              "scene_geometry"
            ],
            "outputs": [
              "normal_map",
              "consistency_curve",
              "depth_residual_map",
              "surface_alerts"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 9
          },
          {
            "id": "corruption-robustness",
            "title": "Corruption robustness GPU run",
            "bench": "cvpr-corruption-robustness-bench",
            "page": "cvpr-corruption-robustness-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-resnet18",
              "clean-corrupted-logit-delta"
            ],
            "inputs": [
              "image_batch",
              "corruption_controls",
              "severity_schedule"
            ],
            "outputs": [
              "feature_retention",
              "label_drift_curve",
              "confidence_collapse",
              "corruption_report"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 10
          },
          {
            "id": "prompt-segmentation-robustness",
            "title": "Prompt segmentation robustness GPU run",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "page": "cvpr-prompt-segmentation-robustness-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-maskrcnn-resnet50-fpn",
              "mask-rcnn-click-robustness-proxy"
            ],
            "inputs": [
              "image",
              "prompt_points",
              "prompt_variants"
            ],
            "outputs": [
              "mask_predictions",
              "click_sensitivity",
              "iou_trace",
              "prompt_failure_map"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 11
          },
          {
            "id": "video-identity-tracking",
            "title": "Video identity tracking GPU run",
            "bench": "cvpr-video-identity-tracking-bench",
            "page": "cvpr-video-identity-tracking-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-centroid-assignment-tracker",
              "mask-sequence-identity-drift"
            ],
            "inputs": [
              "video_clip",
              "identity_seed",
              "tracking_controls"
            ],
            "outputs": [
              "track_sequence",
              "identity_drift_curve",
              "handoff_events",
              "failure_frames"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 12
          },
          {
            "id": "metric-geometry",
            "title": "Metric geometry GPU run",
            "bench": "cvpr-metric-geometry-bench",
            "page": "cvpr-metric-geometry-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-pose-bundle-adjuster",
              "metric-scale-probe",
              "surface-consistency-head"
            ],
            "inputs": [
              "multi_view_images",
              "camera_controls",
              "scale_controls"
            ],
            "outputs": [
              "pose_graph",
              "scale_trace",
              "surface_residual_map",
              "topology_warnings"
            ],
            "gpuClass": "L4/A100",
            "priority": 9
          },
          {
            "id": "gaussian-splatting",
            "title": "Gaussian Splatting GPU run",
            "bench": "cvpr-gaussian-splatting-bench",
            "page": "cvpr-gaussian-splatting-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-splat-renderer",
              "semantic-splat-attach",
              "provenance-trace-head"
            ],
            "inputs": [
              "scene_views",
              "splat_controls",
              "edit_controls"
            ],
            "outputs": [
              "novel_view_renders",
              "semantic_splat_map",
              "provenance_trace",
              "edit_leakage_report"
            ],
            "gpuClass": "L4/A100",
            "priority": 10
          }
        ],
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
        "notebookNativeJobIds": [
          "open-vocab-grounding",
          "restoration-fidelity",
          "adversarial-provenance",
          "temporal-rollout",
          "clinical-shift",
          "compute-serving",
          "constraint-generation",
          "driving-safety",
          "metric-geometry",
          "gaussian-splatting"
        ],
        "externalLiveJobIds": [
          "depth-normal-consistency",
          "corruption-robustness",
          "prompt-segmentation-robustness",
          "video-identity-tracking"
        ],
        "runManifest": {
          "runtimePlane": "google-colab-pro-plus",
          "controlPlane": "local-static-cvpr-site",
          "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "jobs": [
            {
              "jobId": "open-vocab-grounding",
              "bench": "cvpr-long-tail-grounding-bench",
              "page": "cvpr-long-tail-grounding-bench.html",
              "priority": 1,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "siglip-base-patch16-224",
                "grounding-dino-tiny",
                "sam-vit-b"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
              "resultFilter": {
                "jobId": "open-vocab-grounding",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "restoration-fidelity",
              "bench": "cvpr-restoration-fidelity-bench",
              "page": "cvpr-restoration-fidelity-bench.html",
              "priority": 2,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "swinir-lightweight",
                "real-esrgan-x2"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
              "resultFilter": {
                "jobId": "restoration-fidelity",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "bench": "cvpr-adversarial-provenance-bench",
              "page": "cvpr-adversarial-provenance-bench.html",
              "priority": 3,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "watermark-detector",
                "clip-perturbation-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
              "resultFilter": {
                "jobId": "adversarial-provenance",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "temporal-rollout",
              "bench": "cvpr-temporal-rollout-bench",
              "page": "cvpr-temporal-rollout-bench.html",
              "priority": 4,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "video-feature-tracker",
                "raft-lite",
                "world-rollout-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
              "resultFilter": {
                "jobId": "temporal-rollout",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "clinical-shift",
              "bench": "cvpr-clinical-shift-bench",
              "page": "cvpr-clinical-shift-bench.html",
              "priority": 5,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "dicom-embedding-shift-probe",
                "temperature-calibration-head",
                "uncertainty-triage-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
              "resultFilter": {
                "jobId": "clinical-shift",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "compute-serving",
              "bench": "cvpr-compute-serving-bench",
              "page": "cvpr-compute-serving-bench.html",
              "priority": 6,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "quantized-vision-encoder",
                "student-router",
                "latency-profiler"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
              "resultFilter": {
                "jobId": "compute-serving",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "constraint-generation",
              "bench": "cvpr-constraint-generation-bench",
              "page": "cvpr-constraint-generation-bench.html",
              "priority": 7,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "layout-controlnet",
                "identity-embedding-lock",
                "preference-reward-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
              "resultFilter": {
                "jobId": "constraint-generation",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "driving-safety",
              "bench": "cvpr-driving-safety-bench",
              "page": "cvpr-driving-safety-bench.html",
              "priority": 8,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "vla-scene-grounder",
                "ttc-risk-head",
                "safety-rule-monitor"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
              "resultFilter": {
                "jobId": "driving-safety",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "depth-normal-consistency",
              "bench": "cvpr-depth-normal-consistency-bench",
              "page": "cvpr-depth-normal-consistency-bench.html",
              "priority": 9,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-depth-normal-probe",
                "finite-difference-normal-consistency"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
              "resultFilter": {
                "jobId": "depth-normal-consistency",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "corruption-robustness",
              "bench": "cvpr-corruption-robustness-bench",
              "page": "cvpr-corruption-robustness-bench.html",
              "priority": 10,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-resnet18",
                "clean-corrupted-logit-delta"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
              "resultFilter": {
                "jobId": "corruption-robustness",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "bench": "cvpr-prompt-segmentation-robustness-bench",
              "page": "cvpr-prompt-segmentation-robustness-bench.html",
              "priority": 11,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-maskrcnn-resnet50-fpn",
                "mask-rcnn-click-robustness-proxy"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
              "resultFilter": {
                "jobId": "prompt-segmentation-robustness",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "video-identity-tracking",
              "bench": "cvpr-video-identity-tracking-bench",
              "page": "cvpr-video-identity-tracking-bench.html",
              "priority": 12,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-centroid-assignment-tracker",
                "mask-sequence-identity-drift"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
              "resultFilter": {
                "jobId": "video-identity-tracking",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "metric-geometry",
              "bench": "cvpr-metric-geometry-bench",
              "page": "cvpr-metric-geometry-bench.html",
              "priority": 13,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-pose-bundle-adjuster",
                "metric-scale-probe",
                "surface-consistency-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
              "resultFilter": {
                "jobId": "metric-geometry",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "bench": "cvpr-gaussian-splatting-bench",
              "page": "cvpr-gaussian-splatting-bench.html",
              "priority": 14,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-splat-renderer",
                "semantic-splat-attach",
                "provenance-trace-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
              "resultFilter": {
                "jobId": "gaussian-splatting",
                "mode": "cached-real"
              }
            }
          ]
        },
        "cachedResults": [
          {
            "jobId": "open-vocab-grounding",
            "caseId": "common-clean",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:17Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "teal rectangle.",
              "controls": {
                "queryRarity": 18,
                "distractorOverlap": 16,
                "boxAmbiguity": 18,
                "evidenceThreshold": 54
              },
              "asset": "synthetic://common-clean"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "teal rectangle",
                  "xywh": [
                    0.178,
                    0.216,
                    0.305,
                    0.288
                  ],
                  "score": 0.742
                },
                {
                  "label": "teal rectangle",
                  "xywh": [
                    0.512,
                    0.255,
                    0.272,
                    0.266
                  ],
                  "score": 0.417
                }
              ],
              "regionScores": {
                "target": 26.8,
                "longTail": 39.7
              },
              "embeddingScore": 8.3,
              "localizedEvidence": 50.2
            },
            "metrics": {
              "readiness": 48.0,
              "proposalRecall": 74.2,
              "textRegionScore": 26.8,
              "longTailRecall": 39.7,
              "localizedEvidence": 50.2,
              "unsupportedRisk": 21.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-visible",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:18Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "teal target rectangle.",
              "controls": {
                "queryRarity": 66,
                "distractorOverlap": 12,
                "boxAmbiguity": 34,
                "evidenceThreshold": 62
              },
              "asset": "synthetic://rare-visible"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "teal target rectangle",
                  "xywh": [
                    0.178,
                    0.216,
                    0.305,
                    0.288
                  ],
                  "score": 0.752
                },
                {
                  "label": "teal target rectangle",
                  "xywh": [
                    0.522,
                    0.256,
                    0.273,
                    0.266
                  ],
                  "score": 0.381
                }
              ],
              "regionScores": {
                "target": 26.7,
                "longTail": 43.2
              },
              "embeddingScore": 7.8,
              "localizedEvidence": 52.2
            },
            "metrics": {
              "readiness": 49.4,
              "proposalRecall": 75.2,
              "textRegionScore": 26.7,
              "longTailRecall": 43.2,
              "localizedEvidence": 52.2,
              "unsupportedRisk": 21.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-distractors",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:18Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "teal target rectangle near orange distractor.",
              "controls": {
                "queryRarity": 78,
                "distractorOverlap": 28,
                "boxAmbiguity": 28,
                "evidenceThreshold": 76
              },
              "asset": "synthetic://rare-distractors"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "teal target rectangle orange distract",
                  "xywh": [
                    0.177,
                    0.216,
                    0.307,
                    0.289
                  ],
                  "score": 0.794
                },
                {
                  "label": "orange distractor",
                  "xywh": [
                    0.484,
                    0.257,
                    0.273,
                    0.266
                  ],
                  "score": 0.587
                }
              ],
              "regionScores": {
                "target": 93.1,
                "longTail": 85.2
              },
              "embeddingScore": 98.4,
              "localizedEvidence": 84.5
            },
            "metrics": {
              "readiness": 88.0,
              "proposalRecall": 79.4,
              "textRegionScore": 93.1,
              "longTailRecall": 85.2,
              "localizedEvidence": 84.5,
              "unsupportedRisk": 8.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "unsupported-query",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:18Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "transparent glass elephant.",
              "controls": {
                "queryRarity": 82,
                "distractorOverlap": 30,
                "boxAmbiguity": 32,
                "evidenceThreshold": 84
              },
              "asset": "synthetic://unsupported-query"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "transparent glass elephant",
                  "xywh": [
                    0.178,
                    0.216,
                    0.304,
                    0.288
                  ],
                  "score": 0.606
                },
                {
                  "label": "transparent glass elephant",
                  "xywh": [
                    0.48,
                    0.256,
                    0.271,
                    0.266
                  ],
                  "score": 0.524
                },
                {
                  "label": "transparent glass elephant",
                  "xywh": [
                    0.178,
                    0.216,
                    0.575,
                    0.306
                  ],
                  "score": 0.285
                }
              ],
              "regionScores": {
                "target": 17.0,
                "longTail": 40.6
              },
              "embeddingScore": 0.0,
              "localizedEvidence": 47.0
            },
            "metrics": {
              "readiness": 44.0,
              "proposalRecall": 60.6,
              "textRegionScore": 17.0,
              "longTailRecall": 40.6,
              "localizedEvidence": 47.0,
              "unsupportedRisk": 24.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
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
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "clean-camera",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 56,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "synthetic://clean-camera"
            },
            "outputs": {
              "provenanceConfidence": 50.8,
              "attackHeatmap": "synthetic://adversarial/clean-camera-clip-heatmap.png",
              "leakageRisk": 1.8,
              "evidence": 52.2,
              "clipProbeScores": {
                "a clean camera photograph": 41.3,
                "a synthetic generated image": 45.2,
                "an edited social media image": 0.8,
                "an adversarially perturbed image": 6.6,
                "a watermarked image": 6.1
              }
            },
            "metrics": {
              "readiness": 66.8,
              "attackCoverage": 3.7,
              "provenanceConfidence": 50.8,
              "leakageRisk": 1.8,
              "evidence": 52.2,
              "risk": 11.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "edited-social-post",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 64,
                "watermarkVisibility": 98,
                "unlearningProbe": 10
              },
              "asset": "synthetic://edited-social-post"
            },
            "outputs": {
              "provenanceConfidence": 39.8,
              "attackHeatmap": "synthetic://adversarial/edited-social-post-clip-heatmap.png",
              "leakageRisk": 4.4,
              "evidence": 44.2,
              "clipProbeScores": {
                "a clean camera photograph": 0.7,
                "a synthetic generated image": 91.0,
                "an edited social media image": 1.6,
                "an adversarially perturbed image": 4.2,
                "a watermarked image": 2.4
              }
            },
            "metrics": {
              "readiness": 57.7,
              "attackCoverage": 2.6,
              "provenanceConfidence": 39.8,
              "leakageRisk": 4.4,
              "evidence": 44.2,
              "risk": 23.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "synthetic-watermarked",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 84,
                "watermarkVisibility": 94,
                "unlearningProbe": 44
              },
              "asset": "synthetic://synthetic-watermarked"
            },
            "outputs": {
              "provenanceConfidence": 39.1,
              "attackHeatmap": "synthetic://adversarial/synthetic-watermarked-clip-heatmap.png",
              "leakageRisk": 14.1,
              "evidence": 41.5,
              "clipProbeScores": {
                "a clean camera photograph": 0.0,
                "a synthetic generated image": 99.1,
                "an edited social media image": 0.0,
                "an adversarially perturbed image": 0.1,
                "a watermarked image": 0.8
              }
            },
            "metrics": {
              "readiness": 53.8,
              "attackCoverage": 0.1,
              "provenanceConfidence": 39.1,
              "leakageRisk": 14.1,
              "evidence": 41.5,
              "risk": 29.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "adaptive-attack",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 12,
                "generationSource": 89,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "synthetic://adaptive-attack"
            },
            "outputs": {
              "provenanceConfidence": 39.9,
              "attackHeatmap": "synthetic://adversarial/adaptive-attack-clip-heatmap.png",
              "leakageRisk": 13.1,
              "evidence": 42.8,
              "clipProbeScores": {
                "a clean camera photograph": 0.7,
                "a synthetic generated image": 85.7,
                "an edited social media image": 1.7,
                "an adversarially perturbed image": 8.1,
                "a watermarked image": 3.9
              }
            },
            "metrics": {
              "readiness": 53.9,
              "attackCoverage": 19.1,
              "provenanceConfidence": 39.9,
              "leakageRisk": 13.1,
              "evidence": 42.8,
              "risk": 32.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "short-stable",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 24,
                "identityDensity": 28,
                "physicsViolations": 14,
                "memoryWindow": 72
              },
              "asset": "synthetic://temporal/short-stable.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/short-stable-raft-tracks.json",
              "contactEvents": "synthetic://temporal/short-stable-contacts.json",
              "driftCurve": [
                2.7,
                5.4,
                8.1,
                10.8,
                13.5
              ],
              "rolloutPlausibility": 85.8,
              "flowProfile": {
                "meanMagnitude": 1.6017,
                "meanRoughness": 0.0288,
                "meanAcceleration": 0.1546,
                "elapsedMs": 1191.22,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 86.1,
              "identityStability": 86.4,
              "contactConsistency": 85.9,
              "rolloutPlausibility": 85.8,
              "drift": 13.5,
              "memoryLoad": 24.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "crowded-memory",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 36,
                "identityDensity": 76,
                "physicsViolations": 26,
                "memoryWindow": 82
              },
              "asset": "synthetic://temporal/crowded-memory.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/crowded-memory-raft-tracks.json",
              "contactEvents": "synthetic://temporal/crowded-memory-contacts.json",
              "driftCurve": [
                4.3,
                8.6,
                12.9,
                17.2,
                21.6
              ],
              "rolloutPlausibility": 79.5,
              "flowProfile": {
                "meanMagnitude": 1.7887,
                "meanRoughness": 0.0288,
                "meanAcceleration": 0.0894,
                "elapsedMs": 168.5,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 80.3,
              "identityStability": 79.9,
              "contactConsistency": 82.6,
              "rolloutPlausibility": 79.5,
              "drift": 21.6,
              "memoryLoad": 40.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "contact-heavy",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 56,
                "identityDensity": 52,
                "physicsViolations": 20,
                "memoryWindow": 82
              },
              "asset": "synthetic://temporal/contact-heavy.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/contact-heavy-raft-tracks.json",
              "contactEvents": "synthetic://temporal/contact-heavy-contacts.json",
              "driftCurve": [
                3.9,
                7.9,
                11.8,
                15.7,
                19.7
              ],
              "rolloutPlausibility": 80.9,
              "flowProfile": {
                "meanMagnitude": 1.732,
                "meanRoughness": 0.0313,
                "meanAcceleration": 0.1067,
                "elapsedMs": 164.0,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 81.9,
              "identityStability": 81.5,
              "contactConsistency": 84.3,
              "rolloutPlausibility": 80.9,
              "drift": 19.7,
              "memoryLoad": 38.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "long-rollout-drift",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 66,
                "identityDensity": 68,
                "physicsViolations": 12,
                "memoryWindow": 92
              },
              "asset": "synthetic://temporal/long-rollout-drift.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/long-rollout-drift-raft-tracks.json",
              "contactEvents": "synthetic://temporal/long-rollout-drift-contacts.json",
              "driftCurve": [
                4.1,
                8.3,
                12.4,
                16.6,
                20.7
              ],
              "rolloutPlausibility": 79.7,
              "flowProfile": {
                "meanMagnitude": 1.8144,
                "meanRoughness": 0.0331,
                "meanAcceleration": 0.1629,
                "elapsedMs": 162.79,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 81.3,
              "identityStability": 79.0,
              "contactConsistency": 86.4,
              "rolloutPlausibility": 79.7,
              "drift": 20.7,
              "memoryLoad": 44.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
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
          },
          {
            "jobId": "constraint-generation",
            "caseId": "light-layout-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 24,
                "layoutLock": 78,
                "identityLock": 82,
                "adversarialPromptPressure": 18
              },
              "asset": "synthetic://generation/light-layout-edit.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/light-layout-edit-edited.png",
              "layoutMask": "synthetic://generation/light-layout-edit-layout-mask.png",
              "identityEmbeddingDelta": 19.2,
              "rewardTrace": "synthetic://generation/light-layout-edit-reward.json"
            },
            "metrics": {
              "readiness": 78.5,
              "editPressure": 21.0,
              "constraintSatisfaction": 80.8,
              "identityPreservation": 80.2,
              "editLocality": 76.2,
              "rewardAlignment": 73.6,
              "identityDamage": 19.2,
              "provenanceRisk": 20.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "style-with-locks",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 52,
                "layoutLock": 68,
                "identityLock": 80,
                "adversarialPromptPressure": 32
              },
              "asset": "synthetic://generation/style-with-locks.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/style-with-locks-edited.png",
              "layoutMask": "synthetic://generation/style-with-locks-layout-mask.png",
              "identityEmbeddingDelta": 31.3,
              "rewardTrace": "synthetic://generation/style-with-locks-reward.json"
            },
            "metrics": {
              "readiness": 70.9,
              "editPressure": 39.3,
              "constraintSatisfaction": 74.7,
              "identityPreservation": 73.7,
              "editLocality": 67.7,
              "rewardAlignment": 66.0,
              "identityDamage": 31.3,
              "provenanceRisk": 32.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "layout-rewrite",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 72,
                "layoutLock": 62,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "synthetic://generation/layout-rewrite.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/layout-rewrite-edited.png",
              "layoutMask": "synthetic://generation/layout-rewrite-layout-mask.png",
              "identityEmbeddingDelta": 32.4,
              "rewardTrace": "synthetic://generation/layout-rewrite-reward.json"
            },
            "metrics": {
              "readiness": 70.5,
              "editPressure": 45.7,
              "constraintSatisfaction": 73.2,
              "identityPreservation": 75.0,
              "editLocality": 65.9,
              "rewardAlignment": 66.2,
              "identityDamage": 32.4,
              "provenanceRisk": 33.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "prompt-attack-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 78,
                "layoutLock": 66,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "synthetic://generation/prompt-attack-edit.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/prompt-attack-edit-edited.png",
              "layoutMask": "synthetic://generation/prompt-attack-edit-layout-mask.png",
              "identityEmbeddingDelta": 34.0,
              "rewardTrace": "synthetic://generation/prompt-attack-edit-reward.json"
            },
            "metrics": {
              "readiness": 70.8,
              "editPressure": 47.8,
              "constraintSatisfaction": 74.7,
              "identityPreservation": 74.0,
              "editLocality": 66.7,
              "rewardAlignment": 66.6,
              "identityDamage": 34.0,
              "provenanceRisk": 33.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "indoor-low-texture",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 68,
                "thinStructure": 24,
                "scaleAmbiguity": 54
              },
              "asset": "synthetic://depth/indoor-low-texture.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.024086,
              "curvature": 0.004773
            },
            "metrics": {
              "readiness": 81.8,
              "depthRange": 0.7193,
              "normalConsistency": 84.4,
              "surfaceConsistency": 89.4,
              "scaleDrift": 29.1,
              "thinStructureRisk": 15.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "thin-chair-legs",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 38,
                "thinStructure": 78,
                "scaleAmbiguity": 32
              },
              "asset": "synthetic://depth/thin-chair-legs.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.019778,
              "curvature": 0.003684
            },
            "metrics": {
              "readiness": 75.7,
              "depthRange": 0.6591,
              "normalConsistency": 87.9,
              "surfaceConsistency": 80.2,
              "scaleDrift": 19.5,
              "thinStructureRisk": 46.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "reflective-surface",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 52,
                "thinStructure": 34,
                "scaleAmbiguity": 46
              },
              "asset": "synthetic://depth/reflective-surface.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.021851,
              "curvature": 0.004147
            },
            "metrics": {
              "readiness": 81.6,
              "depthRange": 0.6839,
              "normalConsistency": 86.3,
              "surfaceConsistency": 87.9,
              "scaleDrift": 25.3,
              "thinStructureRisk": 21.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "wide-room-scale",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 44,
                "thinStructure": 22,
                "scaleAmbiguity": 68
              },
              "asset": "synthetic://depth/wide-room-scale.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.020688,
              "curvature": 0.00388
            },
            "metrics": {
              "readiness": 82.5,
              "depthRange": 0.677,
              "normalConsistency": 87.2,
              "surfaceConsistency": 90.2,
              "scaleDrift": 32.0,
              "thinStructureRisk": 14.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "motion-blur",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "blur",
                "severity": 46
              },
              "asset": "synthetic://robustness/motion-blur.png"
            },
            "outputs": {
              "cleanConfidence": 35.2,
              "corruptedConfidence": 66.3,
              "jsDivergence": 0.712014,
              "featureCosine": 0.940137
            },
            "metrics": {
              "readiness": 80.8,
              "robustness": 86.3,
              "confidenceCollapse": 15.0,
              "featureRetention": 94.0,
              "labelStability": 74.6,
              "severity": 46,
              "topClassChanged": 1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "sensor-noise",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "noise",
                "severity": 52
              },
              "asset": "synthetic://robustness/sensor-noise.png"
            },
            "outputs": {
              "cleanConfidence": 38.2,
              "corruptedConfidence": 43.1,
              "jsDivergence": 0.06174,
              "featureCosine": 0.963718
            },
            "metrics": {
              "readiness": 84.4,
              "robustness": 91.9,
              "confidenceCollapse": 10.0,
              "featureRetention": 96.4,
              "labelStability": 99.0,
              "severity": 52,
              "topClassChanged": 0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "patch-attack",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "patch",
                "severity": 66
              },
              "asset": "synthetic://robustness/patch-attack.png"
            },
            "outputs": {
              "cleanConfidence": 33.5,
              "corruptedConfidence": 36.9,
              "jsDivergence": 0.031526,
              "featureCosine": 0.973741
            },
            "metrics": {
              "readiness": 81.1,
              "robustness": 90.8,
              "confidenceCollapse": 11.8,
              "featureRetention": 97.4,
              "labelStability": 99.5,
              "severity": 66,
              "topClassChanged": 0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "compression-shift",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "compression",
                "severity": 58
              },
              "asset": "synthetic://robustness/compression-shift.png"
            },
            "outputs": {
              "cleanConfidence": 38.5,
              "corruptedConfidence": 39.9,
              "jsDivergence": 0.009099,
              "featureCosine": 0.9972
            },
            "metrics": {
              "readiness": 84.1,
              "robustness": 92.9,
              "confidenceCollapse": 9.4,
              "featureRetention": 99.7,
              "labelStability": 99.9,
              "severity": 58,
              "topClassChanged": 0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "single-object",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 18,
                "promptNoise": 8,
                "occlusion": 10
              },
              "asset": "synthetic://segmentation/single-object.png"
            },
            "outputs": {
              "meanMaskConfidence": 60.7,
              "maskArea": 0.88176,
              "maskOverlap": 0.38536
            },
            "metrics": {
              "readiness": 65.4,
              "maskStability": 57.2,
              "promptSensitivity": 32.4,
              "unsupportedRegionRisk": 20.2,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "cluttered-scene",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 64,
                "promptNoise": 18,
                "occlusion": 24
              },
              "asset": "synthetic://segmentation/cluttered-scene.png"
            },
            "outputs": {
              "meanMaskConfidence": 66.3,
              "maskArea": 0.9091,
              "maskOverlap": 0.40537
            },
            "metrics": {
              "readiness": 62.3,
              "maskStability": 59.4,
              "promptSensitivity": 48.0,
              "unsupportedRegionRisk": 22.8,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "ambiguous-clicks",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 46,
                "promptNoise": 62,
                "occlusion": 18
              },
              "asset": "synthetic://segmentation/ambiguous-clicks.png"
            },
            "outputs": {
              "meanMaskConfidence": 66.7,
              "maskArea": 0.90569,
              "maskOverlap": 0.38714
            },
            "metrics": {
              "readiness": 58.3,
              "maskStability": 60.7,
              "promptSensitivity": 61.3,
              "unsupportedRegionRisk": 28.2,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "occluded-object",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 38,
                "promptNoise": 26,
                "occlusion": 70
              },
              "asset": "synthetic://segmentation/occluded-object.png"
            },
            "outputs": {
              "meanMaskConfidence": 66.3,
              "maskArea": 0.91259,
              "maskOverlap": 0.40266
            },
            "metrics": {
              "readiness": 57.8,
              "maskStability": 53.9,
              "promptSensitivity": 45.5,
              "unsupportedRegionRisk": 35.1,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "clean-crossing",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 12,
                "crowding": 22,
                "velocity": 36
              },
              "asset": "synthetic://tracking/clean-crossing.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.01013,
              "trackTensor": "synthetic://tracking/clean-crossing-tracks.pt"
            },
            "metrics": {
              "readiness": 88.8,
              "identityStability": 88.9,
              "occlusionRecovery": 85.0,
              "trackContinuity": 91.5,
              "identityDrift": 1.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "identity-crossing",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 26,
                "crowding": 68,
                "velocity": 42
              },
              "asset": "synthetic://tracking/identity-crossing.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.01697,
              "trackTensor": "synthetic://tracking/identity-crossing-tracks.pt"
            },
            "metrics": {
              "readiness": 82.6,
              "identityStability": 81.4,
              "occlusionRecovery": 79.2,
              "trackContinuity": 90.0,
              "identityDrift": 2.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "long-occlusion",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 74,
                "crowding": 36,
                "velocity": 34
              },
              "asset": "synthetic://tracking/long-occlusion.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.014317,
              "trackTensor": "synthetic://tracking/long-occlusion-tracks.pt"
            },
            "metrics": {
              "readiness": 79.6,
              "identityStability": 79.2,
              "occlusionRecovery": 75.4,
              "trackContinuity": 91.1,
              "identityDrift": 2.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "fast-motion",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 22,
                "crowding": 42,
                "velocity": 78
              },
              "asset": "synthetic://tracking/fast-motion.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.019914,
              "trackTensor": "synthetic://tracking/fast-motion-tracks.pt"
            },
            "metrics": {
              "readiness": 83.1,
              "identityStability": 84.0,
              "occlusionRecovery": 77.9,
              "trackContinuity": 86.7,
              "identityDrift": 3.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "wide-baseline",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:36Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 82,
                "textureSparsity": 18,
                "scaleAmbiguity": 24,
                "surfaceComplexity": 42
              },
              "asset": "synthetic://geometry/wide-baseline.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 204,
                "meanReprojectionError": 0.00851,
                "p95ReprojectionError": 0.01639,
                "elapsedMs": 1331.44
              },
              "scaleRecovery": {
                "trueScale": 1.13333,
                "recoveredScale": 1.11517,
                "relativeError": 0.01602
              },
              "optimizationTrace": {
                "initialLoss": 0.00534,
                "finalLoss": 0.001153,
                "iterations": 220,
                "calibratedScale": 1.19754
              }
            },
            "metrics": {
              "poseEvidence": 92.8,
              "metricEvidence": 100.0,
              "surfaceConsistency": 87.8,
              "scaleDrift": 0.6,
              "topologyRisk": 11.6,
              "readiness": 92.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "scale-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:37Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 66,
                "textureSparsity": 28,
                "scaleAmbiguity": 44,
                "surfaceComplexity": 46
              },
              "asset": "synthetic://geometry/scale-transfer.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 196,
                "meanReprojectionError": 0.00963,
                "p95ReprojectionError": 0.0193,
                "elapsedMs": 742.4
              },
              "scaleRecovery": {
                "trueScale": 1.24444,
                "recoveredScale": 1.21153,
                "relativeError": 0.00475
              },
              "optimizationTrace": {
                "initialLoss": 0.004471,
                "finalLoss": 0.001505,
                "iterations": 220,
                "calibratedScale": 1.25036
              }
            },
            "metrics": {
              "poseEvidence": 91.7,
              "metricEvidence": 99.4,
              "surfaceConsistency": 87.2,
              "scaleDrift": 3.8,
              "topologyRisk": 12.5,
              "readiness": 92.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "thin-structure",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:38Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 58,
                "textureSparsity": 34,
                "scaleAmbiguity": 32,
                "surfaceComplexity": 72
              },
              "asset": "synthetic://geometry/thin-structure.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 191,
                "meanReprojectionError": 0.01438,
                "p95ReprojectionError": 0.02784,
                "elapsedMs": 759.71
              },
              "scaleRecovery": {
                "trueScale": 1.17778,
                "recoveredScale": 1.15349,
                "relativeError": 0.01432
              },
              "optimizationTrace": {
                "initialLoss": 0.005345,
                "finalLoss": 0.00322,
                "iterations": 220,
                "calibratedScale": 1.19465
              }
            },
            "metrics": {
              "poseEvidence": 90.2,
              "metricEvidence": 97.3,
              "surfaceConsistency": 83.5,
              "scaleDrift": 3.4,
              "topologyRisk": 18.3,
              "readiness": 89.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "low-texture-indoor",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:38Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 54,
                "textureSparsity": 58,
                "scaleAmbiguity": 48,
                "surfaceComplexity": 50
              },
              "asset": "synthetic://geometry/low-texture-indoor.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 158,
                "meanReprojectionError": 0.01534,
                "p95ReprojectionError": 0.02952,
                "elapsedMs": 768.1
              },
              "scaleRecovery": {
                "trueScale": 1.26667,
                "recoveredScale": 1.23104,
                "relativeError": 0.01505
              },
              "optimizationTrace": {
                "initialLoss": 0.005659,
                "finalLoss": 0.003549,
                "iterations": 220,
                "calibratedScale": 1.2476
              }
            },
            "metrics": {
              "poseEvidence": 88.1,
              "metricEvidence": 95.3,
              "surfaceConsistency": 86.0,
              "scaleDrift": 6.3,
              "topologyRisk": 13.9,
              "readiness": 89.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "dense-novel-view",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 86,
                "splatDensity": 78,
                "semanticEntropy": 24,
                "provenanceVisibility": 70
              },
              "asset": "synthetic://splat/dense-novel-view.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 337,
                "views": 5,
                "elapsedMs": 71.17,
                "adjacentFrameDelta": 0.13833
              },
              "semanticProbe": {
                "meanConfidence": 0.5302,
                "margin": 0.45706,
                "editLeakageRatio": 0.05605,
                "editLocality": 0.94395
              },
              "provenanceProbe": {
                "visibility": 70,
                "trace": 67.7
              }
            },
            "metrics": {
              "renderFidelity": 85.5,
              "semanticAttachment": 60.9,
              "provenanceTrace": 67.7,
              "viewInstability": 14.1,
              "editLeakageRisk": 10.2,
              "readiness": 74.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "semantic-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 74,
                "splatDensity": 72,
                "semanticEntropy": 34,
                "provenanceVisibility": 76
              },
              "asset": "synthetic://splat/semantic-edit.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 319,
                "views": 5,
                "elapsedMs": 23.13,
                "adjacentFrameDelta": 0.13381
              },
              "semanticProbe": {
                "meanConfidence": 0.55323,
                "margin": 0.45882,
                "editLeakageRatio": 0.07111,
                "editLocality": 0.92889
              },
              "provenanceProbe": {
                "visibility": 76,
                "trace": 72.3
              }
            },
            "metrics": {
              "renderFidelity": 83.7,
              "semanticAttachment": 60.7,
              "provenanceTrace": 72.3,
              "viewInstability": 15.2,
              "editLeakageRisk": 12.1,
              "readiness": 75.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "provenance-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 68,
                "splatDensity": 70,
                "semanticEntropy": 42,
                "provenanceVisibility": 84
              },
              "asset": "synthetic://splat/provenance-transfer.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 313,
                "views": 5,
                "elapsedMs": 22.65,
                "adjacentFrameDelta": 0.13393
              },
              "semanticProbe": {
                "meanConfidence": 0.51926,
                "margin": 0.42126,
                "editLeakageRatio": 0.08418,
                "editLocality": 0.91582
              },
              "provenanceProbe": {
                "visibility": 84,
                "trace": 77.6
              }
            },
            "metrics": {
              "renderFidelity": 82.7,
              "semanticAttachment": 57.0,
              "provenanceTrace": 77.6,
              "viewInstability": 15.9,
              "editLeakageRisk": 13.5,
              "readiness": 75.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "sparse-capture",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 62,
                "splatDensity": 66,
                "semanticEntropy": 46,
                "provenanceVisibility": 72
              },
              "asset": "synthetic://splat/sparse-capture.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 300,
                "views": 5,
                "elapsedMs": 21.97,
                "adjacentFrameDelta": 0.13495
              },
              "semanticProbe": {
                "meanConfidence": 0.57297,
                "margin": 0.47408,
                "editLeakageRatio": 0.07785,
                "editLocality": 0.92215
              },
              "provenanceProbe": {
                "visibility": 72,
                "trace": 69.6
              }
            },
            "metrics": {
              "renderFidelity": 81.4,
              "semanticAttachment": 60.5,
              "provenanceTrace": 69.6,
              "viewInstability": 16.7,
              "editLeakageRisk": 14.5,
              "readiness": 73.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
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
          },
          {
            "jobId": "driving-safety",
            "caseId": "urban-cut-in",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 48,
                "actorSpeed": 40,
                "occlusion": 10,
                "actionConfidence": 82
              },
              "asset": "synthetic://driving/urban-cut-in.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/urban-cut-in-grounding.png",
              "timeToCollision": 5.15,
              "riskTrace": "synthetic://driving/urban-cut-in-risk.json",
              "ruleViolations": 32.9
            },
            "metrics": {
              "readiness": 57.4,
              "sceneGrounding": 58.1,
              "timeToCollision": 5.15,
              "risk": 33.6,
              "ruleViolation": 32.9,
              "abstention": 15.5
            },
            "provenance": {
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
            "jobId": "driving-safety",
            "caseId": "night-crosswalk",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 36,
                "actorSpeed": 34,
                "occlusion": 18,
                "actionConfidence": 78
              },
              "asset": "synthetic://driving/night-crosswalk.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/night-crosswalk-grounding.png",
              "timeToCollision": 5.73,
              "riskTrace": "synthetic://driving/night-crosswalk-risk.json",
              "ruleViolations": 32.8
            },
            "metrics": {
              "readiness": 57.1,
              "sceneGrounding": 55.4,
              "timeToCollision": 5.73,
              "risk": 31.9,
              "ruleViolation": 32.8,
              "abstention": 16.0
            },
            "provenance": {
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
            "jobId": "driving-safety",
            "caseId": "highway-merge",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 24,
                "actorSpeed": 72,
                "occlusion": 16,
                "actionConfidence": 84
              },
              "asset": "synthetic://driving/highway-merge.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/highway-merge-grounding.png",
              "timeToCollision": 4.34,
              "riskTrace": "synthetic://driving/highway-merge-risk.json",
              "ruleViolations": 33.9
            },
            "metrics": {
              "readiness": 56.5,
              "sceneGrounding": 57.0,
              "timeToCollision": 4.34,
              "risk": 34.8,
              "ruleViolation": 33.9,
              "abstention": 16.0
            },
            "provenance": {
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
            "jobId": "driving-safety",
            "caseId": "construction-zone",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 36,
                "actorSpeed": 32,
                "occlusion": 14,
                "actionConfidence": 72
              },
              "asset": "synthetic://driving/construction-zone.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/construction-zone-grounding.png",
              "timeToCollision": 5.82,
              "riskTrace": "synthetic://driving/construction-zone-risk.json",
              "ruleViolations": 33.0
            },
            "metrics": {
              "readiness": 57.1,
              "sceneGrounding": 55.1,
              "timeToCollision": 5.82,
              "risk": 32.1,
              "ruleViolation": 33.0,
              "abstention": 17.3
            },
            "provenance": {
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
      "importReport": {
        "summary": {
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
        "jobs": [
          {
            "jobId": "open-vocab-grounding",
            "bench": "cvpr-long-tail-grounding-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "restoration-fidelity",
            "bench": "cvpr-restoration-fidelity-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "adversarial-provenance",
            "bench": "cvpr-adversarial-provenance-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "temporal-rollout",
            "bench": "cvpr-temporal-rollout-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "clinical-shift",
            "bench": "cvpr-clinical-shift-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "compute-serving",
            "bench": "cvpr-compute-serving-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "constraint-generation",
            "bench": "cvpr-constraint-generation-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "driving-safety",
            "bench": "cvpr-driving-safety-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "depth-normal-consistency",
            "bench": "cvpr-depth-normal-consistency-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "corruption-robustness",
            "bench": "cvpr-corruption-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "video-identity-tracking",
            "bench": "cvpr-video-identity-tracking-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "metric-geometry",
            "bench": "cvpr-metric-geometry-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "gaussian-splatting",
            "bench": "cvpr-gaussian-splatting-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
            "ready": true
          }
        ],
        "issues": []
      },
      "notebookCells": 22,
      "exportContract": true,
      "zipEntries": [
        "README.md",
        "analysis/cvpr_colab_gpu_worker/import_validation.json",
        "analysis/cvpr_colab_gpu_worker/registry.json",
        "notebooks/cvpr_gpu_worker.ipynb",
        "scripts/stage_cvpr_live_colab_export.py",
        "scripts/validate_cvpr_colab_results.py",
        "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
        "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
      ]
    },
    "intake": {
      "summary": {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": "google-colab-pro-plus",
        "expectedMode": "live-colab",
        "jobs": 14,
        "expectedResults": 56,
        "actualResults": 56,
        "validJobs": 14,
        "issues": 0,
        "status": "valid",
        "intake": "cvpr-colab-live-intake",
        "job": null,
        "export": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
        "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
        "promoted": false
      },
      "jobs": [
        {
          "jobId": "open-vocab-grounding",
          "bench": "cvpr-long-tail-grounding-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "restoration-fidelity",
          "bench": "cvpr-restoration-fidelity-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "adversarial-provenance",
          "bench": "cvpr-adversarial-provenance-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "temporal-rollout",
          "bench": "cvpr-temporal-rollout-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "clinical-shift",
          "bench": "cvpr-clinical-shift-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "compute-serving",
          "bench": "cvpr-compute-serving-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "constraint-generation",
          "bench": "cvpr-constraint-generation-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "driving-safety",
          "bench": "cvpr-driving-safety-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "depth-normal-consistency",
          "bench": "cvpr-depth-normal-consistency-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "corruption-robustness",
          "bench": "cvpr-corruption-robustness-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "bench": "cvpr-prompt-segmentation-robustness-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "video-identity-tracking",
          "bench": "cvpr-video-identity-tracking-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "metric-geometry",
          "bench": "cvpr-metric-geometry-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "gaussian-splatting",
          "bench": "cvpr-gaussian-splatting-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
          "ready": true
        }
      ],
      "issues": []
    },
    "promotion": {
      "summary": {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": "google-colab-pro-plus",
        "expectedMode": "live-colab",
        "jobs": 14,
        "expectedResults": 56,
        "actualResults": 56,
        "validJobs": 14,
        "issues": 0,
        "status": "valid",
        "intake": "cvpr-colab-live-intake",
        "job": null,
        "export": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
        "canonicalArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
        "promoted": true
      },
      "jobs": [
        {
          "jobId": "open-vocab-grounding",
          "bench": "cvpr-long-tail-grounding-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "restoration-fidelity",
          "bench": "cvpr-restoration-fidelity-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "adversarial-provenance",
          "bench": "cvpr-adversarial-provenance-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "temporal-rollout",
          "bench": "cvpr-temporal-rollout-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "clinical-shift",
          "bench": "cvpr-clinical-shift-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "compute-serving",
          "bench": "cvpr-compute-serving-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "constraint-generation",
          "bench": "cvpr-constraint-generation-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "driving-safety",
          "bench": "cvpr-driving-safety-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "depth-normal-consistency",
          "bench": "cvpr-depth-normal-consistency-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "corruption-robustness",
          "bench": "cvpr-corruption-robustness-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "bench": "cvpr-prompt-segmentation-robustness-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "video-identity-tracking",
          "bench": "cvpr-video-identity-tracking-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "metric-geometry",
          "bench": "cvpr-metric-geometry-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "gaussian-splatting",
          "bench": "cvpr-gaussian-splatting-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
          "ready": true
        }
      ],
      "issues": []
    },
    "delta": {
      "summary": {
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
      },
      "rows": [
        {
          "jobId": "adversarial-provenance",
          "caseId": "adaptive-attack",
          "readinessBefore": 53.9,
          "readinessAfter": 53.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "attackCoverage": 0.0,
            "evidence": 0.0,
            "leakageRisk": 0.0,
            "provenanceConfidence": 0.0,
            "readiness": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "clean-camera",
          "readinessBefore": 66.8,
          "readinessAfter": 66.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "attackCoverage": 0.0,
            "evidence": 0.0,
            "leakageRisk": 0.0,
            "provenanceConfidence": 0.0,
            "readiness": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "edited-social-post",
          "readinessBefore": 57.7,
          "readinessAfter": 57.7,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "attackCoverage": 0.0,
            "evidence": 0.0,
            "leakageRisk": 0.0,
            "provenanceConfidence": 0.0,
            "readiness": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "synthetic-watermarked",
          "readinessBefore": 53.8,
          "readinessAfter": 53.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "attackCoverage": 0.0,
            "evidence": 0.0,
            "leakageRisk": 0.0,
            "provenanceConfidence": 0.0,
            "readiness": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "clinical-shift",
          "caseId": "clear-baseline",
          "readinessBefore": 89.9,
          "readinessAfter": 89.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "escalationThreshold": 0,
            "falseClearRisk": 0.0,
            "readiness": 0.0,
            "shiftScore": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "clinical-shift",
          "caseId": "motion-artifact",
          "readinessBefore": 81.1,
          "readinessAfter": 81.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "escalationThreshold": 0,
            "falseClearRisk": 0.0,
            "readiness": 0.0,
            "shiftScore": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "clinical-shift",
          "caseId": "rare-presentation",
          "readinessBefore": 81.9,
          "readinessAfter": 81.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "escalationThreshold": 0,
            "falseClearRisk": 0.0,
            "readiness": 0.0,
            "shiftScore": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "clinical-shift",
          "caseId": "scanner-shift",
          "readinessBefore": 83.2,
          "readinessAfter": 83.2,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "escalationThreshold": 0,
            "falseClearRisk": 0.0,
            "readiness": 0.0,
            "shiftScore": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "compute-serving",
          "caseId": "desktop-batch",
          "readinessBefore": 89.1,
          "readinessAfter": 89.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "costSaving": 0.0,
            "escalationRate": 0.0,
            "latency": 0.0,
            "qualityFloor": 0.0,
            "readiness": 0.0,
            "retainedEvidence": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "compute-serving",
          "caseId": "edge-camera",
          "readinessBefore": 87.0,
          "readinessAfter": 87.0,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "costSaving": 0.0,
            "escalationRate": 0.0,
            "latency": 0.0,
            "qualityFloor": 0.0,
            "readiness": 0.0,
            "retainedEvidence": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "compute-serving",
          "caseId": "fleet-peak-load",
          "readinessBefore": 86.9,
          "readinessAfter": 86.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "costSaving": 0.0,
            "escalationRate": 0.0,
            "latency": 0.0,
            "qualityFloor": 0.0,
            "readiness": 0.0,
            "retainedEvidence": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "compute-serving",
          "caseId": "mobile-live",
          "readinessBefore": 87.3,
          "readinessAfter": 87.3,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "costSaving": 0.0,
            "escalationRate": 0.0,
            "latency": 0.0,
            "qualityFloor": 0.0,
            "readiness": 0.0,
            "retainedEvidence": 0.0,
            "risk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "constraint-generation",
          "caseId": "layout-rewrite",
          "readinessBefore": 70.5,
          "readinessAfter": 70.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "constraintSatisfaction": 0.0,
            "editLocality": 0.0,
            "editPressure": 0.0,
            "identityDamage": 0.0,
            "identityPreservation": 0.0,
            "provenanceRisk": 0.0,
            "readiness": 0.0,
            "rewardAlignment": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "constraint-generation",
          "caseId": "light-layout-edit",
          "readinessBefore": 78.5,
          "readinessAfter": 78.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "constraintSatisfaction": 0.0,
            "editLocality": 0.0,
            "editPressure": 0.0,
            "identityDamage": 0.0,
            "identityPreservation": 0.0,
            "provenanceRisk": 0.0,
            "readiness": 0.0,
            "rewardAlignment": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "constraint-generation",
          "caseId": "prompt-attack-edit",
          "readinessBefore": 70.8,
          "readinessAfter": 70.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "constraintSatisfaction": 0.0,
            "editLocality": 0.0,
            "editPressure": 0.0,
            "identityDamage": 0.0,
            "identityPreservation": 0.0,
            "provenanceRisk": 0.0,
            "readiness": 0.0,
            "rewardAlignment": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "constraint-generation",
          "caseId": "style-with-locks",
          "readinessBefore": 70.9,
          "readinessAfter": 70.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "constraintSatisfaction": 0.0,
            "editLocality": 0.0,
            "editPressure": 0.0,
            "identityDamage": 0.0,
            "identityPreservation": 0.0,
            "provenanceRisk": 0.0,
            "readiness": 0.0,
            "rewardAlignment": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "compression-shift",
          "readinessBefore": 84.1,
          "readinessAfter": 84.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "confidenceCollapse": 0.0,
            "featureRetention": 0.0,
            "labelStability": 0.0,
            "readiness": 0.0,
            "robustness": 0.0,
            "severity": 0,
            "topClassChanged": 0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "motion-blur",
          "readinessBefore": 80.8,
          "readinessAfter": 80.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "confidenceCollapse": 0.0,
            "featureRetention": 0.0,
            "labelStability": 0.0,
            "readiness": 0.0,
            "robustness": 0.0,
            "severity": 0,
            "topClassChanged": 0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "patch-attack",
          "readinessBefore": 81.1,
          "readinessAfter": 81.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "confidenceCollapse": 0.0,
            "featureRetention": 0.0,
            "labelStability": 0.0,
            "readiness": 0.0,
            "robustness": 0.0,
            "severity": 0,
            "topClassChanged": 0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "corruption-robustness",
          "caseId": "sensor-noise",
          "readinessBefore": 84.4,
          "readinessAfter": 84.4,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "confidenceCollapse": 0.0,
            "featureRetention": 0.0,
            "labelStability": 0.0,
            "readiness": 0.0,
            "robustness": 0.0,
            "severity": 0,
            "topClassChanged": 0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "indoor-low-texture",
          "readinessBefore": 81.8,
          "readinessAfter": 81.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "depthRange": 0.0,
            "normalConsistency": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "thinStructureRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "reflective-surface",
          "readinessBefore": 81.6,
          "readinessAfter": 81.6,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "depthRange": 0.0,
            "normalConsistency": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "thinStructureRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "thin-chair-legs",
          "readinessBefore": 75.7,
          "readinessAfter": 75.7,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "depthRange": 0.0,
            "normalConsistency": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "thinStructureRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "depth-normal-consistency",
          "caseId": "wide-room-scale",
          "readinessBefore": 82.5,
          "readinessAfter": 82.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "depthRange": 0.0,
            "normalConsistency": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "thinStructureRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "driving-safety",
          "caseId": "construction-zone",
          "readinessBefore": 57.1,
          "readinessAfter": 57.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "abstention": 0.0,
            "readiness": 0.0,
            "risk": 0.0,
            "ruleViolation": 0.0,
            "sceneGrounding": 0.0,
            "timeToCollision": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "driving-safety",
          "caseId": "highway-merge",
          "readinessBefore": 56.5,
          "readinessAfter": 56.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "abstention": 0.0,
            "readiness": 0.0,
            "risk": 0.0,
            "ruleViolation": 0.0,
            "sceneGrounding": 0.0,
            "timeToCollision": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "driving-safety",
          "caseId": "night-crosswalk",
          "readinessBefore": 57.1,
          "readinessAfter": 57.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "abstention": 0.0,
            "readiness": 0.0,
            "risk": 0.0,
            "ruleViolation": 0.0,
            "sceneGrounding": 0.0,
            "timeToCollision": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "driving-safety",
          "caseId": "urban-cut-in",
          "readinessBefore": 57.4,
          "readinessAfter": 57.4,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "abstention": 0.0,
            "readiness": 0.0,
            "risk": 0.0,
            "ruleViolation": 0.0,
            "sceneGrounding": 0.0,
            "timeToCollision": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "dense-novel-view",
          "readinessBefore": 74.9,
          "readinessAfter": 74.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "editLeakageRisk": 0.0,
            "provenanceTrace": 0.0,
            "readiness": 0.0,
            "renderFidelity": 0.0,
            "semanticAttachment": 0.0,
            "viewInstability": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "provenance-transfer",
          "readinessBefore": 75.1,
          "readinessAfter": 75.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "editLeakageRisk": 0.0,
            "provenanceTrace": 0.0,
            "readiness": 0.0,
            "renderFidelity": 0.0,
            "semanticAttachment": 0.0,
            "viewInstability": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "semantic-edit",
          "readinessBefore": 75.2,
          "readinessAfter": 75.2,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "editLeakageRisk": 0.0,
            "provenanceTrace": 0.0,
            "readiness": 0.0,
            "renderFidelity": 0.0,
            "semanticAttachment": 0.0,
            "viewInstability": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "sparse-capture",
          "readinessBefore": 73.6,
          "readinessAfter": 73.6,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "editLeakageRisk": 0.0,
            "provenanceTrace": 0.0,
            "readiness": 0.0,
            "renderFidelity": 0.0,
            "semanticAttachment": 0.0,
            "viewInstability": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "metric-geometry",
          "caseId": "low-texture-indoor",
          "readinessBefore": 89.4,
          "readinessAfter": 89.4,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "metricEvidence": 0.0,
            "poseEvidence": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "topologyRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "metric-geometry",
          "caseId": "scale-transfer",
          "readinessBefore": 92.1,
          "readinessAfter": 92.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "metricEvidence": 0.0,
            "poseEvidence": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "topologyRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "metric-geometry",
          "caseId": "thin-structure",
          "readinessBefore": 89.1,
          "readinessAfter": 89.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "metricEvidence": 0.0,
            "poseEvidence": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "topologyRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "metric-geometry",
          "caseId": "wide-baseline",
          "readinessBefore": 92.9,
          "readinessAfter": 92.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "metricEvidence": 0.0,
            "poseEvidence": 0.0,
            "readiness": 0.0,
            "scaleDrift": 0.0,
            "surfaceConsistency": 0.0,
            "topologyRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "common-clean",
          "readinessBefore": 48.0,
          "readinessAfter": 48.0,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "longTailRecall": 0.0,
            "proposalRecall": 0.0,
            "readiness": 0.0,
            "textRegionScore": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-distractors",
          "readinessBefore": 88.0,
          "readinessAfter": 88.0,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "longTailRecall": 0.0,
            "proposalRecall": 0.0,
            "readiness": 0.0,
            "textRegionScore": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-visible",
          "readinessBefore": 49.4,
          "readinessAfter": 49.4,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "longTailRecall": 0.0,
            "proposalRecall": 0.0,
            "readiness": 0.0,
            "textRegionScore": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "unsupported-query",
          "readinessBefore": 44.0,
          "readinessAfter": 44.0,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "longTailRecall": 0.0,
            "proposalRecall": 0.0,
            "readiness": 0.0,
            "textRegionScore": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "ambiguous-clicks",
          "readinessBefore": 58.3,
          "readinessAfter": 58.3,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "detections": 0,
            "maskStability": 0.0,
            "promptSensitivity": 0.0,
            "readiness": 0.0,
            "unsupportedRegionRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "cluttered-scene",
          "readinessBefore": 62.3,
          "readinessAfter": 62.3,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "detections": 0,
            "maskStability": 0.0,
            "promptSensitivity": 0.0,
            "readiness": 0.0,
            "unsupportedRegionRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "occluded-object",
          "readinessBefore": 57.8,
          "readinessAfter": 57.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "detections": 0,
            "maskStability": 0.0,
            "promptSensitivity": 0.0,
            "readiness": 0.0,
            "unsupportedRegionRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "caseId": "single-object",
          "readinessBefore": 65.4,
          "readinessAfter": 65.4,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "detections": 0,
            "maskStability": 0.0,
            "promptSensitivity": 0.0,
            "readiness": 0.0,
            "unsupportedRegionRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "compressed-low-light",
          "readinessBefore": 78.5,
          "readinessAfter": 78.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "artifactRisk": 0.0,
            "degradationLoad": 0.0,
            "diagnosisConfidence": 0.0,
            "downstreamUtility": 0.0,
            "fabricatedDetailRisk": 0.0,
            "fidelityScore": 0.0,
            "readiness": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "mild-noise",
          "readinessBefore": 81.6,
          "readinessAfter": 81.6,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "artifactRisk": 0.0,
            "degradationLoad": 0.0,
            "diagnosisConfidence": 0.0,
            "downstreamUtility": 0.0,
            "fabricatedDetailRisk": 0.0,
            "fidelityScore": 0.0,
            "readiness": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "motion-blur-task",
          "readinessBefore": 80.5,
          "readinessAfter": 80.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "artifactRisk": 0.0,
            "degradationLoad": 0.0,
            "diagnosisConfidence": 0.0,
            "downstreamUtility": 0.0,
            "fabricatedDetailRisk": 0.0,
            "fidelityScore": 0.0,
            "readiness": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "over-restored-detail",
          "readinessBefore": 78.9,
          "readinessAfter": 78.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "artifactRisk": 0.0,
            "degradationLoad": 0.0,
            "diagnosisConfidence": 0.0,
            "downstreamUtility": 0.0,
            "fabricatedDetailRisk": 0.0,
            "fidelityScore": 0.0,
            "readiness": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "contact-heavy",
          "readinessBefore": 81.9,
          "readinessAfter": 81.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "contactConsistency": 0.0,
            "drift": 0.0,
            "identityStability": 0.0,
            "memoryLoad": 0.0,
            "readiness": 0.0,
            "rolloutPlausibility": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "crowded-memory",
          "readinessBefore": 80.3,
          "readinessAfter": 80.3,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "contactConsistency": 0.0,
            "drift": 0.0,
            "identityStability": 0.0,
            "memoryLoad": 0.0,
            "readiness": 0.0,
            "rolloutPlausibility": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "long-rollout-drift",
          "readinessBefore": 81.3,
          "readinessAfter": 81.3,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "contactConsistency": 0.0,
            "drift": 0.0,
            "identityStability": 0.0,
            "memoryLoad": 0.0,
            "readiness": 0.0,
            "rolloutPlausibility": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "short-stable",
          "readinessBefore": 86.1,
          "readinessAfter": 86.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "contactConsistency": 0.0,
            "drift": 0.0,
            "identityStability": 0.0,
            "memoryLoad": 0.0,
            "readiness": 0.0,
            "rolloutPlausibility": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "clean-crossing",
          "readinessBefore": 88.8,
          "readinessAfter": 88.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "identityDrift": 0.0,
            "identityStability": 0.0,
            "occlusionRecovery": 0.0,
            "readiness": 0.0,
            "trackContinuity": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "fast-motion",
          "readinessBefore": 83.1,
          "readinessAfter": 83.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "identityDrift": 0.0,
            "identityStability": 0.0,
            "occlusionRecovery": 0.0,
            "readiness": 0.0,
            "trackContinuity": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "identity-crossing",
          "readinessBefore": 82.6,
          "readinessAfter": 82.6,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "identityDrift": 0.0,
            "identityStability": 0.0,
            "occlusionRecovery": 0.0,
            "readiness": 0.0,
            "trackContinuity": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "video-identity-tracking",
          "caseId": "long-occlusion",
          "readinessBefore": 79.6,
          "readinessAfter": 79.6,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "identityDrift": 0.0,
            "identityStability": 0.0,
            "occlusionRecovery": 0.0,
            "readiness": 0.0,
            "trackContinuity": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        }
      ],
      "missing": [],
      "modeMismatches": [],
      "regressions": []
    },
    "release": {
      "summary": {
        "bundle": "cvpr-colab-release-bundle",
        "status": "release",
        "runtimePlane": "google-colab-pro-plus",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
        "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
        "workerJobs": 14,
        "promotedRunners": 14,
        "runnerRows": 14,
        "cachedResults": 56,
        "importIssues": 0,
        "fullStackStatus": "valid",
        "packageTests": 148,
        "validationGate": "release",
        "liveIntakeStatus": "valid",
        "liveIntakeResults": 56,
        "liveIntakePromoted": true,
        "promotionDeltaStatus": "release",
        "promotionRegressions": 0,
        "maxReadinessDrop": 0.0,
        "importValidator": "scripts/validate_cvpr_colab_results.py",
        "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
        "validationCenter": "cvpr-validation-center.html"
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
      "runManifest": {
        "runtimePlane": "google-colab-pro-plus",
        "controlPlane": "local-static-cvpr-site",
        "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
        "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "jobs": [
          {
            "jobId": "open-vocab-grounding",
            "bench": "cvpr-long-tail-grounding-bench",
            "page": "cvpr-long-tail-grounding-bench.html",
            "priority": 1,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "siglip-base-patch16-224",
              "grounding-dino-tiny",
              "sam-vit-b"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
            "resultFilter": {
              "jobId": "open-vocab-grounding",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "bench": "cvpr-restoration-fidelity-bench",
            "page": "cvpr-restoration-fidelity-bench.html",
            "priority": 2,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "swinir-lightweight",
              "real-esrgan-x2"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
            "resultFilter": {
              "jobId": "restoration-fidelity",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "bench": "cvpr-adversarial-provenance-bench",
            "page": "cvpr-adversarial-provenance-bench.html",
            "priority": 3,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "watermark-detector",
              "clip-perturbation-probe"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
            "resultFilter": {
              "jobId": "adversarial-provenance",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "bench": "cvpr-temporal-rollout-bench",
            "page": "cvpr-temporal-rollout-bench.html",
            "priority": 4,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "video-feature-tracker",
              "raft-lite",
              "world-rollout-probe"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
            "resultFilter": {
              "jobId": "temporal-rollout",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "clinical-shift",
            "bench": "cvpr-clinical-shift-bench",
            "page": "cvpr-clinical-shift-bench.html",
            "priority": 5,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "dicom-embedding-shift-probe",
              "temperature-calibration-head",
              "uncertainty-triage-head"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
            "resultFilter": {
              "jobId": "clinical-shift",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "compute-serving",
            "bench": "cvpr-compute-serving-bench",
            "page": "cvpr-compute-serving-bench.html",
            "priority": 6,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "quantized-vision-encoder",
              "student-router",
              "latency-profiler"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
            "resultFilter": {
              "jobId": "compute-serving",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "bench": "cvpr-constraint-generation-bench",
            "page": "cvpr-constraint-generation-bench.html",
            "priority": 7,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "layout-controlnet",
              "identity-embedding-lock",
              "preference-reward-probe"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
            "resultFilter": {
              "jobId": "constraint-generation",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "driving-safety",
            "bench": "cvpr-driving-safety-bench",
            "page": "cvpr-driving-safety-bench.html",
            "priority": 8,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "vla-scene-grounder",
              "ttc-risk-head",
              "safety-rule-monitor"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
            "resultFilter": {
              "jobId": "driving-safety",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "bench": "cvpr-depth-normal-consistency-bench",
            "page": "cvpr-depth-normal-consistency-bench.html",
            "priority": 9,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-depth-normal-probe",
              "finite-difference-normal-consistency"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
            "resultFilter": {
              "jobId": "depth-normal-consistency",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "bench": "cvpr-corruption-robustness-bench",
            "page": "cvpr-corruption-robustness-bench.html",
            "priority": 10,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-resnet18",
              "clean-corrupted-logit-delta"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
            "resultFilter": {
              "jobId": "corruption-robustness",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "page": "cvpr-prompt-segmentation-robustness-bench.html",
            "priority": 11,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-maskrcnn-resnet50-fpn",
              "mask-rcnn-click-robustness-proxy"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
            "resultFilter": {
              "jobId": "prompt-segmentation-robustness",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "bench": "cvpr-video-identity-tracking-bench",
            "page": "cvpr-video-identity-tracking-bench.html",
            "priority": 12,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-centroid-assignment-tracker",
              "mask-sequence-identity-drift"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
            "resultFilter": {
              "jobId": "video-identity-tracking",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "bench": "cvpr-metric-geometry-bench",
            "page": "cvpr-metric-geometry-bench.html",
            "priority": 13,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-pose-bundle-adjuster",
              "metric-scale-probe",
              "surface-consistency-head"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
            "resultFilter": {
              "jobId": "metric-geometry",
              "mode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "bench": "cvpr-gaussian-splatting-bench",
            "page": "cvpr-gaussian-splatting-bench.html",
            "priority": 14,
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-splat-renderer",
              "semantic-splat-attach",
              "provenance-trace-head"
            ],
            "expectedCases": 4,
            "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
            "resultFilter": {
              "jobId": "gaussian-splatting",
              "mode": "cached-real"
            }
          }
        ]
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
      "fullStack": {
        "validator": "validate_cvpr_full_stack",
        "status": "valid",
        "commands": 286,
        "steps": 59,
        "packageTests": 148,
        "workerJobs": 14,
        "promotedRunners": 14,
        "cachedResults": 56,
        "importIssues": 0,
        "durationSec": 157.909
      },
      "validationCenter": {
        "dashboard": "cvpr-validation-center",
        "status": "interactive",
        "gateStatus": "release",
        "fullStackStatus": "valid",
        "commands": 286,
        "steps": 53,
        "packageTests": 148,
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
            "command": "node source-code/learning/*/tests/core.test.js",
            "returnCode": 0,
            "durationSec": 146.056,
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
            "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
            "returnCode": 0,
            "durationSec": 0.454,
            "stdoutTail": [
              "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_demo_lab.py",
            "returnCode": 0,
            "durationSec": 0.413,
            "stdoutTail": [
              "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/verify_cvpr_demo_lab.py",
            "returnCode": 0,
            "durationSec": 0.359,
            "stdoutTail": [
              "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/validate_cvpr_colab_results.py",
            "returnCode": 0,
            "durationSec": 0.322,
            "stdoutTail": [
              "validated CVPR Colab results: 56 results, 0 issues"
            ],
            "stderrTail": []
          }
        ]
      },
      "liveIntake": {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": "google-colab-pro-plus",
        "expectedMode": "live-colab",
        "jobs": 14,
        "expectedResults": 56,
        "actualResults": 56,
        "validJobs": 14,
        "issues": 0,
        "status": "valid",
        "intake": "cvpr-colab-live-intake",
        "job": null,
        "export": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
        "canonicalArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
        "promoted": true
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
    },
    "ledger": {
      "summary": {
        "ledger": "cvpr-colab-evidence-ledger",
        "status": "release",
        "artifacts": 7,
        "missingArtifacts": 0,
        "cachedResults": 56,
        "liveIntakeResults": 56,
        "promotionResults": 56,
        "importIssues": 0,
        "deltaStatus": "release",
        "deltaRegressions": 0,
        "releaseStatus": "release",
        "handoffStatus": "ready"
      },
      "worker": {
        "summary": {
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
        "jobs": [
          {
            "id": "open-vocab-grounding",
            "title": "Open-vocabulary grounding GPU run",
            "bench": "cvpr-long-tail-grounding-bench",
            "page": "cvpr-long-tail-grounding-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "siglip-base-patch16-224",
              "grounding-dino-tiny",
              "sam-vit-b"
            ],
            "inputs": [
              "image",
              "text_query",
              "candidate_regions"
            ],
            "outputs": [
              "boxes",
              "region_scores",
              "embedding_scores",
              "localized_evidence"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 1
          },
          {
            "id": "restoration-fidelity",
            "title": "Restoration fidelity GPU run",
            "bench": "cvpr-restoration-fidelity-bench",
            "page": "cvpr-restoration-fidelity-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "swinir-lightweight",
              "real-esrgan-x2"
            ],
            "inputs": [
              "degraded_image",
              "degradation_controls"
            ],
            "outputs": [
              "restored_image",
              "artifact_map",
              "downstream_score"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 2
          },
          {
            "id": "adversarial-provenance",
            "title": "Adversarial provenance GPU run",
            "bench": "cvpr-adversarial-provenance-bench",
            "page": "cvpr-adversarial-provenance-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "watermark-detector",
              "clip-perturbation-probe"
            ],
            "inputs": [
              "image",
              "attack_controls",
              "watermark_controls"
            ],
            "outputs": [
              "provenance_confidence",
              "attack_heatmap",
              "leakage_risk"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 3
          },
          {
            "id": "temporal-rollout",
            "title": "Temporal rollout GPU run",
            "bench": "cvpr-temporal-rollout-bench",
            "page": "cvpr-temporal-rollout-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "video-feature-tracker",
              "raft-lite",
              "world-rollout-probe"
            ],
            "inputs": [
              "video_clip",
              "tracking_controls"
            ],
            "outputs": [
              "identity_tracks",
              "contact_events",
              "drift_curve"
            ],
            "gpuClass": "L4/A100",
            "priority": 4
          },
          {
            "id": "clinical-shift",
            "title": "Clinical shift validation GPU run",
            "bench": "cvpr-clinical-shift-bench",
            "page": "cvpr-clinical-shift-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "dicom-embedding-shift-probe",
              "temperature-calibration-head",
              "uncertainty-triage-head"
            ],
            "inputs": [
              "medical_image_batch",
              "site_metadata",
              "review_controls"
            ],
            "outputs": [
              "domain_embeddings",
              "calibration_curve",
              "triage_scores",
              "clinical_evidence"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 5
          },
          {
            "id": "compute-serving",
            "title": "Compute constrained serving GPU run",
            "bench": "cvpr-compute-serving-bench",
            "page": "cvpr-compute-serving-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "quantized-vision-encoder",
              "student-router",
              "latency-profiler"
            ],
            "inputs": [
              "image_batch",
              "serving_controls",
              "escalation_policy"
            ],
            "outputs": [
              "latency_profile",
              "quality_floor",
              "routing_trace",
              "retained_evidence"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 6
          },
          {
            "id": "constraint-generation",
            "title": "Constraint preserving generation GPU run",
            "bench": "cvpr-constraint-generation-bench",
            "page": "cvpr-constraint-generation-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "layout-controlnet",
              "identity-embedding-lock",
              "preference-reward-probe"
            ],
            "inputs": [
              "source_image",
              "edit_prompt",
              "constraint_controls"
            ],
            "outputs": [
              "edited_image",
              "layout_mask",
              "identity_embedding_delta",
              "reward_trace"
            ],
            "gpuClass": "L4/A100",
            "priority": 7
          },
          {
            "id": "driving-safety",
            "title": "Driving safety closed-loop GPU run",
            "bench": "cvpr-driving-safety-bench",
            "page": "cvpr-driving-safety-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "vla-scene-grounder",
              "ttc-risk-head",
              "safety-rule-monitor"
            ],
            "inputs": [
              "driving_clip",
              "hazard_controls",
              "action_confidence"
            ],
            "outputs": [
              "scene_grounding_map",
              "time_to_collision",
              "risk_trace",
              "rule_violations"
            ],
            "gpuClass": "L4/A100",
            "priority": 8
          },
          {
            "id": "depth-normal-consistency",
            "title": "Depth-normal consistency GPU run",
            "bench": "cvpr-depth-normal-consistency-bench",
            "page": "cvpr-depth-normal-consistency-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-depth-normal-probe",
              "finite-difference-normal-consistency"
            ],
            "inputs": [
              "depth_map",
              "normal_controls",
              "scene_geometry"
            ],
            "outputs": [
              "normal_map",
              "consistency_curve",
              "depth_residual_map",
              "surface_alerts"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 9
          },
          {
            "id": "corruption-robustness",
            "title": "Corruption robustness GPU run",
            "bench": "cvpr-corruption-robustness-bench",
            "page": "cvpr-corruption-robustness-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-resnet18",
              "clean-corrupted-logit-delta"
            ],
            "inputs": [
              "image_batch",
              "corruption_controls",
              "severity_schedule"
            ],
            "outputs": [
              "feature_retention",
              "label_drift_curve",
              "confidence_collapse",
              "corruption_report"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 10
          },
          {
            "id": "prompt-segmentation-robustness",
            "title": "Prompt segmentation robustness GPU run",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "page": "cvpr-prompt-segmentation-robustness-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torchvision-maskrcnn-resnet50-fpn",
              "mask-rcnn-click-robustness-proxy"
            ],
            "inputs": [
              "image",
              "prompt_points",
              "prompt_variants"
            ],
            "outputs": [
              "mask_predictions",
              "click_sensitivity",
              "iou_trace",
              "prompt_failure_map"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 11
          },
          {
            "id": "video-identity-tracking",
            "title": "Video identity tracking GPU run",
            "bench": "cvpr-video-identity-tracking-bench",
            "page": "cvpr-video-identity-tracking-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-cuda-centroid-assignment-tracker",
              "mask-sequence-identity-drift"
            ],
            "inputs": [
              "video_clip",
              "identity_seed",
              "tracking_controls"
            ],
            "outputs": [
              "track_sequence",
              "identity_drift_curve",
              "handoff_events",
              "failure_frames"
            ],
            "gpuClass": "T4/L4/A100",
            "priority": 12
          },
          {
            "id": "metric-geometry",
            "title": "Metric geometry GPU run",
            "bench": "cvpr-metric-geometry-bench",
            "page": "cvpr-metric-geometry-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-pose-bundle-adjuster",
              "metric-scale-probe",
              "surface-consistency-head"
            ],
            "inputs": [
              "multi_view_images",
              "camera_controls",
              "scale_controls"
            ],
            "outputs": [
              "pose_graph",
              "scale_trace",
              "surface_residual_map",
              "topology_warnings"
            ],
            "gpuClass": "L4/A100",
            "priority": 9
          },
          {
            "id": "gaussian-splatting",
            "title": "Gaussian Splatting GPU run",
            "bench": "cvpr-gaussian-splatting-bench",
            "page": "cvpr-gaussian-splatting-bench.html",
            "runtimeModes": [
              "simulated",
              "cached-real",
              "live-colab"
            ],
            "models": [
              "torch-splat-renderer",
              "semantic-splat-attach",
              "provenance-trace-head"
            ],
            "inputs": [
              "scene_views",
              "splat_controls",
              "edit_controls"
            ],
            "outputs": [
              "novel_view_renders",
              "semantic_splat_map",
              "provenance_trace",
              "edit_leakage_report"
            ],
            "gpuClass": "L4/A100",
            "priority": 10
          }
        ],
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
        "notebookNativeJobIds": [
          "open-vocab-grounding",
          "restoration-fidelity",
          "adversarial-provenance",
          "temporal-rollout",
          "clinical-shift",
          "compute-serving",
          "constraint-generation",
          "driving-safety",
          "metric-geometry",
          "gaussian-splatting"
        ],
        "externalLiveJobIds": [
          "depth-normal-consistency",
          "corruption-robustness",
          "prompt-segmentation-robustness",
          "video-identity-tracking"
        ],
        "runManifest": {
          "runtimePlane": "google-colab-pro-plus",
          "controlPlane": "local-static-cvpr-site",
          "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "jobs": [
            {
              "jobId": "open-vocab-grounding",
              "bench": "cvpr-long-tail-grounding-bench",
              "page": "cvpr-long-tail-grounding-bench.html",
              "priority": 1,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "siglip-base-patch16-224",
                "grounding-dino-tiny",
                "sam-vit-b"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
              "resultFilter": {
                "jobId": "open-vocab-grounding",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "restoration-fidelity",
              "bench": "cvpr-restoration-fidelity-bench",
              "page": "cvpr-restoration-fidelity-bench.html",
              "priority": 2,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "swinir-lightweight",
                "real-esrgan-x2"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
              "resultFilter": {
                "jobId": "restoration-fidelity",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "bench": "cvpr-adversarial-provenance-bench",
              "page": "cvpr-adversarial-provenance-bench.html",
              "priority": 3,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "watermark-detector",
                "clip-perturbation-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
              "resultFilter": {
                "jobId": "adversarial-provenance",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "temporal-rollout",
              "bench": "cvpr-temporal-rollout-bench",
              "page": "cvpr-temporal-rollout-bench.html",
              "priority": 4,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "video-feature-tracker",
                "raft-lite",
                "world-rollout-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
              "resultFilter": {
                "jobId": "temporal-rollout",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "clinical-shift",
              "bench": "cvpr-clinical-shift-bench",
              "page": "cvpr-clinical-shift-bench.html",
              "priority": 5,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "dicom-embedding-shift-probe",
                "temperature-calibration-head",
                "uncertainty-triage-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
              "resultFilter": {
                "jobId": "clinical-shift",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "compute-serving",
              "bench": "cvpr-compute-serving-bench",
              "page": "cvpr-compute-serving-bench.html",
              "priority": 6,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "quantized-vision-encoder",
                "student-router",
                "latency-profiler"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
              "resultFilter": {
                "jobId": "compute-serving",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "constraint-generation",
              "bench": "cvpr-constraint-generation-bench",
              "page": "cvpr-constraint-generation-bench.html",
              "priority": 7,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "layout-controlnet",
                "identity-embedding-lock",
                "preference-reward-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
              "resultFilter": {
                "jobId": "constraint-generation",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "driving-safety",
              "bench": "cvpr-driving-safety-bench",
              "page": "cvpr-driving-safety-bench.html",
              "priority": 8,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "vla-scene-grounder",
                "ttc-risk-head",
                "safety-rule-monitor"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
              "resultFilter": {
                "jobId": "driving-safety",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "depth-normal-consistency",
              "bench": "cvpr-depth-normal-consistency-bench",
              "page": "cvpr-depth-normal-consistency-bench.html",
              "priority": 9,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-depth-normal-probe",
                "finite-difference-normal-consistency"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
              "resultFilter": {
                "jobId": "depth-normal-consistency",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "corruption-robustness",
              "bench": "cvpr-corruption-robustness-bench",
              "page": "cvpr-corruption-robustness-bench.html",
              "priority": 10,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-resnet18",
                "clean-corrupted-logit-delta"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
              "resultFilter": {
                "jobId": "corruption-robustness",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "bench": "cvpr-prompt-segmentation-robustness-bench",
              "page": "cvpr-prompt-segmentation-robustness-bench.html",
              "priority": 11,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-maskrcnn-resnet50-fpn",
                "mask-rcnn-click-robustness-proxy"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
              "resultFilter": {
                "jobId": "prompt-segmentation-robustness",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "video-identity-tracking",
              "bench": "cvpr-video-identity-tracking-bench",
              "page": "cvpr-video-identity-tracking-bench.html",
              "priority": 12,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-centroid-assignment-tracker",
                "mask-sequence-identity-drift"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
              "resultFilter": {
                "jobId": "video-identity-tracking",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "metric-geometry",
              "bench": "cvpr-metric-geometry-bench",
              "page": "cvpr-metric-geometry-bench.html",
              "priority": 13,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-pose-bundle-adjuster",
                "metric-scale-probe",
                "surface-consistency-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
              "resultFilter": {
                "jobId": "metric-geometry",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "bench": "cvpr-gaussian-splatting-bench",
              "page": "cvpr-gaussian-splatting-bench.html",
              "priority": 14,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-splat-renderer",
                "semantic-splat-attach",
                "provenance-trace-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
              "resultFilter": {
                "jobId": "gaussian-splatting",
                "mode": "cached-real"
              }
            }
          ]
        },
        "cachedResults": [
          {
            "jobId": "open-vocab-grounding",
            "caseId": "common-clean",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:17Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "teal rectangle.",
              "controls": {
                "queryRarity": 18,
                "distractorOverlap": 16,
                "boxAmbiguity": 18,
                "evidenceThreshold": 54
              },
              "asset": "synthetic://common-clean"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "teal rectangle",
                  "xywh": [
                    0.178,
                    0.216,
                    0.305,
                    0.288
                  ],
                  "score": 0.742
                },
                {
                  "label": "teal rectangle",
                  "xywh": [
                    0.512,
                    0.255,
                    0.272,
                    0.266
                  ],
                  "score": 0.417
                }
              ],
              "regionScores": {
                "target": 26.8,
                "longTail": 39.7
              },
              "embeddingScore": 8.3,
              "localizedEvidence": 50.2
            },
            "metrics": {
              "readiness": 48.0,
              "proposalRecall": 74.2,
              "textRegionScore": 26.8,
              "longTailRecall": 39.7,
              "localizedEvidence": 50.2,
              "unsupportedRisk": 21.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-visible",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:18Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "teal target rectangle.",
              "controls": {
                "queryRarity": 66,
                "distractorOverlap": 12,
                "boxAmbiguity": 34,
                "evidenceThreshold": 62
              },
              "asset": "synthetic://rare-visible"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "teal target rectangle",
                  "xywh": [
                    0.178,
                    0.216,
                    0.305,
                    0.288
                  ],
                  "score": 0.752
                },
                {
                  "label": "teal target rectangle",
                  "xywh": [
                    0.522,
                    0.256,
                    0.273,
                    0.266
                  ],
                  "score": 0.381
                }
              ],
              "regionScores": {
                "target": 26.7,
                "longTail": 43.2
              },
              "embeddingScore": 7.8,
              "localizedEvidence": 52.2
            },
            "metrics": {
              "readiness": 49.4,
              "proposalRecall": 75.2,
              "textRegionScore": 26.7,
              "longTailRecall": 43.2,
              "localizedEvidence": 52.2,
              "unsupportedRisk": 21.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-distractors",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:18Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "teal target rectangle near orange distractor.",
              "controls": {
                "queryRarity": 78,
                "distractorOverlap": 28,
                "boxAmbiguity": 28,
                "evidenceThreshold": 76
              },
              "asset": "synthetic://rare-distractors"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "teal target rectangle orange distract",
                  "xywh": [
                    0.177,
                    0.216,
                    0.307,
                    0.289
                  ],
                  "score": 0.794
                },
                {
                  "label": "orange distractor",
                  "xywh": [
                    0.484,
                    0.257,
                    0.273,
                    0.266
                  ],
                  "score": 0.587
                }
              ],
              "regionScores": {
                "target": 93.1,
                "longTail": 85.2
              },
              "embeddingScore": 98.4,
              "localizedEvidence": 84.5
            },
            "metrics": {
              "readiness": 88.0,
              "proposalRecall": 79.4,
              "textRegionScore": 93.1,
              "longTailRecall": 85.2,
              "localizedEvidence": 84.5,
              "unsupportedRisk": 8.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "unsupported-query",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:01:18Z",
            "model": {
              "embedding": "google/siglip-base-patch16-224",
              "detector": "IDEA-Research/grounding-dino-tiny"
            },
            "inputs": {
              "textQuery": "transparent glass elephant.",
              "controls": {
                "queryRarity": 82,
                "distractorOverlap": 30,
                "boxAmbiguity": 32,
                "evidenceThreshold": 84
              },
              "asset": "synthetic://unsupported-query"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "transparent glass elephant",
                  "xywh": [
                    0.178,
                    0.216,
                    0.304,
                    0.288
                  ],
                  "score": 0.606
                },
                {
                  "label": "transparent glass elephant",
                  "xywh": [
                    0.48,
                    0.256,
                    0.271,
                    0.266
                  ],
                  "score": 0.524
                },
                {
                  "label": "transparent glass elephant",
                  "xywh": [
                    0.178,
                    0.216,
                    0.575,
                    0.306
                  ],
                  "score": 0.285
                }
              ],
              "regionScores": {
                "target": 17.0,
                "longTail": 40.6
              },
              "embeddingScore": 0.0,
              "localizedEvidence": 47.0
            },
            "metrics": {
              "readiness": 44.0,
              "proposalRecall": 60.6,
              "textRegionScore": 17.0,
              "longTailRecall": 40.6,
              "localizedEvidence": 47.0,
              "unsupportedRisk": 24.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench",
              "execution": "transformers-grounding-dino-siglip-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
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
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "clean-camera",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 56,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "synthetic://clean-camera"
            },
            "outputs": {
              "provenanceConfidence": 50.8,
              "attackHeatmap": "synthetic://adversarial/clean-camera-clip-heatmap.png",
              "leakageRisk": 1.8,
              "evidence": 52.2,
              "clipProbeScores": {
                "a clean camera photograph": 41.3,
                "a synthetic generated image": 45.2,
                "an edited social media image": 0.8,
                "an adversarially perturbed image": 6.6,
                "a watermarked image": 6.1
              }
            },
            "metrics": {
              "readiness": 66.8,
              "attackCoverage": 3.7,
              "provenanceConfidence": 50.8,
              "leakageRisk": 1.8,
              "evidence": 52.2,
              "risk": 11.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "edited-social-post",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 64,
                "watermarkVisibility": 98,
                "unlearningProbe": 10
              },
              "asset": "synthetic://edited-social-post"
            },
            "outputs": {
              "provenanceConfidence": 39.8,
              "attackHeatmap": "synthetic://adversarial/edited-social-post-clip-heatmap.png",
              "leakageRisk": 4.4,
              "evidence": 44.2,
              "clipProbeScores": {
                "a clean camera photograph": 0.7,
                "a synthetic generated image": 91.0,
                "an edited social media image": 1.6,
                "an adversarially perturbed image": 4.2,
                "a watermarked image": 2.4
              }
            },
            "metrics": {
              "readiness": 57.7,
              "attackCoverage": 2.6,
              "provenanceConfidence": 39.8,
              "leakageRisk": 4.4,
              "evidence": 44.2,
              "risk": 23.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "synthetic-watermarked",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 84,
                "watermarkVisibility": 94,
                "unlearningProbe": 44
              },
              "asset": "synthetic://synthetic-watermarked"
            },
            "outputs": {
              "provenanceConfidence": 39.1,
              "attackHeatmap": "synthetic://adversarial/synthetic-watermarked-clip-heatmap.png",
              "leakageRisk": 14.1,
              "evidence": 41.5,
              "clipProbeScores": {
                "a clean camera photograph": 0.0,
                "a synthetic generated image": 99.1,
                "an edited social media image": 0.0,
                "an adversarially perturbed image": 0.1,
                "a watermarked image": 0.8
              }
            },
            "metrics": {
              "readiness": 53.8,
              "attackCoverage": 0.1,
              "provenanceConfidence": 39.1,
              "leakageRisk": 14.1,
              "evidence": 41.5,
              "risk": 29.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "adaptive-attack",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:04:05Z",
            "model": {
              "detector": "openai/clip-vit-base-patch32",
              "probe": "clip-provenance-prompt-bank"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 12,
                "generationSource": 89,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "synthetic://adaptive-attack"
            },
            "outputs": {
              "provenanceConfidence": 39.9,
              "attackHeatmap": "synthetic://adversarial/adaptive-attack-clip-heatmap.png",
              "leakageRisk": 13.1,
              "evidence": 42.8,
              "clipProbeScores": {
                "a clean camera photograph": 0.7,
                "a synthetic generated image": 85.7,
                "an edited social media image": 1.7,
                "an adversarially perturbed image": 8.1,
                "a watermarked image": 3.9
              }
            },
            "metrics": {
              "readiness": 53.9,
              "attackCoverage": 19.1,
              "provenanceConfidence": 39.9,
              "leakageRisk": 13.1,
              "evidence": 42.8,
              "risk": 32.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench",
              "execution": "transformers-clip-provenance-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "short-stable",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 24,
                "identityDensity": 28,
                "physicsViolations": 14,
                "memoryWindow": 72
              },
              "asset": "synthetic://temporal/short-stable.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/short-stable-raft-tracks.json",
              "contactEvents": "synthetic://temporal/short-stable-contacts.json",
              "driftCurve": [
                2.7,
                5.4,
                8.1,
                10.8,
                13.5
              ],
              "rolloutPlausibility": 85.8,
              "flowProfile": {
                "meanMagnitude": 1.6017,
                "meanRoughness": 0.0288,
                "meanAcceleration": 0.1546,
                "elapsedMs": 1191.22,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 86.1,
              "identityStability": 86.4,
              "contactConsistency": 85.9,
              "rolloutPlausibility": 85.8,
              "drift": 13.5,
              "memoryLoad": 24.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "crowded-memory",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 36,
                "identityDensity": 76,
                "physicsViolations": 26,
                "memoryWindow": 82
              },
              "asset": "synthetic://temporal/crowded-memory.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/crowded-memory-raft-tracks.json",
              "contactEvents": "synthetic://temporal/crowded-memory-contacts.json",
              "driftCurve": [
                4.3,
                8.6,
                12.9,
                17.2,
                21.6
              ],
              "rolloutPlausibility": 79.5,
              "flowProfile": {
                "meanMagnitude": 1.7887,
                "meanRoughness": 0.0288,
                "meanAcceleration": 0.0894,
                "elapsedMs": 168.5,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 80.3,
              "identityStability": 79.9,
              "contactConsistency": 82.6,
              "rolloutPlausibility": 79.5,
              "drift": 21.6,
              "memoryLoad": 40.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "contact-heavy",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 56,
                "identityDensity": 52,
                "physicsViolations": 20,
                "memoryWindow": 82
              },
              "asset": "synthetic://temporal/contact-heavy.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/contact-heavy-raft-tracks.json",
              "contactEvents": "synthetic://temporal/contact-heavy-contacts.json",
              "driftCurve": [
                3.9,
                7.9,
                11.8,
                15.7,
                19.7
              ],
              "rolloutPlausibility": 80.9,
              "flowProfile": {
                "meanMagnitude": 1.732,
                "meanRoughness": 0.0313,
                "meanAcceleration": 0.1067,
                "elapsedMs": 164.0,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 81.9,
              "identityStability": 81.5,
              "contactConsistency": 84.3,
              "rolloutPlausibility": 80.9,
              "drift": 19.7,
              "memoryLoad": 38.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "long-rollout-drift",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:05:38Z",
            "model": {
              "tracker": "torchvision-raft-small",
              "flow": "Raft_Small_Weights.C_T_V2",
              "rolloutProbe": "cuda-optical-flow-consistency"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 66,
                "identityDensity": 68,
                "physicsViolations": 12,
                "memoryWindow": 92
              },
              "asset": "synthetic://temporal/long-rollout-drift.mp4"
            },
            "outputs": {
              "identityTracks": "synthetic://temporal/long-rollout-drift-raft-tracks.json",
              "contactEvents": "synthetic://temporal/long-rollout-drift-contacts.json",
              "driftCurve": [
                4.1,
                8.3,
                12.4,
                16.6,
                20.7
              ],
              "rolloutPlausibility": 79.7,
              "flowProfile": {
                "meanMagnitude": 1.8144,
                "meanRoughness": 0.0331,
                "meanAcceleration": 0.1629,
                "elapsedMs": 162.79,
                "pairs": 5
              }
            },
            "metrics": {
              "readiness": 81.3,
              "identityStability": 79.0,
              "contactConsistency": 86.4,
              "rolloutPlausibility": 79.7,
              "drift": 20.7,
              "memoryLoad": 44.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench",
              "execution": "torchvision-raft-small-temporal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
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
          },
          {
            "jobId": "constraint-generation",
            "caseId": "light-layout-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 24,
                "layoutLock": 78,
                "identityLock": 82,
                "adversarialPromptPressure": 18
              },
              "asset": "synthetic://generation/light-layout-edit.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/light-layout-edit-edited.png",
              "layoutMask": "synthetic://generation/light-layout-edit-layout-mask.png",
              "identityEmbeddingDelta": 19.2,
              "rewardTrace": "synthetic://generation/light-layout-edit-reward.json"
            },
            "metrics": {
              "readiness": 78.5,
              "editPressure": 21.0,
              "constraintSatisfaction": 80.8,
              "identityPreservation": 80.2,
              "editLocality": 76.2,
              "rewardAlignment": 73.6,
              "identityDamage": 19.2,
              "provenanceRisk": 20.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "style-with-locks",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 52,
                "layoutLock": 68,
                "identityLock": 80,
                "adversarialPromptPressure": 32
              },
              "asset": "synthetic://generation/style-with-locks.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/style-with-locks-edited.png",
              "layoutMask": "synthetic://generation/style-with-locks-layout-mask.png",
              "identityEmbeddingDelta": 31.3,
              "rewardTrace": "synthetic://generation/style-with-locks-reward.json"
            },
            "metrics": {
              "readiness": 70.9,
              "editPressure": 39.3,
              "constraintSatisfaction": 74.7,
              "identityPreservation": 73.7,
              "editLocality": 67.7,
              "rewardAlignment": 66.0,
              "identityDamage": 31.3,
              "provenanceRisk": 32.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "layout-rewrite",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 72,
                "layoutLock": 62,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "synthetic://generation/layout-rewrite.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/layout-rewrite-edited.png",
              "layoutMask": "synthetic://generation/layout-rewrite-layout-mask.png",
              "identityEmbeddingDelta": 32.4,
              "rewardTrace": "synthetic://generation/layout-rewrite-reward.json"
            },
            "metrics": {
              "readiness": 70.5,
              "editPressure": 45.7,
              "constraintSatisfaction": 73.2,
              "identityPreservation": 75.0,
              "editLocality": 65.9,
              "rewardAlignment": 66.2,
              "identityDamage": 32.4,
              "provenanceRisk": 33.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "prompt-attack-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:14Z",
            "model": {
              "layout": "torch-layout-probe",
              "identity": "torch-identity-embedding-probe",
              "reward": "constraint-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 78,
                "layoutLock": 66,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "synthetic://generation/prompt-attack-edit.png"
            },
            "outputs": {
              "editedImage": "synthetic://generation/prompt-attack-edit-edited.png",
              "layoutMask": "synthetic://generation/prompt-attack-edit-layout-mask.png",
              "identityEmbeddingDelta": 34.0,
              "rewardTrace": "synthetic://generation/prompt-attack-edit-reward.json"
            },
            "metrics": {
              "readiness": 70.8,
              "editPressure": 47.8,
              "constraintSatisfaction": 74.7,
              "identityPreservation": 74.0,
              "editLocality": 66.7,
              "rewardAlignment": 66.6,
              "identityDamage": 34.0,
              "provenanceRisk": 33.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench",
              "execution": "torch-layout-identity-reward-probe",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "indoor-low-texture",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 68,
                "thinStructure": 24,
                "scaleAmbiguity": 54
              },
              "asset": "synthetic://depth/indoor-low-texture.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.024086,
              "curvature": 0.004773
            },
            "metrics": {
              "readiness": 81.8,
              "depthRange": 0.7193,
              "normalConsistency": 84.4,
              "surfaceConsistency": 89.4,
              "scaleDrift": 29.1,
              "thinStructureRisk": 15.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "thin-chair-legs",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 38,
                "thinStructure": 78,
                "scaleAmbiguity": 32
              },
              "asset": "synthetic://depth/thin-chair-legs.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.019778,
              "curvature": 0.003684
            },
            "metrics": {
              "readiness": 75.7,
              "depthRange": 0.6591,
              "normalConsistency": 87.9,
              "surfaceConsistency": 80.2,
              "scaleDrift": 19.5,
              "thinStructureRisk": 46.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "reflective-surface",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 52,
                "thinStructure": 34,
                "scaleAmbiguity": 46
              },
              "asset": "synthetic://depth/reflective-surface.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.021851,
              "curvature": 0.004147
            },
            "metrics": {
              "readiness": 81.6,
              "depthRange": 0.6839,
              "normalConsistency": 86.3,
              "surfaceConsistency": 87.9,
              "scaleDrift": 25.3,
              "thinStructureRisk": 21.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "wide-room-scale",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:22:34Z",
            "model": {
              "depth": "torch-cuda-depth-normal-probe",
              "surface": "finite-difference-normal-consistency"
            },
            "inputs": {
              "depthControls": {
                "textureSparsity": 44,
                "thinStructure": 22,
                "scaleAmbiguity": 68
              },
              "asset": "synthetic://depth/wide-room-scale.png"
            },
            "outputs": {
              "depthMap": "synthetic://depth/depth-map.pt",
              "normalEnergy": 0.020688,
              "curvature": 0.00388
            },
            "metrics": {
              "readiness": 82.5,
              "depthRange": 0.677,
              "normalConsistency": 87.2,
              "surfaceConsistency": 90.2,
              "scaleDrift": 32.0,
              "thinStructureRisk": 14.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-depth-normal-consistency-bench",
              "execution": "torch-cuda-depth-normal-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "motion-blur",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "blur",
                "severity": 46
              },
              "asset": "synthetic://robustness/motion-blur.png"
            },
            "outputs": {
              "cleanConfidence": 35.2,
              "corruptedConfidence": 66.3,
              "jsDivergence": 0.712014,
              "featureCosine": 0.940137
            },
            "metrics": {
              "readiness": 80.8,
              "robustness": 86.3,
              "confidenceCollapse": 15.0,
              "featureRetention": 94.0,
              "labelStability": 74.6,
              "severity": 46,
              "topClassChanged": 1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "sensor-noise",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "noise",
                "severity": 52
              },
              "asset": "synthetic://robustness/sensor-noise.png"
            },
            "outputs": {
              "cleanConfidence": 38.2,
              "corruptedConfidence": 43.1,
              "jsDivergence": 0.06174,
              "featureCosine": 0.963718
            },
            "metrics": {
              "readiness": 84.4,
              "robustness": 91.9,
              "confidenceCollapse": 10.0,
              "featureRetention": 96.4,
              "labelStability": 99.0,
              "severity": 52,
              "topClassChanged": 0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "patch-attack",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "patch",
                "severity": 66
              },
              "asset": "synthetic://robustness/patch-attack.png"
            },
            "outputs": {
              "cleanConfidence": 33.5,
              "corruptedConfidence": 36.9,
              "jsDivergence": 0.031526,
              "featureCosine": 0.973741
            },
            "metrics": {
              "readiness": 81.1,
              "robustness": 90.8,
              "confidenceCollapse": 11.8,
              "featureRetention": 97.4,
              "labelStability": 99.5,
              "severity": 66,
              "topClassChanged": 0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "compression-shift",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:26:30Z",
            "model": {
              "classifier": "ResNet18_Weights.IMAGENET1K_V1",
              "probe": "clean-corrupted-logit-delta"
            },
            "inputs": {
              "corruptionControls": {
                "corruption": "compression",
                "severity": 58
              },
              "asset": "synthetic://robustness/compression-shift.png"
            },
            "outputs": {
              "cleanConfidence": 38.5,
              "corruptedConfidence": 39.9,
              "jsDivergence": 0.009099,
              "featureCosine": 0.9972
            },
            "metrics": {
              "readiness": 84.1,
              "robustness": 92.9,
              "confidenceCollapse": 9.4,
              "featureRetention": 99.7,
              "labelStability": 99.9,
              "severity": 58,
              "topClassChanged": 0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-corruption-robustness-bench",
              "execution": "torchvision-resnet-corruption-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "single-object",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 18,
                "promptNoise": 8,
                "occlusion": 10
              },
              "asset": "synthetic://segmentation/single-object.png"
            },
            "outputs": {
              "meanMaskConfidence": 60.7,
              "maskArea": 0.88176,
              "maskOverlap": 0.38536
            },
            "metrics": {
              "readiness": 65.4,
              "maskStability": 57.2,
              "promptSensitivity": 32.4,
              "unsupportedRegionRisk": 20.2,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "cluttered-scene",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 64,
                "promptNoise": 18,
                "occlusion": 24
              },
              "asset": "synthetic://segmentation/cluttered-scene.png"
            },
            "outputs": {
              "meanMaskConfidence": 66.3,
              "maskArea": 0.9091,
              "maskOverlap": 0.40537
            },
            "metrics": {
              "readiness": 62.3,
              "maskStability": 59.4,
              "promptSensitivity": 48.0,
              "unsupportedRegionRisk": 22.8,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "ambiguous-clicks",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 46,
                "promptNoise": 62,
                "occlusion": 18
              },
              "asset": "synthetic://segmentation/ambiguous-clicks.png"
            },
            "outputs": {
              "meanMaskConfidence": 66.7,
              "maskArea": 0.90569,
              "maskOverlap": 0.38714
            },
            "metrics": {
              "readiness": 58.3,
              "maskStability": 60.7,
              "promptSensitivity": 61.3,
              "unsupportedRegionRisk": 28.2,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "occluded-object",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:23:49Z",
            "model": {
              "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
              "promptProbe": "mask-rcnn-click-robustness-proxy"
            },
            "inputs": {
              "promptControls": {
                "objectClutter": 38,
                "promptNoise": 26,
                "occlusion": 70
              },
              "asset": "synthetic://segmentation/occluded-object.png"
            },
            "outputs": {
              "meanMaskConfidence": 66.3,
              "maskArea": 0.91259,
              "maskOverlap": 0.40266
            },
            "metrics": {
              "readiness": 57.8,
              "maskStability": 53.9,
              "promptSensitivity": 45.5,
              "unsupportedRegionRisk": 35.1,
              "detections": 2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
              "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "clean-crossing",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 12,
                "crowding": 22,
                "velocity": 36
              },
              "asset": "synthetic://tracking/clean-crossing.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.01013,
              "trackTensor": "synthetic://tracking/clean-crossing-tracks.pt"
            },
            "metrics": {
              "readiness": 88.8,
              "identityStability": 88.9,
              "occlusionRecovery": 85.0,
              "trackContinuity": 91.5,
              "identityDrift": 1.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "identity-crossing",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 26,
                "crowding": 68,
                "velocity": 42
              },
              "asset": "synthetic://tracking/identity-crossing.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.01697,
              "trackTensor": "synthetic://tracking/identity-crossing-tracks.pt"
            },
            "metrics": {
              "readiness": 82.6,
              "identityStability": 81.4,
              "occlusionRecovery": 79.2,
              "trackContinuity": 90.0,
              "identityDrift": 2.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "long-occlusion",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 74,
                "crowding": 36,
                "velocity": 34
              },
              "asset": "synthetic://tracking/long-occlusion.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.014317,
              "trackTensor": "synthetic://tracking/long-occlusion-tracks.pt"
            },
            "metrics": {
              "readiness": 79.6,
              "identityStability": 79.2,
              "occlusionRecovery": 75.4,
              "trackContinuity": 91.1,
              "identityDrift": 2.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "fast-motion",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:24:31Z",
            "model": {
              "tracker": "torch-cuda-centroid-assignment-tracker",
              "temporalProbe": "mask-sequence-identity-drift"
            },
            "inputs": {
              "trackingControls": {
                "occlusion": 22,
                "crowding": 42,
                "velocity": 78
              },
              "asset": "synthetic://tracking/fast-motion.mp4"
            },
            "outputs": {
              "frames": 8,
              "objects": 3,
              "temporalDelta": 0.019914,
              "trackTensor": "synthetic://tracking/fast-motion-tracks.pt"
            },
            "metrics": {
              "readiness": 83.1,
              "identityStability": 84.0,
              "occlusionRecovery": 77.9,
              "trackContinuity": 86.7,
              "identityDrift": 3.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-video-identity-tracking-bench",
              "execution": "torch-cuda-video-tracking-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "wide-baseline",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:36Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 82,
                "textureSparsity": 18,
                "scaleAmbiguity": 24,
                "surfaceComplexity": 42
              },
              "asset": "synthetic://geometry/wide-baseline.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 204,
                "meanReprojectionError": 0.00851,
                "p95ReprojectionError": 0.01639,
                "elapsedMs": 1331.44
              },
              "scaleRecovery": {
                "trueScale": 1.13333,
                "recoveredScale": 1.11517,
                "relativeError": 0.01602
              },
              "optimizationTrace": {
                "initialLoss": 0.00534,
                "finalLoss": 0.001153,
                "iterations": 220,
                "calibratedScale": 1.19754
              }
            },
            "metrics": {
              "poseEvidence": 92.8,
              "metricEvidence": 100.0,
              "surfaceConsistency": 87.8,
              "scaleDrift": 0.6,
              "topologyRisk": 11.6,
              "readiness": 92.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "scale-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:37Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 66,
                "textureSparsity": 28,
                "scaleAmbiguity": 44,
                "surfaceComplexity": 46
              },
              "asset": "synthetic://geometry/scale-transfer.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 196,
                "meanReprojectionError": 0.00963,
                "p95ReprojectionError": 0.0193,
                "elapsedMs": 742.4
              },
              "scaleRecovery": {
                "trueScale": 1.24444,
                "recoveredScale": 1.21153,
                "relativeError": 0.00475
              },
              "optimizationTrace": {
                "initialLoss": 0.004471,
                "finalLoss": 0.001505,
                "iterations": 220,
                "calibratedScale": 1.25036
              }
            },
            "metrics": {
              "poseEvidence": 91.7,
              "metricEvidence": 99.4,
              "surfaceConsistency": 87.2,
              "scaleDrift": 3.8,
              "topologyRisk": 12.5,
              "readiness": 92.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "thin-structure",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:38Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 58,
                "textureSparsity": 34,
                "scaleAmbiguity": 32,
                "surfaceComplexity": 72
              },
              "asset": "synthetic://geometry/thin-structure.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 191,
                "meanReprojectionError": 0.01438,
                "p95ReprojectionError": 0.02784,
                "elapsedMs": 759.71
              },
              "scaleRecovery": {
                "trueScale": 1.17778,
                "recoveredScale": 1.15349,
                "relativeError": 0.01432
              },
              "optimizationTrace": {
                "initialLoss": 0.005345,
                "finalLoss": 0.00322,
                "iterations": 220,
                "calibratedScale": 1.19465
              }
            },
            "metrics": {
              "poseEvidence": 90.2,
              "metricEvidence": 97.3,
              "surfaceConsistency": 83.5,
              "scaleDrift": 3.4,
              "topologyRisk": 18.3,
              "readiness": 89.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "low-texture-indoor",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:31:38Z",
            "model": {
              "solver": "torch-cuda-differentiable-camera-solver",
              "geometry": "bundle-adjustment-scale-probe"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 54,
                "textureSparsity": 58,
                "scaleAmbiguity": 48,
                "surfaceComplexity": 50
              },
              "asset": "synthetic://geometry/low-texture-indoor.json"
            },
            "outputs": {
              "cameraRecovery": {
                "points": 158,
                "meanReprojectionError": 0.01534,
                "p95ReprojectionError": 0.02952,
                "elapsedMs": 768.1
              },
              "scaleRecovery": {
                "trueScale": 1.26667,
                "recoveredScale": 1.23104,
                "relativeError": 0.01505
              },
              "optimizationTrace": {
                "initialLoss": 0.005659,
                "finalLoss": 0.003549,
                "iterations": 220,
                "calibratedScale": 1.2476
              }
            },
            "metrics": {
              "poseEvidence": 88.1,
              "metricEvidence": 95.3,
              "surfaceConsistency": 86.0,
              "scaleDrift": 6.3,
              "topologyRisk": 13.9,
              "readiness": 89.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench",
              "execution": "torch-cuda-metric-geometry-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "dense-novel-view",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 86,
                "splatDensity": 78,
                "semanticEntropy": 24,
                "provenanceVisibility": 70
              },
              "asset": "synthetic://splat/dense-novel-view.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 337,
                "views": 5,
                "elapsedMs": 71.17,
                "adjacentFrameDelta": 0.13833
              },
              "semanticProbe": {
                "meanConfidence": 0.5302,
                "margin": 0.45706,
                "editLeakageRatio": 0.05605,
                "editLocality": 0.94395
              },
              "provenanceProbe": {
                "visibility": 70,
                "trace": 67.7
              }
            },
            "metrics": {
              "renderFidelity": 85.5,
              "semanticAttachment": 60.9,
              "provenanceTrace": 67.7,
              "viewInstability": 14.1,
              "editLeakageRisk": 10.2,
              "readiness": 74.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "semantic-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 74,
                "splatDensity": 72,
                "semanticEntropy": 34,
                "provenanceVisibility": 76
              },
              "asset": "synthetic://splat/semantic-edit.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 319,
                "views": 5,
                "elapsedMs": 23.13,
                "adjacentFrameDelta": 0.13381
              },
              "semanticProbe": {
                "meanConfidence": 0.55323,
                "margin": 0.45882,
                "editLeakageRatio": 0.07111,
                "editLocality": 0.92889
              },
              "provenanceProbe": {
                "visibility": 76,
                "trace": 72.3
              }
            },
            "metrics": {
              "renderFidelity": 83.7,
              "semanticAttachment": 60.7,
              "provenanceTrace": 72.3,
              "viewInstability": 15.2,
              "editLeakageRisk": 12.1,
              "readiness": 75.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "provenance-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 68,
                "splatDensity": 70,
                "semanticEntropy": 42,
                "provenanceVisibility": 84
              },
              "asset": "synthetic://splat/provenance-transfer.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 313,
                "views": 5,
                "elapsedMs": 22.65,
                "adjacentFrameDelta": 0.13393
              },
              "semanticProbe": {
                "meanConfidence": 0.51926,
                "margin": 0.42126,
                "editLeakageRatio": 0.08418,
                "editLocality": 0.91582
              },
              "provenanceProbe": {
                "visibility": 84,
                "trace": 77.6
              }
            },
            "metrics": {
              "renderFidelity": 82.7,
              "semanticAttachment": 57.0,
              "provenanceTrace": 77.6,
              "viewInstability": 15.9,
              "editLeakageRisk": 13.5,
              "readiness": 75.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "sparse-capture",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:29:24Z",
            "model": {
              "renderer": "torch-cuda-gaussian-splat-compositor",
              "semanticProbe": "splat-label-edit-probe"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 62,
                "splatDensity": 66,
                "semanticEntropy": 46,
                "provenanceVisibility": 72
              },
              "asset": "synthetic://splat/sparse-capture.ply"
            },
            "outputs": {
              "renderProfile": {
                "splats": 300,
                "views": 5,
                "elapsedMs": 21.97,
                "adjacentFrameDelta": 0.13495
              },
              "semanticProbe": {
                "meanConfidence": 0.57297,
                "margin": 0.47408,
                "editLeakageRatio": 0.07785,
                "editLocality": 0.92215
              },
              "provenanceProbe": {
                "visibility": 72,
                "trace": 69.6
              }
            },
            "metrics": {
              "renderFidelity": 81.4,
              "semanticAttachment": 60.5,
              "provenanceTrace": 69.6,
              "viewInstability": 16.7,
              "editLeakageRisk": 14.5,
              "readiness": 73.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "Tesla T4",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench",
              "execution": "torch-cuda-gaussian-splatting-live-demo",
              "promotedFrom": "live-colab",
              "canonicalMode": "cached-real"
            }
          },
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
          },
          {
            "jobId": "driving-safety",
            "caseId": "urban-cut-in",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 48,
                "actorSpeed": 40,
                "occlusion": 10,
                "actionConfidence": 82
              },
              "asset": "synthetic://driving/urban-cut-in.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/urban-cut-in-grounding.png",
              "timeToCollision": 5.15,
              "riskTrace": "synthetic://driving/urban-cut-in-risk.json",
              "ruleViolations": 32.9
            },
            "metrics": {
              "readiness": 57.4,
              "sceneGrounding": 58.1,
              "timeToCollision": 5.15,
              "risk": 33.6,
              "ruleViolation": 32.9,
              "abstention": 15.5
            },
            "provenance": {
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
            "jobId": "driving-safety",
            "caseId": "night-crosswalk",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 36,
                "actorSpeed": 34,
                "occlusion": 18,
                "actionConfidence": 78
              },
              "asset": "synthetic://driving/night-crosswalk.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/night-crosswalk-grounding.png",
              "timeToCollision": 5.73,
              "riskTrace": "synthetic://driving/night-crosswalk-risk.json",
              "ruleViolations": 32.8
            },
            "metrics": {
              "readiness": 57.1,
              "sceneGrounding": 55.4,
              "timeToCollision": 5.73,
              "risk": 31.9,
              "ruleViolation": 32.8,
              "abstention": 16.0
            },
            "provenance": {
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
            "jobId": "driving-safety",
            "caseId": "highway-merge",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 24,
                "actorSpeed": 72,
                "occlusion": 16,
                "actionConfidence": 84
              },
              "asset": "synthetic://driving/highway-merge.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/highway-merge-grounding.png",
              "timeToCollision": 4.34,
              "riskTrace": "synthetic://driving/highway-merge-risk.json",
              "ruleViolations": 33.9
            },
            "metrics": {
              "readiness": 56.5,
              "sceneGrounding": 57.0,
              "timeToCollision": 4.34,
              "risk": 34.8,
              "ruleViolation": 33.9,
              "abstention": 16.0
            },
            "provenance": {
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
            "jobId": "driving-safety",
            "caseId": "construction-zone",
            "mode": "cached-real",
            "createdAt": "2026-08-17T03:14:48Z",
            "model": {
              "grounder": "torch-driving-scene-risk-probe",
              "riskHead": "ttc-risk-head",
              "ruleMonitor": "safety-rule-monitor"
            },
            "inputs": {
              "safetyControls": {
                "hazardDensity": 36,
                "actorSpeed": 32,
                "occlusion": 14,
                "actionConfidence": 72
              },
              "asset": "synthetic://driving/construction-zone.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "synthetic://driving/construction-zone-grounding.png",
              "timeToCollision": 5.82,
              "riskTrace": "synthetic://driving/construction-zone-risk.json",
              "ruleViolations": 33.0
            },
            "metrics": {
              "readiness": 57.1,
              "sceneGrounding": 55.1,
              "timeToCollision": 5.82,
              "risk": 32.1,
              "ruleViolation": 33.0,
              "abstention": 17.3
            },
            "provenance": {
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
      "importReport": {
        "summary": {
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
        "jobs": [
          {
            "jobId": "open-vocab-grounding",
            "bench": "cvpr-long-tail-grounding-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "restoration-fidelity",
            "bench": "cvpr-restoration-fidelity-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "adversarial-provenance",
            "bench": "cvpr-adversarial-provenance-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "temporal-rollout",
            "bench": "cvpr-temporal-rollout-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "clinical-shift",
            "bench": "cvpr-clinical-shift-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "compute-serving",
            "bench": "cvpr-compute-serving-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "constraint-generation",
            "bench": "cvpr-constraint-generation-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "driving-safety",
            "bench": "cvpr-driving-safety-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "depth-normal-consistency",
            "bench": "cvpr-depth-normal-consistency-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "corruption-robustness",
            "bench": "cvpr-corruption-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "video-identity-tracking",
            "bench": "cvpr-video-identity-tracking-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "metric-geometry",
            "bench": "cvpr-metric-geometry-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "gaussian-splatting",
            "bench": "cvpr-gaussian-splatting-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
            "ready": true
          }
        ],
        "issues": []
      },
      "liveIntake": {
        "summary": {
          "validator": "validate_cvpr_colab_results",
          "runtimePlane": "google-colab-pro-plus",
          "expectedMode": "live-colab",
          "jobs": 14,
          "expectedResults": 56,
          "actualResults": 56,
          "validJobs": 14,
          "issues": 0,
          "status": "valid",
          "intake": "cvpr-colab-live-intake",
          "job": null,
          "export": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
          "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "promoted": false
        },
        "jobs": [
          {
            "jobId": "open-vocab-grounding",
            "bench": "cvpr-long-tail-grounding-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "restoration-fidelity",
            "bench": "cvpr-restoration-fidelity-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "adversarial-provenance",
            "bench": "cvpr-adversarial-provenance-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "temporal-rollout",
            "bench": "cvpr-temporal-rollout-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "clinical-shift",
            "bench": "cvpr-clinical-shift-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "compute-serving",
            "bench": "cvpr-compute-serving-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "constraint-generation",
            "bench": "cvpr-constraint-generation-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "driving-safety",
            "bench": "cvpr-driving-safety-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "depth-normal-consistency",
            "bench": "cvpr-depth-normal-consistency-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "corruption-robustness",
            "bench": "cvpr-corruption-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "video-identity-tracking",
            "bench": "cvpr-video-identity-tracking-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "metric-geometry",
            "bench": "cvpr-metric-geometry-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "gaussian-splatting",
            "bench": "cvpr-gaussian-splatting-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
            "ready": true
          }
        ],
        "issues": []
      },
      "promotion": {
        "summary": {
          "validator": "validate_cvpr_colab_results",
          "runtimePlane": "google-colab-pro-plus",
          "expectedMode": "live-colab",
          "jobs": 14,
          "expectedResults": 56,
          "actualResults": 56,
          "validJobs": 14,
          "issues": 0,
          "status": "valid",
          "intake": "cvpr-colab-live-intake",
          "job": null,
          "export": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
          "canonicalArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
          "promoted": true
        },
        "jobs": [
          {
            "jobId": "open-vocab-grounding",
            "bench": "cvpr-long-tail-grounding-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "restoration-fidelity",
            "bench": "cvpr-restoration-fidelity-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "adversarial-provenance",
            "bench": "cvpr-adversarial-provenance-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "temporal-rollout",
            "bench": "cvpr-temporal-rollout-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "clinical-shift",
            "bench": "cvpr-clinical-shift-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "compute-serving",
            "bench": "cvpr-compute-serving-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "constraint-generation",
            "bench": "cvpr-constraint-generation-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "driving-safety",
            "bench": "cvpr-driving-safety-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "depth-normal-consistency",
            "bench": "cvpr-depth-normal-consistency-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "corruption-robustness",
            "bench": "cvpr-corruption-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "bench": "cvpr-prompt-segmentation-robustness-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "video-identity-tracking",
            "bench": "cvpr-video-identity-tracking-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "metric-geometry",
            "bench": "cvpr-metric-geometry-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
            "ready": true
          },
          {
            "jobId": "gaussian-splatting",
            "bench": "cvpr-gaussian-splatting-bench",
            "expectedCases": 4,
            "actualCases": 4,
            "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
            "ready": true
          }
        ],
        "issues": []
      },
      "promotionDelta": {
        "summary": {
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
        },
        "rows": [
          {
            "jobId": "adversarial-provenance",
            "caseId": "adaptive-attack",
            "readinessBefore": 53.9,
            "readinessAfter": 53.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "attackCoverage": 0.0,
              "evidence": 0.0,
              "leakageRisk": 0.0,
              "provenanceConfidence": 0.0,
              "readiness": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "clean-camera",
            "readinessBefore": 66.8,
            "readinessAfter": 66.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "attackCoverage": 0.0,
              "evidence": 0.0,
              "leakageRisk": 0.0,
              "provenanceConfidence": 0.0,
              "readiness": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "edited-social-post",
            "readinessBefore": 57.7,
            "readinessAfter": 57.7,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "attackCoverage": 0.0,
              "evidence": 0.0,
              "leakageRisk": 0.0,
              "provenanceConfidence": 0.0,
              "readiness": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "synthetic-watermarked",
            "readinessBefore": 53.8,
            "readinessAfter": 53.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "attackCoverage": 0.0,
              "evidence": 0.0,
              "leakageRisk": 0.0,
              "provenanceConfidence": 0.0,
              "readiness": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "clinical-shift",
            "caseId": "clear-baseline",
            "readinessBefore": 89.9,
            "readinessAfter": 89.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "escalationThreshold": 0,
              "falseClearRisk": 0.0,
              "readiness": 0.0,
              "shiftScore": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "clinical-shift",
            "caseId": "motion-artifact",
            "readinessBefore": 81.1,
            "readinessAfter": 81.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "escalationThreshold": 0,
              "falseClearRisk": 0.0,
              "readiness": 0.0,
              "shiftScore": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "clinical-shift",
            "caseId": "rare-presentation",
            "readinessBefore": 81.9,
            "readinessAfter": 81.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "escalationThreshold": 0,
              "falseClearRisk": 0.0,
              "readiness": 0.0,
              "shiftScore": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "clinical-shift",
            "caseId": "scanner-shift",
            "readinessBefore": 83.2,
            "readinessAfter": 83.2,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "escalationThreshold": 0,
              "falseClearRisk": 0.0,
              "readiness": 0.0,
              "shiftScore": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "compute-serving",
            "caseId": "desktop-batch",
            "readinessBefore": 89.1,
            "readinessAfter": 89.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "costSaving": 0.0,
              "escalationRate": 0.0,
              "latency": 0.0,
              "qualityFloor": 0.0,
              "readiness": 0.0,
              "retainedEvidence": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "compute-serving",
            "caseId": "edge-camera",
            "readinessBefore": 87.0,
            "readinessAfter": 87.0,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "costSaving": 0.0,
              "escalationRate": 0.0,
              "latency": 0.0,
              "qualityFloor": 0.0,
              "readiness": 0.0,
              "retainedEvidence": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "compute-serving",
            "caseId": "fleet-peak-load",
            "readinessBefore": 86.9,
            "readinessAfter": 86.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "costSaving": 0.0,
              "escalationRate": 0.0,
              "latency": 0.0,
              "qualityFloor": 0.0,
              "readiness": 0.0,
              "retainedEvidence": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "compute-serving",
            "caseId": "mobile-live",
            "readinessBefore": 87.3,
            "readinessAfter": 87.3,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "costSaving": 0.0,
              "escalationRate": 0.0,
              "latency": 0.0,
              "qualityFloor": 0.0,
              "readiness": 0.0,
              "retainedEvidence": 0.0,
              "risk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "constraint-generation",
            "caseId": "layout-rewrite",
            "readinessBefore": 70.5,
            "readinessAfter": 70.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "constraintSatisfaction": 0.0,
              "editLocality": 0.0,
              "editPressure": 0.0,
              "identityDamage": 0.0,
              "identityPreservation": 0.0,
              "provenanceRisk": 0.0,
              "readiness": 0.0,
              "rewardAlignment": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "constraint-generation",
            "caseId": "light-layout-edit",
            "readinessBefore": 78.5,
            "readinessAfter": 78.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "constraintSatisfaction": 0.0,
              "editLocality": 0.0,
              "editPressure": 0.0,
              "identityDamage": 0.0,
              "identityPreservation": 0.0,
              "provenanceRisk": 0.0,
              "readiness": 0.0,
              "rewardAlignment": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "constraint-generation",
            "caseId": "prompt-attack-edit",
            "readinessBefore": 70.8,
            "readinessAfter": 70.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "constraintSatisfaction": 0.0,
              "editLocality": 0.0,
              "editPressure": 0.0,
              "identityDamage": 0.0,
              "identityPreservation": 0.0,
              "provenanceRisk": 0.0,
              "readiness": 0.0,
              "rewardAlignment": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "constraint-generation",
            "caseId": "style-with-locks",
            "readinessBefore": 70.9,
            "readinessAfter": 70.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "constraintSatisfaction": 0.0,
              "editLocality": 0.0,
              "editPressure": 0.0,
              "identityDamage": 0.0,
              "identityPreservation": 0.0,
              "provenanceRisk": 0.0,
              "readiness": 0.0,
              "rewardAlignment": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "compression-shift",
            "readinessBefore": 84.1,
            "readinessAfter": 84.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "confidenceCollapse": 0.0,
              "featureRetention": 0.0,
              "labelStability": 0.0,
              "readiness": 0.0,
              "robustness": 0.0,
              "severity": 0,
              "topClassChanged": 0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "motion-blur",
            "readinessBefore": 80.8,
            "readinessAfter": 80.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "confidenceCollapse": 0.0,
              "featureRetention": 0.0,
              "labelStability": 0.0,
              "readiness": 0.0,
              "robustness": 0.0,
              "severity": 0,
              "topClassChanged": 0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "patch-attack",
            "readinessBefore": 81.1,
            "readinessAfter": 81.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "confidenceCollapse": 0.0,
              "featureRetention": 0.0,
              "labelStability": 0.0,
              "readiness": 0.0,
              "robustness": 0.0,
              "severity": 0,
              "topClassChanged": 0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "corruption-robustness",
            "caseId": "sensor-noise",
            "readinessBefore": 84.4,
            "readinessAfter": 84.4,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "confidenceCollapse": 0.0,
              "featureRetention": 0.0,
              "labelStability": 0.0,
              "readiness": 0.0,
              "robustness": 0.0,
              "severity": 0,
              "topClassChanged": 0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "indoor-low-texture",
            "readinessBefore": 81.8,
            "readinessAfter": 81.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "depthRange": 0.0,
              "normalConsistency": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "thinStructureRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "reflective-surface",
            "readinessBefore": 81.6,
            "readinessAfter": 81.6,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "depthRange": 0.0,
              "normalConsistency": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "thinStructureRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "thin-chair-legs",
            "readinessBefore": 75.7,
            "readinessAfter": 75.7,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "depthRange": 0.0,
              "normalConsistency": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "thinStructureRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "depth-normal-consistency",
            "caseId": "wide-room-scale",
            "readinessBefore": 82.5,
            "readinessAfter": 82.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "depthRange": 0.0,
              "normalConsistency": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "thinStructureRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "driving-safety",
            "caseId": "construction-zone",
            "readinessBefore": 57.1,
            "readinessAfter": 57.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "abstention": 0.0,
              "readiness": 0.0,
              "risk": 0.0,
              "ruleViolation": 0.0,
              "sceneGrounding": 0.0,
              "timeToCollision": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "driving-safety",
            "caseId": "highway-merge",
            "readinessBefore": 56.5,
            "readinessAfter": 56.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "abstention": 0.0,
              "readiness": 0.0,
              "risk": 0.0,
              "ruleViolation": 0.0,
              "sceneGrounding": 0.0,
              "timeToCollision": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "driving-safety",
            "caseId": "night-crosswalk",
            "readinessBefore": 57.1,
            "readinessAfter": 57.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "abstention": 0.0,
              "readiness": 0.0,
              "risk": 0.0,
              "ruleViolation": 0.0,
              "sceneGrounding": 0.0,
              "timeToCollision": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "driving-safety",
            "caseId": "urban-cut-in",
            "readinessBefore": 57.4,
            "readinessAfter": 57.4,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "abstention": 0.0,
              "readiness": 0.0,
              "risk": 0.0,
              "ruleViolation": 0.0,
              "sceneGrounding": 0.0,
              "timeToCollision": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "dense-novel-view",
            "readinessBefore": 74.9,
            "readinessAfter": 74.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "editLeakageRisk": 0.0,
              "provenanceTrace": 0.0,
              "readiness": 0.0,
              "renderFidelity": 0.0,
              "semanticAttachment": 0.0,
              "viewInstability": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "provenance-transfer",
            "readinessBefore": 75.1,
            "readinessAfter": 75.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "editLeakageRisk": 0.0,
              "provenanceTrace": 0.0,
              "readiness": 0.0,
              "renderFidelity": 0.0,
              "semanticAttachment": 0.0,
              "viewInstability": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "semantic-edit",
            "readinessBefore": 75.2,
            "readinessAfter": 75.2,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "editLeakageRisk": 0.0,
              "provenanceTrace": 0.0,
              "readiness": 0.0,
              "renderFidelity": 0.0,
              "semanticAttachment": 0.0,
              "viewInstability": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "sparse-capture",
            "readinessBefore": 73.6,
            "readinessAfter": 73.6,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "editLeakageRisk": 0.0,
              "provenanceTrace": 0.0,
              "readiness": 0.0,
              "renderFidelity": 0.0,
              "semanticAttachment": 0.0,
              "viewInstability": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "metric-geometry",
            "caseId": "low-texture-indoor",
            "readinessBefore": 89.4,
            "readinessAfter": 89.4,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "metricEvidence": 0.0,
              "poseEvidence": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "topologyRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "metric-geometry",
            "caseId": "scale-transfer",
            "readinessBefore": 92.1,
            "readinessAfter": 92.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "metricEvidence": 0.0,
              "poseEvidence": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "topologyRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "metric-geometry",
            "caseId": "thin-structure",
            "readinessBefore": 89.1,
            "readinessAfter": 89.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "metricEvidence": 0.0,
              "poseEvidence": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "topologyRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "metric-geometry",
            "caseId": "wide-baseline",
            "readinessBefore": 92.9,
            "readinessAfter": 92.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "metricEvidence": 0.0,
              "poseEvidence": 0.0,
              "readiness": 0.0,
              "scaleDrift": 0.0,
              "surfaceConsistency": 0.0,
              "topologyRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "common-clean",
            "readinessBefore": 48.0,
            "readinessAfter": 48.0,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "longTailRecall": 0.0,
              "proposalRecall": 0.0,
              "readiness": 0.0,
              "textRegionScore": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-distractors",
            "readinessBefore": 88.0,
            "readinessAfter": 88.0,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "longTailRecall": 0.0,
              "proposalRecall": 0.0,
              "readiness": 0.0,
              "textRegionScore": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-visible",
            "readinessBefore": 49.4,
            "readinessAfter": 49.4,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "longTailRecall": 0.0,
              "proposalRecall": 0.0,
              "readiness": 0.0,
              "textRegionScore": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "unsupported-query",
            "readinessBefore": 44.0,
            "readinessAfter": 44.0,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "longTailRecall": 0.0,
              "proposalRecall": 0.0,
              "readiness": 0.0,
              "textRegionScore": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "ambiguous-clicks",
            "readinessBefore": 58.3,
            "readinessAfter": 58.3,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "detections": 0,
              "maskStability": 0.0,
              "promptSensitivity": 0.0,
              "readiness": 0.0,
              "unsupportedRegionRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "cluttered-scene",
            "readinessBefore": 62.3,
            "readinessAfter": 62.3,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "detections": 0,
              "maskStability": 0.0,
              "promptSensitivity": 0.0,
              "readiness": 0.0,
              "unsupportedRegionRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "occluded-object",
            "readinessBefore": 57.8,
            "readinessAfter": 57.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "detections": 0,
              "maskStability": 0.0,
              "promptSensitivity": 0.0,
              "readiness": 0.0,
              "unsupportedRegionRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "prompt-segmentation-robustness",
            "caseId": "single-object",
            "readinessBefore": 65.4,
            "readinessAfter": 65.4,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "detections": 0,
              "maskStability": 0.0,
              "promptSensitivity": 0.0,
              "readiness": 0.0,
              "unsupportedRegionRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "compressed-low-light",
            "readinessBefore": 78.5,
            "readinessAfter": 78.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "artifactRisk": 0.0,
              "degradationLoad": 0.0,
              "diagnosisConfidence": 0.0,
              "downstreamUtility": 0.0,
              "fabricatedDetailRisk": 0.0,
              "fidelityScore": 0.0,
              "readiness": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "mild-noise",
            "readinessBefore": 81.6,
            "readinessAfter": 81.6,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "artifactRisk": 0.0,
              "degradationLoad": 0.0,
              "diagnosisConfidence": 0.0,
              "downstreamUtility": 0.0,
              "fabricatedDetailRisk": 0.0,
              "fidelityScore": 0.0,
              "readiness": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "motion-blur-task",
            "readinessBefore": 80.5,
            "readinessAfter": 80.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "artifactRisk": 0.0,
              "degradationLoad": 0.0,
              "diagnosisConfidence": 0.0,
              "downstreamUtility": 0.0,
              "fabricatedDetailRisk": 0.0,
              "fidelityScore": 0.0,
              "readiness": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "over-restored-detail",
            "readinessBefore": 78.9,
            "readinessAfter": 78.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "artifactRisk": 0.0,
              "degradationLoad": 0.0,
              "diagnosisConfidence": 0.0,
              "downstreamUtility": 0.0,
              "fabricatedDetailRisk": 0.0,
              "fidelityScore": 0.0,
              "readiness": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "contact-heavy",
            "readinessBefore": 81.9,
            "readinessAfter": 81.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "contactConsistency": 0.0,
              "drift": 0.0,
              "identityStability": 0.0,
              "memoryLoad": 0.0,
              "readiness": 0.0,
              "rolloutPlausibility": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "crowded-memory",
            "readinessBefore": 80.3,
            "readinessAfter": 80.3,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "contactConsistency": 0.0,
              "drift": 0.0,
              "identityStability": 0.0,
              "memoryLoad": 0.0,
              "readiness": 0.0,
              "rolloutPlausibility": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "long-rollout-drift",
            "readinessBefore": 81.3,
            "readinessAfter": 81.3,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "contactConsistency": 0.0,
              "drift": 0.0,
              "identityStability": 0.0,
              "memoryLoad": 0.0,
              "readiness": 0.0,
              "rolloutPlausibility": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "short-stable",
            "readinessBefore": 86.1,
            "readinessAfter": 86.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "contactConsistency": 0.0,
              "drift": 0.0,
              "identityStability": 0.0,
              "memoryLoad": 0.0,
              "readiness": 0.0,
              "rolloutPlausibility": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "clean-crossing",
            "readinessBefore": 88.8,
            "readinessAfter": 88.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "identityDrift": 0.0,
              "identityStability": 0.0,
              "occlusionRecovery": 0.0,
              "readiness": 0.0,
              "trackContinuity": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "fast-motion",
            "readinessBefore": 83.1,
            "readinessAfter": 83.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "identityDrift": 0.0,
              "identityStability": 0.0,
              "occlusionRecovery": 0.0,
              "readiness": 0.0,
              "trackContinuity": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "identity-crossing",
            "readinessBefore": 82.6,
            "readinessAfter": 82.6,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "identityDrift": 0.0,
              "identityStability": 0.0,
              "occlusionRecovery": 0.0,
              "readiness": 0.0,
              "trackContinuity": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "video-identity-tracking",
            "caseId": "long-occlusion",
            "readinessBefore": 79.6,
            "readinessAfter": 79.6,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "identityDrift": 0.0,
              "identityStability": 0.0,
              "occlusionRecovery": 0.0,
              "readiness": 0.0,
              "trackContinuity": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          }
        ],
        "missing": [],
        "modeMismatches": [],
        "regressions": []
      },
      "release": {
        "summary": {
          "bundle": "cvpr-colab-release-bundle",
          "status": "release",
          "runtimePlane": "google-colab-pro-plus",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
          "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "workerJobs": 14,
          "promotedRunners": 14,
          "runnerRows": 14,
          "cachedResults": 56,
          "importIssues": 0,
          "fullStackStatus": "valid",
          "packageTests": 148,
          "validationGate": "release",
          "liveIntakeStatus": "valid",
          "liveIntakeResults": 56,
          "liveIntakePromoted": true,
          "promotionDeltaStatus": "release",
          "promotionRegressions": 0,
          "maxReadinessDrop": 0.0,
          "importValidator": "scripts/validate_cvpr_colab_results.py",
          "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
          "validationCenter": "cvpr-validation-center.html"
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
        "runManifest": {
          "runtimePlane": "google-colab-pro-plus",
          "controlPlane": "local-static-cvpr-site",
          "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "jobs": [
            {
              "jobId": "open-vocab-grounding",
              "bench": "cvpr-long-tail-grounding-bench",
              "page": "cvpr-long-tail-grounding-bench.html",
              "priority": 1,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "siglip-base-patch16-224",
                "grounding-dino-tiny",
                "sam-vit-b"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
              "resultFilter": {
                "jobId": "open-vocab-grounding",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "restoration-fidelity",
              "bench": "cvpr-restoration-fidelity-bench",
              "page": "cvpr-restoration-fidelity-bench.html",
              "priority": 2,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "swinir-lightweight",
                "real-esrgan-x2"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
              "resultFilter": {
                "jobId": "restoration-fidelity",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "bench": "cvpr-adversarial-provenance-bench",
              "page": "cvpr-adversarial-provenance-bench.html",
              "priority": 3,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "watermark-detector",
                "clip-perturbation-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
              "resultFilter": {
                "jobId": "adversarial-provenance",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "temporal-rollout",
              "bench": "cvpr-temporal-rollout-bench",
              "page": "cvpr-temporal-rollout-bench.html",
              "priority": 4,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "video-feature-tracker",
                "raft-lite",
                "world-rollout-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
              "resultFilter": {
                "jobId": "temporal-rollout",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "clinical-shift",
              "bench": "cvpr-clinical-shift-bench",
              "page": "cvpr-clinical-shift-bench.html",
              "priority": 5,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "dicom-embedding-shift-probe",
                "temperature-calibration-head",
                "uncertainty-triage-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
              "resultFilter": {
                "jobId": "clinical-shift",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "compute-serving",
              "bench": "cvpr-compute-serving-bench",
              "page": "cvpr-compute-serving-bench.html",
              "priority": 6,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "quantized-vision-encoder",
                "student-router",
                "latency-profiler"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
              "resultFilter": {
                "jobId": "compute-serving",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "constraint-generation",
              "bench": "cvpr-constraint-generation-bench",
              "page": "cvpr-constraint-generation-bench.html",
              "priority": 7,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "layout-controlnet",
                "identity-embedding-lock",
                "preference-reward-probe"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
              "resultFilter": {
                "jobId": "constraint-generation",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "driving-safety",
              "bench": "cvpr-driving-safety-bench",
              "page": "cvpr-driving-safety-bench.html",
              "priority": 8,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "vla-scene-grounder",
                "ttc-risk-head",
                "safety-rule-monitor"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
              "resultFilter": {
                "jobId": "driving-safety",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "depth-normal-consistency",
              "bench": "cvpr-depth-normal-consistency-bench",
              "page": "cvpr-depth-normal-consistency-bench.html",
              "priority": 9,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-depth-normal-probe",
                "finite-difference-normal-consistency"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
              "resultFilter": {
                "jobId": "depth-normal-consistency",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "corruption-robustness",
              "bench": "cvpr-corruption-robustness-bench",
              "page": "cvpr-corruption-robustness-bench.html",
              "priority": 10,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-resnet18",
                "clean-corrupted-logit-delta"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
              "resultFilter": {
                "jobId": "corruption-robustness",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "bench": "cvpr-prompt-segmentation-robustness-bench",
              "page": "cvpr-prompt-segmentation-robustness-bench.html",
              "priority": 11,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-maskrcnn-resnet50-fpn",
                "mask-rcnn-click-robustness-proxy"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
              "resultFilter": {
                "jobId": "prompt-segmentation-robustness",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "video-identity-tracking",
              "bench": "cvpr-video-identity-tracking-bench",
              "page": "cvpr-video-identity-tracking-bench.html",
              "priority": 12,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-centroid-assignment-tracker",
                "mask-sequence-identity-drift"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
              "resultFilter": {
                "jobId": "video-identity-tracking",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "metric-geometry",
              "bench": "cvpr-metric-geometry-bench",
              "page": "cvpr-metric-geometry-bench.html",
              "priority": 13,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-pose-bundle-adjuster",
                "metric-scale-probe",
                "surface-consistency-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
              "resultFilter": {
                "jobId": "metric-geometry",
                "mode": "cached-real"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "bench": "cvpr-gaussian-splatting-bench",
              "page": "cvpr-gaussian-splatting-bench.html",
              "priority": 14,
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-splat-renderer",
                "semantic-splat-attach",
                "provenance-trace-head"
              ],
              "expectedCases": 4,
              "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
              "resultFilter": {
                "jobId": "gaussian-splatting",
                "mode": "cached-real"
              }
            }
          ]
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
        "fullStack": {
          "validator": "validate_cvpr_full_stack",
          "status": "valid",
          "commands": 286,
          "steps": 59,
          "packageTests": 148,
          "workerJobs": 14,
          "promotedRunners": 14,
          "cachedResults": 56,
          "importIssues": 0,
          "durationSec": 157.909
        },
        "validationCenter": {
          "dashboard": "cvpr-validation-center",
          "status": "interactive",
          "gateStatus": "release",
          "fullStackStatus": "valid",
          "commands": 286,
          "steps": 53,
          "packageTests": 148,
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
              "command": "node source-code/learning/*/tests/core.test.js",
              "returnCode": 0,
              "durationSec": 146.056,
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
              "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
              "returnCode": 0,
              "durationSec": 0.454,
              "stdoutTail": [
                "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
              ],
              "stderrTail": []
            },
            {
              "command": "python3 scripts/build_cvpr_demo_lab.py",
              "returnCode": 0,
              "durationSec": 0.413,
              "stdoutTail": [
                "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
              ],
              "stderrTail": []
            },
            {
              "command": "python3 scripts/verify_cvpr_demo_lab.py",
              "returnCode": 0,
              "durationSec": 0.359,
              "stdoutTail": [
                "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
              ],
              "stderrTail": []
            },
            {
              "command": "python3 scripts/validate_cvpr_colab_results.py",
              "returnCode": 0,
              "durationSec": 0.322,
              "stdoutTail": [
                "validated CVPR Colab results: 56 results, 0 issues"
              ],
              "stderrTail": []
            }
          ]
        },
        "liveIntake": {
          "validator": "validate_cvpr_colab_results",
          "runtimePlane": "google-colab-pro-plus",
          "expectedMode": "live-colab",
          "jobs": 14,
          "expectedResults": 56,
          "actualResults": 56,
          "validJobs": 14,
          "issues": 0,
          "status": "valid",
          "intake": "cvpr-colab-live-intake",
          "job": null,
          "export": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
          "canonicalArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
          "promoted": true
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
      },
      "handoff": {
        "summary": {
          "handoff": "cvpr-colab-handoff-package",
          "status": "ready",
          "jobs": 14,
          "runners": 14,
          "expectedResults": 56,
          "importIssues": 0,
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
          "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
          "intakeGate": "scripts/stage_cvpr_live_colab_export.py",
          "notebookCells": 22,
          "exportContract": true,
          "zipPath": "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip",
          "zipEntries": [
            "README.md",
            "analysis/cvpr_colab_gpu_worker/import_validation.json",
            "analysis/cvpr_colab_gpu_worker/registry.json",
            "notebooks/cvpr_gpu_worker.ipynb",
            "scripts/stage_cvpr_live_colab_export.py",
            "scripts/validate_cvpr_colab_results.py",
            "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
            "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
          ]
        },
        "worker": {
          "summary": {
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
          "jobs": [
            {
              "id": "open-vocab-grounding",
              "title": "Open-vocabulary grounding GPU run",
              "bench": "cvpr-long-tail-grounding-bench",
              "page": "cvpr-long-tail-grounding-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "siglip-base-patch16-224",
                "grounding-dino-tiny",
                "sam-vit-b"
              ],
              "inputs": [
                "image",
                "text_query",
                "candidate_regions"
              ],
              "outputs": [
                "boxes",
                "region_scores",
                "embedding_scores",
                "localized_evidence"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 1
            },
            {
              "id": "restoration-fidelity",
              "title": "Restoration fidelity GPU run",
              "bench": "cvpr-restoration-fidelity-bench",
              "page": "cvpr-restoration-fidelity-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "swinir-lightweight",
                "real-esrgan-x2"
              ],
              "inputs": [
                "degraded_image",
                "degradation_controls"
              ],
              "outputs": [
                "restored_image",
                "artifact_map",
                "downstream_score"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 2
            },
            {
              "id": "adversarial-provenance",
              "title": "Adversarial provenance GPU run",
              "bench": "cvpr-adversarial-provenance-bench",
              "page": "cvpr-adversarial-provenance-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "watermark-detector",
                "clip-perturbation-probe"
              ],
              "inputs": [
                "image",
                "attack_controls",
                "watermark_controls"
              ],
              "outputs": [
                "provenance_confidence",
                "attack_heatmap",
                "leakage_risk"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 3
            },
            {
              "id": "temporal-rollout",
              "title": "Temporal rollout GPU run",
              "bench": "cvpr-temporal-rollout-bench",
              "page": "cvpr-temporal-rollout-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "video-feature-tracker",
                "raft-lite",
                "world-rollout-probe"
              ],
              "inputs": [
                "video_clip",
                "tracking_controls"
              ],
              "outputs": [
                "identity_tracks",
                "contact_events",
                "drift_curve"
              ],
              "gpuClass": "L4/A100",
              "priority": 4
            },
            {
              "id": "clinical-shift",
              "title": "Clinical shift validation GPU run",
              "bench": "cvpr-clinical-shift-bench",
              "page": "cvpr-clinical-shift-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "dicom-embedding-shift-probe",
                "temperature-calibration-head",
                "uncertainty-triage-head"
              ],
              "inputs": [
                "medical_image_batch",
                "site_metadata",
                "review_controls"
              ],
              "outputs": [
                "domain_embeddings",
                "calibration_curve",
                "triage_scores",
                "clinical_evidence"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 5
            },
            {
              "id": "compute-serving",
              "title": "Compute constrained serving GPU run",
              "bench": "cvpr-compute-serving-bench",
              "page": "cvpr-compute-serving-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "quantized-vision-encoder",
                "student-router",
                "latency-profiler"
              ],
              "inputs": [
                "image_batch",
                "serving_controls",
                "escalation_policy"
              ],
              "outputs": [
                "latency_profile",
                "quality_floor",
                "routing_trace",
                "retained_evidence"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 6
            },
            {
              "id": "constraint-generation",
              "title": "Constraint preserving generation GPU run",
              "bench": "cvpr-constraint-generation-bench",
              "page": "cvpr-constraint-generation-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "layout-controlnet",
                "identity-embedding-lock",
                "preference-reward-probe"
              ],
              "inputs": [
                "source_image",
                "edit_prompt",
                "constraint_controls"
              ],
              "outputs": [
                "edited_image",
                "layout_mask",
                "identity_embedding_delta",
                "reward_trace"
              ],
              "gpuClass": "L4/A100",
              "priority": 7
            },
            {
              "id": "driving-safety",
              "title": "Driving safety closed-loop GPU run",
              "bench": "cvpr-driving-safety-bench",
              "page": "cvpr-driving-safety-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "vla-scene-grounder",
                "ttc-risk-head",
                "safety-rule-monitor"
              ],
              "inputs": [
                "driving_clip",
                "hazard_controls",
                "action_confidence"
              ],
              "outputs": [
                "scene_grounding_map",
                "time_to_collision",
                "risk_trace",
                "rule_violations"
              ],
              "gpuClass": "L4/A100",
              "priority": 8
            },
            {
              "id": "depth-normal-consistency",
              "title": "Depth-normal consistency GPU run",
              "bench": "cvpr-depth-normal-consistency-bench",
              "page": "cvpr-depth-normal-consistency-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-depth-normal-probe",
                "finite-difference-normal-consistency"
              ],
              "inputs": [
                "depth_map",
                "normal_controls",
                "scene_geometry"
              ],
              "outputs": [
                "normal_map",
                "consistency_curve",
                "depth_residual_map",
                "surface_alerts"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 9
            },
            {
              "id": "corruption-robustness",
              "title": "Corruption robustness GPU run",
              "bench": "cvpr-corruption-robustness-bench",
              "page": "cvpr-corruption-robustness-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-resnet18",
                "clean-corrupted-logit-delta"
              ],
              "inputs": [
                "image_batch",
                "corruption_controls",
                "severity_schedule"
              ],
              "outputs": [
                "feature_retention",
                "label_drift_curve",
                "confidence_collapse",
                "corruption_report"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 10
            },
            {
              "id": "prompt-segmentation-robustness",
              "title": "Prompt segmentation robustness GPU run",
              "bench": "cvpr-prompt-segmentation-robustness-bench",
              "page": "cvpr-prompt-segmentation-robustness-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torchvision-maskrcnn-resnet50-fpn",
                "mask-rcnn-click-robustness-proxy"
              ],
              "inputs": [
                "image",
                "prompt_points",
                "prompt_variants"
              ],
              "outputs": [
                "mask_predictions",
                "click_sensitivity",
                "iou_trace",
                "prompt_failure_map"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 11
            },
            {
              "id": "video-identity-tracking",
              "title": "Video identity tracking GPU run",
              "bench": "cvpr-video-identity-tracking-bench",
              "page": "cvpr-video-identity-tracking-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-cuda-centroid-assignment-tracker",
                "mask-sequence-identity-drift"
              ],
              "inputs": [
                "video_clip",
                "identity_seed",
                "tracking_controls"
              ],
              "outputs": [
                "track_sequence",
                "identity_drift_curve",
                "handoff_events",
                "failure_frames"
              ],
              "gpuClass": "T4/L4/A100",
              "priority": 12
            },
            {
              "id": "metric-geometry",
              "title": "Metric geometry GPU run",
              "bench": "cvpr-metric-geometry-bench",
              "page": "cvpr-metric-geometry-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-pose-bundle-adjuster",
                "metric-scale-probe",
                "surface-consistency-head"
              ],
              "inputs": [
                "multi_view_images",
                "camera_controls",
                "scale_controls"
              ],
              "outputs": [
                "pose_graph",
                "scale_trace",
                "surface_residual_map",
                "topology_warnings"
              ],
              "gpuClass": "L4/A100",
              "priority": 9
            },
            {
              "id": "gaussian-splatting",
              "title": "Gaussian Splatting GPU run",
              "bench": "cvpr-gaussian-splatting-bench",
              "page": "cvpr-gaussian-splatting-bench.html",
              "runtimeModes": [
                "simulated",
                "cached-real",
                "live-colab"
              ],
              "models": [
                "torch-splat-renderer",
                "semantic-splat-attach",
                "provenance-trace-head"
              ],
              "inputs": [
                "scene_views",
                "splat_controls",
                "edit_controls"
              ],
              "outputs": [
                "novel_view_renders",
                "semantic_splat_map",
                "provenance_trace",
                "edit_leakage_report"
              ],
              "gpuClass": "L4/A100",
              "priority": 10
            }
          ],
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
          "notebookNativeJobIds": [
            "open-vocab-grounding",
            "restoration-fidelity",
            "adversarial-provenance",
            "temporal-rollout",
            "clinical-shift",
            "compute-serving",
            "constraint-generation",
            "driving-safety",
            "metric-geometry",
            "gaussian-splatting"
          ],
          "externalLiveJobIds": [
            "depth-normal-consistency",
            "corruption-robustness",
            "prompt-segmentation-robustness",
            "video-identity-tracking"
          ],
          "runManifest": {
            "runtimePlane": "google-colab-pro-plus",
            "controlPlane": "local-static-cvpr-site",
            "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
            "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "jobs": [
              {
                "jobId": "open-vocab-grounding",
                "bench": "cvpr-long-tail-grounding-bench",
                "page": "cvpr-long-tail-grounding-bench.html",
                "priority": 1,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "siglip-base-patch16-224",
                  "grounding-dino-tiny",
                  "sam-vit-b"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
                "resultFilter": {
                  "jobId": "open-vocab-grounding",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "restoration-fidelity",
                "bench": "cvpr-restoration-fidelity-bench",
                "page": "cvpr-restoration-fidelity-bench.html",
                "priority": 2,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "swinir-lightweight",
                  "real-esrgan-x2"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
                "resultFilter": {
                  "jobId": "restoration-fidelity",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "adversarial-provenance",
                "bench": "cvpr-adversarial-provenance-bench",
                "page": "cvpr-adversarial-provenance-bench.html",
                "priority": 3,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "watermark-detector",
                  "clip-perturbation-probe"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
                "resultFilter": {
                  "jobId": "adversarial-provenance",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "temporal-rollout",
                "bench": "cvpr-temporal-rollout-bench",
                "page": "cvpr-temporal-rollout-bench.html",
                "priority": 4,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "video-feature-tracker",
                  "raft-lite",
                  "world-rollout-probe"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
                "resultFilter": {
                  "jobId": "temporal-rollout",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "clinical-shift",
                "bench": "cvpr-clinical-shift-bench",
                "page": "cvpr-clinical-shift-bench.html",
                "priority": 5,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "dicom-embedding-shift-probe",
                  "temperature-calibration-head",
                  "uncertainty-triage-head"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
                "resultFilter": {
                  "jobId": "clinical-shift",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "compute-serving",
                "bench": "cvpr-compute-serving-bench",
                "page": "cvpr-compute-serving-bench.html",
                "priority": 6,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "quantized-vision-encoder",
                  "student-router",
                  "latency-profiler"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
                "resultFilter": {
                  "jobId": "compute-serving",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "constraint-generation",
                "bench": "cvpr-constraint-generation-bench",
                "page": "cvpr-constraint-generation-bench.html",
                "priority": 7,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "layout-controlnet",
                  "identity-embedding-lock",
                  "preference-reward-probe"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
                "resultFilter": {
                  "jobId": "constraint-generation",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "driving-safety",
                "bench": "cvpr-driving-safety-bench",
                "page": "cvpr-driving-safety-bench.html",
                "priority": 8,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "vla-scene-grounder",
                  "ttc-risk-head",
                  "safety-rule-monitor"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
                "resultFilter": {
                  "jobId": "driving-safety",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "depth-normal-consistency",
                "bench": "cvpr-depth-normal-consistency-bench",
                "page": "cvpr-depth-normal-consistency-bench.html",
                "priority": 9,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "torch-cuda-depth-normal-probe",
                  "finite-difference-normal-consistency"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
                "resultFilter": {
                  "jobId": "depth-normal-consistency",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "corruption-robustness",
                "bench": "cvpr-corruption-robustness-bench",
                "page": "cvpr-corruption-robustness-bench.html",
                "priority": 10,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "torchvision-resnet18",
                  "clean-corrupted-logit-delta"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
                "resultFilter": {
                  "jobId": "corruption-robustness",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "prompt-segmentation-robustness",
                "bench": "cvpr-prompt-segmentation-robustness-bench",
                "page": "cvpr-prompt-segmentation-robustness-bench.html",
                "priority": 11,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "torchvision-maskrcnn-resnet50-fpn",
                  "mask-rcnn-click-robustness-proxy"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
                "resultFilter": {
                  "jobId": "prompt-segmentation-robustness",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "video-identity-tracking",
                "bench": "cvpr-video-identity-tracking-bench",
                "page": "cvpr-video-identity-tracking-bench.html",
                "priority": 12,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "torch-cuda-centroid-assignment-tracker",
                  "mask-sequence-identity-drift"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
                "resultFilter": {
                  "jobId": "video-identity-tracking",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "metric-geometry",
                "bench": "cvpr-metric-geometry-bench",
                "page": "cvpr-metric-geometry-bench.html",
                "priority": 13,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "torch-pose-bundle-adjuster",
                  "metric-scale-probe",
                  "surface-consistency-head"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
                "resultFilter": {
                  "jobId": "metric-geometry",
                  "mode": "cached-real"
                }
              },
              {
                "jobId": "gaussian-splatting",
                "bench": "cvpr-gaussian-splatting-bench",
                "page": "cvpr-gaussian-splatting-bench.html",
                "priority": 14,
                "runtimeModes": [
                  "simulated",
                  "cached-real",
                  "live-colab"
                ],
                "models": [
                  "torch-splat-renderer",
                  "semantic-splat-attach",
                  "provenance-trace-head"
                ],
                "expectedCases": 4,
                "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
                "resultFilter": {
                  "jobId": "gaussian-splatting",
                  "mode": "cached-real"
                }
              }
            ]
          },
          "cachedResults": [
            {
              "jobId": "open-vocab-grounding",
              "caseId": "common-clean",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:01:17Z",
              "model": {
                "embedding": "google/siglip-base-patch16-224",
                "detector": "IDEA-Research/grounding-dino-tiny"
              },
              "inputs": {
                "textQuery": "teal rectangle.",
                "controls": {
                  "queryRarity": 18,
                  "distractorOverlap": 16,
                  "boxAmbiguity": 18,
                  "evidenceThreshold": 54
                },
                "asset": "synthetic://common-clean"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "teal rectangle",
                    "xywh": [
                      0.178,
                      0.216,
                      0.305,
                      0.288
                    ],
                    "score": 0.742
                  },
                  {
                    "label": "teal rectangle",
                    "xywh": [
                      0.512,
                      0.255,
                      0.272,
                      0.266
                    ],
                    "score": 0.417
                  }
                ],
                "regionScores": {
                  "target": 26.8,
                  "longTail": 39.7
                },
                "embeddingScore": 8.3,
                "localizedEvidence": 50.2
              },
              "metrics": {
                "readiness": 48.0,
                "proposalRecall": 74.2,
                "textRegionScore": 26.8,
                "longTailRecall": 39.7,
                "localizedEvidence": 50.2,
                "unsupportedRisk": 21.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench",
                "execution": "transformers-grounding-dino-siglip-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "open-vocab-grounding",
              "caseId": "rare-visible",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:01:18Z",
              "model": {
                "embedding": "google/siglip-base-patch16-224",
                "detector": "IDEA-Research/grounding-dino-tiny"
              },
              "inputs": {
                "textQuery": "teal target rectangle.",
                "controls": {
                  "queryRarity": 66,
                  "distractorOverlap": 12,
                  "boxAmbiguity": 34,
                  "evidenceThreshold": 62
                },
                "asset": "synthetic://rare-visible"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "teal target rectangle",
                    "xywh": [
                      0.178,
                      0.216,
                      0.305,
                      0.288
                    ],
                    "score": 0.752
                  },
                  {
                    "label": "teal target rectangle",
                    "xywh": [
                      0.522,
                      0.256,
                      0.273,
                      0.266
                    ],
                    "score": 0.381
                  }
                ],
                "regionScores": {
                  "target": 26.7,
                  "longTail": 43.2
                },
                "embeddingScore": 7.8,
                "localizedEvidence": 52.2
              },
              "metrics": {
                "readiness": 49.4,
                "proposalRecall": 75.2,
                "textRegionScore": 26.7,
                "longTailRecall": 43.2,
                "localizedEvidence": 52.2,
                "unsupportedRisk": 21.2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench",
                "execution": "transformers-grounding-dino-siglip-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "open-vocab-grounding",
              "caseId": "rare-distractors",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:01:18Z",
              "model": {
                "embedding": "google/siglip-base-patch16-224",
                "detector": "IDEA-Research/grounding-dino-tiny"
              },
              "inputs": {
                "textQuery": "teal target rectangle near orange distractor.",
                "controls": {
                  "queryRarity": 78,
                  "distractorOverlap": 28,
                  "boxAmbiguity": 28,
                  "evidenceThreshold": 76
                },
                "asset": "synthetic://rare-distractors"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "teal target rectangle orange distract",
                    "xywh": [
                      0.177,
                      0.216,
                      0.307,
                      0.289
                    ],
                    "score": 0.794
                  },
                  {
                    "label": "orange distractor",
                    "xywh": [
                      0.484,
                      0.257,
                      0.273,
                      0.266
                    ],
                    "score": 0.587
                  }
                ],
                "regionScores": {
                  "target": 93.1,
                  "longTail": 85.2
                },
                "embeddingScore": 98.4,
                "localizedEvidence": 84.5
              },
              "metrics": {
                "readiness": 88.0,
                "proposalRecall": 79.4,
                "textRegionScore": 93.1,
                "longTailRecall": 85.2,
                "localizedEvidence": 84.5,
                "unsupportedRisk": 8.9
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench",
                "execution": "transformers-grounding-dino-siglip-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "open-vocab-grounding",
              "caseId": "unsupported-query",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:01:18Z",
              "model": {
                "embedding": "google/siglip-base-patch16-224",
                "detector": "IDEA-Research/grounding-dino-tiny"
              },
              "inputs": {
                "textQuery": "transparent glass elephant.",
                "controls": {
                  "queryRarity": 82,
                  "distractorOverlap": 30,
                  "boxAmbiguity": 32,
                  "evidenceThreshold": 84
                },
                "asset": "synthetic://unsupported-query"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "transparent glass elephant",
                    "xywh": [
                      0.178,
                      0.216,
                      0.304,
                      0.288
                    ],
                    "score": 0.606
                  },
                  {
                    "label": "transparent glass elephant",
                    "xywh": [
                      0.48,
                      0.256,
                      0.271,
                      0.266
                    ],
                    "score": 0.524
                  },
                  {
                    "label": "transparent glass elephant",
                    "xywh": [
                      0.178,
                      0.216,
                      0.575,
                      0.306
                    ],
                    "score": 0.285
                  }
                ],
                "regionScores": {
                  "target": 17.0,
                  "longTail": 40.6
                },
                "embeddingScore": 0.0,
                "localizedEvidence": 47.0
              },
              "metrics": {
                "readiness": 44.0,
                "proposalRecall": 60.6,
                "textRegionScore": 17.0,
                "longTailRecall": 40.6,
                "localizedEvidence": 47.0,
                "unsupportedRisk": 24.9
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench",
                "execution": "transformers-grounding-dino-siglip-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
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
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "clean-camera",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:04:05Z",
              "model": {
                "detector": "openai/clip-vit-base-patch32",
                "probe": "clip-provenance-prompt-bank"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 0,
                  "generationSource": 56,
                  "watermarkVisibility": 100,
                  "unlearningProbe": 0
                },
                "asset": "synthetic://clean-camera"
              },
              "outputs": {
                "provenanceConfidence": 50.8,
                "attackHeatmap": "synthetic://adversarial/clean-camera-clip-heatmap.png",
                "leakageRisk": 1.8,
                "evidence": 52.2,
                "clipProbeScores": {
                  "a clean camera photograph": 41.3,
                  "a synthetic generated image": 45.2,
                  "an edited social media image": 0.8,
                  "an adversarially perturbed image": 6.6,
                  "a watermarked image": 6.1
                }
              },
              "metrics": {
                "readiness": 66.8,
                "attackCoverage": 3.7,
                "provenanceConfidence": 50.8,
                "leakageRisk": 1.8,
                "evidence": 52.2,
                "risk": 11.6
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench",
                "execution": "transformers-clip-provenance-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "edited-social-post",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:04:05Z",
              "model": {
                "detector": "openai/clip-vit-base-patch32",
                "probe": "clip-provenance-prompt-bank"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 0,
                  "generationSource": 64,
                  "watermarkVisibility": 98,
                  "unlearningProbe": 10
                },
                "asset": "synthetic://edited-social-post"
              },
              "outputs": {
                "provenanceConfidence": 39.8,
                "attackHeatmap": "synthetic://adversarial/edited-social-post-clip-heatmap.png",
                "leakageRisk": 4.4,
                "evidence": 44.2,
                "clipProbeScores": {
                  "a clean camera photograph": 0.7,
                  "a synthetic generated image": 91.0,
                  "an edited social media image": 1.6,
                  "an adversarially perturbed image": 4.2,
                  "a watermarked image": 2.4
                }
              },
              "metrics": {
                "readiness": 57.7,
                "attackCoverage": 2.6,
                "provenanceConfidence": 39.8,
                "leakageRisk": 4.4,
                "evidence": 44.2,
                "risk": 23.7
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench",
                "execution": "transformers-clip-provenance-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "synthetic-watermarked",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:04:05Z",
              "model": {
                "detector": "openai/clip-vit-base-patch32",
                "probe": "clip-provenance-prompt-bank"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 0,
                  "generationSource": 84,
                  "watermarkVisibility": 94,
                  "unlearningProbe": 44
                },
                "asset": "synthetic://synthetic-watermarked"
              },
              "outputs": {
                "provenanceConfidence": 39.1,
                "attackHeatmap": "synthetic://adversarial/synthetic-watermarked-clip-heatmap.png",
                "leakageRisk": 14.1,
                "evidence": 41.5,
                "clipProbeScores": {
                  "a clean camera photograph": 0.0,
                  "a synthetic generated image": 99.1,
                  "an edited social media image": 0.0,
                  "an adversarially perturbed image": 0.1,
                  "a watermarked image": 0.8
                }
              },
              "metrics": {
                "readiness": 53.8,
                "attackCoverage": 0.1,
                "provenanceConfidence": 39.1,
                "leakageRisk": 14.1,
                "evidence": 41.5,
                "risk": 29.7
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench",
                "execution": "transformers-clip-provenance-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "adaptive-attack",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:04:05Z",
              "model": {
                "detector": "openai/clip-vit-base-patch32",
                "probe": "clip-provenance-prompt-bank"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 12,
                  "generationSource": 89,
                  "watermarkVisibility": 100,
                  "unlearningProbe": 0
                },
                "asset": "synthetic://adaptive-attack"
              },
              "outputs": {
                "provenanceConfidence": 39.9,
                "attackHeatmap": "synthetic://adversarial/adaptive-attack-clip-heatmap.png",
                "leakageRisk": 13.1,
                "evidence": 42.8,
                "clipProbeScores": {
                  "a clean camera photograph": 0.7,
                  "a synthetic generated image": 85.7,
                  "an edited social media image": 1.7,
                  "an adversarially perturbed image": 8.1,
                  "a watermarked image": 3.9
                }
              },
              "metrics": {
                "readiness": 53.9,
                "attackCoverage": 19.1,
                "provenanceConfidence": 39.9,
                "leakageRisk": 13.1,
                "evidence": 42.8,
                "risk": 32.7
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench",
                "execution": "transformers-clip-provenance-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "short-stable",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:05:38Z",
              "model": {
                "tracker": "torchvision-raft-small",
                "flow": "Raft_Small_Weights.C_T_V2",
                "rolloutProbe": "cuda-optical-flow-consistency"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 24,
                  "identityDensity": 28,
                  "physicsViolations": 14,
                  "memoryWindow": 72
                },
                "asset": "synthetic://temporal/short-stable.mp4"
              },
              "outputs": {
                "identityTracks": "synthetic://temporal/short-stable-raft-tracks.json",
                "contactEvents": "synthetic://temporal/short-stable-contacts.json",
                "driftCurve": [
                  2.7,
                  5.4,
                  8.1,
                  10.8,
                  13.5
                ],
                "rolloutPlausibility": 85.8,
                "flowProfile": {
                  "meanMagnitude": 1.6017,
                  "meanRoughness": 0.0288,
                  "meanAcceleration": 0.1546,
                  "elapsedMs": 1191.22,
                  "pairs": 5
                }
              },
              "metrics": {
                "readiness": 86.1,
                "identityStability": 86.4,
                "contactConsistency": 85.9,
                "rolloutPlausibility": 85.8,
                "drift": 13.5,
                "memoryLoad": 24.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench",
                "execution": "torchvision-raft-small-temporal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "crowded-memory",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:05:38Z",
              "model": {
                "tracker": "torchvision-raft-small",
                "flow": "Raft_Small_Weights.C_T_V2",
                "rolloutProbe": "cuda-optical-flow-consistency"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 36,
                  "identityDensity": 76,
                  "physicsViolations": 26,
                  "memoryWindow": 82
                },
                "asset": "synthetic://temporal/crowded-memory.mp4"
              },
              "outputs": {
                "identityTracks": "synthetic://temporal/crowded-memory-raft-tracks.json",
                "contactEvents": "synthetic://temporal/crowded-memory-contacts.json",
                "driftCurve": [
                  4.3,
                  8.6,
                  12.9,
                  17.2,
                  21.6
                ],
                "rolloutPlausibility": 79.5,
                "flowProfile": {
                  "meanMagnitude": 1.7887,
                  "meanRoughness": 0.0288,
                  "meanAcceleration": 0.0894,
                  "elapsedMs": 168.5,
                  "pairs": 5
                }
              },
              "metrics": {
                "readiness": 80.3,
                "identityStability": 79.9,
                "contactConsistency": 82.6,
                "rolloutPlausibility": 79.5,
                "drift": 21.6,
                "memoryLoad": 40.3
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench",
                "execution": "torchvision-raft-small-temporal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "contact-heavy",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:05:38Z",
              "model": {
                "tracker": "torchvision-raft-small",
                "flow": "Raft_Small_Weights.C_T_V2",
                "rolloutProbe": "cuda-optical-flow-consistency"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 56,
                  "identityDensity": 52,
                  "physicsViolations": 20,
                  "memoryWindow": 82
                },
                "asset": "synthetic://temporal/contact-heavy.mp4"
              },
              "outputs": {
                "identityTracks": "synthetic://temporal/contact-heavy-raft-tracks.json",
                "contactEvents": "synthetic://temporal/contact-heavy-contacts.json",
                "driftCurve": [
                  3.9,
                  7.9,
                  11.8,
                  15.7,
                  19.7
                ],
                "rolloutPlausibility": 80.9,
                "flowProfile": {
                  "meanMagnitude": 1.732,
                  "meanRoughness": 0.0313,
                  "meanAcceleration": 0.1067,
                  "elapsedMs": 164.0,
                  "pairs": 5
                }
              },
              "metrics": {
                "readiness": 81.9,
                "identityStability": 81.5,
                "contactConsistency": 84.3,
                "rolloutPlausibility": 80.9,
                "drift": 19.7,
                "memoryLoad": 38.8
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench",
                "execution": "torchvision-raft-small-temporal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "long-rollout-drift",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:05:38Z",
              "model": {
                "tracker": "torchvision-raft-small",
                "flow": "Raft_Small_Weights.C_T_V2",
                "rolloutProbe": "cuda-optical-flow-consistency"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 66,
                  "identityDensity": 68,
                  "physicsViolations": 12,
                  "memoryWindow": 92
                },
                "asset": "synthetic://temporal/long-rollout-drift.mp4"
              },
              "outputs": {
                "identityTracks": "synthetic://temporal/long-rollout-drift-raft-tracks.json",
                "contactEvents": "synthetic://temporal/long-rollout-drift-contacts.json",
                "driftCurve": [
                  4.1,
                  8.3,
                  12.4,
                  16.6,
                  20.7
                ],
                "rolloutPlausibility": 79.7,
                "flowProfile": {
                  "meanMagnitude": 1.8144,
                  "meanRoughness": 0.0331,
                  "meanAcceleration": 0.1629,
                  "elapsedMs": 162.79,
                  "pairs": 5
                }
              },
              "metrics": {
                "readiness": 81.3,
                "identityStability": 79.0,
                "contactConsistency": 86.4,
                "rolloutPlausibility": 79.7,
                "drift": 20.7,
                "memoryLoad": 44.4
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench",
                "execution": "torchvision-raft-small-temporal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
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
            },
            {
              "jobId": "constraint-generation",
              "caseId": "light-layout-edit",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:14Z",
              "model": {
                "layout": "torch-layout-probe",
                "identity": "torch-identity-embedding-probe",
                "reward": "constraint-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 24,
                  "layoutLock": 78,
                  "identityLock": 82,
                  "adversarialPromptPressure": 18
                },
                "asset": "synthetic://generation/light-layout-edit.png"
              },
              "outputs": {
                "editedImage": "synthetic://generation/light-layout-edit-edited.png",
                "layoutMask": "synthetic://generation/light-layout-edit-layout-mask.png",
                "identityEmbeddingDelta": 19.2,
                "rewardTrace": "synthetic://generation/light-layout-edit-reward.json"
              },
              "metrics": {
                "readiness": 78.5,
                "editPressure": 21.0,
                "constraintSatisfaction": 80.8,
                "identityPreservation": 80.2,
                "editLocality": 76.2,
                "rewardAlignment": 73.6,
                "identityDamage": 19.2,
                "provenanceRisk": 20.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench",
                "execution": "torch-layout-identity-reward-probe",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "constraint-generation",
              "caseId": "style-with-locks",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:14Z",
              "model": {
                "layout": "torch-layout-probe",
                "identity": "torch-identity-embedding-probe",
                "reward": "constraint-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 52,
                  "layoutLock": 68,
                  "identityLock": 80,
                  "adversarialPromptPressure": 32
                },
                "asset": "synthetic://generation/style-with-locks.png"
              },
              "outputs": {
                "editedImage": "synthetic://generation/style-with-locks-edited.png",
                "layoutMask": "synthetic://generation/style-with-locks-layout-mask.png",
                "identityEmbeddingDelta": 31.3,
                "rewardTrace": "synthetic://generation/style-with-locks-reward.json"
              },
              "metrics": {
                "readiness": 70.9,
                "editPressure": 39.3,
                "constraintSatisfaction": 74.7,
                "identityPreservation": 73.7,
                "editLocality": 67.7,
                "rewardAlignment": 66.0,
                "identityDamage": 31.3,
                "provenanceRisk": 32.2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench",
                "execution": "torch-layout-identity-reward-probe",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "constraint-generation",
              "caseId": "layout-rewrite",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:14Z",
              "model": {
                "layout": "torch-layout-probe",
                "identity": "torch-identity-embedding-probe",
                "reward": "constraint-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 72,
                  "layoutLock": 62,
                  "identityLock": 92,
                  "adversarialPromptPressure": 28
                },
                "asset": "synthetic://generation/layout-rewrite.png"
              },
              "outputs": {
                "editedImage": "synthetic://generation/layout-rewrite-edited.png",
                "layoutMask": "synthetic://generation/layout-rewrite-layout-mask.png",
                "identityEmbeddingDelta": 32.4,
                "rewardTrace": "synthetic://generation/layout-rewrite-reward.json"
              },
              "metrics": {
                "readiness": 70.5,
                "editPressure": 45.7,
                "constraintSatisfaction": 73.2,
                "identityPreservation": 75.0,
                "editLocality": 65.9,
                "rewardAlignment": 66.2,
                "identityDamage": 32.4,
                "provenanceRisk": 33.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench",
                "execution": "torch-layout-identity-reward-probe",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "constraint-generation",
              "caseId": "prompt-attack-edit",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:14Z",
              "model": {
                "layout": "torch-layout-probe",
                "identity": "torch-identity-embedding-probe",
                "reward": "constraint-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 78,
                  "layoutLock": 66,
                  "identityLock": 92,
                  "adversarialPromptPressure": 28
                },
                "asset": "synthetic://generation/prompt-attack-edit.png"
              },
              "outputs": {
                "editedImage": "synthetic://generation/prompt-attack-edit-edited.png",
                "layoutMask": "synthetic://generation/prompt-attack-edit-layout-mask.png",
                "identityEmbeddingDelta": 34.0,
                "rewardTrace": "synthetic://generation/prompt-attack-edit-reward.json"
              },
              "metrics": {
                "readiness": 70.8,
                "editPressure": 47.8,
                "constraintSatisfaction": 74.7,
                "identityPreservation": 74.0,
                "editLocality": 66.7,
                "rewardAlignment": 66.6,
                "identityDamage": 34.0,
                "provenanceRisk": 33.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench",
                "execution": "torch-layout-identity-reward-probe",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "depth-normal-consistency",
              "caseId": "indoor-low-texture",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:22:34Z",
              "model": {
                "depth": "torch-cuda-depth-normal-probe",
                "surface": "finite-difference-normal-consistency"
              },
              "inputs": {
                "depthControls": {
                  "textureSparsity": 68,
                  "thinStructure": 24,
                  "scaleAmbiguity": 54
                },
                "asset": "synthetic://depth/indoor-low-texture.png"
              },
              "outputs": {
                "depthMap": "synthetic://depth/depth-map.pt",
                "normalEnergy": 0.024086,
                "curvature": 0.004773
              },
              "metrics": {
                "readiness": 81.8,
                "depthRange": 0.7193,
                "normalConsistency": 84.4,
                "surfaceConsistency": 89.4,
                "scaleDrift": 29.1,
                "thinStructureRisk": 15.8
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-depth-normal-consistency-bench",
                "execution": "torch-cuda-depth-normal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "depth-normal-consistency",
              "caseId": "thin-chair-legs",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:22:34Z",
              "model": {
                "depth": "torch-cuda-depth-normal-probe",
                "surface": "finite-difference-normal-consistency"
              },
              "inputs": {
                "depthControls": {
                  "textureSparsity": 38,
                  "thinStructure": 78,
                  "scaleAmbiguity": 32
                },
                "asset": "synthetic://depth/thin-chair-legs.png"
              },
              "outputs": {
                "depthMap": "synthetic://depth/depth-map.pt",
                "normalEnergy": 0.019778,
                "curvature": 0.003684
              },
              "metrics": {
                "readiness": 75.7,
                "depthRange": 0.6591,
                "normalConsistency": 87.9,
                "surfaceConsistency": 80.2,
                "scaleDrift": 19.5,
                "thinStructureRisk": 46.8
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-depth-normal-consistency-bench",
                "execution": "torch-cuda-depth-normal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "depth-normal-consistency",
              "caseId": "reflective-surface",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:22:34Z",
              "model": {
                "depth": "torch-cuda-depth-normal-probe",
                "surface": "finite-difference-normal-consistency"
              },
              "inputs": {
                "depthControls": {
                  "textureSparsity": 52,
                  "thinStructure": 34,
                  "scaleAmbiguity": 46
                },
                "asset": "synthetic://depth/reflective-surface.png"
              },
              "outputs": {
                "depthMap": "synthetic://depth/depth-map.pt",
                "normalEnergy": 0.021851,
                "curvature": 0.004147
              },
              "metrics": {
                "readiness": 81.6,
                "depthRange": 0.6839,
                "normalConsistency": 86.3,
                "surfaceConsistency": 87.9,
                "scaleDrift": 25.3,
                "thinStructureRisk": 21.5
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-depth-normal-consistency-bench",
                "execution": "torch-cuda-depth-normal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "depth-normal-consistency",
              "caseId": "wide-room-scale",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:22:34Z",
              "model": {
                "depth": "torch-cuda-depth-normal-probe",
                "surface": "finite-difference-normal-consistency"
              },
              "inputs": {
                "depthControls": {
                  "textureSparsity": 44,
                  "thinStructure": 22,
                  "scaleAmbiguity": 68
                },
                "asset": "synthetic://depth/wide-room-scale.png"
              },
              "outputs": {
                "depthMap": "synthetic://depth/depth-map.pt",
                "normalEnergy": 0.020688,
                "curvature": 0.00388
              },
              "metrics": {
                "readiness": 82.5,
                "depthRange": 0.677,
                "normalConsistency": 87.2,
                "surfaceConsistency": 90.2,
                "scaleDrift": 32.0,
                "thinStructureRisk": 14.4
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-depth-normal-consistency-bench",
                "execution": "torch-cuda-depth-normal-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "corruption-robustness",
              "caseId": "motion-blur",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:26:30Z",
              "model": {
                "classifier": "ResNet18_Weights.IMAGENET1K_V1",
                "probe": "clean-corrupted-logit-delta"
              },
              "inputs": {
                "corruptionControls": {
                  "corruption": "blur",
                  "severity": 46
                },
                "asset": "synthetic://robustness/motion-blur.png"
              },
              "outputs": {
                "cleanConfidence": 35.2,
                "corruptedConfidence": 66.3,
                "jsDivergence": 0.712014,
                "featureCosine": 0.940137
              },
              "metrics": {
                "readiness": 80.8,
                "robustness": 86.3,
                "confidenceCollapse": 15.0,
                "featureRetention": 94.0,
                "labelStability": 74.6,
                "severity": 46,
                "topClassChanged": 1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-corruption-robustness-bench",
                "execution": "torchvision-resnet-corruption-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "corruption-robustness",
              "caseId": "sensor-noise",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:26:30Z",
              "model": {
                "classifier": "ResNet18_Weights.IMAGENET1K_V1",
                "probe": "clean-corrupted-logit-delta"
              },
              "inputs": {
                "corruptionControls": {
                  "corruption": "noise",
                  "severity": 52
                },
                "asset": "synthetic://robustness/sensor-noise.png"
              },
              "outputs": {
                "cleanConfidence": 38.2,
                "corruptedConfidence": 43.1,
                "jsDivergence": 0.06174,
                "featureCosine": 0.963718
              },
              "metrics": {
                "readiness": 84.4,
                "robustness": 91.9,
                "confidenceCollapse": 10.0,
                "featureRetention": 96.4,
                "labelStability": 99.0,
                "severity": 52,
                "topClassChanged": 0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-corruption-robustness-bench",
                "execution": "torchvision-resnet-corruption-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "corruption-robustness",
              "caseId": "patch-attack",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:26:30Z",
              "model": {
                "classifier": "ResNet18_Weights.IMAGENET1K_V1",
                "probe": "clean-corrupted-logit-delta"
              },
              "inputs": {
                "corruptionControls": {
                  "corruption": "patch",
                  "severity": 66
                },
                "asset": "synthetic://robustness/patch-attack.png"
              },
              "outputs": {
                "cleanConfidence": 33.5,
                "corruptedConfidence": 36.9,
                "jsDivergence": 0.031526,
                "featureCosine": 0.973741
              },
              "metrics": {
                "readiness": 81.1,
                "robustness": 90.8,
                "confidenceCollapse": 11.8,
                "featureRetention": 97.4,
                "labelStability": 99.5,
                "severity": 66,
                "topClassChanged": 0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-corruption-robustness-bench",
                "execution": "torchvision-resnet-corruption-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "corruption-robustness",
              "caseId": "compression-shift",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:26:30Z",
              "model": {
                "classifier": "ResNet18_Weights.IMAGENET1K_V1",
                "probe": "clean-corrupted-logit-delta"
              },
              "inputs": {
                "corruptionControls": {
                  "corruption": "compression",
                  "severity": 58
                },
                "asset": "synthetic://robustness/compression-shift.png"
              },
              "outputs": {
                "cleanConfidence": 38.5,
                "corruptedConfidence": 39.9,
                "jsDivergence": 0.009099,
                "featureCosine": 0.9972
              },
              "metrics": {
                "readiness": 84.1,
                "robustness": 92.9,
                "confidenceCollapse": 9.4,
                "featureRetention": 99.7,
                "labelStability": 99.9,
                "severity": 58,
                "topClassChanged": 0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-corruption-robustness-bench",
                "execution": "torchvision-resnet-corruption-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "caseId": "single-object",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:23:49Z",
              "model": {
                "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
                "promptProbe": "mask-rcnn-click-robustness-proxy"
              },
              "inputs": {
                "promptControls": {
                  "objectClutter": 18,
                  "promptNoise": 8,
                  "occlusion": 10
                },
                "asset": "synthetic://segmentation/single-object.png"
              },
              "outputs": {
                "meanMaskConfidence": 60.7,
                "maskArea": 0.88176,
                "maskOverlap": 0.38536
              },
              "metrics": {
                "readiness": 65.4,
                "maskStability": 57.2,
                "promptSensitivity": 32.4,
                "unsupportedRegionRisk": 20.2,
                "detections": 2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
                "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "caseId": "cluttered-scene",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:23:49Z",
              "model": {
                "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
                "promptProbe": "mask-rcnn-click-robustness-proxy"
              },
              "inputs": {
                "promptControls": {
                  "objectClutter": 64,
                  "promptNoise": 18,
                  "occlusion": 24
                },
                "asset": "synthetic://segmentation/cluttered-scene.png"
              },
              "outputs": {
                "meanMaskConfidence": 66.3,
                "maskArea": 0.9091,
                "maskOverlap": 0.40537
              },
              "metrics": {
                "readiness": 62.3,
                "maskStability": 59.4,
                "promptSensitivity": 48.0,
                "unsupportedRegionRisk": 22.8,
                "detections": 2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
                "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "caseId": "ambiguous-clicks",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:23:49Z",
              "model": {
                "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
                "promptProbe": "mask-rcnn-click-robustness-proxy"
              },
              "inputs": {
                "promptControls": {
                  "objectClutter": 46,
                  "promptNoise": 62,
                  "occlusion": 18
                },
                "asset": "synthetic://segmentation/ambiguous-clicks.png"
              },
              "outputs": {
                "meanMaskConfidence": 66.7,
                "maskArea": 0.90569,
                "maskOverlap": 0.38714
              },
              "metrics": {
                "readiness": 58.3,
                "maskStability": 60.7,
                "promptSensitivity": 61.3,
                "unsupportedRegionRisk": 28.2,
                "detections": 2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
                "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "caseId": "occluded-object",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:23:49Z",
              "model": {
                "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
                "promptProbe": "mask-rcnn-click-robustness-proxy"
              },
              "inputs": {
                "promptControls": {
                  "objectClutter": 38,
                  "promptNoise": 26,
                  "occlusion": 70
                },
                "asset": "synthetic://segmentation/occluded-object.png"
              },
              "outputs": {
                "meanMaskConfidence": 66.3,
                "maskArea": 0.91259,
                "maskOverlap": 0.40266
              },
              "metrics": {
                "readiness": 57.8,
                "maskStability": 53.9,
                "promptSensitivity": 45.5,
                "unsupportedRegionRisk": 35.1,
                "detections": 2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
                "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "video-identity-tracking",
              "caseId": "clean-crossing",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:24:31Z",
              "model": {
                "tracker": "torch-cuda-centroid-assignment-tracker",
                "temporalProbe": "mask-sequence-identity-drift"
              },
              "inputs": {
                "trackingControls": {
                  "occlusion": 12,
                  "crowding": 22,
                  "velocity": 36
                },
                "asset": "synthetic://tracking/clean-crossing.mp4"
              },
              "outputs": {
                "frames": 8,
                "objects": 3,
                "temporalDelta": 0.01013,
                "trackTensor": "synthetic://tracking/clean-crossing-tracks.pt"
              },
              "metrics": {
                "readiness": 88.8,
                "identityStability": 88.9,
                "occlusionRecovery": 85.0,
                "trackContinuity": 91.5,
                "identityDrift": 1.5
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-video-identity-tracking-bench",
                "execution": "torch-cuda-video-tracking-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "video-identity-tracking",
              "caseId": "identity-crossing",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:24:31Z",
              "model": {
                "tracker": "torch-cuda-centroid-assignment-tracker",
                "temporalProbe": "mask-sequence-identity-drift"
              },
              "inputs": {
                "trackingControls": {
                  "occlusion": 26,
                  "crowding": 68,
                  "velocity": 42
                },
                "asset": "synthetic://tracking/identity-crossing.mp4"
              },
              "outputs": {
                "frames": 8,
                "objects": 3,
                "temporalDelta": 0.01697,
                "trackTensor": "synthetic://tracking/identity-crossing-tracks.pt"
              },
              "metrics": {
                "readiness": 82.6,
                "identityStability": 81.4,
                "occlusionRecovery": 79.2,
                "trackContinuity": 90.0,
                "identityDrift": 2.7
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-video-identity-tracking-bench",
                "execution": "torch-cuda-video-tracking-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "video-identity-tracking",
              "caseId": "long-occlusion",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:24:31Z",
              "model": {
                "tracker": "torch-cuda-centroid-assignment-tracker",
                "temporalProbe": "mask-sequence-identity-drift"
              },
              "inputs": {
                "trackingControls": {
                  "occlusion": 74,
                  "crowding": 36,
                  "velocity": 34
                },
                "asset": "synthetic://tracking/long-occlusion.mp4"
              },
              "outputs": {
                "frames": 8,
                "objects": 3,
                "temporalDelta": 0.014317,
                "trackTensor": "synthetic://tracking/long-occlusion-tracks.pt"
              },
              "metrics": {
                "readiness": 79.6,
                "identityStability": 79.2,
                "occlusionRecovery": 75.4,
                "trackContinuity": 91.1,
                "identityDrift": 2.3
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-video-identity-tracking-bench",
                "execution": "torch-cuda-video-tracking-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "video-identity-tracking",
              "caseId": "fast-motion",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:24:31Z",
              "model": {
                "tracker": "torch-cuda-centroid-assignment-tracker",
                "temporalProbe": "mask-sequence-identity-drift"
              },
              "inputs": {
                "trackingControls": {
                  "occlusion": 22,
                  "crowding": 42,
                  "velocity": 78
                },
                "asset": "synthetic://tracking/fast-motion.mp4"
              },
              "outputs": {
                "frames": 8,
                "objects": 3,
                "temporalDelta": 0.019914,
                "trackTensor": "synthetic://tracking/fast-motion-tracks.pt"
              },
              "metrics": {
                "readiness": 83.1,
                "identityStability": 84.0,
                "occlusionRecovery": 77.9,
                "trackContinuity": 86.7,
                "identityDrift": 3.2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-video-identity-tracking-bench",
                "execution": "torch-cuda-video-tracking-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "wide-baseline",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:31:36Z",
              "model": {
                "solver": "torch-cuda-differentiable-camera-solver",
                "geometry": "bundle-adjustment-scale-probe"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 82,
                  "textureSparsity": 18,
                  "scaleAmbiguity": 24,
                  "surfaceComplexity": 42
                },
                "asset": "synthetic://geometry/wide-baseline.json"
              },
              "outputs": {
                "cameraRecovery": {
                  "points": 204,
                  "meanReprojectionError": 0.00851,
                  "p95ReprojectionError": 0.01639,
                  "elapsedMs": 1331.44
                },
                "scaleRecovery": {
                  "trueScale": 1.13333,
                  "recoveredScale": 1.11517,
                  "relativeError": 0.01602
                },
                "optimizationTrace": {
                  "initialLoss": 0.00534,
                  "finalLoss": 0.001153,
                  "iterations": 220,
                  "calibratedScale": 1.19754
                }
              },
              "metrics": {
                "poseEvidence": 92.8,
                "metricEvidence": 100.0,
                "surfaceConsistency": 87.8,
                "scaleDrift": 0.6,
                "topologyRisk": 11.6,
                "readiness": 92.9
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench",
                "execution": "torch-cuda-metric-geometry-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "scale-transfer",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:31:37Z",
              "model": {
                "solver": "torch-cuda-differentiable-camera-solver",
                "geometry": "bundle-adjustment-scale-probe"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 66,
                  "textureSparsity": 28,
                  "scaleAmbiguity": 44,
                  "surfaceComplexity": 46
                },
                "asset": "synthetic://geometry/scale-transfer.json"
              },
              "outputs": {
                "cameraRecovery": {
                  "points": 196,
                  "meanReprojectionError": 0.00963,
                  "p95ReprojectionError": 0.0193,
                  "elapsedMs": 742.4
                },
                "scaleRecovery": {
                  "trueScale": 1.24444,
                  "recoveredScale": 1.21153,
                  "relativeError": 0.00475
                },
                "optimizationTrace": {
                  "initialLoss": 0.004471,
                  "finalLoss": 0.001505,
                  "iterations": 220,
                  "calibratedScale": 1.25036
                }
              },
              "metrics": {
                "poseEvidence": 91.7,
                "metricEvidence": 99.4,
                "surfaceConsistency": 87.2,
                "scaleDrift": 3.8,
                "topologyRisk": 12.5,
                "readiness": 92.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench",
                "execution": "torch-cuda-metric-geometry-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "thin-structure",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:31:38Z",
              "model": {
                "solver": "torch-cuda-differentiable-camera-solver",
                "geometry": "bundle-adjustment-scale-probe"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 58,
                  "textureSparsity": 34,
                  "scaleAmbiguity": 32,
                  "surfaceComplexity": 72
                },
                "asset": "synthetic://geometry/thin-structure.json"
              },
              "outputs": {
                "cameraRecovery": {
                  "points": 191,
                  "meanReprojectionError": 0.01438,
                  "p95ReprojectionError": 0.02784,
                  "elapsedMs": 759.71
                },
                "scaleRecovery": {
                  "trueScale": 1.17778,
                  "recoveredScale": 1.15349,
                  "relativeError": 0.01432
                },
                "optimizationTrace": {
                  "initialLoss": 0.005345,
                  "finalLoss": 0.00322,
                  "iterations": 220,
                  "calibratedScale": 1.19465
                }
              },
              "metrics": {
                "poseEvidence": 90.2,
                "metricEvidence": 97.3,
                "surfaceConsistency": 83.5,
                "scaleDrift": 3.4,
                "topologyRisk": 18.3,
                "readiness": 89.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench",
                "execution": "torch-cuda-metric-geometry-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "low-texture-indoor",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:31:38Z",
              "model": {
                "solver": "torch-cuda-differentiable-camera-solver",
                "geometry": "bundle-adjustment-scale-probe"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 54,
                  "textureSparsity": 58,
                  "scaleAmbiguity": 48,
                  "surfaceComplexity": 50
                },
                "asset": "synthetic://geometry/low-texture-indoor.json"
              },
              "outputs": {
                "cameraRecovery": {
                  "points": 158,
                  "meanReprojectionError": 0.01534,
                  "p95ReprojectionError": 0.02952,
                  "elapsedMs": 768.1
                },
                "scaleRecovery": {
                  "trueScale": 1.26667,
                  "recoveredScale": 1.23104,
                  "relativeError": 0.01505
                },
                "optimizationTrace": {
                  "initialLoss": 0.005659,
                  "finalLoss": 0.003549,
                  "iterations": 220,
                  "calibratedScale": 1.2476
                }
              },
              "metrics": {
                "poseEvidence": 88.1,
                "metricEvidence": 95.3,
                "surfaceConsistency": 86.0,
                "scaleDrift": 6.3,
                "topologyRisk": 13.9,
                "readiness": 89.4
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench",
                "execution": "torch-cuda-metric-geometry-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "dense-novel-view",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:29:24Z",
              "model": {
                "renderer": "torch-cuda-gaussian-splat-compositor",
                "semanticProbe": "splat-label-edit-probe"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 86,
                  "splatDensity": 78,
                  "semanticEntropy": 24,
                  "provenanceVisibility": 70
                },
                "asset": "synthetic://splat/dense-novel-view.ply"
              },
              "outputs": {
                "renderProfile": {
                  "splats": 337,
                  "views": 5,
                  "elapsedMs": 71.17,
                  "adjacentFrameDelta": 0.13833
                },
                "semanticProbe": {
                  "meanConfidence": 0.5302,
                  "margin": 0.45706,
                  "editLeakageRatio": 0.05605,
                  "editLocality": 0.94395
                },
                "provenanceProbe": {
                  "visibility": 70,
                  "trace": 67.7
                }
              },
              "metrics": {
                "renderFidelity": 85.5,
                "semanticAttachment": 60.9,
                "provenanceTrace": 67.7,
                "viewInstability": 14.1,
                "editLeakageRisk": 10.2,
                "readiness": 74.9
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench",
                "execution": "torch-cuda-gaussian-splatting-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "semantic-edit",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:29:24Z",
              "model": {
                "renderer": "torch-cuda-gaussian-splat-compositor",
                "semanticProbe": "splat-label-edit-probe"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 74,
                  "splatDensity": 72,
                  "semanticEntropy": 34,
                  "provenanceVisibility": 76
                },
                "asset": "synthetic://splat/semantic-edit.ply"
              },
              "outputs": {
                "renderProfile": {
                  "splats": 319,
                  "views": 5,
                  "elapsedMs": 23.13,
                  "adjacentFrameDelta": 0.13381
                },
                "semanticProbe": {
                  "meanConfidence": 0.55323,
                  "margin": 0.45882,
                  "editLeakageRatio": 0.07111,
                  "editLocality": 0.92889
                },
                "provenanceProbe": {
                  "visibility": 76,
                  "trace": 72.3
                }
              },
              "metrics": {
                "renderFidelity": 83.7,
                "semanticAttachment": 60.7,
                "provenanceTrace": 72.3,
                "viewInstability": 15.2,
                "editLeakageRisk": 12.1,
                "readiness": 75.2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench",
                "execution": "torch-cuda-gaussian-splatting-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "provenance-transfer",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:29:24Z",
              "model": {
                "renderer": "torch-cuda-gaussian-splat-compositor",
                "semanticProbe": "splat-label-edit-probe"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 68,
                  "splatDensity": 70,
                  "semanticEntropy": 42,
                  "provenanceVisibility": 84
                },
                "asset": "synthetic://splat/provenance-transfer.ply"
              },
              "outputs": {
                "renderProfile": {
                  "splats": 313,
                  "views": 5,
                  "elapsedMs": 22.65,
                  "adjacentFrameDelta": 0.13393
                },
                "semanticProbe": {
                  "meanConfidence": 0.51926,
                  "margin": 0.42126,
                  "editLeakageRatio": 0.08418,
                  "editLocality": 0.91582
                },
                "provenanceProbe": {
                  "visibility": 84,
                  "trace": 77.6
                }
              },
              "metrics": {
                "renderFidelity": 82.7,
                "semanticAttachment": 57.0,
                "provenanceTrace": 77.6,
                "viewInstability": 15.9,
                "editLeakageRisk": 13.5,
                "readiness": 75.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench",
                "execution": "torch-cuda-gaussian-splatting-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "sparse-capture",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:29:24Z",
              "model": {
                "renderer": "torch-cuda-gaussian-splat-compositor",
                "semanticProbe": "splat-label-edit-probe"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 62,
                  "splatDensity": 66,
                  "semanticEntropy": 46,
                  "provenanceVisibility": 72
                },
                "asset": "synthetic://splat/sparse-capture.ply"
              },
              "outputs": {
                "renderProfile": {
                  "splats": 300,
                  "views": 5,
                  "elapsedMs": 21.97,
                  "adjacentFrameDelta": 0.13495
                },
                "semanticProbe": {
                  "meanConfidence": 0.57297,
                  "margin": 0.47408,
                  "editLeakageRatio": 0.07785,
                  "editLocality": 0.92215
                },
                "provenanceProbe": {
                  "visibility": 72,
                  "trace": 69.6
                }
              },
              "metrics": {
                "renderFidelity": 81.4,
                "semanticAttachment": 60.5,
                "provenanceTrace": 69.6,
                "viewInstability": 16.7,
                "editLeakageRisk": 14.5,
                "readiness": 73.6
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "Tesla T4",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench",
                "execution": "torch-cuda-gaussian-splatting-live-demo",
                "promotedFrom": "live-colab",
                "canonicalMode": "cached-real"
              }
            },
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
            },
            {
              "jobId": "driving-safety",
              "caseId": "urban-cut-in",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:48Z",
              "model": {
                "grounder": "torch-driving-scene-risk-probe",
                "riskHead": "ttc-risk-head",
                "ruleMonitor": "safety-rule-monitor"
              },
              "inputs": {
                "safetyControls": {
                  "hazardDensity": 48,
                  "actorSpeed": 40,
                  "occlusion": 10,
                  "actionConfidence": 82
                },
                "asset": "synthetic://driving/urban-cut-in.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "synthetic://driving/urban-cut-in-grounding.png",
                "timeToCollision": 5.15,
                "riskTrace": "synthetic://driving/urban-cut-in-risk.json",
                "ruleViolations": 32.9
              },
              "metrics": {
                "readiness": 57.4,
                "sceneGrounding": 58.1,
                "timeToCollision": 5.15,
                "risk": 33.6,
                "ruleViolation": 32.9,
                "abstention": 15.5
              },
              "provenance": {
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
              "jobId": "driving-safety",
              "caseId": "night-crosswalk",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:48Z",
              "model": {
                "grounder": "torch-driving-scene-risk-probe",
                "riskHead": "ttc-risk-head",
                "ruleMonitor": "safety-rule-monitor"
              },
              "inputs": {
                "safetyControls": {
                  "hazardDensity": 36,
                  "actorSpeed": 34,
                  "occlusion": 18,
                  "actionConfidence": 78
                },
                "asset": "synthetic://driving/night-crosswalk.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "synthetic://driving/night-crosswalk-grounding.png",
                "timeToCollision": 5.73,
                "riskTrace": "synthetic://driving/night-crosswalk-risk.json",
                "ruleViolations": 32.8
              },
              "metrics": {
                "readiness": 57.1,
                "sceneGrounding": 55.4,
                "timeToCollision": 5.73,
                "risk": 31.9,
                "ruleViolation": 32.8,
                "abstention": 16.0
              },
              "provenance": {
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
              "jobId": "driving-safety",
              "caseId": "highway-merge",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:48Z",
              "model": {
                "grounder": "torch-driving-scene-risk-probe",
                "riskHead": "ttc-risk-head",
                "ruleMonitor": "safety-rule-monitor"
              },
              "inputs": {
                "safetyControls": {
                  "hazardDensity": 24,
                  "actorSpeed": 72,
                  "occlusion": 16,
                  "actionConfidence": 84
                },
                "asset": "synthetic://driving/highway-merge.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "synthetic://driving/highway-merge-grounding.png",
                "timeToCollision": 4.34,
                "riskTrace": "synthetic://driving/highway-merge-risk.json",
                "ruleViolations": 33.9
              },
              "metrics": {
                "readiness": 56.5,
                "sceneGrounding": 57.0,
                "timeToCollision": 4.34,
                "risk": 34.8,
                "ruleViolation": 33.9,
                "abstention": 16.0
              },
              "provenance": {
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
              "jobId": "driving-safety",
              "caseId": "construction-zone",
              "mode": "cached-real",
              "createdAt": "2026-08-17T03:14:48Z",
              "model": {
                "grounder": "torch-driving-scene-risk-probe",
                "riskHead": "ttc-risk-head",
                "ruleMonitor": "safety-rule-monitor"
              },
              "inputs": {
                "safetyControls": {
                  "hazardDensity": 36,
                  "actorSpeed": 32,
                  "occlusion": 14,
                  "actionConfidence": 72
                },
                "asset": "synthetic://driving/construction-zone.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "synthetic://driving/construction-zone-grounding.png",
                "timeToCollision": 5.82,
                "riskTrace": "synthetic://driving/construction-zone-risk.json",
                "ruleViolations": 33.0
              },
              "metrics": {
                "readiness": 57.1,
                "sceneGrounding": 55.1,
                "timeToCollision": 5.82,
                "risk": 32.1,
                "ruleViolation": 33.0,
                "abstention": 17.3
              },
              "provenance": {
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
        "importReport": {
          "summary": {
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
          "jobs": [
            {
              "jobId": "open-vocab-grounding",
              "bench": "cvpr-long-tail-grounding-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "restoration-fidelity",
              "bench": "cvpr-restoration-fidelity-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "adversarial-provenance",
              "bench": "cvpr-adversarial-provenance-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "temporal-rollout",
              "bench": "cvpr-temporal-rollout-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "clinical-shift",
              "bench": "cvpr-clinical-shift-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "compute-serving",
              "bench": "cvpr-compute-serving-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "constraint-generation",
              "bench": "cvpr-constraint-generation-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "driving-safety",
              "bench": "cvpr-driving-safety-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "depth-normal-consistency",
              "bench": "cvpr-depth-normal-consistency-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "corruption-robustness",
              "bench": "cvpr-corruption-robustness-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "prompt-segmentation-robustness",
              "bench": "cvpr-prompt-segmentation-robustness-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "video-identity-tracking",
              "bench": "cvpr-video-identity-tracking-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "metric-geometry",
              "bench": "cvpr-metric-geometry-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
              "ready": true
            },
            {
              "jobId": "gaussian-splatting",
              "bench": "cvpr-gaussian-splatting-bench",
              "expectedCases": 4,
              "actualCases": 4,
              "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
              "ready": true
            }
          ],
          "issues": []
        },
        "notebookCells": 22,
        "exportContract": true,
        "zipEntries": [
          "README.md",
          "analysis/cvpr_colab_gpu_worker/import_validation.json",
          "analysis/cvpr_colab_gpu_worker/registry.json",
          "notebooks/cvpr_gpu_worker.ipynb",
          "scripts/stage_cvpr_live_colab_export.py",
          "scripts/validate_cvpr_colab_results.py",
          "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
          "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
        ]
      },
      "artifacts": [
        {
          "label": "canonical-cached-results",
          "path": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "exists": true,
          "sizeBytes": 76029,
          "sha256": "5a5afb62541ae0743302449c10d82ac82c77c9c12b69be389bc67b3f73a49fb8",
          "rows": 56,
          "modes": [
            "cached-real"
          ],
          "jobs": 14
        },
        {
          "label": "run-manifest",
          "path": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json",
          "exists": true,
          "sizeBytes": 8661,
          "sha256": "539d6abc8e684e0ff2bb9c9e4ff40eac8347c6e885e63081739f111061a7ba11",
          "keys": [
            "controlPlane",
            "jobs",
            "liveExportArtifact",
            "notebook",
            "resultArtifact",
            "runtimePlane"
          ]
        },
        {
          "label": "verifier-live-export",
          "path": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
          "exists": true,
          "sizeBytes": 71829,
          "sha256": "d91f0dbc6bbf539767014687453aedb997aa1b7de4da78ef28fda23a04c3dc4a",
          "rows": 56,
          "modes": [
            "live-colab"
          ],
          "jobs": 14
        },
        {
          "label": "promotion-live-export",
          "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
          "exists": true,
          "sizeBytes": 78829,
          "sha256": "7c1bce45c1e3d38891f2523511d5b9bb0adc4242ad2b0f7d4c7d2032c6113e15",
          "rows": 56,
          "modes": [
            "live-colab"
          ],
          "jobs": 14
        },
        {
          "label": "promotion-canonical-results",
          "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
          "exists": true,
          "sizeBytes": 78885,
          "sha256": "8d1bd84fc8c82a1def5ced2af64fd27dbe94548b58fae27092bb5d2bb01143cc",
          "rows": 56,
          "modes": [
            "cached-real"
          ],
          "jobs": 14
        },
        {
          "label": "promotion-delta-registry",
          "path": "analysis/cvpr_colab_promotion_delta/registry.json",
          "exists": true,
          "sizeBytes": 25986,
          "sha256": "4747f9693c3b5dac24625ae8f8041ceebd71dc1276a754f58566744bd80eee55",
          "keys": [
            "missing",
            "modeMismatches",
            "regressions",
            "rows",
            "summary"
          ]
        },
        {
          "label": "handoff-zip",
          "path": "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip",
          "exists": true,
          "sizeBytes": 40779,
          "sha256": "c1a2391330ebabbf8d6d626d84ea924eb83f91308a2d0b06b78f577b38f0ef93"
        }
      ]
    },
    "receipt": {
      "summary": {
        "receipt": "cvpr-colab-run-receipt",
        "status": "ready",
        "stages": 8,
        "commands": 5,
        "jobs": 14,
        "runners": 14,
        "cachedResults": 56,
        "liveIntakeResults": 56,
        "promotionResults": 56,
        "importIssues": 0,
        "deltaStatus": "release",
        "deltaRegressions": 0,
        "maxReadinessDrop": 0.0,
        "ledgerStatus": "release",
        "ledgerArtifacts": 7,
        "releaseStatus": "release",
        "validationGate": "release",
        "packageTests": 148,
        "evidenceArtifacts": 7,
        "missingEvidence": 0,
        "notebook": "notebooks/cvpr_gpu_worker.ipynb",
        "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
        "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
        "intakeGate": "scripts/stage_cvpr_live_colab_export.py",
        "fullStackValidator": "scripts/validate_cvpr_full_stack.py"
      },
      "sources": {
        "handoff": "analysis/cvpr_colab_handoff_package/registry.json",
        "worker": "analysis/cvpr_colab_gpu_worker/registry.json",
        "intake": "analysis/cvpr_colab_live_intake/registry.json",
        "promotion": "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json",
        "delta": "analysis/cvpr_colab_promotion_delta/registry.json",
        "ledger": "analysis/cvpr_colab_evidence_ledger/registry.json",
        "release": "analysis/cvpr_colab_release_bundle/registry.json",
        "validation": "analysis/cvpr_validation_center/registry.json"
      },
      "stages": [
        {
          "label": "Handoff",
          "surface": "cvpr-colab-handoff-package.html",
          "status": "ready"
        },
        {
          "label": "Worker",
          "surface": "cvpr-colab-gpu-worker.html",
          "status": "ready"
        },
        {
          "label": "Live Intake",
          "surface": "cvpr-colab-live-intake.html",
          "status": "valid"
        },
        {
          "label": "Promotion",
          "surface": "analysis/cvpr_colab_live_intake/promotion_drill/promotion_registry.json",
          "status": "valid"
        },
        {
          "label": "Promotion Delta",
          "surface": "cvpr-colab-promotion-delta.html",
          "status": "release"
        },
        {
          "label": "Evidence",
          "surface": "cvpr-colab-evidence-ledger.html",
          "status": "release"
        },
        {
          "label": "Release",
          "surface": "cvpr-colab-release-bundle.html",
          "status": "release"
        },
        {
          "label": "Validation",
          "surface": "cvpr-validation-center.html",
          "status": "release"
        }
      ],
      "commands": [
        "Open notebooks/cvpr_gpu_worker.ipynb in Google Colab Pro+",
        "Download cvpr_gpu_results.json to source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
        "python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
        "python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --promote",
        "python3 scripts/validate_cvpr_full_stack.py"
      ],
      "evidence": [
        {
          "label": "handoff-zip",
          "path": "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip",
          "exists": true,
          "sizeBytes": 40779,
          "sha256": "c1a2391330ebabbf8d6d626d84ea924eb83f91308a2d0b06b78f577b38f0ef93"
        },
        {
          "label": "canonical-results",
          "path": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "exists": true,
          "sizeBytes": 76029,
          "sha256": "5a5afb62541ae0743302449c10d82ac82c77c9c12b69be389bc67b3f73a49fb8"
        },
        {
          "label": "live-intake-export",
          "path": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
          "exists": true,
          "sizeBytes": 78773,
          "sha256": "0bac6d820eda7a49d46983a0bc4626df5a2e6d684d07b8a9bdf46c3e797fea06"
        },
        {
          "label": "promoted-results",
          "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
          "exists": true,
          "sizeBytes": 78885,
          "sha256": "8d1bd84fc8c82a1def5ced2af64fd27dbe94548b58fae27092bb5d2bb01143cc"
        },
        {
          "label": "promotion-delta-registry",
          "path": "analysis/cvpr_colab_promotion_delta/registry.json",
          "exists": true,
          "sizeBytes": 25986,
          "sha256": "4747f9693c3b5dac24625ae8f8041ceebd71dc1276a754f58566744bd80eee55"
        },
        {
          "label": "release-registry",
          "path": "analysis/cvpr_colab_release_bundle/registry.json",
          "exists": true,
          "sizeBytes": 19458,
          "sha256": "0bb166c3f51082374b984b01447b8bca4b6372c3c775a03c257e88c91d602f4e"
        },
        {
          "label": "validation-registry",
          "path": "analysis/cvpr_validation_center/registry.json",
          "exists": true,
          "sizeBytes": 10786,
          "sha256": "7acc1c1fd655b30f2b6fab11aa9335f80a32f7177bc81cb6880cf2c767ea5d42"
        }
      ]
    },
    "themeMatrix": {
      "summary": {
        "matrix": "cvpr-theme-release-matrix",
        "status": "release",
        "themes": 8,
        "systems": 11,
        "stages": 33,
        "demos": 41,
        "coveredThemes": 8,
        "openThemes": 0,
        "clustersCovered": 11,
        "benchSystems": 11,
        "benchCases": 44,
        "benchBlocks": 0,
        "receiptStatus": "ready",
        "receiptArtifacts": 7,
        "validationGate": "release",
        "packageTests": 148
      },
      "themeRows": [
        {
          "theme": "The frontier - new senses and new duties",
          "systems": 2,
          "systemSlugs": [
            "adversarial-provenance-gate",
            "medical-vision-validation"
          ],
          "stages": 6,
          "stageDemos": 6,
          "flagshipDemos": 0,
          "benches": 2,
          "benchCases": 8,
          "benchBlocks": 0,
          "pages": [
            "adversarial-provenance-gate.html",
            "medical-vision-validation.html"
          ],
          "status": "covered"
        },
        {
          "theme": "Recovering the 3D world from flat pictures",
          "systems": 2,
          "systemSlugs": [
            "gaussian-splatting-platform",
            "metric-3d-reconstruction"
          ],
          "stages": 6,
          "stageDemos": 6,
          "flagshipDemos": 0,
          "benches": 2,
          "benchCases": 8,
          "benchBlocks": 0,
          "pages": [
            "gaussian-splatting-platform.html",
            "metric-3d-reconstruction.html"
          ],
          "status": "covered"
        },
        {
          "theme": "Seeing and making things that move",
          "systems": 1,
          "systemSlugs": [
            "video-world-model"
          ],
          "stages": 3,
          "stageDemos": 3,
          "flagshipDemos": 0,
          "benches": 1,
          "benchCases": 4,
          "benchBlocks": 0,
          "pages": [
            "video-world-model.html"
          ],
          "status": "covered"
        },
        {
          "theme": "Making pixels from meaning",
          "systems": 2,
          "systemSlugs": [
            "controllable-generation-studio",
            "restoration-reliability-stack"
          ],
          "stages": 6,
          "stageDemos": 6,
          "flagshipDemos": 0,
          "benches": 2,
          "benchCases": 8,
          "benchBlocks": 0,
          "pages": [
            "controllable-generation-studio.html",
            "restoration-reliability-stack.html"
          ],
          "status": "covered"
        },
        {
          "theme": "Teaching machines to see and talk at once",
          "systems": 1,
          "systemSlugs": [
            "vlm-grounded-reasoning"
          ],
          "stages": 3,
          "stageDemos": 3,
          "flagshipDemos": 0,
          "benches": 1,
          "benchCases": 4,
          "benchBlocks": 0,
          "pages": [
            "vlm-grounded-reasoning.html"
          ],
          "status": "covered"
        },
        {
          "theme": "Naming and locating what's in the picture",
          "systems": 1,
          "systemSlugs": [
            "open-vocab-visual-search"
          ],
          "stages": 3,
          "stageDemos": 3,
          "flagshipDemos": 0,
          "benches": 1,
          "benchCases": 4,
          "benchBlocks": 0,
          "pages": [
            "open-vocab-visual-search.html"
          ],
          "status": "covered"
        },
        {
          "theme": "Using vision to act in the world",
          "systems": 1,
          "systemSlugs": [
            "driving-vla-release-gate"
          ],
          "stages": 3,
          "stageDemos": 3,
          "flagshipDemos": 0,
          "benches": 1,
          "benchCases": 4,
          "benchBlocks": 0,
          "pages": [
            "driving-vla-release-gate.html"
          ],
          "status": "covered"
        },
        {
          "theme": "Learning more from less, and not breaking",
          "systems": 1,
          "systemSlugs": [
            "efficient-vision-serving"
          ],
          "stages": 3,
          "stageDemos": 3,
          "flagshipDemos": 0,
          "benches": 1,
          "benchCases": 4,
          "benchBlocks": 0,
          "pages": [
            "efficient-vision-serving.html"
          ],
          "status": "covered"
        }
      ],
      "sourceRegistries": {
        "systems": "analysis/cvpr_systems/registry.json",
        "demos": "analysis/cvpr_demos/registry.json",
        "mission": "analysis/cvpr_mission_control/registry.json",
        "receipt": "analysis/cvpr_colab_run_receipt/registry.json",
        "validation": "analysis/cvpr_validation_center/registry.json"
      }
    },
    "remediation": {
      "summary": {
        "board": "cvpr-remediation-board",
        "status": "ready",
        "sourceBlockTasks": 0,
        "blockTasks": 0,
        "criticalTasks": 0,
        "highTasks": 0,
        "focusedTasks": 0,
        "unownedTasks": 0,
        "controlledTasks": 0,
        "families": 0,
        "systems": 0,
        "playbookPlays": 8,
        "coveredThemes": 8,
        "receiptStatus": "ready",
        "receiptArtifacts": 7,
        "maxSeverity": 0
      },
      "tasks": [],
      "sourceRegistries": {
        "failureAtlas": "analysis/cvpr_failure_atlas/registry.json",
        "playbook": "analysis/cvpr_demo_playbook/registry.json",
        "mission": "analysis/cvpr_mission_control/registry.json",
        "themeMatrix": "analysis/cvpr_theme_release_matrix/registry.json",
        "receipt": "analysis/cvpr_colab_run_receipt/registry.json"
      }
    },
    "sprintPlan": {
      "summary": {
        "plan": "cvpr-remediation-sprint-plan",
        "status": "ready",
        "sourceBlockTasks": 0,
        "boardCriticalTasks": 0,
        "boardHighTasks": 0,
        "boardFocusedTasks": 0,
        "sprints": 3,
        "tasks": 0,
        "assignedTasks": 0,
        "criticalTasks": 0,
        "highTasks": 0,
        "focusedTasks": 0,
        "acceptanceChecks": 0,
        "families": 0,
        "systems": 0,
        "operationsStatus": "ready",
        "packageTests": 148
      },
      "sprints": [
        {
          "slug": "critical-containment",
          "index": 1,
          "title": "Critical containment",
          "goal": "Fix the highest-severity block cases first so unsafe demos cannot appear release-ready.",
          "tasks": [],
          "exitCriteria": [
            "all task acceptance checks are satisfied",
            "affected bench verifier passes",
            "cvpr-remediation-board and cvpr-colab-operations-dashboard rebuild cleanly",
            "python3 scripts/validate_cvpr_full_stack.py returns valid"
          ]
        },
        {
          "slug": "evidence-repair",
          "index": 2,
          "title": "High-risk evidence repair",
          "goal": "Repair remaining high-priority evidence, drift, risk, and fidelity gaps across bench families.",
          "tasks": [],
          "exitCriteria": [
            "all task acceptance checks are satisfied",
            "affected bench verifier passes",
            "cvpr-remediation-board and cvpr-colab-operations-dashboard rebuild cleanly",
            "python3 scripts/validate_cvpr_full_stack.py returns valid"
          ]
        },
        {
          "slug": "release-polish",
          "index": 3,
          "title": "Focused release polish",
          "goal": "Finish the lower-severity block cases and keep release gates reproducible.",
          "tasks": [],
          "exitCriteria": [
            "all task acceptance checks are satisfied",
            "affected bench verifier passes",
            "cvpr-remediation-board and cvpr-colab-operations-dashboard rebuild cleanly",
            "python3 scripts/validate_cvpr_full_stack.py returns valid"
          ]
        }
      ],
      "sourceRegistries": {
        "board": "analysis/cvpr_remediation_board/registry.json",
        "failureAtlas": "analysis/cvpr_failure_atlas/registry.json",
        "playbook": "analysis/cvpr_demo_playbook/registry.json",
        "operations": "analysis/cvpr_colab_operations_dashboard/registry.json"
      }
    },
    "validation": {
      "summary": {
        "dashboard": "cvpr-validation-center",
        "status": "interactive",
        "gateStatus": "release",
        "fullStackStatus": "valid",
        "commands": 286,
        "steps": 53,
        "packageTests": 148,
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
            "command": "node source-code/learning/*/tests/core.test.js",
            "returnCode": 0,
            "durationSec": 146.056,
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
            "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
            "returnCode": 0,
            "durationSec": 0.454,
            "stdoutTail": [
              "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_demo_lab.py",
            "returnCode": 0,
            "durationSec": 0.413,
            "stdoutTail": [
              "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/verify_cvpr_demo_lab.py",
            "returnCode": 0,
            "durationSec": 0.359,
            "stdoutTail": [
              "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/validate_cvpr_colab_results.py",
            "returnCode": 0,
            "durationSec": 0.322,
            "stdoutTail": [
              "validated CVPR Colab results: 56 results, 0 issues"
            ],
            "stderrTail": []
          }
        ]
      },
      "slowest": [
        {
          "command": "node source-code/learning/*/tests/core.test.js",
          "returnCode": 0,
          "durationSec": 146.056,
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
          "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
          "returnCode": 0,
          "durationSec": 0.454,
          "stdoutTail": [
            "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_demo_lab.py",
          "returnCode": 0,
          "durationSec": 0.413,
          "stdoutTail": [
            "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/verify_cvpr_demo_lab.py",
          "returnCode": 0,
          "durationSec": 0.359,
          "stdoutTail": [
            "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/validate_cvpr_colab_results.py",
          "returnCode": 0,
          "durationSec": 0.322,
          "stdoutTail": [
            "validated CVPR Colab results: 56 results, 0 issues"
          ],
          "stderrTail": []
        }
      ],
      "fullStack": {
        "validator": "validate_cvpr_full_stack",
        "status": "valid",
        "commands": 286,
        "steps": 53,
        "packageTests": 148,
        "workerJobs": 14,
        "promotedRunners": 14,
        "cachedResults": 56,
        "importIssues": 0,
        "durationSec": 155.466
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
  },
  "tasks": [],
  "sprints": [
    {
      "slug": "critical-containment",
      "index": 1,
      "title": "Critical containment",
      "goal": "Fix the highest-severity block cases first so unsafe demos cannot appear release-ready.",
      "tasks": [],
      "exitCriteria": [
        "all task acceptance checks are satisfied",
        "affected bench verifier passes",
        "cvpr-remediation-board and cvpr-colab-operations-dashboard rebuild cleanly",
        "python3 scripts/validate_cvpr_full_stack.py returns valid"
      ]
    },
    {
      "slug": "evidence-repair",
      "index": 2,
      "title": "High-risk evidence repair",
      "goal": "Repair remaining high-priority evidence, drift, risk, and fidelity gaps across bench families.",
      "tasks": [],
      "exitCriteria": [
        "all task acceptance checks are satisfied",
        "affected bench verifier passes",
        "cvpr-remediation-board and cvpr-colab-operations-dashboard rebuild cleanly",
        "python3 scripts/validate_cvpr_full_stack.py returns valid"
      ]
    },
    {
      "slug": "release-polish",
      "index": 3,
      "title": "Focused release polish",
      "goal": "Finish the lower-severity block cases and keep release gates reproducible.",
      "tasks": [],
      "exitCriteria": [
        "all task acceptance checks are satisfied",
        "affected bench verifier passes",
        "cvpr-remediation-board and cvpr-colab-operations-dashboard rebuild cleanly",
        "python3 scripts/validate_cvpr_full_stack.py returns valid"
      ]
    }
  ]
};
