export function classifyFailure(row) {
  if (row.metrics.risk >= 75) return "risk-containment";
  if (row.metrics.evidence < 50) return "evidence-repair";
  if (row.metrics.readiness < 50) return "readiness-recovery";
  return "review-hardening";
}

export function priorityFor(row) {
  if (row.decision === "block" && row.metrics.risk >= 75) return "critical";
  if (row.decision === "block") return "high";
  return "focused";
}

export function remediationAction(row) {
  const family = classifyFailure(row);
  const metric = family === "risk-containment" ? "risk" : family === "evidence-repair" ? "evidence" : family === "readiness-recovery" ? "readiness" : "resilience";
  const direction = metric === "risk" ? "lower" : "raise";
  return {
    id: `${row.demoId}/${row.incidentId}/${family}`,
    demoId: row.demoId,
    demoTitle: row.demoTitle,
    theme: row.theme,
    page: row.page,
    incidentId: row.incidentId,
    incidentTitle: row.incidentTitle,
    family,
    priority: priorityFor(row),
    metric,
    direction,
    baseline: row.metrics[metric],
    decision: row.decision,
    acceptanceCheck: `${direction} ${metric} under ${row.incidentId} and rerun cvpr-cross-theme-incident-gauntlet`,
    validationCommand: "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py"
  };
}

export function buildRemediationPlan(rows) {
  const actionable = rows.filter((row) => row.decision !== "release").map(remediationAction);
  const sprints = [
    {
      id: "critical-risk-containment",
      title: "Critical risk containment",
      actions: actionable.filter((action) => action.priority === "critical")
    },
    {
      id: "blocked-evidence-repair",
      title: "Blocked evidence repair",
      actions: actionable.filter((action) => action.priority === "high")
    },
    {
      id: "review-hardening",
      title: "Review hardening",
      actions: actionable.filter((action) => action.priority === "focused")
    }
  ];
  return { actionable, sprints };
}

export function summarizeRemediation(rows) {
  const { actionable, sprints } = buildRemediationPlan(rows);
  return {
    sourceRows: rows.length,
    actionableRows: actionable.length,
    blockActions: actionable.filter((action) => action.decision === "block").length,
    reviewActions: actionable.filter((action) => action.decision === "review").length,
    criticalActions: actionable.filter((action) => action.priority === "critical").length,
    highActions: actionable.filter((action) => action.priority === "high").length,
    focusedActions: actionable.filter((action) => action.priority === "focused").length,
    sprints: sprints.length,
    themes: new Set(actionable.map((action) => action.theme)).size,
    incidents: new Set(actionable.map((action) => action.incidentId)).size,
    acceptanceChecks: actionable.filter((action) => action.acceptanceCheck).length
  };
}
