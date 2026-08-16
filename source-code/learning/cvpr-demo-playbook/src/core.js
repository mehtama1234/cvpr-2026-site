export function priorityBand(readiness) {
  if (readiness < 50) return "critical";
  if (readiness < 60) return "high";
  return "focused";
}

export function effortEstimate(play) {
  const base = play.priority === "critical" ? 5 : play.priority === "high" ? 4 : 3;
  const scenarioLoad = play.scenario.includes("safety") || play.scenario.includes("adversarial") || play.scenario.includes("clinical") ? 1 : 0;
  return base + scenarioLoad;
}

export function readinessLiftNeeded(play, target = 68) {
  return Number(Math.max(0, target - play.currentReadiness).toFixed(1));
}

export function acceptanceChecklist(play) {
  return [
    `interactive controls: ${play.controlSurface}`,
    `visible instrumentation: ${play.instrumentation}`,
    `arena gate: ${play.acceptanceGate}`,
    `registry link: ${play.cluster} / ${play.scenario}`,
    `test fixture: ${play.slug} readiness lift is measurable`
  ];
}

export function sequencePlaybook(plays) {
  return [...plays]
    .map((play) => ({
      ...play,
      effort: effortEstimate(play),
      liftNeeded: readinessLiftNeeded(play),
      checklist: acceptanceChecklist(play)
    }))
    .sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, focused: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority] || b.liftNeeded - a.liftNeeded || a.effort - b.effort;
    });
}

export function summarizePlaybook(plays) {
  const sequenced = sequencePlaybook(plays);
  return {
    plays: plays.length,
    critical: plays.filter((play) => play.priority === "critical").length,
    high: plays.filter((play) => play.priority === "high").length,
    focused: plays.filter((play) => play.priority === "focused").length,
    clusters: new Set(plays.map((play) => play.cluster)).size,
    scenarios: new Set(plays.map((play) => play.scenario)).size,
    totalLiftNeeded: Number(sequenced.reduce((sum, play) => sum + play.liftNeeded, 0).toFixed(1)),
    firstBuild: sequenced[0],
    sequenced
  };
}
