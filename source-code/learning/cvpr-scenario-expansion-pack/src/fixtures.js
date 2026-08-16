export const sources = {
  "roadmap": {
    "summary": {
      "demo": "cvpr-second-round-demo-roadmap",
      "status": "ready",
      "goals": 6,
      "readyGoals": 6,
      "themes": 6,
      "systems": 11,
      "proPlusGoals": 3,
      "sourceGate": "release",
      "closeoutStatus": "sealed",
      "operatorStatus": "operator-ready",
      "fullStackStatus": "valid",
      "packageTests": 148,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "roadmapGoals": [
      {
        "id": "round2-01",
        "title": "Live Pro+ evidence refresh",
        "theme": "Learning more from less, and not breaking",
        "objective": "Refresh the promoted compute, temporal, driving, grounding, and provenance payloads and compare them against cached results.",
        "systems": [
          "efficient-vision-serving",
          "video-world-model",
          "driving-vla-release-gate"
        ],
        "targetSurface": "cvpr-colab-result-replay.html",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "runtime": "colab-pro-plus",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "acceptance": "builder, verifier, package test, index link, and full-stack validation all pass",
        "status": "ready"
      },
      {
        "id": "round2-02",
        "title": "Visual QA and interaction sweep",
        "theme": "Making pixels from meaning",
        "objective": "Run screenshot and interaction checks across the new gauntlet, remediation, and release surfaces.",
        "systems": [
          "controllable-generation-studio",
          "restoration-reliability-stack"
        ],
        "targetSurface": "index.html",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "runtime": "local-browser",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "acceptance": "builder, verifier, package test, index link, and full-stack validation all pass",
        "status": "ready"
      },
      {
        "id": "round2-03",
        "title": "Scenario expansion pack",
        "theme": "Naming and locating what's in the picture",
        "objective": "Add a new set of rare-object, adversarial-text, and unsupported-query incidents to the cross-theme gauntlet.",
        "systems": [
          "open-vocab-visual-search",
          "vlm-grounded-reasoning"
        ],
        "targetSurface": "cvpr-cross-theme-incident-gauntlet.html",
        "evidence": "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
        "runtime": "colab-pro-plus",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "acceptance": "builder, verifier, package test, index link, and full-stack validation all pass",
        "status": "ready"
      },
      {
        "id": "round2-04",
        "title": "3D and temporal rollback stress",
        "theme": "Recovering the 3D world from flat pictures",
        "objective": "Stress geometry, splat, and temporal rows under rollback rehearsal timing and provenance continuity checks.",
        "systems": [
          "metric-3d-reconstruction",
          "gaussian-splatting-platform",
          "video-world-model"
        ],
        "targetSurface": "cvpr-remediation-rollback-rehearsal-lab.html",
        "evidence": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
        "runtime": "cached-system-evidence",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "acceptance": "builder, verifier, package test, index link, and full-stack validation all pass",
        "status": "ready"
      },
      {
        "id": "round2-05",
        "title": "Clinical and safety escalation playbook",
        "theme": "Using vision to act in the world",
        "objective": "Add escalation drills that connect clinical shift, driving safety, and canary rollback policy into one operator path.",
        "systems": [
          "medical-vision-validation",
          "driving-vla-release-gate"
        ],
        "targetSurface": "cvpr-remediation-canary-monitor.html",
        "evidence": "analysis/cvpr_remediation_canary_monitor/registry.json",
        "runtime": "colab-pro-plus",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "acceptance": "builder, verifier, package test, index link, and full-stack validation all pass",
        "status": "ready"
      },
      {
        "id": "round2-06",
        "title": "Closeout manifest reseal",
        "theme": "The frontier - new senses and new duties",
        "objective": "Seal the remediation closeout pack into release manifest and change-control evidence.",
        "systems": [
          "adversarial-provenance-gate"
        ],
        "targetSurface": "cvpr-remediation-closeout-pack.html",
        "evidence": "analysis/cvpr_remediation_closeout_pack/registry.json",
        "runtime": "local-validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "acceptance": "builder, verifier, package test, index link, and full-stack validation all pass",
        "status": "ready"
      }
    ],
    "sources": {
      "brief": "analysis/cvpr_remediation_release_brief/registry.json",
      "closeout": "analysis/cvpr_remediation_closeout_pack/registry.json",
      "command": "analysis/cvpr_remediation_command_center/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "gauntlet": {
    "summary": {
      "demo": "cvpr-cross-theme-incident-gauntlet",
      "status": "release",
      "round": "second-round-cross-theme",
      "demos": 8,
      "themes": 8,
      "incidents": 4,
      "gauntletRows": 32,
      "sourceRelease": 8,
      "release": 3,
      "review": 15,
      "block": 14,
      "gpuBackedOrCachedCases": 48,
      "minEvidence": 40.5,
      "maxRisk": 82.4,
      "avgResilience": 55.5,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "incidents": [
      {
        "id": "launch-audit",
        "title": "Launch audit",
        "readinessShift": 0,
        "riskShift": 0,
        "evidenceShift": 0,
        "proPlusPenalty": 0
      },
      {
        "id": "gpu-brownout",
        "title": "GPU brownout",
        "readinessShift": -10,
        "riskShift": 8,
        "evidenceShift": -5,
        "proPlusPenalty": 4
      },
      {
        "id": "adversarial-content",
        "title": "Adversarial content",
        "readinessShift": -8,
        "riskShift": 18,
        "evidenceShift": -8,
        "proPlusPenalty": 0
      },
      {
        "id": "compound-launch",
        "title": "Compound launch",
        "readinessShift": -18,
        "riskShift": 25,
        "evidenceShift": -15,
        "proPlusPenalty": 5
      }
    ],
    "demos": [
      {
        "id": "adaptive-serving",
        "title": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "summary": {
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
        }
      },
      {
        "id": "constraint-edit",
        "title": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "summary": {
          "demo": "cvpr-constraint-edit-tournament",
          "status": "release",
          "backlogGoal": "Constraint edit tournament",
          "backlogTasksCovered": 3,
          "theme": "Making pixels from meaning",
          "systems": [
            "controllable-generation-studio",
            "restoration-reliability-stack"
          ],
          "benches": [
            "cvpr-constraint-generation-bench",
            "cvpr-restoration-fidelity-bench"
          ],
          "generationCases": 4,
          "restorationCases": 4,
          "policies": 3,
          "matches": 48,
          "release": 9,
          "review": 39,
          "block": 0,
          "gpuBackedCases": 8,
          "minConstraintScore": 79.1,
          "maxJointRisk": 37.4,
          "avgTournamentScore": 77.8,
          "proPlusJobs": [
            "constraint-generation",
            "restoration-fidelity"
          ],
          "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
        }
      },
      {
        "id": "open-vocab",
        "title": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "summary": {
          "demo": "cvpr-open-vocab-failure-hunt",
          "status": "release",
          "backlogGoal": "Open-vocabulary failure hunt",
          "backlogTasksCovered": 3,
          "theme": "Naming and locating what's in the picture",
          "system": "open-vocab-visual-search",
          "bench": "cvpr-long-tail-grounding-bench",
          "cases": 4,
          "probes": 4,
          "probeRows": 16,
          "clear": 10,
          "watch": 6,
          "hunt": 0,
          "gpuBackedCases": 4,
          "minLocalizedEvidence": 81.6,
          "maxUnsupportedRisk": 35.6,
          "avgReadiness": 80.3,
          "proPlusJob": "open-vocab-grounding",
          "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
        }
      },
      {
        "id": "3d-edit-provenance",
        "title": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "summary": {
          "demo": "cvpr-3d-edit-provenance-room",
          "status": "release",
          "backlogGoal": "3D edit provenance room",
          "backlogTasksCovered": 3,
          "theme": "Recovering the 3D world from flat pictures",
          "systems": [
            "metric-3d-reconstruction",
            "gaussian-splatting-platform"
          ],
          "benches": [
            "cvpr-metric-geometry-bench",
            "cvpr-gaussian-splatting-bench"
          ],
          "geometryCases": 4,
          "splatCases": 4,
          "edits": 3,
          "roomRows": 48,
          "release": 32,
          "review": 12,
          "block": 4,
          "cachedSystemEvidenceCases": 8,
          "evidenceJobs": [
            "metric-geometry",
            "gaussian-splatting"
          ],
          "minProvenanceContinuity": 76.1,
          "maxRoomRisk": 43.3,
          "avgReadiness": 77.8,
          "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
        }
      },
      {
        "id": "temporal-counterfactual",
        "title": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "summary": {
          "demo": "cvpr-temporal-counterfactual-lab",
          "status": "release",
          "backlogGoal": "Temporal counterfactual lab",
          "backlogTasksCovered": 3,
          "theme": "Seeing and making things that move",
          "system": "video-world-model",
          "bench": "cvpr-temporal-rollout-bench",
          "cases": 4,
          "forks": 4,
          "counterfactualRows": 16,
          "stable": 8,
          "watch": 8,
          "break": 0,
          "gpuBackedCases": 4,
          "maxDrift": 52.4,
          "minIdentityStability": 59.8,
          "avgReadiness": 71.4,
          "proPlusJob": "temporal-rollout",
          "replayRows": 1,
          "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
        }
      },
      {
        "id": "grounded-answer",
        "title": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "summary": {
          "demo": "cvpr-grounded-answer-courtroom",
          "status": "release",
          "backlogGoal": "Grounded answer courtroom",
          "backlogTasksCovered": 3,
          "theme": "Teaching machines to see and talk at once",
          "system": "vlm-grounded-reasoning",
          "bench": "cvpr-vlm-answer-verification-bench",
          "cases": 4,
          "probes": 4,
          "courtroomRows": 16,
          "admit": 12,
          "crossExamine": 4,
          "sustainObjection": 0,
          "cachedSystemEvidenceCases": 4,
          "maxUnsupportedClaimRisk": 48.6,
          "minVisualCitation": 61.9,
          "avgReadiness": 75.2,
          "evidenceKey": "vlm-grounded-reasoning",
          "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
        }
      },
      {
        "id": "provenance-red-team",
        "title": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "summary": {
          "demo": "cvpr-provenance-red-team-arena",
          "status": "release",
          "backlogGoal": "Provenance red-team arena",
          "backlogTasksCovered": 3,
          "theme": "The frontier - new senses and new duties",
          "systems": [
            "adversarial-provenance-gate",
            "medical-vision-validation"
          ],
          "benches": [
            "cvpr-adversarial-provenance-bench",
            "cvpr-clinical-shift-bench"
          ],
          "cases": 4,
          "attacks": 4,
          "arenaRows": 16,
          "release": 6,
          "review": 10,
          "block": 0,
          "gpuBackedCases": 8,
          "clinicalResidualRisk": 33.5,
          "minEvidence": 78.8,
          "maxDeploymentRisk": 50.7,
          "avgReadiness": 73.3,
          "proPlusJobs": [
            "adversarial-provenance",
            "clinical-shift"
          ],
          "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
        }
      },
      {
        "id": "safety-deployment",
        "title": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "summary": {
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
        }
      }
    ],
    "gauntletRows": [
      {
        "id": "adaptive-serving/launch-audit",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 73.8,
          "risk": 30.4,
          "evidence": 76.3,
          "rows": 12,
          "proPlusJobs": [
            "compute-serving"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 73.8,
          "risk": 30.4,
          "evidence": 76.3,
          "resilience": 72.9
        },
        "decision": "release"
      },
      {
        "id": "adaptive-serving/gpu-brownout",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 73.8,
          "risk": 30.4,
          "evidence": 76.3,
          "rows": 12,
          "proPlusJobs": [
            "compute-serving"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 59.8,
          "risk": 42.4,
          "evidence": 69.3,
          "resilience": 61.1
        },
        "decision": "review"
      },
      {
        "id": "adaptive-serving/adversarial-content",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 73.8,
          "risk": 30.4,
          "evidence": 76.3,
          "rows": 12,
          "proPlusJobs": [
            "compute-serving"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 65.8,
          "risk": 48.4,
          "evidence": 68.3,
          "resilience": 61.5
        },
        "decision": "review"
      },
      {
        "id": "adaptive-serving/compound-launch",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 73.8,
          "risk": 30.4,
          "evidence": 76.3,
          "rows": 12,
          "proPlusJobs": [
            "compute-serving"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 50.8,
          "risk": 60.4,
          "evidence": 59.3,
          "resilience": 48.9
        },
        "decision": "block"
      },
      {
        "id": "constraint-edit/launch-audit",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 77.8,
          "risk": 37.4,
          "evidence": 79.1,
          "rows": 48,
          "proPlusJobs": [
            "constraint-generation",
            "restoration-fidelity"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 77.8,
          "risk": 37.4,
          "evidence": 79.1,
          "resilience": 72.9
        },
        "decision": "release"
      },
      {
        "id": "constraint-edit/gpu-brownout",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 77.8,
          "risk": 37.4,
          "evidence": 79.1,
          "rows": 48,
          "proPlusJobs": [
            "constraint-generation",
            "restoration-fidelity"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 63.8,
          "risk": 49.4,
          "evidence": 72.1,
          "resilience": 61.1
        },
        "decision": "review"
      },
      {
        "id": "constraint-edit/adversarial-content",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 77.8,
          "risk": 37.4,
          "evidence": 79.1,
          "rows": 48,
          "proPlusJobs": [
            "constraint-generation",
            "restoration-fidelity"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 69.8,
          "risk": 55.4,
          "evidence": 71.1,
          "resilience": 61.5
        },
        "decision": "review"
      },
      {
        "id": "constraint-edit/compound-launch",
        "demoId": "constraint-edit",
        "demoTitle": "Constraint Edit Tournament",
        "theme": "Making pixels from meaning",
        "page": "cvpr-constraint-edit-tournament.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 77.8,
          "risk": 37.4,
          "evidence": 79.1,
          "rows": 48,
          "proPlusJobs": [
            "constraint-generation",
            "restoration-fidelity"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 54.8,
          "risk": 67.4,
          "evidence": 62.1,
          "resilience": 48.9
        },
        "decision": "block"
      },
      {
        "id": "open-vocab/launch-audit",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 80.3,
          "risk": 35.6,
          "evidence": 81.6,
          "rows": 16,
          "proPlusJobs": [
            "open-vocab-grounding"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 80.3,
          "risk": 35.6,
          "evidence": 81.6,
          "resilience": 75.2
        },
        "decision": "release"
      },
      {
        "id": "open-vocab/gpu-brownout",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 80.3,
          "risk": 35.6,
          "evidence": 81.6,
          "rows": 16,
          "proPlusJobs": [
            "open-vocab-grounding"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 66.3,
          "risk": 47.6,
          "evidence": 74.6,
          "resilience": 63.4
        },
        "decision": "review"
      },
      {
        "id": "open-vocab/adversarial-content",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 80.3,
          "risk": 35.6,
          "evidence": 81.6,
          "rows": 16,
          "proPlusJobs": [
            "open-vocab-grounding"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 72.3,
          "risk": 53.6,
          "evidence": 73.6,
          "resilience": 63.8
        },
        "decision": "review"
      },
      {
        "id": "open-vocab/compound-launch",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 80.3,
          "risk": 35.6,
          "evidence": 81.6,
          "rows": 16,
          "proPlusJobs": [
            "open-vocab-grounding"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 57.3,
          "risk": 65.6,
          "evidence": 64.6,
          "resilience": 51.1
        },
        "decision": "block"
      },
      {
        "id": "3d-edit-provenance/launch-audit",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 77.8,
          "risk": 43.3,
          "evidence": 76.1,
          "rows": 48,
          "proPlusJobs": [],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 77.8,
          "risk": 43.3,
          "evidence": 76.1,
          "resilience": 70.3
        },
        "decision": "review"
      },
      {
        "id": "3d-edit-provenance/gpu-brownout",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 77.8,
          "risk": 43.3,
          "evidence": 76.1,
          "rows": 48,
          "proPlusJobs": [],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 65.8,
          "risk": 53.3,
          "evidence": 70.1,
          "resilience": 60.3
        },
        "decision": "review"
      },
      {
        "id": "3d-edit-provenance/adversarial-content",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 77.8,
          "risk": 43.3,
          "evidence": 76.1,
          "rows": 48,
          "proPlusJobs": [],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 69.8,
          "risk": 61.3,
          "evidence": 68.1,
          "resilience": 58.9
        },
        "decision": "review"
      },
      {
        "id": "3d-edit-provenance/compound-launch",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 77.8,
          "risk": 43.3,
          "evidence": 76.1,
          "rows": 48,
          "proPlusJobs": [],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 57.8,
          "risk": 70.3,
          "evidence": 60.1,
          "resilience": 48.8
        },
        "decision": "block"
      },
      {
        "id": "temporal-counterfactual/launch-audit",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 71.4,
          "risk": 52.4,
          "evidence": 59.8,
          "rows": 16,
          "proPlusJobs": [
            "temporal-rollout"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 71.4,
          "risk": 52.4,
          "evidence": 59.8,
          "resilience": 60.8
        },
        "decision": "review"
      },
      {
        "id": "temporal-counterfactual/gpu-brownout",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 71.4,
          "risk": 52.4,
          "evidence": 59.8,
          "rows": 16,
          "proPlusJobs": [
            "temporal-rollout"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 57.4,
          "risk": 64.4,
          "evidence": 52.8,
          "resilience": 49.0
        },
        "decision": "block"
      },
      {
        "id": "temporal-counterfactual/adversarial-content",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 71.4,
          "risk": 52.4,
          "evidence": 59.8,
          "rows": 16,
          "proPlusJobs": [
            "temporal-rollout"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 63.4,
          "risk": 70.4,
          "evidence": 51.8,
          "resilience": 49.4
        },
        "decision": "block"
      },
      {
        "id": "temporal-counterfactual/compound-launch",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 71.4,
          "risk": 52.4,
          "evidence": 59.8,
          "rows": 16,
          "proPlusJobs": [
            "temporal-rollout"
          ],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 48.4,
          "risk": 82.4,
          "evidence": 42.8,
          "resilience": 36.7
        },
        "decision": "block"
      },
      {
        "id": "grounded-answer/launch-audit",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 75.2,
          "risk": 48.6,
          "evidence": 61.9,
          "rows": 16,
          "proPlusJobs": [],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 75.2,
          "risk": 48.6,
          "evidence": 61.9,
          "resilience": 64.2
        },
        "decision": "review"
      },
      {
        "id": "grounded-answer/gpu-brownout",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 75.2,
          "risk": 48.6,
          "evidence": 61.9,
          "rows": 16,
          "proPlusJobs": [],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 63.2,
          "risk": 58.6,
          "evidence": 55.9,
          "resilience": 54.2
        },
        "decision": "review"
      },
      {
        "id": "grounded-answer/adversarial-content",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 75.2,
          "risk": 48.6,
          "evidence": 61.9,
          "rows": 16,
          "proPlusJobs": [],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 67.2,
          "risk": 66.6,
          "evidence": 53.9,
          "resilience": 52.8
        },
        "decision": "block"
      },
      {
        "id": "grounded-answer/compound-launch",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 75.2,
          "risk": 48.6,
          "evidence": 61.9,
          "rows": 16,
          "proPlusJobs": [],
          "gpuBackedCases": 4,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 55.2,
          "risk": 75.6,
          "evidence": 45.9,
          "resilience": 42.7
        },
        "decision": "block"
      },
      {
        "id": "provenance-red-team/launch-audit",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 73.3,
          "risk": 50.7,
          "evidence": 78.8,
          "rows": 16,
          "proPlusJobs": [
            "adversarial-provenance",
            "clinical-shift"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 73.3,
          "risk": 50.7,
          "evidence": 78.8,
          "resilience": 66.3
        },
        "decision": "review"
      },
      {
        "id": "provenance-red-team/gpu-brownout",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 73.3,
          "risk": 50.7,
          "evidence": 78.8,
          "rows": 16,
          "proPlusJobs": [
            "adversarial-provenance",
            "clinical-shift"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 59.3,
          "risk": 62.7,
          "evidence": 71.8,
          "resilience": 54.6
        },
        "decision": "review"
      },
      {
        "id": "provenance-red-team/adversarial-content",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 73.3,
          "risk": 50.7,
          "evidence": 78.8,
          "rows": 16,
          "proPlusJobs": [
            "adversarial-provenance",
            "clinical-shift"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 65.3,
          "risk": 68.7,
          "evidence": 70.8,
          "resilience": 54.9
        },
        "decision": "block"
      },
      {
        "id": "provenance-red-team/compound-launch",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 73.3,
          "risk": 50.7,
          "evidence": 78.8,
          "rows": 16,
          "proPlusJobs": [
            "adversarial-provenance",
            "clinical-shift"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 50.3,
          "risk": 80.7,
          "evidence": 61.8,
          "resilience": 42.3
        },
        "decision": "block"
      },
      {
        "id": "safety-deployment/launch-audit",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "signals": {
          "readiness": 56.1,
          "risk": 52.2,
          "evidence": 57.5,
          "rows": 16,
          "proPlusJobs": [
            "clinical-shift",
            "driving-safety"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 56.1,
          "risk": 52.2,
          "evidence": 57.5,
          "resilience": 53.6
        },
        "decision": "review"
      },
      {
        "id": "safety-deployment/gpu-brownout",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "signals": {
          "readiness": 56.1,
          "risk": 52.2,
          "evidence": 57.5,
          "rows": 16,
          "proPlusJobs": [
            "clinical-shift",
            "driving-safety"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 42.1,
          "risk": 64.2,
          "evidence": 50.5,
          "resilience": 41.8
        },
        "decision": "block"
      },
      {
        "id": "safety-deployment/adversarial-content",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "signals": {
          "readiness": 56.1,
          "risk": 52.2,
          "evidence": 57.5,
          "rows": 16,
          "proPlusJobs": [
            "clinical-shift",
            "driving-safety"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 48.1,
          "risk": 70.2,
          "evidence": 49.5,
          "resilience": 42.2
        },
        "decision": "block"
      },
      {
        "id": "safety-deployment/compound-launch",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "signals": {
          "readiness": 56.1,
          "risk": 52.2,
          "evidence": 57.5,
          "rows": 16,
          "proPlusJobs": [
            "clinical-shift",
            "driving-safety"
          ],
          "gpuBackedCases": 8,
          "sourceStatus": "release"
        },
        "metrics": {
          "readiness": 33.1,
          "risk": 82.2,
          "evidence": 40.5,
          "resilience": 29.5
        },
        "decision": "block"
      }
    ],
    "sources": {
      "adaptive-serving": "analysis/cvpr_adaptive_serving_stress_lab/registry.json",
      "constraint-edit": "analysis/cvpr_constraint_edit_tournament/registry.json",
      "open-vocab": "analysis/cvpr_open_vocab_failure_hunt/registry.json",
      "3d-edit-provenance": "analysis/cvpr_3d_edit_provenance_room/registry.json",
      "temporal-counterfactual": "analysis/cvpr_temporal_counterfactual_lab/registry.json",
      "grounded-answer": "analysis/cvpr_grounded_answer_courtroom/registry.json",
      "provenance-red-team": "analysis/cvpr_provenance_red_team_arena/registry.json",
      "safety-deployment": "analysis/cvpr_safety_deployment_simulator/registry.json"
    }
  },
  "visualQa": {
    "summary": {
      "demo": "cvpr-visual-qa-sweep-dashboard",
      "status": "ready",
      "surfaces": 8,
      "readySurfaces": 8,
      "workflows": 8,
      "requiredTokensMissing": 0,
      "brokenLocalLinks": 0,
      "todoMarkers": 0,
      "highLayoutRisk": 0,
      "roadmapStatus": "ready",
      "closeoutStatus": "sealed",
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "qaRows": [
      {
        "page": "index.html",
        "workflow": "global navigation",
        "interaction": "open roadmap, closeout, replay, gauntlet, and validation links",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 28955,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 137,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "medium",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-second-round-demo-roadmap.html",
        "workflow": "second-round planning",
        "interaction": "inspect goal rows and jump to target surfaces",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 5662,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 10,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-colab-result-replay.html",
        "workflow": "Pro+ evidence replay",
        "interaction": "inspect replay commands and per-job result matrix",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 7935,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 15,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "medium",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-cross-theme-incident-gauntlet.html",
        "workflow": "scenario expansion",
        "interaction": "scan cross-theme incident rows and owner actions",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 23118,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 37,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-remediation-canary-monitor.html",
        "workflow": "clinical and safety escalation",
        "interaction": "review canary rows, breach policy, and rollback actions",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 11840,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 34,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-remediation-rollback-rehearsal-lab.html",
        "workflow": "3D and temporal rollback stress",
        "interaction": "inspect timed rollback rehearsals and missed-step evidence",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 8058,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 17,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-remediation-closeout-pack.html",
        "workflow": "manifest reseal",
        "interaction": "confirm closeout rows and change-control seal",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 5390,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 12,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-validation-center.html",
        "workflow": "full-stack gate",
        "interaction": "inspect command steps, package tests, and validation status",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 4466,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 11,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "medium",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      }
    ],
    "sources": {
      "roadmap": "analysis/cvpr_second_round_demo_roadmap/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json",
      "closeout": "analysis/cvpr_remediation_closeout_pack/registry.json"
    }
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 149,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 25.095
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
      }
    ]
  }
};
export const scenarioRows = [
  {
    "id": "scenario-01",
    "family": "rare-object",
    "title": "Rare object under partial occlusion",
    "theme": "Naming and locating what's in the picture",
    "system": "open-vocab",
    "targetPage": "cvpr-open-vocab-failure-hunt.html",
    "sourceGauntletRow": "open-vocab/launch-audit",
    "sourceDecision": "release",
    "readinessShift": -8,
    "riskShift": 13,
    "evidenceShift": -9,
    "expanded": {
      "readiness": 72.3,
      "risk": 48.6,
      "evidence": 72.6
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "ship"
  },
  {
    "id": "scenario-02",
    "family": "rare-object",
    "title": "Fine-grained medical object with lookalike distractor",
    "theme": "Naming and locating what's in the picture",
    "system": "open-vocab",
    "targetPage": "cvpr-open-vocab-failure-hunt.html",
    "sourceGauntletRow": "open-vocab/launch-audit",
    "sourceDecision": "release",
    "readinessShift": -10,
    "riskShift": 15,
    "evidenceShift": -11,
    "expanded": {
      "readiness": 70.3,
      "risk": 50.6,
      "evidence": 70.6
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "ship"
  },
  {
    "id": "scenario-03",
    "family": "adversarial-text",
    "title": "Conflicting overlay text near true object",
    "theme": "Teaching machines to see and talk at once",
    "system": "grounded-answer",
    "targetPage": "cvpr-grounded-answer-courtroom.html",
    "sourceGauntletRow": "grounded-answer/launch-audit",
    "sourceDecision": "review",
    "readinessShift": -9,
    "riskShift": 18,
    "evidenceShift": -10,
    "expanded": {
      "readiness": 66.2,
      "risk": 66.6,
      "evidence": 51.9
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "retest"
  },
  {
    "id": "scenario-04",
    "family": "adversarial-text",
    "title": "Prompt-injection label inside the scene",
    "theme": "Teaching machines to see and talk at once",
    "system": "grounded-answer",
    "targetPage": "cvpr-grounded-answer-courtroom.html",
    "sourceGauntletRow": "grounded-answer/launch-audit",
    "sourceDecision": "review",
    "readinessShift": -12,
    "riskShift": 21,
    "evidenceShift": -12,
    "expanded": {
      "readiness": 63.2,
      "risk": 69.6,
      "evidence": 49.9
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "retest"
  },
  {
    "id": "scenario-05",
    "family": "unsupported-query",
    "title": "Question asks for hidden evidence outside the frame",
    "theme": "Teaching machines to see and talk at once",
    "system": "grounded-answer",
    "targetPage": "cvpr-grounded-answer-courtroom.html",
    "sourceGauntletRow": "grounded-answer/launch-audit",
    "sourceDecision": "review",
    "readinessShift": -7,
    "riskShift": 16,
    "evidenceShift": -14,
    "expanded": {
      "readiness": 68.2,
      "risk": 64.6,
      "evidence": 47.9
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "retest"
  },
  {
    "id": "scenario-06",
    "family": "unsupported-query",
    "title": "Open-vocab class requested but localization is absent",
    "theme": "Naming and locating what's in the picture",
    "system": "open-vocab",
    "targetPage": "cvpr-open-vocab-failure-hunt.html",
    "sourceGauntletRow": "open-vocab/launch-audit",
    "sourceDecision": "release",
    "readinessShift": -9,
    "riskShift": 17,
    "evidenceShift": -13,
    "expanded": {
      "readiness": 71.3,
      "risk": 52.6,
      "evidence": 68.6
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "ship"
  },
  {
    "id": "scenario-07",
    "family": "spatial-ambiguity",
    "title": "Small object inside cluttered nested containers",
    "theme": "Naming and locating what's in the picture",
    "system": "open-vocab",
    "targetPage": "cvpr-open-vocab-failure-hunt.html",
    "sourceGauntletRow": "open-vocab/launch-audit",
    "sourceDecision": "release",
    "readinessShift": -6,
    "riskShift": 12,
    "evidenceShift": -8,
    "expanded": {
      "readiness": 74.3,
      "risk": 47.6,
      "evidence": 73.6
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "ship"
  },
  {
    "id": "scenario-08",
    "family": "spatial-ambiguity",
    "title": "Answer cites correct object but wrong region",
    "theme": "Teaching machines to see and talk at once",
    "system": "grounded-answer",
    "targetPage": "cvpr-grounded-answer-courtroom.html",
    "sourceGauntletRow": "grounded-answer/launch-audit",
    "sourceDecision": "review",
    "readinessShift": -8,
    "riskShift": 14,
    "evidenceShift": -11,
    "expanded": {
      "readiness": 67.2,
      "risk": 62.6,
      "evidence": 50.9
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "retest"
  },
  {
    "id": "scenario-09",
    "family": "temporal-mismatch",
    "title": "Video answer relies on stale earlier frame",
    "theme": "Teaching machines to see and talk at once",
    "system": "grounded-answer",
    "targetPage": "cvpr-grounded-answer-courtroom.html",
    "sourceGauntletRow": "grounded-answer/launch-audit",
    "sourceDecision": "review",
    "readinessShift": -11,
    "riskShift": 19,
    "evidenceShift": -12,
    "expanded": {
      "readiness": 64.2,
      "risk": 67.6,
      "evidence": 49.9
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "retest"
  },
  {
    "id": "scenario-10",
    "family": "temporal-mismatch",
    "title": "Open-vocab target appears only after scene cut",
    "theme": "Naming and locating what's in the picture",
    "system": "open-vocab",
    "targetPage": "cvpr-open-vocab-failure-hunt.html",
    "sourceGauntletRow": "open-vocab/launch-audit",
    "sourceDecision": "release",
    "readinessShift": -10,
    "riskShift": 18,
    "evidenceShift": -10,
    "expanded": {
      "readiness": 70.3,
      "risk": 53.6,
      "evidence": 71.6
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "ship"
  },
  {
    "id": "scenario-11",
    "family": "provenance-conflict",
    "title": "Generated crop has missing source provenance",
    "theme": "Naming and locating what's in the picture",
    "system": "open-vocab",
    "targetPage": "cvpr-open-vocab-failure-hunt.html",
    "sourceGauntletRow": "open-vocab/launch-audit",
    "sourceDecision": "release",
    "readinessShift": -7,
    "riskShift": 20,
    "evidenceShift": -15,
    "expanded": {
      "readiness": 73.3,
      "risk": 55.6,
      "evidence": 66.6
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "retest"
  },
  {
    "id": "scenario-12",
    "family": "provenance-conflict",
    "title": "VLM citation points to edited evidence",
    "theme": "Teaching machines to see and talk at once",
    "system": "grounded-answer",
    "targetPage": "cvpr-grounded-answer-courtroom.html",
    "sourceGauntletRow": "grounded-answer/launch-audit",
    "sourceDecision": "review",
    "readinessShift": -10,
    "riskShift": 22,
    "evidenceShift": -16,
    "expanded": {
      "readiness": 65.2,
      "risk": 70.6,
      "evidence": 45.9
    },
    "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "decision": "retest"
  }
];
export const summary = {
  "demo": "cvpr-scenario-expansion-pack",
  "status": "ready",
  "scenarios": 12,
  "families": 6,
  "systems": 2,
  "themes": 2,
  "ship": 5,
  "retest": 7,
  "block": 0,
  "maxRisk": 70.6,
  "minEvidence": 45.9,
  "gauntletStatus": "release",
  "roadmapStatus": "ready",
  "visualQaStatus": "ready",
  "fullStackStatus": "valid",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
