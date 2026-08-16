export function releaseGate(summary) {
  return summary.status === "release" &&
    summary.commandStatus === "operator-ready" &&
    summary.ledgerStatus === "complete" &&
    summary.postBlock === 0 &&
    summary.canaryRollback === 0 &&
    summary.rehearsalMisses === 0 &&
    summary.fullStackStatus === "valid" ? "release" : "block";
}

export function riskPosture(summary) {
  if (summary.canaryRollback === 0 && summary.postBlock === 0 && summary.rehearsalMisses === 0) return "controlled-watch";
  if (summary.canaryRollback > 0 || summary.postBlock > 0) return "rollback-required";
  return "review";
}

export function outcomeLine(summary) {
  return `${summary.gauntletBlocks} gauntlet blocks · ${summary.clearedBlocks} cleared · ${summary.promote} promote · ${summary.monitor} monitor · ${summary.rollbackDrills} rollback drills`;
}
