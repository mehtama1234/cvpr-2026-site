export function filterRows(rows, filters = {}) {
  const theme = filters.theme || "all";
  const wave = filters.wave || "all";
  const query = (filters.query || "").trim().toLowerCase();
  return rows.filter((row) => {
    const themeMatch = theme === "all" || row.theme === theme;
    const waveMatch = wave === "all" || row.wave === wave;
    const queryMatch = !query ||
      row.repo.toLowerCase().includes(query) ||
      row.jobId.toLowerCase().includes(query) ||
      row.theme.toLowerCase().includes(query);
    return themeMatch && waveMatch && queryMatch;
  });
}

export function selectRow(rows, jobId) {
  return rows.find((row) => row.jobId === jobId) || rows[0] || null;
}

export function panelPayload(row, panel) {
  if (!row) return "";
  if (panel === "input") return `${row.repo} input fixture from ${row.theme} / ${row.wave}`;
  if (panel === "output") return `${row.repo} cached output is backed by ${row.localArtifacts} local artifacts`;
  if (panel === "failure") return `${row.repo} failure probe: unsupported inputs, stale artifacts, or runtime drift`;
  if (panel === "artifacts") return row.artifactPaths.join("\n");
  if (panel === "replay") return row.replayCommand;
  return row.status;
}

export function consoleSummary(rows) {
  return {
    demos: rows.length,
    themes: new Set(rows.map((row) => row.theme)).size,
    waves: new Set(rows.map((row) => row.wave)).size,
    localArtifacts: rows.reduce((sum, row) => sum + row.localArtifacts, 0),
    controls: rows.reduce((sum, row) => sum + row.controls, 0),
    readyRows: rows.filter((row) => row.status === "interactive-ready" && row.runtimeController).length,
    holds: rows.filter((row) => row.releaseAction !== "promote-interactive-demo").length
  };
}

export function consoleGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "console-ready") return "block";
  if (summary.demos !== 40) return "block";
  if (summary.themes !== 8) return "block";
  if (summary.waves !== 5) return "block";
  if (summary.localArtifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.readyRows !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "console-ready";
}
