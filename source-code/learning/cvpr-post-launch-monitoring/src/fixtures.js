export const monitoringInput = {
  "slos": {
    "summary": {
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
    },
    "sloRows": [
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
    ],
    "sources": {
      "replay": "analysis/cvpr_colab_result_replay/registry.json",
      "cockpit": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "mission": "analysis/cvpr_mission_control/registry.json",
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
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
  "manifest": {
    "summary": {
      "manifest": "cvpr-release-manifest",
      "status": "block",
      "artifacts": 13,
      "missingArtifacts": 0,
      "launchStatus": "block",
      "releaseGate": "release",
      "sloStatus": "block",
      "drillbookStatus": "block",
      "fullStackStatus": "valid",
      "packageTests": 148,
      "commands": 286,
      "steps": 89
    },
    "artifacts": [
      {
        "label": "launch-readiness-pack-page",
        "path": "cvpr-launch-readiness-pack.html",
        "exists": true,
        "sizeBytes": 6565,
        "sha256": "ba59a7746ce53b593135d8e1c0870ace7211d85223a8fbb00a51206f298c6239"
      },
      {
        "label": "launch-readiness-pack-registry",
        "path": "analysis/cvpr_launch_readiness_pack/registry.json",
        "exists": true,
        "sizeBytes": 3468,
        "sha256": "d80766106793d9b7919420152f9f9f20f474884a174c7a8c65497bbecba62903",
        "summaryKeys": [
          "arenaPairings",
          "arenaRelease",
          "avgReadiness",
          "benchCases",
          "benchRelease",
          "cachedResults",
          "criticalFailures",
          "demos",
          "drillbookStatus",
          "fullStackStatus",
          "importIssues",
          "liveIntakeResults",
          "operationsStatus",
          "pack",
          "packageTests",
          "readinessFloor",
          "releaseGate",
          "sloStatus",
          "stages",
          "status",
          "systems",
          "validationGate",
          "workerJobs"
        ]
      },
      {
        "label": "production-release-brief-page",
        "path": "cvpr-production-release-brief.html",
        "exists": true,
        "sizeBytes": 5758,
        "sha256": "ea050879bc7012b4f2c3239b99ca2813c4508d71b1b638b9fb45df6242836ff6"
      },
      {
        "label": "production-release-brief-registry",
        "path": "analysis/cvpr_production_release_brief/registry.json",
        "exists": true,
        "sizeBytes": 2607,
        "sha256": "9d69b4b2a6e77b0e20d516b99c9732818502b2e813367c9491bfa8917e2fe00b",
        "summaryKeys": [
          "arenaBlock",
          "arenaPairings",
          "arenaRelease",
          "arenaReview",
          "benchAcceptanceRate",
          "benchBlock",
          "benchCases",
          "benchRelease",
          "benchReview",
          "brief",
          "cachedResults",
          "coverage",
          "demos",
          "evidenceArtifacts",
          "failureSeverity",
          "fullStackStatus",
          "gate",
          "importIssues",
          "liveIntakeResults",
          "openThemes",
          "packageTests",
          "posture",
          "stages",
          "status",
          "systems",
          "themes",
          "workerJobs"
        ]
      },
      {
        "label": "release-slo-dashboard-page",
        "path": "cvpr-release-slo-dashboard.html",
        "exists": true,
        "sizeBytes": 6089,
        "sha256": "d9a2f0f61210a5c32e8ed6ec2905e1b9fe32436ff45380b71f612f792d253152"
      },
      {
        "label": "release-slo-dashboard-registry",
        "path": "analysis/cvpr_release_slo_dashboard/registry.json",
        "exists": true,
        "sizeBytes": 3379,
        "sha256": "af6c148ec2a3061e804103d73ec1ab9a928b3c9a9555097f66b1ab5fc9322a3c",
        "summaryKeys": [
          "avgReadiness",
          "benchAcceptanceRate",
          "criticalFailures",
          "dashboard",
          "fullStackStatus",
          "packageTests",
          "passingSlos",
          "readinessFloor",
          "releaseGate",
          "slos",
          "status"
        ]
      },
      {
        "label": "release-regression-drillbook-page",
        "path": "cvpr-release-regression-drillbook.html",
        "exists": true,
        "sizeBytes": 9326,
        "sha256": "c39ac01ccb8331b2ad80e66effc8c10868c4bbd995a86f4a64584b14511db353"
      },
      {
        "label": "release-regression-drillbook-registry",
        "path": "analysis/cvpr_release_regression_drillbook/registry.json",
        "exists": true,
        "sizeBytes": 8194,
        "sha256": "6d283bc3303114d5820294100fa102b7d5c117607dfd70e4cb0a120a4f4bedf0",
        "summaryKeys": [
          "activeCriticalFailures",
          "drillbook",
          "drills",
          "fullStackValidator",
          "operationsStatus",
          "passingSlos",
          "readyDrills",
          "remediationStatus",
          "status",
          "validationGate"
        ]
      },
      {
        "label": "colab-result-replay-registry",
        "path": "analysis/cvpr_colab_result_replay/registry.json",
        "exists": true,
        "sizeBytes": 15930,
        "sha256": "ddecf1e41a336731b229b4920a4d6feab1b2cc1e4ebb88dd949273de6fe5b290",
        "summaryKeys": [
          "avgReadiness",
          "cachedSystemEvidenceDemos",
          "fullStackValidator",
          "jobs",
          "liveExportArtifact",
          "minReadiness",
          "notebook",
          "provenanceIssues",
          "releaseGate",
          "replay",
          "replayRows",
          "results",
          "runtimePlane",
          "stageDemosCovered",
          "status",
          "validResults"
        ]
      },
      {
        "label": "demo-evidence-cockpit-registry",
        "path": "analysis/cvpr_demo_evidence_cockpit/registry.json",
        "exists": true,
        "sizeBytes": 31535,
        "sha256": "3edbda76f742ae3efe9bafae6092585a2e806bbfca5a83a24f22c32566454d1b",
        "summaryKeys": [
          "benchCases",
          "benchRelease",
          "cachedResults",
          "cockpit",
          "expectedLiveResults",
          "flagshipDemos",
          "fullStackStatus",
          "gpuBackedStageDemos",
          "missingDemoEvidence",
          "proPlusJobs",
          "proPlusWaves",
          "releaseGate",
          "stageDemos",
          "status",
          "systemEvidenceStageDemos",
          "systems",
          "totalDemos"
        ]
      },
      {
        "label": "full-stack-validation-registry",
        "path": "analysis/cvpr_full_stack_validation/registry.json",
        "exists": true,
        "sizeBytes": 24174,
        "sha256": "a5f7d9b43071632908c0e332de3ae98898b192114730746415a09bd811a47bc2",
        "summaryKeys": [
          "cachedResults",
          "commands",
          "durationSec",
          "importIssues",
          "packageTests",
          "promotedRunners",
          "status",
          "steps",
          "validator",
          "workerJobs"
        ]
      },
      {
        "label": "full-stack-validator",
        "path": "scripts/validate_cvpr_full_stack.py",
        "exists": true,
        "sizeBytes": 25670,
        "sha256": "85b588bc87510b85a6d89311b63e8fe86a8aed4c485cf5bbb61becd729feeab5"
      },
      {
        "label": "site-index",
        "path": "index.html",
        "exists": true,
        "sizeBytes": 28955,
        "sha256": "e22e9ce90187c645371e9781f3fc956b09cebf4acf671a0a3621f8da18bb56c3"
      }
    ],
    "sources": {
      "launch": "analysis/cvpr_launch_readiness_pack/registry.json",
      "brief": "analysis/cvpr_production_release_brief/registry.json",
      "slos": "analysis/cvpr_release_slo_dashboard/registry.json",
      "drills": "analysis/cvpr_release_regression_drillbook/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "changeControl": {
    "summary": {
      "board": "cvpr-release-change-control",
      "status": "block",
      "artifacts": 13,
      "controlRows": 13,
      "readyRows": 13,
      "missingArtifacts": 0,
      "launchStatus": "block",
      "manifestStatus": "block",
      "fullStackStatus": "valid",
      "packageTests": 148
    },
    "controlRows": [
      {
        "artifact": "launch-readiness-pack-page",
        "path": "cvpr-launch-readiness-pack.html",
        "ownerSurface": "cvpr-launch-readiness-pack.html",
        "currentSha256": "ba59a7746ce53b593135d8e1c0870ace7211d85223a8fbb00a51206f298c6239",
        "sizeBytes": 6565,
        "rebuildCommand": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "verifyCommand": "python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "launch-readiness-pack-registry",
        "path": "analysis/cvpr_launch_readiness_pack/registry.json",
        "ownerSurface": "cvpr-launch-readiness-pack.html",
        "currentSha256": "d80766106793d9b7919420152f9f9f20f474884a174c7a8c65497bbecba62903",
        "sizeBytes": 3468,
        "rebuildCommand": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "verifyCommand": "python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "production-release-brief-page",
        "path": "cvpr-production-release-brief.html",
        "ownerSurface": "cvpr-production-release-brief.html",
        "currentSha256": "ea050879bc7012b4f2c3239b99ca2813c4508d71b1b638b9fb45df6242836ff6",
        "sizeBytes": 5758,
        "rebuildCommand": "python3 scripts/build_cvpr_production_release_brief.py",
        "verifyCommand": "python3 scripts/verify_cvpr_production_release_brief.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "production-release-brief-registry",
        "path": "analysis/cvpr_production_release_brief/registry.json",
        "ownerSurface": "cvpr-production-release-brief.html",
        "currentSha256": "9d69b4b2a6e77b0e20d516b99c9732818502b2e813367c9491bfa8917e2fe00b",
        "sizeBytes": 2607,
        "rebuildCommand": "python3 scripts/build_cvpr_production_release_brief.py",
        "verifyCommand": "python3 scripts/verify_cvpr_production_release_brief.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "release-slo-dashboard-page",
        "path": "cvpr-release-slo-dashboard.html",
        "ownerSurface": "cvpr-release-slo-dashboard.html",
        "currentSha256": "d9a2f0f61210a5c32e8ed6ec2905e1b9fe32436ff45380b71f612f792d253152",
        "sizeBytes": 6089,
        "rebuildCommand": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "verifyCommand": "python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "release-slo-dashboard-registry",
        "path": "analysis/cvpr_release_slo_dashboard/registry.json",
        "ownerSurface": "cvpr-release-slo-dashboard.html",
        "currentSha256": "af6c148ec2a3061e804103d73ec1ab9a928b3c9a9555097f66b1ab5fc9322a3c",
        "sizeBytes": 3379,
        "rebuildCommand": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "verifyCommand": "python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "release-regression-drillbook-page",
        "path": "cvpr-release-regression-drillbook.html",
        "ownerSurface": "cvpr-release-regression-drillbook.html",
        "currentSha256": "c39ac01ccb8331b2ad80e66effc8c10868c4bbd995a86f4a64584b14511db353",
        "sizeBytes": 9326,
        "rebuildCommand": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "verifyCommand": "python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "release-regression-drillbook-registry",
        "path": "analysis/cvpr_release_regression_drillbook/registry.json",
        "ownerSurface": "cvpr-release-regression-drillbook.html",
        "currentSha256": "6d283bc3303114d5820294100fa102b7d5c117607dfd70e4cb0a120a4f4bedf0",
        "sizeBytes": 8194,
        "rebuildCommand": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "verifyCommand": "python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "colab-result-replay-registry",
        "path": "analysis/cvpr_colab_result_replay/registry.json",
        "ownerSurface": "cvpr-colab-result-replay.html",
        "currentSha256": "ddecf1e41a336731b229b4920a4d6feab1b2cc1e4ebb88dd949273de6fe5b290",
        "sizeBytes": 15930,
        "rebuildCommand": "python3 scripts/build_cvpr_colab_result_replay.py",
        "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "demo-evidence-cockpit-registry",
        "path": "analysis/cvpr_demo_evidence_cockpit/registry.json",
        "ownerSurface": "cvpr-demo-evidence-cockpit.html",
        "currentSha256": "3edbda76f742ae3efe9bafae6092585a2e806bbfca5a83a24f22c32566454d1b",
        "sizeBytes": 31535,
        "rebuildCommand": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "verifyCommand": "python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "full-stack-validation-registry",
        "path": "analysis/cvpr_full_stack_validation/registry.json",
        "ownerSurface": "cvpr-validation-center.html",
        "currentSha256": "a5f7d9b43071632908c0e332de3ae98898b192114730746415a09bd811a47bc2",
        "sizeBytes": 24174,
        "rebuildCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "verifyCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "full-stack-validator",
        "path": "scripts/validate_cvpr_full_stack.py",
        "ownerSurface": "cvpr-validation-center.html",
        "currentSha256": "85b588bc87510b85a6d89311b63e8fe86a8aed4c485cf5bbb61becd729feeab5",
        "sizeBytes": 25670,
        "rebuildCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "verifyCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      },
      {
        "artifact": "site-index",
        "path": "index.html",
        "ownerSurface": "index.html",
        "currentSha256": "e22e9ce90187c645371e9781f3fc956b09cebf4acf671a0a3621f8da18bb56c3",
        "sizeBytes": 28955,
        "rebuildCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "verifyCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "resealCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "changePolicy": "rebuild owner, verify owner, run full stack, reseal manifest",
        "status": "controlled"
      }
    ],
    "sources": {
      "manifest": "analysis/cvpr_release_manifest/registry.json",
      "launch": "analysis/cvpr_launch_readiness_pack/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "dependencyGraph": {
    "summary": {
      "graph": "cvpr-release-dependency-graph",
      "status": "block",
      "nodes": 15,
      "edges": 19,
      "rootNodes": 1,
      "terminalNodes": 1,
      "phases": 8,
      "changeControlStatus": "block",
      "manifestStatus": "block",
      "launchStatus": "block",
      "fullStackStatus": "valid",
      "packageTests": 148
    },
    "nodes": [
      {
        "id": "systems-lab",
        "phase": "Foundations",
        "surface": "cvpr-systems-lab.html",
        "command": "python3 scripts/build_cvpr_systems_lab.py && python3 scripts/verify_cvpr_systems_lab.py",
        "dependsOn": [],
        "status": "ready"
      },
      {
        "id": "demo-lab",
        "phase": "Foundations",
        "surface": "cvpr-demo-lab.html",
        "command": "python3 scripts/build_cvpr_demo_lab.py && python3 scripts/verify_cvpr_demo_lab.py",
        "dependsOn": [
          "systems-lab"
        ],
        "status": "ready"
      },
      {
        "id": "arena-playbook",
        "phase": "Scenario pressure",
        "surface": "cvpr-demo-arena.html",
        "command": "python3 scripts/build_cvpr_demo_arena.py && python3 scripts/verify_cvpr_demo_arena.py",
        "dependsOn": [
          "demo-lab"
        ],
        "status": "ready"
      },
      {
        "id": "readiness-benches",
        "phase": "Bench gates",
        "surface": "cvpr-mission-control.html",
        "command": "python3 scripts/build_cvpr_mission_control.py && python3 scripts/verify_cvpr_mission_control.py",
        "dependsOn": [
          "systems-lab",
          "demo-lab",
          "arena-playbook"
        ],
        "status": "ready"
      },
      {
        "id": "colab-worker",
        "phase": "Colab Pro+",
        "surface": "cvpr-colab-gpu-worker.html",
        "command": "python3 scripts/build_cvpr_colab_gpu_worker.py && python3 scripts/verify_cvpr_colab_gpu_worker.py",
        "dependsOn": [
          "readiness-benches"
        ],
        "status": "ready"
      },
      {
        "id": "colab-release",
        "phase": "Colab Pro+",
        "surface": "cvpr-colab-release-bundle.html",
        "command": "python3 scripts/build_cvpr_colab_release_bundle.py && python3 scripts/verify_cvpr_colab_release_bundle.py",
        "dependsOn": [
          "colab-worker"
        ],
        "status": "ready"
      },
      {
        "id": "coverage-audit",
        "phase": "Release evidence",
        "surface": "cvpr-production-coverage-audit.html",
        "command": "python3 scripts/build_cvpr_production_coverage_audit.py && python3 scripts/verify_cvpr_production_coverage_audit.py",
        "dependsOn": [
          "readiness-benches",
          "colab-release"
        ],
        "status": "ready"
      },
      {
        "id": "demo-evidence",
        "phase": "Release evidence",
        "surface": "cvpr-demo-evidence-cockpit.html",
        "command": "python3 scripts/build_cvpr_demo_evidence_cockpit.py && python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "dependsOn": [
          "coverage-audit"
        ],
        "status": "ready"
      },
      {
        "id": "result-replay",
        "phase": "Release evidence",
        "surface": "cvpr-colab-result-replay.html",
        "command": "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py",
        "dependsOn": [
          "demo-evidence",
          "colab-release"
        ],
        "status": "ready"
      },
      {
        "id": "slo-dashboard",
        "phase": "Release gates",
        "surface": "cvpr-release-slo-dashboard.html",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "dependsOn": [
          "result-replay"
        ],
        "status": "ready"
      },
      {
        "id": "regression-drillbook",
        "phase": "Release gates",
        "surface": "cvpr-release-regression-drillbook.html",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "dependsOn": [
          "slo-dashboard"
        ],
        "status": "ready"
      },
      {
        "id": "launch-pack",
        "phase": "Launch",
        "surface": "cvpr-launch-readiness-pack.html",
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "dependsOn": [
          "regression-drillbook",
          "colab-release"
        ],
        "status": "ready"
      },
      {
        "id": "release-manifest",
        "phase": "Launch",
        "surface": "cvpr-release-manifest.html",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "dependsOn": [
          "launch-pack"
        ],
        "status": "ready"
      },
      {
        "id": "change-control",
        "phase": "Launch",
        "surface": "cvpr-release-change-control.html",
        "command": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py",
        "dependsOn": [
          "release-manifest"
        ],
        "status": "ready"
      },
      {
        "id": "full-stack-validation",
        "phase": "Validation",
        "surface": "cvpr-validation-center.html",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "dependsOn": [
          "change-control"
        ],
        "status": "ready"
      }
    ],
    "sources": {
      "changeControl": "analysis/cvpr_release_change_control/registry.json",
      "manifest": "analysis/cvpr_release_manifest/registry.json",
      "launch": "analysis/cvpr_launch_readiness_pack/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "launch": {
    "summary": {
      "pack": "cvpr-launch-readiness-pack",
      "status": "block",
      "releaseGate": "release",
      "sloStatus": "block",
      "drillbookStatus": "block",
      "operationsStatus": "ready",
      "validationGate": "release",
      "fullStackStatus": "valid",
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "benchRelease": 44,
      "benchCases": 44,
      "arenaRelease": 328,
      "arenaPairings": 328,
      "workerJobs": 14,
      "cachedResults": 56,
      "liveIntakeResults": 56,
      "packageTests": 148,
      "criticalFailures": 1,
      "importIssues": 0,
      "readinessFloor": 44.0,
      "avgReadiness": 75.14
    },
    "launchSteps": [
      {
        "step": "Release brief",
        "surface": "cvpr-production-release-brief.html",
        "command": "python3 scripts/build_cvpr_production_release_brief.py && python3 scripts/verify_cvpr_production_release_brief.py",
        "evidence": "analysis/cvpr_production_release_brief/registry.json",
        "status": "release"
      },
      {
        "step": "SLO gate",
        "surface": "cvpr-release-slo-dashboard.html",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
        "status": "block"
      },
      {
        "step": "Regression drills",
        "surface": "cvpr-release-regression-drillbook.html",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "evidence": "analysis/cvpr_release_regression_drillbook/registry.json",
        "status": "block"
      },
      {
        "step": "Colab operations",
        "surface": "cvpr-colab-operations-dashboard.html",
        "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py && python3 scripts/verify_cvpr_colab_operations_dashboard.py",
        "evidence": "analysis/cvpr_colab_operations_dashboard/registry.json",
        "status": "ready"
      },
      {
        "step": "Validation center",
        "surface": "cvpr-validation-center.html",
        "command": "python3 scripts/build_cvpr_validation_center.py && python3 scripts/verify_cvpr_validation_center.py",
        "evidence": "analysis/cvpr_validation_center/registry.json",
        "status": "release"
      },
      {
        "step": "Colab import",
        "surface": "cvpr-colab-release-bundle.html",
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "evidence": "analysis/cvpr_colab_gpu_worker/import_validation.json",
        "status": "valid"
      },
      {
        "step": "Full stack",
        "surface": "cvpr-validation-center.html",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "status": "valid"
      },
      {
        "step": "Operator handoff",
        "surface": "index.html",
        "command": "Open index.html and inspect the Production CVPR stack",
        "evidence": "index.html",
        "status": "ready"
      }
    ],
    "sources": {
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json",
      "slos": "analysis/cvpr_release_slo_dashboard/registry.json",
      "drillbook": "analysis/cvpr_release_regression_drillbook/registry.json",
      "operations": "analysis/cvpr_colab_operations_dashboard/registry.json",
      "validation": "analysis/cvpr_validation_center/registry.json",
      "fullStack": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 95,
      "packageTests": 148,
      "workerJobs": 14,
      "promotedRunners": 14,
      "cachedResults": 56,
      "importIssues": 0,
      "durationSec": 129.798
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
      },
      {
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.172,
        "stdoutTail": [
          "wrote cvpr-release-slo-dashboard.html: 9/10 SLOs, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.418,
        "stdoutTail": [
          "verified CVPR release SLO dashboard: 9/10 SLOs, readiness floor 44.0"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.574,
        "stdoutTail": [
          "wrote cvpr-release-regression-drillbook.html: 10/10 drills, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.168,
        "stdoutTail": [
          "verified CVPR release regression drillbook: 10/10 drills"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.202,
        "stdoutTail": [
          "wrote cvpr-launch-readiness-pack.html: block, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.155,
        "stdoutTail": [
          "verified CVPR launch readiness pack: block, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.194,
        "stdoutTail": [
          "wrote cvpr-release-manifest.html: 13 artifacts, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.438,
        "stdoutTail": [
          "verified CVPR release manifest: 13 artifacts, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_change_control.py",
        "returnCode": 0,
        "durationSec": 0.221,
        "stdoutTail": [
          "wrote cvpr-release-change-control.html: 13/13 rows, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_change_control.py",
        "returnCode": 0,
        "durationSec": 0.308,
        "stdoutTail": [
          "verified CVPR release change control: 13/13 rows"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_dependency_graph.py",
        "returnCode": 0,
        "durationSec": 0.16,
        "stdoutTail": [
          "wrote cvpr-release-dependency-graph.html: 15 nodes, 19 edges, status block"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_dependency_graph.py",
        "returnCode": 0,
        "durationSec": 0.13,
        "stdoutTail": [
          "verified CVPR release dependency graph: 15 nodes, 19 edges"
        ],
        "stderrTail": []
      }
    ]
  }
};
export const monitorRows = [
  {
    "id": "critical-slo-alerts",
    "signal": "Critical SLO failures",
    "actual": 1,
    "target": 0,
    "direction": "eq",
    "cadence": "after every rebuild",
    "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
    "responseCommand": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py"
  },
  {
    "id": "pro-plus-result-validity",
    "signal": "Valid Colab Pro+ replay results",
    "actual": 56,
    "target": 56,
    "direction": "eq",
    "cadence": "after every live export",
    "evidence": "analysis/cvpr_colab_result_replay/registry.json",
    "responseCommand": "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py"
  },
  {
    "id": "readiness-floor",
    "signal": "Replay readiness floor",
    "actual": 44.0,
    "target": 68.0,
    "direction": "gte",
    "cadence": "after every live export",
    "evidence": "analysis/cvpr_colab_result_replay/registry.json",
    "responseCommand": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py"
  },
  {
    "id": "provenance-clean",
    "signal": "Pro+ provenance issues",
    "actual": 0,
    "target": 0,
    "direction": "eq",
    "cadence": "after every live export",
    "evidence": "analysis/cvpr_colab_result_replay/registry.json",
    "responseCommand": "python3 scripts/validate_cvpr_colab_results.py"
  },
  {
    "id": "manifest-sealed",
    "signal": "Release manifest sealed",
    "actual": 0,
    "target": 1,
    "direction": "eq",
    "cadence": "after every controlled change",
    "evidence": "analysis/cvpr_release_manifest/registry.json",
    "responseCommand": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py"
  },
  {
    "id": "change-control-ready",
    "signal": "Controlled release artifacts",
    "actual": 13,
    "target": 13,
    "direction": "eq",
    "cadence": "after every manifest reseal",
    "evidence": "analysis/cvpr_release_change_control/registry.json",
    "responseCommand": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py"
  },
  {
    "id": "dependency-graph-ready",
    "signal": "Release dependency graph ready",
    "actual": 0,
    "target": 1,
    "direction": "eq",
    "cadence": "after dependency or command edits",
    "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
    "responseCommand": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py"
  },
  {
    "id": "launch-ready",
    "signal": "Launch readiness pack ready",
    "actual": 0,
    "target": 1,
    "direction": "eq",
    "cadence": "before operator handoff",
    "evidence": "analysis/cvpr_launch_readiness_pack/registry.json",
    "responseCommand": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py"
  },
  {
    "id": "full-stack-valid",
    "signal": "Full-stack validation valid",
    "actual": 1,
    "target": 1,
    "direction": "eq",
    "cadence": "before and after every launch change",
    "evidence": "analysis/cvpr_full_stack_validation/registry.json",
    "responseCommand": "python3 scripts/validate_cvpr_full_stack.py"
  }
];
export const summary = {
  "dashboard": "cvpr-post-launch-monitoring",
  "status": "block",
  "monitors": 9,
  "passingMonitors": 4,
  "alerts": 5,
  "releaseGate": "release",
  "fullStackStatus": "valid",
  "readinessFloor": 44.0,
  "avgReadiness": 75.14,
  "manifestStatus": "block",
  "changeControlStatus": "block",
  "packageTests": 148
};
