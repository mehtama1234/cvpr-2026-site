export const executionRows = [
  {
    "wave": 0,
    "start": 0,
    "limit": 5,
    "theme": "frontier",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "frontier-01-github-com-yjzhao1019-mos",
      "frontier-02-github-com-earth-insights-segear",
      "frontier-03-github-com-fahadshamshad-raven",
      "frontier-04-github-com-jimmyxichen-mm-ovseg",
      "frontier-05-github-com-zhang-peirong-geovis"
    ],
    "pages": [
      "cvpr-frontier-sensor-fusion-bench.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 0 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "receipt-ready",
    "receipt": "cvpr-repo-harness-first-batch-receipt",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  },
  {
    "wave": 1,
    "start": 5,
    "limit": 5,
    "theme": "threed",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "threed-01-github-com-deepinsight-insightfa",
      "threed-02-github-com-myniuuu-mad-avatar",
      "threed-03-github-com-akumar005-l2dgs",
      "threed-04-github-com-wangys16-flow4dgs-sla",
      "threed-05-github-com-wanghaoran16-prune-wi"
    ],
    "pages": [
      "cvpr-3d-world-repo-arena.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 5 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 5 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "queued",
    "receipt": "",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  },
  {
    "wave": 2,
    "start": 10,
    "limit": 5,
    "theme": "video",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "video-01-github-com-black-forest-labs-flu",
      "video-02-github-com-deepfakes-face",
      "video-03-github-com-modelscope-diffsynth",
      "video-04-github-com-arturxe2-adaspot",
      "video-05-github-com-dmirlab-group-hal"
    ],
    "pages": [
      "cvpr-video-temporal-repo-lab.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 10 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 10 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "queued",
    "receipt": "",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  },
  {
    "wave": 3,
    "start": 15,
    "limit": 5,
    "theme": "generation",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "generation-01-github-com-joyies-gdpo",
      "generation-02-github-com-chanson94-codsr",
      "generation-03-github-com-gyr02-nadb",
      "generation-04-github-com-jf-tan-lrdm",
      "generation-05-github-com-mililab-rdbm"
    ],
    "pages": [
      "cvpr-generation-control-repo-studio.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 15 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 15 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "queued",
    "receipt": "",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  },
  {
    "wave": 4,
    "start": 20,
    "limit": 5,
    "theme": "vlm",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "vlm-01-github-com-chao2433-fedafd",
      "vlm-02-github-com-dige945-ppa-cvpr26",
      "vlm-03-github-com-oamyjin-graphvlm",
      "vlm-04-github-com-remrico-recall",
      "vlm-05-github-com-uuuuzyc-see-it-say-it"
    ],
    "pages": [
      "cvpr-grounded-vlm-repo-court.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 20 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 20 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "queued",
    "receipt": "",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  },
  {
    "wave": 5,
    "start": 25,
    "limit": 5,
    "theme": "perception",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "perception-01-github-com-primebo1-fob",
      "perception-02-github-com-zzzphaethon-dapass",
      "perception-03-github-com-hzz-yy-tf-ssd",
      "perception-04-github-com-yvogao-tape",
      "perception-05-github-com-jsliam94-erecu"
    ],
    "pages": [
      "cvpr-perception-parts-repo-bench.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 25 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 25 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "queued",
    "receipt": "",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  },
  {
    "wave": 6,
    "start": 30,
    "limit": 5,
    "theme": "embodied",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "embodied-01-github-com-szu-ai-safe-driving-d",
      "embodied-02-github-com-bofusun-srcp",
      "embodied-03-github-com-codeshop715-energyact",
      "embodied-04-github-com-hrtan-diem",
      "embodied-05-github-com-jiutian-vl-hiconagent"
    ],
    "pages": [
      "cvpr-embodied-control-repo-drill.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 30 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 30 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "queued",
    "receipt": "",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  },
  {
    "wave": 7,
    "start": 35,
    "limit": 5,
    "theme": "learning",
    "jobs": 5,
    "repos": 5,
    "jobIds": [
      "learning-01-github-com-eit-nlp-embedlens",
      "learning-02-github-com-cgcl-codes-nuwa",
      "learning-03-github-com-evi-group-scu-fozo",
      "learning-04-github-com-savadikarc-cheem",
      "learning-05-github-com-liwenwang919-bpfedctt"
    ],
    "pages": [
      "cvpr-efficient-learning-repo-governor.html"
    ],
    "runCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 35 --limit 5",
    "dryRunCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/run_repo_harness_worker.py --start 35 --limit 5 --dry-run",
    "validationCommand": "python3 scripts/validate_cvpr_repo_harness_results.py --results source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
    "status": "ready",
    "state": "queued",
    "receipt": "",
    "handoffPage": "cvpr-repo-harness-handoff-package.html",
    "workerPage": "cvpr-repo-harness-worker.html",
    "intakePage": "cvpr-repo-harness-live-intake.html"
  }
];
export const summary = {
  "dashboard": "cvpr-repo-harness-execution-dashboard",
  "status": "ready",
  "runtimePlane": "google-colab-pro-plus",
  "jobs": 40,
  "repos": 40,
  "waves": 8,
  "readyWaves": 8,
  "queued": 7,
  "receiptReady": 1,
  "intakeStatus": "valid",
  "intakeIssues": 0,
  "handoffStatus": "ready",
  "workerStatus": "ready",
  "zipPath": "analysis/cvpr_repo_harness_handoff_package/cvpr_repo_harness_handoff_package.zip",
  "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
