export function pct(value) {
  return Number((100 * value).toFixed(1));
}

export function summarizeStage(stage) {
  return {
    id: `${stage.system}/${stage.stage}`,
    system: stage.system,
    title: stage.stageTitle,
    theme: stage.theme,
    cluster: stage.cluster,
    score: stage.gateScore,
    risk: stage.residualRiskPct,
    evidenceDepth: stage.evidenceDepthScore,
    decision: stage.decision,
    reusableRule: stage.reusableRule,
    raw: stage
  };
}

export function summarizeSystem(stages) {
  const summaries = stages.map(summarizeStage);
  const avgScore = Number((summaries.reduce((sum, row) => sum + row.score, 0) / summaries.length).toFixed(1));
  const maxRisk = Math.max(...summaries.map((row) => row.risk));
  return {
    system: summaries[0].system,
    title: stages[0].systemTitle,
    theme: summaries[0].theme,
    cluster: summaries[0].cluster,
    stageCount: summaries.length,
    avgScore,
    maxRisk,
    passCount: summaries.filter((row) => row.decision === "pass").length,
    stages: summaries
  };
}
