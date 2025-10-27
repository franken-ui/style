## Divide

### Utilities (value-driven)

| Selector                                    | Style                                                                                                                                                                                                                                                                                 | Variables Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.divide-x :where(& > :not(:last-child))`   | `--tw-divide-x-reverse: 0`, `border-inline-style: var(--tw-border-style)`, `border-inline-start-width: calc( var(--spacing) * var(--border-w) * var(--tw-divide-x-reverse) )`, `border-inline-end-width: calc( var(--spacing) * var(--border-w) * (1 - var(--tw-divide-x-reverse)) )` | `--border-w`       |
| `.[divide-x] :where(& > :not(:last-child))` | `--tw-divide-x-reverse: 0`, `border-inline-style: var(--tw-border-style)`, `border-inline-start-width: calc( var(--border-w) * var(--tw-divide-x-reverse) )`, `border-inline-end-width: calc( var(--border-w) * (1 - var(--tw-divide-x-reverse)) )`                                   | `--border-w`       |
| `.divide-y :where(& > :not(:last-child))`   | `--tw-divide-y-reverse: 0`, `border-block-style: var(--tw-border-style)`, `border-block-start-width: calc( var(--spacing) * var(--border-w) * var(--tw-divide-y-reverse) )`, `border-block-end-width: calc( var(--spacing) * var(--border-w) * (1 - var(--tw-divide-y-reverse)) )`    | `--border-w`       |
| `.[divide-y] :where(& > :not(:last-child))` | `--tw-divide-y-reverse: 0`, `border-block-style: var(--tw-border-style)`, `border-block-start-width: calc( var(--border-w) * var(--tw-divide-y-reverse) )`, `border-block-end-width: calc( var(--border-w) * (1 - var(--tw-divide-y-reverse)) )`                                      | `--border-w`       |

### Utilities (absolute values)

| Selector                                          | Style                      |
| ------------------------------------------------- | -------------------------- |
| `.divide-x-reverse :where(& > :not(:last-child))` | `--tw-divide-x-reverse: 1` |
| `.divide-y-reverse :where(& > :not(:last-child))` | `--tw-divide-y-reverse: 1` |
