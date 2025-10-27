## Transform

### Utilities (value-driven)

| Selector     | Style                         | Variables Required |
| ------------ | ----------------------------- | ------------------ |
| `.transform` | `transform: var(--transform)` | `--transform`      |

### Utilities (absolute values)

| Selector          | Style                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `.transform-none` | `transform: none`                                                                                                          |
| `.transform-gpu`  | `transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)` |
| `.transform-cpu`  | `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)`               |
