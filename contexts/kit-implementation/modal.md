# Modal

## Usage

The Modal component consists of an overlay, a dialog and an optional close button. You can use any element to toggle a modal dialog. To enable the necessary JavaScript, add the `data-uk-toggle` attribute. An `<a>` element needs to be linked to the modal's id. If you are using another element, like a button, just add the `data-uk-toggle="target: #ID"` attribute to target the id of the modal container.

Add the `data-uk-modal` attribute to a `<div>` element to create the modal container and an overlay that blanks out the page. It is important to add an `id` to indicate the element for toggling. Use the following classes to define the modal's sections.

| Class              | Description                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| `.uk-modal-dialog` | Add this class to a child `<div>` element to create the dialog                                          |
| `.uk-modal-body`   | Add this class to create padding between the modal and its content.                                     |
| `.uk-modal-title`  | Add this class to a heading element to create the modal title.                                          |
| `.uk-modal-close`  | Add this class to an `<a>` or `<button>` element to create a close button and enable its functionality. |

```html
<!-- This is a button toggling the modal -->
<button data-uk-toggle="target: #my-id" type="button"></button>

<!-- This is the modal -->
<div class="uk-modal" id="my-id" data-uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <h2 class="uk-modal-title"></h2>
    <button class="uk-modal-close" type="button"></button>
  </div>
</div>
```

```html
<button
  class="uk-button uk-button-default mr"
  style="--mr: 2"
  type="button"
  data-uk-toggle="target: #modal-example"
>
  Open
</button>

<a href="#modal-example" data-uk-toggle>Open</a>

<div id="modal-example" data-uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <h2 class="uk-modal-title">Headline</h2>
    <p class="my" style="--my: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p class="uk-text-right">
      <button
        class="uk-modal-close uk-button uk-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <button class="uk-button uk-button-primary" type="button">Save</button>
    </p>
  </div>
</div>
```

## Close button

To create a close button, enable its functionality and add proper styling and positioning, add the `.uk-modal-close` class to an `<a>` or `<button>` element.

Add the `data-uk-close` attribute from the [Close component](/docs/latest/kit/close), to apply a close icon.

```html
<div>
  <div class="uk-modal-dialog">
    <button
      class="uk-modal-close absolute right-4 top-4"
      type="button"
      data-uk-close
    ></button>
  </div>
</div>
```

```html
<!-- This is a button toggling the modal with the default close button -->
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #modal-close-default"
>
  Open
</button>

<!-- This is the modal with the default close button -->
<div id="modal-close-default" data-uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <button
      class="uk-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>
    <h2 class="uk-modal-title">Heading</h2>
    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</div>
```

## Center modal

To vertically center the modal dialog, you can use the `.uk-margin-auto-vertical` class.

```html
<div class="uk-flex-top" data-uk-modal>
  <div class="uk-modal-dialog uk-margin-auto-vertical"></div>
</div>
```

```html
<a class="uk-button uk-button-default" href="#modal-center" data-uk-toggle>
  Open
</a>

<div id="modal-center" class="uk-flex-top" data-uk-modal>
  <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</div>
```

<span class="uk-label uk-label-primary">Note</span> `.uk-flex-top` on the modal
container is needed to support IE 11.

## Header and footer

To divide the modal into different content sections, use the following classes.

| Class              | Description                                                     |
| ------------------ | --------------------------------------------------------------- |
| `.uk-modal-header` | Add this class to a `<div>` element to create the modal header. |
| `.uk-modal-footer` | Add this class to a `<div>` element to create the modal footer. |

```html
<div class="uk-modal" data-uk-modal>
  <div class="uk-modal-dialog">
    <button
      class="uk-modal-close absolute right-4 top-4"
      type="button"
      data-uk-close
    ></button>
    <div class="uk-modal-header">
      <h2 class="uk-modal-title"></h2>
    </div>
    <div class="uk-modal-body"></div>
    <div class="uk-modal-footer"></div>
  </div>
</div>
```

```html
<a class="uk-button uk-button-default" href="#modal-sections" data-uk-toggle>
  Open
</a>

<div id="modal-sections" data-uk-modal>
  <div class="uk-modal-dialog">
    <button
      class="uk-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>
    <div class="uk-modal-header">
      <h2 class="uk-modal-title">Modal Title</h2>
    </div>
    <div class="uk-modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="uk-modal-footer uk-text-right">
      <button
        class="uk-modal-close uk-button uk-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <button class="uk-button uk-button-primary" type="button">Save</button>
    </div>
  </div>
</div>
```

## Container modifier

Add the `.uk-modal-container` class to expand the modal dialog to the default [Container](/docs/latest/kit/container) width.

```html
<div class="uk-modal-container" data-uk-modal>...</div>
```

```html
<a class="uk-button uk-button-default" href="#modal-container" data-uk-toggle>
  Open
</a>

<div id="modal-container" class="uk-modal-container" data-uk-modal>
  <div class="uk-modal-dialog uk-modal-body">
    <button
      class="uk-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>
    <h2 class="uk-modal-title">Headline</h2>
    <p class="mt" style="--mt: 4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</div>
```

## Full modifier

To create a modal, that fills the entire page, add the `.uk-modal-full` class.

```html
<div class="uk-modal uk-modal-full" data-uk-modal>
  <div class="uk-modal-dialog">
    <button class="uk-modal-close" type="button" data-uk-close></button>
  </div>
</div>
```

```html
<a class="uk-button uk-button-default" href="#modal-full" data-uk-toggle>
  Open
</a>

<div id="modal-full" class="uk-modal-full" data-uk-modal>
  <div class="uk-modal-dialog">
    <button
      class="uk-modal-close absolute right top p"
      style="--right: 0; --top: 0; --p: 8"
      type="button"
      data-uk-close
    ></button>
    <div class="display-grid md:grid-cols" style="--md-grid-cols: 2">
      <div
        class="h-screen bg-cover bg-image"
        style="
          --bg-image: url(&quot;https://franken.style/images/photo.jpg&quot;);
        "
      ></div>
      <div class="p" style="--p: 8">
        <h1 class="uk-h1">Headline</h1>
        <p class="mt" style="--mt: 4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</div>
```

## Overflow

By default, the page will scroll with the modal, if its content exceeds the window height. To apply a scrollbar inside the modal, add the `data-uk-overflow-auto` attribute to the modal body.

```html
<div class="uk-modal" data-uk-modal>
  <div class="uk-modal-dialog" data-uk-overflow-auto></div>
</div>
```

```html
<a class="uk-button uk-button-default" href="#modal-overflow" data-uk-toggle>
  Open
</a>

<div id="modal-overflow" data-uk-modal>
  <div class="uk-modal-dialog">
    <button
      class="uk-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>

    <div class="uk-modal-header">
      <h2 class="uk-modal-title">Headline</h2>
    </div>

    <div
      class="uk-modal-body space-y"
      style="--space-y: 4"
      data-uk-overflow-auto
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>

    <div class="uk-modal-footer uk-text-right">
      <button
        class="uk-modal-close uk-button uk-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <button class="uk-button uk-button-primary" type="button">Save</button>
    </div>
  </div>
</div>
```

## Media

If you want to display media, you should first check, if the [Lightbox component](/docs/latest/kit/lightbox) doesn't already offer everything you need. However, you can also use the modal to have more control over the markup to wrap your media in.

<span class="uk-label uk-label-primary">Note</span> Use the `data-uk-video`
attribute from the [Video component](/docs/latest/kit/video) to make sure videos are
stopped when the modal is closed.

```html
<div class="uk-modal" data-uk-modal>
  <div class="uk-modal-dialog w-auto">
    <iframe src="" data-uk-video></iframe>
  </div>
</div>
```

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <a
    class="uk-button uk-button-default"
    href="#modal-media-image"
    data-uk-toggle
  >
    Image
  </a>
  <a
    class="uk-button uk-button-default"
    href="#modal-media-video"
    data-uk-toggle
  >
    Video
  </a>
  <a
    class="uk-button uk-button-default"
    href="#modal-media-youtube"
    data-uk-toggle
  >
    YouTube
  </a>
  <a
    class="uk-button uk-button-default"
    href="#modal-media-vimeo"
    data-uk-toggle
  >
    Vimeo
  </a>
</div>

<div id="modal-media-image" class="uk-flex-top" data-uk-modal>
  <div class="uk-modal-dialog uk-margin-auto-vertical w-auto">
    <button
      class="uk-modal-close absolute right top text-white"
      style="--right: -4; --top: -4"
      type="button"
      data-uk-close
    ></button>
    <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
  </div>
</div>

<div id="modal-media-video" class="uk-flex-top" data-uk-modal>
  <div class="uk-modal-dialog uk-margin-auto-vertical w-auto">
    <video
      src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
      width="1920"
      height="1080"
      controls
      playsinline
      data-uk-video
    ></video>
  </div>
</div>

<div id="modal-media-youtube" class="uk-flex-top" data-uk-modal>
  <div class="uk-modal-dialog uk-margin-auto-vertical w-auto">
    <iframe
      src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA"
      width="1920"
      height="1080"
      loading="lazy"
      data-uk-video
      data-uk-responsive
    ></iframe>
  </div>
</div>

<div id="modal-media-vimeo" class="uk-flex-top" data-uk-modal>
  <div class="uk-modal-dialog uk-margin-auto-vertical w-auto">
    <iframe
      src="https://player.vimeo.com/video/1084537"
      width="1280"
      height="720"
      loading="lazy"
      data-uk-video
      data-uk-responsive
    ></iframe>
  </div>
</div>
```

## Groups

You can group multiple modals by linking from one to the other and back. Use this to create multistep wizards inside your modals.

```html
<div id="modal-group-1" class="uk-modal" data-uk-modal>
  <div class="uk-modal-dialog">
    <a href="#modal-group-2" data-uk-toggle>Next</a>
  </div>
</div>

<div id="modal-group-2" data-uk-modal>
  <div class="uk-modal-dialog">
    <a href="#modal-group-1" data-uk-toggle>Previous</a>
  </div>
</div>
```

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <a class="uk-button uk-button-default" href="#modal-group-1" data-uk-toggle>
    Modal 1
  </a>
  <a class="uk-button uk-button-default" href="#modal-group-2" data-uk-toggle>
    Modal 2
  </a>
</div>

<div id="modal-group-1" data-uk-modal>
  <div class="uk-modal-dialog">
    <button
      class="uk-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>
    <div class="uk-modal-header">
      <h2 class="uk-modal-title">Headline 1</h2>
    </div>
    <div class="uk-modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="uk-modal-footer uk-text-right">
      <button
        class="uk-modal-close uk-button uk-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <a
        href="#modal-group-2"
        class="uk-button uk-button-primary"
        data-uk-toggle
      >
        Next
      </a>
    </div>
  </div>
</div>

<div id="modal-group-2" data-uk-modal>
  <div class="uk-modal-dialog">
    <button
      class="uk-modal-close absolute right top"
      style="--right: 4; --top: 4"
      type="button"
      data-uk-close
    ></button>
    <div class="uk-modal-header">
      <h2 class="uk-modal-title">Headline 2</h2>
    </div>
    <div class="uk-modal-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div class="uk-modal-footer uk-text-right">
      <button
        class="uk-modal-close uk-button uk-button-default mr"
        style="--mr: 2"
        type="button"
      >
        Cancel
      </button>
      <a
        href="#modal-group-1"
        class="uk-button uk-button-primary"
        data-uk-toggle
      >
        Previous
      </a>
    </div>
  </div>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option      | Value   | Default           | Description                                                                                                                                          |
| ----------- | ------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `esc-close` | Boolean | `true`            | Close the modal when the _Esc_ key is pressed.                                                                                                       |
| `bg-close`  | Boolean | `true`            | Close the modal when the background is clicked.                                                                                                      |
| `stack`     | Boolean | `false`           | Stack modals, when more than one is open. By default, the previous modal will be hidden.                                                             |
| `container` | String  | `true`            | Define a target container via a selector to specify where the modal should be appended in the DOM. Setting it to `false` will prevent this behavior. |
| `cls-page`  | String  | `uk-modal-page`   | Class to add to `<html>` when modal is active                                                                                                        |
| `cls-panel` | String  | `uk-modal-dialog` | Class of the element to be considered the panel of the modal                                                                                         |
| `sel-close` | String  | `.uk-modal-close` | CSS selector for all elements that should trigger the closing of the modal                                                                           |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
UIkit.modal(element, options);
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
UIkit.modal(element).show();
```

Shows the Modal.

#### Hide

```javascript
UIkit.modal(element).hide();
```

Hides the Modal.

## Modal dialogs

<span class="uk-label uk-label-primary">Note</span> While the modal dialogs work
perfectly, customizing padding requires a custom-compiled UIkit JavaScript. If
you're unfamiliar with compiling your JavaScript, it's advisable to build the
modal using HTML.

The component comes with a number of prepared modal dialogs that you can use for user interaction. You can call the dialog directly from JavaScript and use callback functions to process the user input.

| Code                                          | Description                                              |
| --------------------------------------------- | -------------------------------------------------------- |
| `UIkit.modal.alert('UIkit alert!')`           | Show an alert box with one button.                       |
| `UIkit.modal.confirm('UIkit confirm!')`       | Show a confirm dialog with your message and two buttons. |
| `UIkit.modal.prompt('Name:', 'Your name')`    | Show a dialog asking for a text input.                   |
| `UIkit.modal.dialog('<p>UIkit dialog!</p>');` | Show dialog with any HTML content.                       |

To process the user input, the modal uses a promise based interface which provides a `then()` function to register your callback functions. The `UIkit.modal.dialog` function however will return the modal itself.

```javascript
UIkit.modal.confirm("UIkit confirm!").then(
  function () {
    console.log("Confirmed.");
  },
  function () {
    console.log("Rejected.");
  },
);
```

The returned promise has a property `dialog`, which holds a reference to the modal itself. This lets you manipulate e.g. the markup of the modal's element.

To translate the button labels, the dialog functions accepts an optional `options` object parameter. This has a key `i18n` and two properties `ok` and `cancel`.

```javascript
const modal = UIkit.modal.confirm("UIkit confirm!", {
  i18n: { ok: "okay" },
}).dialog; // The modal component
const el = modal.$el; // The modal element
```

```html
<div class="flex flex-wrap gap-2">
  <a id="js-modal-dialog" class="uk-button uk-button-default" href="#"
    >Dialog</a
  >

  <a id="js-modal-alert" class="uk-button uk-button-default" href="#">Alert</a>

  <a id="js-modal-confirm" class="uk-button uk-button-default" href="#"
    >Confirm</a
  >

  <a id="js-modal-prompt" class="uk-button uk-button-default" href="#"
    >Prompt</a
  >

  <script>
    document
      .getElementById("js-modal-dialog")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        UIkit.modal.dialog('<p class="uk-modal-body">UIkit dialog!</p>');
      });

    document
      .getElementById("js-modal-alert")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        UIkit.modal.alert("UIkit alert!").then(function () {
          console.log("Alert closed.");
        });
      });

    document
      .getElementById("js-modal-confirm")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        UIkit.modal.confirm("UIkit confirm!").then(
          function () {
            console.log("Confirmed.");
          },
          function () {
            console.log("Rejected.");
          },
        );
      });

    document
      .getElementById("js-modal-prompt")
      ?.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.blur();
        UIkit.modal.prompt("Name:", "Your name").then(function (name) {
          console.log("Prompted:", name);
        });
      });
  </script>
</div>
```

## Accessibility

The Modal component adheres to the [Dialog (Modal) WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/) and automatically sets the appropriate WAI-ARIA roles and properties.

- The _modal_ has the `dialog` role and the `aria-modal` property.

The Close component automatically sets the appropriate WAI-ARIA roles and properties.

- The _close icon_ has the `aria-label` property, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

The Modal component can be accessed through keyboard using the following keys.

- The <kbd>esc</kbd> key closes the modal. This behaviour is disabled if the `bg-close: false` option is set.