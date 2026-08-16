export function layerReady(layer) {
  return layer.status === layer.readyStatus &&
    layer.pageExists === true &&
    layer.registryExists === true &&
    layer.packageExists === true &&
    layer.validatorExists === true &&
    layer.packageTestExists === true;
}

export function summarizeRelease(layers) {
  return {
    layers: layers.length,
    readyLayers: layers.filter(layerReady).length,
    pages: layers.filter((layer) => layer.pageExists).length,
    registries: layers.filter((layer) => layer.registryExists).length,
    packages: layers.filter((layer) => layer.packageExists).length,
    validators: layers.filter((layer) => layer.validatorExists).length
  };
}

export function releaseGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "release-pack-ready") return "block";
  if (summary.layers !== 4) return "block";
  if (summary.readyLayers !== 4) return "block";
  if (summary.pages !== 4) return "block";
  if (summary.registries !== 4) return "block";
  if (summary.packages !== 4) return "block";
  if (summary.validators !== 4) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.artifacts !== 120) return "block";
  if (summary.controls !== 200) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "release-pack-ready";
}
