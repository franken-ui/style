# Breadcrumb

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

## Usage

The Breadcrumb component consists of links, which are aligned side by side and separated by a divider. Add the `.uk-breadcrumb` class to a `<ul>` element to define the component. Use `<a>` elements as breadcrumb items within the list. An active state is automatically applied to the last `<li>` element.

To add list items without a link, use a `<span>` element instead of an `<a>`. Alternatively, disable an `<a>` element by adding the `.uk-disabled` class to the `<li>` element and remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation.

```html
<ul class="uk-breadcrumb">
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><span></span></li>
</ul>
```

```html
<nav aria-label="Breadcrumb">
  <ul class="uk-breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Linked Category</a></li>
    <li class="uk-disabled"><a>Disabled Category</a></li>
    <li>
      <span aria-current="page">Franken UI</span>
    </li>
  </ul>
</nav>
```

## Accessibility

In order for the Breadcrumb component to adhere to the [Breadcrumb design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/), set the appropriate WAI-ARIA roles, states and properties.

- Contain the breadcrumb list within a `nav` element and set the `aria-label` property to describe the type of the provided navigation.
- If the last item is the current page and a link, set the `aria-current="page"` property.

```html
<nav aria-label="Breadcrumb">
  <ul class="uk-breadcrumb">
    ...
  </ul>
</nav>
```