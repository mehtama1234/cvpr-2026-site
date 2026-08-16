export const replayInput = {
  "worker": {
    "summary": {
      "worker": "cvpr-colab-gpu-worker",
      "runtimePlane": "google-colab-pro-plus",
      "controlPlane": "local-static-cvpr-site",
      "resultPlane": "registry-and-cached-json",
      "jobs": 10,
      "liveCapable": 10,
      "promotedRunners": 10,
      "cachedCapable": 10,
      "cachedResults": 40,
      "validCachedResults": 40,
      "firstGpuBackedBench": "cvpr-long-tail-grounding-bench",
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
          "jobId": "metric-geometry",
          "bench": "cvpr-metric-geometry-bench",
          "page": "cvpr-metric-geometry-bench.html",
          "priority": 9,
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
          "priority": 10,
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
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "siglip-base-patch16-224",
          "detector": "grounding-dino-tiny",
          "segmenter": "sam-vit-b"
        },
        "inputs": {
          "textQuery": "common clean object",
          "controls": {
            "queryRarity": 18,
            "distractorOverlap": 16,
            "boxAmbiguity": 18,
            "evidenceThreshold": 54
          },
          "asset": "fixtures/open-vocab/common-clean.png"
        },
        "outputs": {
          "boxes": [
            {
              "label": "target",
              "xywh": [
                0.18,
                0.22,
                0.26,
                0.24
              ],
              "score": 0.828
            },
            {
              "label": "distractor",
              "xywh": [
                0.56,
                0.26,
                0.21,
                0.2
              ],
              "score": 0.917
            }
          ],
          "regionScores": {
            "target": 84.7,
            "longTail": 71.7
          },
          "localizedEvidence": 88.9
        },
        "metrics": {
          "readiness": 84.7,
          "localizedEvidence": 88.9,
          "unsupportedRisk": 8.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench"
        }
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "rare-visible",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "siglip-base-patch16-224",
          "detector": "grounding-dino-tiny",
          "segmenter": "sam-vit-b"
        },
        "inputs": {
          "textQuery": "rare visible object",
          "controls": {
            "queryRarity": 66,
            "distractorOverlap": 12,
            "boxAmbiguity": 34,
            "evidenceThreshold": 62
          },
          "asset": "fixtures/open-vocab/rare-visible.png"
        },
        "outputs": {
          "boxes": [
            {
              "label": "target",
              "xywh": [
                0.18,
                0.22,
                0.26,
                0.24
              ],
              "score": 0.768
            },
            {
              "label": "distractor",
              "xywh": [
                0.56,
                0.26,
                0.21,
                0.2
              ],
              "score": 0.837
            }
          ],
          "regionScores": {
            "target": 85.0,
            "longTail": 76.9
          },
          "localizedEvidence": 87.7
        },
        "metrics": {
          "readiness": 83.9,
          "localizedEvidence": 87.7,
          "unsupportedRisk": 16.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench"
        }
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "rare-distractors",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "siglip-base-patch16-224",
          "detector": "grounding-dino-tiny",
          "segmenter": "sam-vit-b"
        },
        "inputs": {
          "textQuery": "rare object with distractors",
          "controls": {
            "queryRarity": 78,
            "distractorOverlap": 28,
            "boxAmbiguity": 28,
            "evidenceThreshold": 76
          },
          "asset": "fixtures/open-vocab/rare-distractors.png"
        },
        "outputs": {
          "boxes": [
            {
              "label": "target",
              "xywh": [
                0.18,
                0.22,
                0.26,
                0.24
              ],
              "score": 0.76
            },
            {
              "label": "distractor",
              "xywh": [
                0.56,
                0.26,
                0.21,
                0.2
              ],
              "score": 0.81
            }
          ],
          "regionScores": {
            "target": 83.6,
            "longTail": 81.4
          },
          "localizedEvidence": 87.1
        },
        "metrics": {
          "readiness": 83.8,
          "localizedEvidence": 87.1,
          "unsupportedRisk": 19.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench"
        }
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "unsupported-query",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "siglip-base-patch16-224",
          "detector": "grounding-dino-tiny",
          "segmenter": "sam-vit-b"
        },
        "inputs": {
          "textQuery": "unsupported text query",
          "controls": {
            "queryRarity": 82,
            "distractorOverlap": 30,
            "boxAmbiguity": 32,
            "evidenceThreshold": 84
          },
          "asset": "fixtures/open-vocab/unsupported-query.png"
        },
        "outputs": {
          "boxes": [
            {
              "label": "target",
              "xywh": [
                0.18,
                0.22,
                0.26,
                0.24
              ],
              "score": 0.753
            },
            {
              "label": "distractor",
              "xywh": [
                0.56,
                0.26,
                0.21,
                0.2
              ],
              "score": 0.799
            }
          ],
          "regionScores": {
            "target": 84.0,
            "longTail": 82.1
          },
          "localizedEvidence": 87.1
        },
        "metrics": {
          "readiness": 83.8,
          "localizedEvidence": 87.1,
          "unsupportedRisk": 20.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-long-tail-grounding-bench"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "mild-noise",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "restorer": "swinir-lightweight",
          "artifactProbe": "real-esrgan-x2"
        },
        "inputs": {
          "degradationControls": {
            "blur": 18,
            "noise": 24,
            "compression": 18,
            "lowLight": 20,
            "hallucinationPenalty": 36
          },
          "asset": "fixtures/restoration/mild-noise.png"
        },
        "outputs": {
          "restoredImage": "fixtures/restoration/mild-noise-restored.png",
          "artifactMap": "fixtures/restoration/mild-noise-artifact-map.png",
          "downstreamScore": 85.3,
          "fidelityScore": 82.2
        },
        "metrics": {
          "readiness": 82.0,
          "downstreamUtility": 85.3,
          "fabricatedDetailRisk": 25.8,
          "fidelityScore": 82.2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "compressed-low-light",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "restorer": "swinir-lightweight",
          "artifactProbe": "real-esrgan-x2"
        },
        "inputs": {
          "degradationControls": {
            "blur": 32,
            "noise": 38,
            "compression": 54,
            "lowLight": 64,
            "hallucinationPenalty": 16
          },
          "asset": "fixtures/restoration/compressed-low-light.png"
        },
        "outputs": {
          "restoredImage": "fixtures/restoration/compressed-low-light-restored.png",
          "artifactMap": "fixtures/restoration/compressed-low-light-artifact-map.png",
          "downstreamScore": 80.9,
          "fidelityScore": 80.3
        },
        "metrics": {
          "readiness": 77.7,
          "downstreamUtility": 80.9,
          "fabricatedDetailRisk": 29.4,
          "fidelityScore": 80.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "motion-blur-task",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "restorer": "swinir-lightweight",
          "artifactProbe": "real-esrgan-x2"
        },
        "inputs": {
          "degradationControls": {
            "blur": 64,
            "noise": 36,
            "compression": 38,
            "lowLight": 36,
            "hallucinationPenalty": 16
          },
          "asset": "fixtures/restoration/motion-blur-task.png"
        },
        "outputs": {
          "restoredImage": "fixtures/restoration/motion-blur-task-restored.png",
          "artifactMap": "fixtures/restoration/motion-blur-task-artifact-map.png",
          "downstreamScore": 81.5,
          "fidelityScore": 79.0
        },
        "metrics": {
          "readiness": 77.7,
          "downstreamUtility": 81.5,
          "fabricatedDetailRisk": 26.5,
          "fidelityScore": 79.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench"
        }
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "over-restored-detail",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "restorer": "swinir-lightweight",
          "artifactProbe": "real-esrgan-x2"
        },
        "inputs": {
          "degradationControls": {
            "blur": 48,
            "noise": 54,
            "compression": 38,
            "lowLight": 56,
            "hallucinationPenalty": 18
          },
          "asset": "fixtures/restoration/over-restored-detail.png"
        },
        "outputs": {
          "restoredImage": "fixtures/restoration/over-restored-detail-restored.png",
          "artifactMap": "fixtures/restoration/over-restored-detail-artifact-map.png",
          "downstreamScore": 81.2,
          "fidelityScore": 80.1
        },
        "metrics": {
          "readiness": 77.8,
          "downstreamUtility": 81.2,
          "fabricatedDetailRisk": 28.6,
          "fidelityScore": 80.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-restoration-fidelity-bench"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "clean-camera",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "detector": "watermark-detector",
          "probe": "clip-perturbation-probe"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 0,
            "generationSource": 56,
            "watermarkVisibility": 100,
            "unlearningProbe": 0
          },
          "asset": "fixtures/adversarial/clean-camera.png"
        },
        "outputs": {
          "provenanceConfidence": 86.4,
          "attackHeatmap": "fixtures/adversarial/clean-camera-attack-heatmap.png",
          "leakageRisk": 9.0,
          "evidence": 82.5
        },
        "metrics": {
          "readiness": 79.7,
          "evidence": 82.5,
          "risk": 17.9,
          "leakageRisk": 9.0,
          "provenanceConfidence": 86.4,
          "attackCoverage": 44.7
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "edited-social-post",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "detector": "watermark-detector",
          "probe": "clip-perturbation-probe"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 0,
            "generationSource": 64,
            "watermarkVisibility": 98,
            "unlearningProbe": 10
          },
          "asset": "fixtures/adversarial/edited-social-post.png"
        },
        "outputs": {
          "provenanceConfidence": 87.9,
          "attackHeatmap": "fixtures/adversarial/edited-social-post-attack-heatmap.png",
          "leakageRisk": 14.8,
          "evidence": 82.9
        },
        "metrics": {
          "readiness": 79.8,
          "evidence": 82.9,
          "risk": 21.0,
          "leakageRisk": 14.8,
          "provenanceConfidence": 87.9,
          "attackCoverage": 47.2
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "synthetic-watermarked",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "detector": "watermark-detector",
          "probe": "clip-perturbation-probe"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 0,
            "generationSource": 84,
            "watermarkVisibility": 94,
            "unlearningProbe": 44
          },
          "asset": "fixtures/adversarial/synthetic-watermarked.png"
        },
        "outputs": {
          "provenanceConfidence": 92.0,
          "attackHeatmap": "fixtures/adversarial/synthetic-watermarked-attack-heatmap.png",
          "leakageRisk": 32.9,
          "evidence": 83.6
        },
        "metrics": {
          "readiness": 79.9,
          "evidence": 83.6,
          "risk": 29.9,
          "leakageRisk": 32.9,
          "provenanceConfidence": 92.0,
          "attackCoverage": 54.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench"
        }
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "adaptive-attack",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "detector": "watermark-detector",
          "probe": "clip-perturbation-probe"
        },
        "inputs": {
          "attackControls": {
            "attackStrength": 12,
            "generationSource": 89,
            "watermarkVisibility": 100,
            "unlearningProbe": 0
          },
          "asset": "fixtures/adversarial/adaptive-attack.png"
        },
        "outputs": {
          "provenanceConfidence": 93.8,
          "attackHeatmap": "fixtures/adversarial/adaptive-attack-attack-heatmap.png",
          "leakageRisk": 17.4,
          "evidence": 85.3
        },
        "metrics": {
          "readiness": 80.8,
          "evidence": 85.3,
          "risk": 30.3,
          "leakageRisk": 17.4,
          "provenanceConfidence": 93.8,
          "attackCoverage": 52.6
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-adversarial-provenance-bench"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "short-stable",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "tracker": "video-feature-tracker",
          "flow": "raft-lite",
          "rolloutProbe": "world-rollout-probe"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 24,
            "identityDensity": 28,
            "physicsViolations": 14,
            "memoryWindow": 72
          },
          "asset": "fixtures/temporal/short-stable.mp4"
        },
        "outputs": {
          "identityTracks": "fixtures/temporal/short-stable-identity-tracks.json",
          "contactEvents": "fixtures/temporal/short-stable-contacts.json",
          "driftCurve": [
            5.2,
            10.5,
            15.8,
            21.0
          ],
          "rolloutPlausibility": 85.7
        },
        "metrics": {
          "readiness": 83.3,
          "identityStability": 80.6,
          "contactConsistency": 86.6,
          "rolloutPlausibility": 85.7,
          "drift": 21.0,
          "memoryLoad": 26.6
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "crowded-memory",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "tracker": "video-feature-tracker",
          "flow": "raft-lite",
          "rolloutProbe": "world-rollout-probe"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 36,
            "identityDensity": 76,
            "physicsViolations": 26,
            "memoryWindow": 82
          },
          "asset": "fixtures/temporal/crowded-memory.mp4"
        },
        "outputs": {
          "identityTracks": "fixtures/temporal/crowded-memory-identity-tracks.json",
          "contactEvents": "fixtures/temporal/crowded-memory-contacts.json",
          "driftCurve": [
            8.2,
            16.5,
            24.8,
            33.0
          ],
          "rolloutPlausibility": 80.0
        },
        "metrics": {
          "readiness": 75.9,
          "identityStability": 73.8,
          "contactConsistency": 79.4,
          "rolloutPlausibility": 80.0,
          "drift": 33.0,
          "memoryLoad": 43.8
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "contact-heavy",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "tracker": "video-feature-tracker",
          "flow": "raft-lite",
          "rolloutProbe": "world-rollout-probe"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 56,
            "identityDensity": 52,
            "physicsViolations": 20,
            "memoryWindow": 82
          },
          "asset": "fixtures/temporal/contact-heavy.mp4"
        },
        "outputs": {
          "identityTracks": "fixtures/temporal/contact-heavy-identity-tracks.json",
          "contactEvents": "fixtures/temporal/contact-heavy-contacts.json",
          "driftCurve": [
            8.6,
            17.1,
            25.7,
            34.3
          ],
          "rolloutPlausibility": 77.1
        },
        "metrics": {
          "readiness": 76.2,
          "identityStability": 74.0,
          "contactConsistency": 83.6,
          "rolloutPlausibility": 77.1,
          "drift": 34.3,
          "memoryLoad": 42.5
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "long-rollout-drift",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "tracker": "video-feature-tracker",
          "flow": "raft-lite",
          "rolloutProbe": "world-rollout-probe"
        },
        "inputs": {
          "trackingControls": {
            "rolloutLength": 66,
            "identityDensity": 68,
            "physicsViolations": 12,
            "memoryWindow": 92
          },
          "asset": "fixtures/temporal/long-rollout-drift.mp4"
        },
        "outputs": {
          "identityTracks": "fixtures/temporal/long-rollout-drift-identity-tracks.json",
          "contactEvents": "fixtures/temporal/long-rollout-drift-contacts.json",
          "driftCurve": [
            9.0,
            18.1,
            27.1,
            36.1
          ],
          "rolloutPlausibility": 75.5
        },
        "metrics": {
          "readiness": 75.9,
          "identityStability": 72.7,
          "contactConsistency": 86.5,
          "rolloutPlausibility": 75.5,
          "drift": 36.1,
          "memoryLoad": 48.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "same-site-clean",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "dicom-embedding-shift-probe",
          "calibration": "temperature-calibration-head",
          "triage": "uncertainty-triage-head"
        },
        "inputs": {
          "clinicalControls": {
            "scannerShift": 16,
            "cohortMix": 22,
            "labelNoise": 8,
            "reviewThreshold": 62
          },
          "asset": "fixtures/clinical/same-site-clean.json"
        },
        "outputs": {
          "domainEmbeddings": "fixtures/clinical/same-site-clean-domain-embeddings.npy",
          "calibrationCurve": "fixtures/clinical/same-site-clean-calibration.json",
          "triageScores": "fixtures/clinical/same-site-clean-triage.json",
          "clinicalEvidence": 90.3
        },
        "metrics": {
          "readiness": 88.5,
          "shiftLoad": 16.7,
          "calibration": 84.3,
          "domainEvidence": 89.1,
          "triageRate": 25.4,
          "residualRisk": 9.6,
          "clinicalEvidence": 90.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "new-scanner",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "dicom-embedding-shift-probe",
          "calibration": "temperature-calibration-head",
          "triage": "uncertainty-triage-head"
        },
        "inputs": {
          "clinicalControls": {
            "scannerShift": 58,
            "cohortMix": 34,
            "labelNoise": 16,
            "reviewThreshold": 68
          },
          "asset": "fixtures/clinical/new-scanner.json"
        },
        "outputs": {
          "domainEmbeddings": "fixtures/clinical/new-scanner-domain-embeddings.npy",
          "calibrationCurve": "fixtures/clinical/new-scanner-calibration.json",
          "triageScores": "fixtures/clinical/new-scanner-triage.json",
          "clinicalEvidence": 84.8
        },
        "metrics": {
          "readiness": 80.5,
          "shiftLoad": 40.5,
          "calibration": 77.5,
          "domainEvidence": 78.6,
          "triageRate": 39.7,
          "residualRisk": 21.6,
          "clinicalEvidence": 84.8
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "external-hospital",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "dicom-embedding-shift-probe",
          "calibration": "temperature-calibration-head",
          "triage": "uncertainty-triage-head"
        },
        "inputs": {
          "clinicalControls": {
            "scannerShift": 52,
            "cohortMix": 72,
            "labelNoise": 16,
            "reviewThreshold": 74
          },
          "asset": "fixtures/clinical/external-hospital.json"
        },
        "outputs": {
          "domainEmbeddings": "fixtures/clinical/external-hospital-domain-embeddings.npy",
          "calibrationCurve": "fixtures/clinical/external-hospital-calibration.json",
          "triageScores": "fixtures/clinical/external-hospital-triage.json",
          "clinicalEvidence": 82.3
        },
        "metrics": {
          "readiness": 77.1,
          "shiftLoad": 52.4,
          "calibration": 75.4,
          "domainEvidence": 72.9,
          "triageRate": 47.0,
          "residualRisk": 26.4,
          "clinicalEvidence": 82.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench"
        }
      },
      {
        "jobId": "clinical-shift",
        "caseId": "noisy-rare-cohort",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "embedding": "dicom-embedding-shift-probe",
          "calibration": "temperature-calibration-head",
          "triage": "uncertainty-triage-head"
        },
        "inputs": {
          "clinicalControls": {
            "scannerShift": 76,
            "cohortMix": 84,
            "labelNoise": 20,
            "reviewThreshold": 84
          },
          "asset": "fixtures/clinical/noisy-rare-cohort.json"
        },
        "outputs": {
          "domainEmbeddings": "fixtures/clinical/noisy-rare-cohort-domain-embeddings.npy",
          "calibrationCurve": "fixtures/clinical/noisy-rare-cohort-calibration.json",
          "triageScores": "fixtures/clinical/noisy-rare-cohort-triage.json",
          "clinicalEvidence": 79.1
        },
        "metrics": {
          "readiness": 72.5,
          "shiftLoad": 67.8,
          "calibration": 72.4,
          "domainEvidence": 66.0,
          "triageRate": 57.0,
          "residualRisk": 33.5,
          "clinicalEvidence": 79.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-clinical-shift-bench"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "desktop-batch",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "encoder": "quantized-vision-encoder",
          "router": "student-router",
          "profiler": "latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 90,
            "quantizationLevel": 16,
            "studentRouting": 30,
            "escalationCost": 10
          },
          "asset": "fixtures/compute/desktop-batch.json"
        },
        "outputs": {
          "latencyProfile": "fixtures/compute/desktop-batch-latency.json",
          "qualityFloor": 87.4,
          "routingTrace": "fixtures/compute/desktop-batch-routing.json",
          "retainedEvidence": 90.9
        },
        "metrics": {
          "readiness": 76.6,
          "latency": 58.7,
          "retainedEvidence": 90.9,
          "qualityFloor": 87.4,
          "escalationRate": 17.3,
          "costSaving": 38.5,
          "risk": 13.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "mobile-live",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "encoder": "quantized-vision-encoder",
          "router": "student-router",
          "profiler": "latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 82,
            "quantizationLevel": 18,
            "studentRouting": 60,
            "escalationCost": 10
          },
          "asset": "fixtures/compute/mobile-live.json"
        },
        "outputs": {
          "latencyProfile": "fixtures/compute/mobile-live-latency.json",
          "qualityFloor": 81.6,
          "routingTrace": "fixtures/compute/mobile-live-routing.json",
          "retainedEvidence": 87.5
        },
        "metrics": {
          "readiness": 74.6,
          "latency": 55.5,
          "retainedEvidence": 87.5,
          "qualityFloor": 81.6,
          "escalationRate": 29.8,
          "costSaving": 45.2,
          "risk": 18.8
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "edge-camera",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "encoder": "quantized-vision-encoder",
          "router": "student-router",
          "profiler": "latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 78,
            "quantizationLevel": 20,
            "studentRouting": 55,
            "escalationCost": 8
          },
          "asset": "fixtures/compute/edge-camera.json"
        },
        "outputs": {
          "latencyProfile": "fixtures/compute/edge-camera-latency.json",
          "qualityFloor": 81.2,
          "routingTrace": "fixtures/compute/edge-camera-routing.json",
          "retainedEvidence": 85.7
        },
        "metrics": {
          "readiness": 73.5,
          "latency": 56.9,
          "retainedEvidence": 85.7,
          "qualityFloor": 81.2,
          "escalationRate": 28.3,
          "costSaving": 44.2,
          "risk": 19.5
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench"
        }
      },
      {
        "jobId": "compute-serving",
        "caseId": "fleet-peak-load",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "encoder": "quantized-vision-encoder",
          "router": "student-router",
          "profiler": "latency-profiler"
        },
        "inputs": {
          "servingControls": {
            "tokenBudget": 84,
            "quantizationLevel": 22,
            "studentRouting": 65,
            "escalationCost": 8
          },
          "asset": "fixtures/compute/fleet-peak-load.json"
        },
        "outputs": {
          "latencyProfile": "fixtures/compute/fleet-peak-load-latency.json",
          "qualityFloor": 80.1,
          "routingTrace": "fixtures/compute/fleet-peak-load-routing.json",
          "retainedEvidence": 87.6
        },
        "metrics": {
          "readiness": 74.6,
          "latency": 52.5,
          "retainedEvidence": 87.6,
          "qualityFloor": 80.1,
          "escalationRate": 31.3,
          "costSaving": 48.2,
          "risk": 20.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-compute-serving-bench"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "light-layout-edit",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "layout": "layout-controlnet",
          "identity": "identity-embedding-lock",
          "reward": "preference-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 24,
            "layoutLock": 78,
            "identityLock": 82,
            "adversarialPromptPressure": 18
          },
          "asset": "fixtures/generation/light-layout-edit.png"
        },
        "outputs": {
          "editedImage": "fixtures/generation/light-layout-edit-edited.png",
          "layoutMask": "fixtures/generation/light-layout-edit-layout-mask.png",
          "identityEmbeddingDelta": 18.5,
          "rewardTrace": "fixtures/generation/light-layout-edit-reward.json"
        },
        "metrics": {
          "readiness": 84.9,
          "editPressure": 21.0,
          "constraintSatisfaction": 86.1,
          "identityPreservation": 85.0,
          "editLocality": 82.8,
          "rewardAlignment": 87.3,
          "identityDamage": 18.5,
          "provenanceRisk": 17.6
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "style-with-locks",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "layout": "layout-controlnet",
          "identity": "identity-embedding-lock",
          "reward": "preference-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 52,
            "layoutLock": 68,
            "identityLock": 80,
            "adversarialPromptPressure": 32
          },
          "asset": "fixtures/generation/style-with-locks.png"
        },
        "outputs": {
          "editedImage": "fixtures/generation/style-with-locks-edited.png",
          "layoutMask": "fixtures/generation/style-with-locks-layout-mask.png",
          "identityEmbeddingDelta": 31.8,
          "rewardTrace": "fixtures/generation/style-with-locks-reward.json"
        },
        "metrics": {
          "readiness": 77.4,
          "editPressure": 39.2,
          "constraintSatisfaction": 80.9,
          "identityPreservation": 77.3,
          "editLocality": 74.4,
          "rewardAlignment": 81.3,
          "identityDamage": 31.8,
          "provenanceRisk": 29.5
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "layout-rewrite",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "layout": "layout-controlnet",
          "identity": "identity-embedding-lock",
          "reward": "preference-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 72,
            "layoutLock": 62,
            "identityLock": 92,
            "adversarialPromptPressure": 28
          },
          "asset": "fixtures/generation/layout-rewrite.png"
        },
        "outputs": {
          "editedImage": "fixtures/generation/layout-rewrite-edited.png",
          "layoutMask": "fixtures/generation/layout-rewrite-layout-mask.png",
          "identityEmbeddingDelta": 33.1,
          "rewardTrace": "fixtures/generation/layout-rewrite-reward.json"
        },
        "metrics": {
          "readiness": 77.5,
          "editPressure": 45.7,
          "constraintSatisfaction": 81.1,
          "identityPreservation": 78.4,
          "editLocality": 72.9,
          "rewardAlignment": 82.4,
          "identityDamage": 33.1,
          "provenanceRisk": 29.9
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench"
        }
      },
      {
        "jobId": "constraint-generation",
        "caseId": "prompt-attack-edit",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "layout": "layout-controlnet",
          "identity": "identity-embedding-lock",
          "reward": "preference-reward-probe"
        },
        "inputs": {
          "generationControls": {
            "editStrength": 78,
            "layoutLock": 66,
            "identityLock": 92,
            "adversarialPromptPressure": 28
          },
          "asset": "fixtures/generation/prompt-attack-edit.png"
        },
        "outputs": {
          "editedImage": "fixtures/generation/prompt-attack-edit-edited.png",
          "layoutMask": "fixtures/generation/prompt-attack-edit-layout-mask.png",
          "identityEmbeddingDelta": 34.8,
          "rewardTrace": "fixtures/generation/prompt-attack-edit-reward.json"
        },
        "metrics": {
          "readiness": 77.6,
          "editPressure": 47.7,
          "constraintSatisfaction": 82.3,
          "identityPreservation": 77.3,
          "editLocality": 73.6,
          "rewardAlignment": 82.5,
          "identityDamage": 34.8,
          "provenanceRisk": 30.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-constraint-generation-bench"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "urban-cut-in",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "grounder": "vla-scene-grounder",
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
          "asset": "fixtures/driving/urban-cut-in.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "fixtures/driving/urban-cut-in-grounding.png",
          "timeToCollision": 5.15,
          "riskTrace": "fixtures/driving/urban-cut-in-risk.json",
          "ruleViolations": 24.0
        },
        "metrics": {
          "readiness": 68.1,
          "sceneGrounding": 85.7,
          "timeToCollision": 5.15,
          "risk": 33.4,
          "ruleViolation": 24.0,
          "abstention": 7.6
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "night-crosswalk",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "grounder": "vla-scene-grounder",
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
          "asset": "fixtures/driving/night-crosswalk.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "fixtures/driving/night-crosswalk-grounding.png",
          "timeToCollision": 5.73,
          "riskTrace": "fixtures/driving/night-crosswalk-risk.json",
          "ruleViolations": 23.5
        },
        "metrics": {
          "readiness": 68.2,
          "sceneGrounding": 84.2,
          "timeToCollision": 5.73,
          "risk": 31.7,
          "ruleViolation": 23.5,
          "abstention": 7.8
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "highway-merge",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "grounder": "vla-scene-grounder",
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
          "asset": "fixtures/driving/highway-merge.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "fixtures/driving/highway-merge-grounding.png",
          "timeToCollision": 4.34,
          "riskTrace": "fixtures/driving/highway-merge-risk.json",
          "ruleViolations": 24.1
        },
        "metrics": {
          "readiness": 68.2,
          "sceneGrounding": 87.3,
          "timeToCollision": 4.34,
          "risk": 34.6,
          "ruleViolation": 24.1,
          "abstention": 7.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench"
        }
      },
      {
        "jobId": "driving-safety",
        "caseId": "construction-zone",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "grounder": "vla-scene-grounder",
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
          "asset": "fixtures/driving/construction-zone.mp4"
        },
        "outputs": {
          "sceneGroundingMap": "fixtures/driving/construction-zone-grounding.png",
          "timeToCollision": 5.82,
          "riskTrace": "fixtures/driving/construction-zone-risk.json",
          "ruleViolations": 23.7
        },
        "metrics": {
          "readiness": 68.2,
          "sceneGrounding": 83.9,
          "timeToCollision": 5.82,
          "risk": 31.9,
          "ruleViolation": 23.7,
          "abstention": 9.1
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-driving-safety-bench"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "wide-baseline",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "pose": "torch-pose-bundle-adjuster",
          "scale": "metric-scale-probe",
          "surface": "surface-consistency-head"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 82,
            "textureSparsity": 18,
            "scaleAmbiguity": 24,
            "surfaceComplexity": 42
          },
          "asset": "fixtures/geometry/wide-baseline.json"
        },
        "outputs": {
          "poseGraph": "fixtures/geometry/wide-baseline-pose-graph.json",
          "scaleTrace": "fixtures/geometry/wide-baseline-scale-trace.json",
          "surfaceResidualMap": "fixtures/geometry/wide-baseline-surface-residual.png",
          "topologyWarnings": 13.9
        },
        "metrics": {
          "readiness": 85.8,
          "poseEvidence": 87.0,
          "metricEvidence": 86.9,
          "surfaceConsistency": 83.1,
          "scaleDrift": 10.1,
          "topologyRisk": 13.9
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "scale-transfer",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "pose": "torch-pose-bundle-adjuster",
          "scale": "metric-scale-probe",
          "surface": "surface-consistency-head"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 66,
            "textureSparsity": 28,
            "scaleAmbiguity": 44,
            "surfaceComplexity": 46
          },
          "asset": "fixtures/geometry/scale-transfer.json"
        },
        "outputs": {
          "poseGraph": "fixtures/geometry/scale-transfer-pose-graph.json",
          "scaleTrace": "fixtures/geometry/scale-transfer-scale-trace.json",
          "surfaceResidualMap": "fixtures/geometry/scale-transfer-surface-residual.png",
          "topologyWarnings": 21.0
        },
        "metrics": {
          "readiness": 78.7,
          "poseEvidence": 79.2,
          "metricEvidence": 78.8,
          "surfaceConsistency": 78.4,
          "scaleDrift": 21.5,
          "topologyRisk": 21.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "thin-structure",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "pose": "torch-pose-bundle-adjuster",
          "scale": "metric-scale-probe",
          "surface": "surface-consistency-head"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 58,
            "textureSparsity": 34,
            "scaleAmbiguity": 32,
            "surfaceComplexity": 72
          },
          "asset": "fixtures/geometry/thin-structure.json"
        },
        "outputs": {
          "poseGraph": "fixtures/geometry/thin-structure-pose-graph.json",
          "scaleTrace": "fixtures/geometry/thin-structure-scale-trace.json",
          "surfaceResidualMap": "fixtures/geometry/thin-structure-surface-residual.png",
          "topologyWarnings": 30.0
        },
        "metrics": {
          "readiness": 75.5,
          "poseEvidence": 76.8,
          "metricEvidence": 80.4,
          "surfaceConsistency": 72.5,
          "scaleDrift": 22.7,
          "topologyRisk": 30.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench"
        }
      },
      {
        "jobId": "metric-geometry",
        "caseId": "low-texture-indoor",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "pose": "torch-pose-bundle-adjuster",
          "scale": "metric-scale-probe",
          "surface": "surface-consistency-head"
        },
        "inputs": {
          "geometryControls": {
            "baseline": 54,
            "textureSparsity": 58,
            "scaleAmbiguity": 48,
            "surfaceComplexity": 50
          },
          "asset": "fixtures/geometry/low-texture-indoor.json"
        },
        "outputs": {
          "poseGraph": "fixtures/geometry/low-texture-indoor-pose-graph.json",
          "scaleTrace": "fixtures/geometry/low-texture-indoor-scale-trace.json",
          "surfaceResidualMap": "fixtures/geometry/low-texture-indoor-surface-residual.png",
          "topologyWarnings": 30.0
        },
        "metrics": {
          "readiness": 72.0,
          "poseEvidence": 70.1,
          "metricEvidence": 74.7,
          "surfaceConsistency": 72.2,
          "scaleDrift": 29.9,
          "topologyRisk": 30.0
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-metric-geometry-bench"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "dense-novel-view",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "renderer": "torch-splat-renderer",
          "semantic": "semantic-splat-attach",
          "provenance": "provenance-trace-head"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 86,
            "splatDensity": 78,
            "semanticEntropy": 24,
            "provenanceVisibility": 70
          },
          "asset": "fixtures/splats/dense-novel-view.json"
        },
        "outputs": {
          "novelViewRenders": "fixtures/splats/dense-novel-view-renders/",
          "semanticSplatMap": "fixtures/splats/dense-novel-view-semantic-map.json",
          "provenanceTrace": "fixtures/splats/dense-novel-view-provenance.json",
          "editLeakageReport": 16.7
        },
        "metrics": {
          "readiness": 85.6,
          "renderFidelity": 86.6,
          "semanticAttachment": 86.4,
          "provenanceTrace": 85.5,
          "viewInstability": 9.4,
          "editLeakageRisk": 16.7
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "semantic-edit",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "renderer": "torch-splat-renderer",
          "semantic": "semantic-splat-attach",
          "provenance": "provenance-trace-head"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 74,
            "splatDensity": 72,
            "semanticEntropy": 34,
            "provenanceVisibility": 76
          },
          "asset": "fixtures/splats/semantic-edit.json"
        },
        "outputs": {
          "novelViewRenders": "fixtures/splats/semantic-edit-renders/",
          "semanticSplatMap": "fixtures/splats/semantic-edit-semantic-map.json",
          "provenanceTrace": "fixtures/splats/semantic-edit-provenance.json",
          "editLeakageReport": 21.4
        },
        "metrics": {
          "readiness": 82.2,
          "renderFidelity": 81.5,
          "semanticAttachment": 82.4,
          "provenanceTrace": 86.1,
          "viewInstability": 15.7,
          "editLeakageRisk": 21.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "provenance-transfer",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "renderer": "torch-splat-renderer",
          "semantic": "semantic-splat-attach",
          "provenance": "provenance-trace-head"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 68,
            "splatDensity": 70,
            "semanticEntropy": 42,
            "provenanceVisibility": 84
          },
          "asset": "fixtures/splats/provenance-transfer.json"
        },
        "outputs": {
          "novelViewRenders": "fixtures/splats/provenance-transfer-renders/",
          "semanticSplatMap": "fixtures/splats/provenance-transfer-semantic-map.json",
          "provenanceTrace": "fixtures/splats/provenance-transfer-provenance.json",
          "editLeakageReport": 24.3
        },
        "metrics": {
          "readiness": 80.5,
          "renderFidelity": 78.9,
          "semanticAttachment": 79.8,
          "provenanceTrace": 87.7,
          "viewInstability": 18.8,
          "editLeakageRisk": 24.3
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench"
        }
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "sparse-capture",
        "mode": "cached-real",
        "createdAt": "2026-08-15T00:00:00Z",
        "model": {
          "renderer": "torch-splat-renderer",
          "semantic": "semantic-splat-attach",
          "provenance": "provenance-trace-head"
        },
        "inputs": {
          "splatControls": {
            "viewCount": 62,
            "splatDensity": 66,
            "semanticEntropy": 46,
            "provenanceVisibility": 72
          },
          "asset": "fixtures/splats/sparse-capture.json"
        },
        "outputs": {
          "novelViewRenders": "fixtures/splats/sparse-capture-renders/",
          "semanticSplatMap": "fixtures/splats/sparse-capture-semantic-map.json",
          "provenanceTrace": "fixtures/splats/sparse-capture-provenance.json",
          "editLeakageReport": 27.4
        },
        "metrics": {
          "readiness": 77.7,
          "renderFidelity": 76.2,
          "semanticAttachment": 77.8,
          "provenanceTrace": 83.8,
          "viewInstability": 23.2,
          "editLeakageRisk": 27.4
        },
        "provenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-gaussian-splatting-bench"
        }
      }
    ]
  },
  "planner": {
    "summary": {
      "planner": "cvpr-colab-execution-planner",
      "status": "ready",
      "runtimePlane": "google-colab-pro-plus",
      "jobs": 10,
      "waves": 3,
      "expectedResults": 40,
      "cachedResults": 40,
      "colabCoveredBenches": 10,
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
        "jobs": 4,
        "expectedResults": 16,
        "cachedResults": 16,
        "gpuClasses": [
          "L4/A100"
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
      "proPlusJobs": 10,
      "proPlusWaves": 3,
      "expectedLiveResults": 40,
      "cachedResults": 40,
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
      "workerJobs": 10,
      "cachedResults": 40,
      "liveIntakeResults": 40,
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
    "minReadiness": 83.8,
    "avgReadiness": 84.05,
    "maxReadiness": 84.7,
    "inputFields": [
      "asset",
      "controls",
      "textQuery"
    ],
    "outputFields": [
      "boxes",
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
    "minReadiness": 77.7,
    "avgReadiness": 78.8,
    "maxReadiness": 82.0,
    "inputFields": [
      "asset",
      "degradationControls"
    ],
    "outputFields": [
      "artifactMap",
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
    "minReadiness": 79.7,
    "avgReadiness": 80.05,
    "maxReadiness": 80.8,
    "inputFields": [
      "asset",
      "attackControls"
    ],
    "outputFields": [
      "attackHeatmap",
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
    "minReadiness": 75.9,
    "avgReadiness": 77.83,
    "maxReadiness": 83.3,
    "inputFields": [
      "asset",
      "trackingControls"
    ],
    "outputFields": [
      "contactEvents",
      "driftCurve",
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
      "external-hospital",
      "new-scanner",
      "noisy-rare-cohort",
      "same-site-clean"
    ],
    "minReadiness": 72.5,
    "avgReadiness": 79.65,
    "maxReadiness": 88.5,
    "inputFields": [
      "asset",
      "clinicalControls"
    ],
    "outputFields": [
      "calibrationCurve",
      "clinicalEvidence",
      "domainEmbeddings",
      "triageScores"
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
    "minReadiness": 73.5,
    "avgReadiness": 74.82,
    "maxReadiness": 76.6,
    "inputFields": [
      "asset",
      "servingControls"
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
    "minReadiness": 77.4,
    "avgReadiness": 79.35,
    "maxReadiness": 84.9,
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
    "minReadiness": 68.1,
    "avgReadiness": 68.17,
    "maxReadiness": 68.2,
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
    "minReadiness": 72.0,
    "avgReadiness": 78.0,
    "maxReadiness": 85.8,
    "inputFields": [
      "asset",
      "geometryControls"
    ],
    "outputFields": [
      "poseGraph",
      "scaleTrace",
      "surfaceResidualMap",
      "topologyWarnings"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job metric-geometry --promote",
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
    "minReadiness": 77.7,
    "avgReadiness": 81.5,
    "maxReadiness": 85.6,
    "inputFields": [
      "asset",
      "splatControls"
    ],
    "outputFields": [
      "editLeakageReport",
      "novelViewRenders",
      "provenanceTrace",
      "semanticSplatMap"
    ],
    "provenanceIssues": 0,
    "missingFields": [],
    "promotionCommand": "python3 scripts/stage_cvpr_live_colab_export.py --job gaussian-splatting --promote",
    "status": "ready"
  }
];
export const summary = {
  "replay": "cvpr-colab-result-replay",
  "status": "ready",
  "runtimePlane": "google-colab-pro-plus",
  "jobs": 10,
  "replayRows": 10,
  "results": 40,
  "validResults": 40,
  "stageDemosCovered": 30,
  "cachedSystemEvidenceDemos": 3,
  "minReadiness": 68.1,
  "avgReadiness": 78.22,
  "provenanceIssues": 0,
  "releaseGate": "release",
  "notebook": "notebooks/cvpr_gpu_worker.ipynb",
  "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
  "fullStackValidator": "scripts/validate_cvpr_full_stack.py"
};
