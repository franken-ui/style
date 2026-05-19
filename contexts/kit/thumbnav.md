# Thumbnav

## Usage

To create a navigation with thumbnails, use the following classes. This component is built with Flexbox. So to align a thumbnav, you can use utility classes from Tailwind CSS.

| Class          | Description                                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `.uk-thumbnav` | Add this class to a `<ul>` element to define the Thumbnav component. Nest your thumbnail images inside `<a>` elements within the list. |
| `.uk-active `  | Add this class to a list item to apply an active state.                                                                                |

```html
<ul class="uk-thumbnav">
  <li class="uk-active">
    <a href=""><img src="" width="" height="" alt="" /></a>
  </li>
  <li>
    <a href=""><img src="" alt="" /></a>
  </li>
</ul>
```

```html
<ul class="uk-thumbnav">
  <li class="uk-active">
    <a href="#">
      <img src="/images/photo.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/dark.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/light.jpg" width="100" height="67" alt="" />
    </a>
  </li>
</ul>
```

## Vertical alignment

The thumbnav can also be displayed vertically. Just add the `.uk-thumbnav-vertical` modifier.

```html
<ul class="uk-thumbnav uk-thumbnav-vertical">
  ...
</ul>
```

```html
<ul class="uk-thumbnav uk-thumbnav-vertical">
  <li class="uk-active">
    <a href="#">
      <img src="/images/photo.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/dark.jpg" width="100" height="67" alt="" />
    </a>
  </li>
  <li>
    <a href="#">
      <img src="/images/light.jpg" width="100" height="67" alt="" />
    </a>
  </li>
</ul>
```

## Position as overlay

To position the thumbnav on top of an element or the [Slideshow component](/docs/latest/kit/slideshow) for example, add one of the `.uk-position-*` classes from the [Position component](/docs/latest/kit/position) to a `div` element wrapping the thumbnav. To create a position context on the container, add the `.uk-position-relative` class.

```html
<div class="uk-position-relative">
  <!-- The element which is wrapped goes here -->

  <div class="uk-position-bottom-center uk-position-small">
    <ul class="uk-thumbnav">
      ...
    </ul>
  </div>
</div>
```

```html
<div class="uk-position-relative" data-uk-slideshow="animation: fade">
  <ul class="uk-slideshow-items">
    <li>
      <img src="/images/photo.jpg" alt="" data-uk-cover />
    </li>
    <li>
      <img src="/images/dark.jpg" alt="" data-uk-cover />
    </li>
    <li>
      <img src="/images/light.jpg" alt="" data-uk-cover />
    </li>
  </ul>

  <div class="uk-position-small uk-position-bottom-center">
    <ul class="uk-thumbnav">
      <li data-uk-slideshow-item="0">
        <a href="#">
          <img src="/images/photo.jpg" width="100" height="67" alt="" />
        </a>
      </li>
      <li data-uk-slideshow-item="1">
        <a href="#">
          <img src="/images/dark.jpg" width="100" height="67" alt="" />
        </a>
      </li>
      <li data-uk-slideshow-item="2">
        <a href="#">
          <img src="/images/light.jpg" width="100" height="67" alt="" />
        </a>
      </li>
    </ul>
  </div>
</div>
```