# CVPR Repo Harness Colab Pro+ Runbook

1. Open `notebooks/cvpr_repo_harness_worker.ipynb` in Google Colab Pro+.
2. Upload or mount the `cvpr-2026-site` workspace.
3. Run one wave at a time with `python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5`.
4. Replace `--start` with `5, 10, 15, 20, 25, 30, 35` for later waves.
5. Download or save `source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json`.
6. Validate locally with `python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json`.
7. Rebuild intake and full stack with `python3 scripts/build_cvpr_repo_harness_live_intake.py` and `python3 scripts/validate_cvpr_full_stack.py`.
