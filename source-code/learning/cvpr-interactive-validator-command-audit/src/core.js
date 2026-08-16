export function commandReady(row) {
  return row.status === "command-ready" &&
    row.builderPresent === true &&
    row.verifierPresent === true &&
    row.builderExists === true &&
    row.verifierExists === true;
}

export function summarizeCommands(rows) {
  return {
    targets: rows.length,
    ready: rows.filter(commandReady).length,
    missing: rows.filter((row) => !commandReady(row)).length,
    commands: rows.reduce((sum, row) => sum + Number(row.builderPresent) + Number(row.verifierPresent), 0)
  };
}

export function commandAuditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "command-audit-ready") return "block";
  if (summary.targets !== 13) return "block";
  if (summary.readyTargets !== 13) return "block";
  if (summary.missingTargets !== 0) return "block";
  if (summary.commandsPresent !== 26) return "block";
  if (summary.handoffItems !== 11) return "block";
  if (summary.holds !== 0) return "block";
  return "command-audit-ready";
}
