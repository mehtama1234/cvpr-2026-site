export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "handoff-ready") return "block";
  if (summary.rows !== 40) return "block";
  if (summary.surfaces !== 8) return "block";
  if (summary.zipEntries < 12) return "block";
  if (!summary.zipEntryNames.includes("analysis/cvpr_live_evidence_release_manifest/cvpr_live_evidence_release_manifest.json")) return "block";
  if (!summary.zipEntryNames.includes("analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json")) return "block";
  if (!summary.zipEntryNames.includes("analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json")) return "block";
  return "handoff-ready";
}

export function summarizeBundle(summary) {
  return {
    rows: summary.rows,
    surfaces: summary.surfaces,
    zipEntries: summary.zipEntries,
    status: handoffGate(summary)
  };
}
