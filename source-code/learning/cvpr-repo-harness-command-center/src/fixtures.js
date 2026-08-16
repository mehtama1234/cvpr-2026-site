export const surfaceRows = [
  {
    "surface": "cvpr-repo-gpu-harness.html",
    "label": "Cached repo GPU harness",
    "actual": "ready",
    "expected": "ready",
    "metric": "40 cached contracts",
    "evidence": "analysis/cvpr_repo_gpu_harness/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_gpu_harness.py"
  },
  {
    "surface": "cvpr-repo-harness-live-intake.html",
    "label": "Live Colab intake",
    "actual": "valid",
    "expected": "valid",
    "metric": "40 valid live rows",
    "evidence": "analysis/cvpr_repo_harness_live_intake/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_harness_live_intake.py"
  },
  {
    "surface": "cvpr-repo-harness-wave-planner.html",
    "label": "Wave planner",
    "actual": "ready",
    "expected": "ready",
    "metric": "8 waves / 5 per batch",
    "evidence": "analysis/cvpr_repo_harness_wave_planner/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_harness_wave_planner.py"
  },
  {
    "surface": "cvpr-repo-harness-handoff-package.html",
    "label": "Colab handoff package",
    "actual": "ready",
    "expected": "ready",
    "metric": "13 zip entries",
    "evidence": "analysis/cvpr_repo_harness_handoff_package/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_harness_handoff_package.py"
  },
  {
    "surface": "cvpr-repo-harness-execution-dashboard.html",
    "label": "Execution dashboard",
    "actual": "ready",
    "expected": "ready",
    "metric": "8 ready waves",
    "evidence": "analysis/cvpr_repo_harness_execution_dashboard/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_harness_execution_dashboard.py"
  },
  {
    "surface": "cvpr-repo-harness-promotion-board.html",
    "label": "Promotion board",
    "actual": "ready",
    "expected": "ready",
    "metric": "8 promote / 0 hold",
    "evidence": "analysis/cvpr_repo_harness_promotion_board/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_harness_promotion_board.py"
  },
  {
    "surface": "cvpr-repo-harness-promotion-delta.html",
    "label": "Promotion delta",
    "actual": "ready",
    "expected": "ready",
    "metric": "40 ready replacements",
    "evidence": "analysis/cvpr_repo_harness_promotion_delta/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_harness_promotion_delta.py"
  },
  {
    "surface": "cvpr-repo-harness-replacement-receipt.html",
    "label": "Replacement receipt",
    "actual": "ready",
    "expected": "ready",
    "metric": "40 promoted / 40 rollback",
    "evidence": "analysis/cvpr_repo_harness_replacement_receipt/registry.json",
    "command": "python3 scripts/verify_cvpr_repo_harness_replacement_receipt.py"
  }
];
export const nextWaveRows = [
  {
    "theme": "frontier",
    "demo": "Frontier Sensor Fusion Live Evidence Drill",
    "target": "promote live optical-SAR, remote sensing, watermark, provenance, and geospatial grounding repo outputs into inspectable artifacts",
    "surface": "cvpr-frontier-sensor-fusion-bench.html",
    "repoCount": 5
  },
  {
    "theme": "threed",
    "demo": "3D World Reconstruction Evidence Room",
    "target": "turn promoted avatar, dynamic Gaussian, SLAM, low-light, and pruning repos into before/after geometry evidence",
    "surface": "cvpr-3d-world-repo-arena.html",
    "repoCount": 5
  },
  {
    "theme": "video",
    "demo": "Video Temporal Failure Replay Lab",
    "target": "convert promoted temporal repos into replayable HOI, swapping, counterfactual, event, and action-boundary scenarios",
    "surface": "cvpr-video-temporal-repo-lab.html",
    "repoCount": 5
  },
  {
    "theme": "generation",
    "demo": "Generation Control Artifact Studio",
    "target": "promote restoration, diffusion bridge, one-step SR, and artifact containment outputs into controllable demo cases",
    "surface": "cvpr-generation-control-repo-studio.html",
    "repoCount": 5
  },
  {
    "theme": "vlm",
    "demo": "Grounded VLM Evidence Court",
    "target": "bind promoted fusion, privacy, graph reasoning, retrieval, and visual checking repos into adjudicated evidence rows",
    "surface": "cvpr-grounded-vlm-repo-court.html",
    "repoCount": 5
  },
  {
    "theme": "perception",
    "demo": "Perception Parts Stress Bench",
    "target": "turn segmentation, pseudo-label, few-shot, panoramic, and camouflage localization repo outputs into part-level failures",
    "surface": "cvpr-perception-parts-repo-bench.html",
    "repoCount": 5
  },
  {
    "theme": "embodied",
    "demo": "Embodied Control Policy Drill",
    "target": "convert promoted driving, visual RL, manipulation, curriculum, and GUI-agent repos into policy evidence drills",
    "surface": "cvpr-embodied-control-repo-drill.html",
    "repoCount": 5
  },
  {
    "theme": "learning",
    "demo": "Efficient Learning Governor Replay",
    "target": "promote sparsity, pruning, forward-only adaptation, and continual drift repos into runtime governance evidence",
    "surface": "cvpr-efficient-learning-repo-governor.html",
    "repoCount": 5
  }
];
export const receiptSummary = {
  "receipt": "cvpr-repo-harness-replacement-receipt",
  "status": "ready",
  "jobs": 40,
  "readyRows": 40,
  "promotedRows": 40,
  "rollbackRows": 40,
  "carriedEvidence": 40,
  "promotedFromCached": 40,
  "readinessChanged": 0,
  "promotedArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
  "rollbackArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json",
  "sourceDelta": "analysis/cvpr_repo_harness_promotion_delta/registry.json",
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
export const summary = {
  "commandCenter": "cvpr-repo-harness-command-center",
  "status": "operator-ready",
  "surfaces": 8,
  "readySurfaces": 8,
  "jobs": 40,
  "repos": 40,
  "waves": 8,
  "liveValid": 40,
  "intakeIssues": 0,
  "promoteWaves": 8,
  "holdWaves": 0,
  "deltaReadyRows": 40,
  "promotedRows": 40,
  "rollbackRows": 40,
  "nextWaveTargets": 8,
  "promotedArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
  "rollbackArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json",
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
