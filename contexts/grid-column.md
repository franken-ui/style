# Grid Column Documentation

## Value-driven Utilities

| Selector     | Style                                                      | Variables Required |
| ------------ | ---------------------------------------------------------- | ------------------ |
| `.col`       | `grid-column: var(--col)`                                  | `--col`            |
| `.col-span`  | `grid-column: span var(--col-span) / span var(--col-span)` | `--col-span`       |
| `.col-start` | `grid-column-start: var(--col-start)`                      | `--col-start`      |
| `.col-end`   | `grid-column-end: var(--col-end)`                          | `--col-end`        |

## Utilities

| Selector          | Style                     |
| ----------------- | ------------------------- |
| `.col-auto`       | `grid-column: auto`       |
| `.col-span-full`  | `grid-column: 1 / -1`     |
| `.col-start-auto` | `grid-column-start: auto` |
| `.col-end-auto`   | `grid-column-end: auto`   |
