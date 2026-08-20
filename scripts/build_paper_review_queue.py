#!/usr/bin/env python3
"""Build a visible review queue for first-principles paper notes."""

from __future__ import annotations

import html
import json
import re
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlencode


ROOT = Path(__file__).resolve().parents[1]
SEARCH = ROOT / "search.html"
OUT = ROOT / "paper-review-queue.html"

THEME_NAMES = {
    "emerging": "Frontier sensors, science, and trust",
    "threed": "3D reconstruction and geometry",
    "video": "Video, motion, and time",
    "generation": "Generation, editing, and restoration",
    "vlm": "Vision-language reasoning",
    "perceive": "Detection, segmentation, and recognition",
    "embodied": "Robotics, driving, and action",
    "learning": "Learning, adaptation, and efficiency",
}

PRIORITY = (
    "benchmark", "dataset", "adversarial", "attack", "backdoor", "watermark",
    "3d", "depth", "pose", "reconstruction", "diffusion", "generation",
    "vision-language", "vlm", "grounding", "segmentation", "detection",
    "robot", "driving", "policy", "federated", "continual", "quantization",
)


def esc(value: str) -> str:
    return html.escape(value or "", quote=True)


def load_records() -> list[dict]:
    text = SEARCH.read_text(encoding="utf-8")
    match = re.search(r"const D=(.*?);const THT=", text, re.S)
    if not match:
        raise ValueError("missing search corpus")
    return json.loads(match.group(1))


def score(record: dict) -> int:
    blob = " ".join(
        [record.get("t", ""), record.get("p", ""), record.get("fp", ""), record.get("ff", "")]
        + list(record.get("tg") or [])
    ).lower()
    value = sum(8 for word in PRIORITY if word in blob)
    value += max(0, 180 - len(record.get("p", ""))) // 20
    if record.get("r"):
        value += 2
    return value


def select(records: list[dict], per_theme: int = 8) -> list[dict]:
    by_theme: dict[str, list[dict]] = defaultdict(list)
    for record in records:
        if isinstance(record.get("pd"), dict):
            by_theme[record.get("th", "other")].append(record)
    chosen = []
    for theme in THEME_NAMES:
        ranked = sorted(by_theme[theme], key=lambda r: (-score(r), r["t"]))
        chosen.extend(ranked[:per_theme])
    return chosen


def card(record: dict, idx: int) -> str:
    pd = record["pd"]
    tags = "".join(f'<span class="tag">{esc(tag)}</span>' for tag in (record.get("tg") or [])[:8])
    repo = f'<a href="{esc(record["r"])}" target="_blank" rel="noopener">code</a>' if record.get("r") else ""
    search_href = "search.html?" + urlencode({"q": record.get("t", ""), "theme": record.get("th", "")})
    quality_href = "paper-note-quality.html#" + urlencode({"q": record.get("t", "")})
    search_blob = " ".join(
        [
            record.get("t", ""),
            record.get("fp", ""),
            record.get("p", ""),
            record.get("ff", ""),
            pd["h"],
            pd["e"],
            pd["m"],
            pd["n"],
            pd["p"],
            pd["b"],
            " ".join(record.get("tg") or []),
        ]
    ).lower()
    return f"""<article class="card" id="paper-{idx}" data-theme="{esc(record.get("th", ""))}" data-search="{esc(search_blob)}">
<div class="meta"><span>{idx:02d}</span><span>{esc(THEME_NAMES.get(record.get("th"), record.get("th", "")))}</span>{repo}</div>
<h2>{esc(record["t"])}</h2>
<p class="one">{esc(record.get("fp") or record.get("p") or "")}</p>
<p class="links"><a href="{esc(search_href)}">open this paper in search</a> · <a href="{esc(quality_href)}">check it in the quality audit</a></p>
<label class="status-control">Review status<select class="status" data-paper="paper-{idx}"><option value="todo">todo</option><option value="ok">clear</option><option value="rewrite">needs rewrite</option><option value="uncertain">uncertain</option></select></label>
<label class="note-control">Reviewer note<textarea class="review-note" data-paper="paper-{idx}" placeholder="What is missing, wrong, unclear, or strong about this explanation?"></textarea></label>
<div class="depth">
<p><b>What to review.</b> {esc(pd["s"])}</p>
<p><b>Hidden quantity.</b> {esc(pd["h"])}</p>
<p><b>Evidence.</b> {esc(pd["e"])}</p>
<p><b>Mathematical rule.</b> {esc(pd["m"])}</p>
<p><b>Why the naive version fails.</b> {esc(pd["n"])}</p>
<p><b>Evidence that would prove it.</b> {esc(pd["p"])}</p>
<p><b>Counterexample.</b> {esc(pd["b"])}</p>
</div>
<details><summary>Original paper-note text</summary><p>{esc(record.get("p", ""))}</p><p>{esc(record.get("ff", ""))}</p></details>
<div class="tags">{tags}</div>
</article>"""


def render(records: list[dict], chosen: list[dict]) -> str:
    counts = defaultdict(int)
    for record in chosen:
        counts[record["th"]] += 1
    stat_cards = "".join(
        f'<div class="stat"><b>{counts[theme]}</b><span>{esc(name)}</span></div>'
        for theme, name in THEME_NAMES.items()
    )
    cards = "".join(card(record, idx) for idx, record in enumerate(chosen, 1))
    options = "".join(f'<option value="{esc(theme)}">{esc(name)}</option>' for theme, name in THEME_NAMES.items())
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Paper Review Queue — CVPR 2026</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--accent-deep:#0A5A62;--warn:#B37A1E;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.58}}.wrap{{max-width:1180px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:42px 0 34px}}.bug,.meta,.stat span,nav a,summary,label,.count,.links,.rubric li,.state-tools button,.state-note{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:88ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:var(--accent-deep)}}.stats{{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:18px 0}}.stat,.rubric,.state-tools{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.stat{{padding:11px}}.stat b{{display:block;font-size:24px}}.stat span{{font-size:11px;color:var(--muted)}}.rubric,.state-tools{{border-left:4px solid var(--warn);border-radius:0 8px 8px 0;padding:14px 16px;margin:16px 0}}.rubric h2,.state-tools h2{{font-size:20px;margin:0 0 8px}}.rubric p,.state-tools p{{font-size:14.5px;color:#23302C;margin:7px 0}}.rubric ul{{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:10px 0 0;padding:0;list-style:none}}.rubric li{{font-size:12px;color:#23302C;background:#fffdf4;border:1px solid var(--line);border-radius:6px;padding:8px}}.state-grid{{display:grid;grid-template-columns:1fr auto;gap:10px;align-items:start}}textarea{{width:100%;min-height:92px;border:1px solid var(--line);border-radius:6px;background:#fff;color:var(--ink);font:12px var(--mono);padding:8px;margin-top:4px}}.state-buttons{{display:flex;gap:8px;flex-wrap:wrap}}button{{border:1px solid var(--line);border-radius:6px;background:#fff;color:var(--accent-deep);padding:8px 10px;cursor:pointer}}button:hover{{border-color:var(--accent)}}.state-note{{font-size:11px;color:var(--muted);margin-top:6px}}.controls{{position:sticky;top:0;z-index:4;background:rgba(245,246,244,.97);border-bottom:1px solid var(--line);padding:12px 0;display:grid;grid-template-columns:1fr 220px 180px auto;gap:10px;align-items:end}}label{{display:block;font-size:11px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase}}input,select{{width:100%;border:1px solid var(--line);border-radius:6px;background:#fff;color:var(--ink);font:14px var(--sans);padding:8px 9px;margin-top:4px}}.count{{font-size:12px;color:var(--accent-deep);white-space:nowrap;padding-bottom:9px}}.queue{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:18px 0 36px}}.card{{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--accent);border-radius:8px;padding:15px 16px}}.card[data-status="ok"]{{border-left-color:#2F7A4F}}.card[data-status="rewrite"]{{border-left-color:#B37A1E}}.card[data-status="uncertain"]{{border-left-color:#6B5BA7}}.card[hidden]{{display:none}}.meta{{display:flex;gap:9px;align-items:center;flex-wrap:wrap;font-size:11px;color:var(--muted)}}.meta span:first-child{{color:var(--accent-deep);font-weight:700}}.card h2{{font-size:19px;line-height:1.22;margin:7px 0 8px}}.one{{font-size:14.5px;color:#23302C}}.links{{font-size:12px;margin:8px 0}}.status-control{{max-width:220px;margin:8px 0}}.note-control{{margin:8px 0}}.review-note{{min-height:58px;font-family:var(--sans);font-size:13px}}.depth{{background:#fffdf4;border:1px solid var(--line);border-left:3px solid var(--warn);border-radius:0 8px 8px 0;padding:9px 11px;margin:10px 0}}.depth p{{font-size:13.5px;line-height:1.55;margin:6px 0}}details{{margin-top:10px}}summary{{cursor:pointer;color:var(--accent-deep);font-size:12px}}details p{{font-size:13.5px;color:#23302C}}.tag{{display:inline-block;font-family:var(--mono);font-size:10.5px;color:var(--muted);background:#E4ECEB;border-radius:4px;padding:1px 6px;margin:2px 3px 0 0}}footer{{border-top:1px solid var(--line);padding:22px 0 54px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:900px){{.queue,.stats,.controls,.rubric ul,.state-grid{{grid-template-columns:1fr}}h1{{font-size:34px}}.count{{padding-bottom:0}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · paper review</div><h1>Paper Review Queue</h1><p>A smaller review surface for checking whether the new paper notes are truly first-principles, detailed, and plain. Each card shows the hidden quantity, evidence, mathematical rule, naive failure, proof test, and counterexample.</p><nav><a href="index.html">all themes</a><a href="search.html">all papers</a><a href="first-principles-audit.html">audit</a><a href="math.html">math pages</a></nav></div></header>
<main class="wrap"><section class="stats"><div class="stat"><b>{len(chosen)}</b><span>review papers</span></div><div class="stat"><b>{len(records)}</b><span>source papers</span></div><div class="stat"><b>8</b><span>themes balanced</span></div><div class="stat"><b>7</b><span>depth fields per paper</span></div>{stat_cards}</section><section class="rubric"><h2>How to review a paper note</h2><p>Read the card as a claim about what the paper is really trying to recover, measure, control, or prove. A strong note should let a careful reader understand the paper without already knowing the subfield.</p><ul><li>Ask what hidden thing the method is trying to infer from incomplete evidence.</li><li>Check whether the mathematical rule says what changes, what stays fixed, and why.</li><li>Use the counterexample as the break test: if that case happens, the explanation is too weak.</li></ul></section><section class="state-tools"><h2>Save or move your review state</h2><p>Statuses live in this browser. Export them before switching machines, or paste a saved state here to restore a review session.</p><div class="state-grid"><label>Review state JSON or rewrite queue<textarea id="stateBox" placeholder="{{&quot;paper-1&quot;:&quot;rewrite&quot;,&quot;paper-2&quot;:&quot;ok&quot;}}"></textarea></label><div class="state-buttons"><button type="button" id="nextTodo">Next todo</button><button type="button" id="nextNeedsWork">Next needs work</button><button type="button" id="exportState">Export state</button><button type="button" id="exportRewriteQueue">Export rewrite queue</button><button type="button" id="importState">Import state</button><button type="button" id="clearState">Clear state</button></div></div><div class="state-note" id="stateNote">No state exported yet.</div></section><section class="controls"><label>Search<input id="q" placeholder="title, evidence, failure, tag"></label><label>Theme<select id="theme"><option value="">All themes</option>{options}</select></label><label>Status<select id="statusFilter"><option value="">All statuses</option><option value="todo">todo</option><option value="ok">clear</option><option value="rewrite">needs rewrite</option><option value="uncertain">uncertain</option></select></label><div class="count" id="count"></div></section><section class="queue" id="queue">{cards}</section></main>
<footer><div class="wrap">Generated by scripts/build_paper_review_queue.py from search.html paper-depth records.</div></footer><script>
const cards=[...document.querySelectorAll(".card")], q=document.getElementById("q"), theme=document.getElementById("theme"), statusFilter=document.getElementById("statusFilter"), count=document.getElementById("count"), stateBox=document.getElementById("stateBox"), stateNote=document.getElementById("stateNote");
const statusSelects=[...document.querySelectorAll(".status")], noteFields=[...document.querySelectorAll(".review-note")], storageKey="cvpr-paper-review-status";
const saved=JSON.parse(localStorage.getItem(storageKey)||"{{}}");
function setCardStatus(sel, value){{ sel.value=value; sel.closest(".card").dataset.status=value; }}
function saveState(){{ localStorage.setItem(storageKey, JSON.stringify(saved)); }}
function entryFor(id){{ const value=saved[id]; if(typeof value==="string") return {{status:value,note:""}}; return value&&typeof value==="object"?{{status:value.status||"todo",note:value.note||""}}:{{status:"todo",note:""}}; }}
function updateEntry(id, patch){{ saved[id]={{...entryFor(id), ...patch}}; saveState(); }}
for (const sel of statusSelects){{ const entry=entryFor(sel.dataset.paper); setCardStatus(sel, entry.status); sel.addEventListener("change", ()=>{{ updateEntry(sel.dataset.paper, {{status:sel.value}}); setCardStatus(sel, sel.value); applyFilters(); }}); }}
for (const field of noteFields){{ field.value=entryFor(field.dataset.paper).note; field.addEventListener("input", ()=>{{ updateEntry(field.dataset.paper, {{note:field.value}}); }}); }}
const params=new URLSearchParams(location.hash.replace(/^#/,"")); q.value=params.get("q")||""; theme.value=params.get("theme")||""; statusFilter.value=params.get("status")||"";
function syncUrl(){{ const p=new URLSearchParams(); if(q.value.trim())p.set("q",q.value.trim()); if(theme.value)p.set("theme",theme.value); if(statusFilter.value)p.set("status",statusFilter.value); const next=p.toString()?`${{location.pathname}}#${{p}}`:location.pathname; history.replaceState(null,"",next); }}
function applyFilters(){{ const term=q.value.trim().toLowerCase(), th=theme.value, st=statusFilter.value; let shown=0; const totals={{todo:0,ok:0,rewrite:0,uncertain:0}}; for (const card of cards){{ const cardStatus=card.dataset.status||"todo"; totals[cardStatus]++; const okTheme=!th || card.dataset.theme===th; const okText=!term || card.dataset.search.includes(term); const okStatus=!st || cardStatus===st; const show=okTheme && okText && okStatus; card.hidden=!show; if(show) shown++; }} count.textContent=`showing ${{shown}} / ${{cards.length}} · todo ${{totals.todo}} · clear ${{totals.ok}} · rewrite ${{totals.rewrite}} · uncertain ${{totals.uncertain}}`; }}
function exportState(){{ stateBox.value=JSON.stringify(saved, null, 2); stateNote.textContent=`exported ${{Object.keys(saved).length}} saved paper states`; }}
function depthField(card, label){{ const row=[...card.querySelectorAll(".depth p")].find(p=>p.textContent.startsWith(label)); return row?row.textContent.replace(label,"").trim():""; }}
function exportRewriteQueue(){{ const rows=[]; for (const card of cards){{ const entry=entryFor(card.id); if(!["rewrite","uncertain"].includes(entry.status)) continue; const title=card.querySelector("h2").textContent.trim(), themeName=card.querySelector(".meta span:nth-child(2)").textContent.trim(), links=[...card.querySelectorAll(".links a")].map(a=>`${{a.textContent.trim()}}: ${{a.getAttribute("href")}}`).join(" | "), hidden=depthField(card,"Hidden quantity."), rule=depthField(card,"Mathematical rule."), proof=depthField(card,"Evidence that would prove it."), counter=depthField(card,"Counterexample."), note=entry.note.trim()||"(no reviewer note yet)"; rows.push(`## ${{title}}\\nstatus: ${{entry.status}}\\ntheme: ${{themeName}}\\nlinks: ${{links}}\\nhidden quantity: ${{hidden}}\\nmathematical rule: ${{rule}}\\nproof test: ${{proof}}\\ncounterexample: ${{counter}}\\nreviewer note: ${{note}}`); }} stateBox.value=rows.length?`# Paper rewrite queue\\n\\n${{rows.join("\\n\\n")}}`:"# Paper rewrite queue\\n\\nNo papers marked needs rewrite or uncertain."; stateNote.textContent=`exported ${{rows.length}} rewrite/uncertain papers`; }}
function jumpToStatus(statuses){{ const visible=cards.filter(card=>!card.hidden && statuses.includes(card.dataset.status||"todo")); if(!visible.length){{ stateNote.textContent=`no visible papers with status ${{statuses.join(" or ")}}`; return; }} const after=visible.find(card=>card.getBoundingClientRect().top>80)||visible[0]; after.scrollIntoView({{behavior:"smooth",block:"center"}}); after.querySelector(".review-note")?.focus({{preventScroll:true}}); stateNote.textContent=`jumped to ${{after.id}}`; }}
function importState(){{ try{{ const incoming=JSON.parse(stateBox.value||"{{}}"), allowed=new Set(["todo","ok","rewrite","uncertain"]), normalized={{}}; for (const [key,value] of Object.entries(incoming)){{ if(!/^paper-\\d+$/.test(key)) throw new Error("invalid review state"); if(typeof value==="string"){{ if(!allowed.has(value)) throw new Error("invalid review state"); normalized[key]={{status:value,note:""}}; }} else if(value&&typeof value==="object"){{ const status=value.status||"todo", note=value.note||""; if(!allowed.has(status)||typeof note!=="string") throw new Error("invalid review state"); normalized[key]={{status,note}}; }} else throw new Error("invalid review state"); }} for (const key of Object.keys(saved)) delete saved[key]; Object.assign(saved, normalized); saveState(); for (const sel of statusSelects) setCardStatus(sel, entryFor(sel.dataset.paper).status); for (const field of noteFields) field.value=entryFor(field.dataset.paper).note; applyFilters(); stateNote.textContent=`imported ${{Object.keys(saved).length}} saved paper states`; }}catch(err){{ stateNote.textContent="import failed: paste the exported JSON object"; }} }}
function clearState(){{ for (const key of Object.keys(saved)) delete saved[key]; saveState(); for (const sel of statusSelects) setCardStatus(sel, "todo"); for (const field of noteFields) field.value=""; stateBox.value=""; applyFilters(); stateNote.textContent="cleared saved paper states"; }}
q.addEventListener("input", ()=>{{ syncUrl(); applyFilters(); }}); theme.addEventListener("change", ()=>{{ syncUrl(); applyFilters(); }}); statusFilter.addEventListener("change", ()=>{{ syncUrl(); applyFilters(); }}); applyFilters();
document.getElementById("nextTodo").addEventListener("click", ()=>jumpToStatus(["todo"])); document.getElementById("nextNeedsWork").addEventListener("click", ()=>jumpToStatus(["rewrite","uncertain"])); document.getElementById("exportState").addEventListener("click", exportState); document.getElementById("exportRewriteQueue").addEventListener("click", exportRewriteQueue); document.getElementById("importState").addEventListener("click", importState); document.getElementById("clearState").addEventListener("click", clearState);
</script></body></html>"""


def main() -> None:
    records = load_records()
    chosen = select(records)
    OUT.write_text(render(records, chosen), encoding="utf-8")
    print(f"wrote {OUT.name}: {len(chosen)} review papers from {len(records)} source papers")


if __name__ == "__main__":
    main()
