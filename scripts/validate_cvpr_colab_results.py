"""Validate imported CVPR Colab GPU result artifacts against the run manifest."""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MANIFEST = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_run_manifest.json"
DEFAULT_RESULTS = ROOT / "source-code/learning/cvpr-colab-gpu-worker/_results/cvpr_gpu_results.json"
DEFAULT_REPORT = ROOT / "analysis/cvpr_colab_gpu_worker/import_validation.json"


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))


def validate(manifest, results, expected_mode="cached-real"):
    issues = []
    manifest_jobs = manifest.get("jobs", [])
    expected_jobs = {job["jobId"]: job for job in manifest_jobs}
    result_groups = {}
    seen = set()

    for index, result in enumerate(results):
        key = (result.get("jobId"), result.get("caseId"))
        if key in seen:
            issues.append({"type": "duplicate-case", "index": index, "jobId": key[0], "caseId": key[1]})
        seen.add(key)
        result_groups.setdefault(result.get("jobId"), []).append(result)

        for field in ("jobId", "caseId", "mode", "createdAt", "model", "inputs", "outputs", "metrics", "provenance"):
            if field not in result:
                issues.append({"type": "missing-field", "index": index, "field": field})
        if result.get("mode") != expected_mode:
            issues.append({
                "type": "wrong-mode",
                "index": index,
                "jobId": result.get("jobId"),
                "mode": result.get("mode"),
                "expectedMode": expected_mode,
            })
        if result.get("jobId") not in expected_jobs:
            issues.append({"type": "unknown-job", "index": index, "jobId": result.get("jobId")})
        readiness = result.get("metrics", {}).get("readiness")
        if not isinstance(readiness, (int, float)) or not 0 <= readiness <= 100:
            issues.append({"type": "bad-readiness", "index": index, "jobId": result.get("jobId"), "readiness": readiness})
        provenance = result.get("provenance", {})
        if provenance.get("runtime") != manifest.get("runtimePlane"):
            issues.append({"type": "runtime-mismatch", "index": index, "jobId": result.get("jobId"), "runtime": provenance.get("runtime")})
        accelerator = provenance.get("accelerator")
        if not accelerator or str(accelerator).lower() in {"cpu", "unknown"}:
            issues.append({"type": "accelerator-mismatch", "index": index, "jobId": result.get("jobId"), "accelerator": provenance.get("accelerator")})
        if provenance.get("notebook") != manifest.get("notebook"):
            issues.append({"type": "notebook-mismatch", "index": index, "jobId": result.get("jobId"), "notebook": provenance.get("notebook")})

    job_reports = []
    for job in manifest_jobs:
        job_id = job["jobId"]
        group = result_groups.get(job_id, [])
        actual = len(group)
        expected = job.get("expectedCases")
        if actual != expected:
            issues.append({"type": "case-count", "jobId": job_id, "expected": expected, "actual": actual})
        if expected_mode not in job.get("runtimeModes", []):
            issues.append({"type": "missing-runtime-mode", "jobId": job_id, "expectedMode": expected_mode})
        job_reports.append({
            "jobId": job_id,
            "bench": job["bench"],
            "expectedCases": expected,
            "actualCases": actual,
            "importPath": job["importPath"],
            "ready": actual == expected and actual > 0,
        })

    summary = {
        "validator": "validate_cvpr_colab_results",
        "runtimePlane": manifest.get("runtimePlane"),
        "expectedMode": expected_mode,
        "jobs": len(manifest_jobs),
        "expectedResults": sum(job.get("expectedCases", 0) for job in manifest_jobs),
        "actualResults": len(results),
        "validJobs": sum(1 for job in job_reports if job["ready"]),
        "issues": len(issues),
        "status": "valid" if not issues else "invalid",
    }
    return {"summary": summary, "jobs": job_reports, "issues": issues}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", default=DEFAULT_MANIFEST)
    parser.add_argument("--results", default=DEFAULT_RESULTS)
    parser.add_argument("--report", default=DEFAULT_REPORT)
    parser.add_argument("--expected-mode", default="cached-real", choices=("cached-real", "live-colab"))
    args = parser.parse_args()

    report = validate(load_json(args.manifest), load_json(args.results), expected_mode=args.expected_mode)
    report_path = Path(args.report)
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(
        f"validated CVPR Colab results: {report['summary']['actualResults']} results, "
        f"{report['summary']['issues']} issues"
    )
    raise SystemExit(0 if report["summary"]["status"] == "valid" else 1)


if __name__ == "__main__":
    main()
