"""CVPR paper-to-system gate experiments.

This is a deterministic local audit over the checked-in CVPR site. It treats
the generated HTML as the source of truth, extracts theme and cluster evidence,
then scores a few paper-to-product candidates against deployment gates.
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "source-code/learning/cvpr-paper-to-system-gate/_results"
OUT.mkdir(parents=True, exist_ok=True)
SYSTEM_REGISTRY = ROOT / "analysis/cvpr_systems/registry.json"

THEME_WEIGHTS = {
    "perceive": 0.16,
    "threed": 0.15,
    "video": 0.12,
    "generation": 0.12,
    "vlm": 0.15,
    "embodied": 0.10,
    "learning": 0.12,
    "emerging": 0.08,
}

THEME_SLUGS = {
    "emerging-deepdive.html": "emerging",
    "threed-deepdive.html": "threed",
    "video-deepdive.html": "video",
    "generation-deepdive.html": "generation",
    "vlm-deepdive.html": "vlm",
    "perceive-deepdive.html": "perceive",
    "embodied-deepdive.html": "embodied",
    "learning-deepdive.html": "learning",
}

CLUSTER_SLUGS = {
    "cluster-vlm-reasoning.html": "vlm_reasoning",
    "cluster-efficient.html": "efficient",
    "cluster-recon-nvs.html": "recon_nvs",
    "cluster-open-vocab.html": "open_vocab",
    "cluster-restoration.html": "restoration",
    "cluster-gaussian-splatting.html": "gaussian_splatting",
    "cluster-medical.html": "medical",
    "cluster-video-world.html": "video_world",
    "cluster-controllable-gen.html": "controllable_gen",
    "cluster-driving-vla.html": "driving_vla",
    "cluster-adversarial.html": "adversarial",
}


def write(stage: str, data: dict) -> None:
    (OUT / f"{stage}.json").write_text(
        json.dumps({"stage": stage, **data}, indent=2) + "\n",
        encoding="utf-8",
    )


def read(path: str) -> str:
    return (ROOT / path).read_text(encoding="utf-8")


def extract_counts() -> tuple[dict, dict]:
    index = read("index.html")
    theme_counts = {}
    for href, slug in THEME_SLUGS.items():
        pattern = rf'href="{re.escape(href)}"[^>]*>.*?\((\d+)\)'
        match = re.search(pattern, index)
        theme_counts[slug] = int(match.group(1)) if match else 0

    cluster_counts = {}
    for href, slug in CLUSTER_SLUGS.items():
        pattern = rf'href="{re.escape(href)}"[^>]*>.*?\((\d+)\)'
        match = re.search(pattern, index)
        cluster_counts[slug] = int(match.group(1)) if match else 0

    return theme_counts, cluster_counts


def coverage_audit() -> tuple[dict, dict]:
    theme_counts, cluster_counts = extract_counts()
    registry = json.loads(SYSTEM_REGISTRY.read_text(encoding="utf-8")) if SYSTEM_REGISTRY.exists() else None
    required_pages = [
        "index.html",
        "hub.html",
        "math.html",
        "idea-graph.html",
        "engines.html",
        "open-problems.html",
        "through-line.html",
        "deep-reads.html",
        "cross-conference.html",
        "search.html",
        "report.html",
        "first-principles-audit.html",
    ]
    page_presence = {page: (ROOT / page).exists() for page in required_pages}
    write(
        "coverage-audit",
        {
            "themeCounts": theme_counts,
            "clusterCounts": cluster_counts,
            "themeCount": len(theme_counts),
            "clusterCount": len(cluster_counts),
            "totalThemePapers": sum(theme_counts.values()),
            "totalClusterAssignments": sum(cluster_counts.values()),
            "requiredPageCoverage": sum(1 for present in page_presence.values() if present) / len(page_presence),
            "missingRequiredPages": [page for page, present in page_presence.items() if not present],
            "systemsRegistryPresent": registry is not None,
            "systemsRegistrySummary": registry["summary"] if registry else None,
            "reusableRule": "Before turning a CVPR idea into a system, prove the site has theme evidence, cluster evidence, math context, searchability, and an audit trail.",
        },
    )
    return theme_counts, cluster_counts


def normalize(value: int, denominator: int) -> float:
    return min(1.0, value / denominator)


def system_registry_candidates() -> list[dict]:
    if not SYSTEM_REGISTRY.exists():
        return []
    registry = json.loads(SYSTEM_REGISTRY.read_text(encoding="utf-8"))
    by_system = {}
    for record in registry["records"]:
        by_system.setdefault(record["system"], []).append(record)
    candidates = []
    for system, records in by_system.items():
        results = [json.loads(Path(record["result"]).read_text(encoding="utf-8")) for record in records]
        avg_score = sum(row["gateScore"] for row in results) / len(results)
        max_risk = max(row["residualRiskPct"] for row in results)
        avg_evidence = sum(row["evidenceDepthScore"] for row in results) / len(results)
        domain_depth = normalize(results[0]["clusterPaperCount"], 500)
        candidate = {
            "id": system,
            "title": results[0]["systemTitle"],
            "domain": results[0]["cluster"],
            "evidence": {
                "theme": results[0]["themePaperCount"],
                "cluster": results[0]["clusterPaperCount"],
                "stageCount": len(results),
            },
            "risks": [
                "highest residual risk",
                "domain validation gap" if avg_score < 72 else "release constraints",
                "evidence depth" if avg_evidence < 75 else "regression coverage",
            ],
            "scores": {
                "visualGrounding": normalize(avg_score, 100),
                "languageOrControl": normalize(avg_evidence, 100),
                "timeAndWorld": normalize(sum(1 for row in results if row["decision"] == "pass"), len(results)),
                "deploymentFoundation": 1.0 - normalize(max_risk, 100),
                "domainDepth": domain_depth,
                "actionRisk": 1.0 - min(0.35, max_risk / 100),
            },
        }
        weighted = sum(candidate["scores"].values()) / len(candidate["scores"])
        candidate["readinessScore"] = round(100 * weighted, 1)
        candidate["decision"] = (
            "ready with constraints"
            if candidate["readinessScore"] >= 72
            else "needs more evidence"
            if candidate["readinessScore"] >= 58
            else "blocked"
        )
        candidates.append(candidate)
    return sorted(candidates, key=lambda row: row["readinessScore"], reverse=True)


def seed_candidates(theme_counts: dict, cluster_counts: dict) -> list[dict]:
    candidates = [
        {
            "id": "open-vocab-driving-vla",
            "title": "Open-vocabulary driving VLA",
            "domain": "embodied autonomy",
            "evidence": {
                "perceive": theme_counts["perceive"],
                "threed": theme_counts["threed"],
                "video": theme_counts["video"],
                "vlm": theme_counts["vlm"],
                "embodied": theme_counts["embodied"],
                "learning": theme_counts["learning"],
                "open_vocab": cluster_counts["open_vocab"],
                "driving_vla": cluster_counts["driving_vla"],
                "adversarial": cluster_counts["adversarial"],
            },
            "risks": ["physical action risk", "hallucinated scene reasoning", "rare driving events"],
        },
        {
            "id": "medical-vision-foundation-model",
            "title": "Medical vision foundation model",
            "domain": "medical imaging",
            "evidence": {
                "perceive": theme_counts["perceive"],
                "threed": theme_counts["threed"],
                "vlm": theme_counts["vlm"],
                "learning": theme_counts["learning"],
                "emerging": theme_counts["emerging"],
                "medical": cluster_counts["medical"],
                "adversarial": cluster_counts["adversarial"],
                "efficient": cluster_counts["efficient"],
            },
            "risks": ["clinical validation", "domain shift", "uncertainty calibration"],
        },
        {
            "id": "fast-video-world-model",
            "title": "Fast video world model",
            "domain": "video generation and prediction",
            "evidence": {
                "video": theme_counts["video"],
                "generation": theme_counts["generation"],
                "threed": theme_counts["threed"],
                "learning": theme_counts["learning"],
                "video_world": cluster_counts["video_world"],
                "controllable_gen": cluster_counts["controllable_gen"],
                "efficient": cluster_counts["efficient"],
            },
            "risks": ["temporal drift", "physics inconsistency", "compute budget"],
        },
    ]

    for candidate in candidates:
        e = candidate["evidence"]
        candidate["scores"] = {
            "visualGrounding": normalize(e.get("perceive", 0) + e.get("threed", 0), 1200),
            "languageOrControl": normalize(e.get("vlm", 0) + e.get("controllable_gen", 0), 800),
            "timeAndWorld": normalize(e.get("video", 0) + e.get("video_world", 0), 900),
            "deploymentFoundation": normalize(e.get("learning", 0) + e.get("efficient", 0), 650),
            "domainDepth": normalize(
                e.get("medical", 0) + e.get("driving_vla", 0) + e.get("open_vocab", 0) + e.get("adversarial", 0),
                850,
            ),
            "actionRisk": 1.0 - min(0.35, 0.08 * len(candidate["risks"])),
        }
        weighted = sum(candidate["scores"][name] for name in candidate["scores"]) / len(candidate["scores"])
        candidate["readinessScore"] = round(100 * weighted, 1)
        candidate["decision"] = (
            "ready with constraints"
            if candidate["readinessScore"] >= 72
            else "needs more evidence"
            if candidate["readinessScore"] >= 58
            else "blocked"
        )
    return candidates


def paper_gate(theme_counts: dict, cluster_counts: dict) -> list[dict]:
    candidates = system_registry_candidates() or seed_candidates(theme_counts, cluster_counts)
    write(
        "paper-gate",
        {
            "candidates": candidates,
            "bestCandidate": max(candidates, key=lambda row: row["readinessScore"])["id"],
            "candidateCount": len(candidates),
            "source": "systems-registry" if SYSTEM_REGISTRY.exists() else "seed-candidates",
            "gateNames": [
                "visualGrounding",
                "languageOrControl",
                "timeAndWorld",
                "deploymentFoundation",
                "domainDepth",
                "actionRisk",
            ],
            "reusableRule": "A CVPR paper becomes a product candidate only when theme evidence, domain depth, efficiency, robustness, and misuse or action risk clear separate gates.",
        },
    )
    return candidates


def release_board(candidates: list[dict]) -> None:
    ordered = sorted(candidates, key=lambda row: row["readinessScore"], reverse=True)
    write(
        "release-board",
        {
            "rankedCandidates": [
                {
                    "rank": idx,
                    "id": row["id"],
                    "title": row["title"],
                    "domain": row["domain"],
                    "score": row["readinessScore"],
                    "decision": row["decision"],
                    "topRisk": row["risks"][0],
                }
                for idx, row in enumerate(ordered, 1)
            ],
            "readyOrConstrained": sum(1 for row in ordered if row["decision"] == "ready with constraints"),
            "needsMoreEvidence": sum(1 for row in ordered if row["decision"] == "needs more evidence"),
            "blocked": sum(1 for row in ordered if row["decision"] == "blocked"),
            "reusableRule": "Ship the release board, not just the ranking: every candidate needs a score, a deployment decision, and the risk that would block real use.",
        },
    )


themes, clusters = coverage_audit()
rows = paper_gate(themes, clusters)
release_board(rows)
print("wrote cvpr-paper-to-system-gate experiment results")
