# Video

The Video component offers two advanced functions for videos. First, it allows you to pause a video whenever it's hidden with CSS and resume playing once it becomes visible again. In addition, the video can pause when it's outside the viewport and start playing when entering it.

Secondly, it allows you to mute YouTube and Vimeo videos, which is often needed if they are used as the background of a section.

For example, the [Slideshow](/docs/latest/kit/slideshow#videos), [Lightbox](/docs/latest/kit/lightbox#content-sources) and [Cover](/docs/latest/kit/cover#video) components inherit and make use of both functions.

## Usage

To apply this component, add the `data-uk-video` attribute to a `<video>` element. The video will be paused whenever it's hidden with CSS and resume once it becomes visible again.

```html
<video src="" width="" height="" data-uk-video></video>
```

```html
<button
  class="uk-margin uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: +"
>
  Toggle HTML5 Video
</button>

<video
  class="mt"
  style="--mt: 4"
  src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
  width="1920"
  height="1080"
  controls
  playsinline
  hidden
  data-uk-video
></video>
```

## Autoplay

There are two autoplay options to play the video. Just add the `autoplay` option to the `data-uk-video` attribute and apply one of these values.

| Values   | Description                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------- |
| `inview` | Play video when it enters the viewport and pause it again when it leaves the viewport.         |
| `hover`  | Play video when the mouse hovers the video and pause it again when the mouse leaves the hover. |

```html
<video src="" width="" height="" data-uk-video="autoplay: inview"></video>
<video src="" width="" height="" data-uk-video="autoplay: hover"></video>
```

```html
<div
  class="display-grid grid-cols gap md:grid-cols"
  style="--grid-cols: 1; --gap: 4; --md-grid-cols: 2"
>
  <div>
    <video
      src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
      width="1800"
      height="1200"
      loop
      muted
      playsinline
      data-uk-video="autoplay: inview"
    ></video>
  </div>
  <div>
    <video
      src="https://yootheme.com/site/images/media/yootheme-pro.mp4"
      width="1800"
      height="1200"
      loop
      muted
      playsinline
      data-uk-video="autoplay: hover"
    ></video>
  </div>
</div>
```

## Automute YouTube or Vimeo

To mute YouTube or Vimeo videos by default, add the `data-uk-video="automute: true"` attribute to the `<iframe>` element.

```html
<iframe src="" width="" height="" data-uk-video="automute: true"></iframe>
```

```html
<button
  class="uk-margin-bottom uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: +"
>
  Toggle YouTube Video
</button>

<iframe
  class="mt"
  style="--mt: 4"
  src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
  width="1920"
  height="1080"
  allowfullscreen
  data-uk-responsive
  data-uk-video="automute: true"
></iframe>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option     | Value           | Default | Description                                                                                                                                                                       |
| ---------- | --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoplay` | Boolean, String | `true`  | The video automatically plays/pauses as it's visible/hidden on the page. Additionally, the video can play when its in the viewport or hovered with the mouse (`inview`, `hover`). |
| `automute` | Boolean         | `false` | Automatically mute YouTube or Vimeo videos.                                                                                                                                       |

`autoplay` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
UIkit.video(element, options);
```