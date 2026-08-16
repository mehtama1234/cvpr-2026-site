export function resealGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sealed") return "block";
  if (summary.rows !== 6) return "block";
  if (summary.sealedRows !== 6) return "block";
  if (summary.secondRoundDemos !== 5) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.packageTests < 80) return "block";
  return "sealed";
}

export function summarizeReseal(rows, sources) {
  const summary = {
    rows: rows.length,
    sealedRows: rows.filter((row) => row.status === "sealed").length,
    secondRoundDemos: rows.filter((row) => row.kind !== "validation").length,
    fullStackStatus: sources.validation.summary.status,
    packageTests: sources.validation.summary.packageTests
  };
  return { ...summary, status: resealGate({ ...summary, status: "sealed" }) };
}
