# Via Opacity Documentation

## Value-driven Utilities

| Selector      | Style                                                                                                                                                                                                                                                                                              | Variables Required           |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `.via/o`      | `--tw-gradient-via: color-mix( in oklab, var(--via) var(--via-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`           | `--via`, `--via-o`           |
| `.dark:via/o` | `--tw-gradient-via: color-mix( in oklab, var(--dark-via) var(--dark-via-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )` | `--dark-via`, `--dark-via-o` |
