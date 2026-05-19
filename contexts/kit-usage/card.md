# Card

## Usage

The Card component consists of the card itself, the card body and an optional card title. Typically, cards are arranged in grid columns.

| Class            | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `.uk-card`       | Add this class to a `<div>` element to define the Card component.              |
| `.uk-card-body`  | Add this class to the card to create padding between the card and its content. |
| `.uk-card-title` | Add this class to a heading to define a card title.                            |

```html
<div class="uk-card uk-card-body">
  <h3 class="uk-card-title"></h3>
</div>
```

```html
<div class="uk-card uk-card-body max-w-sm">
  <h3 class="uk-card-title">Default</h3>
  <p class="mt" style="--mt: 4">
    Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.uk-card-primary`
- `.uk-card-secondary`
- `.uk-badge-danger`
- `.uk-badge-warning`
- `.uk-badge-success`
- `.uk-badge-info`

```html
<div class="uk-card"></div>

<div class="uk-card uk-card-primary"></div>

<div class="uk-card uk-card-secondary"></div>

<div class="uk-card uk-card-success"></div>

<div class="uk-card uk-card-warning"></div>

<div class="uk-card uk-card-info"></div>

<div class="uk-card uk-card-danger"></div>
```

```html
<div class="display-grid gap md:grid-cols" style="--gap: 4; --md-grid-cols: 2">
  <div>
    <div class="uk-card uk-card-body">
      <h3 class="uk-card-title">Default</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-body uk-card-primary">
      <h3 class="uk-card-title">Primary</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-body uk-card-secondary">
      <h3 class="uk-card-title">Secondary</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-body uk-card-success">
      <h3 class="uk-card-title">Success</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-body uk-card-warning">
      <h3 class="uk-card-title">Warnng</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-body uk-card-info">
      <h3 class="uk-card-title">Info</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
  <div>
    <div class="uk-card uk-card-body uk-card-danger">
      <h3 class="uk-card-title">Danger</h3>
      <p class="mt" style="--mt: 4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  </div>
</div>
```

## Header and footer

You can also divide a card into header and footer — around the default body. Just add the `.uk-card-header` or `.uk-card-footer` class to a `<div>` element inside the card.

```html
<div class="uk-card">
  <div class="uk-card-header">
    <h3 class="uk-card-title"></h3>
  </div>
  <div class="uk-card-body"></div>
  <div class="uk-card-footer"></div>
</div>
```

```html
<div class="uk-card max-w-sm">
  <div class="uk-card-header">
    <h3 class="uk-card-title">Create project</h3>
    <p class="mt text-muted-foreground" style="--mt: 2">
      Deploy your new project in one-click.
    </p>
  </div>
  <div class="uk-card-body">
    <div class="">
      <label class="uk-form-label" for="name">Name</label>
      <div class="uk-form-controls mt" style="--mt: 2">
        <input
          class="uk-input"
          id="name"
          type="text"
          aria-describedby="name-help-block"
          placeholder="Name"
        />
        <div id="name-help-block" class="uk-form-help mt" style="--mt: 2">
          The name of your project.
        </div>
      </div>
    </div>

    <div class="mt" style="--mt: 4">
      <label class="uk-form-label" for="framework">Framework</label>
      <div class="uk-form-controls mt" style="--mt: 2">
        <select class="uk-select" name="framework">
          <option value="sveltekit">Sveltekit</option>
          <option value="astro" selected>Astro</option>
        </select>
      </div>
    </div>
  </div>

  <div class="uk-card-footer display-flex justify-between">
    <button class="uk-button uk-button-default">Cancel</button>
    <button class="uk-button uk-button-primary">Deploy</button>
  </div>
</div>
```