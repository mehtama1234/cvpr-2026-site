export function releaseGate(summary) {
  return summary.status === "release" &&
    summary.commandStatus === "block" &&
    summary.ledgerStatus === "inspect" &&
    summary.postBlock === 0 &&
    summary.canaryRollback === 0 &&
    summary.rehearsalMisses === 0 &&
    summary.packageTests >= 148 ? "block" : "review";
}

export function riskPosture(summary) {
  if (summary.commandStatus === "block" || summary.ledgerStatus === "inspect") return "review";
  if (summary.canaryRollback === 0 && summary.postBlock === 0 && summary.rehearsalMisses === 0) return "controlled-watch";
  if (summary.canaryRollback > 0 || summary.postBlock > 0) return "rollback-required";
  return "review";
}

export function outcomeLine(summary) {
  return `${summary.gauntletBlocks} gauntlet blocks · ${summary.clearedBlocks} cleared · ${summary.promote} promote · ${summary.monitor} monitor · ${summary.rollbackDrills} rollback drills`;
}
