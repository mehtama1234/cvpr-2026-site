export const sources = {
  "replay": {
    "summary": {
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
    ],
    "sources": {
      "worker": "analysis/cvpr_colab_gpu_worker/registry.json",
      "planner": "analysis/cvpr_colab_execution_planner/registry.json",
      "cockpit": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json"
    }
  },
  "visualQa": {
    "summary": {
      "demo": "cvpr-visual-qa-sweep-dashboard",
      "status": "ready",
      "surfaces": 8,
      "readySurfaces": 8,
      "workflows": 8,
      "requiredTokensMissing": 0,
      "brokenLocalLinks": 0,
      "todoMarkers": 0,
      "highLayoutRisk": 0,
      "roadmapStatus": "ready",
      "closeoutStatus": "sealed",
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "qaRows": [
      {
        "page": "index.html",
        "workflow": "global navigation",
        "interaction": "open roadmap, closeout, replay, gauntlet, and validation links",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 28955,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 137,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "medium",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-second-round-demo-roadmap.html",
        "workflow": "second-round planning",
        "interaction": "inspect goal rows and jump to target surfaces",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 5662,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 10,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-colab-result-replay.html",
        "workflow": "Pro+ evidence replay",
        "interaction": "inspect replay commands and per-job result matrix",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 7935,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 15,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "medium",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-cross-theme-incident-gauntlet.html",
        "workflow": "scenario expansion",
        "interaction": "scan cross-theme incident rows and owner actions",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 23118,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 37,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-remediation-canary-monitor.html",
        "workflow": "clinical and safety escalation",
        "interaction": "review canary rows, breach policy, and rollback actions",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 11840,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 34,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-remediation-rollback-rehearsal-lab.html",
        "workflow": "3D and temporal rollback stress",
        "interaction": "inspect timed rollback rehearsals and missed-step evidence",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 8058,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 17,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-remediation-closeout-pack.html",
        "workflow": "manifest reseal",
        "interaction": "confirm closeout rows and change-control seal",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 5390,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 12,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "low",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      },
      {
        "page": "cvpr-validation-center.html",
        "workflow": "full-stack gate",
        "interaction": "inspect command steps, package tests, and validation status",
        "requiredTokens": 3,
        "exists": true,
        "bytes": 4466,
        "viewportMeta": true,
        "hasTitle": true,
        "hasPrimaryHeading": true,
        "links": 11,
        "brokenLocalLinks": 0,
        "brokenLinks": [],
        "requiredTokensPresent": 3,
        "missingTokens": [],
        "todoMarkers": 0,
        "layoutRisk": "medium",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "ready"
      }
    ],
    "sources": {
      "roadmap": "analysis/cvpr_second_round_demo_roadmap/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json",
      "closeout": "analysis/cvpr_remediation_closeout_pack/registry.json"
    }
  },
  "scenario": {
    "summary": {
      "demo": "cvpr-scenario-expansion-pack",
      "status": "ready",
      "scenarios": 12,
      "families": 6,
      "systems": 2,
      "themes": 2,
      "ship": 5,
      "retest": 7,
      "block": 0,
      "maxRisk": 70.6,
      "minEvidence": 45.9,
      "gauntletStatus": "release",
      "roadmapStatus": "ready",
      "visualQaStatus": "ready",
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "scenarioRows": [
      {
        "id": "scenario-01",
        "family": "rare-object",
        "title": "Rare object under partial occlusion",
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab",
        "targetPage": "cvpr-open-vocab-failure-hunt.html",
        "sourceGauntletRow": "open-vocab/launch-audit",
        "sourceDecision": "release",
        "readinessShift": -8,
        "riskShift": 13,
        "evidenceShift": -9,
        "expanded": {
          "readiness": 72.3,
          "risk": 48.6,
          "evidence": 72.6
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "ship"
      },
      {
        "id": "scenario-02",
        "family": "rare-object",
        "title": "Fine-grained medical object with lookalike distractor",
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab",
        "targetPage": "cvpr-open-vocab-failure-hunt.html",
        "sourceGauntletRow": "open-vocab/launch-audit",
        "sourceDecision": "release",
        "readinessShift": -10,
        "riskShift": 15,
        "evidenceShift": -11,
        "expanded": {
          "readiness": 70.3,
          "risk": 50.6,
          "evidence": 70.6
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "ship"
      },
      {
        "id": "scenario-03",
        "family": "adversarial-text",
        "title": "Conflicting overlay text near true object",
        "theme": "Teaching machines to see and talk at once",
        "system": "grounded-answer",
        "targetPage": "cvpr-grounded-answer-courtroom.html",
        "sourceGauntletRow": "grounded-answer/launch-audit",
        "sourceDecision": "review",
        "readinessShift": -9,
        "riskShift": 18,
        "evidenceShift": -10,
        "expanded": {
          "readiness": 66.2,
          "risk": 66.6,
          "evidence": 51.9
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "retest"
      },
      {
        "id": "scenario-04",
        "family": "adversarial-text",
        "title": "Prompt-injection label inside the scene",
        "theme": "Teaching machines to see and talk at once",
        "system": "grounded-answer",
        "targetPage": "cvpr-grounded-answer-courtroom.html",
        "sourceGauntletRow": "grounded-answer/launch-audit",
        "sourceDecision": "review",
        "readinessShift": -12,
        "riskShift": 21,
        "evidenceShift": -12,
        "expanded": {
          "readiness": 63.2,
          "risk": 69.6,
          "evidence": 49.9
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "retest"
      },
      {
        "id": "scenario-05",
        "family": "unsupported-query",
        "title": "Question asks for hidden evidence outside the frame",
        "theme": "Teaching machines to see and talk at once",
        "system": "grounded-answer",
        "targetPage": "cvpr-grounded-answer-courtroom.html",
        "sourceGauntletRow": "grounded-answer/launch-audit",
        "sourceDecision": "review",
        "readinessShift": -7,
        "riskShift": 16,
        "evidenceShift": -14,
        "expanded": {
          "readiness": 68.2,
          "risk": 64.6,
          "evidence": 47.9
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "retest"
      },
      {
        "id": "scenario-06",
        "family": "unsupported-query",
        "title": "Open-vocab class requested but localization is absent",
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab",
        "targetPage": "cvpr-open-vocab-failure-hunt.html",
        "sourceGauntletRow": "open-vocab/launch-audit",
        "sourceDecision": "release",
        "readinessShift": -9,
        "riskShift": 17,
        "evidenceShift": -13,
        "expanded": {
          "readiness": 71.3,
          "risk": 52.6,
          "evidence": 68.6
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "ship"
      },
      {
        "id": "scenario-07",
        "family": "spatial-ambiguity",
        "title": "Small object inside cluttered nested containers",
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab",
        "targetPage": "cvpr-open-vocab-failure-hunt.html",
        "sourceGauntletRow": "open-vocab/launch-audit",
        "sourceDecision": "release",
        "readinessShift": -6,
        "riskShift": 12,
        "evidenceShift": -8,
        "expanded": {
          "readiness": 74.3,
          "risk": 47.6,
          "evidence": 73.6
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "ship"
      },
      {
        "id": "scenario-08",
        "family": "spatial-ambiguity",
        "title": "Answer cites correct object but wrong region",
        "theme": "Teaching machines to see and talk at once",
        "system": "grounded-answer",
        "targetPage": "cvpr-grounded-answer-courtroom.html",
        "sourceGauntletRow": "grounded-answer/launch-audit",
        "sourceDecision": "review",
        "readinessShift": -8,
        "riskShift": 14,
        "evidenceShift": -11,
        "expanded": {
          "readiness": 67.2,
          "risk": 62.6,
          "evidence": 50.9
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "retest"
      },
      {
        "id": "scenario-09",
        "family": "temporal-mismatch",
        "title": "Video answer relies on stale earlier frame",
        "theme": "Teaching machines to see and talk at once",
        "system": "grounded-answer",
        "targetPage": "cvpr-grounded-answer-courtroom.html",
        "sourceGauntletRow": "grounded-answer/launch-audit",
        "sourceDecision": "review",
        "readinessShift": -11,
        "riskShift": 19,
        "evidenceShift": -12,
        "expanded": {
          "readiness": 64.2,
          "risk": 67.6,
          "evidence": 49.9
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "retest"
      },
      {
        "id": "scenario-10",
        "family": "temporal-mismatch",
        "title": "Open-vocab target appears only after scene cut",
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab",
        "targetPage": "cvpr-open-vocab-failure-hunt.html",
        "sourceGauntletRow": "open-vocab/launch-audit",
        "sourceDecision": "release",
        "readinessShift": -10,
        "riskShift": 18,
        "evidenceShift": -10,
        "expanded": {
          "readiness": 70.3,
          "risk": 53.6,
          "evidence": 71.6
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "ship"
      },
      {
        "id": "scenario-11",
        "family": "provenance-conflict",
        "title": "Generated crop has missing source provenance",
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab",
        "targetPage": "cvpr-open-vocab-failure-hunt.html",
        "sourceGauntletRow": "open-vocab/launch-audit",
        "sourceDecision": "release",
        "readinessShift": -7,
        "riskShift": 20,
        "evidenceShift": -15,
        "expanded": {
          "readiness": 73.3,
          "risk": 55.6,
          "evidence": 66.6
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "retest"
      },
      {
        "id": "scenario-12",
        "family": "provenance-conflict",
        "title": "VLM citation points to edited evidence",
        "theme": "Teaching machines to see and talk at once",
        "system": "grounded-answer",
        "targetPage": "cvpr-grounded-answer-courtroom.html",
        "sourceGauntletRow": "grounded-answer/launch-audit",
        "sourceDecision": "review",
        "readinessShift": -10,
        "riskShift": 22,
        "evidenceShift": -16,
        "expanded": {
          "readiness": 65.2,
          "risk": 70.6,
          "evidence": 45.9
        },
        "acceptance": "scenario appears in registry, page, package fixture, verifier, and full-stack validation",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "retest"
      }
    ],
    "sources": {
      "roadmap": "analysis/cvpr_second_round_demo_roadmap/registry.json",
      "gauntlet": "analysis/cvpr_cross_theme_incident_gauntlet/registry.json",
      "visualQa": "analysis/cvpr_visual_qa_sweep_dashboard/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "rollbackStress": {
    "summary": {
      "demo": "cvpr-3d-temporal-rollback-stress-lab",
      "status": "ready",
      "stressRows": 6,
      "systems": 2,
      "watch": 3,
      "rehearse": 3,
      "block": 0,
      "rollbackMisses": 0,
      "maxRisk": 74.4,
      "minEvidence": 44.8,
      "rehearsalStatus": "release",
      "scenarioStatus": "ready",
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "stressRows": [
      {
        "id": "geometry-occlusion",
        "title": "3D geometry occlusion",
        "system": "3d",
        "targetPage": "cvpr-3d-edit-provenance-room.html",
        "sourceRow": "thin-structure/dense-novel-view/scene-rewrite",
        "baseline": {
          "readiness": 74.3,
          "risk": 43.3,
          "evidence": 79.2
        },
        "shifts": {
          "readiness": -9,
          "risk": 14,
          "evidence": -10
        },
        "stressed": {
          "readiness": 65.3,
          "risk": 57.3,
          "evidence": 69.2
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "watch"
      },
      {
        "id": "splat-edit-leakage",
        "title": "Splat edit leakage",
        "system": "3d",
        "targetPage": "cvpr-3d-edit-provenance-room.html",
        "sourceRow": "thin-structure/dense-novel-view/scene-rewrite",
        "baseline": {
          "readiness": 74.3,
          "risk": 43.3,
          "evidence": 79.2
        },
        "shifts": {
          "readiness": -11,
          "risk": 18,
          "evidence": -12
        },
        "stressed": {
          "readiness": 63.3,
          "risk": 61.3,
          "evidence": 67.2
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "watch"
      },
      {
        "id": "camera-jump",
        "title": "Camera jump after semantic edit",
        "system": "3d",
        "targetPage": "cvpr-3d-edit-provenance-room.html",
        "sourceRow": "thin-structure/dense-novel-view/scene-rewrite",
        "baseline": {
          "readiness": 74.3,
          "risk": 43.3,
          "evidence": 79.2
        },
        "shifts": {
          "readiness": -13,
          "risk": 20,
          "evidence": -13
        },
        "stressed": {
          "readiness": 61.3,
          "risk": 63.3,
          "evidence": 66.2
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "watch"
      },
      {
        "id": "identity-switch",
        "title": "Temporal identity switch",
        "system": "temporal",
        "targetPage": "cvpr-temporal-counterfactual-lab.html",
        "sourceRow": "long-rollout-drift/long-horizon-fork",
        "baseline": {
          "readiness": 64.6,
          "risk": 52.4,
          "evidence": 59.8
        },
        "shifts": {
          "readiness": -12,
          "risk": 18,
          "evidence": -14
        },
        "stressed": {
          "readiness": 52.6,
          "risk": 70.4,
          "evidence": 45.8
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "rehearse"
      },
      {
        "id": "frame-drop",
        "title": "Dropped frames near contact",
        "system": "temporal",
        "targetPage": "cvpr-temporal-counterfactual-lab.html",
        "sourceRow": "long-rollout-drift/long-horizon-fork",
        "baseline": {
          "readiness": 64.6,
          "risk": 52.4,
          "evidence": 59.8
        },
        "shifts": {
          "readiness": -10,
          "risk": 16,
          "evidence": -11
        },
        "stressed": {
          "readiness": 54.6,
          "risk": 68.4,
          "evidence": 48.8
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "rehearse"
      },
      {
        "id": "long-horizon-drift",
        "title": "Long-horizon drift rollback",
        "system": "temporal",
        "targetPage": "cvpr-temporal-counterfactual-lab.html",
        "sourceRow": "long-rollout-drift/long-horizon-fork",
        "baseline": {
          "readiness": 64.6,
          "risk": 52.4,
          "evidence": 59.8
        },
        "shifts": {
          "readiness": -14,
          "risk": 22,
          "evidence": -15
        },
        "stressed": {
          "readiness": 50.6,
          "risk": 74.4,
          "evidence": 44.8
        },
        "rollback": {
          "elapsedMinutes": 27,
          "targetMinutes": 28,
          "minutesOverTarget": 0,
          "status": "pass"
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "rehearse"
      }
    ],
    "sources": {
      "room": "analysis/cvpr_3d_edit_provenance_room/registry.json",
      "temporal": "analysis/cvpr_temporal_counterfactual_lab/registry.json",
      "rehearsal": "analysis/cvpr_remediation_rollback_rehearsal_lab/registry.json",
      "scenarioPack": "analysis/cvpr_scenario_expansion_pack/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "clinicalSafety": {
    "summary": {
      "demo": "cvpr-clinical-safety-escalation-playbook",
      "status": "ready",
      "rows": 8,
      "systems": 2,
      "releaseWatch": 2,
      "humanReview": 5,
      "safetyHold": 1,
      "rollbackRehearsal": 0,
      "maxSafetyRisk": 74.5,
      "minEvidence": 72.5,
      "canaryRollback": 0,
      "rollbackStressStatus": "ready",
      "fullStackStatus": "valid",
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "escalationRows": [
      {
        "id": "clinical/same-site-clean",
        "system": "medical-vision-validation",
        "theme": "Using vision to act in the world",
        "title": "Same-site clean validation",
        "targetPage": "cvpr-clinical-shift-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 88.5,
          "safetyRisk": 22.2,
          "evidence": 87.9,
          "rollbackRisk": 17.7
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "release-watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "clinical/new-scanner",
        "system": "medical-vision-validation",
        "theme": "Using vision to act in the world",
        "title": "New scanner protocol",
        "targetPage": "cvpr-clinical-shift-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 80.5,
          "safetyRisk": 47.3,
          "evidence": 80.3,
          "rollbackRisk": 24.0
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "release-watch",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
      },
      {
        "id": "clinical/external-hospital",
        "system": "medical-vision-validation",
        "theme": "Using vision to act in the world",
        "title": "External hospital cohort",
        "targetPage": "cvpr-clinical-shift-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 77.1,
          "safetyRisk": 58.7,
          "evidence": 76.9,
          "rollbackRisk": 26.8
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "human-review",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "clinical/noisy-rare-cohort",
        "system": "medical-vision-validation",
        "theme": "Using vision to act in the world",
        "title": "Noisy rare cohort",
        "targetPage": "cvpr-clinical-shift-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 72.5,
          "safetyRisk": 74.5,
          "evidence": 72.5,
          "rollbackRisk": 30.8
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "safety-hold",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_canary_monitor.py"
      },
      {
        "id": "driving/urban-cut-in",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "title": "Urban cut-in",
        "targetPage": "cvpr-driving-safety-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 68.1,
          "safetyRisk": 53.6,
          "evidence": 81.9,
          "rollbackRisk": 27.2
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "human-review",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "driving/night-crosswalk",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "title": "Night crosswalk",
        "targetPage": "cvpr-driving-safety-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 68.2,
          "safetyRisk": 49.2,
          "evidence": 80.3,
          "rollbackRisk": 25.9
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "human-review",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "driving/highway-merge",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "title": "Highway merge",
        "targetPage": "cvpr-driving-safety-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 68.2,
          "safetyRisk": 58.1,
          "evidence": 83.6,
          "rollbackRisk": 28.4
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "human-review",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      },
      {
        "id": "driving/construction-zone",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "title": "Construction zone",
        "targetPage": "cvpr-driving-safety-bench.html",
        "sourceDecision": "release",
        "escalation": {
          "readiness": 68.2,
          "safetyRisk": 49.2,
          "evidence": 79.4,
          "rollbackRisk": 25.9
        },
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "decision": "human-review",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
      }
    ],
    "sources": {
      "clinical": "analysis/cvpr_clinical_shift_bench/registry.json",
      "driving": "analysis/cvpr_driving_safety_bench/registry.json",
      "canary": "analysis/cvpr_remediation_canary_monitor/registry.json",
      "rollbackStress": "analysis/cvpr_3d_temporal_rollback_stress_lab/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 155,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 25.283
    },
    "steps": [
      {
        "command": "python3 scripts/build_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "wrote cvpr-systems-lab.html: 11 systems, 33 stages"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_systems_lab.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR systems lab: 11 systems, 33 stages, 11 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-demo-lab.html: 41 interactive demos (33 stage demos)"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_lab.py",
        "returnCode": 0,
        "durationSec": 0.022,
        "stdoutTail": [
          "verified CVPR demo lab: 41 demos, 8 flagship, 33 stage demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "wrote cvpr-demo-arena.html: 41 demos x 8 scenarios = 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_arena.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR demo arena: 41 demos, 8 scenarios, 328 evaluations"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "wrote cvpr-demo-playbook.html: 8 plays, 0 critical"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_playbook.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR demo playbook: 8 plays, 0 critical, 8 clusters"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.6"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 82.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 33.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.024,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
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
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "returnCode": 0,
        "durationSec": 0.049,
        "stdoutTail": [
          "validated CVPR Colab results: 40 results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_gpu_worker.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR Colab GPU worker: 10 jobs, 40 cached results"
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
        "command": "python3 scripts/verify_cvpr_colab_handoff_package.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR Colab handoff package: 10 jobs, 8 zip entries"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-driving-safety-bench.html: 4 cases, max risk 34.6"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_driving_safety_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR driving safety bench: 4 cases, max risk 34.6"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "wrote cvpr-constraint-generation-bench.html: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_constraint_generation_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR constraint generation bench: 4 cases, max identity damage 34.8"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-compute-serving-bench.html: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_compute_serving_bench.py",
        "returnCode": 0,
        "durationSec": 0.024,
        "stdoutTail": [
          "verified CVPR compute serving bench: 4 cases, min evidence 85.7"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "wrote cvpr-clinical-shift-bench.html: 4 cases, max risk 33.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_clinical_shift_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR clinical shift bench: 4 cases, max risk 33.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "wrote cvpr-adversarial-provenance-bench.html: 4 cases, min evidence 82.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_adversarial_provenance_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR adversarial provenance bench: 4 cases, min evidence 82.5"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-long-tail-grounding-bench.html: 4 cases, min evidence 87.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_long_tail_grounding_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR long-tail grounding bench: 4 cases, min evidence 87.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "wrote cvpr-restoration-fidelity-bench.html: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_restoration_fidelity_bench.py",
        "returnCode": 0,
        "durationSec": 0.023,
        "stdoutTail": [
          "verified CVPR restoration fidelity bench: 4 cases, max fabricated risk 29.4"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-temporal-rollout-bench.html: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_temporal_rollout_bench.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR temporal rollout bench: 4 cases, max drift 36.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-vlm-answer-verification-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_vlm_answer_verification_bench.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR VLM answer verification bench: 4 cases, max unsupported risk 32.2"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-metric-geometry-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_metric_geometry_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR metric geometry bench: 4 cases, max scale drift 29.9"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-gaussian-splatting-bench.html: 4 release cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_gaussian_splatting_bench.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR Gaussian Splatting bench: 4 cases, max edit leakage 27.4"
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
      },
      {
        "command": "python3 scripts/verify_cvpr_mission_control.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR mission control: 11 systems, 11 benches, 44 cases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.039,
        "stdoutTail": [
          "wrote cvpr-failure-atlas.html: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_failure_atlas.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR failure atlas: 44 cases, 11 families"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/cvpr_paper_system_gate_experiments.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate experiment results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_paper_system_gate.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-paper-to-system-gate package and page"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 51 steps, 26 tests"
        ],
        "stderrTail": []
      },
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
        "command": "python3 scripts/build_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-validation-center.html: 53 steps, 148 tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_validation_center.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR validation center: 53 steps, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_intake.py",
        "returnCode": 0,
        "durationSec": 0.092,
        "stdoutTail": [
          "verified CVPR live Colab intake: 40 live results, 0 issues"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_live_colab_promotion.py",
        "returnCode": 0,
        "durationSec": 0.083,
        "stdoutTail": [
          "verified CVPR live Colab promotion: 40 promoted cached-real results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-colab-promotion-delta.html: 40 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_promotion_delta.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR Colab promotion delta: 40 cases, 0 regressions"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-colab-release-bundle.html: 10 runners, 40 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_release_bundle.py",
        "returnCode": 0,
        "durationSec": 0.024,
        "stdoutTail": [
          "verified CVPR Colab release bundle: 10 runners, 40 cached results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.041,
        "stdoutTail": [
          "wrote cvpr-colab-evidence-ledger.html: 7 artifacts, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_evidence_ledger.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR Colab evidence ledger: 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.04,
        "stdoutTail": [
          "wrote cvpr-colab-run-receipt.html: 8 stages, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_run_receipt.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR Colab run receipt: 8 stages, 7 artifacts"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-theme-release-matrix.html: 8 themes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_theme_release_matrix.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR theme release matrix: 8 themes, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.043,
        "stdoutTail": [
          "wrote cvpr-production-release-brief.html: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR production release brief: release gate, 328 arena releases"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-production-coverage-audit.html: release gate, 10 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_production_coverage_audit.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR production coverage audit: 11 systems, 10 Colab Pro+ jobs, 0 missing evidence"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-remediation-board.html: 0 block tasks, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_board.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation board: 0 block tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.037,
        "stdoutTail": [
          "wrote cvpr-remediation-sprint-plan.html: 3 sprints, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_sprint_plan.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR remediation sprint plan: 3 sprints, 0 tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.039,
        "stdoutTail": [
          "wrote cvpr-colab-operations-dashboard.html: 10 jobs, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_operations_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "verified CVPR Colab operations dashboard: 10 jobs, 53 steps"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.038,
        "stdoutTail": [
          "wrote cvpr-colab-execution-planner.html: 3 waves, 40 expected results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_execution_planner.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR Colab execution planner: 3 waves, 40 expected results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-demo-evidence-cockpit.html: 41 demos, 40 expected live results, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR demo evidence cockpit: 41 demos, 40 expected live results"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-colab-result-replay.html: 40/40 results, 30 demos, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_colab_result_replay.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR Colab result replay: 40/40 results, 30 stage demos"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-release-slo-dashboard.html: 10/10 SLOs, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release SLO dashboard: 10/10 SLOs, readiness floor 68.1"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.042,
        "stdoutTail": [
          "wrote cvpr-release-regression-drillbook.html: 10/10 drills, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release regression drillbook: 10/10 drills"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.047,
        "stdoutTail": [
          "wrote cvpr-launch-readiness-pack.html: launch-ready, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR launch readiness pack: launch-ready, 148 package tests"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.036,
        "stdoutTail": [
          "wrote cvpr-release-manifest.html: 13 artifacts, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_manifest.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release manifest: 13 artifacts, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_change_control.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-release-change-control.html: 13/13 rows, status controlled"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_change_control.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR release change control: 13/13 rows"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_dependency_graph.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-release-dependency-graph.html: 15 nodes, 19 edges, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_dependency_graph.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR release dependency graph: 15 nodes, 19 edges"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_post_launch_monitoring.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-post-launch-monitoring.html: 9/9 monitors, status watching"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_post_launch_monitoring.py",
        "returnCode": 0,
        "durationSec": 0.025,
        "stdoutTail": [
          "verified CVPR post-launch monitoring: 9/9 monitors"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_audit_trail.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-release-audit-trail.html: 58/58 events, status complete"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_audit_trail.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR release audit trail: 58/58 events"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_release_command_center.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-release-command-center.html: 8/8 surfaces, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_release_command_center.py",
        "returnCode": 0,
        "durationSec": 0.046,
        "stdoutTail": [
          "verified CVPR release command center: 8/8 surfaces"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_theme_portfolio_map.py",
        "returnCode": 0,
        "durationSec": 0.041,
        "stdoutTail": [
          "wrote cvpr-theme-portfolio-map.html: 8 themes, 11 systems, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_theme_portfolio_map.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR theme portfolio map: 8 themes, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_next_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-next-demo-roadmap.html: 8 goals, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_next_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR next-demo roadmap: 8 goals, 11 systems"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_demo_build_backlog.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-demo-build-backlog.html: 24 tasks, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_demo_build_backlog.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR demo build backlog: 8 goals, 24 tasks"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_adaptive_serving_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-adaptive-serving-stress-lab.html: 12 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_adaptive_serving_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR adaptive serving stress lab: 12 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_constraint_edit_tournament.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-constraint-edit-tournament.html: 48 matches, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_constraint_edit_tournament.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR constraint edit tournament: 48 matches, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_open_vocab_failure_hunt.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-open-vocab-failure-hunt.html: 16 probes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_open_vocab_failure_hunt.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR open-vocab failure hunt: 16 probes, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_3d_edit_provenance_room.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-3d-edit-provenance-room.html: 48 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_3d_edit_provenance_room.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR 3D edit provenance room: 48 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_temporal_counterfactual_lab.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-temporal-counterfactual-lab.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_temporal_counterfactual_lab.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR temporal counterfactual lab: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_grounded_answer_courtroom.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-grounded-answer-courtroom.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_grounded_answer_courtroom.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR grounded answer courtroom: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_provenance_red_team_arena.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-provenance-red-team-arena.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_provenance_red_team_arena.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR provenance red-team arena: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_safety_deployment_simulator.py",
        "returnCode": 0,
        "durationSec": 0.034,
        "stdoutTail": [
          "wrote cvpr-safety-deployment-simulator.html: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_safety_deployment_simulator.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR safety deployment simulator: 16 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_cross_theme_incident_gauntlet.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-cross-theme-incident-gauntlet.html: 32 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_cross_theme_incident_gauntlet.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR cross-theme incident gauntlet: 32 rows, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_gauntlet_remediation_sprint.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-gauntlet-remediation-sprint.html: 29 actions, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_gauntlet_remediation_sprint.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "verified CVPR gauntlet remediation sprint: 29 actions, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_retest_harness.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-remediation-retest-harness.html: 29 retests, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation retest harness: 29 retests, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_promotion_board.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-remediation-promotion-board.html: 12 promote, 17 monitor, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR remediation promotion board: 12 promote, 17 monitor"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_canary_monitor.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-remediation-canary-monitor.html: 12 clean, 17 watch, status watching"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_canary_monitor.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR remediation canary monitor: 12 clean, 17 watch"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_rollback_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-remediation-rollback-drillbook.html: 12 drills, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_rollback_drillbook.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR remediation rollback drillbook: 12 drills, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_rollback_rehearsal_lab.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "wrote cvpr-remediation-rollback-rehearsal-lab.html: 12 rehearsals, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_rollback_rehearsal_lab.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation rollback rehearsal lab: 12 rehearsals, status release"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_audit_ledger.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-remediation-audit-ledger.html: 7 stages, status complete"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_audit_ledger.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR remediation audit ledger: 7 stages, status complete"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_command_center.py",
        "returnCode": 0,
        "durationSec": 0.035,
        "stdoutTail": [
          "wrote cvpr-remediation-command-center.html: 7 surfaces, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_command_center.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation command center: 7 surfaces, status operator-ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-remediation-release-brief.html: release gate, controlled-watch posture"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_release_brief.py",
        "returnCode": 0,
        "durationSec": 0.028,
        "stdoutTail": [
          "verified CVPR remediation release brief: release gate, controlled-watch posture"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_remediation_closeout_pack.py",
        "returnCode": 0,
        "durationSec": 0.032,
        "stdoutTail": [
          "wrote cvpr-remediation-closeout-pack.html: 7 rows, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_remediation_closeout_pack.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR remediation closeout pack: 7 rows, status sealed"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_second_round_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.03,
        "stdoutTail": [
          "wrote cvpr-second-round-demo-roadmap.html: 6 goals, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_second_round_demo_roadmap.py",
        "returnCode": 0,
        "durationSec": 0.027,
        "stdoutTail": [
          "verified CVPR second-round demo roadmap: 6 goals, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_visual_qa_sweep_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.046,
        "stdoutTail": [
          "wrote cvpr-visual-qa-sweep-dashboard.html: 8/8 surfaces, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_visual_qa_sweep_dashboard.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR visual QA sweep dashboard: 8/8 surfaces ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_scenario_expansion_pack.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-scenario-expansion-pack.html: 12 scenarios, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_scenario_expansion_pack.py",
        "returnCode": 0,
        "durationSec": 0.029,
        "stdoutTail": [
          "verified CVPR scenario expansion pack: 12 scenarios, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_3d_temporal_rollback_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.031,
        "stdoutTail": [
          "wrote cvpr-3d-temporal-rollback-stress-lab.html: 6 rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_3d_temporal_rollback_stress_lab.py",
        "returnCode": 0,
        "durationSec": 0.026,
        "stdoutTail": [
          "verified CVPR 3D temporal rollback stress lab: 6 rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/build_cvpr_clinical_safety_escalation_playbook.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "wrote cvpr-clinical-safety-escalation-playbook.html: 8 rows, status ready"
        ],
        "stderrTail": []
      },
      {
        "command": "python3 scripts/verify_cvpr_clinical_safety_escalation_playbook.py",
        "returnCode": 0,
        "durationSec": 0.033,
        "stdoutTail": [
          "verified CVPR clinical safety escalation playbook: 8 rows, status ready"
        ],
        "stderrTail": []
      }
    ]
  }
};
export const closeoutRows = [
  {
    "id": "second-round-closeout-01-replay",
    "kind": "replay",
    "label": "Colab Pro+ evidence replay",
    "ownerSurface": "cvpr-colab-result-replay.html",
    "actual": "ready",
    "expected": "ready",
    "evidence": "analysis/cvpr_colab_result_replay/registry.json",
    "verifyCommand": "python3 scripts/verify_cvpr_colab_result_replay.py",
    "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "sealed"
  },
  {
    "id": "second-round-closeout-02-visualQa",
    "kind": "visualQa",
    "label": "Visual QA sweep",
    "ownerSurface": "cvpr-visual-qa-sweep-dashboard.html",
    "actual": "ready",
    "expected": "ready",
    "evidence": "analysis/cvpr_visual_qa_sweep_dashboard/registry.json",
    "verifyCommand": "python3 scripts/verify_cvpr_visual_qa_sweep_dashboard.py",
    "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "sealed"
  },
  {
    "id": "second-round-closeout-03-scenario",
    "kind": "scenario",
    "label": "Scenario expansion pack",
    "ownerSurface": "cvpr-scenario-expansion-pack.html",
    "actual": "ready",
    "expected": "ready",
    "evidence": "analysis/cvpr_scenario_expansion_pack/registry.json",
    "verifyCommand": "python3 scripts/verify_cvpr_scenario_expansion_pack.py",
    "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "sealed"
  },
  {
    "id": "second-round-closeout-04-rollbackStress",
    "kind": "rollbackStress",
    "label": "3D temporal rollback stress",
    "ownerSurface": "cvpr-3d-temporal-rollback-stress-lab.html",
    "actual": "ready",
    "expected": "ready",
    "evidence": "analysis/cvpr_3d_temporal_rollback_stress_lab/registry.json",
    "verifyCommand": "python3 scripts/verify_cvpr_3d_temporal_rollback_stress_lab.py",
    "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "sealed"
  },
  {
    "id": "second-round-closeout-05-clinicalSafety",
    "kind": "clinicalSafety",
    "label": "Clinical safety escalation",
    "ownerSurface": "cvpr-clinical-safety-escalation-playbook.html",
    "actual": "ready",
    "expected": "ready",
    "evidence": "analysis/cvpr_clinical_safety_escalation_playbook/registry.json",
    "verifyCommand": "python3 scripts/verify_cvpr_clinical_safety_escalation_playbook.py",
    "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "sealed"
  },
  {
    "id": "second-round-closeout-06-validation",
    "kind": "validation",
    "label": "Full-stack validation",
    "ownerSurface": "cvpr-validation-center.html",
    "actual": "valid",
    "expected": "valid",
    "evidence": "analysis/cvpr_full_stack_validation/registry.json",
    "verifyCommand": "python3 scripts/validate_cvpr_full_stack.py",
    "closeoutCommand": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "sealed"
  }
];
export const summary = {
  "demo": "cvpr-second-round-closeout-reseal",
  "status": "sealed",
  "rows": 6,
  "sealedRows": 6,
  "secondRoundDemos": 5,
  "replayResults": 40,
  "visualQaSurfaces": 8,
  "scenarioRows": 12,
  "rollbackStressRows": 6,
  "clinicalSafetyRows": 8,
  "fullStackStatus": "valid",
  "packageTests": 148,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
