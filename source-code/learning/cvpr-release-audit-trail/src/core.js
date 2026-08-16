export function eventReady(event) {
  return Boolean(event.evidence && event.command && event.status && event.status !== "block" && event.status !== "alert");
}

export function auditGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "complete") return "block";
  if (summary.events !== 58) return "block";
  if (summary.readyEvents !== 58) return "block";
  if (summary.launchEvents !== 8) return "block";
  if (summary.manifestEvents !== 13) return "block";
  if (summary.changeEvents !== 13) return "block";
  if (summary.dependencyEvents !== 15) return "block";
  if (summary.monitorEvents !== 9) return "block";
  if (summary.fullStackStatus !== "valid") return "block";
  return "complete";
}

export function summarizeAudit(input) {
  const events = input.events || [];
  const summary = {
    audit: "cvpr-release-audit-trail",
    events: events.length,
    readyEvents: events.filter(eventReady).length,
    launchEvents: events.filter((event) => event.group === "launch").length,
    manifestEvents: events.filter((event) => event.group === "manifest").length,
    changeEvents: events.filter((event) => event.group === "change-control").length,
    dependencyEvents: events.filter((event) => event.group === "dependency").length,
    monitorEvents: events.filter((event) => event.group === "monitoring").length,
    fullStackStatus: input.validation.summary.status
  };
  return { ...summary, status: auditGate({ ...summary, status: "complete" }) };
}
