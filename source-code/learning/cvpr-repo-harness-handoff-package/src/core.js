export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.jobs !== 40) return "block";
  if (summary.waves !== 8) return "block";
  if (summary.intakeIssues !== 0) return "block";
  if (summary.notebookCells < 3) return "block";
  if (!summary.zipEntries.includes("notebooks/cvpr_repo_harness_worker.ipynb")) return "block";
  if (!summary.zipEntries.includes("source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py")) return "block";
  if (!summary.zipEntries.includes("scripts/validate_cvpr_repo_harness_results.py")) return "block";
  return "ready";
}

export function summarizeHandoff(input) {
  return {
    handoff: "cvpr-repo-harness-handoff-package",
    jobs: input.worker.summary.jobs,
    waves: input.waves.summary.waves,
    intakeIssues: input.intake.summary.issues,
    notebookCells: input.notebookCells,
    zipEntries: input.zipEntries,
    firstWave: input.first.summary.theme
  };
}
