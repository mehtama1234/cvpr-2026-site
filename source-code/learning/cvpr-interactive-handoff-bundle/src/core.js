export function handoffItemReady(item) {
  return item.status === "sealed" &&
    item.pageExists === true &&
    item.registryExists === true &&
    item.packageExists === true &&
    item.validatorExists === true &&
    item.packageTestExists === true;
}

export function summarizeHandoff(items) {
  return {
    items: items.length,
    sealed: items.filter(handoffItemReady).length,
    pages: items.filter((item) => item.pageExists).length,
    registries: items.filter((item) => item.registryExists).length,
    packages: items.filter((item) => item.packageExists).length,
    validators: items.filter((item) => item.validatorExists).length,
    packageTests: items.filter((item) => item.packageTestExists).length
  };
}

export function handoffGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "handoff-ready") return "block";
  if (summary.items !== 11) return "block";
  if (summary.sealedItems !== 11) return "block";
  if (summary.pages !== 11) return "block";
  if (summary.registries !== 11) return "block";
  if (summary.packages !== 11) return "block";
  if (summary.validators !== 11) return "block";
  if (summary.packageTests !== 11) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.holds !== 0) return "block";
  return "handoff-ready";
}
