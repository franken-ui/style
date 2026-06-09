# Comment

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


## Usage

| Class | Description |
| --- | --- |
| `.uk-comment` | Defines the Comment component. |
| `.uk-comment-body` | Comment body. |
| `.uk-comment-header` | Comment header. |
| `.uk-comment-title` | Heading inside the header. |
| `.uk-comment-meta` | Meta text (e.g. timestamp, author link). |
| `.uk-comment-avatar` | Applied to an `<img>` for the author avatar. |

```html
<!-- Full comment with avatar, title, meta, and body. Add role="comment" for accessibility. -->
<article class="uk-comment" tabindex="-1" role="comment">
  <header class="uk-comment-header">
    <div class="display-flex items-center">
      <div class="uk-comment-avatar mr" style="--mr: 2">
        <img src="https://api.dicebear.com/9.x/lorelei/svg?seed=Tyler Johnson" alt="Tyler Johnson" />
      </div>
      <div class="flex-1">
        <div class="uk-comment-title"><a href="#">Tyler Johnson</a></div>
        <p class="uk-comment-meta"><a href="#">2 hours ago</a></p>
      </div>
    </div>
  </header>
  <div class="uk-comment-body">
    <p>Great article — the historical context really helped frame the current challenges.</p>
  </div>
</article>
```

## Primary Modifier

Add `.uk-comment-primary` to highlight a comment (e.g. an admin's reply).

```html
<!-- uk-comment-primary visually distinguishes this comment -->
<article class="uk-comment uk-comment-primary" tabindex="-1" role="comment">
  <header class="uk-comment-header">
    <div class="display-flex items-center">
      <div class="uk-comment-avatar mr" style="--mr: 2">
        <img src="https://api.dicebear.com/9.x/lorelei/svg?seed=Admin" alt="Admin" />
      </div>
      <div class="flex-1">
        <div class="uk-comment-title"><a href="#">Admin</a></div>
        <p class="uk-comment-meta"><a href="#">Just now</a></p>
      </div>
    </div>
  </header>
  <div class="uk-comment-body">
    <p>Thanks for the feedback — we'll look into improving that section.</p>
  </div>
</article>
```

## Lists

Add `.uk-comment-list` to a `<ul>` to create a threaded comment list. Nest `<ul>` elements inside `<li>` items for replies.

```html
<ul class="uk-comment-list">
  <li>
    <article class="uk-comment" tabindex="-1" role="comment">
      <header class="uk-comment-header">
        <div class="display-flex items-center">
          <div class="uk-comment-avatar mr" style="--mr: 2">
            <img src="https://api.dicebear.com/9.x/lorelei/svg?seed=John Doe" alt="John Doe" />
          </div>
          <div class="flex-1">
            <div class="uk-comment-title"><a href="#">John Doe</a></div>
            <p class="uk-comment-meta"><a href="#">2 hours ago</a></p>
          </div>
        </div>
      </header>
      <div class="uk-comment-body"><p>Top-level comment.</p></div>
    </article>
    <!-- Nested replies -->
    <ul>
      <li>
        <article class="uk-comment" tabindex="-1" role="comment">
          <header class="uk-comment-header">
            <div class="display-flex items-center">
              <div class="uk-comment-avatar mr" style="--mr: 2">
                <img src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jane Smith" alt="Jane Smith" />
              </div>
              <div class="flex-1">
                <div class="uk-comment-title"><a href="#">Jane Smith</a></div>
                <p class="uk-comment-meta"><a href="#">1 hour ago</a></p>
              </div>
            </div>
          </header>
          <div class="uk-comment-body"><p>Reply to the top-level comment.</p></div>
        </article>
      </li>
    </ul>
  </li>
</ul>
```

## Accessibility

- Add `role="comment"` to each `<article>`.
- Add `tabindex="-1"` to allow programmatic focus.