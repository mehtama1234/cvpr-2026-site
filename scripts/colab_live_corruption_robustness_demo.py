import json
from pathlib import Path
import sys

import torch

sys.path.append(str(Path.cwd() / "scripts"))
from colab_live_second_wave_demo import RUNTIME, load_resnet, run_corruption_robustness


def main():
    if not torch.cuda.is_available():
        raise SystemExit("No CUDA device available")
    accelerator = torch.cuda.get_device_name(0)
    model, model_id = load_resnet()
    results = run_corruption_robustness(accelerator, model, model_id)
    summary = {
        "demo": "cvpr-live-corruption-robustness-colab-demo",
        "jobId": "corruption-robustness",
        "runtime": RUNTIME,
        "accelerator": accelerator,
        "results": len(results),
        "minReadiness": min(row["metrics"]["readiness"] for row in results),
        "confidenceCollapse": max(row["metrics"]["confidenceCollapse"] for row in results),
        "status": "valid",
    }
    Path("/content/cvpr_corruption_robustness_live_results.json").write_text(json.dumps(results, indent=2) + "\n")
    Path("/content/cvpr_corruption_robustness_live_summary.json").write_text(json.dumps(summary, indent=2) + "\n")
    payload = {"summary": summary, "results": results}
    print("===CVPR_LIVE_JSON_BEGIN===")
    print(json.dumps(payload, indent=2))
    print("===CVPR_LIVE_JSON_END===")
    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
