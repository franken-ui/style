# Comment

## Usage

The Comment component consists of the comment itself, a comment header, including an avatar, a title and meta text, and a comment body.

| Class                | Description                                                                           |
| -------------------- | ------------------------------------------------------------------------------------- |
| `.uk-comment`        | Add this class to define the Comment component.                                       |
| `.uk-comment-body`   | Add this class to create a comment body.                                              |
| `.uk-comment-header` | Add this class to create a comment header.                                            |
| `.uk-comment-title`  | Add this class to a heading to create a comment title.                                |
| `.uk-comment-meta`   | Add this class to create meta text about your comment.                                |
| `.uk-comment-avatar` | Add this class to an `<img>` element to create an avatar for the comment author.      |

```html
<article class="uk-comment">
  <header class="uk-comment-header">
    <div class="uk-comment-avatar">
      <img src="" alt="" />
    </div>
    <div class="uk-comment-title"></div>
    <ul class="uk-comment-meta uk-subnav"></ul>
  </header>
  <div class="uk-comment-body"></div>
</article>
```

```html
<article class="uk-comment" tabindex="-1" role="comment">
  <header class="uk-comment-header">
    <div class="display-flex items-center">
      <div class="uk-comment-avatar mr" style="--mr: 2">
        <img
          src="https://api.dicebear.com/9.x/lorelei/svg?seed=Tyler Johnson"
          alt=""
        />
      </div>
      <div class="flex-1">
        <div class="uk-comment-title"><a href="#">Tyler Johnson</a></div>
        <p class="uk-comment-meta"><a href="#">Just posted</a></p>
      </div>
    </div>
  </header>
  <div class="uk-comment-body">
    <p>
      I agree, this was a really insightful article. The historical context
      provided a great foundation for understanding the current challenges the
      company is facing.
    </p>
  </div>
</article>
```

## Primary modifier

To style a comment differently, for example to highlight it as the admin's comment, just add the `.uk-comment-primary` class.

```html
<article class="uk-comment uk-comment-primary">...</article>
```

```html
<article class="uk-comment uk-comment-primary" tabindex="-1" role="comment">
  <header class="uk-comment-header">
    <div class="display-flex items-center">
      <div class="uk-comment-avatar mr" style="--mr: 2">
        <img
          src="https://api.dicebear.com/9.x/lorelei/svg?seed=John Doe"
          alt=""
        />
      </div>
      <div class="flex-1">
        <div class="uk-comment-title"><a href="#">John Doe</a></div>
        <p class="uk-comment-meta"><a href="#">2 hours ago</a></p>
      </div>
    </div>
  </header>
  <div class="uk-comment-body">
    <p>
      This is a great article! I really enjoyed reading about the history of the
      company and the challenges they faced. The insights provided are valuable
      for anyone interested in the industry.
    </p>
  </div>
</article>
```

## Lists

Add the `.uk-comment-list` class to a `<ul>` element to create a list of comments. You can nest any number of `<ul>` elements inside a comment list.

```html
<ul class="uk-comment-list">
  <li>
    <article class="uk-comment">...</article>
    <ul>
      <li>
        <article class="uk-comment">...</article>
      </li>
    </ul>
  </li>
</ul>
```

```html
<ul class="uk-comment-list">
  <li>
    <article class="uk-comment" tabindex="-1" role="comment">
      <header class="uk-comment-header">
        <div class="display-flex items-center">
          <div class="uk-comment-avatar mr" style="--mr: 2">
            <img
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=John Doe"
              alt=""
            />
          </div>
          <div class="flex-1">
            <div class="uk-comment-title"><a href="#">John Doe</a></div>
            <p class="uk-comment-meta"><a href="#">2 hours ago</a></p>
          </div>
        </div>
      </header>
      <div class="uk-comment-body">
        <p>
          This is a great article! I really enjoyed reading about the history of
          the company and the challenges they faced. The insights provided are
          valuable for anyone interested in the industry.
        </p>
      </div>
    </article>
    <ul>
      <li>
        <article class="uk-comment" tabindex="-1" role="comment">
          <header class="uk-comment-header">
            <div class="display-flex items-center">
              <div class="uk-comment-avatar mr" style="--mr: 2">
                <img
                  src="https://api.dicebear.com/9.x/lorelei/svg?seed=Jane Smith"
                  alt=""
                />
              </div>
              <div class="flex-1">
                <div class="uk-comment-title"><a href="#">Jane Smith</a></div>
                <p class="uk-comment-meta"><a href="#">1 hour ago</a></p>
              </div>
            </div>
          </header>
          <div class="uk-comment-body">
            <p>
              I agree, this was a really insightful article. The historical
              context provided a great foundation for understanding the current
              challenges the company is facing.
            </p>
          </div>
        </article>
      </li>
    </ul>
  </li>
  <li>
    <article class="uk-comment" tabindex="-1" role="comment">
      <header class="uk-comment-header">
        <div class="display-flex items-center">
          <div class="uk-comment-avatar mr" style="--mr: 2">
            <img
              src="https://api.dicebear.com/9.x/lorelei/svg?seed=Sarah Johnson"
              alt=""
            />
          </div>
          <div class="flex-1">
            <div class="uk-comment-title"><a href="#">Sarah Johnson</a></div>
            <p class="uk-comment-meta"><a href="#">4 days ago</a></p>
          </div>
        </div>
      </header>
      <div class="uk-comment-body">
        <p>
          I have a few thoughts on this article. While the historical context
          was interesting, I felt the analysis of the current challenges could
          have been more in-depth. It would have been helpful to see some
          concrete recommendations or solutions proposed.
        </p>
      </div>
    </article>
    <ul>
      <li>
        <article class="uk-comment" tabindex="-1" role="comment">
          <header class="uk-comment-header">
            <div class="display-flex items-center">
              <div class="uk-comment-avatar mr" style="--mr: 2">
                <img
                  src="https://api.dicebear.com/9.x/lorelei/svg?seed=Alice Cooper"
                  alt=""
                />
              </div>
              <div class="flex-1">
                <div class="uk-comment-title"><a href="#">Alice Cooper</a></div>
                <p class="uk-comment-meta"><a href="#">1 hour ago</a></p>
              </div>
            </div>
          </header>
          <div class="uk-comment-body">
            <p>
              I agree, this is a really useful feature. I can see it being great
              for managing discussions on my blog.
            </p>
          </div>
        </article>
      </li>
      <li>
        <article class="uk-comment" tabindex="-1" role="comment">
          <header class="uk-comment-header">
            <div class="display-flex items-center">
              <div class="uk-comment-avatar mr" style="--mr: 2">
                <img
                  src="https://api.dicebear.com/9.x/lorelei/svg?seed=Sarah Miller"
                  alt=""
                />
              </div>
              <div class="flex-1">
                <div class="uk-comment-title"><a href="#">Sarah Miller</a></div>
                <p class="uk-comment-meta"><a href="#">30 minutes ago</a></p>
              </div>
            </div>
          </header>
          <div class="uk-comment-body">
            <p>
              I'm really excited to try this out. It looks like it will make
              managing comments a breeze.
            </p>
          </div>
        </article>
      </li>
    </ul>
  </li>
</ul>
```

## Accessibility

Set the appropriate WAI-ARIA roles, states and properties to the Comment component.

- Set the `comment` role for each _comment_.

```html
<ul class="uk-comment-list">
  <li>
    <article class="uk-comment" role="comment">...</article>
    <ul>
      <li>
        <article class="uk-comment" role="comment">...</article>
      </li>
    </ul>
  </li>
</ul>
```