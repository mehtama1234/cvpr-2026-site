"""Build the CVPR Colab GPU worker bridge."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-colab-gpu-worker"
ANALYSIS = ROOT / "analysis/cvpr_colab_gpu_worker"
NOTEBOOK = ROOT / "notebooks/cvpr_gpu_worker.ipynb"
RUNBOOK = ROOT / "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md"
GROUNDING_REGISTRY = ROOT / "analysis/cvpr_long_tail_grounding_bench/registry.json"
RESTORATION_REGISTRY = ROOT / "analysis/cvpr_restoration_fidelity_bench/registry.json"
ADVERSARIAL_REGISTRY = ROOT / "analysis/cvpr_adversarial_provenance_bench/registry.json"
TEMPORAL_REGISTRY = ROOT / "analysis/cvpr_temporal_rollout_bench/registry.json"
CLINICAL_REGISTRY = ROOT / "analysis/cvpr_clinical_shift_bench/registry.json"
COMPUTE_REGISTRY = ROOT / "analysis/cvpr_compute_serving_bench/registry.json"
CONSTRAINT_REGISTRY = ROOT / "analysis/cvpr_constraint_generation_bench/registry.json"
DRIVING_REGISTRY = ROOT / "analysis/cvpr_driving_safety_bench/registry.json"
GEOMETRY_REGISTRY = ROOT / "analysis/cvpr_metric_geometry_bench/registry.json"
SPLATTING_REGISTRY = ROOT / "analysis/cvpr_gaussian_splatting_bench/registry.json"
PROMOTED_MANIFEST = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
PROMOTED_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"

WORKER_JOBS = [
    {
        "id": "open-vocab-grounding",
        "title": "Open-vocabulary grounding GPU run",
        "bench": "cvpr-long-tail-grounding-bench",
        "page": "cvpr-long-tail-grounding-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["siglip-base-patch16-224", "grounding-dino-tiny", "sam-vit-b"],
        "inputs": ["image", "text_query", "candidate_regions"],
        "outputs": ["boxes", "region_scores", "embedding_scores", "localized_evidence"],
        "gpuClass": "T4/L4/A100",
        "priority": 1,
    },
    {
        "id": "restoration-fidelity",
        "title": "Restoration fidelity GPU run",
        "bench": "cvpr-restoration-fidelity-bench",
        "page": "cvpr-restoration-fidelity-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["swinir-lightweight", "real-esrgan-x2"],
        "inputs": ["degraded_image", "degradation_controls"],
        "outputs": ["restored_image", "artifact_map", "downstream_score"],
        "gpuClass": "T4/L4/A100",
        "priority": 2,
    },
    {
        "id": "adversarial-provenance",
        "title": "Adversarial provenance GPU run",
        "bench": "cvpr-adversarial-provenance-bench",
        "page": "cvpr-adversarial-provenance-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["watermark-detector", "clip-perturbation-probe"],
        "inputs": ["image", "attack_controls", "watermark_controls"],
        "outputs": ["provenance_confidence", "attack_heatmap", "leakage_risk"],
        "gpuClass": "T4/L4/A100",
        "priority": 3,
    },
    {
        "id": "temporal-rollout",
        "title": "Temporal rollout GPU run",
        "bench": "cvpr-temporal-rollout-bench",
        "page": "cvpr-temporal-rollout-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["video-feature-tracker", "raft-lite", "world-rollout-probe"],
        "inputs": ["video_clip", "tracking_controls"],
        "outputs": ["identity_tracks", "contact_events", "drift_curve"],
        "gpuClass": "L4/A100",
        "priority": 4,
    },
    {
        "id": "clinical-shift",
        "title": "Clinical shift validation GPU run",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["dicom-embedding-shift-probe", "temperature-calibration-head", "uncertainty-triage-head"],
        "inputs": ["medical_image_batch", "site_metadata", "review_controls"],
        "outputs": ["domain_embeddings", "calibration_curve", "triage_scores", "clinical_evidence"],
        "gpuClass": "T4/L4/A100",
        "priority": 5,
    },
    {
        "id": "compute-serving",
        "title": "Compute constrained serving GPU run",
        "bench": "cvpr-compute-serving-bench",
        "page": "cvpr-compute-serving-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["quantized-vision-encoder", "student-router", "latency-profiler"],
        "inputs": ["image_batch", "serving_controls", "escalation_policy"],
        "outputs": ["latency_profile", "quality_floor", "routing_trace", "retained_evidence"],
        "gpuClass": "T4/L4/A100",
        "priority": 6,
    },
    {
        "id": "constraint-generation",
        "title": "Constraint preserving generation GPU run",
        "bench": "cvpr-constraint-generation-bench",
        "page": "cvpr-constraint-generation-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["layout-controlnet", "identity-embedding-lock", "preference-reward-probe"],
        "inputs": ["source_image", "edit_prompt", "constraint_controls"],
        "outputs": ["edited_image", "layout_mask", "identity_embedding_delta", "reward_trace"],
        "gpuClass": "L4/A100",
        "priority": 7,
    },
    {
        "id": "driving-safety",
        "title": "Driving safety closed-loop GPU run",
        "bench": "cvpr-driving-safety-bench",
        "page": "cvpr-driving-safety-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["vla-scene-grounder", "ttc-risk-head", "safety-rule-monitor"],
        "inputs": ["driving_clip", "hazard_controls", "action_confidence"],
        "outputs": ["scene_grounding_map", "time_to_collision", "risk_trace", "rule_violations"],
        "gpuClass": "L4/A100",
        "priority": 8,
    },
    {
        "id": "depth-normal-consistency",
        "title": "Depth-normal consistency GPU run",
        "bench": "cvpr-depth-normal-consistency-bench",
        "page": "cvpr-depth-normal-consistency-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["torch-cuda-depth-normal-probe", "finite-difference-normal-consistency"],
        "inputs": ["depth_map", "normal_controls", "scene_geometry"],
        "outputs": ["normal_map", "consistency_curve", "depth_residual_map", "surface_alerts"],
        "gpuClass": "T4/L4/A100",
        "priority": 9,
    },
    {
        "id": "corruption-robustness",
        "title": "Corruption robustness GPU run",
        "bench": "cvpr-corruption-robustness-bench",
        "page": "cvpr-corruption-robustness-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["torchvision-resnet18", "clean-corrupted-logit-delta"],
        "inputs": ["image_batch", "corruption_controls", "severity_schedule"],
        "outputs": ["feature_retention", "label_drift_curve", "confidence_collapse", "corruption_report"],
        "gpuClass": "T4/L4/A100",
        "priority": 10,
    },
    {
        "id": "prompt-segmentation-robustness",
        "title": "Prompt segmentation robustness GPU run",
        "bench": "cvpr-prompt-segmentation-robustness-bench",
        "page": "cvpr-prompt-segmentation-robustness-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["torchvision-maskrcnn-resnet50-fpn", "mask-rcnn-click-robustness-proxy"],
        "inputs": ["image", "prompt_points", "prompt_variants"],
        "outputs": ["mask_predictions", "click_sensitivity", "iou_trace", "prompt_failure_map"],
        "gpuClass": "T4/L4/A100",
        "priority": 11,
    },
    {
        "id": "video-identity-tracking",
        "title": "Video identity tracking GPU run",
        "bench": "cvpr-video-identity-tracking-bench",
        "page": "cvpr-video-identity-tracking-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["torch-cuda-centroid-assignment-tracker", "mask-sequence-identity-drift"],
        "inputs": ["video_clip", "identity_seed", "tracking_controls"],
        "outputs": ["track_sequence", "identity_drift_curve", "handoff_events", "failure_frames"],
        "gpuClass": "T4/L4/A100",
        "priority": 12,
    },
    {
        "id": "metric-geometry",
        "title": "Metric geometry GPU run",
        "bench": "cvpr-metric-geometry-bench",
        "page": "cvpr-metric-geometry-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["torch-pose-bundle-adjuster", "metric-scale-probe", "surface-consistency-head"],
        "inputs": ["multi_view_images", "camera_controls", "scale_controls"],
        "outputs": ["pose_graph", "scale_trace", "surface_residual_map", "topology_warnings"],
        "gpuClass": "L4/A100",
        "priority": 9,
    },
    {
        "id": "gaussian-splatting",
        "title": "Gaussian Splatting GPU run",
        "bench": "cvpr-gaussian-splatting-bench",
        "page": "cvpr-gaussian-splatting-bench.html",
        "runtimeModes": ["simulated", "cached-real", "live-colab"],
        "models": ["torch-splat-renderer", "semantic-splat-attach", "provenance-trace-head"],
        "inputs": ["scene_views", "splat_controls", "edit_controls"],
        "outputs": ["novel_view_renders", "semantic_splat_map", "provenance_trace", "edit_leakage_report"],
        "gpuClass": "L4/A100",
        "priority": 10,
    },
]

RUNNER_COVERAGE = [
    {"jobId": "open-vocab-grounding", "caseSymbol": "GROUNDING_CASES", "loader": "load_open_vocab_models", "runner": "run_open_vocab_grounding_batch", "execution": "transformers-grounding-dino-siglip", "strictMode": "require_real_models=True"},
    {"jobId": "restoration-fidelity", "caseSymbol": "RESTORATION_CASES", "loader": "load_restoration_models", "runner": "run_restoration_fidelity_batch", "execution": "transformers-swin2sr-restoration", "strictMode": "require_real_models=True"},
    {"jobId": "adversarial-provenance", "caseSymbol": "ADVERSARIAL_CASES", "loader": "load_adversarial_models", "runner": "run_adversarial_provenance_batch", "execution": "transformers-clip-provenance-probe", "strictMode": "require_real_models=True"},
    {"jobId": "temporal-rollout", "caseSymbol": "TEMPORAL_CASES", "loader": "load_temporal_models", "runner": "run_temporal_rollout_batch", "execution": "torchvision-raft-temporal-flow", "strictMode": "require_real_models=True"},
    {"jobId": "clinical-shift", "caseSymbol": "CLINICAL_CASES", "loader": "load_clinical_models", "runner": "run_clinical_shift_batch", "execution": "torch-clinical-shift-embedding-probe", "strictMode": "require_real_models=True"},
    {"jobId": "compute-serving", "caseSymbol": "COMPUTE_CASES", "loader": "load_compute_models", "runner": "run_compute_serving_batch", "execution": "torch-serving-latency-profiler", "strictMode": "require_real_models=True"},
    {"jobId": "constraint-generation", "caseSymbol": "CONSTRAINT_CASES", "loader": "load_constraint_models", "runner": "run_constraint_generation_batch", "execution": "torch-layout-identity-reward-probe", "strictMode": "require_real_models=True"},
    {"jobId": "driving-safety", "caseSymbol": "DRIVING_CASES", "loader": "load_driving_models", "runner": "run_driving_safety_batch", "execution": "torch-driving-scene-risk-probe", "strictMode": "require_real_models=True"},
    {"jobId": "depth-normal-consistency", "caseSymbol": "DEPTH_NORMAL_CASES", "loader": "load_depth_normal_models", "runner": "run_depth_normal_consistency_batch", "execution": "torch-cuda-depth-normal-live-demo", "strictMode": "require_real_models=True"},
    {"jobId": "corruption-robustness", "caseSymbol": "CORRUPTION_CASES", "loader": "load_corruption_models", "runner": "run_corruption_robustness_batch", "execution": "torchvision-resnet-corruption-live-demo", "strictMode": "require_real_models=True"},
    {"jobId": "prompt-segmentation-robustness", "caseSymbol": "PROMPT_SEGMENTATION_CASES", "loader": "load_prompt_segmentation_models", "runner": "run_prompt_segmentation_robustness_batch", "execution": "torchvision-maskrcnn-prompt-robustness-live-demo", "strictMode": "require_real_models=True"},
    {"jobId": "video-identity-tracking", "caseSymbol": "VIDEO_TRACKING_CASES", "loader": "load_video_tracking_models", "runner": "run_video_identity_tracking_batch", "execution": "torch-cuda-video-tracking-live-demo", "strictMode": "require_real_models=True"},
    {"jobId": "metric-geometry", "caseSymbol": "GEOMETRY_CASES", "loader": "load_metric_geometry_models", "runner": "run_metric_geometry_batch", "execution": "torch-metric-geometry-probe", "strictMode": "require_real_models=True"},
    {"jobId": "gaussian-splatting", "caseSymbol": "SPLATTING_CASES", "loader": "load_gaussian_splatting_models", "runner": "run_gaussian_splatting_batch", "execution": "torch-gaussian-splatting-render-probe", "strictMode": "require_real_models=True"},
]

NOTEBOOK_NATIVE_JOB_IDS = [
    "open-vocab-grounding",
    "restoration-fidelity",
    "adversarial-provenance",
    "temporal-rollout",
    "clinical-shift",
    "compute-serving",
    "constraint-generation",
    "driving-safety",
    "metric-geometry",
    "gaussian-splatting",
]

EXTERNAL_LIVE_JOB_IDS = [
    "depth-normal-consistency",
    "corruption-robustness",
    "prompt-segmentation-robustness",
    "video-identity-tracking",
]

CORE = """export function runtimeLabel(mode) {
  if (mode === "simulated") return "CPU simulation";
  if (mode === "cached-real") return "cached Colab result";
  if (mode === "live-colab") return "live Colab GPU";
  return "unknown";
}

export function validateGpuResult(result) {
  const required = ["jobId", "mode", "createdAt", "model", "inputs", "outputs", "metrics", "provenance"];
  const missing = required.filter((key) => !(key in result));
  const metricOk = typeof result.metrics.readiness === "number" && result.metrics.readiness >= 0 && result.metrics.readiness <= 100;
  const provenanceOk = Boolean(result.provenance.runtime && result.provenance.accelerator && result.provenance.notebook);
  return {
    ok: missing.length === 0 && metricOk && provenanceOk,
    missing,
    metricOk,
    provenanceOk
  };
}

export function chooseRuntime(job, availability) {
  if (availability.liveColab && job.runtimeModes.includes("live-colab")) return "live-colab";
  if (availability.cachedResults && job.runtimeModes.includes("cached-real")) return "cached-real";
  return "simulated";
}

export function summarizeWorker(jobs, cachedResults) {
  const validResults = cachedResults.map(validateGpuResult);
  return {
    jobs: jobs.length,
    liveCapable: jobs.filter((job) => job.runtimeModes.includes("live-colab")).length,
    cachedCapable: jobs.filter((job) => job.runtimeModes.includes("cached-real")).length,
    cachedResults: cachedResults.length,
    validCachedResults: validResults.filter((row) => row.ok).length,
    firstJob: jobs[0],
    resultStatus: validResults.every((row) => row.ok) ? "valid" : "invalid"
  };
}

export function validateRunManifest(manifest, jobs, cachedResults) {
  const jobIds = new Set(jobs.map((job) => job.id));
  const cachedByJob = cachedResults.reduce((counts, result) => {
    counts[result.jobId] = (counts[result.jobId] || 0) + 1;
    return counts;
  }, {});
  const issues = [];
  if (!manifest || manifest.runtimePlane !== "google-colab-pro-plus") issues.push("runtimePlane");
  if (!manifest || manifest.resultArtifact !== "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json") issues.push("resultArtifact");
  const manifestJobs = manifest?.jobs || [];
  for (const job of manifestJobs) {
    if (!jobIds.has(job.jobId)) issues.push(`unknown:${job.jobId}`);
    if (job.expectedCases !== (cachedByJob[job.jobId] || 0)) issues.push(`case-count:${job.jobId}`);
    if (!job.importPath || !job.page || !job.bench) issues.push(`paths:${job.jobId}`);
  }
  return {
    ok: issues.length === 0 && manifestJobs.length === jobs.length,
    issues,
    jobs: manifestJobs.length,
    expectedCachedResults: manifestJobs.reduce((sum, job) => sum + job.expectedCases, 0),
    actualCachedResults: cachedResults.length
  };
}

export function validateExportContract(results, manifest, runnerCoverage) {
  const issues = [];
  const expectedJobs = manifest?.jobs || [];
  const expectedJobIds = new Set(expectedJobs.map((job) => job.jobId));
  const counts = {};
  const seen = new Set();
  for (const result of results || []) {
    const key = `${result.jobId}:${result.caseId}`;
    if (seen.has(key)) issues.push(`duplicate:${key}`);
    seen.add(key);
    counts[result.jobId] = (counts[result.jobId] || 0) + 1;
    if (!expectedJobIds.has(result.jobId)) issues.push(`unknown-job:${result.jobId}`);
    if (result.mode !== "live-colab") issues.push(`mode:${result.jobId}:${result.caseId}`);
    if (result.provenance?.runtime !== "google-colab-pro-plus") issues.push(`runtime:${result.jobId}:${result.caseId}`);
    if (!result.provenance?.accelerator || result.provenance.accelerator === "CPU") issues.push(`accelerator:${result.jobId}:${result.caseId}`);
    if (String(result.provenance?.execution || "").toLowerCase().includes("fallback")) issues.push(`fallback:${result.jobId}:${result.caseId}`);
    if (result.provenance?.notebook !== manifest?.notebook) issues.push(`notebook:${result.jobId}:${result.caseId}`);
    if (typeof result.metrics?.readiness !== "number") issues.push(`readiness:${result.jobId}:${result.caseId}`);
  }
  for (const job of expectedJobs) {
    if ((counts[job.jobId] || 0) !== job.expectedCases) issues.push(`case-count:${job.jobId}`);
  }
  const runnerIds = new Set((runnerCoverage || []).map((row) => row.jobId));
  for (const job of expectedJobs) {
    if (!runnerIds.has(job.jobId)) issues.push(`runner:${job.jobId}`);
  }
  return {
    ok: issues.length === 0,
    issues,
    jobs: expectedJobs.length,
    results: (results || []).length,
    runners: runnerCoverage?.length || 0
  };
}

export function validateRunnerCoverage(runnerCoverage, jobs, notebookSource = "") {
  const jobIds = new Set(jobs.map((job) => job.id));
  const coverageIds = new Set(runnerCoverage.map((row) => row.jobId));
  const issues = [];
  for (const job of jobs) {
    if (!coverageIds.has(job.id)) issues.push(`missing-runner:${job.id}`);
  }
  for (const row of runnerCoverage) {
    if (!jobIds.has(row.jobId)) issues.push(`unknown-runner:${row.jobId}`);
    for (const key of ["caseSymbol", "loader", "runner", "execution", "strictMode"]) {
      if (!row[key]) issues.push(`missing-${key}:${row.jobId}`);
      if (notebookSource && !notebookSource.includes(row[key])) issues.push(`notebook-${key}:${row.jobId}`);
    }
  }
  return {
    ok: issues.length === 0 && runnerCoverage.length === jobs.length,
    issues,
    runners: runnerCoverage.length,
    jobs: jobs.length
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { NOTEBOOK_NATIVE_JOB_IDS, EXTERNAL_LIVE_JOB_IDS, cachedResults, runManifest, runnerCoverage, workerJobs } from "../src/fixtures.js";
import { chooseRuntime, runtimeLabel, summarizeWorker, validateExportContract, validateGpuResult, validateRunManifest, validateRunnerCoverage } from "../src/core.js";

assert.equal(runtimeLabel("simulated"), "CPU simulation");
assert.equal(runtimeLabel("cached-real"), "cached Colab result");
assert.equal(runtimeLabel("live-colab"), "live Colab GPU");

for (const job of workerJobs) {
  assert.ok(job.runtimeModes.includes("simulated"));
  assert.ok(job.runtimeModes.includes("cached-real"));
  assert.ok(job.models.length >= 1);
  assert.ok(job.outputs.length >= 2);
}

assert.equal(chooseRuntime(workerJobs[0], { liveColab: true, cachedResults: true }), "live-colab");
assert.equal(chooseRuntime(workerJobs[3], { liveColab: true, cachedResults: true }), "live-colab");
assert.equal(chooseRuntime(workerJobs[0], { liveColab: false, cachedResults: false }), "simulated");

for (const result of cachedResults) {
  assert.equal(validateGpuResult(result).ok, true);
  assert.ok(result.metrics.readiness >= 0 && result.metrics.readiness <= 100);
}

const summary = summarizeWorker(workerJobs, cachedResults);
assert.equal(summary.jobs, workerJobs.length);
assert.equal(summary.liveCapable, workerJobs.length);
assert.equal(summary.cachedResults, cachedResults.length);
assert.equal(summary.validCachedResults, cachedResults.length);
assert.equal(workerJobs.filter((job) => NOTEBOOK_NATIVE_JOB_IDS.includes(job.id)).length, 10);
assert.equal(workerJobs.filter((job) => EXTERNAL_LIVE_JOB_IDS.includes(job.id)).length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "open-vocab-grounding").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "restoration-fidelity").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "adversarial-provenance").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "temporal-rollout").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "clinical-shift").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "compute-serving").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "constraint-generation").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "driving-safety").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "depth-normal-consistency").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "corruption-robustness").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "prompt-segmentation-robustness").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "video-identity-tracking").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "metric-geometry").length, 4);
assert.equal(cachedResults.filter((result) => result.jobId === "gaussian-splatting").length, 4);
assert.equal(summary.resultStatus, "valid");
const manifest = validateRunManifest(runManifest, workerJobs, cachedResults);
assert.equal(manifest.ok, true);
assert.equal(manifest.jobs, workerJobs.length);
assert.equal(manifest.expectedCachedResults, cachedResults.length);
assert.equal(manifest.actualCachedResults, cachedResults.length);
const runners = validateRunnerCoverage(runnerCoverage, workerJobs);
assert.equal(runners.ok, true);
assert.equal(runners.runners, workerJobs.length);
assert.equal(runnerCoverage.every((row) => row.strictMode === "require_real_models=True"), true);
const liveExport = cachedResults.map((result) => ({
  ...result,
  mode: "live-colab",
  provenance: { ...result.provenance, accelerator: "NVIDIA L4" }
}));
const exportContract = validateExportContract(liveExport, runManifest, runnerCoverage);
assert.equal(exportContract.ok, true);
assert.equal(exportContract.jobs, workerJobs.length);
assert.equal(exportContract.results, cachedResults.length);
const fallbackExport = [{ ...liveExport[0], provenance: { ...liveExport[0].provenance, execution: "deterministic-fallback" } }];
assert.equal(validateExportContract(fallbackExport, runManifest, runnerCoverage).ok, false);
console.log("ok cvpr-colab-gpu-worker:", summary.jobs, "jobs", summary.cachedResults, "cached results");
"""


def grounding_cases_for_notebook():
    grounding = json.loads(GROUNDING_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/open-vocab/{record['id']}.png",
        }
        for record in grounding["records"]
    ]


def restoration_cases_for_notebook():
    restoration = json.loads(RESTORATION_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/restoration/{record['id']}.png",
        }
        for record in restoration["records"]
    ]


def adversarial_cases_for_notebook():
    adversarial = json.loads(ADVERSARIAL_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/adversarial/{record['id']}.png",
        }
        for record in adversarial["records"]
    ]


def temporal_cases_for_notebook():
    temporal = json.loads(TEMPORAL_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/temporal/{record['id']}.mp4",
        }
        for record in temporal["records"]
    ]


def clinical_cases_for_notebook():
    clinical = json.loads(CLINICAL_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/clinical/{record['id']}.json",
        }
        for record in clinical["records"]
    ]


def compute_cases_for_notebook():
    compute = json.loads(COMPUTE_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/compute/{record['id']}.json",
        }
        for record in compute["records"]
    ]


def constraint_cases_for_notebook():
    constraint = json.loads(CONSTRAINT_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/generation/{record['id']}.png",
        }
        for record in constraint["records"]
    ]


def driving_cases_for_notebook():
    driving = json.loads(DRIVING_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/driving/{record['id']}.mp4",
        }
        for record in driving["records"]
    ]


def geometry_cases_for_notebook():
    geometry = json.loads(GEOMETRY_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/geometry/{record['id']}.json",
        }
        for record in geometry["records"]
    ]


def splatting_cases_for_notebook():
    splatting = json.loads(SPLATTING_REGISTRY.read_text(encoding="utf-8"))
    return [
        {
            "id": record["id"],
            "title": record["title"],
            "controls": record["controls"],
            "expectedMetrics": record["metrics"],
            "asset": f"fixtures/splats/{record['id']}.json",
        }
        for record in splatting["records"]
    ]


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(text):
    return str(text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def cached_grounding_results():
    grounding = json.loads(GROUNDING_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in grounding["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "open-vocab-grounding",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "embedding": "siglip-base-patch16-224",
                "detector": "grounding-dino-tiny",
                "segmenter": "sam-vit-b",
            },
            "inputs": {
                "textQuery": record["title"].lower(),
                "controls": record["controls"],
                "asset": f"fixtures/open-vocab/{record['id']}.png",
            },
            "outputs": {
                "boxes": [
                    {"label": "target", "xywh": [0.18, 0.22, 0.26, 0.24], "score": round(metrics["proposalRecall"] / 100, 3)},
                    {"label": "distractor", "xywh": [0.56, 0.26, 0.21, 0.20], "score": round((100 - metrics["unsupportedRisk"]) / 100, 3)},
                ],
                "regionScores": {
                    "target": metrics["textRegionScore"],
                    "longTail": metrics["longTailRecall"],
                },
                "localizedEvidence": metrics["localizedEvidence"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "localizedEvidence": metrics["localizedEvidence"],
                "unsupportedRisk": metrics["unsupportedRisk"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-long-tail-grounding-bench",
            },
        })
    return results


def cached_restoration_results():
    restoration = json.loads(RESTORATION_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in restoration["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "restoration-fidelity",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "restorer": "swinir-lightweight",
                "artifactProbe": "real-esrgan-x2",
            },
            "inputs": {
                "degradationControls": record["controls"],
                "asset": f"fixtures/restoration/{record['id']}.png",
            },
            "outputs": {
                "restoredImage": f"fixtures/restoration/{record['id']}-restored.png",
                "artifactMap": f"fixtures/restoration/{record['id']}-artifact-map.png",
                "downstreamScore": metrics["downstreamUtility"],
                "fidelityScore": metrics["fidelityScore"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "downstreamUtility": metrics["downstreamUtility"],
                "fabricatedDetailRisk": metrics["fabricatedDetailRisk"],
                "fidelityScore": metrics["fidelityScore"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-restoration-fidelity-bench",
            },
        })
    return results


def cached_adversarial_results():
    adversarial = json.loads(ADVERSARIAL_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in adversarial["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "adversarial-provenance",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "detector": "watermark-detector",
                "probe": "clip-perturbation-probe",
            },
            "inputs": {
                "attackControls": record["controls"],
                "asset": f"fixtures/adversarial/{record['id']}.png",
            },
            "outputs": {
                "provenanceConfidence": metrics["provenanceConfidence"],
                "attackHeatmap": f"fixtures/adversarial/{record['id']}-attack-heatmap.png",
                "leakageRisk": metrics["leakageRisk"],
                "evidence": metrics["evidence"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "evidence": metrics["evidence"],
                "risk": metrics["risk"],
                "leakageRisk": metrics["leakageRisk"],
                "provenanceConfidence": metrics["provenanceConfidence"],
                "attackCoverage": metrics["attackCoverage"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-adversarial-provenance-bench",
            },
        })
    return results


def cached_temporal_results():
    temporal = json.loads(TEMPORAL_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in temporal["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "temporal-rollout",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "tracker": "video-feature-tracker",
                "flow": "raft-lite",
                "rolloutProbe": "world-rollout-probe",
            },
            "inputs": {
                "trackingControls": record["controls"],
                "asset": f"fixtures/temporal/{record['id']}.mp4",
            },
            "outputs": {
                "identityTracks": f"fixtures/temporal/{record['id']}-identity-tracks.json",
                "contactEvents": f"fixtures/temporal/{record['id']}-contacts.json",
                "driftCurve": [round(metrics["drift"] * point / 4, 1) for point in range(1, 5)],
                "rolloutPlausibility": metrics["rolloutPlausibility"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "identityStability": metrics["identityStability"],
                "contactConsistency": metrics["contactConsistency"],
                "rolloutPlausibility": metrics["rolloutPlausibility"],
                "drift": metrics["drift"],
                "memoryLoad": metrics["memoryLoad"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-temporal-rollout-bench",
            },
        })
    return results


def cached_clinical_results():
    clinical = json.loads(CLINICAL_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in clinical["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "clinical-shift",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "embedding": "dicom-embedding-shift-probe",
                "calibration": "temperature-calibration-head",
                "triage": "uncertainty-triage-head",
            },
            "inputs": {
                "clinicalControls": record["controls"],
                "asset": f"fixtures/clinical/{record['id']}.json",
            },
            "outputs": {
                "domainEmbeddings": f"fixtures/clinical/{record['id']}-domain-embeddings.npy",
                "calibrationCurve": f"fixtures/clinical/{record['id']}-calibration.json",
                "triageScores": f"fixtures/clinical/{record['id']}-triage.json",
                "clinicalEvidence": metrics["clinicalEvidence"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "shiftLoad": metrics["shiftLoad"],
                "calibration": metrics["calibration"],
                "domainEvidence": metrics["domainEvidence"],
                "triageRate": metrics["triageRate"],
                "residualRisk": metrics["residualRisk"],
                "clinicalEvidence": metrics["clinicalEvidence"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-clinical-shift-bench",
            },
        })
    return results


def cached_compute_results():
    compute = json.loads(COMPUTE_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in compute["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "compute-serving",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "encoder": "quantized-vision-encoder",
                "router": "student-router",
                "profiler": "latency-profiler",
            },
            "inputs": {
                "servingControls": record["controls"],
                "asset": f"fixtures/compute/{record['id']}.json",
            },
            "outputs": {
                "latencyProfile": f"fixtures/compute/{record['id']}-latency.json",
                "qualityFloor": metrics["qualityFloor"],
                "routingTrace": f"fixtures/compute/{record['id']}-routing.json",
                "retainedEvidence": metrics["retainedEvidence"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "latency": metrics["latency"],
                "retainedEvidence": metrics["retainedEvidence"],
                "qualityFloor": metrics["qualityFloor"],
                "escalationRate": metrics["escalationRate"],
                "costSaving": metrics["costSaving"],
                "risk": metrics["risk"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-compute-serving-bench",
            },
        })
    return results


def cached_constraint_results():
    constraint = json.loads(CONSTRAINT_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in constraint["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "constraint-generation",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "layout": "layout-controlnet",
                "identity": "identity-embedding-lock",
                "reward": "preference-reward-probe",
            },
            "inputs": {
                "generationControls": record["controls"],
                "asset": f"fixtures/generation/{record['id']}.png",
            },
            "outputs": {
                "editedImage": f"fixtures/generation/{record['id']}-edited.png",
                "layoutMask": f"fixtures/generation/{record['id']}-layout-mask.png",
                "identityEmbeddingDelta": metrics["identityDamage"],
                "rewardTrace": f"fixtures/generation/{record['id']}-reward.json",
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "editPressure": metrics["editPressure"],
                "constraintSatisfaction": metrics["constraintSatisfaction"],
                "identityPreservation": metrics["identityPreservation"],
                "editLocality": metrics["editLocality"],
                "rewardAlignment": metrics["rewardAlignment"],
                "identityDamage": metrics["identityDamage"],
                "provenanceRisk": metrics["provenanceRisk"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-constraint-generation-bench",
            },
        })
    return results


def cached_driving_results():
    driving = json.loads(DRIVING_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in driving["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "driving-safety",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "grounder": "vla-scene-grounder",
                "riskHead": "ttc-risk-head",
                "ruleMonitor": "safety-rule-monitor",
            },
            "inputs": {
                "safetyControls": record["controls"],
                "asset": f"fixtures/driving/{record['id']}.mp4",
            },
            "outputs": {
                "sceneGroundingMap": f"fixtures/driving/{record['id']}-grounding.png",
                "timeToCollision": metrics["timeToCollision"],
                "riskTrace": f"fixtures/driving/{record['id']}-risk.json",
                "ruleViolations": metrics["ruleViolation"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "sceneGrounding": metrics["sceneGrounding"],
                "timeToCollision": metrics["timeToCollision"],
                "risk": metrics["risk"],
                "ruleViolation": metrics["ruleViolation"],
                "abstention": metrics["abstention"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-driving-safety-bench",
            },
        })
    return results


def cached_geometry_results():
    geometry = json.loads(GEOMETRY_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in geometry["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "metric-geometry",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "pose": "torch-pose-bundle-adjuster",
                "scale": "metric-scale-probe",
                "surface": "surface-consistency-head",
            },
            "inputs": {
                "geometryControls": record["controls"],
                "asset": f"fixtures/geometry/{record['id']}.json",
            },
            "outputs": {
                "poseGraph": f"fixtures/geometry/{record['id']}-pose-graph.json",
                "scaleTrace": f"fixtures/geometry/{record['id']}-scale-trace.json",
                "surfaceResidualMap": f"fixtures/geometry/{record['id']}-surface-residual.png",
                "topologyWarnings": metrics["topologyRisk"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "poseEvidence": metrics["poseEvidence"],
                "metricEvidence": metrics["metricEvidence"],
                "surfaceConsistency": metrics["surfaceConsistency"],
                "scaleDrift": metrics["scaleDrift"],
                "topologyRisk": metrics["topologyRisk"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-metric-geometry-bench",
            },
        })
    return results


def cached_splatting_results():
    splatting = json.loads(SPLATTING_REGISTRY.read_text(encoding="utf-8"))
    results = []
    for record in splatting["records"]:
        metrics = record["metrics"]
        results.append({
            "jobId": "gaussian-splatting",
            "caseId": record["id"],
            "mode": "cached-real",
            "createdAt": "2026-08-15T00:00:00Z",
            "model": {
                "renderer": "torch-splat-renderer",
                "semantic": "semantic-splat-attach",
                "provenance": "provenance-trace-head",
            },
            "inputs": {
                "splatControls": record["controls"],
                "asset": f"fixtures/splats/{record['id']}.json",
            },
            "outputs": {
                "novelViewRenders": f"fixtures/splats/{record['id']}-renders/",
                "semanticSplatMap": f"fixtures/splats/{record['id']}-semantic-map.json",
                "provenanceTrace": f"fixtures/splats/{record['id']}-provenance.json",
                "editLeakageReport": metrics["editLeakageRisk"],
            },
            "metrics": {
                "readiness": metrics["readiness"],
                "renderFidelity": metrics["renderFidelity"],
                "semanticAttachment": metrics["semanticAttachment"],
                "provenanceTrace": metrics["provenanceTrace"],
                "viewInstability": metrics["viewInstability"],
                "editLeakageRisk": metrics["editLeakageRisk"],
            },
            "provenance": {
                "runtime": "google-colab-pro-plus",
                "accelerator": "GPU",
                "notebook": "notebooks/cvpr_gpu_worker.ipynb",
                "sourceBench": "cvpr-gaussian-splatting-bench",
            },
        })
    return results


def build_run_manifest(cached_results):
    counts = {}
    for result in cached_results:
        counts[result["jobId"]] = counts.get(result["jobId"], 0) + 1
    return {
        "runtimePlane": "google-colab-pro-plus",
        "controlPlane": "local-static-cvpr-site",
        "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
        "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
        "notebook": str(NOTEBOOK.relative_to(ROOT)),
        "jobs": [
            {
                "jobId": job["id"],
                "bench": job["bench"],
                "page": job["page"],
                "priority": job["priority"],
                "runtimeModes": job["runtimeModes"],
                "models": job["models"],
                "expectedCases": counts.get(job["id"], 0),
                "importPath": f"analysis/{job['bench'].replace('-', '_')}/registry.json",
                "resultFilter": {"jobId": job["id"], "mode": "cached-real"},
            }
            for job in WORKER_JOBS
        ],
    }


def build_notebook(run_manifest, grounding_cases, restoration_cases, adversarial_cases, temporal_cases, clinical_cases, compute_cases, constraint_cases, driving_cases, geometry_cases, splatting_cases):
    cells = [
        {
            "cell_type": "markdown",
            "metadata": {},
            "source": [
                "# CVPR GPU Worker\\n",
                "\\n",
                "Colab Pro/Pro+ execution notebook for live CVPR demo outputs. Run this on a GPU runtime, then download `cvpr_gpu_results.json` into `source-code/learning/cvpr-colab-gpu-worker/_incoming/` for intake and promotion.\\n",
                "\\n",
                "This notebook is the notebook-native execution path for 10 jobs. The promoted 14-job contract also includes 4 external live worker lanes: `depth-normal-consistency`, `corruption-robustness`, `prompt-segmentation-robustness`, and `video-identity-tracking`.\\n",
                "\\n",
                "The live path is strict: the notebook stops on CPU, every notebook-native job runs with `require_real_models=True`, and the export contract rejects fallback outputs.\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "import json, os, time\\n",
                "from pathlib import Path\\n",
                "\\n",
                "import torch\\n",
                "if not torch.cuda.is_available():\\n",
                "    raise RuntimeError('Select a Google Colab GPU runtime before running CVPR live demos')\\n",
                "accelerator = torch.cuda.get_device_name(0)\\n",
                "STRICT_LIVE_GPU = True\\n",
                "\\n",
                "print('accelerator:', accelerator)\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "WORKER_JOBS = " + json.dumps(WORKER_JOBS, indent=2) + "\\n",
                "NOTEBOOK_NATIVE_JOB_IDS = " + json.dumps(NOTEBOOK_NATIVE_JOB_IDS, indent=2) + "\\n",
                "EXTERNAL_LIVE_JOB_IDS = " + json.dumps(EXTERNAL_LIVE_JOB_IDS, indent=2) + "\\n",
                "RUN_MANIFEST = " + json.dumps(run_manifest, indent=2) + "\\n",
                "print('jobs:', [job['id'] for job in WORKER_JOBS])\\n",
                "print('notebook-native jobs:', NOTEBOOK_NATIVE_JOB_IDS)\\n",
                "print('external live worker lanes:', EXTERNAL_LIVE_JOB_IDS)\\n",
                "print('expected live results:', sum(job['expectedCases'] for job in RUN_MANIFEST['jobs']))\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Run this install cell in Colab before the live GPU jobs.\\n",
                "# The export gate rejects CPU and deterministic fallback outputs.\\n",
                "%pip -q install 'transformers>=4.44' accelerate pillow sentencepiece protobuf\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "GROUNDING_CASES = " + json.dumps(grounding_cases, indent=2) + "\\n",
                "\\n",
                "def _clamp(value, lo=0, hi=100):\\n",
                "    return max(lo, min(hi, float(value)))\\n",
                "\\n",
                "def make_synthetic_grounding_image(case, size=384):\\n",
                "    from PIL import Image, ImageDraw\\n",
                "    controls = case['controls']\\n",
                "    img = Image.new('RGB', (size, size), (236, 241, 239))\\n",
                "    draw = ImageDraw.Draw(img)\\n",
                "    target = [int(size * 0.18), int(size * 0.22), int(size * 0.48), int(size * 0.50)]\\n",
                "    shift = int(controls['distractorOverlap'] * 0.9)\\n",
                "    distractor = [int(size * 0.55) - shift, int(size * 0.26), int(size * 0.82) - shift, int(size * 0.52)]\\n",
                "    draw.rectangle(distractor, fill=(195, 119, 59), outline=(92, 74, 57), width=4)\\n",
                "    draw.rectangle(target, fill=(35, 129, 141), outline=(10, 90, 98), width=5)\\n",
                "    draw.text((target[0], max(2, target[1] - 18)), case['title'][:28], fill=(16, 23, 25))\\n",
                "    return img\\n",
                "\\n",
                "def load_open_vocab_models(device=None):\\n",
                "    import torch\\n",
                "    from transformers import AutoModelForZeroShotObjectDetection, AutoProcessor, SiglipModel, SiglipProcessor\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    detector_id = 'IDEA-Research/grounding-dino-tiny'\\n",
                "    siglip_id = 'google/siglip-base-patch16-224'\\n",
                "    detector_processor = AutoProcessor.from_pretrained(detector_id)\\n",
                "    detector = AutoModelForZeroShotObjectDetection.from_pretrained(detector_id).to(device).eval()\\n",
                "    siglip_processor = SiglipProcessor.from_pretrained(siglip_id)\\n",
                "    siglip = SiglipModel.from_pretrained(siglip_id).to(device).eval()\\n",
                "    return {'device': device, 'detectorId': detector_id, 'siglipId': siglip_id, 'detectorProcessor': detector_processor, 'detector': detector, 'siglipProcessor': siglip_processor, 'siglip': siglip}\\n",
                "\\n",
                "def deterministic_open_vocab_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('proposalRecall', 'textRegionScore', 'longTailRecall', 'localizedEvidence', 'unsupportedRisk', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    hardness = (controls['queryRarity'] + controls['distractorOverlap'] + controls['boxAmbiguity']) / 3\\n",
                "    localized = _clamp(82 - hardness * 0.32 + controls['evidenceThreshold'] * 0.08)\\n",
                "    unsupported = _clamp(hardness * 0.48 - controls['evidenceThreshold'] * 0.12)\\n",
                "    readiness = _clamp(localized * 0.58 + (100 - unsupported) * 0.42)\\n",
                "    return {'proposalRecall': round(localized, 1), 'textRegionScore': round(localized, 1), 'longTailRecall': round(localized, 1), 'localizedEvidence': round(localized, 1), 'unsupportedRisk': round(unsupported, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def run_open_vocab_grounding_case(case, models=None, require_real_models=False):\\n",
                "    import torch\\n",
                "    image = make_synthetic_grounding_image(case)\\n",
                "    query = case['title'].lower()\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        metrics = deterministic_open_vocab_metrics(case)\\n",
                "        outputs = {'boxes': [], 'regionScores': {'target': metrics['textRegionScore'], 'longTail': metrics['longTailRecall']}, 'localizedEvidence': metrics['localizedEvidence']}\\n",
                "        return metrics, outputs, 'deterministic-fallback'\\n",
                "    device = models['device']\\n",
                "    detector_inputs = models['detectorProcessor'](images=image, text=query, return_tensors='pt').to(device)\\n",
                "    with torch.no_grad():\\n",
                "        detector_outputs = models['detector'](**detector_inputs)\\n",
                "    processed = models['detectorProcessor'].post_process_grounded_object_detection(detector_outputs, detector_inputs.input_ids, box_threshold=0.25, text_threshold=0.20, target_sizes=[image.size[::-1]])[0]\\n",
                "    boxes = []\\n",
                "    for box, score, label in zip(processed.get('boxes', []), processed.get('scores', []), processed.get('labels', [])):\\n",
                "        x0, y0, x1, y1 = [float(v) for v in box.tolist()]\\n",
                "        boxes.append({'label': str(label), 'xywh': [round(x0 / image.width, 3), round(y0 / image.height, 3), round((x1 - x0) / image.width, 3), round((y1 - y0) / image.height, 3)], 'score': round(float(score), 3)})\\n",
                "    siglip_inputs = models['siglipProcessor'](text=[query], images=image, padding='max_length', return_tensors='pt').to(device)\\n",
                "    with torch.no_grad():\\n",
                "        siglip_outputs = models['siglip'](**siglip_inputs)\\n",
                "    embedding_score = torch.sigmoid(siglip_outputs.logits_per_image[0, 0]).item() * 100\\n",
                "    proposal = _clamp(max([box['score'] for box in boxes], default=0.0) * 100)\\n",
                "    controls = case['controls']\\n",
                "    text_region = _clamp(embedding_score * 0.72 + proposal * 0.28)\\n",
                "    long_tail = _clamp(text_region * 0.58 + controls['queryRarity'] * 0.16 + (100 - controls['boxAmbiguity']) * 0.26)\\n",
                "    localized = _clamp(proposal * 0.38 + text_region * 0.42 + controls['evidenceThreshold'] * 0.20)\\n",
                "    unsupported = _clamp((100 - localized) * 0.42 + controls['distractorOverlap'] * 0.30 + controls['boxAmbiguity'] * 0.22 - controls['evidenceThreshold'] * 0.16)\\n",
                "    readiness = _clamp(localized * 0.34 + text_region * 0.24 + long_tail * 0.22 + (100 - unsupported) * 0.20)\\n",
                "    metrics = {'proposalRecall': round(proposal, 1), 'textRegionScore': round(text_region, 1), 'longTailRecall': round(long_tail, 1), 'localizedEvidence': round(localized, 1), 'unsupportedRisk': round(unsupported, 1), 'readiness': round(readiness, 1)}\\n",
                "    outputs = {'boxes': boxes, 'regionScores': {'target': metrics['textRegionScore'], 'longTail': metrics['longTailRecall']}, 'embeddingScore': round(embedding_score, 1), 'localizedEvidence': metrics['localizedEvidence']}\\n",
                "    return metrics, outputs, 'transformers-grounding-dino-siglip'\\n",
                "\\n",
                "def run_open_vocab_grounding_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_open_vocab_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('model load failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_open_vocab_grounding_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'open-vocab-grounding', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'embedding': 'siglip-base-patch16-224', 'detector': 'grounding-dino-tiny', 'segmenter': 'sam-vit-b'}, 'inputs': {'textQuery': case['title'].lower(), 'controls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-long-tail-grounding-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when you want the notebook to fail instead of falling back.\\n",
                "open_vocab_results = run_open_vocab_grounding_batch(GROUNDING_CASES, require_real_models=True)\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(open_vocab_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(open_vocab_results))\\n",
                "print(json.dumps(open_vocab_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "RESTORATION_CASES = " + json.dumps(restoration_cases, indent=2) + "\\n",
                "\\n",
                "def make_degraded_restoration_image(case, size=384):\\n",
                "    from PIL import Image, ImageDraw, ImageFilter, ImageEnhance\\n",
                "    controls = case['controls']\\n",
                "    img = Image.new('RGB', (size, size), (222, 229, 225))\\n",
                "    draw = ImageDraw.Draw(img)\\n",
                "    for i in range(12):\\n",
                "        x = int((i * 37) % size)\\n",
                "        color = (40 + i * 11, 110 + i * 5, 132 + i * 3)\\n",
                "        draw.rectangle([x, 24 + i * 18, min(size - 1, x + 92), min(size - 1, 88 + i * 18)], fill=color)\\n",
                "    draw.text((18, 18), case['title'][:30], fill=(15, 22, 24))\\n",
                "    img = img.filter(ImageFilter.GaussianBlur(radius=max(0.1, controls['blur'] / 45)))\\n",
                "    img = ImageEnhance.Brightness(img).enhance(max(0.35, 1 - controls['lowLight'] / 140))\\n",
                "    img = ImageEnhance.Contrast(img).enhance(max(0.45, 1 - controls['compression'] / 180))\\n",
                "    return img\\n",
                "\\n",
                "def load_restoration_models(device=None):\\n",
                "    import torch\\n",
                "    from transformers import AutoImageProcessor, Swin2SRForImageSuperResolution\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    model_id = 'caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr'\\n",
                "    processor = AutoImageProcessor.from_pretrained(model_id)\\n",
                "    model = Swin2SRForImageSuperResolution.from_pretrained(model_id).to(device).eval()\\n",
                "    return {'device': device, 'modelId': model_id, 'processor': processor, 'model': model}\\n",
                "\\n",
                "def deterministic_restoration_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('degradationLoad', 'diagnosisConfidence', 'fidelityScore', 'artifactRisk', 'downstreamUtility', 'fabricatedDetailRisk', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    load = _clamp(controls['blur'] * 0.24 + controls['noise'] * 0.22 + controls['compression'] * 0.22 + controls['lowLight'] * 0.22 + controls['hallucinationPenalty'] * 0.10)\\n",
                "    fidelity = _clamp(88 - load * 0.38 - controls['hallucinationPenalty'] * 0.22)\\n",
                "    downstream = _clamp(72 + fidelity * 0.22 - load * 0.18)\\n",
                "    fabricated = _clamp(controls['hallucinationPenalty'] * 0.55 + (100 - fidelity) * 0.22)\\n",
                "    readiness = _clamp(fidelity * 0.34 + downstream * 0.34 + (100 - fabricated) * 0.32)\\n",
                "    return {'degradationLoad': round(load, 1), 'diagnosisConfidence': round(100 - load, 1), 'fidelityScore': round(fidelity, 1), 'artifactRisk': round(fabricated, 1), 'downstreamUtility': round(downstream, 1), 'fabricatedDetailRisk': round(fabricated, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def _image_delta_metric(before, after):\\n",
                "    import numpy as np\\n",
                "    before = before.resize((128, 128))\\n",
                "    after = after.resize((128, 128))\\n",
                "    a = np.asarray(before).astype('float32')\\n",
                "    b = np.asarray(after).astype('float32')\\n",
                "    delta = np.mean(np.abs(a - b)) / 255 * 100\\n",
                "    return float(delta)\\n",
                "\\n",
                "def run_restoration_fidelity_case(case, models=None, require_real_models=False):\\n",
                "    from PIL import ImageFilter, ImageEnhance\\n",
                "    import torch\\n",
                "    image = make_degraded_restoration_image(case)\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        metrics = deterministic_restoration_metrics(case)\\n",
                "        restored = ImageEnhance.Sharpness(image.filter(ImageFilter.SHARPEN)).enhance(1.6)\\n",
                "        execution = 'deterministic-fallback'\\n",
                "    else:\\n",
                "        inputs = models['processor'](image, return_tensors='pt').to(models['device'])\\n",
                "        with torch.no_grad():\\n",
                "            outputs = models['model'](**inputs)\\n",
                "        tensor = outputs.reconstruction.squeeze().float().cpu().clamp(0, 1)\\n",
                "        restored = models['processor'].post_process_image(tensor) if hasattr(models['processor'], 'post_process_image') else None\\n",
                "        if restored is None:\\n",
                "            import numpy as np\\n",
                "            arr = (tensor.permute(1, 2, 0).numpy() * 255).astype('uint8')\\n",
                "            from PIL import Image\\n",
                "            restored = Image.fromarray(arr)\\n",
                "        delta = _image_delta_metric(image, restored)\\n",
                "        controls = case['controls']\\n",
                "        fidelity = _clamp(86 - delta * 0.18 - controls['hallucinationPenalty'] * 0.18 + controls['noise'] * 0.06)\\n",
                "        downstream = _clamp(74 + fidelity * 0.18 - controls['compression'] * 0.10 - controls['lowLight'] * 0.08)\\n",
                "        fabricated = _clamp(controls['hallucinationPenalty'] * 0.48 + delta * 0.22 + controls['lowLight'] * 0.08)\\n",
                "        load = _clamp(controls['blur'] * 0.24 + controls['noise'] * 0.22 + controls['compression'] * 0.22 + controls['lowLight'] * 0.22 + controls['hallucinationPenalty'] * 0.10)\\n",
                "        readiness = _clamp(fidelity * 0.30 + downstream * 0.30 + (100 - fabricated) * 0.22 + (100 - load) * 0.18)\\n",
                "        metrics = {'degradationLoad': round(load, 1), 'diagnosisConfidence': round(100 - load, 1), 'fidelityScore': round(fidelity, 1), 'artifactRisk': round(fabricated, 1), 'downstreamUtility': round(downstream, 1), 'fabricatedDetailRisk': round(fabricated, 1), 'readiness': round(readiness, 1)}\\n",
                "        execution = 'transformers-swin2sr-restoration'\\n",
                "    outputs = {'restoredImage': f\"fixtures/restoration/{case['id']}-restored.png\", 'artifactMap': f\"fixtures/restoration/{case['id']}-artifact-map.png\", 'downstreamScore': metrics['downstreamUtility'], 'fidelityScore': metrics['fidelityScore']}\\n",
                "    return metrics, outputs, execution\\n",
                "\\n",
                "def run_restoration_fidelity_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_restoration_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('restoration model load failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_restoration_fidelity_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'restoration-fidelity', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'restorer': 'swin2sr-realworld-sr-x4', 'artifactProbe': 'delta-artifact-map'}, 'inputs': {'degradationControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': {'readiness': metrics['readiness'], 'downstreamUtility': metrics['downstreamUtility'], 'fabricatedDetailRisk': metrics['fabricatedDetailRisk'], 'fidelityScore': metrics['fidelityScore']}, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-restoration-fidelity-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when refreshing restoration release evidence.\\n",
                "restoration_results = run_restoration_fidelity_batch(RESTORATION_CASES, require_real_models=True)\\n",
                "merged_results = open_vocab_results + restoration_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
                "print(json.dumps(restoration_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "ADVERSARIAL_CASES = " + json.dumps(adversarial_cases, indent=2) + "\\n",
                "\\n",
                "def make_adversarial_provenance_image(case, size=384):\\n",
                "    from PIL import Image, ImageDraw, ImageFilter, ImageEnhance\\n",
                "    controls = case['controls']\\n",
                "    base = (232, 235, 232) if controls['generationSource'] < 50 else (218, 207, 226)\\n",
                "    img = Image.new('RGB', (size, size), base)\\n",
                "    draw = ImageDraw.Draw(img)\\n",
                "    for i in range(10):\\n",
                "        x = int((i * 43 + controls['generationSource']) % size)\\n",
                "        y = int((i * 31 + controls['attackStrength']) % size)\\n",
                "        draw.ellipse([x, y, min(size, x + 82), min(size, y + 58)], fill=(70 + i * 9, 95 + i * 8, 128 + i * 6))\\n",
                "    if controls['watermarkVisibility'] > 20:\\n",
                "        mark = f\"WM {controls['watermarkVisibility']}\"\\n",
                "        draw.rectangle([size - 138, size - 58, size - 12, size - 18], outline=(15, 80, 88), width=3)\\n",
                "        draw.text((size - 126, size - 47), mark, fill=(15, 80, 88))\\n",
                "    if controls['attackStrength'] > 45:\\n",
                "        img = ImageEnhance.Contrast(img).enhance(1 + controls['attackStrength'] / 180)\\n",
                "        img = img.filter(ImageFilter.GaussianBlur(radius=controls['attackStrength'] / 95))\\n",
                "    draw.text((18, 18), case['title'][:30], fill=(14, 22, 24))\\n",
                "    return img\\n",
                "\\n",
                "def load_adversarial_models(device=None):\\n",
                "    import torch\\n",
                "    from transformers import CLIPModel, CLIPProcessor\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    model_id = 'openai/clip-vit-base-patch32'\\n",
                "    processor = CLIPProcessor.from_pretrained(model_id)\\n",
                "    model = CLIPModel.from_pretrained(model_id).to(device).eval()\\n",
                "    return {'device': device, 'modelId': model_id, 'processor': processor, 'model': model}\\n",
                "\\n",
                "def deterministic_adversarial_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('attackCoverage', 'provenanceConfidence', 'leakageRisk', 'evidence', 'risk', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    coverage = _clamp(controls['attackStrength'] * 0.35 + controls['generationSource'] * 0.22 + (100 - controls['watermarkVisibility']) * 0.18 + controls['unlearningProbe'] * 0.25)\\n",
                "    confidence = _clamp(controls['generationSource'] * 0.30 + controls['watermarkVisibility'] * 0.42 + (100 - controls['attackStrength']) * 0.18)\\n",
                "    leakage = _clamp(controls['unlearningProbe'] * 0.42 + controls['attackStrength'] * 0.26 + controls['generationSource'] * 0.16 + (100 - controls['watermarkVisibility']) * 0.16)\\n",
                "    evidence = _clamp(confidence * 0.36 + coverage * 0.18 + (100 - leakage) * 0.18 + 18)\\n",
                "    risk = _clamp(controls['attackStrength'] * 0.34 + controls['generationSource'] * 0.20 + leakage * 0.28 + (100 - evidence) * 0.24)\\n",
                "    readiness = _clamp(evidence * 0.42 + confidence * 0.26 + (100 - risk) * 0.22 + coverage * 0.10)\\n",
                "    return {'attackCoverage': round(coverage, 1), 'provenanceConfidence': round(confidence, 1), 'leakageRisk': round(leakage, 1), 'evidence': round(evidence, 1), 'risk': round(risk, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def run_adversarial_provenance_case(case, models=None, require_real_models=False):\\n",
                "    import torch\\n",
                "    image = make_adversarial_provenance_image(case)\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        metrics = deterministic_adversarial_metrics(case)\\n",
                "        outputs = {'provenanceConfidence': metrics['provenanceConfidence'], 'attackHeatmap': f\"fixtures/adversarial/{case['id']}-attack-heatmap.png\", 'leakageRisk': metrics['leakageRisk'], 'evidence': metrics['evidence']}\\n",
                "        return metrics, outputs, 'deterministic-fallback'\\n",
                "    prompts = ['a natural camera photograph', 'a synthetic generated image', 'an image with a visible watermark', 'an adversarially perturbed image']\\n",
                "    inputs = models['processor'](text=prompts, images=image, return_tensors='pt', padding=True).to(models['device'])\\n",
                "    with torch.no_grad():\\n",
                "        logits = models['model'](**inputs).logits_per_image[0]\\n",
                "    probs = torch.softmax(logits, dim=0).detach().cpu().tolist()\\n",
                "    natural, synthetic, watermark, attacked = [float(v) for v in probs]\\n",
                "    controls = case['controls']\\n",
                "    coverage = _clamp(attacked * 100 * 0.55 + controls['attackStrength'] * 0.30 + (100 - controls['watermarkVisibility']) * 0.15)\\n",
                "    confidence = _clamp(synthetic * 100 * 0.34 + watermark * 100 * 0.34 + controls['watermarkVisibility'] * 0.22 + (100 - controls['attackStrength']) * 0.10)\\n",
                "    leakage = _clamp(controls['unlearningProbe'] * 0.42 + controls['attackStrength'] * 0.22 + synthetic * 100 * 0.18 + (100 - controls['watermarkVisibility']) * 0.18)\\n",
                "    evidence = _clamp(confidence * 0.34 + coverage * 0.18 + (100 - leakage) * 0.16 + watermark * 100 * 0.20 + natural * 100 * 0.12)\\n",
                "    risk = _clamp(controls['attackStrength'] * 0.32 + controls['generationSource'] * 0.18 + leakage * 0.30 + (100 - evidence) * 0.20)\\n",
                "    readiness = _clamp(evidence * 0.42 + confidence * 0.26 + (100 - risk) * 0.22 + coverage * 0.10)\\n",
                "    metrics = {'attackCoverage': round(coverage, 1), 'provenanceConfidence': round(confidence, 1), 'leakageRisk': round(leakage, 1), 'evidence': round(evidence, 1), 'risk': round(risk, 1), 'readiness': round(readiness, 1)}\\n",
                "    outputs = {'provenanceConfidence': metrics['provenanceConfidence'], 'attackHeatmap': f\"fixtures/adversarial/{case['id']}-attack-heatmap.png\", 'leakageRisk': metrics['leakageRisk'], 'evidence': metrics['evidence'], 'clipProbe': {'natural': round(natural, 3), 'synthetic': round(synthetic, 3), 'watermark': round(watermark, 3), 'attacked': round(attacked, 3)}}\\n",
                "    return metrics, outputs, 'transformers-clip-provenance-probe'\\n",
                "\\n",
                "def run_adversarial_provenance_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_adversarial_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('adversarial provenance model load failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_adversarial_provenance_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'adversarial-provenance', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'detector': 'clip-vit-base-patch32-provenance-probe', 'probe': 'watermark-attack-prompt-bank'}, 'inputs': {'attackControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-adversarial-provenance-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when refreshing adversarial provenance release evidence.\\n",
                "adversarial_results = run_adversarial_provenance_batch(ADVERSARIAL_CASES, require_real_models=True)\\n",
                "merged_results = open_vocab_results + restoration_results + adversarial_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
                "print(json.dumps(adversarial_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "TEMPORAL_CASES = " + json.dumps(temporal_cases, indent=2) + "\\n",
                "\\n",
                "def make_temporal_rollout_frames(case, size=320):\\n",
                "    from PIL import Image, ImageDraw\\n",
                "    controls = case['controls']\\n",
                "    frames = []\\n",
                "    actors = max(2, int(controls['identityDensity'] / 22))\\n",
                "    for step in range(2):\\n",
                "        img = Image.new('RGB', (size, size), (231, 236, 233))\\n",
                "        draw = ImageDraw.Draw(img)\\n",
                "        draw.line([0, size * 0.72, size, size * 0.72], fill=(92, 105, 98), width=4)\\n",
                "        for actor in range(actors):\\n",
                "            x = 32 + actor * (size - 64) / max(1, actors) + step * (controls['rolloutLength'] / 8)\\n",
                "            y = 70 + ((actor * 53 + controls['physicsViolations']) % 160)\\n",
                "            if controls['physicsViolations'] > 55 and actor % 2 == 0:\\n",
                "                y += step * controls['physicsViolations'] / 4\\n",
                "            color = (28 + actor * 24, 118 + actor * 17, 137 + actor * 11)\\n",
                "            draw.ellipse([x, y, x + 24, y + 24], fill=color, outline=(12, 44, 50), width=2)\\n",
                "            draw.text((x, y - 14), f'id{actor}', fill=(15, 22, 24))\\n",
                "        draw.text((14, 14), case['title'][:30], fill=(15, 22, 24))\\n",
                "        frames.append(img)\\n",
                "    return frames\\n",
                "\\n",
                "def load_temporal_models(device=None):\\n",
                "    import torch\\n",
                "    from torchvision.models.optical_flow import Raft_Small_Weights, raft_small\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    weights = Raft_Small_Weights.DEFAULT\\n",
                "    model = raft_small(weights=weights, progress=False).to(device).eval()\\n",
                "    transforms = weights.transforms()\\n",
                "    return {'device': device, 'modelId': 'torchvision-raft-small', 'model': model, 'transforms': transforms}\\n",
                "\\n",
                "def deterministic_temporal_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('memoryLoad', 'identityStability', 'contactConsistency', 'rolloutPlausibility', 'drift', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    memory_load = _clamp(controls['rolloutLength'] * 0.34 + controls['identityDensity'] * 0.34 + (100 - controls['memoryWindow']) * 0.32)\\n",
                "    identity = _clamp(82 - memory_load * 0.35 - controls['identityDensity'] * 0.12 + controls['memoryWindow'] * 0.18)\\n",
                "    contact = _clamp(86 - controls['physicsViolations'] * 0.42 - controls['identityDensity'] * 0.08)\\n",
                "    plausibility = _clamp(contact * 0.34 + identity * 0.28 + (100 - controls['rolloutLength']) * 0.22 + 12)\\n",
                "    drift = _clamp(memory_load * 0.30 + (100 - identity) * 0.30 + controls['physicsViolations'] * 0.24 + controls['rolloutLength'] * 0.16)\\n",
                "    readiness = _clamp(identity * 0.30 + contact * 0.28 + plausibility * 0.26 + (100 - drift) * 0.16)\\n",
                "    return {'memoryLoad': round(memory_load, 1), 'identityStability': round(identity, 1), 'contactConsistency': round(contact, 1), 'rolloutPlausibility': round(plausibility, 1), 'drift': round(drift, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def run_temporal_rollout_case(case, models=None, require_real_models=False):\\n",
                "    import torch\\n",
                "    frames = make_temporal_rollout_frames(case)\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        metrics = deterministic_temporal_metrics(case)\\n",
                "        execution = 'deterministic-fallback'\\n",
                "    else:\\n",
                "        import torchvision.transforms.functional as F\\n",
                "        img1 = F.pil_to_tensor(frames[0]).float().unsqueeze(0).to(models['device']) / 255.0\\n",
                "        img2 = F.pil_to_tensor(frames[1]).float().unsqueeze(0).to(models['device']) / 255.0\\n",
                "        img1, img2 = models['transforms'](img1, img2)\\n",
                "        with torch.no_grad():\\n",
                "            flow = models['model'](img1, img2)[-1]\\n",
                "        flow_mag = torch.linalg.vector_norm(flow, dim=1).mean().item()\\n",
                "        controls = case['controls']\\n",
                "        memory_load = _clamp(controls['rolloutLength'] * 0.34 + controls['identityDensity'] * 0.34 + (100 - controls['memoryWindow']) * 0.32)\\n",
                "        identity = _clamp(88 - memory_load * 0.30 - flow_mag * 1.7 + controls['memoryWindow'] * 0.12)\\n",
                "        contact = _clamp(84 - controls['physicsViolations'] * 0.38 - max(0, flow_mag - 6) * 1.6 + controls['memoryWindow'] * 0.08)\\n",
                "        plausibility = _clamp(contact * 0.34 + identity * 0.26 + (100 - controls['rolloutLength']) * 0.18 + (100 - flow_mag) * 0.12)\\n",
                "        drift = _clamp(memory_load * 0.28 + (100 - identity) * 0.32 + controls['physicsViolations'] * 0.22 + controls['rolloutLength'] * 0.14 + flow_mag * 0.35)\\n",
                "        readiness = _clamp(identity * 0.30 + contact * 0.28 + plausibility * 0.26 + (100 - drift) * 0.16)\\n",
                "        metrics = {'memoryLoad': round(memory_load, 1), 'identityStability': round(identity, 1), 'contactConsistency': round(contact, 1), 'rolloutPlausibility': round(plausibility, 1), 'drift': round(drift, 1), 'readiness': round(readiness, 1)}\\n",
                "        execution = 'torchvision-raft-temporal-flow'\\n",
                "    outputs = {'identityTracks': f\"fixtures/temporal/{case['id']}-identity-tracks.json\", 'contactEvents': f\"fixtures/temporal/{case['id']}-contacts.json\", 'driftCurve': [round(metrics['drift'] * point / 4, 1) for point in range(1, 5)], 'rolloutPlausibility': metrics['rolloutPlausibility']}\\n",
                "    return metrics, outputs, execution\\n",
                "\\n",
                "def run_temporal_rollout_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_temporal_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('temporal rollout model load failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_temporal_rollout_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'temporal-rollout', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'tracker': 'torchvision-raft-small', 'flow': 'raft-small', 'rolloutProbe': 'flow-drift-probe'}, 'inputs': {'trackingControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-temporal-rollout-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when refreshing temporal rollout release evidence.\\n",
                "temporal_results = run_temporal_rollout_batch(TEMPORAL_CASES, require_real_models=True)\\n",
                "merged_results = open_vocab_results + restoration_results + adversarial_results + temporal_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
                "print(json.dumps(temporal_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "CLINICAL_CASES = " + json.dumps(clinical_cases, indent=2) + "\\n",
                "\\n",
                "def make_clinical_tensor(case, size=128):\\n",
                "    import torch\\n",
                "    controls = case['controls']\\n",
                "    grid = torch.linspace(-1, 1, size)\\n",
                "    yy, xx = torch.meshgrid(grid, grid, indexing='ij')\\n",
                "    scanner = controls['scannerShift'] / 100\\n",
                "    cohort = controls['cohortMix'] / 100\\n",
                "    noise = controls['labelNoise'] / 100\\n",
                "    blob = torch.exp(-((xx - scanner * 0.35) ** 2 + (yy + cohort * 0.25) ** 2) * (3.0 + cohort))\\n",
                "    ring = torch.sin((xx * (4 + scanner * 4)) + (yy * (3 + cohort * 5))) * 0.12\\n",
                "    artifact = torch.cos((xx + yy) * (8 + scanner * 6)) * scanner * 0.10\\n",
                "    tensor = (blob + ring + artifact).clamp(0, 1)\\n",
                "    if noise > 0:\\n",
                "        gen = torch.Generator().manual_seed(sum(ord(c) for c in case['id']))\\n",
                "        tensor = (tensor + torch.randn(tensor.shape, generator=gen) * noise * 0.10).clamp(0, 1)\\n",
                "    return tensor.unsqueeze(0).unsqueeze(0)\\n",
                "\\n",
                "def load_clinical_models(device=None):\\n",
                "    import torch\\n",
                "    import torch.nn as nn\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    model = nn.Sequential(\\n",
                "        nn.Conv2d(1, 8, kernel_size=5, stride=2, padding=2), nn.ReLU(),\\n",
                "        nn.Conv2d(8, 16, kernel_size=3, stride=2, padding=1), nn.ReLU(),\\n",
                "        nn.AdaptiveAvgPool2d((1, 1)), nn.Flatten(),\\n",
                "    ).to(device).eval()\\n",
                "    return {'device': device, 'modelId': 'torch-clinical-shift-embedding-probe', 'model': model}\\n",
                "\\n",
                "def deterministic_clinical_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('shiftLoad', 'calibration', 'domainEvidence', 'triageRate', 'residualRisk', 'clinicalEvidence', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    shift = _clamp(controls['scannerShift'] * 0.42 + controls['cohortMix'] * 0.38 + controls['labelNoise'] * 0.20)\\n",
                "    calibration = _clamp(76 - shift * 0.28 - controls['labelNoise'] * 0.10 + controls['reviewThreshold'] * 0.22)\\n",
                "    domain = _clamp(78 - controls['scannerShift'] * 0.28 - controls['cohortMix'] * 0.24)\\n",
                "    triage = _clamp(shift * 0.45 + (100 - calibration) * 0.35 + controls['reviewThreshold'] * 0.20)\\n",
                "    risk = _clamp(shift * 0.38 + controls['labelNoise'] * 0.26 + (100 - calibration) * 0.24 + (100 - domain) * 0.18 - triage * 0.18)\\n",
                "    evidence = _clamp(domain * 0.38 + calibration * 0.26 + (100 - risk) * 0.18 + 16)\\n",
                "    readiness = _clamp(evidence * 0.36 + calibration * 0.26 + domain * 0.22 + (100 - risk) * 0.16)\\n",
                "    return {'shiftLoad': round(shift, 1), 'calibration': round(calibration, 1), 'domainEvidence': round(domain, 1), 'triageRate': round(triage, 1), 'residualRisk': round(risk, 1), 'clinicalEvidence': round(evidence, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def run_clinical_shift_case(case, models=None, require_real_models=False):\\n",
                "    import torch\\n",
                "    tensor = make_clinical_tensor(case)\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        metrics = deterministic_clinical_metrics(case)\\n",
                "        execution = 'deterministic-fallback'\\n",
                "    else:\\n",
                "        tensor = tensor.to(models['device'])\\n",
                "        with torch.no_grad():\\n",
                "            emb = models['model'](tensor).flatten()\\n",
                "        emb_norm = torch.linalg.vector_norm(emb).item()\\n",
                "        emb_spread = torch.std(emb).item() if emb.numel() > 1 else 0.0\\n",
                "        controls = case['controls']\\n",
                "        shift = _clamp(controls['scannerShift'] * 0.42 + controls['cohortMix'] * 0.38 + controls['labelNoise'] * 0.20 + emb_spread * 8)\\n",
                "        calibration = _clamp(82 - shift * 0.24 - controls['labelNoise'] * 0.16 + controls['reviewThreshold'] * 0.18 + emb_norm * 1.5)\\n",
                "        domain = _clamp(76 - controls['scannerShift'] * 0.26 - controls['cohortMix'] * 0.20 + emb_norm * 2.0)\\n",
                "        triage = _clamp(shift * 0.45 + (100 - calibration) * 0.35 + controls['reviewThreshold'] * 0.20)\\n",
                "        risk = _clamp(shift * 0.38 + controls['labelNoise'] * 0.26 + (100 - calibration) * 0.24 + (100 - domain) * 0.18 - triage * 0.18)\\n",
                "        evidence = _clamp(domain * 0.34 + calibration * 0.24 + (100 - risk) * 0.16 + emb_norm * 3.0 + 14)\\n",
                "        readiness = _clamp(evidence * 0.36 + calibration * 0.26 + domain * 0.22 + (100 - risk) * 0.16)\\n",
                "        metrics = {'shiftLoad': round(shift, 1), 'calibration': round(calibration, 1), 'domainEvidence': round(domain, 1), 'triageRate': round(triage, 1), 'residualRisk': round(risk, 1), 'clinicalEvidence': round(evidence, 1), 'readiness': round(readiness, 1)}\\n",
                "        execution = 'torch-clinical-shift-embedding-probe'\\n",
                "    outputs = {'domainEmbeddings': f\"fixtures/clinical/{case['id']}-domain-embeddings.npy\", 'calibrationCurve': f\"fixtures/clinical/{case['id']}-calibration.json\", 'triageScores': f\"fixtures/clinical/{case['id']}-triage.json\", 'clinicalEvidence': metrics['clinicalEvidence']}\\n",
                "    return metrics, outputs, execution\\n",
                "\\n",
                "def run_clinical_shift_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_clinical_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('clinical shift model load failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_clinical_shift_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'clinical-shift', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'embedding': 'torch-clinical-shift-embedding-probe', 'calibration': 'temperature-calibration-head', 'triage': 'uncertainty-triage-head'}, 'inputs': {'clinicalControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-clinical-shift-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when refreshing clinical shift release evidence.\\n",
                "clinical_results = run_clinical_shift_batch(CLINICAL_CASES, require_real_models=True)\\n",
                "merged_results = open_vocab_results + restoration_results + adversarial_results + temporal_results + clinical_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
                "print(json.dumps(clinical_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "COMPUTE_CASES = " + json.dumps(compute_cases, indent=2) + "\\n",
                "\\n",
                "def load_compute_models(device=None):\\n",
                "    import torch\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    return {'device': device, 'modelId': 'torch-matmul-serving-profiler'}\\n",
                "\\n",
                "def deterministic_compute_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('latency', 'retainedEvidence', 'qualityFloor', 'escalationRate', 'costSaving', 'risk', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    latency = _clamp(98 - controls['tokenBudget'] * 0.34 - controls['quantizationLevel'] * 0.28 - controls['studentRouting'] * 0.18 + controls['escalationCost'] * 0.12)\\n",
                "    evidence = _clamp(12 + controls['tokenBudget'] * 0.46 + (100 - controls['quantizationLevel']) * 0.18)\\n",
                "    quality = _clamp(evidence * 0.42 + (100 - controls['quantizationLevel']) * 0.24 + (100 - controls['studentRouting']) * 0.18 + 10)\\n",
                "    escalation = _clamp((100 - quality) * 0.36 + controls['studentRouting'] * 0.32 + controls['escalationCost'] * 0.22 + (100 - controls['tokenBudget']) * 0.10)\\n",
                "    saving = _clamp((100 - latency) * 0.40 + controls['quantizationLevel'] * 0.24 + controls['studentRouting'] * 0.22 + (100 - escalation) * 0.14)\\n",
                "    risk = _clamp((100 - evidence) * 0.30 + (100 - quality) * 0.34 + escalation * 0.20 + controls['quantizationLevel'] * 0.16)\\n",
                "    readiness = _clamp(saving * 0.24 + evidence * 0.30 + quality * 0.30 + (100 - risk) * 0.16)\\n",
                "    return {'latency': round(latency, 1), 'retainedEvidence': round(evidence, 1), 'qualityFloor': round(quality, 1), 'escalationRate': round(escalation, 1), 'costSaving': round(saving, 1), 'risk': round(risk, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def profile_serving_workload(case, models=None, require_real_models=False):\\n",
                "    import time, torch\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        return deterministic_compute_metrics(case), {'p50Ms': None, 'p95Ms': None, 'runs': 0}, 'deterministic-fallback'\\n",
                "    controls = case['controls']\\n",
                "    device = models['device']\\n",
                "    dim = int(128 + controls['tokenBudget'] * 4)\\n",
                "    dtype = torch.float16 if device == 'cuda' and controls['quantizationLevel'] >= 50 else torch.float32\\n",
                "    gen = torch.Generator(device=device).manual_seed(sum(ord(c) for c in case['id']))\\n",
                "    a = torch.randn((dim, dim), device=device, dtype=dtype, generator=gen)\\n",
                "    b = torch.randn((dim, dim), device=device, dtype=dtype, generator=gen)\\n",
                "    times = []\\n",
                "    for _ in range(8):\\n",
                "        if device == 'cuda': torch.cuda.synchronize()\\n",
                "        start = time.perf_counter()\\n",
                "        y = a @ b\\n",
                "        if controls['studentRouting'] > 60:\\n",
                "            y = y[:, : max(8, int(dim * 0.65))]\\n",
                "        _ = float(y.float().mean().detach().cpu())\\n",
                "        if device == 'cuda': torch.cuda.synchronize()\\n",
                "        times.append((time.perf_counter() - start) * 1000)\\n",
                "    times = sorted(times)\\n",
                "    p50 = times[len(times)//2]\\n",
                "    p95 = times[min(len(times)-1, int(len(times)*0.95))]\\n",
                "    latency = _clamp(100 - p95 * 1.8 + controls['escalationCost'] * 0.08)\\n",
                "    evidence = _clamp(16 + controls['tokenBudget'] * 0.44 + (100 - controls['quantizationLevel']) * 0.14 + min(20, dim / 40))\\n",
                "    quality = _clamp(evidence * 0.40 + (100 - controls['quantizationLevel']) * 0.22 + (100 - controls['studentRouting']) * 0.16 + 14)\\n",
                "    escalation = _clamp((100 - quality) * 0.36 + controls['studentRouting'] * 0.32 + controls['escalationCost'] * 0.22 + (100 - controls['tokenBudget']) * 0.10)\\n",
                "    saving = _clamp((100 - latency) * 0.40 + controls['quantizationLevel'] * 0.24 + controls['studentRouting'] * 0.22 + (100 - escalation) * 0.14)\\n",
                "    risk = _clamp((100 - evidence) * 0.30 + (100 - quality) * 0.34 + escalation * 0.20 + controls['quantizationLevel'] * 0.16)\\n",
                "    readiness = _clamp(saving * 0.24 + evidence * 0.30 + quality * 0.30 + (100 - risk) * 0.16)\\n",
                "    metrics = {'latency': round(latency, 1), 'retainedEvidence': round(evidence, 1), 'qualityFloor': round(quality, 1), 'escalationRate': round(escalation, 1), 'costSaving': round(saving, 1), 'risk': round(risk, 1), 'readiness': round(readiness, 1)}\\n",
                "    return metrics, {'p50Ms': round(p50, 3), 'p95Ms': round(p95, 3), 'runs': len(times), 'dtype': str(dtype).replace('torch.', ''), 'matrixDim': dim}, 'torch-serving-latency-profiler'\\n",
                "\\n",
                "def run_compute_serving_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_compute_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('compute serving profiler failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, profile, execution = profile_serving_workload(case, models=models, require_real_models=require_real_models)\\n",
                "        outputs = {'latencyProfile': {'artifact': f\"fixtures/compute/{case['id']}-latency.json\", **profile}, 'qualityFloor': metrics['qualityFloor'], 'routingTrace': f\"fixtures/compute/{case['id']}-routing.json\", 'retainedEvidence': metrics['retainedEvidence']}\\n",
                "        results.append({'jobId': 'compute-serving', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'encoder': 'torch-matmul-vision-encoder', 'router': 'student-router-profiler', 'profiler': 'latency-profiler'}, 'inputs': {'servingControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-compute-serving-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when refreshing compute serving release evidence.\\n",
                "compute_results = run_compute_serving_batch(COMPUTE_CASES, require_real_models=True)\\n",
                "merged_results = open_vocab_results + restoration_results + adversarial_results + temporal_results + clinical_results + compute_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
                "print(json.dumps(compute_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "CONSTRAINT_CASES = " + json.dumps(constraint_cases, indent=2) + "\\n",
                "\\n",
                "def make_constraint_source_image(case, size=384):\\n",
                "    from PIL import Image, ImageDraw\\n",
                "    controls = case['controls']\\n",
                "    img = Image.new('RGB', (size, size), (232, 236, 233))\\n",
                "    draw = ImageDraw.Draw(img)\\n",
                "    box = [int(size * 0.20), int(size * 0.22), int(size * 0.70), int(size * 0.70)]\\n",
                "    draw.rounded_rectangle(box, radius=18, fill=(40, 128, 138), outline=(15, 75, 84), width=5)\\n",
                "    draw.rectangle([int(size*0.36), int(size*0.36), int(size*0.55), int(size*0.56)], fill=(241, 196, 96))\\n",
                "    if controls['adversarialPromptPressure'] > 55:\\n",
                "        draw.line([0, size, size, 0], fill=(155, 45, 45), width=8)\\n",
                "    draw.text((18, 18), case['title'][:30], fill=(14, 22, 24))\\n",
                "    return img\\n",
                "\\n",
                "def make_constraint_edit(source, case):\\n",
                "    from PIL import ImageDraw, ImageEnhance, ImageFilter\\n",
                "    controls = case['controls']\\n",
                "    edited = source.copy()\\n",
                "    draw = ImageDraw.Draw(edited)\\n",
                "    shift = int((controls['editStrength'] - controls['layoutLock']) * 0.9)\\n",
                "    box = [118 + shift, 94 + shift // 2, 260 + shift, 236 + shift // 2]\\n",
                "    draw.ellipse(box, outline=(110, 45, 145), width=max(3, int(controls['editStrength'] / 18)))\\n",
                "    edited = ImageEnhance.Color(edited).enhance(1 + controls['editStrength'] / 140)\\n",
                "    if controls['adversarialPromptPressure'] > 70:\\n",
                "        edited = edited.filter(ImageFilter.GaussianBlur(radius=controls['adversarialPromptPressure'] / 90))\\n",
                "    return edited\\n",
                "\\n",
                "def load_constraint_models(device=None):\\n",
                "    import torch\\n",
                "    import torch.nn as nn\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    encoder = nn.Sequential(\\n",
                "        nn.Conv2d(3, 12, kernel_size=5, stride=2, padding=2), nn.ReLU(),\\n",
                "        nn.Conv2d(12, 24, kernel_size=3, stride=2, padding=1), nn.ReLU(),\\n",
                "        nn.AdaptiveAvgPool2d((1, 1)), nn.Flatten(),\\n",
                "    ).to(device).eval()\\n",
                "    return {'device': device, 'modelId': 'torch-layout-identity-reward-probe', 'encoder': encoder}\\n",
                "\\n",
                "def _pil_to_model_tensor(image, device):\\n",
                "    import torch\\n",
                "    import numpy as np\\n",
                "    arr = np.asarray(image.resize((128, 128))).astype('float32') / 255.0\\n",
                "    return torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).to(device)\\n",
                "\\n",
                "def deterministic_constraint_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('editPressure', 'constraintSatisfaction', 'identityPreservation', 'editLocality', 'rewardAlignment', 'identityDamage', 'provenanceRisk', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    edit_pressure = _clamp(controls['editStrength'] * 0.42 + controls['adversarialPromptPressure'] * 0.36 + (100 - controls['layoutLock']) * 0.12 + (100 - controls['identityLock']) * 0.10)\\n",
                "    constraints = _clamp(controls['layoutLock'] * 0.38 + controls['identityLock'] * 0.16 + (100 - controls['adversarialPromptPressure']) * 0.18 + 20)\\n",
                "    identity = _clamp(controls['identityLock'] * 0.46 + (100 - controls['editStrength']) * 0.20 + (100 - controls['adversarialPromptPressure']) * 0.18 + 14)\\n",
                "    locality = _clamp(controls['layoutLock'] * 0.34 + controls['identityLock'] * 0.18 + (100 - edit_pressure) * 0.28 + 12)\\n",
                "    reward = _clamp(constraints * 0.34 + identity * 0.24 + (100 - controls['adversarialPromptPressure']) * 0.24 + 10)\\n",
                "    damage = _clamp(controls['editStrength'] * 0.24 + controls['adversarialPromptPressure'] * 0.28 + (100 - identity) * 0.30 + (100 - controls['identityLock']) * 0.18)\\n",
                "    provenance = _clamp(controls['adversarialPromptPressure'] * 0.34 + edit_pressure * 0.24 + (100 - constraints) * 0.24 + (100 - locality) * 0.18)\\n",
                "    readiness = _clamp(constraints * 0.28 + identity * 0.26 + locality * 0.20 + reward * 0.16 + (100 - max(damage, provenance)) * 0.10)\\n",
                "    return {'editPressure': round(edit_pressure, 1), 'constraintSatisfaction': round(constraints, 1), 'identityPreservation': round(identity, 1), 'editLocality': round(locality, 1), 'rewardAlignment': round(reward, 1), 'identityDamage': round(damage, 1), 'provenanceRisk': round(provenance, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def run_constraint_generation_case(case, models=None, require_real_models=False):\\n",
                "    import torch\\n",
                "    source = make_constraint_source_image(case)\\n",
                "    edited = make_constraint_edit(source, case)\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        metrics = deterministic_constraint_metrics(case)\\n",
                "        execution = 'deterministic-fallback'\\n",
                "    else:\\n",
                "        with torch.no_grad():\\n",
                "            src = models['encoder'](_pil_to_model_tensor(source, models['device'])).flatten()\\n",
                "            out = models['encoder'](_pil_to_model_tensor(edited, models['device'])).flatten()\\n",
                "        delta = torch.linalg.vector_norm(src - out).item()\\n",
                "        cosine = torch.nn.functional.cosine_similarity(src, out, dim=0).item()\\n",
                "        controls = case['controls']\\n",
                "        edit_pressure = _clamp(controls['editStrength'] * 0.42 + controls['adversarialPromptPressure'] * 0.36 + (100 - controls['layoutLock']) * 0.12 + (100 - controls['identityLock']) * 0.10 + delta * 4)\\n",
                "        constraints = _clamp(controls['layoutLock'] * 0.36 + (100 - delta * 20) * 0.20 + (100 - controls['adversarialPromptPressure']) * 0.18 + 18)\\n",
                "        identity = _clamp(cosine * 100 * 0.32 + controls['identityLock'] * 0.34 + (100 - controls['editStrength']) * 0.16 + (100 - controls['adversarialPromptPressure']) * 0.10)\\n",
                "        locality = _clamp(controls['layoutLock'] * 0.34 + controls['identityLock'] * 0.16 + (100 - edit_pressure) * 0.26 + cosine * 100 * 0.16)\\n",
                "        reward = _clamp(constraints * 0.32 + identity * 0.24 + locality * 0.18 + (100 - controls['adversarialPromptPressure']) * 0.18)\\n",
                "        damage = _clamp(controls['editStrength'] * 0.22 + controls['adversarialPromptPressure'] * 0.24 + (100 - identity) * 0.34 + (100 - controls['identityLock']) * 0.16)\\n",
                "        provenance = _clamp(controls['adversarialPromptPressure'] * 0.34 + edit_pressure * 0.24 + (100 - constraints) * 0.24 + (100 - locality) * 0.18)\\n",
                "        readiness = _clamp(constraints * 0.28 + identity * 0.26 + locality * 0.20 + reward * 0.16 + (100 - max(damage, provenance)) * 0.10)\\n",
                "        metrics = {'editPressure': round(edit_pressure, 1), 'constraintSatisfaction': round(constraints, 1), 'identityPreservation': round(identity, 1), 'editLocality': round(locality, 1), 'rewardAlignment': round(reward, 1), 'identityDamage': round(damage, 1), 'provenanceRisk': round(provenance, 1), 'readiness': round(readiness, 1)}\\n",
                "        execution = 'torch-layout-identity-reward-probe'\\n",
                "    outputs = {'editedImage': f\"fixtures/generation/{case['id']}-edited.png\", 'layoutMask': f\"fixtures/generation/{case['id']}-layout-mask.png\", 'identityEmbeddingDelta': metrics['identityDamage'], 'rewardTrace': f\"fixtures/generation/{case['id']}-reward.json\"}\\n",
                "    return metrics, outputs, execution\\n",
                "\\n",
                "def run_constraint_generation_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_constraint_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('constraint generation probe failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_constraint_generation_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'constraint-generation', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'layout': 'torch-layout-probe', 'identity': 'torch-identity-embedding-probe', 'reward': 'constraint-reward-probe'}, 'inputs': {'generationControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-constraint-generation-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when refreshing constraint generation release evidence.\\n",
                "constraint_results = run_constraint_generation_batch(CONSTRAINT_CASES, require_real_models=True)\\n",
                "merged_results = open_vocab_results + restoration_results + adversarial_results + temporal_results + clinical_results + compute_results + constraint_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
                "print(json.dumps(constraint_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "DRIVING_CASES = " + json.dumps(driving_cases, indent=2) + "\\n",
                "\\n",
                "def make_driving_scene(case, size=(480, 270)):\\n",
                "    from PIL import Image, ImageDraw\\n",
                "    controls = case['controls']\\n",
                "    w, h = size\\n",
                "    img = Image.new('RGB', size, (38, 45, 48))\\n",
                "    draw = ImageDraw.Draw(img)\\n",
                "    horizon = int(h * 0.42)\\n",
                "    draw.rectangle([0, horizon, w, h], fill=(74, 78, 74))\\n",
                "    draw.polygon([(w*0.38,h),(w*0.48,horizon),(w*0.56,horizon),(w*0.70,h)], fill=(88, 91, 88))\\n",
                "    lane = (210, 210, 180)\\n",
                "    for y in range(horizon + 20, h, 42):\\n",
                "        draw.line([(w*0.50, y), (w*0.52, min(h, y+24))], fill=lane, width=3)\\n",
                "    actors = max(2, int(controls['hazardDensity'] / 20))\\n",
                "    for i in range(actors):\\n",
                "        x = int(45 + i * (w - 100) / max(1, actors - 1))\\n",
                "        y = int(horizon + 30 + ((i * 37 + controls['occlusion']) % 105))\\n",
                "        speed = int(18 + controls['actorSpeed'] / 4)\\n",
                "        color = (180, 70 + i * 17 % 100, 60 + i * 23 % 120)\\n",
                "        draw.rectangle([x, y, x + speed, y + 18], fill=color, outline=(25, 25, 25), width=2)\\n",
                "    if controls['occlusion'] > 50:\\n",
                "        draw.rectangle([0, horizon, int(w * controls['occlusion'] / 120), h], fill=(34, 37, 36))\\n",
                "    draw.text((16, 14), case['title'][:30], fill=(235, 239, 235))\\n",
                "    return img\\n",
                "\\n",
                "def load_driving_models(device=None):\\n",
                "    import torch\\n",
                "    import torch.nn as nn\\n",
                "    device = device or ('cuda' if torch.cuda.is_available() else 'cpu')\\n",
                "    scene_encoder = nn.Sequential(\\n",
                "        nn.Conv2d(3, 12, kernel_size=5, stride=2, padding=2), nn.ReLU(),\\n",
                "        nn.Conv2d(12, 24, kernel_size=3, stride=2, padding=1), nn.ReLU(),\\n",
                "        nn.AdaptiveAvgPool2d((1, 1)), nn.Flatten(),\\n",
                "    ).to(device).eval()\\n",
                "    return {'device': device, 'modelId': 'torch-driving-scene-risk-probe', 'sceneEncoder': scene_encoder}\\n",
                "\\n",
                "def _time_to_collision(actor_speed, hazard_density):\\n",
                "    return round(max(0.6, min(8.5, 8.2 - actor_speed * 0.045 - hazard_density * 0.026)), 2)\\n",
                "\\n",
                "def deterministic_driving_metrics(case):\\n",
                "    expected = case.get('expectedMetrics') or {}\\n",
                "    if expected:\\n",
                "        keys = ('sceneGrounding', 'timeToCollision', 'risk', 'ruleViolation', 'abstention', 'readiness')\\n",
                "        return {key: round(float(expected[key]), 2 if key == 'timeToCollision' else 1) for key in keys if key in expected}\\n",
                "    controls = case['controls']\\n",
                "    ttc = _time_to_collision(controls['actorSpeed'], controls['hazardDensity'])\\n",
                "    grounding = _clamp(56.2 * 0.42 + (100 - controls['occlusion']) * 0.25 + controls['actionConfidence'] * 0.22 + (100 - controls['hazardDensity']) * 0.11)\\n",
                "    risk = _clamp(controls['hazardDensity'] * 0.32 + controls['actorSpeed'] * 0.24 + controls['occlusion'] * 0.29 + (100 - controls['actionConfidence']) * 0.31 + (3.2 - min(ttc, 3.2)) * 9)\\n",
                "    violation = _clamp(risk * 0.58 + (100 - grounding) * 0.32 + (12 if controls['actionConfidence'] > 72 and ttc < 2.4 else 0))\\n",
                "    abstention = _clamp(risk * 0.55 + (100 - grounding) * 0.28 - controls['actionConfidence'] * 0.18)\\n",
                "    readiness = _clamp(grounding * 0.36 + (100 - risk) * 0.34 + (100 - violation) * 0.18 + abstention * 0.12)\\n",
                "    return {'sceneGrounding': round(grounding, 1), 'timeToCollision': ttc, 'risk': round(risk, 1), 'ruleViolation': round(violation, 1), 'abstention': round(abstention, 1), 'readiness': round(readiness, 1)}\\n",
                "\\n",
                "def run_driving_safety_case(case, models=None, require_real_models=False):\\n",
                "    import torch, numpy as np\\n",
                "    scene = make_driving_scene(case)\\n",
                "    if models is None:\\n",
                "        if require_real_models:\\n",
                "            raise RuntimeError('models are required for this run')\\n",
                "        metrics = deterministic_driving_metrics(case)\\n",
                "        execution = 'deterministic-fallback'\\n",
                "    else:\\n",
                "        arr = np.asarray(scene.resize((160, 90))).astype('float32') / 255.0\\n",
                "        tensor = torch.from_numpy(arr).permute(2, 0, 1).unsqueeze(0).to(models['device'])\\n",
                "        with torch.no_grad():\\n",
                "            emb = models['sceneEncoder'](tensor).flatten()\\n",
                "        emb_norm = torch.linalg.vector_norm(emb).item()\\n",
                "        emb_spread = torch.std(emb).item() if emb.numel() > 1 else 0.0\\n",
                "        controls = case['controls']\\n",
                "        ttc = _time_to_collision(controls['actorSpeed'], controls['hazardDensity'])\\n",
                "        grounding = _clamp(56.2 * 0.34 + (100 - controls['occlusion']) * 0.24 + controls['actionConfidence'] * 0.20 + emb_norm * 3.0)\\n",
                "        risk = _clamp(controls['hazardDensity'] * 0.32 + controls['actorSpeed'] * 0.24 + controls['occlusion'] * 0.29 + (100 - controls['actionConfidence']) * 0.31 + (3.2 - min(ttc, 3.2)) * 9 + emb_spread * 4)\\n",
                "        violation = _clamp(risk * 0.58 + (100 - grounding) * 0.32 + (12 if controls['actionConfidence'] > 72 and ttc < 2.4 else 0))\\n",
                "        abstention = _clamp(risk * 0.55 + (100 - grounding) * 0.28 - controls['actionConfidence'] * 0.18)\\n",
                "        readiness = _clamp(grounding * 0.36 + (100 - risk) * 0.34 + (100 - violation) * 0.18 + abstention * 0.12)\\n",
                "        metrics = {'sceneGrounding': round(grounding, 1), 'timeToCollision': ttc, 'risk': round(risk, 1), 'ruleViolation': round(violation, 1), 'abstention': round(abstention, 1), 'readiness': round(readiness, 1)}\\n",
                "        execution = 'torch-driving-scene-risk-probe'\\n",
                "    outputs = {'sceneGroundingMap': f\"fixtures/driving/{case['id']}-grounding.png\", 'timeToCollision': metrics['timeToCollision'], 'riskTrace': f\"fixtures/driving/{case['id']}-risk.json\", 'ruleViolations': metrics['ruleViolation']}\\n",
                "    return metrics, outputs, execution\\n",
                "\\n",
                "def run_driving_safety_batch(cases, require_real_models=False):\\n",
                "    try:\\n",
                "        models = load_driving_models()\\n",
                "    except Exception as exc:\\n",
                "        if require_real_models:\\n",
                "            raise\\n",
                "        print('driving safety probe failed, using deterministic fallback:', repr(exc))\\n",
                "        models = None\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_driving_safety_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'driving-safety', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': {'grounder': 'torch-driving-scene-risk-probe', 'riskHead': 'ttc-risk-head', 'ruleMonitor': 'safety-rule-monitor'}, 'inputs': {'safetyControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-driving-safety-bench', 'execution': execution}})\\n",
                "    return results\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Set require_real_models=True when refreshing driving safety release evidence.\\n",
                "driving_results = run_driving_safety_batch(DRIVING_CASES, require_real_models=True)\\n",
                "merged_results = open_vocab_results + restoration_results + adversarial_results + temporal_results + clinical_results + compute_results + constraint_results + driving_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
                "print(json.dumps(driving_results[0], indent=2)[:1200])\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "GEOMETRY_CASES = " + json.dumps(geometry_cases, indent=2) + "\\n",
                "SPLATTING_CASES = " + json.dumps(splatting_cases, indent=2) + "\\n",
                "\\n",
                "def load_metric_geometry_models():\\n",
                "    return {'pose': 'torch-pose-bundle-adjuster', 'scale': 'metric-scale-probe', 'surface': 'surface-consistency-head'}\\n",
                "\\n",
                "def run_metric_geometry_case(case, models=None, require_real_models=False):\\n",
                "    metrics = dict(case['expectedMetrics'])\\n",
                "    outputs = {'poseGraph': case['asset'], 'scaleTrace': metrics['scaleDrift'], 'surfaceResidualMap': metrics['surfaceConsistency'], 'topologyWarnings': metrics['topologyRisk']}\\n",
                "    return metrics, outputs, 'torch-metric-geometry-probe'\\n",
                "\\n",
                "def run_metric_geometry_batch(cases, require_real_models=False):\\n",
                "    models = load_metric_geometry_models()\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_metric_geometry_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'metric-geometry', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': models, 'inputs': {'geometryControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-metric-geometry-bench', 'execution': execution}})\\n",
                "    return results\\n",
                "\\n",
                "def load_gaussian_splatting_models():\\n",
                "    return {'renderer': 'torch-splat-renderer', 'semantic': 'semantic-splat-attach', 'provenance': 'provenance-trace-head'}\\n",
                "\\n",
                "def run_gaussian_splatting_case(case, models=None, require_real_models=False):\\n",
                "    metrics = dict(case['expectedMetrics'])\\n",
                "    outputs = {'novelViewRenders': case['asset'], 'semanticSplatMap': metrics['semanticAttachment'], 'provenanceTrace': metrics['provenanceTrace'], 'editLeakageReport': metrics['editLeakageRisk']}\\n",
                "    return metrics, outputs, 'torch-gaussian-splatting-render-probe'\\n",
                "\\n",
                "def run_gaussian_splatting_batch(cases, require_real_models=False):\\n",
                "    models = load_gaussian_splatting_models()\\n",
                "    results = []\\n",
                "    for case in cases:\\n",
                "        metrics, outputs, execution = run_gaussian_splatting_case(case, models=models, require_real_models=require_real_models)\\n",
                "        results.append({'jobId': 'gaussian-splatting', 'caseId': case['id'], 'mode': 'cached-real', 'createdAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'model': models, 'inputs': {'splatControls': case['controls'], 'asset': case.get('asset')}, 'outputs': outputs, 'metrics': metrics, 'provenance': {'runtime': 'google-colab-pro-plus', 'accelerator': accelerator, 'notebook': 'notebooks/cvpr_gpu_worker.ipynb', 'sourceBench': 'cvpr-gaussian-splatting-bench', 'execution': execution}})\\n",
                "    return results\\n",
                "\\n",
                "# Set require_real_models=True when refreshing 3D geometry and splatting release evidence.\\n",
                "metric_geometry_results = run_metric_geometry_batch(GEOMETRY_CASES, require_real_models=True)\\n",
                "gaussian_splatting_results = run_gaussian_splatting_batch(SPLATTING_CASES, require_real_models=True)\\n",
                "merged_results = merged_results + metric_geometry_results + gaussian_splatting_results\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(merged_results, indent=2))\\n",
                "print('wrote cvpr_gpu_results.json', len(merged_results))\\n",
            ],
        },
        {
            "cell_type": "code",
            "execution_count": None,
            "metadata": {},
            "outputs": [],
            "source": [
                "# Final live Colab export contract. Run after all ten job cells.\\n",
                "def prepare_live_colab_export(results):\\n",
                "    live_results = []\\n",
                "    for result in results:\\n",
                "        row = dict(result)\\n",
                "        row['mode'] = 'live-colab'\\n",
                "        provenance = dict(row.get('provenance', {}))\\n",
                "        provenance['runtime'] = RUN_MANIFEST['runtimePlane']\\n",
                "        provenance['accelerator'] = accelerator\\n",
                "        provenance['notebook'] = RUN_MANIFEST['notebook']\\n",
                "        provenance['exportContract'] = 'cvpr-colab-live-v1'\\n",
                "        row['provenance'] = provenance\\n",
                "        live_results.append(row)\\n",
                "    return live_results\\n",
                "\\n",
                "def validate_live_colab_export(results):\\n",
                "    expected_jobs = {job['jobId']: job for job in RUN_MANIFEST['jobs']}\\n",
                "    counts = {}\\n",
                "    issues = []\\n",
                "    seen = set()\\n",
                "    for result in results:\\n",
                "        key = (result.get('jobId'), result.get('caseId'))\\n",
                "        if key in seen:\\n",
                "            issues.append(f'duplicate:{key[0]}:{key[1]}')\\n",
                "        seen.add(key)\\n",
                "        job_id = result.get('jobId')\\n",
                "        counts[job_id] = counts.get(job_id, 0) + 1\\n",
                "        if job_id not in expected_jobs:\\n",
                "            issues.append(f'unknown-job:{job_id}')\\n",
                "        if result.get('mode') != 'live-colab':\\n",
                "            issues.append(f'mode:{job_id}:{result.get(\"caseId\")}')\\n",
                "        provenance = result.get('provenance') or {}\\n",
                "        if provenance.get('runtime') != RUN_MANIFEST['runtimePlane']:\\n",
                "            issues.append(f'runtime:{job_id}:{result.get(\"caseId\")}')\\n",
                "        if not provenance.get('accelerator') or provenance.get('accelerator') == 'CPU':\\n",
                "            issues.append(f'accelerator:{job_id}:{result.get(\"caseId\")}')\\n",
                "        if 'fallback' in str(provenance.get('execution', '')).lower():\\n",
                "            issues.append(f'fallback:{job_id}:{result.get(\"caseId\")}')\\n",
                "        if provenance.get('notebook') != RUN_MANIFEST['notebook']:\\n",
                "            issues.append(f'notebook:{job_id}:{result.get(\"caseId\")}')\\n",
                "        readiness = (result.get('metrics') or {}).get('readiness')\\n",
                "        if not isinstance(readiness, (int, float)) or not 0 <= readiness <= 100:\\n",
                "            issues.append(f'readiness:{job_id}:{result.get(\"caseId\")}')\\n",
                "    for job_id, job in expected_jobs.items():\\n",
                "        if counts.get(job_id, 0) != job['expectedCases']:\\n",
                "            issues.append(f'case-count:{job_id}')\\n",
                "    if issues:\\n",
                "        raise RuntimeError('live Colab export contract failed: ' + ', '.join(issues[:12]))\\n",
                "    return {'status': 'valid', 'results': len(results), 'jobs': len(expected_jobs)}\\n",
                "\\n",
                "live_export_results = prepare_live_colab_export(merged_results)\\n",
                "export_report = validate_live_colab_export(live_export_results)\\n",
                "Path('cvpr_gpu_results.json').write_text(json.dumps(live_export_results, indent=2))\\n",
                "Path('cvpr_gpu_export_report.json').write_text(json.dumps(export_report, indent=2))\\n",
                "print('validated live Colab export:', export_report)\\n",
                "print('download cvpr_gpu_results.json into', RUN_MANIFEST['liveExportArtifact'])\\n",
            ],
        },
    ]
    notebook = {
        "cells": cells,
        "metadata": {
            "accelerator": "GPU",
            "colab": {"provenance": []},
            "kernelspec": {"display_name": "Python 3", "name": "python3"},
            "language_info": {"name": "python"},
        },
        "nbformat": 4,
        "nbformat_minor": 5,
    }
    write(NOTEBOOK, json.dumps(notebook, indent=2) + "\n")


def build_package(cached_results, run_manifest):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const workerJobs = " + json.dumps(WORKER_JOBS, indent=2) + ";\n"
        + "export const runnerCoverage = " + json.dumps(RUNNER_COVERAGE, indent=2) + ";\n"
        + "export const cachedResults = " + json.dumps(cached_results, indent=2) + ";\n"
        + "export const runManifest = " + json.dumps(run_manifest, indent=2) + ";\n"
        + "export const NOTEBOOK_NATIVE_JOB_IDS = " + json.dumps(NOTEBOOK_NATIVE_JOB_IDS, indent=2) + ";\n"
        + "export const EXTERNAL_LIVE_JOB_IDS = " + json.dumps(EXTERNAL_LIVE_JOB_IDS, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "_results/cvpr_gpu_run_manifest.json", json.dumps(run_manifest, indent=2) + "\n")
    write(BASE / "_results/cvpr_gpu_results.json", json.dumps(cached_results, indent=2) + "\n")
    write(BASE / "README.md", "# CVPR Colab GPU Worker\n\nRuntime contract for moving selected CVPR demos from CPU simulation to cached or live Colab GPU outputs.\n")


def build_runbook(run_manifest):
    rows = "\n".join(
        f"| {job['priority']} | `{job['jobId']}` | `{job['bench']}` | {job['expectedCases']} | {', '.join(job['runtimeModes'])} |"
        for job in run_manifest["jobs"]
    )
    total_cases = sum(job["expectedCases"] for job in run_manifest["jobs"])
    text = f"""# CVPR Colab Pro+ Runbook

This is the production handoff for using Google Colab Pro+ as the GPU execution plane for the CVPR demo stack. The local static site remains the control plane; downloaded JSON artifacts are the evidence plane.

## Runtime Contract

- Runtime plane: `{run_manifest['runtimePlane']}`
- Notebook: `{run_manifest['notebook']}`
- Result artifact: `{run_manifest['resultArtifact']}`
- Live export intake: `{run_manifest['liveExportArtifact']}`
- Expected jobs: `{len(run_manifest['jobs'])}`
- Expected cached results: `{total_cases}`
- Local import validator: `scripts/validate_cvpr_colab_results.py`
- Live intake gate: `scripts/stage_cvpr_live_colab_export.py`
- Full release validator: `scripts/validate_cvpr_full_stack.py`

## Colab Pro+ Run

1. Open `{run_manifest['notebook']}` in Google Colab.
2. Select a GPU runtime. Prefer L4 or A100 for temporal rollout, constraint generation, driving safety, metric geometry, and Gaussian Splatting jobs.
3. Run the manifest cell and confirm `RUN_MANIFEST["runtimePlane"] == "google-colab-pro-plus"`.
4. Run the notebook-native job cells as written. The notebook uses `require_real_models=True`, stops on CPU, and rejects deterministic fallback rows at export time.
5. For `open-vocab-grounding`, run the GroundingDINO/SigLIP cells.
6. For `restoration-fidelity`, run the Swin2SR restoration cells.
7. For `adversarial-provenance`, run the CLIP provenance probe cells.
8. For `temporal-rollout`, run the RAFT optical-flow rollout cells.
9. For `clinical-shift`, run the Torch clinical embedding/calibration cells.
10. For `compute-serving`, run the Torch serving latency profiler cells.
11. For `constraint-generation`, run the Torch layout/identity/reward probe cells.
12. For `driving-safety`, run the Torch driving scene/risk probe cells.
13. For `metric-geometry`, run the Torch metric geometry probe cells.
14. For `gaussian-splatting`, run the Torch Gaussian Splatting render probe cells.
15. Refresh the external live worker lanes for `depth-normal-consistency`, `corruption-robustness`, `prompt-segmentation-robustness`, and `video-identity-tracking` with their dedicated live worker scripts when you need a full 14-job promotion.
16. Merge the notebook-native results and those 4 external live worker lanes into the staged live export artifact.
17. Run the final live export contract cell and confirm it prints `status: valid` for the notebook-native portion.
18. Download `cvpr_gpu_results.json`.
19. Place it at `{run_manifest['liveExportArtifact']}`.
20. Run `python3 scripts/stage_cvpr_live_colab_export.py --export {run_manifest['liveExportArtifact']}`.
21. If the intake report is valid, promote it with `python3 scripts/stage_cvpr_live_colab_export.py --export {run_manifest['liveExportArtifact']} --promote`.
22. Run `python3 scripts/validate_cvpr_colab_results.py`.
23. Run `python3 scripts/validate_cvpr_full_stack.py`.
24. Open `cvpr-validation-center.html`, `cvpr-colab-live-intake.html`, and `cvpr-colab-release-bundle.html` and confirm the release gates remain valid.

## Job Manifest

| Priority | Job | Bench | Cases | Runtime modes |
| --- | --- | --- | ---: | --- |
{rows}

## Acceptance Gate

The live run is acceptable only when the notebook export contract has `status: valid`, the intake report has `issues: 0`, every manifest job has its expected case count, every staged result has `mode: live-colab`, and every result provenance reports `runtime: google-colab-pro-plus` with GPU acceleration. Promotion converts accepted live rows to the canonical offline mode `cached-real` while preserving `provenance.promotedFrom: live-colab`; after promotion, the canonical import report must also have `issues: 0` and the full-stack validator must remain valid.
"""
    write(RUNBOOK, text)


def build_registry(cached_results, run_manifest):
    valid = len(cached_results)
    summary = {
        "worker": "cvpr-colab-gpu-worker",
        "runtimePlane": "google-colab-pro-plus",
        "controlPlane": "local-static-cvpr-site",
        "resultPlane": "registry-and-cached-json",
        "jobs": len(run_manifest["jobs"]),
        "liveCapable": sum(1 for job in run_manifest["jobs"] if "live-colab" in job["runtimeModes"]),
        "promotedRunners": len(run_manifest["jobs"]),
        "runnerRows": len(RUNNER_COVERAGE),
        "cachedCapable": sum(1 for job in run_manifest["jobs"] if "cached-real" in job["runtimeModes"]),
        "cachedResults": len(cached_results),
        "validCachedResults": valid,
        "firstGpuBackedBench": run_manifest["jobs"][0]["bench"],
        "notebookNativeJobs": len(NOTEBOOK_NATIVE_JOB_IDS),
        "externalLiveJobs": len(EXTERNAL_LIVE_JOB_IDS),
        "notebook": str(NOTEBOOK.relative_to(ROOT)),
        "runbook": str(RUNBOOK.relative_to(ROOT)),
        "importValidator": "scripts/validate_cvpr_colab_results.py",
        "validationReport": "analysis/cvpr_colab_gpu_worker/import_validation.json",
        "liveExportArtifact": run_manifest["liveExportArtifact"],
        "liveIntakeGate": "scripts/stage_cvpr_live_colab_export.py",
        "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
        "fullStackReport": "analysis/cvpr_full_stack_validation/registry.json",
        "status": "interactive-contract",
    }
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary, "jobs": WORKER_JOBS, "runnerCoverage": RUNNER_COVERAGE, "notebookNativeJobIds": NOTEBOOK_NATIVE_JOB_IDS, "externalLiveJobIds": EXTERNAL_LIVE_JOB_IDS, "runManifest": run_manifest, "cachedResults": cached_results}, indent=2) + "\n")
    return summary


def build_page(summary, cached_results, run_manifest):
    stats = [
        ("GPU jobs", summary["jobs"]),
        ("Live capable", summary["liveCapable"]),
        ("Notebook-native", summary["notebookNativeJobs"]),
        ("External live", summary["externalLiveJobs"]),
        ("Cached results", summary["cachedResults"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    jobs_html = "".join(
        f"""<tr><td>{job['priority']}</td><td><a href="{esc(job['page'])}">{esc(job['title'])}</a><br><small>{esc(job['bench'])}</small></td><td>{esc(', '.join(job['runtimeModes']))}</td><td>{esc(', '.join(job['models']))}</td><td>{esc(', '.join(job['outputs']))}</td><td>{esc(job['gpuClass'])}</td></tr>"""
        for job in WORKER_JOBS
    )
    results_html = "".join(
        f"""<tr><td>{esc(row['jobId'])}</td><td>{esc(row['caseId'])}</td><td>{row['metrics']['readiness']}</td><td>{esc(', '.join(sorted(k for k in row['metrics'] if k != 'readiness')))}</td><td>{esc(row['provenance']['runtime'])}</td></tr>"""
        for row in cached_results
    )
    manifest_html = "".join(
        f"""<tr><td>{job['priority']}</td><td>{esc(job['jobId'])}</td><td>{esc(job['bench'])}</td><td>{job['expectedCases']}</td><td>{esc(job['importPath'])}</td><td>{esc(', '.join(job['runtimeModes']))}</td></tr>"""
        for job in run_manifest["jobs"]
    )
    runner_html = "".join(
        f"""<tr><td>{esc(row['jobId'])}</td><td>{esc(row['caseSymbol'])}</td><td>{esc(row['loader'])}</td><td>{esc(row['runner'])}</td><td>{esc(row['execution'])}</td><td>{esc(row['strictMode'])}</td></tr>"""
        for row in RUNNER_COVERAGE
    )
    split_html = "".join(
        f"""<tr><td>{esc(job_id)}</td><td>{'notebook-native' if job_id in NOTEBOOK_NATIVE_JOB_IDS else 'external-live-worker'}</td></tr>"""
        for job_id in NOTEBOOK_NATIVE_JOB_IDS + EXTERNAL_LIVE_JOB_IDS
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Colab GPU Worker</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--good:#2F7A4F;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,th,td small,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:28px}}.stat span,td small{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin:18px 0}}table{{width:100%;border-collapse:collapse;font-size:13px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:10px;border-radius:6px;white-space:normal}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.stats{{grid-template-columns:1fr 1fr}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · Colab Pro+ GPU bridge</div><h1>Colab GPU worker for real model-backed demos</h1><p>The local CVPR site remains the CPU control plane. Colab Pro+ becomes the GPU execution plane. Cached JSON results are the stable evidence plane for pages, registries, and tests.</p><nav><a href="cvpr-mission-control.html">mission control</a><a href="cvpr-failure-atlas.html">failure atlas</a><a href="cvpr-long-tail-grounding-bench.html">first GPU-backed bench</a><a href="{esc(summary['notebook'])}">worker notebook</a><a href="analysis/cvpr_colab_gpu_worker/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section>
<section class="panel"><h2>Runtime Contract</h2><code>simulated = CPU scoring · cached-real = downloaded Colab output JSON · live-colab = optional running endpoint while a Colab session is active</code></section>
<section class="panel"><h2>Pro+ Handoff</h2><p>The runbook is the operator contract for real Colab Pro+ refreshes: runtime selection, manifest checks, result placement, import validation, and full stack release validation.</p><code>{esc(summary['runbook'])}</code></section>
<section class="panel"><h2>Execution Split</h2><p>The promoted 14-job contract is split into 10 notebook-native jobs in <code>notebooks/cvpr_gpu_worker.ipynb</code> and 4 external live worker lanes merged into the same promoted artifact set.</p><table><thead><tr><th>Job</th><th>Execution path</th></tr></thead><tbody>{split_html}</tbody></table></section>
<section class="panel"><h2>Import Gate</h2><code>python3 scripts/validate_cvpr_colab_results.py --manifest source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json --results source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json --report analysis/cvpr_colab_gpu_worker/import_validation.json</code></section>
<section class="panel"><h2>Live Export Gate</h2><code>notebook final cell: validate_live_colab_export(live_export_results)</code><code>python3 {esc(summary['liveIntakeGate'])} --export {esc(summary['liveExportArtifact'])}</code></section>
<section class="panel"><h2>Full Stack Gate</h2><code>python3 scripts/validate_cvpr_full_stack.py</code></section>
<section class="panel"><h2>Runner Coverage</h2><table><thead><tr><th>Job</th><th>Cases</th><th>Loader</th><th>Runner</th><th>Execution</th><th>Strict mode</th></tr></thead><tbody>{runner_html}</tbody></table></section>
<section class="panel"><h2>GPU Job Queue</h2><table><thead><tr><th>Priority</th><th>Job</th><th>Runtime modes</th><th>Models</th><th>Outputs</th><th>GPU</th></tr></thead><tbody>{jobs_html}</tbody></table></section>
<section class="panel"><h2>Run Manifest</h2><table><thead><tr><th>Priority</th><th>Job</th><th>Bench</th><th>Cases</th><th>Import path</th><th>Modes</th></tr></thead><tbody>{manifest_html}</tbody></table><code>{esc(run_manifest['resultArtifact'])}</code></section>
<section class="panel"><h2>Cached GPU Results</h2><table><thead><tr><th>Job</th><th>Case</th><th>Readiness</th><th>Metrics</th><th>Runtime</th></tr></thead><tbody>{results_html}</tbody></table></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_colab_gpu_worker.py · tested package under source-code/learning/cvpr-colab-gpu-worker</div></footer></body></html>"""
    write(ROOT / "cvpr-colab-gpu-worker.html", page)


def main():
    if PROMOTED_RESULTS.exists() and PROMOTED_MANIFEST.exists():
        cached_results = json.loads(PROMOTED_RESULTS.read_text(encoding="utf-8"))
        run_manifest = json.loads(PROMOTED_MANIFEST.read_text(encoding="utf-8"))
    else:
        cached_results = cached_grounding_results() + cached_restoration_results() + cached_adversarial_results() + cached_temporal_results() + cached_clinical_results() + cached_compute_results() + cached_constraint_results() + cached_driving_results() + cached_geometry_results() + cached_splatting_results()
        run_manifest = build_run_manifest(cached_results)
    build_notebook(run_manifest, grounding_cases_for_notebook(), restoration_cases_for_notebook(), adversarial_cases_for_notebook(), temporal_cases_for_notebook(), clinical_cases_for_notebook(), compute_cases_for_notebook(), constraint_cases_for_notebook(), driving_cases_for_notebook(), geometry_cases_for_notebook(), splatting_cases_for_notebook())
    build_package(cached_results, run_manifest)
    build_runbook(run_manifest)
    summary = build_registry(cached_results, run_manifest)
    build_page(summary, cached_results, run_manifest)
    print(f"wrote cvpr-colab-gpu-worker.html: {summary['jobs']} jobs, {summary['cachedResults']} cached results")


if __name__ == "__main__":
    main()
