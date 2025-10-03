# To Opacity Documentation

## Value-driven Utilities

| Selector     | Style                                                                                                                                                                                                                                                                                        | Variables Required         |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `.to/o`      | `--tw-gradient-to: color-mix( in oklab, var(--to) var(--to-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-to-stops, var(--tw-gradient-position), var(--tw-gradient-to) var(--tw-gradient-to-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`           | `--to`, `--to-o`           |
| `.dark:to/o` | `--tw-gradient-to: color-mix( in oklab, var(--dark-to) var(--dark-to-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-to-stops, var(--tw-gradient-position), var(--tw-gradient-to) var(--tw-gradient-to-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )` | `--dark-to`, `--dark-to-o` |
