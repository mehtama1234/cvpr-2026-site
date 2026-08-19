# CVPR Safety Deployment Simulator

Stress deployment of the driving VLA release gate across rollout contexts with Pro+ driving evidence and clinical-shift residual risk.

Operator flow:
- `python3 scripts/run_cvpr_safety_deployment_flow.py`
- `python3 scripts/run_colab_live_demo.py clinical-shift`
- `python3 scripts/run_colab_live_demo.py driving-safety`
- `python3 scripts/build_cvpr_live_colab_export_from_analysis.py`
- `python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --job clinical-shift --promote`
- `python3 scripts/stage_cvpr_live_colab_export.py --export source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json --job driving-safety --promote`
