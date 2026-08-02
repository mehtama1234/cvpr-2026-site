#!/usr/bin/env python3
import html
from pathlib import Path

from course_spine import COURSE_SUBTITLE, COURSE_TITLE, INTRO, READING_PATH, SECTIONS

ROOT = Path(__file__).resolve().parent


def esc(value):
    return html.escape(str(value or ""), quote=True)


def render_intro():
    return "".join(f"<p>{esc(p)}</p>" for p in INTRO)


def render_path():
    return "".join(f'<a href="{esc(href)}">{esc(label)}</a>' for href, label in READING_PATH)


def render_nav():
    return "".join(
        f'<a href="#s{idx}">{idx}. {esc(section["kicker"])}</a>'
        for idx, section in enumerate(SECTIONS, 1)
    )


def render_sections():
    parts = []
    for idx, section in enumerate(SECTIONS, 1):
        body = "".join(f"<p>{esc(p)}</p>" for p in section["body"])
        apps = "".join(f"<li>{esc(app)}</li>" for app in section["applications"])
        parts.append(
            f"""
<section class="part" id="s{idx}">
  <div class="kicker">{esc(section["kicker"])}</div>
  <h2>{idx}. {esc(section["title"])}</h2>
  <p class="summary">{esc(section["summary"])}</p>
  <div class="essay">{body}</div>
  <div class="uses"><h3>Where this shows up</h3><ul>{apps}</ul></div>
</section>"""
        )
    return "\n".join(parts)


PAGE = """<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>__TITLE__</title>
<style>
:root{--ink:#0F1619;--paper:#F5F6F4;--panel:#FBFCFB;--tint:#E4ECEB;--line:#D7DCD9;--graphite:#59656A;--accent:#0E7C86;--accent-deep:#0A5A62;--accent-lite:#4FC4CE;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace;--sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,Roboto,Arial,sans-serif}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:var(--sans);line-height:1.68}.wrap{max-width:900px;margin:0 auto;padding:0 26px}a{color:var(--accent-deep);text-decoration:none;border-bottom:1px solid #0e7c8650}a:hover{border-bottom-color:var(--accent)}header{background:var(--ink);color:#E7ECED;padding:46px 0 40px;border-bottom:1px solid #000}.bug,.kicker{font-family:var(--mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--accent-lite);font-weight:700}h1,h2,h3{margin:0;line-height:1.12;letter-spacing:0;text-wrap:balance}h1{font-size:clamp(38px,7vw,70px);margin-top:13px;color:#F8FAFA;letter-spacing:-.03em}.lede{margin-top:16px;color:#AEBABD;font-size:18px;max-width:70ch}
nav{position:sticky;top:0;background:rgba(15,22,25,.96);z-index:5;border-bottom:1px solid #263237}.navwrap{display:flex;gap:6px;padding-top:9px;padding-bottom:9px;overflow:auto}nav a{white-space:nowrap;font-family:var(--mono);font-size:12px;color:#AEBABD;border:0;padding:6px 10px;border-radius:999px;background:#1b262c}nav a:hover{color:#fff}
.intro,.path,.part{background:var(--panel);border:1px solid var(--line);border-radius:12px}.intro{border-left:3px solid var(--accent);padding:18px 20px;margin:24px 0 18px}.intro p{margin:0 0 12px;color:#23302C}.intro p:last-child{margin-bottom:0}.path{padding:15px 18px;margin:18px 0 24px}.path b{display:block;font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--graphite);margin-bottom:8px}.path a{display:inline-block;margin:4px 12px 4px 0}.part{border-left:3px solid var(--accent);padding:23px 24px;margin:18px 0}.part .kicker{color:var(--accent)}h2{font-size:clamp(25px,4vw,36px);margin-top:7px}.summary{font-size:18px;color:#23302C;margin:9px 0 16px}.essay p{font-size:16px;color:#23302C;margin:0 0 13px}.uses{border-top:1px solid var(--line);padding-top:13px;margin-top:15px}.uses h3{font-family:var(--mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--graphite);margin-bottom:8px}.uses ul{margin:0;padding-left:20px}.uses li{color:#23302C;margin:5px 0}footer{color:var(--graphite);font-family:var(--mono);font-size:12px;padding:28px 0 60px;border-top:1px solid var(--line);margin-top:24px}@media(max-width:640px){.wrap{padding:0 18px}.part{padding:20px}}
</style></head><body>
<header><div class="wrap"><div class="bug">CVPR 2026 course spine</div><h1>__TITLE__</h1><p class="lede">__SUBTITLE__</p></div></header>
<nav><div class="wrap navwrap">__NAV__</div></nav>
<main class="wrap">
  <div class="intro">__INTRO__</div>
  <div class="path"><b>Read next</b>__PATH__</div>
  __SECTIONS__
  <footer>Part of the standalone CVPR 2026 first-principles site. Continue to <a href="index.html">all themes</a>, <a href="hub.html">the one machine</a>, or <a href="math.html">the mathematics</a>.</footer>
</main></body></html>
"""


def main():
    page = (
        PAGE.replace("__TITLE__", esc(COURSE_TITLE))
        .replace("__SUBTITLE__", esc(COURSE_SUBTITLE))
        .replace("__NAV__", render_nav())
        .replace("__INTRO__", render_intro())
        .replace("__PATH__", render_path())
        .replace("__SECTIONS__", render_sections())
    )
    (ROOT / "course.html").write_text(page, encoding="utf-8")
    print(f"wrote course.html ({len(page) // 1024} KB, {len(SECTIONS)} sections)")


if __name__ == "__main__":
    main()
