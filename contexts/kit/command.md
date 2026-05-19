# Command

## Usage

The Command component is a web component built from scratch to allow developers to bind a keyboard shortcut and toggle a modal.

To get started, simply use the `<uk-command>` markup in your HTML code with one `<select data-fn="data-source" hidden></select>` tag as items reference.

```html
<uk-command>
  <template data-fn="icons">
    <!-- ... -->
  </template>
  
  <select data-fn="data-source" hidden>
    <optgroup label="Suggestions">
      <option data-icon="calendar" value="/path/to/calendar">Calendar</option>
      <option data-icon="smile" value="/path/to/search-emoji">
        Search Emoji
      </option>
      <option data-icon="calculator" disabled value="/path/to/calculator">
        Calculator
      </option>
    </optgroup>
    <optgroup label="Settings">
      <option data-icon="user" value="/path/to/profile">Profile</option>
      <option data-icon="credit-card" value="/path/to/billing">Billing</option>
      <option data-icon="settings" value="/path/to/settings">Settings</option>
    </optgroup>
  </select>
</uk-command>
```

## Binding a keyboard shortcut

By default, no keyboard shortcuts are bound. To enable a keyboard shortcut, simply add the `key` attribute to your Command component.

```html
<div class="text-muted-foreground text-center">
  Press <kbd class="uk-kbd">CTRL + J</kbd>
</div>

<uk-command key="j">
  <template data-fn="icons">
    <svg
      data-key="calendar"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
    <svg
      data-key="smile"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
    <svg
      data-key="calculator"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
    <svg
      data-key="user"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    <svg
      data-key="credit-card"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
    <svg
      data-key="settings"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </template>

  <select data-fn="data-source" hidden>
    <optgroup label="Suggestions">
      <option data-icon="calendar" value="/path/to/calendar">Calendar</option>
      <option data-icon="smile" value="/path/to/search-emoji">
        Search Emoji
      </option>
      <option data-icon="calculator" disabled value="/path/to/calculator">
        Calculator
      </option>
    </optgroup>
    <optgroup label="Settings">
      <option data-icon="user" value="/path/to/profile">Profile</option>
      <option data-icon="credit-card" value="/path/to/billing">Billing</option>
      <option data-icon="settings" value="/path/to/settings">Settings</option>
    </optgroup>
  </select>
</uk-command>
```

## Using a toggle

Since we are using the UIkit modal behind the scenes, we can use any element to toggle a Command component. To start, simply add the toggle attribute to the `<uk-command>` element. Then, you can use an `<a>` element linked to the toggle ID like this: `<a href="#TOGGLE" data-uk-toggle>`. If you are using another element, such as a button, just add the `data-uk-toggle="target: #TOGGLE"` attribute to toggle the Command component.

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #cmd2"
>
  Open
</button>

<uk-command toggle="cmd2">
  <template data-fn="icons">
    <svg
      data-key="calendar"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
    <svg
      data-key="smile"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
    <svg
      data-key="calculator"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
    <svg
      data-key="user"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    <svg
      data-key="credit-card"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
    <svg
      data-key="settings"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </template>

  <select data-fn="data-source" hidden>
    <optgroup label="Suggestions">
      <option data-icon="calendar" value="/path/to/calendar">Calendar</option>
      <option data-icon="smile" value="/path/to/search-emoji">
        Search Emoji
      </option>
      <option data-icon="calculator" disabled value="/path/to/calculator">
        Calculator
      </option>
    </optgroup>
    <optgroup label="Settings">
      <option data-icon="user" value="/path/to/profile">Profile</option>
      <option data-icon="credit-card" value="/path/to/billing">Billing</option>
      <option data-icon="settings" value="/path/to/settings">Settings</option>
    </optgroup>
  </select>
</uk-command>
```

## Programmatic navigation

By default, the command palette component does not perform any action when an item is selected or clicked. This allows for flexibility in handling user input. To respond to user input, you need to manually attach an event listener to the component specifically to the `uk-command:click` event.

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #cmd3"
>
  Open
</button>

<uk-command id="cmd-demo" toggle="cmd3">
  <template data-fn="icons">
    <svg
      data-key="calendar"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
    <svg
      data-key="smile"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
    <svg
      data-key="calculator"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
    <svg
      data-key="user"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    <svg
      data-key="credit-card"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
    <svg
      data-key="settings"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </template>

  <select data-fn="data-source" hidden>
    <optgroup label="Suggestions">
      <option data-icon="calendar" value="/path/to/calendar">Calendar</option>
      <option data-icon="smile" value="/path/to/search-emoji">
        Search Emoji
      </option>
      <option data-icon="calculator" disabled value="/path/to/calculator">
        Calculator
      </option>
    </optgroup>
    <optgroup label="Settings">
      <option data-icon="user" value="/path/to/profile">Profile</option>
      <option data-icon="credit-card" value="/path/to/billing">Billing</option>
      <option data-icon="settings" value="/path/to/settings">Settings</option>
    </optgroup>
  </select>
</uk-command>

<script>
  const el = document.getElementById("cmd-demo");

  el?.addEventListener("uk-command:click", (e) => {
    console.log(e.detail.value.value);

    // location.href = e.detail.value.value;
  });
</script>
```

You can try out this example by checking your browser's developer console. When you select an item from the command palette, the selected value will be logged to the console. From there, you can handle the value as needed to respond to the user's input.

## Customizing searchable keywords

Sometimes, there are elements that have related keywords that may be slightly off or awkward when included as anchor tags. For these use cases, we can leverage the `data-keywords` attribute.

For example, if we have a "Form" link but also want it to appear when users search for terms like "checkbox," "input," "toggle switch," etc., we can simply add a comma-separated list of terms like this: `data-keywords="checkbox,input,radio"`

```html
<uk-command>
  <template data-fn="icons">
    <!-- ... -->
  </template>
  
  <select data-fn="data-source" hidden>
    <optgroup label="Components">
      <option data-keywords="checkbox,input,radio" value="/path/to/form">
        Form
      </option>
    </optgroup>
  </select>
</uk-command>
```

## Grouping related items

To group related elements, simply use the `optgroup` tag and items will be automatically sorted and grouped with headers.

```html
<uk-command>
  <template data-fn="icons">
    <!-- ... -->
  </template>
  
  <select data-fn="data-source" hidden>
    <optgroup label="Suggestions">
      <!-- ... -->
    </optgroup>
    <optgroup label="Settings">
      <!-- ... -->
    </optgroup>
  </select>
</uk-command>
```

## Disabling an item

Sometimes, we may want to disable items. To do this, simply use the `disabled` attribute, and the item will be automatically disabled.

```html
<uk-command>
  <template data-fn="icons">
    <!-- ... -->
  </template>
  
  <select data-fn="data-source" hidden>
    <optgroup label="Suggestions">
      <option data-icon="calculator" disabled value="/path/to/calculator">
        Calculator
      </option>
    </optgroup>
  </select>
</uk-command>
```

## Individual shortcuts

Display keyboard shortcuts next to commands and allow users to execute them while the modal is open.

Use `data-key` and `data-modifier` attributes on `<options>` tag to define shortcuts:

```html
<div class="text-muted-foreground text-center">
  Press <kbd class="uk-kbd">Alt + O</kbd>
</div>

<uk-command modifier="alt" key="o">
  <template data-fn="icons">
    <svg
      data-key="calendar"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
    <svg
      data-key="smile"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
    <svg
      data-key="calculator"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
    <svg
      data-key="user"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    <svg
      data-key="credit-card"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
    <svg
      data-key="settings"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  </template>

  <select data-fn="data-source" hidden>
    <optgroup label="Suggestions">
      <option
        data-modifier="alt"
        data-key="s"
        data-icon="calendar"
        value="/path/to/calendar"
      >
        Calendar
      </option>
      <option data-icon="smile" value="/path/to/search-emoji">
        Search Emoji
      </option>
      <option data-icon="calculator" disabled value="/path/to/calculator">
        Calculator
      </option>
    </optgroup>
    <optgroup label="Settings">
      <option data-icon="user" value="/path/to/profile">Profile</option>
      <option data-icon="credit-card" value="/path/to/billing">Billing</option>
      <option data-icon="settings" value="/path/to/settings">Settings</option>
    </optgroup>
  </select>
</uk-command>
```

Available modifiers: `ctrl`, `alt`, `shift`, `meta`

## Internationalization

The Command component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

### Available i18n options

| Key                   | Default            | Description                       |
| --------------------- | ------------------ | --------------------------------- |
| `placeholder`         | Search commands... | Placeholder text for search input |
| `search-label`        | Search             | ARIA label for search input       |
| `list-label`          | Commands           | ARIA label for commands list      |
| `close-label`         | Close              | ARIA label for close button       |
| `modal-label`         | Command palette    | ARIA label for modal dialog       |
| `escape-button-label` | Esc                | Text displayed on escape button   |

## Custom classes and styles

The Command component supports custom CSS classes and inline styles through the `cls` and `stl` attributes.

### Available cls targets

| Target          | Description                                          |
| --------------- | ---------------------------------------------------- |
| `modal`         | The modal wrapper element                            |
| `dialog`        | The modal dialog container                           |
| `header`        | The search header section                            |
| `header-icon`   | The search icon container                            |
| `header-input`  | The search input wrapper                             |
| `header-esc`    | The escape button wrapper                            |
| `list`          | The commands list (ul element)                       |
| `item`          | Individual command item (li element)                 |
| `item-header`   | Group header for grouped commands                    |
| `item-link`     | The clickable link/button inside each command        |
| `item-wrapper`  | Wrapper for command content (icon + text + shortcut) |
| `item-icon`     | Icon element for commands with icons                 |
| `item-text`     | Text label for the command                           |
| `item-key`      | Keyboard shortcut display                            |
| `item-subtitle` | Subtitle/description text for commands               |
| `escape-button` | The Esc button in the header                         |

## Attributes

The following attributes are available for this component:

| Name                     | Type    | Default | Description                                                                                           |
| ------------------------ | ------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `key`                    | String  |         | Keyboard key used with modifier to toggle the command palette (e.g., "k" for Ctrl+K).                 |
| `modifier`               | String  | ctrl    | Modifier key used with key attribute. Options: `ctrl`, `alt`, `shift`, `meta`.                        |
| `toggle`                 | String  |         | ID for the modal element. Used for manual toggling via `data-uk-toggle` attribute or UIkit modal API. |
| `cls`                    | String  |         | Custom CSS classes. Can be simple string or JSON object for targeting specific elements.              |
| `stl`                    | String  |         | Custom inline styles. Can be simple string or JSON object for targeting specific elements.            |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script.                              |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios).                                    |

## Events

The Command component triggers the following events on elements with this component attached:

| Name                | Description                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `uk-command:click`  | Fired when a command is selected or clicked. Event detail contains `{value: OptionItem}`. |
| `uk-command:search` | Fired when the search term changes. Event detail contains `{value: string}`.              |