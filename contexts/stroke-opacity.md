# Stroke Opacity Documentation

## Value-driven Utilities

| Selector         | Style                                                                                       | Variables Required                 |
| ---------------- | ------------------------------------------------------------------------------------------- | ---------------------------------- |
| `.stroke/o`      | `stroke: color-mix( in oklab, var(--stroke) var(--stroke-o, 100%), transparent )`           | `--stroke`, `--stroke-o`           |
| `.dark:stroke/o` | `stroke: color-mix( in oklab, var(--dark-stroke) var(--dark-stroke-o, 100%), transparent )` | `--dark-stroke`, `--dark-stroke-o` |
