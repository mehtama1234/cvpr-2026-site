export const manifestInput = {
  "launch": {
    "summary": {
      "pack": "cvpr-launch-readiness-pack",
      "status": "block",
      "releaseGate": "release",
      "sloStatus": "block",
      "drillbookStatus": "block",
      "operationsStatus": "ready",
      "validationGate": "release",
      "fullStackStatus": "valid",
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "benchRelease": 44,
      "benchCases": 44,
      "arenaRelease": 328,
      "arenaPairings": 328,
      "workerJobs": 14,
      "cachedResults": 56,
      "liveIntakeResults": 56,
      "packageTests": 148,
      "criticalFailures": 1,
      "importIssues": 0,
      "readinessFloor": 44.0,
      "avgReadiness": 75.14
    },
    "launchSteps": [
      {
        "step": "Release brief",
        "surface": "cvpr-production-release-brief.html",
        "command": "python3 scripts/build_cvpr_production_release_brief.py && python3 scripts/verify_cvpr_production_release_brief.py",
        "evidence": "analysis/cvpr_production_release_brief/registry.json",
        "status": "release"
      },
      {
        "step": "SLO gate",
        "surface": "cvpr-release-slo-dashboard.html",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
        "status": "block"
      },
      {
        "step": "Regression drills",
        "surface": "cvpr-release-regression-drillbook.html",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "evidence": "analysis/cvpr_release_regression_drillbook/registry.json",
        "status": "block"
      },
      {
        "step": "Colab operations",
        "surface": "cvpr-colab-operations-dashboard.html",
        "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py && python3 scripts/verify_cvpr_colab_operations_dashboard.py",
        "evidence": "analysis/cvpr_colab_operations_dashboard/registry.json",
        "status": "ready"
      },
      {
        "step": "Validation center",
        "surface": "cvpr-validation-center.html",
        "command": "python3 scripts/build_cvpr_validation_center.py && python3 scripts/verify_cvpr_validation_center.py",
        "evidence": "analysis/cvpr_validation_center/registry.json",
        "status": "release"
      },
      {
        "step": "Colab import",
        "surface": "cvpr-colab-release-bundle.html",
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "evidence": "analysis/cvpr_colab_gpu_worker/import_validation.json",
        "status": "valid"
      },
      {
        "step": "Full stack",
        "surface": "cvpr-validation-center.html",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "status": "valid"
      },
      {
        "step": "Operator handoff",
        "surface": "index.html",
        "command": "Open index.html and inspect the Production CVPR stack",
        "evidence": "index.html",
        "status": "ready"
      }
    ],
    "sources": {
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json",
      "slos": "analysis/cvpr_release_slo_dashboard/registry.json",
      "drillbook": "analysis/cvpr_release_regression_drillbook/registry.json",
      "operations": "analysis/cvpr_colab_operations_dashboard/registry.json",
      "validation": "analysis/cvpr_validation_center/registry.json",
      "fullStack": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "brief": {
    "summary": {
      "brief": "cvpr-production-release-brief",
      "status": "release",
      "themes": 8,
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "arenaPairings": 328,
      "arenaRelease": 328,
      "arenaReview": 0,
      "arenaBlock": 0,
      "benchCases": 44,
      "benchRelease": 44,
      "benchReview": 0,
      "benchBlock": 0,
      "benchAcceptanceRate": 100.0,
      "failureSeverity": 0,
      "openThemes": 0,
      "workerJobs": 14,
      "cachedResults": 56,
      "liveIntakeResults": 56,
      "evidenceArtifacts": 7,
      "importIssues": 0,
      "packageTests": 148,
      "fullStackStatus": "valid",
      "gate": "release",
      "posture": "all-clear",
      "coverage": "8 themes \u00b7 11 systems \u00b7 33 stages \u00b7 41 demos \u00b7 328 arena releases \u00b7 44 bench releases"
    },
    "evidence": [
      {
        "label": "Mission control",
        "page": "cvpr-mission-control.html",
        "registry": "analysis/cvpr_mission_control/registry.json",
        "status": "interactive"
      },
      {
        "label": "Demo arena",
        "page": "cvpr-demo-arena.html",
        "registry": "analysis/cvpr_demo_arena/registry.json",
        "status": "release"
      },
      {
        "label": "Failure atlas",
        "page": "cvpr-failure-atlas.html",
        "registry": "analysis/cvpr_failure_atlas/registry.json",
        "status": "release"
      },
      {
        "label": "Theme release matrix",
        "page": "cvpr-theme-release-matrix.html",
        "registry": "analysis/cvpr_theme_release_matrix/registry.json",
        "status": "release"
      },
      {
        "label": "Colab release bundle",
        "page": "cvpr-colab-release-bundle.html",
        "registry": "analysis/cvpr_colab_release_bundle/registry.json",
        "status": "release"
      },
      {
        "label": "Evidence ledger",
        "page": "cvpr-colab-evidence-ledger.html",
        "registry": "analysis/cvpr_colab_evidence_ledger/registry.json",
        "status": "release"
      },
      {
        "label": "Validation center",
        "page": "cvpr-validation-center.html",
        "registry": "analysis/cvpr_full_stack_validation/registry.json",
        "status": "valid"
      }
    ],
    "inputRegistries": {
      "mission": "analysis/cvpr_mission_control/registry.json",
      "arena": "analysis/cvpr_demo_arena/registry.json",
      "benches": "analysis/cvpr_failure_atlas/registry.json",
      "themeMatrix": "analysis/cvpr_theme_release_matrix/registry.json",
      "releaseBundle": "analysis/cvpr_colab_release_bundle/registry.json",
      "evidenceLedger": "analysis/cvpr_colab_evidence_ledger/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "slos": {
    "summary": {
      "dashboard": "cvpr-release-slo-dashboard",
      "status": "block",
      "slos": 10,
      "passingSlos": 9,
      "criticalFailures": 1,
      "readinessFloor": 44.0,
      "avgReadiness": 75.14,
      "benchAcceptanceRate": 100.0,
      "releaseGate": "release",
      "fullStackStatus": "valid",
      "packageTests": 148
    },
    "sloRows": [
      {
        "id": "theme-system-coverage",
        "label": "Every theme and production system covered",
        "actual": 11,
        "target": 11,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_production_release_brief/registry.json"
      },
      {
        "id": "demo-evidence-coverage",
        "label": "Every stage demo has runtime evidence",
        "actual": 0,
        "target": 0,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_demo_evidence_cockpit/registry.json"
      },
      {
        "id": "bench-release-acceptance",
        "label": "All readiness bench cases are release",
        "actual": 44,
        "target": 44,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_mission_control/registry.json"
      },
      {
        "id": "arena-release-acceptance",
        "label": "All arena pairings are release",
        "actual": 328,
        "target": 328,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_production_release_brief/registry.json"
      },
      {
        "id": "pro-plus-result-validity",
        "label": "All cached Pro+ results validate",
        "actual": 56,
        "target": 56,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json"
      },
      {
        "id": "readiness-floor",
        "label": "Replay readiness floor stays above release minimum",
        "actual": 44.0,
        "target": 68.0,
        "direction": "gte",
        "severity": "critical",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json"
      },
      {
        "id": "provenance-clean",
        "label": "No Pro+ provenance issues",
        "actual": 0,
        "target": 0,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json"
      },
      {
        "id": "import-clean",
        "label": "No Colab import issues",
        "actual": 0,
        "target": 0,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_production_release_brief/registry.json"
      },
      {
        "id": "package-tests",
        "label": "Package test suite includes the production stack",
        "actual": 148,
        "target": 44,
        "direction": "gte",
        "severity": "critical",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json"
      },
      {
        "id": "full-stack-valid",
        "label": "Full-stack validator is valid",
        "actual": 1,
        "target": 1,
        "direction": "eq",
        "severity": "critical",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json"
      }
    ],
    "sources": {
      "replay": "analysis/cvpr_colab_result_replay/registry.json",
      "cockpit": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "mission": "analysis/cvpr_mission_control/registry.json",
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "drills": {
    "summary": {
      "drillbook": "cvpr-release-regression-drillbook",
      "status": "block",
      "drills": 10,
      "readyDrills": 10,
      "activeCriticalFailures": 1,
      "passingSlos": 9,
      "operationsStatus": "ready",
      "validationGate": "release",
      "remediationStatus": "ready",
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py"
    },
    "drills": [
      {
        "id": "drill-01-theme-system-coverage",
        "sloId": "theme-system-coverage",
        "label": "Every theme and production system covered",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 11,
        "target": 11,
        "direction": "eq",
        "evidence": "analysis/cvpr_production_release_brief/registry.json",
        "ownerSurface": "cvpr-production-coverage-audit.html",
        "response": "Recover missing system, stage, or bench mapping before accepting any release summary.",
        "rebuildCommand": "python3 scripts/build_cvpr_production_coverage_audit.py",
        "verifyCommand": "python3 scripts/verify_cvpr_production_coverage_audit.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-02-demo-evidence-coverage",
        "sloId": "demo-evidence-coverage",
        "label": "Every stage demo has runtime evidence",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 0,
        "target": 0,
        "direction": "eq",
        "evidence": "analysis/cvpr_demo_evidence_cockpit/registry.json",
        "ownerSurface": "cvpr-demo-evidence-cockpit.html",
        "response": "Restore demo-to-bench runtime evidence and confirm every stage demo has an inspection path.",
        "rebuildCommand": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "verifyCommand": "python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-03-bench-release-acceptance",
        "sloId": "bench-release-acceptance",
        "label": "All readiness bench cases are release",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 44,
        "target": 44,
        "direction": "eq",
        "evidence": "analysis/cvpr_mission_control/registry.json",
        "ownerSurface": "cvpr-mission-control.html",
        "response": "Inspect the failing bench page, fix blocked cases, and rerun mission control.",
        "rebuildCommand": "python3 scripts/build_cvpr_mission_control.py",
        "verifyCommand": "python3 scripts/verify_cvpr_mission_control.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-04-arena-release-acceptance",
        "sloId": "arena-release-acceptance",
        "label": "All arena pairings are release",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 328,
        "target": 328,
        "direction": "eq",
        "evidence": "analysis/cvpr_production_release_brief/registry.json",
        "ownerSurface": "cvpr-demo-arena.html",
        "response": "Reopen the failed scenario pairing and update the demo behavior or scenario gate.",
        "rebuildCommand": "python3 scripts/build_cvpr_demo_arena.py",
        "verifyCommand": "python3 scripts/verify_cvpr_demo_arena.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-05-pro-plus-result-validity",
        "sloId": "pro-plus-result-validity",
        "label": "All cached Pro+ results validate",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 56,
        "target": 56,
        "direction": "eq",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "ownerSurface": "cvpr-colab-result-replay.html",
        "response": "Rerun the affected Colab Pro+ job, export the payload, and replay cached results.",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_result_replay.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-06-readiness-floor",
        "sloId": "readiness-floor",
        "label": "Replay readiness floor stays above release minimum",
        "severity": "critical",
        "currentStatus": "fail",
        "actual": 44.0,
        "target": 68.0,
        "direction": "gte",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "ownerSurface": "cvpr-colab-result-replay.html",
        "response": "Find the lowest-readiness job row and rerun or remediate the underlying bench case.",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_result_replay.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-07-provenance-clean",
        "sloId": "provenance-clean",
        "label": "No Pro+ provenance issues",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 0,
        "target": 0,
        "direction": "eq",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "ownerSurface": "cvpr-colab-result-replay.html",
        "response": "Reject non-GPU or mismatched-notebook payloads and re-export from the Pro+ notebook.",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_result_replay.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-08-import-clean",
        "sloId": "import-clean",
        "label": "No Colab import issues",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 0,
        "target": 0,
        "direction": "eq",
        "evidence": "analysis/cvpr_production_release_brief/registry.json",
        "ownerSurface": "cvpr-colab-release-bundle.html",
        "response": "Run the import validator and stage a clean live export before promotion.",
        "rebuildCommand": "python3 scripts/build_cvpr_colab_release_bundle.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_release_bundle.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-09-package-tests",
        "sloId": "package-tests",
        "label": "Package test suite includes the production stack",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 148,
        "target": 44,
        "direction": "gte",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "ownerSurface": "cvpr-validation-center.html",
        "response": "Run package tests, fix the failing package, and rebuild validation center.",
        "rebuildCommand": "python3 scripts/build_cvpr_validation_center.py",
        "verifyCommand": "python3 scripts/verify_cvpr_validation_center.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "id": "drill-10-full-stack-valid",
        "sloId": "full-stack-valid",
        "label": "Full-stack validator is valid",
        "severity": "critical",
        "currentStatus": "pass",
        "actual": 1,
        "target": 1,
        "direction": "eq",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "ownerSurface": "cvpr-validation-center.html",
        "response": "Use the first failing validator step as the incident root and rerun the full stack.",
        "rebuildCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "verifyCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      }
    ],
    "sources": {
      "slos": "analysis/cvpr_release_slo_dashboard/registry.json",
      "operations": "analysis/cvpr_colab_operations_dashboard/registry.json",
      "validation": "analysis/cvpr_validation_center/registry.json",
      "remediation": "analysis/cvpr_remediation_board/registry.json"
    }
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 89,
      "packageTests": 148,
      "workerJobs": 14,
      "promotedRunners": 14,
      "cachedResults": 56,
      "importIssues": 0,
      "durationSec": 128.328
    },
    "steps": [
      {
        "command": "python3 scripts/build_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.243,
        "stdoutTail": [
          "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.125,
        "stdoutTail": [
          "verified CVPR systems lab: 11 systems, 33 stages, 11 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.126,
        "stdoutTail": [
          "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.155,
        "stdoutTail": [
          "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.137,
        "stdoutTail": [
          "wrote cvpr-demo-arena.html: 41 demos x 8 scenarios = 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.136,
        "stdoutTail": [
          "verified CVPR demo arena: 41 demos, 8 scenarios, 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.168,
        "stdoutTail": [
          "wrote cvpr-demo-playbook.html: 8 plays, 0 critical"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.125,
        "stdoutTail": [
          "verified CVPR demo playbook: 8 plays, 0 critical, 8 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.196,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.214,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 51.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.204,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 11.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.195,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.19,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.163,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.138,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.27,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.103,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.102,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.218,
        "stdoutTail": [
          "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "returnCode": 0,
        "durationSec": 0.228,
        "stdoutTail": [
          "validated CVPR Colab results: 56 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.174,
        "stdoutTail": [
          "verified CVPR Colab GPU worker: 14 jobs, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.197,
        "stdoutTail": [
          "wrote cvpr-colab-handoff-package.html: 14 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.261,
        "stdoutTail": [
          "verified CVPR Colab handoff package: 14 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.176,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.145,
        "stdoutTail": [
          "verified CVPR driving safety bench: 4 cases, max risk 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.185,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.238,
        "stdoutTail": [
          "verified CVPR constraint generation bench: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.102,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.183,
        "stdoutTail": [
          "verified CVPR compute serving bench: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.23,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 11.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.14,
        "stdoutTail": [
          "verified CVPR clinical shift bench: 4 cases, max risk 11.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.133,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 51.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.257,
        "stdoutTail": [
          "verified CVPR adversarial provenance bench: 4 cases, min evidence 51.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.262,
        "stdoutTail": [
          "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 56.0"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.181,
        "stdoutTail": [
          "verified CVPR long-tail grounding bench: 4 cases, min evidence 56.0"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.202,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.186,
        "stdoutTail": [
          "verified CVPR restoration fidelity bench: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.182,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.232,
        "stdoutTail": [
          "verified CVPR temporal rollout bench: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.133,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.123,
        "stdoutTail": [
          "verified CVPR VLM answer verification bench: 4 cases, max unsupported risk 32.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.114,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.11,
        "stdoutTail": [
          "verified CVPR metric geometry bench: 4 cases, max scale drift 29.9"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.222,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.127,
        "stdoutTail": [
          "verified CVPR Gaussian Splatting bench: 4 cases, max edit leakage 27.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_mission_control.py",
        "returnCode": 0,
        "durationSec": 0.224,
        "stdoutTail": [
          "wrote cvpr-mission-control.html: 11 systems, 11 benches"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_mission_control.py",
        "returnCode": 0,
        "durationSec": 0.172,
        "stdoutTail": [
          "verified CVPR mission control: 11 systems, 11 benches, 44 cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.223,
        "stdoutTail": [
          "wrote cvpr-failure-atlas.html: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.237,
        "stdoutTail": [
          "verified CVPR failure atlas: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/cvpr_paper_system_gate_experiments.py",
        "returnCode": 0,
        "durationSec": 0.257,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate experiment results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_paper_system_gate.py",
        "returnCode": 0,
        "durationSec": 0.204,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate package and page"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.149,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 51 steps, 148 tests"
        ],
        "stderrTail": []
      },
      {
        "command": "node source-code/learning/*/tests/core.test.js",
        "returnCode": 0,
        "durationSec": 109.717,
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
        "durationSec": 0.214,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 53 steps, 148 tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.133,
        "stdoutTail": [
          "verified CVPR validation center: 53 steps, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_intake.py",
        "returnCode": 0,
        "durationSec": 0.339,
        "stdoutTail": [
          "verified CVPR live Colab intake: 56 live results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_promotion.py",
        "returnCode": 0,
        "durationSec": 0.591,
        "stdoutTail": [
          "verified CVPR live Colab promotion: 56 promoted cached-real results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.208,
        "stdoutTail": [
          "wrote cvpr-colab-promotion-delta.html: 56 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.258,
        "stdoutTail": [
          "verified CVPR Colab promotion delta: 56 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.435,
        "stdoutTail": [
          "wrote cvpr-colab-release-bundle.html: 14 runners, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.215,
        "stdoutTail": [
          "verified CVPR Colab release bundle: 14 runners, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.269,
        "stdoutTail": [
          "wrote cvpr-colab-evidence-ledger.html: 7 artifacts, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.213,
        "stdoutTail": [
          "verified CVPR Colab evidence ledger: 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.327,
        "stdoutTail": [
          "wrote cvpr-colab-run-receipt.html: 8 stages, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.123,
        "stdoutTail": [
          "verified CVPR Colab run receipt: 8 stages, 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.224,
        "stdoutTail": [
          "wrote cvpr-theme-release-matrix.html: 8 themes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.313,
        "stdoutTail": [
          "verified CVPR theme release matrix: 8 themes, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.426,
        "stdoutTail": [
          "wrote cvpr-production-release-brief.html: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.099,
        "stdoutTail": [
          "verified CVPR production release brief: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.146,
        "stdoutTail": [
          "wrote cvpr-production-coverage-audit.html: release gate, 14 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.314,
        "stdoutTail": [
          "verified CVPR production coverage audit: 11 systems, 14 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.268,
        "stdoutTail": [
          "wrote cvpr-remediation-board.html: 0 block tasks, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.155,
        "stdoutTail": [
          "verified CVPR remediation board: 0 block tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.291,
        "stdoutTail": [
          "wrote cvpr-remediation-sprint-plan.html: 3 sprints, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.114,
        "stdoutTail": [
          "verified CVPR remediation sprint plan: 3 sprints, 0 tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.212,
        "stdoutTail": [
          "wrote cvpr-colab-operations-dashboard.html: 14 jobs, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.153,
        "stdoutTail": [
          "verified CVPR Colab operations dashboard: 14 jobs, 53 steps"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.354,
        "stdoutTail": [
          "wrote cvpr-colab-execution-planner.html: 3 waves, 56 expected results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.134,
        "stdoutTail": [
          "verified CVPR Colab execution planner: 3 waves, 56 expected results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.173,
        "stdoutTail": [
          "wrote cvpr-demo-evidence-cockpit.html: 41 demos, 56 expected live results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.366,
        "stdoutTail": [
          "verified CVPR demo evidence cockpit: 41 demos, 56 expected live results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.185,
        "stdoutTail": [
          "wrote cvpr-colab-result-replay.html: 56/56 results, 30 demos, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.149,
        "stdoutTail": [
          "verified CVPR Colab result replay: 56/56 results, 30 stage demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.172,
        "stdoutTail": [
          "wrote cvpr-release-slo-dashboard.html: 9/10 SLOs, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.418,
        "stdoutTail": [
          "verified CVPR release SLO dashboard: 9/10 SLOs, readiness floor 44.0"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.574,
        "stdoutTail": [
          "wrote cvpr-release-regression-drillbook.html: 10/10 drills, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.168,
        "stdoutTail": [
          "verified CVPR release regression drillbook: 10/10 drills"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.202,
        "stdoutTail": [
          "wrote cvpr-launch-readiness-pack.html: block, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.155,
        "stdoutTail": [
          "verified CVPR launch readiness pack: block, 148 package tests"
        ],
        "stderrTail": []
      }
    ]
  },
  "artifacts": [
    {
      "label": "launch-readiness-pack-page",
      "path": "cvpr-launch-readiness-pack.html",
      "exists": true,
      "sizeBytes": 6565,
      "sha256": "ba59a7746ce53b593135d8e1c0870ace7211d85223a8fbb00a51206f298c6239"
    },
    {
      "label": "launch-readiness-pack-registry",
      "path": "analysis/cvpr_launch_readiness_pack/registry.json",
      "exists": true,
      "sizeBytes": 3468,
      "sha256": "d80766106793d9b7919420152f9f9f20f474884a174c7a8c65497bbecba62903",
      "summaryKeys": [
        "arenaPairings",
        "arenaRelease",
        "avgReadiness",
        "benchCases",
        "benchRelease",
        "cachedResults",
        "criticalFailures",
        "demos",
        "drillbookStatus",
        "fullStackStatus",
        "importIssues",
        "liveIntakeResults",
        "operationsStatus",
        "pack",
        "packageTests",
        "readinessFloor",
        "releaseGate",
        "sloStatus",
        "stages",
        "status",
        "systems",
        "validationGate",
        "workerJobs"
      ]
    },
    {
      "label": "production-release-brief-page",
      "path": "cvpr-production-release-brief.html",
      "exists": true,
      "sizeBytes": 5758,
      "sha256": "ea050879bc7012b4f2c3239b99ca2813c4508d71b1b638b9fb45df6242836ff6"
    },
    {
      "label": "production-release-brief-registry",
      "path": "analysis/cvpr_production_release_brief/registry.json",
      "exists": true,
      "sizeBytes": 2607,
      "sha256": "9d69b4b2a6e77b0e20d516b99c9732818502b2e813367c9491bfa8917e2fe00b",
      "summaryKeys": [
        "arenaBlock",
        "arenaPairings",
        "arenaRelease",
        "arenaReview",
        "benchAcceptanceRate",
        "benchBlock",
        "benchCases",
        "benchRelease",
        "benchReview",
        "brief",
        "cachedResults",
        "coverage",
        "demos",
        "evidenceArtifacts",
        "failureSeverity",
        "fullStackStatus",
        "gate",
        "importIssues",
        "liveIntakeResults",
        "openThemes",
        "packageTests",
        "posture",
        "stages",
        "status",
        "systems",
        "themes",
        "workerJobs"
      ]
    },
    {
      "label": "release-slo-dashboard-page",
      "path": "cvpr-release-slo-dashboard.html",
      "exists": true,
      "sizeBytes": 6089,
      "sha256": "d9a2f0f61210a5c32e8ed6ec2905e1b9fe32436ff45380b71f612f792d253152"
    },
    {
      "label": "release-slo-dashboard-registry",
      "path": "analysis/cvpr_release_slo_dashboard/registry.json",
      "exists": true,
      "sizeBytes": 3379,
      "sha256": "af6c148ec2a3061e804103d73ec1ab9a928b3c9a9555097f66b1ab5fc9322a3c",
      "summaryKeys": [
        "avgReadiness",
        "benchAcceptanceRate",
        "criticalFailures",
        "dashboard",
        "fullStackStatus",
        "packageTests",
        "passingSlos",
        "readinessFloor",
        "releaseGate",
        "slos",
        "status"
      ]
    },
    {
      "label": "release-regression-drillbook-page",
      "path": "cvpr-release-regression-drillbook.html",
      "exists": true,
      "sizeBytes": 9326,
      "sha256": "c39ac01ccb8331b2ad80e66effc8c10868c4bbd995a86f4a64584b14511db353"
    },
    {
      "label": "release-regression-drillbook-registry",
      "path": "analysis/cvpr_release_regression_drillbook/registry.json",
      "exists": true,
      "sizeBytes": 8194,
      "sha256": "6d283bc3303114d5820294100fa102b7d5c117607dfd70e4cb0a120a4f4bedf0",
      "summaryKeys": [
        "activeCriticalFailures",
        "drillbook",
        "drills",
        "fullStackValidator",
        "operationsStatus",
        "passingSlos",
        "readyDrills",
        "remediationStatus",
        "status",
        "validationGate"
      ]
    },
    {
      "label": "colab-result-replay-registry",
      "path": "analysis/cvpr_colab_result_replay/registry.json",
      "exists": true,
      "sizeBytes": 15930,
      "sha256": "ddecf1e41a336731b229b4920a4d6feab1b2cc1e4ebb88dd949273de6fe5b290",
      "summaryKeys": [
        "avgReadiness",
        "cachedSystemEvidenceDemos",
        "fullStackValidator",
        "jobs",
        "liveExportArtifact",
        "minReadiness",
        "notebook",
        "provenanceIssues",
        "releaseGate",
        "replay",
        "replayRows",
        "results",
        "runtimePlane",
        "stageDemosCovered",
        "status",
        "validResults"
      ]
    },
    {
      "label": "demo-evidence-cockpit-registry",
      "path": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "exists": true,
      "sizeBytes": 31535,
      "sha256": "3edbda76f742ae3efe9bafae6092585a2e806bbfca5a83a24f22c32566454d1b",
      "summaryKeys": [
        "benchCases",
        "benchRelease",
        "cachedResults",
        "cockpit",
        "expectedLiveResults",
        "flagshipDemos",
        "fullStackStatus",
        "gpuBackedStageDemos",
        "missingDemoEvidence",
        "proPlusJobs",
        "proPlusWaves",
        "releaseGate",
        "stageDemos",
        "status",
        "systemEvidenceStageDemos",
        "systems",
        "totalDemos"
      ]
    },
    {
      "label": "full-stack-validation-registry",
      "path": "analysis/cvpr_full_stack_validation/registry.json",
      "exists": true,
      "sizeBytes": 24174,
      "sha256": "a5f7d9b43071632908c0e332de3ae98898b192114730746415a09bd811a47bc2",
      "summaryKeys": [
        "cachedResults",
        "commands",
        "durationSec",
        "importIssues",
        "packageTests",
        "promotedRunners",
        "status",
        "steps",
        "validator",
        "workerJobs"
      ]
    },
    {
      "label": "full-stack-validator",
      "path": "scripts/validate_cvpr_full_stack.py",
      "exists": true,
      "sizeBytes": 25670,
      "sha256": "85b588bc87510b85a6d89311b63e8fe86a8aed4c485cf5bbb61becd729feeab5"
    },
    {
      "label": "site-index",
      "path": "index.html",
      "exists": true,
      "sizeBytes": 28955,
      "sha256": "e22e9ce90187c645371e9781f3fc956b09cebf4acf671a0a3621f8da18bb56c3"
    }
  ]
};
export const summary = {
  "manifest": "cvpr-release-manifest",
  "status": "block",
  "artifacts": 13,
  "missingArtifacts": 0,
  "launchStatus": "block",
  "releaseGate": "release",
  "sloStatus": "block",
  "drillbookStatus": "block",
  "fullStackStatus": "valid",
  "packageTests": 148,
  "commands": 286,
  "steps": 89
};
