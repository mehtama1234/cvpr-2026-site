export const stageEvidence = {
  "look": 94,
  "hallucination": 94,
  "tools": 94,
  "evidenceDepth": 94
};
export const scenarios = [
  {
    "id": "visible-count",
    "title": "Visible object count",
    "questionComplexity": 26,
    "priorPressure": 20,
    "toolNeed": 24,
    "evidenceThreshold": 58
  },
  {
    "id": "attribute-relation",
    "title": "Attribute and relation claim",
    "questionComplexity": 46,
    "priorPressure": 34,
    "toolNeed": 38,
    "evidenceThreshold": 66
  },
  {
    "id": "ocr-trap",
    "title": "OCR trap with plausible prior",
    "questionComplexity": 62,
    "priorPressure": 58,
    "toolNeed": 70,
    "evidenceThreshold": 76
  },
  {
    "id": "counterfactual-object",
    "title": "Counterfactual unsupported object",
    "questionComplexity": 78,
    "priorPressure": 72,
    "toolNeed": 82,
    "evidenceThreshold": 84
  }
];
export const records = [
  {
    "id": "visible-count",
    "title": "Visible object count",
    "system": "vlm-grounded-reasoning",
    "cluster": "Vision-language reasoning",
    "sourceStages": [
      "look-then-reason",
      "hallucination-check",
      "tool-verified-answer"
    ],
    "controls": {
      "questionComplexity": 26,
      "priorPressure": 20,
      "toolNeed": 24,
      "evidenceThreshold": 58
    },
    "metrics": {
      "visualCitation": 80.8,
      "toolAgreement": 70.8,
      "contradictionCatch": 71.2,
      "unsupportedClaimRisk": 11.9,
      "readiness": 77.5
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "attribute-relation",
    "title": "Attribute and relation claim",
    "system": "vlm-grounded-reasoning",
    "cluster": "Vision-language reasoning",
    "sourceStages": [
      "look-then-reason",
      "hallucination-check",
      "tool-verified-answer"
    ],
    "controls": {
      "questionComplexity": 46,
      "priorPressure": 34,
      "toolNeed": 38,
      "evidenceThreshold": 66
    },
    "metrics": {
      "visualCitation": 78.2,
      "toolAgreement": 72.4,
      "contradictionCatch": 75.3,
      "unsupportedClaimRisk": 18.0,
      "readiness": 76.8
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "ocr-trap",
    "title": "OCR trap with plausible prior",
    "system": "vlm-grounded-reasoning",
    "cluster": "Vision-language reasoning",
    "sourceStages": [
      "look-then-reason",
      "hallucination-check",
      "tool-verified-answer"
    ],
    "controls": {
      "questionComplexity": 62,
      "priorPressure": 58,
      "toolNeed": 70,
      "evidenceThreshold": 76
    },
    "metrics": {
      "visualCitation": 74.7,
      "toolAgreement": 77.5,
      "contradictionCatch": 82.0,
      "unsupportedClaimRisk": 27.1,
      "readiness": 76.8
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "counterfactual-object",
    "title": "Counterfactual unsupported object",
    "system": "vlm-grounded-reasoning",
    "cluster": "Vision-language reasoning",
    "sourceStages": [
      "look-then-reason",
      "hallucination-check",
      "tool-verified-answer"
    ],
    "controls": {
      "questionComplexity": 78,
      "priorPressure": 72,
      "toolNeed": 82,
      "evidenceThreshold": 84
    },
    "metrics": {
      "visualCitation": 72.5,
      "toolAgreement": 79.2,
      "contradictionCatch": 86.1,
      "unsupportedClaimRisk": 32.2,
      "readiness": 76.5
    },
    "decision": "release",
    "acceptancePass": true,
    "runtimeModes": [
      "simulated",
      "cached-system-evidence"
    ],
    "preferredRuntime": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  }
];
