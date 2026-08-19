export function deltaGate(summary) {
  if (!summary) return "block";
  if (summary.cases <= 0) return "block";
  if (summary.jobs <= 0) return "block";
  if (summary.missing !== 0) return "block";
  if (summary.modeMismatches !== 0) return "block";
  if (summary.regressions !== 0) return "block";
  if (summary.maxReadinessDrop < -0.5) return "block";
  return "release";
}

export function summarizeDelta(input) {
  const regressions = input.rows.filter((row) => row.regression).length;
  const maxReadinessDrop = Math.min(...input.rows.map((row) => row.readinessDelta));
  return {
    delta: "cvpr-colab-promotion-delta",
    cases: input.rows.length,
    jobs: new Set(input.rows.map((row) => row.jobId)).size,
    missing: input.missing.length,
    modeMismatches: input.modeMismatches.length,
    regressions,
    maxReadinessDrop
  };
}
