export const driftChecks = [
  {
    "category": "command-vs-health",
    "metric": "demos",
    "leftSource": "command-center",
    "rightSource": "health-monitor",
    "left": 40,
    "right": 40,
    "status": "pass"
  },
  {
    "category": "command-vs-health",
    "metric": "artifacts",
    "leftSource": "command-center",
    "rightSource": "health-monitor",
    "left": 120,
    "right": 120,
    "status": "pass"
  },
  {
    "category": "command-vs-health",
    "metric": "controls",
    "leftSource": "command-center",
    "rightSource": "health-monitor",
    "left": 200,
    "right": 200,
    "status": "pass"
  },
  {
    "category": "command-vs-health",
    "metric": "scenarioCases",
    "leftSource": "command-center",
    "rightSource": "health-monitor",
    "left": 120,
    "right": 120,
    "status": "pass"
  },
  {
    "category": "command-vs-health",
    "metric": "promoteDecisions",
    "leftSource": "command-center",
    "rightSource": "health-monitor",
    "left": 40,
    "right": 40,
    "status": "pass"
  },
  {
    "category": "command-vs-health",
    "metric": "holds",
    "leftSource": "command-center",
    "rightSource": "health-monitor",
    "left": 0,
    "right": 0,
    "status": "pass"
  },
  {
    "category": "command-vs-release",
    "metric": "demos",
    "leftSource": "command-center",
    "rightSource": "release-pack",
    "left": 40,
    "right": 40,
    "status": "pass"
  },
  {
    "category": "command-vs-release",
    "metric": "artifacts",
    "leftSource": "command-center",
    "rightSource": "release-pack",
    "left": 120,
    "right": 120,
    "status": "pass"
  },
  {
    "category": "command-vs-release",
    "metric": "controls",
    "leftSource": "command-center",
    "rightSource": "release-pack",
    "left": 200,
    "right": 200,
    "status": "pass"
  },
  {
    "category": "command-vs-release",
    "metric": "scenarioCases",
    "leftSource": "command-center",
    "rightSource": "release-pack",
    "left": 120,
    "right": 120,
    "status": "pass"
  },
  {
    "category": "command-vs-release",
    "metric": "promoteDecisions",
    "leftSource": "command-center",
    "rightSource": "release-pack",
    "left": 40,
    "right": 40,
    "status": "pass"
  },
  {
    "category": "command-vs-release",
    "metric": "holds",
    "leftSource": "command-center",
    "rightSource": "release-pack",
    "left": 0,
    "right": 0,
    "status": "pass"
  },
  {
    "category": "release-vs-ledger",
    "metric": "demos",
    "leftSource": "release-pack",
    "rightSource": "audit-ledger",
    "left": 40,
    "right": 40,
    "status": "pass"
  },
  {
    "category": "release-vs-ledger",
    "metric": "artifacts",
    "leftSource": "release-pack",
    "rightSource": "audit-ledger",
    "left": 120,
    "right": 120,
    "status": "pass"
  },
  {
    "category": "release-vs-ledger",
    "metric": "controls",
    "leftSource": "release-pack",
    "rightSource": "audit-ledger",
    "left": 200,
    "right": 200,
    "status": "pass"
  },
  {
    "category": "release-vs-ledger",
    "metric": "scenarioCases",
    "leftSource": "release-pack",
    "rightSource": "audit-ledger",
    "left": 120,
    "right": 120,
    "status": "pass"
  },
  {
    "category": "release-vs-ledger",
    "metric": "promoteDecisions",
    "leftSource": "release-pack",
    "rightSource": "audit-ledger",
    "left": 40,
    "right": 40,
    "status": "pass"
  },
  {
    "category": "release-vs-ledger",
    "metric": "holds",
    "leftSource": "release-pack",
    "rightSource": "audit-ledger",
    "left": 0,
    "right": 0,
    "status": "pass"
  }
];
export const summary = {
  "sentinel": "cvpr-interactive-drift-sentinel",
  "status": "sentinel-ready",
  "checks": 18,
  "passingChecks": 18,
  "blockedChecks": 0,
  "categories": 3,
  "demos": 40,
  "artifacts": 120,
  "controls": 200,
  "scenarioCases": 120,
  "promoteDecisions": 40,
  "auditEvents": 5,
  "holds": 0,
  "validator": "scripts/verify_cvpr_interactive_drift_sentinel.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
