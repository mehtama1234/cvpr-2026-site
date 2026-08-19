export const backlogInput = {
  "roadmap": {
    "summary": {
      "roadmap": "cvpr-next-demo-roadmap",
      "status": "block",
      "goals": 8,
      "themes": 8,
      "linkedSystems": 11,
      "proPlusGoals": 7,
      "cachedEvidenceGoals": 1,
      "missingEvidence": 0,
      "operatorStatus": "block",
      "packageTests": 148
    },
    "roadmapGoals": [
      {
        "id": "roadmap-01",
        "theme": "Learning more from less, and not breaking",
        "title": "Adaptive serving stress lab",
        "objective": "Add a live budget-control demo that sweeps latency, token pruning, and escalation thresholds.",
        "systems": [
          "efficient-vision-serving"
        ],
        "benches": [
          "cvpr-compute-serving-bench"
        ],
        "evidencePages": [
          "cvpr-compute-serving-bench.html"
        ],
        "runtimeEvidence": "colab-pro-plus",
        "proPlusJobs": [
          "compute-serving"
        ],
        "cachedEvidenceSystems": [],
        "stageDemos": 3,
        "benchCases": 4,
        "readinessFloor": 86.9,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "roadmap-02",
        "theme": "Making pixels from meaning",
        "title": "Constraint edit tournament",
        "objective": "Compare identity, layout, and preference controls across adversarial edit prompts.",
        "systems": [
          "controllable-generation-studio",
          "restoration-reliability-stack"
        ],
        "benches": [
          "cvpr-constraint-generation-bench",
          "cvpr-restoration-fidelity-bench"
        ],
        "evidencePages": [
          "cvpr-constraint-generation-bench.html",
          "cvpr-restoration-fidelity-bench.html"
        ],
        "runtimeEvidence": "colab-pro-plus",
        "proPlusJobs": [
          "constraint-generation",
          "restoration-fidelity"
        ],
        "cachedEvidenceSystems": [],
        "stageDemos": 6,
        "benchCases": 8,
        "readinessFloor": 70.5,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "roadmap-03",
        "theme": "Naming and locating what's in the picture",
        "title": "Open-vocabulary failure hunt",
        "objective": "Add long-tail query packs that expose ambiguity, distractors, and missing evidence.",
        "systems": [
          "open-vocab-visual-search"
        ],
        "benches": [
          "cvpr-long-tail-grounding-bench"
        ],
        "evidencePages": [
          "cvpr-long-tail-grounding-bench.html"
        ],
        "runtimeEvidence": "colab-pro-plus",
        "proPlusJobs": [
          "open-vocab-grounding"
        ],
        "cachedEvidenceSystems": [],
        "stageDemos": 3,
        "benchCases": 4,
        "readinessFloor": 44.0,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "roadmap-04",
        "theme": "Recovering the 3D world from flat pictures",
        "title": "3D edit provenance room",
        "objective": "Link metric geometry and splat evidence in one inspectable scene-level demo.",
        "systems": [
          "gaussian-splatting-platform",
          "metric-3d-reconstruction"
        ],
        "benches": [
          "cvpr-gaussian-splatting-bench",
          "cvpr-metric-geometry-bench"
        ],
        "evidencePages": [
          "cvpr-gaussian-splatting-bench.html",
          "cvpr-metric-geometry-bench.html"
        ],
        "runtimeEvidence": "colab-pro-plus",
        "proPlusJobs": [
          "gaussian-splatting",
          "metric-geometry"
        ],
        "cachedEvidenceSystems": [],
        "stageDemos": 6,
        "benchCases": 8,
        "readinessFloor": 73.6,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "roadmap-05",
        "theme": "Seeing and making things that move",
        "title": "Temporal counterfactual lab",
        "objective": "Add rollout forks that show how drift, identity switches, and contact errors compound.",
        "systems": [
          "video-world-model"
        ],
        "benches": [
          "cvpr-temporal-rollout-bench"
        ],
        "evidencePages": [
          "cvpr-temporal-rollout-bench.html"
        ],
        "runtimeEvidence": "colab-pro-plus",
        "proPlusJobs": [
          "temporal-rollout"
        ],
        "cachedEvidenceSystems": [],
        "stageDemos": 3,
        "benchCases": 4,
        "readinessFloor": 80.3,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "roadmap-06",
        "theme": "Teaching machines to see and talk at once",
        "title": "Grounded answer courtroom",
        "objective": "Upgrade cached-system VLM evidence into an adjudication demo with citations and contradiction probes.",
        "systems": [
          "vlm-grounded-reasoning"
        ],
        "benches": [
          "cvpr-vlm-answer-verification-bench"
        ],
        "evidencePages": [
          "cvpr-vlm-answer-verification-bench.html"
        ],
        "runtimeEvidence": "cached-system-evidence",
        "proPlusJobs": [],
        "cachedEvidenceSystems": [
          "vlm-grounded-reasoning"
        ],
        "stageDemos": 3,
        "benchCases": 4,
        "readinessFloor": 0,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "roadmap-07",
        "theme": "The frontier - new senses and new duties",
        "title": "Provenance red-team arena",
        "objective": "Add watermark, perturbation, and unlearning attacks as replayable release drills.",
        "systems": [
          "adversarial-provenance-gate",
          "medical-vision-validation"
        ],
        "benches": [
          "cvpr-adversarial-provenance-bench",
          "cvpr-clinical-shift-bench"
        ],
        "evidencePages": [
          "cvpr-adversarial-provenance-bench.html",
          "cvpr-clinical-shift-bench.html"
        ],
        "runtimeEvidence": "colab-pro-plus",
        "proPlusJobs": [
          "adversarial-provenance",
          "clinical-shift"
        ],
        "cachedEvidenceSystems": [],
        "stageDemos": 6,
        "benchCases": 8,
        "readinessFloor": 53.8,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "roadmap-08",
        "theme": "Using vision to act in the world",
        "title": "Safety deployment simulator",
        "objective": "Stress clinical shift and driving safety gates under site, weather, and hazard changes.",
        "systems": [
          "driving-vla-release-gate"
        ],
        "benches": [
          "cvpr-driving-safety-bench"
        ],
        "evidencePages": [
          "cvpr-driving-safety-bench.html"
        ],
        "runtimeEvidence": "colab-pro-plus",
        "proPlusJobs": [
          "driving-safety"
        ],
        "cachedEvidenceSystems": [],
        "stageDemos": 3,
        "benchCases": 4,
        "readinessFloor": 56.5,
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      }
    ],
    "sources": {
      "portfolio": "analysis/cvpr_theme_portfolio_map/registry.json",
      "cockpit": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "replay": "analysis/cvpr_colab_result_replay/registry.json",
      "commandCenter": "analysis/cvpr_release_command_center/registry.json"
    }
  },
  "portfolio": {
    "summary": {
      "portfolio": "cvpr-theme-portfolio-map",
      "status": "block",
      "themes": 8,
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "benchRelease": 44,
      "missingDemoEvidence": 0,
      "proPlusSystems": 10,
      "cachedEvidenceSystems": 1,
      "operatorStatus": "block"
    },
    "themeRows": [
      {
        "theme": "Learning more from less, and not breaking",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Making pixels from meaning",
        "systems": 2,
        "stages": 6,
        "stageDemos": 6,
        "benchCases": 8,
        "benchRelease": 8,
        "proPlusSystems": 2,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Naming and locating what's in the picture",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Recovering the 3D world from flat pictures",
        "systems": 2,
        "stages": 6,
        "stageDemos": 6,
        "benchCases": 8,
        "benchRelease": 8,
        "proPlusSystems": 2,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Seeing and making things that move",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Teaching machines to see and talk at once",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 0,
        "cachedEvidenceSystems": 1,
        "status": "release"
      },
      {
        "theme": "The frontier - new senses and new duties",
        "systems": 2,
        "stages": 6,
        "stageDemos": 6,
        "benchCases": 8,
        "benchRelease": 8,
        "proPlusSystems": 2,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Using vision to act in the world",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      }
    ],
    "systemRows": [
      {
        "theme": "Learning more from less, and not breaking",
        "system": "efficient-vision-serving",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "inspectPage": "efficient-vision-serving.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "status": "ready"
      },
      {
        "theme": "Making pixels from meaning",
        "system": "controllable-generation-studio",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "inspectPage": "controllable-generation-studio.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      },
      {
        "theme": "Making pixels from meaning",
        "system": "restoration-reliability-stack",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "inspectPage": "restoration-reliability-stack.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "status": "ready"
      },
      {
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab-visual-search",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "inspectPage": "open-vocab-visual-search.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "status": "ready"
      },
      {
        "theme": "Recovering the 3D world from flat pictures",
        "system": "gaussian-splatting-platform",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "inspectPage": "gaussian-splatting-platform.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      },
      {
        "theme": "Recovering the 3D world from flat pictures",
        "system": "metric-3d-reconstruction",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "inspectPage": "metric-3d-reconstruction.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      },
      {
        "theme": "Seeing and making things that move",
        "system": "video-world-model",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "inspectPage": "video-world-model.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "status": "ready"
      },
      {
        "theme": "Teaching machines to see and talk at once",
        "system": "vlm-grounded-reasoning",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "inspectPage": "vlm-grounded-reasoning.html",
        "stageDemos": 3,
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "status": "ready"
      },
      {
        "theme": "The frontier - new senses and new duties",
        "system": "adversarial-provenance-gate",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "inspectPage": "adversarial-provenance-gate.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "status": "ready"
      },
      {
        "theme": "The frontier - new senses and new duties",
        "system": "medical-vision-validation",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "inspectPage": "medical-vision-validation.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "status": "ready"
      },
      {
        "theme": "Using vision to act in the world",
        "system": "driving-vla-release-gate",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "inspectPage": "driving-vla-release-gate.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      }
    ],
    "sources": {
      "systems": "analysis/cvpr_systems/registry.json",
      "themeMatrix": "analysis/cvpr_theme_release_matrix/registry.json",
      "cockpit": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "commandCenter": "analysis/cvpr_release_command_center/registry.json"
    }
  },
  "commandCenter": {
    "summary": {
      "center": "cvpr-release-command-center",
      "status": "block",
      "surfaces": 8,
      "readySurfaces": 2,
      "alerts": 5,
      "importIssues": 0,
      "fullStackStatus": "valid",
      "packageTests": 148,
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "workerJobs": 14,
      "cachedResults": 56
    },
    "surfaceRows": [
      {
        "surface": "cvpr-production-release-brief.html",
        "label": "Production release brief",
        "actual": "release",
        "expected": "release",
        "metric": "8 themes \u00b7 11 systems \u00b7 33 stages \u00b7 41 demos \u00b7 328 arena releases \u00b7 44 bench releases",
        "evidence": "analysis/cvpr_production_release_brief/registry.json",
        "command": "python3 scripts/build_cvpr_production_release_brief.py && python3 scripts/verify_cvpr_production_release_brief.py"
      },
      {
        "surface": "cvpr-launch-readiness-pack.html",
        "label": "Launch readiness pack",
        "actual": "block",
        "expected": "launch-ready",
        "metric": "148 package tests",
        "evidence": "analysis/cvpr_launch_readiness_pack/registry.json",
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py"
      },
      {
        "surface": "cvpr-release-manifest.html",
        "label": "Release manifest",
        "actual": "block",
        "expected": "sealed",
        "metric": "13 artifacts",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py"
      },
      {
        "surface": "cvpr-release-change-control.html",
        "label": "Release change control",
        "actual": "block",
        "expected": "controlled",
        "metric": "13/13 rows",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py"
      },
      {
        "surface": "cvpr-release-dependency-graph.html",
        "label": "Release dependency graph",
        "actual": "block",
        "expected": "ready",
        "metric": "15 nodes / 19 edges",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py"
      },
      {
        "surface": "cvpr-post-launch-monitoring.html",
        "label": "Post-launch monitoring",
        "actual": "block",
        "expected": "watching",
        "metric": "4/9 monitors",
        "evidence": "analysis/cvpr_post_launch_monitoring/registry.json",
        "command": "python3 scripts/build_cvpr_post_launch_monitoring.py && python3 scripts/verify_cvpr_post_launch_monitoring.py"
      },
      {
        "surface": "cvpr-release-audit-trail.html",
        "label": "Release audit trail",
        "actual": "block",
        "expected": "complete",
        "metric": "56/58 events",
        "evidence": "analysis/cvpr_release_audit_trail/registry.json",
        "command": "python3 scripts/build_cvpr_release_audit_trail.py && python3 scripts/verify_cvpr_release_audit_trail.py"
      },
      {
        "surface": "cvpr-validation-center.html",
        "label": "Full-stack validation",
        "actual": "valid",
        "expected": "valid",
        "metric": "99 steps / 148 package tests",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "command": "python3 scripts/validate_cvpr_full_stack.py"
      }
    ],
    "sources": {
      "brief": "analysis/cvpr_production_release_brief/registry.json",
      "launch": "analysis/cvpr_launch_readiness_pack/registry.json",
      "manifest": "analysis/cvpr_release_manifest/registry.json",
      "changeControl": "analysis/cvpr_release_change_control/registry.json",
      "dependencyGraph": "analysis/cvpr_release_dependency_graph/registry.json",
      "monitoring": "analysis/cvpr_post_launch_monitoring/registry.json",
      "auditTrail": "analysis/cvpr_release_audit_trail/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  }
};
export const backlogTasks = [
  {
    "id": "roadmap-01-01-design-scenario",
    "goalId": "roadmap-01",
    "theme": "Learning more from less, and not breaking",
    "goal": "Adaptive serving stress lab",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "efficient-vision-serving"
    ],
    "benches": [
      "cvpr-compute-serving-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "compute-serving"
    ],
    "evidencePage": "cvpr-compute-serving-bench.html",
    "targetFile": "efficient-vision-serving.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 86.9,
    "status": "ready"
  },
  {
    "id": "roadmap-01-02-wire-evidence",
    "goalId": "roadmap-01",
    "theme": "Learning more from less, and not breaking",
    "goal": "Adaptive serving stress lab",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "efficient-vision-serving"
    ],
    "benches": [
      "cvpr-compute-serving-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "compute-serving"
    ],
    "evidencePage": "cvpr-compute-serving-bench.html",
    "targetFile": "analysis/cvpr_compute_serving_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 86.9,
    "status": "ready"
  },
  {
    "id": "roadmap-01-03-ship-gate",
    "goalId": "roadmap-01",
    "theme": "Learning more from less, and not breaking",
    "goal": "Adaptive serving stress lab",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "efficient-vision-serving"
    ],
    "benches": [
      "cvpr-compute-serving-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "compute-serving"
    ],
    "evidencePage": "cvpr-compute-serving-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 86.9,
    "status": "ready"
  },
  {
    "id": "roadmap-02-01-design-scenario",
    "goalId": "roadmap-02",
    "theme": "Making pixels from meaning",
    "goal": "Constraint edit tournament",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "controllable-generation-studio",
      "restoration-reliability-stack"
    ],
    "benches": [
      "cvpr-constraint-generation-bench",
      "cvpr-restoration-fidelity-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "evidencePage": "cvpr-constraint-generation-bench.html",
    "targetFile": "controllable-generation-studio.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 70.5,
    "status": "ready"
  },
  {
    "id": "roadmap-02-02-wire-evidence",
    "goalId": "roadmap-02",
    "theme": "Making pixels from meaning",
    "goal": "Constraint edit tournament",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "controllable-generation-studio",
      "restoration-reliability-stack"
    ],
    "benches": [
      "cvpr-constraint-generation-bench",
      "cvpr-restoration-fidelity-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "evidencePage": "cvpr-constraint-generation-bench.html",
    "targetFile": "analysis/cvpr_constraint_generation_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 70.5,
    "status": "ready"
  },
  {
    "id": "roadmap-02-03-ship-gate",
    "goalId": "roadmap-02",
    "theme": "Making pixels from meaning",
    "goal": "Constraint edit tournament",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "controllable-generation-studio",
      "restoration-reliability-stack"
    ],
    "benches": [
      "cvpr-constraint-generation-bench",
      "cvpr-restoration-fidelity-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "evidencePage": "cvpr-constraint-generation-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 70.5,
    "status": "ready"
  },
  {
    "id": "roadmap-03-01-design-scenario",
    "goalId": "roadmap-03",
    "theme": "Naming and locating what's in the picture",
    "goal": "Open-vocabulary failure hunt",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "open-vocab-visual-search"
    ],
    "benches": [
      "cvpr-long-tail-grounding-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "open-vocab-grounding"
    ],
    "evidencePage": "cvpr-long-tail-grounding-bench.html",
    "targetFile": "open-vocab-visual-search.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 44.0,
    "status": "ready"
  },
  {
    "id": "roadmap-03-02-wire-evidence",
    "goalId": "roadmap-03",
    "theme": "Naming and locating what's in the picture",
    "goal": "Open-vocabulary failure hunt",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "open-vocab-visual-search"
    ],
    "benches": [
      "cvpr-long-tail-grounding-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "open-vocab-grounding"
    ],
    "evidencePage": "cvpr-long-tail-grounding-bench.html",
    "targetFile": "analysis/cvpr_long_tail_grounding_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 44.0,
    "status": "ready"
  },
  {
    "id": "roadmap-03-03-ship-gate",
    "goalId": "roadmap-03",
    "theme": "Naming and locating what's in the picture",
    "goal": "Open-vocabulary failure hunt",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "open-vocab-visual-search"
    ],
    "benches": [
      "cvpr-long-tail-grounding-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "open-vocab-grounding"
    ],
    "evidencePage": "cvpr-long-tail-grounding-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 44.0,
    "status": "ready"
  },
  {
    "id": "roadmap-04-01-design-scenario",
    "goalId": "roadmap-04",
    "theme": "Recovering the 3D world from flat pictures",
    "goal": "3D edit provenance room",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "gaussian-splatting-platform",
      "metric-3d-reconstruction"
    ],
    "benches": [
      "cvpr-gaussian-splatting-bench",
      "cvpr-metric-geometry-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "gaussian-splatting",
      "metric-geometry"
    ],
    "evidencePage": "cvpr-gaussian-splatting-bench.html",
    "targetFile": "gaussian-splatting-platform.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 73.6,
    "status": "ready"
  },
  {
    "id": "roadmap-04-02-wire-evidence",
    "goalId": "roadmap-04",
    "theme": "Recovering the 3D world from flat pictures",
    "goal": "3D edit provenance room",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "gaussian-splatting-platform",
      "metric-3d-reconstruction"
    ],
    "benches": [
      "cvpr-gaussian-splatting-bench",
      "cvpr-metric-geometry-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "gaussian-splatting",
      "metric-geometry"
    ],
    "evidencePage": "cvpr-gaussian-splatting-bench.html",
    "targetFile": "analysis/cvpr_gaussian_splatting_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 73.6,
    "status": "ready"
  },
  {
    "id": "roadmap-04-03-ship-gate",
    "goalId": "roadmap-04",
    "theme": "Recovering the 3D world from flat pictures",
    "goal": "3D edit provenance room",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "gaussian-splatting-platform",
      "metric-3d-reconstruction"
    ],
    "benches": [
      "cvpr-gaussian-splatting-bench",
      "cvpr-metric-geometry-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "gaussian-splatting",
      "metric-geometry"
    ],
    "evidencePage": "cvpr-gaussian-splatting-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 73.6,
    "status": "ready"
  },
  {
    "id": "roadmap-05-01-design-scenario",
    "goalId": "roadmap-05",
    "theme": "Seeing and making things that move",
    "goal": "Temporal counterfactual lab",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "video-world-model"
    ],
    "benches": [
      "cvpr-temporal-rollout-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "temporal-rollout"
    ],
    "evidencePage": "cvpr-temporal-rollout-bench.html",
    "targetFile": "video-world-model.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 80.3,
    "status": "ready"
  },
  {
    "id": "roadmap-05-02-wire-evidence",
    "goalId": "roadmap-05",
    "theme": "Seeing and making things that move",
    "goal": "Temporal counterfactual lab",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "video-world-model"
    ],
    "benches": [
      "cvpr-temporal-rollout-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "temporal-rollout"
    ],
    "evidencePage": "cvpr-temporal-rollout-bench.html",
    "targetFile": "analysis/cvpr_temporal_rollout_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 80.3,
    "status": "ready"
  },
  {
    "id": "roadmap-05-03-ship-gate",
    "goalId": "roadmap-05",
    "theme": "Seeing and making things that move",
    "goal": "Temporal counterfactual lab",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "video-world-model"
    ],
    "benches": [
      "cvpr-temporal-rollout-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "temporal-rollout"
    ],
    "evidencePage": "cvpr-temporal-rollout-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 80.3,
    "status": "ready"
  },
  {
    "id": "roadmap-06-01-design-scenario",
    "goalId": "roadmap-06",
    "theme": "Teaching machines to see and talk at once",
    "goal": "Grounded answer courtroom",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "vlm-grounded-reasoning"
    ],
    "benches": [
      "cvpr-vlm-answer-verification-bench"
    ],
    "runtimeEvidence": "cached-system-evidence",
    "evidenceKeys": [
      "vlm-grounded-reasoning"
    ],
    "evidencePage": "cvpr-vlm-answer-verification-bench.html",
    "targetFile": "vlm-grounded-reasoning.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 0,
    "status": "ready"
  },
  {
    "id": "roadmap-06-02-wire-evidence",
    "goalId": "roadmap-06",
    "theme": "Teaching machines to see and talk at once",
    "goal": "Grounded answer courtroom",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "vlm-grounded-reasoning"
    ],
    "benches": [
      "cvpr-vlm-answer-verification-bench"
    ],
    "runtimeEvidence": "cached-system-evidence",
    "evidenceKeys": [
      "vlm-grounded-reasoning"
    ],
    "evidencePage": "cvpr-vlm-answer-verification-bench.html",
    "targetFile": "analysis/cvpr_vlm_answer_verification_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 0,
    "status": "ready"
  },
  {
    "id": "roadmap-06-03-ship-gate",
    "goalId": "roadmap-06",
    "theme": "Teaching machines to see and talk at once",
    "goal": "Grounded answer courtroom",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "vlm-grounded-reasoning"
    ],
    "benches": [
      "cvpr-vlm-answer-verification-bench"
    ],
    "runtimeEvidence": "cached-system-evidence",
    "evidenceKeys": [
      "vlm-grounded-reasoning"
    ],
    "evidencePage": "cvpr-vlm-answer-verification-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 0,
    "status": "ready"
  },
  {
    "id": "roadmap-07-01-design-scenario",
    "goalId": "roadmap-07",
    "theme": "The frontier - new senses and new duties",
    "goal": "Provenance red-team arena",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "adversarial-provenance-gate",
      "medical-vision-validation"
    ],
    "benches": [
      "cvpr-adversarial-provenance-bench",
      "cvpr-clinical-shift-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "adversarial-provenance",
      "clinical-shift"
    ],
    "evidencePage": "cvpr-adversarial-provenance-bench.html",
    "targetFile": "adversarial-provenance-gate.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 53.8,
    "status": "ready"
  },
  {
    "id": "roadmap-07-02-wire-evidence",
    "goalId": "roadmap-07",
    "theme": "The frontier - new senses and new duties",
    "goal": "Provenance red-team arena",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "adversarial-provenance-gate",
      "medical-vision-validation"
    ],
    "benches": [
      "cvpr-adversarial-provenance-bench",
      "cvpr-clinical-shift-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "adversarial-provenance",
      "clinical-shift"
    ],
    "evidencePage": "cvpr-adversarial-provenance-bench.html",
    "targetFile": "analysis/cvpr_adversarial_provenance_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 53.8,
    "status": "ready"
  },
  {
    "id": "roadmap-07-03-ship-gate",
    "goalId": "roadmap-07",
    "theme": "The frontier - new senses and new duties",
    "goal": "Provenance red-team arena",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "adversarial-provenance-gate",
      "medical-vision-validation"
    ],
    "benches": [
      "cvpr-adversarial-provenance-bench",
      "cvpr-clinical-shift-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "adversarial-provenance",
      "clinical-shift"
    ],
    "evidencePage": "cvpr-adversarial-provenance-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 53.8,
    "status": "ready"
  },
  {
    "id": "roadmap-08-01-design-scenario",
    "goalId": "roadmap-08",
    "theme": "Using vision to act in the world",
    "goal": "Safety deployment simulator",
    "task": "Design the demo scenario",
    "objective": "Define fixtures, user flow, stress knobs, and failure narratives for the next demo.",
    "systems": [
      "driving-vla-release-gate"
    ],
    "benches": [
      "cvpr-driving-safety-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "driving-safety"
    ],
    "evidencePage": "cvpr-driving-safety-bench.html",
    "targetFile": "driving-vla-release-gate.html",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "The demo has a named scenario, target system, linked theme, explicit stress cases, and inspection page handoff.",
    "readinessFloor": 56.5,
    "status": "ready"
  },
  {
    "id": "roadmap-08-02-wire-evidence",
    "goalId": "roadmap-08",
    "theme": "Using vision to act in the world",
    "goal": "Safety deployment simulator",
    "task": "Wire bench and runtime evidence",
    "objective": "Connect bench cases, Pro+ or cached evidence, replay rows, and provenance fields.",
    "systems": [
      "driving-vla-release-gate"
    ],
    "benches": [
      "cvpr-driving-safety-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "driving-safety"
    ],
    "evidencePage": "cvpr-driving-safety-bench.html",
    "targetFile": "analysis/cvpr_driving_safety_bench/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Every demo claim resolves to a bench page, runtime evidence source, and reproducible registry row.",
    "readinessFloor": 56.5,
    "status": "ready"
  },
  {
    "id": "roadmap-08-03-ship-gate",
    "goalId": "roadmap-08",
    "theme": "Using vision to act in the world",
    "goal": "Safety deployment simulator",
    "task": "Ship through release gate",
    "objective": "Add package tests, verifier coverage, index link, and full-stack validation for the new demo.",
    "systems": [
      "driving-vla-release-gate"
    ],
    "benches": [
      "cvpr-driving-safety-bench"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "evidenceKeys": [
      "driving-safety"
    ],
    "evidencePage": "cvpr-driving-safety-bench.html",
    "targetFile": "scripts/validate_cvpr_full_stack.py",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "acceptance": "Focused verifier, package test, release command center, and full-stack validator all pass.",
    "readinessFloor": 56.5,
    "status": "ready"
  }
];
export const summary = {
  "backlog": "cvpr-demo-build-backlog",
  "status": "block",
  "goals": 8,
  "tasks": 24,
  "themes": 8,
  "linkedSystems": 11,
  "proPlusTasks": 21,
  "cachedEvidenceTasks": 3,
  "missingEvidence": 0,
  "operatorStatus": "block",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
  "packageTests": 148
};
