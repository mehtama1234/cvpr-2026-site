export const roadmapInput = {
  "portfolio": {
    "summary": {
      "portfolio": "cvpr-theme-portfolio-map",
      "status": "block",
      "themes": 8,
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "benchRelease": 44,
      "missingDemoEvidence": 0,
      "proPlusSystems": 10,
      "cachedEvidenceSystems": 1,
      "operatorStatus": "block"
    },
    "themeRows": [
      {
        "theme": "Learning more from less, and not breaking",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Making pixels from meaning",
        "systems": 2,
        "stages": 6,
        "stageDemos": 6,
        "benchCases": 8,
        "benchRelease": 8,
        "proPlusSystems": 2,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Naming and locating what's in the picture",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Recovering the 3D world from flat pictures",
        "systems": 2,
        "stages": 6,
        "stageDemos": 6,
        "benchCases": 8,
        "benchRelease": 8,
        "proPlusSystems": 2,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Seeing and making things that move",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Teaching machines to see and talk at once",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 0,
        "cachedEvidenceSystems": 1,
        "status": "release"
      },
      {
        "theme": "The frontier - new senses and new duties",
        "systems": 2,
        "stages": 6,
        "stageDemos": 6,
        "benchCases": 8,
        "benchRelease": 8,
        "proPlusSystems": 2,
        "cachedEvidenceSystems": 0,
        "status": "release"
      },
      {
        "theme": "Using vision to act in the world",
        "systems": 1,
        "stages": 3,
        "stageDemos": 3,
        "benchCases": 4,
        "benchRelease": 4,
        "proPlusSystems": 1,
        "cachedEvidenceSystems": 0,
        "status": "release"
      }
    ],
    "systemRows": [
      {
        "theme": "Learning more from less, and not breaking",
        "system": "efficient-vision-serving",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "inspectPage": "efficient-vision-serving.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "status": "ready"
      },
      {
        "theme": "Making pixels from meaning",
        "system": "controllable-generation-studio",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "inspectPage": "controllable-generation-studio.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      },
      {
        "theme": "Making pixels from meaning",
        "system": "restoration-reliability-stack",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "inspectPage": "restoration-reliability-stack.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "status": "ready"
      },
      {
        "theme": "Naming and locating what's in the picture",
        "system": "open-vocab-visual-search",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "inspectPage": "open-vocab-visual-search.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "status": "ready"
      },
      {
        "theme": "Recovering the 3D world from flat pictures",
        "system": "gaussian-splatting-platform",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "inspectPage": "gaussian-splatting-platform.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      },
      {
        "theme": "Recovering the 3D world from flat pictures",
        "system": "metric-3d-reconstruction",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "inspectPage": "metric-3d-reconstruction.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      },
      {
        "theme": "Seeing and making things that move",
        "system": "video-world-model",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "inspectPage": "video-world-model.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "status": "ready"
      },
      {
        "theme": "Teaching machines to see and talk at once",
        "system": "vlm-grounded-reasoning",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "inspectPage": "vlm-grounded-reasoning.html",
        "stageDemos": 3,
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "status": "ready"
      },
      {
        "theme": "The frontier - new senses and new duties",
        "system": "adversarial-provenance-gate",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "inspectPage": "adversarial-provenance-gate.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "status": "ready"
      },
      {
        "theme": "The frontier - new senses and new duties",
        "system": "medical-vision-validation",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "inspectPage": "medical-vision-validation.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "status": "ready"
      },
      {
        "theme": "Using vision to act in the world",
        "system": "driving-vla-release-gate",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "inspectPage": "driving-vla-release-gate.html",
        "stageDemos": 3,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "status": "ready"
      }
    ],
    "sources": {
      "systems": "analysis/cvpr_systems/registry.json",
      "themeMatrix": "analysis/cvpr_theme_release_matrix/registry.json",
      "cockpit": "analysis/cvpr_demo_evidence_cockpit/registry.json",
      "commandCenter": "analysis/cvpr_release_command_center/registry.json"
    }
  },
  "cockpit": {
    "summary": {
      "cockpit": "cvpr-demo-evidence-cockpit",
      "status": "ready",
      "systems": 11,
      "stageDemos": 33,
      "flagshipDemos": 8,
      "totalDemos": 41,
      "proPlusJobs": 14,
      "proPlusWaves": 3,
      "expectedLiveResults": 56,
      "cachedResults": 56,
      "benchRelease": 44,
      "benchCases": 44,
      "missingDemoEvidence": 0,
      "gpuBackedStageDemos": 30,
      "systemEvidenceStageDemos": 3,
      "releaseGate": "release",
      "fullStackStatus": "valid"
    },
    "systemRows": [
      {
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "inspectPage": "adversarial-provenance-gate.html",
        "status": "ready"
      },
      {
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "controllable-generation-studio.html",
        "status": "ready"
      },
      {
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "driving-vla-release-gate.html",
        "status": "ready"
      },
      {
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "inspectPage": "efficient-vision-serving.html",
        "status": "ready"
      },
      {
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "gaussian-splatting-platform.html",
        "status": "ready"
      },
      {
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "inspectPage": "medical-vision-validation.html",
        "status": "ready"
      },
      {
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "inspectPage": "metric-3d-reconstruction.html",
        "status": "ready"
      },
      {
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "inspectPage": "open-vocab-visual-search.html",
        "status": "ready"
      },
      {
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "inspectPage": "restoration-reliability-stack.html",
        "status": "ready"
      },
      {
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "inspectPage": "video-world-model.html",
        "status": "ready"
      },
      {
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "stageDemos": 3,
        "benchRelease": 4,
        "benchCases": 4,
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "inspectPage": "vlm-grounded-reasoning.html",
        "status": "ready"
      }
    ],
    "demoRows": [
      {
        "demoId": "stage-open-vocab-visual-search-text-query-grounding",
        "title": "Ground text queries in visible regions",
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "sourceStage": "text-query-grounding",
        "visualMode": "localization",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "open-vocab-visual-search.html",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-open-vocab-visual-search-long-tail-retrieval",
        "title": "Retrieve long-tail objects",
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "sourceStage": "long-tail-retrieval",
        "visualMode": "localization",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "open-vocab-visual-search.html",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-open-vocab-visual-search-evidence-inspection",
        "title": "Expose search evidence",
        "system": "open-vocab-visual-search",
        "theme": "Naming and locating what's in the picture",
        "sourceStage": "evidence-inspection",
        "visualMode": "localization",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "open-vocab-visual-search.html",
        "bench": "cvpr-long-tail-grounding-bench",
        "benchPage": "cvpr-long-tail-grounding-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "open-vocab-grounding",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-vlm-grounded-reasoning-look-then-reason",
        "title": "Look before reasoning",
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "sourceStage": "look-then-reason",
        "visualMode": "grounding",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "vlm-grounded-reasoning.html",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "status": "ready"
      },
      {
        "demoId": "stage-vlm-grounded-reasoning-hallucination-check",
        "title": "Check hallucinated claims",
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "sourceStage": "hallucination-check",
        "visualMode": "grounding",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "vlm-grounded-reasoning.html",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "status": "ready"
      },
      {
        "demoId": "stage-vlm-grounded-reasoning-tool-verified-answer",
        "title": "Verify with visual tools",
        "system": "vlm-grounded-reasoning",
        "theme": "Teaching machines to see and talk at once",
        "sourceStage": "tool-verified-answer",
        "visualMode": "grounding",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "vlm-grounded-reasoning.html",
        "bench": "cvpr-vlm-answer-verification-bench",
        "benchPage": "cvpr-vlm-answer-verification-bench.html",
        "runtimeEvidence": "cached-system-evidence",
        "colabJobId": "",
        "wave": "cached-system-evidence",
        "expectedLiveResults": 0,
        "status": "ready"
      },
      {
        "demoId": "stage-efficient-vision-serving-token-budget",
        "title": "Control token budget",
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "sourceStage": "token-budget",
        "visualMode": "efficiency",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "efficient-vision-serving.html",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-efficient-vision-serving-quantized-serving",
        "title": "Serve quantized models",
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "sourceStage": "quantized-serving",
        "visualMode": "efficiency",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "efficient-vision-serving.html",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-efficient-vision-serving-student-routing",
        "title": "Route to small students",
        "system": "efficient-vision-serving",
        "theme": "Learning more from less, and not breaking",
        "sourceStage": "student-routing",
        "visualMode": "efficiency",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "efficient-vision-serving.html",
        "bench": "cvpr-compute-serving-bench",
        "benchPage": "cvpr-compute-serving-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "compute-serving",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-metric-3d-reconstruction-camera-geometry",
        "title": "Recover camera geometry",
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "camera-geometry",
        "visualMode": "geometry",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "metric-3d-reconstruction.html",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-metric-3d-reconstruction-metric-scale",
        "title": "Recover metric scale",
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "metric-scale",
        "visualMode": "geometry",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "metric-3d-reconstruction.html",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-metric-3d-reconstruction-surface-consistency",
        "title": "Check surface consistency",
        "system": "metric-3d-reconstruction",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "surface-consistency",
        "visualMode": "geometry",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "metric-3d-reconstruction.html",
        "bench": "cvpr-metric-geometry-bench",
        "benchPage": "cvpr-metric-geometry-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "metric-geometry",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-gaussian-splatting-platform-splat-fit",
        "title": "Fit renderable splats",
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "splat-fit",
        "visualMode": "splats",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "gaussian-splatting-platform.html",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-gaussian-splatting-platform-semantic-splats",
        "title": "Attach semantic labels",
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "semantic-splats",
        "visualMode": "splats",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "gaussian-splatting-platform.html",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-gaussian-splatting-platform-watermark-provenance",
        "title": "Track provenance",
        "system": "gaussian-splatting-platform",
        "theme": "Recovering the 3D world from flat pictures",
        "sourceStage": "watermark-provenance",
        "visualMode": "splats",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "gaussian-splatting-platform.html",
        "bench": "cvpr-gaussian-splatting-bench",
        "benchPage": "cvpr-gaussian-splatting-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "gaussian-splatting",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-video-world-model-temporal-memory",
        "title": "Keep temporal memory",
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "sourceStage": "temporal-memory",
        "visualMode": "temporal",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "video-world-model.html",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-video-world-model-physics-consistency",
        "title": "Check physics consistency",
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "sourceStage": "physics-consistency",
        "visualMode": "temporal",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "video-world-model.html",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-video-world-model-future-rollout",
        "title": "Score future rollouts",
        "system": "video-world-model",
        "theme": "Seeing and making things that move",
        "sourceStage": "future-rollout",
        "visualMode": "temporal",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "video-world-model.html",
        "bench": "cvpr-temporal-rollout-bench",
        "benchPage": "cvpr-temporal-rollout-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "temporal-rollout",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-controllable-generation-studio-layout-control",
        "title": "Control layout",
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "sourceStage": "layout-control",
        "visualMode": "editing",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "controllable-generation-studio.html",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-controllable-generation-studio-identity-preservation",
        "title": "Preserve identity",
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "sourceStage": "identity-preservation",
        "visualMode": "editing",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "controllable-generation-studio.html",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-controllable-generation-studio-preference-reward",
        "title": "Optimize preference reward",
        "system": "controllable-generation-studio",
        "theme": "Making pixels from meaning",
        "sourceStage": "preference-reward",
        "visualMode": "editing",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "controllable-generation-studio.html",
        "bench": "cvpr-constraint-generation-bench",
        "benchPage": "cvpr-constraint-generation-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "constraint-generation",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-restoration-reliability-stack-degradation-diagnosis",
        "title": "Diagnose degradation",
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "sourceStage": "degradation-diagnosis",
        "visualMode": "restoration",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "restoration-reliability-stack.html",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-restoration-reliability-stack-fidelity-gate",
        "title": "Gate restoration fidelity",
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "sourceStage": "fidelity-gate",
        "visualMode": "restoration",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "restoration-reliability-stack.html",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-restoration-reliability-stack-downstream-validation",
        "title": "Validate downstream utility",
        "system": "restoration-reliability-stack",
        "theme": "Making pixels from meaning",
        "sourceStage": "downstream-validation",
        "visualMode": "restoration",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "restoration-reliability-stack.html",
        "bench": "cvpr-restoration-fidelity-bench",
        "benchPage": "cvpr-restoration-fidelity-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "restoration-fidelity",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-medical-vision-validation-domain-shift",
        "title": "Measure domain shift",
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "domain-shift",
        "visualMode": "medical",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "medical-vision-validation.html",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-medical-vision-validation-uncertainty-triage",
        "title": "Triage uncertainty",
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "uncertainty-triage",
        "visualMode": "medical",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "medical-vision-validation.html",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-medical-vision-validation-clinical-evidence",
        "title": "Build clinical evidence",
        "system": "medical-vision-validation",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "clinical-evidence",
        "visualMode": "medical",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "medical-vision-validation.html",
        "bench": "cvpr-clinical-shift-bench",
        "benchPage": "cvpr-clinical-shift-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "clinical-shift",
        "wave": "wave-2-temporal-clinical-serving",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-driving-vla-release-gate-scene-grounding",
        "title": "Ground the driving scene",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "sourceStage": "scene-grounding",
        "visualMode": "safety",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "driving-vla-release-gate.html",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-driving-vla-release-gate-risk-anticipation",
        "title": "Anticipate risk",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "sourceStage": "risk-anticipation",
        "visualMode": "safety",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "driving-vla-release-gate.html",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-driving-vla-release-gate-action-release",
        "title": "Gate action release",
        "system": "driving-vla-release-gate",
        "theme": "Using vision to act in the world",
        "sourceStage": "action-release",
        "visualMode": "safety",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "driving-vla-release-gate.html",
        "bench": "cvpr-driving-safety-bench",
        "benchPage": "cvpr-driving-safety-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "driving-safety",
        "wave": "wave-3-generation-driving-3d",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-adversarial-provenance-gate-attack-surface",
        "title": "Map attack surface",
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "attack-surface",
        "visualMode": "trust",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "adversarial-provenance-gate.html",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-adversarial-provenance-gate-provenance-detection",
        "title": "Detect provenance",
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "provenance-detection",
        "visualMode": "trust",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "adversarial-provenance-gate.html",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      },
      {
        "demoId": "stage-adversarial-provenance-gate-unlearning-check",
        "title": "Check unlearning",
        "system": "adversarial-provenance-gate",
        "theme": "The frontier - new senses and new duties",
        "sourceStage": "unlearning-check",
        "visualMode": "trust",
        "demoPage": "cvpr-demo-lab.html",
        "systemPage": "adversarial-provenance-gate.html",
        "bench": "cvpr-adversarial-provenance-bench",
        "benchPage": "cvpr-adversarial-provenance-bench.html",
        "runtimeEvidence": "colab-pro-plus",
        "colabJobId": "adversarial-provenance",
        "wave": "wave-1-grounding-fidelity-provenance",
        "expectedLiveResults": 4,
        "status": "ready"
      }
    ],
    "flagshipRows": [
      {
        "demoId": "open-vocab-grounding",
        "title": "Open-vocabulary region grounding",
        "theme": "Perception",
        "cluster": "Open-vocabulary vision",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "localization",
        "status": "interactive"
      },
      {
        "demoId": "metric-depth-uncertainty",
        "title": "Metric depth uncertainty",
        "theme": "3D",
        "cluster": "3D reconstruction and novel views",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "geometry",
        "status": "interactive"
      },
      {
        "demoId": "temporal-world-rollout",
        "title": "Temporal consistency rollout",
        "theme": "Video",
        "cluster": "Video generation and world models",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "temporal",
        "status": "interactive"
      },
      {
        "demoId": "controlled-editing",
        "title": "Controllable editing preservation",
        "theme": "Generation",
        "cluster": "Controllable generation",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "editing",
        "status": "interactive"
      },
      {
        "demoId": "vlm-grounding-check",
        "title": "Grounded reasoning vs hallucination",
        "theme": "VLM",
        "cluster": "Vision-language reasoning",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "grounding",
        "status": "interactive"
      },
      {
        "demoId": "driving-action-gate",
        "title": "Driving VLA action gate",
        "theme": "Embodied",
        "cluster": "Driving and vision-language-action",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "safety",
        "status": "interactive"
      },
      {
        "demoId": "efficient-token-serving",
        "title": "Token pruning and serving tradeoff",
        "theme": "Learning",
        "cluster": "Efficient vision",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "efficiency",
        "status": "interactive"
      },
      {
        "demoId": "provenance-attack-gate",
        "title": "Provenance and adversarial gate",
        "theme": "Frontier and trust",
        "cluster": "Adversarial robustness",
        "demoPage": "cvpr-demo-lab.html",
        "visualMode": "trust",
        "status": "interactive"
      }
    ],
    "sources": {
      "demos": "analysis/cvpr_demos/registry.json",
      "coverage": "analysis/cvpr_production_coverage_audit/registry.json",
      "planner": "analysis/cvpr_colab_execution_planner/registry.json",
      "mission": "analysis/cvpr_mission_control/registry.json",
      "releaseBrief": "analysis/cvpr_production_release_brief/registry.json"
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
  "commandCenter": {
    "summary": {
      "center": "cvpr-release-command-center",
      "status": "block",
      "surfaces": 8,
      "readySurfaces": 2,
      "alerts": 5,
      "importIssues": 0,
      "fullStackStatus": "valid",
      "packageTests": 148,
      "systems": 11,
      "stages": 33,
      "demos": 41,
      "workerJobs": 14,
      "cachedResults": 56
    },
    "surfaceRows": [
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
        "actual": "block",
        "expected": "launch-ready",
        "metric": "148 package tests",
        "evidence": "analysis/cvpr_launch_readiness_pack/registry.json",
        "command": "python3 scripts/build_cvpr_launch_readiness_pack.py && python3 scripts/verify_cvpr_launch_readiness_pack.py"
      },
      {
        "surface": "cvpr-release-manifest.html",
        "label": "Release manifest",
        "actual": "block",
        "expected": "sealed",
        "metric": "13 artifacts",
        "evidence": "analysis/cvpr_release_manifest/registry.json",
        "command": "python3 scripts/build_cvpr_release_manifest.py && python3 scripts/verify_cvpr_release_manifest.py"
      },
      {
        "surface": "cvpr-release-change-control.html",
        "label": "Release change control",
        "actual": "block",
        "expected": "controlled",
        "metric": "13/13 rows",
        "evidence": "analysis/cvpr_release_change_control/registry.json",
        "command": "python3 scripts/build_cvpr_release_change_control.py && python3 scripts/verify_cvpr_release_change_control.py"
      },
      {
        "surface": "cvpr-release-dependency-graph.html",
        "label": "Release dependency graph",
        "actual": "block",
        "expected": "ready",
        "metric": "15 nodes / 19 edges",
        "evidence": "analysis/cvpr_release_dependency_graph/registry.json",
        "command": "python3 scripts/build_cvpr_release_dependency_graph.py && python3 scripts/verify_cvpr_release_dependency_graph.py"
      },
      {
        "surface": "cvpr-post-launch-monitoring.html",
        "label": "Post-launch monitoring",
        "actual": "block",
        "expected": "watching",
        "metric": "4/9 monitors",
        "evidence": "analysis/cvpr_post_launch_monitoring/registry.json",
        "command": "python3 scripts/build_cvpr_post_launch_monitoring.py && python3 scripts/verify_cvpr_post_launch_monitoring.py"
      },
      {
        "surface": "cvpr-release-audit-trail.html",
        "label": "Release audit trail",
        "actual": "block",
        "expected": "complete",
        "metric": "56/58 events",
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
    ],
    "sources": {
      "brief": "analysis/cvpr_production_release_brief/registry.json",
      "launch": "analysis/cvpr_launch_readiness_pack/registry.json",
      "manifest": "analysis/cvpr_release_manifest/registry.json",
      "changeControl": "analysis/cvpr_release_change_control/registry.json",
      "dependencyGraph": "analysis/cvpr_release_dependency_graph/registry.json",
      "monitoring": "analysis/cvpr_post_launch_monitoring/registry.json",
      "auditTrail": "analysis/cvpr_release_audit_trail/registry.json",
      "validation": "analysis/cvpr_full_stack_validation/registry.json"
    }
  }
};
export const roadmapGoals = [
  {
    "id": "roadmap-01",
    "theme": "Learning more from less, and not breaking",
    "title": "Adaptive serving stress lab",
    "objective": "Add a live budget-control demo that sweeps latency, token pruning, and escalation thresholds.",
    "systems": [
      "efficient-vision-serving"
    ],
    "benches": [
      "cvpr-compute-serving-bench"
    ],
    "evidencePages": [
      "cvpr-compute-serving-bench.html"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "proPlusJobs": [
      "compute-serving"
    ],
    "cachedEvidenceSystems": [],
    "stageDemos": 3,
    "benchCases": 4,
    "readinessFloor": 86.9,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  },
  {
    "id": "roadmap-02",
    "theme": "Making pixels from meaning",
    "title": "Constraint edit tournament",
    "objective": "Compare identity, layout, and preference controls across adversarial edit prompts.",
    "systems": [
      "controllable-generation-studio",
      "restoration-reliability-stack"
    ],
    "benches": [
      "cvpr-constraint-generation-bench",
      "cvpr-restoration-fidelity-bench"
    ],
    "evidencePages": [
      "cvpr-constraint-generation-bench.html",
      "cvpr-restoration-fidelity-bench.html"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "proPlusJobs": [
      "constraint-generation",
      "restoration-fidelity"
    ],
    "cachedEvidenceSystems": [],
    "stageDemos": 6,
    "benchCases": 8,
    "readinessFloor": 70.5,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  },
  {
    "id": "roadmap-03",
    "theme": "Naming and locating what's in the picture",
    "title": "Open-vocabulary failure hunt",
    "objective": "Add long-tail query packs that expose ambiguity, distractors, and missing evidence.",
    "systems": [
      "open-vocab-visual-search"
    ],
    "benches": [
      "cvpr-long-tail-grounding-bench"
    ],
    "evidencePages": [
      "cvpr-long-tail-grounding-bench.html"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "proPlusJobs": [
      "open-vocab-grounding"
    ],
    "cachedEvidenceSystems": [],
    "stageDemos": 3,
    "benchCases": 4,
    "readinessFloor": 44.0,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  },
  {
    "id": "roadmap-04",
    "theme": "Recovering the 3D world from flat pictures",
    "title": "3D edit provenance room",
    "objective": "Link metric geometry and splat evidence in one inspectable scene-level demo.",
    "systems": [
      "gaussian-splatting-platform",
      "metric-3d-reconstruction"
    ],
    "benches": [
      "cvpr-gaussian-splatting-bench",
      "cvpr-metric-geometry-bench"
    ],
    "evidencePages": [
      "cvpr-gaussian-splatting-bench.html",
      "cvpr-metric-geometry-bench.html"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "proPlusJobs": [
      "gaussian-splatting",
      "metric-geometry"
    ],
    "cachedEvidenceSystems": [],
    "stageDemos": 6,
    "benchCases": 8,
    "readinessFloor": 73.6,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  },
  {
    "id": "roadmap-05",
    "theme": "Seeing and making things that move",
    "title": "Temporal counterfactual lab",
    "objective": "Add rollout forks that show how drift, identity switches, and contact errors compound.",
    "systems": [
      "video-world-model"
    ],
    "benches": [
      "cvpr-temporal-rollout-bench"
    ],
    "evidencePages": [
      "cvpr-temporal-rollout-bench.html"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "proPlusJobs": [
      "temporal-rollout"
    ],
    "cachedEvidenceSystems": [],
    "stageDemos": 3,
    "benchCases": 4,
    "readinessFloor": 80.3,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  },
  {
    "id": "roadmap-06",
    "theme": "Teaching machines to see and talk at once",
    "title": "Grounded answer courtroom",
    "objective": "Upgrade cached-system VLM evidence into an adjudication demo with citations and contradiction probes.",
    "systems": [
      "vlm-grounded-reasoning"
    ],
    "benches": [
      "cvpr-vlm-answer-verification-bench"
    ],
    "evidencePages": [
      "cvpr-vlm-answer-verification-bench.html"
    ],
    "runtimeEvidence": "cached-system-evidence",
    "proPlusJobs": [],
    "cachedEvidenceSystems": [
      "vlm-grounded-reasoning"
    ],
    "stageDemos": 3,
    "benchCases": 4,
    "readinessFloor": 0,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  },
  {
    "id": "roadmap-07",
    "theme": "The frontier - new senses and new duties",
    "title": "Provenance red-team arena",
    "objective": "Add watermark, perturbation, and unlearning attacks as replayable release drills.",
    "systems": [
      "adversarial-provenance-gate",
      "medical-vision-validation"
    ],
    "benches": [
      "cvpr-adversarial-provenance-bench",
      "cvpr-clinical-shift-bench"
    ],
    "evidencePages": [
      "cvpr-adversarial-provenance-bench.html",
      "cvpr-clinical-shift-bench.html"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "proPlusJobs": [
      "adversarial-provenance",
      "clinical-shift"
    ],
    "cachedEvidenceSystems": [],
    "stageDemos": 6,
    "benchCases": 8,
    "readinessFloor": 53.8,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  },
  {
    "id": "roadmap-08",
    "theme": "Using vision to act in the world",
    "title": "Safety deployment simulator",
    "objective": "Stress clinical shift and driving safety gates under site, weather, and hazard changes.",
    "systems": [
      "driving-vla-release-gate"
    ],
    "benches": [
      "cvpr-driving-safety-bench"
    ],
    "evidencePages": [
      "cvpr-driving-safety-bench.html"
    ],
    "runtimeEvidence": "colab-pro-plus",
    "proPlusJobs": [
      "driving-safety"
    ],
    "cachedEvidenceSystems": [],
    "stageDemos": 3,
    "benchCases": 4,
    "readinessFloor": 56.5,
    "command": "python3 scripts/validate_cvpr_full_stack.py",
    "status": "ready"
  }
];
export const summary = {
  "roadmap": "cvpr-next-demo-roadmap",
  "status": "block",
  "goals": 8,
  "themes": 8,
  "linkedSystems": 11,
  "proPlusGoals": 7,
  "cachedEvidenceGoals": 1,
  "missingEvidence": 0,
  "operatorStatus": "block",
  "packageTests": 148
};
