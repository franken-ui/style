## Grid Template Rows

### Utilities (value-driven)

| Selector       | Style                                                          | Variables Required |
| -------------- | -------------------------------------------------------------- | ------------------ |
| `.grid-rows`   | `grid-template-rows: repeat(var(--grid-rows), minmax(0, 1fr))` | `--grid-rows`      |
| `.[grid-rows]` | `grid-template-rows: var(--grid-rows)`                         | `--grid-rows`      |

### Utilities (absolute values)

| Selector             | Style                         |
| -------------------- | ----------------------------- |
| `.grid-rows-none`    | `grid-template-rows: none`    |
| `.grid-rows-subgrid` | `grid-template-rows: subgrid` |
