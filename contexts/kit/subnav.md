# Subnav

## Usage

To apply this component, use the following classes. To align a subnav, for example to horizontally center it, you can use utility classes from Tailwind CSS.

| Class         | Description                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| `.uk-subnav`  | Add this class to a `<ul>` element to define the Subnav component. Use `<a>` elements as nav items within the list. |
| `.uk-active ` | Add this class to a list item to apply an active state.                                                             |

To add list items without a link, use a `<span>` element instead of an `<a>`. Alternatively, disable an `<a>` element by adding the `.uk-disabled` class to the `<li>` element and remove the `href` attribute from the anchor to make it inaccessible through keyboard navigation.

```html
<ul class="uk-subnav">
  <li class="uk-active"><a href=""></a></li>
  <li><a href=""></a></li>
  <li><span></span></li>
</ul>
```

```html
<ul class="uk-subnav">
  <li><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.uk-subnav-primary`

```html
<ul class="uk-subnav uk-subnav-primary">
  <li class="uk-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><span class="opacity-50">Disabled</span></li>
</ul>
```

### Customization

You can use CSS variables to customize this component in any way you prefer.

```html
<ul
  class="uk-subnav"
  style="
    --uk-subnav-item-active-background: var(--color-teal-500);
    --uk-subnav-item-active-background-o: 100%;
    --uk-subnav-item-active-color: white;
    --uk-subnav-item-active-color-o: 100%;

    --uk-subnav-item-active-hover-background: var(--color-teal-600);
    --uk-subnav-item-active-hover-color: var(--color-teal-50);
    --uk-subnav-item-active-hover-background-o: 100%;
  "
>
  <li class="uk-active"><a href="#">Custom</a></li>
  <li><a href="#">Teal</a></li>
  <li><a href="#">Colors</a></li>
</ul>

<ul
  class="uk-subnav uk-subnav-primary mt"
  style="
    --uk-subnav-item-height: 2.5rem;
    --uk-subnav-item-padding: 0 1.5rem;
    --mt: 4;
  "
>
  <li class="uk-active"><a href="#">Larger</a></li>
  <li><a href="#">Pills</a></li>
  <li><a href="#">Size</a></li>
</ul>
```

## Subnav and Dropdown

You can also use a dropdown from the [Dropdown component](/docs/latest/kit/dropdown) with a subnav.

```html
<ul class="uk-subnav">
  <li>
    <!-- This is the menu item toggling the dropdown -->
    <a href=""></a>

    <!-- This is the dropdown -->
    <div data-uk-dropdown="mode: click">
      <ul class="uk-dropdown-nav uk-nav">
        ...
      </ul>
    </div>
  </li>
</ul>
```

```html
<ul class="uk-subnav uk-subnav-primary">
  <li class="uk-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li>
    <a href>
      <span class="mr" style="--mr: 2">More</span>
      <uk-icon icon="chevron-down"></uk-icon>
    </a>
    <div
      class="uk-drop min-w"
      style="--min-w: 52"
      data-uk-dropdown="mode: click"
    >
      <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Item</a></li>
      </ul>
    </div>
  </li>
</ul>
```