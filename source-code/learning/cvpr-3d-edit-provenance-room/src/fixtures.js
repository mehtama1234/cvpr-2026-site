export const geometryRecords = [
  {
    "id": "wide-baseline",
    "title": "Wide-baseline camera recovery",
    "system": "metric-3d-reconstruction",
    "cluster": "3D reconstruction and novel views",
    "sourceStages": [
      "camera-geometry",
      "metric-scale",
      "surface-consistency"
    ],
    "controls": {
      "baseline": 82,
      "textureSparsity": 18,
      "scaleAmbiguity": 24,
      "surfaceComplexity": 42
    },
    "metrics": {
      "poseEvidence": 87.0,
      "metricEvidence": 86.9,
      "surfaceConsistency": 83.1,
      "scaleDrift": 10.1,
      "topologyRisk": 13.9,
      "readiness": 85.8
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
      "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
      "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json"
    ]
  },
  {
    "id": "scale-transfer",
    "title": "Metric scale transfer",
    "system": "metric-3d-reconstruction",
    "cluster": "3D reconstruction and novel views",
    "sourceStages": [
      "camera-geometry",
      "metric-scale",
      "surface-consistency"
    ],
    "controls": {
      "baseline": 66,
      "textureSparsity": 28,
      "scaleAmbiguity": 44,
      "surfaceComplexity": 46
    },
    "metrics": {
      "poseEvidence": 79.2,
      "metricEvidence": 78.8,
      "surfaceConsistency": 78.4,
      "scaleDrift": 21.5,
      "topologyRisk": 21.0,
      "readiness": 78.7
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
      "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
      "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json"
    ]
  },
  {
    "id": "thin-structure",
    "title": "Thin structure surface check",
    "system": "metric-3d-reconstruction",
    "cluster": "3D reconstruction and novel views",
    "sourceStages": [
      "camera-geometry",
      "metric-scale",
      "surface-consistency"
    ],
    "controls": {
      "baseline": 58,
      "textureSparsity": 34,
      "scaleAmbiguity": 32,
      "surfaceComplexity": 72
    },
    "metrics": {
      "poseEvidence": 76.8,
      "metricEvidence": 80.4,
      "surfaceConsistency": 72.5,
      "scaleDrift": 22.7,
      "topologyRisk": 30.0,
      "readiness": 75.5
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
      "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
      "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json"
    ]
  },
  {
    "id": "low-texture-indoor",
    "title": "Low-texture indoor room",
    "system": "metric-3d-reconstruction",
    "cluster": "3D reconstruction and novel views",
    "sourceStages": [
      "camera-geometry",
      "metric-scale",
      "surface-consistency"
    ],
    "controls": {
      "baseline": 54,
      "textureSparsity": 58,
      "scaleAmbiguity": 48,
      "surfaceComplexity": 50
    },
    "metrics": {
      "poseEvidence": 70.1,
      "metricEvidence": 74.7,
      "surfaceConsistency": 72.2,
      "scaleDrift": 29.9,
      "topologyRisk": 30.0,
      "readiness": 72.0
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/metric-3d-reconstruction/_results/camera-geometry.json",
      "source-code/learning/metric-3d-reconstruction/_results/metric-scale.json",
      "source-code/learning/metric-3d-reconstruction/_results/surface-consistency.json"
    ]
  }
];
export const splatRecords = [
  {
    "id": "dense-novel-view",
    "title": "Dense novel-view rendering",
    "system": "gaussian-splatting-platform",
    "cluster": "Gaussian Splatting",
    "sourceStages": [
      "splat-fit",
      "semantic-splats",
      "watermark-provenance"
    ],
    "controls": {
      "viewCount": 86,
      "splatDensity": 78,
      "semanticEntropy": 24,
      "provenanceVisibility": 70
    },
    "metrics": {
      "renderFidelity": 86.6,
      "semanticAttachment": 86.4,
      "provenanceTrace": 85.5,
      "viewInstability": 9.4,
      "editLeakageRisk": 16.7,
      "readiness": 85.6
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
      "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
      "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
    ]
  },
  {
    "id": "semantic-edit",
    "title": "Semantic edit selection",
    "system": "gaussian-splatting-platform",
    "cluster": "Gaussian Splatting",
    "sourceStages": [
      "splat-fit",
      "semantic-splats",
      "watermark-provenance"
    ],
    "controls": {
      "viewCount": 74,
      "splatDensity": 72,
      "semanticEntropy": 34,
      "provenanceVisibility": 76
    },
    "metrics": {
      "renderFidelity": 81.5,
      "semanticAttachment": 82.4,
      "provenanceTrace": 86.1,
      "viewInstability": 15.7,
      "editLeakageRisk": 21.4,
      "readiness": 82.2
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
      "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
      "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
    ]
  },
  {
    "id": "provenance-transfer",
    "title": "Provenance transfer after edits",
    "system": "gaussian-splatting-platform",
    "cluster": "Gaussian Splatting",
    "sourceStages": [
      "splat-fit",
      "semantic-splats",
      "watermark-provenance"
    ],
    "controls": {
      "viewCount": 68,
      "splatDensity": 70,
      "semanticEntropy": 42,
      "provenanceVisibility": 84
    },
    "metrics": {
      "renderFidelity": 78.9,
      "semanticAttachment": 79.8,
      "provenanceTrace": 87.7,
      "viewInstability": 18.8,
      "editLeakageRisk": 24.3,
      "readiness": 80.5
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
      "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
      "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
    ]
  },
  {
    "id": "sparse-capture",
    "title": "Sparse capture with thin geometry",
    "system": "gaussian-splatting-platform",
    "cluster": "Gaussian Splatting",
    "sourceStages": [
      "splat-fit",
      "semantic-splats",
      "watermark-provenance"
    ],
    "controls": {
      "viewCount": 62,
      "splatDensity": 66,
      "semanticEntropy": 46,
      "provenanceVisibility": 72
    },
    "metrics": {
      "renderFidelity": 76.2,
      "semanticAttachment": 77.8,
      "provenanceTrace": 83.8,
      "viewInstability": 23.2,
      "editLeakageRisk": 27.4,
      "readiness": 77.7
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/gaussian-splatting-platform/_results/semantic-splats.json",
      "source-code/learning/gaussian-splatting-platform/_results/splat-fit.json",
      "source-code/learning/gaussian-splatting-platform/_results/watermark-provenance.json"
    ]
  }
];
export const edits = [
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
];
export const roomRows = [
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
];
export const summary = {
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
};
