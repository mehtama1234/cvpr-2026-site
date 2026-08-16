export const rollbackDrills = [
  {
    "drillId": "interactive-rollback-01",
    "category": "command-vs-health",
    "trigger": "count-drift",
    "owner": "interactive-release-operator",
    "action": "Rebuild command center, health monitor, and drift sentinel, then rerun full-stack validation.",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "expectedHold": 0,
    "status": "armed"
  },
  {
    "drillId": "interactive-rollback-02",
    "category": "command-vs-release",
    "trigger": "release-drift",
    "owner": "interactive-release-operator",
    "action": "Rebuild release pack from command center evidence and reseal drift sentinel.",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "expectedHold": 0,
    "status": "armed"
  },
  {
    "drillId": "interactive-rollback-03",
    "category": "release-vs-ledger",
    "trigger": "audit-drift",
    "owner": "interactive-release-operator",
    "action": "Rebuild audit ledger fingerprints and reseal release pack references.",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "expectedHold": 0,
    "status": "armed"
  },
  {
    "drillId": "interactive-rollback-04",
    "category": "health-monitor",
    "trigger": "probe-block",
    "owner": "interactive-release-operator",
    "action": "Rebuild the failed surface, rerun health monitor, and keep release on hold until probes clear.",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "expectedHold": 0,
    "status": "armed"
  },
  {
    "drillId": "interactive-rollback-05",
    "category": "triage-board",
    "trigger": "decision-regression",
    "owner": "interactive-release-operator",
    "action": "Move affected demos to retest, rerun scenario runner, then regenerate triage.",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "expectedHold": 0,
    "status": "armed"
  },
  {
    "drillId": "interactive-rollback-06",
    "category": "full-stack",
    "trigger": "validation-regression",
    "owner": "interactive-release-operator",
    "action": "Run full-stack validator, inspect failing step, and block promotion until status returns valid.",
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "expectedHold": 0,
    "status": "armed"
  }
];
export const summary = {
  "drillbook": "cvpr-interactive-rollback-drillbook",
  "status": "drillbook-ready",
  "drills": 6,
  "armedDrills": 6,
  "driftChecks": 18,
  "blockedChecks": 0,
  "healthBlocked": 0,
  "triageRetest": 0,
  "demos": 40,
  "scenarioCases": 120,
  "promoteDecisions": 40,
  "holds": 0,
  "validator": "scripts/verify_cvpr_interactive_rollback_drillbook.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
