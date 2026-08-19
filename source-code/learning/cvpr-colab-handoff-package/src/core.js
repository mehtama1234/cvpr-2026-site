export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.runners <= 0) return "block";
  if (summary.expectedResults <= 0) return "block";
  if (summary.importIssues !== 0) return "block";
  if (summary.notebookCells < 21) return "block";
  if (!summary.exportContract) return "block";
  if (!summary.zipEntries.includes("notebooks/cvpr_gpu_worker.ipynb")) return "block";
  if (!summary.zipEntries.includes("source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md")) return "block";
  return "ready";
}

export function summarizeHandoff(input) {
  const worker = input.worker.summary;
  const imported = input.importReport.summary;
  return {
    handoff: "cvpr-colab-handoff-package",
    jobs: imported.jobs,
    runners: imported.validJobs,
    expectedResults: imported.expectedResults,
    importIssues: imported.issues,
    notebook: worker.notebook,
    runbook: worker.runbook,
    liveExportArtifact: worker.liveExportArtifact,
    intakeGate: worker.liveIntakeGate,
    notebookCells: input.notebookCells,
    exportContract: input.exportContract,
    zipEntries: input.zipEntries
  };
}
