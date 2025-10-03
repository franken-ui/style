# Gap Documentation

## Value-driven Utilities

| Selector   | Style                                             | Variables Required |
| ---------- | ------------------------------------------------- | ------------------ |
| `.gap`     | `gap: calc(var(--spacing) * var(--gap))`          | `--gap`            |
| `.gap-x`   | `column-gap: calc(var(--spacing) * var(--gap-x))` | `--gap-x`          |
| `.gap-y`   | `row-gap: calc(var(--spacing) * var(--gap-y))`    | `--gap-y`          |
| `.[gap]`   | `gap: var(--gap)`                                 | `--gap`            |
| `.[gap-x]` | `column-gap: var(--gap-x)`                        | `--gap-x`          |
| `.[gap-y]` | `row-gap: var(--gap-y)`                           | `--gap-y`          |
