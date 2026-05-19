# Form

## Usage

Add one of the following classes to form controls inside a `<form>` element to define them.

| Class               | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `.uk-input`         | Add this class to `<input>` elements.                                           |
| `.uk-select`        | Add this class to `<select>` elements.                                          |
| `.uk-textarea`      | Add this class to `<textarea>` elements.                                        |
| `.uk-radio`         | Add this class to `<input type="radio">` elements to create radio buttons.      |
| `.uk-checkbox`      | Add this class to `<input type="checkbox">` elements to create checkboxes.      |
| `.uk-range`         | Add this class to `<input type="range">` elements to create range forms.        |
| `.uk-toggle-switch` | Add this class to `<input type="checkbox">` elements to create toggle switches. |

```html
<form>
  <input class="uk-input" type="text" />
  <select class="uk-select">
    <option></option>
    <option></option>
  </select>
  <textarea class="uk-textarea"></textarea>
  <input class="uk-radio" type="radio" />
  <input class="uk-checkbox" type="checkbox" />
  <input class="uk-range" type="range" />
</form>
```

Add the `.uk-fieldset` class to a `<fieldset>` element and the `.uk-legend` class to a `<legend>` element to define a fieldset and a form legend.

```html
<form>
  <fieldset class="uk-fieldset space-y" style="--space-y: 4">
    <div class="">
      <input
        class="uk-input"
        type="text"
        placeholder="Input"
        aria-label="Input"
      />
    </div>

    <div class="">
      <select class="uk-select" aria-label="Select">
        <option>Option 01</option>
        <option>Option 02</option>
      </select>
    </div>

    <div class="">
      <textarea
        class="uk-textarea"
        rows="5"
        placeholder="Textarea"
        aria-label="Textarea"
      ></textarea>
    </div>

    <div class="">
      <label class="mr" style="--mr: 2">
        <input
          class="uk-radio mr"
          style="--mr: 1"
          type="radio"
          name="radio2"
          checked
        />
        Option 1
      </label>
      <label>
        <input class="uk-radio mr" style="--mr: 1" type="radio" name="radio2" />
        Option 2
      </label>
    </div>

    <div class="">
      <label class="mr" style="--mr: 2">
        <input class="uk-checkbox mr" style="--mr: 1" type="checkbox" checked />
        Option 1
      </label>
      <label
        ><input class="uk-checkbox mr" style="--mr: 1" type="checkbox" /> Option
        2</label
      >
    </div>

    <div class="">
      <input
        class="uk-range"
        type="range"
        value="2"
        min="0"
        max="10"
        step="0.1"
        aria-label="Range"
      />
    </div>
  </fieldset>
</form>
```

## Destructive modifier

Add the `.uk-form-danger` class to an `<input>`, `<select>` or `<textarea>` element to notify the user that the value is not validated.

```html
<div>
  <input
    class="uk-input uk-form-danger"
    type="text"
    placeholder="form-danger"
    aria-label="form-danger"
    value="form-danger"
  />
</div>

<div class="mt" style="--mt: 4">
  <input
    class="uk-input"
    type="text"
    placeholder="disabled"
    aria-label="disabled"
    value="disabled"
    disabled
  />
</div>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to make the form smaller or larger.

| Class             | Description               |
| ----------------- | ------------------------- |
| `.uk-form-xsmall` | Applies extra small size. |
| `.uk-form-small`  | Applies small size.       |
| `.uk-form-medium` | Applies medium size.      |
| `.uk-form-large`  | Applies large size.       |

```html
<form>
  <div class="">
    <input
      class="uk-input uk-form-xsmall"
      type="text"
      placeholder="xs"
      aria-label="xs"
    />
  </div>

  <div class="mt" style="--mt: 4">
    <input
      class="uk-input uk-form-small"
      type="text"
      placeholder="sm"
      aria-label="sm"
    />
  </div>

  <div class="mt" style="--mt: 4">
    <input
      class="uk-input uk-form-medium"
      type="text"
      placeholder="md"
      aria-label="md"
    />
  </div>

  <div class="mt" style="--mt: 4">
    <input
      class="uk-input uk-form-large"
      type="text"
      placeholder="lg"
      aria-label="lg"
    />
  </div>
</form>
```

## Width modifiers

You can use Tailwind CSS utility classes alongside form classes and the it will follow its width.

```html
<div class="space-y" style="--space-y: 4">
  <div class="w" style="--w: 40">
    <input class="uk-input" type="text" placeholder="10rem" />
  </div>
  <div class="[w]" style="--w: 50%">
    <input class="uk-input" type="text" placeholder="50%" />
  </div>
  <div class="w-full">
    <input class="uk-input" type="text" placeholder="100%" />
  </div>
</div>
```

## Blank modifier

Add the `.uk-form-blank` class to minimize the styling of form controls.

```html
<form>
  <input class="uk-input uk-form-blank" type="text" placeholder="Form blank" />
</form>
```

## Layout

Define labels and controls and apply a stacked layout to form elements. Layout modifiers can be added to any parent element like the `<fieldset>` element.

| Class                     | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| `.uk-form-stacked`        | Add this class to display labels on top of controls.            |
| `.uk-form-label`          | Add this class to define form labels.                           |
| `.uk-form-label-required` | Add this class to automatically add an asterisk to form labels. |
| `.uk-form-controls`       | Add this class to define form controls.                         |

```html
<form class="uk-form-stacked">
  <div>
    <label class="uk-form-label block"></label>
    <div class="uk-form-controls">…</div>
  </div>
  <div>
    <div class="uk-form-label"></div>
    <div class="uk-form-controls">…</div>
  </div>
</form>
```

```html
<form class="uk-form-stacked space-y" style="--space-y: 4">
  <div class="">
    <label class="uk-form-label uk-form-label-required" for="form-stacked-text">
      Text
    </label>
    <div class="uk-form-controls">
      <input
        class="uk-input"
        id="form-stacked-text"
        type="text"
        placeholder="Some text"
      />
    </div>
  </div>

  <div class="">
    <label class="uk-form-label" for="form-stacked-select">Select</label>
    <div class="uk-form-controls">
      <select class="uk-select" id="form-stacked-select">
        <option>Option 01</option>
        <option>Option 02</option>
      </select>
    </div>
  </div>

  <div class="">
    <div class="uk-form-label">Radio</div>
    <div class="uk-form-controls">
      <label class="mr" style="--mr: 2">
        <input class="uk-radio mr" style="--mr: 1" type="radio" name="radio1" />
        Option 01
      </label>
      <label>
        <input class="uk-radio mr" style="--mr: 1" type="radio" name="radio1" />
        Option 02
      </label>
    </div>
  </div>
</form>
```

## Form and icons

You use an icon from the [Icon component](/docs/latest/kit/icon) inside a form. Add the `.uk-form-icon` class to a `<span>` element. Group it with an `<input>` element by adding the `.uk-inline` class to a container element around both. The icon has to come first in the markup. By default, the icon will be placed on the left side of the form. To change the alignment, add the `.uk-form-icon-flip` class.

```html
<div class="uk-inline">
  <span class="uk-form-icon">
    <uk-icon icon="user"></uk-icon>
  </span>
  <input class="uk-input" />
</div>
```

```html
<form class="space-y" style="--space-y: 4">
  <div class="">
    <div class="uk-inline">
      <span class="uk-form-icon">
        <uk-icon icon="user"></uk-icon>
      </span>
      <input class="uk-input" type="text" aria-label="Not clickable icon" />
    </div>
  </div>

  <div class="">
    <div class="uk-inline">
      <span class="uk-form-icon uk-form-icon-flip">
        <uk-icon icon="user"></uk-icon>
      </span>
      <input class="uk-input" type="text" aria-label="Not clickable icon" />
    </div>
  </div>
</form>
```

### Clickable icons

To enable an action, for example opening a modal to pick an image or link, use an `<a>` or `<button>` element to create the icon.

```html
<div class="uk-inline">
  <a class="uk-form-icon uk-form-icon-flip" href="">
    <uk-icon icon="user"></uk-icon>
  </a>
  <input class="uk-input" />
</div>
```

```html
<form class="space-y" style="--space-y: 4">
  <div class="">
    <div class="uk-inline">
      <a class="uk-form-icon" href="#">
        <uk-icon icon="file-pen-line"></uk-icon>
      </a>
      <input class="uk-input" type="text" aria-label="Clickable icon" />
    </div>
  </div>

  <div class="">
    <div class="uk-inline">
      <a class="uk-form-icon uk-form-icon-flip" href="#">
        <uk-icon icon="link"></uk-icon>
      </a>
      <input class="uk-input" type="text" aria-label="Clickable icon" />
    </div>
  </div>
</form>
```

## Custom controls

To replace a file input or select forms with your own HTML content, like a button or text, add the `data-uk-form-custom` attribute to a container element.

### File

Use a button or text as a file input.

```html
<div data-uk-form-custom>
  <input type="file" />
  <button type="button"></button>
</div>
```

```html
<form>
  <div class="">
    <div data-uk-form-custom>
      <input type="file" aria-label="Custom controls" />
      <button class="uk-button uk-button-default" type="button" tabindex="-1">
        Select
      </button>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <span class="uk-text-middle">Here is a text</span>
    <div data-uk-form-custom>
      <input type="file" aria-label="Custom controls" />
      <span class="uk-link">upload</span>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <div data-uk-form-custom="target: true">
      <input type="file" aria-label="Custom controls" />
      <input
        class="uk-input max-w-sm"
        type="text"
        placeholder="Select file"
        aria-label="Custom controls"
        disabled
      />
    </div>
    <button class="uk-button uk-button-default">Submit</button>
  </div>
</form>
```

<span class="uk-label uk-label-primary">Note</span> The hover and focus state
for `uk-form-custom` are not styled by default, but you could use the adjacent
sibling selector to do so.

### Select

Use a button, text or a link as a select form. Just add the `target: SELECTOR` option to the `uk-form-custom` attribute to select where the option value should be displayed. `target: true` will select the adjacent element in the markup.

```html
<div data-uk-form-custom="target: true">
  <select>
    <option></option>
    <option></option>
  </select>
  <button type="button"></button>
</div>
```

```html
<form>
  <div class="">
    <div data-uk-form-custom="target: true">
      <select aria-label="Custom controls">
        <option value="1">Option 01</option>
        <option value="2">Option 02</option>
        <option value="3">Option 03</option>
        <option value="4">Option 04</option>
      </select>
      <span></span>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <div data-uk-form-custom="target: > * > span:last-child">
      <select aria-label="Custom controls">
        <option value="1">Option 01</option>
        <option value="2">Option 02</option>
        <option value="3">Option 03</option>
        <option value="4">Option 04</option>
      </select>
      <span class="display-flex items-center uk-link">
        <span class="mr" style="--mr: 2">
          <uk-icon icon="pencil-line"></uk-icon>
        </span>
        <span></span>
      </span>
    </div>
  </div>

  <div class="mt" style="--mt: 4">
    <div data-uk-form-custom="target: > * > span:first-child">
      <select aria-label="Custom controls">
        <option value="">Please select...</option>
        <option value="1">Option 01</option>
        <option value="2">Option 02</option>
        <option value="3">Option 03</option>
        <option value="4">Option 04</option>
      </select>
      <button class="uk-button uk-button-default" type="button" tabindex="-1">
        <span></span>
        <span class="ml-2">
          <uk-icon icon="chevron-down"></uk-icon>
        </span>
      </button>
    </div>
  </div>
</form>
```

## Help block

Form text can be created using `.uk-form-help` and should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.

```html
<div class="space-y" style="--space-y: 2">
  <label for="name" class="uk-form-label">Name</label>
  <input
    type="text"
    id="name"
    class="uk-input"
    aria-describedby="name-help-block"
    placeholder="Name"
  />
  <div class="uk-form-help" id="name-help-block">
    This is your public display name. It can be your real name or a pseudonym.
    You can only change this once every 30 days.
  </div>
</div>
```

## Toggle Switch

Use the following toggle switch component to ask for a yes or no type of input from your users without the use of JavaScript. You can also add the the `.uk-toggle-switch-danger` modifier to apply a danger style.

```html
<div class="flex items-center space-x" style="--space-x: 2">
  <input
    class="uk-toggle-switch uk-toggle-switch-primary"
    id="toggle-switch"
    type="checkbox"
  />
  <label class="uk-form-label" for="toggle-switch">Toggle me</label>
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="uk-toggle-switch uk-toggle-switch-primary"
    checked
    id="toggle-checked"
    type="checkbox"
  />
  <label class="uk-form-label" for="toggle-checked">Checked toggle</label>
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="uk-toggle-switch uk-toggle-switch-primary"
    disabled
    id="toggle-disabled"
    type="checkbox"
  />
  <label class="uk-form-label" for="toggle-disabled">Disabled toggle</label>
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="uk-toggle-switch uk-toggle-switch-primary"
    checked
    disabled
    id="toggle-disabled-checked"
    type="checkbox"
  />
  <label class="uk-form-label" for="toggle-disabled-checked"
    >Disabled checked toggle</label
  >
</div>

<div class="mt flex items-center space-x" style="--mt: 4; --space-x: 2">
  <input
    class="uk-toggle-switch uk-toggle-switch-danger"
    checked
    id="toggle-checked"
    type="checkbox"
  />
  <label class="uk-form-label" for="toggle-checked">Danger</label>
</div>
```

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the Form component.

- If no `<label>` element is associated with the form control, set the `aria-label` property to the form control to describe its meaning.

```html
<input class="uk-input" type="text" aria-label="..." />
```