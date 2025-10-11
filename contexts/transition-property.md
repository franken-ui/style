# Transition Property Documentation

## Value-driven Utilities

| Selector      | Style                                                                                                                                                                                                            | Variables Required                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `.transition` | `transition-property: var(--transition, var(--default-transition-property))`, `transition-timing-function: var(--default-transition-timing-function)`, `transition-duration: var(--default-transition-duration)` | `--default-transition-property`, `--transition` |

## Utilities

| Selector                | Style                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.transition-all`       | `--default-transition-property: all`                                                                                                                                                |
| `.transition-colors`    | `--default-transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to` |
| `.transition-opacity`   | `--default-transition-property: opacity`                                                                                                                                            |
| `.transition-shadow`    | `--default-transition-property: box-shadow`                                                                                                                                         |
| `.transition-transform` | `--default-transition-property: transform, translate, scale, rotate`                                                                                                                |
| `.transition-none`      | `transition-property: none`                                                                                                                                                         |
