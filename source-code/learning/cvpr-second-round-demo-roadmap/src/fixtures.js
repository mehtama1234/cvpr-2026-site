export const sources = {
  "brief": {
    "summary": {
      "demo": "cvpr-remediation-release-brief",
      "status": "release",
      "commandStatus": "operator-ready",
      "ledgerStatus": "complete",
      "surfaces": 7,
      "readySurfaces": 7,
      "stages": 7,
      "readyStages": 7,
      "gauntletRows": 32,
      "gauntletBlocks": 14,
      "actionableRows": 29,
      "clearedBlocks": 14,
      "postBlock": 0,
      "promote": 12,
      "monitor": 17,
      "canaryClean": 12,
      "canaryWatch": 17,
      "canaryRollback": 0,
      "rollbackDrills": 12,
      "readyDrills": 12,
      "rehearsals": 12,
      "rehearsalMisses": 0,
      "themes": 8,
      "incidents": 4,
      "packageTests": 148,
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
      "gate": "release",
      "posture": "controlled-watch",
      "outcome": "14 gauntlet blocks \u00b7 14 cleared \u00b7 12 promote \u00b7 17 monitor \u00b7 12 rollback drills"
    },
    "evidence": [
      {
        "label": "Remediation command center",
        "page": "cvpr-remediation-command-center.html",
        "registry": "analysis/cvpr_remediation_command_center/registry.json",
        "status": "operator-ready"
      },
      {
        "label": "Remediation audit ledger",
        "page": "cvpr-remediation-audit-ledger.html",
        "registry": "analysis/cvpr_remediation_audit_ledger/registry.json",
        "status": "complete"
      },
      {
        "label": "Remediation canary monitor",
        "page": "cvpr-remediation-canary-monitor.html",
        "registry": "analysis/cvpr_remediation_canary_monitor/registry.json",
        "status": "watching"
      },
      {
        "label": "Remediation rollback drillbook",
        "page": "cvpr-remediation-rollback-drillbook.html",
        "registry": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
        "status": "ready"
      },
      {
        "label": "Remediation rollback rehearsal lab",
        "page": "cvpr-remediation-rollback-rehearsal-lab.html",
        "registry": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
        "status": "release"
      },
      {
        "label": "Full-stack validation",
        "page": "cvpr-validation-center.html",
        "registry": "analysis/cvpr_full_stack_validation/registry.json",
        "status": "valid"
      }
    ],
    "sources": {
      "commandCenter": "analysis/cvpr_remediation_command_center/registry.json",
      "ledger": "analysis/cvpr_remediation_audit_ledger/registry.json",
      "canary": "analysis/cvpr_remediation_canary_monitor/registry.json",
      "rollback": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
      "rehearsal": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "closeout": {
    "summary": {
      "demo": "cvpr-remediation-closeout-pack",
      "status": "sealed",
      "rows": 7,
      "readyRows": 7,
      "releaseGate": "release",
      "posture": "controlled-watch",
      "postBlock": 0,
      "canaryRollback": 0,
      "rehearsalMisses": 0,
      "promote": 12,
      "monitor": 17,
      "rollbackDrills": 12,
      "packageTests": 148,
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "closeoutRows": [
      {
        "id": "closeout-01-brief",
        "label": "Remediation release brief",
        "ownerSurface": "cvpr-remediation-release-brief.html",
        "actual": "release",
        "expected": "release",
        "evidence": "analysis/cvpr_remediation_release_brief/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_release_brief.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "sealed"
      },
      {
        "id": "closeout-02-command",
        "label": "Remediation command center",
        "ownerSurface": "cvpr-remediation-command-center.html",
        "actual": "operator-ready",
        "expected": "operator-ready",
        "evidence": "analysis/cvpr_remediation_command_center/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_command_center.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "sealed"
      },
      {
        "id": "closeout-03-ledger",
        "label": "Remediation audit ledger",
        "ownerSurface": "cvpr-remediation-audit-ledger.html",
        "actual": "complete",
        "expected": "complete",
        "evidence": "analysis/cvpr_remediation_audit_ledger/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_audit_ledger.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "sealed"
      },
      {
        "id": "closeout-04-canary",
        "label": "Remediation canary monitor",
        "ownerSurface": "cvpr-remediation-canary-monitor.html",
        "actual": "watching",
        "expected": "watching",
        "evidence": "analysis/cvpr_remediation_canary_monitor/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_canary_monitor.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "sealed"
      },
      {
        "id": "closeout-05-rollback",
        "label": "Remediation rollback drillbook",
        "ownerSurface": "cvpr-remediation-rollback-drillbook.html",
        "actual": "ready",
        "expected": "ready",
        "evidence": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "sealed"
      },
      {
        "id": "closeout-06-rehearsal",
        "label": "Remediation rollback rehearsal lab",
        "ownerSurface": "cvpr-remediation-rollback-rehearsal-lab.html",
        "actual": "release",
        "expected": "release",
        "evidence": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "sealed"
      },
      {
        "id": "closeout-07-validation",
        "label": "Full-stack validation",
        "ownerSurface": "cvpr-validation-center.html",
        "actual": "valid",
        "expected": "valid",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "verifyCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "sealed"
      }
    ],
    "sources": {
      "brief": "analysis/cvpr_remediation_release_brief/registry.json",
      "command": "analysis/cvpr_remediation_command_center/registry.json",
      "ledger": "analysis/cvpr_remediation_audit_ledger/registry.json",
      "canary": "analysis/cvpr_remediation_canary_monitor/registry.json",
      "rollback": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
      "rehearsal": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "command": {
    "summary": {
      "demo": "cvpr-remediation-command-center",
      "status": "operator-ready",
      "surfaces": 7,
      "readySurfaces": 7,
      "gauntletBlocks": 14,
      "actionableRows": 29,
      "clearedBlocks": 14,
      "postBlock": 0,
      "promote": 12,
      "monitor": 17,
      "canaryRollback": 0,
      "rollbackDrills": 12,
      "rehearsalMisses": 0,
      "ledgerStatus": "complete",
      "themes": 8,
      "incidents": 4,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "surfaceRows": [
      {
        "surface": "cvpr-remediation-audit-ledger.html",
        "label": "Audit ledger",
        "actual": "complete",
        "expected": "complete",
        "metric": "7/7 stages",
        "evidence": "analysis/cvpr_remediation_audit_ledger/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_audit_ledger.py"
      },
      {
        "surface": "cvpr-gauntlet-remediation-sprint.html",
        "label": "Action sprint",
        "actual": "release",
        "expected": "release",
        "metric": "29 actions",
        "evidence": "analysis/cvpr_gauntlet_remediation_sprint/registry.json",
        "command": "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py"
      },
      {
        "surface": "cvpr-remediation-retest-harness.html",
        "label": "Retest harness",
        "actual": "release",
        "expected": "release",
        "metric": "14 cleared blocks",
        "evidence": "analysis/cvpr_remediation_retest_harness/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "surface": "cvpr-remediation-promotion-board.html",
        "label": "Promotion board",
        "actual": "release",
        "expected": "release",
        "metric": "12 promote / 17 monitor",
        "evidence": "analysis/cvpr_remediation_promotion_board/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "surface": "cvpr-remediation-canary-monitor.html",
        "label": "Canary monitor",
        "actual": "watching",
        "expected": "watching",
        "metric": "12 clean / 17 watch",
        "evidence": "analysis/cvpr_remediation_canary_monitor/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_canary_monitor.py"
      },
      {
        "surface": "cvpr-remediation-rollback-drillbook.html",
        "label": "Rollback drillbook",
        "actual": "ready",
        "expected": "ready",
        "metric": "12 drills",
        "evidence": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py"
      },
      {
        "surface": "cvpr-remediation-rollback-rehearsal-lab.html",
        "label": "Rollback rehearsal lab",
        "actual": "release",
        "expected": "release",
        "metric": "12 passing rehearsals",
        "evidence": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py"
      }
    ],
    "sources": {
      "ledger": "analysis/cvpr_remediation_audit_ledger/registry.json",
      "gauntlet": "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
      "sprint": "analysis/cvpr_gauntlet_remediation_sprint/registry.json",
      "retest": "analysis/cvpr_remediation_retest_harness/registry.json",
      "promotion": "analysis/cvpr_remediation_promotion_board/registry.json",
      "canary": "analysis/cvpr_remediation_canary_monitor/registry.json",
      "rollback": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
      "rehearsal": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json"
    }
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 145,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 24.961
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
      }
    ]
  }
};
export const roadmapGoals = [
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
];
export const summary = {
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
};
