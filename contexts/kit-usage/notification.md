# Notification

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/javascript.md

## Usage

Invoked via JavaScript. Notifications pause fade-out on hover and close on click. Supports HTML content.

```javascript
UIkit.notification({
  message: "<uk-icon icon='rocket'></uk-icon> My message!",
  status: "primary", // Options: primary, danger, warning, success, info
  pos: "top-right", // Options: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
  timeout: 5000,
});

// Shortcuts
UIkit.notification("My message", "success");
UIkit.notification.closeAll(); // Closes all open notifications

```

```html
<button class="uk-button uk-button-default" onclick="UIkit.notification({message: 'Notification message', status: 'success', pos: 'bottom-right'})">
  Click me
</button>

```

## Component options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `message ` | String | `false` | Notification message. |
| `status` | String | `null` | Notification status color. |
| `timeout` | Number | `5000` | Visibility duration (ms). Set to `0` to prevent auto-hiding. |
| `group` | String |  | Closes all notifications sharing this group string. |
| `pos` | String | `top-center` | Display corner. |

## JavaScript Methods & Events

```javascript
// Initialization (Functional Component)
UIkit.notification(options);

// Close specific notification
UIkit.notification(element).close(immediate = true);

```

**Events:** `close` (Fires after the notification has been closed).

## Accessibility

Automatically sets the WAI-ARIA `alert` role.