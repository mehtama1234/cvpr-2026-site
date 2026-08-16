# CVPR Live Evidence Handoff Runbook

This bundle captures the live-backed CVPR evidence release.

## Validate

```bash
python3 scripts/validate_cvpr_repo_harness_results.py --results analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json
python3 scripts/verify_cvpr_live_evidence_command_center.py
python3 scripts/validate_cvpr_full_stack.py
```

## Rollback

Use `analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json` to restore cached harness contracts if a promoted live artifact regresses.

## Release State

- rows: 40
- live rows: 40
- smoke passed: 40
- missing artifacts: 0
- hold demos: 0
