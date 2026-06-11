# Progress

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

## Usage

To apply this component, add the `.uk-progress` class to a `<progress>` element.

```html
<progress class="uk-progress" value="" max=""></progress>
```

```html
<progress
  id="js-progressbar"
  class="uk-progress"
  value="10"
  max="100"
></progress>

<script>
  document.addEventListener("uikit:init", () => {
    var bar = document.getElementById("js-progressbar");

    var animate = setInterval(function () {
      bar.value += 10;

      if (bar.value >= bar.max) {
        clearInterval(animate);
      }
    }, 1000);
  });
</script>
```