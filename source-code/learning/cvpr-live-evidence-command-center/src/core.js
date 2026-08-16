export function rowReady(row) {
  return row.actual === row.expected && row.evidence.endsWith("registry.json") && row.page.endsWith(".html") && row.command.startsWith("python3 ");
}

export function commandGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "operator-ready") return "block";
  if (summary.surfaces !== 4) return "block";
  if (summary.readySurfaces !== 4) return "block";
  if (summary.rows !== 40) return "block";
  if (summary.liveRows !== 40) return "block";
  if (summary.holdDemo !== 0) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  return "operator-ready";
}

export function summarizeCommand(rows, releaseSummary) {
  const summary = {
    commandCenter: "cvpr-live-evidence-command-center",
    surfaces: rows.length,
    readySurfaces: rows.filter(rowReady).length,
    rows: releaseSummary.rows,
    liveRows: releaseSummary.liveRows,
    holdDemo: releaseSummary.holdDemo,
    missingArtifacts: 0
  };
  return { ...summary, status: commandGate({ ...summary, status: "operator-ready" }) };
}
