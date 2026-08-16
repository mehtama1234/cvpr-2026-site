export function blueprintReady(row) {
  return row.repoPapers >= 3 &&
    row.themeRepoCount > 0 &&
    row.systems.length > 0 &&
    row.demoSurface.endsWith(".html") &&
    row.command === "python3 scripts/validate_cvpr_full_stack.py";
}

export function forgeGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ready") return "block";
  if (summary.blueprints !== 8) return "block";
  if (summary.readyBlueprints !== 8) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.repoPapers < 32) return "block";
  if (summary.undercoveredThemes !== 4) return "block";
  return "ready";
}

export function summarizeForge(rows) {
  const summary = {
    blueprints: rows.length,
    readyBlueprints: rows.filter(blueprintReady).length,
    themes: new Set(rows.map((row) => row.theme)).size,
    repoPapers: rows.reduce((sum, row) => sum + row.repoPapers, 0),
    undercoveredThemes: rows.filter((row) => row.priority === "undercovered").length
  };
  return { ...summary, status: forgeGate({ ...summary, status: "ready" }) };
}
