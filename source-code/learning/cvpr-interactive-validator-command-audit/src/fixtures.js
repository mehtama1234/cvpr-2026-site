export const commandRows = [
  {
    "target": "coverage",
    "builder": "scripts/build_cvpr_interactive_coverage_portfolio.py",
    "verifier": "scripts/verify_cvpr_interactive_coverage_portfolio.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "console",
    "builder": "scripts/build_cvpr_interactive_console.py",
    "verifier": "scripts/verify_cvpr_interactive_console.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "scenario-runner",
    "builder": "scripts/build_cvpr_interactive_scenario_runner.py",
    "verifier": "scripts/verify_cvpr_interactive_scenario_runner.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "triage-board",
    "builder": "scripts/build_cvpr_interactive_triage_board.py",
    "verifier": "scripts/verify_cvpr_interactive_triage_board.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "release-pack",
    "builder": "scripts/build_cvpr_interactive_release_pack.py",
    "verifier": "scripts/verify_cvpr_interactive_release_pack.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "audit-ledger",
    "builder": "scripts/build_cvpr_interactive_audit_ledger.py",
    "verifier": "scripts/verify_cvpr_interactive_audit_ledger.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "command-center",
    "builder": "scripts/build_cvpr_interactive_command_center.py",
    "verifier": "scripts/verify_cvpr_interactive_command_center.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "health-monitor",
    "builder": "scripts/build_cvpr_interactive_health_monitor.py",
    "verifier": "scripts/verify_cvpr_interactive_health_monitor.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "drift-sentinel",
    "builder": "scripts/build_cvpr_interactive_drift_sentinel.py",
    "verifier": "scripts/verify_cvpr_interactive_drift_sentinel.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "rollback-drillbook",
    "builder": "scripts/build_cvpr_interactive_rollback_drillbook.py",
    "verifier": "scripts/verify_cvpr_interactive_rollback_drillbook.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "rollback-rehearsal",
    "builder": "scripts/build_cvpr_interactive_rollback_rehearsal_lab.py",
    "verifier": "scripts/verify_cvpr_interactive_rollback_rehearsal_lab.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "navigation-manifest-audit",
    "builder": "scripts/build_cvpr_interactive_navigation_manifest_audit.py",
    "verifier": "scripts/verify_cvpr_interactive_navigation_manifest_audit.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  },
  {
    "target": "package-integrity-audit",
    "builder": "scripts/build_cvpr_interactive_package_integrity_audit.py",
    "verifier": "scripts/verify_cvpr_interactive_package_integrity_audit.py",
    "builderPresent": true,
    "verifierPresent": true,
    "builderExists": true,
    "verifierExists": true,
    "status": "command-ready"
  }
];
export const summary = {
  "audit": "cvpr-interactive-validator-command-audit",
  "status": "command-audit-ready",
  "sourceHandoff": "analysis/cvpr_interactive_handoff_bundle/registry.json",
  "targets": 13,
  "readyTargets": 13,
  "missingTargets": 0,
  "commandsPresent": 26,
  "handoffItems": 11,
  "demos": 40,
  "scenarioCases": 120,
  "promoteDecisions": 40,
  "holds": 0,
  "validator": "scripts/verify_cvpr_interactive_validator_command_audit.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
