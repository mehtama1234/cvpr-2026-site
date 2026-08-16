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
export const probes = [
  {
    "id": "baseline-hearing",
    "title": "Baseline hearing",
    "complexityShift": 0,
    "priorShift": 0,
    "toolShift": 0,
    "thresholdShift": 0
  },
  {
    "id": "citation-cross-exam",
    "title": "Citation cross-exam",
    "complexityShift": 8,
    "priorShift": 10,
    "toolShift": 12,
    "thresholdShift": 10
  },
  {
    "id": "tool-disagreement",
    "title": "Tool disagreement",
    "complexityShift": 12,
    "priorShift": 14,
    "toolShift": 26,
    "thresholdShift": 4
  },
  {
    "id": "contradiction-trap",
    "title": "Contradiction trap",
    "complexityShift": 24,
    "priorShift": 30,
    "toolShift": 20,
    "thresholdShift": -14
  }
];
export const stageEvidence = {
  "look": 94,
  "hallucination": 94,
  "tools": 94,
  "evidenceDepth": 94
};
export const courtroomRows = [
  {
    "id": "visible-count/baseline-hearing",
    "caseId": "visible-count",
    "caseTitle": "Visible object count",
    "probeId": "baseline-hearing",
    "probeTitle": "Baseline hearing",
    "controls": {
      "questionComplexity": 26.0,
      "priorPressure": 20.0,
      "toolNeed": 24.0,
      "evidenceThreshold": 58.0
    },
    "metrics": {
      "visualCitation": 80.8,
      "toolAgreement": 70.8,
      "contradictionCatch": 71.2,
      "unsupportedClaimRisk": 11.9,
      "readiness": 77.5
    },
    "citationDelta": 0.0,
    "riskDelta": 0.0,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "visible-count/citation-cross-exam",
    "caseId": "visible-count",
    "caseTitle": "Visible object count",
    "probeId": "citation-cross-exam",
    "probeTitle": "Citation cross-exam",
    "controls": {
      "questionComplexity": 34.0,
      "priorPressure": 30.0,
      "toolNeed": 36.0,
      "evidenceThreshold": 68.0
    },
    "metrics": {
      "visualCitation": 80.6,
      "toolAgreement": 74.1,
      "contradictionCatch": 75.4,
      "unsupportedClaimRisk": 14.1,
      "readiness": 78.8
    },
    "citationDelta": -0.2,
    "riskDelta": 2.2,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "visible-count/tool-disagreement",
    "caseId": "visible-count",
    "caseTitle": "Visible object count",
    "probeId": "tool-disagreement",
    "probeTitle": "Tool disagreement",
    "controls": {
      "questionComplexity": 38.0,
      "priorPressure": 34.0,
      "toolNeed": 50.0,
      "evidenceThreshold": 62.0
    },
    "metrics": {
      "visualCitation": 78.1,
      "toolAgreement": 74.2,
      "contradictionCatch": 74.8,
      "unsupportedClaimRisk": 19.0,
      "readiness": 76.9
    },
    "citationDelta": -2.7,
    "riskDelta": 7.1,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "visible-count/contradiction-trap",
    "caseId": "visible-count",
    "caseTitle": "Visible object count",
    "probeId": "contradiction-trap",
    "probeTitle": "Contradiction trap",
    "controls": {
      "questionComplexity": 50.0,
      "priorPressure": 50.0,
      "toolNeed": 44.0,
      "evidenceThreshold": 44.0
    },
    "metrics": {
      "visualCitation": 69.7,
      "toolAgreement": 66.7,
      "contradictionCatch": 72.6,
      "unsupportedClaimRisk": 29.3,
      "readiness": 69.8
    },
    "citationDelta": -11.1,
    "riskDelta": 17.4,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "attribute-relation/baseline-hearing",
    "caseId": "attribute-relation",
    "caseTitle": "Attribute and relation claim",
    "probeId": "baseline-hearing",
    "probeTitle": "Baseline hearing",
    "controls": {
      "questionComplexity": 46.0,
      "priorPressure": 34.0,
      "toolNeed": 38.0,
      "evidenceThreshold": 66.0
    },
    "metrics": {
      "visualCitation": 78.2,
      "toolAgreement": 72.4,
      "contradictionCatch": 75.3,
      "unsupportedClaimRisk": 18.0,
      "readiness": 76.8
    },
    "citationDelta": 0.0,
    "riskDelta": 0.0,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "attribute-relation/citation-cross-exam",
    "caseId": "attribute-relation",
    "caseTitle": "Attribute and relation claim",
    "probeId": "citation-cross-exam",
    "probeTitle": "Citation cross-exam",
    "controls": {
      "questionComplexity": 54.0,
      "priorPressure": 44.0,
      "toolNeed": 50.0,
      "evidenceThreshold": 76.0
    },
    "metrics": {
      "visualCitation": 78.0,
      "toolAgreement": 75.6,
      "contradictionCatch": 79.5,
      "unsupportedClaimRisk": 20.2,
      "readiness": 78.1
    },
    "citationDelta": -0.2,
    "riskDelta": 2.2,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "attribute-relation/tool-disagreement",
    "caseId": "attribute-relation",
    "caseTitle": "Attribute and relation claim",
    "probeId": "tool-disagreement",
    "probeTitle": "Tool disagreement",
    "controls": {
      "questionComplexity": 58.0,
      "priorPressure": 48.0,
      "toolNeed": 64.0,
      "evidenceThreshold": 70.0
    },
    "metrics": {
      "visualCitation": 75.5,
      "toolAgreement": 75.8,
      "contradictionCatch": 78.9,
      "unsupportedClaimRisk": 25.1,
      "readiness": 76.2
    },
    "citationDelta": -2.7,
    "riskDelta": 7.1,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "attribute-relation/contradiction-trap",
    "caseId": "attribute-relation",
    "caseTitle": "Attribute and relation claim",
    "probeId": "contradiction-trap",
    "probeTitle": "Contradiction trap",
    "controls": {
      "questionComplexity": 70.0,
      "priorPressure": 64.0,
      "toolNeed": 58.0,
      "evidenceThreshold": 52.0
    },
    "metrics": {
      "visualCitation": 67.1,
      "toolAgreement": 68.3,
      "contradictionCatch": 76.7,
      "unsupportedClaimRisk": 35.5,
      "readiness": 69.1
    },
    "citationDelta": -11.1,
    "riskDelta": 17.5,
    "verdict": "cross-examine",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "ocr-trap/baseline-hearing",
    "caseId": "ocr-trap",
    "caseTitle": "OCR trap with plausible prior",
    "probeId": "baseline-hearing",
    "probeTitle": "Baseline hearing",
    "controls": {
      "questionComplexity": 62.0,
      "priorPressure": 58.0,
      "toolNeed": 70.0,
      "evidenceThreshold": 76.0
    },
    "metrics": {
      "visualCitation": 74.7,
      "toolAgreement": 77.5,
      "contradictionCatch": 82.0,
      "unsupportedClaimRisk": 27.1,
      "readiness": 76.8
    },
    "citationDelta": 0.0,
    "riskDelta": 0.0,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "ocr-trap/citation-cross-exam",
    "caseId": "ocr-trap",
    "caseTitle": "OCR trap with plausible prior",
    "probeId": "citation-cross-exam",
    "probeTitle": "Citation cross-exam",
    "controls": {
      "questionComplexity": 70.0,
      "priorPressure": 68.0,
      "toolNeed": 82.0,
      "evidenceThreshold": 86.0
    },
    "metrics": {
      "visualCitation": 74.5,
      "toolAgreement": 80.8,
      "contradictionCatch": 86.1,
      "unsupportedClaimRisk": 29.3,
      "readiness": 78.1
    },
    "citationDelta": -0.2,
    "riskDelta": 2.2,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "ocr-trap/tool-disagreement",
    "caseId": "ocr-trap",
    "caseTitle": "OCR trap with plausible prior",
    "probeId": "tool-disagreement",
    "probeTitle": "Tool disagreement",
    "controls": {
      "questionComplexity": 74.0,
      "priorPressure": 72.0,
      "toolNeed": 96.0,
      "evidenceThreshold": 80.0
    },
    "metrics": {
      "visualCitation": 72.0,
      "toolAgreement": 80.9,
      "contradictionCatch": 85.6,
      "unsupportedClaimRisk": 34.2,
      "readiness": 76.2
    },
    "citationDelta": -2.7,
    "riskDelta": 7.1,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "ocr-trap/contradiction-trap",
    "caseId": "ocr-trap",
    "caseTitle": "OCR trap with plausible prior",
    "probeId": "contradiction-trap",
    "probeTitle": "Contradiction trap",
    "controls": {
      "questionComplexity": 86.0,
      "priorPressure": 88.0,
      "toolNeed": 90.0,
      "evidenceThreshold": 62.0
    },
    "metrics": {
      "visualCitation": 63.6,
      "toolAgreement": 73.4,
      "contradictionCatch": 83.4,
      "unsupportedClaimRisk": 44.5,
      "readiness": 69.1
    },
    "citationDelta": -11.1,
    "riskDelta": 17.4,
    "verdict": "cross-examine",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "counterfactual-object/baseline-hearing",
    "caseId": "counterfactual-object",
    "caseTitle": "Counterfactual unsupported object",
    "probeId": "baseline-hearing",
    "probeTitle": "Baseline hearing",
    "controls": {
      "questionComplexity": 78.0,
      "priorPressure": 72.0,
      "toolNeed": 82.0,
      "evidenceThreshold": 84.0
    },
    "metrics": {
      "visualCitation": 72.5,
      "toolAgreement": 79.2,
      "contradictionCatch": 86.1,
      "unsupportedClaimRisk": 32.2,
      "readiness": 76.5
    },
    "citationDelta": 0.0,
    "riskDelta": 0.0,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "counterfactual-object/citation-cross-exam",
    "caseId": "counterfactual-object",
    "caseTitle": "Counterfactual unsupported object",
    "probeId": "citation-cross-exam",
    "probeTitle": "Citation cross-exam",
    "controls": {
      "questionComplexity": 86.0,
      "priorPressure": 82.0,
      "toolNeed": 94.0,
      "evidenceThreshold": 94.0
    },
    "metrics": {
      "visualCitation": 72.3,
      "toolAgreement": 82.5,
      "contradictionCatch": 90.2,
      "unsupportedClaimRisk": 34.4,
      "readiness": 77.8
    },
    "citationDelta": -0.2,
    "riskDelta": 2.2,
    "verdict": "admit",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "counterfactual-object/tool-disagreement",
    "caseId": "counterfactual-object",
    "caseTitle": "Counterfactual unsupported object",
    "probeId": "tool-disagreement",
    "probeTitle": "Tool disagreement",
    "controls": {
      "questionComplexity": 90.0,
      "priorPressure": 86.0,
      "toolNeed": 100,
      "evidenceThreshold": 88.0
    },
    "metrics": {
      "visualCitation": 69.8,
      "toolAgreement": 81.4,
      "contradictionCatch": 89.5,
      "unsupportedClaimRisk": 38.5,
      "readiness": 75.7
    },
    "citationDelta": -2.7,
    "riskDelta": 6.3,
    "verdict": "cross-examine",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  },
  {
    "id": "counterfactual-object/contradiction-trap",
    "caseId": "counterfactual-object",
    "caseTitle": "Counterfactual unsupported object",
    "probeId": "contradiction-trap",
    "probeTitle": "Contradiction trap",
    "controls": {
      "questionComplexity": 100,
      "priorPressure": 100,
      "toolNeed": 100,
      "evidenceThreshold": 70.0
    },
    "metrics": {
      "visualCitation": 61.9,
      "toolAgreement": 75.1,
      "contradictionCatch": 87.1,
      "unsupportedClaimRisk": 48.6,
      "readiness": 69.1
    },
    "citationDelta": -10.6,
    "riskDelta": 16.4,
    "verdict": "cross-examine",
    "sourceBenchPage": "cvpr-vlm-answer-verification-bench.html",
    "runtimeEvidence": "cached-system-evidence",
    "evidenceArtifacts": [
      "source-code/learning/vlm-grounded-reasoning/_results/hallucination-check.json",
      "source-code/learning/vlm-grounded-reasoning/_results/look-then-reason.json",
      "source-code/learning/vlm-grounded-reasoning/_results/tool-verified-answer.json"
    ]
  }
];
export const summary = {
  "demo": "cvpr-grounded-answer-courtroom",
  "status": "release",
  "backlogGoal": "Grounded answer courtroom",
  "backlogTasksCovered": 3,
  "theme": "Teaching machines to see and talk at once",
  "system": "vlm-grounded-reasoning",
  "bench": "cvpr-vlm-answer-verification-bench",
  "cases": 4,
  "probes": 4,
  "courtroomRows": 16,
  "admit": 12,
  "crossExamine": 4,
  "sustainObjection": 0,
  "cachedSystemEvidenceCases": 4,
  "maxUnsupportedClaimRisk": 48.6,
  "minVisualCitation": 61.9,
  "avgReadiness": 75.2,
  "evidenceKey": "vlm-grounded-reasoning",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
