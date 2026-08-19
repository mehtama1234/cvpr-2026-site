export function graphGate(summary) {
  if (!summary) return "block";
  if (summary.nodes !== 15) return "block";
  if (summary.edges !== 19) return "block";
  if (summary.rootNodes !== 1) return "block";
  if (summary.terminalNodes !== 1) return "block";
  if (summary.changeControlStatus !== "controlled") return "block";
  if (summary.manifestStatus !== "sealed") return "block";
  if (summary.launchStatus !== "launch-ready") return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "ready";
}

export function summarizeGraph(input) {
  const nodes = input.nodes || [];
  const edges = nodes.reduce((sum, node) => sum + node.dependsOn.length, 0);
  const depended = new Set(nodes.flatMap((node) => node.dependsOn));
  const summary = {
    graph: "cvpr-release-dependency-graph",
    nodes: nodes.length,
    edges,
    rootNodes: nodes.filter((node) => node.dependsOn.length === 0).length,
    terminalNodes: nodes.filter((node) => !depended.has(node.id)).length,
    phases: new Set(nodes.map((node) => node.phase)).size,
    changeControlStatus: input.changeControl.summary.status,
    manifestStatus: input.manifest.summary.status,
    launchStatus: input.launch.summary.status,
    fullStackStatus: input.validation.summary.status
  };
  return { ...summary, status: graphGate({ ...summary, status: "ready" }) };
}
