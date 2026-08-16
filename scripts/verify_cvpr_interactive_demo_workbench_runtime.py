"""Runtime-smoke verify the generated CVPR interactive demo workbench page."""
import html
import json
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGE = ROOT / "cvpr-interactive-demo-workbench.html"
REGISTRY = ROOT / "analysis/cvpr_interactive_demo_workbench/registry.json"


class WorkbenchParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cards = []
        self.buttons = []
        self.panel_outputs = 0
        self.artifact_lists = 0
        self.replay_targets = 0
        self.capture_data = False
        self.data_chunks = []
        self.scripts = []
        self.capture_script = False
        self.script_chunks = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "article" and "data-demo-card" in attrs:
            self.cards.append(attrs["data-demo-card"])
        if tag == "button" and "data-demo" in attrs and "data-panel" in attrs:
            self.buttons.append((attrs["data-demo"], attrs["data-panel"]))
        if "data-panel-output" in attrs:
            self.panel_outputs += 1
        if "data-artifact-list" in attrs:
            self.artifact_lists += 1
        if "data-replay" in attrs:
            self.replay_targets += 1
        if tag == "script" and attrs.get("id") == "workbench-data":
            self.capture_data = True
        elif tag == "script":
            self.capture_script = True
            self.script_chunks = []

    def handle_endtag(self, tag):
        if tag == "script" and self.capture_data:
            self.capture_data = False
        elif tag == "script" and self.capture_script:
            self.capture_script = False
            self.scripts.append("".join(self.script_chunks))

    def handle_data(self, data):
        if self.capture_data:
            self.data_chunks.append(data)
        elif self.capture_script:
            self.script_chunks.append(data)


def main():
    page = PAGE.read_text(encoding="utf-8")
    registry = json.loads(REGISTRY.read_text(encoding="utf-8"))
    parser = WorkbenchParser()
    parser.feed(page)
    rows = json.loads(html.unescape("".join(parser.data_chunks)))
    registry_rows = registry["workbenchRows"]
    assert len(rows) == 8
    assert rows == registry_rows
    assert len(parser.cards) == 8
    assert len(set(parser.cards)) == 8
    assert set(parser.cards) == {row["demoId"] for row in rows}
    assert len(parser.buttons) == 40
    assert parser.panel_outputs == 8
    assert parser.artifact_lists == 8
    assert parser.replay_targets == 8
    panels_by_demo = {}
    for demo_id, panel in parser.buttons:
        panels_by_demo.setdefault(demo_id, set()).add(panel)
    for row in rows:
        expected_panels = set(row["runtimeState"]["availablePanels"])
        assert panels_by_demo[row["demoId"]] == expected_panels
        assert row["runtimeState"]["activePanel"] == "output"
        assert row["runtimeState"]["panelTarget"] == "workbench-panel"
        assert row["runtimeState"]["artifactTarget"] == "workbench-artifacts"
        assert row["artifactDiff"]["localArtifacts"] == 3
        assert row["releaseAction"] == "promote-interactive-demo"
        assert all((ROOT / path).exists() for path in row["artifactDiff"]["paths"])
    runtime_script = "\n".join(parser.scripts)
    for token in (
        "const workbenchRows",
        "function renderPanel",
        "addEventListener",
        "button.dataset.panel",
        "card.dataset.activePanel",
        "data-panel-output",
    ):
        assert token in runtime_script
    print(f"runtime-smoke verified CVPR interactive demo workbench: {len(rows)} demos, {len(parser.buttons)} buttons")


if __name__ == "__main__":
    main()
