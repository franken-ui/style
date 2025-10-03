# Grid Template Columns Documentation

## Value-driven Utilities

| Selector       | Style                                                             | Variables Required |
| -------------- | ----------------------------------------------------------------- | ------------------ |
| `.grid-cols`   | `grid-template-columns: repeat(var(--grid-cols), minmax(0, 1fr))` | `--grid-cols`      |
| `.[grid-cols]` | `grid-template-columns: var(--grid-cols)`                         | `--grid-cols`      |

## Utilities

| Selector             | Style                            |
| -------------------- | -------------------------------- |
| `.grid-cols-none`    | `grid-template-columns: none`    |
| `.grid-cols-subgrid` | `grid-template-columns: subgrid` |
