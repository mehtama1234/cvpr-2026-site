export function sprintGate(summary) {
  if (!summary) return "block";
  if (summary.sprints !== 3) return "block";
  if (summary.tasks !== summary.sourceBlockTasks) return "block";
  if (summary.assignedTasks !== summary.tasks) return "block";
  if (summary.criticalTasks !== summary.boardCriticalTasks) return "block";
  if (summary.highTasks !== summary.boardHighTasks) return "block";
  if (summary.focusedTasks !== summary.boardFocusedTasks) return "block";
  if (summary.acceptanceChecks !== summary.tasks) return "block";
  if (summary.operationsStatus !== "ready") return "block";
  return "ready";
}

export function summarizeSprintPlan(input) {
  return {
    plan: "cvpr-remediation-sprint-plan",
    sourceBlockTasks: input.board.summary.blockTasks,
    sprints: input.sprints.length,
    tasks: input.tasks.length,
    assignedTasks: input.sprints.reduce((sum, sprint) => sum + sprint.tasks.length, 0),
    boardCriticalTasks: input.board.summary.criticalTasks,
    boardHighTasks: input.board.summary.highTasks,
    boardFocusedTasks: input.board.summary.focusedTasks,
    criticalTasks: input.tasks.filter((task) => task.priority === "critical").length,
    highTasks: input.tasks.filter((task) => task.priority === "high").length,
    focusedTasks: input.tasks.filter((task) => task.priority === "focused").length,
    acceptanceChecks: input.sprints.reduce((sum, sprint) => sum + sprint.tasks.filter((task) => task.acceptanceCheck).length, 0),
    families: new Set(input.tasks.map((task) => task.family)).size,
    systems: new Set(input.tasks.map((task) => task.system)).size,
    operationsStatus: input.operations.summary.status,
    packageTests: input.operations.summary.packageTests
  };
}
