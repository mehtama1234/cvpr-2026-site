export const promotionRows = [
  {
    "id": "adaptive-serving/gpu-brownout/review-hardening/retest/promotion",
    "retestId": "adaptive-serving/gpu-brownout/review-hardening/retest",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 73.8,
      "risk": 30.4,
      "evidence": 81.3,
      "resilience": 74.0
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "adaptive-serving/adversarial-content/review-hardening/retest/promotion",
    "retestId": "adaptive-serving/adversarial-content/review-hardening/retest",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 79.8,
      "risk": 36.4,
      "evidence": 80.3,
      "resilience": 74.4
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "adaptive-serving/compound-launch/review-hardening/retest/promotion",
    "retestId": "adaptive-serving/compound-launch/review-hardening/retest",
    "demoId": "adaptive-serving",
    "demoTitle": "Adaptive Serving Stress Lab",
    "theme": "Learning more from less, and not breaking",
    "page": "cvpr-adaptive-serving-stress-lab.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "release",
    "after": {
      "readiness": 72.8,
      "risk": 40.4,
      "evidence": 75.3,
      "resilience": 68.9
    },
    "clearedBlock": true,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "constraint-edit/gpu-brownout/review-hardening/retest/promotion",
    "retestId": "constraint-edit/gpu-brownout/review-hardening/retest",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 77.8,
      "risk": 37.4,
      "evidence": 84.1,
      "resilience": 74.0
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "constraint-edit/adversarial-content/review-hardening/retest/promotion",
    "retestId": "constraint-edit/adversarial-content/review-hardening/retest",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "review",
    "after": {
      "readiness": 83.8,
      "risk": 43.4,
      "evidence": 83.1,
      "resilience": 74.4
    },
    "clearedBlock": false,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "constraint-edit/compound-launch/review-hardening/retest/promotion",
    "retestId": "constraint-edit/compound-launch/review-hardening/retest",
    "demoId": "constraint-edit",
    "demoTitle": "Constraint Edit Tournament",
    "theme": "Making pixels from meaning",
    "page": "cvpr-constraint-edit-tournament.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 76.8,
      "risk": 47.4,
      "evidence": 78.1,
      "resilience": 68.9
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "open-vocab/gpu-brownout/review-hardening/retest/promotion",
    "retestId": "open-vocab/gpu-brownout/review-hardening/retest",
    "demoId": "open-vocab",
    "demoTitle": "Open-Vocabulary Failure Hunt",
    "theme": "Naming and locating what's in the picture",
    "page": "cvpr-open-vocab-failure-hunt.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 80.3,
      "risk": 35.6,
      "evidence": 86.6,
      "resilience": 76.3
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "open-vocab/adversarial-content/review-hardening/retest/promotion",
    "retestId": "open-vocab/adversarial-content/review-hardening/retest",
    "demoId": "open-vocab",
    "demoTitle": "Open-Vocabulary Failure Hunt",
    "theme": "Naming and locating what's in the picture",
    "page": "cvpr-open-vocab-failure-hunt.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 86.3,
      "risk": 41.6,
      "evidence": 85.6,
      "resilience": 76.7
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "open-vocab/compound-launch/review-hardening/retest/promotion",
    "retestId": "open-vocab/compound-launch/review-hardening/retest",
    "demoId": "open-vocab",
    "demoTitle": "Open-Vocabulary Failure Hunt",
    "theme": "Naming and locating what's in the picture",
    "page": "cvpr-open-vocab-failure-hunt.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 79.3,
      "risk": 45.6,
      "evidence": 80.6,
      "resilience": 71.1
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "3d-edit-provenance/launch-audit/review-hardening/retest/promotion",
    "retestId": "3d-edit-provenance/launch-audit/review-hardening/retest",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 91.8,
      "risk": 31.3,
      "evidence": 88.1,
      "resilience": 83.1
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "3d-edit-provenance/gpu-brownout/review-hardening/retest/promotion",
    "retestId": "3d-edit-provenance/gpu-brownout/review-hardening/retest",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 79.8,
      "risk": 41.3,
      "evidence": 82.1,
      "resilience": 73.1
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "3d-edit-provenance/adversarial-content/review-hardening/retest/promotion",
    "retestId": "3d-edit-provenance/adversarial-content/review-hardening/retest",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "review",
    "after": {
      "readiness": 83.8,
      "risk": 49.3,
      "evidence": 80.1,
      "resilience": 71.7
    },
    "clearedBlock": false,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "3d-edit-provenance/compound-launch/review-hardening/retest/promotion",
    "retestId": "3d-edit-provenance/compound-launch/review-hardening/retest",
    "demoId": "3d-edit-provenance",
    "demoTitle": "3D Edit Provenance Room",
    "theme": "Recovering the 3D world from flat pictures",
    "page": "cvpr-3d-edit-provenance-room.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 79.8,
      "risk": 50.3,
      "evidence": 76.1,
      "resilience": 68.8
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "temporal-counterfactual/launch-audit/review-hardening/retest/promotion",
    "retestId": "temporal-counterfactual/launch-audit/review-hardening/retest",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 85.4,
      "risk": 40.4,
      "evidence": 71.8,
      "resilience": 73.6
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "temporal-counterfactual/gpu-brownout/review-hardening/retest/promotion",
    "retestId": "temporal-counterfactual/gpu-brownout/review-hardening/retest",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 79.4,
      "risk": 44.4,
      "evidence": 68.8,
      "resilience": 69.0
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "temporal-counterfactual/adversarial-content/review-hardening/retest/promotion",
    "retestId": "temporal-counterfactual/adversarial-content/review-hardening/retest",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 85.4,
      "risk": 50.4,
      "evidence": 67.8,
      "resilience": 69.4
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "temporal-counterfactual/compound-launch/risk-containment/retest/promotion",
    "retestId": "temporal-counterfactual/compound-launch/risk-containment/retest",
    "demoId": "temporal-counterfactual",
    "demoTitle": "Temporal Counterfactual Lab",
    "theme": "Seeing and making things that move",
    "page": "cvpr-temporal-counterfactual-lab.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "critical",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 80.4,
      "risk": 46.4,
      "evidence": 60.8,
      "resilience": 67.0
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "grounded-answer/launch-audit/review-hardening/retest/promotion",
    "retestId": "grounded-answer/launch-audit/review-hardening/retest",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 89.2,
      "risk": 36.6,
      "evidence": 73.9,
      "resilience": 77.1
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "grounded-answer/gpu-brownout/review-hardening/retest/promotion",
    "retestId": "grounded-answer/gpu-brownout/review-hardening/retest",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "review",
    "after": {
      "readiness": 77.2,
      "risk": 46.6,
      "evidence": 67.9,
      "resilience": 67.1
    },
    "clearedBlock": false,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "grounded-answer/adversarial-content/review-hardening/retest/promotion",
    "retestId": "grounded-answer/adversarial-content/review-hardening/retest",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 89.2,
      "risk": 46.6,
      "evidence": 69.9,
      "resilience": 72.8
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "grounded-answer/compound-launch/risk-containment/retest/promotion",
    "retestId": "grounded-answer/compound-launch/risk-containment/retest",
    "demoId": "grounded-answer",
    "demoTitle": "Grounded Answer Courtroom",
    "theme": "Teaching machines to see and talk at once",
    "page": "cvpr-grounded-answer-courtroom.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "critical",
    "beforeDecision": "block",
    "afterDecision": "release",
    "after": {
      "readiness": 87.2,
      "risk": 39.6,
      "evidence": 63.9,
      "resilience": 73.0
    },
    "clearedBlock": true,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "provenance-red-team/launch-audit/review-hardening/retest/promotion",
    "retestId": "provenance-red-team/launch-audit/review-hardening/retest",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "release",
    "after": {
      "readiness": 87.3,
      "risk": 38.7,
      "evidence": 90.8,
      "resilience": 79.2
    },
    "clearedBlock": false,
    "promotedRelease": true,
    "promotion": "promote",
    "reason": "release retest meets risk, evidence, and resilience promotion thresholds",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "provenance-red-team/gpu-brownout/review-hardening/retest/promotion",
    "retestId": "provenance-red-team/gpu-brownout/review-hardening/retest",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "review",
    "after": {
      "readiness": 73.3,
      "risk": 50.7,
      "evidence": 83.8,
      "resilience": 67.5
    },
    "clearedBlock": false,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "provenance-red-team/adversarial-content/review-hardening/retest/promotion",
    "retestId": "provenance-red-team/adversarial-content/review-hardening/retest",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 87.3,
      "risk": 48.7,
      "evidence": 86.8,
      "resilience": 75.0
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "provenance-red-team/compound-launch/risk-containment/retest/promotion",
    "retestId": "provenance-red-team/compound-launch/risk-containment/retest",
    "demoId": "provenance-red-team",
    "demoTitle": "Provenance Red-Team Arena",
    "theme": "The frontier - new senses and new duties",
    "page": "cvpr-provenance-red-team-arena.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "critical",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 82.3,
      "risk": 44.7,
      "evidence": 79.8,
      "resilience": 72.6
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/launch-audit/review-hardening/retest/promotion",
    "retestId": "safety-deployment/launch-audit/review-hardening/retest",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "launch-audit",
    "incidentTitle": "Launch audit",
    "priority": "focused",
    "beforeDecision": "review",
    "afterDecision": "review",
    "after": {
      "readiness": 70.1,
      "risk": 40.2,
      "evidence": 69.5,
      "resilience": 66.5
    },
    "clearedBlock": false,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/gpu-brownout/readiness-recovery/retest/promotion",
    "retestId": "safety-deployment/gpu-brownout/readiness-recovery/retest",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "gpu-brownout",
    "incidentTitle": "GPU brownout",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 70.1,
      "risk": 52.2,
      "evidence": 64.5,
      "resilience": 61.3
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/adversarial-content/evidence-repair/retest/promotion",
    "retestId": "safety-deployment/adversarial-content/evidence-repair/retest",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "adversarial-content",
    "incidentTitle": "Adversarial content",
    "priority": "high",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 64.1,
      "risk": 56.2,
      "evidence": 73.5,
      "resilience": 59.3
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  },
  {
    "id": "safety-deployment/compound-launch/risk-containment/retest/promotion",
    "retestId": "safety-deployment/compound-launch/risk-containment/retest",
    "demoId": "safety-deployment",
    "demoTitle": "Safety Deployment Simulator",
    "theme": "Using vision to act in the world",
    "page": "cvpr-safety-deployment-simulator.html",
    "incidentId": "compound-launch",
    "incidentTitle": "Compound launch",
    "priority": "critical",
    "beforeDecision": "block",
    "afterDecision": "review",
    "after": {
      "readiness": 65.1,
      "risk": 46.2,
      "evidence": 58.5,
      "resilience": 59.8
    },
    "clearedBlock": true,
    "promotedRelease": false,
    "promotion": "monitor",
    "reason": "block cleared or review improved, but still requires launch monitoring",
    "verificationCommand": "python3 scripts/verify_cvpr_remediation_retest_harness.py"
  }
];
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
export const summary = {
  "demo": "cvpr-remediation-canary-monitor",
  "status": "watching",
  "sourceDemo": "cvpr-remediation-promotion-board",
  "rows": 29,
  "sourcePromotions": 29,
  "clean": 12,
  "watch": 17,
  "rollback": 0,
  "promotedRows": 12,
  "monitoredRows": 17,
  "maxRollbackRisk": 27.0,
  "maxDrift": 9.3,
  "themes": 8,
  "incidents": 4,
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
