export function canaryMetrics(row) {
  const promotionLoad = row.promotion === "promote" ? 1 : 0.55;
  const incidentPressure = row.incidentId === "compound-launch" ? 1.2 : row.incidentId === "adversarial-content" ? 1.0 : 0.75;
  const drift = Math.max(0, Number(((row.after.risk * 0.11 + (100 - row.after.evidence) * 0.07 + incidentPressure * 2) * promotionLoad).toFixed(1)));
  const rollbackRisk = Math.max(0, Number(((row.after.risk * 0.40 + drift * 1.2 + (row.after.resilience < 68 ? 5 : 0)) * promotionLoad).toFixed(1)));
  const trafficPct = row.promotion === "promote" ? 20 : 8;
  return { drift, rollbackRisk, trafficPct };
}

export function canaryStatus(row) {
  const metrics = canaryMetrics(row);
  if (row.promotion === "promote" && metrics.rollbackRisk <= 34 && metrics.drift <= 12) return "clean";
  if (row.promotion === "monitor" && metrics.rollbackRisk <= 36 && metrics.drift <= 12) return "watch";
  return "rollback";
}

export function buildCanaryRows(promotionRows) {
  return promotionRows.map((row) => {
    const metrics = canaryMetrics(row);
    return {
      id: `${row.id}/canary`,
      promotionId: row.id,
      demoId: row.demoId,
      demoTitle: row.demoTitle,
      theme: row.theme,
      page: row.page,
      incidentId: row.incidentId,
      incidentTitle: row.incidentTitle,
      promotion: row.promotion,
      afterDecision: row.afterDecision,
      after: row.after,
      metrics,
      canaryStatus: canaryStatus(row),
      responseCommand: row.promotion === "promote" ? "python3 scripts/verify_cvpr_remediation_promotion_board.py" : "python3 scripts/verify_cvpr_remediation_retest_harness.py"
    };
  });
}

export function summarizeCanaries(rows) {
  return {
    rows: rows.length,
    clean: rows.filter((row) => row.canaryStatus === "clean").length,
    watch: rows.filter((row) => row.canaryStatus === "watch").length,
    rollback: rows.filter((row) => row.canaryStatus === "rollback").length,
    promotedRows: rows.filter((row) => row.promotion === "promote").length,
    monitoredRows: rows.filter((row) => row.promotion === "monitor").length,
    maxRollbackRisk: Math.max(...rows.map((row) => row.metrics.rollbackRisk)),
    maxDrift: Math.max(...rows.map((row) => row.metrics.drift)),
    themes: new Set(rows.map((row) => row.theme)).size,
    incidents: new Set(rows.map((row) => row.incidentId)).size
  };
}
