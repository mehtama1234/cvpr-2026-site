export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRepoDemo(row, controls = {}) {
  const d0 = clamp(controls.d0 ?? row.dims[0]);
  const d1 = clamp(controls.d1 ?? row.dims[1]);
  const d2 = clamp(controls.d2 ?? row.dims[2]);
  const d3 = clamp(controls.d3 ?? row.dims[3]);
  const d4 = clamp(controls.d4 ?? row.dims[4]);
  const d5 = clamp(controls.d5 ?? row.dims[5]);
  const primaryRisk = clamp(d0 * 0.28 + d1 * 0.22 + d2 * 0.18 + d3 * 0.12 + d4 * 0.10 + d5 * 0.10);
  const evidenceRisk = clamp(d1 * 0.18 + d3 * 0.24 + d4 * 0.22 + d5 * 0.20 + d0 * 0.10 + d2 * 0.06);
  const runtimeRisk = clamp(d4 * 0.30 + d3 * 0.18 + d2 * 0.16 + d5 * 0.14 + d0 * 0.12 + d1 * 0.10);
  const readiness = clamp(100 - primaryRisk * 0.38 - evidenceRisk * 0.28 - runtimeRisk * 0.24);
  return { dims: [d0, d1, d2, d3, d4, d5], primaryRisk: Number(primaryRisk.toFixed(1)), evidenceRisk: Number(evidenceRisk.toFixed(1)), runtimeRisk: Number(runtimeRisk.toFixed(1)), readiness: Number(readiness.toFixed(1)) };
}

export function repoDecision(metrics) {
  if (metrics.readiness >= 62 && metrics.primaryRisk <= 45 && metrics.evidenceRisk <= 48) return "release";
  if (metrics.readiness >= 44 && metrics.primaryRisk <= 72) return "review";
  return "block";
}

export function evaluateCase(row, paper, controls = {}) {
  const metrics = scoreRepoDemo(row, controls);
  return { id: row.id, title: row.title, paperTitle: paper.title, repo: paper.repo, tags: paper.tags, dims: row.dims, labels: row.labels, metrics, decision: repoDecision(metrics), operatorAction: row.operatorAction };
}

export function summarizeRows(rows) {
  return {
    cases: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    repoBackedRows: rows.filter((row) => row.repo && row.repo.startsWith("http")).length,
    maxPrimaryRisk: Number(Math.max(...rows.map((row) => row.metrics.primaryRisk)).toFixed(1)),
    maxEvidenceRisk: Number(Math.max(...rows.map((row) => row.metrics.evidenceRisk)).toFixed(1)),
    minReadiness: Number(Math.min(...rows.map((row) => row.metrics.readiness)).toFixed(1))
  };
}
