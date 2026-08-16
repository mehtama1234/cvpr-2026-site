export function boardGate(summary) {
  if (!summary) return "block";
  if (summary.blockTasks !== summary.sourceBlockTasks) return "block";
  if (summary.unownedTasks !== 0) return "block";
  if (summary.controlledTasks !== summary.blockTasks) return "block";
  if (summary.playbookPlays !== 8) return "block";
  if (summary.coveredThemes !== 8) return "block";
  if (summary.receiptStatus !== "ready") return "block";
  return "ready";
}

export function summarizeBoard(input) {
  return {
    board: "cvpr-remediation-board",
    sourceBlockTasks: input.failureAtlas.summary.block,
    blockTasks: input.tasks.length,
    criticalTasks: input.tasks.filter((task) => task.priority === "critical").length,
    highTasks: input.tasks.filter((task) => task.priority === "high").length,
    unownedTasks: input.tasks.filter((task) => !task.owner || !task.page).length,
    controlledTasks: input.tasks.filter((task) => task.controls.length > 0 && task.acceptanceAction).length,
    families: new Set(input.tasks.map((task) => task.family)).size,
    systems: new Set(input.tasks.map((task) => task.system)).size,
    playbookPlays: input.playbook.summary.plays,
    coveredThemes: input.themeMatrix.summary.coveredThemes,
    receiptStatus: input.receipt.summary.status,
    receiptArtifacts: input.receipt.summary.evidenceArtifacts
  };
}
