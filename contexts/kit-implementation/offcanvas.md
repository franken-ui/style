# Offcanvas

## Usage

To apply this component, add the `data-uk-offcanvas` attribute to a parent `<div>` element and use the following classes.

| Class                 | Description                                                                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `.uk-offcanvas-bar`   | Add this class to a child `<div>` element.                                                                                                |
| `.uk-offcanvas-close` | Add this class and the `data-uk-close` attribute to an `<a>` or `<button>` element to create a close button and enable its functionality. |

You can use any element to toggle an offcanvas sidebar. To enable the necessary JavaScript, add the `data-uk-toggle` attribute. An `<a>` element needs to be linked to the id of the offcanvas container. If you are using another element, like a button, just add the `data-uk-toggle="target: #ID"` attribute to target the id of the offcanvas container.

```html
<body>
  <!-- This is a button toggling the offcanvas -->
  <button data-uk-toggle="target: #my-id" type="button"></button>

  <!-- This is an anchor toggling the offcanvas -->
  <a href="#my-id" data-uk-toggle></a>

  <!-- This is the offcanvas -->
  <div id="my-id" data-uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close absolute top-4 right-4" type="button" data-uk-close></button>
    </div>
  </div>
</body>
```

```html
<button
  class="uk-button uk-button-default mr"
  style="--mr: 2"
  type="button"
  data-uk-toggle="target: #offcanvas-usage"
>
  Open
</button>

<a href="#offcanvas-usage" data-uk-toggle>Open</a>

<div class="uk-offcanvas" id="offcanvas-usage" data-uk-offcanvas>
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button
      class="uk-offcanvas-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <h3 class="uk-h3">Title</h3>

    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
```

### Overlay

To add an overlay, blanking out the page, add the `overlay: true` parameter to the `data-uk-offcanvas` attribute.

```html
<div id="my-id" data-uk-offcanvas="overlay: true">...</div>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #offcanvas-overlay"
>
  Open
</button>

<div id="offcanvas-overlay" data-uk-offcanvas="overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button
      class="uk-offcanvas-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <h3 class="uk-h3">Title</h3>

    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
```

## Flip modifier

Add the `flip: true` parameter to the `data-uk-offcanvas` attribute to adjust its alignment, so that it slides in from the right.

```html
<div id="my-id" data-uk-offcanvas="flip: true">...</div>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #offcanvas-flip"
>
  Open
</button>

<div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button
      class="uk-offcanvas-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <h3 class="uk-h3">Title</h3>

    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
```

## Animation modes

By default, the offcanvas slides in. But you can actually choose between different animation modes for the offcanvas's entrance. Just add one of the following attributes.

| Parameter      | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| `mode: slide`  | The offcanvas slides out and overlays the content. This is the default mode. |
| `mode: push`   | The offcanvas slides out and pushes the site.                                |
| `mode: reveal` | The offcanvas slides out and reveals its content while pushing the site.     |
| `mode: none`   | The offcanvas appears and overlays the content without an animation.         |

```html
<div id="my-id" data-uk-offcanvas="mode: push">...</div>
```

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <button
    class="uk-button uk-button-default"
    type="button"
    data-uk-toggle="target: #offcanvas-slide"
  >
    Slide
  </button>

  <button
    class="uk-button uk-button-default"
    type="button"
    data-uk-toggle="target: #offcanvas-push"
  >
    Push
  </button>

  <button
    class="uk-button uk-button-default"
    type="button"
    data-uk-toggle="target: #offcanvas-reveal"
  >
    Reveal
  </button>

  <button
    class="uk-button uk-button-default"
    type="button"
    data-uk-toggle="target: #offcanvas-none"
  >
    None
  </button>
</div>

<div id="offcanvas-slide" data-uk-offcanvas="overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button
      class="uk-offcanvas-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <h3 class="uk-h3">Title</h3>

    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>

<div id="offcanvas-push" data-uk-offcanvas="mode: push; overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button
      class="uk-offcanvas-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <h3 class="uk-h3">Title</h3>

    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>

<div id="offcanvas-reveal" data-uk-offcanvas="mode: reveal; overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button
      class="uk-offcanvas-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <h3 class="uk-h3">Title</h3>

    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>

<div id="offcanvas-none" data-uk-offcanvas="mode: none; overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button
      class="uk-offcanvas-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <h3 class="uk-h3">Title</h3>

    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
```

## Nav in Offcanvas

You can use the [Nav component](/docs/2.1/nav) inside an offcanvas to create a mobile navigation.

```html
<div id="my-id" data-uk-offcanvas>
  <div class="uk-offcanvas-bar">
    <ul class="uk-nav uk-nav-default">
      ...
    </ul>
  </div>
</div>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #offcanvas-nav"
>
  Open
</button>

<div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <ul class="uk-nav-default" data-uk-nav>
      <li class="uk-active"><a href="#">Active</a></li>
      <li class="uk-parent">
        <a href="#">Parent <span data-uk-nav-parent-icon></span></a>
        <ul class="uk-nav-sub">
          <li><a href="#">Sub item</a></li>
          <li>
            <a href="#">Sub item</a>
            <ul>
              <li><a href="#">Sub item</a></li>
              <li><a href="#">Sub item</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="uk-parent">
        <a href="#">Parent <span data-uk-nav-parent-icon></span></a>
        <ul class="uk-nav-sub">
          <li><a href="#">Sub item</a></li>
          <li><a href="#">Sub item</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/2.1/javascript#component-configuration)

| Option      | Value   | Default | Description                                                                                                                                              |
| ----------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode`      | String  | `slide` | Offcanvas animation mode (`slide`, `reveal`, `push` or `none`).                                                                                          |
| `flip`      | Boolean | `false` | Flip offcanvas to the right side.                                                                                                                        |
| `overlay`   | Boolean | `false` | Display the offcanvas together with an overlay.                                                                                                          |
| `esc-close` | Boolean | `true`  | Close the offcanvas when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`  | Close the offcanvas when the background is clicked.                                                                                                      |
| `container` | String  | `false` | Define a target container via a selector to specify where the offcanvas should be appended in the DOM. Setting it to `false` will prevent this behavior. |

`mode` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span uk-offcanvas="push"></span>
```

## JavaScript

Learn more about [JavaScript components](/docs/2.1/javascript#programmatic-use).

### Initialization

```javascript
UIkit.offcanvas(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                          |
| ------------ | ---------------------------------------------------- |
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item's hide animation has started.    |
| `hidden`     | Fires after an item is hidden.                       |

### Methods

The following methods are available for the component:

#### Show

```javascript
UIkit.offcanvas(element).show();
```

Shows the Offcanvas.

#### Hide

```javascript
UIkit.offcanvas(element).hide();
```

Hides the Offcanvas.

## Accessibility

The Offcanvas component adheres to the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _offcanvas bar_ has the `dialog` role, and if the offcanvas has an overlay, the `aria-modal` property.

The Close component automatically sets the appropriate WAI-ARIA roles and properties.

- The _close icon_ has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

The Offcanvas component can be accessed through keyboard using the following keys.

- The <kbd>esc</kbd> key closes the offcanvas. This behaviour is disabled if the `bg-close: false` option is set.