## Size

### Utilities (value-driven)

| Selector  | Style                                                                                     | Variables Required |
| --------- | ----------------------------------------------------------------------------------------- | ------------------ |
| `.size`   | `width: calc(var(--spacing) * var(--size))`, `height: calc(var(--spacing) * var(--size))` | `--size`           |
| `.[size]` | `width: var(--size)`, `height: var(--size)`                                               | `--size`           |

### Utilities (absolute values)

| Selector     | Style                                       |
| ------------ | ------------------------------------------- |
| `.size-auto` | `width: auto`, `height: auto`               |
| `.size-full` | `width: 100%`, `height: 100%`               |
| `.size-dvw`  | `width: 100dvw`, `height: 100dvw`           |
| `.size-dvh`  | `width: 100dvh`, `height: 100dvh`           |
| `.size-lvw`  | `width: 100lvw`, `height: 100lvw`           |
| `.size-lvh`  | `width: 100lvh`, `height: 100lvh`           |
| `.size-svw`  | `width: 100svw`, `height: 100svw`           |
| `.size-svh`  | `width: 100svh`, `height: 100svh`           |
| `.size-min`  | `width: min-content`, `height: min-content` |
| `.size-max`  | `width: max-content`, `height: max-content` |
| `.size-fit`  | `width: fit-content`, `height: fit-content` |
