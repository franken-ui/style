# Slidenav

## Usage

To create a navigation with previous and next buttons, just add the `data-uk-slidenav` attribute to `<a>` elements. Add the `previous` or `next` parameter to the attribute to style the nav items as previous or next buttons.

```html
<a href="" data-uk-slidenav-previous></a>
<a href="" data-uk-slidenav-next></a>
```

```html
<a href="#" data-uk-slidenav-previous></a>
<a href="#" data-uk-slidenav-next></a>
```

## Slidenav container

To display a conjoint slidenav, wrap the slidenav items inside a `<div>` element and add the `.uk-slidenav-container` class, as well as one of the `.uk-position-*` classes.

```html
<div class="uk-slidenav-container">
  <a href="" data-uk-slidenav-previous></a>
  <a href="" data-uk-slidenav-next></a>
</div>
```

```html
<div class="uk-slidenav-container">
  <a href="" data-uk-slidenav-previous></a>
  <a href="" data-uk-slidenav-next></a>
</div>
```

## Position as overlay

To position the slidenav on top of an element or the [Slideshow component](/docs/latest/kit/slideshow) for example, just add one of the `.uk-position-*` classes from the [Position component](/docs/latest/kit/position). To create a position context on the container, add the `.uk-position-relative` class.

```html
<div class="uk-position-relative">
  <!-- The element which is wrapped goes here -->

  <a class="uk-position-center-left" href="" data-uk-slidenav-previous></a>
  <a class="uk-position-center-right" href="" data-uk-slidenav-next></a>
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slideshow
>
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

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href="#"
    data-uk-slidenav-previous
    data-uk-slideshow-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href="#"
    data-uk-slidenav-next
    data-uk-slideshow-item="next"
  ></a>
</div>
```