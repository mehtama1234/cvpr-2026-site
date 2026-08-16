# Restoration reliability stack

Measured CVPR production-system package.

Question: Can a restoration system clean degraded images without inventing evidence that downstream users will trust incorrectly?

Each stage has a deterministic result in `_results/`, reusable logic in
`src/core.js`, and a Node test in `tests/core.test.js`.
