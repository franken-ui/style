## Border Spacing

### Utilities (value-driven)

| Selector              | Style                                                                                                                                            | Variables Required   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `.border-spacing`     | `border-spacing: calc(var(--spacing) * var(--border-spacing))`                                                                                   | `--border-spacing`   |
| `.[border-spacing]`   | `border-spacing: var(--border-spacing)`                                                                                                          | `--border-spacing`   |
| `.border-spacing-x`   | `--tw-border-spacing-x: calc(var(--spacing) * var(--border-spacing-x))`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)` | `--border-spacing-x` |
| `.[border-spacing-x]` | `--tw-border-spacing-x: var(--border-spacing-x)`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)`                        | `--border-spacing-x` |
| `.border-spacing-y`   | `--tw-border-spacing-y: calc(var(--spacing) * var(--border-spacing-y))`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)` | `--border-spacing-y` |
| `.[border-spacing-y]` | `--tw-border-spacing-y: var(--border-spacing-y)`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)`                        | `--border-spacing-y` |
