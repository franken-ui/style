# Avatar

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


## Usage

Wrap an image in `.uk-avatar`. For initials/text, use `.uk-avatar-text`. Add `.uk-avatar-rounded` for a circular avatar, and `.uk-avatar-bordered` for a border.

```html
<div class="uk-avatar">
  <img src="/avatar.jpg" alt="User" />
</div>
<div class="uk-avatar uk-avatar-rounded uk-avatar-bordered">
  <div class="uk-avatar-text">JD</div>
</div>

```

## Dot indicator

Add `.uk-avatar-dot` for status dots.

* **Positions:** `.uk-avatar-dot-top-left`, `.uk-avatar-dot-top`, `.uk-avatar-dot-top-right`, `.uk-avatar-dot-right`, `.uk-avatar-dot-bottom-right`, `.uk-avatar-dot-bottom`, `.uk-avatar-dot-bottom-left`, `.uk-avatar-dot-left`.
* **Colors:** `.uk-avatar-dot-danger`, `.uk-avatar-dot-warning`, `.uk-avatar-dot-success`, `.uk-avatar-dot-info`, `.uk-avatar-dot-muted`.

```html
<div class="uk-avatar uk-avatar-dot uk-avatar-dot-top-right uk-avatar-dot-success">
  <img src="/avatar.jpg" alt="User" />
</div>

<div class="uk-avatar uk-avatar-dot" style="--uk-avatar-dot-size: 1.25rem">
  <img src="/avatar.jpg" alt="User" />
</div>

```

## Stacked

Stack multiple avatars using flex utilities and negative spacing.

```html
<div class="display-flex items-center justify-center space-x" style="--space-x: -4">
  <div class="uk-avatar uk-avatar-rounded"><img src="/user1.jpg" alt="" /></div>
  <div class="uk-avatar uk-avatar-rounded"><img src="/user2.jpg" alt="" /></div>
  <div class="uk-avatar uk-avatar-rounded bg color" style="--bg: var(--uk-primary); --color: var(--uk-primary-f)">
    <div class="uk-avatar-text">+99</div>
  </div>
</div>

```