export const papers = [
  {
    "title": "FedAFD: Multimodal Federated Learning via Adversarial Fusion and Distillation",
    "repo": "https://github.com/Chao2433/FedAFD",
    "tags": [
      "federated-learning",
      "multimodal",
      "privacy-preserving",
      "knowledge-distillation",
      "adversarial-learning",
      "feature-fusion"
    ],
    "problem": "FedAFD is about federated learning across clients with different modalities, tasks, and model shapes. The everyday problem is letting participants collaborate when their local evidence and architectures do not match."
  },
  {
    "title": "Towards Cross-Modal Preservation, Consistency and Alignment for Privacy-Preserving Visible-Infrared Person Re-Identification",
    "repo": "https://github.com/Dige945/PPA_CVPR26",
    "tags": [
      "person-re-identification",
      "privacy-preservation",
      "cross-modal-matching",
      "visible-infrared",
      "anonymization",
      "keypoint-preservation"
    ],
    "problem": "This privacy-preserving visible-infrared person re-identification work is about recognizing the same person across day and night cameras while hiding private appearance details. The everyday problem is that anonymization can erase the very body structure neede"
  },
  {
    "title": "GraphVLM: Benchmarking Vision Language Models for Multimodal Graph Learning",
    "repo": "https://github.com/oamyjin/GraphVLM",
    "tags": [
      "vision-language-models",
      "graph-learning",
      "multimodal",
      "graph-neural-networks",
      "benchmark",
      "graph-reasoning"
    ],
    "problem": "GraphVLM is about testing how vision-language models handle graph-structured multimodal data. The everyday problem is reasoning about nodes and links when each entity may also have images and text."
  },
  {
    "title": "ReCALL: Recalibrating Capability Degradation for MLLM-based Composed Image Retrieval",
    "repo": "https://github.com/RemRico/Recall",
    "tags": [
      "composed image retrieval",
      "multimodal reasoning",
      "vision-language models",
      "contrastive learning",
      "capability preservation",
      "cross-modal alignment"
    ],
    "problem": "ReCALL is about preserving multimodal reasoning when adapting an MLLM to composed image retrieval. The everyday problem is that compressing a reasoning model into one retrieval embedding can erase fine relations like red bag on the left but with a different st"
  },
  {
    "title": "See It, Say It, Sorted: An Iterative Training-Free Framework for Visually-Grounded Multimodal Reasoning in LVLMs",
    "repo": "https://github.com/uuuuZYC/See-It-Say-It-Sorted",
    "tags": [
      "chain-of-thought",
      "hallucination mitigation",
      "visual grounding",
      "LVLMs",
      "reasoning",
      "test-time inference"
    ],
    "problem": "See It Say It Sorted is about improving multimodal answers without new training. The everyday problem is that a model may generate fluent but weakly grounded reasoning unless it repeatedly checks visible evidence."
  }
];
export const cases = [
  {
    "id": "cvpr-grounded-vlm-repo-court-1",
    "title": "FedAFD",
    "dims": [
      58,
      86,
      82,
      46,
      42,
      52
    ],
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "operatorAction": "federated multimodal fusion must align mismatched client evidence"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-2",
    "title": "Towards Cross-Modal Preservation, Consistency and Alignment for Priv",
    "dims": [
      64,
      98,
      74,
      32,
      38,
      44
    ],
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "operatorAction": "visible-infrared re-ID must preserve structure while hiding identity details"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-3",
    "title": "GraphVLM",
    "dims": [
      72,
      34,
      66,
      96,
      50,
      64
    ],
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "operatorAction": "graph VLMs need node-link evidence, not just fluent captions"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-4",
    "title": "ReCALL",
    "dims": [
      78,
      48,
      88,
      58,
      96,
      70
    ],
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "operatorAction": "composed retrieval must not collapse relational reasoning into one embedding"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-5",
    "title": "See It, Say It, Sorted",
    "dims": [
      86,
      38,
      62,
      42,
      46,
      94
    ],
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "operatorAction": "training-free reasoning must repeatedly check visual evidence"
  }
];
export const demoRows = [
  {
    "id": "cvpr-grounded-vlm-repo-court-1",
    "title": "FedAFD",
    "paperTitle": "FedAFD: Multimodal Federated Learning via Adversarial Fusion and Distillation",
    "repo": "https://github.com/Chao2433/FedAFD",
    "tags": [
      "federated-learning",
      "multimodal",
      "privacy-preserving",
      "knowledge-distillation",
      "adversarial-learning",
      "feature-fusion"
    ],
    "paperProblem": "FedAFD is about federated learning across clients with different modalities, tasks, and model shapes. The everyday problem is letting participants collaborate when their local evidence and architectures do not match.",
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "dims": [
      58,
      86,
      82,
      46,
      42,
      52
    ],
    "metrics": {
      "dims": [
        58,
        86,
        82,
        46,
        42,
        52
      ],
      "primaryRisk": 64.8,
      "evidenceRisk": 56.9,
      "runtimeRisk": 56.8,
      "readiness": 45.8
    },
    "decision": "review",
    "operatorAction": "federated multimodal fusion must align mismatched client evidence"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-2",
    "title": "Towards Cross-Modal Preservation, Consistency and Alignment for Priv",
    "paperTitle": "Towards Cross-Modal Preservation, Consistency and Alignment for Privacy-Preserving Visible-Infrared Person Re-Identification",
    "repo": "https://github.com/Dige945/PPA_CVPR26",
    "tags": [
      "person-re-identification",
      "privacy-preservation",
      "cross-modal-matching",
      "visible-infrared",
      "anonymization",
      "keypoint-preservation"
    ],
    "paperProblem": "This privacy-preserving visible-infrared person re-identification work is about recognizing the same person across day and night cameras while hiding private appearance details. The everyday problem is that anonymization can erase the very body structure neede",
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "dims": [
      64,
      98,
      74,
      32,
      38,
      44
    ],
    "metrics": {
      "dims": [
        64,
        98,
        74,
        32,
        38,
        44
      ],
      "primaryRisk": 64.8,
      "evidenceRisk": 53.3,
      "runtimeRisk": 52.6,
      "readiness": 47.8
    },
    "decision": "review",
    "operatorAction": "visible-infrared re-ID must preserve structure while hiding identity details"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-3",
    "title": "GraphVLM",
    "paperTitle": "GraphVLM: Benchmarking Vision Language Models for Multimodal Graph Learning",
    "repo": "https://github.com/oamyjin/GraphVLM",
    "tags": [
      "vision-language-models",
      "graph-learning",
      "multimodal",
      "graph-neural-networks",
      "benchmark",
      "graph-reasoning"
    ],
    "paperProblem": "GraphVLM is about testing how vision-language models handle graph-structured multimodal data. The everyday problem is reasoning about nodes and links when each entity may also have images and text.",
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "dims": [
      72,
      34,
      66,
      96,
      50,
      64
    ],
    "metrics": {
      "dims": [
        72,
        34,
        66,
        96,
        50,
        64
      ],
      "primaryRisk": 62.4,
      "evidenceRisk": 64.1,
      "runtimeRisk": 63.8,
      "readiness": 43.0
    },
    "decision": "block",
    "operatorAction": "graph VLMs need node-link evidence, not just fluent captions"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-4",
    "title": "ReCALL",
    "paperTitle": "ReCALL: Recalibrating Capability Degradation for MLLM-based Composed Image Retrieval",
    "repo": "https://github.com/RemRico/Recall",
    "tags": [
      "composed image retrieval",
      "multimodal reasoning",
      "vision-language models",
      "contrastive learning",
      "capability preservation",
      "cross-modal alignment"
    ],
    "paperProblem": "ReCALL is about preserving multimodal reasoning when adapting an MLLM to composed image retrieval. The everyday problem is that compressing a reasoning model into one retrieval embedding can erase fine relations like red bag on the left but with a different st",
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "dims": [
      78,
      48,
      88,
      58,
      96,
      70
    ],
    "metrics": {
      "dims": [
        78,
        48,
        88,
        58,
        96,
        70
      ],
      "primaryRisk": 71.8,
      "evidenceRisk": 70.8,
      "runtimeRisk": 77.3,
      "readiness": 34.4
    },
    "decision": "block",
    "operatorAction": "composed retrieval must not collapse relational reasoning into one embedding"
  },
  {
    "id": "cvpr-grounded-vlm-repo-court-5",
    "title": "See It, Say It, Sorted",
    "paperTitle": "See It, Say It, Sorted: An Iterative Training-Free Framework for Visually-Grounded Multimodal Reasoning in LVLMs",
    "repo": "https://github.com/uuuuZYC/See-It-Say-It-Sorted",
    "tags": [
      "chain-of-thought",
      "hallucination mitigation",
      "visual grounding",
      "LVLMs",
      "reasoning",
      "test-time inference"
    ],
    "paperProblem": "See It Say It Sorted is about improving multimodal answers without new training. The everyday problem is that a model may generate fluent but weakly grounded reasoning unless it repeatedly checks visible evidence.",
    "labels": [
      "evidence gap",
      "privacy pressure",
      "alignment drift",
      "graph complexity",
      "retrieval compression",
      "hallucination risk"
    ],
    "dims": [
      86,
      38,
      62,
      42,
      46,
      94
    ],
    "metrics": {
      "dims": [
        86,
        38,
        62,
        42,
        46,
        94
      ],
      "primaryRisk": 62.6,
      "evidenceRisk": 58.2,
      "runtimeRisk": 58.6,
      "readiness": 45.9
    },
    "decision": "review",
    "operatorAction": "training-free reasoning must repeatedly check visual evidence"
  }
];
export const summary = {
  "demo": "cvpr-grounded-vlm-repo-court",
  "status": "ready",
  "theme": "Teaching machines to see and talk at once",
  "sourceForge": "cvpr-paper-repo-demo-forge.html",
  "systems": [
    "vlm-grounded-reasoning"
  ],
  "repoPapers": 5,
  "cases": 5,
  "release": 0,
  "review": 3,
  "block": 2,
  "maxPrimaryRisk": 71.8,
  "maxEvidenceRisk": 70.8,
  "minReadiness": 34.4,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
