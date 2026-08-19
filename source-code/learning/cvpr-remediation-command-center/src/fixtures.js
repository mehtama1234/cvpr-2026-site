export const surfaceRows = [
  {
    "surface": "cvpr-remediation-audit-ledger.html",
    "label": "Audit ledger",
    "actual": "inspect",
    "expected": "complete",
    "metric": "5/7 stages",
    "evidence": "analysis/cvpr_remediation_audit_ledger/registry.json",
    "command": "python3 scripts/verify_cvpr_remediation_audit_ledger.py"
  },
  {
    "surface": "cvpr-gauntlet-remediation-sprint.html",
    "label": "Action sprint",
    "actual": "inspect",
    "expected": "release",
    "metric": "53 actions",
    "evidence": "analysis/cvpr_gauntlet_remediation_sprint/registry.json",
    "command": "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py"
  },
  {
    "surface": "cvpr-remediation-retest-harness.html",
    "label": "Retest harness",
    "actual": "release",
    "expected": "release",
    "metric": "23 cleared blocks",
    "evidence": "analysis/cvpr_remediation_retest_harness/registry.json",
    "command": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "surface": "cvpr-remediation-promotion-board.html",
    "label": "Promotion board",
    "actual": "release",
    "expected": "release",
    "metric": "18 promote / 35 monitor",
    "evidence": "analysis/cvpr_remediation_promotion_board/registry.json",
    "command": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "surface": "cvpr-remediation-canary-monitor.html",
    "label": "Canary monitor",
    "actual": "watching",
    "expected": "watching",
    "metric": "18 clean / 35 watch",
    "evidence": "analysis/cvpr_remediation_canary_monitor/registry.json",
    "command": "python3 scripts/verify_cvpr_remediation_canary_monitor.py"
  },
  {
    "surface": "cvpr-remediation-rollback-drillbook.html",
    "label": "Rollback drillbook",
    "actual": "ready",
    "expected": "ready",
    "metric": "12 drills",
    "evidence": "analysis/cvpr_remediation_rollback_drillbook/registry.json",
    "command": "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py"
  },
  {
    "surface": "cvpr-remediation-rollback-rehearsal-lab.html",
    "label": "Rollback rehearsal lab",
    "actual": "release",
    "expected": "release",
    "metric": "12 passing rehearsals",
    "evidence": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
    "command": "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py"
  }
];
export const ledgerSummary = {
  "demo": "cvpr-remediation-audit-ledger",
  "status": "inspect",
  "stages": 7,
  "readyStages": 5,
  "gauntletRows": 56,
  "gauntletBlocks": 23,
  "actionableRows": 53,
  "clearedBlocks": 23,
  "postBlock": 0,
  "promote": 18,
  "monitor": 35,
  "canaryRollback": 0,
  "rollbackDrills": 12,
  "rehearsals": 12,
  "rehearsalMisses": 0,
  "themes": 8,
  "incidents": 7,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
export const summary = {
  "demo": "cvpr-remediation-command-center",
  "status": "block",
  "surfaces": 7,
  "readySurfaces": 5,
  "gauntletBlocks": 23,
  "actionableRows": 53,
  "clearedBlocks": 23,
  "postBlock": 0,
  "promote": 18,
  "monitor": 35,
  "canaryRollback": 0,
  "rollbackDrills": 12,
  "rehearsalMisses": 0,
  "ledgerStatus": "inspect",
  "themes": 8,
  "incidents": 7,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
