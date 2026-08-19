export const replayInput = {
  "worker": {
    "summary": {
      "worker": "cvpr-colab-gpu-worker",
      "runtimePlane": "google-colab-pro-plus",
      "controlPlane": "local-static-cvpr-site",
      "resultPlane": "registry-and-cached-json",
      "jobs": 14,
      "liveCapable": 14,
      "promotedRunners": 14,
      "runnerRows": 14,
      "cachedCapable": 14,
      "cachedResults": 56,
      "validCachedResults": 56,
      "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
      "notebookNativeJobs": 10,
      "externalLiveJobs": 4,
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
      "importValidator": "scripts/validate_cvpr_colab_results.py",
      "validationReport": "analysis/cvpr_colab_gpu_worker/import_validation.json",
      "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
      "liveIntakeGate": "scripts/stage_cvpr_live_colab_export.py",
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
      "fullStackReport": "analysis/cvpr_full_stack_validation/registry.json",
      "status": "interactive-contract"
    },
    "jobs": [
      {
        "id": "open-vocab-grounding",
        "title": "Open-vocabulary grounding GPU run",
        "bench": "cvpr-long-tail-grounding-bench",
        "page": "cvpr-long-tail-grounding-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "siglip-base-patch16-224",
          "grounding-dino-tiny",
          "sam-vit-b"
        ],
        "inputs": [
          "image",
          "text_query",
          "candidate_regions"
        ],
        "outputs": [
          "boxes",
          "region_scores",
          "embedding_scores",
          "localized_evidence"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 1
      },
      {
        "id": "restoration-fidelity",
        "title": "Restoration fidelity GPU run",
        "bench": "cvpr-restoration-fidelity-bench",
        "page": "cvpr-restoration-fidelity-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "swinir-lightweight",
          "real-esrgan-x2"
        ],
        "inputs": [
          "degraded_image",
          "degradation_controls"
        ],
        "outputs": [
          "restored_image",
          "artifact_map",
          "downstream_score"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 2
      },
      {
        "id": "adversarial-provenance",
        "title": "Adversarial provenance GPU run",
        "bench": "cvpr-adversarial-provenance-bench",
        "page": "cvpr-adversarial-provenance-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "watermark-detector",
          "clip-perturbation-probe"
        ],
        "inputs": [
          "image",
          "attack_controls",
          "watermark_controls"
        ],
        "outputs": [
          "provenance_confidence",
          "attack_heatmap",
          "leakage_risk"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 3
      },
      {
        "id": "temporal-rollout",
        "title": "Temporal rollout GPU run",
        "bench": "cvpr-temporal-rollout-bench",
        "page": "cvpr-temporal-rollout-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "video-feature-tracker",
          "raft-lite",
          "world-rollout-probe"
        ],
        "inputs": [
          "video_clip",
          "tracking_controls"
        ],
        "outputs": [
          "identity_tracks",
          "contact_events",
          "drift_curve"
        ],
        "gpuClass": "L4/A100",
        "priority": 4
      },
      {
        "id": "clinical-shift",
        "title": "Clinical shift validation GPU run",
        "bench": "cvpr-clinical-shift-bench",
        "page": "cvpr-clinical-shift-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "dicom-embedding-shift-probe",
          "temperature-calibration-head",
          "uncertainty-triage-head"
        ],
        "inputs": [
          "medical_image_batch",
          "site_metadata",
          "review_controls"
        ],
        "outputs": [
          "domain_embeddings",
          "calibration_curve",
          "triage_scores",
          "clinical_evidence"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 5
      },
      {
        "id": "compute-serving",
        "title": "Compute constrained serving GPU run",
        "bench": "cvpr-compute-serving-bench",
        "page": "cvpr-compute-serving-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "quantized-vision-encoder",
          "student-router",
          "latency-profiler"
        ],
        "inputs": [
          "image_batch",
          "serving_controls",
          "escalation_policy"
        ],
        "outputs": [
          "latency_profile",
          "quality_floor",
          "routing_trace",
          "retained_evidence"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 6
      },
      {
        "id": "constraint-generation",
        "title": "Constraint preserving generation GPU run",
        "bench": "cvpr-constraint-generation-bench",
        "page": "cvpr-constraint-generation-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "layout-controlnet",
          "identity-embedding-lock",
          "preference-reward-probe"
        ],
        "inputs": [
          "source_image",
          "edit_prompt",
          "constraint_controls"
        ],
        "outputs": [
          "edited_image",
          "layout_mask",
          "identity_embedding_delta",
          "reward_trace"
        ],
        "gpuClass": "L4/A100",
        "priority": 7
      },
      {
        "id": "driving-safety",
        "title": "Driving safety closed-loop GPU run",
        "bench": "cvpr-driving-safety-bench",
        "page": "cvpr-driving-safety-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "vla-scene-grounder",
          "ttc-risk-head",
          "safety-rule-monitor"
        ],
        "inputs": [
          "driving_clip",
          "hazard_controls",
          "action_confidence"
        ],
        "outputs": [
          "scene_grounding_map",
          "time_to_collision",
          "risk_trace",
          "rule_violations"
        ],
        "gpuClass": "L4/A100",
        "priority": 8
      },
      {
        "id": "depth-normal-consistency",
        "title": "Depth-normal consistency GPU run",
        "bench": "cvpr-depth-normal-consistency-bench",
        "page": "cvpr-depth-normal-consistency-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "torch-cuda-depth-normal-probe",
          "finite-difference-normal-consistency"
        ],
        "inputs": [
          "depth_map",
          "normal_controls",
          "scene_geometry"
        ],
        "outputs": [
          "normal_map",
          "consistency_curve",
          "depth_residual_map",
          "surface_alerts"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 9
      },
      {
        "id": "corruption-robustness",
        "title": "Corruption robustness GPU run",
        "bench": "cvpr-corruption-robustness-bench",
        "page": "cvpr-corruption-robustness-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "torchvision-resnet18",
          "clean-corrupted-logit-delta"
        ],
        "inputs": [
          "image_batch",
          "corruption_controls",
          "severity_schedule"
        ],
        "outputs": [
          "feature_retention",
          "label_drift_curve",
          "confidence_collapse",
          "corruption_report"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 10
      },
      {
        "id": "prompt-segmentation-robustness",
        "title": "Prompt segmentation robustness GPU run",
        "bench": "cvpr-prompt-segmentation-robustness-bench",
        "page": "cvpr-prompt-segmentation-robustness-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "torchvision-maskrcnn-resnet50-fpn",
          "mask-rcnn-click-robustness-proxy"
        ],
        "inputs": [
          "image",
          "prompt_points",
          "prompt_variants"
        ],
        "outputs": [
          "mask_predictions",
          "click_sensitivity",
          "iou_trace",
          "prompt_failure_map"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 11
      },
      {
        "id": "video-identity-tracking",
        "title": "Video identity tracking GPU run",
        "bench": "cvpr-video-identity-tracking-bench",
        "page": "cvpr-video-identity-tracking-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "torch-cuda-centroid-assignment-tracker",
          "mask-sequence-identity-drift"
        ],
        "inputs": [
          "video_clip",
          "identity_seed",
          "tracking_controls"
        ],
        "outputs": [
          "track_sequence",
          "identity_drift_curve",
          "handoff_events",
          "failure_frames"
        ],
        "gpuClass": "T4/L4/A100",
        "priority": 12
      },
      {
        "id": "metric-geometry",
        "title": "Metric geometry GPU run",
        "bench": "cvpr-metric-geometry-bench",
        "page": "cvpr-metric-geometry-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "torch-pose-bundle-adjuster",
          "metric-scale-probe",
          "surface-consistency-head"
        ],
        "inputs": [
          "multi_view_images",
          "camera_controls",
          "scale_controls"
        ],
        "outputs": [
          "pose_graph",
          "scale_trace",
          "surface_residual_map",
          "topology_warnings"
        ],
        "gpuClass": "L4/A100",
        "priority": 9
      },
      {
        "id": "gaussian-splatting",
        "title": "Gaussian Splatting GPU run",
        "bench": "cvpr-gaussian-splatting-bench",
        "page": "cvpr-gaussian-splatting-bench.html",
        "runtimeModes": [
          "simulated",
          "cached-real",
          "live-colab"
        ],
        "models": [
          "torch-splat-renderer",
          "semantic-splat-attach",
          "provenance-trace-head"
        ],
        "inputs": [
          "scene_views",
          "splat_controls",
          "edit_controls"
        ],
        "outputs": [
          "novel_view_renders",
          "semantic_splat_map",
          "provenance_trace",
          "edit_leakage_report"
        ],
        "gpuClass": "L4/A100",
        "priority": 10
      }
    ],
    "runnerCoverage": [
      {
        "jobId": "open-vocab-grounding",
        "caseSymbol": "GROUNDING_CASES",
        "loader": "load_open_vocab_models",
        "runner": "run_open_vocab_grounding_batch",
        "execution": "transformers-grounding-dino-siglip",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "restoration-fidelity",
        "caseSymbol": "RESTORATION_CASES",
        "loader": "load_restoration_models",
        "runner": "run_restoration_fidelity_batch",
        "execution": "transformers-swin2sr-restoration",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "adversarial-provenance",
        "caseSymbol": "ADVERSARIAL_CASES",
        "loader": "load_adversarial_models",
        "runner": "run_adversarial_provenance_batch",
        "execution": "transformers-clip-provenance-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "temporal-rollout",
        "caseSymbol": "TEMPORAL_CASES",
        "loader": "load_temporal_models",
        "runner": "run_temporal_rollout_batch",
        "execution": "torchvision-raft-temporal-flow",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "clinical-shift",
        "caseSymbol": "CLINICAL_CASES",
        "loader": "load_clinical_models",
        "runner": "run_clinical_shift_batch",
        "execution": "torch-clinical-shift-embedding-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "compute-serving",
        "caseSymbol": "COMPUTE_CASES",
        "loader": "load_compute_models",
        "runner": "run_compute_serving_batch",
        "execution": "torch-serving-latency-profiler",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "constraint-generation",
        "caseSymbol": "CONSTRAINT_CASES",
        "loader": "load_constraint_models",
        "runner": "run_constraint_generation_batch",
        "execution": "torch-layout-identity-reward-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "driving-safety",
        "caseSymbol": "DRIVING_CASES",
        "loader": "load_driving_models",
        "runner": "run_driving_safety_batch",
        "execution": "torch-driving-scene-risk-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "depth-normal-consistency",
        "caseSymbol": "DEPTH_NORMAL_CASES",
        "loader": "load_depth_normal_models",
        "runner": "run_depth_normal_consistency_batch",
        "execution": "torch-cuda-depth-normal-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "corruption-robustness",
        "caseSymbol": "CORRUPTION_CASES",
        "loader": "load_corruption_models",
        "runner": "run_corruption_robustness_batch",
        "execution": "torchvision-resnet-corruption-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "prompt-segmentation-robustness",
        "caseSymbol": "PROMPT_SEGMENTATION_CASES",
        "loader": "load_prompt_segmentation_models",
        "runner": "run_prompt_segmentation_robustness_batch",
        "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "video-identity-tracking",
        "caseSymbol": "VIDEO_TRACKING_CASES",
        "loader": "load_video_tracking_models",
        "runner": "run_video_identity_tracking_batch",
        "execution": "torch-cuda-video-tracking-live-demo",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "metric-geometry",
        "caseSymbol": "GEOMETRY_CASES",
        "loader": "load_metric_geometry_models",
        "runner": "run_metric_geometry_batch",
        "execution": "torch-metric-geometry-probe",
        "strictMode": "require_real_models=True"
      },
      {
        "jobId": "gaussian-splatting",
        "caseSymbol": "SPLATTING_CASES",
        "loader": "load_gaussian_splatting_models",
        "runner": "run_gaussian_splatting_batch",
        "execution": "torch-gaussian-splatting-render-probe",
        "strictMode": "require_real_models=True"
      }
    ],
    "notebookNativeJobIds": [
      "open-vocab-grounding",
      "restoration-fidelity",
      "adversarial-provenance",
      "temporal-rollout",
      "clinical-shift",
      "compute-serving",
      "constraint-generation",
      "driving-safety",
      "metric-geometry",
      "gaussian-splatting"
    ],
    "externalLiveJobIds": [
      "depth-normal-consistency",
      "corruption-robustness",
      "prompt-segmentation-robustness",
      "video-identity-tracking"
    ],
    "runManifest": {
      "runtimePlane": "google-colab-pro-plus",
      "controlPlane": "local-static-cvpr-site",
      "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "jobs": [
        {
          "jobId": "open-vocab-grounding",
          "bench": "cvpr-long-tail-grounding-bench",
          "page": "cvpr-long-tail-grounding-bench.html",
          "priority": 1,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "siglip-base-patch16-224",
            "grounding-dino-tiny",
            "sam-vit-b"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
          "resultFilter": {
            "jobId": "open-vocab-grounding",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "restoration-fidelity",
          "bench": "cvpr-restoration-fidelity-bench",
          "page": "cvpr-restoration-fidelity-bench.html",
          "priority": 2,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "swinir-lightweight",
            "real-esrgan-x2"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
          "resultFilter": {
            "jobId": "restoration-fidelity",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "adversarial-provenance",
          "bench": "cvpr-adversarial-provenance-bench",
          "page": "cvpr-adversarial-provenance-bench.html",
          "priority": 3,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "watermark-detector",
            "clip-perturbation-probe"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
          "resultFilter": {
            "jobId": "adversarial-provenance",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "temporal-rollout",
          "bench": "cvpr-temporal-rollout-bench",
          "page": "cvpr-temporal-rollout-bench.html",
          "priority": 4,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "video-feature-tracker",
            "raft-lite",
            "world-rollout-probe"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
          "resultFilter": {
            "jobId": "temporal-rollout",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "clinical-shift",
          "bench": "cvpr-clinical-shift-bench",
          "page": "cvpr-clinical-shift-bench.html",
          "priority": 5,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "dicom-embedding-shift-probe",
            "temperature-calibration-head",
            "uncertainty-triage-head"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
          "resultFilter": {
            "jobId": "clinical-shift",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "compute-serving",
          "bench": "cvpr-compute-serving-bench",
          "page": "cvpr-compute-serving-bench.html",
          "priority": 6,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "quantized-vision-encoder",
            "student-router",
            "latency-profiler"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
          "resultFilter": {
            "jobId": "compute-serving",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "constraint-generation",
          "bench": "cvpr-constraint-generation-bench",
          "page": "cvpr-constraint-generation-bench.html",
          "priority": 7,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "layout-controlnet",
            "identity-embedding-lock",
            "preference-reward-probe"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
          "resultFilter": {
            "jobId": "constraint-generation",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "driving-safety",
          "bench": "cvpr-driving-safety-bench",
          "page": "cvpr-driving-safety-bench.html",
          "priority": 8,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "vla-scene-grounder",
            "ttc-risk-head",
            "safety-rule-monitor"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
          "resultFilter": {
            "jobId": "driving-safety",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "depth-normal-consistency",
          "bench": "cvpr-depth-normal-consistency-bench",
          "page": "cvpr-depth-normal-consistency-bench.html",
          "priority": 9,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-cuda-depth-normal-probe",
            "finite-difference-normal-consistency"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_depth_normal_consistency_bench/registry.json",
          "resultFilter": {
            "jobId": "depth-normal-consistency",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "corruption-robustness",
          "bench": "cvpr-corruption-robustness-bench",
          "page": "cvpr-corruption-robustness-bench.html",
          "priority": 10,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torchvision-resnet18",
            "clean-corrupted-logit-delta"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_corruption_robustness_bench/registry.json",
          "resultFilter": {
            "jobId": "corruption-robustness",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "prompt-segmentation-robustness",
          "bench": "cvpr-prompt-segmentation-robustness-bench",
          "page": "cvpr-prompt-segmentation-robustness-bench.html",
          "priority": 11,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torchvision-maskrcnn-resnet50-fpn",
            "mask-rcnn-click-robustness-proxy"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_prompt_segmentation_robustness_bench/registry.json",
          "resultFilter": {
            "jobId": "prompt-segmentation-robustness",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "video-identity-tracking",
          "bench": "cvpr-video-identity-tracking-bench",
          "page": "cvpr-video-identity-tracking-bench.html",
          "priority": 12,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-cuda-centroid-assignment-tracker",
            "mask-sequence-identity-drift"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_video_identity_tracking_bench/registry.json",
          "resultFilter": {
            "jobId": "video-identity-tracking",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "metric-geometry",
          "bench": "cvpr-metric-geometry-bench",
          "page": "cvpr-metric-geometry-bench.html",
          "priority": 13,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-pose-bundle-adjuster",
            "metric-scale-probe",
            "surface-consistency-head"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
          "resultFilter": {
            "jobId": "metric-geometry",
            "mode": "cached-real"
          }
        },
        {
          "jobId": "gaussian-splatting",
          "bench": "cvpr-gaussian-splatting-bench",
          "page": "cvpr-gaussian-splatting-bench.html",
          "priority": 14,
          "runtimeModes": [
            "simulated",
            "cached-real",
            "live-colab"
          ],
          "models": [
            "torch-splat-renderer",
            "semantic-splat-attach",
            "provenance-trace-head"
          ],
          "expectedCases": 4,
          "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
          "resultFilter": {
            "jobId": "gaussian-splatting",
            "mode": "cached-real"
          }
        }
      ]
    },
    "cachedResults": [
      {
        "jobId": "open-vocab-grounding",
        "caseId": "common-clean",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:01:17Z",
        "model": {
          "embedding": "google/siglip-base-patch16-224",
          "detector": "IDEA-Research/grounding-dino-tiny"
        },
        "inputs": {
          "textQuery": "teal rectangle.",
          "controls": {
            "queryRarity": 18,
            "distractorOverlap": 16,
            "boxAmbiguity": 18,
            "evidenceThreshold": 54
          },
          "asset": "synthetic://common-clean"
        },
        "outputs": {
          "boxes": [
            {
              "label": "teal rectangle",
              "xywh": [
                0.178,
                0.216,
                0.305,
                0.288
              ],
              "score": 0.742
            },
            {
              "label": "teal rectangle",
              "xywh": [
                0.512,
                0.255,
                0.272,
                0.266
              ],
              "score": 0.417
            }
          ],
          "regionScores": {
            "target": 26.8,
            "longTail": 39.7
          },
          "embeddingScore": 8.3,
          "localizedEvidence": 50.2
        },
        "metrics": {
          "readiness": 48.0,
          "proposalRecall": 74.2,
          "textRegionScore": 26.8,
          "longTailRecall": 39.7,
          "localizedEvidence": 50.2,
          "unsupportedRisk": 21.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench",
          "execution": "transformers-grounding-dino-siglip-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "rare-visible",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:01:18Z",
        "model": {
          "embedding": "google/siglip-base-patch16-224",
          "detector": "IDEA-Research/grounding-dino-tiny"
        },
        "inputs": {
          "textQuery": "teal target rectangle.",
          "controls": {
            "queryRarity": 66,
            "distractorOverlap": 12,
            "boxAmbiguity": 34,
            "evidenceThreshold": 62
          },
          "asset": "synthetic://rare-visible"
        },
        "outputs": {
          "boxes": [
            {
              "label": "teal target rectangle",
              "xywh": [
                0.178,
                0.216,
                0.305,
                0.288
              ],
              "score": 0.752
            },
            {
              "label": "teal target rectangle",
              "xywh": [
                0.522,
                0.256,
                0.273,
                0.266
              ],
              "score": 0.381
            }
          ],
          "regionScores": {
            "target": 26.7,
            "longTail": 43.2
          },
          "embeddingScore": 7.8,
          "localizedEvidence": 52.2
        },
        "metrics": {
          "readiness": 49.4,
          "proposalRecall": 75.2,
          "textRegionScore": 26.7,
          "longTailRecall": 43.2,
          "localizedEvidence": 52.2,
          "unsupportedRisk": 21.2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench",
          "execution": "transformers-grounding-dino-siglip-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "rare-distractors",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:01:18Z",
        "model": {
          "embedding": "google/siglip-base-patch16-224",
          "detector": "IDEA-Research/grounding-dino-tiny"
        },
        "inputs": {
          "textQuery": "teal target rectangle near orange distractor.",
          "controls": {
            "queryRarity": 78,
            "distractorOverlap": 28,
            "boxAmbiguity": 28,
            "evidenceThreshold": 76
          },
          "asset": "synthetic://rare-distractors"
        },
        "outputs": {
          "boxes": [
            {
              "label": "teal target rectangle orange distract",
              "xywh": [
                0.177,
                0.216,
                0.307,
                0.289
              ],
              "score": 0.794
            },
            {
              "label": "orange distractor",
              "xywh": [
                0.484,
                0.257,
                0.273,
                0.266
              ],
              "score": 0.587
            }
          ],
          "regionScores": {
            "target": 93.1,
            "longTail": 85.2
          },
          "embeddingScore": 98.4,
          "localizedEvidence": 84.5
        },
        "metrics": {
          "readiness": 88.0,
          "proposalRecall": 79.4,
          "textRegionScore": 93.1,
          "longTailRecall": 85.2,
          "localizedEvidence": 84.5,
          "unsupportedRisk": 8.9
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench",
          "execution": "transformers-grounding-dino-siglip-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "unsupported-query",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:01:18Z",
        "model": {
          "embedding": "google/siglip-base-patch16-224",
          "detector": "IDEA-Research/grounding-dino-tiny"
        },
        "inputs": {
          "textQuery": "transparent glass elephant.",
          "controls": {
            "queryRarity": 82,
            "distractorOverlap": 30,
            "boxAmbiguity": 32,
            "evidenceThreshold": 84
          },
          "asset": "synthetic://unsupported-query"
        },
        "outputs": {
          "boxes": [
            {
              "label": "transparent glass elephant",
              "xywh": [
                0.178,
                0.216,
                0.304,
                0.288
              ],
              "score": 0.606
            },
            {
              "label": "transparent glass elephant",
              "xywh": [
                0.48,
                0.256,
                0.271,
                0.266
              ],
              "score": 0.524
            },
            {
              "label": "transparent glass elephant",
              "xywh": [
                0.178,
                0.216,
                0.575,
                0.306
              ],
              "score": 0.285
            }
          ],
          "regionScores": {
            "target": 17.0,
            "longTail": 40.6
          },
          "embeddingScore": 0.0,
          "localizedEvidence": 47.0
        },
        "metrics": {
          "readiness": 44.0,
          "proposalRecall": 60.6,
          "textRegionScore": 17.0,
          "longTailRecall": 40.6,
          "localizedEvidence": 47.0,
          "unsupportedRisk": 24.9
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench",
          "execution": "transformers-grounding-dino-siglip-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "mild-noise",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:02:40Z",
        "model": {
          "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
          "artifactProbe": "pixel-delta-artifact-map"
        },
        "inputs": {
          "degradationControls": {
            "blur": 18,
            "noise": 24,
            "compression": 18,
            "lowLight": 20,
            "hallucinationPenalty": 36
          },
          "asset": "synthetic://mild-noise"
        },
        "outputs": {
          "restoredImage": "synthetic://restoration/mild-noise-restored.png",
          "artifactMap": "synthetic://restoration/mild-noise-artifact-map.png",
          "downstreamScore": 85.1,
          "fidelityScore": 80.6,
          "deltaScore": 2.102
        },
        "metrics": {
          "readiness": 81.6,
          "degradationLoad": 21.6,
          "diagnosisConfidence": 78.4,
          "fidelityScore": 80.6,
          "artifactRisk": 19.3,
          "downstreamUtility": 85.1,
          "fabricatedDetailRisk": 19.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench",
          "execution": "transformers-swin2sr-restoration-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "compressed-low-light",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:02:42Z",
        "model": {
          "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
          "artifactProbe": "pixel-delta-artifact-map"
        },
        "inputs": {
          "degradationControls": {
            "blur": 32,
            "noise": 38,
            "compression": 54,
            "lowLight": 64,
            "hallucinationPenalty": 16
          },
          "asset": "synthetic://compressed-low-light"
        },
        "outputs": {
          "restoredImage": "synthetic://restoration/compressed-low-light-restored.png",
          "artifactMap": "synthetic://restoration/compressed-low-light-artifact-map.png",
          "downstreamScore": 78.8,
          "fidelityScore": 85.2,
          "deltaScore": 1.12
        },
        "metrics": {
          "readiness": 78.5,
          "degradationLoad": 43.6,
          "diagnosisConfidence": 56.4,
          "fidelityScore": 85.2,
          "artifactRisk": 13.0,
          "downstreamUtility": 78.8,
          "fabricatedDetailRisk": 13.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench",
          "execution": "transformers-swin2sr-restoration-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "motion-blur-task",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:02:43Z",
        "model": {
          "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
          "artifactProbe": "pixel-delta-artifact-map"
        },
        "inputs": {
          "degradationControls": {
            "blur": 64,
            "noise": 36,
            "compression": 38,
            "lowLight": 36,
            "hallucinationPenalty": 16
          },
          "asset": "synthetic://motion-blur-task"
        },
        "outputs": {
          "restoredImage": "synthetic://restoration/motion-blur-task-restored.png",
          "artifactMap": "synthetic://restoration/motion-blur-task-artifact-map.png",
          "downstreamScore": 82.6,
          "fidelityScore": 85.0,
          "deltaScore": 1.597
        },
        "metrics": {
          "readiness": 80.5,
          "degradationLoad": 41.2,
          "diagnosisConfidence": 58.8,
          "fidelityScore": 85.0,
          "artifactRisk": 10.9,
          "downstreamUtility": 82.6,
          "fabricatedDetailRisk": 10.9
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench",
          "execution": "transformers-swin2sr-restoration-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "over-restored-detail",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:02:45Z",
        "model": {
          "restorer": "caidas/swin2SR-realworld-sr-x4-64-bsrgan-psnr",
          "artifactProbe": "pixel-delta-artifact-map"
        },
        "inputs": {
          "degradationControls": {
            "blur": 48,
            "noise": 54,
            "compression": 38,
            "lowLight": 56,
            "hallucinationPenalty": 18
          },
          "asset": "synthetic://over-restored-detail"
        },
        "outputs": {
          "restoredImage": "synthetic://restoration/over-restored-detail-restored.png",
          "artifactMap": "synthetic://restoration/over-restored-detail-artifact-map.png",
          "downstreamScore": 81.2,
          "fidelityScore": 85.8,
          "deltaScore": 1.348
        },
        "metrics": {
          "readiness": 78.9,
          "degradationLoad": 45.9,
          "diagnosisConfidence": 54.1,
          "fidelityScore": 85.8,
          "artifactRisk": 13.4,
          "downstreamUtility": 81.2,
          "fabricatedDetailRisk": 13.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench",
          "execution": "transformers-swin2sr-restoration-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "clean-camera",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:04:05Z",
        "model": {
          "detector": "openai/clip-vit-base-patch32",
          "probe": "clip-provenance-prompt-bank"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 0,
            "generationSource": 56,
            "watermarkVisibility": 100,
            "unlearningProbe": 0
          },
          "asset": "synthetic://clean-camera"
        },
        "outputs": {
          "provenanceConfidence": 50.8,
          "attackHeatmap": "synthetic://adversarial/clean-camera-clip-heatmap.png",
          "leakageRisk": 1.8,
          "evidence": 52.2,
          "clipProbeScores": {
            "a clean camera photograph": 41.3,
            "a synthetic generated image": 45.2,
            "an edited social media image": 0.8,
            "an adversarially perturbed image": 6.6,
            "a watermarked image": 6.1
          }
        },
        "metrics": {
          "readiness": 66.8,
          "attackCoverage": 3.7,
          "provenanceConfidence": 50.8,
          "leakageRisk": 1.8,
          "evidence": 52.2,
          "risk": 11.6
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench",
          "execution": "transformers-clip-provenance-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "edited-social-post",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:04:05Z",
        "model": {
          "detector": "openai/clip-vit-base-patch32",
          "probe": "clip-provenance-prompt-bank"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 0,
            "generationSource": 64,
            "watermarkVisibility": 98,
            "unlearningProbe": 10
          },
          "asset": "synthetic://edited-social-post"
        },
        "outputs": {
          "provenanceConfidence": 39.8,
          "attackHeatmap": "synthetic://adversarial/edited-social-post-clip-heatmap.png",
          "leakageRisk": 4.4,
          "evidence": 44.2,
          "clipProbeScores": {
            "a clean camera photograph": 0.7,
            "a synthetic generated image": 91.0,
            "an edited social media image": 1.6,
            "an adversarially perturbed image": 4.2,
            "a watermarked image": 2.4
          }
        },
        "metrics": {
          "readiness": 57.7,
          "attackCoverage": 2.6,
          "provenanceConfidence": 39.8,
          "leakageRisk": 4.4,
          "evidence": 44.2,
          "risk": 23.7
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench",
          "execution": "transformers-clip-provenance-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "synthetic-watermarked",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:04:05Z",
        "model": {
          "detector": "openai/clip-vit-base-patch32",
          "probe": "clip-provenance-prompt-bank"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 0,
            "generationSource": 84,
            "watermarkVisibility": 94,
            "unlearningProbe": 44
          },
          "asset": "synthetic://synthetic-watermarked"
        },
        "outputs": {
          "provenanceConfidence": 39.1,
          "attackHeatmap": "synthetic://adversarial/synthetic-watermarked-clip-heatmap.png",
          "leakageRisk": 14.1,
          "evidence": 41.5,
          "clipProbeScores": {
            "a clean camera photograph": 0.0,
            "a synthetic generated image": 99.1,
            "an edited social media image": 0.0,
            "an adversarially perturbed image": 0.1,
            "a watermarked image": 0.8
          }
        },
        "metrics": {
          "readiness": 53.8,
          "attackCoverage": 0.1,
          "provenanceConfidence": 39.1,
          "leakageRisk": 14.1,
          "evidence": 41.5,
          "risk": 29.7
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench",
          "execution": "transformers-clip-provenance-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "adaptive-attack",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:04:05Z",
        "model": {
          "detector": "openai/clip-vit-base-patch32",
          "probe": "clip-provenance-prompt-bank"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 12,
            "generationSource": 89,
            "watermarkVisibility": 100,
            "unlearningProbe": 0
          },
          "asset": "synthetic://adaptive-attack"
        },
        "outputs": {
          "provenanceConfidence": 39.9,
          "attackHeatmap": "synthetic://adversarial/adaptive-attack-clip-heatmap.png",
          "leakageRisk": 13.1,
          "evidence": 42.8,
          "clipProbeScores": {
            "a clean camera photograph": 0.7,
            "a synthetic generated image": 85.7,
            "an edited social media image": 1.7,
            "an adversarially perturbed image": 8.1,
            "a watermarked image": 3.9
          }
        },
        "metrics": {
          "readiness": 53.9,
          "attackCoverage": 19.1,
          "provenanceConfidence": 39.9,
          "leakageRisk": 13.1,
          "evidence": 42.8,
          "risk": 32.7
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench",
          "execution": "transformers-clip-provenance-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "short-stable",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:05:38Z",
        "model": {
          "tracker": "torchvision-raft-small",
          "flow": "Raft_Small_Weights.C_T_V2",
          "rolloutProbe": "cuda-optical-flow-consistency"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 24,
            "identityDensity": 28,
            "physicsViolations": 14,
            "memoryWindow": 72
          },
          "asset": "synthetic://temporal/short-stable.mp4"
        },
        "outputs": {
          "identityTracks": "synthetic://temporal/short-stable-raft-tracks.json",
          "contactEvents": "synthetic://temporal/short-stable-contacts.json",
          "driftCurve": [
            2.7,
            5.4,
            8.1,
            10.8,
            13.5
          ],
          "rolloutPlausibility": 85.8,
          "flowProfile": {
            "meanMagnitude": 1.6017,
            "meanRoughness": 0.0288,
            "meanAcceleration": 0.1546,
            "elapsedMs": 1191.22,
            "pairs": 5
          }
        },
        "metrics": {
          "readiness": 86.1,
          "identityStability": 86.4,
          "contactConsistency": 85.9,
          "rolloutPlausibility": 85.8,
          "drift": 13.5,
          "memoryLoad": 24.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench",
          "execution": "torchvision-raft-small-temporal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "crowded-memory",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:05:38Z",
        "model": {
          "tracker": "torchvision-raft-small",
          "flow": "Raft_Small_Weights.C_T_V2",
          "rolloutProbe": "cuda-optical-flow-consistency"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 36,
            "identityDensity": 76,
            "physicsViolations": 26,
            "memoryWindow": 82
          },
          "asset": "synthetic://temporal/crowded-memory.mp4"
        },
        "outputs": {
          "identityTracks": "synthetic://temporal/crowded-memory-raft-tracks.json",
          "contactEvents": "synthetic://temporal/crowded-memory-contacts.json",
          "driftCurve": [
            4.3,
            8.6,
            12.9,
            17.2,
            21.6
          ],
          "rolloutPlausibility": 79.5,
          "flowProfile": {
            "meanMagnitude": 1.7887,
            "meanRoughness": 0.0288,
            "meanAcceleration": 0.0894,
            "elapsedMs": 168.5,
            "pairs": 5
          }
        },
        "metrics": {
          "readiness": 80.3,
          "identityStability": 79.9,
          "contactConsistency": 82.6,
          "rolloutPlausibility": 79.5,
          "drift": 21.6,
          "memoryLoad": 40.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench",
          "execution": "torchvision-raft-small-temporal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "contact-heavy",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:05:38Z",
        "model": {
          "tracker": "torchvision-raft-small",
          "flow": "Raft_Small_Weights.C_T_V2",
          "rolloutProbe": "cuda-optical-flow-consistency"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 56,
            "identityDensity": 52,
            "physicsViolations": 20,
            "memoryWindow": 82
          },
          "asset": "synthetic://temporal/contact-heavy.mp4"
        },
        "outputs": {
          "identityTracks": "synthetic://temporal/contact-heavy-raft-tracks.json",
          "contactEvents": "synthetic://temporal/contact-heavy-contacts.json",
          "driftCurve": [
            3.9,
            7.9,
            11.8,
            15.7,
            19.7
          ],
          "rolloutPlausibility": 80.9,
          "flowProfile": {
            "meanMagnitude": 1.732,
            "meanRoughness": 0.0313,
            "meanAcceleration": 0.1067,
            "elapsedMs": 164.0,
            "pairs": 5
          }
        },
        "metrics": {
          "readiness": 81.9,
          "identityStability": 81.5,
          "contactConsistency": 84.3,
          "rolloutPlausibility": 80.9,
          "drift": 19.7,
          "memoryLoad": 38.8
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench",
          "execution": "torchvision-raft-small-temporal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "long-rollout-drift",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:05:38Z",
        "model": {
          "tracker": "torchvision-raft-small",
          "flow": "Raft_Small_Weights.C_T_V2",
          "rolloutProbe": "cuda-optical-flow-consistency"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 66,
            "identityDensity": 68,
            "physicsViolations": 12,
            "memoryWindow": 92
          },
          "asset": "synthetic://temporal/long-rollout-drift.mp4"
        },
        "outputs": {
          "identityTracks": "synthetic://temporal/long-rollout-drift-raft-tracks.json",
          "contactEvents": "synthetic://temporal/long-rollout-drift-contacts.json",
          "driftCurve": [
            4.1,
            8.3,
            12.4,
            16.6,
            20.7
          ],
          "rolloutPlausibility": 79.7,
          "flowProfile": {
            "meanMagnitude": 1.8144,
            "meanRoughness": 0.0331,
            "meanAcceleration": 0.1629,
            "elapsedMs": 162.79,
            "pairs": 5
          }
        },
        "metrics": {
          "readiness": 81.3,
          "identityStability": 79.0,
          "contactConsistency": 86.4,
          "rolloutPlausibility": 79.7,
          "drift": 20.7,
          "memoryLoad": 44.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench",
          "execution": "torchvision-raft-small-temporal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "desktop-batch",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:06:15Z",
        "model": {
          "encoder": "torch-cuda-matmul-vision-encoder",
          "router": "student-router-profiler",
          "profiler": "cuda-event-latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 90,
            "quantizationLevel": 16,
            "studentRouting": 30,
            "escalationCost": 10
          },
          "title": "Desktop batch review"
        },
        "outputs": {
          "latencyProfile": {
            "perIterationMs": 3.031,
            "repeats": 24,
            "matrix": [
              924,
              156,
              924
            ]
          },
          "qualityFloor": 85.8,
          "routingTrace": {
            "studentRouting": 30,
            "checksum": 0.066269
          },
          "retainedEvidence": 86.6
        },
        "metrics": {
          "readiness": 89.1,
          "latency": 91.8,
          "retainedEvidence": 86.6,
          "qualityFloor": 85.8,
          "escalationRate": 14.7,
          "costSaving": 22.7,
          "risk": 7.2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench",
          "execution": "torch-cuda-compute-serving-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "mobile-live",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:06:15Z",
        "model": {
          "encoder": "torch-cuda-matmul-vision-encoder",
          "router": "student-router-profiler",
          "profiler": "cuda-event-latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 82,
            "quantizationLevel": 18,
            "studentRouting": 60,
            "escalationCost": 10
          },
          "title": "Mobile live inference"
        },
        "outputs": {
          "latencyProfile": {
            "perIterationMs": 0.168,
            "repeats": 24,
            "matrix": [
              876,
              216,
              876
            ]
          },
          "qualityFloor": 81.8,
          "routingTrace": {
            "studentRouting": 60,
            "checksum": -0.334
          },
          "retainedEvidence": 85.0
        },
        "metrics": {
          "readiness": 87.3,
          "latency": 93.7,
          "retainedEvidence": 85.0,
          "qualityFloor": 81.8,
          "escalationRate": 24.9,
          "costSaving": 38.2,
          "risk": 10.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench",
          "execution": "torch-cuda-compute-serving-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "edge-camera",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:06:15Z",
        "model": {
          "encoder": "torch-cuda-matmul-vision-encoder",
          "router": "student-router-profiler",
          "profiler": "cuda-event-latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 78,
            "quantizationLevel": 20,
            "studentRouting": 55,
            "escalationCost": 8
          },
          "title": "Edge camera stream"
        },
        "outputs": {
          "latencyProfile": {
            "perIterationMs": 0.157,
            "repeats": 24,
            "matrix": [
              852,
              206,
              852
            ]
          },
          "qualityFloor": 80.9,
          "routingTrace": {
            "studentRouting": 55,
            "checksum": -0.14627
          },
          "retainedEvidence": 84.0
        },
        "metrics": {
          "readiness": 87.0,
          "latency": 94.2,
          "retainedEvidence": 84.0,
          "qualityFloor": 80.9,
          "escalationRate": 22.3,
          "costSaving": 36.8,
          "risk": 10.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench",
          "execution": "torch-cuda-compute-serving-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "fleet-peak-load",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:06:15Z",
        "model": {
          "encoder": "torch-cuda-matmul-vision-encoder",
          "router": "student-router-profiler",
          "profiler": "cuda-event-latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 84,
            "quantizationLevel": 22,
            "studentRouting": 65,
            "escalationCost": 8
          },
          "title": "Fleet peak load"
        },
        "outputs": {
          "latencyProfile": {
            "perIterationMs": 0.165,
            "repeats": 24,
            "matrix": [
              888,
              226,
              888
            ]
          },
          "qualityFloor": 81.0,
          "routingTrace": {
            "studentRouting": 65,
            "checksum": 0.124414
          },
          "retainedEvidence": 84.9
        },
        "metrics": {
          "readiness": 86.9,
          "latency": 93.2,
          "retainedEvidence": 84.9,
          "qualityFloor": 81.0,
          "escalationRate": 25.7,
          "costSaving": 42.6,
          "risk": 10.7
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench",
          "execution": "torch-cuda-compute-serving-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "light-layout-edit",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:14Z",
        "model": {
          "layout": "torch-layout-probe",
          "identity": "torch-identity-embedding-probe",
          "reward": "constraint-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 24,
            "layoutLock": 78,
            "identityLock": 82,
            "adversarialPromptPressure": 18
          },
          "asset": "synthetic://generation/light-layout-edit.png"
        },
        "outputs": {
          "editedImage": "synthetic://generation/light-layout-edit-edited.png",
          "layoutMask": "synthetic://generation/light-layout-edit-layout-mask.png",
          "identityEmbeddingDelta": 19.2,
          "rewardTrace": "synthetic://generation/light-layout-edit-reward.json"
        },
        "metrics": {
          "readiness": 78.5,
          "editPressure": 21.0,
          "constraintSatisfaction": 80.8,
          "identityPreservation": 80.2,
          "editLocality": 76.2,
          "rewardAlignment": 73.6,
          "identityDamage": 19.2,
          "provenanceRisk": 20.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench",
          "execution": "torch-layout-identity-reward-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "style-with-locks",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:14Z",
        "model": {
          "layout": "torch-layout-probe",
          "identity": "torch-identity-embedding-probe",
          "reward": "constraint-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 52,
            "layoutLock": 68,
            "identityLock": 80,
            "adversarialPromptPressure": 32
          },
          "asset": "synthetic://generation/style-with-locks.png"
        },
        "outputs": {
          "editedImage": "synthetic://generation/style-with-locks-edited.png",
          "layoutMask": "synthetic://generation/style-with-locks-layout-mask.png",
          "identityEmbeddingDelta": 31.3,
          "rewardTrace": "synthetic://generation/style-with-locks-reward.json"
        },
        "metrics": {
          "readiness": 70.9,
          "editPressure": 39.3,
          "constraintSatisfaction": 74.7,
          "identityPreservation": 73.7,
          "editLocality": 67.7,
          "rewardAlignment": 66.0,
          "identityDamage": 31.3,
          "provenanceRisk": 32.2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench",
          "execution": "torch-layout-identity-reward-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "layout-rewrite",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:14Z",
        "model": {
          "layout": "torch-layout-probe",
          "identity": "torch-identity-embedding-probe",
          "reward": "constraint-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 72,
            "layoutLock": 62,
            "identityLock": 92,
            "adversarialPromptPressure": 28
          },
          "asset": "synthetic://generation/layout-rewrite.png"
        },
        "outputs": {
          "editedImage": "synthetic://generation/layout-rewrite-edited.png",
          "layoutMask": "synthetic://generation/layout-rewrite-layout-mask.png",
          "identityEmbeddingDelta": 32.4,
          "rewardTrace": "synthetic://generation/layout-rewrite-reward.json"
        },
        "metrics": {
          "readiness": 70.5,
          "editPressure": 45.7,
          "constraintSatisfaction": 73.2,
          "identityPreservation": 75.0,
          "editLocality": 65.9,
          "rewardAlignment": 66.2,
          "identityDamage": 32.4,
          "provenanceRisk": 33.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench",
          "execution": "torch-layout-identity-reward-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "prompt-attack-edit",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:14Z",
        "model": {
          "layout": "torch-layout-probe",
          "identity": "torch-identity-embedding-probe",
          "reward": "constraint-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 78,
            "layoutLock": 66,
            "identityLock": 92,
            "adversarialPromptPressure": 28
          },
          "asset": "synthetic://generation/prompt-attack-edit.png"
        },
        "outputs": {
          "editedImage": "synthetic://generation/prompt-attack-edit-edited.png",
          "layoutMask": "synthetic://generation/prompt-attack-edit-layout-mask.png",
          "identityEmbeddingDelta": 34.0,
          "rewardTrace": "synthetic://generation/prompt-attack-edit-reward.json"
        },
        "metrics": {
          "readiness": 70.8,
          "editPressure": 47.8,
          "constraintSatisfaction": 74.7,
          "identityPreservation": 74.0,
          "editLocality": 66.7,
          "rewardAlignment": 66.6,
          "identityDamage": 34.0,
          "provenanceRisk": 33.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench",
          "execution": "torch-layout-identity-reward-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "depth-normal-consistency",
        "caseId": "indoor-low-texture",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:22:34Z",
        "model": {
          "depth": "torch-cuda-depth-normal-probe",
          "surface": "finite-difference-normal-consistency"
        },
        "inputs": {
          "depthControls": {
            "textureSparsity": 68,
            "thinStructure": 24,
            "scaleAmbiguity": 54
          },
          "asset": "synthetic://depth/indoor-low-texture.png"
        },
        "outputs": {
          "depthMap": "synthetic://depth/depth-map.pt",
          "normalEnergy": 0.024086,
          "curvature": 0.004773
        },
        "metrics": {
          "readiness": 81.8,
          "depthRange": 0.7193,
          "normalConsistency": 84.4,
          "surfaceConsistency": 89.4,
          "scaleDrift": 29.1,
          "thinStructureRisk": 15.8
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-depth-normal-consistency-bench",
          "execution": "torch-cuda-depth-normal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "depth-normal-consistency",
        "caseId": "thin-chair-legs",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:22:34Z",
        "model": {
          "depth": "torch-cuda-depth-normal-probe",
          "surface": "finite-difference-normal-consistency"
        },
        "inputs": {
          "depthControls": {
            "textureSparsity": 38,
            "thinStructure": 78,
            "scaleAmbiguity": 32
          },
          "asset": "synthetic://depth/thin-chair-legs.png"
        },
        "outputs": {
          "depthMap": "synthetic://depth/depth-map.pt",
          "normalEnergy": 0.019778,
          "curvature": 0.003684
        },
        "metrics": {
          "readiness": 75.7,
          "depthRange": 0.6591,
          "normalConsistency": 87.9,
          "surfaceConsistency": 80.2,
          "scaleDrift": 19.5,
          "thinStructureRisk": 46.8
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-depth-normal-consistency-bench",
          "execution": "torch-cuda-depth-normal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "depth-normal-consistency",
        "caseId": "reflective-surface",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:22:34Z",
        "model": {
          "depth": "torch-cuda-depth-normal-probe",
          "surface": "finite-difference-normal-consistency"
        },
        "inputs": {
          "depthControls": {
            "textureSparsity": 52,
            "thinStructure": 34,
            "scaleAmbiguity": 46
          },
          "asset": "synthetic://depth/reflective-surface.png"
        },
        "outputs": {
          "depthMap": "synthetic://depth/depth-map.pt",
          "normalEnergy": 0.021851,
          "curvature": 0.004147
        },
        "metrics": {
          "readiness": 81.6,
          "depthRange": 0.6839,
          "normalConsistency": 86.3,
          "surfaceConsistency": 87.9,
          "scaleDrift": 25.3,
          "thinStructureRisk": 21.5
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-depth-normal-consistency-bench",
          "execution": "torch-cuda-depth-normal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "depth-normal-consistency",
        "caseId": "wide-room-scale",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:22:34Z",
        "model": {
          "depth": "torch-cuda-depth-normal-probe",
          "surface": "finite-difference-normal-consistency"
        },
        "inputs": {
          "depthControls": {
            "textureSparsity": 44,
            "thinStructure": 22,
            "scaleAmbiguity": 68
          },
          "asset": "synthetic://depth/wide-room-scale.png"
        },
        "outputs": {
          "depthMap": "synthetic://depth/depth-map.pt",
          "normalEnergy": 0.020688,
          "curvature": 0.00388
        },
        "metrics": {
          "readiness": 82.5,
          "depthRange": 0.677,
          "normalConsistency": 87.2,
          "surfaceConsistency": 90.2,
          "scaleDrift": 32.0,
          "thinStructureRisk": 14.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-depth-normal-consistency-bench",
          "execution": "torch-cuda-depth-normal-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "corruption-robustness",
        "caseId": "motion-blur",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:26:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "probe": "clean-corrupted-logit-delta"
        },
        "inputs": {
          "corruptionControls": {
            "corruption": "blur",
            "severity": 46
          },
          "asset": "synthetic://robustness/motion-blur.png"
        },
        "outputs": {
          "cleanConfidence": 35.2,
          "corruptedConfidence": 66.3,
          "jsDivergence": 0.712014,
          "featureCosine": 0.940137
        },
        "metrics": {
          "readiness": 80.8,
          "robustness": 86.3,
          "confidenceCollapse": 15.0,
          "featureRetention": 94.0,
          "labelStability": 74.6,
          "severity": 46,
          "topClassChanged": 1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-corruption-robustness-bench",
          "execution": "torchvision-resnet-corruption-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "corruption-robustness",
        "caseId": "sensor-noise",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:26:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "probe": "clean-corrupted-logit-delta"
        },
        "inputs": {
          "corruptionControls": {
            "corruption": "noise",
            "severity": 52
          },
          "asset": "synthetic://robustness/sensor-noise.png"
        },
        "outputs": {
          "cleanConfidence": 38.2,
          "corruptedConfidence": 43.1,
          "jsDivergence": 0.06174,
          "featureCosine": 0.963718
        },
        "metrics": {
          "readiness": 84.4,
          "robustness": 91.9,
          "confidenceCollapse": 10.0,
          "featureRetention": 96.4,
          "labelStability": 99.0,
          "severity": 52,
          "topClassChanged": 0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-corruption-robustness-bench",
          "execution": "torchvision-resnet-corruption-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "corruption-robustness",
        "caseId": "patch-attack",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:26:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "probe": "clean-corrupted-logit-delta"
        },
        "inputs": {
          "corruptionControls": {
            "corruption": "patch",
            "severity": 66
          },
          "asset": "synthetic://robustness/patch-attack.png"
        },
        "outputs": {
          "cleanConfidence": 33.5,
          "corruptedConfidence": 36.9,
          "jsDivergence": 0.031526,
          "featureCosine": 0.973741
        },
        "metrics": {
          "readiness": 81.1,
          "robustness": 90.8,
          "confidenceCollapse": 11.8,
          "featureRetention": 97.4,
          "labelStability": 99.5,
          "severity": 66,
          "topClassChanged": 0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-corruption-robustness-bench",
          "execution": "torchvision-resnet-corruption-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "corruption-robustness",
        "caseId": "compression-shift",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:26:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "probe": "clean-corrupted-logit-delta"
        },
        "inputs": {
          "corruptionControls": {
            "corruption": "compression",
            "severity": 58
          },
          "asset": "synthetic://robustness/compression-shift.png"
        },
        "outputs": {
          "cleanConfidence": 38.5,
          "corruptedConfidence": 39.9,
          "jsDivergence": 0.009099,
          "featureCosine": 0.9972
        },
        "metrics": {
          "readiness": 84.1,
          "robustness": 92.9,
          "confidenceCollapse": 9.4,
          "featureRetention": 99.7,
          "labelStability": 99.9,
          "severity": 58,
          "topClassChanged": 0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-corruption-robustness-bench",
          "execution": "torchvision-resnet-corruption-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "prompt-segmentation-robustness",
        "caseId": "single-object",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:23:49Z",
        "model": {
          "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
          "promptProbe": "mask-rcnn-click-robustness-proxy"
        },
        "inputs": {
          "promptControls": {
            "objectClutter": 18,
            "promptNoise": 8,
            "occlusion": 10
          },
          "asset": "synthetic://segmentation/single-object.png"
        },
        "outputs": {
          "meanMaskConfidence": 60.7,
          "maskArea": 0.88176,
          "maskOverlap": 0.38536
        },
        "metrics": {
          "readiness": 65.4,
          "maskStability": 57.2,
          "promptSensitivity": 32.4,
          "unsupportedRegionRisk": 20.2,
          "detections": 2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
          "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "prompt-segmentation-robustness",
        "caseId": "cluttered-scene",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:23:49Z",
        "model": {
          "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
          "promptProbe": "mask-rcnn-click-robustness-proxy"
        },
        "inputs": {
          "promptControls": {
            "objectClutter": 64,
            "promptNoise": 18,
            "occlusion": 24
          },
          "asset": "synthetic://segmentation/cluttered-scene.png"
        },
        "outputs": {
          "meanMaskConfidence": 66.3,
          "maskArea": 0.9091,
          "maskOverlap": 0.40537
        },
        "metrics": {
          "readiness": 62.3,
          "maskStability": 59.4,
          "promptSensitivity": 48.0,
          "unsupportedRegionRisk": 22.8,
          "detections": 2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
          "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "prompt-segmentation-robustness",
        "caseId": "ambiguous-clicks",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:23:49Z",
        "model": {
          "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
          "promptProbe": "mask-rcnn-click-robustness-proxy"
        },
        "inputs": {
          "promptControls": {
            "objectClutter": 46,
            "promptNoise": 62,
            "occlusion": 18
          },
          "asset": "synthetic://segmentation/ambiguous-clicks.png"
        },
        "outputs": {
          "meanMaskConfidence": 66.7,
          "maskArea": 0.90569,
          "maskOverlap": 0.38714
        },
        "metrics": {
          "readiness": 58.3,
          "maskStability": 60.7,
          "promptSensitivity": 61.3,
          "unsupportedRegionRisk": 28.2,
          "detections": 2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
          "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "prompt-segmentation-robustness",
        "caseId": "occluded-object",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:23:49Z",
        "model": {
          "segmenter": "MaskRCNN_ResNet50_FPN_Weights.COCO_V1",
          "promptProbe": "mask-rcnn-click-robustness-proxy"
        },
        "inputs": {
          "promptControls": {
            "objectClutter": 38,
            "promptNoise": 26,
            "occlusion": 70
          },
          "asset": "synthetic://segmentation/occluded-object.png"
        },
        "outputs": {
          "meanMaskConfidence": 66.3,
          "maskArea": 0.91259,
          "maskOverlap": 0.40266
        },
        "metrics": {
          "readiness": 57.8,
          "maskStability": 53.9,
          "promptSensitivity": 45.5,
          "unsupportedRegionRisk": 35.1,
          "detections": 2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-prompt-segmentation-robustness-bench",
          "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "video-identity-tracking",
        "caseId": "clean-crossing",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:24:31Z",
        "model": {
          "tracker": "torch-cuda-centroid-assignment-tracker",
          "temporalProbe": "mask-sequence-identity-drift"
        },
        "inputs": {
          "trackingControls": {
            "occlusion": 12,
            "crowding": 22,
            "velocity": 36
          },
          "asset": "synthetic://tracking/clean-crossing.mp4"
        },
        "outputs": {
          "frames": 8,
          "objects": 3,
          "temporalDelta": 0.01013,
          "trackTensor": "synthetic://tracking/clean-crossing-tracks.pt"
        },
        "metrics": {
          "readiness": 88.8,
          "identityStability": 88.9,
          "occlusionRecovery": 85.0,
          "trackContinuity": 91.5,
          "identityDrift": 1.5
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-video-identity-tracking-bench",
          "execution": "torch-cuda-video-tracking-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "video-identity-tracking",
        "caseId": "identity-crossing",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:24:31Z",
        "model": {
          "tracker": "torch-cuda-centroid-assignment-tracker",
          "temporalProbe": "mask-sequence-identity-drift"
        },
        "inputs": {
          "trackingControls": {
            "occlusion": 26,
            "crowding": 68,
            "velocity": 42
          },
          "asset": "synthetic://tracking/identity-crossing.mp4"
        },
        "outputs": {
          "frames": 8,
          "objects": 3,
          "temporalDelta": 0.01697,
          "trackTensor": "synthetic://tracking/identity-crossing-tracks.pt"
        },
        "metrics": {
          "readiness": 82.6,
          "identityStability": 81.4,
          "occlusionRecovery": 79.2,
          "trackContinuity": 90.0,
          "identityDrift": 2.7
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-video-identity-tracking-bench",
          "execution": "torch-cuda-video-tracking-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "video-identity-tracking",
        "caseId": "long-occlusion",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:24:31Z",
        "model": {
          "tracker": "torch-cuda-centroid-assignment-tracker",
          "temporalProbe": "mask-sequence-identity-drift"
        },
        "inputs": {
          "trackingControls": {
            "occlusion": 74,
            "crowding": 36,
            "velocity": 34
          },
          "asset": "synthetic://tracking/long-occlusion.mp4"
        },
        "outputs": {
          "frames": 8,
          "objects": 3,
          "temporalDelta": 0.014317,
          "trackTensor": "synthetic://tracking/long-occlusion-tracks.pt"
        },
        "metrics": {
          "readiness": 79.6,
          "identityStability": 79.2,
          "occlusionRecovery": 75.4,
          "trackContinuity": 91.1,
          "identityDrift": 2.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-video-identity-tracking-bench",
          "execution": "torch-cuda-video-tracking-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "video-identity-tracking",
        "caseId": "fast-motion",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:24:31Z",
        "model": {
          "tracker": "torch-cuda-centroid-assignment-tracker",
          "temporalProbe": "mask-sequence-identity-drift"
        },
        "inputs": {
          "trackingControls": {
            "occlusion": 22,
            "crowding": 42,
            "velocity": 78
          },
          "asset": "synthetic://tracking/fast-motion.mp4"
        },
        "outputs": {
          "frames": 8,
          "objects": 3,
          "temporalDelta": 0.019914,
          "trackTensor": "synthetic://tracking/fast-motion-tracks.pt"
        },
        "metrics": {
          "readiness": 83.1,
          "identityStability": 84.0,
          "occlusionRecovery": 77.9,
          "trackContinuity": 86.7,
          "identityDrift": 3.2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-video-identity-tracking-bench",
          "execution": "torch-cuda-video-tracking-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "wide-baseline",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:31:36Z",
        "model": {
          "solver": "torch-cuda-differentiable-camera-solver",
          "geometry": "bundle-adjustment-scale-probe"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 82,
            "textureSparsity": 18,
            "scaleAmbiguity": 24,
            "surfaceComplexity": 42
          },
          "asset": "synthetic://geometry/wide-baseline.json"
        },
        "outputs": {
          "cameraRecovery": {
            "points": 204,
            "meanReprojectionError": 0.00851,
            "p95ReprojectionError": 0.01639,
            "elapsedMs": 1331.44
          },
          "scaleRecovery": {
            "trueScale": 1.13333,
            "recoveredScale": 1.11517,
            "relativeError": 0.01602
          },
          "optimizationTrace": {
            "initialLoss": 0.00534,
            "finalLoss": 0.001153,
            "iterations": 220,
            "calibratedScale": 1.19754
          }
        },
        "metrics": {
          "poseEvidence": 92.8,
          "metricEvidence": 100.0,
          "surfaceConsistency": 87.8,
          "scaleDrift": 0.6,
          "topologyRisk": 11.6,
          "readiness": 92.9
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench",
          "execution": "torch-cuda-metric-geometry-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "scale-transfer",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:31:37Z",
        "model": {
          "solver": "torch-cuda-differentiable-camera-solver",
          "geometry": "bundle-adjustment-scale-probe"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 66,
            "textureSparsity": 28,
            "scaleAmbiguity": 44,
            "surfaceComplexity": 46
          },
          "asset": "synthetic://geometry/scale-transfer.json"
        },
        "outputs": {
          "cameraRecovery": {
            "points": 196,
            "meanReprojectionError": 0.00963,
            "p95ReprojectionError": 0.0193,
            "elapsedMs": 742.4
          },
          "scaleRecovery": {
            "trueScale": 1.24444,
            "recoveredScale": 1.21153,
            "relativeError": 0.00475
          },
          "optimizationTrace": {
            "initialLoss": 0.004471,
            "finalLoss": 0.001505,
            "iterations": 220,
            "calibratedScale": 1.25036
          }
        },
        "metrics": {
          "poseEvidence": 91.7,
          "metricEvidence": 99.4,
          "surfaceConsistency": 87.2,
          "scaleDrift": 3.8,
          "topologyRisk": 12.5,
          "readiness": 92.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench",
          "execution": "torch-cuda-metric-geometry-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "thin-structure",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:31:38Z",
        "model": {
          "solver": "torch-cuda-differentiable-camera-solver",
          "geometry": "bundle-adjustment-scale-probe"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 58,
            "textureSparsity": 34,
            "scaleAmbiguity": 32,
            "surfaceComplexity": 72
          },
          "asset": "synthetic://geometry/thin-structure.json"
        },
        "outputs": {
          "cameraRecovery": {
            "points": 191,
            "meanReprojectionError": 0.01438,
            "p95ReprojectionError": 0.02784,
            "elapsedMs": 759.71
          },
          "scaleRecovery": {
            "trueScale": 1.17778,
            "recoveredScale": 1.15349,
            "relativeError": 0.01432
          },
          "optimizationTrace": {
            "initialLoss": 0.005345,
            "finalLoss": 0.00322,
            "iterations": 220,
            "calibratedScale": 1.19465
          }
        },
        "metrics": {
          "poseEvidence": 90.2,
          "metricEvidence": 97.3,
          "surfaceConsistency": 83.5,
          "scaleDrift": 3.4,
          "topologyRisk": 18.3,
          "readiness": 89.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench",
          "execution": "torch-cuda-metric-geometry-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "low-texture-indoor",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:31:38Z",
        "model": {
          "solver": "torch-cuda-differentiable-camera-solver",
          "geometry": "bundle-adjustment-scale-probe"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 54,
            "textureSparsity": 58,
            "scaleAmbiguity": 48,
            "surfaceComplexity": 50
          },
          "asset": "synthetic://geometry/low-texture-indoor.json"
        },
        "outputs": {
          "cameraRecovery": {
            "points": 158,
            "meanReprojectionError": 0.01534,
            "p95ReprojectionError": 0.02952,
            "elapsedMs": 768.1
          },
          "scaleRecovery": {
            "trueScale": 1.26667,
            "recoveredScale": 1.23104,
            "relativeError": 0.01505
          },
          "optimizationTrace": {
            "initialLoss": 0.005659,
            "finalLoss": 0.003549,
            "iterations": 220,
            "calibratedScale": 1.2476
          }
        },
        "metrics": {
          "poseEvidence": 88.1,
          "metricEvidence": 95.3,
          "surfaceConsistency": 86.0,
          "scaleDrift": 6.3,
          "topologyRisk": 13.9,
          "readiness": 89.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench",
          "execution": "torch-cuda-metric-geometry-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "dense-novel-view",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:29:24Z",
        "model": {
          "renderer": "torch-cuda-gaussian-splat-compositor",
          "semanticProbe": "splat-label-edit-probe"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 86,
            "splatDensity": 78,
            "semanticEntropy": 24,
            "provenanceVisibility": 70
          },
          "asset": "synthetic://splat/dense-novel-view.ply"
        },
        "outputs": {
          "renderProfile": {
            "splats": 337,
            "views": 5,
            "elapsedMs": 71.17,
            "adjacentFrameDelta": 0.13833
          },
          "semanticProbe": {
            "meanConfidence": 0.5302,
            "margin": 0.45706,
            "editLeakageRatio": 0.05605,
            "editLocality": 0.94395
          },
          "provenanceProbe": {
            "visibility": 70,
            "trace": 67.7
          }
        },
        "metrics": {
          "renderFidelity": 85.5,
          "semanticAttachment": 60.9,
          "provenanceTrace": 67.7,
          "viewInstability": 14.1,
          "editLeakageRisk": 10.2,
          "readiness": 74.9
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench",
          "execution": "torch-cuda-gaussian-splatting-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "semantic-edit",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:29:24Z",
        "model": {
          "renderer": "torch-cuda-gaussian-splat-compositor",
          "semanticProbe": "splat-label-edit-probe"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 74,
            "splatDensity": 72,
            "semanticEntropy": 34,
            "provenanceVisibility": 76
          },
          "asset": "synthetic://splat/semantic-edit.ply"
        },
        "outputs": {
          "renderProfile": {
            "splats": 319,
            "views": 5,
            "elapsedMs": 23.13,
            "adjacentFrameDelta": 0.13381
          },
          "semanticProbe": {
            "meanConfidence": 0.55323,
            "margin": 0.45882,
            "editLeakageRatio": 0.07111,
            "editLocality": 0.92889
          },
          "provenanceProbe": {
            "visibility": 76,
            "trace": 72.3
          }
        },
        "metrics": {
          "renderFidelity": 83.7,
          "semanticAttachment": 60.7,
          "provenanceTrace": 72.3,
          "viewInstability": 15.2,
          "editLeakageRisk": 12.1,
          "readiness": 75.2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench",
          "execution": "torch-cuda-gaussian-splatting-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "provenance-transfer",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:29:24Z",
        "model": {
          "renderer": "torch-cuda-gaussian-splat-compositor",
          "semanticProbe": "splat-label-edit-probe"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 68,
            "splatDensity": 70,
            "semanticEntropy": 42,
            "provenanceVisibility": 84
          },
          "asset": "synthetic://splat/provenance-transfer.ply"
        },
        "outputs": {
          "renderProfile": {
            "splats": 313,
            "views": 5,
            "elapsedMs": 22.65,
            "adjacentFrameDelta": 0.13393
          },
          "semanticProbe": {
            "meanConfidence": 0.51926,
            "margin": 0.42126,
            "editLeakageRatio": 0.08418,
            "editLocality": 0.91582
          },
          "provenanceProbe": {
            "visibility": 84,
            "trace": 77.6
          }
        },
        "metrics": {
          "renderFidelity": 82.7,
          "semanticAttachment": 57.0,
          "provenanceTrace": 77.6,
          "viewInstability": 15.9,
          "editLeakageRisk": 13.5,
          "readiness": 75.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench",
          "execution": "torch-cuda-gaussian-splatting-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "sparse-capture",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:29:24Z",
        "model": {
          "renderer": "torch-cuda-gaussian-splat-compositor",
          "semanticProbe": "splat-label-edit-probe"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 62,
            "splatDensity": 66,
            "semanticEntropy": 46,
            "provenanceVisibility": 72
          },
          "asset": "synthetic://splat/sparse-capture.ply"
        },
        "outputs": {
          "renderProfile": {
            "splats": 300,
            "views": 5,
            "elapsedMs": 21.97,
            "adjacentFrameDelta": 0.13495
          },
          "semanticProbe": {
            "meanConfidence": 0.57297,
            "margin": 0.47408,
            "editLeakageRatio": 0.07785,
            "editLocality": 0.92215
          },
          "provenanceProbe": {
            "visibility": 72,
            "trace": 69.6
          }
        },
        "metrics": {
          "renderFidelity": 81.4,
          "semanticAttachment": 60.5,
          "provenanceTrace": 69.6,
          "viewInstability": 16.7,
          "editLeakageRisk": 14.5,
          "readiness": 73.6
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench",
          "execution": "torch-cuda-gaussian-splatting-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "clear-baseline",
        "mode": "cached-real",
        "createdAt": "2026-08-17T01:09:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "shiftProbe": "resnet-logit-divergence-domain-shift"
        },
        "inputs": {
          "clinicalControls": {
            "domainShift": 8,
            "artifactLoad": 12,
            "escalationThreshold": 68
          },
          "asset": "synthetic://clinical/clear-baseline.png"
        },
        "outputs": {
          "cleanConfidence": 38.6,
          "shiftedConfidence": 35.0,
          "logitDivergence": 0.006642
        },
        "metrics": {
          "readiness": 89.9,
          "shiftScore": 7.6,
          "calibration": 89.3,
          "falseClearRisk": 2.4,
          "escalationThreshold": 68
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench",
          "execution": "torchvision-resnet-clinical-shift-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "scanner-shift",
        "mode": "cached-real",
        "createdAt": "2026-08-17T01:09:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "shiftProbe": "resnet-logit-divergence-domain-shift"
        },
        "inputs": {
          "clinicalControls": {
            "domainShift": 46,
            "artifactLoad": 24,
            "escalationThreshold": 72
          },
          "asset": "synthetic://clinical/scanner-shift.png"
        },
        "outputs": {
          "cleanConfidence": 33.4,
          "shiftedConfidence": 33.9,
          "logitDivergence": 0.014008
        },
        "metrics": {
          "readiness": 83.2,
          "shiftScore": 32.7,
          "calibration": 91.5,
          "falseClearRisk": 8.9,
          "escalationThreshold": 72
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench",
          "execution": "torchvision-resnet-clinical-shift-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "rare-presentation",
        "mode": "cached-real",
        "createdAt": "2026-08-17T01:09:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "shiftProbe": "resnet-logit-divergence-domain-shift"
        },
        "inputs": {
          "clinicalControls": {
            "domainShift": 58,
            "artifactLoad": 18,
            "escalationThreshold": 78
          },
          "asset": "synthetic://clinical/rare-presentation.png"
        },
        "outputs": {
          "cleanConfidence": 39.4,
          "shiftedConfidence": 37.6,
          "logitDivergence": 0.003941
        },
        "metrics": {
          "readiness": 81.9,
          "shiftScore": 38.0,
          "calibration": 90.7,
          "falseClearRisk": 10.6,
          "escalationThreshold": 78
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench",
          "execution": "torchvision-resnet-clinical-shift-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "motion-artifact",
        "mode": "cached-real",
        "createdAt": "2026-08-17T01:09:30Z",
        "model": {
          "classifier": "ResNet18_Weights.IMAGENET1K_V1",
          "shiftProbe": "resnet-logit-divergence-domain-shift"
        },
        "inputs": {
          "clinicalControls": {
            "domainShift": 38,
            "artifactLoad": 66,
            "escalationThreshold": 74
          },
          "asset": "synthetic://clinical/motion-artifact.png"
        },
        "outputs": {
          "cleanConfidence": 26.4,
          "shiftedConfidence": 26.2,
          "logitDivergence": 0.067713
        },
        "metrics": {
          "readiness": 81.1,
          "shiftScore": 39.0,
          "calibration": 90.9,
          "falseClearRisk": 11.1,
          "escalationThreshold": 74
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench",
          "execution": "torchvision-resnet-clinical-shift-live-demo",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "urban-cut-in",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:48Z",
        "model": {
          "grounder": "torch-driving-scene-risk-probe",
          "riskHead": "ttc-risk-head",
          "ruleMonitor": "safety-rule-monitor"
        },
        "inputs": {
          "safetyControls": {
            "hazardDensity": 48,
            "actorSpeed": 40,
            "occlusion": 10,
            "actionConfidence": 82
          },
          "asset": "synthetic://driving/urban-cut-in.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "synthetic://driving/urban-cut-in-grounding.png",
          "timeToCollision": 5.15,
          "riskTrace": "synthetic://driving/urban-cut-in-risk.json",
          "ruleViolations": 32.9
        },
        "metrics": {
          "readiness": 57.4,
          "sceneGrounding": 58.1,
          "timeToCollision": 5.15,
          "risk": 33.6,
          "ruleViolation": 32.9,
          "abstention": 15.5
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "night-crosswalk",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:48Z",
        "model": {
          "grounder": "torch-driving-scene-risk-probe",
          "riskHead": "ttc-risk-head",
          "ruleMonitor": "safety-rule-monitor"
        },
        "inputs": {
          "safetyControls": {
            "hazardDensity": 36,
            "actorSpeed": 34,
            "occlusion": 18,
            "actionConfidence": 78
          },
          "asset": "synthetic://driving/night-crosswalk.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "synthetic://driving/night-crosswalk-grounding.png",
          "timeToCollision": 5.73,
          "riskTrace": "synthetic://driving/night-crosswalk-risk.json",
          "ruleViolations": 32.8
        },
        "metrics": {
          "readiness": 57.1,
          "sceneGrounding": 55.4,
          "timeToCollision": 5.73,
          "risk": 31.9,
          "ruleViolation": 32.8,
          "abstention": 16.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "highway-merge",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:48Z",
        "model": {
          "grounder": "torch-driving-scene-risk-probe",
          "riskHead": "ttc-risk-head",
          "ruleMonitor": "safety-rule-monitor"
        },
        "inputs": {
          "safetyControls": {
            "hazardDensity": 24,
            "actorSpeed": 72,
            "occlusion": 16,
            "actionConfidence": 84
          },
          "asset": "synthetic://driving/highway-merge.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "synthetic://driving/highway-merge-grounding.png",
          "timeToCollision": 4.34,
          "riskTrace": "synthetic://driving/highway-merge-risk.json",
          "ruleViolations": 33.9
        },
        "metrics": {
          "readiness": 56.5,
          "sceneGrounding": 57.0,
          "timeToCollision": 4.34,
          "risk": 34.8,
          "ruleViolation": 33.9,
          "abstention": 16.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "construction-zone",
        "mode": "cached-real",
        "createdAt": "2026-08-17T03:14:48Z",
        "model": {
          "grounder": "torch-driving-scene-risk-probe",
          "riskHead": "ttc-risk-head",
          "ruleMonitor": "safety-rule-monitor"
        },
        "inputs": {
          "safetyControls": {
            "hazardDensity": 36,
            "actorSpeed": 32,
            "occlusion": 14,
            "actionConfidence": 72
          },
          "asset": "synthetic://driving/construction-zone.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "synthetic://driving/construction-zone-grounding.png",
          "timeToCollision": 5.82,
          "riskTrace": "synthetic://driving/construction-zone-risk.json",
          "ruleViolations": 33.0
        },
        "metrics": {
          "readiness": 57.1,
          "sceneGrounding": 55.1,
          "timeToCollision": 5.82,
          "risk": 32.1,
          "ruleViolation": 33.0,
          "abstention": 17.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "Tesla T4",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench",
          "execution": "torch-driving-scene-risk-probe",
          "promotedFrom": "live-colab",
          "canonicalMode": "cached-real"
        }
      }
    ]
  },
  "planner": {
    "summary": {
      "planner": "cvpr-colab-execution-planner",
      "status": "ready",
      "runtimePlane": "google-colab-pro-plus",
      "jobs": 14,
      "waves": 3,
      "expectedResults": 56,
      "cachedResults": 56,
      "colabCoveredBenches": 14,
      "systemEvidenceCoveredBenches": 1,
      "missingRuntimeEvidence": 0,
      "releaseStatus": "release",
      "operationsStatus": "ready",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
      "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
      "intakeGate": "scripts/stage_cvpr_live_colab_export.py",
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py"
    },
    "waves": [
      {
        "wave": "wave-1-grounding-fidelity-provenance",
        "jobs": 3,
        "expectedResults": 12,
        "cachedResults": 12,
        "gpuClasses": [
          "T4/L4/A100"
        ],
        "status": "ready"
      },
      {
        "wave": "wave-2-temporal-clinical-serving",
        "jobs": 3,
        "expectedResults": 12,
        "cachedResults": 12,
        "gpuClasses": [
          "L4/A100",
          "T4/L4/A100"
        ],
        "status": "ready"
      },
      {
        "wave": "wave-3-generation-driving-3d",
        "jobs": 8,
        "expectedResults": 32,
        "cachedResults": 32,
        "gpuClasses": [
          "L4/A100",
          "T4/L4/A100"
        ],
        "status": "ready"
      }
    ],
    "planRows": [
      {
        "jobId": "open-vocab-grounding",
        "title": "Open-vocabulary grounding GPU run",
        "wave": "wave-1-grounding-fidelity-provenance",
        "priority": 1,
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "gpuClass": "T4/L4/A100",
        "models": [
          "siglip-base-patch16-224",
          "grounding-dino-tiny",
          "sam-vit-b"
        ],
        "runner": "run_open_vocab_grounding_batch",
        "execution": "transformers-grounding-dino-siglip",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('open-vocab-grounding', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job open-vocab-grounding",
        "status": "ready"
      },
      {
        "jobId": "restoration-fidelity",
        "title": "Restoration fidelity GPU run",
        "wave": "wave-1-grounding-fidelity-provenance",
        "priority": 2,
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "gpuClass": "T4/L4/A100",
        "models": [
          "swinir-lightweight",
          "real-esrgan-x2"
        ],
        "runner": "run_restoration_fidelity_batch",
        "execution": "transformers-swin2sr-restoration",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('restoration-fidelity', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job restoration-fidelity",
        "status": "ready"
      },
      {
        "jobId": "adversarial-provenance",
        "title": "Adversarial provenance GPU run",
        "wave": "wave-1-grounding-fidelity-provenance",
        "priority": 3,
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "gpuClass": "T4/L4/A100",
        "models": [
          "watermark-detector",
          "clip-perturbation-probe"
        ],
        "runner": "run_adversarial_provenance_batch",
        "execution": "transformers-clip-provenance-probe",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('adversarial-provenance', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job adversarial-provenance",
        "status": "ready"
      },
      {
        "jobId": "temporal-rollout",
        "title": "Temporal rollout GPU run",
        "wave": "wave-2-temporal-clinical-serving",
        "priority": 4,
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "gpuClass": "L4/A100",
        "models": [
          "video-feature-tracker",
          "raft-lite",
          "world-rollout-probe"
        ],
        "runner": "run_temporal_rollout_batch",
        "execution": "torchvision-raft-temporal-flow",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('temporal-rollout', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job temporal-rollout",
        "status": "ready"
      },
      {
        "jobId": "clinical-shift",
        "title": "Clinical shift validation GPU run",
        "wave": "wave-2-temporal-clinical-serving",
        "priority": 5,
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "gpuClass": "T4/L4/A100",
        "models": [
          "dicom-embedding-shift-probe",
          "temperature-calibration-head",
          "uncertainty-triage-head"
        ],
        "runner": "run_clinical_shift_batch",
        "execution": "torch-clinical-shift-embedding-probe",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('clinical-shift', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job clinical-shift",
        "status": "ready"
      },
      {
        "jobId": "compute-serving",
        "title": "Compute constrained serving GPU run",
        "wave": "wave-2-temporal-clinical-serving",
        "priority": 6,
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "gpuClass": "T4/L4/A100",
        "models": [
          "quantized-vision-encoder",
          "student-router",
          "latency-profiler"
        ],
        "runner": "run_compute_serving_batch",
        "execution": "torch-serving-latency-profiler",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('compute-serving', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job compute-serving",
        "status": "ready"
      },
      {
        "jobId": "constraint-generation",
        "title": "Constraint preserving generation GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 7,
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "gpuClass": "L4/A100",
        "models": [
          "layout-controlnet",
          "identity-embedding-lock",
          "preference-reward-probe"
        ],
        "runner": "run_constraint_generation_batch",
        "execution": "torch-layout-identity-reward-probe",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('constraint-generation', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job constraint-generation",
        "status": "ready"
      },
      {
        "jobId": "driving-safety",
        "title": "Driving safety closed-loop GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 8,
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "gpuClass": "L4/A100",
        "models": [
          "vla-scene-grounder",
          "ttc-risk-head",
          "safety-rule-monitor"
        ],
        "runner": "run_driving_safety_batch",
        "execution": "torch-driving-scene-risk-probe",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('driving-safety', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job driving-safety",
        "status": "ready"
      },
      {
        "jobId": "depth-normal-consistency",
        "title": "Depth-normal consistency GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 9,
        "bench": "cvpr-depth-normal-consistency-bench",
        "benchPage": "cvpr-depth-normal-consistency-bench.html",
        "system": "geometry-consistency-probe",
        "theme": "Recovering the 3D world from flat pictures",
        "gpuClass": "T4/L4/A100",
        "models": [
          "torch-cuda-depth-normal-probe",
          "finite-difference-normal-consistency"
        ],
        "runner": "run_depth_normal_consistency_batch",
        "execution": "torch-cuda-depth-normal-live-demo",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('depth-normal-consistency', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job depth-normal-consistency",
        "status": "ready"
      },
      {
        "jobId": "metric-geometry",
        "title": "Metric geometry GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 9,
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "gpuClass": "L4/A100",
        "models": [
          "torch-pose-bundle-adjuster",
          "metric-scale-probe",
          "surface-consistency-head"
        ],
        "runner": "run_metric_geometry_batch",
        "execution": "torch-metric-geometry-probe",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('metric-geometry', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job metric-geometry",
        "status": "ready"
      },
      {
        "jobId": "corruption-robustness",
        "title": "Corruption robustness GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 10,
        "bench": "cvpr-corruption-robustness-bench",
        "benchPage": "cvpr-corruption-robustness-bench.html",
        "system": "robust-perception-gate",
        "theme": "Naming and locating what's in the picture",
        "gpuClass": "T4/L4/A100",
        "models": [
          "torchvision-resnet18",
          "clean-corrupted-logit-delta"
        ],
        "runner": "run_corruption_robustness_batch",
        "execution": "torchvision-resnet-corruption-live-demo",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('corruption-robustness', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job corruption-robustness",
        "status": "ready"
      },
      {
        "jobId": "gaussian-splatting",
        "title": "Gaussian Splatting GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 10,
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "gpuClass": "L4/A100",
        "models": [
          "torch-splat-renderer",
          "semantic-splat-attach",
          "provenance-trace-head"
        ],
        "runner": "run_gaussian_splatting_batch",
        "execution": "torch-gaussian-splatting-render-probe",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('gaussian-splatting', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job gaussian-splatting",
        "status": "ready"
      },
      {
        "jobId": "prompt-segmentation-robustness",
        "title": "Prompt segmentation robustness GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 11,
        "bench": "cvpr-prompt-segmentation-robustness-bench",
        "benchPage": "cvpr-prompt-segmentation-robustness-bench.html",
        "system": "interactive-segmentation-gate",
        "theme": "Making pixels from meaning",
        "gpuClass": "T4/L4/A100",
        "models": [
          "torchvision-maskrcnn-resnet50-fpn",
          "mask-rcnn-click-robustness-proxy"
        ],
        "runner": "run_prompt_segmentation_robustness_batch",
        "execution": "torchvision-maskrcnn-prompt-robustness-live-demo",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('prompt-segmentation-robustness', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job prompt-segmentation-robustness",
        "status": "ready"
      },
      {
        "jobId": "video-identity-tracking",
        "title": "Video identity tracking GPU run",
        "wave": "wave-3-generation-driving-3d",
        "priority": 12,
        "bench": "cvpr-video-identity-tracking-bench",
        "benchPage": "cvpr-video-identity-tracking-bench.html",
        "system": "video-tracking-release-gate",
        "theme": "Seeing and making things that move",
        "gpuClass": "T4/L4/A100",
        "models": [
          "torch-cuda-centroid-assignment-tracker",
          "mask-sequence-identity-drift"
        ],
        "runner": "run_video_identity_tracking_batch",
        "execution": "torch-cuda-video-tracking-live-demo",
        "strictMode": "require_real_models=True",
        "expectedCases": 4,
        "cachedResults": 4,
        "command": "run_job('video-identity-tracking', mode='live-colab', strict=True)",
        "promotionCheck": "python3 scripts/stage_cvpr_live_colab_export.py --job video-identity-tracking",
        "status": "ready"
      }
    ],
    "sources": {
      "worker": "analysis/cvpr_colab_gpu_worker/registry.json",
      "coverage": "analysis/cvpr_production_coverage_audit/registry.json",
      "releaseBundle": "analysis/cvpr_colab_release_bundle/registry.json",
      "operations": "analysis/cvpr_colab_operations_dashboard/registry.json"
    }
  },
  "cockpit": {
    "summary": {
      "cockpit": "cvpr-demo-evidence-cockpit",
      "status": "ready",
      "systems": 11,
      "stageDemos": 33,
      "flagshipDemos": 8,
      "totalDemos": 41,
      "proPlusJobs": 14,
      "proPlusWaves": 3,
      "expectedLiveResults": 56,
      "cachedResults": 56,
      "benchRelease": 44,
      "benchCases": 44,
      "missingDemoEvidence": 0,
      "gpuBackedStageDemos": 30,
      "systemEvidenceStageDemos": 3,
      "releaseGate": "release",
      "fullStackStatus": "valid"
    },
    "systemRows": [
      {
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "inspectPage": "adversarial-provenance-gate.html",
        "status": "ready"
      },
      {
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "controllable-generation-studio.html",
        "status": "ready"
      },
      {
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "driving-vla-release-gate.html",
        "status": "ready"
      },
      {
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "inspectPage": "efficient-vision-serving.html",
        "status": "ready"
      },
      {
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "gaussian-splatting-platform.html",
        "status": "ready"
      },
      {
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "inspectPage": "medical-vision-validation.html",
        "status": "ready"
      },
      {
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "metric-3d-reconstruction.html",
        "status": "ready"
      },
      {
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "inspectPage": "open-vocab-visual-search.html",
        "status": "ready"
      },
      {
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "inspectPage": "restoration-reliability-stack.html",
        "status": "ready"
      },
      {
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "inspectPage": "video-world-model.html",
        "status": "ready"
      },
      {
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "inspectPage": "vlm-grounded-reasoning.html",
        "status": "ready"
      }
    ],
    "demoRows": [
      {
        "demoId": "stage-open-vocab-visual-search-text-query-grounding",
        "title": "Ground text queries in visible regions",
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "sourceStage": "text-query-grounding",
        "visualMode": "localization",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "open-vocab-visual-search.html",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-open-vocab-visual-search-long-tail-retrieval",
        "title": "Retrieve long-tail objects",
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "sourceStage": "long-tail-retrieval",
        "visualMode": "localization",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "open-vocab-visual-search.html",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-open-vocab-visual-search-evidence-inspection",
        "title": "Expose search evidence",
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "sourceStage": "evidence-inspection",
        "visualMode": "localization",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "open-vocab-visual-search.html",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-vlm-grounded-reasoning-look-then-reason",
        "title": "Look before reasoning",
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "sourceStage": "look-then-reason",
        "visualMode": "grounding",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "vlm-grounded-reasoning.html",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "status": "ready"
      },
      {
        "demoId": "stage-vlm-grounded-reasoning-hallucination-check",
        "title": "Check hallucinated claims",
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "sourceStage": "hallucination-check",
        "visualMode": "grounding",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "vlm-grounded-reasoning.html",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "status": "ready"
      },
      {
        "demoId": "stage-vlm-grounded-reasoning-tool-verified-answer",
        "title": "Verify with visual tools",
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "sourceStage": "tool-verified-answer",
        "visualMode": "grounding",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "vlm-grounded-reasoning.html",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "status": "ready"
      },
      {
        "demoId": "stage-efficient-vision-serving-token-budget",
        "title": "Control token budget",
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "sourceStage": "token-budget",
        "visualMode": "efficiency",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "efficient-vision-serving.html",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-efficient-vision-serving-quantized-serving",
        "title": "Serve quantized models",
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "sourceStage": "quantized-serving",
        "visualMode": "efficiency",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "efficient-vision-serving.html",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-efficient-vision-serving-student-routing",
        "title": "Route to small students",
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "sourceStage": "student-routing",
        "visualMode": "efficiency",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "efficient-vision-serving.html",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-metric-3d-reconstruction-camera-geometry",
        "title": "Recover camera geometry",
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "camera-geometry",
        "visualMode": "geometry",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "metric-3d-reconstruction.html",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-metric-3d-reconstruction-metric-scale",
        "title": "Recover metric scale",
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "metric-scale",
        "visualMode": "geometry",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "metric-3d-reconstruction.html",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-metric-3d-reconstruction-surface-consistency",
        "title": "Check surface consistency",
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "surface-consistency",
        "visualMode": "geometry",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "metric-3d-reconstruction.html",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-gaussian-splatting-platform-splat-fit",
        "title": "Fit renderable splats",
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "splat-fit",
        "visualMode": "splats",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "gaussian-splatting-platform.html",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-gaussian-splatting-platform-semantic-splats",
        "title": "Attach semantic labels",
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "semantic-splats",
        "visualMode": "splats",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "gaussian-splatting-platform.html",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-gaussian-splatting-platform-watermark-provenance",
        "title": "Track provenance",
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "watermark-provenance",
        "visualMode": "splats",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "gaussian-splatting-platform.html",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-video-world-model-temporal-memory",
        "title": "Keep temporal memory",
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "sourceStage": "temporal-memory",
        "visualMode": "temporal",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "video-world-model.html",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-video-world-model-physics-consistency",
        "title": "Check physics consistency",
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "sourceStage": "physics-consistency",
        "visualMode": "temporal",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "video-world-model.html",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-video-world-model-future-rollout",
        "title": "Score future rollouts",
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "sourceStage": "future-rollout",
        "visualMode": "temporal",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "video-world-model.html",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-controllable-generation-studio-layout-control",
        "title": "Control layout",
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "sourceStage": "layout-control",
        "visualMode": "editing",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "controllable-generation-studio.html",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-controllable-generation-studio-identity-preservation",
        "title": "Preserve identity",
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "sourceStage": "identity-preservation",
        "visualMode": "editing",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "controllable-generation-studio.html",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-controllable-generation-studio-preference-reward",
        "title": "Optimize preference reward",
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "sourceStage": "preference-reward",
        "visualMode": "editing",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "controllable-generation-studio.html",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-restoration-reliability-stack-degradation-diagnosis",
        "title": "Diagnose degradation",
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "sourceStage": "degradation-diagnosis",
        "visualMode": "restoration",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "restoration-reliability-stack.html",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-restoration-reliability-stack-fidelity-gate",
        "title": "Gate restoration fidelity",
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "sourceStage": "fidelity-gate",
        "visualMode": "restoration",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "restoration-reliability-stack.html",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-restoration-reliability-stack-downstream-validation",
        "title": "Validate downstream utility",
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "sourceStage": "downstream-validation",
        "visualMode": "restoration",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "restoration-reliability-stack.html",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-medical-vision-validation-domain-shift",
        "title": "Measure domain shift",
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "domain-shift",
        "visualMode": "medical",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "medical-vision-validation.html",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-medical-vision-validation-uncertainty-triage",
        "title": "Triage uncertainty",
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "uncertainty-triage",
        "visualMode": "medical",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "medical-vision-validation.html",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-medical-vision-validation-clinical-evidence",
        "title": "Build clinical evidence",
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "clinical-evidence",
        "visualMode": "medical",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "medical-vision-validation.html",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-driving-vla-release-gate-scene-grounding",
        "title": "Ground the driving scene",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "sourceStage": "scene-grounding",
        "visualMode": "safety",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "driving-vla-release-gate.html",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-driving-vla-release-gate-risk-anticipation",
        "title": "Anticipate risk",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "sourceStage": "risk-anticipation",
        "visualMode": "safety",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "driving-vla-release-gate.html",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-driving-vla-release-gate-action-release",
        "title": "Gate action release",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "sourceStage": "action-release",
        "visualMode": "safety",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "driving-vla-release-gate.html",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-adversarial-provenance-gate-attack-surface",
        "title": "Map attack surface",
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "attack-surface",
        "visualMode": "trust",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "adversarial-provenance-gate.html",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-adversarial-provenance-gate-provenance-detection",
        "title": "Detect provenance",
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "provenance-detection",
        "visualMode": "trust",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "adversarial-provenance-gate.html",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-adversarial-provenance-gate-unlearning-check",
        "title": "Check unlearning",
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "unlearning-check",
        "visualMode": "trust",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "adversarial-provenance-gate.html",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      }
    ],
    "flagshipRows": [
      {
        "demoId": "open-vocab-grounding",
        "title": "Open-vocabulary region grounding",
        "theme": "Perception",
        "cluster": "Open-vocabulary vision",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "localization",
        "status": "interactive"
      },
      {
        "demoId": "metric-depth-uncertainty",
        "title": "Metric depth uncertainty",
        "theme": "3D",
        "cluster": "3D reconstruction and novel views",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "geometry",
        "status": "interactive"
      },
      {
        "demoId": "temporal-world-rollout",
        "title": "Temporal consistency rollout",
        "theme": "Video",
        "cluster": "Video generation and world models",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "temporal",
        "status": "interactive"
      },
      {
        "demoId": "controlled-editing",
        "title": "Controllable editing preservation",
        "theme": "Generation",
        "cluster": "Controllable generation",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "editing",
        "status": "interactive"
      },
      {
        "demoId": "vlm-grounding-check",
        "title": "Grounded reasoning vs hallucination",
        "theme": "VLM",
        "cluster": "Vision-language reasoning",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "grounding",
        "status": "interactive"
      },
      {
        "demoId": "driving-action-gate",
        "title": "Driving VLA action gate",
        "theme": "Embodied",
        "cluster": "Driving and vision-language-action",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "safety",
        "status": "interactive"
      },
      {
        "demoId": "efficient-token-serving",
        "title": "Token pruning and serving tradeoff",
        "theme": "Learning",
        "cluster": "Efficient vision",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "efficiency",
        "status": "interactive"
      },
      {
        "demoId": "provenance-attack-gate",
        "title": "Provenance and adversarial gate",
        "theme": "Frontier and trust",
        "cluster": "Adversarial robustness",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "trust",
        "status": "interactive"
      }
    ],
    "sources": {
      "demos": "analysis/cvpr_demos/registry.json",
      "coverage": "analysis/cvpr_production_coverage_audit/registry.json",
      "planner": "analysis/cvpr_colab_execution_planner/registry.json",
      "mission": "analysis/cvpr_mission_control/registry.json",
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json"
    }
  },
  "releaseBrief": {
    "summary": {
      "brief": "cvpr-production-release-brief",
      "status": "release",
      "themes": 8,
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "arenaPairings": 328,
      "arenaRelease": 328,
      "arenaReview": 0,
      "arenaBlock": 0,
      "benchCases": 44,
      "benchRelease": 44,
      "benchReview": 0,
      "benchBlock": 0,
      "benchAcceptanceRate": 100.0,
      "failureSeverity": 0,
      "openThemes": 0,
      "workerJobs": 14,
      "cachedResults": 56,
      "liveIntakeResults": 56,
      "evidenceArtifacts": 7,
      "importIssues": 0,
      "packageTests": 148,
      "fullStackStatus": "valid",
      "gate": "release",
      "posture": "all-clear",
      "coverage": "8 themes \u00b7 11 systems \u00b7 33 stages \u00b7 41 demos \u00b7 328 arena releases \u00b7 44 bench releases"
    },
    "evidence": [
      {
        "label": "Mission control",
        "page": "cvpr-mission-control.html",
        "registry": "analysis/cvpr_mission_control/registry.json",
        "status": "interactive"
      },
      {
        "label": "Demo arena",
        "page": "cvpr-demo-arena.html",
        "registry": "analysis/cvpr_demo_arena/registry.json",
        "status": "release"
      },
      {
        "label": "Failure atlas",
        "page": "cvpr-failure-atlas.html",
        "registry": "analysis/cvpr_failure_atlas/registry.json",
        "status": "release"
      },
      {
        "label": "Theme release matrix",
        "page": "cvpr-theme-release-matrix.html",
        "registry": "analysis/cvpr_theme_release_matrix/registry.json",
        "status": "release"
      },
      {
        "label": "Colab release bundle",
        "page": "cvpr-colab-release-bundle.html",
        "registry": "analysis/cvpr_colab_release_bundle/registry.json",
        "status": "release"
      },
      {
        "label": "Evidence ledger",
        "page": "cvpr-colab-evidence-ledger.html",
        "registry": "analysis/cvpr_colab_evidence_ledger/registry.json",
        "status": "release"
      },
      {
        "label": "Validation center",
        "page": "cvpr-validation-center.html",
        "registry": "analysis/cvpr_full_stack_validation/registry.json",
        "status": "valid"
      }
    ],
    "inputRegistries": {
      "mission": "analysis/cvpr_mission_control/registry.json",
      "arena": "analysis/cvpr_demo_arena/registry.json",
      "benches": "analysis/cvpr_failure_atlas/registry.json",
      "themeMatrix": "analysis/cvpr_theme_release_matrix/registry.json",
      "releaseBundle": "analysis/cvpr_colab_release_bundle/registry.json",
      "evidenceLedger": "analysis/cvpr_colab_evidence_ledger/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  }
};
export const replayRows = [
  {
    "jobId": "open-vocab-grounding",
    "wave": "wave-1-grounding-fidelity-provenance",
    "bench": "cvpr-long-tail-grounding-bench",
    "benchPage": "cvpr-long-tail-grounding-bench.html",
    "system": "open-vocab-visual-search",
    "theme": "Naming and locating what's in the picture",
    "runner": "run_open_vocab_grounding_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "common-clean",
      "rare-distractors",
      "rare-visible",
      "unsupported-query"
    ],
    "minReadiness": 44.0,
    "avgReadiness": 57.35,
    "maxReadiness": 88.0,
    "inputFields": [
      "asset",
      "controls",
      "textQuery"
    ],
    "outputFields": [
      "boxes",
      "embeddingScore",
      "localizedEvidence",
      "regionScores"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job open-vocab-grounding --promote",
    "status": "ready"
  },
  {
    "jobId": "restoration-fidelity",
    "wave": "wave-1-grounding-fidelity-provenance",
    "bench": "cvpr-restoration-fidelity-bench",
    "benchPage": "cvpr-restoration-fidelity-bench.html",
    "system": "restoration-reliability-stack",
    "theme": "Making pixels from meaning",
    "runner": "run_restoration_fidelity_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "compressed-low-light",
      "mild-noise",
      "motion-blur-task",
      "over-restored-detail"
    ],
    "minReadiness": 78.5,
    "avgReadiness": 79.88,
    "maxReadiness": 81.6,
    "inputFields": [
      "asset",
      "degradationControls"
    ],
    "outputFields": [
      "artifactMap",
      "deltaScore",
      "downstreamScore",
      "fidelityScore",
      "restoredImage"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job restoration-fidelity --promote",
    "status": "ready"
  },
  {
    "jobId": "adversarial-provenance",
    "wave": "wave-1-grounding-fidelity-provenance",
    "bench": "cvpr-adversarial-provenance-bench",
    "benchPage": "cvpr-adversarial-provenance-bench.html",
    "system": "adversarial-provenance-gate",
    "theme": "The frontier - new senses and new duties",
    "runner": "run_adversarial_provenance_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "adaptive-attack",
      "clean-camera",
      "edited-social-post",
      "synthetic-watermarked"
    ],
    "minReadiness": 53.8,
    "avgReadiness": 58.05,
    "maxReadiness": 66.8,
    "inputFields": [
      "asset",
      "attackControls"
    ],
    "outputFields": [
      "attackHeatmap",
      "clipProbeScores",
      "evidence",
      "leakageRisk",
      "provenanceConfidence"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job adversarial-provenance --promote",
    "status": "ready"
  },
  {
    "jobId": "temporal-rollout",
    "wave": "wave-2-temporal-clinical-serving",
    "bench": "cvpr-temporal-rollout-bench",
    "benchPage": "cvpr-temporal-rollout-bench.html",
    "system": "video-world-model",
    "theme": "Seeing and making things that move",
    "runner": "run_temporal_rollout_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "contact-heavy",
      "crowded-memory",
      "long-rollout-drift",
      "short-stable"
    ],
    "minReadiness": 80.3,
    "avgReadiness": 82.4,
    "maxReadiness": 86.1,
    "inputFields": [
      "asset",
      "trackingControls"
    ],
    "outputFields": [
      "contactEvents",
      "driftCurve",
      "flowProfile",
      "identityTracks",
      "rolloutPlausibility"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job temporal-rollout --promote",
    "status": "ready"
  },
  {
    "jobId": "clinical-shift",
    "wave": "wave-2-temporal-clinical-serving",
    "bench": "cvpr-clinical-shift-bench",
    "benchPage": "cvpr-clinical-shift-bench.html",
    "system": "medical-vision-validation",
    "theme": "The frontier - new senses and new duties",
    "runner": "run_clinical_shift_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "clear-baseline",
      "motion-artifact",
      "rare-presentation",
      "scanner-shift"
    ],
    "minReadiness": 81.1,
    "avgReadiness": 84.03,
    "maxReadiness": 89.9,
    "inputFields": [
      "asset",
      "clinicalControls"
    ],
    "outputFields": [
      "cleanConfidence",
      "logitDivergence",
      "shiftedConfidence"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job clinical-shift --promote",
    "status": "ready"
  },
  {
    "jobId": "compute-serving",
    "wave": "wave-2-temporal-clinical-serving",
    "bench": "cvpr-compute-serving-bench",
    "benchPage": "cvpr-compute-serving-bench.html",
    "system": "efficient-vision-serving",
    "theme": "Learning more from less, and not breaking",
    "runner": "run_compute_serving_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "desktop-batch",
      "edge-camera",
      "fleet-peak-load",
      "mobile-live"
    ],
    "minReadiness": 86.9,
    "avgReadiness": 87.58,
    "maxReadiness": 89.1,
    "inputFields": [
      "servingControls",
      "title"
    ],
    "outputFields": [
      "latencyProfile",
      "qualityFloor",
      "retainedEvidence",
      "routingTrace"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job compute-serving --promote",
    "status": "ready"
  },
  {
    "jobId": "constraint-generation",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-constraint-generation-bench",
    "benchPage": "cvpr-constraint-generation-bench.html",
    "system": "controllable-generation-studio",
    "theme": "Making pixels from meaning",
    "runner": "run_constraint_generation_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "layout-rewrite",
      "light-layout-edit",
      "prompt-attack-edit",
      "style-with-locks"
    ],
    "minReadiness": 70.5,
    "avgReadiness": 72.67,
    "maxReadiness": 78.5,
    "inputFields": [
      "asset",
      "generationControls"
    ],
    "outputFields": [
      "editedImage",
      "identityEmbeddingDelta",
      "layoutMask",
      "rewardTrace"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job constraint-generation --promote",
    "status": "ready"
  },
  {
    "jobId": "driving-safety",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-driving-safety-bench",
    "benchPage": "cvpr-driving-safety-bench.html",
    "system": "driving-vla-release-gate",
    "theme": "Using vision to act in the world",
    "runner": "run_driving_safety_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "construction-zone",
      "highway-merge",
      "night-crosswalk",
      "urban-cut-in"
    ],
    "minReadiness": 56.5,
    "avgReadiness": 57.02,
    "maxReadiness": 57.4,
    "inputFields": [
      "asset",
      "safetyControls"
    ],
    "outputFields": [
      "riskTrace",
      "ruleViolations",
      "sceneGroundingMap",
      "timeToCollision"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job driving-safety --promote",
    "status": "ready"
  },
  {
    "jobId": "depth-normal-consistency",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-depth-normal-consistency-bench",
    "benchPage": "cvpr-depth-normal-consistency-bench.html",
    "system": "geometry-consistency-probe",
    "theme": "Recovering the 3D world from flat pictures",
    "runner": "run_depth_normal_consistency_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 0,
    "caseIds": [
      "indoor-low-texture",
      "reflective-surface",
      "thin-chair-legs",
      "wide-room-scale"
    ],
    "minReadiness": 75.7,
    "avgReadiness": 80.4,
    "maxReadiness": 82.5,
    "inputFields": [
      "asset",
      "depthControls"
    ],
    "outputFields": [
      "curvature",
      "depthMap",
      "normalEnergy"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job depth-normal-consistency --promote",
    "status": "ready"
  },
  {
    "jobId": "metric-geometry",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-metric-geometry-bench",
    "benchPage": "cvpr-metric-geometry-bench.html",
    "system": "metric-3d-reconstruction",
    "theme": "Recovering the 3D world from flat pictures",
    "runner": "run_metric_geometry_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "low-texture-indoor",
      "scale-transfer",
      "thin-structure",
      "wide-baseline"
    ],
    "minReadiness": 89.1,
    "avgReadiness": 90.88,
    "maxReadiness": 92.9,
    "inputFields": [
      "asset",
      "geometryControls"
    ],
    "outputFields": [
      "cameraRecovery",
      "optimizationTrace",
      "scaleRecovery"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job metric-geometry --promote",
    "status": "ready"
  },
  {
    "jobId": "corruption-robustness",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-corruption-robustness-bench",
    "benchPage": "cvpr-corruption-robustness-bench.html",
    "system": "robust-perception-gate",
    "theme": "Naming and locating what's in the picture",
    "runner": "run_corruption_robustness_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 0,
    "caseIds": [
      "compression-shift",
      "motion-blur",
      "patch-attack",
      "sensor-noise"
    ],
    "minReadiness": 80.8,
    "avgReadiness": 82.6,
    "maxReadiness": 84.4,
    "inputFields": [
      "asset",
      "corruptionControls"
    ],
    "outputFields": [
      "cleanConfidence",
      "corruptedConfidence",
      "featureCosine",
      "jsDivergence"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job corruption-robustness --promote",
    "status": "ready"
  },
  {
    "jobId": "gaussian-splatting",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-gaussian-splatting-bench",
    "benchPage": "cvpr-gaussian-splatting-bench.html",
    "system": "gaussian-splatting-platform",
    "theme": "Recovering the 3D world from flat pictures",
    "runner": "run_gaussian_splatting_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 3,
    "caseIds": [
      "dense-novel-view",
      "provenance-transfer",
      "semantic-edit",
      "sparse-capture"
    ],
    "minReadiness": 73.6,
    "avgReadiness": 74.7,
    "maxReadiness": 75.2,
    "inputFields": [
      "asset",
      "splatControls"
    ],
    "outputFields": [
      "provenanceProbe",
      "renderProfile",
      "semanticProbe"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job gaussian-splatting --promote",
    "status": "ready"
  },
  {
    "jobId": "prompt-segmentation-robustness",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-prompt-segmentation-robustness-bench",
    "benchPage": "cvpr-prompt-segmentation-robustness-bench.html",
    "system": "interactive-segmentation-gate",
    "theme": "Making pixels from meaning",
    "runner": "run_prompt_segmentation_robustness_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 0,
    "caseIds": [
      "ambiguous-clicks",
      "cluttered-scene",
      "occluded-object",
      "single-object"
    ],
    "minReadiness": 57.8,
    "avgReadiness": 60.95,
    "maxReadiness": 65.4,
    "inputFields": [
      "asset",
      "promptControls"
    ],
    "outputFields": [
      "maskArea",
      "maskOverlap",
      "meanMaskConfidence"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job prompt-segmentation-robustness --promote",
    "status": "ready"
  },
  {
    "jobId": "video-identity-tracking",
    "wave": "wave-3-generation-driving-3d",
    "bench": "cvpr-video-identity-tracking-bench",
    "benchPage": "cvpr-video-identity-tracking-bench.html",
    "system": "video-tracking-release-gate",
    "theme": "Seeing and making things that move",
    "runner": "run_video_identity_tracking_batch",
    "results": 4,
    "expectedResults": 4,
    "validResults": 4,
    "stageDemos": 0,
    "caseIds": [
      "clean-crossing",
      "fast-motion",
      "identity-crossing",
      "long-occlusion"
    ],
    "minReadiness": 79.6,
    "avgReadiness": 83.52,
    "maxReadiness": 88.8,
    "inputFields": [
      "asset",
      "trackingControls"
    ],
    "outputFields": [
      "frames",
      "objects",
      "temporalDelta",
      "trackTensor"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job video-identity-tracking --promote",
    "status": "ready"
  }
];
export const summary = {
  "replay": "cvpr-colab-result-replay",
  "status": "ready",
  "runtimePlane": "google-colab-pro-plus",
  "jobs": 14,
  "replayRows": 14,
  "results": 56,
  "validResults": 56,
  "stageDemosCovered": 30,
  "cachedSystemEvidenceDemos": 3,
  "minReadiness": 44.0,
  "avgReadiness": 75.14,
  "provenanceIssues": 0,
  "releaseGate": "release",
  "notebook": "notebooks/cvpr_gpu_worker.ipynb",
  "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
  "fullStackValidator": "scripts/validate_cvpr_full_stack.py"
};
