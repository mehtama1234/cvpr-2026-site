export const stageEvidence = {
  "fit": 94,
  "semantic": 94,
  "provenance": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "dense-novel-view",
    "title": "Dense novel-view rendering",
    "viewCount": 86,
    "splatDensity": 78,
    "semanticEntropy": 24,
    "provenanceVisibility": 70
  },
  {
    "id": "semantic-edit",
    "title": "Semantic edit selection",
    "viewCount": 74,
    "splatDensity": 72,
    "semanticEntropy": 34,
    "provenanceVisibility": 76
  },
  {
    "id": "provenance-transfer",
    "title": "Provenance transfer after edits",
    "viewCount": 68,
    "splatDensity": 70,
    "semanticEntropy": 42,
    "provenanceVisibility": 84
  },
  {
    "id": "sparse-capture",
    "title": "Sparse capture with thin geometry",
    "viewCount": 62,
    "splatDensity": 66,
    "semanticEntropy": 46,
    "provenanceVisibility": 72
  }
];
export const records = [
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
