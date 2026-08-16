export function navItemReady(item) {
  return item.status === "linked" &&
    item.pageExists === true &&
    item.registryExists === true &&
    item.packageExists === true &&
    item.validatorExists === true &&
    item.indexLinked === true;
}

export function summarizeNav(items) {
  return {
    items: items.length,
    linked: items.filter(navItemReady).length,
    missing: items.filter((item) => !navItemReady(item)).length
  };
}

export function navGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "nav-audit-ready") return "block";
  if (summary.items !== 11) return "block";
  if (summary.linkedItems !== 11) return "block";
  if (summary.missingItems !== 0) return "block";
  if (summary.handoffItems !== 11) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "nav-audit-ready";
}
