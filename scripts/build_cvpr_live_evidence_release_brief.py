"""Build the CVPR live evidence release brief."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PORTFOLIO = ROOT / "analysis/cvpr_live_evidence_portfolio/registry.json"
RECEIPT = ROOT / "analysis/cvpr_repo_harness_replacement_receipt/registry.json"
COMMAND = ROOT / "analysis/cvpr_repo_harness_command_center/registry.json"
DELTA = ROOT / "analysis/cvpr_repo_harness_promotion_delta/registry.json"
ANALYSIS = ROOT / "analysis/cvpr_live_evidence_release_brief"
BASE = ROOT / "source-code/learning/cvpr-live-evidence-release-brief"

CORE = """export function releaseGate(summary) {
  if (!summary) return "block";
  if (summary.status !== "release-ready") return "block";
  if (summary.portfolioStatus !== "portfolio-ready") return "block";
  if (summary.commandStatus !== "operator-ready") return "block";
  if (summary.replacementStatus !== "ready") return "block";
  if (summary.deltaStatus !== "ready") return "block";
  if (summary.rows !== 40 || summary.liveRows !== 40 || summary.artifacts !== 40) return "block";
  if (summary.rollbackRows !== 40 || summary.promotedRows !== 40) return "block";
  if (summary.holdDemo !== 0) return "block";
  return "release-ready";
}

export function releasePosture(summary) {
  return {
    releaseReady: releaseGate(summary) === "release-ready",
    demos: summary.surfaces,
    evidenceRows: summary.rows,
    promoted: summary.promoteDemo,
    review: summary.reviewRows,
    shadow: summary.policyShadow,
    canary: summary.canaryDemo,
    rollbackRows: summary.rollbackRows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { summary } from "../src/fixtures.js";
import { releaseGate, releasePosture } from "../src/core.js";

assert.equal(releaseGate(summary), "release-ready");
const posture = releasePosture(summary);
assert.equal(posture.releaseReady, true);
assert.equal(posture.demos, 8);
assert.equal(posture.evidenceRows, 40);
assert.equal(posture.rollbackRows, 40);
assert.equal(summary.promotedArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.promoted.json");
assert.equal(summary.rollbackArtifact, "analysis/cvpr_repo_harness_replacement_receipt/cvpr_repo_harness_results.rollback.json");
console.log("ok cvpr-live-evidence-release-brief:", summary.rows, "rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def summarize(portfolio, receipt, command, delta):
    ps = portfolio["summary"]
    rs = receipt["summary"]
    cs = command["summary"]
    ds = delta["summary"]
    summary = {
        "brief": "cvpr-live-evidence-release-brief",
        "status": "release-ready",
        "portfolioStatus": ps["status"],
        "commandStatus": cs["status"],
        "replacementStatus": rs["status"],
        "deltaStatus": ds["status"],
        "surfaces": ps["surfaces"],
        "readySurfaces": ps["readySurfaces"],
        "rows": ps["rows"],
        "liveRows": ps["liveRows"],
        "smokePassed": ps["smokePassed"],
        "artifacts": ps["artifacts"],
        "promoteDemo": ps["promoteDemo"],
        "reviewRows": ps["reviewRows"],
        "policyShadow": ps["policyShadow"],
        "canaryDemo": ps["canaryDemo"],
        "holdDemo": ps["holdDemo"],
        "promotedRows": rs["promotedRows"],
        "rollbackRows": rs["rollbackRows"],
        "deltaReadyRows": ds["readyRows"],
        "promotedArtifact": rs["promotedArtifact"],
        "rollbackArtifact": rs["rollbackArtifact"],
        "portfolioRegistry": "analysis/cvpr_live_evidence_portfolio/registry.json",
        "commandCenter": "analysis/cvpr_repo_harness_command_center/registry.json",
        "validator": "scripts/validate_cvpr_repo_harness_results.py",
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["portfolioStatus"] == "portfolio-ready"
        and summary["commandStatus"] == "operator-ready"
        and summary["replacementStatus"] == "ready"
        and summary["deltaStatus"] == "ready"
        and summary["surfaces"] == 8
        and summary["readySurfaces"] == 8
        and summary["rows"] == 40
        and summary["liveRows"] == 40
        and summary["smokePassed"] == 40
        and summary["artifacts"] == 40
        and summary["holdDemo"] == 0
        and summary["promotedRows"] == 40
        and summary["rollbackRows"] == 40
        and summary["deltaReadyRows"] == 40
    )
    summary["status"] = "release-ready" if gate else "block"
    return summary


def build_package(summary):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(BASE / "src/fixtures.js", "export const summary = " + json.dumps(summary, indent=2) + ";\n")
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR Live Evidence Release Brief\n\nOperator release brief for the CVPR live evidence portfolio, promoted result store, rollback artifact, and full validation gate.\n")


def build_registry(summary):
    write(ANALYSIS / "registry.json", json.dumps({"summary": summary}, indent=2) + "\n")


def build_page(summary):
    stats = [
        ("Status", summary["status"]),
        ("Demos", summary["surfaces"]),
        ("Rows", summary["rows"]),
        ("Promote", summary["promoteDemo"]),
        ("Review", summary["reviewRows"]),
        ("Shadow", summary["policyShadow"]),
        ("Canary", summary["canaryDemo"]),
        ("Rollback", summary["rollbackRows"]),
    ]
    stats_html = "".join(f"<article class=\"stat\"><b>{esc(v)}</b><span>{esc(k)}</span></article>" for k, v in stats)
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR Live Evidence Release Brief</title><style>:root{{--ink:#111718;--paper:#F7F7F3;--panel:#fff;--line:#D9DDD8;--muted:#5E6764;--accent:#235F65;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1280px;margin:0 auto;padding:0 24px}}header{{background:#172224;color:#EFF7F5;padding:42px 0 34px}}.bug,nav a,code,.stat span{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#9ED8D6}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:112ch;color:#CEDAD8}}nav a{{color:#D2EFEC;margin-right:12px;font-size:12px}}a{{color:var(--accent)}}.stats{{display:grid;grid-template-columns:repeat(8,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:12px}}.stat b{{display:block;font-size:22px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.panel{{padding:16px;margin-bottom:18px}}code{{display:block;background:#EEF3F0;padding:8px;border-radius:6px;white-space:normal;overflow-wrap:anywhere;margin:8px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:1000px){{.stats{{grid-template-columns:1fr 1fr}}h1{{font-size:34px}}}}</style></head><body><header><div class="wrap"><div class="bug">CVPR 2026 - live evidence release</div><h1>Live Evidence Release Brief</h1><p>Operator release brief for the CVPR repo evidence system: portfolio coverage, promoted result store, rollback state, decision posture, and validation gates.</p><nav><a href="index.html">all demos</a><a href="cvpr-live-evidence-portfolio.html">portfolio</a><a href="cvpr-repo-harness-command-center.html">command center</a><a href="analysis/cvpr_live_evidence_release_brief/registry.json">registry</a></nav></div></header><main class="wrap"><section class="stats">{stats_html}</section><section class="panel"><h2>Release Gate</h2><code>portfolio: {esc(summary['portfolioStatus'])} / command: {esc(summary['commandStatus'])} / replacement: {esc(summary['replacementStatus'])} / delta: {esc(summary['deltaStatus'])}</code><code>{esc(summary['validator'])} --results {esc(summary['promotedArtifact'])}</code><code>{esc(summary['fullStackCommand'])}</code></section><section class="panel"><h2>Rollback</h2><code>promoted: {esc(summary['promotedArtifact'])}</code><code>rollback: {esc(summary['rollbackArtifact'])}</code></section></main><footer><div class="wrap">Generated by scripts/build_cvpr_live_evidence_release_brief.py - package: source-code/learning/cvpr-live-evidence-release-brief</div></footer></body></html>"""
    write(ROOT / "cvpr-live-evidence-release-brief.html", page)


def main():
    summary = summarize(read_json(PORTFOLIO), read_json(RECEIPT), read_json(COMMAND), read_json(DELTA))
    build_package(summary)
    build_registry(summary)
    build_page(summary)
    print(f"wrote cvpr-live-evidence-release-brief.html: {summary['rows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()
