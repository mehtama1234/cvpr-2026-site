export const surfaceRows = [
  {
    "label": "Live evidence portfolio",
    "page": "cvpr-live-evidence-portfolio.html",
    "actual": "portfolio-ready",
    "expected": "portfolio-ready",
    "metric": "8 surfaces / 40 rows",
    "evidence": "analysis/cvpr_live_evidence_portfolio/registry.json",
    "command": "python3 scripts/verify_cvpr_live_evidence_portfolio.py"
  },
  {
    "label": "Release brief",
    "page": "cvpr-live-evidence-release-brief.html",
    "actual": "release-ready",
    "expected": "release-ready",
    "metric": "40 promoted / 40 rollback",
    "evidence": "analysis/cvpr_live_evidence_release_brief/registry.json",
    "command": "python3 scripts/verify_cvpr_live_evidence_release_brief.py"
  },
  {
    "label": "Release manifest",
    "page": "cvpr-live-evidence-release-manifest.html",
    "actual": "manifest-ready",
    "expected": "manifest-ready",
    "metric": "8 packages / 8 verifiers",
    "evidence": "analysis/cvpr_live_evidence_release_manifest/registry.json",
    "command": "python3 scripts/verify_cvpr_live_evidence_release_manifest.py"
  },
  {
    "label": "Coverage audit",
    "page": "cvpr-live-evidence-coverage-audit.html",
    "actual": "coverage-complete",
    "expected": "coverage-complete",
    "metric": "8 themes / 0 missing",
    "evidence": "analysis/cvpr_live_evidence_coverage_audit/registry.json",
    "command": "python3 scripts/verify_cvpr_live_evidence_coverage_audit.py"
  }
];
export const releaseSummary = {
  "commandCenter": "cvpr-live-evidence-command-center",
  "status": "operator-ready",
  "surfaces": 4,
  "readySurfaces": 4,
  "rows": 40,
  "liveRows": 40,
  "smokePassed": 40,
  "artifacts": 40,
  "promoteDemo": 24,
  "reviewRows": 9,
  "policyShadow": 5,
  "canaryDemo": 2,
  "holdDemo": 0,
  "missingArtifacts": 0,
  "releaseBriefStatus": "release-ready",
  "manifestStatus": "manifest-ready",
  "coverageStatus": "coverage-complete",
  "portfolioStatus": "portfolio-ready",
  "promotedArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
  "rollbackArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json",
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
export const summary = {
  "commandCenter": "cvpr-live-evidence-command-center",
  "status": "operator-ready",
  "surfaces": 4,
  "readySurfaces": 4,
  "rows": 40,
  "liveRows": 40,
  "smokePassed": 40,
  "artifacts": 40,
  "promoteDemo": 24,
  "reviewRows": 9,
  "policyShadow": 5,
  "canaryDemo": 2,
  "holdDemo": 0,
  "missingArtifacts": 0,
  "releaseBriefStatus": "release-ready",
  "manifestStatus": "manifest-ready",
  "coverageStatus": "coverage-complete",
  "portfolioStatus": "portfolio-ready",
  "promotedArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json",
  "rollbackArtifact": "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json",
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
