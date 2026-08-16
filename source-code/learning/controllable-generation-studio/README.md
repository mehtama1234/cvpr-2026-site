# Controllable generation studio

Measured CVPR production-system package.

Question: Can generation change the requested thing while preserving identity, layout, and user intent?

Each stage has a deterministic result in `_results/`, reusable logic in
`src/core.js`, and a Node test in `tests/core.test.js`.
