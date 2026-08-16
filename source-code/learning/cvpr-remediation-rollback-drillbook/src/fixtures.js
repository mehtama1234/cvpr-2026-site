export const canaryRows = [
  {
    "id": "adaptive-serving/gpu-brownout/review-hardening/retest/promotion/canary",
    "promotionId": "adaptive-serving/gpu-brownout/review-hardening/retest/promotion",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 73.8,
      "risk": 30.4,
      "evidence": 81.3,
      "resilience": 74.0
    },
    "metrics": {
      "drift": 6.2,
      "rollbackRisk": 19.6,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "adaptive-serving/adversarial-content/review-hardening/retest/promotion/canary",
    "promotionId": "adaptive-serving/adversarial-content/review-hardening/retest/promotion",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 79.8,
      "risk": 36.4,
      "evidence": 80.3,
      "resilience": 74.4
    },
    "metrics": {
      "drift": 7.4,
      "rollbackRisk": 23.4,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "adaptive-serving/compound-launch/review-hardening/retest/promotion/canary",
    "promotionId": "adaptive-serving/compound-launch/review-hardening/retest/promotion",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 72.8,
      "risk": 40.4,
      "evidence": 75.3,
      "resilience": 68.9
    },
    "metrics": {
      "drift": 8.6,
      "rollbackRisk": 26.5,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "constraint-edit/gpu-brownout/review-hardening/retest/promotion/canary",
    "promotionId": "constraint-edit/gpu-brownout/review-hardening/retest/promotion",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 77.8,
      "risk": 37.4,
      "evidence": 84.1,
      "resilience": 74.0
    },
    "metrics": {
      "drift": 6.7,
      "rollbackRisk": 23.0,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "constraint-edit/adversarial-content/review-hardening/retest/promotion/canary",
    "promotionId": "constraint-edit/adversarial-content/review-hardening/retest/promotion",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 83.8,
      "risk": 43.4,
      "evidence": 83.1,
      "resilience": 74.4
    },
    "metrics": {
      "drift": 4.4,
      "rollbackRisk": 12.5,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "constraint-edit/compound-launch/review-hardening/retest/promotion/canary",
    "promotionId": "constraint-edit/compound-launch/review-hardening/retest/promotion",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 76.8,
      "risk": 47.4,
      "evidence": 78.1,
      "resilience": 68.9
    },
    "metrics": {
      "drift": 5.0,
      "rollbackRisk": 13.7,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "open-vocab/gpu-brownout/review-hardening/retest/promotion/canary",
    "promotionId": "open-vocab/gpu-brownout/review-hardening/retest/promotion",
    "demoId": "open-vocab",
    "demoTitle": "Open-Vocabulary Failure Hunt",
    "theme": "Naming and locating what's in the picture",
    "page": "cvpr-open-vocab-failure-hunt.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 80.3,
      "risk": 35.6,
      "evidence": 86.6,
      "resilience": 76.3
    },
    "metrics": {
      "drift": 6.4,
      "rollbackRisk": 21.9,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "open-vocab/adversarial-content/review-hardening/retest/promotion/canary",
    "promotionId": "open-vocab/adversarial-content/review-hardening/retest/promotion",
    "demoId": "open-vocab",
    "demoTitle": "Open-Vocabulary Failure Hunt",
    "theme": "Naming and locating what's in the picture",
    "page": "cvpr-open-vocab-failure-hunt.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 86.3,
      "risk": 41.6,
      "evidence": 85.6,
      "resilience": 76.7
    },
    "metrics": {
      "drift": 7.6,
      "rollbackRisk": 25.8,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "open-vocab/compound-launch/review-hardening/retest/promotion/canary",
    "promotionId": "open-vocab/compound-launch/review-hardening/retest/promotion",
    "demoId": "open-vocab",
    "demoTitle": "Open-Vocabulary Failure Hunt",
    "theme": "Naming and locating what's in the picture",
    "page": "cvpr-open-vocab-failure-hunt.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 79.3,
      "risk": 45.6,
      "evidence": 80.6,
      "resilience": 71.1
    },
    "metrics": {
      "drift": 4.8,
      "rollbackRisk": 13.2,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "3d-edit-provenance/launch-audit/review-hardening/retest/promotion/canary",
    "promotionId": "3d-edit-provenance/launch-audit/review-hardening/retest/promotion",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 91.8,
      "risk": 31.3,
      "evidence": 88.1,
      "resilience": 83.1
    },
    "metrics": {
      "drift": 5.8,
      "rollbackRisk": 19.5,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "3d-edit-provenance/gpu-brownout/review-hardening/retest/promotion/canary",
    "promotionId": "3d-edit-provenance/gpu-brownout/review-hardening/retest/promotion",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 79.8,
      "risk": 41.3,
      "evidence": 82.1,
      "resilience": 73.1
    },
    "metrics": {
      "drift": 7.3,
      "rollbackRisk": 25.3,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "3d-edit-provenance/adversarial-content/review-hardening/retest/promotion/canary",
    "promotionId": "3d-edit-provenance/adversarial-content/review-hardening/retest/promotion",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 83.8,
      "risk": 49.3,
      "evidence": 80.1,
      "resilience": 71.7
    },
    "metrics": {
      "drift": 4.8,
      "rollbackRisk": 14.0,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "3d-edit-provenance/compound-launch/review-hardening/retest/promotion/canary",
    "promotionId": "3d-edit-provenance/compound-launch/review-hardening/retest/promotion",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 79.8,
      "risk": 50.3,
      "evidence": 76.1,
      "resilience": 68.8
    },
    "metrics": {
      "drift": 5.3,
      "rollbackRisk": 14.6,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "temporal-counterfactual/launch-audit/review-hardening/retest/promotion/canary",
    "promotionId": "temporal-counterfactual/launch-audit/review-hardening/retest/promotion",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 85.4,
      "risk": 40.4,
      "evidence": 71.8,
      "resilience": 73.6
    },
    "metrics": {
      "drift": 7.9,
      "rollbackRisk": 25.6,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "temporal-counterfactual/gpu-brownout/review-hardening/retest/promotion/canary",
    "promotionId": "temporal-counterfactual/gpu-brownout/review-hardening/retest/promotion",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 79.4,
      "risk": 44.4,
      "evidence": 68.8,
      "resilience": 69.0
    },
    "metrics": {
      "drift": 4.7,
      "rollbackRisk": 12.9,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "temporal-counterfactual/adversarial-content/review-hardening/retest/promotion/canary",
    "promotionId": "temporal-counterfactual/adversarial-content/review-hardening/retest/promotion",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 85.4,
      "risk": 50.4,
      "evidence": 67.8,
      "resilience": 69.4
    },
    "metrics": {
      "drift": 5.4,
      "rollbackRisk": 14.7,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "temporal-counterfactual/compound-launch/risk-containment/retest/promotion/canary",
    "promotionId": "temporal-counterfactual/compound-launch/risk-containment/retest/promotion",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 80.4,
      "risk": 46.4,
      "evidence": 60.8,
      "resilience": 67.0
    },
    "metrics": {
      "drift": 5.6,
      "rollbackRisk": 16.7,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "grounded-answer/launch-audit/review-hardening/retest/promotion/canary",
    "promotionId": "grounded-answer/launch-audit/review-hardening/retest/promotion",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 89.2,
      "risk": 36.6,
      "evidence": 73.9,
      "resilience": 77.1
    },
    "metrics": {
      "drift": 7.4,
      "rollbackRisk": 23.5,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "grounded-answer/gpu-brownout/review-hardening/retest/promotion/canary",
    "promotionId": "grounded-answer/gpu-brownout/review-hardening/retest/promotion",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 77.2,
      "risk": 46.6,
      "evidence": 67.9,
      "resilience": 67.1
    },
    "metrics": {
      "drift": 4.9,
      "rollbackRisk": 16.2,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "grounded-answer/adversarial-content/review-hardening/retest/promotion/canary",
    "promotionId": "grounded-answer/adversarial-content/review-hardening/retest/promotion",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 89.2,
      "risk": 46.6,
      "evidence": 69.9,
      "resilience": 72.8
    },
    "metrics": {
      "drift": 5.1,
      "rollbackRisk": 13.6,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "grounded-answer/compound-launch/risk-containment/retest/promotion/canary",
    "promotionId": "grounded-answer/compound-launch/risk-containment/retest/promotion",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 87.2,
      "risk": 39.6,
      "evidence": 63.9,
      "resilience": 73.0
    },
    "metrics": {
      "drift": 9.3,
      "rollbackRisk": 27.0,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "provenance-red-team/launch-audit/review-hardening/retest/promotion/canary",
    "promotionId": "provenance-red-team/launch-audit/review-hardening/retest/promotion",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "promotion": "promote",
    "afterDecision": "release",
    "after": {
      "readiness": 87.3,
      "risk": 38.7,
      "evidence": 90.8,
      "resilience": 79.2
    },
    "metrics": {
      "drift": 6.4,
      "rollbackRisk": 23.2,
      "trafficPct": 20
    },
    "canaryStatus": "clean",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py"
  },
  {
    "id": "provenance-red-team/gpu-brownout/review-hardening/retest/promotion/canary",
    "promotionId": "provenance-red-team/gpu-brownout/review-hardening/retest/promotion",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 73.3,
      "risk": 50.7,
      "evidence": 83.8,
      "resilience": 67.5
    },
    "metrics": {
      "drift": 4.5,
      "rollbackRisk": 16.9,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "provenance-red-team/adversarial-content/review-hardening/retest/promotion/canary",
    "promotionId": "provenance-red-team/adversarial-content/review-hardening/retest/promotion",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 87.3,
      "risk": 48.7,
      "evidence": 86.8,
      "resilience": 75.0
    },
    "metrics": {
      "drift": 4.6,
      "rollbackRisk": 13.8,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "provenance-red-team/compound-launch/risk-containment/retest/promotion/canary",
    "promotionId": "provenance-red-team/compound-launch/risk-containment/retest/promotion",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 82.3,
      "risk": 44.7,
      "evidence": 79.8,
      "resilience": 72.6
    },
    "metrics": {
      "drift": 4.8,
      "rollbackRisk": 13.0,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/launch-audit/review-hardening/retest/promotion/canary",
    "promotionId": "safety-deployment/launch-audit/review-hardening/retest/promotion",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 70.1,
      "risk": 40.2,
      "evidence": 69.5,
      "resilience": 66.5
    },
    "metrics": {
      "drift": 4.4,
      "rollbackRisk": 14.5,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/gpu-brownout/readiness-recovery/retest/promotion/canary",
    "promotionId": "safety-deployment/gpu-brownout/readiness-recovery/retest/promotion",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 70.1,
      "risk": 52.2,
      "evidence": 64.5,
      "resilience": 61.3
    },
    "metrics": {
      "drift": 5.3,
      "rollbackRisk": 17.7,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/adversarial-content/evidence-repair/retest/promotion/canary",
    "promotionId": "safety-deployment/adversarial-content/evidence-repair/retest/promotion",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 64.1,
      "risk": 56.2,
      "evidence": 73.5,
      "resilience": 59.3
    },
    "metrics": {
      "drift": 5.5,
      "rollbackRisk": 18.7,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/compound-launch/risk-containment/retest/promotion/canary",
    "promotionId": "safety-deployment/compound-launch/risk-containment/retest/promotion",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "monitor",
    "afterDecision": "review",
    "after": {
      "readiness": 65.1,
      "risk": 46.2,
      "evidence": 58.5,
      "resilience": 59.8
    },
    "metrics": {
      "drift": 5.7,
      "rollbackRisk": 16.7,
      "trafficPct": 8
    },
    "canaryStatus": "watch",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  }
];
export const drills = [
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
      "rollbackRisk": 38.6,
      "drift": 10.2,
      "trafficPct": 20
    },
    "severity": "high",
    "trigger": "rollback risk 38.6 or drift 10.2",
    "response": "freeze promoted traffic, demote to monitor, rerun retest harness",
    "ownerSurface": "cvpr-provenance-red-team-arena.html",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_promotion_board.py",
    "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
  },
  {
    "id": "safety-deployment/adversarial-content/rollback-drill",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "promotion": "monitor",
    "currentStatus": "watch",
    "scenario": {
      "rollbackRisk": 33.9,
      "drift": 9.9,
      "trafficPct": 8
    },
    "severity": "focused",
    "trigger": "rollback risk 33.9 or drift 9.9",
    "response": "keep traffic capped, reopen remediation action, rerun retest harness",
    "ownerSurface": "cvpr-safety-deployment-simulator.html",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
    "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
  },
  {
    "id": "safety-deployment/gpu-brownout/rollback-drill",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "monitor",
    "currentStatus": "watch",
    "scenario": {
      "rollbackRisk": 31.1,
      "drift": 9.1,
      "trafficPct": 8
    },
    "severity": "focused",
    "trigger": "rollback risk 31.1 or drift 9.1",
    "response": "keep traffic capped, reopen remediation action, rerun retest harness",
    "ownerSurface": "cvpr-safety-deployment-simulator.html",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
    "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
  },
  {
    "id": "provenance-red-team/gpu-brownout/rollback-drill",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "promotion": "monitor",
    "currentStatus": "watch",
    "scenario": {
      "rollbackRisk": 30.3,
      "drift": 8.3,
      "trafficPct": 8
    },
    "severity": "focused",
    "trigger": "rollback risk 30.3 or drift 8.3",
    "response": "keep traffic capped, reopen remediation action, rerun retest harness",
    "ownerSurface": "cvpr-provenance-red-team-arena.html",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
    "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
  },
  {
    "id": "safety-deployment/compound-launch/rollback-drill",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "promotion": "monitor",
    "currentStatus": "watch",
    "scenario": {
      "rollbackRisk": 33.7,
      "drift": 10.7,
      "trafficPct": 8
    },
    "severity": "focused",
    "trigger": "rollback risk 33.7 or drift 10.7",
    "response": "keep traffic capped, reopen remediation action, rerun retest harness",
    "ownerSurface": "cvpr-safety-deployment-simulator.html",
    "responseCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py",
    "validationCommand": "python3 scripts/validate_cvpr_full_stack.py"
  }
];
export const summary = {
  "demo": "cvpr-remediation-rollback-drillbook",
  "status": "ready",
  "sourceDemo": "cvpr-remediation-canary-monitor",
  "sourceCanaries": 29,
  "drills": 12,
  "readyDrills": 12,
  "critical": 2,
  "high": 6,
  "focused": 4,
  "promotedDrills": 8,
  "monitoredDrills": 4,
  "themes": 7,
  "incidents": 4,
  "canaryRollback": 0,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
