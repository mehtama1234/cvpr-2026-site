export function receiptReady(row) {
  return row.beforeMode === "cached-harness-contract" &&
    row.afterMode === "live-colab" &&
    row.rollbackMode === "cached-harness-contract" &&
    row.repoMatch === true &&
    row.evidenceCarried === true &&
    row.promotionDecision === "promote";
}

export function summarizeReceipt(rows) {
  const readyRows = rows.filter(receiptReady).length;
  const summary = {
    receipt: "cvpr-repo-harness-replacement-receipt",
    jobs: rows.length,
    readyRows,
    promotedRows: rows.filter((row) => row.afterMode === "live-colab").length,
    rollbackRows: rows.filter((row) => row.rollbackMode === "cached-harness-contract").length,
    carriedEvidence: rows.filter((row) => row.evidenceCarried === true).length,
    promotedFromCached: rows.filter((row) => row.beforeMode !== row.afterMode).length
  };
  return { ...summary, status: summary.jobs === 40 && readyRows === 40 ? "ready" : "block" };
}
