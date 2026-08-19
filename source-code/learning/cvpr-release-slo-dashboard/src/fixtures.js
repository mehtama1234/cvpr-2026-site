export const sloInput = {
  "replay": {
    "summary": {
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
    },
    "replayRows": [
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
    ],
    "sources": {
      "worker": "analysis/cvpr_colab_gpu_worker/registry.json",
      "planner": "analysis/cvpr_colab_execution_planner/registry.json",
      "cockpit": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json"
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
  "mission": {
    "summary": {
      "systems": 11,
      "stages": 33,
      "themesCovered": 8,
      "clustersCovered": 11,
      "demos": 41,
      "flagshipDemos": 8,
      "stageDemos": 33,
      "arenaPairings": 328,
      "arenaRelease": 328,
      "arenaReview": 0,
      "arenaBlock": 0,
      "playbookPlays": 8,
      "implementedBenches": 11,
      "missingImplementations": 0,
      "benchCases": 44,
      "benchRelease": 44,
      "benchReview": 0,
      "benchBlock": 0,
      "benchAcceptanceRate": 100.0,
      "benchBlockRate": 0.0,
      "status": "interactive"
    },
    "actions": [
      {
        "rank": 1,
        "title": "Closed-loop scene and action safety bench",
        "cluster": "Driving and vision-language-action",
        "scenario": "safety-critical-action",
        "priority": "focused",
        "implementationPage": "cvpr-driving-safety-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxRisk",
        "keyMetricValue": 34.8,
        "nextAction": "promote safety-critical-action evidence into release notes"
      },
      {
        "rank": 2,
        "title": "Adversarial provenance evidence bench",
        "cluster": "Adversarial robustness",
        "scenario": "adversarial-media",
        "priority": "focused",
        "implementationPage": "cvpr-adversarial-provenance-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "minEvidence",
        "keyMetricValue": 51.2,
        "nextAction": "promote adversarial-media evidence into release notes"
      },
      {
        "rank": 3,
        "title": "Clinical shift validation bench",
        "cluster": "Vision for science and medicine",
        "scenario": "clinical-shift",
        "priority": "focused",
        "implementationPage": "cvpr-clinical-shift-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxResidualRisk",
        "keyMetricValue": 11.1,
        "nextAction": "promote clinical-shift evidence into release notes"
      },
      {
        "rank": 4,
        "title": "Long-horizon world rollout bench",
        "cluster": "Video generation and world models",
        "scenario": "temporal-rollout",
        "priority": "focused",
        "implementationPage": "cvpr-temporal-rollout-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxDrift",
        "keyMetricValue": 36.1,
        "nextAction": "promote temporal-rollout evidence into release notes"
      },
      {
        "rank": 5,
        "title": "Compute budget serving bench",
        "cluster": "Efficient vision",
        "scenario": "compute-constrained",
        "priority": "focused",
        "implementationPage": "cvpr-compute-serving-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "minRetainedEvidence",
        "keyMetricValue": 85.7,
        "nextAction": "promote compute-constrained evidence into release notes"
      },
      {
        "rank": 6,
        "title": "Downstream restoration fidelity bench",
        "cluster": "Image restoration",
        "scenario": "noisy-restoration",
        "priority": "focused",
        "implementationPage": "cvpr-restoration-fidelity-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "maxFabricatedDetailRisk",
        "keyMetricValue": 29.4,
        "nextAction": "promote noisy-restoration evidence into release notes"
      },
      {
        "rank": 7,
        "title": "Long-tail open-vocabulary grounding bench",
        "cluster": "Open-vocabulary vision",
        "scenario": "long-tail-open-world",
        "priority": "focused",
        "implementationPage": "cvpr-long-tail-grounding-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "minLocalizedEvidence",
        "keyMetricValue": 56.0,
        "nextAction": "promote long-tail-open-world evidence into release notes"
      },
      {
        "rank": 8,
        "title": "Grounded VLM answer verification bench",
        "cluster": "Vision-language reasoning",
        "scenario": "safety-critical-action",
        "priority": "focused",
        "implementationPage": "cvpr-vlm-answer-verification-bench.html",
        "benchStatus": "implemented",
        "blockedCases": 0,
        "keyMetric": "avgReadiness",
        "keyMetricValue": 76.9,
        "nextAction": "promote safety-critical-action evidence into release notes"
      }
    ],
    "benches": [
      {
        "bench": "cvpr-driving-safety-bench",
        "sourceSystem": "driving-vla-release-gate",
        "sourceStages": [
          "scene-grounding"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 75.2,
        "acceptancePass": true,
        "playbookSource": "01-driving-and-vision-language-action-safety-critical-action",
        "status": "interactive",
        "keyMetric": "maxRisk",
        "keyMetricValue": 34.8,
        "registry": "analysis/cvpr_driving_safety_bench/registry.json",
        "page": "cvpr-driving-safety-bench.html"
      },
      {
        "bench": "cvpr-adversarial-provenance-bench",
        "sourceSystem": "adversarial-provenance-gate",
        "sourceStages": [
          "attack-surface",
          "provenance-detection",
          "unlearning-check"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 67.6,
        "acceptancePass": true,
        "playbookSource": "02-adversarial-robustness-adversarial-media",
        "status": "interactive",
        "keyMetric": "minEvidence",
        "keyMetricValue": 51.2,
        "registry": "analysis/cvpr_adversarial_provenance_bench/registry.json",
        "page": "cvpr-adversarial-provenance-bench.html"
      },
      {
        "bench": "cvpr-clinical-shift-bench",
        "sourceSystem": "medical-vision-validation",
        "sourceStages": [
          "domain-shift",
          "uncertainty-triage",
          "clinical-evidence"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 84.0,
        "acceptancePass": true,
        "playbookSource": "03-vision-for-science-and-medicine-clinical-shift",
        "status": "interactive",
        "keyMetric": "maxResidualRisk",
        "keyMetricValue": 11.1,
        "registry": "analysis/cvpr_clinical_shift_bench/registry.json",
        "page": "cvpr-clinical-shift-bench.html"
      },
      {
        "bench": "cvpr-compute-serving-bench",
        "sourceSystem": "efficient-vision-serving",
        "sourceStages": [
          "token-budget",
          "quantized-serving",
          "student-routing"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 74.8,
        "acceptancePass": true,
        "playbookSource": "05-efficient-vision-compute-constrained",
        "status": "interactive",
        "keyMetric": "minRetainedEvidence",
        "keyMetricValue": 85.7,
        "registry": "analysis/cvpr_compute_serving_bench/registry.json",
        "page": "cvpr-compute-serving-bench.html"
      },
      {
        "bench": "cvpr-long-tail-grounding-bench",
        "sourceSystem": "open-vocab-visual-search",
        "sourceStages": [
          "text-query-grounding",
          "long-tail-retrieval",
          "evidence-inspection"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 83.2,
        "acceptancePass": true,
        "playbookSource": "07-open-vocabulary-vision-long-tail-open-world",
        "status": "interactive",
        "keyMetric": "minLocalizedEvidence",
        "keyMetricValue": 56.0,
        "registry": "analysis/cvpr_long_tail_grounding_bench/registry.json",
        "page": "cvpr-long-tail-grounding-bench.html"
      },
      {
        "bench": "cvpr-temporal-rollout-bench",
        "sourceSystem": "video-world-model",
        "sourceStages": [
          "temporal-memory",
          "physics-consistency",
          "future-rollout"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 77.8,
        "acceptancePass": true,
        "playbookSource": "04-video-generation-and-world-models-temporal-rollout",
        "status": "interactive",
        "keyMetric": "maxDrift",
        "keyMetricValue": 36.1,
        "registry": "analysis/cvpr_temporal_rollout_bench/registry.json",
        "page": "cvpr-temporal-rollout-bench.html"
      },
      {
        "bench": "cvpr-restoration-fidelity-bench",
        "sourceSystem": "restoration-reliability-stack",
        "sourceStages": [
          "degradation-diagnosis",
          "fidelity-gate",
          "downstream-validation"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 78.8,
        "acceptancePass": true,
        "playbookSource": "06-image-restoration-noisy-restoration",
        "status": "interactive",
        "keyMetric": "maxFabricatedDetailRisk",
        "keyMetricValue": 29.4,
        "registry": "analysis/cvpr_restoration_fidelity_bench/registry.json",
        "page": "cvpr-restoration-fidelity-bench.html"
      },
      {
        "bench": "cvpr-constraint-generation-bench",
        "sourceSystem": "controllable-generation-studio",
        "sourceStages": [
          "layout-control",
          "identity-preservation",
          "preference-reward"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 79.3,
        "acceptancePass": true,
        "playbookSource": "08-controllable-generation-adversarial-media",
        "status": "interactive",
        "keyMetric": "maxIdentityDamage",
        "keyMetricValue": 34.8,
        "registry": "analysis/cvpr_constraint_generation_bench/registry.json",
        "page": "cvpr-constraint-generation-bench.html"
      },
      {
        "bench": "cvpr-vlm-answer-verification-bench",
        "sourceSystem": "vlm-grounded-reasoning",
        "sourceStages": [
          "look-then-reason",
          "hallucination-check",
          "tool-verified-answer"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 76.9,
        "acceptancePass": true,
        "playbookSource": "08-vision-language-reasoning-safety-critical-action",
        "status": "interactive",
        "keyMetric": "avgReadiness",
        "keyMetricValue": 76.9,
        "registry": "analysis/cvpr_vlm_answer_verification_bench/registry.json",
        "page": "cvpr-vlm-answer-verification-bench.html"
      },
      {
        "bench": "cvpr-metric-geometry-bench",
        "sourceSystem": "metric-3d-reconstruction",
        "sourceStages": [
          "camera-geometry",
          "metric-scale",
          "surface-consistency"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 78.0,
        "acceptancePass": true,
        "playbookSource": "geometry-metric-release-bench",
        "status": "interactive",
        "keyMetric": "maxScaleDrift",
        "keyMetricValue": 29.9,
        "registry": "analysis/cvpr_metric_geometry_bench/registry.json",
        "page": "cvpr-metric-geometry-bench.html"
      },
      {
        "bench": "cvpr-gaussian-splatting-bench",
        "sourceSystem": "gaussian-splatting-platform",
        "sourceStages": [
          "splat-fit",
          "semantic-splats",
          "watermark-provenance"
        ],
        "cases": 4,
        "release": 4,
        "review": 0,
        "block": 0,
        "avgReadiness": 81.5,
        "acceptancePass": true,
        "playbookSource": "splats-gaussian-release-bench",
        "status": "interactive",
        "keyMetric": "maxEditLeakageRisk",
        "keyMetricValue": 27.4,
        "registry": "analysis/cvpr_gaussian_splatting_bench/registry.json",
        "page": "cvpr-gaussian-splatting-bench.html"
      }
    ],
    "sourceRegistries": {
      "systems": "analysis/cvpr_systems/registry.json",
      "demos": "analysis/cvpr_demos/registry.json",
      "arena": "analysis/cvpr_demo_arena/registry.json",
      "playbook": "analysis/cvpr_demo_playbook/registry.json"
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
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 83,
      "packageTests": 148,
      "workerJobs": 14,
      "promotedRunners": 14,
      "cachedResults": 56,
      "importIssues": 0,
      "durationSec": 126.586
    },
    "steps": [
      {
        "command": "python3 scripts/build_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.243,
        "stdoutTail": [
          "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.125,
        "stdoutTail": [
          "verified CVPR systems lab: 11 systems, 33 stages, 11 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.126,
        "stdoutTail": [
          "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.155,
        "stdoutTail": [
          "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.137,
        "stdoutTail": [
          "wrote cvpr-demo-arena.html: 41 demos x 8 scenarios = 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.136,
        "stdoutTail": [
          "verified CVPR demo arena: 41 demos, 8 scenarios, 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.168,
        "stdoutTail": [
          "wrote cvpr-demo-playbook.html: 8 plays, 0 critical"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.125,
        "stdoutTail": [
          "verified CVPR demo playbook: 8 plays, 0 critical, 8 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.196,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.214,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 51.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.204,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 11.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.195,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.19,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.163,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.138,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.27,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.103,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.102,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.218,
        "stdoutTail": [
          "wrote cvpr-colab-gpu-worker.html: 14 jobs, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "returnCode": 0,
        "durationSec": 0.228,
        "stdoutTail": [
          "validated CVPR Colab results: 56 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.174,
        "stdoutTail": [
          "verified CVPR Colab GPU worker: 14 jobs, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.197,
        "stdoutTail": [
          "wrote cvpr-colab-handoff-package.html: 14 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.261,
        "stdoutTail": [
          "verified CVPR Colab handoff package: 14 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.176,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.145,
        "stdoutTail": [
          "verified CVPR driving safety bench: 4 cases, max risk 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.185,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.238,
        "stdoutTail": [
          "verified CVPR constraint generation bench: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.102,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.183,
        "stdoutTail": [
          "verified CVPR compute serving bench: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.23,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 11.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.14,
        "stdoutTail": [
          "verified CVPR clinical shift bench: 4 cases, max risk 11.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.133,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 51.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.257,
        "stdoutTail": [
          "verified CVPR adversarial provenance bench: 4 cases, min evidence 51.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.262,
        "stdoutTail": [
          "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 56.0"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.181,
        "stdoutTail": [
          "verified CVPR long-tail grounding bench: 4 cases, min evidence 56.0"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.202,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.186,
        "stdoutTail": [
          "verified CVPR restoration fidelity bench: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.182,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.232,
        "stdoutTail": [
          "verified CVPR temporal rollout bench: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.133,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.123,
        "stdoutTail": [
          "verified CVPR VLM answer verification bench: 4 cases, max unsupported risk 32.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.114,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.11,
        "stdoutTail": [
          "verified CVPR metric geometry bench: 4 cases, max scale drift 29.9"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.222,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.127,
        "stdoutTail": [
          "verified CVPR Gaussian Splatting bench: 4 cases, max edit leakage 27.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_mission_control.py",
        "returnCode": 0,
        "durationSec": 0.224,
        "stdoutTail": [
          "wrote cvpr-mission-control.html: 11 systems, 11 benches"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_mission_control.py",
        "returnCode": 0,
        "durationSec": 0.172,
        "stdoutTail": [
          "verified CVPR mission control: 11 systems, 11 benches, 44 cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.223,
        "stdoutTail": [
          "wrote cvpr-failure-atlas.html: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.237,
        "stdoutTail": [
          "verified CVPR failure atlas: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/cvpr_paper_system_gate_experiments.py",
        "returnCode": 0,
        "durationSec": 0.257,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate experiment results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_paper_system_gate.py",
        "returnCode": 0,
        "durationSec": 0.204,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate package and page"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.149,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 51 steps, 148 tests"
        ],
        "stderrTail": []
      },
      {
        "command": "node source-code/learning/*/tests/core.test.js",
        "returnCode": 0,
        "durationSec": 109.717,
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
        "command": "python3 scripts/build_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.214,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 53 steps, 148 tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.133,
        "stdoutTail": [
          "verified CVPR validation center: 53 steps, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_intake.py",
        "returnCode": 0,
        "durationSec": 0.339,
        "stdoutTail": [
          "verified CVPR live Colab intake: 56 live results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_promotion.py",
        "returnCode": 0,
        "durationSec": 0.591,
        "stdoutTail": [
          "verified CVPR live Colab promotion: 56 promoted cached-real results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.208,
        "stdoutTail": [
          "wrote cvpr-colab-promotion-delta.html: 56 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.258,
        "stdoutTail": [
          "verified CVPR Colab promotion delta: 56 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.435,
        "stdoutTail": [
          "wrote cvpr-colab-release-bundle.html: 14 runners, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.215,
        "stdoutTail": [
          "verified CVPR Colab release bundle: 14 runners, 56 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.269,
        "stdoutTail": [
          "wrote cvpr-colab-evidence-ledger.html: 7 artifacts, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.213,
        "stdoutTail": [
          "verified CVPR Colab evidence ledger: 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.327,
        "stdoutTail": [
          "wrote cvpr-colab-run-receipt.html: 8 stages, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.123,
        "stdoutTail": [
          "verified CVPR Colab run receipt: 8 stages, 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.224,
        "stdoutTail": [
          "wrote cvpr-theme-release-matrix.html: 8 themes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.313,
        "stdoutTail": [
          "verified CVPR theme release matrix: 8 themes, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.426,
        "stdoutTail": [
          "wrote cvpr-production-release-brief.html: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.099,
        "stdoutTail": [
          "verified CVPR production release brief: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.146,
        "stdoutTail": [
          "wrote cvpr-production-coverage-audit.html: release gate, 14 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.314,
        "stdoutTail": [
          "verified CVPR production coverage audit: 11 systems, 14 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.268,
        "stdoutTail": [
          "wrote cvpr-remediation-board.html: 0 block tasks, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.155,
        "stdoutTail": [
          "verified CVPR remediation board: 0 block tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.291,
        "stdoutTail": [
          "wrote cvpr-remediation-sprint-plan.html: 3 sprints, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.114,
        "stdoutTail": [
          "verified CVPR remediation sprint plan: 3 sprints, 0 tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.212,
        "stdoutTail": [
          "wrote cvpr-colab-operations-dashboard.html: 14 jobs, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.153,
        "stdoutTail": [
          "verified CVPR Colab operations dashboard: 14 jobs, 53 steps"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.354,
        "stdoutTail": [
          "wrote cvpr-colab-execution-planner.html: 3 waves, 56 expected results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.134,
        "stdoutTail": [
          "verified CVPR Colab execution planner: 3 waves, 56 expected results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.173,
        "stdoutTail": [
          "wrote cvpr-demo-evidence-cockpit.html: 41 demos, 56 expected live results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.366,
        "stdoutTail": [
          "verified CVPR demo evidence cockpit: 41 demos, 56 expected live results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.185,
        "stdoutTail": [
          "wrote cvpr-colab-result-replay.html: 56/56 results, 30 demos, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.149,
        "stdoutTail": [
          "verified CVPR Colab result replay: 56/56 results, 30 stage demos"
        ],
        "stderrTail": []
      }
    ]
  }
};
export const sloRows = [
  {
    "id": "theme-system-coverage",
    "label": "Every theme and production system covered",
    "actual": 11,
    "target": 11,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_production_release_brief/registry.json"
  },
  {
    "id": "demo-evidence-coverage",
    "label": "Every stage demo has runtime evidence",
    "actual": 0,
    "target": 0,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_demo_evidence_cockpit/registry.json"
  },
  {
    "id": "bench-release-acceptance",
    "label": "All readiness bench cases are release",
    "actual": 44,
    "target": 44,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_mission_control/registry.json"
  },
  {
    "id": "arena-release-acceptance",
    "label": "All arena pairings are release",
    "actual": 328,
    "target": 328,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_production_release_brief/registry.json"
  },
  {
    "id": "pro-plus-result-validity",
    "label": "All cached Pro+ results validate",
    "actual": 56,
    "target": 56,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_colab_result_replay/registry.json"
  },
  {
    "id": "readiness-floor",
    "label": "Replay readiness floor stays above release minimum",
    "actual": 44.0,
    "target": 68.0,
    "direction": "gte",
    "severity": "critical",
    "evidence": "analysis/cvpr_colab_result_replay/registry.json"
  },
  {
    "id": "provenance-clean",
    "label": "No Pro+ provenance issues",
    "actual": 0,
    "target": 0,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_colab_result_replay/registry.json"
  },
  {
    "id": "import-clean",
    "label": "No Colab import issues",
    "actual": 0,
    "target": 0,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_production_release_brief/registry.json"
  },
  {
    "id": "package-tests",
    "label": "Package test suite includes the production stack",
    "actual": 148,
    "target": 44,
    "direction": "gte",
    "severity": "critical",
    "evidence": "analysis/cvpr_full_stack_validation/registry.json"
  },
  {
    "id": "full-stack-valid",
    "label": "Full-stack validator is valid",
    "actual": 1,
    "target": 1,
    "direction": "eq",
    "severity": "critical",
    "evidence": "analysis/cvpr_full_stack_validation/registry.json"
  }
];
export const summary = {
  "dashboard": "cvpr-release-slo-dashboard",
  "status": "block",
  "slos": 10,
  "passingSlos": 9,
  "criticalFailures": 1,
  "readinessFloor": 44.0,
  "avgReadiness": 75.14,
  "benchAcceptanceRate": 100.0,
  "releaseGate": "release",
  "fullStackStatus": "valid",
  "packageTests": 148
};
