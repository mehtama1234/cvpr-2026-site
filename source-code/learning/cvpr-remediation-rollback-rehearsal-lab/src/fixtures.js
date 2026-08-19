export const drills = [
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
    "id": "constraint-edit/rare-object-distractor/rollback-drill",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "rare-object-distractor",
    "incidentTitle": "Rare-object distractor",
    "promotion": "promote",
    "currentStatus": "clean",
    "scenario": {
      "rollbackRisk": 38.9,
      "drift": 10.6,
      "trafficPct": 20
    },
    "severity": "high",
    "trigger": "rollback risk 38.9 or drift 10.6",
    "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
    "ownerSurface": "cvpr-constraint-edit-tournament.html",
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
    "id": "temporal-counterfactual/unsupported-query/rollback-drill",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "unsupported-query",
    "incidentTitle": "Unsupported query",
    "promotion": "promote",
    "currentStatus": "clean",
    "scenario": {
      "rollbackRisk": 41.8,
      "drift": 12.3,
      "trafficPct": 20
    },
    "severity": "high",
    "trigger": "rollback risk 41.8 or drift 12.3",
    "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
    "ownerSurface": "cvpr-temporal-counterfactual-lab.html",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
    "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
  },
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
      "rollbackRisk": 34.8,
      "drift": 9.4,
      "trafficPct": 20
    },
    "severity": "focused",
    "trigger": "rollback risk 34.8 or drift 9.4",
    "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
    "ownerSurface": "cvpr-provenance-red-team-arena.html",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
    "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
  },
  {
    "id": "safety-deployment/launch-audit/rollback-drill",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "promotion": "promote",
    "currentStatus": "clean",
    "scenario": {
      "rollbackRisk": 37.4,
      "drift": 11.1,
      "trafficPct": 20
    },
    "severity": "high",
    "trigger": "rollback risk 37.4 or drift 11.1",
    "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
    "ownerSurface": "cvpr-safety-deployment-simulator.html",
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
    "id": "adaptive-serving/adversarial-text-overlay/rollback-drill",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "adversarial-text-overlay",
    "incidentTitle": "Adversarial text overlay",
    "promotion": "promote",
    "currentStatus": "clean",
    "scenario": {
      "rollbackRisk": 40.0,
      "drift": 11.2,
      "trafficPct": 20
    },
    "severity": "high",
    "trigger": "rollback risk 40.0 or drift 11.2",
    "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
    "ownerSurface": "cvpr-adaptive-serving-stress-lab.html",
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
  }
];
export const rehearsalRows = [
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
    "id": "constraint-edit/rare-object-distractor/rollback-drill/rehearsal",
    "drillId": "constraint-edit/rare-object-distractor/rollback-drill",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "rare-object-distractor",
    "incidentTitle": "Rare-object distractor",
    "severity": "high",
    "promotion": "promote",
    "trigger": "rollback risk 38.9 or drift 10.6",
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
    "id": "temporal-counterfactual/unsupported-query/rollback-drill/rehearsal",
    "drillId": "temporal-counterfactual/unsupported-query/rollback-drill",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "unsupported-query",
    "incidentTitle": "Unsupported query",
    "severity": "high",
    "promotion": "promote",
    "trigger": "rollback risk 41.8 or drift 12.3",
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
    "id": "provenance-red-team/launch-audit/rollback-drill/rehearsal",
    "drillId": "provenance-red-team/launch-audit/rollback-drill",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "severity": "focused",
    "promotion": "promote",
    "trigger": "rollback risk 34.8 or drift 9.4",
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
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
    "rehearsalStatus": "pass"
  },
  {
    "id": "safety-deployment/launch-audit/rollback-drill/rehearsal",
    "drillId": "safety-deployment/launch-audit/rollback-drill",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "severity": "high",
    "promotion": "promote",
    "trigger": "rollback risk 37.4 or drift 11.1",
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
    "id": "adaptive-serving/adversarial-text-overlay/rollback-drill/rehearsal",
    "drillId": "adaptive-serving/adversarial-text-overlay/rollback-drill",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "adversarial-text-overlay",
    "incidentTitle": "Adversarial text overlay",
    "severity": "high",
    "promotion": "promote",
    "trigger": "rollback risk 40.0 or drift 11.2",
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
  }
];
export const summary = {
  "demo": "cvpr-remediation-rollback-rehearsal-lab",
  "status": "release",
  "sourceDemo": "cvpr-remediation-rollback-drillbook",
  "sourceDrills": 12,
  "rehearsals": 12,
  "passing": 12,
  "misses": 0,
  "critical": 2,
  "high": 9,
  "focused": 1,
  "maxElapsedMinutes": 39,
  "maxTargetMinutes": 40,
  "themes": 8,
  "incidents": 7,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
