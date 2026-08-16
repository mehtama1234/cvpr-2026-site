export function manifestGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "sealed") return "block";
  if (summary.artifacts !== 13) return "block";
  if (summary.missingArtifacts !== 0) return "block";
  if (summary.launchStatus !== "launch-ready") return "block";
  if (summary.releaseGate !== "release") return "block";
  if (summary.sloStatus !== "release") return "block";
  if (summary.drillbookStatus !== "ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.packageTests < 47) return "block";
  return "sealed";
}

export function summarizeManifest(input) {
  const summary = {
    manifest: "cvpr-release-manifest",
    artifacts: input.artifacts.length,
    missingArtifacts: input.artifacts.filter((artifact) => !artifact.exists).length,
    launchStatus: input.launch.summary.status,
    releaseGate: input.brief.summary.gate,
    sloStatus: input.slos.summary.status,
    drillbookStatus: input.drills.summary.status,
    fullStackStatus: input.validation.summary.status,
    packageTests: input.validation.summary.packageTests
  };
  return { ...summary, status: manifestGate({ ...summary, status: "sealed" }) };
}
