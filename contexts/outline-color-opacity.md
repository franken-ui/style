# Outline Color Opacity Documentation

## Value-driven Utilities

| Selector          | Style                                                                                                | Variables Required                   |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `.outline/o`      | `outline-color: color-mix( in oklab, var(--outline) var(--outline-o, 100%), transparent )`           | `--outline`, `--outline-o`           |
| `.dark:outline/o` | `outline-color: color-mix( in oklab, var(--dark-outline) var(--dark-outline-o, 100%), transparent )` | `--dark-outline`, `--dark-outline-o` |
