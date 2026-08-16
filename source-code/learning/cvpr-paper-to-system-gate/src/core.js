export function pct(value) {
  return Number((100 * value).toFixed(1));
}

export function summarizeCoverageAudit(summary) {
  return {
    stage: "coverage-audit",
    title: "Audit CVPR evidence coverage",
    system: "cvpr-paper-to-system-gate",
    totalThemePapers: summary.totalThemePapers,
    totalClusterAssignments: summary.totalClusterAssignments,
    requiredPageCoveragePct: pct(summary.requiredPageCoverage),
    complete: summary.missingRequiredPages.length === 0,
    reusableRule: summary.reusableRule,
    raw: summary
  };
}

export function scoreCandidate(candidate) {
  const scores = Object.values(candidate.scores);
  const mean = scores.reduce((sum, value) => sum + value, 0) / scores.length;
  return Number((100 * mean).toFixed(1));
}

export function summarizePaperGate(summary) {
  const ranked = [...summary.candidates].sort((a, b) => b.readinessScore - a.readinessScore);
  return {
    stage: "paper-gate",
    title: "Score paper-to-product candidates",
    system: "cvpr-paper-to-system-gate",
    candidateCount: summary.candidateCount,
    bestCandidate: summary.bestCandidate,
    topScore: ranked[0].readinessScore,
    decisions: ranked.map((row) => ({ id: row.id, score: scoreCandidate(row), decision: row.decision })),
    reusableRule: summary.reusableRule,
    raw: summary
  };
}

export function summarizeReleaseBoard(summary) {
  const blocked = summary.rankedCandidates.filter((row) => row.decision === "blocked");
  const constrained = summary.rankedCandidates.filter((row) => row.decision === "ready with constraints");
  return {
    stage: "release-board",
    title: "Publish deployment release board",
    system: "cvpr-paper-to-system-gate",
    rankedCandidates: summary.rankedCandidates,
    deployableNow: constrained.length,
    blockedCount: blocked.length,
    needsMoreEvidence: summary.needsMoreEvidence,
    reusableRule: summary.reusableRule,
    raw: summary
  };
}
