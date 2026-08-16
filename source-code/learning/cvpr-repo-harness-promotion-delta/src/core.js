export function deltaReady(row) {
  return row.cachedMode === "cached-harness-contract" &&
    row.liveMode === "live-colab" &&
    row.repoMatch === true &&
    row.replaceable === true &&
    row.liveSmokePassed === true &&
    row.promotionDecision === "promote";
}

export function summarizeDelta(rows) {
  const summary = {
    delta: "cvpr-repo-harness-promotion-delta",
    jobs: rows.length,
    readyRows: rows.filter(deltaReady).length,
    modeChanges: rows.filter((row) => row.cachedMode !== row.liveMode).length,
    replaceableContracts: rows.filter((row) => row.replaceable === true).length,
    readinessChanged: rows.filter((row) => row.readinessDelta !== 0).length,
    promoteRows: rows.filter((row) => row.promotionDecision === "promote").length,
    holdRows: rows.filter((row) => row.promotionDecision !== "promote").length
  };
  return { ...summary, status: summary.readyRows === 40 && summary.jobs === 40 ? "ready" : "block" };
}
