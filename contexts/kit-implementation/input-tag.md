# Input Tag

## Usage

The Input Tag component is a web component built from scratch to allow users to easily create and manage a list of tags or keywords, such as categorizing items, assigning labels, or filtering content. This is particularly useful in scenarios such as:

- Tagging articles or blog posts
- Organizing products or inventory by category
- Building a custom filtering system for a dataset

To get started, simply use the `<uk-input-tag>` markup in your HTML code.

<span class="uk-label uk-label-primary">Note</span> While this component
provides features to help manage tags, such as preventing duplicates and
handling input validation, it is still a frontend component and can be tampered
with by users. Therefore, it is essential to sanitize and validate user input on
the server-side to ensure data integrity and security.

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag placeholder="Add a fruit"></uk-input-tag>
</form>
```

## Tag states

You can use the `cls` attribute to customize tag styling. This allows you to add visual cues to your tags, making it easier to convey different types of information or categorizations.

```html
<form>
  <div class="[min-h]" style="--min-h: 2.875rem">
    <uk-input-tag
      cls="tag: uk-tag uk-tag-primary"
      placeholder="Add a tag"
      value="Featured,Recommended,Verified"
    ></uk-input-tag>
  </div>

  <div class="mt [min-h]" style="--mt: 4; --min-h: 2.875rem">
    <uk-input-tag
      cls="tag: uk-tag uk-tag-secondary"
      placeholder="Add a tag"
      value="Category,Topic,Tag,Label,Filter"
    ></uk-input-tag>
  </div>

  <div class="mt [min-h]" style="--mt: 4; --min-h: 2.875rem">
    <uk-input-tag
      cls="tag: uk-tag uk-tag-danger"
      placeholder="Add a tag"
      value="Deprecated,Error,Unsupported"
    ></uk-input-tag>
  </div>

  <div class="mt [min-h]" style="--mt: 4; --min-h: 2.875rem">
    <uk-input-tag
      cls="tag: uk-tag uk-tag-success"
      placeholder="Add a tag"
      value="Approved,Completed,Solved,Paid"
    ></uk-input-tag>
  </div>

  <div class="mt [min-h]" style="--mt: 4; --min-h: 2.875rem">
    <uk-input-tag
      cls="tag: uk-tag uk-tag-warning"
      placeholder="Add a tag"
      value="Pending,Review,Beta,Hold"
    ></uk-input-tag>
  </div>

  <div class="mt [min-h]" style="--mt: 4; --min-h: 2.875rem">
    <uk-input-tag
      cls="tag: uk-tag uk-tag-info"
      placeholder="Add a tag"
      value="Note,Documentation,Help,Update"
    ></uk-input-tag>
  </div>

  <div class="mt [min-h]" style="--mt: 4; --min-h: 2.875rem">
    <uk-input-tag
      cls="tag: uk-tag uk-tag-muted"
      placeholder="Add a tag"
      value="Archived,Hidden,Ignored,Draft"
    ></uk-input-tag>
  </div>
</form>
```

## Capturing values

There are several ways to capture values from the `<uk-input-tag>` component. The simplest approach is to add a `name` attribute to the component. When you do this, a hidden input field with the specified name will be automatically generated, allowing you to easily capture the selected value on your server.

```html
<uk-input-tag name="tags"></uk-input-tag>
```

## Prepopulating values

To prepopulate the Input Tag component with existing values, simply pass the `value` attribute with a comma-separated list of tag values. This allows you to initialize the component with a set of default tags, making it easier for users to build upon or edit existing data.

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag
    placeholder="Add a fruit"
    value="Apple,Mango,Lemon"
  ></uk-input-tag>
</form>
```

## Allow duplicates

By default, duplicate tags are prevented. To allow duplicate tags, add the `allow-duplicates` attribute:

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag allow-duplicates placeholder="Add a fruit"></uk-input-tag>
</form>
```

## Maximum tags

Limit the number of tags that can be added with the `max-tags` attribute. Set to 0 for unlimited (default).

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag max-tags="3" placeholder="Add a fruit"></uk-input-tag>
</form>
```

## Custom delimiters

By default, tags are created when pressing Enter or comma (,). Customize delimiters with the `delimiters` attribute:

```html
<!-- Use comma, semicolon, or space as delimiters -->
<uk-input-tag delimiters=",; "></uk-input-tag>
```

## Internationalization

The Input Tag component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag
    i18n='{"placeholder": "Añadir etiqueta...", "remove-label": "Eliminar etiqueta", "duplicate-error": "La etiqueta ya existe"}'
  >
  </uk-input-tag>
</form>
```

### Using a configuration script

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag>
    <script type="application/json" data-fn="config">
      {
        "i18n": {
          "placeholder": "Ajouter un tag...",
          "remove-label": "Supprimer le tag",
          "edit-label": "Modifier le tag",
          "duplicate-error": "Le tag existe déjà"
        }
      }
    </script>
  </uk-input-tag>
</form>
```

### Available i18n options

| Key                | Default                                   | Description                                                       |
| ------------------ | ----------------------------------------- | ----------------------------------------------------------------- |
| `placeholder`      | Add a tag...                              | Placeholder text for input field                                  |
| `remove-label`     | Remove tag                                | ARIA label for remove button                                      |
| `edit-label`       | Edit tag                                  | ARIA label for tag text (click to edit)                           |
| `tag-list-label`   | Tags                                      | ARIA label for tag list container                                 |
| `min-length-error` | Tag must be at least {'{min}'} characters | Error message for minimum length (supports {'{min}'} placeholder) |
| `max-length-error` | Tag cannot exceed {'{max}'} characters    | Error message for maximum length (supports {'{max}'} placeholder) |
| `duplicate-error`  | Tag already exists                        | Error message for duplicate tags                                  |
| `max-tags-error`   | Maximum {'{max}'} tags allowed            | Error message for max tags limit (supports {'{max}'} placeholder) |
| `input-label`      | Tag input                                 | ARIA label for input field                                        |

## Custom classes

The Input Tag component supports custom CSS classes through the `cls` attribute. This allows you to style specific elements within the tag input.

### Using simple string format

Apply a class to the default element (host-inner):

```html
<uk-input-tag cls="my-tag-input"></uk-input-tag>
```

### Using JSON object format

Target specific elements within the input tag:

```html
<uk-input-tag 
  cls='{
    "host-inner": "tag-container",
    "wrapper": "uk-input-tag custom-wrapper",
    "tag-list": "tags-list",
    "tag": "uk-tag uk-tag-primary",
    "tag-text": "tag-label",
    "tag-remove": "remove-btn",
    "input": "uk-input",
    "error": "error-message"
  }'>
</uk-input-tag>
```

### Available cls targets

| Target       | Description                                           |
| ------------ | ----------------------------------------------------- |
| `host-inner` | The main container wrapper                            |
| `wrapper`    | The wrapper containing tags and input field           |
| `tag-list`   | The container for all tag elements                    |
| `tag`        | Individual tag elements                               |
| `tag-text`   | Text span inside tag (clickable for editing)          |
| `tag-remove` | Remove button inside tag                              |
| `input`      | The text input field                                  |
| `error`      | Error message container (shown on validation failure) |

## Custom inline styles

The Input Tag component supports custom inline styles through the `stl` attribute. The `stl` attribute supports the same targets as the `cls` attribute. See the [Available cls targets](#available-cls-targets) table above for a complete list of targetable elements.

### Example

```html
<uk-input-tag 
  stl='{
    "wrapper": "padding: 0.5rem; border: 1px solid #ddd;",
    "tag": "margin: 0.25rem; padding: 0.25rem 0.5rem;",
    "input": "min-width: 120px; flex-grow: 1;"
  }'>
</uk-input-tag>
```

## Behavior

The Input Tag component provides intuitive mouse and keyboard interactions to facilitate easy tag management.

### Paste behavior

- The component supports pasting multiple tags at once. When pasting text containing delimiters, tags are automatically split and added.

### Mouse Behavior

- Clicking on a tag name will remove it from the list and place its value in the input field, allowing you to edit the tag.
- Clicking the close icon on a tag will remove it from the list entirely.

### Keyboard Behavior

- When the input field is empty and you press the backspace key, the last tag in the list will be removed and its value will be placed in the input field, allowing you to edit or delete it.
- Pressing Enter or comma (,) key will add input value to the list of tags.

These interactions enable a seamless and efficient tagging experience.

## Slugifying tags

By default, user-submitted tags will be added exactly as they are entered. To automatically convert tags into a slug format (e.g., converting spaces to hyphens, removing special characters, etc.), simply add the `slugify` attribute to the `<uk-input-tag>` element. This ensures that tags are formatted consistently and are more suitable for use in URLs or other technical contexts.

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag
    placeholder="Add a tag"
    slugify
    value="fan-fiction"
  ></uk-input-tag>
</form>
```

Under the hood, we use the popular [slugify](https://github.com/simov/slugify) package to convert user-submitted tags into a slug format. To customize the slugification process, you can pass options using the slugify-options attribute. This attribute accepts either a JSON-stringified object or a valid `key: value; foo: bar;` format.

### Available Options

The following options are available for customizing the slugify behavior:

| Option        | Description                                                                                   | Default |
| ------------- | --------------------------------------------------------------------------------------------- | ------- |
| `replacement` | The replacement string used to replace spaces and other characters                            | -       |
| `remove`      | A valid regular expression pattern to remove from the tag                                     |         |
| `lower`       | A boolean indicating whether to convert the tag to lowercase                                  | true    |
| `strict`      | A boolean indicating whether to strip special characters except for the replacement character | true    |
| `locale`      | The language code of the locale to use for slugification                                      |         |
| `trim`        | A boolean indicating whether to trim leading and trailing replacement characters              | true    |

For more information about the [slugify](https://github.com/simov/slugify) package and its options, please refer to the [official documentation](https://github.com/simov/slugify).

## Disable input

To prevent user input, add the `disabled` attribute to the `<uk-input-tag>` element. This will disable input field, prevent tags editing and removal. Making it impossible for users to enter or modify tags.

```html
<form class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag
    placeholder="Add a tag"
    slugify
    value="Verified,Exclusive"
    state="primary"
    disabled
  ></uk-input-tag>
</form>
```

## Error state

To indicate an error state in the form, simply add the `.uk-form-danger` class to the `cls` attribute. This will apply a "danger" state to the component, providing visual feedback to the user.

```html
<form class="space-y" style="--space-y: 2">
  <label
    class="uk-form-label color display-block"
    style="--color: var(--uk-danger-f)"
  >
    Tags
  </label>
  <div class="uk-form-controls [min-h]" style="--min-h: 2.875rem">
    <uk-input-tag
      cls="uk-input-tag uk-form-danger;"
      placeholder="Add a tag"
    ></uk-input-tag>
  </div>
  <p class="uk-form-help color" style="--color: var(--uk-danger-f)">
    This field is required.
  </p>
</form>
```

## Preventing layout shift

When loading Web Components, a brief delay may cause a flash of unstyled content. To mitigate this issue, consider setting a predefined height on the parent element to prevent layout shift and ensure a smooth user experience.

```html
<div class="[min-h]" style="--min-h: 2.875rem">
  <uk-input-tag></uk-input-tag>
</div>
```

Please note that we used `min-h-*` because component might grow in height depending on the number of tags.

## Attributes

| Name                     | Type    | Default | Description                                                                       |
| ------------------------ | ------- | ------- | --------------------------------------------------------------------------------- |
| `maxlength`              | Number  | 20      | Maximum character length allowed for each tag.                                    |
| `minlength`              | Number  | 1       | Minimum character length required for each tag.                                   |
| `slugify`                | Boolean | false   | Enables slug transformation for tags (URL-friendly format).                       |
| `slugify-options`        | String  |         | JSON object or key\:value format for customizing slugify behavior.                |
| `delimiters`             | String  | ,       | Characters that trigger tag creation (e.g., ",;" for comma or semicolon).         |
| `allow-duplicates`       | Boolean | false   | Allows duplicate tags when enabled.                                               |
| `max-tags`               | Number  | 0       | Maximum number of tags allowed (0 = unlimited).                                   |
| `name`                   | String  |         | Name attribute for hidden input fields (automatically appends []).                |
| `disabled`               | Boolean | false   | Disables input field and prevents tag editing/removal.                            |
| `placeholder`            | String  |         | Placeholder text for input field (overrides i18n default).                        |
| `value`                  | String  |         | Comma-separated list of tags to prepopulate.                                      |
| `cls`                    | String  |         | Custom CSS classes. Can be simple string or JSON object for targeting elements.   |
| `stl`                    | String  |         | Custom inline styles. Can be simple string or JSON object for targeting elements. |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script.          |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios).                |

## Events

The Input Tag component triggers the following events on elements with this component attached:

| Name                 | Description                                                                           |
| -------------------- | ------------------------------------------------------------------------------------- |
| `uk-input-tag:input` | Fired after the value has changed, providing an opportunity to respond to user input. |