export const sources = {
  "brief": {
    "summary": {
      "demo": "cvpr-remediation-release-brief",
      "status": "release",
      "commandStatus": "block",
      "ledgerStatus": "inspect",
      "surfaces": 7,
      "readySurfaces": 5,
      "stages": 7,
      "readyStages": 5,
      "gauntletRows": 56,
      "gauntletBlocks": 23,
      "actionableRows": 53,
      "clearedBlocks": 23,
      "postBlock": 0,
      "promote": 18,
      "monitor": 35,
      "canaryClean": 18,
      "canaryWatch": 35,
      "canaryRollback": 0,
      "rollbackDrills": 12,
      "readyDrills": 12,
      "rehearsals": 12,
      "rehearsalMisses": 0,
      "themes": 8,
      "incidents": 7,
      "packageTests": 148,
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
      "gate": "block",
      "posture": "review",
      "outcome": "23 gauntlet blocks \u00b7 23 cleared \u00b7 18 promote \u00b7 35 monitor \u00b7 12 rollback drills"
    },
    "evidence": [
      {
        "label": "Remediation command center",
        "page": "cvpr-remediation-command-center.html",
        "registry": "analysis/cvpr_remediation_command_center/registry.json",
        "status": "block"
      },
      {
        "label": "Remediation audit ledger",
        "page": "cvpr-remediation-audit-ledger.html",
        "registry": "analysis/cvpr_remediation_audit_ledger/registry.json",
        "status": "inspect"
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
      "status": "block",
      "rows": 7,
      "readyRows": 4,
      "releaseGate": "block",
      "posture": "review",
      "postBlock": 0,
      "canaryRollback": 0,
      "rehearsalMisses": 0,
      "promote": 18,
      "monitor": 35,
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
        "actual": "block",
        "expected": "release",
        "evidence": "analysis/cvpr_remediation_release_brief/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_release_brief.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "block"
      },
      {
        "id": "closeout-02-command",
        "label": "Remediation command center",
        "ownerSurface": "cvpr-remediation-command-center.html",
        "actual": "block",
        "expected": "operator-ready",
        "evidence": "analysis/cvpr_remediation_command_center/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_command_center.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "block"
      },
      {
        "id": "closeout-03-ledger",
        "label": "Remediation audit ledger",
        "ownerSurface": "cvpr-remediation-audit-ledger.html",
        "actual": "inspect",
        "expected": "complete",
        "evidence": "analysis/cvpr_remediation_audit_ledger/registry.json",
        "verifyCommand": "python3 scripts/verify_cvpr_remediation_audit_ledger.py",
        "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "changePolicy": "verify owner, rerun full stack, keep remediation release brief sealed",
        "status": "block"
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
        "evidence": "analysis/cvpr_validation_center/registry.json",
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
      "validation": "analysis/cvpr_validation_center/registry.json"
    }
  },
  "command": {
    "summary": {
      "demo": "cvpr-remediation-command-center",
      "status": "block",
      "surfaces": 7,
      "readySurfaces": 5,
      "gauntletBlocks": 23,
      "actionableRows": 53,
      "clearedBlocks": 23,
      "postBlock": 0,
      "promote": 18,
      "monitor": 35,
      "canaryRollback": 0,
      "rollbackDrills": 12,
      "rehearsalMisses": 0,
      "ledgerStatus": "inspect",
      "themes": 8,
      "incidents": 7,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "surfaceRows": [
      {
        "surface": "cvpr-remediation-audit-ledger.html",
        "label": "Audit ledger",
        "actual": "inspect",
        "expected": "complete",
        "metric": "5/7 stages",
        "evidence": "analysis/cvpr_remediation_audit_ledger/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_audit_ledger.py"
      },
      {
        "surface": "cvpr-gauntlet-remediation-sprint.html",
        "label": "Action sprint",
        "actual": "inspect",
        "expected": "release",
        "metric": "53 actions",
        "evidence": "analysis/cvpr_gauntlet_remediation_sprint/registry.json",
        "command": "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py"
      },
      {
        "surface": "cvpr-remediation-retest-harness.html",
        "label": "Retest harness",
        "actual": "release",
        "expected": "release",
        "metric": "23 cleared blocks",
        "evidence": "analysis/cvpr_remediation_retest_harness/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "surface": "cvpr-remediation-promotion-board.html",
        "label": "Promotion board",
        "actual": "release",
        "expected": "release",
        "metric": "18 promote / 35 monitor",
        "evidence": "analysis/cvpr_remediation_promotion_board/registry.json",
        "command": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "surface": "cvpr-remediation-canary-monitor.html",
        "label": "Canary monitor",
        "actual": "watching",
        "expected": "watching",
        "metric": "18 clean / 35 watch",
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
          "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
          "returnCode": 0,
          "durationSec": 0.27,
          "stdoutTail": [
            "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
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
          "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
          "returnCode": 0,
          "durationSec": 0.261,
          "stdoutTail": [
            "verified CVPR Colab handoff package: 14 jobs, 8 zip entries"
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
        }
      ]
    },
    "slowest": [
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
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.27,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
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
        "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.261,
        "stdoutTail": [
          "verified CVPR Colab handoff package: 14 jobs, 8 zip entries"
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
      "durationSec": 119.128
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
  "status": "block",
  "goals": 6,
  "readyGoals": 6,
  "themes": 6,
  "systems": 11,
  "proPlusGoals": 3,
  "sourceGate": "block",
  "closeoutStatus": "block",
  "operatorStatus": "block",
  "fullStackStatus": "valid",
  "packageTests": 148,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
