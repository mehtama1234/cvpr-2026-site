export function laneReady(lane) {
  return lane.status === "covered" &&
    lane.repoCount >= 1 &&
    lane.demoPages.length >= 1 &&
    lane.artifacts >= 3 &&
    lane.controls >= 5;
}

export function summarizeLanes(lanes) {
  return {
    lanes: lanes.length,
    ready: lanes.filter(laneReady).length,
    themes: new Set(lanes.map((lane) => lane.theme)).size,
    repoLinks: lanes.reduce((sum, lane) => sum + lane.repoCount, 0),
    artifacts: lanes.reduce((sum, lane) => sum + lane.artifacts, 0),
    controls: lanes.reduce((sum, lane) => sum + lane.controls, 0)
  };
}

export function drilldownGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "subtheme-drilldown-ready") return "block";
  if (summary.themes !== 8) return "block";
  if (summary.topPaperRepos !== 40) return "block";
  if (summary.subthemeAssignments !== 237) return "block";
  if (summary.uniqueSubthemes < 200) return "block";
  if (summary.readyLanes !== summary.uniqueSubthemes) return "block";
  if (summary.holds !== 0) return "block";
  return "subtheme-drilldown-ready";
}
