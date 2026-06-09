# Pagination

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `justify-center`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/javascript.md
- https://franken.style/contexts/kit-usage/accessibility.md

## Usage

Add `.uk-pagination` to a `<ul>` element. Use `<a>` elements as items. Add `data-uk-pagination-previous` or `data-uk-pagination-next` to a `<span>` for arrow icons.

| Class | Description |
| --- | --- |
| `.uk-pagination` | Applied to `<ul>` to define the component. |
| `.uk-active` | Marks the current page; use `<span>` instead of `<a>`. |
| `.uk-disabled` | Marks a disabled item (e.g. `…`); use `<span>` instead of `<a>`. |

```html
<nav aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-default">
    <li><a href="#"><span data-uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li> <!-- active page -->
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li><a href="#"><span data-uk-pagination-next></span></a></li>
  </ul>
</nav>
```

For prev/next-only navigation, add label text and use `mr-2`/`ml-2` to space the icons:

```html
<ul class="uk-pagination uk-pagination-default">
  <li><a href="#"><span class="mr-2" data-uk-pagination-previous></span>Previous</a></li>
  <li><a href="#">Next<span class="ml-2" data-uk-pagination-next></span></a></li>
</ul>
```

## Style Modifiers

Add one modifier alongside `.uk-pagination`. Options: `.uk-pagination-default`, `.uk-pagination-ghost`, `.uk-pagination-primary`, `.uk-pagination-secondary`, `.uk-pagination-success`, `.uk-pagination-warning`, `.uk-pagination-info`, `.uk-pagination-danger`

```html
<!-- Replace uk-pagination-default with any modifier listed above -->
<nav aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-default">
    <li><a href="#"><span data-uk-pagination-previous></span></a></li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li><a href="#"><span data-uk-pagination-next></span></a></li>
  </ul>
</nav>
```

## Size Modifiers

| Class | Description |
| --- | --- |
| `.uk-pagination-xsmall` | Extra small |
| `.uk-pagination-small` | Small |
| `.uk-pagination-medium` | Medium |
| `.uk-pagination-large` | Large |

Combine with a style modifier: `class="uk-pagination uk-pagination-small uk-pagination-default"`.

## Alignment

Uses flexbox — apply Frankenstyle flex utilities directly to the `<ul>`:

```html
<ul class="uk-pagination uk-pagination-default justify-center">...</ul>
<ul class="uk-pagination uk-pagination-default justify-around">...</ul>
```

## Accessibility

Prev/next items automatically receive `role="button"` and an `aria-label`. The default label string is `"Next/Previous page"` — override via the `label` i18n key.