"""Validate live CVPR repo harness result artifacts."""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_MANIFEST = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_results/cvpr_repo_harness_manifest.json"
DEFAULT_RESULTS = ROOT / "source-code/learning/cvpr-repo-gpu-harness/_incoming/cvpr_repo_harness_live.json"
DEFAULT_REPORT = ROOT / "analysis/cvpr_repo_harness_live_intake/import_validation.json"


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8"))


def validate(manifest, results, expected_mode="live-colab"):
    issues = []
    jobs = {job["jobId"]: job for job in manifest.get("jobs", [])}
    seen = set()
    groups = {}
    for index, result in enumerate(results):
        job_id = result.get("jobId")
        groups.setdefault(job_id, []).append(result)
        key = (job_id, result.get("repo"))
        if key in seen:
            issues.append({"type": "duplicate-result", "index": index, "jobId": job_id})
        seen.add(key)
        for field in ("jobId", "mode", "repo", "commitSha", "createdAt", "environment", "metrics", "provenance", "artifacts"):
            if field not in result:
                issues.append({"type": "missing-field", "index": index, "field": field, "jobId": job_id})
        if result.get("mode") != expected_mode:
            issues.append({"type": "wrong-mode", "index": index, "jobId": job_id, "mode": result.get("mode"), "expectedMode": expected_mode})
        if job_id not in jobs:
            issues.append({"type": "unknown-job", "index": index, "jobId": job_id})
            continue
        job = jobs[job_id]
        if result.get("repo") != job.get("repo"):
            issues.append({"type": "repo-mismatch", "index": index, "jobId": job_id, "repo": result.get("repo")})
        metrics = result.get("metrics", {})
        readiness = metrics.get("readiness")
        smoke = metrics.get("smokePassed")
        if not isinstance(readiness, (int, float)) or not 0 <= readiness <= 100:
            issues.append({"type": "bad-readiness", "index": index, "jobId": job_id, "readiness": readiness})
        if smoke is not True:
            issues.append({"type": "smoke-not-passed", "index": index, "jobId": job_id, "smokePassed": smoke})
        provenance = result.get("provenance", {})
        if provenance.get("runtime") != manifest.get("runtimePlane"):
            issues.append({"type": "runtime-mismatch", "index": index, "jobId": job_id, "runtime": provenance.get("runtime")})
        if str(provenance.get("accelerator", "")).lower() in {"", "cpu", "unknown"}:
            issues.append({"type": "accelerator-mismatch", "index": index, "jobId": job_id, "accelerator": provenance.get("accelerator")})
        artifacts = result.get("artifacts", {})
        for artifact_key in ("smokeJson", "log", "repoSnapshot"):
            if artifact_key not in artifacts:
                issues.append({"type": "missing-artifact", "index": index, "jobId": job_id, "artifact": artifact_key})

    job_reports = []
    for job in manifest.get("jobs", []):
        actual = len(groups.get(job["jobId"], []))
        if actual != 1:
            issues.append({"type": "result-count", "jobId": job["jobId"], "expected": 1, "actual": actual})
        job_reports.append({
            "jobId": job["jobId"],
            "demo": job["demo"],
            "page": job["page"],
            "repo": job["repo"],
            "actualResults": actual,
            "ready": actual == 1,
        })
    summary = {
        "validator": "validate_cvpr_repo_harness_results",
        "runtimePlane": manifest.get("runtimePlane"),
        "expectedMode": expected_mode,
        "jobs": len(manifest.get("jobs", [])),
        "expectedResults": len(manifest.get("jobs", [])),
        "actualResults": len(results),
        "validJobs": sum(1 for row in job_reports if row["ready"]),
        "issues": len(issues),
        "status": "valid" if not issues else "invalid",
    }
    return {"summary": summary, "jobs": job_reports, "issues": issues}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", default=DEFAULT_MANIFEST)
    parser.add_argument("--results", default=DEFAULT_RESULTS)
    parser.add_argument("--report", default=DEFAULT_REPORT)
    parser.add_argument("--expected-mode", default="live-colab", choices=("live-colab", "cached-harness-contract"))
    args = parser.parse_args()
    report = validate(load_json(args.manifest), load_json(args.results), args.expected_mode)
    report_path = Path(args.report)
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(f"validated CVPR repo harness results: {report['summary']['actualResults']} results, {report['summary']['issues']} issues")
    raise SystemExit(0 if report["summary"]["status"] == "valid" else 1)


if __name__ == "__main__":
    main()
