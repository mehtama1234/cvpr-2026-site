export function layerSealed(layer) {
  return layer.status === layer.readyStatus &&
    layer.pageExists === true &&
    layer.registryExists === true &&
    layer.packageExists === true &&
    layer.validatorExists === true &&
    layer.packageTestExists === true;
}

export function summarizeSeal(layers) {
  return {
    layers: layers.length,
    sealed: layers.filter(layerSealed).length,
    pages: layers.filter((layer) => layer.pageExists).length,
    registries: layers.filter((layer) => layer.registryExists).length,
    packages: layers.filter((layer) => layer.packageExists).length,
    validators: layers.filter((layer) => layer.validatorExists).length,
    packageTests: layers.filter((layer) => layer.packageTestExists).length
  };
}

export function closeoutGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "closeout-ready") return "block";
  if (summary.layers !== 11) return "block";
  if (summary.sealedLayers !== 11) return "block";
  if (summary.pages !== 11) return "block";
  if (summary.registries !== 11) return "block";
  if (summary.packages !== 11) return "block";
  if (summary.validators !== 11) return "block";
  if (summary.packageTests !== 11) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "closeout-ready";
}
