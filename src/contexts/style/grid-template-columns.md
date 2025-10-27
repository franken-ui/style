## Grid Template Columns

### Utilities (value-driven)

| Selector       | Style                                                             | Variables Required |
| -------------- | ----------------------------------------------------------------- | ------------------ |
| `.grid-cols`   | `grid-template-columns: repeat(var(--grid-cols), minmax(0, 1fr))` | `--grid-cols`      |
| `.[grid-cols]` | `grid-template-columns: var(--grid-cols)`                         | `--grid-cols`      |

### Utilities (absolute values)

| Selector             | Style                            |
| -------------------- | -------------------------------- |
| `.grid-cols-none`    | `grid-template-columns: none`    |
| `.grid-cols-subgrid` | `grid-template-columns: subgrid` |
