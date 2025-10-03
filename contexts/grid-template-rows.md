# Grid Template Rows Documentation

## Value-driven Utilities

| Selector       | Style                                                          | Variables Required |
| -------------- | -------------------------------------------------------------- | ------------------ |
| `.grid-rows`   | `grid-template-rows: repeat(var(--grid-rows), minmax(0, 1fr))` | `--grid-rows`      |
| `.[grid-rows]` | `grid-template-rows: var(--grid-rows)`                         | `--grid-rows`      |

## Utilities

| Selector             | Style                         |
| -------------------- | ----------------------------- |
| `.grid-rows-none`    | `grid-template-rows: none`    |
| `.grid-rows-subgrid` | `grid-template-rows: subgrid` |
