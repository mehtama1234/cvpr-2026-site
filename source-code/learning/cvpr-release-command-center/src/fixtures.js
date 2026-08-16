export const commandCenterInput = {
  "brief": {
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
  },
  "launch": {
    "summary": {
      "pack": "cvpr-launch-readiness-pack",
      "status": "launch-ready",
      "releaseGate": "release",
      "sloStatus": "release",
      "drillbookStatus": "ready",
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
      "workerJobs": 10,
      "cachedResults": 40,
      "liveIntakeResults": 40,
      "packageTests": 148,
      "criticalFailures": 0,
      "importIssues": 0,
      "readinessFloor": 68.1,
      "avgReadiness": 78.22
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
        "status": "release"
      },
      {
        "step": "Regression drills",
        "surface": "cvpr-release-regression-drillbook.html",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "evidence": "analysis/cvpr_release_regression_drillbook/registry.json",
        "status": "ready"
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
  "manifest": {
    "summary": {
      "manifest": "cvpr-release-manifest",
      "status": "sealed",
      "artifacts": 13,
      "missingArtifacts": 0,
      "launchStatus": "launch-ready",
      "releaseGate": "release",
      "sloStatus": "release",
      "drillbookStatus": "ready",
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
        "sizeBytes": 6576,
        "sha256": "8fd07ff3a201f5869af1865eec4d7ba038c74c5f480ab3e721f0e09fc46409c2"
      },
      {
        "label": "launch-readiness-pack-registry",
        "path": "analysis/cvpr_launch_readiness_pack/registry.json",
        "exists": true,
        "sizeBytes": 3479,
        "sha256": "126ed721634a91979ba276f144fb7b6a33df0b57daea2ea784cbc539a8813ae5",
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
        "sha256": "bc1810aa97d5272f68c30a668d6a474ef112107d7c2da8ecbf95dd7eb5ff0e7a"
      },
      {
        "label": "production-release-brief-registry",
        "path": "analysis/cvpr_production_release_brief/registry.json",
        "exists": true,
        "sizeBytes": 2607,
        "sha256": "7edbc38f38c045615dbbadeea13b6e5e0bea834a859393709f2c62559feed7ba",
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
        "sizeBytes": 6092,
        "sha256": "8882852b10810e86dd387de15a5ff0fced81f921a90dae5e9ded155fe7727ff3"
      },
      {
        "label": "release-slo-dashboard-registry",
        "path": "analysis/cvpr_release_slo_dashboard/registry.json",
        "exists": true,
        "sizeBytes": 3382,
        "sha256": "d8b9149b77f00625b79dc64208030584ae77741c9e667e83fa89e2585a784613",
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
        "sizeBytes": 9327,
        "sha256": "960f7f77dca561cc95d7410e93217d5d69e11017ce7f115eea5adec184f93264"
      },
      {
        "label": "release-regression-drillbook-registry",
        "path": "analysis/cvpr_release_regression_drillbook/registry.json",
        "exists": true,
        "sizeBytes": 8195,
        "sha256": "7476304780c159a395454ef94021dda6433a697837a31be25d64f4c25b44aae0",
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
        "sizeBytes": 11602,
        "sha256": "1ba4f0c7267642338a382c33fc98ac2a034b8ac99461c68e5b59f4ced560ccb7",
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
        "sha256": "fe3ae3efc4a3e78bd9f4b9de0a7e746ae04a358c4b9dddbdd82410f7f03b7189",
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
        "sizeBytes": 24186,
        "sha256": "28fd7c39b0c77d91b8701bcbedc9041002774e1b73475a6748fb0be7afb9c5d9",
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
        "sizeBytes": 25641,
        "sha256": "5a45960199a00cee8c5ed63365c84b705cb115d6ec640ee18cecf491d474c998"
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
      "status": "controlled",
      "artifacts": 13,
      "controlRows": 13,
      "readyRows": 13,
      "missingArtifacts": 0,
      "launchStatus": "launch-ready",
      "manifestStatus": "sealed",
      "fullStackStatus": "valid",
      "packageTests": 148
    },
    "controlRows": [
      {
        "artifact": "launch-readiness-pack-page",
        "path": "cvpr-launch-readiness-pack.html",
        "ownerSurface": "cvpr-launch-readiness-pack.html",
        "currentSha256": "8fd07ff3a201f5869af1865eec4d7ba038c74c5f480ab3e721f0e09fc46409c2",
        "sizeBytes": 6576,
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
        "currentSha256": "126ed721634a91979ba276f144fb7b6a33df0b57daea2ea784cbc539a8813ae5",
        "sizeBytes": 3479,
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
        "currentSha256": "bc1810aa97d5272f68c30a668d6a474ef112107d7c2da8ecbf95dd7eb5ff0e7a",
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
        "currentSha256": "7edbc38f38c045615dbbadeea13b6e5e0bea834a859393709f2c62559feed7ba",
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
        "currentSha256": "8882852b10810e86dd387de15a5ff0fced81f921a90dae5e9ded155fe7727ff3",
        "sizeBytes": 6092,
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
        "currentSha256": "d8b9149b77f00625b79dc64208030584ae77741c9e667e83fa89e2585a784613",
        "sizeBytes": 3382,
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
        "currentSha256": "960f7f77dca561cc95d7410e93217d5d69e11017ce7f115eea5adec184f93264",
        "sizeBytes": 9327,
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
        "currentSha256": "7476304780c159a395454ef94021dda6433a697837a31be25d64f4c25b44aae0",
        "sizeBytes": 8195,
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
        "currentSha256": "1ba4f0c7267642338a382c33fc98ac2a034b8ac99461c68e5b59f4ced560ccb7",
        "sizeBytes": 11602,
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
        "currentSha256": "fe3ae3efc4a3e78bd9f4b9de0a7e746ae04a358c4b9dddbdd82410f7f03b7189",
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
        "currentSha256": "28fd7c39b0c77d91b8701bcbedc9041002774e1b73475a6748fb0be7afb9c5d9",
        "sizeBytes": 24186,
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
        "currentSha256": "5a45960199a00cee8c5ed63365c84b705cb115d6ec640ee18cecf491d474c998",
        "sizeBytes": 25641,
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
      "status": "ready",
      "nodes": 15,
      "edges": 19,
      "rootNodes": 1,
      "terminalNodes": 1,
      "phases": 8,
      "changeControlStatus": "controlled",
      "manifestStatus": "sealed",
      "launchStatus": "launch-ready",
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
  "monitoring": {
    "summary": {
      "dashboard": "cvpr-post-launch-monitoring",
      "status": "watching",
      "monitors": 9,
      "passingMonitors": 9,
      "alerts": 0,
      "releaseGate": "release",
      "fullStackStatus": "valid",
      "readinessFloor": 68.1,
      "avgReadiness": 78.22,
      "manifestStatus": "sealed",
      "changeControlStatus": "controlled",
      "packageTests": 148
    },
    "monitorRows": [
      {
        "id": "critical-slo-alerts",
        "signal": "Critical SLO failures",
        "actual": 0,
        "target": 0,
        "direction": "eq",
        "cadence": "after every rebuild",
        "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
        "responseCommand": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py"
      },
      {
        "id": "pro-plus-result-validity",
        "signal": "Valid Colab Pro+ replay results",
        "actual": 40,
        "target": 40,
        "direction": "eq",
        "cadence": "after every live export",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "responseCommand": "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py"
      },
      {
        "id": "readiness-floor",
        "signal": "Replay readiness floor",
        "actual": 68.1,
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
        "actual": 1,
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
        "actual": 1,
        "target": 1,
        "direction": "eq",
        "cadence": "after dependency or command edits",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "responseCommand": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py"
      },
      {
        "id": "launch-ready",
        "signal": "Launch readiness pack ready",
        "actual": 1,
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
    ],
    "sources": {
      "slos": "analysis/cvpr_release_slo_dashboard/registry.json",
      "replay": "analysis/cvpr_colab_result_replay/registry.json",
      "manifest": "analysis/cvpr_release_manifest/registry.json",
      "changeControl": "analysis/cvpr_release_change_control/registry.json",
      "dependencyGraph": "analysis/cvpr_release_dependency_graph/registry.json",
      "launch": "analysis/cvpr_launch_readiness_pack/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "auditTrail": {
    "summary": {
      "audit": "cvpr-release-audit-trail",
      "status": "complete",
      "events": 58,
      "readyEvents": 58,
      "launchEvents": 8,
      "manifestEvents": 13,
      "changeEvents": 13,
      "dependencyEvents": 15,
      "monitorEvents": 9,
      "fullStackStatus": "valid",
      "packageTests": 148
    },
    "events": [
      {
        "id": "evt-001",
        "group": "launch",
        "name": "Release brief",
        "surface": "cvpr-production-release-brief.html",
        "evidence": "analysis/cvpr_production_release_brief/registry.json",
        "command": "python3 scripts/build_cvpr_production_release_brief.py && python3 scripts/verify_cvpr_production_release_brief.py",
        "status": "pass"
      },
      {
        "id": "evt-002",
        "group": "launch",
        "name": "SLO gate",
        "surface": "cvpr-release-slo-dashboard.html",
        "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "status": "pass"
      },
      {
        "id": "evt-003",
        "group": "launch",
        "name": "Regression drills",
        "surface": "cvpr-release-regression-drillbook.html",
        "evidence": "analysis/cvpr_release_regression_drillbook/registry.json",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "status": "pass"
      },
      {
        "id": "evt-004",
        "group": "launch",
        "name": "Colab operations",
        "surface": "cvpr-colab-operations-dashboard.html",
        "evidence": "analysis/cvpr_colab_operations_dashboard/registry.json",
        "command": "python3 scripts/build_cvpr_colab_operations_dashboard.py && python3 scripts/verify_cvpr_colab_operations_dashboard.py",
        "status": "pass"
      },
      {
        "id": "evt-005",
        "group": "launch",
        "name": "Validation center",
        "surface": "cvpr-validation-center.html",
        "evidence": "analysis/cvpr_validation_center/registry.json",
        "command": "python3 scripts/build_cvpr_validation_center.py && python3 scripts/verify_cvpr_validation_center.py",
        "status": "pass"
      },
      {
        "id": "evt-006",
        "group": "launch",
        "name": "Colab import",
        "surface": "cvpr-colab-release-bundle.html",
        "evidence": "analysis/cvpr_colab_gpu_worker/import_validation.json",
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "status": "pass"
      },
      {
        "id": "evt-007",
        "group": "launch",
        "name": "Full stack",
        "surface": "cvpr-validation-center.html",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "pass"
      },
      {
        "id": "evt-008",
        "group": "launch",
        "name": "Operator handoff",
        "surface": "index.html",
        "evidence": "index.html",
        "command": "Open index.html and inspect the Production CVPR stack",
        "status": "pass"
      },
      {
        "id": "evt-009",
        "group": "manifest",
        "name": "launch-readiness-pack-page",
        "surface": "cvpr-launch-readiness-pack.html",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-010",
        "group": "manifest",
        "name": "launch-readiness-pack-registry",
        "surface": "analysis/cvpr_launch_readiness_pack/registry.json",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-011",
        "group": "manifest",
        "name": "production-release-brief-page",
        "surface": "cvpr-production-release-brief.html",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-012",
        "group": "manifest",
        "name": "production-release-brief-registry",
        "surface": "analysis/cvpr_production_release_brief/registry.json",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-013",
        "group": "manifest",
        "name": "release-slo-dashboard-page",
        "surface": "cvpr-release-slo-dashboard.html",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-014",
        "group": "manifest",
        "name": "release-slo-dashboard-registry",
        "surface": "analysis/cvpr_release_slo_dashboard/registry.json",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-015",
        "group": "manifest",
        "name": "release-regression-drillbook-page",
        "surface": "cvpr-release-regression-drillbook.html",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-016",
        "group": "manifest",
        "name": "release-regression-drillbook-registry",
        "surface": "analysis/cvpr_release_regression_drillbook/registry.json",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-017",
        "group": "manifest",
        "name": "colab-result-replay-registry",
        "surface": "analysis/cvpr_colab_result_replay/registry.json",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-018",
        "group": "manifest",
        "name": "demo-evidence-cockpit-registry",
        "surface": "analysis/cvpr_demo_evidence_cockpit/registry.json",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-019",
        "group": "manifest",
        "name": "full-stack-validation-registry",
        "surface": "analysis/cvpr_full_stack_validation/registry.json",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-020",
        "group": "manifest",
        "name": "full-stack-validator",
        "surface": "scripts/validate_cvpr_full_stack.py",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-021",
        "group": "manifest",
        "name": "site-index",
        "surface": "index.html",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-022",
        "group": "change-control",
        "name": "launch-readiness-pack-page",
        "surface": "cvpr-launch-readiness-pack.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "status": "pass"
      },
      {
        "id": "evt-023",
        "group": "change-control",
        "name": "launch-readiness-pack-registry",
        "surface": "cvpr-launch-readiness-pack.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py",
        "status": "pass"
      },
      {
        "id": "evt-024",
        "group": "change-control",
        "name": "production-release-brief-page",
        "surface": "cvpr-production-release-brief.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_production_release_brief.py",
        "status": "pass"
      },
      {
        "id": "evt-025",
        "group": "change-control",
        "name": "production-release-brief-registry",
        "surface": "cvpr-production-release-brief.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_production_release_brief.py",
        "status": "pass"
      },
      {
        "id": "evt-026",
        "group": "change-control",
        "name": "release-slo-dashboard-page",
        "surface": "cvpr-release-slo-dashboard.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "status": "pass"
      },
      {
        "id": "evt-027",
        "group": "change-control",
        "name": "release-slo-dashboard-registry",
        "surface": "cvpr-release-slo-dashboard.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py",
        "status": "pass"
      },
      {
        "id": "evt-028",
        "group": "change-control",
        "name": "release-regression-drillbook-page",
        "surface": "cvpr-release-regression-drillbook.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "status": "pass"
      },
      {
        "id": "evt-029",
        "group": "change-control",
        "name": "release-regression-drillbook-registry",
        "surface": "cvpr-release-regression-drillbook.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py",
        "status": "pass"
      },
      {
        "id": "evt-030",
        "group": "change-control",
        "name": "colab-result-replay-registry",
        "surface": "cvpr-colab-result-replay.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_colab_result_replay.py",
        "status": "pass"
      },
      {
        "id": "evt-031",
        "group": "change-control",
        "name": "demo-evidence-cockpit-registry",
        "surface": "cvpr-demo-evidence-cockpit.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_demo_evidence_cockpit.py",
        "status": "pass"
      },
      {
        "id": "evt-032",
        "group": "change-control",
        "name": "full-stack-validation-registry",
        "surface": "cvpr-validation-center.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "pass"
      },
      {
        "id": "evt-033",
        "group": "change-control",
        "name": "full-stack-validator",
        "surface": "cvpr-validation-center.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "pass"
      },
      {
        "id": "evt-034",
        "group": "change-control",
        "name": "site-index",
        "surface": "index.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "pass"
      },
      {
        "id": "evt-035",
        "group": "dependency",
        "name": "systems-lab",
        "surface": "cvpr-systems-lab.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_systems_lab.py && python3 scripts/verify_cvpr_systems_lab.py",
        "status": "pass"
      },
      {
        "id": "evt-036",
        "group": "dependency",
        "name": "demo-lab",
        "surface": "cvpr-demo-lab.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_demo_lab.py && python3 scripts/verify_cvpr_demo_lab.py",
        "status": "pass"
      },
      {
        "id": "evt-037",
        "group": "dependency",
        "name": "arena-playbook",
        "surface": "cvpr-demo-arena.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_demo_arena.py && python3 scripts/verify_cvpr_demo_arena.py",
        "status": "pass"
      },
      {
        "id": "evt-038",
        "group": "dependency",
        "name": "readiness-benches",
        "surface": "cvpr-mission-control.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_mission_control.py && python3 scripts/verify_cvpr_mission_control.py",
        "status": "pass"
      },
      {
        "id": "evt-039",
        "group": "dependency",
        "name": "colab-worker",
        "surface": "cvpr-colab-gpu-worker.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_colab_gpu_worker.py && python3 scripts/verify_cvpr_colab_gpu_worker.py",
        "status": "pass"
      },
      {
        "id": "evt-040",
        "group": "dependency",
        "name": "colab-release",
        "surface": "cvpr-colab-release-bundle.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_colab_release_bundle.py && python3 scripts/verify_cvpr_colab_release_bundle.py",
        "status": "pass"
      },
      {
        "id": "evt-041",
        "group": "dependency",
        "name": "coverage-audit",
        "surface": "cvpr-production-coverage-audit.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_production_coverage_audit.py && python3 scripts/verify_cvpr_production_coverage_audit.py",
        "status": "pass"
      },
      {
        "id": "evt-042",
        "group": "dependency",
        "name": "demo-evidence",
        "surface": "cvpr-demo-evidence-cockpit.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_demo_evidence_cockpit.py && python3 scripts/verify_cvpr_demo_evidence_cockpit.py",
        "status": "pass"
      },
      {
        "id": "evt-043",
        "group": "dependency",
        "name": "result-replay",
        "surface": "cvpr-colab-result-replay.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py",
        "status": "pass"
      },
      {
        "id": "evt-044",
        "group": "dependency",
        "name": "slo-dashboard",
        "surface": "cvpr-release-slo-dashboard.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "status": "pass"
      },
      {
        "id": "evt-045",
        "group": "dependency",
        "name": "regression-drillbook",
        "surface": "cvpr-release-regression-drillbook.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "status": "pass"
      },
      {
        "id": "evt-046",
        "group": "dependency",
        "name": "launch-pack",
        "surface": "cvpr-launch-readiness-pack.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "status": "pass"
      },
      {
        "id": "evt-047",
        "group": "dependency",
        "name": "release-manifest",
        "surface": "cvpr-release-manifest.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-048",
        "group": "dependency",
        "name": "change-control",
        "surface": "cvpr-release-change-control.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py",
        "status": "pass"
      },
      {
        "id": "evt-049",
        "group": "dependency",
        "name": "full-stack-validation",
        "surface": "cvpr-validation-center.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "pass"
      },
      {
        "id": "evt-050",
        "group": "monitoring",
        "name": "critical-slo-alerts",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_release_slo_dashboard/registry.json",
        "command": "python3 scripts/build_cvpr_release_regression_drillbook.py && python3 scripts/verify_cvpr_release_regression_drillbook.py",
        "status": "pass"
      },
      {
        "id": "evt-051",
        "group": "monitoring",
        "name": "pro-plus-result-validity",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "command": "python3 scripts/build_cvpr_colab_result_replay.py && python3 scripts/verify_cvpr_colab_result_replay.py",
        "status": "pass"
      },
      {
        "id": "evt-052",
        "group": "monitoring",
        "name": "readiness-floor",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "command": "python3 scripts/build_cvpr_release_slo_dashboard.py && python3 scripts/verify_cvpr_release_slo_dashboard.py",
        "status": "pass"
      },
      {
        "id": "evt-053",
        "group": "monitoring",
        "name": "provenance-clean",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_colab_result_replay/registry.json",
        "command": "python3 scripts/validate_cvpr_colab_results.py",
        "status": "pass"
      },
      {
        "id": "evt-054",
        "group": "monitoring",
        "name": "manifest-sealed",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py",
        "status": "pass"
      },
      {
        "id": "evt-055",
        "group": "monitoring",
        "name": "change-control-ready",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py",
        "status": "pass"
      },
      {
        "id": "evt-056",
        "group": "monitoring",
        "name": "dependency-graph-ready",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py",
        "status": "pass"
      },
      {
        "id": "evt-057",
        "group": "monitoring",
        "name": "launch-ready",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_launch_readiness_pack/registry.json",
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py",
        "status": "pass"
      },
      {
        "id": "evt-058",
        "group": "monitoring",
        "name": "full-stack-valid",
        "surface": "cvpr-post-launch-monitoring.html",
        "evidence": "analysis/cvpr_full_stack_validation/registry.json",
        "command": "python3 scripts/validate_cvpr_full_stack.py",
        "status": "pass"
      }
    ],
    "sources": {
      "launch": "analysis/cvpr_launch_readiness_pack/registry.json",
      "manifest": "analysis/cvpr_release_manifest/registry.json",
      "changeControl": "analysis/cvpr_release_change_control/registry.json",
      "dependencyGraph": "analysis/cvpr_release_dependency_graph/registry.json",
      "monitoring": "analysis/cvpr_post_launch_monitoring/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  },
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 99,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 23.529
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
      }
    ]
  }
};
export const surfaceRows = [
  {
    "surface": "cvpr-production-release-brief.html",
    "label": "Production release brief",
    "actual": "release",
    "expected": "release",
    "metric": "8 themes \u00b7 11 systems \u00b7 33 stages \u00b7 41 demos \u00b7 328 arena releases \u00b7 44 bench releases",
    "evidence": "analysis/cvpr_production_release_brief/registry.json",
    "command": "python3 scripts/build_cvpr_production_release_brief.py && python3 scripts/verify_cvpr_production_release_brief.py"
  },
  {
    "surface": "cvpr-launch-readiness-pack.html",
    "label": "Launch readiness pack",
    "actual": "launch-ready",
    "expected": "launch-ready",
    "metric": "148 package tests",
    "evidence": "analysis/cvpr_launch_readiness_pack/registry.json",
    "command": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py"
  },
  {
    "surface": "cvpr-release-manifest.html",
    "label": "Release manifest",
    "actual": "sealed",
    "expected": "sealed",
    "metric": "13 artifacts",
    "evidence": "analysis/cvpr_release_manifest/registry.json",
    "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py"
  },
  {
    "surface": "cvpr-release-change-control.html",
    "label": "Release change control",
    "actual": "controlled",
    "expected": "controlled",
    "metric": "13/13 rows",
    "evidence": "analysis/cvpr_release_change_control/registry.json",
    "command": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py"
  },
  {
    "surface": "cvpr-release-dependency-graph.html",
    "label": "Release dependency graph",
    "actual": "ready",
    "expected": "ready",
    "metric": "15 nodes / 19 edges",
    "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
    "command": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py"
  },
  {
    "surface": "cvpr-post-launch-monitoring.html",
    "label": "Post-launch monitoring",
    "actual": "watching",
    "expected": "watching",
    "metric": "9/9 monitors",
    "evidence": "analysis/cvpr_post_launch_monitoring/registry.json",
    "command": "python3 scripts/build_cvpr_post_launch_monitoring.py && python3 scripts/verify_cvpr_post_launch_monitoring.py"
  },
  {
    "surface": "cvpr-release-audit-trail.html",
    "label": "Release audit trail",
    "actual": "complete",
    "expected": "complete",
    "metric": "58/58 events",
    "evidence": "analysis/cvpr_release_audit_trail/registry.json",
    "command": "python3 scripts/build_cvpr_release_audit_trail.py && python3 scripts/verify_cvpr_release_audit_trail.py"
  },
  {
    "surface": "cvpr-validation-center.html",
    "label": "Full-stack validation",
    "actual": "valid",
    "expected": "valid",
    "metric": "99 steps / 148 package tests",
    "evidence": "analysis/cvpr_full_stack_validation/registry.json",
    "command": "python3 scripts/validate_cvpr_full_stack.py"
  }
];
export const summary = {
  "center": "cvpr-release-command-center",
  "status": "operator-ready",
  "surfaces": 8,
  "readySurfaces": 8,
  "alerts": 0,
  "importIssues": 0,
  "fullStackStatus": "valid",
  "packageTests": 148,
  "systems": 11,
  "stages": 33,
  "demos": 41,
  "workerJobs": 10,
  "cachedResults": 40
};
