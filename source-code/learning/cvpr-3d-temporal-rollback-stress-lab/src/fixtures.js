export const sources = {
  "room": {
    "summary": {
      "demo": "cvpr-3d-edit-provenance-room",
      "status": "release",
      "backlogGoal": "3D edit provenance room",
      "backlogTasksCovered": 3,
      "theme": "Recovering the 3D world from flat pictures",
      "systems": [
        "metric-3d-reconstruction",
        "gaussian-splatting-platform"
      ],
      "benches": [
        "cvpr-metric-geometry-bench",
        "cvpr-gaussian-splatting-bench"
      ],
      "geometryCases": 4,
      "splatCases": 4,
      "edits": 3,
      "roomRows": 48,
      "release": 32,
      "review": 12,
      "block": 4,
      "cachedSystemEvidenceCases": 8,
      "evidenceJobs": [
        "metric-geometry",
        "gaussian-splatting"
      ],
      "minProvenanceContinuity": 76.1,
      "maxRoomRisk": 43.3,
      "avgReadiness": 77.8,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "edits": [
      {
        "id": "inspect-only",
        "title": "Inspect only",
        "semanticShift": 0,
        "provenancePenalty": 0,
        "geometryPenalty": 0
      },
      {
        "id": "semantic-object-edit",
        "title": "Semantic object edit",
        "semanticShift": 10,
        "provenancePenalty": 8,
        "geometryPenalty": 4
      },
      {
        "id": "scene-rewrite",
        "title": "Scene rewrite",
        "semanticShift": 22,
        "provenancePenalty": 18,
        "geometryPenalty": 12
      }
    ],
    "roomRows": [
      {
        "id": "wide-baseline/dense-novel-view/inspect-only",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 85.9,
          "renderTrust": 85.5,
          "provenanceContinuity": 87.9,
          "editContainment": 88.0,
          "roomRisk": 16.7,
          "readiness": 86.4
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/dense-novel-view/semantic-object-edit",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 81.9,
          "renderTrust": 83.9,
          "provenanceContinuity": 85.4,
          "editContainment": 86.2,
          "roomRisk": 22.3,
          "readiness": 83.5
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/dense-novel-view/scene-rewrite",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 73.9,
          "renderTrust": 82.0,
          "provenanceContinuity": 81.5,
          "editContainment": 83.7,
          "roomRisk": 30.0,
          "readiness": 78.9
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/semantic-edit/inspect-only",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 85.9,
          "renderTrust": 82.3,
          "provenanceContinuity": 87.6,
          "editContainment": 85.5,
          "roomRisk": 21.4,
          "readiness": 84.7
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/semantic-edit/semantic-object-edit",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 81.9,
          "renderTrust": 80.7,
          "provenanceContinuity": 85.1,
          "editContainment": 83.7,
          "roomRisk": 27.0,
          "readiness": 81.9
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/semantic-edit/scene-rewrite",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 73.9,
          "renderTrust": 78.8,
          "provenanceContinuity": 81.2,
          "editContainment": 81.2,
          "roomRisk": 34.7,
          "readiness": 77.2
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/provenance-transfer/inspect-only",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 85.9,
          "renderTrust": 80.7,
          "provenanceContinuity": 88.0,
          "editContainment": 83.8,
          "roomRisk": 24.3,
          "readiness": 84.0
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/provenance-transfer/semantic-object-edit",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 81.9,
          "renderTrust": 79.1,
          "provenanceContinuity": 85.5,
          "editContainment": 82.0,
          "roomRisk": 29.9,
          "readiness": 81.1
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/provenance-transfer/scene-rewrite",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 73.9,
          "renderTrust": 77.2,
          "provenanceContinuity": 81.6,
          "editContainment": 79.6,
          "roomRisk": 37.6,
          "readiness": 76.5
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/sparse-capture/inspect-only",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 85.9,
          "renderTrust": 77.8,
          "provenanceContinuity": 85.8,
          "editContainment": 82.3,
          "roomRisk": 27.4,
          "readiness": 82.2
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/sparse-capture/semantic-object-edit",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 81.9,
          "renderTrust": 76.2,
          "provenanceContinuity": 83.3,
          "editContainment": 80.5,
          "roomRisk": 33.0,
          "readiness": 79.4
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "wide-baseline/sparse-capture/scene-rewrite",
        "geometryCaseId": "wide-baseline",
        "geometryCase": "Wide-baseline camera recovery",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 73.9,
          "renderTrust": 74.2,
          "provenanceContinuity": 79.4,
          "editContainment": 78.0,
          "roomRisk": 40.7,
          "readiness": 74.7
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/dense-novel-view/inspect-only",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 78.8,
          "renderTrust": 85.5,
          "provenanceContinuity": 86.2,
          "editContainment": 87.2,
          "roomRisk": 21.5,
          "readiness": 83.5
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/dense-novel-view/semantic-object-edit",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 74.8,
          "renderTrust": 83.9,
          "provenanceContinuity": 83.7,
          "editContainment": 85.4,
          "roomRisk": 27.1,
          "readiness": 80.6
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/dense-novel-view/scene-rewrite",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 66.8,
          "renderTrust": 82.0,
          "provenanceContinuity": 79.8,
          "editContainment": 82.9,
          "roomRisk": 34.8,
          "readiness": 76.0
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/semantic-edit/inspect-only",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 78.8,
          "renderTrust": 82.3,
          "provenanceContinuity": 85.9,
          "editContainment": 84.6,
          "roomRisk": 21.5,
          "readiness": 82.2
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/semantic-edit/semantic-object-edit",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 74.8,
          "renderTrust": 80.7,
          "provenanceContinuity": 83.4,
          "editContainment": 82.8,
          "roomRisk": 27.1,
          "readiness": 79.3
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/semantic-edit/scene-rewrite",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 66.8,
          "renderTrust": 78.8,
          "provenanceContinuity": 79.5,
          "editContainment": 80.3,
          "roomRisk": 34.8,
          "readiness": 74.7
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/provenance-transfer/inspect-only",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 78.8,
          "renderTrust": 80.7,
          "provenanceContinuity": 86.3,
          "editContainment": 83.0,
          "roomRisk": 24.3,
          "readiness": 81.4
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/provenance-transfer/semantic-object-edit",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 74.8,
          "renderTrust": 79.1,
          "provenanceContinuity": 83.7,
          "editContainment": 81.2,
          "roomRisk": 29.9,
          "readiness": 78.6
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/provenance-transfer/scene-rewrite",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 66.8,
          "renderTrust": 77.2,
          "provenanceContinuity": 79.9,
          "editContainment": 78.7,
          "roomRisk": 37.6,
          "readiness": 73.9
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/sparse-capture/inspect-only",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 78.8,
          "renderTrust": 77.8,
          "provenanceContinuity": 84.1,
          "editContainment": 81.5,
          "roomRisk": 27.4,
          "readiness": 79.7
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/sparse-capture/semantic-object-edit",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 74.8,
          "renderTrust": 76.2,
          "provenanceContinuity": 81.6,
          "editContainment": 79.7,
          "roomRisk": 33.0,
          "readiness": 76.8
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "scale-transfer/sparse-capture/scene-rewrite",
        "geometryCaseId": "scale-transfer",
        "geometryCase": "Metric scale transfer",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 66.8,
          "renderTrust": 74.2,
          "provenanceContinuity": 77.7,
          "editContainment": 77.2,
          "roomRisk": 40.7,
          "readiness": 72.2
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/dense-novel-view/inspect-only",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 76.2,
          "renderTrust": 85.5,
          "provenanceContinuity": 85.6,
          "editContainment": 86.1,
          "roomRisk": 30.0,
          "readiness": 81.8
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/dense-novel-view/semantic-object-edit",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 83.9,
          "provenanceContinuity": 83.1,
          "editContainment": 84.3,
          "roomRisk": 35.6,
          "readiness": 78.9
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/dense-novel-view/scene-rewrite",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 64.2,
          "renderTrust": 82.0,
          "provenanceContinuity": 79.2,
          "editContainment": 81.8,
          "roomRisk": 43.3,
          "readiness": 74.3
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/semantic-edit/inspect-only",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 76.2,
          "renderTrust": 82.3,
          "provenanceContinuity": 85.3,
          "editContainment": 83.5,
          "roomRisk": 30.0,
          "readiness": 80.5
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/semantic-edit/semantic-object-edit",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 80.7,
          "provenanceContinuity": 82.7,
          "editContainment": 81.8,
          "roomRisk": 35.6,
          "readiness": 77.6
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/semantic-edit/scene-rewrite",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 64.2,
          "renderTrust": 78.8,
          "provenanceContinuity": 78.9,
          "editContainment": 79.3,
          "roomRisk": 43.3,
          "readiness": 73.0
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/provenance-transfer/inspect-only",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 76.2,
          "renderTrust": 80.7,
          "provenanceContinuity": 85.6,
          "editContainment": 81.9,
          "roomRisk": 30.0,
          "readiness": 79.9
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/provenance-transfer/semantic-object-edit",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 79.1,
          "provenanceContinuity": 83.1,
          "editContainment": 80.1,
          "roomRisk": 35.6,
          "readiness": 77.1
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/provenance-transfer/scene-rewrite",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 64.2,
          "renderTrust": 77.2,
          "provenanceContinuity": 79.2,
          "editContainment": 77.7,
          "roomRisk": 43.3,
          "readiness": 72.5
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/sparse-capture/inspect-only",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 76.2,
          "renderTrust": 77.8,
          "provenanceContinuity": 83.5,
          "editContainment": 80.4,
          "roomRisk": 30.0,
          "readiness": 78.4
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/sparse-capture/semantic-object-edit",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 76.2,
          "provenanceContinuity": 80.9,
          "editContainment": 78.6,
          "roomRisk": 35.6,
          "readiness": 75.6
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "thin-structure/sparse-capture/scene-rewrite",
        "geometryCaseId": "thin-structure",
        "geometryCase": "Thin structure surface check",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 64.2,
          "renderTrust": 74.2,
          "provenanceContinuity": 77.1,
          "editContainment": 76.1,
          "roomRisk": 43.3,
          "readiness": 71.0
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/dense-novel-view/inspect-only",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 85.5,
          "provenanceContinuity": 84.6,
          "editContainment": 86.1,
          "roomRisk": 30.0,
          "readiness": 80.4
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/dense-novel-view/semantic-object-edit",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 68.2,
          "renderTrust": 83.9,
          "provenanceContinuity": 82.1,
          "editContainment": 84.3,
          "roomRisk": 35.6,
          "readiness": 77.6
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/dense-novel-view/scene-rewrite",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "dense-novel-view",
        "splatCase": "Dense novel-view rendering",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 60.2,
          "renderTrust": 82.0,
          "provenanceContinuity": 78.2,
          "editContainment": 81.8,
          "roomRisk": 43.3,
          "readiness": 72.9
        },
        "decision": "block",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/semantic-edit/inspect-only",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 82.3,
          "provenanceContinuity": 84.3,
          "editContainment": 83.5,
          "roomRisk": 30.0,
          "readiness": 79.1
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/semantic-edit/semantic-object-edit",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 68.2,
          "renderTrust": 80.7,
          "provenanceContinuity": 81.8,
          "editContainment": 81.7,
          "roomRisk": 35.6,
          "readiness": 76.3
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/semantic-edit/scene-rewrite",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "semantic-edit",
        "splatCase": "Semantic edit selection",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 60.2,
          "renderTrust": 78.8,
          "provenanceContinuity": 77.9,
          "editContainment": 79.2,
          "roomRisk": 43.3,
          "readiness": 71.6
        },
        "decision": "block",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/provenance-transfer/inspect-only",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 80.7,
          "provenanceContinuity": 84.7,
          "editContainment": 81.9,
          "roomRisk": 30.0,
          "readiness": 78.6
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/provenance-transfer/semantic-object-edit",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 68.2,
          "renderTrust": 79.1,
          "provenanceContinuity": 82.1,
          "editContainment": 80.1,
          "roomRisk": 35.6,
          "readiness": 75.7
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/provenance-transfer/scene-rewrite",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "provenance-transfer",
        "splatCase": "Provenance transfer after edits",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 60.2,
          "renderTrust": 77.2,
          "provenanceContinuity": 78.3,
          "editContainment": 77.6,
          "roomRisk": 43.3,
          "readiness": 71.1
        },
        "decision": "block",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/sparse-capture/inspect-only",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "inspect-only",
        "edit": "Inspect only",
        "scores": {
          "geometryTrust": 72.2,
          "renderTrust": 77.8,
          "provenanceContinuity": 82.5,
          "editContainment": 80.4,
          "roomRisk": 30.0,
          "readiness": 77.1
        },
        "decision": "release",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/sparse-capture/semantic-object-edit",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "semantic-object-edit",
        "edit": "Semantic object edit",
        "scores": {
          "geometryTrust": 68.2,
          "renderTrust": 76.2,
          "provenanceContinuity": 80.0,
          "editContainment": 78.6,
          "roomRisk": 35.6,
          "readiness": 74.2
        },
        "decision": "review",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      },
      {
        "id": "low-texture-indoor/sparse-capture/scene-rewrite",
        "geometryCaseId": "low-texture-indoor",
        "geometryCase": "Low-texture indoor room",
        "splatCaseId": "sparse-capture",
        "splatCase": "Sparse capture with thin geometry",
        "editId": "scene-rewrite",
        "edit": "Scene rewrite",
        "scores": {
          "geometryTrust": 60.2,
          "renderTrust": 74.2,
          "provenanceContinuity": 76.1,
          "editContainment": 76.1,
          "roomRisk": 43.3,
          "readiness": 69.6
        },
        "decision": "block",
        "geometryBench": "cvpr-metric-geometry-bench",
        "splatBench": "cvpr-gaussian-splatting-bench",
        "sourceRuntimeModes": [
          "cached-system-evidence",
          "cached-system-evidence"
        ],
        "evidenceArtifacts": [
          "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
          "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
          "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json",
          "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
          "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
          "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
        ]
      }
    ],
    "sources": {
      "backlog": "analysis/cvpr_demo_build_backlog/registry.json",
      "geometry": "analysis/cvpr_metric_geometry_bench/registry.json",
      "splat": "analysis/cvpr_gaussian_splatting_bench/registry.json",
      "replay": "analysis/cvpr_colab_result_replay/registry.json"
    }
  },
  "temporal": {
    "summary": {
      "demo": "cvpr-temporal-counterfactual-lab",
      "status": "release",
      "backlogGoal": "Temporal counterfactual lab",
      "backlogTasksCovered": 3,
      "theme": "Seeing and making things that move",
      "system": "video-world-model",
      "bench": "cvpr-temporal-rollout-bench",
      "cases": 4,
      "forks": 4,
      "counterfactualRows": 16,
      "stable": 8,
      "watch": 8,
      "break": 0,
      "gpuBackedCases": 4,
      "maxDrift": 52.4,
      "minIdentityStability": 59.8,
      "avgReadiness": 71.4,
      "proPlusJob": "temporal-rollout",
      "replayRows": 1,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "forks": [
      {
        "id": "baseline-replay",
        "title": "Baseline replay",
        "lengthShift": 0,
        "densityShift": 0,
        "violationShift": 0,
        "memoryShift": 0
      },
      {
        "id": "identity-crowding",
        "title": "Identity crowding",
        "lengthShift": 8,
        "densityShift": 22,
        "violationShift": 4,
        "memoryShift": -8
      },
      {
        "id": "contact-perturbation",
        "title": "Contact perturbation",
        "lengthShift": 12,
        "densityShift": 8,
        "violationShift": 30,
        "memoryShift": -4
      },
      {
        "id": "long-horizon-fork",
        "title": "Long-horizon fork",
        "lengthShift": 24,
        "densityShift": 12,
        "violationShift": 12,
        "memoryShift": -22
      }
    ],
    "counterfactualRows": [
      {
        "id": "short-stable/baseline-replay",
        "caseId": "short-stable",
        "caseTitle": "Short stable rollout",
        "forkId": "baseline-replay",
        "forkTitle": "Baseline replay",
        "controls": {
          "rolloutLength": 24.0,
          "identityDensity": 28.0,
          "physicsViolations": 14.0,
          "memoryWindow": 72.0
        },
        "metrics": {
          "memoryLoad": 26.6,
          "identityStability": 80.6,
          "contactConsistency": 86.6,
          "rolloutPlausibility": 85.7,
          "drift": 21.0,
          "readiness": 83.3
        },
        "identityDelta": 0.0,
        "driftDelta": 0.0,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "short-stable/identity-crowding",
        "caseId": "short-stable",
        "caseTitle": "Short stable rollout",
        "forkId": "identity-crowding",
        "forkTitle": "Identity crowding",
        "controls": {
          "rolloutLength": 32.0,
          "identityDensity": 50.0,
          "physicsViolations": 18.0,
          "memoryWindow": 64.0
        },
        "metrics": {
          "memoryLoad": 39.4,
          "identityStability": 73.3,
          "contactConsistency": 82.3,
          "rolloutPlausibility": 81.4,
          "drift": 29.3,
          "readiness": 77.5
        },
        "identityDelta": -7.3,
        "driftDelta": 8.3,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "short-stable/contact-perturbation",
        "caseId": "short-stable",
        "caseTitle": "Short stable rollout",
        "forkId": "contact-perturbation",
        "forkTitle": "Contact perturbation",
        "controls": {
          "rolloutLength": 36.0,
          "identityDensity": 36.0,
          "physicsViolations": 44.0,
          "memoryWindow": 68.0
        },
        "metrics": {
          "memoryLoad": 34.7,
          "identityStability": 76.0,
          "contactConsistency": 74.0,
          "rolloutPlausibility": 79.2,
          "drift": 33.9,
          "readiness": 74.7
        },
        "identityDelta": -4.6,
        "driftDelta": 12.9,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "short-stable/long-horizon-fork",
        "caseId": "short-stable",
        "caseTitle": "Short stable rollout",
        "forkId": "long-horizon-fork",
        "forkTitle": "Long-horizon fork",
        "controls": {
          "rolloutLength": 48.0,
          "identityDensity": 40.0,
          "physicsViolations": 26.0,
          "memoryWindow": 50.0
        },
        "metrics": {
          "memoryLoad": 45.9,
          "identityStability": 67.8,
          "contactConsistency": 78.4,
          "rolloutPlausibility": 76.1,
          "drift": 37.4,
          "readiness": 72.1
        },
        "identityDelta": -12.8,
        "driftDelta": 16.4,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "crowded-memory/baseline-replay",
        "caseId": "crowded-memory",
        "caseTitle": "Crowded identity memory",
        "forkId": "baseline-replay",
        "forkTitle": "Baseline replay",
        "controls": {
          "rolloutLength": 36.0,
          "identityDensity": 76.0,
          "physicsViolations": 26.0,
          "memoryWindow": 82.0
        },
        "metrics": {
          "memoryLoad": 43.8,
          "identityStability": 73.8,
          "contactConsistency": 79.4,
          "rolloutPlausibility": 80.0,
          "drift": 33.0,
          "readiness": 75.9
        },
        "identityDelta": 0.0,
        "driftDelta": 0.0,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "crowded-memory/identity-crowding",
        "caseId": "crowded-memory",
        "caseTitle": "Crowded identity memory",
        "forkId": "identity-crowding",
        "forkTitle": "Identity crowding",
        "controls": {
          "rolloutLength": 44.0,
          "identityDensity": 98.0,
          "physicsViolations": 30.0,
          "memoryWindow": 74.0
        },
        "metrics": {
          "memoryLoad": 56.6,
          "identityStability": 66.4,
          "contactConsistency": 75.1,
          "rolloutPlausibility": 75.8,
          "drift": 41.3,
          "readiness": 70.1
        },
        "identityDelta": -7.4,
        "driftDelta": 8.3,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "crowded-memory/contact-perturbation",
        "caseId": "crowded-memory",
        "caseTitle": "Crowded identity memory",
        "forkId": "contact-perturbation",
        "forkTitle": "Contact perturbation",
        "controls": {
          "rolloutLength": 48.0,
          "identityDensity": 84.0,
          "physicsViolations": 56.0,
          "memoryWindow": 78.0
        },
        "metrics": {
          "memoryLoad": 51.9,
          "identityStability": 69.2,
          "contactConsistency": 66.8,
          "rolloutPlausibility": 73.6,
          "drift": 45.9,
          "readiness": 67.3
        },
        "identityDelta": -4.6,
        "driftDelta": 12.9,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "crowded-memory/long-horizon-fork",
        "caseId": "crowded-memory",
        "caseTitle": "Crowded identity memory",
        "forkId": "long-horizon-fork",
        "forkTitle": "Long-horizon fork",
        "controls": {
          "rolloutLength": 60.0,
          "identityDensity": 88.0,
          "physicsViolations": 38.0,
          "memoryWindow": 60.0
        },
        "metrics": {
          "memoryLoad": 63.1,
          "identityStability": 61.0,
          "contactConsistency": 71.2,
          "rolloutPlausibility": 70.5,
          "drift": 49.4,
          "readiness": 64.6
        },
        "identityDelta": -12.8,
        "driftDelta": 16.4,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "contact-heavy/baseline-replay",
        "caseId": "contact-heavy",
        "caseTitle": "Contact-heavy prediction",
        "forkId": "baseline-replay",
        "forkTitle": "Baseline replay",
        "controls": {
          "rolloutLength": 56.0,
          "identityDensity": 52.0,
          "physicsViolations": 20.0,
          "memoryWindow": 82.0
        },
        "metrics": {
          "memoryLoad": 42.5,
          "identityStability": 74.0,
          "contactConsistency": 83.6,
          "rolloutPlausibility": 77.1,
          "drift": 34.3,
          "readiness": 76.2
        },
        "identityDelta": 0.0,
        "driftDelta": 0.0,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "contact-heavy/identity-crowding",
        "caseId": "contact-heavy",
        "caseTitle": "Contact-heavy prediction",
        "forkId": "identity-crowding",
        "forkTitle": "Identity crowding",
        "controls": {
          "rolloutLength": 64.0,
          "identityDensity": 74.0,
          "physicsViolations": 24.0,
          "memoryWindow": 74.0
        },
        "metrics": {
          "memoryLoad": 55.2,
          "identityStability": 66.7,
          "contactConsistency": 79.3,
          "rolloutPlausibility": 72.9,
          "drift": 42.6,
          "readiness": 70.3
        },
        "identityDelta": -7.3,
        "driftDelta": 8.3,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "contact-heavy/contact-perturbation",
        "caseId": "contact-heavy",
        "caseTitle": "Contact-heavy prediction",
        "forkId": "contact-perturbation",
        "forkTitle": "Contact perturbation",
        "controls": {
          "rolloutLength": 68.0,
          "identityDensity": 60.0,
          "physicsViolations": 50.0,
          "memoryWindow": 78.0
        },
        "metrics": {
          "memoryLoad": 50.6,
          "identityStability": 69.4,
          "contactConsistency": 71.0,
          "rolloutPlausibility": 70.7,
          "drift": 47.2,
          "readiness": 67.5
        },
        "identityDelta": -4.6,
        "driftDelta": 12.9,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "contact-heavy/long-horizon-fork",
        "caseId": "contact-heavy",
        "caseTitle": "Contact-heavy prediction",
        "forkId": "long-horizon-fork",
        "forkTitle": "Long-horizon fork",
        "controls": {
          "rolloutLength": 80.0,
          "identityDensity": 64.0,
          "physicsViolations": 32.0,
          "memoryWindow": 60.0
        },
        "metrics": {
          "memoryLoad": 61.8,
          "identityStability": 61.2,
          "contactConsistency": 75.4,
          "rolloutPlausibility": 67.5,
          "drift": 50.6,
          "readiness": 64.9
        },
        "identityDelta": -12.8,
        "driftDelta": 16.3,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "long-rollout-drift/baseline-replay",
        "caseId": "long-rollout-drift",
        "caseTitle": "Long rollout drift",
        "forkId": "baseline-replay",
        "forkTitle": "Baseline replay",
        "controls": {
          "rolloutLength": 66.0,
          "identityDensity": 68.0,
          "physicsViolations": 12.0,
          "memoryWindow": 92.0
        },
        "metrics": {
          "memoryLoad": 48.1,
          "identityStability": 72.7,
          "contactConsistency": 86.5,
          "rolloutPlausibility": 75.5,
          "drift": 36.1,
          "readiness": 75.9
        },
        "identityDelta": 0.0,
        "driftDelta": 0.0,
        "failureMode": "stable",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "long-rollout-drift/identity-crowding",
        "caseId": "long-rollout-drift",
        "caseTitle": "Long rollout drift",
        "forkId": "identity-crowding",
        "forkTitle": "Identity crowding",
        "controls": {
          "rolloutLength": 74.0,
          "identityDensity": 90.0,
          "physicsViolations": 16.0,
          "memoryWindow": 84.0
        },
        "metrics": {
          "memoryLoad": 60.9,
          "identityStability": 65.3,
          "contactConsistency": 82.3,
          "rolloutPlausibility": 71.3,
          "drift": 44.3,
          "readiness": 70.1
        },
        "identityDelta": -7.4,
        "driftDelta": 8.2,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "long-rollout-drift/contact-perturbation",
        "caseId": "long-rollout-drift",
        "caseTitle": "Long rollout drift",
        "forkId": "contact-perturbation",
        "forkTitle": "Contact perturbation",
        "controls": {
          "rolloutLength": 78.0,
          "identityDensity": 76.0,
          "physicsViolations": 42.0,
          "memoryWindow": 88.0
        },
        "metrics": {
          "memoryLoad": 56.2,
          "identityStability": 68.0,
          "contactConsistency": 74.0,
          "rolloutPlausibility": 69.1,
          "drift": 49.0,
          "readiness": 67.3
        },
        "identityDelta": -4.7,
        "driftDelta": 12.9,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      },
      {
        "id": "long-rollout-drift/long-horizon-fork",
        "caseId": "long-rollout-drift",
        "caseTitle": "Long rollout drift",
        "forkId": "long-horizon-fork",
        "forkTitle": "Long-horizon fork",
        "controls": {
          "rolloutLength": 90.0,
          "identityDensity": 80.0,
          "physicsViolations": 24.0,
          "memoryWindow": 70.0
        },
        "metrics": {
          "memoryLoad": 67.4,
          "identityStability": 59.8,
          "contactConsistency": 78.4,
          "rolloutPlausibility": 65.9,
          "drift": 52.4,
          "readiness": 64.6
        },
        "identityDelta": -12.9,
        "driftDelta": 16.3,
        "failureMode": "watch",
        "sourceBenchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "cached-real",
        "gpuProvenance": {
          "runtime": "google-colab-pro-plus",
          "accelerator": "GPU",
          "notebook": "notebooks/cvpr_gpu_worker.ipynb",
          "sourceBench": "cvpr-temporal-rollout-bench"
        }
      }
    ],
    "sources": {
      "backlog": "analysis/cvpr_demo_build_backlog/registry.json",
      "bench": "analysis/cvpr_temporal_rollout_bench/registry.json",
      "replay": "analysis/cvpr_colab_result_replay/registry.json"
    }
  },
  "rehearsal": {
    "summary": {
      "demo": "cvpr-remediation-rollback-rehearsal-lab",
      "status": "release",
      "sourceDemo": "cvpr-remediation-rollback-drillbook",
      "sourceDrills": 12,
      "rehearsals": 12,
      "passing": 12,
      "misses": 0,
      "critical": 2,
      "high": 6,
      "focused": 4,
      "maxElapsedMinutes": 39,
      "maxTargetMinutes": 40,
      "themes": 7,
      "incidents": 4,
      "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
    },
    "rehearsalRows": [
      {
        "id": "grounded-answer/compound-launch/rollback-drill/rehearsal",
        "drillId": "grounded-answer/compound-launch/rollback-drill",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "severity": "critical",
        "promotion": "promote",
        "trigger": "rollback risk 46.0 or drift 14.3",
        "steps": [
          {
            "step": "detect",
            "minutes": 3
          },
          {
            "step": "freeze-traffic",
            "minutes": 4
          },
          {
            "step": "demote-or-cap",
            "minutes": 3
          },
          {
            "step": "rerun-response",
            "minutes": 5
          },
          {
            "step": "full-stack-validate",
            "minutes": 3
          }
        ],
        "elapsedMinutes": 18,
        "targetMinutes": 18,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "adaptive-serving/compound-launch/rollback-drill/rehearsal",
        "drillId": "adaptive-serving/compound-launch/rollback-drill",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "severity": "critical",
        "promotion": "promote",
        "trigger": "rollback risk 45.5 or drift 13.6",
        "steps": [
          {
            "step": "detect",
            "minutes": 3
          },
          {
            "step": "freeze-traffic",
            "minutes": 4
          },
          {
            "step": "demote-or-cap",
            "minutes": 3
          },
          {
            "step": "rerun-response",
            "minutes": 5
          },
          {
            "step": "full-stack-validate",
            "minutes": 3
          }
        ],
        "elapsedMinutes": 18,
        "targetMinutes": 18,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "open-vocab/adversarial-content/rollback-drill/rehearsal",
        "drillId": "open-vocab/adversarial-content/rollback-drill",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "severity": "high",
        "promotion": "promote",
        "trigger": "rollback risk 43.0 or drift 12.0",
        "steps": [
          {
            "step": "detect",
            "minutes": 4
          },
          {
            "step": "freeze-traffic",
            "minutes": 5
          },
          {
            "step": "demote-or-cap",
            "minutes": 5
          },
          {
            "step": "rerun-response",
            "minutes": 8
          },
          {
            "step": "full-stack-validate",
            "minutes": 5
          }
        ],
        "elapsedMinutes": 27,
        "targetMinutes": 28,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "temporal-counterfactual/launch-audit/rollback-drill/rehearsal",
        "drillId": "temporal-counterfactual/launch-audit/rollback-drill",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "severity": "high",
        "promotion": "promote",
        "trigger": "rollback risk 41.0 or drift 11.7",
        "steps": [
          {
            "step": "detect",
            "minutes": 4
          },
          {
            "step": "freeze-traffic",
            "minutes": 5
          },
          {
            "step": "demote-or-cap",
            "minutes": 5
          },
          {
            "step": "rerun-response",
            "minutes": 8
          },
          {
            "step": "full-stack-validate",
            "minutes": 5
          }
        ],
        "elapsedMinutes": 27,
        "targetMinutes": 28,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "3d-edit-provenance/gpu-brownout/rollback-drill/rehearsal",
        "drillId": "3d-edit-provenance/gpu-brownout/rollback-drill",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "severity": "high",
        "promotion": "promote",
        "trigger": "rollback risk 40.7 or drift 11.1",
        "steps": [
          {
            "step": "detect",
            "minutes": 4
          },
          {
            "step": "freeze-traffic",
            "minutes": 5
          },
          {
            "step": "demote-or-cap",
            "minutes": 5
          },
          {
            "step": "rerun-response",
            "minutes": 8
          },
          {
            "step": "full-stack-validate",
            "minutes": 5
          }
        ],
        "elapsedMinutes": 27,
        "targetMinutes": 28,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "grounded-answer/launch-audit/rollback-drill/rehearsal",
        "drillId": "grounded-answer/launch-audit/rollback-drill",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "severity": "high",
        "promotion": "promote",
        "trigger": "rollback risk 38.9 or drift 11.2",
        "steps": [
          {
            "step": "detect",
            "minutes": 4
          },
          {
            "step": "freeze-traffic",
            "minutes": 5
          },
          {
            "step": "demote-or-cap",
            "minutes": 5
          },
          {
            "step": "rerun-response",
            "minutes": 8
          },
          {
            "step": "full-stack-validate",
            "minutes": 5
          }
        ],
        "elapsedMinutes": 27,
        "targetMinutes": 28,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "adaptive-serving/adversarial-content/rollback-drill/rehearsal",
        "drillId": "adaptive-serving/adversarial-content/rollback-drill",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "severity": "high",
        "promotion": "promote",
        "trigger": "rollback risk 40.6 or drift 11.8",
        "steps": [
          {
            "step": "detect",
            "minutes": 4
          },
          {
            "step": "freeze-traffic",
            "minutes": 5
          },
          {
            "step": "demote-or-cap",
            "minutes": 5
          },
          {
            "step": "rerun-response",
            "minutes": 8
          },
          {
            "step": "full-stack-validate",
            "minutes": 5
          }
        ],
        "elapsedMinutes": 27,
        "targetMinutes": 28,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "provenance-red-team/launch-audit/rollback-drill/rehearsal",
        "drillId": "provenance-red-team/launch-audit/rollback-drill",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "severity": "high",
        "promotion": "promote",
        "trigger": "rollback risk 38.6 or drift 10.2",
        "steps": [
          {
            "step": "detect",
            "minutes": 4
          },
          {
            "step": "freeze-traffic",
            "minutes": 5
          },
          {
            "step": "demote-or-cap",
            "minutes": 5
          },
          {
            "step": "rerun-response",
            "minutes": 8
          },
          {
            "step": "full-stack-validate",
            "minutes": 5
          }
        ],
        "elapsedMinutes": 27,
        "targetMinutes": 28,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "safety-deployment/adversarial-content/rollback-drill/rehearsal",
        "drillId": "safety-deployment/adversarial-content/rollback-drill",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "severity": "focused",
        "promotion": "monitor",
        "trigger": "rollback risk 33.9 or drift 9.9",
        "steps": [
          {
            "step": "detect",
            "minutes": 6
          },
          {
            "step": "freeze-traffic",
            "minutes": 7
          },
          {
            "step": "demote-or-cap",
            "minutes": 8
          },
          {
            "step": "rerun-response",
            "minutes": 11
          },
          {
            "step": "full-stack-validate",
            "minutes": 7
          }
        ],
        "elapsedMinutes": 39,
        "targetMinutes": 40,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "safety-deployment/gpu-brownout/rollback-drill/rehearsal",
        "drillId": "safety-deployment/gpu-brownout/rollback-drill",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "severity": "focused",
        "promotion": "monitor",
        "trigger": "rollback risk 31.1 or drift 9.1",
        "steps": [
          {
            "step": "detect",
            "minutes": 6
          },
          {
            "step": "freeze-traffic",
            "minutes": 7
          },
          {
            "step": "demote-or-cap",
            "minutes": 8
          },
          {
            "step": "rerun-response",
            "minutes": 11
          },
          {
            "step": "full-stack-validate",
            "minutes": 7
          }
        ],
        "elapsedMinutes": 39,
        "targetMinutes": 40,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "provenance-red-team/gpu-brownout/rollback-drill/rehearsal",
        "drillId": "provenance-red-team/gpu-brownout/rollback-drill",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "severity": "focused",
        "promotion": "monitor",
        "trigger": "rollback risk 30.3 or drift 8.3",
        "steps": [
          {
            "step": "detect",
            "minutes": 6
          },
          {
            "step": "freeze-traffic",
            "minutes": 7
          },
          {
            "step": "demote-or-cap",
            "minutes": 8
          },
          {
            "step": "rerun-response",
            "minutes": 11
          },
          {
            "step": "full-stack-validate",
            "minutes": 7
          }
        ],
        "elapsedMinutes": 39,
        "targetMinutes": 40,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "rehearsalStatus": "pass"
      },
      {
        "id": "safety-deployment/compound-launch/rollback-drill/rehearsal",
        "drillId": "safety-deployment/compound-launch/rollback-drill",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "severity": "focused",
        "promotion": "monitor",
        "trigger": "rollback risk 33.7 or drift 10.7",
        "steps": [
          {
            "step": "detect",
            "minutes": 6
          },
          {
            "step": "freeze-traffic",
            "minutes": 7
          },
          {
            "step": "demote-or-cap",
            "minutes": 8
          },
          {
            "step": "rerun-response",
            "minutes": 11
          },
          {
            "step": "full-stack-validate",
            "minutes": 7
          }
        ],
        "elapsedMinutes": 39,
        "targetMinutes": 40,
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "rehearsalStatus": "pass"
      }
    ],
    "drills": [
      {
        "id": "grounded-answer/compound-launch/rollback-drill",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 46.0,
          "drift": 14.3,
          "trafficPct": 20
        },
        "severity": "critical",
        "trigger": "rollback risk 46.0 or drift 14.3",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-grounded-answer-courtroom.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "adaptive-serving/compound-launch/rollback-drill",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 45.5,
          "drift": 13.6,
          "trafficPct": 20
        },
        "severity": "critical",
        "trigger": "rollback risk 45.5 or drift 13.6",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-adaptive-serving-stress-lab.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "open-vocab/adversarial-content/rollback-drill",
        "demoId": "open-vocab",
        "demoTitle": "Open-Vocabulary Failure Hunt",
        "theme": "Naming and locating what's in the picture",
        "page": "cvpr-open-vocab-failure-hunt.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 43.0,
          "drift": 12.0,
          "trafficPct": 20
        },
        "severity": "high",
        "trigger": "rollback risk 43.0 or drift 12.0",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-open-vocab-failure-hunt.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "temporal-counterfactual/launch-audit/rollback-drill",
        "demoId": "temporal-counterfactual",
        "demoTitle": "Temporal Counterfactual Lab",
        "theme": "Seeing and making things that move",
        "page": "cvpr-temporal-counterfactual-lab.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 41.0,
          "drift": 11.7,
          "trafficPct": 20
        },
        "severity": "high",
        "trigger": "rollback risk 41.0 or drift 11.7",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-temporal-counterfactual-lab.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "3d-edit-provenance/gpu-brownout/rollback-drill",
        "demoId": "3d-edit-provenance",
        "demoTitle": "3D Edit Provenance Room",
        "theme": "Recovering the 3D world from flat pictures",
        "page": "cvpr-3d-edit-provenance-room.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 40.7,
          "drift": 11.1,
          "trafficPct": 20
        },
        "severity": "high",
        "trigger": "rollback risk 40.7 or drift 11.1",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-3d-edit-provenance-room.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "grounded-answer/launch-audit/rollback-drill",
        "demoId": "grounded-answer",
        "demoTitle": "Grounded Answer Courtroom",
        "theme": "Teaching machines to see and talk at once",
        "page": "cvpr-grounded-answer-courtroom.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 38.9,
          "drift": 11.2,
          "trafficPct": 20
        },
        "severity": "high",
        "trigger": "rollback risk 38.9 or drift 11.2",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-grounded-answer-courtroom.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "adaptive-serving/adversarial-content/rollback-drill",
        "demoId": "adaptive-serving",
        "demoTitle": "Adaptive Serving Stress Lab",
        "theme": "Learning more from less, and not breaking",
        "page": "cvpr-adaptive-serving-stress-lab.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 40.6,
          "drift": 11.8,
          "trafficPct": 20
        },
        "severity": "high",
        "trigger": "rollback risk 40.6 or drift 11.8",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-adaptive-serving-stress-lab.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "provenance-red-team/launch-audit/rollback-drill",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "launch-audit",
        "incidentTitle": "Launch audit",
        "promotion": "promote",
        "currentStatus": "clean",
        "scenario": {
          "rollbackRisk": 38.6,
          "drift": 10.2,
          "trafficPct": 20
        },
        "severity": "high",
        "trigger": "rollback risk 38.6 or drift 10.2",
        "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
        "ownerSurface": "cvpr-provenance-red-team-arena.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "safety-deployment/adversarial-content/rollback-drill",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "adversarial-content",
        "incidentTitle": "Adversarial content",
        "promotion": "monitor",
        "currentStatus": "watch",
        "scenario": {
          "rollbackRisk": 33.9,
          "drift": 9.9,
          "trafficPct": 8
        },
        "severity": "focused",
        "trigger": "rollback risk 33.9 or drift 9.9",
        "response": "keep traffic capped, reopen remediation action, rerun retest harness",
        "ownerSurface": "cvpr-safety-deployment-simulator.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "safety-deployment/gpu-brownout/rollback-drill",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "monitor",
        "currentStatus": "watch",
        "scenario": {
          "rollbackRisk": 31.1,
          "drift": 9.1,
          "trafficPct": 8
        },
        "severity": "focused",
        "trigger": "rollback risk 31.1 or drift 9.1",
        "response": "keep traffic capped, reopen remediation action, rerun retest harness",
        "ownerSurface": "cvpr-safety-deployment-simulator.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "provenance-red-team/gpu-brownout/rollback-drill",
        "demoId": "provenance-red-team",
        "demoTitle": "Provenance Red-Team Arena",
        "theme": "The frontier - new senses and new duties",
        "page": "cvpr-provenance-red-team-arena.html",
        "incidentId": "gpu-brownout",
        "incidentTitle": "GPU brownout",
        "promotion": "monitor",
        "currentStatus": "watch",
        "scenario": {
          "rollbackRisk": 30.3,
          "drift": 8.3,
          "trafficPct": 8
        },
        "severity": "focused",
        "trigger": "rollback risk 30.3 or drift 8.3",
        "response": "keep traffic capped, reopen remediation action, rerun retest harness",
        "ownerSurface": "cvpr-provenance-red-team-arena.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      },
      {
        "id": "safety-deployment/compound-launch/rollback-drill",
        "demoId": "safety-deployment",
        "demoTitle": "Safety Deployment Simulator",
        "theme": "Using vision to act in the world",
        "page": "cvpr-safety-deployment-simulator.html",
        "incidentId": "compound-launch",
        "incidentTitle": "Compound launch",
        "promotion": "monitor",
        "currentStatus": "watch",
        "scenario": {
          "rollbackRisk": 33.7,
          "drift": 10.7,
          "trafficPct": 8
        },
        "severity": "focused",
        "trigger": "rollback risk 33.7 or drift 10.7",
        "response": "keep traffic capped, reopen remediation action, rerun retest harness",
        "ownerSurface": "cvpr-safety-deployment-simulator.html",
        "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
        "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
      }
    ],
    "sources": {
      "drillbook": "analysis/cvpr_remediation_rollback_drillbook/registry.json"
    }
  },
  "scenarioPack": {
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
  "validation": {
    "summary": {
      "validator": "validate_cvpr_full_stack",
      "status": "valid",
      "commands": 286,
      "steps": 151,
      "packageTests": 148,
      "workerJobs": 10,
      "promotedRunners": 10,
      "cachedResults": 40,
      "importIssues": 0,
      "durationSec": 25.158
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
      }
    ]
  }
};
export const stressRows = [
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
];
export const summary = {
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
};
