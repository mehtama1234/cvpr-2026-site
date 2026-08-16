# CVPR Paper-To-System Gate

This package turns the static CVPR 2026 site into a measured product-readiness
gate. It audits the generated site pages, scores several paper-to-product
candidates, and publishes a release board with explicit deployment decisions.

Run:

```bash
python3 scripts/cvpr_paper_system_gate_experiments.py
python3 scripts/build_cvpr_paper_system_gate.py
node source-code/learning/cvpr-paper-to-system-gate/tests/core.test.js
```
