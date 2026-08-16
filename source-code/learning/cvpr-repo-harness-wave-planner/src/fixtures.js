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
export const waves = [
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
    "status": "ready"
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
    "status": "ready"
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
    "status": "ready"
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
    "status": "ready"
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
    "status": "ready"
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
    "status": "ready"
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
    "status": "ready"
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
    "status": "ready"
  }
];
export const summary = {
  "planner": "cvpr-repo-harness-wave-planner",
  "status": "ready",
  "runtimePlane": "google-colab-pro-plus",
  "waves": 8,
  "jobs": 40,
  "repos": 40,
  "themes": 8,
  "batchSize": 5,
  "worker": "cvpr-repo-harness-worker",
  "intakeStatus": "valid",
  "firstWaveReceipt": "cvpr-repo-harness-first-batch-receipt",
  "notebook": "notebooks/cvpr_repo_harness_worker.ipynb",
  "validator": "scripts/validate_cvpr_repo_harness_results.py",
  "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py"
};
