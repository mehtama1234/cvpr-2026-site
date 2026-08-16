export function releaseGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "release-ready") return "block";
  if (summary.portfolioStatus !== "portfolio-ready") return "block";
  if (summary.commandStatus !== "operator-ready") return "block";
  if (summary.replacementStatus !== "ready") return "block";
  if (summary.deltaStatus !== "ready") return "block";
  if (summary.rows !== 40 || summary.liveRows !== 40 || summary.artifacts !== 40) return "block";
  if (summary.rollbackRows !== 40 || summary.promotedRows !== 40) return "block";
  if (summary.holdDemo !== 0) return "block";
  return "release-ready";
}

export function releasePosture(summary) {
  return {
    releaseReady: releaseGate(summary) === "release-ready",
    demos: summary.surfaces,
    evidenceRows: summary.rows,
    promoted: summary.promoteDemo,
    review: summary.reviewRows,
    shadow: summary.policyShadow,
    canary: summary.canaryDemo,
    rollbackRows: summary.rollbackRows
  };
}
