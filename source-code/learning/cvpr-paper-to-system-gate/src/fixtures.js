export const coverageAudit = {
  "stage": "coverage-audit",
  "themeCounts": {
    "emerging": 0,
    "threed": 0,
    "video": 0,
    "generation": 0,
    "vlm": 0,
    "perceive": 0,
    "embodied": 0,
    "learning": 0
  },
  "clusterCounts": {
    "vlm_reasoning": 0,
    "efficient": 0,
    "recon_nvs": 0,
    "open_vocab": 0,
    "restoration": 0,
    "gaussian_splatting": 0,
    "medical": 0,
    "video_world": 0,
    "controllable_gen": 0,
    "driving_vla": 0,
    "adversarial": 0
  },
  "themeCount": 8,
  "clusterCount": 11,
  "totalThemePapers": 0,
  "totalClusterAssignments": 0,
  "requiredPageCoverage": 1.0,
  "missingRequiredPages": [],
  "systemsRegistryPresent": true,
  "systemsRegistrySummary": {
    "systems": 11,
    "stages": 33,
    "themesCovered": 8,
    "totalThemes": 8,
    "clustersCovered": 11,
    "totalClusters": 11,
    "openClusters": [],
    "complete": 33,
    "incomplete": 0
  },
  "reusableRule": "Before turning a CVPR idea into a system, prove the site has theme evidence, cluster evidence, math context, searchability, and an audit trail."
};
export const paperGate = {
  "stage": "paper-gate",
  "candidates": [
    {
      "id": "open-vocab-visual-search",
      "title": "Open-vocabulary visual search",
      "domain": "Open-vocabulary vision",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "vlm-grounded-reasoning",
      "title": "VLM grounded reasoning",
      "domain": "Vision-language reasoning",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "efficient-vision-serving",
      "title": "Efficient vision serving",
      "domain": "Efficient vision",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "metric-3d-reconstruction",
      "title": "Metric 3D reconstruction pipeline",
      "domain": "3D reconstruction and novel views",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "gaussian-splatting-platform",
      "title": "Gaussian Splatting platform",
      "domain": "Gaussian Splatting",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "video-world-model",
      "title": "Video world model",
      "domain": "Video generation and world models",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "controllable-generation-studio",
      "title": "Controllable generation studio",
      "domain": "Controllable generation",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "restoration-reliability-stack",
      "title": "Restoration reliability stack",
      "domain": "Image restoration",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "medical-vision-validation",
      "title": "Medical vision validation",
      "domain": "Vision for science and medicine",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "driving-vla-release-gate",
      "title": "Driving VLA release gate",
      "domain": "Driving and vision-language-action",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    },
    {
      "id": "adversarial-provenance-gate",
      "title": "Adversarial provenance gate",
      "domain": "Adversarial robustness",
      "evidence": {
        "theme": 0,
        "cluster": 0,
        "stageCount": 3
      },
      "risks": [
        "highest residual risk",
        "release constraints",
        "regression coverage"
      ],
      "scores": {
        "visualGrounding": 0.94,
        "languageOrControl": 0.94,
        "timeAndWorld": 1.0,
        "deploymentFoundation": 0.9,
        "domainDepth": 0.0,
        "actionRisk": 0.9
      },
      "readinessScore": 78.0,
      "decision": "ready with constraints"
    }
  ],
  "bestCandidate": "open-vocab-visual-search",
  "candidateCount": 11,
  "source": "systems-registry",
  "gateNames": [
    "visualGrounding",
    "languageOrControl",
    "timeAndWorld",
    "deploymentFoundation",
    "domainDepth",
    "actionRisk"
  ],
  "reusableRule": "A CVPR paper becomes a product candidate only when theme evidence, domain depth, efficiency, robustness, and misuse or action risk clear separate gates."
};
export const releaseBoard = {
  "stage": "release-board",
  "rankedCandidates": [
    {
      "rank": 1,
      "id": "open-vocab-visual-search",
      "title": "Open-vocabulary visual search",
      "domain": "Open-vocabulary vision",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 2,
      "id": "vlm-grounded-reasoning",
      "title": "VLM grounded reasoning",
      "domain": "Vision-language reasoning",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 3,
      "id": "efficient-vision-serving",
      "title": "Efficient vision serving",
      "domain": "Efficient vision",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 4,
      "id": "metric-3d-reconstruction",
      "title": "Metric 3D reconstruction pipeline",
      "domain": "3D reconstruction and novel views",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 5,
      "id": "gaussian-splatting-platform",
      "title": "Gaussian Splatting platform",
      "domain": "Gaussian Splatting",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 6,
      "id": "video-world-model",
      "title": "Video world model",
      "domain": "Video generation and world models",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 7,
      "id": "controllable-generation-studio",
      "title": "Controllable generation studio",
      "domain": "Controllable generation",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 8,
      "id": "restoration-reliability-stack",
      "title": "Restoration reliability stack",
      "domain": "Image restoration",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 9,
      "id": "medical-vision-validation",
      "title": "Medical vision validation",
      "domain": "Vision for science and medicine",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 10,
      "id": "driving-vla-release-gate",
      "title": "Driving VLA release gate",
      "domain": "Driving and vision-language-action",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    },
    {
      "rank": 11,
      "id": "adversarial-provenance-gate",
      "title": "Adversarial provenance gate",
      "domain": "Adversarial robustness",
      "score": 78.0,
      "decision": "ready with constraints",
      "topRisk": "highest residual risk"
    }
  ],
  "readyOrConstrained": 11,
  "needsMoreEvidence": 0,
  "blocked": 0,
  "reusableRule": "Ship the release board, not just the ranking: every candidate needs a score, a deployment decision, and the risk that would block real use."
};
