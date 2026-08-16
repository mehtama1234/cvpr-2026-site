# CVPR Colab Pro+ Runbook

This is the production handoff for using Google Colab Pro+ as the GPU execution plane for the CVPR demo stack. The local static site remains the control plane; downloaded JSON artifacts are the evidence plane.

## Runtime Contract

- Runtime plane: `google-colab-pro-plus`
- Notebook: `notebooks/cvpr_gpu_worker.ipynb`
- Result artifact: `source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json`
- Live export intake: `source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json`
- Expected jobs: `10`
- Expected cached results: `40`
- Local import validator: `scripts/validate_cvpr_colab_results.py`
- Live intake gate: `scripts/stage_cvpr_live_colab_export.py`
- Full release validator: `scripts/validate_cvpr_full_stack.py`

## Colab Pro+ Run

1. Open `notebooks/cvpr_gpu_worker.ipynb` in Google Colab.
2. Select a GPU runtime. Prefer L4 or A100 for temporal rollout, constraint generation, driving safety, metric geometry, and Gaussian Splatting jobs.
3. Run the manifest cell and confirm `RUN_MANIFEST["runtimePlane"] == "google-colab-pro-plus"`.
4. For `open-vocab-grounding`, run the GroundingDINO/SigLIP cells. Set `require_real_models=True` when refreshing release evidence so model download or runtime failures stop the job instead of using fallback metrics.
5. For `restoration-fidelity`, run the Swin2SR restoration cells with `require_real_models=True` when refreshing release evidence.
6. For `adversarial-provenance`, run the CLIP provenance probe cells with `require_real_models=True` when refreshing release evidence.
7. For `temporal-rollout`, run the RAFT optical-flow rollout cells with `require_real_models=True` when refreshing release evidence.
8. For `clinical-shift`, run the Torch clinical embedding/calibration cells with `require_real_models=True` when refreshing release evidence.
9. For `compute-serving`, run the Torch serving latency profiler cells with `require_real_models=True` when refreshing release evidence.
10. For `constraint-generation`, run the Torch layout/identity/reward probe cells with `require_real_models=True` when refreshing release evidence.
11. For `driving-safety`, run the Torch driving scene/risk probe cells with `require_real_models=True` when refreshing release evidence.
12. For `metric-geometry`, run the Torch metric geometry probe cells with `require_real_models=True` when refreshing release evidence.
13. For `gaussian-splatting`, run the Torch Gaussian Splatting render probe cells with `require_real_models=True` when refreshing release evidence.
14. Run the final live export contract cell and confirm it prints `status: valid`.
15. Download `cvpr_gpu_results.json`.
16. Place it at `source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json`.
17. Run `python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json`.
18. If the intake report is valid, promote it with `python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --promote`.
19. Run `python3 scripts/validate_cvpr_colab_results.py`.
20. Run `python3 scripts/validate_cvpr_full_stack.py`.
21. Open `cvpr-validation-center.html`, `cvpr-colab-live-intake.html`, and `cvpr-colab-release-bundle.html` and confirm the release gates remain valid.

## Job Manifest

| Priority | Job | Bench | Cases | Runtime modes |
| --- | --- | --- | ---: | --- |
| 1 | `open-vocab-grounding` | `cvpr-long-tail-grounding-bench` | 4 | simulated, cached-real, live-colab |
| 2 | `restoration-fidelity` | `cvpr-restoration-fidelity-bench` | 4 | simulated, cached-real, live-colab |
| 3 | `adversarial-provenance` | `cvpr-adversarial-provenance-bench` | 4 | simulated, cached-real, live-colab |
| 4 | `temporal-rollout` | `cvpr-temporal-rollout-bench` | 4 | simulated, cached-real, live-colab |
| 5 | `clinical-shift` | `cvpr-clinical-shift-bench` | 4 | simulated, cached-real, live-colab |
| 6 | `compute-serving` | `cvpr-compute-serving-bench` | 4 | simulated, cached-real, live-colab |
| 7 | `constraint-generation` | `cvpr-constraint-generation-bench` | 4 | simulated, cached-real, live-colab |
| 8 | `driving-safety` | `cvpr-driving-safety-bench` | 4 | simulated, cached-real, live-colab |
| 9 | `metric-geometry` | `cvpr-metric-geometry-bench` | 4 | simulated, cached-real, live-colab |
| 10 | `gaussian-splatting` | `cvpr-gaussian-splatting-bench` | 4 | simulated, cached-real, live-colab |

## Acceptance Gate

The live run is acceptable only when the notebook export contract has `status: valid`, the intake report has `issues: 0`, every manifest job has its expected case count, every staged result has `mode: live-colab`, and every result provenance reports `runtime: google-colab-pro-plus` with GPU acceleration. Promotion converts accepted live rows to the canonical offline mode `cached-real` while preserving `provenance.promotedFrom: live-colab`; after promotion, the canonical import report must also have `issues: 0` and the full-stack validator must remain valid.
