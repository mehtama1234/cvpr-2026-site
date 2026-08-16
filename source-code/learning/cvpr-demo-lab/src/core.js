export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, value));
}

export function pct(value) {
  return Number((100 * value).toFixed(1));
}

export function scoreDemo(demo, value = demo.value) {
  const v = clamp(Number(value));
  if (demo.kind === "stage") {
    const base = Number(demo.baseScore ?? v);
    const riskBase = Number(demo.baseRisk ?? 25);
    const evidence = Number(demo.evidenceDepth ?? 60);
    return {
      primary: clamp((base * 0.62) + (v * 0.38)),
      secondary: clamp((evidence * 0.72) + (v * 0.28)),
      risk: clamp((riskBase * 0.68) + ((100 - v) * 0.18))
    };
  }
  if (demo.mode === "geometry") return { primary: clamp(70 + v * 0.30), secondary: clamp(84 + v * 0.10), risk: clamp(16 - v * 0.08) };
  if (demo.mode === "localization") return { primary: clamp(78 + v * 0.20), secondary: clamp(82 + v * 0.20), risk: clamp(8 + (100 - v) * 0.04) };
  if (demo.mode === "temporal") return { primary: clamp(72 + v * 0.22), secondary: clamp(84 + v * 0.16), risk: clamp(8 + (100 - v) * 0.06) };
  if (demo.mode === "editing") return { primary: clamp(70 + v * 0.18), secondary: clamp(76 + (100 - v) * 0.12), risk: clamp(12 + v * 0.18) };
  if (demo.mode === "grounding") return { primary: clamp(70 + v * 0.20), secondary: clamp(72 + v * 0.20), risk: clamp(10 + (100 - v) * 0.08) };
  if (demo.mode === "safety") return { primary: clamp(92 - v * 0.10), secondary: clamp(92 - v * 0.05), risk: clamp(6 + v * 0.06) };
  if (demo.mode === "efficiency") return { primary: clamp(78 + v * 0.12), secondary: clamp(78 + v * 0.18), risk: clamp(12 + (100 - v) * 0.06) };
  if (demo.mode === "trust") return { primary: clamp(92 - v * 0.05), secondary: clamp(90 + (100 - v) * 0.08), risk: clamp(6 + v * 0.10) };
  return { primary: v, secondary: clamp(92 - Math.abs(68 - v) * 0.7), risk: clamp(38 - v * 0.28) };
}

export function decision(metrics) {
  if (metrics.risk <= 22 && metrics.primary >= 62 && metrics.secondary >= 55) return "release";
  if (metrics.risk <= 35 && metrics.primary >= 50) return "review";
  return "block";
}

export function summarizeDemo(demo) {
  const metrics = scoreDemo(demo);
  return {
    id: demo.slug,
    kind: demo.kind,
    title: demo.title,
    theme: demo.theme,
    cluster: demo.cluster,
    system: demo.system,
    sourceStage: demo.sourceStage,
    visualMode: demo.visualMode,
    value: demo.value,
    metrics,
    decision: decision(metrics),
    reusableRule: demo.rule
  };
}

export function summarizeLab(demos) {
  const rows = demos.map(summarizeDemo);
  return {
    demos: rows.length,
    flagshipDemos: rows.filter((row) => row.kind === "flagship").length,
    stageDemos: rows.filter((row) => row.kind === "stage").length,
    themes: new Set(rows.map((row) => row.theme)).size,
    clusters: new Set(rows.map((row) => row.cluster)).size,
    systems: new Set(rows.filter((row) => row.kind === "stage").map((row) => row.system)).size,
    visualModes: new Set(demos.map((demo) => demo.visualMode)).size,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    rows
  };
}
