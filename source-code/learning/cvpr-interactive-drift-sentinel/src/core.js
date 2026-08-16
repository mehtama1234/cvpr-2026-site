export function checkReady(check) {
  return check.status === "pass" && check.left === check.right;
}

export function summarizeChecks(checks) {
  return {
    checks: checks.length,
    passing: checks.filter(checkReady).length,
    blocked: checks.filter((check) => !checkReady(check)).length,
    categories: new Set(checks.map((check) => check.category)).size
  };
}

export function sentinelGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sentinel-ready") return "block";
  if (summary.checks !== 18) return "block";
  if (summary.passingChecks !== 18) return "block";
  if (summary.blockedChecks !== 0) return "block";
  if (summary.categories !== 3) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "sentinel-ready";
}
