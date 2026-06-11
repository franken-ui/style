# List

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/close.md

## Usage

To apply this component, add the `.uk-list` class to an unordered or ordered list. The list will now display without any spacing or list-style.

```html
<ul class="uk-list">
  <li></li>
  <li></li>
  <li></li>
</ul>
```

```html
<ul class="uk-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Style type modifiers

Add one of the following classes to set the marker of a list item.

| Class              | Description                                      |
| ------------------ | ------------------------------------------------ |
| `.uk-list-disc`    | Use a filled circle as a marker.                 |
| `.uk-list-circle`  | Use a hollow circle as marker.                   |
| `.uk-list-square`  | Use a filled square as marker                    |
| `.uk-list-decimal` | Use decimal numbers as marker. Beginning with 1. |
| `.uk-list-hyphen`  | Use a hyphen as marker                           |

```html
<ul class="uk-list uk-list-disc">
  …
</ul>
```

```html
<div
  class="display-grid grid-cols gap sm:grid-cols md:grid-cols"
  style="--grid-cols: 2; --gap: 4; --sm-grid-cols: 3; --md-grid-cols: 5"
>
  <div>
    <h4 class="uk-h4">Disc</h4>
    <ul class="uk-list uk-list-disc mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="uk-h4">Circle</h4>
    <ul class="uk-list uk-list-circle mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="uk-h4">Square</h4>
    <ul class="uk-list uk-list-square mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="uk-h4">Decimal</h4>
    <ul class="uk-list uk-list-decimal mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>

  <div>
    <h4 class="uk-h4">Hyphen</h4>
    <ul class="uk-list uk-list-hyphen mt" style="--mt: 4">
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  </div>
</div>
```

## Divider modifier

Add the `.uk-list-divider` class to separate list items with lines.

```html
<ul class="uk-list uk-list-divider">
  …
</ul>
```

```html
<ul class="uk-list uk-list-divider">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Striped modifier

Add zebra-striping to a list using the `.uk-list-striped` class.

```html
<ul class="uk-list uk-list-striped">
  …
</ul>
```

```html
<ul class="uk-list uk-list-striped">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the List component.

- If a `<div>` element is used, set the `list` role to the list, and the `listitem` role to the list items.

```html
<div class="uk-list" role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```