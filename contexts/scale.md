# Scale Documentation

## Value-driven Utilities

| Selector   | Style                                                                                                                                  | Variables Required |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.scale`   | `--tw-scale-x: var(--scale)`, `--tw-scale-y: var(--scale)`, `--tw-scale-z: var(--scale)`, `scale: var(--tw-scale-x) var(--tw-scale-y)` | `--scale`          |
| `.scale-x` | `--tw-scale-x: var(--scale-x)`, `scale: var(--tw-scale-x) var(--tw-scale-y)`                                                           | `--scale-x`        |
| `.scale-y` | `--tw-scale-y: var(--scale-y)`, `scale: var(--tw-scale-x) var(--tw-scale-y)`                                                           | `--scale-y`        |
| `.scale-z` | `--tw-scale-z: var(--scale-z)`, `scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)`                                         | `--scale-z`        |

## Utilities

| Selector      | Style                                                          |
| ------------- | -------------------------------------------------------------- |
| `.scale-none` | `transform: none`                                              |
| `.scale-3d`   | `scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)` |
