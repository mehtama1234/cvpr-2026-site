export function targetMinutes(drill) {
  if (drill.severity === "critical") return 18;
  if (drill.severity === "high") return 28;
  return 40;
}

export function rehearsalSteps(drill) {
  const critical = drill.severity === "critical";
  const high = drill.severity === "high";
  return [
    { step: "detect", minutes: critical ? 3 : high ? 4 : 6 },
    { step: "freeze-traffic", minutes: critical ? 4 : high ? 5 : 7 },
    { step: "demote-or-cap", minutes: critical ? 3 : high ? 5 : 8 },
    { step: "rerun-response", minutes: critical ? 5 : high ? 8 : 11 },
    { step: "full-stack-validate", minutes: critical ? 3 : high ? 5 : 7 }
  ];
}

export function rehearseDrill(drill) {
  const steps = rehearsalSteps(drill);
  const elapsedMinutes = steps.reduce((sum, step) => sum + step.minutes, 0);
  const target = targetMinutes(drill);
  return {
    id: `${drill.id}/rehearsal`,
    drillId: drill.id,
    demoId: drill.demoId,
    demoTitle: drill.demoTitle,
    theme: drill.theme,
    page: drill.page,
    incidentId: drill.incidentId,
    incidentTitle: drill.incidentTitle,
    severity: drill.severity,
    promotion: drill.promotion,
    trigger: drill.trigger,
    steps,
    elapsedMinutes,
    targetMinutes: target,
    validationCommand: drill.validationCommand,
    responseCommand: drill.responseCommand,
    rehearsalStatus: elapsedMinutes <= target && drill.validationCommand ? "pass" : "miss"
  };
}

export function summarizeRehearsals(rows) {
  return {
    rehearsals: rows.length,
    passing: rows.filter((row) => row.rehearsalStatus === "pass").length,
    misses: rows.filter((row) => row.rehearsalStatus === "miss").length,
    critical: rows.filter((row) => row.severity === "critical").length,
    high: rows.filter((row) => row.severity === "high").length,
    focused: rows.filter((row) => row.severity === "focused").length,
    maxElapsedMinutes: Math.max(...rows.map((row) => row.elapsedMinutes)),
    maxTargetMinutes: Math.max(...rows.map((row) => row.targetMinutes)),
    themes: new Set(rows.map((row) => row.theme)).size,
    incidents: new Set(rows.map((row) => row.incidentId)).size
  };
}
