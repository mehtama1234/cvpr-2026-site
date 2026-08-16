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
      "topFailure": "cvpr-clinical-shift-bench/same-site-clean",
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
        "id": "cvpr-clinical-shift-bench/same-site-clean",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "Same-site clean validation",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 9.6,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 88.5,
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
        "severity": 0
      },
      {
        "id": "cvpr-clinical-shift-bench/new-scanner",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "New scanner protocol",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 21.6,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 80.5,
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
        "severity": 0
      },
      {
        "id": "cvpr-clinical-shift-bench/external-hospital",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "External hospital cohort",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 26.4,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 77.1,
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
        "severity": 0
      },
      {
        "id": "cvpr-clinical-shift-bench/noisy-rare-cohort",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "system": "medical-vision-validation",
        "cluster": "Vision for science and medicine",
        "case": "Noisy rare cohort",
        "family": "clinical shift",
        "metric": "residualRisk",
        "metricValue": 33.5,
        "threshold": 50,
        "direction": "high",
        "decision": "release",
        "readiness": 72.5,
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
        "metricValue": 88.9,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 84.7,
        "controls": {
          "queryRarity": 18,
          "distractorOverlap": 16,
          "boxAmbiguity": 18,
          "evidenceThreshold": 54
        },
        "metrics": {
          "proposalRecall": 82.8,
          "textRegionScore": 84.7,
          "longTailRecall": 71.7,
          "localizedEvidence": 88.9,
          "unsupportedRisk": 8.3,
          "readiness": 84.7
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
        "metricValue": 87.7,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 83.9,
        "controls": {
          "queryRarity": 66,
          "distractorOverlap": 12,
          "boxAmbiguity": 34,
          "evidenceThreshold": 62
        },
        "metrics": {
          "proposalRecall": 76.8,
          "textRegionScore": 85.0,
          "longTailRecall": 76.9,
          "localizedEvidence": 87.7,
          "unsupportedRisk": 16.3,
          "readiness": 83.9
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
        "metricValue": 87.1,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 83.8,
        "controls": {
          "queryRarity": 78,
          "distractorOverlap": 28,
          "boxAmbiguity": 28,
          "evidenceThreshold": 76
        },
        "metrics": {
          "proposalRecall": 76.0,
          "textRegionScore": 83.6,
          "longTailRecall": 81.4,
          "localizedEvidence": 87.1,
          "unsupportedRisk": 19.0,
          "readiness": 83.8
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
        "metricValue": 87.1,
        "threshold": 55,
        "direction": "low",
        "decision": "release",
        "readiness": 83.8,
        "controls": {
          "queryRarity": 82,
          "distractorOverlap": 30,
          "boxAmbiguity": 32,
          "evidenceThreshold": 84
        },
        "metrics": {
          "proposalRecall": 75.3,
          "textRegionScore": 84.0,
          "longTailRecall": 82.1,
          "localizedEvidence": 87.1,
          "unsupportedRisk": 20.1,
          "readiness": 83.8
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
        "metricValue": 82.5,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 79.7,
        "controls": {
          "attackStrength": 0,
          "generationSource": 56,
          "watermarkVisibility": 100,
          "unlearningProbe": 0
        },
        "metrics": {
          "attackCoverage": 44.7,
          "provenanceConfidence": 86.4,
          "leakageRisk": 9.0,
          "evidence": 82.5,
          "risk": 17.9,
          "readiness": 79.7
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
        "metricValue": 82.9,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 79.8,
        "controls": {
          "attackStrength": 0,
          "generationSource": 64,
          "watermarkVisibility": 98,
          "unlearningProbe": 10
        },
        "metrics": {
          "attackCoverage": 47.2,
          "provenanceConfidence": 87.9,
          "leakageRisk": 14.8,
          "evidence": 82.9,
          "risk": 21.0,
          "readiness": 79.8
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
        "metricValue": 83.6,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 79.9,
        "controls": {
          "attackStrength": 0,
          "generationSource": 84,
          "watermarkVisibility": 94,
          "unlearningProbe": 44
        },
        "metrics": {
          "attackCoverage": 54.4,
          "provenanceConfidence": 92.0,
          "leakageRisk": 32.9,
          "evidence": 83.6,
          "risk": 29.9,
          "readiness": 79.9
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
        "metricValue": 85.3,
        "threshold": 50,
        "direction": "low",
        "decision": "release",
        "readiness": 80.8,
        "controls": {
          "attackStrength": 12,
          "generationSource": 89,
          "watermarkVisibility": 100,
          "unlearningProbe": 0
        },
        "metrics": {
          "attackCoverage": 52.6,
          "provenanceConfidence": 93.8,
          "leakageRisk": 17.4,
          "evidence": 85.3,
          "risk": 30.3,
          "readiness": 80.8
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
        "metricValue": 33.4,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 68.1,
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
        "metricValue": 31.7,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 68.2,
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
        "metricValue": 34.6,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 68.2,
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
        "metricValue": 31.9,
        "threshold": 35,
        "direction": "high",
        "decision": "release",
        "readiness": 68.2,
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
      "jobs": 10,
      "runners": 10,
      "cachedResults": 40,
      "liveIntakeResults": 40,
      "promotionResults": 40,
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
        "jobs": 10,
        "liveCapable": 10,
        "promotedRunners": 10,
        "cachedCapable": 10,
        "cachedResults": 40,
        "validCachedResults": 40,
        "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
            "jobId": "metric-geometry",
            "bench": "cvpr-metric-geometry-bench",
            "page": "cvpr-metric-geometry-bench.html",
            "priority": 9,
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
            "priority": 10,
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
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "embedding": "siglip-base-patch16-224",
            "detector": "grounding-dino-tiny",
            "segmenter": "sam-vit-b"
          },
          "inputs": {
            "textQuery": "common clean object",
            "controls": {
              "queryRarity": 18,
              "distractorOverlap": 16,
              "boxAmbiguity": 18,
              "evidenceThreshold": 54
            },
            "asset": "fixtures/open-vocab/common-clean.png"
          },
          "outputs": {
            "boxes": [
              {
                "label": "target",
                "xywh": [
                  0.18,
                  0.22,
                  0.26,
                  0.24
                ],
                "score": 0.828
              },
              {
                "label": "distractor",
                "xywh": [
                  0.56,
                  0.26,
                  0.21,
                  0.2
                ],
                "score": 0.917
              }
            ],
            "regionScores": {
              "target": 84.7,
              "longTail": 71.7
            },
            "localizedEvidence": 88.9
          },
          "metrics": {
            "readiness": 84.7,
            "localizedEvidence": 88.9,
            "unsupportedRisk": 8.3
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench"
          }
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-visible",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "embedding": "siglip-base-patch16-224",
            "detector": "grounding-dino-tiny",
            "segmenter": "sam-vit-b"
          },
          "inputs": {
            "textQuery": "rare visible object",
            "controls": {
              "queryRarity": 66,
              "distractorOverlap": 12,
              "boxAmbiguity": 34,
              "evidenceThreshold": 62
            },
            "asset": "fixtures/open-vocab/rare-visible.png"
          },
          "outputs": {
            "boxes": [
              {
                "label": "target",
                "xywh": [
                  0.18,
                  0.22,
                  0.26,
                  0.24
                ],
                "score": 0.768
              },
              {
                "label": "distractor",
                "xywh": [
                  0.56,
                  0.26,
                  0.21,
                  0.2
                ],
                "score": 0.837
              }
            ],
            "regionScores": {
              "target": 85.0,
              "longTail": 76.9
            },
            "localizedEvidence": 87.7
          },
          "metrics": {
            "readiness": 83.9,
            "localizedEvidence": 87.7,
            "unsupportedRisk": 16.3
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench"
          }
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-distractors",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "embedding": "siglip-base-patch16-224",
            "detector": "grounding-dino-tiny",
            "segmenter": "sam-vit-b"
          },
          "inputs": {
            "textQuery": "rare object with distractors",
            "controls": {
              "queryRarity": 78,
              "distractorOverlap": 28,
              "boxAmbiguity": 28,
              "evidenceThreshold": 76
            },
            "asset": "fixtures/open-vocab/rare-distractors.png"
          },
          "outputs": {
            "boxes": [
              {
                "label": "target",
                "xywh": [
                  0.18,
                  0.22,
                  0.26,
                  0.24
                ],
                "score": 0.76
              },
              {
                "label": "distractor",
                "xywh": [
                  0.56,
                  0.26,
                  0.21,
                  0.2
                ],
                "score": 0.81
              }
            ],
            "regionScores": {
              "target": 83.6,
              "longTail": 81.4
            },
            "localizedEvidence": 87.1
          },
          "metrics": {
            "readiness": 83.8,
            "localizedEvidence": 87.1,
            "unsupportedRisk": 19.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench"
          }
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "unsupported-query",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "embedding": "siglip-base-patch16-224",
            "detector": "grounding-dino-tiny",
            "segmenter": "sam-vit-b"
          },
          "inputs": {
            "textQuery": "unsupported text query",
            "controls": {
              "queryRarity": 82,
              "distractorOverlap": 30,
              "boxAmbiguity": 32,
              "evidenceThreshold": 84
            },
            "asset": "fixtures/open-vocab/unsupported-query.png"
          },
          "outputs": {
            "boxes": [
              {
                "label": "target",
                "xywh": [
                  0.18,
                  0.22,
                  0.26,
                  0.24
                ],
                "score": 0.753
              },
              {
                "label": "distractor",
                "xywh": [
                  0.56,
                  0.26,
                  0.21,
                  0.2
                ],
                "score": 0.799
              }
            ],
            "regionScores": {
              "target": 84.0,
              "longTail": 82.1
            },
            "localizedEvidence": 87.1
          },
          "metrics": {
            "readiness": 83.8,
            "localizedEvidence": 87.1,
            "unsupportedRisk": 20.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-long-tail-grounding-bench"
          }
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "mild-noise",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "restorer": "swinir-lightweight",
            "artifactProbe": "real-esrgan-x2"
          },
          "inputs": {
            "degradationControls": {
              "blur": 18,
              "noise": 24,
              "compression": 18,
              "lowLight": 20,
              "hallucinationPenalty": 36
            },
            "asset": "fixtures/restoration/mild-noise.png"
          },
          "outputs": {
            "restoredImage": "fixtures/restoration/mild-noise-restored.png",
            "artifactMap": "fixtures/restoration/mild-noise-artifact-map.png",
            "downstreamScore": 85.3,
            "fidelityScore": 82.2
          },
          "metrics": {
            "readiness": 82.0,
            "downstreamUtility": 85.3,
            "fabricatedDetailRisk": 25.8,
            "fidelityScore": 82.2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-restoration-fidelity-bench"
          }
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "compressed-low-light",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "restorer": "swinir-lightweight",
            "artifactProbe": "real-esrgan-x2"
          },
          "inputs": {
            "degradationControls": {
              "blur": 32,
              "noise": 38,
              "compression": 54,
              "lowLight": 64,
              "hallucinationPenalty": 16
            },
            "asset": "fixtures/restoration/compressed-low-light.png"
          },
          "outputs": {
            "restoredImage": "fixtures/restoration/compressed-low-light-restored.png",
            "artifactMap": "fixtures/restoration/compressed-low-light-artifact-map.png",
            "downstreamScore": 80.9,
            "fidelityScore": 80.3
          },
          "metrics": {
            "readiness": 77.7,
            "downstreamUtility": 80.9,
            "fabricatedDetailRisk": 29.4,
            "fidelityScore": 80.3
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-restoration-fidelity-bench"
          }
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "motion-blur-task",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "restorer": "swinir-lightweight",
            "artifactProbe": "real-esrgan-x2"
          },
          "inputs": {
            "degradationControls": {
              "blur": 64,
              "noise": 36,
              "compression": 38,
              "lowLight": 36,
              "hallucinationPenalty": 16
            },
            "asset": "fixtures/restoration/motion-blur-task.png"
          },
          "outputs": {
            "restoredImage": "fixtures/restoration/motion-blur-task-restored.png",
            "artifactMap": "fixtures/restoration/motion-blur-task-artifact-map.png",
            "downstreamScore": 81.5,
            "fidelityScore": 79.0
          },
          "metrics": {
            "readiness": 77.7,
            "downstreamUtility": 81.5,
            "fabricatedDetailRisk": 26.5,
            "fidelityScore": 79.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-restoration-fidelity-bench"
          }
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "over-restored-detail",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "restorer": "swinir-lightweight",
            "artifactProbe": "real-esrgan-x2"
          },
          "inputs": {
            "degradationControls": {
              "blur": 48,
              "noise": 54,
              "compression": 38,
              "lowLight": 56,
              "hallucinationPenalty": 18
            },
            "asset": "fixtures/restoration/over-restored-detail.png"
          },
          "outputs": {
            "restoredImage": "fixtures/restoration/over-restored-detail-restored.png",
            "artifactMap": "fixtures/restoration/over-restored-detail-artifact-map.png",
            "downstreamScore": 81.2,
            "fidelityScore": 80.1
          },
          "metrics": {
            "readiness": 77.8,
            "downstreamUtility": 81.2,
            "fabricatedDetailRisk": 28.6,
            "fidelityScore": 80.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-restoration-fidelity-bench"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "clean-camera",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "detector": "watermark-detector",
            "probe": "clip-perturbation-probe"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 0,
              "generationSource": 56,
              "watermarkVisibility": 100,
              "unlearningProbe": 0
            },
            "asset": "fixtures/adversarial/clean-camera.png"
          },
          "outputs": {
            "provenanceConfidence": 86.4,
            "attackHeatmap": "fixtures/adversarial/clean-camera-attack-heatmap.png",
            "leakageRisk": 9.0,
            "evidence": 82.5
          },
          "metrics": {
            "readiness": 79.7,
            "evidence": 82.5,
            "risk": 17.9,
            "leakageRisk": 9.0,
            "provenanceConfidence": 86.4,
            "attackCoverage": 44.7
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "edited-social-post",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "detector": "watermark-detector",
            "probe": "clip-perturbation-probe"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 0,
              "generationSource": 64,
              "watermarkVisibility": 98,
              "unlearningProbe": 10
            },
            "asset": "fixtures/adversarial/edited-social-post.png"
          },
          "outputs": {
            "provenanceConfidence": 87.9,
            "attackHeatmap": "fixtures/adversarial/edited-social-post-attack-heatmap.png",
            "leakageRisk": 14.8,
            "evidence": 82.9
          },
          "metrics": {
            "readiness": 79.8,
            "evidence": 82.9,
            "risk": 21.0,
            "leakageRisk": 14.8,
            "provenanceConfidence": 87.9,
            "attackCoverage": 47.2
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "synthetic-watermarked",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "detector": "watermark-detector",
            "probe": "clip-perturbation-probe"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 0,
              "generationSource": 84,
              "watermarkVisibility": 94,
              "unlearningProbe": 44
            },
            "asset": "fixtures/adversarial/synthetic-watermarked.png"
          },
          "outputs": {
            "provenanceConfidence": 92.0,
            "attackHeatmap": "fixtures/adversarial/synthetic-watermarked-attack-heatmap.png",
            "leakageRisk": 32.9,
            "evidence": 83.6
          },
          "metrics": {
            "readiness": 79.9,
            "evidence": 83.6,
            "risk": 29.9,
            "leakageRisk": 32.9,
            "provenanceConfidence": 92.0,
            "attackCoverage": 54.4
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "caseId": "adaptive-attack",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "detector": "watermark-detector",
            "probe": "clip-perturbation-probe"
          },
          "inputs": {
            "attackControls": {
              "attackStrength": 12,
              "generationSource": 89,
              "watermarkVisibility": 100,
              "unlearningProbe": 0
            },
            "asset": "fixtures/adversarial/adaptive-attack.png"
          },
          "outputs": {
            "provenanceConfidence": 93.8,
            "attackHeatmap": "fixtures/adversarial/adaptive-attack-attack-heatmap.png",
            "leakageRisk": 17.4,
            "evidence": 85.3
          },
          "metrics": {
            "readiness": 80.8,
            "evidence": 85.3,
            "risk": 30.3,
            "leakageRisk": 17.4,
            "provenanceConfidence": 93.8,
            "attackCoverage": 52.6
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-adversarial-provenance-bench"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "short-stable",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "tracker": "video-feature-tracker",
            "flow": "raft-lite",
            "rolloutProbe": "world-rollout-probe"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 24,
              "identityDensity": 28,
              "physicsViolations": 14,
              "memoryWindow": 72
            },
            "asset": "fixtures/temporal/short-stable.mp4"
          },
          "outputs": {
            "identityTracks": "fixtures/temporal/short-stable-identity-tracks.json",
            "contactEvents": "fixtures/temporal/short-stable-contacts.json",
            "driftCurve": [
              5.2,
              10.5,
              15.8,
              21.0
            ],
            "rolloutPlausibility": 85.7
          },
          "metrics": {
            "readiness": 83.3,
            "identityStability": 80.6,
            "contactConsistency": 86.6,
            "rolloutPlausibility": 85.7,
            "drift": 21.0,
            "memoryLoad": 26.6
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "crowded-memory",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "tracker": "video-feature-tracker",
            "flow": "raft-lite",
            "rolloutProbe": "world-rollout-probe"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 36,
              "identityDensity": 76,
              "physicsViolations": 26,
              "memoryWindow": 82
            },
            "asset": "fixtures/temporal/crowded-memory.mp4"
          },
          "outputs": {
            "identityTracks": "fixtures/temporal/crowded-memory-identity-tracks.json",
            "contactEvents": "fixtures/temporal/crowded-memory-contacts.json",
            "driftCurve": [
              8.2,
              16.5,
              24.8,
              33.0
            ],
            "rolloutPlausibility": 80.0
          },
          "metrics": {
            "readiness": 75.9,
            "identityStability": 73.8,
            "contactConsistency": 79.4,
            "rolloutPlausibility": 80.0,
            "drift": 33.0,
            "memoryLoad": 43.8
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "contact-heavy",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "tracker": "video-feature-tracker",
            "flow": "raft-lite",
            "rolloutProbe": "world-rollout-probe"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 56,
              "identityDensity": 52,
              "physicsViolations": 20,
              "memoryWindow": 82
            },
            "asset": "fixtures/temporal/contact-heavy.mp4"
          },
          "outputs": {
            "identityTracks": "fixtures/temporal/contact-heavy-identity-tracks.json",
            "contactEvents": "fixtures/temporal/contact-heavy-contacts.json",
            "driftCurve": [
              8.6,
              17.1,
              25.7,
              34.3
            ],
            "rolloutPlausibility": 77.1
          },
          "metrics": {
            "readiness": 76.2,
            "identityStability": 74.0,
            "contactConsistency": 83.6,
            "rolloutPlausibility": 77.1,
            "drift": 34.3,
            "memoryLoad": 42.5
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench"
          }
        },
        {
          "jobId": "temporal-rollout",
          "caseId": "long-rollout-drift",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "tracker": "video-feature-tracker",
            "flow": "raft-lite",
            "rolloutProbe": "world-rollout-probe"
          },
          "inputs": {
            "trackingControls": {
              "rolloutLength": 66,
              "identityDensity": 68,
              "physicsViolations": 12,
              "memoryWindow": 92
            },
            "asset": "fixtures/temporal/long-rollout-drift.mp4"
          },
          "outputs": {
            "identityTracks": "fixtures/temporal/long-rollout-drift-identity-tracks.json",
            "contactEvents": "fixtures/temporal/long-rollout-drift-contacts.json",
            "driftCurve": [
              9.0,
              18.1,
              27.1,
              36.1
            ],
            "rolloutPlausibility": 75.5
          },
          "metrics": {
            "readiness": 75.9,
            "identityStability": 72.7,
            "contactConsistency": 86.5,
            "rolloutPlausibility": 75.5,
            "drift": 36.1,
            "memoryLoad": 48.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-temporal-rollout-bench"
          }
        },
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
        },
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
        },
        {
          "jobId": "constraint-generation",
          "caseId": "light-layout-edit",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "layout": "layout-controlnet",
            "identity": "identity-embedding-lock",
            "reward": "preference-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 24,
              "layoutLock": 78,
              "identityLock": 82,
              "adversarialPromptPressure": 18
            },
            "asset": "fixtures/generation/light-layout-edit.png"
          },
          "outputs": {
            "editedImage": "fixtures/generation/light-layout-edit-edited.png",
            "layoutMask": "fixtures/generation/light-layout-edit-layout-mask.png",
            "identityEmbeddingDelta": 18.5,
            "rewardTrace": "fixtures/generation/light-layout-edit-reward.json"
          },
          "metrics": {
            "readiness": 84.9,
            "editPressure": 21.0,
            "constraintSatisfaction": 86.1,
            "identityPreservation": 85.0,
            "editLocality": 82.8,
            "rewardAlignment": 87.3,
            "identityDamage": 18.5,
            "provenanceRisk": 17.6
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench"
          }
        },
        {
          "jobId": "constraint-generation",
          "caseId": "style-with-locks",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "layout": "layout-controlnet",
            "identity": "identity-embedding-lock",
            "reward": "preference-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 52,
              "layoutLock": 68,
              "identityLock": 80,
              "adversarialPromptPressure": 32
            },
            "asset": "fixtures/generation/style-with-locks.png"
          },
          "outputs": {
            "editedImage": "fixtures/generation/style-with-locks-edited.png",
            "layoutMask": "fixtures/generation/style-with-locks-layout-mask.png",
            "identityEmbeddingDelta": 31.8,
            "rewardTrace": "fixtures/generation/style-with-locks-reward.json"
          },
          "metrics": {
            "readiness": 77.4,
            "editPressure": 39.2,
            "constraintSatisfaction": 80.9,
            "identityPreservation": 77.3,
            "editLocality": 74.4,
            "rewardAlignment": 81.3,
            "identityDamage": 31.8,
            "provenanceRisk": 29.5
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench"
          }
        },
        {
          "jobId": "constraint-generation",
          "caseId": "layout-rewrite",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "layout": "layout-controlnet",
            "identity": "identity-embedding-lock",
            "reward": "preference-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 72,
              "layoutLock": 62,
              "identityLock": 92,
              "adversarialPromptPressure": 28
            },
            "asset": "fixtures/generation/layout-rewrite.png"
          },
          "outputs": {
            "editedImage": "fixtures/generation/layout-rewrite-edited.png",
            "layoutMask": "fixtures/generation/layout-rewrite-layout-mask.png",
            "identityEmbeddingDelta": 33.1,
            "rewardTrace": "fixtures/generation/layout-rewrite-reward.json"
          },
          "metrics": {
            "readiness": 77.5,
            "editPressure": 45.7,
            "constraintSatisfaction": 81.1,
            "identityPreservation": 78.4,
            "editLocality": 72.9,
            "rewardAlignment": 82.4,
            "identityDamage": 33.1,
            "provenanceRisk": 29.9
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench"
          }
        },
        {
          "jobId": "constraint-generation",
          "caseId": "prompt-attack-edit",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "layout": "layout-controlnet",
            "identity": "identity-embedding-lock",
            "reward": "preference-reward-probe"
          },
          "inputs": {
            "generationControls": {
              "editStrength": 78,
              "layoutLock": 66,
              "identityLock": 92,
              "adversarialPromptPressure": 28
            },
            "asset": "fixtures/generation/prompt-attack-edit.png"
          },
          "outputs": {
            "editedImage": "fixtures/generation/prompt-attack-edit-edited.png",
            "layoutMask": "fixtures/generation/prompt-attack-edit-layout-mask.png",
            "identityEmbeddingDelta": 34.8,
            "rewardTrace": "fixtures/generation/prompt-attack-edit-reward.json"
          },
          "metrics": {
            "readiness": 77.6,
            "editPressure": 47.7,
            "constraintSatisfaction": 82.3,
            "identityPreservation": 77.3,
            "editLocality": 73.6,
            "rewardAlignment": 82.5,
            "identityDamage": 34.8,
            "provenanceRisk": 30.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-constraint-generation-bench"
          }
        },
        {
          "jobId": "driving-safety",
          "caseId": "urban-cut-in",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "grounder": "vla-scene-grounder",
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
            "asset": "fixtures/driving/urban-cut-in.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "fixtures/driving/urban-cut-in-grounding.png",
            "timeToCollision": 5.15,
            "riskTrace": "fixtures/driving/urban-cut-in-risk.json",
            "ruleViolations": 24.0
          },
          "metrics": {
            "readiness": 68.1,
            "sceneGrounding": 85.7,
            "timeToCollision": 5.15,
            "risk": 33.4,
            "ruleViolation": 24.0,
            "abstention": 7.6
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-driving-safety-bench"
          }
        },
        {
          "jobId": "driving-safety",
          "caseId": "night-crosswalk",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "grounder": "vla-scene-grounder",
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
            "asset": "fixtures/driving/night-crosswalk.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "fixtures/driving/night-crosswalk-grounding.png",
            "timeToCollision": 5.73,
            "riskTrace": "fixtures/driving/night-crosswalk-risk.json",
            "ruleViolations": 23.5
          },
          "metrics": {
            "readiness": 68.2,
            "sceneGrounding": 84.2,
            "timeToCollision": 5.73,
            "risk": 31.7,
            "ruleViolation": 23.5,
            "abstention": 7.8
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-driving-safety-bench"
          }
        },
        {
          "jobId": "driving-safety",
          "caseId": "highway-merge",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "grounder": "vla-scene-grounder",
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
            "asset": "fixtures/driving/highway-merge.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "fixtures/driving/highway-merge-grounding.png",
            "timeToCollision": 4.34,
            "riskTrace": "fixtures/driving/highway-merge-risk.json",
            "ruleViolations": 24.1
          },
          "metrics": {
            "readiness": 68.2,
            "sceneGrounding": 87.3,
            "timeToCollision": 4.34,
            "risk": 34.6,
            "ruleViolation": 24.1,
            "abstention": 7.4
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-driving-safety-bench"
          }
        },
        {
          "jobId": "driving-safety",
          "caseId": "construction-zone",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "grounder": "vla-scene-grounder",
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
            "asset": "fixtures/driving/construction-zone.mp4"
          },
          "outputs": {
            "sceneGroundingMap": "fixtures/driving/construction-zone-grounding.png",
            "timeToCollision": 5.82,
            "riskTrace": "fixtures/driving/construction-zone-risk.json",
            "ruleViolations": 23.7
          },
          "metrics": {
            "readiness": 68.2,
            "sceneGrounding": 83.9,
            "timeToCollision": 5.82,
            "risk": 31.9,
            "ruleViolation": 23.7,
            "abstention": 9.1
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-driving-safety-bench"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "wide-baseline",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "pose": "torch-pose-bundle-adjuster",
            "scale": "metric-scale-probe",
            "surface": "surface-consistency-head"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 82,
              "textureSparsity": 18,
              "scaleAmbiguity": 24,
              "surfaceComplexity": 42
            },
            "asset": "fixtures/geometry/wide-baseline.json"
          },
          "outputs": {
            "poseGraph": "fixtures/geometry/wide-baseline-pose-graph.json",
            "scaleTrace": "fixtures/geometry/wide-baseline-scale-trace.json",
            "surfaceResidualMap": "fixtures/geometry/wide-baseline-surface-residual.png",
            "topologyWarnings": 13.9
          },
          "metrics": {
            "readiness": 85.8,
            "poseEvidence": 87.0,
            "metricEvidence": 86.9,
            "surfaceConsistency": 83.1,
            "scaleDrift": 10.1,
            "topologyRisk": 13.9
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "scale-transfer",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "pose": "torch-pose-bundle-adjuster",
            "scale": "metric-scale-probe",
            "surface": "surface-consistency-head"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 66,
              "textureSparsity": 28,
              "scaleAmbiguity": 44,
              "surfaceComplexity": 46
            },
            "asset": "fixtures/geometry/scale-transfer.json"
          },
          "outputs": {
            "poseGraph": "fixtures/geometry/scale-transfer-pose-graph.json",
            "scaleTrace": "fixtures/geometry/scale-transfer-scale-trace.json",
            "surfaceResidualMap": "fixtures/geometry/scale-transfer-surface-residual.png",
            "topologyWarnings": 21.0
          },
          "metrics": {
            "readiness": 78.7,
            "poseEvidence": 79.2,
            "metricEvidence": 78.8,
            "surfaceConsistency": 78.4,
            "scaleDrift": 21.5,
            "topologyRisk": 21.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "thin-structure",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "pose": "torch-pose-bundle-adjuster",
            "scale": "metric-scale-probe",
            "surface": "surface-consistency-head"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 58,
              "textureSparsity": 34,
              "scaleAmbiguity": 32,
              "surfaceComplexity": 72
            },
            "asset": "fixtures/geometry/thin-structure.json"
          },
          "outputs": {
            "poseGraph": "fixtures/geometry/thin-structure-pose-graph.json",
            "scaleTrace": "fixtures/geometry/thin-structure-scale-trace.json",
            "surfaceResidualMap": "fixtures/geometry/thin-structure-surface-residual.png",
            "topologyWarnings": 30.0
          },
          "metrics": {
            "readiness": 75.5,
            "poseEvidence": 76.8,
            "metricEvidence": 80.4,
            "surfaceConsistency": 72.5,
            "scaleDrift": 22.7,
            "topologyRisk": 30.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench"
          }
        },
        {
          "jobId": "metric-geometry",
          "caseId": "low-texture-indoor",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "pose": "torch-pose-bundle-adjuster",
            "scale": "metric-scale-probe",
            "surface": "surface-consistency-head"
          },
          "inputs": {
            "geometryControls": {
              "baseline": 54,
              "textureSparsity": 58,
              "scaleAmbiguity": 48,
              "surfaceComplexity": 50
            },
            "asset": "fixtures/geometry/low-texture-indoor.json"
          },
          "outputs": {
            "poseGraph": "fixtures/geometry/low-texture-indoor-pose-graph.json",
            "scaleTrace": "fixtures/geometry/low-texture-indoor-scale-trace.json",
            "surfaceResidualMap": "fixtures/geometry/low-texture-indoor-surface-residual.png",
            "topologyWarnings": 30.0
          },
          "metrics": {
            "readiness": 72.0,
            "poseEvidence": 70.1,
            "metricEvidence": 74.7,
            "surfaceConsistency": 72.2,
            "scaleDrift": 29.9,
            "topologyRisk": 30.0
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-metric-geometry-bench"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "dense-novel-view",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "renderer": "torch-splat-renderer",
            "semantic": "semantic-splat-attach",
            "provenance": "provenance-trace-head"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 86,
              "splatDensity": 78,
              "semanticEntropy": 24,
              "provenanceVisibility": 70
            },
            "asset": "fixtures/splats/dense-novel-view.json"
          },
          "outputs": {
            "novelViewRenders": "fixtures/splats/dense-novel-view-renders/",
            "semanticSplatMap": "fixtures/splats/dense-novel-view-semantic-map.json",
            "provenanceTrace": "fixtures/splats/dense-novel-view-provenance.json",
            "editLeakageReport": 16.7
          },
          "metrics": {
            "readiness": 85.6,
            "renderFidelity": 86.6,
            "semanticAttachment": 86.4,
            "provenanceTrace": 85.5,
            "viewInstability": 9.4,
            "editLeakageRisk": 16.7
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "semantic-edit",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "renderer": "torch-splat-renderer",
            "semantic": "semantic-splat-attach",
            "provenance": "provenance-trace-head"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 74,
              "splatDensity": 72,
              "semanticEntropy": 34,
              "provenanceVisibility": 76
            },
            "asset": "fixtures/splats/semantic-edit.json"
          },
          "outputs": {
            "novelViewRenders": "fixtures/splats/semantic-edit-renders/",
            "semanticSplatMap": "fixtures/splats/semantic-edit-semantic-map.json",
            "provenanceTrace": "fixtures/splats/semantic-edit-provenance.json",
            "editLeakageReport": 21.4
          },
          "metrics": {
            "readiness": 82.2,
            "renderFidelity": 81.5,
            "semanticAttachment": 82.4,
            "provenanceTrace": 86.1,
            "viewInstability": 15.7,
            "editLeakageRisk": 21.4
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "provenance-transfer",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "renderer": "torch-splat-renderer",
            "semantic": "semantic-splat-attach",
            "provenance": "provenance-trace-head"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 68,
              "splatDensity": 70,
              "semanticEntropy": 42,
              "provenanceVisibility": 84
            },
            "asset": "fixtures/splats/provenance-transfer.json"
          },
          "outputs": {
            "novelViewRenders": "fixtures/splats/provenance-transfer-renders/",
            "semanticSplatMap": "fixtures/splats/provenance-transfer-semantic-map.json",
            "provenanceTrace": "fixtures/splats/provenance-transfer-provenance.json",
            "editLeakageReport": 24.3
          },
          "metrics": {
            "readiness": 80.5,
            "renderFidelity": 78.9,
            "semanticAttachment": 79.8,
            "provenanceTrace": 87.7,
            "viewInstability": 18.8,
            "editLeakageRisk": 24.3
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "caseId": "sparse-capture",
          "mode": "cached-real",
          "createdAt": "2026-08-15T00:00:00Z",
          "model": {
            "renderer": "torch-splat-renderer",
            "semantic": "semantic-splat-attach",
            "provenance": "provenance-trace-head"
          },
          "inputs": {
            "splatControls": {
              "viewCount": 62,
              "splatDensity": 66,
              "semanticEntropy": 46,
              "provenanceVisibility": 72
            },
            "asset": "fixtures/splats/sparse-capture.json"
          },
          "outputs": {
            "novelViewRenders": "fixtures/splats/sparse-capture-renders/",
            "semanticSplatMap": "fixtures/splats/sparse-capture-semantic-map.json",
            "provenanceTrace": "fixtures/splats/sparse-capture-provenance.json",
            "editLeakageReport": 27.4
          },
          "metrics": {
            "readiness": 77.7,
            "renderFidelity": 76.2,
            "semanticAttachment": 77.8,
            "provenanceTrace": 83.8,
            "viewInstability": 23.2,
            "editLeakageRisk": 27.4
          },
          "provenance": {
            "runtime": "google-colab-pro-plus",
            "accelerator": "GPU",
            "notebook": "notebooks/cvpr_gpu_worker.ipynb",
            "sourceBench": "cvpr-gaussian-splatting-bench"
          }
        }
      ]
    },
    "handoff": {
      "summary": {
        "handoff": "cvpr-colab-handoff-package",
        "status": "ready",
        "jobs": 10,
        "runners": 10,
        "expectedResults": 40,
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
          "jobs": 10,
          "liveCapable": 10,
          "promotedRunners": 10,
          "cachedCapable": 10,
          "cachedResults": 40,
          "validCachedResults": 40,
          "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
              "jobId": "metric-geometry",
              "bench": "cvpr-metric-geometry-bench",
              "page": "cvpr-metric-geometry-bench.html",
              "priority": 9,
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
              "priority": 10,
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
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "common clean object",
              "controls": {
                "queryRarity": 18,
                "distractorOverlap": 16,
                "boxAmbiguity": 18,
                "evidenceThreshold": 54
              },
              "asset": "fixtures/open-vocab/common-clean.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.828
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.917
                }
              ],
              "regionScores": {
                "target": 84.7,
                "longTail": 71.7
              },
              "localizedEvidence": 88.9
            },
            "metrics": {
              "readiness": 84.7,
              "localizedEvidence": 88.9,
              "unsupportedRisk": 8.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-visible",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "rare visible object",
              "controls": {
                "queryRarity": 66,
                "distractorOverlap": 12,
                "boxAmbiguity": 34,
                "evidenceThreshold": 62
              },
              "asset": "fixtures/open-vocab/rare-visible.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.768
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.837
                }
              ],
              "regionScores": {
                "target": 85.0,
                "longTail": 76.9
              },
              "localizedEvidence": 87.7
            },
            "metrics": {
              "readiness": 83.9,
              "localizedEvidence": 87.7,
              "unsupportedRisk": 16.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-distractors",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "rare object with distractors",
              "controls": {
                "queryRarity": 78,
                "distractorOverlap": 28,
                "boxAmbiguity": 28,
                "evidenceThreshold": 76
              },
              "asset": "fixtures/open-vocab/rare-distractors.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.76
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.81
                }
              ],
              "regionScores": {
                "target": 83.6,
                "longTail": 81.4
              },
              "localizedEvidence": 87.1
            },
            "metrics": {
              "readiness": 83.8,
              "localizedEvidence": 87.1,
              "unsupportedRisk": 19.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "unsupported-query",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "unsupported text query",
              "controls": {
                "queryRarity": 82,
                "distractorOverlap": 30,
                "boxAmbiguity": 32,
                "evidenceThreshold": 84
              },
              "asset": "fixtures/open-vocab/unsupported-query.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.753
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.799
                }
              ],
              "regionScores": {
                "target": 84.0,
                "longTail": 82.1
              },
              "localizedEvidence": 87.1
            },
            "metrics": {
              "readiness": 83.8,
              "localizedEvidence": 87.1,
              "unsupportedRisk": 20.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "mild-noise",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 18,
                "noise": 24,
                "compression": 18,
                "lowLight": 20,
                "hallucinationPenalty": 36
              },
              "asset": "fixtures/restoration/mild-noise.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/mild-noise-restored.png",
              "artifactMap": "fixtures/restoration/mild-noise-artifact-map.png",
              "downstreamScore": 85.3,
              "fidelityScore": 82.2
            },
            "metrics": {
              "readiness": 82.0,
              "downstreamUtility": 85.3,
              "fabricatedDetailRisk": 25.8,
              "fidelityScore": 82.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "compressed-low-light",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 32,
                "noise": 38,
                "compression": 54,
                "lowLight": 64,
                "hallucinationPenalty": 16
              },
              "asset": "fixtures/restoration/compressed-low-light.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/compressed-low-light-restored.png",
              "artifactMap": "fixtures/restoration/compressed-low-light-artifact-map.png",
              "downstreamScore": 80.9,
              "fidelityScore": 80.3
            },
            "metrics": {
              "readiness": 77.7,
              "downstreamUtility": 80.9,
              "fabricatedDetailRisk": 29.4,
              "fidelityScore": 80.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "motion-blur-task",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 64,
                "noise": 36,
                "compression": 38,
                "lowLight": 36,
                "hallucinationPenalty": 16
              },
              "asset": "fixtures/restoration/motion-blur-task.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/motion-blur-task-restored.png",
              "artifactMap": "fixtures/restoration/motion-blur-task-artifact-map.png",
              "downstreamScore": 81.5,
              "fidelityScore": 79.0
            },
            "metrics": {
              "readiness": 77.7,
              "downstreamUtility": 81.5,
              "fabricatedDetailRisk": 26.5,
              "fidelityScore": 79.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "over-restored-detail",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 48,
                "noise": 54,
                "compression": 38,
                "lowLight": 56,
                "hallucinationPenalty": 18
              },
              "asset": "fixtures/restoration/over-restored-detail.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/over-restored-detail-restored.png",
              "artifactMap": "fixtures/restoration/over-restored-detail-artifact-map.png",
              "downstreamScore": 81.2,
              "fidelityScore": 80.1
            },
            "metrics": {
              "readiness": 77.8,
              "downstreamUtility": 81.2,
              "fabricatedDetailRisk": 28.6,
              "fidelityScore": 80.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "clean-camera",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 56,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "fixtures/adversarial/clean-camera.png"
            },
            "outputs": {
              "provenanceConfidence": 86.4,
              "attackHeatmap": "fixtures/adversarial/clean-camera-attack-heatmap.png",
              "leakageRisk": 9.0,
              "evidence": 82.5
            },
            "metrics": {
              "readiness": 79.7,
              "evidence": 82.5,
              "risk": 17.9,
              "leakageRisk": 9.0,
              "provenanceConfidence": 86.4,
              "attackCoverage": 44.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "edited-social-post",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 64,
                "watermarkVisibility": 98,
                "unlearningProbe": 10
              },
              "asset": "fixtures/adversarial/edited-social-post.png"
            },
            "outputs": {
              "provenanceConfidence": 87.9,
              "attackHeatmap": "fixtures/adversarial/edited-social-post-attack-heatmap.png",
              "leakageRisk": 14.8,
              "evidence": 82.9
            },
            "metrics": {
              "readiness": 79.8,
              "evidence": 82.9,
              "risk": 21.0,
              "leakageRisk": 14.8,
              "provenanceConfidence": 87.9,
              "attackCoverage": 47.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "synthetic-watermarked",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 84,
                "watermarkVisibility": 94,
                "unlearningProbe": 44
              },
              "asset": "fixtures/adversarial/synthetic-watermarked.png"
            },
            "outputs": {
              "provenanceConfidence": 92.0,
              "attackHeatmap": "fixtures/adversarial/synthetic-watermarked-attack-heatmap.png",
              "leakageRisk": 32.9,
              "evidence": 83.6
            },
            "metrics": {
              "readiness": 79.9,
              "evidence": 83.6,
              "risk": 29.9,
              "leakageRisk": 32.9,
              "provenanceConfidence": 92.0,
              "attackCoverage": 54.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "adaptive-attack",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 12,
                "generationSource": 89,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "fixtures/adversarial/adaptive-attack.png"
            },
            "outputs": {
              "provenanceConfidence": 93.8,
              "attackHeatmap": "fixtures/adversarial/adaptive-attack-attack-heatmap.png",
              "leakageRisk": 17.4,
              "evidence": 85.3
            },
            "metrics": {
              "readiness": 80.8,
              "evidence": 85.3,
              "risk": 30.3,
              "leakageRisk": 17.4,
              "provenanceConfidence": 93.8,
              "attackCoverage": 52.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "short-stable",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 24,
                "identityDensity": 28,
                "physicsViolations": 14,
                "memoryWindow": 72
              },
              "asset": "fixtures/temporal/short-stable.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/short-stable-identity-tracks.json",
              "contactEvents": "fixtures/temporal/short-stable-contacts.json",
              "driftCurve": [
                5.2,
                10.5,
                15.8,
                21.0
              ],
              "rolloutPlausibility": 85.7
            },
            "metrics": {
              "readiness": 83.3,
              "identityStability": 80.6,
              "contactConsistency": 86.6,
              "rolloutPlausibility": 85.7,
              "drift": 21.0,
              "memoryLoad": 26.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "crowded-memory",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 36,
                "identityDensity": 76,
                "physicsViolations": 26,
                "memoryWindow": 82
              },
              "asset": "fixtures/temporal/crowded-memory.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/crowded-memory-identity-tracks.json",
              "contactEvents": "fixtures/temporal/crowded-memory-contacts.json",
              "driftCurve": [
                8.2,
                16.5,
                24.8,
                33.0
              ],
              "rolloutPlausibility": 80.0
            },
            "metrics": {
              "readiness": 75.9,
              "identityStability": 73.8,
              "contactConsistency": 79.4,
              "rolloutPlausibility": 80.0,
              "drift": 33.0,
              "memoryLoad": 43.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "contact-heavy",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 56,
                "identityDensity": 52,
                "physicsViolations": 20,
                "memoryWindow": 82
              },
              "asset": "fixtures/temporal/contact-heavy.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/contact-heavy-identity-tracks.json",
              "contactEvents": "fixtures/temporal/contact-heavy-contacts.json",
              "driftCurve": [
                8.6,
                17.1,
                25.7,
                34.3
              ],
              "rolloutPlausibility": 77.1
            },
            "metrics": {
              "readiness": 76.2,
              "identityStability": 74.0,
              "contactConsistency": 83.6,
              "rolloutPlausibility": 77.1,
              "drift": 34.3,
              "memoryLoad": 42.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "long-rollout-drift",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 66,
                "identityDensity": 68,
                "physicsViolations": 12,
                "memoryWindow": 92
              },
              "asset": "fixtures/temporal/long-rollout-drift.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/long-rollout-drift-identity-tracks.json",
              "contactEvents": "fixtures/temporal/long-rollout-drift-contacts.json",
              "driftCurve": [
                9.0,
                18.1,
                27.1,
                36.1
              ],
              "rolloutPlausibility": 75.5
            },
            "metrics": {
              "readiness": 75.9,
              "identityStability": 72.7,
              "contactConsistency": 86.5,
              "rolloutPlausibility": 75.5,
              "drift": 36.1,
              "memoryLoad": 48.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
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
          },
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
          },
          {
            "jobId": "constraint-generation",
            "caseId": "light-layout-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 24,
                "layoutLock": 78,
                "identityLock": 82,
                "adversarialPromptPressure": 18
              },
              "asset": "fixtures/generation/light-layout-edit.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/light-layout-edit-edited.png",
              "layoutMask": "fixtures/generation/light-layout-edit-layout-mask.png",
              "identityEmbeddingDelta": 18.5,
              "rewardTrace": "fixtures/generation/light-layout-edit-reward.json"
            },
            "metrics": {
              "readiness": 84.9,
              "editPressure": 21.0,
              "constraintSatisfaction": 86.1,
              "identityPreservation": 85.0,
              "editLocality": 82.8,
              "rewardAlignment": 87.3,
              "identityDamage": 18.5,
              "provenanceRisk": 17.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "style-with-locks",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 52,
                "layoutLock": 68,
                "identityLock": 80,
                "adversarialPromptPressure": 32
              },
              "asset": "fixtures/generation/style-with-locks.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/style-with-locks-edited.png",
              "layoutMask": "fixtures/generation/style-with-locks-layout-mask.png",
              "identityEmbeddingDelta": 31.8,
              "rewardTrace": "fixtures/generation/style-with-locks-reward.json"
            },
            "metrics": {
              "readiness": 77.4,
              "editPressure": 39.2,
              "constraintSatisfaction": 80.9,
              "identityPreservation": 77.3,
              "editLocality": 74.4,
              "rewardAlignment": 81.3,
              "identityDamage": 31.8,
              "provenanceRisk": 29.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "layout-rewrite",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 72,
                "layoutLock": 62,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "fixtures/generation/layout-rewrite.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/layout-rewrite-edited.png",
              "layoutMask": "fixtures/generation/layout-rewrite-layout-mask.png",
              "identityEmbeddingDelta": 33.1,
              "rewardTrace": "fixtures/generation/layout-rewrite-reward.json"
            },
            "metrics": {
              "readiness": 77.5,
              "editPressure": 45.7,
              "constraintSatisfaction": 81.1,
              "identityPreservation": 78.4,
              "editLocality": 72.9,
              "rewardAlignment": 82.4,
              "identityDamage": 33.1,
              "provenanceRisk": 29.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "prompt-attack-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 78,
                "layoutLock": 66,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "fixtures/generation/prompt-attack-edit.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/prompt-attack-edit-edited.png",
              "layoutMask": "fixtures/generation/prompt-attack-edit-layout-mask.png",
              "identityEmbeddingDelta": 34.8,
              "rewardTrace": "fixtures/generation/prompt-attack-edit-reward.json"
            },
            "metrics": {
              "readiness": 77.6,
              "editPressure": 47.7,
              "constraintSatisfaction": 82.3,
              "identityPreservation": 77.3,
              "editLocality": 73.6,
              "rewardAlignment": 82.5,
              "identityDamage": 34.8,
              "provenanceRisk": 30.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "urban-cut-in",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/urban-cut-in.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/urban-cut-in-grounding.png",
              "timeToCollision": 5.15,
              "riskTrace": "fixtures/driving/urban-cut-in-risk.json",
              "ruleViolations": 24.0
            },
            "metrics": {
              "readiness": 68.1,
              "sceneGrounding": 85.7,
              "timeToCollision": 5.15,
              "risk": 33.4,
              "ruleViolation": 24.0,
              "abstention": 7.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "night-crosswalk",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/night-crosswalk.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/night-crosswalk-grounding.png",
              "timeToCollision": 5.73,
              "riskTrace": "fixtures/driving/night-crosswalk-risk.json",
              "ruleViolations": 23.5
            },
            "metrics": {
              "readiness": 68.2,
              "sceneGrounding": 84.2,
              "timeToCollision": 5.73,
              "risk": 31.7,
              "ruleViolation": 23.5,
              "abstention": 7.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "highway-merge",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/highway-merge.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/highway-merge-grounding.png",
              "timeToCollision": 4.34,
              "riskTrace": "fixtures/driving/highway-merge-risk.json",
              "ruleViolations": 24.1
            },
            "metrics": {
              "readiness": 68.2,
              "sceneGrounding": 87.3,
              "timeToCollision": 4.34,
              "risk": 34.6,
              "ruleViolation": 24.1,
              "abstention": 7.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "construction-zone",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/construction-zone.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/construction-zone-grounding.png",
              "timeToCollision": 5.82,
              "riskTrace": "fixtures/driving/construction-zone-risk.json",
              "ruleViolations": 23.7
            },
            "metrics": {
              "readiness": 68.2,
              "sceneGrounding": 83.9,
              "timeToCollision": 5.82,
              "risk": 31.9,
              "ruleViolation": 23.7,
              "abstention": 9.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "wide-baseline",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 82,
                "textureSparsity": 18,
                "scaleAmbiguity": 24,
                "surfaceComplexity": 42
              },
              "asset": "fixtures/geometry/wide-baseline.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/wide-baseline-pose-graph.json",
              "scaleTrace": "fixtures/geometry/wide-baseline-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/wide-baseline-surface-residual.png",
              "topologyWarnings": 13.9
            },
            "metrics": {
              "readiness": 85.8,
              "poseEvidence": 87.0,
              "metricEvidence": 86.9,
              "surfaceConsistency": 83.1,
              "scaleDrift": 10.1,
              "topologyRisk": 13.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "scale-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 66,
                "textureSparsity": 28,
                "scaleAmbiguity": 44,
                "surfaceComplexity": 46
              },
              "asset": "fixtures/geometry/scale-transfer.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/scale-transfer-pose-graph.json",
              "scaleTrace": "fixtures/geometry/scale-transfer-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/scale-transfer-surface-residual.png",
              "topologyWarnings": 21.0
            },
            "metrics": {
              "readiness": 78.7,
              "poseEvidence": 79.2,
              "metricEvidence": 78.8,
              "surfaceConsistency": 78.4,
              "scaleDrift": 21.5,
              "topologyRisk": 21.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "thin-structure",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 58,
                "textureSparsity": 34,
                "scaleAmbiguity": 32,
                "surfaceComplexity": 72
              },
              "asset": "fixtures/geometry/thin-structure.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/thin-structure-pose-graph.json",
              "scaleTrace": "fixtures/geometry/thin-structure-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/thin-structure-surface-residual.png",
              "topologyWarnings": 30.0
            },
            "metrics": {
              "readiness": 75.5,
              "poseEvidence": 76.8,
              "metricEvidence": 80.4,
              "surfaceConsistency": 72.5,
              "scaleDrift": 22.7,
              "topologyRisk": 30.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "low-texture-indoor",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 54,
                "textureSparsity": 58,
                "scaleAmbiguity": 48,
                "surfaceComplexity": 50
              },
              "asset": "fixtures/geometry/low-texture-indoor.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/low-texture-indoor-pose-graph.json",
              "scaleTrace": "fixtures/geometry/low-texture-indoor-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/low-texture-indoor-surface-residual.png",
              "topologyWarnings": 30.0
            },
            "metrics": {
              "readiness": 72.0,
              "poseEvidence": 70.1,
              "metricEvidence": 74.7,
              "surfaceConsistency": 72.2,
              "scaleDrift": 29.9,
              "topologyRisk": 30.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "dense-novel-view",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 86,
                "splatDensity": 78,
                "semanticEntropy": 24,
                "provenanceVisibility": 70
              },
              "asset": "fixtures/splats/dense-novel-view.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/dense-novel-view-renders/",
              "semanticSplatMap": "fixtures/splats/dense-novel-view-semantic-map.json",
              "provenanceTrace": "fixtures/splats/dense-novel-view-provenance.json",
              "editLeakageReport": 16.7
            },
            "metrics": {
              "readiness": 85.6,
              "renderFidelity": 86.6,
              "semanticAttachment": 86.4,
              "provenanceTrace": 85.5,
              "viewInstability": 9.4,
              "editLeakageRisk": 16.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "semantic-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 74,
                "splatDensity": 72,
                "semanticEntropy": 34,
                "provenanceVisibility": 76
              },
              "asset": "fixtures/splats/semantic-edit.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/semantic-edit-renders/",
              "semanticSplatMap": "fixtures/splats/semantic-edit-semantic-map.json",
              "provenanceTrace": "fixtures/splats/semantic-edit-provenance.json",
              "editLeakageReport": 21.4
            },
            "metrics": {
              "readiness": 82.2,
              "renderFidelity": 81.5,
              "semanticAttachment": 82.4,
              "provenanceTrace": 86.1,
              "viewInstability": 15.7,
              "editLeakageRisk": 21.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "provenance-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 68,
                "splatDensity": 70,
                "semanticEntropy": 42,
                "provenanceVisibility": 84
              },
              "asset": "fixtures/splats/provenance-transfer.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/provenance-transfer-renders/",
              "semanticSplatMap": "fixtures/splats/provenance-transfer-semantic-map.json",
              "provenanceTrace": "fixtures/splats/provenance-transfer-provenance.json",
              "editLeakageReport": 24.3
            },
            "metrics": {
              "readiness": 80.5,
              "renderFidelity": 78.9,
              "semanticAttachment": 79.8,
              "provenanceTrace": 87.7,
              "viewInstability": 18.8,
              "editLeakageRisk": 24.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "sparse-capture",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 62,
                "splatDensity": 66,
                "semanticEntropy": 46,
                "provenanceVisibility": 72
              },
              "asset": "fixtures/splats/sparse-capture.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/sparse-capture-renders/",
              "semanticSplatMap": "fixtures/splats/sparse-capture-semantic-map.json",
              "provenanceTrace": "fixtures/splats/sparse-capture-provenance.json",
              "editLeakageReport": 27.4
            },
            "metrics": {
              "readiness": 77.7,
              "renderFidelity": 76.2,
              "semanticAttachment": 77.8,
              "provenanceTrace": 83.8,
              "viewInstability": 23.2,
              "editLeakageRisk": 27.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          }
        ]
      },
      "importReport": {
        "summary": {
          "validator": "validate_cvpr_colab_results",
          "runtimePlane": "google-colab-pro-plus",
          "expectedMode": "cached-real",
          "jobs": 10,
          "expectedResults": 40,
          "actualResults": 40,
          "validJobs": 10,
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
        "jobs": 10,
        "expectedResults": 40,
        "actualResults": 40,
        "validJobs": 10,
        "issues": 0,
        "status": "valid",
        "intake": "cvpr-colab-live-intake",
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
        "jobs": 10,
        "expectedResults": 40,
        "actualResults": 40,
        "validJobs": 10,
        "issues": 0,
        "status": "valid",
        "intake": "cvpr-colab-live-intake",
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
        "cases": 40,
        "jobs": 10,
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
          "readinessBefore": 80.8,
          "readinessAfter": 80.8,
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
          "readinessBefore": 79.7,
          "readinessAfter": 79.7,
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
          "readinessBefore": 79.8,
          "readinessAfter": 79.8,
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
          "readinessBefore": 79.9,
          "readinessAfter": 79.9,
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
          "caseId": "external-hospital",
          "readinessBefore": 77.1,
          "readinessAfter": 77.1,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "clinicalEvidence": 0.0,
            "domainEvidence": 0.0,
            "readiness": 0.0,
            "residualRisk": 0.0,
            "shiftLoad": 0.0,
            "triageRate": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "clinical-shift",
          "caseId": "new-scanner",
          "readinessBefore": 80.5,
          "readinessAfter": 80.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "clinicalEvidence": 0.0,
            "domainEvidence": 0.0,
            "readiness": 0.0,
            "residualRisk": 0.0,
            "shiftLoad": 0.0,
            "triageRate": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "clinical-shift",
          "caseId": "noisy-rare-cohort",
          "readinessBefore": 72.5,
          "readinessAfter": 72.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "clinicalEvidence": 0.0,
            "domainEvidence": 0.0,
            "readiness": 0.0,
            "residualRisk": 0.0,
            "shiftLoad": 0.0,
            "triageRate": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "clinical-shift",
          "caseId": "same-site-clean",
          "readinessBefore": 88.5,
          "readinessAfter": 88.5,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "calibration": 0.0,
            "clinicalEvidence": 0.0,
            "domainEvidence": 0.0,
            "readiness": 0.0,
            "residualRisk": 0.0,
            "shiftLoad": 0.0,
            "triageRate": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "compute-serving",
          "caseId": "desktop-batch",
          "readinessBefore": 76.6,
          "readinessAfter": 76.6,
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
          "readinessBefore": 73.5,
          "readinessAfter": 73.5,
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
          "readinessBefore": 74.6,
          "readinessAfter": 74.6,
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
          "readinessBefore": 74.6,
          "readinessAfter": 74.6,
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
          "readinessBefore": 77.5,
          "readinessAfter": 77.5,
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
          "readinessBefore": 84.9,
          "readinessAfter": 84.9,
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
          "readinessBefore": 77.6,
          "readinessAfter": 77.6,
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
          "readinessBefore": 77.4,
          "readinessAfter": 77.4,
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
          "jobId": "driving-safety",
          "caseId": "construction-zone",
          "readinessBefore": 68.2,
          "readinessAfter": 68.2,
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
          "readinessBefore": 68.2,
          "readinessAfter": 68.2,
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
          "readinessBefore": 68.2,
          "readinessAfter": 68.2,
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
          "readinessBefore": 68.1,
          "readinessAfter": 68.1,
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
          "readinessBefore": 85.6,
          "readinessAfter": 85.6,
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
          "readinessBefore": 80.5,
          "readinessAfter": 80.5,
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
          "readinessBefore": 82.2,
          "readinessAfter": 82.2,
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
          "readinessBefore": 77.7,
          "readinessAfter": 77.7,
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
          "readinessBefore": 72.0,
          "readinessAfter": 72.0,
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
          "readinessBefore": 78.7,
          "readinessAfter": 78.7,
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
          "readinessBefore": 75.5,
          "readinessAfter": 75.5,
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
          "readinessBefore": 85.8,
          "readinessAfter": 85.8,
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
          "readinessBefore": 84.7,
          "readinessAfter": 84.7,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "readiness": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-distractors",
          "readinessBefore": 83.8,
          "readinessAfter": 83.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "readiness": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "rare-visible",
          "readinessBefore": 83.9,
          "readinessAfter": 83.9,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "readiness": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "open-vocab-grounding",
          "caseId": "unsupported-query",
          "readinessBefore": 83.8,
          "readinessAfter": 83.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
            "localizedEvidence": 0.0,
            "readiness": 0.0,
            "unsupportedRisk": 0.0
          },
          "promotedFrom": "live-colab",
          "regression": false
        },
        {
          "jobId": "restoration-fidelity",
          "caseId": "compressed-low-light",
          "readinessBefore": 77.7,
          "readinessAfter": 77.7,
          "readinessDelta": 0.0,
          "metricDeltas": {
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
          "readinessBefore": 82.0,
          "readinessAfter": 82.0,
          "readinessDelta": 0.0,
          "metricDeltas": {
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
          "readinessBefore": 77.7,
          "readinessAfter": 77.7,
          "readinessDelta": 0.0,
          "metricDeltas": {
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
          "readinessBefore": 77.8,
          "readinessAfter": 77.8,
          "readinessDelta": 0.0,
          "metricDeltas": {
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
          "readinessBefore": 76.2,
          "readinessAfter": 76.2,
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
          "readinessBefore": 75.9,
          "readinessAfter": 75.9,
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
          "readinessBefore": 75.9,
          "readinessAfter": 75.9,
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
          "readinessBefore": 83.3,
          "readinessAfter": 83.3,
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
        "workerJobs": 10,
        "promotedRunners": 10,
        "runnerRows": 10,
        "cachedResults": 40,
        "importIssues": 0,
        "fullStackStatus": "valid",
        "packageTests": 148,
        "validationGate": "release",
        "liveIntakeStatus": "valid",
        "liveIntakeResults": 40,
        "liveIntakePromoted": false,
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
        "jobs": 10,
        "liveCapable": 10,
        "promotedRunners": 10,
        "cachedCapable": 10,
        "cachedResults": 40,
        "validCachedResults": 40,
        "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
      "importReport": {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": "google-colab-pro-plus",
        "expectedMode": "cached-real",
        "jobs": 10,
        "expectedResults": 40,
        "actualResults": 40,
        "validJobs": 10,
        "issues": 0,
        "status": "valid"
      },
      "fullStack": {
        "validator": "validate_cvpr_full_stack",
        "status": "valid",
        "commands": 286,
        "steps": 59,
        "packageTests": 148,
        "workerJobs": 10,
        "promotedRunners": 10,
        "cachedResults": 40,
        "importIssues": 0,
        "durationSec": 30.405
      },
      "validationCenter": {
        "dashboard": "cvpr-validation-center",
        "status": "interactive",
        "gateStatus": "release",
        "fullStackStatus": "valid",
        "commands": 286,
        "steps": 53,
        "packageTests": 148,
        "workerJobs": 10,
        "promotedRunners": 10,
        "cachedResults": 40,
        "importIssues": 0,
        "promotionDeltaStatus": "release",
        "promotionRegressions": 0,
        "maxReadinessDrop": 0.0,
        "validImportJobs": 10,
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
            "durationSec": 27.556,
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
            "command": "python3 scripts/validate_cvpr_colab_results.py",
            "returnCode": 0,
            "durationSec": 0.079,
            "stdoutTail": [
              "validated CVPR Colab results: 40 results, 0 issues"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
            "returnCode": 0,
            "durationSec": 0.077,
            "stdoutTail": [
              "wrote cvpr-colab-handoff-package.html: 10 jobs, 8 zip entries"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_systems_lab.py",
            "returnCode": 0,
            "durationSec": 0.063,
            "stdoutTail": [
              "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
            "returnCode": 0,
            "durationSec": 0.062,
            "stdoutTail": [
              "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 87.1"
            ],
            "stderrTail": []
          }
        ]
      },
      "liveIntake": {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": "google-colab-pro-plus",
        "expectedMode": "live-colab",
        "jobs": 10,
        "expectedResults": 40,
        "actualResults": 40,
        "validJobs": 10,
        "issues": 0,
        "status": "valid",
        "intake": "cvpr-colab-live-intake",
        "export": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
        "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
        "promoted": false
      },
      "promotionDelta": {
        "delta": "cvpr-colab-promotion-delta",
        "status": "release",
        "cases": 40,
        "jobs": 10,
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
        "cachedResults": 40,
        "liveIntakeResults": 40,
        "promotionResults": 40,
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
          "jobs": 10,
          "liveCapable": 10,
          "promotedRunners": 10,
          "cachedCapable": 10,
          "cachedResults": 40,
          "validCachedResults": 40,
          "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
              "jobId": "metric-geometry",
              "bench": "cvpr-metric-geometry-bench",
              "page": "cvpr-metric-geometry-bench.html",
              "priority": 9,
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
              "priority": 10,
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
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "common clean object",
              "controls": {
                "queryRarity": 18,
                "distractorOverlap": 16,
                "boxAmbiguity": 18,
                "evidenceThreshold": 54
              },
              "asset": "fixtures/open-vocab/common-clean.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.828
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.917
                }
              ],
              "regionScores": {
                "target": 84.7,
                "longTail": 71.7
              },
              "localizedEvidence": 88.9
            },
            "metrics": {
              "readiness": 84.7,
              "localizedEvidence": 88.9,
              "unsupportedRisk": 8.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-visible",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "rare visible object",
              "controls": {
                "queryRarity": 66,
                "distractorOverlap": 12,
                "boxAmbiguity": 34,
                "evidenceThreshold": 62
              },
              "asset": "fixtures/open-vocab/rare-visible.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.768
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.837
                }
              ],
              "regionScores": {
                "target": 85.0,
                "longTail": 76.9
              },
              "localizedEvidence": 87.7
            },
            "metrics": {
              "readiness": 83.9,
              "localizedEvidence": 87.7,
              "unsupportedRisk": 16.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-distractors",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "rare object with distractors",
              "controls": {
                "queryRarity": 78,
                "distractorOverlap": 28,
                "boxAmbiguity": 28,
                "evidenceThreshold": 76
              },
              "asset": "fixtures/open-vocab/rare-distractors.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.76
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.81
                }
              ],
              "regionScores": {
                "target": 83.6,
                "longTail": 81.4
              },
              "localizedEvidence": 87.1
            },
            "metrics": {
              "readiness": 83.8,
              "localizedEvidence": 87.1,
              "unsupportedRisk": 19.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "unsupported-query",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "embedding": "siglip-base-patch16-224",
              "detector": "grounding-dino-tiny",
              "segmenter": "sam-vit-b"
            },
            "inputs": {
              "textQuery": "unsupported text query",
              "controls": {
                "queryRarity": 82,
                "distractorOverlap": 30,
                "boxAmbiguity": 32,
                "evidenceThreshold": 84
              },
              "asset": "fixtures/open-vocab/unsupported-query.png"
            },
            "outputs": {
              "boxes": [
                {
                  "label": "target",
                  "xywh": [
                    0.18,
                    0.22,
                    0.26,
                    0.24
                  ],
                  "score": 0.753
                },
                {
                  "label": "distractor",
                  "xywh": [
                    0.56,
                    0.26,
                    0.21,
                    0.2
                  ],
                  "score": 0.799
                }
              ],
              "regionScores": {
                "target": 84.0,
                "longTail": 82.1
              },
              "localizedEvidence": 87.1
            },
            "metrics": {
              "readiness": 83.8,
              "localizedEvidence": 87.1,
              "unsupportedRisk": 20.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-long-tail-grounding-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "mild-noise",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 18,
                "noise": 24,
                "compression": 18,
                "lowLight": 20,
                "hallucinationPenalty": 36
              },
              "asset": "fixtures/restoration/mild-noise.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/mild-noise-restored.png",
              "artifactMap": "fixtures/restoration/mild-noise-artifact-map.png",
              "downstreamScore": 85.3,
              "fidelityScore": 82.2
            },
            "metrics": {
              "readiness": 82.0,
              "downstreamUtility": 85.3,
              "fabricatedDetailRisk": 25.8,
              "fidelityScore": 82.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "compressed-low-light",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 32,
                "noise": 38,
                "compression": 54,
                "lowLight": 64,
                "hallucinationPenalty": 16
              },
              "asset": "fixtures/restoration/compressed-low-light.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/compressed-low-light-restored.png",
              "artifactMap": "fixtures/restoration/compressed-low-light-artifact-map.png",
              "downstreamScore": 80.9,
              "fidelityScore": 80.3
            },
            "metrics": {
              "readiness": 77.7,
              "downstreamUtility": 80.9,
              "fabricatedDetailRisk": 29.4,
              "fidelityScore": 80.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "motion-blur-task",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 64,
                "noise": 36,
                "compression": 38,
                "lowLight": 36,
                "hallucinationPenalty": 16
              },
              "asset": "fixtures/restoration/motion-blur-task.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/motion-blur-task-restored.png",
              "artifactMap": "fixtures/restoration/motion-blur-task-artifact-map.png",
              "downstreamScore": 81.5,
              "fidelityScore": 79.0
            },
            "metrics": {
              "readiness": 77.7,
              "downstreamUtility": 81.5,
              "fabricatedDetailRisk": 26.5,
              "fidelityScore": 79.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "over-restored-detail",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "restorer": "swinir-lightweight",
              "artifactProbe": "real-esrgan-x2"
            },
            "inputs": {
              "degradationControls": {
                "blur": 48,
                "noise": 54,
                "compression": 38,
                "lowLight": 56,
                "hallucinationPenalty": 18
              },
              "asset": "fixtures/restoration/over-restored-detail.png"
            },
            "outputs": {
              "restoredImage": "fixtures/restoration/over-restored-detail-restored.png",
              "artifactMap": "fixtures/restoration/over-restored-detail-artifact-map.png",
              "downstreamScore": 81.2,
              "fidelityScore": 80.1
            },
            "metrics": {
              "readiness": 77.8,
              "downstreamUtility": 81.2,
              "fabricatedDetailRisk": 28.6,
              "fidelityScore": 80.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-restoration-fidelity-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "clean-camera",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 56,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "fixtures/adversarial/clean-camera.png"
            },
            "outputs": {
              "provenanceConfidence": 86.4,
              "attackHeatmap": "fixtures/adversarial/clean-camera-attack-heatmap.png",
              "leakageRisk": 9.0,
              "evidence": 82.5
            },
            "metrics": {
              "readiness": 79.7,
              "evidence": 82.5,
              "risk": 17.9,
              "leakageRisk": 9.0,
              "provenanceConfidence": 86.4,
              "attackCoverage": 44.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "edited-social-post",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 64,
                "watermarkVisibility": 98,
                "unlearningProbe": 10
              },
              "asset": "fixtures/adversarial/edited-social-post.png"
            },
            "outputs": {
              "provenanceConfidence": 87.9,
              "attackHeatmap": "fixtures/adversarial/edited-social-post-attack-heatmap.png",
              "leakageRisk": 14.8,
              "evidence": 82.9
            },
            "metrics": {
              "readiness": 79.8,
              "evidence": 82.9,
              "risk": 21.0,
              "leakageRisk": 14.8,
              "provenanceConfidence": 87.9,
              "attackCoverage": 47.2
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "synthetic-watermarked",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 0,
                "generationSource": 84,
                "watermarkVisibility": 94,
                "unlearningProbe": 44
              },
              "asset": "fixtures/adversarial/synthetic-watermarked.png"
            },
            "outputs": {
              "provenanceConfidence": 92.0,
              "attackHeatmap": "fixtures/adversarial/synthetic-watermarked-attack-heatmap.png",
              "leakageRisk": 32.9,
              "evidence": 83.6
            },
            "metrics": {
              "readiness": 79.9,
              "evidence": 83.6,
              "risk": 29.9,
              "leakageRisk": 32.9,
              "provenanceConfidence": 92.0,
              "attackCoverage": 54.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "adversarial-provenance",
            "caseId": "adaptive-attack",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "detector": "watermark-detector",
              "probe": "clip-perturbation-probe"
            },
            "inputs": {
              "attackControls": {
                "attackStrength": 12,
                "generationSource": 89,
                "watermarkVisibility": 100,
                "unlearningProbe": 0
              },
              "asset": "fixtures/adversarial/adaptive-attack.png"
            },
            "outputs": {
              "provenanceConfidence": 93.8,
              "attackHeatmap": "fixtures/adversarial/adaptive-attack-attack-heatmap.png",
              "leakageRisk": 17.4,
              "evidence": 85.3
            },
            "metrics": {
              "readiness": 80.8,
              "evidence": 85.3,
              "risk": 30.3,
              "leakageRisk": 17.4,
              "provenanceConfidence": 93.8,
              "attackCoverage": 52.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-adversarial-provenance-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "short-stable",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 24,
                "identityDensity": 28,
                "physicsViolations": 14,
                "memoryWindow": 72
              },
              "asset": "fixtures/temporal/short-stable.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/short-stable-identity-tracks.json",
              "contactEvents": "fixtures/temporal/short-stable-contacts.json",
              "driftCurve": [
                5.2,
                10.5,
                15.8,
                21.0
              ],
              "rolloutPlausibility": 85.7
            },
            "metrics": {
              "readiness": 83.3,
              "identityStability": 80.6,
              "contactConsistency": 86.6,
              "rolloutPlausibility": 85.7,
              "drift": 21.0,
              "memoryLoad": 26.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "crowded-memory",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 36,
                "identityDensity": 76,
                "physicsViolations": 26,
                "memoryWindow": 82
              },
              "asset": "fixtures/temporal/crowded-memory.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/crowded-memory-identity-tracks.json",
              "contactEvents": "fixtures/temporal/crowded-memory-contacts.json",
              "driftCurve": [
                8.2,
                16.5,
                24.8,
                33.0
              ],
              "rolloutPlausibility": 80.0
            },
            "metrics": {
              "readiness": 75.9,
              "identityStability": 73.8,
              "contactConsistency": 79.4,
              "rolloutPlausibility": 80.0,
              "drift": 33.0,
              "memoryLoad": 43.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "contact-heavy",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 56,
                "identityDensity": 52,
                "physicsViolations": 20,
                "memoryWindow": 82
              },
              "asset": "fixtures/temporal/contact-heavy.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/contact-heavy-identity-tracks.json",
              "contactEvents": "fixtures/temporal/contact-heavy-contacts.json",
              "driftCurve": [
                8.6,
                17.1,
                25.7,
                34.3
              ],
              "rolloutPlausibility": 77.1
            },
            "metrics": {
              "readiness": 76.2,
              "identityStability": 74.0,
              "contactConsistency": 83.6,
              "rolloutPlausibility": 77.1,
              "drift": 34.3,
              "memoryLoad": 42.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
          {
            "jobId": "temporal-rollout",
            "caseId": "long-rollout-drift",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "tracker": "video-feature-tracker",
              "flow": "raft-lite",
              "rolloutProbe": "world-rollout-probe"
            },
            "inputs": {
              "trackingControls": {
                "rolloutLength": 66,
                "identityDensity": 68,
                "physicsViolations": 12,
                "memoryWindow": 92
              },
              "asset": "fixtures/temporal/long-rollout-drift.mp4"
            },
            "outputs": {
              "identityTracks": "fixtures/temporal/long-rollout-drift-identity-tracks.json",
              "contactEvents": "fixtures/temporal/long-rollout-drift-contacts.json",
              "driftCurve": [
                9.0,
                18.1,
                27.1,
                36.1
              ],
              "rolloutPlausibility": 75.5
            },
            "metrics": {
              "readiness": 75.9,
              "identityStability": 72.7,
              "contactConsistency": 86.5,
              "rolloutPlausibility": 75.5,
              "drift": 36.1,
              "memoryLoad": 48.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-temporal-rollout-bench"
            }
          },
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
          },
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
          },
          {
            "jobId": "constraint-generation",
            "caseId": "light-layout-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 24,
                "layoutLock": 78,
                "identityLock": 82,
                "adversarialPromptPressure": 18
              },
              "asset": "fixtures/generation/light-layout-edit.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/light-layout-edit-edited.png",
              "layoutMask": "fixtures/generation/light-layout-edit-layout-mask.png",
              "identityEmbeddingDelta": 18.5,
              "rewardTrace": "fixtures/generation/light-layout-edit-reward.json"
            },
            "metrics": {
              "readiness": 84.9,
              "editPressure": 21.0,
              "constraintSatisfaction": 86.1,
              "identityPreservation": 85.0,
              "editLocality": 82.8,
              "rewardAlignment": 87.3,
              "identityDamage": 18.5,
              "provenanceRisk": 17.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "style-with-locks",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 52,
                "layoutLock": 68,
                "identityLock": 80,
                "adversarialPromptPressure": 32
              },
              "asset": "fixtures/generation/style-with-locks.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/style-with-locks-edited.png",
              "layoutMask": "fixtures/generation/style-with-locks-layout-mask.png",
              "identityEmbeddingDelta": 31.8,
              "rewardTrace": "fixtures/generation/style-with-locks-reward.json"
            },
            "metrics": {
              "readiness": 77.4,
              "editPressure": 39.2,
              "constraintSatisfaction": 80.9,
              "identityPreservation": 77.3,
              "editLocality": 74.4,
              "rewardAlignment": 81.3,
              "identityDamage": 31.8,
              "provenanceRisk": 29.5
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "layout-rewrite",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 72,
                "layoutLock": 62,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "fixtures/generation/layout-rewrite.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/layout-rewrite-edited.png",
              "layoutMask": "fixtures/generation/layout-rewrite-layout-mask.png",
              "identityEmbeddingDelta": 33.1,
              "rewardTrace": "fixtures/generation/layout-rewrite-reward.json"
            },
            "metrics": {
              "readiness": 77.5,
              "editPressure": 45.7,
              "constraintSatisfaction": 81.1,
              "identityPreservation": 78.4,
              "editLocality": 72.9,
              "rewardAlignment": 82.4,
              "identityDamage": 33.1,
              "provenanceRisk": 29.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "constraint-generation",
            "caseId": "prompt-attack-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "layout": "layout-controlnet",
              "identity": "identity-embedding-lock",
              "reward": "preference-reward-probe"
            },
            "inputs": {
              "generationControls": {
                "editStrength": 78,
                "layoutLock": 66,
                "identityLock": 92,
                "adversarialPromptPressure": 28
              },
              "asset": "fixtures/generation/prompt-attack-edit.png"
            },
            "outputs": {
              "editedImage": "fixtures/generation/prompt-attack-edit-edited.png",
              "layoutMask": "fixtures/generation/prompt-attack-edit-layout-mask.png",
              "identityEmbeddingDelta": 34.8,
              "rewardTrace": "fixtures/generation/prompt-attack-edit-reward.json"
            },
            "metrics": {
              "readiness": 77.6,
              "editPressure": 47.7,
              "constraintSatisfaction": 82.3,
              "identityPreservation": 77.3,
              "editLocality": 73.6,
              "rewardAlignment": 82.5,
              "identityDamage": 34.8,
              "provenanceRisk": 30.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-constraint-generation-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "urban-cut-in",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/urban-cut-in.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/urban-cut-in-grounding.png",
              "timeToCollision": 5.15,
              "riskTrace": "fixtures/driving/urban-cut-in-risk.json",
              "ruleViolations": 24.0
            },
            "metrics": {
              "readiness": 68.1,
              "sceneGrounding": 85.7,
              "timeToCollision": 5.15,
              "risk": 33.4,
              "ruleViolation": 24.0,
              "abstention": 7.6
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "night-crosswalk",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/night-crosswalk.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/night-crosswalk-grounding.png",
              "timeToCollision": 5.73,
              "riskTrace": "fixtures/driving/night-crosswalk-risk.json",
              "ruleViolations": 23.5
            },
            "metrics": {
              "readiness": 68.2,
              "sceneGrounding": 84.2,
              "timeToCollision": 5.73,
              "risk": 31.7,
              "ruleViolation": 23.5,
              "abstention": 7.8
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "highway-merge",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/highway-merge.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/highway-merge-grounding.png",
              "timeToCollision": 4.34,
              "riskTrace": "fixtures/driving/highway-merge-risk.json",
              "ruleViolations": 24.1
            },
            "metrics": {
              "readiness": 68.2,
              "sceneGrounding": 87.3,
              "timeToCollision": 4.34,
              "risk": 34.6,
              "ruleViolation": 24.1,
              "abstention": 7.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "driving-safety",
            "caseId": "construction-zone",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "grounder": "vla-scene-grounder",
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
              "asset": "fixtures/driving/construction-zone.mp4"
            },
            "outputs": {
              "sceneGroundingMap": "fixtures/driving/construction-zone-grounding.png",
              "timeToCollision": 5.82,
              "riskTrace": "fixtures/driving/construction-zone-risk.json",
              "ruleViolations": 23.7
            },
            "metrics": {
              "readiness": 68.2,
              "sceneGrounding": 83.9,
              "timeToCollision": 5.82,
              "risk": 31.9,
              "ruleViolation": 23.7,
              "abstention": 9.1
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-driving-safety-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "wide-baseline",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 82,
                "textureSparsity": 18,
                "scaleAmbiguity": 24,
                "surfaceComplexity": 42
              },
              "asset": "fixtures/geometry/wide-baseline.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/wide-baseline-pose-graph.json",
              "scaleTrace": "fixtures/geometry/wide-baseline-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/wide-baseline-surface-residual.png",
              "topologyWarnings": 13.9
            },
            "metrics": {
              "readiness": 85.8,
              "poseEvidence": 87.0,
              "metricEvidence": 86.9,
              "surfaceConsistency": 83.1,
              "scaleDrift": 10.1,
              "topologyRisk": 13.9
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "scale-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 66,
                "textureSparsity": 28,
                "scaleAmbiguity": 44,
                "surfaceComplexity": 46
              },
              "asset": "fixtures/geometry/scale-transfer.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/scale-transfer-pose-graph.json",
              "scaleTrace": "fixtures/geometry/scale-transfer-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/scale-transfer-surface-residual.png",
              "topologyWarnings": 21.0
            },
            "metrics": {
              "readiness": 78.7,
              "poseEvidence": 79.2,
              "metricEvidence": 78.8,
              "surfaceConsistency": 78.4,
              "scaleDrift": 21.5,
              "topologyRisk": 21.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "thin-structure",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 58,
                "textureSparsity": 34,
                "scaleAmbiguity": 32,
                "surfaceComplexity": 72
              },
              "asset": "fixtures/geometry/thin-structure.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/thin-structure-pose-graph.json",
              "scaleTrace": "fixtures/geometry/thin-structure-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/thin-structure-surface-residual.png",
              "topologyWarnings": 30.0
            },
            "metrics": {
              "readiness": 75.5,
              "poseEvidence": 76.8,
              "metricEvidence": 80.4,
              "surfaceConsistency": 72.5,
              "scaleDrift": 22.7,
              "topologyRisk": 30.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "metric-geometry",
            "caseId": "low-texture-indoor",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "pose": "torch-pose-bundle-adjuster",
              "scale": "metric-scale-probe",
              "surface": "surface-consistency-head"
            },
            "inputs": {
              "geometryControls": {
                "baseline": 54,
                "textureSparsity": 58,
                "scaleAmbiguity": 48,
                "surfaceComplexity": 50
              },
              "asset": "fixtures/geometry/low-texture-indoor.json"
            },
            "outputs": {
              "poseGraph": "fixtures/geometry/low-texture-indoor-pose-graph.json",
              "scaleTrace": "fixtures/geometry/low-texture-indoor-scale-trace.json",
              "surfaceResidualMap": "fixtures/geometry/low-texture-indoor-surface-residual.png",
              "topologyWarnings": 30.0
            },
            "metrics": {
              "readiness": 72.0,
              "poseEvidence": 70.1,
              "metricEvidence": 74.7,
              "surfaceConsistency": 72.2,
              "scaleDrift": 29.9,
              "topologyRisk": 30.0
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-metric-geometry-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "dense-novel-view",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 86,
                "splatDensity": 78,
                "semanticEntropy": 24,
                "provenanceVisibility": 70
              },
              "asset": "fixtures/splats/dense-novel-view.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/dense-novel-view-renders/",
              "semanticSplatMap": "fixtures/splats/dense-novel-view-semantic-map.json",
              "provenanceTrace": "fixtures/splats/dense-novel-view-provenance.json",
              "editLeakageReport": 16.7
            },
            "metrics": {
              "readiness": 85.6,
              "renderFidelity": 86.6,
              "semanticAttachment": 86.4,
              "provenanceTrace": 85.5,
              "viewInstability": 9.4,
              "editLeakageRisk": 16.7
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "semantic-edit",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 74,
                "splatDensity": 72,
                "semanticEntropy": 34,
                "provenanceVisibility": 76
              },
              "asset": "fixtures/splats/semantic-edit.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/semantic-edit-renders/",
              "semanticSplatMap": "fixtures/splats/semantic-edit-semantic-map.json",
              "provenanceTrace": "fixtures/splats/semantic-edit-provenance.json",
              "editLeakageReport": 21.4
            },
            "metrics": {
              "readiness": 82.2,
              "renderFidelity": 81.5,
              "semanticAttachment": 82.4,
              "provenanceTrace": 86.1,
              "viewInstability": 15.7,
              "editLeakageRisk": 21.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "provenance-transfer",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 68,
                "splatDensity": 70,
                "semanticEntropy": 42,
                "provenanceVisibility": 84
              },
              "asset": "fixtures/splats/provenance-transfer.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/provenance-transfer-renders/",
              "semanticSplatMap": "fixtures/splats/provenance-transfer-semantic-map.json",
              "provenanceTrace": "fixtures/splats/provenance-transfer-provenance.json",
              "editLeakageReport": 24.3
            },
            "metrics": {
              "readiness": 80.5,
              "renderFidelity": 78.9,
              "semanticAttachment": 79.8,
              "provenanceTrace": 87.7,
              "viewInstability": 18.8,
              "editLeakageRisk": 24.3
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          },
          {
            "jobId": "gaussian-splatting",
            "caseId": "sparse-capture",
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
              "renderer": "torch-splat-renderer",
              "semantic": "semantic-splat-attach",
              "provenance": "provenance-trace-head"
            },
            "inputs": {
              "splatControls": {
                "viewCount": 62,
                "splatDensity": 66,
                "semanticEntropy": 46,
                "provenanceVisibility": 72
              },
              "asset": "fixtures/splats/sparse-capture.json"
            },
            "outputs": {
              "novelViewRenders": "fixtures/splats/sparse-capture-renders/",
              "semanticSplatMap": "fixtures/splats/sparse-capture-semantic-map.json",
              "provenanceTrace": "fixtures/splats/sparse-capture-provenance.json",
              "editLeakageReport": 27.4
            },
            "metrics": {
              "readiness": 77.7,
              "renderFidelity": 76.2,
              "semanticAttachment": 77.8,
              "provenanceTrace": 83.8,
              "viewInstability": 23.2,
              "editLeakageRisk": 27.4
            },
            "provenance": {
              "runtime": "google-colab-pro-plus",
              "accelerator": "GPU",
              "notebook": "notebooks/cvpr_gpu_worker.ipynb",
              "sourceBench": "cvpr-gaussian-splatting-bench"
            }
          }
        ]
      },
      "importReport": {
        "summary": {
          "validator": "validate_cvpr_colab_results",
          "runtimePlane": "google-colab-pro-plus",
          "expectedMode": "cached-real",
          "jobs": 10,
          "expectedResults": 40,
          "actualResults": 40,
          "validJobs": 10,
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
          "jobs": 10,
          "expectedResults": 40,
          "actualResults": 40,
          "validJobs": 10,
          "issues": 0,
          "status": "valid",
          "intake": "cvpr-colab-live-intake",
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
          "jobs": 10,
          "expectedResults": 40,
          "actualResults": 40,
          "validJobs": 10,
          "issues": 0,
          "status": "valid",
          "intake": "cvpr-colab-live-intake",
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
          "cases": 40,
          "jobs": 10,
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
            "readinessBefore": 80.8,
            "readinessAfter": 80.8,
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
            "readinessBefore": 79.7,
            "readinessAfter": 79.7,
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
            "readinessBefore": 79.8,
            "readinessAfter": 79.8,
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
            "readinessBefore": 79.9,
            "readinessAfter": 79.9,
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
            "caseId": "external-hospital",
            "readinessBefore": 77.1,
            "readinessAfter": 77.1,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "clinicalEvidence": 0.0,
              "domainEvidence": 0.0,
              "readiness": 0.0,
              "residualRisk": 0.0,
              "shiftLoad": 0.0,
              "triageRate": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "clinical-shift",
            "caseId": "new-scanner",
            "readinessBefore": 80.5,
            "readinessAfter": 80.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "clinicalEvidence": 0.0,
              "domainEvidence": 0.0,
              "readiness": 0.0,
              "residualRisk": 0.0,
              "shiftLoad": 0.0,
              "triageRate": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "clinical-shift",
            "caseId": "noisy-rare-cohort",
            "readinessBefore": 72.5,
            "readinessAfter": 72.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "clinicalEvidence": 0.0,
              "domainEvidence": 0.0,
              "readiness": 0.0,
              "residualRisk": 0.0,
              "shiftLoad": 0.0,
              "triageRate": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "clinical-shift",
            "caseId": "same-site-clean",
            "readinessBefore": 88.5,
            "readinessAfter": 88.5,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "calibration": 0.0,
              "clinicalEvidence": 0.0,
              "domainEvidence": 0.0,
              "readiness": 0.0,
              "residualRisk": 0.0,
              "shiftLoad": 0.0,
              "triageRate": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "compute-serving",
            "caseId": "desktop-batch",
            "readinessBefore": 76.6,
            "readinessAfter": 76.6,
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
            "readinessBefore": 73.5,
            "readinessAfter": 73.5,
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
            "readinessBefore": 74.6,
            "readinessAfter": 74.6,
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
            "readinessBefore": 74.6,
            "readinessAfter": 74.6,
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
            "readinessBefore": 77.5,
            "readinessAfter": 77.5,
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
            "readinessBefore": 84.9,
            "readinessAfter": 84.9,
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
            "readinessBefore": 77.6,
            "readinessAfter": 77.6,
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
            "readinessBefore": 77.4,
            "readinessAfter": 77.4,
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
            "jobId": "driving-safety",
            "caseId": "construction-zone",
            "readinessBefore": 68.2,
            "readinessAfter": 68.2,
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
            "readinessBefore": 68.2,
            "readinessAfter": 68.2,
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
            "readinessBefore": 68.2,
            "readinessAfter": 68.2,
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
            "readinessBefore": 68.1,
            "readinessAfter": 68.1,
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
            "readinessBefore": 85.6,
            "readinessAfter": 85.6,
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
            "readinessBefore": 80.5,
            "readinessAfter": 80.5,
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
            "readinessBefore": 82.2,
            "readinessAfter": 82.2,
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
            "readinessBefore": 77.7,
            "readinessAfter": 77.7,
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
            "readinessBefore": 72.0,
            "readinessAfter": 72.0,
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
            "readinessBefore": 78.7,
            "readinessAfter": 78.7,
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
            "readinessBefore": 75.5,
            "readinessAfter": 75.5,
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
            "readinessBefore": 85.8,
            "readinessAfter": 85.8,
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
            "readinessBefore": 84.7,
            "readinessAfter": 84.7,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "readiness": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-distractors",
            "readinessBefore": 83.8,
            "readinessAfter": 83.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "readiness": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "rare-visible",
            "readinessBefore": 83.9,
            "readinessAfter": 83.9,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "readiness": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "open-vocab-grounding",
            "caseId": "unsupported-query",
            "readinessBefore": 83.8,
            "readinessAfter": 83.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
              "localizedEvidence": 0.0,
              "readiness": 0.0,
              "unsupportedRisk": 0.0
            },
            "promotedFrom": "live-colab",
            "regression": false
          },
          {
            "jobId": "restoration-fidelity",
            "caseId": "compressed-low-light",
            "readinessBefore": 77.7,
            "readinessAfter": 77.7,
            "readinessDelta": 0.0,
            "metricDeltas": {
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
            "readinessBefore": 82.0,
            "readinessAfter": 82.0,
            "readinessDelta": 0.0,
            "metricDeltas": {
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
            "readinessBefore": 77.7,
            "readinessAfter": 77.7,
            "readinessDelta": 0.0,
            "metricDeltas": {
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
            "readinessBefore": 77.8,
            "readinessAfter": 77.8,
            "readinessDelta": 0.0,
            "metricDeltas": {
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
            "readinessBefore": 76.2,
            "readinessAfter": 76.2,
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
            "readinessBefore": 75.9,
            "readinessAfter": 75.9,
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
            "readinessBefore": 75.9,
            "readinessAfter": 75.9,
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
            "readinessBefore": 83.3,
            "readinessAfter": 83.3,
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
          "workerJobs": 10,
          "promotedRunners": 10,
          "runnerRows": 10,
          "cachedResults": 40,
          "importIssues": 0,
          "fullStackStatus": "valid",
          "packageTests": 148,
          "validationGate": "release",
          "liveIntakeStatus": "valid",
          "liveIntakeResults": 40,
          "liveIntakePromoted": false,
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
          "jobs": 10,
          "liveCapable": 10,
          "promotedRunners": 10,
          "cachedCapable": 10,
          "cachedResults": 40,
          "validCachedResults": 40,
          "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
        "importReport": {
          "validator": "validate_cvpr_colab_results",
          "runtimePlane": "google-colab-pro-plus",
          "expectedMode": "cached-real",
          "jobs": 10,
          "expectedResults": 40,
          "actualResults": 40,
          "validJobs": 10,
          "issues": 0,
          "status": "valid"
        },
        "fullStack": {
          "validator": "validate_cvpr_full_stack",
          "status": "valid",
          "commands": 286,
          "steps": 59,
          "packageTests": 148,
          "workerJobs": 10,
          "promotedRunners": 10,
          "cachedResults": 40,
          "importIssues": 0,
          "durationSec": 30.405
        },
        "validationCenter": {
          "dashboard": "cvpr-validation-center",
          "status": "interactive",
          "gateStatus": "release",
          "fullStackStatus": "valid",
          "commands": 286,
          "steps": 53,
          "packageTests": 148,
          "workerJobs": 10,
          "promotedRunners": 10,
          "cachedResults": 40,
          "importIssues": 0,
          "promotionDeltaStatus": "release",
          "promotionRegressions": 0,
          "maxReadinessDrop": 0.0,
          "validImportJobs": 10,
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
              "durationSec": 27.556,
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
              "command": "python3 scripts/validate_cvpr_colab_results.py",
              "returnCode": 0,
              "durationSec": 0.079,
              "stdoutTail": [
                "validated CVPR Colab results: 40 results, 0 issues"
              ],
              "stderrTail": []
            },
            {
              "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
              "returnCode": 0,
              "durationSec": 0.077,
              "stdoutTail": [
                "wrote cvpr-colab-handoff-package.html: 10 jobs, 8 zip entries"
              ],
              "stderrTail": []
            },
            {
              "command": "python3 scripts/build_cvpr_systems_lab.py",
              "returnCode": 0,
              "durationSec": 0.063,
              "stdoutTail": [
                "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
              ],
              "stderrTail": []
            },
            {
              "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
              "returnCode": 0,
              "durationSec": 0.062,
              "stdoutTail": [
                "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 87.1"
              ],
              "stderrTail": []
            }
          ]
        },
        "liveIntake": {
          "validator": "validate_cvpr_colab_results",
          "runtimePlane": "google-colab-pro-plus",
          "expectedMode": "live-colab",
          "jobs": 10,
          "expectedResults": 40,
          "actualResults": 40,
          "validJobs": 10,
          "issues": 0,
          "status": "valid",
          "intake": "cvpr-colab-live-intake",
          "export": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
          "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "promoted": false
        },
        "promotionDelta": {
          "delta": "cvpr-colab-promotion-delta",
          "status": "release",
          "cases": 40,
          "jobs": 10,
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
          "jobs": 10,
          "runners": 10,
          "expectedResults": 40,
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
            "jobs": 10,
            "liveCapable": 10,
            "promotedRunners": 10,
            "cachedCapable": 10,
            "cachedResults": 40,
            "validCachedResults": 40,
            "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
                "jobId": "metric-geometry",
                "bench": "cvpr-metric-geometry-bench",
                "page": "cvpr-metric-geometry-bench.html",
                "priority": 9,
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
                "priority": 10,
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
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "embedding": "siglip-base-patch16-224",
                "detector": "grounding-dino-tiny",
                "segmenter": "sam-vit-b"
              },
              "inputs": {
                "textQuery": "common clean object",
                "controls": {
                  "queryRarity": 18,
                  "distractorOverlap": 16,
                  "boxAmbiguity": 18,
                  "evidenceThreshold": 54
                },
                "asset": "fixtures/open-vocab/common-clean.png"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "target",
                    "xywh": [
                      0.18,
                      0.22,
                      0.26,
                      0.24
                    ],
                    "score": 0.828
                  },
                  {
                    "label": "distractor",
                    "xywh": [
                      0.56,
                      0.26,
                      0.21,
                      0.2
                    ],
                    "score": 0.917
                  }
                ],
                "regionScores": {
                  "target": 84.7,
                  "longTail": 71.7
                },
                "localizedEvidence": 88.9
              },
              "metrics": {
                "readiness": 84.7,
                "localizedEvidence": 88.9,
                "unsupportedRisk": 8.3
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench"
              }
            },
            {
              "jobId": "open-vocab-grounding",
              "caseId": "rare-visible",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "embedding": "siglip-base-patch16-224",
                "detector": "grounding-dino-tiny",
                "segmenter": "sam-vit-b"
              },
              "inputs": {
                "textQuery": "rare visible object",
                "controls": {
                  "queryRarity": 66,
                  "distractorOverlap": 12,
                  "boxAmbiguity": 34,
                  "evidenceThreshold": 62
                },
                "asset": "fixtures/open-vocab/rare-visible.png"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "target",
                    "xywh": [
                      0.18,
                      0.22,
                      0.26,
                      0.24
                    ],
                    "score": 0.768
                  },
                  {
                    "label": "distractor",
                    "xywh": [
                      0.56,
                      0.26,
                      0.21,
                      0.2
                    ],
                    "score": 0.837
                  }
                ],
                "regionScores": {
                  "target": 85.0,
                  "longTail": 76.9
                },
                "localizedEvidence": 87.7
              },
              "metrics": {
                "readiness": 83.9,
                "localizedEvidence": 87.7,
                "unsupportedRisk": 16.3
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench"
              }
            },
            {
              "jobId": "open-vocab-grounding",
              "caseId": "rare-distractors",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "embedding": "siglip-base-patch16-224",
                "detector": "grounding-dino-tiny",
                "segmenter": "sam-vit-b"
              },
              "inputs": {
                "textQuery": "rare object with distractors",
                "controls": {
                  "queryRarity": 78,
                  "distractorOverlap": 28,
                  "boxAmbiguity": 28,
                  "evidenceThreshold": 76
                },
                "asset": "fixtures/open-vocab/rare-distractors.png"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "target",
                    "xywh": [
                      0.18,
                      0.22,
                      0.26,
                      0.24
                    ],
                    "score": 0.76
                  },
                  {
                    "label": "distractor",
                    "xywh": [
                      0.56,
                      0.26,
                      0.21,
                      0.2
                    ],
                    "score": 0.81
                  }
                ],
                "regionScores": {
                  "target": 83.6,
                  "longTail": 81.4
                },
                "localizedEvidence": 87.1
              },
              "metrics": {
                "readiness": 83.8,
                "localizedEvidence": 87.1,
                "unsupportedRisk": 19.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench"
              }
            },
            {
              "jobId": "open-vocab-grounding",
              "caseId": "unsupported-query",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "embedding": "siglip-base-patch16-224",
                "detector": "grounding-dino-tiny",
                "segmenter": "sam-vit-b"
              },
              "inputs": {
                "textQuery": "unsupported text query",
                "controls": {
                  "queryRarity": 82,
                  "distractorOverlap": 30,
                  "boxAmbiguity": 32,
                  "evidenceThreshold": 84
                },
                "asset": "fixtures/open-vocab/unsupported-query.png"
              },
              "outputs": {
                "boxes": [
                  {
                    "label": "target",
                    "xywh": [
                      0.18,
                      0.22,
                      0.26,
                      0.24
                    ],
                    "score": 0.753
                  },
                  {
                    "label": "distractor",
                    "xywh": [
                      0.56,
                      0.26,
                      0.21,
                      0.2
                    ],
                    "score": 0.799
                  }
                ],
                "regionScores": {
                  "target": 84.0,
                  "longTail": 82.1
                },
                "localizedEvidence": 87.1
              },
              "metrics": {
                "readiness": 83.8,
                "localizedEvidence": 87.1,
                "unsupportedRisk": 20.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench"
              }
            },
            {
              "jobId": "restoration-fidelity",
              "caseId": "mild-noise",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "restorer": "swinir-lightweight",
                "artifactProbe": "real-esrgan-x2"
              },
              "inputs": {
                "degradationControls": {
                  "blur": 18,
                  "noise": 24,
                  "compression": 18,
                  "lowLight": 20,
                  "hallucinationPenalty": 36
                },
                "asset": "fixtures/restoration/mild-noise.png"
              },
              "outputs": {
                "restoredImage": "fixtures/restoration/mild-noise-restored.png",
                "artifactMap": "fixtures/restoration/mild-noise-artifact-map.png",
                "downstreamScore": 85.3,
                "fidelityScore": 82.2
              },
              "metrics": {
                "readiness": 82.0,
                "downstreamUtility": 85.3,
                "fabricatedDetailRisk": 25.8,
                "fidelityScore": 82.2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-restoration-fidelity-bench"
              }
            },
            {
              "jobId": "restoration-fidelity",
              "caseId": "compressed-low-light",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "restorer": "swinir-lightweight",
                "artifactProbe": "real-esrgan-x2"
              },
              "inputs": {
                "degradationControls": {
                  "blur": 32,
                  "noise": 38,
                  "compression": 54,
                  "lowLight": 64,
                  "hallucinationPenalty": 16
                },
                "asset": "fixtures/restoration/compressed-low-light.png"
              },
              "outputs": {
                "restoredImage": "fixtures/restoration/compressed-low-light-restored.png",
                "artifactMap": "fixtures/restoration/compressed-low-light-artifact-map.png",
                "downstreamScore": 80.9,
                "fidelityScore": 80.3
              },
              "metrics": {
                "readiness": 77.7,
                "downstreamUtility": 80.9,
                "fabricatedDetailRisk": 29.4,
                "fidelityScore": 80.3
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-restoration-fidelity-bench"
              }
            },
            {
              "jobId": "restoration-fidelity",
              "caseId": "motion-blur-task",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "restorer": "swinir-lightweight",
                "artifactProbe": "real-esrgan-x2"
              },
              "inputs": {
                "degradationControls": {
                  "blur": 64,
                  "noise": 36,
                  "compression": 38,
                  "lowLight": 36,
                  "hallucinationPenalty": 16
                },
                "asset": "fixtures/restoration/motion-blur-task.png"
              },
              "outputs": {
                "restoredImage": "fixtures/restoration/motion-blur-task-restored.png",
                "artifactMap": "fixtures/restoration/motion-blur-task-artifact-map.png",
                "downstreamScore": 81.5,
                "fidelityScore": 79.0
              },
              "metrics": {
                "readiness": 77.7,
                "downstreamUtility": 81.5,
                "fabricatedDetailRisk": 26.5,
                "fidelityScore": 79.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-restoration-fidelity-bench"
              }
            },
            {
              "jobId": "restoration-fidelity",
              "caseId": "over-restored-detail",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "restorer": "swinir-lightweight",
                "artifactProbe": "real-esrgan-x2"
              },
              "inputs": {
                "degradationControls": {
                  "blur": 48,
                  "noise": 54,
                  "compression": 38,
                  "lowLight": 56,
                  "hallucinationPenalty": 18
                },
                "asset": "fixtures/restoration/over-restored-detail.png"
              },
              "outputs": {
                "restoredImage": "fixtures/restoration/over-restored-detail-restored.png",
                "artifactMap": "fixtures/restoration/over-restored-detail-artifact-map.png",
                "downstreamScore": 81.2,
                "fidelityScore": 80.1
              },
              "metrics": {
                "readiness": 77.8,
                "downstreamUtility": 81.2,
                "fabricatedDetailRisk": 28.6,
                "fidelityScore": 80.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-restoration-fidelity-bench"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "clean-camera",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "detector": "watermark-detector",
                "probe": "clip-perturbation-probe"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 0,
                  "generationSource": 56,
                  "watermarkVisibility": 100,
                  "unlearningProbe": 0
                },
                "asset": "fixtures/adversarial/clean-camera.png"
              },
              "outputs": {
                "provenanceConfidence": 86.4,
                "attackHeatmap": "fixtures/adversarial/clean-camera-attack-heatmap.png",
                "leakageRisk": 9.0,
                "evidence": 82.5
              },
              "metrics": {
                "readiness": 79.7,
                "evidence": 82.5,
                "risk": 17.9,
                "leakageRisk": 9.0,
                "provenanceConfidence": 86.4,
                "attackCoverage": 44.7
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "edited-social-post",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "detector": "watermark-detector",
                "probe": "clip-perturbation-probe"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 0,
                  "generationSource": 64,
                  "watermarkVisibility": 98,
                  "unlearningProbe": 10
                },
                "asset": "fixtures/adversarial/edited-social-post.png"
              },
              "outputs": {
                "provenanceConfidence": 87.9,
                "attackHeatmap": "fixtures/adversarial/edited-social-post-attack-heatmap.png",
                "leakageRisk": 14.8,
                "evidence": 82.9
              },
              "metrics": {
                "readiness": 79.8,
                "evidence": 82.9,
                "risk": 21.0,
                "leakageRisk": 14.8,
                "provenanceConfidence": 87.9,
                "attackCoverage": 47.2
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "synthetic-watermarked",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "detector": "watermark-detector",
                "probe": "clip-perturbation-probe"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 0,
                  "generationSource": 84,
                  "watermarkVisibility": 94,
                  "unlearningProbe": 44
                },
                "asset": "fixtures/adversarial/synthetic-watermarked.png"
              },
              "outputs": {
                "provenanceConfidence": 92.0,
                "attackHeatmap": "fixtures/adversarial/synthetic-watermarked-attack-heatmap.png",
                "leakageRisk": 32.9,
                "evidence": 83.6
              },
              "metrics": {
                "readiness": 79.9,
                "evidence": 83.6,
                "risk": 29.9,
                "leakageRisk": 32.9,
                "provenanceConfidence": 92.0,
                "attackCoverage": 54.4
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench"
              }
            },
            {
              "jobId": "adversarial-provenance",
              "caseId": "adaptive-attack",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "detector": "watermark-detector",
                "probe": "clip-perturbation-probe"
              },
              "inputs": {
                "attackControls": {
                  "attackStrength": 12,
                  "generationSource": 89,
                  "watermarkVisibility": 100,
                  "unlearningProbe": 0
                },
                "asset": "fixtures/adversarial/adaptive-attack.png"
              },
              "outputs": {
                "provenanceConfidence": 93.8,
                "attackHeatmap": "fixtures/adversarial/adaptive-attack-attack-heatmap.png",
                "leakageRisk": 17.4,
                "evidence": 85.3
              },
              "metrics": {
                "readiness": 80.8,
                "evidence": 85.3,
                "risk": 30.3,
                "leakageRisk": 17.4,
                "provenanceConfidence": 93.8,
                "attackCoverage": 52.6
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "short-stable",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "tracker": "video-feature-tracker",
                "flow": "raft-lite",
                "rolloutProbe": "world-rollout-probe"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 24,
                  "identityDensity": 28,
                  "physicsViolations": 14,
                  "memoryWindow": 72
                },
                "asset": "fixtures/temporal/short-stable.mp4"
              },
              "outputs": {
                "identityTracks": "fixtures/temporal/short-stable-identity-tracks.json",
                "contactEvents": "fixtures/temporal/short-stable-contacts.json",
                "driftCurve": [
                  5.2,
                  10.5,
                  15.8,
                  21.0
                ],
                "rolloutPlausibility": 85.7
              },
              "metrics": {
                "readiness": 83.3,
                "identityStability": 80.6,
                "contactConsistency": 86.6,
                "rolloutPlausibility": 85.7,
                "drift": 21.0,
                "memoryLoad": 26.6
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "crowded-memory",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "tracker": "video-feature-tracker",
                "flow": "raft-lite",
                "rolloutProbe": "world-rollout-probe"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 36,
                  "identityDensity": 76,
                  "physicsViolations": 26,
                  "memoryWindow": 82
                },
                "asset": "fixtures/temporal/crowded-memory.mp4"
              },
              "outputs": {
                "identityTracks": "fixtures/temporal/crowded-memory-identity-tracks.json",
                "contactEvents": "fixtures/temporal/crowded-memory-contacts.json",
                "driftCurve": [
                  8.2,
                  16.5,
                  24.8,
                  33.0
                ],
                "rolloutPlausibility": 80.0
              },
              "metrics": {
                "readiness": 75.9,
                "identityStability": 73.8,
                "contactConsistency": 79.4,
                "rolloutPlausibility": 80.0,
                "drift": 33.0,
                "memoryLoad": 43.8
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "contact-heavy",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "tracker": "video-feature-tracker",
                "flow": "raft-lite",
                "rolloutProbe": "world-rollout-probe"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 56,
                  "identityDensity": 52,
                  "physicsViolations": 20,
                  "memoryWindow": 82
                },
                "asset": "fixtures/temporal/contact-heavy.mp4"
              },
              "outputs": {
                "identityTracks": "fixtures/temporal/contact-heavy-identity-tracks.json",
                "contactEvents": "fixtures/temporal/contact-heavy-contacts.json",
                "driftCurve": [
                  8.6,
                  17.1,
                  25.7,
                  34.3
                ],
                "rolloutPlausibility": 77.1
              },
              "metrics": {
                "readiness": 76.2,
                "identityStability": 74.0,
                "contactConsistency": 83.6,
                "rolloutPlausibility": 77.1,
                "drift": 34.3,
                "memoryLoad": 42.5
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench"
              }
            },
            {
              "jobId": "temporal-rollout",
              "caseId": "long-rollout-drift",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "tracker": "video-feature-tracker",
                "flow": "raft-lite",
                "rolloutProbe": "world-rollout-probe"
              },
              "inputs": {
                "trackingControls": {
                  "rolloutLength": 66,
                  "identityDensity": 68,
                  "physicsViolations": 12,
                  "memoryWindow": 92
                },
                "asset": "fixtures/temporal/long-rollout-drift.mp4"
              },
              "outputs": {
                "identityTracks": "fixtures/temporal/long-rollout-drift-identity-tracks.json",
                "contactEvents": "fixtures/temporal/long-rollout-drift-contacts.json",
                "driftCurve": [
                  9.0,
                  18.1,
                  27.1,
                  36.1
                ],
                "rolloutPlausibility": 75.5
              },
              "metrics": {
                "readiness": 75.9,
                "identityStability": 72.7,
                "contactConsistency": 86.5,
                "rolloutPlausibility": 75.5,
                "drift": 36.1,
                "memoryLoad": 48.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench"
              }
            },
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
            },
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
            },
            {
              "jobId": "constraint-generation",
              "caseId": "light-layout-edit",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "layout": "layout-controlnet",
                "identity": "identity-embedding-lock",
                "reward": "preference-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 24,
                  "layoutLock": 78,
                  "identityLock": 82,
                  "adversarialPromptPressure": 18
                },
                "asset": "fixtures/generation/light-layout-edit.png"
              },
              "outputs": {
                "editedImage": "fixtures/generation/light-layout-edit-edited.png",
                "layoutMask": "fixtures/generation/light-layout-edit-layout-mask.png",
                "identityEmbeddingDelta": 18.5,
                "rewardTrace": "fixtures/generation/light-layout-edit-reward.json"
              },
              "metrics": {
                "readiness": 84.9,
                "editPressure": 21.0,
                "constraintSatisfaction": 86.1,
                "identityPreservation": 85.0,
                "editLocality": 82.8,
                "rewardAlignment": 87.3,
                "identityDamage": 18.5,
                "provenanceRisk": 17.6
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench"
              }
            },
            {
              "jobId": "constraint-generation",
              "caseId": "style-with-locks",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "layout": "layout-controlnet",
                "identity": "identity-embedding-lock",
                "reward": "preference-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 52,
                  "layoutLock": 68,
                  "identityLock": 80,
                  "adversarialPromptPressure": 32
                },
                "asset": "fixtures/generation/style-with-locks.png"
              },
              "outputs": {
                "editedImage": "fixtures/generation/style-with-locks-edited.png",
                "layoutMask": "fixtures/generation/style-with-locks-layout-mask.png",
                "identityEmbeddingDelta": 31.8,
                "rewardTrace": "fixtures/generation/style-with-locks-reward.json"
              },
              "metrics": {
                "readiness": 77.4,
                "editPressure": 39.2,
                "constraintSatisfaction": 80.9,
                "identityPreservation": 77.3,
                "editLocality": 74.4,
                "rewardAlignment": 81.3,
                "identityDamage": 31.8,
                "provenanceRisk": 29.5
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench"
              }
            },
            {
              "jobId": "constraint-generation",
              "caseId": "layout-rewrite",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "layout": "layout-controlnet",
                "identity": "identity-embedding-lock",
                "reward": "preference-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 72,
                  "layoutLock": 62,
                  "identityLock": 92,
                  "adversarialPromptPressure": 28
                },
                "asset": "fixtures/generation/layout-rewrite.png"
              },
              "outputs": {
                "editedImage": "fixtures/generation/layout-rewrite-edited.png",
                "layoutMask": "fixtures/generation/layout-rewrite-layout-mask.png",
                "identityEmbeddingDelta": 33.1,
                "rewardTrace": "fixtures/generation/layout-rewrite-reward.json"
              },
              "metrics": {
                "readiness": 77.5,
                "editPressure": 45.7,
                "constraintSatisfaction": 81.1,
                "identityPreservation": 78.4,
                "editLocality": 72.9,
                "rewardAlignment": 82.4,
                "identityDamage": 33.1,
                "provenanceRisk": 29.9
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench"
              }
            },
            {
              "jobId": "constraint-generation",
              "caseId": "prompt-attack-edit",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "layout": "layout-controlnet",
                "identity": "identity-embedding-lock",
                "reward": "preference-reward-probe"
              },
              "inputs": {
                "generationControls": {
                  "editStrength": 78,
                  "layoutLock": 66,
                  "identityLock": 92,
                  "adversarialPromptPressure": 28
                },
                "asset": "fixtures/generation/prompt-attack-edit.png"
              },
              "outputs": {
                "editedImage": "fixtures/generation/prompt-attack-edit-edited.png",
                "layoutMask": "fixtures/generation/prompt-attack-edit-layout-mask.png",
                "identityEmbeddingDelta": 34.8,
                "rewardTrace": "fixtures/generation/prompt-attack-edit-reward.json"
              },
              "metrics": {
                "readiness": 77.6,
                "editPressure": 47.7,
                "constraintSatisfaction": 82.3,
                "identityPreservation": 77.3,
                "editLocality": 73.6,
                "rewardAlignment": 82.5,
                "identityDamage": 34.8,
                "provenanceRisk": 30.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench"
              }
            },
            {
              "jobId": "driving-safety",
              "caseId": "urban-cut-in",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "grounder": "vla-scene-grounder",
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
                "asset": "fixtures/driving/urban-cut-in.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "fixtures/driving/urban-cut-in-grounding.png",
                "timeToCollision": 5.15,
                "riskTrace": "fixtures/driving/urban-cut-in-risk.json",
                "ruleViolations": 24.0
              },
              "metrics": {
                "readiness": 68.1,
                "sceneGrounding": 85.7,
                "timeToCollision": 5.15,
                "risk": 33.4,
                "ruleViolation": 24.0,
                "abstention": 7.6
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-driving-safety-bench"
              }
            },
            {
              "jobId": "driving-safety",
              "caseId": "night-crosswalk",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "grounder": "vla-scene-grounder",
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
                "asset": "fixtures/driving/night-crosswalk.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "fixtures/driving/night-crosswalk-grounding.png",
                "timeToCollision": 5.73,
                "riskTrace": "fixtures/driving/night-crosswalk-risk.json",
                "ruleViolations": 23.5
              },
              "metrics": {
                "readiness": 68.2,
                "sceneGrounding": 84.2,
                "timeToCollision": 5.73,
                "risk": 31.7,
                "ruleViolation": 23.5,
                "abstention": 7.8
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-driving-safety-bench"
              }
            },
            {
              "jobId": "driving-safety",
              "caseId": "highway-merge",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "grounder": "vla-scene-grounder",
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
                "asset": "fixtures/driving/highway-merge.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "fixtures/driving/highway-merge-grounding.png",
                "timeToCollision": 4.34,
                "riskTrace": "fixtures/driving/highway-merge-risk.json",
                "ruleViolations": 24.1
              },
              "metrics": {
                "readiness": 68.2,
                "sceneGrounding": 87.3,
                "timeToCollision": 4.34,
                "risk": 34.6,
                "ruleViolation": 24.1,
                "abstention": 7.4
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-driving-safety-bench"
              }
            },
            {
              "jobId": "driving-safety",
              "caseId": "construction-zone",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "grounder": "vla-scene-grounder",
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
                "asset": "fixtures/driving/construction-zone.mp4"
              },
              "outputs": {
                "sceneGroundingMap": "fixtures/driving/construction-zone-grounding.png",
                "timeToCollision": 5.82,
                "riskTrace": "fixtures/driving/construction-zone-risk.json",
                "ruleViolations": 23.7
              },
              "metrics": {
                "readiness": 68.2,
                "sceneGrounding": 83.9,
                "timeToCollision": 5.82,
                "risk": 31.9,
                "ruleViolation": 23.7,
                "abstention": 9.1
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-driving-safety-bench"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "wide-baseline",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "pose": "torch-pose-bundle-adjuster",
                "scale": "metric-scale-probe",
                "surface": "surface-consistency-head"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 82,
                  "textureSparsity": 18,
                  "scaleAmbiguity": 24,
                  "surfaceComplexity": 42
                },
                "asset": "fixtures/geometry/wide-baseline.json"
              },
              "outputs": {
                "poseGraph": "fixtures/geometry/wide-baseline-pose-graph.json",
                "scaleTrace": "fixtures/geometry/wide-baseline-scale-trace.json",
                "surfaceResidualMap": "fixtures/geometry/wide-baseline-surface-residual.png",
                "topologyWarnings": 13.9
              },
              "metrics": {
                "readiness": 85.8,
                "poseEvidence": 87.0,
                "metricEvidence": 86.9,
                "surfaceConsistency": 83.1,
                "scaleDrift": 10.1,
                "topologyRisk": 13.9
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "scale-transfer",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "pose": "torch-pose-bundle-adjuster",
                "scale": "metric-scale-probe",
                "surface": "surface-consistency-head"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 66,
                  "textureSparsity": 28,
                  "scaleAmbiguity": 44,
                  "surfaceComplexity": 46
                },
                "asset": "fixtures/geometry/scale-transfer.json"
              },
              "outputs": {
                "poseGraph": "fixtures/geometry/scale-transfer-pose-graph.json",
                "scaleTrace": "fixtures/geometry/scale-transfer-scale-trace.json",
                "surfaceResidualMap": "fixtures/geometry/scale-transfer-surface-residual.png",
                "topologyWarnings": 21.0
              },
              "metrics": {
                "readiness": 78.7,
                "poseEvidence": 79.2,
                "metricEvidence": 78.8,
                "surfaceConsistency": 78.4,
                "scaleDrift": 21.5,
                "topologyRisk": 21.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "thin-structure",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "pose": "torch-pose-bundle-adjuster",
                "scale": "metric-scale-probe",
                "surface": "surface-consistency-head"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 58,
                  "textureSparsity": 34,
                  "scaleAmbiguity": 32,
                  "surfaceComplexity": 72
                },
                "asset": "fixtures/geometry/thin-structure.json"
              },
              "outputs": {
                "poseGraph": "fixtures/geometry/thin-structure-pose-graph.json",
                "scaleTrace": "fixtures/geometry/thin-structure-scale-trace.json",
                "surfaceResidualMap": "fixtures/geometry/thin-structure-surface-residual.png",
                "topologyWarnings": 30.0
              },
              "metrics": {
                "readiness": 75.5,
                "poseEvidence": 76.8,
                "metricEvidence": 80.4,
                "surfaceConsistency": 72.5,
                "scaleDrift": 22.7,
                "topologyRisk": 30.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench"
              }
            },
            {
              "jobId": "metric-geometry",
              "caseId": "low-texture-indoor",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "pose": "torch-pose-bundle-adjuster",
                "scale": "metric-scale-probe",
                "surface": "surface-consistency-head"
              },
              "inputs": {
                "geometryControls": {
                  "baseline": 54,
                  "textureSparsity": 58,
                  "scaleAmbiguity": 48,
                  "surfaceComplexity": 50
                },
                "asset": "fixtures/geometry/low-texture-indoor.json"
              },
              "outputs": {
                "poseGraph": "fixtures/geometry/low-texture-indoor-pose-graph.json",
                "scaleTrace": "fixtures/geometry/low-texture-indoor-scale-trace.json",
                "surfaceResidualMap": "fixtures/geometry/low-texture-indoor-surface-residual.png",
                "topologyWarnings": 30.0
              },
              "metrics": {
                "readiness": 72.0,
                "poseEvidence": 70.1,
                "metricEvidence": 74.7,
                "surfaceConsistency": 72.2,
                "scaleDrift": 29.9,
                "topologyRisk": 30.0
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "dense-novel-view",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "renderer": "torch-splat-renderer",
                "semantic": "semantic-splat-attach",
                "provenance": "provenance-trace-head"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 86,
                  "splatDensity": 78,
                  "semanticEntropy": 24,
                  "provenanceVisibility": 70
                },
                "asset": "fixtures/splats/dense-novel-view.json"
              },
              "outputs": {
                "novelViewRenders": "fixtures/splats/dense-novel-view-renders/",
                "semanticSplatMap": "fixtures/splats/dense-novel-view-semantic-map.json",
                "provenanceTrace": "fixtures/splats/dense-novel-view-provenance.json",
                "editLeakageReport": 16.7
              },
              "metrics": {
                "readiness": 85.6,
                "renderFidelity": 86.6,
                "semanticAttachment": 86.4,
                "provenanceTrace": 85.5,
                "viewInstability": 9.4,
                "editLeakageRisk": 16.7
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "semantic-edit",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "renderer": "torch-splat-renderer",
                "semantic": "semantic-splat-attach",
                "provenance": "provenance-trace-head"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 74,
                  "splatDensity": 72,
                  "semanticEntropy": 34,
                  "provenanceVisibility": 76
                },
                "asset": "fixtures/splats/semantic-edit.json"
              },
              "outputs": {
                "novelViewRenders": "fixtures/splats/semantic-edit-renders/",
                "semanticSplatMap": "fixtures/splats/semantic-edit-semantic-map.json",
                "provenanceTrace": "fixtures/splats/semantic-edit-provenance.json",
                "editLeakageReport": 21.4
              },
              "metrics": {
                "readiness": 82.2,
                "renderFidelity": 81.5,
                "semanticAttachment": 82.4,
                "provenanceTrace": 86.1,
                "viewInstability": 15.7,
                "editLeakageRisk": 21.4
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "provenance-transfer",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "renderer": "torch-splat-renderer",
                "semantic": "semantic-splat-attach",
                "provenance": "provenance-trace-head"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 68,
                  "splatDensity": 70,
                  "semanticEntropy": 42,
                  "provenanceVisibility": 84
                },
                "asset": "fixtures/splats/provenance-transfer.json"
              },
              "outputs": {
                "novelViewRenders": "fixtures/splats/provenance-transfer-renders/",
                "semanticSplatMap": "fixtures/splats/provenance-transfer-semantic-map.json",
                "provenanceTrace": "fixtures/splats/provenance-transfer-provenance.json",
                "editLeakageReport": 24.3
              },
              "metrics": {
                "readiness": 80.5,
                "renderFidelity": 78.9,
                "semanticAttachment": 79.8,
                "provenanceTrace": 87.7,
                "viewInstability": 18.8,
                "editLeakageRisk": 24.3
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench"
              }
            },
            {
              "jobId": "gaussian-splatting",
              "caseId": "sparse-capture",
              "mode": "cached-real",
              "createdAt": "2026-08-15T00:00:00Z",
              "model": {
                "renderer": "torch-splat-renderer",
                "semantic": "semantic-splat-attach",
                "provenance": "provenance-trace-head"
              },
              "inputs": {
                "splatControls": {
                  "viewCount": 62,
                  "splatDensity": 66,
                  "semanticEntropy": 46,
                  "provenanceVisibility": 72
                },
                "asset": "fixtures/splats/sparse-capture.json"
              },
              "outputs": {
                "novelViewRenders": "fixtures/splats/sparse-capture-renders/",
                "semanticSplatMap": "fixtures/splats/sparse-capture-semantic-map.json",
                "provenanceTrace": "fixtures/splats/sparse-capture-provenance.json",
                "editLeakageReport": 27.4
              },
              "metrics": {
                "readiness": 77.7,
                "renderFidelity": 76.2,
                "semanticAttachment": 77.8,
                "provenanceTrace": 83.8,
                "viewInstability": 23.2,
                "editLeakageRisk": 27.4
              },
              "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench"
              }
            }
          ]
        },
        "importReport": {
          "summary": {
            "validator": "validate_cvpr_colab_results",
            "runtimePlane": "google-colab-pro-plus",
            "expectedMode": "cached-real",
            "jobs": 10,
            "expectedResults": 40,
            "actualResults": 40,
            "validJobs": 10,
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
          "sizeBytes": 47872,
          "sha256": "5b537ee059dba5a3722989704ff371a4e189a73ddb5fa3b2c813d7e6ec891eba",
          "rows": 40,
          "modes": [
            "cached-real"
          ],
          "jobs": 10
        },
        {
          "label": "run-manifest",
          "path": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json",
          "exists": true,
          "sizeBytes": 6196,
          "sha256": "123cef54337dc9ba7e332f7b58098b2f95bd281f624a55af414b022ff580ae92",
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
          "path": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
          "exists": true,
          "sizeBytes": 49832,
          "sha256": "04fe3f893876ac079949e389e1c22dd4753632c96f4e75c0d8695beb8b99c9c1",
          "rows": 40,
          "modes": [
            "live-colab"
          ],
          "jobs": 10
        },
        {
          "label": "promotion-live-export",
          "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
          "exists": true,
          "sizeBytes": 50072,
          "sha256": "e4c0581aacc50df7abd32ad412febe8a2b5705cd80aa5b23344c278f60e8e53e",
          "rows": 40,
          "modes": [
            "live-colab"
          ],
          "jobs": 10
        },
        {
          "label": "promotion-canonical-results",
          "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
          "exists": true,
          "sizeBytes": 53072,
          "sha256": "3ffb96134e662f6c3edf63e07bd21d20c0ac0b7bb1d0cff9530a24b3f9691b52",
          "rows": 40,
          "modes": [
            "cached-real"
          ],
          "jobs": 10
        },
        {
          "label": "promotion-delta-registry",
          "path": "analysis/cvpr_colab_promotion_delta/registry.json",
          "exists": true,
          "sizeBytes": 18250,
          "sha256": "b82ea6c528e307757d5538c39d663a4c76eebabfd532971c9564d0b9129cdc93",
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
          "sizeBytes": 34794,
          "sha256": "f414acc773fa35481796506b19d163a5ebb3922fbec8f517ee5c0c2528273791"
        }
      ]
    },
    "receipt": {
      "summary": {
        "receipt": "cvpr-colab-run-receipt",
        "status": "ready",
        "stages": 8,
        "commands": 5,
        "jobs": 10,
        "runners": 10,
        "cachedResults": 40,
        "liveIntakeResults": 40,
        "promotionResults": 40,
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
          "sizeBytes": 34794,
          "sha256": "f414acc773fa35481796506b19d163a5ebb3922fbec8f517ee5c0c2528273791"
        },
        {
          "label": "canonical-results",
          "path": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
          "exists": true,
          "sizeBytes": 47872,
          "sha256": "5b537ee059dba5a3722989704ff371a4e189a73ddb5fa3b2c813d7e6ec891eba"
        },
        {
          "label": "live-intake-export",
          "path": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
          "exists": true,
          "sizeBytes": 49832,
          "sha256": "04fe3f893876ac079949e389e1c22dd4753632c96f4e75c0d8695beb8b99c9c1"
        },
        {
          "label": "promoted-results",
          "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
          "exists": true,
          "sizeBytes": 53072,
          "sha256": "3ffb96134e662f6c3edf63e07bd21d20c0ac0b7bb1d0cff9530a24b3f9691b52"
        },
        {
          "label": "promotion-delta-registry",
          "path": "analysis/cvpr_colab_promotion_delta/registry.json",
          "exists": true,
          "sizeBytes": 18250,
          "sha256": "b82ea6c528e307757d5538c39d663a4c76eebabfd532971c9564d0b9129cdc93"
        },
        {
          "label": "release-registry",
          "path": "analysis/cvpr_colab_release_bundle/registry.json",
          "exists": true,
          "sizeBytes": 8835,
          "sha256": "62ea2b55c16737a8e88a82accbbbbc44864d4f99ade865978c962f324a8fc7b2"
        },
        {
          "label": "validation-registry",
          "path": "analysis/cvpr_validation_center/registry.json",
          "exists": true,
          "sizeBytes": 9509,
          "sha256": "23eae7f2ebe32d7c22050dcb9ae735e727d17de29749d4393ba9a3dc568f7b43"
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
        "packageTests": 147
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
        "workerJobs": 10,
        "promotedRunners": 10,
        "cachedResults": 40,
        "importIssues": 0,
        "promotionDeltaStatus": "release",
        "promotionRegressions": 0,
        "maxReadinessDrop": 0.0,
        "validImportJobs": 10,
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
            "durationSec": 27.556,
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
            "command": "python3 scripts/validate_cvpr_colab_results.py",
            "returnCode": 0,
            "durationSec": 0.079,
            "stdoutTail": [
              "validated CVPR Colab results: 40 results, 0 issues"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
            "returnCode": 0,
            "durationSec": 0.077,
            "stdoutTail": [
              "wrote cvpr-colab-handoff-package.html: 10 jobs, 8 zip entries"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_systems_lab.py",
            "returnCode": 0,
            "durationSec": 0.063,
            "stdoutTail": [
              "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
            ],
            "stderrTail": []
          },
          {
            "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
            "returnCode": 0,
            "durationSec": 0.062,
            "stdoutTail": [
              "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 87.1"
            ],
            "stderrTail": []
          }
        ]
      },
      "slowest": [
        {
          "command": "node source-code/learning/*/tests/core.test.js",
          "returnCode": 0,
          "durationSec": 27.556,
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
          "command": "python3 scripts/validate_cvpr_colab_results.py",
          "returnCode": 0,
          "durationSec": 0.079,
          "stdoutTail": [
            "validated CVPR Colab results: 40 results, 0 issues"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
          "returnCode": 0,
          "durationSec": 0.077,
          "stdoutTail": [
            "wrote cvpr-colab-handoff-package.html: 10 jobs, 8 zip entries"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_systems_lab.py",
          "returnCode": 0,
          "durationSec": 0.063,
          "stdoutTail": [
            "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
          "returnCode": 0,
          "durationSec": 0.062,
          "stdoutTail": [
            "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 87.1"
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
        "workerJobs": 10,
        "promotedRunners": 10,
        "cachedResults": 40,
        "importIssues": 0,
        "durationSec": 30.032
      },
      "importReport": {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": "google-colab-pro-plus",
        "expectedMode": "cached-real",
        "jobs": 10,
        "expectedResults": 40,
        "actualResults": 40,
        "validJobs": 10,
        "issues": 0,
        "status": "valid"
      },
      "worker": {
        "worker": "cvpr-colab-gpu-worker",
        "runtimePlane": "google-colab-pro-plus",
        "controlPlane": "local-static-cvpr-site",
        "resultPlane": "registry-and-cached-json",
        "jobs": 10,
        "liveCapable": 10,
        "promotedRunners": 10,
        "cachedCapable": 10,
        "cachedResults": 40,
        "validCachedResults": 40,
        "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
        "cases": 40,
        "jobs": 10,
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
