export function eventReady(event) {
  return event.status === event.expectedStatus &&
    event.registryExists === true &&
    event.pageExists === true &&
    event.packageExists === true &&
    event.validatorExists === true &&
    event.packageTestExists === true &&
    typeof event.fingerprint === "string" &&
    event.fingerprint.length === 16;
}

export function chainReady(events) {
  return events.length === 5 &&
    events.every(eventReady) &&
    events.every((event, index) => event.sequence === index + 1);
}

export function summarizeLedger(events) {
  return {
    events: events.length,
    readyEvents: events.filter(eventReady).length,
    pages: events.filter((event) => event.pageExists).length,
    registries: events.filter((event) => event.registryExists).length,
    packages: events.filter((event) => event.packageExists).length,
    validators: events.filter((event) => event.validatorExists).length,
    uniqueFingerprints: new Set(events.map((event) => event.fingerprint)).size
  };
}

export function ledgerGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "ledger-ready") return "block";
  if (summary.events !== 5) return "block";
  if (summary.readyEvents !== 5) return "block";
  if (summary.pages !== 5) return "block";
  if (summary.registries !== 5) return "block";
  if (summary.packages !== 5) return "block";
  if (summary.validators !== 5) return "block";
  if (summary.uniqueFingerprints !== 5) return "block";
  if (summary.demos !== 40) return "block";
  if (summary.scenarioCases !== 120) return "block";
  if (summary.promoteDecisions !== 40) return "block";
  if (summary.holds !== 0) return "block";
  return "ledger-ready";
}
