import json
from pathlib import Path
import sys

import torch

sys.path.append(str(Path.cwd() / "scripts"))
from colab_live_second_wave_demo import RUNTIME, run_video_tracking


def main():
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    accelerator = torch.cuda.get_device_name(0)
    results = run_video_tracking(accelerator)
    summary = {
        "demo": "cvpr-live-video-tracking-colab-demo",
        "jobId": "video-identity-tracking",
        "runtime": RUNTIME,
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "identityDrift": max(row["metrics"]["identityDrift"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_video_tracking_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_video_tracking_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
