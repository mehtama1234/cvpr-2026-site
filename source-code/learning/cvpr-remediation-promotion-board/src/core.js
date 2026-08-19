export function promotionDecision(row) {
  if (row.afterDecision === "release" && row.after.risk <= 42 && row.after.evidence >= 60 && row.after.resilience >= 68) return "promote";
  if (row.afterDecision === "review") return "monitor";
  return "hold";
}

export function promotionReason(row) {
  const decision = promotionDecision(row);
  if (decision === "promote") return "release retest meets risk, evidence, and resilience promotion thresholds";
  if (decision === "monitor") return "block cleared or review improved, but still requires launch monitoring";
  return "post-retest metrics remain outside promotion thresholds";
}

export function buildPromotionRows(retestRows) {
  return retestRows.map((row) => ({
    id: `${row.id}/promotion`,
    retestId: row.id,
    demoId: row.demoId,
    demoTitle: row.demoTitle,
    theme: row.theme,
    page: row.page,
    incidentId: row.incidentId,
    incidentTitle: row.incidentTitle,
    priority: row.priority,
    beforeDecision: row.beforeDecision,
    afterDecision: row.afterDecision,
    after: row.after,
    clearedBlock: row.clearedBlock,
    promotedRelease: row.promotedRelease,
    promotion: promotionDecision(row),
    reason: promotionReason(row),
    verificationCommand: "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  }));
}

export function summarizePromotion(rows) {
  return {
    rows: rows.length,
    promote: rows.filter((row) => row.promotion === "promote").length,
    monitor: rows.filter((row) => row.promotion === "monitor").length,
    hold: rows.filter((row) => row.promotion === "hold").length,
    clearedBlocks: rows.filter((row) => row.clearedBlock).length,
    promotedRelease: rows.filter((row) => row.promotedRelease).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    incidents: new Set(rows.map((row) => row.incidentId)).size,
    maxPromotedRisk: Math.max(...rows.filter((row) => row.promotion === "promote").map((row) => row.after.risk)),
    minPromotedEvidence: Math.min(...rows.filter((row) => row.promotion === "promote").map((row) => row.after.evidence))
  };
}
