export const validationInput = {
  "fullStack": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 287,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 30.484
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
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_safety_escalation_playbook.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-clinical-safety-escalation-playbook.html: 8 rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_clinical_safety_escalation_playbook.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "verified CVPR clinical safety escalation playbook: 8 rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_second_round_closeout_reseal.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "wrote cvpr-second-round-closeout-reseal.html: 6/6 rows, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_second_round_closeout_reseal.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR second-round closeout reseal: 6/6 rows sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_regression_injection_arena.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-regression-injection-arena.html: 6 injections, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_regression_injection_arena.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR regression injection arena: 6 injections, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_paper_repo_demo_forge.py",
        "returnCode": 0,
        "durationSec": 0.234,
        "stdoutTail": [
          "wrote cvpr-paper-repo-demo-forge.html: 8 blueprints, 40 repo papers, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_paper_repo_demo_forge.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR paper repo demo forge: 8 blueprints, 40 repo papers"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_embodied_control_repo_drill.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-embodied-control-repo-drill.html: 5 scenarios, 5 repo papers, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_embodied_control_repo_drill.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR embodied control repo drill: 5 scenarios, 5 repo papers"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_efficient_learning_repo_governor.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-efficient-learning-repo-governor.html: 5 cases, 5 repo papers, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_efficient_learning_repo_governor.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR efficient learning repo governor: 5 cases, 5 repo papers"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_perception_parts_repo_bench.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-perception-parts-repo-bench.html: 5 cases, 5 repo papers, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_perception_parts_repo_bench.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR perception parts repo bench: 5 cases, 5 repo papers"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_frontier_sensor_fusion_bench.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-frontier-sensor-fusion-bench.html: 5 cases, 5 repo papers, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_frontier_sensor_fusion_bench.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR frontier sensor fusion bench: 5 cases, 5 repo papers"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remaining_paper_repo_demos.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "wrote cvpr-3d-world-repo-arena.html: 5 cases, 5 repo papers, status ready",
          "wrote cvpr-video-temporal-repo-lab.html: 5 cases, 5 repo papers, status ready",
          "wrote cvpr-generation-control-repo-studio.html: 5 cases, 5 repo papers, status ready",
          "wrote cvpr-grounded-vlm-repo-court.html: 5 cases, 5 repo papers, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remaining_paper_repo_demos.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified remaining CVPR paper repo demos: 4 demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_gpu_harness.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-repo-gpu-harness.html: 40 jobs, 40 repos, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_gpu_harness.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR repo GPU harness: 40 jobs, 40 repos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_live_intake.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "wrote cvpr-repo-harness-live-intake.html: 40 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/validate_cvpr_repo_harness_results.py",
        "returnCode": 0,
        "durationSec": 0.058,
        "stdoutTail": [
          "validated CVPR repo harness results: 40 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_live_intake.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR repo harness live intake: 40 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_worker.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-repo-harness-worker.html: 40 jobs, 40 repos, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_worker.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR repo harness worker: 40 jobs, 40 repos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_first_batch_receipt.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-repo-harness-first-batch-receipt.html: 5 jobs, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_first_batch_receipt.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR repo harness first batch receipt: 5 jobs"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_wave_planner.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-repo-harness-wave-planner.html: 8 waves, 40 jobs, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_wave_planner.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "verified CVPR repo harness wave planner: 8 waves, 40 jobs"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.045,
        "stdoutTail": [
          "wrote cvpr-repo-harness-handoff-package.html: 40 jobs, 13 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "verified CVPR repo harness handoff package: 40 jobs, 13 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_execution_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-repo-harness-execution-dashboard.html: 8 waves, 40 jobs, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_execution_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR repo harness execution dashboard: 8 waves, 40 jobs"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_promotion_board.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-repo-harness-promotion-board.html: 8 waves, 8 promote, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_promotion_board.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR repo harness promotion board: 8 waves, 8 promote"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "wrote cvpr-repo-harness-promotion-delta.html: 40 jobs, 40 ready, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR repo harness promotion delta: 40 jobs, 40 ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_replacement_receipt.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-repo-harness-replacement-receipt.html: 40 jobs, 40 promoted, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_replacement_receipt.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR repo harness replacement receipt: 40 jobs, 40 promoted"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_repo_harness_command_center.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-repo-harness-command-center.html: 8 surfaces, 8 targets, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_repo_harness_command_center.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR repo harness command center: 8 surfaces, 8 targets"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_frontier_live_evidence_drill.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "wrote cvpr-frontier-live-evidence-drill.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_frontier_live_evidence_drill.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR frontier live evidence drill: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_3d_world_live_evidence_room.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-3d-world-live-evidence-room.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_3d_world_live_evidence_room.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR 3D world live evidence room: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_video_temporal_live_evidence_lab.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-video-temporal-live-evidence-lab.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_video_temporal_live_evidence_lab.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR video temporal live evidence lab: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_generation_control_live_evidence_studio.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "wrote cvpr-generation-control-live-evidence-studio.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_generation_control_live_evidence_studio.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR generation control live evidence studio: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_grounded_vlm_live_evidence_court.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-grounded-vlm-live-evidence-court.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_grounded_vlm_live_evidence_court.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR grounded VLM live evidence court: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_perception_parts_live_evidence_bench.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "wrote cvpr-perception-parts-live-evidence-bench.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_perception_parts_live_evidence_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR perception parts live evidence bench: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_embodied_control_live_evidence_drill.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-embodied-control-live-evidence-drill.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_embodied_control_live_evidence_drill.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR embodied control live evidence drill: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_efficient_learning_live_evidence_governor.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-efficient-learning-live-evidence-governor.html: 5 live rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_efficient_learning_live_evidence_governor.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR efficient learning live evidence governor: 5 rows, ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_live_evidence_portfolio.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-live-evidence-portfolio.html: 8 surfaces, 40 rows, status portfolio-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_evidence_portfolio.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR live evidence portfolio: 8 surfaces, 40 rows"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_live_evidence_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-live-evidence-release-brief.html: 40 rows, status release-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_evidence_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR live evidence release brief: 40 rows, release-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_live_evidence_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-live-evidence-release-manifest.html: 8 surfaces, 40 rows, status manifest-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_evidence_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR live evidence release manifest: 8 surfaces, 40 rows"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_live_evidence_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "wrote cvpr-live-evidence-coverage-audit.html: 8 covered themes, 40 promoted rows, status coverage-complete"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_evidence_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "verified CVPR live evidence coverage audit: 8 themes, 40 rows"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_live_evidence_command_center.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-live-evidence-command-center.html: 4 surfaces, 40 rows, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_evidence_command_center.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "verified CVPR live evidence command center: 4 surfaces, 40 rows"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_live_evidence_handoff_bundle.py",
        "returnCode": 0,
        "durationSec": 0.044,
        "stdoutTail": [
          "wrote cvpr-live-evidence-handoff-bundle.html: 40 rows, 13 zip entries, status handoff-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_evidence_handoff_bundle.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "verified CVPR live evidence handoff bundle: 40 rows, 13 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_paper_reproduction_track.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-paper-reproduction-track.html: 8 reproductions, status track-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_paper_reproduction_track.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR paper reproduction track: 8 reproductions, track-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_reproduction_viewer_gallery.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-reproduction-viewer-gallery.html: 8 viewers, status gallery-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_reproduction_viewer_gallery.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR reproduction viewer gallery: 8 viewers, gallery-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_artifact_rehydration_queue.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "wrote cvpr-artifact-rehydration-queue.html: 24 artifacts, status rehydrated"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_artifact_rehydration_queue.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR artifact rehydration queue: 24 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_mos_frontier_deep_viewer.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-mos-frontier-deep-viewer.html: MOS deep-viewer-ready, 5 panels"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_mos_frontier_deep_viewer.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR MOS frontier deep viewer: MOS deep-viewer-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_deep_viewer_portfolio.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-deep-viewer-portfolio.html: 8 deep viewers, status portfolio-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_deep_viewer_portfolio.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR deep viewer portfolio: 8 viewers, portfolio-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_top_paper_repo_demo_matrix.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-top-paper-repo-demo-matrix.html: 40 repos, status matrix-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_top_paper_repo_demo_matrix.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR top paper repo demo matrix: 40 repos, matrix-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_subtheme_coverage_drilldown.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-subtheme-coverage-drilldown.html: 212 subthemes, status subtheme-drilldown-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_subtheme_coverage_drilldown.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR subtheme coverage drilldown: 212 subthemes, subtheme-drilldown-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_subtheme_scenario_lab.py",
        "returnCode": 0,
        "durationSec": 0.046,
        "stdoutTail": [
          "wrote cvpr-subtheme-scenario-lab.html: 636 scenarios, status scenario-lab-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_subtheme_scenario_lab.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR subtheme scenario lab: 636 scenarios, scenario-lab-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_subtheme_release_scoreboard.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-subtheme-release-scoreboard.html: 8 themes, status scoreboard-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_subtheme_release_scoreboard.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR subtheme release scoreboard: 8 themes, scoreboard-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_demo_workbench.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "wrote cvpr-interactive-demo-workbench.html: 8 demos, status workbench-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_demo_workbench.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "verified CVPR interactive demo workbench: 8 demos, workbench-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_demo_workbench_runtime.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "runtime-smoke verified CVPR interactive demo workbench: 8 demos, 40 buttons"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_expansion_backlog.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-interactive-expansion-backlog.html: 32 remaining repos, status backlog-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_expansion_backlog.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR interactive expansion backlog: 32 remaining repos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_second_wave.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-interactive-second-wave.html: 8 demos, status wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_second_wave.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "verified CVPR interactive second wave: 8 demos, wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_third_wave.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-interactive-third-wave.html: 8 demos, status wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_third_wave.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR interactive third wave: 8 demos, wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_fourth_wave.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "wrote cvpr-interactive-fourth-wave.html: 8 demos, status wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_fourth_wave.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "verified CVPR interactive fourth wave: 8 demos, wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_fifth_wave.py",
        "returnCode": 0,
        "durationSec": 0.044,
        "stdoutTail": [
          "wrote cvpr-interactive-fifth-wave.html: 8 demos, status wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_fifth_wave.py",
        "returnCode": 0,
        "durationSec": 0.039,
        "stdoutTail": [
          "verified CVPR interactive fifth wave: 8 demos, wave-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_coverage_portfolio.py",
        "returnCode": 0,
        "durationSec": 0.042,
        "stdoutTail": [
          "wrote cvpr-interactive-coverage-portfolio.html: 40 demos, status coverage-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_coverage_portfolio.py",
        "returnCode": 0,
        "durationSec": 0.049,
        "stdoutTail": [
          "verified CVPR interactive coverage portfolio: 40 demos, coverage-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_console.py",
        "returnCode": 0,
        "durationSec": 0.046,
        "stdoutTail": [
          "wrote cvpr-interactive-console.html: 40 demos, status console-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_console.py",
        "returnCode": 0,
        "durationSec": 0.052,
        "stdoutTail": [
          "verified CVPR interactive console: 40 demos, console-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_scenario_runner.py",
        "returnCode": 0,
        "durationSec": 0.059,
        "stdoutTail": [
          "wrote cvpr-interactive-scenario-runner.html: 120 cases, status runner-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_scenario_runner.py",
        "returnCode": 0,
        "durationSec": 0.054,
        "stdoutTail": [
          "verified CVPR interactive scenario runner: 120 cases, runner-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_triage_board.py",
        "returnCode": 0,
        "durationSec": 0.059,
        "stdoutTail": [
          "wrote cvpr-interactive-triage-board.html: 40 decisions, status triage-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_triage_board.py",
        "returnCode": 0,
        "durationSec": 0.074,
        "stdoutTail": [
          "verified CVPR interactive triage board: 40 decisions, triage-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_release_pack.py",
        "returnCode": 0,
        "durationSec": 0.071,
        "stdoutTail": [
          "wrote cvpr-interactive-release-pack.html: 4 layers, status release-pack-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_release_pack.py",
        "returnCode": 0,
        "durationSec": 0.062,
        "stdoutTail": [
          "verified CVPR interactive release pack: 4 layers, release-pack-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_audit_ledger.py",
        "returnCode": 0,
        "durationSec": 0.079,
        "stdoutTail": [
          "wrote cvpr-interactive-audit-ledger.html: 5 events, status ledger-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_audit_ledger.py",
        "returnCode": 0,
        "durationSec": 0.069,
        "stdoutTail": [
          "verified CVPR interactive audit ledger: 5 events, ledger-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_command_center.py",
        "returnCode": 0,
        "durationSec": 0.072,
        "stdoutTail": [
          "wrote cvpr-interactive-command-center.html: 6 surfaces, status command-center-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_command_center.py",
        "returnCode": 0,
        "durationSec": 0.059,
        "stdoutTail": [
          "verified CVPR interactive command center: 6 surfaces, command-center-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_health_monitor.py",
        "returnCode": 0,
        "durationSec": 0.062,
        "stdoutTail": [
          "wrote cvpr-interactive-health-monitor.html: 32 probes, status monitor-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_health_monitor.py",
        "returnCode": 0,
        "durationSec": 0.056,
        "stdoutTail": [
          "verified CVPR interactive health monitor: 32 probes, monitor-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_drift_sentinel.py",
        "returnCode": 0,
        "durationSec": 0.062,
        "stdoutTail": [
          "wrote cvpr-interactive-drift-sentinel.html: 18 checks, status sentinel-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_drift_sentinel.py",
        "returnCode": 0,
        "durationSec": 0.065,
        "stdoutTail": [
          "verified CVPR interactive drift sentinel: 18 checks, sentinel-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_rollback_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.069,
        "stdoutTail": [
          "wrote cvpr-interactive-rollback-drillbook.html: 6 drills, status drillbook-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_rollback_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.048,
        "stdoutTail": [
          "verified CVPR interactive rollback drillbook: 6 drills, drillbook-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_rollback_rehearsal_lab.py",
        "returnCode": 0,
        "durationSec": 0.043,
        "stdoutTail": [
          "wrote cvpr-interactive-rollback-rehearsal-lab.html: 6 rehearsals, status rehearsal-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_rollback_rehearsal_lab.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "verified CVPR interactive rollback rehearsal lab: 6 rehearsals, rehearsal-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_closeout_seal.py",
        "returnCode": 0,
        "durationSec": 0.045,
        "stdoutTail": [
          "wrote cvpr-interactive-closeout-seal.html: 11 layers, status closeout-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_closeout_seal.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "verified CVPR interactive closeout seal: 11 layers, closeout-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_handoff_bundle.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-interactive-handoff-bundle.html: 11 items, status handoff-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_handoff_bundle.py",
        "returnCode": 0,
        "durationSec": 0.044,
        "stdoutTail": [
          "verified CVPR interactive handoff bundle: 11 items, handoff-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_navigation_manifest_audit.py",
        "returnCode": 0,
        "durationSec": 0.047,
        "stdoutTail": [
          "wrote cvpr-interactive-navigation-manifest-audit.html: 11 items, status nav-audit-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_navigation_manifest_audit.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "verified CVPR interactive navigation manifest audit: 11 items, nav-audit-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_package_integrity_audit.py",
        "returnCode": 0,
        "durationSec": 0.045,
        "stdoutTail": [
          "wrote cvpr-interactive-package-integrity-audit.html: 11 packages, status package-audit-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_package_integrity_audit.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "verified CVPR interactive package integrity audit: 11 packages, package-audit-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_validator_command_audit.py",
        "returnCode": 0,
        "durationSec": 0.041,
        "stdoutTail": [
          "wrote cvpr-interactive-validator-command-audit.html: 13 targets, status command-audit-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_validator_command_audit.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "verified CVPR interactive validator command audit: 13 targets, command-audit-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_interactive_full_stack_result_audit.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-interactive-full-stack-result-audit.html: 13 targets, status result-audit-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_interactive_full_stack_result_audit.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "verified CVPR interactive full-stack result audit: 13 targets, result-audit-ready"
        ],
        "stderrTail": []
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
  "mission": {
    "summary": {
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
    "actions": [
      {
        "rank": 1,
        "title": "Closed-loop scene and action safety bench",
        "cluster": "Driving and vision-language-action",
        "scenario": "safety-critical-action",
        "priority": "focused",
        "implementationPage": "cvpr-driving-safety-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxRisk",
        "keyMetricValue": 34.6,
        "nextAction": "promote safety-critical-action evidence into release notes"
      },
      {
        "rank": 2,
        "title": "Adversarial provenance evidence bench",
        "cluster": "Adversarial robustness",
        "scenario": "adversarial-media",
        "priority": "focused",
        "implementationPage": "cvpr-adversarial-provenance-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "minEvidence",
        "keyMetricValue": 82.5,
        "nextAction": "promote adversarial-media evidence into release notes"
      },
      {
        "rank": 3,
        "title": "Clinical shift validation bench",
        "cluster": "Vision for science and medicine",
        "scenario": "clinical-shift",
        "priority": "focused",
        "implementationPage": "cvpr-clinical-shift-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxResidualRisk",
        "keyMetricValue": 33.5,
        "nextAction": "promote clinical-shift evidence into release notes"
      },
      {
        "rank": 4,
        "title": "Long-horizon world rollout bench",
        "cluster": "Video generation and world models",
        "scenario": "temporal-rollout",
        "priority": "focused",
        "implementationPage": "cvpr-temporal-rollout-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxDrift",
        "keyMetricValue": 36.1,
        "nextAction": "promote temporal-rollout evidence into release notes"
      },
      {
        "rank": 5,
        "title": "Compute budget serving bench",
        "cluster": "Efficient vision",
        "scenario": "compute-constrained",
        "priority": "focused",
        "implementationPage": "cvpr-compute-serving-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "minRetainedEvidence",
        "keyMetricValue": 85.7,
        "nextAction": "promote compute-constrained evidence into release notes"
      },
      {
        "rank": 6,
        "title": "Downstream restoration fidelity bench",
        "cluster": "Image restoration",
        "scenario": "noisy-restoration",
        "priority": "focused",
        "implementationPage": "cvpr-restoration-fidelity-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxFabricatedDetailRisk",
        "keyMetricValue": 29.4,
        "nextAction": "promote noisy-restoration evidence into release notes"
      },
      {
        "rank": 7,
        "title": "Long-tail open-vocabulary grounding bench",
        "cluster": "Open-vocabulary vision",
        "scenario": "long-tail-open-world",
        "priority": "focused",
        "implementationPage": "cvpr-long-tail-grounding-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "minLocalizedEvidence",
        "keyMetricValue": 87.1,
        "nextAction": "promote long-tail-open-world evidence into release notes"
      },
      {
        "rank": 8,
        "title": "Grounded VLM answer verification bench",
        "cluster": "Vision-language reasoning",
        "scenario": "safety-critical-action",
        "priority": "focused",
        "implementationPage": "cvpr-vlm-answer-verification-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "avgReadiness",
        "keyMetricValue": 76.9,
        "nextAction": "promote safety-critical-action evidence into release notes"
      }
    ],
    "benches": [
      {
        "bench": "cvpr-driving-safety-bench",
        "sourceSystem": "driving-vla-release-gate",
        "sourceStages": [
          "scene-grounding"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 68.2,
        "acceptancePass": true,
        "playbookSource": "01-driving-and-vision-language-action-safety-critical-action",
        "status": "interactive",
        "keyMetric": "maxRisk",
        "keyMetricValue": 34.6,
        "registry": "analysis/cvpr_driving_safety_bench/registry.json",
        "page": "cvpr-driving-safety-bench.html"
      },
      {
        "bench": "cvpr-adversarial-provenance-bench",
        "sourceSystem": "adversarial-provenance-gate",
        "sourceStages": [
          "attack-surface",
          "provenance-detection",
          "unlearning-check"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 80.0,
        "acceptancePass": true,
        "playbookSource": "02-adversarial-robustness-adversarial-media",
        "status": "interactive",
        "keyMetric": "minEvidence",
        "keyMetricValue": 82.5,
        "registry": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "page": "cvpr-adversarial-provenance-bench.html"
      },
      {
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
        "acceptancePass": true,
        "playbookSource": "03-vision-for-science-and-medicine-clinical-shift",
        "status": "interactive",
        "keyMetric": "maxResidualRisk",
        "keyMetricValue": 33.5,
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "page": "cvpr-clinical-shift-bench.html"
      },
      {
        "bench": "cvpr-compute-serving-bench",
        "sourceSystem": "efficient-vision-serving",
        "sourceStages": [
          "token-budget",
          "quantized-serving",
          "student-routing"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 74.8,
        "acceptancePass": true,
        "playbookSource": "05-efficient-vision-compute-constrained",
        "status": "interactive",
        "keyMetric": "minRetainedEvidence",
        "keyMetricValue": 85.7,
        "registry": "analysis/cvpr_compute_serving_bench/registry.json",
        "page": "cvpr-compute-serving-bench.html"
      },
      {
        "bench": "cvpr-long-tail-grounding-bench",
        "sourceSystem": "open-vocab-visual-search",
        "sourceStages": [
          "text-query-grounding",
          "long-tail-retrieval",
          "evidence-inspection"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 84.0,
        "acceptancePass": true,
        "playbookSource": "07-open-vocabulary-vision-long-tail-open-world",
        "status": "interactive",
        "keyMetric": "minLocalizedEvidence",
        "keyMetricValue": 87.1,
        "registry": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "page": "cvpr-long-tail-grounding-bench.html"
      },
      {
        "bench": "cvpr-temporal-rollout-bench",
        "sourceSystem": "video-world-model",
        "sourceStages": [
          "temporal-memory",
          "physics-consistency",
          "future-rollout"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 77.8,
        "acceptancePass": true,
        "playbookSource": "04-video-generation-and-world-models-temporal-rollout",
        "status": "interactive",
        "keyMetric": "maxDrift",
        "keyMetricValue": 36.1,
        "registry": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "page": "cvpr-temporal-rollout-bench.html"
      },
      {
        "bench": "cvpr-restoration-fidelity-bench",
        "sourceSystem": "restoration-reliability-stack",
        "sourceStages": [
          "degradation-diagnosis",
          "fidelity-gate",
          "downstream-validation"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 78.8,
        "acceptancePass": true,
        "playbookSource": "06-image-restoration-noisy-restoration",
        "status": "interactive",
        "keyMetric": "maxFabricatedDetailRisk",
        "keyMetricValue": 29.4,
        "registry": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "page": "cvpr-restoration-fidelity-bench.html"
      },
      {
        "bench": "cvpr-constraint-generation-bench",
        "sourceSystem": "controllable-generation-studio",
        "sourceStages": [
          "layout-control",
          "identity-preservation",
          "preference-reward"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 79.3,
        "acceptancePass": true,
        "playbookSource": "08-controllable-generation-adversarial-media",
        "status": "interactive",
        "keyMetric": "maxIdentityDamage",
        "keyMetricValue": 34.8,
        "registry": "analysis/cvpr_constraint_generation_bench/registry.json",
        "page": "cvpr-constraint-generation-bench.html"
      },
      {
        "bench": "cvpr-vlm-answer-verification-bench",
        "sourceSystem": "vlm-grounded-reasoning",
        "sourceStages": [
          "look-then-reason",
          "hallucination-check",
          "tool-verified-answer"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 76.9,
        "acceptancePass": true,
        "playbookSource": "08-vision-language-reasoning-safety-critical-action",
        "status": "interactive",
        "keyMetric": "avgReadiness",
        "keyMetricValue": 76.9,
        "registry": "analysis/cvpr_vlm_answer_verification_bench/registry.json",
        "page": "cvpr-vlm-answer-verification-bench.html"
      },
      {
        "bench": "cvpr-metric-geometry-bench",
        "sourceSystem": "metric-3d-reconstruction",
        "sourceStages": [
          "camera-geometry",
          "metric-scale",
          "surface-consistency"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 78.0,
        "acceptancePass": true,
        "playbookSource": "geometry-metric-release-bench",
        "status": "interactive",
        "keyMetric": "maxScaleDrift",
        "keyMetricValue": 29.9,
        "registry": "analysis/cvpr_metric_geometry_bench/registry.json",
        "page": "cvpr-metric-geometry-bench.html"
      },
      {
        "bench": "cvpr-gaussian-splatting-bench",
        "sourceSystem": "gaussian-splatting-platform",
        "sourceStages": [
          "splat-fit",
          "semantic-splats",
          "watermark-provenance"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 81.5,
        "acceptancePass": true,
        "playbookSource": "splats-gaussian-release-bench",
        "status": "interactive",
        "keyMetric": "maxEditLeakageRisk",
        "keyMetricValue": 27.4,
        "registry": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "page": "cvpr-gaussian-splatting-bench.html"
      }
    ],
    "sourceRegistries": {
      "systems": "analysis/cvpr_systems/registry.json",
      "demos": "analysis/cvpr_demos/registry.json",
      "arena": "analysis/cvpr_demo_arena/registry.json",
      "playbook": "analysis/cvpr_demo_playbook/registry.json"
    }
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
  }
};
