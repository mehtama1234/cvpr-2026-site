export const manifest = {
  "manifest": "cvpr-repo-harness-live-v1",
  "runtimePlane": "google-colab-pro-plus",
  "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
  "incomingArtifact": "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
  "canonicalArtifact": "analysis/cvpr_repo_gpu_harness/cached_harness_results.json",
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "jobs": [
    {
      "jobId": "frontier-01-github-com-yjzhao1019-mos",
      "demo": "cvpr-frontier-sensor-fusion-bench",
      "theme": "frontier",
      "page": "cvpr-frontier-sensor-fusion-bench.html",
      "repo": "https://github.com/yjzhao1019/MOS",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/yjzhao1019/MOS repos/github-com-yjzhao1019-mos",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-yjzhao1019-mos --job frontier-01-github-com-yjzhao1019-mos",
      "expectedResult": 1
    },
    {
      "jobId": "frontier-02-github-com-earth-insights-segear",
      "demo": "cvpr-frontier-sensor-fusion-bench",
      "theme": "frontier",
      "page": "cvpr-frontier-sensor-fusion-bench.html",
      "repo": "https://github.com/earth-insights/SegEarth-R2",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/earth-insights/SegEarth-R2 repos/github-com-earth-insights-segearth-r2",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-earth-insights-segearth-r2 --job frontier-02-github-com-earth-insights-segear",
      "expectedResult": 1
    },
    {
      "jobId": "frontier-03-github-com-fahadshamshad-raven",
      "demo": "cvpr-frontier-sensor-fusion-bench",
      "theme": "frontier",
      "page": "cvpr-frontier-sensor-fusion-bench.html",
      "repo": "https://github.com/fahadshamshad/raven-",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/fahadshamshad/raven- repos/github-com-fahadshamshad-raven",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-fahadshamshad-raven --job frontier-03-github-com-fahadshamshad-raven",
      "expectedResult": 1
    },
    {
      "jobId": "frontier-04-github-com-jimmyxichen-mm-ovseg",
      "demo": "cvpr-frontier-sensor-fusion-bench",
      "theme": "frontier",
      "page": "cvpr-frontier-sensor-fusion-bench.html",
      "repo": "https://github.com/Jimmyxichen/MM-OVSeg",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/Jimmyxichen/MM-OVSeg repos/github-com-jimmyxichen-mm-ovseg",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-jimmyxichen-mm-ovseg --job frontier-04-github-com-jimmyxichen-mm-ovseg",
      "expectedResult": 1
    },
    {
      "jobId": "frontier-05-github-com-zhang-peirong-geovis",
      "demo": "cvpr-frontier-sensor-fusion-bench",
      "theme": "frontier",
      "page": "cvpr-frontier-sensor-fusion-bench.html",
      "repo": "https://github.com/Zhang-Peirong/GeoVis",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/Zhang-Peirong/GeoVis repos/github-com-zhang-peirong-geovis",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-zhang-peirong-geovis --job frontier-05-github-com-zhang-peirong-geovis",
      "expectedResult": 1
    },
    {
      "jobId": "threed-01-github-com-deepinsight-insightfa",
      "demo": "cvpr-3d-world-repo-arena",
      "theme": "threed",
      "page": "cvpr-3d-world-repo-arena.html",
      "repo": "https://github.com/deepinsight/insightface",
      "gpuClass": "A100",
      "cloneCommand": "git clone --depth 1 https://github.com/deepinsight/insightface repos/github-com-deepinsight-insightface",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-deepinsight-insightface --job threed-01-github-com-deepinsight-insightfa",
      "expectedResult": 1
    },
    {
      "jobId": "threed-02-github-com-myniuuu-mad-avatar",
      "demo": "cvpr-3d-world-repo-arena",
      "theme": "threed",
      "page": "cvpr-3d-world-repo-arena.html",
      "repo": "https://github.com/MyNiuuu/MAD-Avatar",
      "gpuClass": "A100",
      "cloneCommand": "git clone --depth 1 https://github.com/MyNiuuu/MAD-Avatar repos/github-com-myniuuu-mad-avatar",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-myniuuu-mad-avatar --job threed-02-github-com-myniuuu-mad-avatar",
      "expectedResult": 1
    },
    {
      "jobId": "threed-03-github-com-akumar005-l2dgs",
      "demo": "cvpr-3d-world-repo-arena",
      "theme": "threed",
      "page": "cvpr-3d-world-repo-arena.html",
      "repo": "https://github.com/akumar005/L2DGS",
      "gpuClass": "A100",
      "cloneCommand": "git clone --depth 1 https://github.com/akumar005/L2DGS repos/github-com-akumar005-l2dgs",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-akumar005-l2dgs --job threed-03-github-com-akumar005-l2dgs",
      "expectedResult": 1
    },
    {
      "jobId": "threed-04-github-com-wangys16-flow4dgs-sla",
      "demo": "cvpr-3d-world-repo-arena",
      "theme": "threed",
      "page": "cvpr-3d-world-repo-arena.html",
      "repo": "https://github.com/wangys16/Flow4DGS-SLAM",
      "gpuClass": "A100",
      "cloneCommand": "git clone --depth 1 https://github.com/wangys16/Flow4DGS-SLAM repos/github-com-wangys16-flow4dgs-slam",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-wangys16-flow4dgs-slam --job threed-04-github-com-wangys16-flow4dgs-sla",
      "expectedResult": 1
    },
    {
      "jobId": "threed-05-github-com-wanghaoran16-prune-wi",
      "demo": "cvpr-3d-world-repo-arena",
      "theme": "threed",
      "page": "cvpr-3d-world-repo-arena.html",
      "repo": "https://github.com/WangHaoran16/Prune-Wisely-",
      "gpuClass": "A100",
      "cloneCommand": "git clone --depth 1 https://github.com/WangHaoran16/Prune-Wisely- repos/github-com-wanghaoran16-prune-wisely",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-wanghaoran16-prune-wisely --job threed-05-github-com-wanghaoran16-prune-wi",
      "expectedResult": 1
    },
    {
      "jobId": "video-01-github-com-black-forest-labs-flu",
      "demo": "cvpr-video-temporal-repo-lab",
      "theme": "video",
      "page": "cvpr-video-temporal-repo-lab.html",
      "repo": "https://github.com/black-forest-labs/flux",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/black-forest-labs/flux repos/github-com-black-forest-labs-flux",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-black-forest-labs-flux --job video-01-github-com-black-forest-labs-flu",
      "expectedResult": 1
    },
    {
      "jobId": "video-02-github-com-deepfakes-face",
      "demo": "cvpr-video-temporal-repo-lab",
      "theme": "video",
      "page": "cvpr-video-temporal-repo-lab.html",
      "repo": "https://github.com/deepfakes/face-",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/deepfakes/face- repos/github-com-deepfakes-face",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-deepfakes-face --job video-02-github-com-deepfakes-face",
      "expectedResult": 1
    },
    {
      "jobId": "video-03-github-com-modelscope-diffsynth",
      "demo": "cvpr-video-temporal-repo-lab",
      "theme": "video",
      "page": "cvpr-video-temporal-repo-lab.html",
      "repo": "https://github.com/modelscope/DiffSynth-",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/modelscope/DiffSynth- repos/github-com-modelscope-diffsynth",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-modelscope-diffsynth --job video-03-github-com-modelscope-diffsynth",
      "expectedResult": 1
    },
    {
      "jobId": "video-04-github-com-arturxe2-adaspot",
      "demo": "cvpr-video-temporal-repo-lab",
      "theme": "video",
      "page": "cvpr-video-temporal-repo-lab.html",
      "repo": "https://github.com/arturxe2/AdaSpot",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/arturxe2/AdaSpot repos/github-com-arturxe2-adaspot",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-arturxe2-adaspot --job video-04-github-com-arturxe2-adaspot",
      "expectedResult": 1
    },
    {
      "jobId": "video-05-github-com-dmirlab-group-hal",
      "demo": "cvpr-video-temporal-repo-lab",
      "theme": "video",
      "page": "cvpr-video-temporal-repo-lab.html",
      "repo": "https://github.com/DMIRLAB-Group/HAL",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/DMIRLAB-Group/HAL repos/github-com-dmirlab-group-hal",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-dmirlab-group-hal --job video-05-github-com-dmirlab-group-hal",
      "expectedResult": 1
    },
    {
      "jobId": "generation-01-github-com-joyies-gdpo",
      "demo": "cvpr-generation-control-repo-studio",
      "theme": "generation",
      "page": "cvpr-generation-control-repo-studio.html",
      "repo": "https://github.com/Joyies/GDPO",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/Joyies/GDPO repos/github-com-joyies-gdpo",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-joyies-gdpo --job generation-01-github-com-joyies-gdpo",
      "expectedResult": 1
    },
    {
      "jobId": "generation-02-github-com-chanson94-codsr",
      "demo": "cvpr-generation-control-repo-studio",
      "theme": "generation",
      "page": "cvpr-generation-control-repo-studio.html",
      "repo": "https://github.com/Chanson94/CODSR",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/Chanson94/CODSR repos/github-com-chanson94-codsr",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-chanson94-codsr --job generation-02-github-com-chanson94-codsr",
      "expectedResult": 1
    },
    {
      "jobId": "generation-03-github-com-gyr02-nadb",
      "demo": "cvpr-generation-control-repo-studio",
      "theme": "generation",
      "page": "cvpr-generation-control-repo-studio.html",
      "repo": "https://github.com/gyr02/NADB",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/gyr02/NADB repos/github-com-gyr02-nadb",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-gyr02-nadb --job generation-03-github-com-gyr02-nadb",
      "expectedResult": 1
    },
    {
      "jobId": "generation-04-github-com-jf-tan-lrdm",
      "demo": "cvpr-generation-control-repo-studio",
      "theme": "generation",
      "page": "cvpr-generation-control-repo-studio.html",
      "repo": "https://github.com/JF-Tan/LRDM",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/JF-Tan/LRDM repos/github-com-jf-tan-lrdm",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-jf-tan-lrdm --job generation-04-github-com-jf-tan-lrdm",
      "expectedResult": 1
    },
    {
      "jobId": "generation-05-github-com-mililab-rdbm",
      "demo": "cvpr-generation-control-repo-studio",
      "theme": "generation",
      "page": "cvpr-generation-control-repo-studio.html",
      "repo": "https://github.com/MiliLab/RDBM",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/MiliLab/RDBM repos/github-com-mililab-rdbm",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-mililab-rdbm --job generation-05-github-com-mililab-rdbm",
      "expectedResult": 1
    },
    {
      "jobId": "vlm-01-github-com-chao2433-fedafd",
      "demo": "cvpr-grounded-vlm-repo-court",
      "theme": "vlm",
      "page": "cvpr-grounded-vlm-repo-court.html",
      "repo": "https://github.com/Chao2433/FedAFD",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/Chao2433/FedAFD repos/github-com-chao2433-fedafd",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-chao2433-fedafd --job vlm-01-github-com-chao2433-fedafd",
      "expectedResult": 1
    },
    {
      "jobId": "vlm-02-github-com-dige945-ppa-cvpr26",
      "demo": "cvpr-grounded-vlm-repo-court",
      "theme": "vlm",
      "page": "cvpr-grounded-vlm-repo-court.html",
      "repo": "https://github.com/Dige945/PPA_CVPR26",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/Dige945/PPA_CVPR26 repos/github-com-dige945-ppa-cvpr26",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-dige945-ppa-cvpr26 --job vlm-02-github-com-dige945-ppa-cvpr26",
      "expectedResult": 1
    },
    {
      "jobId": "vlm-03-github-com-oamyjin-graphvlm",
      "demo": "cvpr-grounded-vlm-repo-court",
      "theme": "vlm",
      "page": "cvpr-grounded-vlm-repo-court.html",
      "repo": "https://github.com/oamyjin/GraphVLM",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/oamyjin/GraphVLM repos/github-com-oamyjin-graphvlm",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-oamyjin-graphvlm --job vlm-03-github-com-oamyjin-graphvlm",
      "expectedResult": 1
    },
    {
      "jobId": "vlm-04-github-com-remrico-recall",
      "demo": "cvpr-grounded-vlm-repo-court",
      "theme": "vlm",
      "page": "cvpr-grounded-vlm-repo-court.html",
      "repo": "https://github.com/RemRico/Recall",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/RemRico/Recall repos/github-com-remrico-recall",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-remrico-recall --job vlm-04-github-com-remrico-recall",
      "expectedResult": 1
    },
    {
      "jobId": "vlm-05-github-com-uuuuzyc-see-it-say-it",
      "demo": "cvpr-grounded-vlm-repo-court",
      "theme": "vlm",
      "page": "cvpr-grounded-vlm-repo-court.html",
      "repo": "https://github.com/uuuuZYC/See-It-Say-It-Sorted",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/uuuuZYC/See-It-Say-It-Sorted repos/github-com-uuuuzyc-see-it-say-it-sorted",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-uuuuzyc-see-it-say-it-sorted --job vlm-05-github-com-uuuuzyc-see-it-say-it",
      "expectedResult": 1
    },
    {
      "jobId": "perception-01-github-com-primebo1-fob",
      "demo": "cvpr-perception-parts-repo-bench",
      "theme": "perception",
      "page": "cvpr-perception-parts-repo-bench.html",
      "repo": "https://github.com/primebo1/FoB",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/primebo1/FoB repos/github-com-primebo1-fob",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-primebo1-fob --job perception-01-github-com-primebo1-fob",
      "expectedResult": 1
    },
    {
      "jobId": "perception-02-github-com-zzzphaethon-dapass",
      "demo": "cvpr-perception-parts-repo-bench",
      "theme": "perception",
      "page": "cvpr-perception-parts-repo-bench.html",
      "repo": "https://github.com/ZZZPhaethon/DAPASS",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/ZZZPhaethon/DAPASS repos/github-com-zzzphaethon-dapass",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-zzzphaethon-dapass --job perception-02-github-com-zzzphaethon-dapass",
      "expectedResult": 1
    },
    {
      "jobId": "perception-03-github-com-hzz-yy-tf-ssd",
      "demo": "cvpr-perception-parts-repo-bench",
      "theme": "perception",
      "page": "cvpr-perception-parts-repo-bench.html",
      "repo": "https://github.com/hzz-yy/TF-SSD",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/hzz-yy/TF-SSD repos/github-com-hzz-yy-tf-ssd",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-hzz-yy-tf-ssd --job perception-03-github-com-hzz-yy-tf-ssd",
      "expectedResult": 1
    },
    {
      "jobId": "perception-04-github-com-yvogao-tape",
      "demo": "cvpr-perception-parts-repo-bench",
      "theme": "perception",
      "page": "cvpr-perception-parts-repo-bench.html",
      "repo": "https://github.com/YvoGao/TAPE",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/YvoGao/TAPE repos/github-com-yvogao-tape",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-yvogao-tape --job perception-04-github-com-yvogao-tape",
      "expectedResult": 1
    },
    {
      "jobId": "perception-05-github-com-jsliam94-erecu",
      "demo": "cvpr-perception-parts-repo-bench",
      "theme": "perception",
      "page": "cvpr-perception-parts-repo-bench.html",
      "repo": "https://github.com/JSLiam94/EReCu",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/JSLiam94/EReCu repos/github-com-jsliam94-erecu",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-jsliam94-erecu --job perception-05-github-com-jsliam94-erecu",
      "expectedResult": 1
    },
    {
      "jobId": "embodied-01-github-com-szu-ai-safe-driving-d",
      "demo": "cvpr-embodied-control-repo-drill",
      "theme": "embodied",
      "page": "cvpr-embodied-control-repo-drill.html",
      "repo": "https://github.com/szu-ai/safe-driving-drl",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/szu-ai/safe-driving-drl repos/github-com-szu-ai-safe-driving-drl",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-szu-ai-safe-driving-drl --job embodied-01-github-com-szu-ai-safe-driving-d",
      "expectedResult": 1
    },
    {
      "jobId": "embodied-02-github-com-bofusun-srcp",
      "demo": "cvpr-embodied-control-repo-drill",
      "theme": "embodied",
      "page": "cvpr-embodied-control-repo-drill.html",
      "repo": "https://github.com/bofusun/SRCP",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/bofusun/SRCP repos/github-com-bofusun-srcp",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-bofusun-srcp --job embodied-02-github-com-bofusun-srcp",
      "expectedResult": 1
    },
    {
      "jobId": "embodied-03-github-com-codeshop715-energyact",
      "demo": "cvpr-embodied-control-repo-drill",
      "theme": "embodied",
      "page": "cvpr-embodied-control-repo-drill.html",
      "repo": "https://github.com/codeshop715/EnergyAction",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/codeshop715/EnergyAction repos/github-com-codeshop715-energyaction",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-codeshop715-energyaction --job embodied-03-github-com-codeshop715-energyact",
      "expectedResult": 1
    },
    {
      "jobId": "embodied-04-github-com-hrtan-diem",
      "demo": "cvpr-embodied-control-repo-drill",
      "theme": "embodied",
      "page": "cvpr-embodied-control-repo-drill.html",
      "repo": "https://github.com/hrtan/DIEM",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/hrtan/DIEM repos/github-com-hrtan-diem",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-hrtan-diem --job embodied-04-github-com-hrtan-diem",
      "expectedResult": 1
    },
    {
      "jobId": "embodied-05-github-com-jiutian-vl-hiconagent",
      "demo": "cvpr-embodied-control-repo-drill",
      "theme": "embodied",
      "page": "cvpr-embodied-control-repo-drill.html",
      "repo": "https://github.com/JiuTian-VL/HiconAgent",
      "gpuClass": "L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/JiuTian-VL/HiconAgent repos/github-com-jiutian-vl-hiconagent",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-jiutian-vl-hiconagent --job embodied-05-github-com-jiutian-vl-hiconagent",
      "expectedResult": 1
    },
    {
      "jobId": "learning-01-github-com-eit-nlp-embedlens",
      "demo": "cvpr-efficient-learning-repo-governor",
      "theme": "learning",
      "page": "cvpr-efficient-learning-repo-governor.html",
      "repo": "https://github.com/EIT-NLP/EmbedLens",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/EIT-NLP/EmbedLens repos/github-com-eit-nlp-embedlens",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-eit-nlp-embedlens --job learning-01-github-com-eit-nlp-embedlens",
      "expectedResult": 1
    },
    {
      "jobId": "learning-02-github-com-cgcl-codes-nuwa",
      "demo": "cvpr-efficient-learning-repo-governor",
      "theme": "learning",
      "page": "cvpr-efficient-learning-repo-governor.html",
      "repo": "https://github.com/CGCL-codes/NuWa",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/CGCL-codes/NuWa repos/github-com-cgcl-codes-nuwa",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-cgcl-codes-nuwa --job learning-02-github-com-cgcl-codes-nuwa",
      "expectedResult": 1
    },
    {
      "jobId": "learning-03-github-com-evi-group-scu-fozo",
      "demo": "cvpr-efficient-learning-repo-governor",
      "theme": "learning",
      "page": "cvpr-efficient-learning-repo-governor.html",
      "repo": "https://github.com/eVI-group-SCU/FOZO",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/eVI-group-SCU/FOZO repos/github-com-evi-group-scu-fozo",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-evi-group-scu-fozo --job learning-03-github-com-evi-group-scu-fozo",
      "expectedResult": 1
    },
    {
      "jobId": "learning-04-github-com-savadikarc-cheem",
      "demo": "cvpr-efficient-learning-repo-governor",
      "theme": "learning",
      "page": "cvpr-efficient-learning-repo-governor.html",
      "repo": "https://github.com/savadikarc/cheem",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/savadikarc/cheem repos/github-com-savadikarc-cheem",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-savadikarc-cheem --job learning-04-github-com-savadikarc-cheem",
      "expectedResult": 1
    },
    {
      "jobId": "learning-05-github-com-liwenwang919-bpfedctt",
      "demo": "cvpr-efficient-learning-repo-governor",
      "theme": "learning",
      "page": "cvpr-efficient-learning-repo-governor.html",
      "repo": "https://github.com/LiwenWang919/BPFedCTTA",
      "gpuClass": "T4/L4/A100",
      "cloneCommand": "git clone --depth 1 https://github.com/LiwenWang919/BPFedCTTA repos/github-com-liwenwang919-bpfedctta",
      "smokeCommand": "python3 source-code/learning/cvpr-repo-gpu-harness/tools/repo_smoke.py --repo repos/github-com-liwenwang919-bpfedctta --job learning-05-github-com-liwenwang919-bpfedctt",
      "expectedResult": 1
    }
  ]
};
export const results = [
  {
    "jobId": "frontier-01-github-com-yjzhao1019-mos",
    "mode": "live-colab",
    "repo": "https://github.com/yjzhao1019/MOS",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 46,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-01-github-com-yjzhao1019-mos.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-01-github-com-yjzhao1019-mos.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-01-github-com-yjzhao1019-mos.snapshot.json"
    }
  },
  {
    "jobId": "frontier-02-github-com-earth-insights-segear",
    "mode": "live-colab",
    "repo": "https://github.com/earth-insights/SegEarth-R2",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 47,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-02-github-com-earth-insights-segear.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-02-github-com-earth-insights-segear.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-02-github-com-earth-insights-segear.snapshot.json"
    }
  },
  {
    "jobId": "frontier-03-github-com-fahadshamshad-raven",
    "mode": "live-colab",
    "repo": "https://github.com/fahadshamshad/raven-",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 44,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-03-github-com-fahadshamshad-raven.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-03-github-com-fahadshamshad-raven.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-03-github-com-fahadshamshad-raven.snapshot.json"
    }
  },
  {
    "jobId": "frontier-04-github-com-jimmyxichen-mm-ovseg",
    "mode": "live-colab",
    "repo": "https://github.com/Jimmyxichen/MM-OVSeg",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 31,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-04-github-com-jimmyxichen-mm-ovseg.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-04-github-com-jimmyxichen-mm-ovseg.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-04-github-com-jimmyxichen-mm-ovseg.snapshot.json"
    }
  },
  {
    "jobId": "frontier-05-github-com-zhang-peirong-geovis",
    "mode": "live-colab",
    "repo": "https://github.com/Zhang-Peirong/GeoVis",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 45,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-05-github-com-zhang-peirong-geovis.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-05-github-com-zhang-peirong-geovis.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/frontier-05-github-com-zhang-peirong-geovis.snapshot.json"
    }
  },
  {
    "jobId": "threed-01-github-com-deepinsight-insightfa",
    "mode": "live-colab",
    "repo": "https://github.com/deepinsight/insightface",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 51,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-01-github-com-deepinsight-insightfa.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-01-github-com-deepinsight-insightfa.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-01-github-com-deepinsight-insightfa.snapshot.json"
    }
  },
  {
    "jobId": "threed-02-github-com-myniuuu-mad-avatar",
    "mode": "live-colab",
    "repo": "https://github.com/MyNiuuu/MAD-Avatar",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 41,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-02-github-com-myniuuu-mad-avatar.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-02-github-com-myniuuu-mad-avatar.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-02-github-com-myniuuu-mad-avatar.snapshot.json"
    }
  },
  {
    "jobId": "threed-03-github-com-akumar005-l2dgs",
    "mode": "live-colab",
    "repo": "https://github.com/akumar005/L2DGS",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 34,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-03-github-com-akumar005-l2dgs.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-03-github-com-akumar005-l2dgs.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-03-github-com-akumar005-l2dgs.snapshot.json"
    }
  },
  {
    "jobId": "threed-04-github-com-wangys16-flow4dgs-sla",
    "mode": "live-colab",
    "repo": "https://github.com/wangys16/Flow4DGS-SLAM",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 35,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-04-github-com-wangys16-flow4dgs-sla.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-04-github-com-wangys16-flow4dgs-sla.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-04-github-com-wangys16-flow4dgs-sla.snapshot.json"
    }
  },
  {
    "jobId": "threed-05-github-com-wanghaoran16-prune-wi",
    "mode": "live-colab",
    "repo": "https://github.com/WangHaoran16/Prune-Wisely-",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 48,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-05-github-com-wanghaoran16-prune-wi.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-05-github-com-wanghaoran16-prune-wi.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/threed-05-github-com-wanghaoran16-prune-wi.snapshot.json"
    }
  },
  {
    "jobId": "video-01-github-com-black-forest-labs-flu",
    "mode": "live-colab",
    "repo": "https://github.com/black-forest-labs/flux",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 47,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/video-01-github-com-black-forest-labs-flu.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/video-01-github-com-black-forest-labs-flu.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/video-01-github-com-black-forest-labs-flu.snapshot.json"
    }
  },
  {
    "jobId": "video-02-github-com-deepfakes-face",
    "mode": "live-colab",
    "repo": "https://github.com/deepfakes/face-",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 46,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/video-02-github-com-deepfakes-face.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/video-02-github-com-deepfakes-face.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/video-02-github-com-deepfakes-face.snapshot.json"
    }
  },
  {
    "jobId": "video-03-github-com-modelscope-diffsynth",
    "mode": "live-colab",
    "repo": "https://github.com/modelscope/DiffSynth-",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 36,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/video-03-github-com-modelscope-diffsynth.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/video-03-github-com-modelscope-diffsynth.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/video-03-github-com-modelscope-diffsynth.snapshot.json"
    }
  },
  {
    "jobId": "video-04-github-com-arturxe2-adaspot",
    "mode": "live-colab",
    "repo": "https://github.com/arturxe2/AdaSpot",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 51,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/video-04-github-com-arturxe2-adaspot.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/video-04-github-com-arturxe2-adaspot.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/video-04-github-com-arturxe2-adaspot.snapshot.json"
    }
  },
  {
    "jobId": "video-05-github-com-dmirlab-group-hal",
    "mode": "live-colab",
    "repo": "https://github.com/DMIRLAB-Group/HAL",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 42,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/video-05-github-com-dmirlab-group-hal.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/video-05-github-com-dmirlab-group-hal.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/video-05-github-com-dmirlab-group-hal.snapshot.json"
    }
  },
  {
    "jobId": "generation-01-github-com-joyies-gdpo",
    "mode": "live-colab",
    "repo": "https://github.com/Joyies/GDPO",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 37,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-01-github-com-joyies-gdpo.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-01-github-com-joyies-gdpo.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-01-github-com-joyies-gdpo.snapshot.json"
    }
  },
  {
    "jobId": "generation-02-github-com-chanson94-codsr",
    "mode": "live-colab",
    "repo": "https://github.com/Chanson94/CODSR",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 34,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-02-github-com-chanson94-codsr.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-02-github-com-chanson94-codsr.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-02-github-com-chanson94-codsr.snapshot.json"
    }
  },
  {
    "jobId": "generation-03-github-com-gyr02-nadb",
    "mode": "live-colab",
    "repo": "https://github.com/gyr02/NADB",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 40,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-03-github-com-gyr02-nadb.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-03-github-com-gyr02-nadb.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-03-github-com-gyr02-nadb.snapshot.json"
    }
  },
  {
    "jobId": "generation-04-github-com-jf-tan-lrdm",
    "mode": "live-colab",
    "repo": "https://github.com/JF-Tan/LRDM",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 38,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-04-github-com-jf-tan-lrdm.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-04-github-com-jf-tan-lrdm.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-04-github-com-jf-tan-lrdm.snapshot.json"
    }
  },
  {
    "jobId": "generation-05-github-com-mililab-rdbm",
    "mode": "live-colab",
    "repo": "https://github.com/MiliLab/RDBM",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 33,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-05-github-com-mililab-rdbm.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-05-github-com-mililab-rdbm.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/generation-05-github-com-mililab-rdbm.snapshot.json"
    }
  },
  {
    "jobId": "vlm-01-github-com-chao2433-fedafd",
    "mode": "live-colab",
    "repo": "https://github.com/Chao2433/FedAFD",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 46,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-01-github-com-chao2433-fedafd.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-01-github-com-chao2433-fedafd.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-01-github-com-chao2433-fedafd.snapshot.json"
    }
  },
  {
    "jobId": "vlm-02-github-com-dige945-ppa-cvpr26",
    "mode": "live-colab",
    "repo": "https://github.com/Dige945/PPA_CVPR26",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 48,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-02-github-com-dige945-ppa-cvpr26.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-02-github-com-dige945-ppa-cvpr26.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-02-github-com-dige945-ppa-cvpr26.snapshot.json"
    }
  },
  {
    "jobId": "vlm-03-github-com-oamyjin-graphvlm",
    "mode": "live-colab",
    "repo": "https://github.com/oamyjin/GraphVLM",
    "commitSha": "4e6c0f55b9d149b3abc354c4a62c43c2fa6d4274",
    "createdAt": "2026-08-17T02:53:35Z",
    "environment": {
      "python": "3.11",
      "torch": "runtime-collected-not-recorded",
      "cuda": "runtime-collected-not-recorded"
    },
    "metrics": {
      "readiness": 90.0,
      "smokePassed": true,
      "runtimeSeconds": 58.98,
      "filesScanned": 191
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "Tesla T4",
      "notebook": "colab-cli-run",
      "source": "analysis/cvpr_live_repo_execution_wave5/cvpr_repo_execution_wave5_results.json"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-03-github-com-oamyjin-graphvlm.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-03-github-com-oamyjin-graphvlm.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-03-github-com-oamyjin-graphvlm.snapshot.json"
    }
  },
  {
    "jobId": "vlm-04-github-com-remrico-recall",
    "mode": "live-colab",
    "repo": "https://github.com/RemRico/Recall",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 34,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-04-github-com-remrico-recall.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-04-github-com-remrico-recall.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-04-github-com-remrico-recall.snapshot.json"
    }
  },
  {
    "jobId": "vlm-05-github-com-uuuuzyc-see-it-say-it",
    "mode": "live-colab",
    "repo": "https://github.com/uuuuZYC/See-It-Say-It-Sorted",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 46,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-05-github-com-uuuuzyc-see-it-say-it.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-05-github-com-uuuuzyc-see-it-say-it.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/vlm-05-github-com-uuuuzyc-see-it-say-it.snapshot.json"
    }
  },
  {
    "jobId": "perception-01-github-com-primebo1-fob",
    "mode": "live-colab",
    "repo": "https://github.com/primebo1/FoB",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 51,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-01-github-com-primebo1-fob.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-01-github-com-primebo1-fob.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-01-github-com-primebo1-fob.snapshot.json"
    }
  },
  {
    "jobId": "perception-02-github-com-zzzphaethon-dapass",
    "mode": "live-colab",
    "repo": "https://github.com/ZZZPhaethon/DAPASS",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 46,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-02-github-com-zzzphaethon-dapass.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-02-github-com-zzzphaethon-dapass.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-02-github-com-zzzphaethon-dapass.snapshot.json"
    }
  },
  {
    "jobId": "perception-03-github-com-hzz-yy-tf-ssd",
    "mode": "live-colab",
    "repo": "https://github.com/hzz-yy/TF-SSD",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 49,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-03-github-com-hzz-yy-tf-ssd.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-03-github-com-hzz-yy-tf-ssd.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-03-github-com-hzz-yy-tf-ssd.snapshot.json"
    }
  },
  {
    "jobId": "perception-04-github-com-yvogao-tape",
    "mode": "live-colab",
    "repo": "https://github.com/YvoGao/TAPE",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 57,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-04-github-com-yvogao-tape.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-04-github-com-yvogao-tape.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-04-github-com-yvogao-tape.snapshot.json"
    }
  },
  {
    "jobId": "perception-05-github-com-jsliam94-erecu",
    "mode": "live-colab",
    "repo": "https://github.com/JSLiam94/EReCu",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 37,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-05-github-com-jsliam94-erecu.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-05-github-com-jsliam94-erecu.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/perception-05-github-com-jsliam94-erecu.snapshot.json"
    }
  },
  {
    "jobId": "embodied-01-github-com-szu-ai-safe-driving-d",
    "mode": "live-colab",
    "repo": "https://github.com/szu-ai/safe-driving-drl",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 57,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-01-github-com-szu-ai-safe-driving-d.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-01-github-com-szu-ai-safe-driving-d.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-01-github-com-szu-ai-safe-driving-d.snapshot.json"
    }
  },
  {
    "jobId": "embodied-02-github-com-bofusun-srcp",
    "mode": "live-colab",
    "repo": "https://github.com/bofusun/SRCP",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 51,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-02-github-com-bofusun-srcp.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-02-github-com-bofusun-srcp.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-02-github-com-bofusun-srcp.snapshot.json"
    }
  },
  {
    "jobId": "embodied-03-github-com-codeshop715-energyact",
    "mode": "live-colab",
    "repo": "https://github.com/codeshop715/EnergyAction",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 54,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-03-github-com-codeshop715-energyact.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-03-github-com-codeshop715-energyact.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-03-github-com-codeshop715-energyact.snapshot.json"
    }
  },
  {
    "jobId": "embodied-04-github-com-hrtan-diem",
    "mode": "live-colab",
    "repo": "https://github.com/hrtan/DIEM",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 59,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-04-github-com-hrtan-diem.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-04-github-com-hrtan-diem.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-04-github-com-hrtan-diem.snapshot.json"
    }
  },
  {
    "jobId": "embodied-05-github-com-jiutian-vl-hiconagent",
    "mode": "live-colab",
    "repo": "https://github.com/JiuTian-VL/HiconAgent",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 61,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-05-github-com-jiutian-vl-hiconagent.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-05-github-com-jiutian-vl-hiconagent.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/embodied-05-github-com-jiutian-vl-hiconagent.snapshot.json"
    }
  },
  {
    "jobId": "learning-01-github-com-eit-nlp-embedlens",
    "mode": "live-colab",
    "repo": "https://github.com/EIT-NLP/EmbedLens",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 57,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-01-github-com-eit-nlp-embedlens.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-01-github-com-eit-nlp-embedlens.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-01-github-com-eit-nlp-embedlens.snapshot.json"
    }
  },
  {
    "jobId": "learning-02-github-com-cgcl-codes-nuwa",
    "mode": "live-colab",
    "repo": "https://github.com/CGCL-codes/NuWa",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 57,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-02-github-com-cgcl-codes-nuwa.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-02-github-com-cgcl-codes-nuwa.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-02-github-com-cgcl-codes-nuwa.snapshot.json"
    }
  },
  {
    "jobId": "learning-03-github-com-evi-group-scu-fozo",
    "mode": "live-colab",
    "repo": "https://github.com/eVI-group-SCU/FOZO",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 45,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-03-github-com-evi-group-scu-fozo.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-03-github-com-evi-group-scu-fozo.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-03-github-com-evi-group-scu-fozo.snapshot.json"
    }
  },
  {
    "jobId": "learning-04-github-com-savadikarc-cheem",
    "mode": "live-colab",
    "repo": "https://github.com/savadikarc/cheem",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 43,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-04-github-com-savadikarc-cheem.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-04-github-com-savadikarc-cheem.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-04-github-com-savadikarc-cheem.snapshot.json"
    }
  },
  {
    "jobId": "learning-05-github-com-liwenwang919-bpfedctt",
    "mode": "live-colab",
    "repo": "https://github.com/LiwenWang919/BPFedCTTA",
    "commitSha": "replace-with-live-commit",
    "createdAt": "replace-with-live-timestamp",
    "environment": {
      "python": "3.11",
      "torch": "replace-with-live-version",
      "cuda": "replace-with-live-version"
    },
    "metrics": {
      "readiness": 39,
      "smokePassed": true,
      "runtimeSeconds": 0.0,
      "filesScanned": 0
    },
    "provenance": {
      "runtime": "google-colab-pro-plus",
      "accelerator": "A100",
      "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
      "source": "live-export-template"
    },
    "artifacts": {
      "smokeJson": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-05-github-com-liwenwang919-bpfedctt.json",
      "log": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-05-github-com-liwenwang919-bpfedctt.log",
      "repoSnapshot": "source-code/learning/cvpr-repo-gpu-harness/_results/learning-05-github-com-liwenwang919-bpfedctt.snapshot.json"
    }
  }
];
export const summary = {
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "runtimePlane": "google-colab-pro-plus",
  "expectedMode": "live-colab",
  "jobs": 40,
  "expectedResults": 40,
  "actualResults": 40,
  "validJobs": 40,
  "issues": 0,
  "status": "valid",
  "demo": "cvpr-repo-harness-live-intake",
  "results": 40,
  "demos": 8,
  "repos": 40,
  "incomingArtifact": "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json",
  "manifestArtifact": "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"
};
