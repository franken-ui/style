## Box Shadow

### Utilities (value-driven)

| Selector         | Style                                                                                                                                                                                                                                                                                         | Variables Required |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.shadow`        | `--tw-shadow-color: var(--shadow, rgb(0 0 0 / 0.1))`, `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`      | `--shadow`         |
| `.dark:shadow`   | `--tw-shadow-color: var(--dark-shadow, rgb(0 0 0 / 0.1))`, `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)` | `--dark-shadow`    |
| `.[shadow]`      | `box-shadow: var(--shadow)`                                                                                                                                                                                                                                                                   | `--shadow`         |
| `.dark:[shadow]` | `box-shadow: var(--dark-shadow)`                                                                                                                                                                                                                                                              | `--dark-shadow`    |

### Utilities (absolute values)

| Selector       | Style                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `.shadow-2xs`  | `--tw-shadow: 0 1px var(--tw-shadow-color)`                                                    |
| `.shadow-xs`   | `--tw-shadow: 0 1px 2px 0 var(--tw-shadow-color)`                                              |
| `.shadow-sm`   | `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`       |
| `.shadow-md`   | `--tw-shadow: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)`    |
| `.shadow-lg`   | `--tw-shadow: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)`  |
| `.shadow-xl`   | `--tw-shadow: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)` |
| `.shadow-none` | `box-shadow: 0 0 #0000`                                                                        |
