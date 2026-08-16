# Efficient vision serving

Measured CVPR production-system package.

Question: Can large vision models be served under latency, memory, and cost budgets without losing the evidence path?

Each stage has a deterministic result in `_results/`, reusable logic in
`src/core.js`, and a Node test in `tests/core.test.js`.
