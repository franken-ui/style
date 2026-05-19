# Scroll

## Usage

Simply add the `data-uk-scroll` attribute to any page-internal link that contains a URL fragment to add the smooth scrolling behavior.

```html
<a href="#my-id" data-uk-scroll></a>
```

```html
<a class="uk-button uk-button-primary" href="#target" data-uk-scroll>
  Scroll down
</a>
```

The height of a sticky element, for example the sticky navbar, is automatically added as offset to the scroll target so it is not covered by the sticky element.

## Offset

To define a general offset when linking directly to a specific section on a page, add the `offset` option.

```html
<a href="#my-id" data-uk-scroll="offset: 100"></a>
```

If there is already an offset for a sticky element, the `offset` option is added up.

## Callback after scroll

To receive a callback when scrolling has completed, you can listen to the `scrolled` event on the link element that triggered the scrolling.

```html
<a id="js-scroll-trigger" href="#my-id" data-uk-scroll></a>
```

```js
UIkit.util.on("#js-scroll-trigger", "scrolled", function () {
  alert("Done.");
});
```

```html
<a
  id="js-scroll-trigger"
  class="uk-button uk-button-primary"
  href="#target"
  data-uk-scroll
>
  Down with callback
</a>

<script>
  document.addEventListener("uikit:init", () => {
    UIkit.util.on("#js-scroll-trigger", "scrolled", function () {
      UIkit.modal.dialog('<p class="uk-modal-body">Done</p>');
    });
  });
</script>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option   | Value  | Default | Description                 |
| -------- | ------ | ------- | --------------------------- |
| `offset` | Number | `0`     | Offset added to scroll top. |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
UIkit.scroll(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name           | Description                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- |
| `beforescroll` | Fires before scroll begins. Can prevent scrolling by calling `preventDefault()` on the event. |
| `scrolled`     | Fires after scrolling is finished.                                                            |

### Methods

The following methods are available for the component:

#### ScrollTo

```js
UIkit.scroll(element).scrollTo(el);
```

Scroll to the given element.

| Name | Type           | Default   | Description               |
| ---- | -------------- | --------- | ------------------------- |
| `el` | Node, Selector | undefined | The element to scroll to. |

<div style="height: 2000px;"></div>

<a id="target" class="uk-button uk-button-primary" href="#" data-uk-scroll>
  Scroll up
</a>