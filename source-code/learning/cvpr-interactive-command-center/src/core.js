export function surfaceReady(surface) {
  return surface.status === surface.readyStatus &&
    surface.pageExists === true &&
    surface.registryExists === true &&
    surface.validatorExists === true;
}

export function summarizeSurfaces(surfaces) {
  return {
    surfaces: surfaces.length,
    readySurfaces: surfaces.filter(surfaceReady).length,
    pages: surfaces.filter((surface) => surface.pageExists).length,
    registries: surfaces.filter((surface) => surface.registryExists).length,
    validators: surfaces.filter((surface) => surface.validatorExists).length
  };
}

export function commandGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "command-center-ready") return "block";
  if (summary.surfaces !== 6) return "block";
  if (summary.readySurfaces !== 6) return "block";
  if (summary.pages !== 6) return "block";
  if (summary.registries !== 6) return "block";
  if (summary.validators !== 6) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.artifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.auditEvents !== 5) return "block";
  if (summary.holds !== 0) return "block";
  return "command-center-ready";
}
