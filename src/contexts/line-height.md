## Line Height

### Utilities (value-driven)

| Selector     | Style                                                | Variables Required |
| ------------ | ---------------------------------------------------- | ------------------ |
| `.leading`   | `line-height: calc(var(--spacing) * var(--leading))` | `--leading`        |
| `.[leading]` | `line-height: var(--leading)`                        | `--leading`        |

### Utilities (absolute values)

| Selector           | Style                |
| ------------------ | -------------------- |
| `.leading-loose`   | `line-height: 2`     |
| `.leading-none`    | `line-height: 1`     |
| `.leading-normal`  | `line-height: 1.5`   |
| `.leading-relaxed` | `line-height: 1.625` |
| `.leading-snug`    | `line-height: 1.375` |
| `.leading-tight`   | `line-height: 1.25`  |
