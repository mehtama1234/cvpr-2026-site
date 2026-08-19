export function backlogGate(summary) {
  if (!summary) return "block";
  if (summary.goals !== 8) return "block";
  if (summary.tasks !== 24) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.linkedSystems !== 11) return "block";
  if (summary.proPlusTasks !== 21) return "block";
  if (summary.cachedEvidenceTasks !== 3) return "block";
  if (summary.operatorStatus !== "operator-ready") return "block";
  if (summary.missingEvidence !== 0) return "block";
  return "ready";
}

export function summarizeBacklog(input) {
  const tasks = input.backlogTasks || [];
  const summary = {
    backlog: "cvpr-demo-build-backlog",
    goals: input.roadmap.summary.goals,
    tasks: tasks.length,
    themes: input.roadmap.summary.themes,
    linkedSystems: input.roadmap.summary.linkedSystems,
    proPlusTasks: tasks.filter((task) => task.runtimeEvidence === "colab-pro-plus").length,
    cachedEvidenceTasks: tasks.filter((task) => task.runtimeEvidence === "cached-system-evidence").length,
    missingEvidence: input.roadmap.summary.missingEvidence,
    operatorStatus: input.commandCenter.summary.status
  };
  return { ...summary, status: backlogGate({ ...summary, status: "ready" }) };
}
