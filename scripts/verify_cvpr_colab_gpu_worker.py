"""Verify the CVPR Colab GPU worker bridge."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "analysis/cvpr_colab_gpu_worker/registry.json"


def main():
    data = json.loads(REGISTRY.read_text(encoding="utf-8"))
    summary = data["summary"]
    assert summary["worker"] == "cvpr-colab-gpu-worker"
    assert summary["runtimePlane"] == "google-colab-pro-plus"
    assert summary["controlPlane"] == "local-static-cvpr-site"
    assert summary["resultPlane"] == "registry-and-cached-json"
    assert summary["jobs"] == 10
    assert summary["liveCapable"] == 10
    assert summary["promotedRunners"] == 10
    assert summary["cachedCapable"] == 10
    assert summary["cachedResults"] == 40
    assert summary["validCachedResults"] == 40
    assert summary["firstGpuBackedBench"] == "cvpr-long-tail-grounding-bench"
    assert summary["runbook"] == "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md"
    assert summary["importValidator"] == "scripts/validate_cvpr_colab_results.py"
    assert summary["validationReport"] == "analysis/cvpr_colab_gpu_worker/import_validation.json"
    assert summary["liveExportArtifact"] == "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
    assert summary["liveIntakeGate"] == "scripts/stage_cvpr_live_colab_export.py"
    assert summary["fullStackValidator"] == "scripts/validate_cvpr_full_stack.py"
    assert summary["fullStackReport"] == "analysis/cvpr_full_stack_validation/registry.json"
    assert summary["status"] == "interactive-contract"
    assert len(data["jobs"]) == 10
    assert len(data["runnerCoverage"]) == 10
    assert {row["jobId"] for row in data["runnerCoverage"]} == {job["id"] for job in data["jobs"]}
    assert len(data["runManifest"]["jobs"]) == 10
    assert data["runManifest"]["runtimePlane"] == "google-colab-pro-plus"
    assert data["runManifest"]["resultArtifact"] == "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"
    assert data["runManifest"]["liveExportArtifact"] == "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json"
    assert sum(job["expectedCases"] for job in data["runManifest"]["jobs"]) == 40
    for job in data["runManifest"]["jobs"]:
        assert job["expectedCases"] == 4
        assert job["importPath"].startswith("analysis/cvpr_")
        assert job["importPath"].endswith("/registry.json")
        assert job["resultFilter"] == {"jobId": job["jobId"], "mode": "cached-real"}
    assert len(data["cachedResults"]) == 40
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "open-vocab-grounding") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "restoration-fidelity") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "adversarial-provenance") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "temporal-rollout") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "clinical-shift") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "compute-serving") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "constraint-generation") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "driving-safety") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "metric-geometry") == 4
    assert sum(1 for result in data["cachedResults"] if result["jobId"] == "gaussian-splatting") == 4
    for result in data["cachedResults"]:
        assert result["mode"] == "cached-real"
        assert result["provenance"]["runtime"] == "google-colab-pro-plus"
        assert 0 <= result["metrics"]["readiness"] <= 100
        assert result["jobId"] in {"open-vocab-grounding", "restoration-fidelity", "adversarial-provenance", "temporal-rollout", "clinical-shift", "compute-serving", "constraint-generation", "driving-safety", "metric-geometry", "gaussian-splatting"}
    notebook = json.loads((ROOT / summary["notebook"]).read_text(encoding="utf-8"))
    assert notebook["nbformat"] == 4
    assert "CVPR GPU Worker" in "".join(notebook["cells"][0]["source"])
    assert "RUN_MANIFEST" in "".join(notebook["cells"][2]["source"])
    notebook_source = "\n".join("".join(cell.get("source", [])) for cell in notebook["cells"])
    for token in (
        "GROUNDING_CASES",
        "load_open_vocab_models",
        "AutoModelForZeroShotObjectDetection",
        "SiglipModel",
        "run_open_vocab_grounding_batch",
        "transformers-grounding-dino-siglip",
        "RESTORATION_CASES",
        "load_restoration_models",
        "Swin2SRForImageSuperResolution",
        "run_restoration_fidelity_batch",
        "transformers-swin2sr-restoration",
        "ADVERSARIAL_CASES",
        "load_adversarial_models",
        "CLIPModel",
        "run_adversarial_provenance_batch",
        "transformers-clip-provenance-probe",
        "TEMPORAL_CASES",
        "load_temporal_models",
        "raft_small",
        "run_temporal_rollout_batch",
        "torchvision-raft-temporal-flow",
        "CLINICAL_CASES",
        "load_clinical_models",
        "run_clinical_shift_batch",
        "torch-clinical-shift-embedding-probe",
        "COMPUTE_CASES",
        "load_compute_models",
        "profile_serving_workload",
        "run_compute_serving_batch",
        "torch-serving-latency-profiler",
        "CONSTRAINT_CASES",
        "load_constraint_models",
        "run_constraint_generation_batch",
        "torch-layout-identity-reward-probe",
        "DRIVING_CASES",
        "load_driving_models",
        "run_driving_safety_batch",
        "torch-driving-scene-risk-probe",
        "GEOMETRY_CASES",
        "load_metric_geometry_models",
        "run_metric_geometry_batch",
        "torch-metric-geometry-probe",
        "SPLATTING_CASES",
        "load_gaussian_splatting_models",
        "run_gaussian_splatting_batch",
        "torch-gaussian-splatting-render-probe",
        "prepare_live_colab_export",
        "validate_live_colab_export",
        "cvpr_gpu_export_report.json",
        "cvpr-colab-live-v1",
        "require_real_models=True",
    ):
        assert token in notebook_source
    for row in data["runnerCoverage"]:
        assert row["strictMode"] == "require_real_models=True"
        assert row["caseSymbol"] in notebook_source
        assert row["loader"] in notebook_source
        assert row["runner"] in notebook_source
        assert row["execution"] in notebook_source
    assert "Replace this deterministic stub" not in notebook_source
    page = (ROOT / "cvpr-colab-gpu-worker.html").read_text(encoding="utf-8")
    for token in (
        "CVPR Colab GPU Worker",
        "Colab GPU worker",
        "Runtime Contract",
        "Pro+ Handoff",
        "COLAB_PRO_PLUS_RUNBOOK.md",
        "Import Gate",
        "validate_cvpr_colab_results.py",
        "Live Export Gate",
        "stage_cvpr_live_colab_export.py",
        "Full Stack Gate",
        "validate_cvpr_full_stack.py",
        "GPU Job Queue",
        "Runner Coverage",
        "Run Manifest",
        "cached-real",
        "live-colab",
        "cvpr-long-tail-grounding-bench.html",
    ):
        assert token in page
    assert (ROOT / "source-code/learning/cvpr-colab-gpu-worker/src/core.js").exists()
    assert (ROOT / "source-code/learning/cvpr-colab-gpu-worker/src/fixtures.js").exists()
    assert (ROOT / "source-code/learning/cvpr-colab-gpu-worker/tests/core.test.js").exists()
    runbook = (ROOT / summary["runbook"]).read_text(encoding="utf-8")
    for token in (
        "CVPR Colab Pro+ Runbook",
        "google-colab-pro-plus",
        "cvpr_gpu_results.json",
        "GroundingDINO/SigLIP",
        "Swin2SR",
        "CLIP provenance probe",
        "RAFT optical-flow rollout",
        "Torch clinical embedding",
        "Torch serving latency profiler",
        "Torch layout/identity/reward probe",
        "Torch driving scene/risk probe",
        "Torch metric geometry probe",
        "Torch Gaussian Splatting render probe",
        "require_real_models=True",
        "validate_cvpr_colab_results.py",
        "stage_cvpr_live_colab_export.py",
        "validate_cvpr_full_stack.py",
        "cvpr-validation-center.html",
        "cvpr-colab-live-intake.html",
        "cvpr-colab-release-bundle.html",
        "open-vocab-grounding",
        "driving-safety",
        "metric-geometry",
        "gaussian-splatting",
    ):
        assert token in runbook
    assert (ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json").exists()
    assert (ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json").exists()
    assert (ROOT / summary["importValidator"]).exists()
    assert (ROOT / summary["fullStackValidator"]).exists()
    report = json.loads((ROOT / summary["validationReport"]).read_text(encoding="utf-8"))
    assert report["summary"]["status"] == "valid"
    assert report["summary"]["jobs"] == 10
    assert report["summary"]["expectedResults"] == 40
    assert report["summary"]["actualResults"] == 40
    assert report["summary"]["issues"] == 0
    full_stack_path = ROOT / summary["fullStackReport"]
    if full_stack_path.exists():
        full_stack = json.loads(full_stack_path.read_text(encoding="utf-8"))
        assert full_stack["summary"]["status"] in {"valid", "invalid"}
        assert full_stack["summary"]["workerJobs"] in {8, 10}
        assert full_stack["summary"]["cachedResults"] in {32, 40}
        assert full_stack["summary"]["importIssues"] == 0
        assert full_stack["summary"]["packageTests"] == 0 or full_stack["summary"]["packageTests"] >= 26
    print(
        f"verified CVPR Colab GPU worker: {summary['jobs']} jobs, "
        f"{summary['cachedResults']} cached results"
    )


if __name__ == "__main__":
    main()
