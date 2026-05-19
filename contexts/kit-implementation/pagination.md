# Pagination

## Usage

The Pagination component consists of button-like styled links, that are aligned side by side in a horizontal list.

| Class            | Description                                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `.uk-pagination` | Add this class to a `<ul>` element to define the Pagination component. Use `<a>` elements as pagination items within the list. |
| `.uk-active`     | Add this class to a list item to apply an active state and use a `<span>` instead of an `<a>` element.                         |
| `.uk-disabled`   | Add this class to a list item to apply a disabled state and use a `<span>` instead of an `<a>` element.                        |

To add an icon, just add the `data-uk-pagination-previous` or `data-uk-pagination-next` attribute to a `<span>` element inside a pagination item.

```html
<nav>
  <ul class="uk-pagination uk-pagination-default">
    <li>
      <a href="#">
        <span class="mr-2" data-uk-pagination-previous></span>
        Previous
      </a>
    </li>
    <li>
      <a href="#">Next <span class="ml-2" data-uk-pagination-next></span></a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-default">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.uk-pagination-default`
- `.uk-pagination-ghost`
- `.uk-pagination-primary`
- `.uk-pagination-secondary`
- `.uk-pagination-success`
- `.uk-pagination-warning`
- `.uk-pagination-info`
- `.uk-pagination-danger`

```html
<nav aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-default">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-primary">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-secondary">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-danger">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-info">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-success">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-warning">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav class="mt" style="--mt: 4" aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-ghost">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to make the pagination smaller or larger.

| Class                   | Description               |
| ----------------------- | ------------------------- |
| `.uk-pagination-xsmall` | Applies extra small size. |
| `.uk-pagination-small`  | Applies small size.       |
| `.uk-pagination-medium` | Applies medium size.      |
| `.uk-pagination-large`  | Applies large size.       |

```html
<nav aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-xsmall uk-pagination-default">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination">
  <ul
    class="uk-pagination uk-pagination-small uk-pagination-default mt"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination">
  <ul
    class="uk-pagination uk-pagination-medium uk-pagination-default mt"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Pagination">
  <ul
    class="uk-pagination uk-pagination-large uk-pagination-default mt"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>
```

## Alignment

The Pagination component utilizes flexbox, so navigations can easily be aligned with Flex utility classes from Tailwind CSS.

```html
<ul class="uk-pagination justify-center">
  ...
</ul>
```

```html
<nav aria-label="Pagination">
  <ul class="uk-pagination uk-pagination-default justify-center">
    <li>
      <a href="#">
        <span data-uk-pagination-previous></span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">6</a></li>
    <li class="uk-active"><span aria-current="page">7</span></li>
    <li><a href="#">8</a></li>
    <li class="uk-disabled"><span>...</span></li>
    <li><a href="#">20</a></li>
    <li>
      <a href="#">
        <span data-uk-pagination-next></span>
      </a>
    </li>
  </ul>
</nav>

<nav>
  <ul
    class="uk-pagination uk-pagination-default mt justify-around"
    style="--mt: 4"
  >
    <li>
      <a href="#">
        <span class="mr-2" data-uk-pagination-previous></span>
        Previous
      </a>
    </li>
    <li>
      <a href="#">Next <span class="ml-2" data-uk-pagination-next></span></a>
    </li>
  </ul>
</nav>
```

## Accessibility

The previous/next pagination adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _prev/next pagination items_ have the `button` role and the `aria-label` property.

### Internationalization

The Pagination component uses the following translation strings. Learn more about [translating components](/docs/latest/kit/accessibility#internationalization).

| Key     | Default              | Description             |
| ------- | -------------------- | ----------------------- |
| `label` | `Next/Previous page` | `aria-label` attribute. |