"""Rebuild and validate the full CVPR demo stack."""
import json
import subprocess
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REPORT = ROOT / "analysis/cvpr_full_stack_validation/registry.json"
CORE_TEST_LOG = Path("/tmp/cvpr-core-tests.log")
CORE_TESTS = sorted((ROOT / "source-code/learning").glob("*/tests/core.test.js"))

COMMANDS = [
    ["python3", "scripts/build_cvpr_systems_lab.py"],
    ["python3", "scripts/verify_cvpr_systems_lab.py"],
    ["python3", "scripts/build_cvpr_demo_lab.py"],
    ["python3", "scripts/verify_cvpr_demo_lab.py"],
    ["python3", "scripts/build_cvpr_demo_arena.py"],
    ["python3", "scripts/verify_cvpr_demo_arena.py"],
    ["python3", "scripts/build_cvpr_demo_playbook.py"],
    ["python3", "scripts/verify_cvpr_demo_playbook.py"],
    ["python3", "scripts/build_cvpr_driving_safety_bench.py"],
    ["python3", "scripts/build_cvpr_adversarial_provenance_bench.py"],
    ["python3", "scripts/build_cvpr_clinical_shift_bench.py"],
    ["python3", "scripts/build_cvpr_compute_serving_bench.py"],
    ["python3", "scripts/build_cvpr_restoration_fidelity_bench.py"],
    ["python3", "scripts/build_cvpr_temporal_rollout_bench.py"],
    ["python3", "scripts/build_cvpr_constraint_generation_bench.py"],
    ["python3", "scripts/build_cvpr_vlm_answer_verification_bench.py"],
    ["python3", "scripts/build_cvpr_metric_geometry_bench.py"],
    ["python3", "scripts/build_cvpr_gaussian_splatting_bench.py"],
    ["python3", "scripts/build_cvpr_colab_gpu_worker.py"],
    ["python3", "scripts/validate_cvpr_colab_results.py"],
    ["python3", "scripts/verify_cvpr_colab_gpu_worker.py"],
    ["python3", "scripts/build_cvpr_colab_handoff_package.py"],
    ["python3", "scripts/verify_cvpr_colab_handoff_package.py"],
    ["python3", "scripts/build_cvpr_driving_safety_bench.py"],
    ["python3", "scripts/verify_cvpr_driving_safety_bench.py"],
    ["python3", "scripts/build_cvpr_constraint_generation_bench.py"],
    ["python3", "scripts/verify_cvpr_constraint_generation_bench.py"],
    ["python3", "scripts/build_cvpr_compute_serving_bench.py"],
    ["python3", "scripts/verify_cvpr_compute_serving_bench.py"],
    ["python3", "scripts/build_cvpr_clinical_shift_bench.py"],
    ["python3", "scripts/verify_cvpr_clinical_shift_bench.py"],
    ["python3", "scripts/build_cvpr_adversarial_provenance_bench.py"],
    ["python3", "scripts/verify_cvpr_adversarial_provenance_bench.py"],
    ["python3", "scripts/build_cvpr_long_tail_grounding_bench.py"],
    ["python3", "scripts/verify_cvpr_long_tail_grounding_bench.py"],
    ["python3", "scripts/build_cvpr_restoration_fidelity_bench.py"],
    ["python3", "scripts/verify_cvpr_restoration_fidelity_bench.py"],
    ["python3", "scripts/build_cvpr_temporal_rollout_bench.py"],
    ["python3", "scripts/verify_cvpr_temporal_rollout_bench.py"],
    ["python3", "scripts/build_cvpr_vlm_answer_verification_bench.py"],
    ["python3", "scripts/verify_cvpr_vlm_answer_verification_bench.py"],
    ["python3", "scripts/build_cvpr_metric_geometry_bench.py"],
    ["python3", "scripts/verify_cvpr_metric_geometry_bench.py"],
    ["python3", "scripts/build_cvpr_gaussian_splatting_bench.py"],
    ["python3", "scripts/verify_cvpr_gaussian_splatting_bench.py"],
    ["python3", "scripts/build_cvpr_mission_control.py"],
    ["python3", "scripts/verify_cvpr_mission_control.py"],
    ["python3", "scripts/build_cvpr_failure_atlas.py"],
    ["python3", "scripts/verify_cvpr_failure_atlas.py"],
    ["python3", "scripts/cvpr_paper_system_gate_experiments.py"],
    ["python3", "scripts/build_cvpr_paper_system_gate.py"],
]

VALIDATION_CENTER_PRE_COMMANDS = [
    ["python3", "scripts/build_cvpr_validation_center.py"],
]

VALIDATION_CENTER_POST_COMMANDS = [
    ["python3", "scripts/build_cvpr_validation_center.py"],
    ["python3", "scripts/verify_cvpr_validation_center.py"],
    ["python3", "scripts/verify_cvpr_live_colab_intake.py"],
    ["python3", "scripts/verify_cvpr_live_colab_promotion.py"],
    ["python3", "scripts/build_cvpr_colab_promotion_delta.py"],
    ["python3", "scripts/verify_cvpr_colab_promotion_delta.py"],
    ["python3", "scripts/build_cvpr_colab_release_bundle.py"],
    ["python3", "scripts/verify_cvpr_colab_release_bundle.py"],
    ["python3", "scripts/build_cvpr_colab_evidence_ledger.py"],
    ["python3", "scripts/verify_cvpr_colab_evidence_ledger.py"],
    ["python3", "scripts/build_cvpr_colab_run_receipt.py"],
    ["python3", "scripts/verify_cvpr_colab_run_receipt.py"],
    ["python3", "scripts/build_cvpr_theme_release_matrix.py"],
    ["python3", "scripts/verify_cvpr_theme_release_matrix.py"],
    ["python3", "scripts/build_cvpr_production_release_brief.py"],
    ["python3", "scripts/verify_cvpr_production_release_brief.py"],
    ["python3", "scripts/build_cvpr_production_coverage_audit.py"],
    ["python3", "scripts/verify_cvpr_production_coverage_audit.py"],
    ["python3", "scripts/build_cvpr_remediation_board.py"],
    ["python3", "scripts/verify_cvpr_remediation_board.py"],
    ["python3", "scripts/build_cvpr_remediation_sprint_plan.py"],
    ["python3", "scripts/verify_cvpr_remediation_sprint_plan.py"],
    ["python3", "scripts/build_cvpr_colab_operations_dashboard.py"],
    ["python3", "scripts/verify_cvpr_colab_operations_dashboard.py"],
    ["python3", "scripts/build_cvpr_colab_execution_planner.py"],
    ["python3", "scripts/verify_cvpr_colab_execution_planner.py"],
    ["python3", "scripts/build_cvpr_demo_evidence_cockpit.py"],
    ["python3", "scripts/verify_cvpr_demo_evidence_cockpit.py"],
    ["python3", "scripts/build_cvpr_colab_result_replay.py"],
    ["python3", "scripts/verify_cvpr_colab_result_replay.py"],
    ["python3", "scripts/build_cvpr_release_slo_dashboard.py"],
    ["python3", "scripts/verify_cvpr_release_slo_dashboard.py"],
    ["python3", "scripts/build_cvpr_release_regression_drillbook.py"],
    ["python3", "scripts/verify_cvpr_release_regression_drillbook.py"],
    ["python3", "scripts/build_cvpr_launch_readiness_pack.py"],
    ["python3", "scripts/verify_cvpr_launch_readiness_pack.py"],
    ["python3", "scripts/build_cvpr_release_manifest.py"],
    ["python3", "scripts/verify_cvpr_release_manifest.py"],
    ["python3", "scripts/build_cvpr_release_change_control.py"],
    ["python3", "scripts/verify_cvpr_release_change_control.py"],
    ["python3", "scripts/build_cvpr_release_dependency_graph.py"],
    ["python3", "scripts/verify_cvpr_release_dependency_graph.py"],
    ["python3", "scripts/build_cvpr_post_launch_monitoring.py"],
    ["python3", "scripts/verify_cvpr_post_launch_monitoring.py"],
    ["python3", "scripts/build_cvpr_release_audit_trail.py"],
    ["python3", "scripts/verify_cvpr_release_audit_trail.py"],
    ["python3", "scripts/build_cvpr_release_command_center.py"],
    ["python3", "scripts/verify_cvpr_release_command_center.py"],
    ["python3", "scripts/build_cvpr_theme_portfolio_map.py"],
    ["python3", "scripts/verify_cvpr_theme_portfolio_map.py"],
    ["python3", "scripts/build_cvpr_next_demo_roadmap.py"],
    ["python3", "scripts/verify_cvpr_next_demo_roadmap.py"],
    ["python3", "scripts/build_cvpr_demo_build_backlog.py"],
    ["python3", "scripts/verify_cvpr_demo_build_backlog.py"],
    ["python3", "scripts/build_cvpr_adaptive_serving_stress_lab.py"],
    ["python3", "scripts/verify_cvpr_adaptive_serving_stress_lab.py"],
    ["python3", "scripts/build_cvpr_constraint_edit_tournament.py"],
    ["python3", "scripts/verify_cvpr_constraint_edit_tournament.py"],
    ["python3", "scripts/build_cvpr_open_vocab_failure_hunt.py"],
    ["python3", "scripts/verify_cvpr_open_vocab_failure_hunt.py"],
    ["python3", "scripts/build_cvpr_3d_edit_provenance_room.py"],
    ["python3", "scripts/verify_cvpr_3d_edit_provenance_room.py"],
    ["python3", "scripts/build_cvpr_temporal_counterfactual_lab.py"],
    ["python3", "scripts/verify_cvpr_temporal_counterfactual_lab.py"],
    ["python3", "scripts/build_cvpr_grounded_answer_courtroom.py"],
    ["python3", "scripts/verify_cvpr_grounded_answer_courtroom.py"],
    ["python3", "scripts/build_cvpr_provenance_red_team_arena.py"],
    ["python3", "scripts/verify_cvpr_provenance_red_team_arena.py"],
    ["python3", "scripts/build_cvpr_safety_deployment_simulator.py"],
    ["python3", "scripts/verify_cvpr_safety_deployment_simulator.py"],
    ["python3", "scripts/build_cvpr_cross_theme_incident_gauntlet.py"],
    ["python3", "scripts/verify_cvpr_cross_theme_incident_gauntlet.py"],
    ["python3", "scripts/build_cvpr_gauntlet_remediation_sprint.py"],
    ["python3", "scripts/verify_cvpr_gauntlet_remediation_sprint.py"],
    ["python3", "scripts/build_cvpr_remediation_retest_harness.py"],
    ["python3", "scripts/verify_cvpr_remediation_retest_harness.py"],
    ["python3", "scripts/build_cvpr_remediation_promotion_board.py"],
    ["python3", "scripts/verify_cvpr_remediation_promotion_board.py"],
    ["python3", "scripts/build_cvpr_remediation_canary_monitor.py"],
    ["python3", "scripts/verify_cvpr_remediation_canary_monitor.py"],
    ["python3", "scripts/build_cvpr_remediation_rollback_drillbook.py"],
    ["python3", "scripts/verify_cvpr_remediation_rollback_drillbook.py"],
    ["python3", "scripts/build_cvpr_remediation_rollback_rehearsal_lab.py"],
    ["python3", "scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py"],
    ["python3", "scripts/build_cvpr_remediation_audit_ledger.py"],
    ["python3", "scripts/verify_cvpr_remediation_audit_ledger.py"],
    ["python3", "scripts/build_cvpr_remediation_command_center.py"],
    ["python3", "scripts/verify_cvpr_remediation_command_center.py"],
    ["python3", "scripts/build_cvpr_remediation_release_brief.py"],
    ["python3", "scripts/verify_cvpr_remediation_release_brief.py"],
    ["python3", "scripts/build_cvpr_remediation_closeout_pack.py"],
    ["python3", "scripts/verify_cvpr_remediation_closeout_pack.py"],
    ["python3", "scripts/build_cvpr_second_round_demo_roadmap.py"],
    ["python3", "scripts/verify_cvpr_second_round_demo_roadmap.py"],
    ["python3", "scripts/build_cvpr_visual_qa_sweep_dashboard.py"],
    ["python3", "scripts/verify_cvpr_visual_qa_sweep_dashboard.py"],
    ["python3", "scripts/build_cvpr_scenario_expansion_pack.py"],
    ["python3", "scripts/verify_cvpr_scenario_expansion_pack.py"],
    ["python3", "scripts/build_cvpr_3d_temporal_rollback_stress_lab.py"],
    ["python3", "scripts/verify_cvpr_3d_temporal_rollback_stress_lab.py"],
    ["python3", "scripts/build_cvpr_clinical_safety_escalation_playbook.py"],
    ["python3", "scripts/verify_cvpr_clinical_safety_escalation_playbook.py"],
    ["python3", "scripts/build_cvpr_second_round_closeout_reseal.py"],
    ["python3", "scripts/verify_cvpr_second_round_closeout_reseal.py"],
    ["python3", "scripts/build_cvpr_regression_injection_arena.py"],
    ["python3", "scripts/verify_cvpr_regression_injection_arena.py"],
    ["python3", "scripts/build_cvpr_paper_repo_demo_forge.py"],
    ["python3", "scripts/verify_cvpr_paper_repo_demo_forge.py"],
    ["python3", "scripts/build_cvpr_embodied_control_repo_drill.py"],
    ["python3", "scripts/verify_cvpr_embodied_control_repo_drill.py"],
    ["python3", "scripts/build_cvpr_efficient_learning_repo_governor.py"],
    ["python3", "scripts/verify_cvpr_efficient_learning_repo_governor.py"],
    ["python3", "scripts/build_cvpr_perception_parts_repo_bench.py"],
    ["python3", "scripts/verify_cvpr_perception_parts_repo_bench.py"],
    ["python3", "scripts/build_cvpr_frontier_sensor_fusion_bench.py"],
    ["python3", "scripts/verify_cvpr_frontier_sensor_fusion_bench.py"],
    ["python3", "scripts/build_cvpr_remaining_paper_repo_demos.py"],
    ["python3", "scripts/verify_cvpr_remaining_paper_repo_demos.py"],
    ["python3", "scripts/build_cvpr_repo_gpu_harness.py"],
    ["python3", "scripts/verify_cvpr_repo_gpu_harness.py"],
    ["python3", "scripts/build_cvpr_repo_harness_live_intake.py"],
    ["python3", "scripts/validate_cvpr_repo_harness_results.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_live_intake.py"],
    ["python3", "scripts/build_cvpr_repo_harness_worker.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_worker.py"],
    ["python3", "scripts/build_cvpr_repo_harness_first_batch_receipt.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_first_batch_receipt.py"],
    ["python3", "scripts/build_cvpr_repo_harness_wave_planner.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_wave_planner.py"],
    ["python3", "scripts/build_cvpr_repo_harness_handoff_package.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_handoff_package.py"],
    ["python3", "scripts/build_cvpr_repo_harness_execution_dashboard.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_execution_dashboard.py"],
    ["python3", "scripts/build_cvpr_repo_harness_promotion_board.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_promotion_board.py"],
    ["python3", "scripts/build_cvpr_repo_harness_promotion_delta.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_promotion_delta.py"],
    ["python3", "scripts/build_cvpr_repo_harness_replacement_receipt.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_replacement_receipt.py"],
    ["python3", "scripts/build_cvpr_repo_harness_command_center.py"],
    ["python3", "scripts/verify_cvpr_repo_harness_command_center.py"],
    ["python3", "scripts/build_cvpr_frontier_live_evidence_drill.py"],
    ["python3", "scripts/verify_cvpr_frontier_live_evidence_drill.py"],
    ["python3", "scripts/build_cvpr_3d_world_live_evidence_room.py"],
    ["python3", "scripts/verify_cvpr_3d_world_live_evidence_room.py"],
    ["python3", "scripts/build_cvpr_video_temporal_live_evidence_lab.py"],
    ["python3", "scripts/verify_cvpr_video_temporal_live_evidence_lab.py"],
    ["python3", "scripts/build_cvpr_generation_control_live_evidence_studio.py"],
    ["python3", "scripts/verify_cvpr_generation_control_live_evidence_studio.py"],
    ["python3", "scripts/build_cvpr_grounded_vlm_live_evidence_court.py"],
    ["python3", "scripts/verify_cvpr_grounded_vlm_live_evidence_court.py"],
    ["python3", "scripts/build_cvpr_perception_parts_live_evidence_bench.py"],
    ["python3", "scripts/verify_cvpr_perception_parts_live_evidence_bench.py"],
    ["python3", "scripts/build_cvpr_embodied_control_live_evidence_drill.py"],
    ["python3", "scripts/verify_cvpr_embodied_control_live_evidence_drill.py"],
    ["python3", "scripts/build_cvpr_efficient_learning_live_evidence_governor.py"],
    ["python3", "scripts/verify_cvpr_efficient_learning_live_evidence_governor.py"],
    ["python3", "scripts/build_cvpr_live_evidence_portfolio.py"],
    ["python3", "scripts/verify_cvpr_live_evidence_portfolio.py"],
    ["python3", "scripts/build_cvpr_live_evidence_release_brief.py"],
    ["python3", "scripts/verify_cvpr_live_evidence_release_brief.py"],
    ["python3", "scripts/build_cvpr_live_evidence_release_manifest.py"],
    ["python3", "scripts/verify_cvpr_live_evidence_release_manifest.py"],
    ["python3", "scripts/build_cvpr_live_evidence_coverage_audit.py"],
    ["python3", "scripts/verify_cvpr_live_evidence_coverage_audit.py"],
    ["python3", "scripts/build_cvpr_live_evidence_command_center.py"],
    ["python3", "scripts/verify_cvpr_live_evidence_command_center.py"],
    ["python3", "scripts/build_cvpr_live_evidence_handoff_bundle.py"],
    ["python3", "scripts/verify_cvpr_live_evidence_handoff_bundle.py"],
    ["python3", "scripts/build_cvpr_paper_reproduction_track.py"],
    ["python3", "scripts/verify_cvpr_paper_reproduction_track.py"],
    ["python3", "scripts/build_cvpr_reproduction_viewer_gallery.py"],
    ["python3", "scripts/verify_cvpr_reproduction_viewer_gallery.py"],
    ["python3", "scripts/build_cvpr_artifact_rehydration_queue.py"],
    ["python3", "scripts/verify_cvpr_artifact_rehydration_queue.py"],
    ["python3", "scripts/build_cvpr_mos_frontier_deep_viewer.py"],
    ["python3", "scripts/verify_cvpr_mos_frontier_deep_viewer.py"],
    ["python3", "scripts/build_cvpr_deep_viewer_portfolio.py"],
    ["python3", "scripts/verify_cvpr_deep_viewer_portfolio.py"],
    ["python3", "scripts/build_cvpr_top_paper_repo_demo_matrix.py"],
    ["python3", "scripts/verify_cvpr_top_paper_repo_demo_matrix.py"],
    ["python3", "scripts/build_cvpr_subtheme_coverage_drilldown.py"],
    ["python3", "scripts/verify_cvpr_subtheme_coverage_drilldown.py"],
    ["python3", "scripts/build_cvpr_subtheme_scenario_lab.py"],
    ["python3", "scripts/verify_cvpr_subtheme_scenario_lab.py"],
    ["python3", "scripts/build_cvpr_subtheme_release_scoreboard.py"],
    ["python3", "scripts/verify_cvpr_subtheme_release_scoreboard.py"],
    ["python3", "scripts/build_cvpr_interactive_demo_workbench.py"],
    ["python3", "scripts/verify_cvpr_interactive_demo_workbench.py"],
    ["python3", "scripts/verify_cvpr_interactive_demo_workbench_runtime.py"],
    ["python3", "scripts/build_cvpr_interactive_expansion_backlog.py"],
    ["python3", "scripts/verify_cvpr_interactive_expansion_backlog.py"],
    ["python3", "scripts/build_cvpr_interactive_second_wave.py"],
    ["python3", "scripts/verify_cvpr_interactive_second_wave.py"],
    ["python3", "scripts/build_cvpr_interactive_third_wave.py"],
    ["python3", "scripts/verify_cvpr_interactive_third_wave.py"],
    ["python3", "scripts/build_cvpr_interactive_fourth_wave.py"],
    ["python3", "scripts/verify_cvpr_interactive_fourth_wave.py"],
    ["python3", "scripts/build_cvpr_interactive_fifth_wave.py"],
    ["python3", "scripts/verify_cvpr_interactive_fifth_wave.py"],
    ["python3", "scripts/build_cvpr_interactive_coverage_portfolio.py"],
    ["python3", "scripts/verify_cvpr_interactive_coverage_portfolio.py"],
    ["python3", "scripts/build_cvpr_interactive_console.py"],
    ["python3", "scripts/verify_cvpr_interactive_console.py"],
    ["python3", "scripts/build_cvpr_interactive_scenario_runner.py"],
    ["python3", "scripts/verify_cvpr_interactive_scenario_runner.py"],
    ["python3", "scripts/build_cvpr_interactive_triage_board.py"],
    ["python3", "scripts/verify_cvpr_interactive_triage_board.py"],
    ["python3", "scripts/build_cvpr_interactive_release_pack.py"],
    ["python3", "scripts/verify_cvpr_interactive_release_pack.py"],
    ["python3", "scripts/build_cvpr_interactive_audit_ledger.py"],
    ["python3", "scripts/verify_cvpr_interactive_audit_ledger.py"],
    ["python3", "scripts/build_cvpr_interactive_command_center.py"],
    ["python3", "scripts/verify_cvpr_interactive_command_center.py"],
    ["python3", "scripts/build_cvpr_interactive_health_monitor.py"],
    ["python3", "scripts/verify_cvpr_interactive_health_monitor.py"],
    ["python3", "scripts/build_cvpr_interactive_drift_sentinel.py"],
    ["python3", "scripts/verify_cvpr_interactive_drift_sentinel.py"],
    ["python3", "scripts/build_cvpr_interactive_rollback_drillbook.py"],
    ["python3", "scripts/verify_cvpr_interactive_rollback_drillbook.py"],
    ["python3", "scripts/build_cvpr_interactive_rollback_rehearsal_lab.py"],
    ["python3", "scripts/verify_cvpr_interactive_rollback_rehearsal_lab.py"],
    ["python3", "scripts/build_cvpr_interactive_closeout_seal.py"],
    ["python3", "scripts/verify_cvpr_interactive_closeout_seal.py"],
    ["python3", "scripts/build_cvpr_interactive_handoff_bundle.py"],
    ["python3", "scripts/verify_cvpr_interactive_handoff_bundle.py"],
    ["python3", "scripts/build_cvpr_interactive_navigation_manifest_audit.py"],
    ["python3", "scripts/verify_cvpr_interactive_navigation_manifest_audit.py"],
    ["python3", "scripts/build_cvpr_interactive_package_integrity_audit.py"],
    ["python3", "scripts/verify_cvpr_interactive_package_integrity_audit.py"],
    ["python3", "scripts/build_cvpr_interactive_validator_command_audit.py"],
    ["python3", "scripts/verify_cvpr_interactive_validator_command_audit.py"],
    ["python3", "scripts/build_cvpr_interactive_full_stack_result_audit.py"],
    ["python3", "scripts/verify_cvpr_interactive_full_stack_result_audit.py"],
]


def run_command(command):
    started = time.time()
    completed = subprocess.run(command, cwd=ROOT, text=True, capture_output=True)
    return {
        "command": " ".join(command),
        "returnCode": completed.returncode,
        "durationSec": round(time.time() - started, 3),
        "stdoutTail": completed.stdout.strip().splitlines()[-5:],
        "stderrTail": completed.stderr.strip().splitlines()[-5:],
    }


def run_core_tests():
    lines = []
    started = time.time()
    for test in CORE_TESTS:
        completed = subprocess.run(["node", str(test.relative_to(ROOT))], cwd=ROOT, text=True, capture_output=True)
        if completed.returncode != 0:
            return {
                "command": "node source-code/learning/*/tests/core.test.js",
                "returnCode": completed.returncode,
                "durationSec": round(time.time() - started, 3),
                "testCount": len(CORE_TESTS),
                "stdoutTail": completed.stdout.strip().splitlines()[-5:],
                "stderrTail": completed.stderr.strip().splitlines()[-5:],
            }
        lines.extend(completed.stdout.strip().splitlines())
    CORE_TEST_LOG.write_text("\n".join(lines) + "\n", encoding="utf-8")
    return {
        "command": "node source-code/learning/*/tests/core.test.js",
        "returnCode": 0,
        "durationSec": round(time.time() - started, 3),
        "testCount": len(CORE_TESTS),
        "log": str(CORE_TEST_LOG),
        "stdoutTail": lines[-5:],
        "stderrTail": [],
    }


def main():
    started = time.time()
    steps = []
    status = "valid"

    for command in COMMANDS:
        result = run_command(command)
        steps.append(result)
        if result["returnCode"] != 0:
            status = "invalid"
            break

    core_result = None
    if status == "valid":
        worker = json.loads((ROOT / "analysis/cvpr_colab_gpu_worker/registry.json").read_text(encoding="utf-8"))
        import_report = json.loads((ROOT / "analysis/cvpr_colab_gpu_worker/import_validation.json").read_text(encoding="utf-8"))
        preliminary = {
            "validator": "validate_cvpr_full_stack",
            "status": status,
            "commands": len(COMMANDS) + len(VALIDATION_CENTER_PRE_COMMANDS) + len(VALIDATION_CENTER_POST_COMMANDS),
            "steps": len(steps),
            "packageTests": len(CORE_TESTS),
            "workerJobs": worker["summary"]["jobs"],
            "promotedRunners": worker["summary"].get("promotedRunners", 0),
            "cachedResults": worker["summary"]["cachedResults"],
            "importIssues": import_report["summary"]["issues"],
            "durationSec": round(time.time() - started, 3),
        }
        REPORT.parent.mkdir(parents=True, exist_ok=True)
        REPORT.write_text(json.dumps({"summary": preliminary, "steps": steps}, indent=2) + "\n", encoding="utf-8")
        for command in VALIDATION_CENTER_PRE_COMMANDS:
            result = run_command(command)
            steps.append(result)
            if result["returnCode"] != 0:
                status = "invalid"
                break

    if status == "valid":
        core_result = run_core_tests()
        steps.append(core_result)
        if core_result["returnCode"] != 0:
            status = "invalid"

    worker = json.loads((ROOT / "analysis/cvpr_colab_gpu_worker/registry.json").read_text(encoding="utf-8"))
    import_report = json.loads((ROOT / "analysis/cvpr_colab_gpu_worker/import_validation.json").read_text(encoding="utf-8"))
    summary = {
        "validator": "validate_cvpr_full_stack",
        "status": status,
        "commands": len(COMMANDS) + len(VALIDATION_CENTER_PRE_COMMANDS) + len(VALIDATION_CENTER_POST_COMMANDS),
        "steps": len(steps),
        "packageTests": core_result["testCount"] if core_result else 0,
        "workerJobs": worker["summary"]["jobs"],
        "promotedRunners": worker["summary"].get("promotedRunners", 0),
        "cachedResults": worker["summary"]["cachedResults"],
        "importIssues": import_report["summary"]["issues"],
        "durationSec": round(time.time() - started, 3),
    }
    REPORT.parent.mkdir(parents=True, exist_ok=True)
    REPORT.write_text(json.dumps({"summary": summary, "steps": steps}, indent=2) + "\n", encoding="utf-8")
    if status == "valid":
        for command in VALIDATION_CENTER_POST_COMMANDS:
            result = run_command(command)
            steps.append(result)
            summary["steps"] = len(steps)
            summary["durationSec"] = round(time.time() - started, 3)
            REPORT.write_text(json.dumps({"summary": summary, "steps": steps}, indent=2) + "\n", encoding="utf-8")
            if result["returnCode"] != 0:
                status = "invalid"
                break
        summary["status"] = status
        summary["steps"] = len(steps)
        summary["durationSec"] = round(time.time() - started, 3)
        REPORT.write_text(json.dumps({"summary": summary, "steps": steps}, indent=2) + "\n", encoding="utf-8")
        if status == "valid":
            final_sync = subprocess.run(["python3", "scripts/build_cvpr_validation_center.py"], cwd=ROOT, text=True, capture_output=True)
            if final_sync.returncode != 0:
                status = "invalid"
                summary["status"] = status
                REPORT.write_text(json.dumps({"summary": summary, "steps": steps}, indent=2) + "\n", encoding="utf-8")
    print(
        f"validated CVPR full stack: {summary['steps']} steps, "
        f"{summary['packageTests']} package tests, status {summary['status']}"
    )
    raise SystemExit(0 if status == "valid" else 1)


if __name__ == "__main__":
    main()
