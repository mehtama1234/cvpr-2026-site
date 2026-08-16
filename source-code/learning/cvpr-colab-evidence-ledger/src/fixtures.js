export const ledgerInput = {
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
  "importReport": {
    "summary": {
      "validator": "validate_cvpr_colab_results",
      "runtimePlane": "google-colab-pro-plus",
      "expectedMode": "cached-real",
      "jobs": 10,
      "expectedResults": 40,
      "actualResults": 40,
      "validJobs": 10,
      "issues": 0,
      "status": "valid"
    },
    "jobs": [
      {
        "jobId": "open-vocab-grounding",
        "bench": "cvpr-long-tail-grounding-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "restoration-fidelity",
        "bench": "cvpr-restoration-fidelity-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "adversarial-provenance",
        "bench": "cvpr-adversarial-provenance-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "temporal-rollout",
        "bench": "cvpr-temporal-rollout-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "clinical-shift",
        "bench": "cvpr-clinical-shift-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "compute-serving",
        "bench": "cvpr-compute-serving-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "constraint-generation",
        "bench": "cvpr-constraint-generation-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "driving-safety",
        "bench": "cvpr-driving-safety-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "metric-geometry",
        "bench": "cvpr-metric-geometry-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "gaussian-splatting",
        "bench": "cvpr-gaussian-splatting-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "ready": true
      }
    ],
    "issues": []
  },
  "liveIntake": {
    "summary": {
      "validator": "validate_cvpr_colab_results",
      "runtimePlane": "google-colab-pro-plus",
      "expectedMode": "live-colab",
      "jobs": 10,
      "expectedResults": 40,
      "actualResults": 40,
      "validJobs": 10,
      "issues": 0,
      "status": "valid",
      "intake": "cvpr-colab-live-intake",
      "export": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
      "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "promoted": false
    },
    "jobs": [
      {
        "jobId": "open-vocab-grounding",
        "bench": "cvpr-long-tail-grounding-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "restoration-fidelity",
        "bench": "cvpr-restoration-fidelity-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "adversarial-provenance",
        "bench": "cvpr-adversarial-provenance-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "temporal-rollout",
        "bench": "cvpr-temporal-rollout-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "clinical-shift",
        "bench": "cvpr-clinical-shift-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "compute-serving",
        "bench": "cvpr-compute-serving-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "constraint-generation",
        "bench": "cvpr-constraint-generation-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "driving-safety",
        "bench": "cvpr-driving-safety-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "metric-geometry",
        "bench": "cvpr-metric-geometry-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "gaussian-splatting",
        "bench": "cvpr-gaussian-splatting-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "ready": true
      }
    ],
    "issues": []
  },
  "promotion": {
    "summary": {
      "validator": "validate_cvpr_colab_results",
      "runtimePlane": "google-colab-pro-plus",
      "expectedMode": "live-colab",
      "jobs": 10,
      "expectedResults": 40,
      "actualResults": 40,
      "validJobs": 10,
      "issues": 0,
      "status": "valid",
      "intake": "cvpr-colab-live-intake",
      "export": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
      "canonicalArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
      "promoted": true
    },
    "jobs": [
      {
        "jobId": "open-vocab-grounding",
        "bench": "cvpr-long-tail-grounding-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "restoration-fidelity",
        "bench": "cvpr-restoration-fidelity-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "adversarial-provenance",
        "bench": "cvpr-adversarial-provenance-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "temporal-rollout",
        "bench": "cvpr-temporal-rollout-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "clinical-shift",
        "bench": "cvpr-clinical-shift-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "compute-serving",
        "bench": "cvpr-compute-serving-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "constraint-generation",
        "bench": "cvpr-constraint-generation-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "driving-safety",
        "bench": "cvpr-driving-safety-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "metric-geometry",
        "bench": "cvpr-metric-geometry-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
        "ready": true
      },
      {
        "jobId": "gaussian-splatting",
        "bench": "cvpr-gaussian-splatting-bench",
        "expectedCases": 4,
        "actualCases": 4,
        "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "ready": true
      }
    ],
    "issues": []
  },
  "promotionDelta": {
    "summary": {
      "delta": "cvpr-colab-promotion-delta",
      "status": "release",
      "cases": 40,
      "jobs": 10,
      "missing": 0,
      "modeMismatches": 0,
      "regressions": 0,
      "maxReadinessDrop": 0.0,
      "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "promotedArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
      "promotionStatus": "valid"
    },
    "rows": [
      {
        "jobId": "adversarial-provenance",
        "caseId": "adaptive-attack",
        "readinessBefore": 80.8,
        "readinessAfter": 80.8,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "attackCoverage": 0.0,
          "evidence": 0.0,
          "leakageRisk": 0.0,
          "provenanceConfidence": 0.0,
          "readiness": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "clean-camera",
        "readinessBefore": 79.7,
        "readinessAfter": 79.7,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "attackCoverage": 0.0,
          "evidence": 0.0,
          "leakageRisk": 0.0,
          "provenanceConfidence": 0.0,
          "readiness": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "edited-social-post",
        "readinessBefore": 79.8,
        "readinessAfter": 79.8,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "attackCoverage": 0.0,
          "evidence": 0.0,
          "leakageRisk": 0.0,
          "provenanceConfidence": 0.0,
          "readiness": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "adversarial-provenance",
        "caseId": "synthetic-watermarked",
        "readinessBefore": 79.9,
        "readinessAfter": 79.9,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "attackCoverage": 0.0,
          "evidence": 0.0,
          "leakageRisk": 0.0,
          "provenanceConfidence": 0.0,
          "readiness": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "clinical-shift",
        "caseId": "external-hospital",
        "readinessBefore": 77.1,
        "readinessAfter": 77.1,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "calibration": 0.0,
          "clinicalEvidence": 0.0,
          "domainEvidence": 0.0,
          "readiness": 0.0,
          "residualRisk": 0.0,
          "shiftLoad": 0.0,
          "triageRate": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "clinical-shift",
        "caseId": "new-scanner",
        "readinessBefore": 80.5,
        "readinessAfter": 80.5,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "calibration": 0.0,
          "clinicalEvidence": 0.0,
          "domainEvidence": 0.0,
          "readiness": 0.0,
          "residualRisk": 0.0,
          "shiftLoad": 0.0,
          "triageRate": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "clinical-shift",
        "caseId": "noisy-rare-cohort",
        "readinessBefore": 72.5,
        "readinessAfter": 72.5,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "calibration": 0.0,
          "clinicalEvidence": 0.0,
          "domainEvidence": 0.0,
          "readiness": 0.0,
          "residualRisk": 0.0,
          "shiftLoad": 0.0,
          "triageRate": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "clinical-shift",
        "caseId": "same-site-clean",
        "readinessBefore": 88.5,
        "readinessAfter": 88.5,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "calibration": 0.0,
          "clinicalEvidence": 0.0,
          "domainEvidence": 0.0,
          "readiness": 0.0,
          "residualRisk": 0.0,
          "shiftLoad": 0.0,
          "triageRate": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "compute-serving",
        "caseId": "desktop-batch",
        "readinessBefore": 76.6,
        "readinessAfter": 76.6,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "costSaving": 0.0,
          "escalationRate": 0.0,
          "latency": 0.0,
          "qualityFloor": 0.0,
          "readiness": 0.0,
          "retainedEvidence": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "compute-serving",
        "caseId": "edge-camera",
        "readinessBefore": 73.5,
        "readinessAfter": 73.5,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "costSaving": 0.0,
          "escalationRate": 0.0,
          "latency": 0.0,
          "qualityFloor": 0.0,
          "readiness": 0.0,
          "retainedEvidence": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "compute-serving",
        "caseId": "fleet-peak-load",
        "readinessBefore": 74.6,
        "readinessAfter": 74.6,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "costSaving": 0.0,
          "escalationRate": 0.0,
          "latency": 0.0,
          "qualityFloor": 0.0,
          "readiness": 0.0,
          "retainedEvidence": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "compute-serving",
        "caseId": "mobile-live",
        "readinessBefore": 74.6,
        "readinessAfter": 74.6,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "costSaving": 0.0,
          "escalationRate": 0.0,
          "latency": 0.0,
          "qualityFloor": 0.0,
          "readiness": 0.0,
          "retainedEvidence": 0.0,
          "risk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "constraint-generation",
        "caseId": "layout-rewrite",
        "readinessBefore": 77.5,
        "readinessAfter": 77.5,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "constraintSatisfaction": 0.0,
          "editLocality": 0.0,
          "editPressure": 0.0,
          "identityDamage": 0.0,
          "identityPreservation": 0.0,
          "provenanceRisk": 0.0,
          "readiness": 0.0,
          "rewardAlignment": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "constraint-generation",
        "caseId": "light-layout-edit",
        "readinessBefore": 84.9,
        "readinessAfter": 84.9,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "constraintSatisfaction": 0.0,
          "editLocality": 0.0,
          "editPressure": 0.0,
          "identityDamage": 0.0,
          "identityPreservation": 0.0,
          "provenanceRisk": 0.0,
          "readiness": 0.0,
          "rewardAlignment": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "constraint-generation",
        "caseId": "prompt-attack-edit",
        "readinessBefore": 77.6,
        "readinessAfter": 77.6,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "constraintSatisfaction": 0.0,
          "editLocality": 0.0,
          "editPressure": 0.0,
          "identityDamage": 0.0,
          "identityPreservation": 0.0,
          "provenanceRisk": 0.0,
          "readiness": 0.0,
          "rewardAlignment": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "constraint-generation",
        "caseId": "style-with-locks",
        "readinessBefore": 77.4,
        "readinessAfter": 77.4,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "constraintSatisfaction": 0.0,
          "editLocality": 0.0,
          "editPressure": 0.0,
          "identityDamage": 0.0,
          "identityPreservation": 0.0,
          "provenanceRisk": 0.0,
          "readiness": 0.0,
          "rewardAlignment": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "driving-safety",
        "caseId": "construction-zone",
        "readinessBefore": 68.2,
        "readinessAfter": 68.2,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "abstention": 0.0,
          "readiness": 0.0,
          "risk": 0.0,
          "ruleViolation": 0.0,
          "sceneGrounding": 0.0,
          "timeToCollision": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "driving-safety",
        "caseId": "highway-merge",
        "readinessBefore": 68.2,
        "readinessAfter": 68.2,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "abstention": 0.0,
          "readiness": 0.0,
          "risk": 0.0,
          "ruleViolation": 0.0,
          "sceneGrounding": 0.0,
          "timeToCollision": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "driving-safety",
        "caseId": "night-crosswalk",
        "readinessBefore": 68.2,
        "readinessAfter": 68.2,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "abstention": 0.0,
          "readiness": 0.0,
          "risk": 0.0,
          "ruleViolation": 0.0,
          "sceneGrounding": 0.0,
          "timeToCollision": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "driving-safety",
        "caseId": "urban-cut-in",
        "readinessBefore": 68.1,
        "readinessAfter": 68.1,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "abstention": 0.0,
          "readiness": 0.0,
          "risk": 0.0,
          "ruleViolation": 0.0,
          "sceneGrounding": 0.0,
          "timeToCollision": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "dense-novel-view",
        "readinessBefore": 85.6,
        "readinessAfter": 85.6,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "editLeakageRisk": 0.0,
          "provenanceTrace": 0.0,
          "readiness": 0.0,
          "renderFidelity": 0.0,
          "semanticAttachment": 0.0,
          "viewInstability": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "provenance-transfer",
        "readinessBefore": 80.5,
        "readinessAfter": 80.5,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "editLeakageRisk": 0.0,
          "provenanceTrace": 0.0,
          "readiness": 0.0,
          "renderFidelity": 0.0,
          "semanticAttachment": 0.0,
          "viewInstability": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "semantic-edit",
        "readinessBefore": 82.2,
        "readinessAfter": 82.2,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "editLeakageRisk": 0.0,
          "provenanceTrace": 0.0,
          "readiness": 0.0,
          "renderFidelity": 0.0,
          "semanticAttachment": 0.0,
          "viewInstability": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "gaussian-splatting",
        "caseId": "sparse-capture",
        "readinessBefore": 77.7,
        "readinessAfter": 77.7,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "editLeakageRisk": 0.0,
          "provenanceTrace": 0.0,
          "readiness": 0.0,
          "renderFidelity": 0.0,
          "semanticAttachment": 0.0,
          "viewInstability": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "metric-geometry",
        "caseId": "low-texture-indoor",
        "readinessBefore": 72.0,
        "readinessAfter": 72.0,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "metricEvidence": 0.0,
          "poseEvidence": 0.0,
          "readiness": 0.0,
          "scaleDrift": 0.0,
          "surfaceConsistency": 0.0,
          "topologyRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "metric-geometry",
        "caseId": "scale-transfer",
        "readinessBefore": 78.7,
        "readinessAfter": 78.7,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "metricEvidence": 0.0,
          "poseEvidence": 0.0,
          "readiness": 0.0,
          "scaleDrift": 0.0,
          "surfaceConsistency": 0.0,
          "topologyRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "metric-geometry",
        "caseId": "thin-structure",
        "readinessBefore": 75.5,
        "readinessAfter": 75.5,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "metricEvidence": 0.0,
          "poseEvidence": 0.0,
          "readiness": 0.0,
          "scaleDrift": 0.0,
          "surfaceConsistency": 0.0,
          "topologyRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "metric-geometry",
        "caseId": "wide-baseline",
        "readinessBefore": 85.8,
        "readinessAfter": 85.8,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "metricEvidence": 0.0,
          "poseEvidence": 0.0,
          "readiness": 0.0,
          "scaleDrift": 0.0,
          "surfaceConsistency": 0.0,
          "topologyRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "common-clean",
        "readinessBefore": 84.7,
        "readinessAfter": 84.7,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "localizedEvidence": 0.0,
          "readiness": 0.0,
          "unsupportedRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "rare-distractors",
        "readinessBefore": 83.8,
        "readinessAfter": 83.8,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "localizedEvidence": 0.0,
          "readiness": 0.0,
          "unsupportedRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "rare-visible",
        "readinessBefore": 83.9,
        "readinessAfter": 83.9,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "localizedEvidence": 0.0,
          "readiness": 0.0,
          "unsupportedRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "open-vocab-grounding",
        "caseId": "unsupported-query",
        "readinessBefore": 83.8,
        "readinessAfter": 83.8,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "localizedEvidence": 0.0,
          "readiness": 0.0,
          "unsupportedRisk": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "compressed-low-light",
        "readinessBefore": 77.7,
        "readinessAfter": 77.7,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "downstreamUtility": 0.0,
          "fabricatedDetailRisk": 0.0,
          "fidelityScore": 0.0,
          "readiness": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "mild-noise",
        "readinessBefore": 82.0,
        "readinessAfter": 82.0,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "downstreamUtility": 0.0,
          "fabricatedDetailRisk": 0.0,
          "fidelityScore": 0.0,
          "readiness": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "motion-blur-task",
        "readinessBefore": 77.7,
        "readinessAfter": 77.7,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "downstreamUtility": 0.0,
          "fabricatedDetailRisk": 0.0,
          "fidelityScore": 0.0,
          "readiness": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "restoration-fidelity",
        "caseId": "over-restored-detail",
        "readinessBefore": 77.8,
        "readinessAfter": 77.8,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "downstreamUtility": 0.0,
          "fabricatedDetailRisk": 0.0,
          "fidelityScore": 0.0,
          "readiness": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "contact-heavy",
        "readinessBefore": 76.2,
        "readinessAfter": 76.2,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "contactConsistency": 0.0,
          "drift": 0.0,
          "identityStability": 0.0,
          "memoryLoad": 0.0,
          "readiness": 0.0,
          "rolloutPlausibility": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "crowded-memory",
        "readinessBefore": 75.9,
        "readinessAfter": 75.9,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "contactConsistency": 0.0,
          "drift": 0.0,
          "identityStability": 0.0,
          "memoryLoad": 0.0,
          "readiness": 0.0,
          "rolloutPlausibility": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "long-rollout-drift",
        "readinessBefore": 75.9,
        "readinessAfter": 75.9,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "contactConsistency": 0.0,
          "drift": 0.0,
          "identityStability": 0.0,
          "memoryLoad": 0.0,
          "readiness": 0.0,
          "rolloutPlausibility": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      },
      {
        "jobId": "temporal-rollout",
        "caseId": "short-stable",
        "readinessBefore": 83.3,
        "readinessAfter": 83.3,
        "readinessDelta": 0.0,
        "metricDeltas": {
          "contactConsistency": 0.0,
          "drift": 0.0,
          "identityStability": 0.0,
          "memoryLoad": 0.0,
          "readiness": 0.0,
          "rolloutPlausibility": 0.0
        },
        "promotedFrom": "live-colab",
        "regression": false
      }
    ],
    "missing": [],
    "modeMismatches": [],
    "regressions": []
  },
  "release": {
    "summary": {
      "bundle": "cvpr-colab-release-bundle",
      "status": "release",
      "runtimePlane": "google-colab-pro-plus",
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
      "resultArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "workerJobs": 10,
      "promotedRunners": 10,
      "runnerRows": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "fullStackStatus": "valid",
      "packageTests": 148,
      "validationGate": "release",
      "liveIntakeStatus": "valid",
      "liveIntakeResults": 40,
      "liveIntakePromoted": false,
      "promotionDeltaStatus": "release",
      "promotionRegressions": 0,
      "maxReadinessDrop": 0.0,
      "importValidator": "scripts/validate_cvpr_colab_results.py",
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
      "validationCenter": "cvpr-validation-center.html"
    },
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
    "worker": {
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
    "importReport": {
      "validator": "validate_cvpr_colab_results",
      "runtimePlane": "google-colab-pro-plus",
      "expectedMode": "cached-real",
      "jobs": 10,
      "expectedResults": 40,
      "actualResults": 40,
      "validJobs": 10,
      "issues": 0,
      "status": "valid"
    },
    "fullStack": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 59,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 22.254
    },
    "validationCenter": {
      "dashboard": "cvpr-validation-center",
      "status": "interactive",
      "gateStatus": "release",
      "fullStackStatus": "valid",
      "commands": 286,
      "steps": 53,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "promotionDeltaStatus": "release",
      "promotionRegressions": 0,
      "maxReadinessDrop": 0.0,
      "validImportJobs": 10,
      "implementedBenches": 11,
      "benchCases": 44,
      "benchBlock": 0,
      "fullStackValidator": "scripts/validate_cvpr_full_stack.py",
      "importValidator": "scripts/validate_cvpr_colab_results.py",
      "statusLabel": "all gates valid",
      "releaseGate": true,
      "slowest": [
        {
          "command": "node source-code/learning/*/tests/core.test.js",
          "returnCode": 0,
          "durationSec": 20.437,
          "testCount": 148,
          "log": "/tmp/cvpr-core-tests.log",
          "stdoutTail": [
            "ok metric-3d-reconstruction: 94 3D reconstruction and novel views",
            "ok open-vocab-visual-search: 94 Open-vocabulary vision",
            "ok restoration-reliability-stack: 94 Image restoration",
            "ok video-world-model: 94 Video generation and world models",
            "ok vlm-grounded-reasoning: 94 Vision-language reasoning"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/validate_cvpr_colab_results.py",
          "returnCode": 0,
          "durationSec": 0.049,
          "stdoutTail": [
            "validated CVPR Colab results: 40 results, 0 issues"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
          "returnCode": 0,
          "durationSec": 0.042,
          "stdoutTail": [
            "wrote cvpr-colab-gpu-worker.html: 10 jobs, 40 cached results"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
          "returnCode": 0,
          "durationSec": 0.041,
          "stdoutTail": [
            "wrote cvpr-colab-handoff-package.html: 10 jobs, 8 zip entries"
          ],
          "stderrTail": []
        },
        {
          "command": "python3 scripts/build_cvpr_mission_control.py",
          "returnCode": 0,
          "durationSec": 0.04,
          "stdoutTail": [
            "wrote cvpr-mission-control.html: 11 systems, 11 benches"
          ],
          "stderrTail": []
        }
      ]
    },
    "liveIntake": {
      "validator": "validate_cvpr_colab_results",
      "runtimePlane": "google-colab-pro-plus",
      "expectedMode": "live-colab",
      "jobs": 10,
      "expectedResults": 40,
      "actualResults": 40,
      "validJobs": 10,
      "issues": 0,
      "status": "valid",
      "intake": "cvpr-colab-live-intake",
      "export": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
      "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "promoted": false
    },
    "promotionDelta": {
      "delta": "cvpr-colab-promotion-delta",
      "status": "release",
      "cases": 40,
      "jobs": 10,
      "missing": 0,
      "modeMismatches": 0,
      "regressions": 0,
      "maxReadinessDrop": 0.0,
      "canonicalArtifact": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "promotedArtifact": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
      "promotionStatus": "valid"
    }
  },
  "handoff": {
    "summary": {
      "handoff": "cvpr-colab-handoff-package",
      "status": "ready",
      "jobs": 10,
      "runners": 10,
      "expectedResults": 40,
      "importIssues": 0,
      "notebook": "notebooks/cvpr_gpu_worker.ipynb",
      "runbook": "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
      "liveExportArtifact": "source-code/learning/cvpr-colab-gpu-worker/_incoming/cvpr_gpu_results_live.json",
      "intakeGate": "scripts/stage_cvpr_live_colab_export.py",
      "notebookCells": 22,
      "exportContract": true,
      "zipPath": "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip",
      "zipEntries": [
        "README.md",
        "analysis/cvpr_colab_gpu_worker/import_validation.json",
        "analysis/cvpr_colab_gpu_worker/registry.json",
        "notebooks/cvpr_gpu_worker.ipynb",
        "scripts/stage_cvpr_live_colab_export.py",
        "scripts/validate_cvpr_colab_results.py",
        "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
        "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
      ]
    },
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
    "importReport": {
      "summary": {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": "google-colab-pro-plus",
        "expectedMode": "cached-real",
        "jobs": 10,
        "expectedResults": 40,
        "actualResults": 40,
        "validJobs": 10,
        "issues": 0,
        "status": "valid"
      },
      "jobs": [
        {
          "jobId": "open-vocab-grounding",
          "bench": "cvpr-long-tail-grounding-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_long_tail_grounding_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "restoration-fidelity",
          "bench": "cvpr-restoration-fidelity-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_restoration_fidelity_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "adversarial-provenance",
          "bench": "cvpr-adversarial-provenance-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_adversarial_provenance_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "temporal-rollout",
          "bench": "cvpr-temporal-rollout-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_temporal_rollout_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "clinical-shift",
          "bench": "cvpr-clinical-shift-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_clinical_shift_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "compute-serving",
          "bench": "cvpr-compute-serving-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_compute_serving_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "constraint-generation",
          "bench": "cvpr-constraint-generation-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_constraint_generation_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "driving-safety",
          "bench": "cvpr-driving-safety-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_driving_safety_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "metric-geometry",
          "bench": "cvpr-metric-geometry-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_metric_geometry_bench/registry.json",
          "ready": true
        },
        {
          "jobId": "gaussian-splatting",
          "bench": "cvpr-gaussian-splatting-bench",
          "expectedCases": 4,
          "actualCases": 4,
          "importPath": "analysis/cvpr_gaussian_splatting_bench/registry.json",
          "ready": true
        }
      ],
      "issues": []
    },
    "notebookCells": 22,
    "exportContract": true,
    "zipEntries": [
      "README.md",
      "analysis/cvpr_colab_gpu_worker/import_validation.json",
      "analysis/cvpr_colab_gpu_worker/registry.json",
      "notebooks/cvpr_gpu_worker.ipynb",
      "scripts/stage_cvpr_live_colab_export.py",
      "scripts/validate_cvpr_colab_results.py",
      "source-code/learning/cvpr-colab-gpu-worker/COLAB_PRO_PLUS_RUNBOOK.md",
      "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
    ]
  },
  "artifacts": [
    {
      "label": "canonical-cached-results",
      "path": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json",
      "exists": true,
      "sizeBytes": 47872,
      "sha256": "5b537ee059dba5a3722989704ff371a4e189a73ddb5fa3b2c813d7e6ec891eba",
      "rows": 40,
      "modes": [
        "cached-real"
      ],
      "jobs": 10
    },
    {
      "label": "run-manifest",
      "path": "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json",
      "exists": true,
      "sizeBytes": 6196,
      "sha256": "123cef54337dc9ba7e332f7b58098b2f95bd281f624a55af414b022ff580ae92",
      "keys": [
        "controlPlane",
        "jobs",
        "liveExportArtifact",
        "notebook",
        "resultArtifact",
        "runtimePlane"
      ]
    },
    {
      "label": "verifier-live-export",
      "path": "analysis/cvpr_colab_live_intake/cvpr_gpu_results_live.verifier.json",
      "exists": true,
      "sizeBytes": 49832,
      "sha256": "04fe3f893876ac079949e389e1c22dd4753632c96f4e75c0d8695beb8b99c9c1",
      "rows": 40,
      "modes": [
        "live-colab"
      ],
      "jobs": 10
    },
    {
      "label": "promotion-live-export",
      "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results_live.json",
      "exists": true,
      "sizeBytes": 50072,
      "sha256": "e4c0581aacc50df7abd32ad412febe8a2b5705cd80aa5b23344c278f60e8e53e",
      "rows": 40,
      "modes": [
        "live-colab"
      ],
      "jobs": 10
    },
    {
      "label": "promotion-canonical-results",
      "path": "analysis/cvpr_colab_live_intake/promotion_drill/cvpr_gpu_results.promoted.json",
      "exists": true,
      "sizeBytes": 53072,
      "sha256": "3ffb96134e662f6c3edf63e07bd21d20c0ac0b7bb1d0cff9530a24b3f9691b52",
      "rows": 40,
      "modes": [
        "cached-real"
      ],
      "jobs": 10
    },
    {
      "label": "promotion-delta-registry",
      "path": "analysis/cvpr_colab_promotion_delta/registry.json",
      "exists": true,
      "sizeBytes": 18250,
      "sha256": "b82ea6c528e307757d5538c39d663a4c76eebabfd532971c9564d0b9129cdc93",
      "keys": [
        "missing",
        "modeMismatches",
        "regressions",
        "rows",
        "summary"
      ]
    },
    {
      "label": "handoff-zip",
      "path": "analysis/cvpr_colab_handoff_package/cvpr_colab_handoff_package.zip",
      "exists": true,
      "sizeBytes": 34794,
      "sha256": "7f174373fa2d48225bd7d67ef24fb7aba84ccc30c20bdc0c4fb74c255523b8c7"
    }
  ]
};
