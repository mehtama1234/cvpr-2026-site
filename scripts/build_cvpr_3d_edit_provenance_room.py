"""Build the CVPR 3D edit provenance room demo."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "source-code/learning/cvpr-3d-edit-provenance-room"
ANALYSIS = ROOT / "analysis/cvpr_3d_edit_provenance_room"

SOURCES = {
    "backlog": ROOT / "analysis/cvpr_demo_build_backlog/registry.json",
    "geometry": ROOT / "analysis/cvpr_metric_geometry_bench/registry.json",
    "splat": ROOT / "analysis/cvpr_gaussian_splatting_bench/registry.json",
    "replay": ROOT / "analysis/cvpr_colab_result_replay/registry.json",
}

EDITS = [
    {"id": "inspect-only", "title": "Inspect only", "semanticShift": 0, "provenancePenalty": 0, "geometryPenalty": 0},
    {"id": "semantic-object-edit", "title": "Semantic object edit", "semanticShift": 10, "provenancePenalty": 8, "geometryPenalty": 4},
    {"id": "scene-rewrite", "title": "Scene rewrite", "semanticShift": 22, "provenancePenalty": 18, "geometryPenalty": 12},
]

CORE = """export function clamp(value, lo = 0, hi = 100) {
  return Math.max(lo, Math.min(hi, Number(value)));
}

export function scoreRoomPair(geometry, splat, edit) {
  const gm = geometry.metrics;
  const sm = splat.metrics;
  const geometryTrust = clamp(gm.poseEvidence * 0.30 + gm.metricEvidence * 0.34 + gm.surfaceConsistency * 0.24 + (100 - Math.max(gm.scaleDrift, gm.topologyRisk)) * 0.12 - edit.geometryPenalty);
  const renderTrust = clamp(sm.renderFidelity * 0.28 + sm.semanticAttachment * 0.24 + sm.provenanceTrace * 0.26 + (100 - Math.max(sm.viewInstability, sm.editLeakageRisk)) * 0.22 - edit.semanticShift * 0.16);
  const provenanceContinuity = clamp(sm.provenanceTrace * 0.42 + geometryTrust * 0.24 + renderTrust * 0.18 + (100 - edit.provenancePenalty) * 0.16);
  const editContainment = clamp((100 - sm.editLeakageRisk) * 0.34 + sm.semanticAttachment * 0.24 + gm.surfaceConsistency * 0.18 + (100 - edit.semanticShift) * 0.14 + (100 - edit.geometryPenalty) * 0.10);
  const roomRisk = clamp(Math.max(gm.scaleDrift, gm.topologyRisk, sm.editLeakageRisk, sm.viewInstability) + edit.provenancePenalty * 0.36 + edit.semanticShift * 0.18 + edit.geometryPenalty * 0.24);
  const readiness = clamp(geometryTrust * 0.28 + renderTrust * 0.26 + provenanceContinuity * 0.24 + editContainment * 0.14 + (100 - roomRisk) * 0.08);
  return { geometryTrust, renderTrust, provenanceContinuity, editContainment, roomRisk, readiness };
}

export function roomDecision(scores) {
  if (scores.readiness >= 74 && scores.geometryTrust >= 70 && scores.provenanceContinuity >= 74 && scores.editContainment >= 70 && scores.roomRisk <= 42) return "release";
  if (scores.readiness >= 64 && scores.geometryTrust >= 62 && scores.provenanceContinuity >= 64 && scores.roomRisk <= 58) return "review";
  return "block";
}

export function buildRoomRows(geometryRecords, splatRecords, edits) {
  return geometryRecords.flatMap((geometry) =>
    splatRecords.flatMap((splat) =>
      edits.map((edit) => {
        const scores = scoreRoomPair(geometry, splat, edit);
        return {
          id: `${geometry.id}/${splat.id}/${edit.id}`,
          geometryCase: geometry.title,
          splatCase: splat.title,
          edit: edit.title,
          scores,
          decision: roomDecision(scores)
        };
      })
    )
  );
}

export function summarizeRoom(geometryRecords, splatRecords, edits) {
  const rows = buildRoomRows(geometryRecords, splatRecords, edits);
  const avgReadiness = rows.reduce((sum, row) => sum + row.scores.readiness, 0) / rows.length;
  return {
    geometryCases: geometryRecords.length,
    splatCases: splatRecords.length,
    edits: edits.length,
    roomRows: rows.length,
    release: rows.filter((row) => row.decision === "release").length,
    review: rows.filter((row) => row.decision === "review").length,
    block: rows.filter((row) => row.decision === "block").length,
    minProvenanceContinuity: Number(Math.min(...rows.map((row) => row.scores.provenanceContinuity)).toFixed(1)),
    maxRoomRisk: Number(Math.max(...rows.map((row) => row.scores.roomRisk)).toFixed(1)),
    avgReadiness: Number(avgReadiness.toFixed(1)),
    rows
  };
}
"""

TEST = """import assert from "node:assert/strict";
import { edits, geometryRecords, roomRows, splatRecords, summary } from "../src/fixtures.js";
import { buildRoomRows, roomDecision, scoreRoomPair, summarizeRoom } from "../src/core.js";

const rows = buildRoomRows(geometryRecords, splatRecords, edits);
assert.equal(rows.length, 48);
assert.equal(roomRows.length, 48);

const inspect = scoreRoomPair(geometryRecords[0], splatRecords[0], edits[0]);
const rewrite = scoreRoomPair(geometryRecords[0], splatRecords[0], edits[2]);
assert.ok(inspect.provenanceContinuity > rewrite.provenanceContinuity);
assert.ok(inspect.roomRisk < rewrite.roomRisk);
assert.match(roomDecision(rewrite), /^(release|review|block)$/);

const derived = summarizeRoom(geometryRecords, splatRecords, edits);
assert.equal(derived.geometryCases, 4);
assert.equal(derived.splatCases, 4);
assert.equal(derived.edits, 3);
assert.equal(derived.roomRows, 48);
assert.equal(summary.backlogGoal, "3D edit provenance room");
assert.equal(summary.backlogTasksCovered, 3);
assert.equal(summary.evidenceJobs.length, 2);
assert.equal(summary.status, "release");
assert.equal(summary.block, 4);
assert.ok(summary.minProvenanceContinuity >= 76);
assert.ok(summary.maxRoomRisk <= 44);
console.log("ok cvpr-3d-edit-provenance-room:", summary.roomRows, "room rows");
"""


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def esc(value):
    return str(value).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def load_input():
    return {name: read_json(path) for name, path in SOURCES.items()}


def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, float(value)))


def score_pair(geometry, splat, edit):
    gm = geometry["metrics"]
    sm = splat["metrics"]
    geometry_trust = clamp(gm["poseEvidence"] * 0.30 + gm["metricEvidence"] * 0.34 + gm["surfaceConsistency"] * 0.24 + (100 - max(gm["scaleDrift"], gm["topologyRisk"])) * 0.12 - edit["geometryPenalty"])
    render_trust = clamp(sm["renderFidelity"] * 0.28 + sm["semanticAttachment"] * 0.24 + sm["provenanceTrace"] * 0.26 + (100 - max(sm["viewInstability"], sm["editLeakageRisk"])) * 0.22 - edit["semanticShift"] * 0.16)
    provenance = clamp(sm["provenanceTrace"] * 0.42 + geometry_trust * 0.24 + render_trust * 0.18 + (100 - edit["provenancePenalty"]) * 0.16)
    containment = clamp((100 - sm["editLeakageRisk"]) * 0.34 + sm["semanticAttachment"] * 0.24 + gm["surfaceConsistency"] * 0.18 + (100 - edit["semanticShift"]) * 0.14 + (100 - edit["geometryPenalty"]) * 0.10)
    risk = clamp(max(gm["scaleDrift"], gm["topologyRisk"], sm["editLeakageRisk"], sm["viewInstability"]) + edit["provenancePenalty"] * 0.36 + edit["semanticShift"] * 0.18 + edit["geometryPenalty"] * 0.24)
    readiness = clamp(geometry_trust * 0.28 + render_trust * 0.26 + provenance * 0.24 + containment * 0.14 + (100 - risk) * 0.08)
    return {
        "geometryTrust": round(geometry_trust, 1),
        "renderTrust": round(render_trust, 1),
        "provenanceContinuity": round(provenance, 1),
        "editContainment": round(containment, 1),
        "roomRisk": round(risk, 1),
        "readiness": round(readiness, 1),
    }


def decide(scores):
    if scores["readiness"] >= 74 and scores["geometryTrust"] >= 70 and scores["provenanceContinuity"] >= 74 and scores["editContainment"] >= 70 and scores["roomRisk"] <= 42:
        return "release"
    if scores["readiness"] >= 64 and scores["geometryTrust"] >= 62 and scores["provenanceContinuity"] >= 64 and scores["roomRisk"] <= 58:
        return "review"
    return "block"


def build_rows(data):
    rows = []
    for geometry in data["geometry"]["records"]:
        for splat in data["splat"]["records"]:
            for edit in EDITS:
                scores = score_pair(geometry, splat, edit)
                rows.append(
                    {
                        "id": f"{geometry['id']}/{splat['id']}/{edit['id']}",
                        "geometryCaseId": geometry["id"],
                        "geometryCase": geometry["title"],
                        "splatCaseId": splat["id"],
                        "splatCase": splat["title"],
                        "editId": edit["id"],
                        "edit": edit["title"],
                        "scores": scores,
                        "decision": decide(scores),
                        "geometryBench": "cvpr-metric-geometry-bench",
                        "splatBench": "cvpr-gaussian-splatting-bench",
                        "sourceRuntimeModes": [geometry["preferredRuntime"], splat["preferredRuntime"]],
                        "evidenceArtifacts": geometry["evidenceArtifacts"] + splat["evidenceArtifacts"],
                    }
                )
    return rows


def summarize(data, rows):
    backlog_tasks = [task for task in data["backlog"]["backlogTasks"] if task["goal"] == "3D edit provenance room"]
    replay_jobs = [row for row in data["replay"]["replayRows"] if row["jobId"] in {"metric-geometry", "gaussian-splatting"}]
    summary = {
        "demo": "cvpr-3d-edit-provenance-room",
        "status": "release",
        "backlogGoal": "3D edit provenance room",
        "backlogTasksCovered": len(backlog_tasks),
        "theme": "Recovering the 3D world from flat pictures",
        "systems": ["metric-3d-reconstruction", "gaussian-splatting-platform"],
        "benches": ["cvpr-metric-geometry-bench", "cvpr-gaussian-splatting-bench"],
        "geometryCases": data["geometry"]["summary"]["cases"],
        "splatCases": data["splat"]["summary"]["cases"],
        "edits": len(EDITS),
        "roomRows": len(rows),
        "release": len([row for row in rows if row["decision"] == "release"]),
        "review": len([row for row in rows if row["decision"] == "review"]),
        "block": len([row for row in rows if row["decision"] == "block"]),
        "cachedSystemEvidenceCases": data["geometry"]["summary"]["cachedSystemEvidenceCases"] + data["splat"]["summary"]["cachedSystemEvidenceCases"],
        "evidenceJobs": [row["jobId"] for row in replay_jobs],
        "minProvenanceContinuity": min(row["scores"]["provenanceContinuity"] for row in rows),
        "maxRoomRisk": max(row["scores"]["roomRisk"] for row in rows),
        "avgReadiness": round(sum(row["scores"]["readiness"] for row in rows) / len(rows), 1),
        "fullStackCommand": "python3 scripts/validate_cvpr_full_stack.py",
    }
    gate = (
        summary["backlogTasksCovered"] == 3
        and summary["geometryCases"] == 4
        and summary["splatCases"] == 4
        and summary["edits"] == 3
        and summary["roomRows"] == 48
        and summary["cachedSystemEvidenceCases"] == 8
        and set(summary["evidenceJobs"]) == {"metric-geometry", "gaussian-splatting"}
        and summary["block"] == 4
        and summary["minProvenanceContinuity"] >= 76
        and summary["maxRoomRisk"] <= 44
    )
    summary["status"] = "release" if gate else "inspect"
    return summary


def build_package(data, summary, rows):
    write(BASE / "package.json", json.dumps({"type": "module"}, indent=2) + "\n")
    write(BASE / "src/core.js", CORE)
    write(
        BASE / "src/fixtures.js",
        "export const geometryRecords = " + json.dumps(data["geometry"]["records"], indent=2) + ";\n"
        "export const splatRecords = " + json.dumps(data["splat"]["records"], indent=2) + ";\n"
        "export const edits = " + json.dumps(EDITS, indent=2) + ";\n"
        "export const roomRows = " + json.dumps(rows, indent=2) + ";\n"
        "export const summary = " + json.dumps(summary, indent=2) + ";\n",
    )
    write(BASE / "tests/core.test.js", TEST)
    write(BASE / "README.md", "# CVPR 3D Edit Provenance Room\n\nCross-bench 3D evidence room connecting metric geometry and Gaussian Splatting provenance through edit-mode stress tests.\n")


def build_registry(summary, rows):
    write(
        ANALYSIS / "registry.json",
        json.dumps(
            {
                "summary": summary,
                "edits": EDITS,
                "roomRows": rows,
                "sources": {name: str(path.relative_to(ROOT)) for name, path in SOURCES.items()},
            },
            indent=2,
        )
        + "\n",
    )


def build_page(data, summary, rows):
    stats = [
        ("Status", summary["status"]),
        ("Rows", summary["roomRows"]),
        ("Release", summary["release"]),
        ("Review", summary["review"]),
        ("Blocked", summary["block"]),
        ("Evidence cases", summary["cachedSystemEvidenceCases"]),
        ("Min provenance", summary["minProvenanceContinuity"]),
        ("Max risk", summary["maxRoomRisk"]),
    ]
    stats_html = "".join(f"""<article class="stat"><b>{esc(value)}</b><span>{esc(label)}</span></article>""" for label, value in stats)
    rows_html = "".join(
        f"""<tr><td>{esc(row['geometryCase'])}</td><td>{esc(row['splatCase'])}</td><td>{esc(row['edit'])}</td><td>{row['scores']['geometryTrust']}</td><td>{row['scores']['renderTrust']}</td><td>{row['scores']['provenanceContinuity']}</td><td>{row['scores']['editContainment']}</td><td>{row['scores']['roomRisk']}</td><td class="{esc(row['decision'])}">{esc(row['decision'])}</td></tr>"""
        for row in rows
    )
    page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CVPR 3D Edit Provenance Room</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--good:#277449;--warn:#B37A1E;--bad:#9B2D2D;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.5}}.wrap{{max-width:1360px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,nav a,.stat span,label,th,code{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:44px;line-height:1.04;margin:10px 0}}header p{{max-width:98ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:#0A5A62}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:20px 0}}.stat,.panel{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:13px}}.stat b{{display:block;font-size:24px;overflow-wrap:anywhere}}.stat span{{font-size:11px;color:var(--muted)}}.room{{display:grid;grid-template-columns:330px 1fr;gap:16px;margin:18px 0}}.panel{{padding:16px;overflow-x:auto}}.controls{{display:grid;gap:12px}}select{{width:100%}}canvas{{width:100%;height:auto;background:#EEF3F2;border:1px solid var(--line);border-radius:6px;display:block}}.meters{{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px}}.meters div{{background:#fff;border:1px solid var(--line);border-radius:6px;padding:8px}}.meters b{{display:block;font-size:22px}}table{{width:100%;border-collapse:collapse;font-size:13px;min-width:1080px}}td,th{{border-bottom:1px solid var(--line);padding:8px;text-align:left;vertical-align:top}}th{{font-size:11px;color:var(--muted)}}code{{display:block;background:#EEF3F2;padding:7px;border-radius:6px;white-space:normal;overflow-wrap:anywhere}}.release{{color:var(--good);font-weight:700}}.review{{color:var(--warn);font-weight:700}}.block,.inspect{{color:var(--bad);font-weight:700}}footer{{border-top:1px solid var(--line);padding:20px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:920px){{.stats,.room{{grid-template-columns:1fr}}.meters{{grid-template-columns:repeat(2,1fr)}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · implemented roadmap demo</div><h1>3D Edit Provenance Room</h1><p>Scene-level 3D evidence demo that connects metric geometry, Gaussian Splatting, semantic edits, and provenance continuity across cached-system evidence plus the Pro+ replay job map.</p><nav><a href="index.html">all themes</a><a href="cvpr-demo-build-backlog.html">build backlog</a><a href="cvpr-next-demo-roadmap.html">roadmap</a><a href="cvpr-metric-geometry-bench.html">geometry bench</a><a href="cvpr-gaussian-splatting-bench.html">splat bench</a><a href="analysis/cvpr_3d_edit_provenance_room/registry.json">registry</a></nav></div></header>
<main class="wrap"><section class="stats">{stats_html}</section><section class="room"><aside class="panel controls"><label>geometry case<select id="geometry"></select></label><label>splat case<select id="splat"></select></label><label>edit mode<select id="edit"></select></label><code id="source"></code></aside><section class="panel"><canvas id="chart" width="820" height="420" aria-label="3D edit provenance room chart"></canvas><div class="meters"><div><b id="geom">0</b><span>geometry</span></div><div><b id="render">0</b><span>render</span></div><div><b id="prov">0</b><span>provenance</span></div><div><b id="risk">0</b><span>risk</span></div><div><b id="decision">-</b><span>decision</span></div></div></section></section><section class="panel"><h2>Room Matrix</h2><table><thead><tr><th>Geometry</th><th>Splat</th><th>Edit</th><th>Geometry trust</th><th>Render trust</th><th>Provenance</th><th>Containment</th><th>Risk</th><th>Decision</th></tr></thead><tbody>{rows_html}</tbody></table></section><section class="panel"><h2>Release Gate</h2><code>{esc(summary['fullStackCommand'])} · backlog tasks covered: {summary['backlogTasksCovered']} · evidence jobs: {esc(', '.join(summary['evidenceJobs']))}</code></section></main>
<footer><div class="wrap">Generated by scripts/build_cvpr_3d_edit_provenance_room.py · tested package under source-code/learning/cvpr-3d-edit-provenance-room</div></footer>
<script type="module">
import {{ roomDecision, scoreRoomPair }} from "./source-code/learning/cvpr-3d-edit-provenance-room/src/core.js";
const geometryRecords = {json.dumps(data['geometry']['records'])};
const splatRecords = {json.dumps(data['splat']['records'])};
const edits = {json.dumps(EDITS)};
const selects = {{ geometry: document.querySelector("#geometry"), splat: document.querySelector("#splat"), edit: document.querySelector("#edit") }};
for (const row of geometryRecords) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; selects.geometry.append(option); }}
for (const row of splatRecords) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; selects.splat.append(option); }}
for (const row of edits) {{ const option=document.createElement("option"); option.value=row.id; option.textContent=row.title; selects.edit.append(option); }}
function selected() {{ return [geometryRecords.find((row)=>row.id===selects.geometry.value)||geometryRecords[0], splatRecords.find((row)=>row.id===selects.splat.value)||splatRecords[0], edits.find((row)=>row.id===selects.edit.value)||edits[0]]; }}
function draw(scores, edit) {{ const canvas=document.querySelector("#chart"); const ctx=canvas.getContext("2d"); ctx.clearRect(0,0,canvas.width,canvas.height); ctx.fillStyle="#EEF3F2"; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.strokeStyle="#7FA6A4"; ctx.lineWidth=1; for(let z=0;z<6;z++){{ctx.beginPath();ctx.moveTo(130+z*40,310-z*28);ctx.lineTo(610+z*16,310-z*28);ctx.lineTo(520+z*20,110-z*8);ctx.lineTo(90+z*40,110-z*8);ctx.closePath();ctx.stroke();}} for(let i=0;i<90;i++){{const x=120+(i*53)%540,y=116+(i*71)%190;ctx.fillStyle=i%7===0?"#B37A1E":i%5===0?"#277449":"#0E7C86";ctx.globalAlpha=.36;ctx.beginPath();ctx.arc(x,y,2+(edit.semanticShift/18),0,Math.PI*2);ctx.fill();}}ctx.globalAlpha=1;ctx.strokeStyle=scores.roomRisk>50?"#9B2D2D":scores.roomRisk>42?"#B37A1E":"#277449";ctx.lineWidth=6;ctx.strokeRect(82,78,612,260); const bars=[["geom",scores.geometryTrust,"#0E7C86"],["render",scores.renderTrust,"#277449"],["prov",scores.provenanceContinuity,"#101719"],["risk",scores.roomRisk,"#9B2D2D"]]; bars.forEach(([name,val,color],i)=>{{ctx.fillStyle=color;ctx.fillRect(115+i*145,385-val*2.1,74,val*2.1);ctx.fillStyle="#23302C";ctx.font="12px ui-monospace, monospace";ctx.fillText(name,116+i*145,404);}}); }}
function render() {{ const [geometry, splat, edit] = selected(); const scores=scoreRoomPair(geometry, splat, edit); const verdict=roomDecision(scores); geom.textContent=scores.geometryTrust.toFixed(1); render.textContent=scores.renderTrust.toFixed(1); prov.textContent=scores.provenanceContinuity.toFixed(1); risk.textContent=scores.roomRisk.toFixed(1); decision.textContent=verdict; decision.className=verdict; source.textContent=geometry.preferredRuntime + " + " + splat.preferredRuntime; draw(scores, edit); }}
Object.values(selects).forEach((select)=>select.addEventListener("change", render)); selects.geometry.value=geometryRecords[0].id; selects.splat.value=splatRecords[0].id; selects.edit.value=edits[0].id; render();
</script></body></html>"""
    write(ROOT / "cvpr-3d-edit-provenance-room.html", page)


def main():
    data = load_input()
    rows = build_rows(data)
    summary = summarize(data, rows)
    build_package(data, summary, rows)
    build_registry(summary, rows)
    build_page(data, summary, rows)
    print(f"wrote cvpr-3d-edit-provenance-room.html: {summary['roomRows']} rows, status {summary['status']}")


if __name__ == "__main__":
    main()
