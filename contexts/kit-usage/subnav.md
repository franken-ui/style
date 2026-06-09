# Subnav

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/dropdown.md

## Usage

Use the `.uk-subnav` class on a `<ul>`. Apply `.uk-active` to active `<li>` elements. 
For unlinked items, use a `<span>` instead of `<a>`. For disabled links, use `.uk-disabled` on the `<li>` and omit the `href`.

```html
<ul class="uk-subnav">
  <li class="uk-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li><span>Text item</span></li>
  <li class="uk-disabled"><a>Disabled</a></li>
</ul>

```

## Style modifiers

Add `.uk-subnav-primary` for a pill-style look.

```html
<ul class="uk-subnav uk-subnav-primary">
  <li class="uk-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
</ul>

```

### Customization via CSS Variables

Customize Subnav appearance using inline CSS variables.

```html
<ul class="uk-subnav uk-subnav-primary" style="
  --uk-subnav-item-active-background: var(--color-teal-500);
  --uk-subnav-item-active-color: white;
  --uk-subnav-item-active-hover-background: var(--color-teal-600);
  --uk-subnav-item-active-hover-color: var(--color-teal-50);
  --uk-subnav-item-height: 2.5rem;
  --uk-subnav-item-padding: 0 1.5rem;
">
  <li class="uk-active"><a href="#">Custom</a></li>
  <li><a href="#">Teal</a></li>
</ul>

```

## Subnav and Dropdown

You can trigger a dropdown from a subnav item.

```html
<ul class="uk-subnav uk-subnav-primary">
  <li class="uk-active"><a href="#">Active</a></li>
  <li>
    <a href>
      <span class="mr" style="--mr: 2">More</span>
      <uk-icon icon="chevron-down"></uk-icon>
    </a>
    <div class="uk-drop min-w" style="--min-w: 52" data-uk-dropdown="mode: click">
      <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active"><a href="#">Sub Active</a></li>
        <li><a href="#">Sub Item</a></li>
      </ul>
    </div>
  </li>
</ul>

```
