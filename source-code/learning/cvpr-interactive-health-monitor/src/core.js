export function probeReady(probe) {
  return probe.status === "pass" &&
    probe.observed === probe.expected;
}

export function summarizeProbes(probes) {
  return {
    probes: probes.length,
    passing: probes.filter(probeReady).length,
    blocked: probes.filter((probe) => !probeReady(probe)).length,
    surfaces: new Set(probes.map((probe) => probe.surface)).size
  };
}

export function monitorGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "monitor-ready") return "block";
  if (summary.surfaces !== 6) return "block";
  if (summary.probes !== 32) return "block";
  if (summary.passingProbes !== 32) return "block";
  if (summary.blockedProbes !== 0) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "monitor-ready";
}
