# Dotnav

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

## Usage

To create a navigation with dots, use the following classes. This component is built with Flexbox. So to align a dotnav, you can use utility classes from Tailwind CSS.

| Class         | Description                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `.uk-dotnav`  | Add this class to a `<ul>` element to define the Dotnav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state.                                                             |

```html
<ul class="uk-dotnav">
  <li class="uk-active"><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

```html
<ul class="uk-dotnav">
  <li class="uk-active"><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
  <li><a>Item 4</a></li>
  <li><a>Item 5</a></li>
</ul>
```

## Vertical alignment

The dotnav can also be displayed vertically. Just add the `.uk-dotnav-vertical` modifier.

```html
<ul class="uk-dotnav uk-dotnav-vertical">
  ...
</ul>
```

```html
<ul class="uk-dotnav uk-dotnav-vertical">
  <li class="uk-active"><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
  <li><a>Item 4</a></li>
  <li><a>Item 5</a></li>
</ul>
```