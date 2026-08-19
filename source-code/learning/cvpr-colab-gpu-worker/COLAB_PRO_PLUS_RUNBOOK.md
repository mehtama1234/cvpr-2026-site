# CVPR Colab Pro+ Runbook

This is the production handoff for using Google Colab Pro+ as the GPU execution plane for the CVPR demo stack. The local static site remains the control plane; downloaded JSON artifacts are the evidence plane.

## Runtime Contract

- Runtime plane: `google-colab-pro-plus`
- Notebook: `notebooks/cvpr_gpu_worker.ipynb`
- Result artifact: `source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json`
- Live export intake: `source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json`
- Expected jobs: `14`
- Expected cached results: `56`
- Local import validator: `scripts/validate_cvpr_colab_results.py`
- Live intake gate: `scripts/stage_cvpr_live_colab_export.py`
- Full release validator: `scripts/validate_cvpr_full_stack.py`

## Colab Pro+ Run

1. Open `notebooks/cvpr_gpu_worker.ipynb` in Google Colab.
2. Select a GPU runtime. Prefer L4 or A100 for temporal rollout, constraint generation, driving safety, metric geometry, and Gaussian Splatting jobs.
3. Run the manifest cell and confirm `RUN_MANIFEST["runtimePlane"] == "google-colab-pro-plus"`.
4. Run the notebook-native job cells as written. The notebook uses `require_real_models=True`, stops on CPU, and rejects deterministic fallback rows at export time.
5. For `open-vocab-grounding`, run the GroundingDINO/SigLIP cells.
6. For `restoration-fidelity`, run the Swin2SR restoration cells.
7. For `adversarial-provenance`, run the CLIP provenance probe cells.
8. For `temporal-rollout`, run the RAFT optical-flow rollout cells.
9. For `clinical-shift`, run the Torch clinical embedding/calibration cells.
10. For `compute-serving`, run the Torch serving latency profiler cells.
11. For `constraint-generation`, run the Torch layout/identity/reward probe cells.
12. For `driving-safety`, run the Torch driving scene/risk probe cells.
13. For `metric-geometry`, run the Torch metric geometry probe cells.
14. For `gaussian-splatting`, run the Torch Gaussian Splatting render probe cells.
15. Refresh the external live worker lanes for `depth-normal-consistency`, `corruption-robustness`, `prompt-segmentation-robustness`, and `video-identity-tracking` with their dedicated live worker scripts when you need a full 14-job promotion.
16. Merge the notebook-native results and those 4 external live worker lanes into the staged live export artifact.
17. Run the final live export contract cell and confirm it prints `status: valid` for the notebook-native portion.
18. Download `cvpr_gpu_results.json`.
19. Place it at `source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json`.
20. Run `python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json`.
21. If the intake report is valid, promote it with `python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --promote`.
22. Run `python3 scripts/validate_cvpr_colab_results.py`.
23. Run `python3 scripts/validate_cvpr_full_stack.py`.
24. Open `cvpr-validation-center.html`, `cvpr-colab-live-intake.html`, and `cvpr-colab-release-bundle.html` and confirm the release gates remain valid.

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
| 9 | `depth-normal-consistency` | `cvpr-depth-normal-consistency-bench` | 4 | simulated, cached-real, live-colab |
| 10 | `corruption-robustness` | `cvpr-corruption-robustness-bench` | 4 | simulated, cached-real, live-colab |
| 11 | `prompt-segmentation-robustness` | `cvpr-prompt-segmentation-robustness-bench` | 4 | simulated, cached-real, live-colab |
| 12 | `video-identity-tracking` | `cvpr-video-identity-tracking-bench` | 4 | simulated, cached-real, live-colab |
| 13 | `metric-geometry` | `cvpr-metric-geometry-bench` | 4 | simulated, cached-real, live-colab |
| 14 | `gaussian-splatting` | `cvpr-gaussian-splatting-bench` | 4 | simulated, cached-real, live-colab |

## Acceptance Gate

The live run is acceptable only when the notebook export contract has `status: valid`, the intake report has `issues: 0`, every manifest job has its expected case count, every staged result has `mode: live-colab`, and every result provenance reports `runtime: google-colab-pro-plus` with GPU acceleration. Promotion converts accepted live rows to the canonical offline mode `cached-real` while preserving `provenance.promotedFrom: live-colab`; after promotion, the canonical import report must also have `issues: 0` and the full-stack validator must remain valid.
