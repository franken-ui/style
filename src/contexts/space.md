## Space

### Utilities (value-driven)

| Selector                         | Style                                                                                                                                                                                      | Variables Required |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `.space-x > :not(:last-child)`   | `margin-inline-start: calc( var(--spacing) * var(--space-x) * var(--tw-space-x-reverse) )`, `margin-inline-end: calc( var(--spacing) * var(--space-x) * (1 - var(--tw-space-x-reverse)) )` | `--space-x`        |
| `.[space-x] > :not(:last-child)` | `margin-inline-start: calc(var(--space-x) * var(--tw-space-x-reverse))`, `margin-inline-end: calc(var(--space-x) * (1 - var(--tw-space-x-reverse)))`                                       | `--space-x`        |
| `.space-y > :not(:last-child)`   | `margin-block-start: calc( var(--spacing) * var(--space-y) * var(--tw-space-y-reverse) )`, `margin-block-end: calc( var(--spacing) * var(--space-y) * (1 - var(--tw-space-y-reverse)) )`   | `--space-y`        |
| `.[space-y] > :not(:last-child)` | `margin-block-start: calc(var(--space-y) * var(--tw-space-y-reverse))`, `margin-block-end: calc(var(--space-y) * (1 - var(--tw-space-y-reverse)))`                                         | `--space-y`        |

### Utilities (absolute values)

| Selector                                         | Style                     |
| ------------------------------------------------ | ------------------------- |
| `.space-x-reverse :where(& > :not(:last-child))` | `--tw-space-x-reverse: 1` |
| `.space-y-reverse :where(& > :not(:last-child))` | `--tw-space-y-reverse: 1` |
