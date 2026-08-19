import json
from pathlib import Path
import sys

import torch

sys.path.append(str(Path.cwd() / "scripts"))
from colab_live_second_wave_demo import RUNTIME, run_depth_normal


def main():
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    accelerator = torch.cuda.get_device_name(0)
    results = run_depth_normal(accelerator)
    summary = {
        "demo": "cvpr-live-depth-normal-colab-demo",
        "jobId": "depth-normal-consistency",
        "runtime": RUNTIME,
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "scaleDrift": max(row["metrics"]["scaleDrift"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_depth_normal_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_depth_normal_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
