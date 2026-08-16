export const papers = [
  {
    "title": "MOS: Mitigating Optical-SAR Modality Gap for Cross-Modal Ship Re-Identification",
    "repo": "https://github.com/yjzhao1019/MOS",
    "tags": [
      "cross-modal retrieval",
      "re-identification",
      "domain adaptation",
      "remote sensing",
      "multimodal learning"
    ],
    "problem": "MOS is about matching ships across optical and SAR imagery. The everyday problem is that optical cameras and radar see the same ship through very different measurement physics."
  },
  {
    "title": "SegEarth-R2: Towards Comprehensive Language-guided Segmentation for Remote Sensing Images",
    "repo": "https://github.com/earth-insights/SegEarth-R2",
    "tags": [
      "language-guided-segmentation",
      "remote-sensing",
      "multimodal-learning",
      "geospatial-reasoning",
      "spatial-grounding",
      "hierarchical-granularity"
    ],
    "problem": "SegEarth-R2 is about turning complex language instructions into pixel regions in satellite and aerial images. The everyday problem is that a request may mention several targets, parts of objects, nested categories, or implicit geography, not just a single simp"
  },
  {
    "title": "RAVEN: Erasing Invisible Watermarks via Novel View Synthesis",
    "repo": "https://github.com/fahadshamshad/raven-",
    "tags": [
      "watermark-removal",
      "view-synthesis",
      "security",
      "diffusion-models",
      "adversarial-attack",
      "image-authentication"
    ],
    "problem": "This RAVEN paper is about erasing invisible watermarks. The everyday problem is that watermark signals can survive in images even when they are not visible to people."
  },
  {
    "title": "MM-OVSeg: Multimodal Optical\u2013SAR Fusion for Open-Vocabulary Segmentation in Remote Sensing",
    "repo": "https://github.com/Jimmyxichen/MM-OVSeg",
    "tags": [
      "open-vocabulary-segmentation",
      "remote-sensing",
      "optical-sar-fusion",
      "multimodal",
      "adverse-weather",
      "earth-observation"
    ],
    "problem": "MM-OVSeg is about open-vocabulary segmentation in remote sensing using optical and SAR data. The everyday problem is that clouds or haze can hide optical imagery, while SAR sees different physical structure."
  },
  {
    "title": "GeoViS: Geospatially Rewarded Visual Search for Remote Sensing",
    "repo": "https://github.com/Zhang-Peirong/GeoVis",
    "tags": [
      "depth",
      "generation",
      "geo-localization",
      "multimodal",
      "remote-sensing",
      "transformer"
    ],
    "problem": "GeoViS is about grounding language queries in huge remote-sensing images. The everyday problem is that a target may be tiny inside a kilometer-scale scene, and the query may depend on roads, rivers, relative positions, or distant context."
  }
];
export const cases = [
  {
    "id": "optical-sar-ship-match",
    "title": "Optical-SAR ship match",
    "paperIndex": 0,
    "modalityGap": 94,
    "visibilityLoss": 72,
    "geoScale": 64,
    "languageGrounding": 22,
    "watermarkAttack": 12,
    "provenanceNeed": 70,
    "operatorAction": "require cross-modal identity agreement before accepting re-identification"
  },
  {
    "id": "language-remote-segmentation",
    "title": "Language remote segmentation",
    "paperIndex": 1,
    "modalityGap": 38,
    "visibilityLoss": 36,
    "geoScale": 86,
    "languageGrounding": 94,
    "watermarkAttack": 16,
    "provenanceNeed": 58,
    "operatorAction": "validate nested language regions across geospatial hierarchy"
  },
  {
    "id": "watermark-view-synthesis",
    "title": "Watermark view synthesis",
    "paperIndex": 2,
    "modalityGap": 24,
    "visibilityLoss": 20,
    "geoScale": 32,
    "languageGrounding": 24,
    "watermarkAttack": 98,
    "provenanceNeed": 96,
    "operatorAction": "block release if novel-view synthesis erases authentication traces"
  },
  {
    "id": "optical-sar-open-vocab",
    "title": "Optical-SAR open vocab",
    "paperIndex": 3,
    "modalityGap": 88,
    "visibilityLoss": 82,
    "geoScale": 74,
    "languageGrounding": 86,
    "watermarkAttack": 18,
    "provenanceNeed": 76,
    "operatorAction": "route cloudy optical cases through SAR-backed open-vocabulary masks"
  },
  {
    "id": "geospatial-visual-search",
    "title": "Geospatial visual search",
    "paperIndex": 4,
    "modalityGap": 42,
    "visibilityLoss": 46,
    "geoScale": 98,
    "languageGrounding": 82,
    "watermarkAttack": 14,
    "provenanceNeed": 64,
    "operatorAction": "score tiny target retrieval against road, river, and relative-position context"
  }
];
export const fusionRows = [
  {
    "id": "optical-sar-ship-match",
    "title": "Optical-SAR ship match",
    "paperTitle": "MOS: Mitigating Optical-SAR Modality Gap for Cross-Modal Ship Re-Identification",
    "repo": "https://github.com/yjzhao1019/MOS",
    "tags": [
      "cross-modal retrieval",
      "re-identification",
      "domain adaptation",
      "remote sensing",
      "multimodal learning"
    ],
    "paperProblem": "MOS is about matching ships across optical and SAR imagery. The everyday problem is that optical cameras and radar see the same ship through very different measurement physics.",
    "metrics": {
      "modalityGap": 94,
      "visibilityLoss": 72,
      "geoScale": 64,
      "languageGrounding": 22,
      "watermarkAttack": 12,
      "provenanceNeed": 70,
      "fusionRisk": 63.3,
      "groundingRisk": 56.2,
      "provenanceRisk": 39.1,
      "readiness": 45.8
    },
    "decision": "review",
    "operatorAction": "require cross-modal identity agreement before accepting re-identification"
  },
  {
    "id": "language-remote-segmentation",
    "title": "Language remote segmentation",
    "paperTitle": "SegEarth-R2: Towards Comprehensive Language-guided Segmentation for Remote Sensing Images",
    "repo": "https://github.com/earth-insights/SegEarth-R2",
    "tags": [
      "language-guided-segmentation",
      "remote-sensing",
      "multimodal-learning",
      "geospatial-reasoning",
      "spatial-grounding",
      "hierarchical-granularity"
    ],
    "paperProblem": "SegEarth-R2 is about turning complex language instructions into pixel regions in satellite and aerial images. The everyday problem is that a request may mention several targets, parts of objects, nested categories, or implicit geography, not just a single simp",
    "metrics": {
      "modalityGap": 38,
      "visibilityLoss": 36,
      "geoScale": 86,
      "languageGrounding": 94,
      "watermarkAttack": 16,
      "provenanceNeed": 58,
      "fusionRisk": 53.1,
      "groundingRisk": 71.3,
      "provenanceRisk": 33.4,
      "readiness": 47.1
    },
    "decision": "review",
    "operatorAction": "validate nested language regions across geospatial hierarchy"
  },
  {
    "id": "watermark-view-synthesis",
    "title": "Watermark view synthesis",
    "paperTitle": "RAVEN: Erasing Invisible Watermarks via Novel View Synthesis",
    "repo": "https://github.com/fahadshamshad/raven-",
    "tags": [
      "watermark-removal",
      "view-synthesis",
      "security",
      "diffusion-models",
      "adversarial-attack",
      "image-authentication"
    ],
    "paperProblem": "This RAVEN paper is about erasing invisible watermarks. The everyday problem is that watermark signals can survive in images even when they are not visible to people.",
    "metrics": {
      "modalityGap": 24,
      "visibilityLoss": 20,
      "geoScale": 32,
      "languageGrounding": 24,
      "watermarkAttack": 98,
      "provenanceNeed": 96,
      "fusionRisk": 38.9,
      "groundingRisk": 37.0,
      "provenanceRisk": 87.6,
      "readiness": 44.3
    },
    "decision": "block",
    "operatorAction": "block release if novel-view synthesis erases authentication traces"
  },
  {
    "id": "optical-sar-open-vocab",
    "title": "Optical-SAR open vocab",
    "paperTitle": "MM-OVSeg: Multimodal Optical\u2013SAR Fusion for Open-Vocabulary Segmentation in Remote Sensing",
    "repo": "https://github.com/Jimmyxichen/MM-OVSeg",
    "tags": [
      "open-vocabulary-segmentation",
      "remote-sensing",
      "optical-sar-fusion",
      "multimodal",
      "adverse-weather",
      "earth-observation"
    ],
    "paperProblem": "MM-OVSeg is about open-vocabulary segmentation in remote sensing using optical and SAR data. The everyday problem is that clouds or haze can hide optical imagery, while SAR sees different physical structure.",
    "metrics": {
      "modalityGap": 88,
      "visibilityLoss": 82,
      "geoScale": 74,
      "languageGrounding": 86,
      "watermarkAttack": 18,
      "provenanceNeed": 76,
      "fusionRisk": 76.3,
      "groundingRisk": 81.0,
      "provenanceRisk": 45.4,
      "readiness": 31.3
    },
    "decision": "block",
    "operatorAction": "route cloudy optical cases through SAR-backed open-vocabulary masks"
  },
  {
    "id": "geospatial-visual-search",
    "title": "Geospatial visual search",
    "paperTitle": "GeoViS: Geospatially Rewarded Visual Search for Remote Sensing",
    "repo": "https://github.com/Zhang-Peirong/GeoVis",
    "tags": [
      "depth",
      "generation",
      "geo-localization",
      "multimodal",
      "remote-sensing",
      "transformer"
    ],
    "paperProblem": "GeoViS is about grounding language queries in huge remote-sensing images. The everyday problem is that a target may be tiny inside a kilometer-scale scene, and the query may depend on roads, rivers, relative positions, or distant context.",
    "metrics": {
      "modalityGap": 42,
      "visibilityLoss": 46,
      "geoScale": 98,
      "languageGrounding": 82,
      "watermarkAttack": 14,
      "provenanceNeed": 64,
      "fusionRisk": 56.4,
      "groundingRisk": 73.4,
      "provenanceRisk": 34.6,
      "readiness": 44.8
    },
    "decision": "review",
    "operatorAction": "score tiny target retrieval against road, river, and relative-position context"
  }
];
export const summary = {
  "demo": "cvpr-frontier-sensor-fusion-bench",
  "status": "ready",
  "theme": "The frontier - new senses and new duties",
  "sourceForge": "cvpr-paper-repo-demo-forge.html",
  "systems": [
    "adversarial-provenance-gate",
    "medical-vision-validation"
  ],
  "repoPapers": 5,
  "cases": 5,
  "release": 0,
  "review": 3,
  "block": 2,
  "maxFusionRisk": 76.3,
  "maxProvenanceRisk": 87.6,
  "minReadiness": 31.3,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
