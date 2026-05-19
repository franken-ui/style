# Image

The Image component emulates browser features of the `<img>` element, but for background images. This includes `loading="lazy"`, `srcset` and `sizes` attributes as well as the `<source>` element from the `<picture>` element. This speeds up page loading times and decreases traffic by only loading background images as they enter the viewport. Optimized background images are served for different device widths and high-resolution (retina) displays.

## Usage

To apply this component, add the `data-uk-img` and the `data-src` attribute containing the image path for the background image to a `div` or any other element. By default, the background image will be lazy-loaded as it enters the viewport when scrolling.

```html
<div data-src="" data-uk-img>…</div>
```

```html
<div
  class="display-flex h items-center justify-center bg-cover"
  style="--h: 80"
  data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
  data-uk-img
>
  <h1 class="uk-h1 color" style="--color: var(--color-white)">
    Background Image
  </h1>
</div>
```

## Eager loading

To avoid lazy loading background images for the first visible viewport but still use other features of this component, add the `loading="eager"` parameter to the `data-uk-img` attribute.

```html
<div data-src="" data-uk-img="loading: eager">…</div>
```

```html
<div
  class="display-flex h items-center justify-center bg-cover"
  style="--h: 80"
  data-src="https://images.unsplash.com/photo-1495321308589-43affb814eee?fit=crop&w=650&h=433&q=80"
  data-uk-img="loading: eager"
>
  <h1 class="uk-h1">Background Image</h1>
</div>
```

## Srcset

To use the `srcset` feature for background images, just add the `data-srcset` attribute. Optionally, add the `sizes` attribute but without a prefix.

```html
<div data-src="" data-srcset="" sizes="" data-uk-img>…</div>
```

```html
<div
  class="display-flex h items-center justify-center bg-cover"
  style="--h: 80"
  data-src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?fit=crop&w=650&h=433&q=80"
  data-srcset="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?fit=crop&w=1300&h=866&q=80 1300w"
  sizes="(min-width: 650px) 650px, 100vw"
  uk-img
>
  <h1 class="uk-h1">Background Image</h1>
</div>
```

## Picture sources

To use different image sources just like the `<picture>` element that contains `<source>` elements does, add the `source` attribute with `srcset`, `media` and `type` parameters.

```html
<div sources="srcset: ____; media: ____" data-src="" data-uk-img>…</div>

<div sources="srcset: ____; type: ____" data-src="" data-uk-img>…</div>
```

```html
<div
  class="display-flex h items-center justify-center bg-cover"
  style="--h: 80"
  data-src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?fit=crop&w=650&h=433&q=80"
  data-srcset="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?fit=crop&w=1300&h=866&q=80 1300w"
  sizes="(min-width: 650px) 650px, 100vw"
  uk-img
>
  <h1 class="uk-h1">Background Image</h1>
</div>
```

It's possible to offer multiple image sources and also multiple resolutions for each source using `srcset`.

```html
<div
  sources="srcset: ____; media: ____"
  data-src=""
  data-srcset=""
  sizes=""
  data-uk-img
>
  …
</div>
```

```html
<div
  class="display-flex h items-center justify-center bg-cover"
  style="--h: 80"
  sources="srcset: https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?fit=crop&w=650&h=433&q=80 650w,
                      https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?fit=crop&w=1300&h=866&q=80 1300w;
              media: (min-width: 1200px)"
  data-src="https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?fit=crop&w=650&h=433&q=80"
  data-srcset="https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?fit=crop&w=650&h=433&q=80 650w,
                  https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?fit=crop&w=1300&h=866&q=80 1300w"
  sizes="(min-width: 650px) 650px, 100vw"
  data-uk-img
>
  <h1 class="uk-h1 color" style="--color: var(--color-white)">
    Background Image
  </h1>
</div>
```

Multiple sources can be defined using JSON syntax.

```json
[
  {
    "srcset": "____",
    "media": "____"
  },
  {
    "srcset": "____",
    "type": "____"
  }
]
```

The JSON needs to be HTML encoded.

```html
<div
  sources='[{"type": "____",
                "srcset": "____"
               },
               {"type": "____",
                "srcset": "____"
               }]'
  data-src=""
  data-uk-img
>
  …
</div>
```

This example offers alternative image formats like _WebP_ and _AVIF_.

```html
<div
  class="display-flex h items-center justify-center bg-cover"
  style="--h: 80"
  sources='[{"srcset": "/images/image-type.avif",
                "type": "image\/avif"
                },
                {"srcset": "/images/image-type.webp",
                "type": "image\/webp"
                }]'
  data-src="/images/image-type.jpg"
  data-uk-img
>
  <h1 class="uk-h1">Background Image</h1>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option    | Value  | Default | Description                                                                                                                                                                             |
| --------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dataSrc` | String |         | The image's `src` attribute.                                                                                                                                                            |
| `sources` | String |         | The image's sources. This option is used for background images only. The source attributes are passed in `key: value;` format for a single source. For multiple sources in JSON format. |
| `loading` | String | `lazy`  | Enable lazy/eager loading. Set to `eager` for images within the first visible viewport.                                                                                                 |
| `margin`  | String | `50%`   | The margin is added to the viewport's bounding box, before computing an intersection with the image. The value must be in px or % units.                                                |
| `target`  | String | `false` | A list of targets whose bounding boxes will be used to compute an intersection with the image. Defaults to the image itself.                                                            |

`dataSrc` is the _Primary_ option, and its key may be omitted if it's the only option in the attribute value.

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
UIkit.img(element, options);
```

<span class="uk-label uk-label-primary">Note</span> The Image component keeps
records of already loaded images in the Session Storage. That's how it tries to
determine if an image is already cached. A cached image is loaded immediately,
without the lazy loading mechanism to prevent any rendering flashes. Prior to
testing the Image component, make sure to clear these records from your
browser's Session Storage.