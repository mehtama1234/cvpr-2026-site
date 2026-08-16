export const scenarioRows = [
  {
    "scenarioId": "001-embodied-carla-evidence",
    "laneKey": "001-embodied-carla",
    "laneId": "embodied-carla",
    "theme": "embodied",
    "subtheme": "CARLA",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / CARLA using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "001-embodied-carla-failure",
    "laneKey": "001-embodied-carla",
    "laneId": "embodied-carla",
    "theme": "embodied",
    "subtheme": "CARLA",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / CARLA using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "001-embodied-carla-release",
    "laneKey": "001-embodied-carla",
    "laneId": "embodied-carla",
    "theme": "embodied",
    "subtheme": "CARLA",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / CARLA using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "002-embodied-sac-evidence",
    "laneKey": "002-embodied-sac",
    "laneId": "embodied-sac",
    "theme": "embodied",
    "subtheme": "SAC",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / SAC using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "002-embodied-sac-failure",
    "laneKey": "002-embodied-sac",
    "laneId": "embodied-sac",
    "theme": "embodied",
    "subtheme": "SAC",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / SAC using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "002-embodied-sac-release",
    "laneKey": "002-embodied-sac",
    "laneId": "embodied-sac",
    "theme": "embodied",
    "subtheme": "SAC",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / SAC using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "003-embodied-autonomous-driving-evidence",
    "laneKey": "003-embodied-autonomous-driving",
    "laneId": "embodied-autonomous-driving",
    "theme": "embodied",
    "subtheme": "autonomous driving",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / autonomous driving using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "003-embodied-autonomous-driving-failure",
    "laneKey": "003-embodied-autonomous-driving",
    "laneId": "embodied-autonomous-driving",
    "theme": "embodied",
    "subtheme": "autonomous driving",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / autonomous driving using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "003-embodied-autonomous-driving-release",
    "laneKey": "003-embodied-autonomous-driving",
    "laneId": "embodied-autonomous-driving",
    "theme": "embodied",
    "subtheme": "autonomous driving",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / autonomous driving using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "004-embodied-bimanual-control-evidence",
    "laneKey": "004-embodied-bimanual-control",
    "laneId": "embodied-bimanual-control",
    "theme": "embodied",
    "subtheme": "bimanual control",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / bimanual control using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "004-embodied-bimanual-control-failure",
    "laneKey": "004-embodied-bimanual-control",
    "laneId": "embodied-bimanual-control",
    "theme": "embodied",
    "subtheme": "bimanual control",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / bimanual control using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "004-embodied-bimanual-control-release",
    "laneKey": "004-embodied-bimanual-control",
    "laneId": "embodied-bimanual-control",
    "theme": "embodied",
    "subtheme": "bimanual control",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / bimanual control using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "005-embodied-compositional-learning-evidence",
    "laneKey": "005-embodied-compositional-learning",
    "laneId": "embodied-compositional-learning",
    "theme": "embodied",
    "subtheme": "compositional learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / compositional learning using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "005-embodied-compositional-learning-failure",
    "laneKey": "005-embodied-compositional-learning",
    "laneId": "embodied-compositional-learning",
    "theme": "embodied",
    "subtheme": "compositional learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / compositional learning using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "005-embodied-compositional-learning-release",
    "laneKey": "005-embodied-compositional-learning",
    "laneId": "embodied-compositional-learning",
    "theme": "embodied",
    "subtheme": "compositional learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / compositional learning using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "006-embodied-consistency-models-evidence",
    "laneKey": "006-embodied-consistency-models",
    "laneId": "embodied-consistency-models",
    "theme": "embodied",
    "subtheme": "consistency-models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / consistency-models using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "006-embodied-consistency-models-failure",
    "laneKey": "006-embodied-consistency-models",
    "laneId": "embodied-consistency-models",
    "theme": "embodied",
    "subtheme": "consistency-models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / consistency-models using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "006-embodied-consistency-models-release",
    "laneKey": "006-embodied-consistency-models",
    "laneId": "embodied-consistency-models",
    "theme": "embodied",
    "subtheme": "consistency-models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / consistency-models using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "007-embodied-curriculum-learning-evidence",
    "laneKey": "007-embodied-curriculum-learning",
    "laneId": "embodied-curriculum-learning",
    "theme": "embodied",
    "subtheme": "curriculum-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / curriculum-learning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "007-embodied-curriculum-learning-failure",
    "laneKey": "007-embodied-curriculum-learning",
    "laneId": "embodied-curriculum-learning",
    "theme": "embodied",
    "subtheme": "curriculum-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / curriculum-learning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "007-embodied-curriculum-learning-release",
    "laneKey": "007-embodied-curriculum-learning",
    "laneId": "embodied-curriculum-learning",
    "theme": "embodied",
    "subtheme": "curriculum-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / curriculum-learning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "008-embodied-data-selection-evidence",
    "laneKey": "008-embodied-data-selection",
    "laneId": "embodied-data-selection",
    "theme": "embodied",
    "subtheme": "data-selection",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / data-selection using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "008-embodied-data-selection-failure",
    "laneKey": "008-embodied-data-selection",
    "laneId": "embodied-data-selection",
    "theme": "embodied",
    "subtheme": "data-selection",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / data-selection using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "008-embodied-data-selection-release",
    "laneKey": "008-embodied-data-selection",
    "laneId": "embodied-data-selection",
    "theme": "embodied",
    "subtheme": "data-selection",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / data-selection using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "009-embodied-energy-based-models-evidence",
    "laneKey": "009-embodied-energy-based-models",
    "laneId": "embodied-energy-based-models",
    "theme": "embodied",
    "subtheme": "energy-based models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / energy-based models using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "009-embodied-energy-based-models-failure",
    "laneKey": "009-embodied-energy-based-models",
    "laneId": "embodied-energy-based-models",
    "theme": "embodied",
    "subtheme": "energy-based models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / energy-based models using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "009-embodied-energy-based-models-release",
    "laneKey": "009-embodied-energy-based-models",
    "laneId": "embodied-energy-based-models",
    "theme": "embodied",
    "subtheme": "energy-based models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / energy-based models using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "010-embodied-fine-tuning-evidence",
    "laneKey": "010-embodied-fine-tuning",
    "laneId": "embodied-fine-tuning",
    "theme": "embodied",
    "subtheme": "fine-tuning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / fine-tuning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "010-embodied-fine-tuning-failure",
    "laneKey": "010-embodied-fine-tuning",
    "laneId": "embodied-fine-tuning",
    "theme": "embodied",
    "subtheme": "fine-tuning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / fine-tuning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "010-embodied-fine-tuning-release",
    "laneKey": "010-embodied-fine-tuning",
    "laneId": "embodied-fine-tuning",
    "theme": "embodied",
    "subtheme": "fine-tuning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / fine-tuning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "011-embodied-gui-agents-evidence",
    "laneKey": "011-embodied-gui-agents",
    "laneId": "embodied-gui-agents",
    "theme": "embodied",
    "subtheme": "gui-agents",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / gui-agents using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "011-embodied-gui-agents-failure",
    "laneKey": "011-embodied-gui-agents",
    "laneId": "embodied-gui-agents",
    "theme": "embodied",
    "subtheme": "gui-agents",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / gui-agents using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "011-embodied-gui-agents-release",
    "laneKey": "011-embodied-gui-agents",
    "laneId": "embodied-gui-agents",
    "theme": "embodied",
    "subtheme": "gui-agents",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / gui-agents using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "012-embodied-history-awareness-evidence",
    "laneKey": "012-embodied-history-awareness",
    "laneId": "embodied-history-awareness",
    "theme": "embodied",
    "subtheme": "history-awareness",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / history-awareness using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "012-embodied-history-awareness-failure",
    "laneKey": "012-embodied-history-awareness",
    "laneId": "embodied-history-awareness",
    "theme": "embodied",
    "subtheme": "history-awareness",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / history-awareness using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "012-embodied-history-awareness-release",
    "laneKey": "012-embodied-history-awareness",
    "laneId": "embodied-history-awareness",
    "theme": "embodied",
    "subtheme": "history-awareness",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / history-awareness using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "013-embodied-manipulation-evidence",
    "laneKey": "013-embodied-manipulation",
    "laneId": "embodied-manipulation",
    "theme": "embodied",
    "subtheme": "manipulation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / manipulation using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "013-embodied-manipulation-failure",
    "laneKey": "013-embodied-manipulation",
    "laneId": "embodied-manipulation",
    "theme": "embodied",
    "subtheme": "manipulation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / manipulation using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "013-embodied-manipulation-release",
    "laneKey": "013-embodied-manipulation",
    "laneId": "embodied-manipulation",
    "theme": "embodied",
    "subtheme": "manipulation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / manipulation using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "014-embodied-policy-transfer-evidence",
    "laneKey": "014-embodied-policy-transfer",
    "laneId": "embodied-policy-transfer",
    "theme": "embodied",
    "subtheme": "policy transfer",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl",
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "54-57",
    "avgReadiness": 55.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / policy transfer using safe-driving-drl and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "014-embodied-policy-transfer-failure",
    "laneKey": "014-embodied-policy-transfer",
    "laneId": "embodied-policy-transfer",
    "theme": "embodied",
    "subtheme": "policy transfer",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl",
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "54-57",
    "avgReadiness": 55.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / policy transfer using safe-driving-drl and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "014-embodied-policy-transfer-release",
    "laneKey": "014-embodied-policy-transfer",
    "laneId": "embodied-policy-transfer",
    "theme": "embodied",
    "subtheme": "policy transfer",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl",
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "54-57",
    "avgReadiness": 55.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / policy transfer using safe-driving-drl and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "015-embodied-policy-optimization-evidence",
    "laneKey": "015-embodied-policy-optimization",
    "laneId": "embodied-policy-optimization",
    "theme": "embodied",
    "subtheme": "policy-optimization",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM",
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "59-61",
    "avgReadiness": 60.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / policy-optimization using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "015-embodied-policy-optimization-failure",
    "laneKey": "015-embodied-policy-optimization",
    "laneId": "embodied-policy-optimization",
    "theme": "embodied",
    "subtheme": "policy-optimization",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM",
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "59-61",
    "avgReadiness": 60.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / policy-optimization using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "015-embodied-policy-optimization-release",
    "laneKey": "015-embodied-policy-optimization",
    "laneId": "embodied-policy-optimization",
    "theme": "embodied",
    "subtheme": "policy-optimization",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM",
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "59-61",
    "avgReadiness": 60.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / policy-optimization using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "016-embodied-reinforcement-learning-evidence",
    "laneKey": "016-embodied-reinforcement-learning",
    "laneId": "embodied-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "reinforcement learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / reinforcement learning using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "016-embodied-reinforcement-learning-failure",
    "laneKey": "016-embodied-reinforcement-learning",
    "laneId": "embodied-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "reinforcement learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / reinforcement learning using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "016-embodied-reinforcement-learning-release",
    "laneKey": "016-embodied-reinforcement-learning",
    "laneId": "embodied-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "reinforcement learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / reinforcement learning using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "017-embodied-reinforcement-learning-evidence",
    "laneKey": "017-embodied-reinforcement-learning",
    "laneId": "embodied-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "reinforcement-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM",
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "59-61",
    "avgReadiness": 60.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / reinforcement-learning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "017-embodied-reinforcement-learning-failure",
    "laneKey": "017-embodied-reinforcement-learning",
    "laneId": "embodied-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "reinforcement-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM",
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "59-61",
    "avgReadiness": 60.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / reinforcement-learning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "017-embodied-reinforcement-learning-release",
    "laneKey": "017-embodied-reinforcement-learning",
    "laneId": "embodied-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "reinforcement-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM",
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "59-61",
    "avgReadiness": 60.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / reinforcement-learning using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "018-embodied-representation-learning-evidence",
    "laneKey": "018-embodied-representation-learning",
    "laneId": "embodied-representation-learning",
    "theme": "embodied",
    "subtheme": "representation-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / representation-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "018-embodied-representation-learning-failure",
    "laneKey": "018-embodied-representation-learning",
    "laneId": "embodied-representation-learning",
    "theme": "embodied",
    "subtheme": "representation-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / representation-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "018-embodied-representation-learning-release",
    "laneKey": "018-embodied-representation-learning",
    "laneId": "embodied-representation-learning",
    "theme": "embodied",
    "subtheme": "representation-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / representation-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "019-embodied-robotics-evidence",
    "laneKey": "019-embodied-robotics",
    "laneId": "embodied-robotics",
    "theme": "embodied",
    "subtheme": "robotics",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / robotics using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "019-embodied-robotics-failure",
    "laneKey": "019-embodied-robotics",
    "laneId": "embodied-robotics",
    "theme": "embodied",
    "subtheme": "robotics",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / robotics using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "019-embodied-robotics-release",
    "laneKey": "019-embodied-robotics",
    "laneId": "embodied-robotics",
    "theme": "embodied",
    "subtheme": "robotics",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EnergyAction",
    "repoNames": [
      "EnergyAction"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "54-54",
    "avgReadiness": 54.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / robotics using EnergyAction and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "020-embodied-sample-importance-evidence",
    "laneKey": "020-embodied-sample-importance",
    "laneId": "embodied-sample-importance",
    "theme": "embodied",
    "subtheme": "sample-importance",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / sample-importance using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "020-embodied-sample-importance-failure",
    "laneKey": "020-embodied-sample-importance",
    "laneId": "embodied-sample-importance",
    "theme": "embodied",
    "subtheme": "sample-importance",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / sample-importance using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "020-embodied-sample-importance-release",
    "laneKey": "020-embodied-sample-importance",
    "laneId": "embodied-sample-importance",
    "theme": "embodied",
    "subtheme": "sample-importance",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DIEM",
    "repoNames": [
      "DIEM"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "59-59",
    "avgReadiness": 59.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / sample-importance using DIEM and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "021-embodied-skill-learning-evidence",
    "laneKey": "021-embodied-skill-learning",
    "laneId": "embodied-skill-learning",
    "theme": "embodied",
    "subtheme": "skill-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / skill-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "021-embodied-skill-learning-failure",
    "laneKey": "021-embodied-skill-learning",
    "laneId": "embodied-skill-learning",
    "theme": "embodied",
    "subtheme": "skill-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / skill-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "021-embodied-skill-learning-release",
    "laneKey": "021-embodied-skill-learning",
    "laneId": "embodied-skill-learning",
    "theme": "embodied",
    "subtheme": "skill-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / skill-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "022-embodied-task-automation-evidence",
    "laneKey": "022-embodied-task-automation",
    "laneId": "embodied-task-automation",
    "theme": "embodied",
    "subtheme": "task-automation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / task-automation using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "022-embodied-task-automation-failure",
    "laneKey": "022-embodied-task-automation",
    "laneId": "embodied-task-automation",
    "theme": "embodied",
    "subtheme": "task-automation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / task-automation using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "022-embodied-task-automation-release",
    "laneKey": "022-embodied-task-automation",
    "laneId": "embodied-task-automation",
    "theme": "embodied",
    "subtheme": "task-automation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HiconAgent",
    "repoNames": [
      "HiconAgent"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "61-61",
    "avgReadiness": 61.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / task-automation using HiconAgent and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "023-embodied-uncertainty-estimation-evidence",
    "laneKey": "023-embodied-uncertainty-estimation",
    "laneId": "embodied-uncertainty-estimation",
    "theme": "embodied",
    "subtheme": "uncertainty estimation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / uncertainty estimation using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "023-embodied-uncertainty-estimation-failure",
    "laneKey": "023-embodied-uncertainty-estimation",
    "laneId": "embodied-uncertainty-estimation",
    "theme": "embodied",
    "subtheme": "uncertainty estimation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / uncertainty estimation using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "023-embodied-uncertainty-estimation-release",
    "laneKey": "023-embodied-uncertainty-estimation",
    "laneId": "embodied-uncertainty-estimation",
    "theme": "embodied",
    "subtheme": "uncertainty estimation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "safe-driving-drl",
    "repoNames": [
      "safe-driving-drl"
    ],
    "demoPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "deepViewerPage": "cvpr-embodied-safe-driving-drl-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / uncertainty estimation using safe-driving-drl and cvpr-embodied-safe-driving-drl-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "024-embodied-unsupervised-reinforcement-learning-evidence",
    "laneKey": "024-embodied-unsupervised-reinforcement-learning",
    "laneId": "embodied-unsupervised-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "unsupervised-reinforcement-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / unsupervised-reinforcement-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "024-embodied-unsupervised-reinforcement-learning-failure",
    "laneKey": "024-embodied-unsupervised-reinforcement-learning",
    "laneId": "embodied-unsupervised-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "unsupervised-reinforcement-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / unsupervised-reinforcement-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "024-embodied-unsupervised-reinforcement-learning-release",
    "laneKey": "024-embodied-unsupervised-reinforcement-learning",
    "laneId": "embodied-unsupervised-reinforcement-learning",
    "theme": "embodied",
    "subtheme": "unsupervised-reinforcement-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / unsupervised-reinforcement-learning using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "025-embodied-visual-control-evidence",
    "laneKey": "025-embodied-visual-control",
    "laneId": "embodied-visual-control",
    "theme": "embodied",
    "subtheme": "visual-control",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / visual-control using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "025-embodied-visual-control-failure",
    "laneKey": "025-embodied-visual-control",
    "laneId": "embodied-visual-control",
    "theme": "embodied",
    "subtheme": "visual-control",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / visual-control using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "025-embodied-visual-control-release",
    "laneKey": "025-embodied-visual-control",
    "laneId": "embodied-visual-control",
    "theme": "embodied",
    "subtheme": "visual-control",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / visual-control using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "026-embodied-zero-shot-generalization-evidence",
    "laneKey": "026-embodied-zero-shot-generalization",
    "laneId": "embodied-zero-shot-generalization",
    "theme": "embodied",
    "subtheme": "zero-shot-generalization",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for embodied / zero-shot-generalization using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "026-embodied-zero-shot-generalization-failure",
    "laneKey": "026-embodied-zero-shot-generalization",
    "laneId": "embodied-zero-shot-generalization",
    "theme": "embodied",
    "subtheme": "zero-shot-generalization",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for embodied / zero-shot-generalization using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "026-embodied-zero-shot-generalization-release",
    "laneKey": "026-embodied-zero-shot-generalization",
    "laneId": "embodied-zero-shot-generalization",
    "theme": "embodied",
    "subtheme": "zero-shot-generalization",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SRCP",
    "repoNames": [
      "SRCP"
    ],
    "demoPage": "cvpr-embodied-control-repo-drill.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for embodied / zero-shot-generalization using SRCP and cvpr-embodied-control-repo-drill.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "027-frontier-adversarial-attack-evidence",
    "laneKey": "027-frontier-adversarial-attack",
    "laneId": "frontier-adversarial-attack",
    "theme": "frontier",
    "subtheme": "adversarial-attack",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / adversarial-attack using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "027-frontier-adversarial-attack-failure",
    "laneKey": "027-frontier-adversarial-attack",
    "laneId": "frontier-adversarial-attack",
    "theme": "frontier",
    "subtheme": "adversarial-attack",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / adversarial-attack using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "027-frontier-adversarial-attack-release",
    "laneKey": "027-frontier-adversarial-attack",
    "laneId": "frontier-adversarial-attack",
    "theme": "frontier",
    "subtheme": "adversarial-attack",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / adversarial-attack using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "028-frontier-adverse-weather-evidence",
    "laneKey": "028-frontier-adverse-weather",
    "laneId": "frontier-adverse-weather",
    "theme": "frontier",
    "subtheme": "adverse-weather",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / adverse-weather using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "028-frontier-adverse-weather-failure",
    "laneKey": "028-frontier-adverse-weather",
    "laneId": "frontier-adverse-weather",
    "theme": "frontier",
    "subtheme": "adverse-weather",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / adverse-weather using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "028-frontier-adverse-weather-release",
    "laneKey": "028-frontier-adverse-weather",
    "laneId": "frontier-adverse-weather",
    "theme": "frontier",
    "subtheme": "adverse-weather",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / adverse-weather using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "029-frontier-cross-modal-retrieval-evidence",
    "laneKey": "029-frontier-cross-modal-retrieval",
    "laneId": "frontier-cross-modal-retrieval",
    "theme": "frontier",
    "subtheme": "cross-modal retrieval",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / cross-modal retrieval using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "029-frontier-cross-modal-retrieval-failure",
    "laneKey": "029-frontier-cross-modal-retrieval",
    "laneId": "frontier-cross-modal-retrieval",
    "theme": "frontier",
    "subtheme": "cross-modal retrieval",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / cross-modal retrieval using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "029-frontier-cross-modal-retrieval-release",
    "laneKey": "029-frontier-cross-modal-retrieval",
    "laneId": "frontier-cross-modal-retrieval",
    "theme": "frontier",
    "subtheme": "cross-modal retrieval",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / cross-modal retrieval using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "030-frontier-depth-evidence",
    "laneKey": "030-frontier-depth",
    "laneId": "frontier-depth",
    "theme": "frontier",
    "subtheme": "depth",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / depth using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "030-frontier-depth-failure",
    "laneKey": "030-frontier-depth",
    "laneId": "frontier-depth",
    "theme": "frontier",
    "subtheme": "depth",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / depth using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "030-frontier-depth-release",
    "laneKey": "030-frontier-depth",
    "laneId": "frontier-depth",
    "theme": "frontier",
    "subtheme": "depth",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / depth using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "031-frontier-diffusion-models-evidence",
    "laneKey": "031-frontier-diffusion-models",
    "laneId": "frontier-diffusion-models",
    "theme": "frontier",
    "subtheme": "diffusion-models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / diffusion-models using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "031-frontier-diffusion-models-failure",
    "laneKey": "031-frontier-diffusion-models",
    "laneId": "frontier-diffusion-models",
    "theme": "frontier",
    "subtheme": "diffusion-models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / diffusion-models using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "031-frontier-diffusion-models-release",
    "laneKey": "031-frontier-diffusion-models",
    "laneId": "frontier-diffusion-models",
    "theme": "frontier",
    "subtheme": "diffusion-models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / diffusion-models using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "032-frontier-domain-adaptation-evidence",
    "laneKey": "032-frontier-domain-adaptation",
    "laneId": "frontier-domain-adaptation",
    "theme": "frontier",
    "subtheme": "domain adaptation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / domain adaptation using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "032-frontier-domain-adaptation-failure",
    "laneKey": "032-frontier-domain-adaptation",
    "laneId": "frontier-domain-adaptation",
    "theme": "frontier",
    "subtheme": "domain adaptation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / domain adaptation using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "032-frontier-domain-adaptation-release",
    "laneKey": "032-frontier-domain-adaptation",
    "laneId": "frontier-domain-adaptation",
    "theme": "frontier",
    "subtheme": "domain adaptation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / domain adaptation using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "033-frontier-earth-observation-evidence",
    "laneKey": "033-frontier-earth-observation",
    "laneId": "frontier-earth-observation",
    "theme": "frontier",
    "subtheme": "earth-observation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / earth-observation using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "033-frontier-earth-observation-failure",
    "laneKey": "033-frontier-earth-observation",
    "laneId": "frontier-earth-observation",
    "theme": "frontier",
    "subtheme": "earth-observation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / earth-observation using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "033-frontier-earth-observation-release",
    "laneKey": "033-frontier-earth-observation",
    "laneId": "frontier-earth-observation",
    "theme": "frontier",
    "subtheme": "earth-observation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / earth-observation using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "034-frontier-generation-evidence",
    "laneKey": "034-frontier-generation",
    "laneId": "frontier-generation",
    "theme": "frontier",
    "subtheme": "generation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / generation using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "034-frontier-generation-failure",
    "laneKey": "034-frontier-generation",
    "laneId": "frontier-generation",
    "theme": "frontier",
    "subtheme": "generation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / generation using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "034-frontier-generation-release",
    "laneKey": "034-frontier-generation",
    "laneId": "frontier-generation",
    "theme": "frontier",
    "subtheme": "generation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / generation using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "035-frontier-geo-localization-evidence",
    "laneKey": "035-frontier-geo-localization",
    "laneId": "frontier-geo-localization",
    "theme": "frontier",
    "subtheme": "geo-localization",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / geo-localization using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "035-frontier-geo-localization-failure",
    "laneKey": "035-frontier-geo-localization",
    "laneId": "frontier-geo-localization",
    "theme": "frontier",
    "subtheme": "geo-localization",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / geo-localization using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "035-frontier-geo-localization-release",
    "laneKey": "035-frontier-geo-localization",
    "laneId": "frontier-geo-localization",
    "theme": "frontier",
    "subtheme": "geo-localization",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / geo-localization using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "036-frontier-geospatial-reasoning-evidence",
    "laneKey": "036-frontier-geospatial-reasoning",
    "laneId": "frontier-geospatial-reasoning",
    "theme": "frontier",
    "subtheme": "geospatial-reasoning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / geospatial-reasoning using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "036-frontier-geospatial-reasoning-failure",
    "laneKey": "036-frontier-geospatial-reasoning",
    "laneId": "frontier-geospatial-reasoning",
    "theme": "frontier",
    "subtheme": "geospatial-reasoning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / geospatial-reasoning using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "036-frontier-geospatial-reasoning-release",
    "laneKey": "036-frontier-geospatial-reasoning",
    "laneId": "frontier-geospatial-reasoning",
    "theme": "frontier",
    "subtheme": "geospatial-reasoning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / geospatial-reasoning using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "037-frontier-hierarchical-granularity-evidence",
    "laneKey": "037-frontier-hierarchical-granularity",
    "laneId": "frontier-hierarchical-granularity",
    "theme": "frontier",
    "subtheme": "hierarchical-granularity",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / hierarchical-granularity using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "037-frontier-hierarchical-granularity-failure",
    "laneKey": "037-frontier-hierarchical-granularity",
    "laneId": "frontier-hierarchical-granularity",
    "theme": "frontier",
    "subtheme": "hierarchical-granularity",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / hierarchical-granularity using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "037-frontier-hierarchical-granularity-release",
    "laneKey": "037-frontier-hierarchical-granularity",
    "laneId": "frontier-hierarchical-granularity",
    "theme": "frontier",
    "subtheme": "hierarchical-granularity",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / hierarchical-granularity using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "038-frontier-image-authentication-evidence",
    "laneKey": "038-frontier-image-authentication",
    "laneId": "frontier-image-authentication",
    "theme": "frontier",
    "subtheme": "image-authentication",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / image-authentication using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "038-frontier-image-authentication-failure",
    "laneKey": "038-frontier-image-authentication",
    "laneId": "frontier-image-authentication",
    "theme": "frontier",
    "subtheme": "image-authentication",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / image-authentication using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "038-frontier-image-authentication-release",
    "laneKey": "038-frontier-image-authentication",
    "laneId": "frontier-image-authentication",
    "theme": "frontier",
    "subtheme": "image-authentication",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / image-authentication using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "039-frontier-language-guided-segmentation-evidence",
    "laneKey": "039-frontier-language-guided-segmentation",
    "laneId": "frontier-language-guided-segmentation",
    "theme": "frontier",
    "subtheme": "language-guided-segmentation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / language-guided-segmentation using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "039-frontier-language-guided-segmentation-failure",
    "laneKey": "039-frontier-language-guided-segmentation",
    "laneId": "frontier-language-guided-segmentation",
    "theme": "frontier",
    "subtheme": "language-guided-segmentation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / language-guided-segmentation using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "039-frontier-language-guided-segmentation-release",
    "laneKey": "039-frontier-language-guided-segmentation",
    "laneId": "frontier-language-guided-segmentation",
    "theme": "frontier",
    "subtheme": "language-guided-segmentation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / language-guided-segmentation using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "040-frontier-multimodal-evidence",
    "laneKey": "040-frontier-multimodal",
    "laneId": "frontier-multimodal",
    "theme": "frontier",
    "subtheme": "multimodal",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg",
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "31-45",
    "avgReadiness": 38.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / multimodal using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "040-frontier-multimodal-failure",
    "laneKey": "040-frontier-multimodal",
    "laneId": "frontier-multimodal",
    "theme": "frontier",
    "subtheme": "multimodal",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg",
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "31-45",
    "avgReadiness": 38.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / multimodal using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "040-frontier-multimodal-release",
    "laneKey": "040-frontier-multimodal",
    "laneId": "frontier-multimodal",
    "theme": "frontier",
    "subtheme": "multimodal",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg",
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "31-45",
    "avgReadiness": 38.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / multimodal using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "041-frontier-multimodal-learning-evidence",
    "laneKey": "041-frontier-multimodal-learning",
    "laneId": "frontier-multimodal-learning",
    "theme": "frontier",
    "subtheme": "multimodal learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / multimodal learning using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "041-frontier-multimodal-learning-failure",
    "laneKey": "041-frontier-multimodal-learning",
    "laneId": "frontier-multimodal-learning",
    "theme": "frontier",
    "subtheme": "multimodal learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / multimodal learning using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "041-frontier-multimodal-learning-release",
    "laneKey": "041-frontier-multimodal-learning",
    "laneId": "frontier-multimodal-learning",
    "theme": "frontier",
    "subtheme": "multimodal learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / multimodal learning using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "042-frontier-multimodal-learning-evidence",
    "laneKey": "042-frontier-multimodal-learning",
    "laneId": "frontier-multimodal-learning",
    "theme": "frontier",
    "subtheme": "multimodal-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / multimodal-learning using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "042-frontier-multimodal-learning-failure",
    "laneKey": "042-frontier-multimodal-learning",
    "laneId": "frontier-multimodal-learning",
    "theme": "frontier",
    "subtheme": "multimodal-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / multimodal-learning using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "042-frontier-multimodal-learning-release",
    "laneKey": "042-frontier-multimodal-learning",
    "laneId": "frontier-multimodal-learning",
    "theme": "frontier",
    "subtheme": "multimodal-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / multimodal-learning using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "043-frontier-open-vocabulary-segmentation-evidence",
    "laneKey": "043-frontier-open-vocabulary-segmentation",
    "laneId": "frontier-open-vocabulary-segmentation",
    "theme": "frontier",
    "subtheme": "open-vocabulary-segmentation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / open-vocabulary-segmentation using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "043-frontier-open-vocabulary-segmentation-failure",
    "laneKey": "043-frontier-open-vocabulary-segmentation",
    "laneId": "frontier-open-vocabulary-segmentation",
    "theme": "frontier",
    "subtheme": "open-vocabulary-segmentation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / open-vocabulary-segmentation using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "043-frontier-open-vocabulary-segmentation-release",
    "laneKey": "043-frontier-open-vocabulary-segmentation",
    "laneId": "frontier-open-vocabulary-segmentation",
    "theme": "frontier",
    "subtheme": "open-vocabulary-segmentation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / open-vocabulary-segmentation using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "044-frontier-optical-sar-fusion-evidence",
    "laneKey": "044-frontier-optical-sar-fusion",
    "laneId": "frontier-optical-sar-fusion",
    "theme": "frontier",
    "subtheme": "optical-sar-fusion",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / optical-sar-fusion using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "044-frontier-optical-sar-fusion-failure",
    "laneKey": "044-frontier-optical-sar-fusion",
    "laneId": "frontier-optical-sar-fusion",
    "theme": "frontier",
    "subtheme": "optical-sar-fusion",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / optical-sar-fusion using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "044-frontier-optical-sar-fusion-release",
    "laneKey": "044-frontier-optical-sar-fusion",
    "laneId": "frontier-optical-sar-fusion",
    "theme": "frontier",
    "subtheme": "optical-sar-fusion",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MM-OVSeg",
    "repoNames": [
      "MM-OVSeg"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "31-31",
    "avgReadiness": 31.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / optical-sar-fusion using MM-OVSeg and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "045-frontier-re-identification-evidence",
    "laneKey": "045-frontier-re-identification",
    "laneId": "frontier-re-identification",
    "theme": "frontier",
    "subtheme": "re-identification",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / re-identification using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "045-frontier-re-identification-failure",
    "laneKey": "045-frontier-re-identification",
    "laneId": "frontier-re-identification",
    "theme": "frontier",
    "subtheme": "re-identification",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / re-identification using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "045-frontier-re-identification-release",
    "laneKey": "045-frontier-re-identification",
    "laneId": "frontier-re-identification",
    "theme": "frontier",
    "subtheme": "re-identification",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / re-identification using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "046-frontier-remote-sensing-evidence",
    "laneKey": "046-frontier-remote-sensing",
    "laneId": "frontier-remote-sensing",
    "theme": "frontier",
    "subtheme": "remote sensing",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / remote sensing using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "046-frontier-remote-sensing-failure",
    "laneKey": "046-frontier-remote-sensing",
    "laneId": "frontier-remote-sensing",
    "theme": "frontier",
    "subtheme": "remote sensing",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / remote sensing using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "046-frontier-remote-sensing-release",
    "laneKey": "046-frontier-remote-sensing",
    "laneId": "frontier-remote-sensing",
    "theme": "frontier",
    "subtheme": "remote sensing",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MOS",
    "repoNames": [
      "MOS"
    ],
    "demoPage": "cvpr-frontier-mos-deep-viewer.html",
    "deepViewerPage": "cvpr-frontier-mos-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / remote sensing using MOS and cvpr-frontier-mos-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "047-frontier-remote-sensing-evidence",
    "laneKey": "047-frontier-remote-sensing",
    "laneId": "frontier-remote-sensing",
    "theme": "frontier",
    "subtheme": "remote-sensing",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 3,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2",
      "MM-OVSeg",
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth",
      "second"
    ],
    "artifacts": 9,
    "controls": 15,
    "readinessBand": "31-47",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / remote-sensing using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "047-frontier-remote-sensing-failure",
    "laneKey": "047-frontier-remote-sensing",
    "laneId": "frontier-remote-sensing",
    "theme": "frontier",
    "subtheme": "remote-sensing",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 3,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2",
      "MM-OVSeg",
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth",
      "second"
    ],
    "artifacts": 9,
    "controls": 15,
    "readinessBand": "31-47",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / remote-sensing using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "047-frontier-remote-sensing-release",
    "laneKey": "047-frontier-remote-sensing",
    "laneId": "frontier-remote-sensing",
    "theme": "frontier",
    "subtheme": "remote-sensing",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 3,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2",
      "MM-OVSeg",
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth",
      "second"
    ],
    "artifacts": 9,
    "controls": 15,
    "readinessBand": "31-47",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / remote-sensing using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "048-frontier-security-evidence",
    "laneKey": "048-frontier-security",
    "laneId": "frontier-security",
    "theme": "frontier",
    "subtheme": "security",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / security using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "048-frontier-security-failure",
    "laneKey": "048-frontier-security",
    "laneId": "frontier-security",
    "theme": "frontier",
    "subtheme": "security",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / security using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "048-frontier-security-release",
    "laneKey": "048-frontier-security",
    "laneId": "frontier-security",
    "theme": "frontier",
    "subtheme": "security",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / security using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "049-frontier-spatial-grounding-evidence",
    "laneKey": "049-frontier-spatial-grounding",
    "laneId": "frontier-spatial-grounding",
    "theme": "frontier",
    "subtheme": "spatial-grounding",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / spatial-grounding using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "049-frontier-spatial-grounding-failure",
    "laneKey": "049-frontier-spatial-grounding",
    "laneId": "frontier-spatial-grounding",
    "theme": "frontier",
    "subtheme": "spatial-grounding",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / spatial-grounding using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "049-frontier-spatial-grounding-release",
    "laneKey": "049-frontier-spatial-grounding",
    "laneId": "frontier-spatial-grounding",
    "theme": "frontier",
    "subtheme": "spatial-grounding",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "SegEarth-R2",
    "repoNames": [
      "SegEarth-R2"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / spatial-grounding using SegEarth-R2 and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "050-frontier-transformer-evidence",
    "laneKey": "050-frontier-transformer",
    "laneId": "frontier-transformer",
    "theme": "frontier",
    "subtheme": "transformer",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / transformer using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "050-frontier-transformer-failure",
    "laneKey": "050-frontier-transformer",
    "laneId": "frontier-transformer",
    "theme": "frontier",
    "subtheme": "transformer",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / transformer using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "050-frontier-transformer-release",
    "laneKey": "050-frontier-transformer",
    "laneId": "frontier-transformer",
    "theme": "frontier",
    "subtheme": "transformer",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GeoVis",
    "repoNames": [
      "GeoVis"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / transformer using GeoVis and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "051-frontier-view-synthesis-evidence",
    "laneKey": "051-frontier-view-synthesis",
    "laneId": "frontier-view-synthesis",
    "theme": "frontier",
    "subtheme": "view-synthesis",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / view-synthesis using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "051-frontier-view-synthesis-failure",
    "laneKey": "051-frontier-view-synthesis",
    "laneId": "frontier-view-synthesis",
    "theme": "frontier",
    "subtheme": "view-synthesis",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / view-synthesis using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "051-frontier-view-synthesis-release",
    "laneKey": "051-frontier-view-synthesis",
    "laneId": "frontier-view-synthesis",
    "theme": "frontier",
    "subtheme": "view-synthesis",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / view-synthesis using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "052-frontier-watermark-removal-evidence",
    "laneKey": "052-frontier-watermark-removal",
    "laneId": "frontier-watermark-removal",
    "theme": "frontier",
    "subtheme": "watermark-removal",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for frontier / watermark-removal using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "052-frontier-watermark-removal-failure",
    "laneKey": "052-frontier-watermark-removal",
    "laneId": "frontier-watermark-removal",
    "theme": "frontier",
    "subtheme": "watermark-removal",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for frontier / watermark-removal using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "052-frontier-watermark-removal-release",
    "laneKey": "052-frontier-watermark-removal",
    "laneId": "frontier-watermark-removal",
    "theme": "frontier",
    "subtheme": "watermark-removal",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "raven-",
    "repoNames": [
      "raven-"
    ],
    "demoPage": "cvpr-frontier-sensor-fusion-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "44-44",
    "avgReadiness": 44.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for frontier / watermark-removal using raven- and cvpr-frontier-sensor-fusion-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "053-generation-adaptive-processing-evidence",
    "laneKey": "053-generation-adaptive-processing",
    "laneId": "generation-adaptive-processing",
    "theme": "generation",
    "subtheme": "adaptive-processing",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / adaptive-processing using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "053-generation-adaptive-processing-failure",
    "laneKey": "053-generation-adaptive-processing",
    "laneId": "generation-adaptive-processing",
    "theme": "generation",
    "subtheme": "adaptive-processing",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / adaptive-processing using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "053-generation-adaptive-processing-release",
    "laneKey": "053-generation-adaptive-processing",
    "laneId": "generation-adaptive-processing",
    "theme": "generation",
    "subtheme": "adaptive-processing",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / adaptive-processing using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "054-generation-deblurring-evidence",
    "laneKey": "054-generation-deblurring",
    "laneId": "generation-deblurring",
    "theme": "generation",
    "subtheme": "deblurring",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB",
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "38-40",
    "avgReadiness": 39.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / deblurring using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "054-generation-deblurring-failure",
    "laneKey": "054-generation-deblurring",
    "laneId": "generation-deblurring",
    "theme": "generation",
    "subtheme": "deblurring",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB",
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "38-40",
    "avgReadiness": 39.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / deblurring using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "054-generation-deblurring-release",
    "laneKey": "054-generation-deblurring",
    "laneId": "generation-deblurring",
    "theme": "generation",
    "subtheme": "deblurring",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB",
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "38-40",
    "avgReadiness": 39.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / deblurring using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "055-generation-deraining-evidence",
    "laneKey": "055-generation-deraining",
    "laneId": "generation-deraining",
    "theme": "generation",
    "subtheme": "deraining",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / deraining using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "055-generation-deraining-failure",
    "laneKey": "055-generation-deraining",
    "laneId": "generation-deraining",
    "theme": "generation",
    "subtheme": "deraining",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / deraining using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "055-generation-deraining-release",
    "laneKey": "055-generation-deraining",
    "laneId": "generation-deraining",
    "theme": "generation",
    "subtheme": "deraining",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / deraining using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "056-generation-deshading-evidence",
    "laneKey": "056-generation-deshading",
    "laneId": "generation-deshading",
    "theme": "generation",
    "subtheme": "deshading",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / deshading using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "056-generation-deshading-failure",
    "laneKey": "056-generation-deshading",
    "laneId": "generation-deshading",
    "theme": "generation",
    "subtheme": "deshading",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / deshading using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "056-generation-deshading-release",
    "laneKey": "056-generation-deshading",
    "laneId": "generation-deshading",
    "theme": "generation",
    "subtheme": "deshading",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / deshading using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "057-generation-diffusion-evidence",
    "laneKey": "057-generation-diffusion",
    "laneId": "generation-diffusion",
    "theme": "generation",
    "subtheme": "diffusion",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-40",
    "avgReadiness": 38.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / diffusion using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "057-generation-diffusion-failure",
    "laneKey": "057-generation-diffusion",
    "laneId": "generation-diffusion",
    "theme": "generation",
    "subtheme": "diffusion",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-40",
    "avgReadiness": 38.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / diffusion using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "057-generation-diffusion-release",
    "laneKey": "057-generation-diffusion",
    "laneId": "generation-diffusion",
    "theme": "generation",
    "subtheme": "diffusion",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-40",
    "avgReadiness": 38.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / diffusion using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "058-generation-diffusion-models-evidence",
    "laneKey": "058-generation-diffusion-models",
    "laneId": "generation-diffusion-models",
    "theme": "generation",
    "subtheme": "diffusion models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / diffusion models using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "058-generation-diffusion-models-failure",
    "laneKey": "058-generation-diffusion-models",
    "laneId": "generation-diffusion-models",
    "theme": "generation",
    "subtheme": "diffusion models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / diffusion models using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "058-generation-diffusion-models-release",
    "laneKey": "058-generation-diffusion-models",
    "laneId": "generation-diffusion-models",
    "theme": "generation",
    "subtheme": "diffusion models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / diffusion models using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "059-generation-diffusion-bridge-evidence",
    "laneKey": "059-generation-diffusion-bridge",
    "laneId": "generation-diffusion-bridge",
    "theme": "generation",
    "subtheme": "diffusion-bridge",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "40-40",
    "avgReadiness": 40.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / diffusion-bridge using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "059-generation-diffusion-bridge-failure",
    "laneKey": "059-generation-diffusion-bridge",
    "laneId": "generation-diffusion-bridge",
    "theme": "generation",
    "subtheme": "diffusion-bridge",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "40-40",
    "avgReadiness": 40.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / diffusion-bridge using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "059-generation-diffusion-bridge-release",
    "laneKey": "059-generation-diffusion-bridge",
    "laneId": "generation-diffusion-bridge",
    "theme": "generation",
    "subtheme": "diffusion-bridge",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "40-40",
    "avgReadiness": 40.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / diffusion-bridge using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "060-generation-diffusion-models-evidence",
    "laneKey": "060-generation-diffusion-models",
    "laneId": "generation-diffusion-models",
    "theme": "generation",
    "subtheme": "diffusion-models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM",
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "33-38",
    "avgReadiness": 35.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / diffusion-models using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "060-generation-diffusion-models-failure",
    "laneKey": "060-generation-diffusion-models",
    "laneId": "generation-diffusion-models",
    "theme": "generation",
    "subtheme": "diffusion-models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM",
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "33-38",
    "avgReadiness": 35.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / diffusion-models using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "060-generation-diffusion-models-release",
    "laneKey": "060-generation-diffusion-models",
    "laneId": "generation-diffusion-models",
    "theme": "generation",
    "subtheme": "diffusion-models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM",
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "33-38",
    "avgReadiness": 35.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / diffusion-models using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "061-generation-dpo-evidence",
    "laneKey": "061-generation-dpo",
    "laneId": "generation-dpo",
    "theme": "generation",
    "subtheme": "dpo",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / dpo using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "061-generation-dpo-failure",
    "laneKey": "061-generation-dpo",
    "laneId": "generation-dpo",
    "theme": "generation",
    "subtheme": "dpo",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / dpo using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "061-generation-dpo-release",
    "laneKey": "061-generation-dpo",
    "laneId": "generation-dpo",
    "theme": "generation",
    "subtheme": "dpo",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / dpo using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "062-generation-fidelity-perceptual-tradeoff-evidence",
    "laneKey": "062-generation-fidelity-perceptual-tradeoff",
    "laneId": "generation-fidelity-perceptual-tradeoff",
    "theme": "generation",
    "subtheme": "fidelity-perceptual tradeoff",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / fidelity-perceptual tradeoff using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "062-generation-fidelity-perceptual-tradeoff-failure",
    "laneKey": "062-generation-fidelity-perceptual-tradeoff",
    "laneId": "generation-fidelity-perceptual-tradeoff",
    "theme": "generation",
    "subtheme": "fidelity-perceptual tradeoff",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / fidelity-perceptual tradeoff using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "062-generation-fidelity-perceptual-tradeoff-release",
    "laneKey": "062-generation-fidelity-perceptual-tradeoff",
    "laneId": "generation-fidelity-perceptual-tradeoff",
    "theme": "generation",
    "subtheme": "fidelity-perceptual tradeoff",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / fidelity-perceptual tradeoff using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "063-generation-grpo-evidence",
    "laneKey": "063-generation-grpo",
    "laneId": "generation-grpo",
    "theme": "generation",
    "subtheme": "grpo",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / grpo using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "063-generation-grpo-failure",
    "laneKey": "063-generation-grpo",
    "laneId": "generation-grpo",
    "theme": "generation",
    "subtheme": "grpo",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / grpo using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "063-generation-grpo-release",
    "laneKey": "063-generation-grpo",
    "laneId": "generation-grpo",
    "theme": "generation",
    "subtheme": "grpo",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / grpo using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "064-generation-image-super-resolution-evidence",
    "laneKey": "064-generation-image-super-resolution",
    "laneId": "generation-image-super-resolution",
    "theme": "generation",
    "subtheme": "image super-resolution",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / image super-resolution using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "064-generation-image-super-resolution-failure",
    "laneKey": "064-generation-image-super-resolution",
    "laneId": "generation-image-super-resolution",
    "theme": "generation",
    "subtheme": "image super-resolution",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / image super-resolution using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "064-generation-image-super-resolution-release",
    "laneKey": "064-generation-image-super-resolution",
    "laneId": "generation-image-super-resolution",
    "theme": "generation",
    "subtheme": "image super-resolution",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / image super-resolution using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "065-generation-image-restoration-evidence",
    "laneKey": "065-generation-image-restoration",
    "laneId": "generation-image-restoration",
    "theme": "generation",
    "subtheme": "image-restoration",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 4,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB",
      "LRDM",
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "fifth",
      "first",
      "fourth",
      "third"
    ],
    "artifacts": 12,
    "controls": 20,
    "readinessBand": "33-40",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / image-restoration using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "065-generation-image-restoration-failure",
    "laneKey": "065-generation-image-restoration",
    "laneId": "generation-image-restoration",
    "theme": "generation",
    "subtheme": "image-restoration",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 4,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB",
      "LRDM",
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "fifth",
      "first",
      "fourth",
      "third"
    ],
    "artifacts": 12,
    "controls": 20,
    "readinessBand": "33-40",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / image-restoration using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "065-generation-image-restoration-release",
    "laneKey": "065-generation-image-restoration",
    "laneId": "generation-image-restoration",
    "theme": "generation",
    "subtheme": "image-restoration",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 4,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB",
      "LRDM",
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "fifth",
      "first",
      "fourth",
      "third"
    ],
    "artifacts": 12,
    "controls": 20,
    "readinessBand": "33-40",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / image-restoration using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "066-generation-low-level-vision-evidence",
    "laneKey": "066-generation-low-level-vision",
    "laneId": "generation-low-level-vision",
    "theme": "generation",
    "subtheme": "low-level vision",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / low-level vision using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "066-generation-low-level-vision-failure",
    "laneKey": "066-generation-low-level-vision",
    "laneId": "generation-low-level-vision",
    "theme": "generation",
    "subtheme": "low-level vision",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / low-level vision using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "066-generation-low-level-vision-release",
    "laneKey": "066-generation-low-level-vision",
    "laneId": "generation-low-level-vision",
    "theme": "generation",
    "subtheme": "low-level vision",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / low-level vision using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "067-generation-low-rank-evidence",
    "laneKey": "067-generation-low-rank",
    "laneId": "generation-low-rank",
    "theme": "generation",
    "subtheme": "low-rank",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / low-rank using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "067-generation-low-rank-failure",
    "laneKey": "067-generation-low-rank",
    "laneId": "generation-low-rank",
    "theme": "generation",
    "subtheme": "low-rank",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / low-rank using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "067-generation-low-rank-release",
    "laneKey": "067-generation-low-rank",
    "laneId": "generation-low-rank",
    "theme": "generation",
    "subtheme": "low-rank",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "LRDM",
    "repoNames": [
      "LRDM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "38-38",
    "avgReadiness": 38.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / low-rank using LRDM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "068-generation-one-step-inference-evidence",
    "laneKey": "068-generation-one-step-inference",
    "laneId": "generation-one-step-inference",
    "theme": "generation",
    "subtheme": "one-step inference",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / one-step inference using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "068-generation-one-step-inference-failure",
    "laneKey": "068-generation-one-step-inference",
    "laneId": "generation-one-step-inference",
    "theme": "generation",
    "subtheme": "one-step inference",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / one-step inference using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "068-generation-one-step-inference-release",
    "laneKey": "068-generation-one-step-inference",
    "laneId": "generation-one-step-inference",
    "theme": "generation",
    "subtheme": "one-step inference",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / one-step inference using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "069-generation-reinforcement-learning-evidence",
    "laneKey": "069-generation-reinforcement-learning",
    "laneId": "generation-reinforcement-learning",
    "theme": "generation",
    "subtheme": "reinforcement-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / reinforcement-learning using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "069-generation-reinforcement-learning-failure",
    "laneKey": "069-generation-reinforcement-learning",
    "laneId": "generation-reinforcement-learning",
    "theme": "generation",
    "subtheme": "reinforcement-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / reinforcement-learning using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "069-generation-reinforcement-learning-release",
    "laneKey": "069-generation-reinforcement-learning",
    "laneId": "generation-reinforcement-learning",
    "theme": "generation",
    "subtheme": "reinforcement-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO"
    ],
    "demoPage": "cvpr-generation-gdpo-deep-viewer.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / reinforcement-learning using GDPO and cvpr-generation-gdpo-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "070-generation-residual-learning-evidence",
    "laneKey": "070-generation-residual-learning",
    "laneId": "generation-residual-learning",
    "theme": "generation",
    "subtheme": "residual-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / residual-learning using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "070-generation-residual-learning-failure",
    "laneKey": "070-generation-residual-learning",
    "laneId": "generation-residual-learning",
    "theme": "generation",
    "subtheme": "residual-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / residual-learning using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "070-generation-residual-learning-release",
    "laneKey": "070-generation-residual-learning",
    "laneId": "generation-residual-learning",
    "theme": "generation",
    "subtheme": "residual-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / residual-learning using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "071-generation-stochastic-differential-equations-evidence",
    "laneKey": "071-generation-stochastic-differential-equations",
    "laneId": "generation-stochastic-differential-equations",
    "theme": "generation",
    "subtheme": "stochastic-differential-equations",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / stochastic-differential-equations using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "071-generation-stochastic-differential-equations-failure",
    "laneKey": "071-generation-stochastic-differential-equations",
    "laneId": "generation-stochastic-differential-equations",
    "theme": "generation",
    "subtheme": "stochastic-differential-equations",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / stochastic-differential-equations using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "071-generation-stochastic-differential-equations-release",
    "laneKey": "071-generation-stochastic-differential-equations",
    "laneId": "generation-stochastic-differential-equations",
    "theme": "generation",
    "subtheme": "stochastic-differential-equations",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / stochastic-differential-equations using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "072-generation-stochastic-interpolant-evidence",
    "laneKey": "072-generation-stochastic-interpolant",
    "laneId": "generation-stochastic-interpolant",
    "theme": "generation",
    "subtheme": "stochastic-interpolant",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "40-40",
    "avgReadiness": 40.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / stochastic-interpolant using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "072-generation-stochastic-interpolant-failure",
    "laneKey": "072-generation-stochastic-interpolant",
    "laneId": "generation-stochastic-interpolant",
    "theme": "generation",
    "subtheme": "stochastic-interpolant",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "40-40",
    "avgReadiness": 40.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / stochastic-interpolant using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "072-generation-stochastic-interpolant-release",
    "laneKey": "072-generation-stochastic-interpolant",
    "laneId": "generation-stochastic-interpolant",
    "theme": "generation",
    "subtheme": "stochastic-interpolant",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NADB",
    "repoNames": [
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "40-40",
    "avgReadiness": 40.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / stochastic-interpolant using NADB and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "073-generation-super-resolution-evidence",
    "laneKey": "073-generation-super-resolution",
    "laneId": "generation-super-resolution",
    "theme": "generation",
    "subtheme": "super-resolution",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-40",
    "avgReadiness": 38.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / super-resolution using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "073-generation-super-resolution-failure",
    "laneKey": "073-generation-super-resolution",
    "laneId": "generation-super-resolution",
    "theme": "generation",
    "subtheme": "super-resolution",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-40",
    "avgReadiness": 38.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / super-resolution using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "073-generation-super-resolution-release",
    "laneKey": "073-generation-super-resolution",
    "laneId": "generation-super-resolution",
    "theme": "generation",
    "subtheme": "super-resolution",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "GDPO",
    "repoNames": [
      "GDPO",
      "NADB"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "cvpr-generation-gdpo-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-40",
    "avgReadiness": 38.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / super-resolution using GDPO and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "074-generation-text-guided-generation-evidence",
    "laneKey": "074-generation-text-guided-generation",
    "laneId": "generation-text-guided-generation",
    "theme": "generation",
    "subtheme": "text-guided generation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / text-guided generation using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "074-generation-text-guided-generation-failure",
    "laneKey": "074-generation-text-guided-generation",
    "laneId": "generation-text-guided-generation",
    "theme": "generation",
    "subtheme": "text-guided generation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / text-guided generation using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "074-generation-text-guided-generation-release",
    "laneKey": "074-generation-text-guided-generation",
    "laneId": "generation-text-guided-generation",
    "theme": "generation",
    "subtheme": "text-guided generation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "CODSR",
    "repoNames": [
      "CODSR"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / text-guided generation using CODSR and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "075-generation-universal-restoration-evidence",
    "laneKey": "075-generation-universal-restoration",
    "laneId": "generation-universal-restoration",
    "theme": "generation",
    "subtheme": "universal-restoration",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for generation / universal-restoration using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "075-generation-universal-restoration-failure",
    "laneKey": "075-generation-universal-restoration",
    "laneId": "generation-universal-restoration",
    "theme": "generation",
    "subtheme": "universal-restoration",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for generation / universal-restoration using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "075-generation-universal-restoration-release",
    "laneKey": "075-generation-universal-restoration",
    "laneId": "generation-universal-restoration",
    "theme": "generation",
    "subtheme": "universal-restoration",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "RDBM",
    "repoNames": [
      "RDBM"
    ],
    "demoPage": "cvpr-generation-control-repo-studio.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "33-33",
    "avgReadiness": 33.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for generation / universal-restoration using RDBM and cvpr-generation-control-repo-studio.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "076-learning-bayesian-inference-evidence",
    "laneKey": "076-learning-bayesian-inference",
    "laneId": "learning-bayesian-inference",
    "theme": "learning",
    "subtheme": "bayesian-inference",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / bayesian-inference using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "076-learning-bayesian-inference-failure",
    "laneKey": "076-learning-bayesian-inference",
    "laneId": "learning-bayesian-inference",
    "theme": "learning",
    "subtheme": "bayesian-inference",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / bayesian-inference using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "076-learning-bayesian-inference-release",
    "laneKey": "076-learning-bayesian-inference",
    "laneId": "learning-bayesian-inference",
    "theme": "learning",
    "subtheme": "bayesian-inference",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / bayesian-inference using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "077-learning-class-incremental-evidence",
    "laneKey": "077-learning-class-incremental",
    "laneId": "learning-class-incremental",
    "theme": "learning",
    "subtheme": "class-incremental",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / class-incremental using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "077-learning-class-incremental-failure",
    "laneKey": "077-learning-class-incremental",
    "laneId": "learning-class-incremental",
    "theme": "learning",
    "subtheme": "class-incremental",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / class-incremental using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "077-learning-class-incremental-release",
    "laneKey": "077-learning-class-incremental",
    "laneId": "learning-class-incremental",
    "theme": "learning",
    "subtheme": "class-incremental",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / class-incremental using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "078-learning-continual-learning-evidence",
    "laneKey": "078-learning-continual-learning",
    "laneId": "learning-continual-learning",
    "theme": "learning",
    "subtheme": "continual-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-43",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / continual-learning using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "078-learning-continual-learning-failure",
    "laneKey": "078-learning-continual-learning",
    "laneId": "learning-continual-learning",
    "theme": "learning",
    "subtheme": "continual-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-43",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / continual-learning using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "078-learning-continual-learning-release",
    "laneKey": "078-learning-continual-learning",
    "laneId": "learning-continual-learning",
    "theme": "learning",
    "subtheme": "continual-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-43",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / continual-learning using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "079-learning-domain-adaptation-evidence",
    "laneKey": "079-learning-domain-adaptation",
    "laneId": "learning-domain-adaptation",
    "theme": "learning",
    "subtheme": "domain-adaptation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-45",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / domain-adaptation using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "079-learning-domain-adaptation-failure",
    "laneKey": "079-learning-domain-adaptation",
    "laneId": "learning-domain-adaptation",
    "theme": "learning",
    "subtheme": "domain-adaptation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-45",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / domain-adaptation using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "079-learning-domain-adaptation-release",
    "laneKey": "079-learning-domain-adaptation",
    "laneId": "learning-domain-adaptation",
    "theme": "learning",
    "subtheme": "domain-adaptation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-45",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / domain-adaptation using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "080-learning-dynamic-architecture-evidence",
    "laneKey": "080-learning-dynamic-architecture",
    "laneId": "learning-dynamic-architecture",
    "theme": "learning",
    "subtheme": "dynamic-architecture",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / dynamic-architecture using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "080-learning-dynamic-architecture-failure",
    "laneKey": "080-learning-dynamic-architecture",
    "laneId": "learning-dynamic-architecture",
    "theme": "learning",
    "subtheme": "dynamic-architecture",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / dynamic-architecture using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "080-learning-dynamic-architecture-release",
    "laneKey": "080-learning-dynamic-architecture",
    "laneId": "learning-dynamic-architecture",
    "theme": "learning",
    "subtheme": "dynamic-architecture",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / dynamic-architecture using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "081-learning-edge-devices-evidence",
    "laneKey": "081-learning-edge-devices",
    "laneId": "learning-edge-devices",
    "theme": "learning",
    "subtheme": "edge devices",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / edge devices using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "081-learning-edge-devices-failure",
    "laneKey": "081-learning-edge-devices",
    "laneId": "learning-edge-devices",
    "theme": "learning",
    "subtheme": "edge devices",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / edge devices using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "081-learning-edge-devices-release",
    "laneKey": "081-learning-edge-devices",
    "laneId": "learning-edge-devices",
    "theme": "learning",
    "subtheme": "edge devices",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / edge devices using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "082-learning-federated-learning-evidence",
    "laneKey": "082-learning-federated-learning",
    "laneId": "learning-federated-learning",
    "theme": "learning",
    "subtheme": "federated-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / federated-learning using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "082-learning-federated-learning-failure",
    "laneKey": "082-learning-federated-learning",
    "laneId": "learning-federated-learning",
    "theme": "learning",
    "subtheme": "federated-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / federated-learning using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "082-learning-federated-learning-release",
    "laneKey": "082-learning-federated-learning",
    "laneId": "learning-federated-learning",
    "theme": "learning",
    "subtheme": "federated-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / federated-learning using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "083-learning-forward-only-learning-evidence",
    "laneKey": "083-learning-forward-only-learning",
    "laneId": "learning-forward-only-learning",
    "theme": "learning",
    "subtheme": "forward-only-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / forward-only-learning using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "083-learning-forward-only-learning-failure",
    "laneKey": "083-learning-forward-only-learning",
    "laneId": "learning-forward-only-learning",
    "theme": "learning",
    "subtheme": "forward-only-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / forward-only-learning using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "083-learning-forward-only-learning-release",
    "laneKey": "083-learning-forward-only-learning",
    "laneId": "learning-forward-only-learning",
    "theme": "learning",
    "subtheme": "forward-only-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / forward-only-learning using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "084-learning-interpretability-evidence",
    "laneKey": "084-learning-interpretability",
    "laneId": "learning-interpretability",
    "theme": "learning",
    "subtheme": "interpretability",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / interpretability using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "084-learning-interpretability-failure",
    "laneKey": "084-learning-interpretability",
    "laneId": "learning-interpretability",
    "theme": "learning",
    "subtheme": "interpretability",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / interpretability using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "084-learning-interpretability-release",
    "laneKey": "084-learning-interpretability",
    "laneId": "learning-interpretability",
    "theme": "learning",
    "subtheme": "interpretability",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / interpretability using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "085-learning-knowledge-distillation-evidence",
    "laneKey": "085-learning-knowledge-distillation",
    "laneId": "learning-knowledge-distillation",
    "theme": "learning",
    "subtheme": "knowledge distillation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / knowledge distillation using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "085-learning-knowledge-distillation-failure",
    "laneKey": "085-learning-knowledge-distillation",
    "laneId": "learning-knowledge-distillation",
    "theme": "learning",
    "subtheme": "knowledge distillation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / knowledge distillation using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "085-learning-knowledge-distillation-release",
    "laneKey": "085-learning-knowledge-distillation",
    "laneId": "learning-knowledge-distillation",
    "theme": "learning",
    "subtheme": "knowledge distillation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / knowledge distillation using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "086-learning-model-compression-evidence",
    "laneKey": "086-learning-model-compression",
    "laneId": "learning-model-compression",
    "theme": "learning",
    "subtheme": "model compression",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / model compression using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "086-learning-model-compression-failure",
    "laneKey": "086-learning-model-compression",
    "laneId": "learning-model-compression",
    "theme": "learning",
    "subtheme": "model compression",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / model compression using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "086-learning-model-compression-release",
    "laneKey": "086-learning-model-compression",
    "laneId": "learning-model-compression",
    "theme": "learning",
    "subtheme": "model compression",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / model compression using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "087-learning-model-compression-evidence",
    "laneKey": "087-learning-model-compression",
    "laneId": "learning-model-compression",
    "theme": "learning",
    "subtheme": "model-compression",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / model-compression using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "087-learning-model-compression-failure",
    "laneKey": "087-learning-model-compression",
    "laneId": "learning-model-compression",
    "theme": "learning",
    "subtheme": "model-compression",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / model-compression using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "087-learning-model-compression-release",
    "laneKey": "087-learning-model-compression",
    "laneId": "learning-model-compression",
    "theme": "learning",
    "subtheme": "model-compression",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / model-compression using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "088-learning-network-pruning-evidence",
    "laneKey": "088-learning-network-pruning",
    "laneId": "learning-network-pruning",
    "theme": "learning",
    "subtheme": "network-pruning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / network-pruning using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "088-learning-network-pruning-failure",
    "laneKey": "088-learning-network-pruning",
    "laneId": "learning-network-pruning",
    "theme": "learning",
    "subtheme": "network-pruning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / network-pruning using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "088-learning-network-pruning-release",
    "laneKey": "088-learning-network-pruning",
    "laneId": "learning-network-pruning",
    "theme": "learning",
    "subtheme": "network-pruning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / network-pruning using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "089-learning-neural-architecture-search-evidence",
    "laneKey": "089-learning-neural-architecture-search",
    "laneId": "learning-neural-architecture-search",
    "theme": "learning",
    "subtheme": "neural-architecture-search",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / neural-architecture-search using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "089-learning-neural-architecture-search-failure",
    "laneKey": "089-learning-neural-architecture-search",
    "laneId": "learning-neural-architecture-search",
    "theme": "learning",
    "subtheme": "neural-architecture-search",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / neural-architecture-search using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "089-learning-neural-architecture-search-release",
    "laneKey": "089-learning-neural-architecture-search",
    "laneId": "learning-neural-architecture-search",
    "theme": "learning",
    "subtheme": "neural-architecture-search",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / neural-architecture-search using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "090-learning-prompt-tuning-evidence",
    "laneKey": "090-learning-prompt-tuning",
    "laneId": "learning-prompt-tuning",
    "theme": "learning",
    "subtheme": "prompt-tuning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / prompt-tuning using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "090-learning-prompt-tuning-failure",
    "laneKey": "090-learning-prompt-tuning",
    "laneId": "learning-prompt-tuning",
    "theme": "learning",
    "subtheme": "prompt-tuning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / prompt-tuning using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "090-learning-prompt-tuning-release",
    "laneKey": "090-learning-prompt-tuning",
    "laneId": "learning-prompt-tuning",
    "theme": "learning",
    "subtheme": "prompt-tuning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / prompt-tuning using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "091-learning-pruning-evidence",
    "laneKey": "091-learning-pruning",
    "laneId": "learning-pruning",
    "theme": "learning",
    "subtheme": "pruning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / pruning using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "091-learning-pruning-failure",
    "laneKey": "091-learning-pruning",
    "laneId": "learning-pruning",
    "theme": "learning",
    "subtheme": "pruning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / pruning using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "091-learning-pruning-release",
    "laneKey": "091-learning-pruning",
    "laneId": "learning-pruning",
    "theme": "learning",
    "subtheme": "pruning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / pruning using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "092-learning-structured-pruning-evidence",
    "laneKey": "092-learning-structured-pruning",
    "laneId": "learning-structured-pruning",
    "theme": "learning",
    "subtheme": "structured pruning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / structured pruning using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "092-learning-structured-pruning-failure",
    "laneKey": "092-learning-structured-pruning",
    "laneId": "learning-structured-pruning",
    "theme": "learning",
    "subtheme": "structured pruning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / structured pruning using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "092-learning-structured-pruning-release",
    "laneKey": "092-learning-structured-pruning",
    "laneId": "learning-structured-pruning",
    "theme": "learning",
    "subtheme": "structured pruning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / structured pruning using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "093-learning-task-adaptation-evidence",
    "laneKey": "093-learning-task-adaptation",
    "laneId": "learning-task-adaptation",
    "theme": "learning",
    "subtheme": "task-adaptation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / task-adaptation using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "093-learning-task-adaptation-failure",
    "laneKey": "093-learning-task-adaptation",
    "laneId": "learning-task-adaptation",
    "theme": "learning",
    "subtheme": "task-adaptation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / task-adaptation using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "093-learning-task-adaptation-release",
    "laneKey": "093-learning-task-adaptation",
    "laneId": "learning-task-adaptation",
    "theme": "learning",
    "subtheme": "task-adaptation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "cheem",
    "repoNames": [
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / task-adaptation using cheem and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "094-learning-test-time-adaptation-evidence",
    "laneKey": "094-learning-test-time-adaptation",
    "laneId": "learning-test-time-adaptation",
    "theme": "learning",
    "subtheme": "test-time-adaptation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-45",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / test-time-adaptation using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "094-learning-test-time-adaptation-failure",
    "laneKey": "094-learning-test-time-adaptation",
    "laneId": "learning-test-time-adaptation",
    "theme": "learning",
    "subtheme": "test-time-adaptation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-45",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / test-time-adaptation using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "094-learning-test-time-adaptation-release",
    "laneKey": "094-learning-test-time-adaptation",
    "laneId": "learning-test-time-adaptation",
    "theme": "learning",
    "subtheme": "test-time-adaptation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO",
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "39-45",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / test-time-adaptation using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "095-learning-token-analysis-evidence",
    "laneKey": "095-learning-token-analysis",
    "laneId": "learning-token-analysis",
    "theme": "learning",
    "subtheme": "token-analysis",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / token-analysis using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "095-learning-token-analysis-failure",
    "laneKey": "095-learning-token-analysis",
    "laneId": "learning-token-analysis",
    "theme": "learning",
    "subtheme": "token-analysis",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / token-analysis using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "095-learning-token-analysis-release",
    "laneKey": "095-learning-token-analysis",
    "laneId": "learning-token-analysis",
    "theme": "learning",
    "subtheme": "token-analysis",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens"
    ],
    "demoPage": "cvpr-learning-embedlens-deep-viewer.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / token-analysis using EmbedLens and cvpr-learning-embedlens-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "096-learning-uncertainty-quantification-evidence",
    "laneKey": "096-learning-uncertainty-quantification",
    "laneId": "learning-uncertainty-quantification",
    "theme": "learning",
    "subtheme": "uncertainty-quantification",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / uncertainty-quantification using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "096-learning-uncertainty-quantification-failure",
    "laneKey": "096-learning-uncertainty-quantification",
    "laneId": "learning-uncertainty-quantification",
    "theme": "learning",
    "subtheme": "uncertainty-quantification",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / uncertainty-quantification using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "096-learning-uncertainty-quantification-release",
    "laneKey": "096-learning-uncertainty-quantification",
    "laneId": "learning-uncertainty-quantification",
    "theme": "learning",
    "subtheme": "uncertainty-quantification",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "BPFedCTTA",
    "repoNames": [
      "BPFedCTTA"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "39-39",
    "avgReadiness": 39.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / uncertainty-quantification using BPFedCTTA and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "097-learning-vision-transformer-evidence",
    "laneKey": "097-learning-vision-transformer",
    "laneId": "learning-vision-transformer",
    "theme": "learning",
    "subtheme": "vision transformer",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / vision transformer using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "097-learning-vision-transformer-failure",
    "laneKey": "097-learning-vision-transformer",
    "laneId": "learning-vision-transformer",
    "theme": "learning",
    "subtheme": "vision transformer",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / vision transformer using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "097-learning-vision-transformer-release",
    "laneKey": "097-learning-vision-transformer",
    "laneId": "learning-vision-transformer",
    "theme": "learning",
    "subtheme": "vision transformer",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "NuWa",
    "repoNames": [
      "NuWa"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / vision transformer using NuWa and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "098-learning-vision-transformer-evidence",
    "laneKey": "098-learning-vision-transformer",
    "laneId": "learning-vision-transformer",
    "theme": "learning",
    "subtheme": "vision-transformer",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / vision-transformer using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "098-learning-vision-transformer-failure",
    "laneKey": "098-learning-vision-transformer",
    "laneId": "learning-vision-transformer",
    "theme": "learning",
    "subtheme": "vision-transformer",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / vision-transformer using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "098-learning-vision-transformer-release",
    "laneKey": "098-learning-vision-transformer",
    "laneId": "learning-vision-transformer",
    "theme": "learning",
    "subtheme": "vision-transformer",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / vision-transformer using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "099-learning-vision-transformers-evidence",
    "laneKey": "099-learning-vision-transformers",
    "laneId": "learning-vision-transformers",
    "theme": "learning",
    "subtheme": "vision-transformers",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens",
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "43-57",
    "avgReadiness": 50.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / vision-transformers using EmbedLens and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "099-learning-vision-transformers-failure",
    "laneKey": "099-learning-vision-transformers",
    "laneId": "learning-vision-transformers",
    "theme": "learning",
    "subtheme": "vision-transformers",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens",
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "43-57",
    "avgReadiness": 50.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / vision-transformers using EmbedLens and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "099-learning-vision-transformers-release",
    "laneKey": "099-learning-vision-transformers",
    "laneId": "learning-vision-transformers",
    "theme": "learning",
    "subtheme": "vision-transformers",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "EmbedLens",
    "repoNames": [
      "EmbedLens",
      "cheem"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "cvpr-learning-embedlens-deep-viewer.html",
    "waves": [
      "first",
      "fourth"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "43-57",
    "avgReadiness": 50.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / vision-transformers using EmbedLens and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "100-learning-zeroth-order-optimization-evidence",
    "laneKey": "100-learning-zeroth-order-optimization",
    "laneId": "learning-zeroth-order-optimization",
    "theme": "learning",
    "subtheme": "zeroth-order-optimization",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for learning / zeroth-order-optimization using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "100-learning-zeroth-order-optimization-failure",
    "laneKey": "100-learning-zeroth-order-optimization",
    "laneId": "learning-zeroth-order-optimization",
    "theme": "learning",
    "subtheme": "zeroth-order-optimization",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for learning / zeroth-order-optimization using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "100-learning-zeroth-order-optimization-release",
    "laneKey": "100-learning-zeroth-order-optimization",
    "laneId": "learning-zeroth-order-optimization",
    "theme": "learning",
    "subtheme": "zeroth-order-optimization",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FOZO",
    "repoNames": [
      "FOZO"
    ],
    "demoPage": "cvpr-efficient-learning-repo-governor.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "45-45",
    "avgReadiness": 45.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for learning / zeroth-order-optimization using FOZO and cvpr-efficient-learning-repo-governor.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "101-perceive-clap-evidence",
    "laneKey": "101-perceive-clap",
    "laneId": "perceive-clap",
    "theme": "perceive",
    "subtheme": "CLAP",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / CLAP using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "101-perceive-clap-failure",
    "laneKey": "101-perceive-clap",
    "laneId": "perceive-clap",
    "theme": "perceive",
    "subtheme": "CLAP",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / CLAP using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "101-perceive-clap-release",
    "laneKey": "101-perceive-clap",
    "laneId": "perceive-clap",
    "theme": "perceive",
    "subtheme": "CLAP",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / CLAP using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "102-perceive-dino-evidence",
    "laneKey": "102-perceive-dino",
    "laneId": "perceive-dino",
    "theme": "perceive",
    "subtheme": "DINO",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / DINO using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "102-perceive-dino-failure",
    "laneKey": "102-perceive-dino",
    "laneId": "perceive-dino",
    "theme": "perceive",
    "subtheme": "DINO",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / DINO using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "102-perceive-dino-release",
    "laneKey": "102-perceive-dino",
    "laneId": "perceive-dino",
    "theme": "perceive",
    "subtheme": "DINO",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / DINO using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "103-perceive-gcn-evidence",
    "laneKey": "103-perceive-gcn",
    "laneId": "perceive-gcn",
    "theme": "perceive",
    "subtheme": "GCN",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / GCN using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "103-perceive-gcn-failure",
    "laneKey": "103-perceive-gcn",
    "laneId": "perceive-gcn",
    "theme": "perceive",
    "subtheme": "GCN",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / GCN using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "103-perceive-gcn-release",
    "laneKey": "103-perceive-gcn",
    "laneId": "perceive-gcn",
    "theme": "perceive",
    "subtheme": "GCN",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / GCN using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "104-perceive-sam-evidence",
    "laneKey": "104-perceive-sam",
    "laneId": "perceive-sam",
    "theme": "perceive",
    "subtheme": "SAM",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB",
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "49-51",
    "avgReadiness": 50.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / SAM using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "104-perceive-sam-failure",
    "laneKey": "104-perceive-sam",
    "laneId": "perceive-sam",
    "theme": "perceive",
    "subtheme": "SAM",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB",
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "49-51",
    "avgReadiness": 50.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / SAM using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "104-perceive-sam-release",
    "laneKey": "104-perceive-sam",
    "laneId": "perceive-sam",
    "theme": "perceive",
    "subtheme": "SAM",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB",
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "49-51",
    "avgReadiness": 50.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / SAM using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "105-perceive-audio-classification-evidence",
    "laneKey": "105-perceive-audio-classification",
    "laneId": "perceive-audio-classification",
    "theme": "perceive",
    "subtheme": "audio classification",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / audio classification using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "105-perceive-audio-classification-failure",
    "laneKey": "105-perceive-audio-classification",
    "laneId": "perceive-audio-classification",
    "theme": "perceive",
    "subtheme": "audio classification",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / audio classification using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "105-perceive-audio-classification-release",
    "laneKey": "105-perceive-audio-classification",
    "laneId": "perceive-audio-classification",
    "theme": "perceive",
    "subtheme": "audio classification",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / audio classification using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "106-perceive-audio-language-model-evidence",
    "laneKey": "106-perceive-audio-language-model",
    "laneId": "perceive-audio-language-model",
    "theme": "perceive",
    "subtheme": "audio-language model",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / audio-language model using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "106-perceive-audio-language-model-failure",
    "laneKey": "106-perceive-audio-language-model",
    "laneId": "perceive-audio-language-model",
    "theme": "perceive",
    "subtheme": "audio-language model",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / audio-language model using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "106-perceive-audio-language-model-release",
    "laneKey": "106-perceive-audio-language-model",
    "laneId": "perceive-audio-language-model",
    "theme": "perceive",
    "subtheme": "audio-language model",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / audio-language model using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "107-perceive-autonomous-driving-evidence",
    "laneKey": "107-perceive-autonomous-driving",
    "laneId": "perceive-autonomous-driving",
    "theme": "perceive",
    "subtheme": "autonomous-driving",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / autonomous-driving using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "107-perceive-autonomous-driving-failure",
    "laneKey": "107-perceive-autonomous-driving",
    "laneId": "perceive-autonomous-driving",
    "theme": "perceive",
    "subtheme": "autonomous-driving",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / autonomous-driving using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "107-perceive-autonomous-driving-release",
    "laneKey": "107-perceive-autonomous-driving",
    "laneId": "perceive-autonomous-driving",
    "theme": "perceive",
    "subtheme": "autonomous-driving",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / autonomous-driving using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "108-perceive-background-prompting-evidence",
    "laneKey": "108-perceive-background-prompting",
    "laneId": "perceive-background-prompting",
    "theme": "perceive",
    "subtheme": "background prompting",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / background prompting using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "108-perceive-background-prompting-failure",
    "laneKey": "108-perceive-background-prompting",
    "laneId": "perceive-background-prompting",
    "theme": "perceive",
    "subtheme": "background prompting",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / background prompting using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "108-perceive-background-prompting-release",
    "laneKey": "108-perceive-background-prompting",
    "laneId": "perceive-background-prompting",
    "theme": "perceive",
    "subtheme": "background prompting",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / background prompting using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "109-perceive-camouflaged-object-detection-evidence",
    "laneKey": "109-perceive-camouflaged-object-detection",
    "laneId": "perceive-camouflaged-object-detection",
    "theme": "perceive",
    "subtheme": "camouflaged-object-detection",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / camouflaged-object-detection using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "109-perceive-camouflaged-object-detection-failure",
    "laneKey": "109-perceive-camouflaged-object-detection",
    "laneId": "perceive-camouflaged-object-detection",
    "theme": "perceive",
    "subtheme": "camouflaged-object-detection",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / camouflaged-object-detection using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "109-perceive-camouflaged-object-detection-release",
    "laneKey": "109-perceive-camouflaged-object-detection",
    "laneId": "perceive-camouflaged-object-detection",
    "theme": "perceive",
    "subtheme": "camouflaged-object-detection",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / camouflaged-object-detection using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "110-perceive-class-incremental-learning-evidence",
    "laneKey": "110-perceive-class-incremental-learning",
    "laneId": "perceive-class-incremental-learning",
    "theme": "perceive",
    "subtheme": "class-incremental learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / class-incremental learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "110-perceive-class-incremental-learning-failure",
    "laneKey": "110-perceive-class-incremental-learning",
    "laneId": "perceive-class-incremental-learning",
    "theme": "perceive",
    "subtheme": "class-incremental learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / class-incremental learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "110-perceive-class-incremental-learning-release",
    "laneKey": "110-perceive-class-incremental-learning",
    "laneId": "perceive-class-incremental-learning",
    "theme": "perceive",
    "subtheme": "class-incremental learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / class-incremental learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "111-perceive-co-salient-object-detection-evidence",
    "laneKey": "111-perceive-co-salient-object-detection",
    "laneId": "perceive-co-salient-object-detection",
    "theme": "perceive",
    "subtheme": "co-salient-object-detection",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / co-salient-object-detection using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "111-perceive-co-salient-object-detection-failure",
    "laneKey": "111-perceive-co-salient-object-detection",
    "laneId": "perceive-co-salient-object-detection",
    "theme": "perceive",
    "subtheme": "co-salient-object-detection",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / co-salient-object-detection using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "111-perceive-co-salient-object-detection-release",
    "laneKey": "111-perceive-co-salient-object-detection",
    "laneId": "perceive-co-salient-object-detection",
    "theme": "perceive",
    "subtheme": "co-salient-object-detection",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / co-salient-object-detection using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "112-perceive-continual-learning-evidence",
    "laneKey": "112-perceive-continual-learning",
    "laneId": "perceive-continual-learning",
    "theme": "perceive",
    "subtheme": "continual learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / continual learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "112-perceive-continual-learning-failure",
    "laneKey": "112-perceive-continual-learning",
    "laneId": "perceive-continual-learning",
    "theme": "perceive",
    "subtheme": "continual learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / continual learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "112-perceive-continual-learning-release",
    "laneKey": "112-perceive-continual-learning",
    "laneId": "perceive-continual-learning",
    "theme": "perceive",
    "subtheme": "continual learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / continual learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "113-perceive-detail-preservation-evidence",
    "laneKey": "113-perceive-detail-preservation",
    "laneId": "perceive-detail-preservation",
    "theme": "perceive",
    "subtheme": "detail-preservation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / detail-preservation using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "113-perceive-detail-preservation-failure",
    "laneKey": "113-perceive-detail-preservation",
    "laneId": "perceive-detail-preservation",
    "theme": "perceive",
    "subtheme": "detail-preservation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / detail-preservation using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "113-perceive-detail-preservation-release",
    "laneKey": "113-perceive-detail-preservation",
    "laneId": "perceive-detail-preservation",
    "theme": "perceive",
    "subtheme": "detail-preservation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / detail-preservation using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "114-perceive-domain-adaptation-evidence",
    "laneKey": "114-perceive-domain-adaptation",
    "laneId": "perceive-domain-adaptation",
    "theme": "perceive",
    "subtheme": "domain-adaptation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / domain-adaptation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "114-perceive-domain-adaptation-failure",
    "laneKey": "114-perceive-domain-adaptation",
    "laneId": "perceive-domain-adaptation",
    "theme": "perceive",
    "subtheme": "domain-adaptation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / domain-adaptation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "114-perceive-domain-adaptation-release",
    "laneKey": "114-perceive-domain-adaptation",
    "laneId": "perceive-domain-adaptation",
    "theme": "perceive",
    "subtheme": "domain-adaptation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / domain-adaptation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "115-perceive-equirectangular-projection-evidence",
    "laneKey": "115-perceive-equirectangular-projection",
    "laneId": "perceive-equirectangular-projection",
    "theme": "perceive",
    "subtheme": "equirectangular-projection",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / equirectangular-projection using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "115-perceive-equirectangular-projection-failure",
    "laneKey": "115-perceive-equirectangular-projection",
    "laneId": "perceive-equirectangular-projection",
    "theme": "perceive",
    "subtheme": "equirectangular-projection",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / equirectangular-projection using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "115-perceive-equirectangular-projection-release",
    "laneKey": "115-perceive-equirectangular-projection",
    "laneId": "perceive-equirectangular-projection",
    "theme": "perceive",
    "subtheme": "equirectangular-projection",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / equirectangular-projection using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "116-perceive-few-shot-learning-evidence",
    "laneKey": "116-perceive-few-shot-learning",
    "laneId": "perceive-few-shot-learning",
    "theme": "perceive",
    "subtheme": "few-shot learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / few-shot learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "116-perceive-few-shot-learning-failure",
    "laneKey": "116-perceive-few-shot-learning",
    "laneId": "perceive-few-shot-learning",
    "theme": "perceive",
    "subtheme": "few-shot learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / few-shot learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "116-perceive-few-shot-learning-release",
    "laneKey": "116-perceive-few-shot-learning",
    "laneId": "perceive-few-shot-learning",
    "theme": "perceive",
    "subtheme": "few-shot learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TAPE",
    "repoNames": [
      "TAPE"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "57-57",
    "avgReadiness": 57.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / few-shot learning using TAPE and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "117-perceive-few-shot-segmentation-evidence",
    "laneKey": "117-perceive-few-shot-segmentation",
    "laneId": "perceive-few-shot-segmentation",
    "theme": "perceive",
    "subtheme": "few-shot segmentation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / few-shot segmentation using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "117-perceive-few-shot-segmentation-failure",
    "laneKey": "117-perceive-few-shot-segmentation",
    "laneId": "perceive-few-shot-segmentation",
    "theme": "perceive",
    "subtheme": "few-shot segmentation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / few-shot segmentation using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "117-perceive-few-shot-segmentation-release",
    "laneKey": "117-perceive-few-shot-segmentation",
    "laneId": "perceive-few-shot-segmentation",
    "theme": "perceive",
    "subtheme": "few-shot segmentation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / few-shot segmentation using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "118-perceive-graph-neural-network-evidence",
    "laneKey": "118-perceive-graph-neural-network",
    "laneId": "perceive-graph-neural-network",
    "theme": "perceive",
    "subtheme": "graph neural network",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / graph neural network using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "118-perceive-graph-neural-network-failure",
    "laneKey": "118-perceive-graph-neural-network",
    "laneId": "perceive-graph-neural-network",
    "theme": "perceive",
    "subtheme": "graph neural network",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / graph neural network using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "118-perceive-graph-neural-network-release",
    "laneKey": "118-perceive-graph-neural-network",
    "laneId": "perceive-graph-neural-network",
    "theme": "perceive",
    "subtheme": "graph neural network",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / graph neural network using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "119-perceive-medical-imaging-evidence",
    "laneKey": "119-perceive-medical-imaging",
    "laneId": "perceive-medical-imaging",
    "theme": "perceive",
    "subtheme": "medical imaging",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / medical imaging using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "119-perceive-medical-imaging-failure",
    "laneKey": "119-perceive-medical-imaging",
    "laneId": "perceive-medical-imaging",
    "theme": "perceive",
    "subtheme": "medical imaging",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / medical imaging using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "119-perceive-medical-imaging-release",
    "laneKey": "119-perceive-medical-imaging",
    "laneId": "perceive-medical-imaging",
    "theme": "perceive",
    "subtheme": "medical imaging",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FoB",
    "repoNames": [
      "FoB"
    ],
    "demoPage": "cvpr-perception-fob-deep-viewer.html",
    "deepViewerPage": "cvpr-perception-fob-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / medical imaging using FoB and cvpr-perception-fob-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "120-perceive-panoramic-segmentation-evidence",
    "laneKey": "120-perceive-panoramic-segmentation",
    "laneId": "perceive-panoramic-segmentation",
    "theme": "perceive",
    "subtheme": "panoramic-segmentation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / panoramic-segmentation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "120-perceive-panoramic-segmentation-failure",
    "laneKey": "120-perceive-panoramic-segmentation",
    "laneId": "perceive-panoramic-segmentation",
    "theme": "perceive",
    "subtheme": "panoramic-segmentation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / panoramic-segmentation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "120-perceive-panoramic-segmentation-release",
    "laneKey": "120-perceive-panoramic-segmentation",
    "laneId": "perceive-panoramic-segmentation",
    "theme": "perceive",
    "subtheme": "panoramic-segmentation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / panoramic-segmentation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "121-perceive-pseudo-labels-evidence",
    "laneKey": "121-perceive-pseudo-labels",
    "laneId": "perceive-pseudo-labels",
    "theme": "perceive",
    "subtheme": "pseudo-labels",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / pseudo-labels using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "121-perceive-pseudo-labels-failure",
    "laneKey": "121-perceive-pseudo-labels",
    "laneId": "perceive-pseudo-labels",
    "theme": "perceive",
    "subtheme": "pseudo-labels",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / pseudo-labels using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "121-perceive-pseudo-labels-release",
    "laneKey": "121-perceive-pseudo-labels",
    "laneId": "perceive-pseudo-labels",
    "theme": "perceive",
    "subtheme": "pseudo-labels",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / pseudo-labels using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "122-perceive-segmentation-evidence",
    "laneKey": "122-perceive-segmentation",
    "laneId": "perceive-segmentation",
    "theme": "perceive",
    "subtheme": "segmentation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD",
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-49",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / segmentation using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "122-perceive-segmentation-failure",
    "laneKey": "122-perceive-segmentation",
    "laneId": "perceive-segmentation",
    "theme": "perceive",
    "subtheme": "segmentation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD",
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-49",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / segmentation using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "122-perceive-segmentation-release",
    "laneKey": "122-perceive-segmentation",
    "laneId": "perceive-segmentation",
    "theme": "perceive",
    "subtheme": "segmentation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD",
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "37-49",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / segmentation using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "123-perceive-semantic-segmentation-evidence",
    "laneKey": "123-perceive-semantic-segmentation",
    "laneId": "perceive-semantic-segmentation",
    "theme": "perceive",
    "subtheme": "semantic-segmentation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / semantic-segmentation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "123-perceive-semantic-segmentation-failure",
    "laneKey": "123-perceive-semantic-segmentation",
    "laneId": "perceive-semantic-segmentation",
    "theme": "perceive",
    "subtheme": "semantic-segmentation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / semantic-segmentation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "123-perceive-semantic-segmentation-release",
    "laneKey": "123-perceive-semantic-segmentation",
    "laneId": "perceive-semantic-segmentation",
    "theme": "perceive",
    "subtheme": "semantic-segmentation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / semantic-segmentation using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "124-perceive-source-free-evidence",
    "laneKey": "124-perceive-source-free",
    "laneId": "perceive-source-free",
    "theme": "perceive",
    "subtheme": "source-free",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / source-free using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "124-perceive-source-free-failure",
    "laneKey": "124-perceive-source-free",
    "laneId": "perceive-source-free",
    "theme": "perceive",
    "subtheme": "source-free",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / source-free using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "124-perceive-source-free-release",
    "laneKey": "124-perceive-source-free",
    "laneId": "perceive-source-free",
    "theme": "perceive",
    "subtheme": "source-free",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DAPASS",
    "repoNames": [
      "DAPASS"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / source-free using DAPASS and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "125-perceive-teacher-student-evidence",
    "laneKey": "125-perceive-teacher-student",
    "laneId": "perceive-teacher-student",
    "theme": "perceive",
    "subtheme": "teacher-student",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / teacher-student using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "125-perceive-teacher-student-failure",
    "laneKey": "125-perceive-teacher-student",
    "laneId": "perceive-teacher-student",
    "theme": "perceive",
    "subtheme": "teacher-student",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / teacher-student using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "125-perceive-teacher-student-release",
    "laneKey": "125-perceive-teacher-student",
    "laneId": "perceive-teacher-student",
    "theme": "perceive",
    "subtheme": "teacher-student",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / teacher-student using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "126-perceive-training-free-evidence",
    "laneKey": "126-perceive-training-free",
    "laneId": "perceive-training-free",
    "theme": "perceive",
    "subtheme": "training-free",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / training-free using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "126-perceive-training-free-failure",
    "laneKey": "126-perceive-training-free",
    "laneId": "perceive-training-free",
    "theme": "perceive",
    "subtheme": "training-free",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / training-free using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "126-perceive-training-free-release",
    "laneKey": "126-perceive-training-free",
    "laneId": "perceive-training-free",
    "theme": "perceive",
    "subtheme": "training-free",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / training-free using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "127-perceive-unsupervised-evidence",
    "laneKey": "127-perceive-unsupervised",
    "laneId": "perceive-unsupervised",
    "theme": "perceive",
    "subtheme": "unsupervised",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / unsupervised using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "127-perceive-unsupervised-failure",
    "laneKey": "127-perceive-unsupervised",
    "laneId": "perceive-unsupervised",
    "theme": "perceive",
    "subtheme": "unsupervised",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / unsupervised using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "127-perceive-unsupervised-release",
    "laneKey": "127-perceive-unsupervised",
    "laneId": "perceive-unsupervised",
    "theme": "perceive",
    "subtheme": "unsupervised",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "EReCu",
    "repoNames": [
      "EReCu"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "37-37",
    "avgReadiness": 37.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / unsupervised using EReCu and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "128-perceive-zero-shot-evidence",
    "laneKey": "128-perceive-zero-shot",
    "laneId": "perceive-zero-shot",
    "theme": "perceive",
    "subtheme": "zero-shot",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for perceive / zero-shot using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "128-perceive-zero-shot-failure",
    "laneKey": "128-perceive-zero-shot",
    "laneId": "perceive-zero-shot",
    "theme": "perceive",
    "subtheme": "zero-shot",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for perceive / zero-shot using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "128-perceive-zero-shot-release",
    "laneKey": "128-perceive-zero-shot",
    "laneId": "perceive-zero-shot",
    "theme": "perceive",
    "subtheme": "zero-shot",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "TF-SSD",
    "repoNames": [
      "TF-SSD"
    ],
    "demoPage": "cvpr-perception-parts-repo-bench.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "49-49",
    "avgReadiness": 49.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for perceive / zero-shot using TF-SSD and cvpr-perception-parts-repo-bench.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "129-threed-3d-gaussian-splatting-evidence",
    "laneKey": "129-threed-3d-gaussian-splatting",
    "laneId": "threed-3d-gaussian-splatting",
    "theme": "threed",
    "subtheme": "3D gaussian splatting",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / 3D gaussian splatting using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "129-threed-3d-gaussian-splatting-failure",
    "laneKey": "129-threed-3d-gaussian-splatting",
    "laneId": "threed-3d-gaussian-splatting",
    "theme": "threed",
    "subtheme": "3D gaussian splatting",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / 3D gaussian splatting using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "129-threed-3d-gaussian-splatting-release",
    "laneKey": "129-threed-3d-gaussian-splatting",
    "laneId": "threed-3d-gaussian-splatting",
    "theme": "threed",
    "subtheme": "3D gaussian splatting",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / 3D gaussian splatting using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "130-threed-3d-gaussian-splatting-evidence",
    "laneKey": "130-threed-3d-gaussian-splatting",
    "laneId": "threed-3d-gaussian-splatting",
    "theme": "threed",
    "subtheme": "3d-gaussian-splatting",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / 3d-gaussian-splatting using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "130-threed-3d-gaussian-splatting-failure",
    "laneKey": "130-threed-3d-gaussian-splatting",
    "laneId": "threed-3d-gaussian-splatting",
    "theme": "threed",
    "subtheme": "3d-gaussian-splatting",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / 3d-gaussian-splatting using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "130-threed-3d-gaussian-splatting-release",
    "laneKey": "130-threed-3d-gaussian-splatting",
    "laneId": "threed-3d-gaussian-splatting",
    "theme": "threed",
    "subtheme": "3d-gaussian-splatting",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / 3d-gaussian-splatting using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "131-threed-3d-reconstruction-evidence",
    "laneKey": "131-threed-3d-reconstruction",
    "laneId": "threed-3d-reconstruction",
    "theme": "threed",
    "subtheme": "3d-reconstruction",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface",
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "fifth",
      "first"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "48-51",
    "avgReadiness": 49.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / 3d-reconstruction using insightface and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "131-threed-3d-reconstruction-failure",
    "laneKey": "131-threed-3d-reconstruction",
    "laneId": "threed-3d-reconstruction",
    "theme": "threed",
    "subtheme": "3d-reconstruction",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface",
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "fifth",
      "first"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "48-51",
    "avgReadiness": 49.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / 3d-reconstruction using insightface and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "131-threed-3d-reconstruction-release",
    "laneKey": "131-threed-3d-reconstruction",
    "laneId": "threed-3d-reconstruction",
    "theme": "threed",
    "subtheme": "3d-reconstruction",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface",
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "fifth",
      "first"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "48-51",
    "avgReadiness": 49.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / 3d-reconstruction using insightface and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "132-threed-4d-reconstruction-evidence",
    "laneKey": "132-threed-4d-reconstruction",
    "laneId": "threed-4d-reconstruction",
    "theme": "threed",
    "subtheme": "4d-reconstruction",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS",
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "34-35",
    "avgReadiness": 34.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / 4d-reconstruction using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "132-threed-4d-reconstruction-failure",
    "laneKey": "132-threed-4d-reconstruction",
    "laneId": "threed-4d-reconstruction",
    "theme": "threed",
    "subtheme": "4d-reconstruction",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS",
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "34-35",
    "avgReadiness": 34.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / 4d-reconstruction using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "132-threed-4d-reconstruction-release",
    "laneKey": "132-threed-4d-reconstruction",
    "laneId": "threed-4d-reconstruction",
    "theme": "threed",
    "subtheme": "4d-reconstruction",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS",
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "34-35",
    "avgReadiness": 34.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / 4d-reconstruction using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "133-threed-slam-evidence",
    "laneKey": "133-threed-slam",
    "laneId": "threed-slam",
    "theme": "threed",
    "subtheme": "SLAM",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / SLAM using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "133-threed-slam-failure",
    "laneKey": "133-threed-slam",
    "laneId": "threed-slam",
    "theme": "threed",
    "subtheme": "SLAM",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / SLAM using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "133-threed-slam-release",
    "laneKey": "133-threed-slam",
    "laneId": "threed-slam",
    "theme": "threed",
    "subtheme": "SLAM",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / SLAM using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "134-threed-avatar-evidence",
    "laneKey": "134-threed-avatar",
    "laneId": "threed-avatar",
    "theme": "threed",
    "subtheme": "avatar",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / avatar using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "134-threed-avatar-failure",
    "laneKey": "134-threed-avatar",
    "laneId": "threed-avatar",
    "theme": "threed",
    "subtheme": "avatar",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / avatar using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "134-threed-avatar-release",
    "laneKey": "134-threed-avatar",
    "laneId": "threed-avatar",
    "theme": "threed",
    "subtheme": "avatar",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / avatar using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "135-threed-avatar-reconstruction-evidence",
    "laneKey": "135-threed-avatar-reconstruction",
    "laneId": "threed-avatar-reconstruction",
    "theme": "threed",
    "subtheme": "avatar reconstruction",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / avatar reconstruction using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "135-threed-avatar-reconstruction-failure",
    "laneKey": "135-threed-avatar-reconstruction",
    "laneId": "threed-avatar-reconstruction",
    "theme": "threed",
    "subtheme": "avatar reconstruction",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / avatar reconstruction using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "135-threed-avatar-reconstruction-release",
    "laneKey": "135-threed-avatar-reconstruction",
    "laneId": "threed-avatar-reconstruction",
    "theme": "threed",
    "subtheme": "avatar reconstruction",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / avatar reconstruction using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "136-threed-blur-formation-evidence",
    "laneKey": "136-threed-blur-formation",
    "laneId": "threed-blur-formation",
    "theme": "threed",
    "subtheme": "blur formation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / blur formation using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "136-threed-blur-formation-failure",
    "laneKey": "136-threed-blur-formation",
    "laneId": "threed-blur-formation",
    "theme": "threed",
    "subtheme": "blur formation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / blur formation using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "136-threed-blur-formation-release",
    "laneKey": "136-threed-blur-formation",
    "laneId": "threed-blur-formation",
    "theme": "threed",
    "subtheme": "blur formation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / blur formation using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "137-threed-dynamic-scene-reconstruction-evidence",
    "laneKey": "137-threed-dynamic-scene-reconstruction",
    "laneId": "threed-dynamic-scene-reconstruction",
    "theme": "threed",
    "subtheme": "dynamic-scene-reconstruction",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / dynamic-scene-reconstruction using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "137-threed-dynamic-scene-reconstruction-failure",
    "laneKey": "137-threed-dynamic-scene-reconstruction",
    "laneId": "threed-dynamic-scene-reconstruction",
    "theme": "threed",
    "subtheme": "dynamic-scene-reconstruction",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / dynamic-scene-reconstruction using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "137-threed-dynamic-scene-reconstruction-release",
    "laneKey": "137-threed-dynamic-scene-reconstruction",
    "laneId": "threed-dynamic-scene-reconstruction",
    "theme": "threed",
    "subtheme": "dynamic-scene-reconstruction",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / dynamic-scene-reconstruction using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "138-threed-dynamic-scenes-evidence",
    "laneKey": "138-threed-dynamic-scenes",
    "laneId": "threed-dynamic-scenes",
    "theme": "threed",
    "subtheme": "dynamic-scenes",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / dynamic-scenes using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "138-threed-dynamic-scenes-failure",
    "laneKey": "138-threed-dynamic-scenes",
    "laneId": "threed-dynamic-scenes",
    "theme": "threed",
    "subtheme": "dynamic-scenes",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / dynamic-scenes using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "138-threed-dynamic-scenes-release",
    "laneKey": "138-threed-dynamic-scenes",
    "laneId": "threed-dynamic-scenes",
    "theme": "threed",
    "subtheme": "dynamic-scenes",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / dynamic-scenes using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "139-threed-feed-forward-evidence",
    "laneKey": "139-threed-feed-forward",
    "laneId": "threed-feed-forward",
    "theme": "threed",
    "subtheme": "feed-forward",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / feed-forward using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "139-threed-feed-forward-failure",
    "laneKey": "139-threed-feed-forward",
    "laneId": "threed-feed-forward",
    "theme": "threed",
    "subtheme": "feed-forward",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / feed-forward using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "139-threed-feed-forward-release",
    "laneKey": "139-threed-feed-forward",
    "laneId": "threed-feed-forward",
    "theme": "threed",
    "subtheme": "feed-forward",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / feed-forward using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "140-threed-gaussian-splatting-evidence",
    "laneKey": "140-threed-gaussian-splatting",
    "laneId": "threed-gaussian-splatting",
    "theme": "threed",
    "subtheme": "gaussian-splatting",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS",
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "34-48",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / gaussian-splatting using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "140-threed-gaussian-splatting-failure",
    "laneKey": "140-threed-gaussian-splatting",
    "laneId": "threed-gaussian-splatting",
    "theme": "threed",
    "subtheme": "gaussian-splatting",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS",
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "34-48",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / gaussian-splatting using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "140-threed-gaussian-splatting-release",
    "laneKey": "140-threed-gaussian-splatting",
    "laneId": "threed-gaussian-splatting",
    "theme": "threed",
    "subtheme": "gaussian-splatting",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS",
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "34-48",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / gaussian-splatting using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "141-threed-human-motion-evidence",
    "laneKey": "141-threed-human-motion",
    "laneId": "threed-human-motion",
    "theme": "threed",
    "subtheme": "human motion",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / human motion using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "141-threed-human-motion-failure",
    "laneKey": "141-threed-human-motion",
    "laneId": "threed-human-motion",
    "theme": "threed",
    "subtheme": "human motion",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / human motion using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "141-threed-human-motion-release",
    "laneKey": "141-threed-human-motion",
    "laneId": "threed-human-motion",
    "theme": "threed",
    "subtheme": "human motion",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / human motion using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "142-threed-human-face-evidence",
    "laneKey": "142-threed-human-face",
    "laneId": "threed-human-face",
    "theme": "threed",
    "subtheme": "human-face",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / human-face using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "142-threed-human-face-failure",
    "laneKey": "142-threed-human-face",
    "laneId": "threed-human-face",
    "theme": "threed",
    "subtheme": "human-face",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / human-face using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "142-threed-human-face-release",
    "laneKey": "142-threed-human-face",
    "laneId": "threed-human-face",
    "theme": "threed",
    "subtheme": "human-face",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / human-face using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "143-threed-illumination-handling-evidence",
    "laneKey": "143-threed-illumination-handling",
    "laneId": "threed-illumination-handling",
    "theme": "threed",
    "subtheme": "illumination-handling",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / illumination-handling using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "143-threed-illumination-handling-failure",
    "laneKey": "143-threed-illumination-handling",
    "laneId": "threed-illumination-handling",
    "theme": "threed",
    "subtheme": "illumination-handling",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / illumination-handling using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "143-threed-illumination-handling-release",
    "laneKey": "143-threed-illumination-handling",
    "laneId": "threed-illumination-handling",
    "theme": "threed",
    "subtheme": "illumination-handling",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / illumination-handling using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "144-threed-low-light-imaging-evidence",
    "laneKey": "144-threed-low-light-imaging",
    "laneId": "threed-low-light-imaging",
    "theme": "threed",
    "subtheme": "low-light-imaging",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / low-light-imaging using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "144-threed-low-light-imaging-failure",
    "laneKey": "144-threed-low-light-imaging",
    "laneId": "threed-low-light-imaging",
    "theme": "threed",
    "subtheme": "low-light-imaging",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / low-light-imaging using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "144-threed-low-light-imaging-release",
    "laneKey": "144-threed-low-light-imaging",
    "laneId": "threed-low-light-imaging",
    "theme": "threed",
    "subtheme": "low-light-imaging",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / low-light-imaging using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "145-threed-mesh-evidence",
    "laneKey": "145-threed-mesh",
    "laneId": "threed-mesh",
    "theme": "threed",
    "subtheme": "mesh",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / mesh using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "145-threed-mesh-failure",
    "laneKey": "145-threed-mesh",
    "laneId": "threed-mesh",
    "theme": "threed",
    "subtheme": "mesh",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / mesh using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "145-threed-mesh-release",
    "laneKey": "145-threed-mesh",
    "laneId": "threed-mesh",
    "theme": "threed",
    "subtheme": "mesh",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / mesh using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "146-threed-model-compression-evidence",
    "laneKey": "146-threed-model-compression",
    "laneId": "threed-model-compression",
    "theme": "threed",
    "subtheme": "model-compression",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / model-compression using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "146-threed-model-compression-failure",
    "laneKey": "146-threed-model-compression",
    "laneId": "threed-model-compression",
    "theme": "threed",
    "subtheme": "model-compression",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / model-compression using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "146-threed-model-compression-release",
    "laneKey": "146-threed-model-compression",
    "laneId": "threed-model-compression",
    "theme": "threed",
    "subtheme": "model-compression",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / model-compression using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "147-threed-motion-estimation-evidence",
    "laneKey": "147-threed-motion-estimation",
    "laneId": "threed-motion-estimation",
    "theme": "threed",
    "subtheme": "motion-estimation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / motion-estimation using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "147-threed-motion-estimation-failure",
    "laneKey": "147-threed-motion-estimation",
    "laneId": "threed-motion-estimation",
    "theme": "threed",
    "subtheme": "motion-estimation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / motion-estimation using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "147-threed-motion-estimation-release",
    "laneKey": "147-threed-motion-estimation",
    "laneId": "threed-motion-estimation",
    "theme": "threed",
    "subtheme": "motion-estimation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / motion-estimation using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "148-threed-multi-view-geometry-evidence",
    "laneKey": "148-threed-multi-view-geometry",
    "laneId": "threed-multi-view-geometry",
    "theme": "threed",
    "subtheme": "multi-view geometry",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / multi-view geometry using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "148-threed-multi-view-geometry-failure",
    "laneKey": "148-threed-multi-view-geometry",
    "laneId": "threed-multi-view-geometry",
    "theme": "threed",
    "subtheme": "multi-view geometry",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / multi-view geometry using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "148-threed-multi-view-geometry-release",
    "laneKey": "148-threed-multi-view-geometry",
    "laneId": "threed-multi-view-geometry",
    "theme": "threed",
    "subtheme": "multi-view geometry",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / multi-view geometry using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "149-threed-novel-view-synthesis-evidence",
    "laneKey": "149-threed-novel-view-synthesis",
    "laneId": "threed-novel-view-synthesis",
    "theme": "threed",
    "subtheme": "novel-view-synthesis",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / novel-view-synthesis using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "149-threed-novel-view-synthesis-failure",
    "laneKey": "149-threed-novel-view-synthesis",
    "laneId": "threed-novel-view-synthesis",
    "theme": "threed",
    "subtheme": "novel-view-synthesis",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / novel-view-synthesis using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "149-threed-novel-view-synthesis-release",
    "laneKey": "149-threed-novel-view-synthesis",
    "laneId": "threed-novel-view-synthesis",
    "theme": "threed",
    "subtheme": "novel-view-synthesis",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / novel-view-synthesis using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "150-threed-optical-flow-evidence",
    "laneKey": "150-threed-optical-flow",
    "laneId": "threed-optical-flow",
    "theme": "threed",
    "subtheme": "optical-flow",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / optical-flow using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "150-threed-optical-flow-failure",
    "laneKey": "150-threed-optical-flow",
    "laneId": "threed-optical-flow",
    "theme": "threed",
    "subtheme": "optical-flow",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / optical-flow using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "150-threed-optical-flow-release",
    "laneKey": "150-threed-optical-flow",
    "laneId": "threed-optical-flow",
    "theme": "threed",
    "subtheme": "optical-flow",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Flow4DGS-SLAM",
    "repoNames": [
      "Flow4DGS-SLAM"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "35-35",
    "avgReadiness": 35.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / optical-flow using Flow4DGS-SLAM and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "151-threed-pruning-evidence",
    "laneKey": "151-threed-pruning",
    "laneId": "threed-pruning",
    "theme": "threed",
    "subtheme": "pruning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / pruning using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "151-threed-pruning-failure",
    "laneKey": "151-threed-pruning",
    "laneId": "threed-pruning",
    "theme": "threed",
    "subtheme": "pruning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / pruning using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "151-threed-pruning-release",
    "laneKey": "151-threed-pruning",
    "laneId": "threed-pruning",
    "theme": "threed",
    "subtheme": "pruning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / pruning using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "152-threed-rendering-evidence",
    "laneKey": "152-threed-rendering",
    "laneId": "threed-rendering",
    "theme": "threed",
    "subtheme": "rendering",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / rendering using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "152-threed-rendering-failure",
    "laneKey": "152-threed-rendering",
    "laneId": "threed-rendering",
    "theme": "threed",
    "subtheme": "rendering",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / rendering using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "152-threed-rendering-release",
    "laneKey": "152-threed-rendering",
    "laneId": "threed-rendering",
    "theme": "threed",
    "subtheme": "rendering",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Prune-Wisely-",
    "repoNames": [
      "Prune-Wisely-"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / rendering using Prune-Wisely- and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "153-threed-scene-decomposition-evidence",
    "laneKey": "153-threed-scene-decomposition",
    "laneId": "threed-scene-decomposition",
    "theme": "threed",
    "subtheme": "scene-decomposition",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / scene-decomposition using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "153-threed-scene-decomposition-failure",
    "laneKey": "153-threed-scene-decomposition",
    "laneId": "threed-scene-decomposition",
    "theme": "threed",
    "subtheme": "scene-decomposition",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / scene-decomposition using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "153-threed-scene-decomposition-release",
    "laneKey": "153-threed-scene-decomposition",
    "laneId": "threed-scene-decomposition",
    "theme": "threed",
    "subtheme": "scene-decomposition",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "L2DGS",
    "repoNames": [
      "L2DGS"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / scene-decomposition using L2DGS and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "154-threed-texture-synthesis-evidence",
    "laneKey": "154-threed-texture-synthesis",
    "laneId": "threed-texture-synthesis",
    "theme": "threed",
    "subtheme": "texture-synthesis",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / texture-synthesis using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "154-threed-texture-synthesis-failure",
    "laneKey": "154-threed-texture-synthesis",
    "laneId": "threed-texture-synthesis",
    "theme": "threed",
    "subtheme": "texture-synthesis",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / texture-synthesis using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "154-threed-texture-synthesis-release",
    "laneKey": "154-threed-texture-synthesis",
    "laneId": "threed-texture-synthesis",
    "theme": "threed",
    "subtheme": "texture-synthesis",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "insightface",
    "repoNames": [
      "insightface"
    ],
    "demoPage": "cvpr-threed-insightface-deep-viewer.html",
    "deepViewerPage": "cvpr-threed-insightface-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / texture-synthesis using insightface and cvpr-threed-insightface-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "155-threed-video-deblurring-evidence",
    "laneKey": "155-threed-video-deblurring",
    "laneId": "threed-video-deblurring",
    "theme": "threed",
    "subtheme": "video deblurring",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for threed / video deblurring using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "155-threed-video-deblurring-failure",
    "laneKey": "155-threed-video-deblurring",
    "laneId": "threed-video-deblurring",
    "theme": "threed",
    "subtheme": "video deblurring",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for threed / video deblurring using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "155-threed-video-deblurring-release",
    "laneKey": "155-threed-video-deblurring",
    "laneId": "threed-video-deblurring",
    "theme": "threed",
    "subtheme": "video deblurring",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "MAD-Avatar",
    "repoNames": [
      "MAD-Avatar"
    ],
    "demoPage": "cvpr-3d-world-repo-arena.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "41-41",
    "avgReadiness": 41.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for threed / video deblurring using MAD-Avatar and cvpr-3d-world-repo-arena.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "156-video-action-segmentation-evidence",
    "laneKey": "156-video-action-segmentation",
    "laneId": "video-action-segmentation",
    "theme": "video",
    "subtheme": "action segmentation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / action segmentation using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "156-video-action-segmentation-failure",
    "laneKey": "156-video-action-segmentation",
    "laneId": "video-action-segmentation",
    "theme": "video",
    "subtheme": "action segmentation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / action segmentation using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "156-video-action-segmentation-release",
    "laneKey": "156-video-action-segmentation",
    "laneId": "video-action-segmentation",
    "theme": "video",
    "subtheme": "action segmentation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / action segmentation using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "157-video-causal-models-evidence",
    "laneKey": "157-video-causal-models",
    "laneId": "video-causal-models",
    "theme": "video",
    "subtheme": "causal models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / causal models using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "157-video-causal-models-failure",
    "laneKey": "157-video-causal-models",
    "laneId": "video-causal-models",
    "theme": "video",
    "subtheme": "causal models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / causal models using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "157-video-causal-models-release",
    "laneKey": "157-video-causal-models",
    "laneId": "video-causal-models",
    "theme": "video",
    "subtheme": "causal models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / causal models using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "158-video-controllable-generation-evidence",
    "laneKey": "158-video-controllable-generation",
    "laneId": "video-controllable-generation",
    "theme": "video",
    "subtheme": "controllable-generation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / controllable-generation using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "158-video-controllable-generation-failure",
    "laneKey": "158-video-controllable-generation",
    "laneId": "video-controllable-generation",
    "theme": "video",
    "subtheme": "controllable-generation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / controllable-generation using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "158-video-controllable-generation-release",
    "laneKey": "158-video-controllable-generation",
    "laneId": "video-controllable-generation",
    "theme": "video",
    "subtheme": "controllable-generation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / controllable-generation using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "159-video-counterfactual-evidence",
    "laneKey": "159-video-counterfactual",
    "laneId": "video-counterfactual",
    "theme": "video",
    "subtheme": "counterfactual",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / counterfactual using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "159-video-counterfactual-failure",
    "laneKey": "159-video-counterfactual",
    "laneId": "video-counterfactual",
    "theme": "video",
    "subtheme": "counterfactual",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / counterfactual using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "159-video-counterfactual-release",
    "laneKey": "159-video-counterfactual",
    "laneId": "video-counterfactual",
    "theme": "video",
    "subtheme": "counterfactual",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / counterfactual using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "160-video-diffusion-evidence",
    "laneKey": "160-video-diffusion",
    "laneId": "video-diffusion",
    "theme": "video",
    "subtheme": "diffusion",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "flux",
    "repoNames": [
      "flux",
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "36-47",
    "avgReadiness": 41.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / diffusion using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "160-video-diffusion-failure",
    "laneKey": "160-video-diffusion",
    "laneId": "video-diffusion",
    "theme": "video",
    "subtheme": "diffusion",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "flux",
    "repoNames": [
      "flux",
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "36-47",
    "avgReadiness": 41.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / diffusion using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "160-video-diffusion-release",
    "laneKey": "160-video-diffusion",
    "laneId": "video-diffusion",
    "theme": "video",
    "subtheme": "diffusion",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "flux",
    "repoNames": [
      "flux",
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "36-47",
    "avgReadiness": 41.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / diffusion using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "161-video-diffusion-models-evidence",
    "laneKey": "161-video-diffusion-models",
    "laneId": "video-diffusion-models",
    "theme": "video",
    "subtheme": "diffusion models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / diffusion models using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "161-video-diffusion-models-failure",
    "laneKey": "161-video-diffusion-models",
    "laneId": "video-diffusion-models",
    "theme": "video",
    "subtheme": "diffusion models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / diffusion models using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "161-video-diffusion-models-release",
    "laneKey": "161-video-diffusion-models",
    "laneId": "video-diffusion-models",
    "theme": "video",
    "subtheme": "diffusion models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / diffusion models using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "162-video-dynamic-computation-evidence",
    "laneKey": "162-video-dynamic-computation",
    "laneId": "video-dynamic-computation",
    "theme": "video",
    "subtheme": "dynamic computation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / dynamic computation using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "162-video-dynamic-computation-failure",
    "laneKey": "162-video-dynamic-computation",
    "laneId": "video-dynamic-computation",
    "theme": "video",
    "subtheme": "dynamic computation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / dynamic computation using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "162-video-dynamic-computation-release",
    "laneKey": "162-video-dynamic-computation",
    "laneId": "video-dynamic-computation",
    "theme": "video",
    "subtheme": "dynamic computation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / dynamic computation using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "163-video-embodied-ai-evidence",
    "laneKey": "163-video-embodied-ai",
    "laneId": "video-embodied-ai",
    "theme": "video",
    "subtheme": "embodied-AI",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / embodied-AI using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "163-video-embodied-ai-failure",
    "laneKey": "163-video-embodied-ai",
    "laneId": "video-embodied-ai",
    "theme": "video",
    "subtheme": "embodied-AI",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / embodied-AI using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "163-video-embodied-ai-release",
    "laneKey": "163-video-embodied-ai",
    "laneId": "video-embodied-ai",
    "theme": "video",
    "subtheme": "embodied-AI",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / embodied-AI using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "164-video-event-spotting-evidence",
    "laneKey": "164-video-event-spotting",
    "laneId": "video-event-spotting",
    "theme": "video",
    "subtheme": "event spotting",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / event spotting using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "164-video-event-spotting-failure",
    "laneKey": "164-video-event-spotting",
    "laneId": "video-event-spotting",
    "theme": "video",
    "subtheme": "event spotting",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / event spotting using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "164-video-event-spotting-release",
    "laneKey": "164-video-event-spotting",
    "laneId": "video-event-spotting",
    "theme": "video",
    "subtheme": "event spotting",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / event spotting using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "165-video-explainability-evidence",
    "laneKey": "165-video-explainability",
    "laneId": "video-explainability",
    "theme": "video",
    "subtheme": "explainability",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / explainability using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "165-video-explainability-failure",
    "laneKey": "165-video-explainability",
    "laneId": "video-explainability",
    "theme": "video",
    "subtheme": "explainability",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / explainability using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "165-video-explainability-release",
    "laneKey": "165-video-explainability",
    "laneId": "video-explainability",
    "theme": "video",
    "subtheme": "explainability",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / explainability using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "166-video-face-manipulation-evidence",
    "laneKey": "166-video-face-manipulation",
    "laneId": "video-face-manipulation",
    "theme": "video",
    "subtheme": "face manipulation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / face manipulation using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "166-video-face-manipulation-failure",
    "laneKey": "166-video-face-manipulation",
    "laneId": "video-face-manipulation",
    "theme": "video",
    "subtheme": "face manipulation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / face manipulation using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "166-video-face-manipulation-release",
    "laneKey": "166-video-face-manipulation",
    "laneId": "video-face-manipulation",
    "theme": "video",
    "subtheme": "face manipulation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / face manipulation using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "167-video-face-swapping-evidence",
    "laneKey": "167-video-face-swapping",
    "laneId": "video-face-swapping",
    "theme": "video",
    "subtheme": "face swapping",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / face swapping using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "167-video-face-swapping-failure",
    "laneKey": "167-video-face-swapping",
    "laneId": "video-face-swapping",
    "theme": "video",
    "subtheme": "face swapping",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / face swapping using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "167-video-face-swapping-release",
    "laneKey": "167-video-face-swapping",
    "laneId": "video-face-swapping",
    "theme": "video",
    "subtheme": "face swapping",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / face swapping using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "168-video-hand-object-interaction-evidence",
    "laneKey": "168-video-hand-object-interaction",
    "laneId": "video-hand-object-interaction",
    "theme": "video",
    "subtheme": "hand-object-interaction",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / hand-object-interaction using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "168-video-hand-object-interaction-failure",
    "laneKey": "168-video-hand-object-interaction",
    "laneId": "video-hand-object-interaction",
    "theme": "video",
    "subtheme": "hand-object-interaction",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / hand-object-interaction using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "168-video-hand-object-interaction-release",
    "laneKey": "168-video-hand-object-interaction",
    "laneId": "video-hand-object-interaction",
    "theme": "video",
    "subtheme": "hand-object-interaction",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / hand-object-interaction using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "169-video-hierarchical-learning-evidence",
    "laneKey": "169-video-hierarchical-learning",
    "laneId": "video-hierarchical-learning",
    "theme": "video",
    "subtheme": "hierarchical learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / hierarchical learning using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "169-video-hierarchical-learning-failure",
    "laneKey": "169-video-hierarchical-learning",
    "laneId": "video-hierarchical-learning",
    "theme": "video",
    "subtheme": "hierarchical learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / hierarchical learning using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "169-video-hierarchical-learning-release",
    "laneKey": "169-video-hierarchical-learning",
    "laneId": "video-hierarchical-learning",
    "theme": "video",
    "subtheme": "hierarchical learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / hierarchical learning using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "170-video-identifiability-evidence",
    "laneKey": "170-video-identifiability",
    "laneId": "video-identifiability",
    "theme": "video",
    "subtheme": "identifiability",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / identifiability using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "170-video-identifiability-failure",
    "laneKey": "170-video-identifiability",
    "laneId": "video-identifiability",
    "theme": "video",
    "subtheme": "identifiability",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / identifiability using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "170-video-identifiability-release",
    "laneKey": "170-video-identifiability",
    "laneId": "video-identifiability",
    "theme": "video",
    "subtheme": "identifiability",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / identifiability using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "171-video-interpretability-evidence",
    "laneKey": "171-video-interpretability",
    "laneId": "video-interpretability",
    "theme": "video",
    "subtheme": "interpretability",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / interpretability using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "171-video-interpretability-failure",
    "laneKey": "171-video-interpretability",
    "laneId": "video-interpretability",
    "theme": "video",
    "subtheme": "interpretability",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / interpretability using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "171-video-interpretability-release",
    "laneKey": "171-video-interpretability",
    "laneId": "video-interpretability",
    "theme": "video",
    "subtheme": "interpretability",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / interpretability using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "172-video-precise-localization-evidence",
    "laneKey": "172-video-precise-localization",
    "laneId": "video-precise-localization",
    "theme": "video",
    "subtheme": "precise localization",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / precise localization using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "172-video-precise-localization-failure",
    "laneKey": "172-video-precise-localization",
    "laneId": "video-precise-localization",
    "theme": "video",
    "subtheme": "precise localization",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / precise localization using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "172-video-precise-localization-release",
    "laneKey": "172-video-precise-localization",
    "laneId": "video-precise-localization",
    "theme": "video",
    "subtheme": "precise localization",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / precise localization using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "173-video-sim-to-real-evidence",
    "laneKey": "173-video-sim-to-real",
    "laneId": "video-sim-to-real",
    "theme": "video",
    "subtheme": "sim-to-real",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / sim-to-real using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "173-video-sim-to-real-failure",
    "laneKey": "173-video-sim-to-real",
    "laneId": "video-sim-to-real",
    "theme": "video",
    "subtheme": "sim-to-real",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / sim-to-real using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "173-video-sim-to-real-release",
    "laneKey": "173-video-sim-to-real",
    "laneId": "video-sim-to-real",
    "theme": "video",
    "subtheme": "sim-to-real",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "flux",
    "repoNames": [
      "flux"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "47-47",
    "avgReadiness": 47.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / sim-to-real using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "174-video-spatial-attention-evidence",
    "laneKey": "174-video-spatial-attention",
    "laneId": "video-spatial-attention",
    "theme": "video",
    "subtheme": "spatial attention",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / spatial attention using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "174-video-spatial-attention-failure",
    "laneKey": "174-video-spatial-attention",
    "laneId": "video-spatial-attention",
    "theme": "video",
    "subtheme": "spatial attention",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / spatial attention using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "174-video-spatial-attention-release",
    "laneKey": "174-video-spatial-attention",
    "laneId": "video-spatial-attention",
    "theme": "video",
    "subtheme": "spatial attention",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / spatial attention using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "175-video-temporal-action-detection-evidence",
    "laneKey": "175-video-temporal-action-detection",
    "laneId": "video-temporal-action-detection",
    "theme": "video",
    "subtheme": "temporal action detection",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / temporal action detection using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "175-video-temporal-action-detection-failure",
    "laneKey": "175-video-temporal-action-detection",
    "laneId": "video-temporal-action-detection",
    "theme": "video",
    "subtheme": "temporal action detection",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / temporal action detection using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "175-video-temporal-action-detection-release",
    "laneKey": "175-video-temporal-action-detection",
    "laneId": "video-temporal-action-detection",
    "theme": "video",
    "subtheme": "temporal action detection",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / temporal action detection using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "176-video-temporal-modeling-evidence",
    "laneKey": "176-video-temporal-modeling",
    "laneId": "video-temporal-modeling",
    "theme": "video",
    "subtheme": "temporal modeling",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / temporal modeling using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "176-video-temporal-modeling-failure",
    "laneKey": "176-video-temporal-modeling",
    "laneId": "video-temporal-modeling",
    "theme": "video",
    "subtheme": "temporal modeling",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / temporal modeling using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "176-video-temporal-modeling-release",
    "laneKey": "176-video-temporal-modeling",
    "laneId": "video-temporal-modeling",
    "theme": "video",
    "subtheme": "temporal modeling",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / temporal modeling using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "177-video-video-editing-evidence",
    "laneKey": "177-video-video-editing",
    "laneId": "video-video-editing",
    "theme": "video",
    "subtheme": "video editing",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / video editing using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "177-video-video-editing-failure",
    "laneKey": "177-video-video-editing",
    "laneId": "video-video-editing",
    "theme": "video",
    "subtheme": "video editing",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / video editing using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "177-video-video-editing-release",
    "laneKey": "177-video-video-editing",
    "laneId": "video-video-editing",
    "theme": "video",
    "subtheme": "video editing",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / video editing using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "178-video-video-efficiency-evidence",
    "laneKey": "178-video-video-efficiency",
    "laneId": "video-video-efficiency",
    "theme": "video",
    "subtheme": "video efficiency",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / video efficiency using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "178-video-video-efficiency-failure",
    "laneKey": "178-video-video-efficiency",
    "laneId": "video-video-efficiency",
    "theme": "video",
    "subtheme": "video efficiency",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / video efficiency using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "178-video-video-efficiency-release",
    "laneKey": "178-video-video-efficiency",
    "laneId": "video-video-efficiency",
    "theme": "video",
    "subtheme": "video efficiency",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "AdaSpot",
    "repoNames": [
      "AdaSpot"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "51-51",
    "avgReadiness": 51.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / video efficiency using AdaSpot and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "179-video-video-generation-evidence",
    "laneKey": "179-video-video-generation",
    "laneId": "video-video-generation",
    "theme": "video",
    "subtheme": "video generation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / video generation using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "179-video-video-generation-failure",
    "laneKey": "179-video-video-generation",
    "laneId": "video-video-generation",
    "theme": "video",
    "subtheme": "video generation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / video generation using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "179-video-video-generation-release",
    "laneKey": "179-video-video-generation",
    "laneId": "video-video-generation",
    "theme": "video",
    "subtheme": "video generation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / video generation using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "180-video-video-synthesis-evidence",
    "laneKey": "180-video-video-synthesis",
    "laneId": "video-video-synthesis",
    "theme": "video",
    "subtheme": "video synthesis",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / video synthesis using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "180-video-video-synthesis-failure",
    "laneKey": "180-video-video-synthesis",
    "laneId": "video-video-synthesis",
    "theme": "video",
    "subtheme": "video synthesis",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / video synthesis using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "180-video-video-synthesis-release",
    "laneKey": "180-video-video-synthesis",
    "laneId": "video-video-synthesis",
    "theme": "video",
    "subtheme": "video synthesis",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "face-",
    "repoNames": [
      "face-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / video synthesis using face- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "181-video-video-classification-evidence",
    "laneKey": "181-video-video-classification",
    "laneId": "video-video-classification",
    "theme": "video",
    "subtheme": "video-classification",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / video-classification using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "181-video-video-classification-failure",
    "laneKey": "181-video-video-classification",
    "laneId": "video-video-classification",
    "theme": "video",
    "subtheme": "video-classification",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / video-classification using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "181-video-video-classification-release",
    "laneKey": "181-video-video-classification",
    "laneId": "video-video-classification",
    "theme": "video",
    "subtheme": "video-classification",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "DiffSynth-",
    "repoNames": [
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "36-36",
    "avgReadiness": 36.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / video-classification using DiffSynth- and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "182-video-video-generation-evidence",
    "laneKey": "182-video-video-generation",
    "laneId": "video-video-generation",
    "theme": "video",
    "subtheme": "video-generation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "flux",
    "repoNames": [
      "flux",
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "36-47",
    "avgReadiness": 41.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / video-generation using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "182-video-video-generation-failure",
    "laneKey": "182-video-video-generation",
    "laneId": "video-video-generation",
    "theme": "video",
    "subtheme": "video-generation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "flux",
    "repoNames": [
      "flux",
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "36-47",
    "avgReadiness": 41.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / video-generation using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "182-video-video-generation-release",
    "laneKey": "182-video-video-generation",
    "laneId": "video-video-generation",
    "theme": "video",
    "subtheme": "video-generation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "flux",
    "repoNames": [
      "flux",
      "DiffSynth-"
    ],
    "demoPage": "cvpr-video-flux-deep-viewer.html",
    "deepViewerPage": "cvpr-video-flux-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "36-47",
    "avgReadiness": 41.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / video-generation using flux and cvpr-video-flux-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "183-video-weakly-supervised-evidence",
    "laneKey": "183-video-weakly-supervised",
    "laneId": "video-weakly-supervised",
    "theme": "video",
    "subtheme": "weakly-supervised",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for video / weakly-supervised using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "183-video-weakly-supervised-failure",
    "laneKey": "183-video-weakly-supervised",
    "laneId": "video-weakly-supervised",
    "theme": "video",
    "subtheme": "weakly-supervised",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for video / weakly-supervised using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "183-video-weakly-supervised-release",
    "laneKey": "183-video-weakly-supervised",
    "laneId": "video-weakly-supervised",
    "theme": "video",
    "subtheme": "weakly-supervised",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "HAL",
    "repoNames": [
      "HAL"
    ],
    "demoPage": "cvpr-video-temporal-repo-lab.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "42-42",
    "avgReadiness": 42.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for video / weakly-supervised using HAL and cvpr-video-temporal-repo-lab.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "184-vlm-lvlms-evidence",
    "laneKey": "184-vlm-lvlms",
    "laneId": "vlm-lvlms",
    "theme": "vlm",
    "subtheme": "LVLMs",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / LVLMs using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "184-vlm-lvlms-failure",
    "laneKey": "184-vlm-lvlms",
    "laneId": "vlm-lvlms",
    "theme": "vlm",
    "subtheme": "LVLMs",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / LVLMs using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "184-vlm-lvlms-release",
    "laneKey": "184-vlm-lvlms",
    "laneId": "vlm-lvlms",
    "theme": "vlm",
    "subtheme": "LVLMs",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / LVLMs using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "185-vlm-adversarial-learning-evidence",
    "laneKey": "185-vlm-adversarial-learning",
    "laneId": "vlm-adversarial-learning",
    "theme": "vlm",
    "subtheme": "adversarial-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / adversarial-learning using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "185-vlm-adversarial-learning-failure",
    "laneKey": "185-vlm-adversarial-learning",
    "laneId": "vlm-adversarial-learning",
    "theme": "vlm",
    "subtheme": "adversarial-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / adversarial-learning using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "185-vlm-adversarial-learning-release",
    "laneKey": "185-vlm-adversarial-learning",
    "laneId": "vlm-adversarial-learning",
    "theme": "vlm",
    "subtheme": "adversarial-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / adversarial-learning using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "186-vlm-anonymization-evidence",
    "laneKey": "186-vlm-anonymization",
    "laneId": "vlm-anonymization",
    "theme": "vlm",
    "subtheme": "anonymization",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / anonymization using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "186-vlm-anonymization-failure",
    "laneKey": "186-vlm-anonymization",
    "laneId": "vlm-anonymization",
    "theme": "vlm",
    "subtheme": "anonymization",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / anonymization using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "186-vlm-anonymization-release",
    "laneKey": "186-vlm-anonymization",
    "laneId": "vlm-anonymization",
    "theme": "vlm",
    "subtheme": "anonymization",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / anonymization using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "187-vlm-benchmark-evidence",
    "laneKey": "187-vlm-benchmark",
    "laneId": "vlm-benchmark",
    "theme": "vlm",
    "subtheme": "benchmark",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / benchmark using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "187-vlm-benchmark-failure",
    "laneKey": "187-vlm-benchmark",
    "laneId": "vlm-benchmark",
    "theme": "vlm",
    "subtheme": "benchmark",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / benchmark using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "187-vlm-benchmark-release",
    "laneKey": "187-vlm-benchmark",
    "laneId": "vlm-benchmark",
    "theme": "vlm",
    "subtheme": "benchmark",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / benchmark using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "188-vlm-capability-preservation-evidence",
    "laneKey": "188-vlm-capability-preservation",
    "laneId": "vlm-capability-preservation",
    "theme": "vlm",
    "subtheme": "capability preservation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / capability preservation using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "188-vlm-capability-preservation-failure",
    "laneKey": "188-vlm-capability-preservation",
    "laneId": "vlm-capability-preservation",
    "theme": "vlm",
    "subtheme": "capability preservation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / capability preservation using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "188-vlm-capability-preservation-release",
    "laneKey": "188-vlm-capability-preservation",
    "laneId": "vlm-capability-preservation",
    "theme": "vlm",
    "subtheme": "capability preservation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / capability preservation using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "189-vlm-chain-of-thought-evidence",
    "laneKey": "189-vlm-chain-of-thought",
    "laneId": "vlm-chain-of-thought",
    "theme": "vlm",
    "subtheme": "chain-of-thought",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / chain-of-thought using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "189-vlm-chain-of-thought-failure",
    "laneKey": "189-vlm-chain-of-thought",
    "laneId": "vlm-chain-of-thought",
    "theme": "vlm",
    "subtheme": "chain-of-thought",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / chain-of-thought using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "189-vlm-chain-of-thought-release",
    "laneKey": "189-vlm-chain-of-thought",
    "laneId": "vlm-chain-of-thought",
    "theme": "vlm",
    "subtheme": "chain-of-thought",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / chain-of-thought using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "190-vlm-composed-image-retrieval-evidence",
    "laneKey": "190-vlm-composed-image-retrieval",
    "laneId": "vlm-composed-image-retrieval",
    "theme": "vlm",
    "subtheme": "composed image retrieval",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / composed image retrieval using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "190-vlm-composed-image-retrieval-failure",
    "laneKey": "190-vlm-composed-image-retrieval",
    "laneId": "vlm-composed-image-retrieval",
    "theme": "vlm",
    "subtheme": "composed image retrieval",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / composed image retrieval using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "190-vlm-composed-image-retrieval-release",
    "laneKey": "190-vlm-composed-image-retrieval",
    "laneId": "vlm-composed-image-retrieval",
    "theme": "vlm",
    "subtheme": "composed image retrieval",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / composed image retrieval using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "191-vlm-contrastive-learning-evidence",
    "laneKey": "191-vlm-contrastive-learning",
    "laneId": "vlm-contrastive-learning",
    "theme": "vlm",
    "subtheme": "contrastive learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / contrastive learning using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "191-vlm-contrastive-learning-failure",
    "laneKey": "191-vlm-contrastive-learning",
    "laneId": "vlm-contrastive-learning",
    "theme": "vlm",
    "subtheme": "contrastive learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / contrastive learning using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "191-vlm-contrastive-learning-release",
    "laneKey": "191-vlm-contrastive-learning",
    "laneId": "vlm-contrastive-learning",
    "theme": "vlm",
    "subtheme": "contrastive learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / contrastive learning using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "192-vlm-cross-modal-alignment-evidence",
    "laneKey": "192-vlm-cross-modal-alignment",
    "laneId": "vlm-cross-modal-alignment",
    "theme": "vlm",
    "subtheme": "cross-modal alignment",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / cross-modal alignment using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "192-vlm-cross-modal-alignment-failure",
    "laneKey": "192-vlm-cross-modal-alignment",
    "laneId": "vlm-cross-modal-alignment",
    "theme": "vlm",
    "subtheme": "cross-modal alignment",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / cross-modal alignment using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "192-vlm-cross-modal-alignment-release",
    "laneKey": "192-vlm-cross-modal-alignment",
    "laneId": "vlm-cross-modal-alignment",
    "theme": "vlm",
    "subtheme": "cross-modal alignment",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / cross-modal alignment using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "193-vlm-cross-modal-matching-evidence",
    "laneKey": "193-vlm-cross-modal-matching",
    "laneId": "vlm-cross-modal-matching",
    "theme": "vlm",
    "subtheme": "cross-modal-matching",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / cross-modal-matching using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "193-vlm-cross-modal-matching-failure",
    "laneKey": "193-vlm-cross-modal-matching",
    "laneId": "vlm-cross-modal-matching",
    "theme": "vlm",
    "subtheme": "cross-modal-matching",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / cross-modal-matching using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "193-vlm-cross-modal-matching-release",
    "laneKey": "193-vlm-cross-modal-matching",
    "laneId": "vlm-cross-modal-matching",
    "theme": "vlm",
    "subtheme": "cross-modal-matching",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / cross-modal-matching using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "194-vlm-feature-fusion-evidence",
    "laneKey": "194-vlm-feature-fusion",
    "laneId": "vlm-feature-fusion",
    "theme": "vlm",
    "subtheme": "feature-fusion",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / feature-fusion using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "194-vlm-feature-fusion-failure",
    "laneKey": "194-vlm-feature-fusion",
    "laneId": "vlm-feature-fusion",
    "theme": "vlm",
    "subtheme": "feature-fusion",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / feature-fusion using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "194-vlm-feature-fusion-release",
    "laneKey": "194-vlm-feature-fusion",
    "laneId": "vlm-feature-fusion",
    "theme": "vlm",
    "subtheme": "feature-fusion",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / feature-fusion using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "195-vlm-federated-learning-evidence",
    "laneKey": "195-vlm-federated-learning",
    "laneId": "vlm-federated-learning",
    "theme": "vlm",
    "subtheme": "federated-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / federated-learning using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "195-vlm-federated-learning-failure",
    "laneKey": "195-vlm-federated-learning",
    "laneId": "vlm-federated-learning",
    "theme": "vlm",
    "subtheme": "federated-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / federated-learning using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "195-vlm-federated-learning-release",
    "laneKey": "195-vlm-federated-learning",
    "laneId": "vlm-federated-learning",
    "theme": "vlm",
    "subtheme": "federated-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / federated-learning using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "196-vlm-graph-learning-evidence",
    "laneKey": "196-vlm-graph-learning",
    "laneId": "vlm-graph-learning",
    "theme": "vlm",
    "subtheme": "graph-learning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / graph-learning using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "196-vlm-graph-learning-failure",
    "laneKey": "196-vlm-graph-learning",
    "laneId": "vlm-graph-learning",
    "theme": "vlm",
    "subtheme": "graph-learning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / graph-learning using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "196-vlm-graph-learning-release",
    "laneKey": "196-vlm-graph-learning",
    "laneId": "vlm-graph-learning",
    "theme": "vlm",
    "subtheme": "graph-learning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / graph-learning using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "197-vlm-graph-neural-networks-evidence",
    "laneKey": "197-vlm-graph-neural-networks",
    "laneId": "vlm-graph-neural-networks",
    "theme": "vlm",
    "subtheme": "graph-neural-networks",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / graph-neural-networks using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "197-vlm-graph-neural-networks-failure",
    "laneKey": "197-vlm-graph-neural-networks",
    "laneId": "vlm-graph-neural-networks",
    "theme": "vlm",
    "subtheme": "graph-neural-networks",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / graph-neural-networks using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "197-vlm-graph-neural-networks-release",
    "laneKey": "197-vlm-graph-neural-networks",
    "laneId": "vlm-graph-neural-networks",
    "theme": "vlm",
    "subtheme": "graph-neural-networks",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / graph-neural-networks using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "198-vlm-graph-reasoning-evidence",
    "laneKey": "198-vlm-graph-reasoning",
    "laneId": "vlm-graph-reasoning",
    "theme": "vlm",
    "subtheme": "graph-reasoning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / graph-reasoning using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "198-vlm-graph-reasoning-failure",
    "laneKey": "198-vlm-graph-reasoning",
    "laneId": "vlm-graph-reasoning",
    "theme": "vlm",
    "subtheme": "graph-reasoning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / graph-reasoning using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "198-vlm-graph-reasoning-release",
    "laneKey": "198-vlm-graph-reasoning",
    "laneId": "vlm-graph-reasoning",
    "theme": "vlm",
    "subtheme": "graph-reasoning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / graph-reasoning using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "199-vlm-hallucination-mitigation-evidence",
    "laneKey": "199-vlm-hallucination-mitigation",
    "laneId": "vlm-hallucination-mitigation",
    "theme": "vlm",
    "subtheme": "hallucination mitigation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / hallucination mitigation using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "199-vlm-hallucination-mitigation-failure",
    "laneKey": "199-vlm-hallucination-mitigation",
    "laneId": "vlm-hallucination-mitigation",
    "theme": "vlm",
    "subtheme": "hallucination mitigation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / hallucination mitigation using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "199-vlm-hallucination-mitigation-release",
    "laneKey": "199-vlm-hallucination-mitigation",
    "laneId": "vlm-hallucination-mitigation",
    "theme": "vlm",
    "subtheme": "hallucination mitigation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / hallucination mitigation using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "200-vlm-keypoint-preservation-evidence",
    "laneKey": "200-vlm-keypoint-preservation",
    "laneId": "vlm-keypoint-preservation",
    "theme": "vlm",
    "subtheme": "keypoint-preservation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / keypoint-preservation using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "200-vlm-keypoint-preservation-failure",
    "laneKey": "200-vlm-keypoint-preservation",
    "laneId": "vlm-keypoint-preservation",
    "theme": "vlm",
    "subtheme": "keypoint-preservation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / keypoint-preservation using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "200-vlm-keypoint-preservation-release",
    "laneKey": "200-vlm-keypoint-preservation",
    "laneId": "vlm-keypoint-preservation",
    "theme": "vlm",
    "subtheme": "keypoint-preservation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / keypoint-preservation using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "201-vlm-knowledge-distillation-evidence",
    "laneKey": "201-vlm-knowledge-distillation",
    "laneId": "vlm-knowledge-distillation",
    "theme": "vlm",
    "subtheme": "knowledge-distillation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / knowledge-distillation using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "201-vlm-knowledge-distillation-failure",
    "laneKey": "201-vlm-knowledge-distillation",
    "laneId": "vlm-knowledge-distillation",
    "theme": "vlm",
    "subtheme": "knowledge-distillation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / knowledge-distillation using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "201-vlm-knowledge-distillation-release",
    "laneKey": "201-vlm-knowledge-distillation",
    "laneId": "vlm-knowledge-distillation",
    "theme": "vlm",
    "subtheme": "knowledge-distillation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / knowledge-distillation using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "202-vlm-multimodal-evidence",
    "laneKey": "202-vlm-multimodal",
    "laneId": "vlm-multimodal",
    "theme": "vlm",
    "subtheme": "multimodal",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 2,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD",
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "43-46",
    "avgReadiness": 44.5,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / multimodal using FedAFD and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "202-vlm-multimodal-failure",
    "laneKey": "202-vlm-multimodal",
    "laneId": "vlm-multimodal",
    "theme": "vlm",
    "subtheme": "multimodal",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 2,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD",
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "43-46",
    "avgReadiness": 44.5,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / multimodal using FedAFD and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "202-vlm-multimodal-release",
    "laneKey": "202-vlm-multimodal",
    "laneId": "vlm-multimodal",
    "theme": "vlm",
    "subtheme": "multimodal",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 2,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD",
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first",
      "third"
    ],
    "artifacts": 6,
    "controls": 10,
    "readinessBand": "43-46",
    "avgReadiness": 44.5,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / multimodal using FedAFD and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "203-vlm-multimodal-reasoning-evidence",
    "laneKey": "203-vlm-multimodal-reasoning",
    "laneId": "vlm-multimodal-reasoning",
    "theme": "vlm",
    "subtheme": "multimodal reasoning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / multimodal reasoning using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "203-vlm-multimodal-reasoning-failure",
    "laneKey": "203-vlm-multimodal-reasoning",
    "laneId": "vlm-multimodal-reasoning",
    "theme": "vlm",
    "subtheme": "multimodal reasoning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / multimodal reasoning using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "203-vlm-multimodal-reasoning-release",
    "laneKey": "203-vlm-multimodal-reasoning",
    "laneId": "vlm-multimodal-reasoning",
    "theme": "vlm",
    "subtheme": "multimodal reasoning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / multimodal reasoning using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "204-vlm-person-re-identification-evidence",
    "laneKey": "204-vlm-person-re-identification",
    "laneId": "vlm-person-re-identification",
    "theme": "vlm",
    "subtheme": "person-re-identification",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / person-re-identification using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "204-vlm-person-re-identification-failure",
    "laneKey": "204-vlm-person-re-identification",
    "laneId": "vlm-person-re-identification",
    "theme": "vlm",
    "subtheme": "person-re-identification",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / person-re-identification using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "204-vlm-person-re-identification-release",
    "laneKey": "204-vlm-person-re-identification",
    "laneId": "vlm-person-re-identification",
    "theme": "vlm",
    "subtheme": "person-re-identification",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / person-re-identification using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "205-vlm-privacy-preservation-evidence",
    "laneKey": "205-vlm-privacy-preservation",
    "laneId": "vlm-privacy-preservation",
    "theme": "vlm",
    "subtheme": "privacy-preservation",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / privacy-preservation using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "205-vlm-privacy-preservation-failure",
    "laneKey": "205-vlm-privacy-preservation",
    "laneId": "vlm-privacy-preservation",
    "theme": "vlm",
    "subtheme": "privacy-preservation",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / privacy-preservation using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "205-vlm-privacy-preservation-release",
    "laneKey": "205-vlm-privacy-preservation",
    "laneId": "vlm-privacy-preservation",
    "theme": "vlm",
    "subtheme": "privacy-preservation",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / privacy-preservation using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "206-vlm-privacy-preserving-evidence",
    "laneKey": "206-vlm-privacy-preserving",
    "laneId": "vlm-privacy-preserving",
    "theme": "vlm",
    "subtheme": "privacy-preserving",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / privacy-preserving using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "206-vlm-privacy-preserving-failure",
    "laneKey": "206-vlm-privacy-preserving",
    "laneId": "vlm-privacy-preserving",
    "theme": "vlm",
    "subtheme": "privacy-preserving",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / privacy-preserving using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "206-vlm-privacy-preserving-release",
    "laneKey": "206-vlm-privacy-preserving",
    "laneId": "vlm-privacy-preserving",
    "theme": "vlm",
    "subtheme": "privacy-preserving",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "FedAFD",
    "repoNames": [
      "FedAFD"
    ],
    "demoPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "deepViewerPage": "cvpr-vlm-fedafd-deep-viewer.html",
    "waves": [
      "first"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / privacy-preserving using FedAFD and cvpr-vlm-fedafd-deep-viewer.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "207-vlm-reasoning-evidence",
    "laneKey": "207-vlm-reasoning",
    "laneId": "vlm-reasoning",
    "theme": "vlm",
    "subtheme": "reasoning",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / reasoning using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "207-vlm-reasoning-failure",
    "laneKey": "207-vlm-reasoning",
    "laneId": "vlm-reasoning",
    "theme": "vlm",
    "subtheme": "reasoning",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / reasoning using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "207-vlm-reasoning-release",
    "laneKey": "207-vlm-reasoning",
    "laneId": "vlm-reasoning",
    "theme": "vlm",
    "subtheme": "reasoning",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / reasoning using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "208-vlm-test-time-inference-evidence",
    "laneKey": "208-vlm-test-time-inference",
    "laneId": "vlm-test-time-inference",
    "theme": "vlm",
    "subtheme": "test-time inference",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / test-time inference using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "208-vlm-test-time-inference-failure",
    "laneKey": "208-vlm-test-time-inference",
    "laneId": "vlm-test-time-inference",
    "theme": "vlm",
    "subtheme": "test-time inference",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / test-time inference using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "208-vlm-test-time-inference-release",
    "laneKey": "208-vlm-test-time-inference",
    "laneId": "vlm-test-time-inference",
    "theme": "vlm",
    "subtheme": "test-time inference",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / test-time inference using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "209-vlm-visible-infrared-evidence",
    "laneKey": "209-vlm-visible-infrared",
    "laneId": "vlm-visible-infrared",
    "theme": "vlm",
    "subtheme": "visible-infrared",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / visible-infrared using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "209-vlm-visible-infrared-failure",
    "laneKey": "209-vlm-visible-infrared",
    "laneId": "vlm-visible-infrared",
    "theme": "vlm",
    "subtheme": "visible-infrared",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / visible-infrared using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "209-vlm-visible-infrared-release",
    "laneKey": "209-vlm-visible-infrared",
    "laneId": "vlm-visible-infrared",
    "theme": "vlm",
    "subtheme": "visible-infrared",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "PPA_CVPR26",
    "repoNames": [
      "PPA_CVPR26"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "second"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "48-48",
    "avgReadiness": 48.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / visible-infrared using PPA_CVPR26 and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "210-vlm-vision-language-models-evidence",
    "laneKey": "210-vlm-vision-language-models",
    "laneId": "vlm-vision-language-models",
    "theme": "vlm",
    "subtheme": "vision-language models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / vision-language models using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "210-vlm-vision-language-models-failure",
    "laneKey": "210-vlm-vision-language-models",
    "laneId": "vlm-vision-language-models",
    "theme": "vlm",
    "subtheme": "vision-language models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / vision-language models using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "210-vlm-vision-language-models-release",
    "laneKey": "210-vlm-vision-language-models",
    "laneId": "vlm-vision-language-models",
    "theme": "vlm",
    "subtheme": "vision-language models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "Recall",
    "repoNames": [
      "Recall"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fourth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "34-34",
    "avgReadiness": 34.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / vision-language models using Recall and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "211-vlm-vision-language-models-evidence",
    "laneKey": "211-vlm-vision-language-models",
    "laneId": "vlm-vision-language-models",
    "theme": "vlm",
    "subtheme": "vision-language-models",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / vision-language-models using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "211-vlm-vision-language-models-failure",
    "laneKey": "211-vlm-vision-language-models",
    "laneId": "vlm-vision-language-models",
    "theme": "vlm",
    "subtheme": "vision-language-models",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / vision-language-models using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "211-vlm-vision-language-models-release",
    "laneKey": "211-vlm-vision-language-models",
    "laneId": "vlm-vision-language-models",
    "theme": "vlm",
    "subtheme": "vision-language-models",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "GraphVLM",
    "repoNames": [
      "GraphVLM"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "third"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "43-43",
    "avgReadiness": 43.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / vision-language-models using GraphVLM and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "212-vlm-visual-grounding-evidence",
    "laneKey": "212-vlm-visual-grounding",
    "laneId": "vlm-visual-grounding",
    "theme": "vlm",
    "subtheme": "visual grounding",
    "probeKind": "evidence",
    "probeLabel": "Evidence inspection",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "unsupported-evidence",
    "operatorAction": "Open the linked demo page, inspect promoted artifacts, and confirm the subtheme claim is supported by a repo-backed output.",
    "acceptance": "Evidence inspection passes for vlm / visual grounding using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "212-vlm-visual-grounding-failure",
    "laneKey": "212-vlm-visual-grounding",
    "laneId": "vlm-visual-grounding",
    "theme": "vlm",
    "subtheme": "visual grounding",
    "probeKind": "failure",
    "probeLabel": "Failure stress",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "silent-regression",
    "operatorAction": "Stress the lane with the repo's hardest failure mode, then compare readiness and artifact evidence before promotion.",
    "acceptance": "Failure stress passes for vlm / visual grounding using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  },
  {
    "scenarioId": "212-vlm-visual-grounding-release",
    "laneKey": "212-vlm-visual-grounding",
    "laneId": "vlm-visual-grounding",
    "theme": "vlm",
    "subtheme": "visual grounding",
    "probeKind": "release",
    "probeLabel": "Release gate",
    "repoCount": 1,
    "primaryRepo": "See-It-Say-It-Sorted",
    "repoNames": [
      "See-It-Say-It-Sorted"
    ],
    "demoPage": "cvpr-grounded-vlm-repo-court.html",
    "deepViewerPage": "",
    "waves": [
      "fifth"
    ],
    "artifacts": 3,
    "controls": 5,
    "readinessBand": "46-46",
    "avgReadiness": 46.0,
    "risk": "release-drift",
    "operatorAction": "Rerun the repo replay gate and promote only when controls, artifacts, and demo links remain intact.",
    "acceptance": "Release gate passes for vlm / visual grounding using See-It-Say-It-Sorted and cvpr-grounded-vlm-repo-court.html.",
    "status": "scenario-ready"
  }
];
export const summary = {
  "lab": "cvpr-subtheme-scenario-lab",
  "status": "scenario-lab-ready",
  "sourceDrilldown": "analysis/cvpr_subtheme_coverage_drilldown/registry.json",
  "sourceLanes": 212,
  "topPaperRepos": 40,
  "themes": 8,
  "scenarios": 636,
  "readyScenarios": 636,
  "evidenceProbes": 212,
  "failureProbes": 212,
  "releaseProbes": 212,
  "repoLaneLinks": 237,
  "demoPageLinks": 222,
  "deepViewerLanes": 46,
  "artifacts": 711,
  "controls": 1185,
  "holds": 0,
  "validator": "scripts/verify_cvpr_subtheme_scenario_lab.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
