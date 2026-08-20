#!/usr/bin/env python3
"""Build a single-paper review surface for every paper-depth record."""

from __future__ import annotations

import hashlib
import html
import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SEARCH = ROOT / "search.html"
OUT = ROOT / "paper-review.html"

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


def esc(value: str) -> str:
    return html.escape(value or "", quote=True)


def stable_key(record: dict) -> str:
    raw = f'{record.get("th", "")}|{record.get("t", "")}'
    return "pr-" + hashlib.sha1(raw.encode("utf-8")).hexdigest()[:12]


def load_records() -> list[dict]:
    text = SEARCH.read_text(encoding="utf-8")
    match = re.search(r"const D=(.*?);const THT=", text, re.S)
    if not match:
        raise ValueError("missing search corpus")
    records = json.loads(match.group(1))
    return [record for record in records if isinstance(record.get("pd"), dict)]


def render(records: list[dict]) -> str:
    enriched = []
    for record in records:
        item = dict(record)
        item["key"] = stable_key(record)
        item["themeName"] = THEME_NAMES.get(record.get("th", ""), record.get("th", ""))
        enriched.append(item)
    data_json = json.dumps(enriched, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    theme_options = "".join(
        f'<option value="{esc(theme)}">{esc(name)}</option>' for theme, name in THEME_NAMES.items()
    )
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Paper Review — CVPR 2026</title>
<style>:root{{--ink:#101719;--paper:#F5F6F4;--panel:#FBFCFB;--line:#D7DCD9;--muted:#59656A;--accent:#0E7C86;--accent-deep:#0A5A62;--warn:#B37A1E;--good:#2F7A4F;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Arial,sans-serif}}*{{box-sizing:border-box}}body{{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.58}}.wrap{{max-width:1060px;margin:0 auto;padding:0 24px}}header{{background:var(--ink);color:#E7ECED;padding:40px 0 32px}}.bug,nav a,label,.meta,.tag,.status-note,.small,button{{font-family:var(--mono)}}.bug{{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#4FC4CE}}h1{{font-size:42px;line-height:1.05;margin:10px 0}}header p{{max-width:86ch;color:#AEBABD}}nav a{{font-size:12px;color:#B7DDE1;margin-right:12px}}a{{color:var(--accent-deep)}}.tools,.paper,.depth,.review-box,.empty{{background:var(--panel);border:1px solid var(--line);border-radius:8px}}.tools{{display:grid;grid-template-columns:1fr 220px auto auto;gap:10px;align-items:end;margin:18px 0;padding:14px}}label{{display:block;font-size:11px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase}}input,select,textarea{{width:100%;border:1px solid var(--line);border-radius:6px;background:#fff;color:var(--ink);font:14px var(--sans);padding:8px 9px;margin-top:4px}}button{{border:1px solid var(--line);border-radius:6px;background:#fff;color:var(--accent-deep);padding:9px 11px;cursor:pointer}}button:hover{{border-color:var(--accent)}}.paper{{padding:18px 20px;margin:16px 0}}.meta{{display:flex;gap:9px;align-items:center;flex-wrap:wrap;font-size:11px;color:var(--muted)}}.paper h2{{font-size:28px;line-height:1.14;margin:8px 0}}.one{{font-size:16px;color:#23302C}}.links,.small{{font-size:12px}}.links a{{margin-right:12px}}.depth{{border-left:4px solid var(--warn);border-radius:0 8px 8px 0;padding:12px 14px;margin:12px 0;background:#fffdf4}}.depth p{{font-size:14.5px;color:#23302C;margin:8px 0}}.depth b{{color:var(--ink)}}.review-box{{border-left:4px solid var(--accent);border-radius:0 8px 8px 0;padding:14px;margin:14px 0}}.review-grid{{display:grid;grid-template-columns:220px 1fr;gap:12px;align-items:start}}textarea{{min-height:110px}}.status-note{{font-size:11px;color:var(--muted);margin-top:6px}}details{{margin-top:12px}}summary{{cursor:pointer;color:var(--accent-deep);font-family:var(--mono);font-size:12px}}details p{{font-size:14px;color:#23302C}}.tag{{display:inline-block;font-size:10.5px;color:var(--muted);background:#E4ECEB;border-radius:4px;padding:1px 6px;margin:2px 3px 0 0}}.empty{{padding:18px;margin:16px 0}}footer{{border-top:1px solid var(--line);padding:20px 0 52px;color:var(--muted);font-family:var(--mono);font-size:12px}}@media(max-width:820px){{.tools,.review-grid{{grid-template-columns:1fr}}h1{{font-size:34px}}}}</style></head>
<body><header><div class="wrap"><div class="bug">CVPR 2026 · all-paper review</div><h1>Paper Review</h1><p>Review any paper note in the corpus, one paper at a time. This page uses the same first-principles depth fields as search: hidden quantity, evidence, mathematical rule, naive failure, proof test, and counterexample.</p><nav><a href="index.html">all themes</a><a href="search.html">search papers</a><a href="paper-review-queue.html">64-paper queue</a><a href="paper-note-quality.html">quality audit</a><a href="first-principles-audit.html">first-principles audit</a></nav></div></header>
<main class="wrap"><section class="tools"><label>Find paper<input id="q" type="search" placeholder="title, tag, hidden quantity, evidence"></label><label>Theme<select id="theme"><option value="">All themes</option>{theme_options}</select></label><button type="button" id="prev">Previous</button><button type="button" id="next">Next</button></section><div class="small" id="count"></div><section id="paper"></section></main>
<footer><div class="wrap">Generated by scripts/build_paper_review.py from search.html paper-depth records.</div></footer><script>
const PAPERS={data_json};
const q=document.getElementById("q"), theme=document.getElementById("theme"), out=document.getElementById("paper"), count=document.getElementById("count"), storageKey="cvpr-paper-review-status";
const saved=JSON.parse(localStorage.getItem(storageKey)||"{{}}"); let index=0;
function esc(s){{return (s||"").replace(/[&<>]/g,c=>({{"&":"&amp;","<":"&lt;",">":"&gt;"}}[c]));}}
function paramsFor(record){{const p=new URLSearchParams(); p.set("q",record.t||""); if(record.th)p.set("theme",record.th); return p.toString();}}
function searchBlob(record){{const pd=record.pd||{{}}; return [record.t,record.fp,record.ff,record.p,(record.tg||[]).join(" "),pd.s,pd.h,pd.e,pd.m,pd.n,pd.p,pd.b].join(" ").toLowerCase();}}
function matches(){{const term=q.value.trim().toLowerCase(), th=theme.value; return PAPERS.filter(record=>(!th||record.th===th)&&(!term||searchBlob(record).includes(term)));}}
function entryFor(record){{const value=saved[record.key]; if(typeof value==="string") return {{status:value,note:""}}; return value&&typeof value==="object"?{{status:value.status||"todo",note:value.note||""}}:{{status:"todo",note:""}};}}
function saveEntry(record, patch){{saved[record.key]={{...entryFor(record),...patch}}; localStorage.setItem(storageKey, JSON.stringify(saved));}}
function syncUrl(record){{const p=new URLSearchParams(); if(q.value.trim())p.set("q",q.value.trim()); if(theme.value)p.set("theme",theme.value); if(record&&record.t!==q.value.trim())p.set("paper",record.t); history.replaceState(null,"",p.toString()?`${{location.pathname}}?${{p}}`:location.pathname);}}
function render(){{const rows=matches(); if(index>=rows.length)index=0; if(index<0)index=Math.max(0,rows.length-1); count.textContent=rows.length?`showing ${{index+1}} / ${{rows.length}} matching papers · ${{PAPERS.length}} total paper-depth records`:`no matching papers · ${{PAPERS.length}} total paper-depth records`; if(!rows.length){{out.innerHTML='<div class="empty"><h2>No paper matched</h2><p>Try a shorter title, remove the theme filter, or go back to search.</p></div>'; syncUrl(null); return;}} const record=rows[index], pd=record.pd, entry=entryFor(record), tags=(record.tg||[]).map(tag=>`<span class="tag">${{esc(tag)}}</span>`).join(""); syncUrl(record); out.innerHTML=`<article class="paper"><div class="meta"><span>${{esc(record.themeName)}}</span><span>${{esc(record.key)}}</span>${{record.r?`<a href="${{esc(record.r)}}" target="_blank" rel="noopener">code</a>`:""}}</div><h2>${{esc(record.t)}}</h2>${{record.fp?`<p class="one">${{esc(record.fp)}}</p>`:""}}<p class="links"><a href="search.html?${{paramsFor(record)}}">open in search</a><a href="paper-note-quality.html#q=${{new URLSearchParams({{q:record.t}})}}">quality audit</a><a href="paper-review-queue.html#${{paramsFor(record)}}">try in 64-paper queue</a></p><section class="review-box"><h3>Your review</h3><div class="review-grid"><label>Status<select id="status"><option value="todo">todo</option><option value="ok">clear</option><option value="rewrite">needs rewrite</option><option value="uncertain">uncertain</option></select></label><label>Reviewer note<textarea id="note" placeholder="What is missing, wrong, unclear, or strong about this explanation?"></textarea></label></div><div class="status-note" id="statusNote">Saved in this browser under the stable paper key.</div></section><section class="depth"><p><b>What to review.</b> ${{esc(pd.s)}}</p><p><b>Hidden quantity.</b> ${{esc(pd.h)}}</p><p><b>Evidence.</b> ${{esc(pd.e)}}</p><p><b>Mathematical rule.</b> ${{esc(pd.m)}}</p><p><b>Why the naive version fails.</b> ${{esc(pd.n)}}</p><p><b>Evidence that would prove it.</b> ${{esc(pd.p)}}</p><p><b>Counterexample.</b> ${{esc(pd.b)}}</p></section><details><summary>Original paper-note text</summary><p>${{esc(record.p)}}</p>${{record.ff?`<p>${{esc(record.ff)}}</p>`:""}}</details><div>${{tags}}</div></article>`; const status=document.getElementById("status"), note=document.getElementById("note"), statusNote=document.getElementById("statusNote"); status.value=entry.status; note.value=entry.note; status.addEventListener("change",()=>{{saveEntry(record,{{status:status.value}}); statusNote.textContent=`saved status: ${{status.value}}`;}}); note.addEventListener("input",()=>{{saveEntry(record,{{note:note.value}}); statusNote.textContent="saved note";}});}}
function loadParams(){{const params=new URLSearchParams(location.search||location.hash.replace(/^#/,"?")); q.value=params.get("paper")||params.get("q")||""; theme.value=params.get("theme")||""; const rows=matches(); const paper=params.get("paper")||params.get("q")||""; const found=rows.findIndex(record=>record.t===paper); index=found>=0?found:0;}}
q.addEventListener("input",()=>{{index=0; render();}}); theme.addEventListener("change",()=>{{index=0; render();}}); document.getElementById("prev").addEventListener("click",()=>{{index--; render();}}); document.getElementById("next").addEventListener("click",()=>{{index++; render();}}); loadParams(); render();
</script></body></html>"""


def main() -> None:
    records = load_records()
    OUT.write_text(render(records), encoding="utf-8")
    print(f"wrote {OUT.name}: {len(records)} paper-depth records")


if __name__ == "__main__":
    main()
