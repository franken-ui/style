# Chart

Under the hood, FrankenstyleKit uses [ApexCharts](https://apexcharts.com).

## Usage

The chart has a separate installation. Make sure to follow the instructions properly, and once everything is configured, you can use the `<uk-chart>` markup in your HTML code with a `<script type="application/json"></script>` tag as the options reference.

## Reactivity

By default, the `<uk-chart>` component is not reactive. This is a deliberate design choice, as using [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) can be computationally expensive. As a result, changes to the referenced `<script type="application/json">` tag will not trigger an update.

To enable reactivity, simply add the `reactive` attribute to the `<script data-fn="config" type="application/json" data-reactive>` tag. This will use [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) under the hood to monitor the `<script>` tag for changes.

```html
<uk-chart>
  <script data-fn="config" type="application/json" data-reactive></script>
</uk-chart>
```

## Attributes

| Name                     | Type    | Default  | Description                                                                                                     |
| ------------------------ | ------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `force-prevent-rerender` | Boolean | `false`  | Forcefully prevents component rerendering.                                                                      |
| `cls`                    | String  |          | Allows you to add custom CSS classes, which will be attached to the `<div>` tag.                                |
| `loading`                | Boolean | `false`  | Displays a loading state before the chart is rendered. Useful when chart data is being fetched asynchronously.  |
| `width`                  | String  | `"100%"` | Sets the width of the chart container. Accepts a pixel value or any valid CSS unit (e.g. `"500px"`, `"100%"`).  |
| `height`                 | String  | `"auto"` | Sets the height of the chart container. Accepts a pixel value or any valid CSS unit (e.g. `"400px"`, `"50vh"`). |

## Area Chart

### Smooth

```html
<div class="uk-chart-container max-w-md">
  <div class="p" style="--p: 4">
    <div class="uk-card-title">Area Chart - Smooth</div>
    <div class="uk-text-small mt" style="--mt: 2">January - June 2024</div>
  </div>

  <div class="px" style="--px: 4">
    <uk-chart>
      <script data-fn="config" type="application/json">
        {
          "apexCharts": {
            "series": [
              {
                "name": "Desktops",
                "data": [186, 305, 237, 73, 209, 214]
              }
            ],
            "chart": {
              "type": "area",
              "zoom": {
                "enabled": false
              },
              "toolbar": {
                "show": false
              }
            },
            "dataLabels": {
              "enabled": false
            },
            "stroke": {
              "curve": "smooth",
              "width": 2
            },
            "colors": ["var(--uk-chart-1)"],
            "grid": {
              "row": {
                "colors": []
              },
              "borderColor": "color-mix( in srgb, var(--uk-border) var(--uk-border-o), transparent)"
            },
            "xaxis": {
              "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              "tooltip": {
                "enabled": false
              },
              "labels": {
                "style": {
                  "colors": "var(--uk-muted-f)"
                }
              },
              "axisBorder": {
                "show": false
              },
              "axisTicks": {
                "show": false
              }
            },
            "yaxis": {
              "labels": {
                "show": false
              }
            },
            "tooltip": {
              "title": {
                "show": false
              }
            }
          }
        }
      </script>
    </uk-chart>
  </div>

  <div class="p" style="--p: 4">
    <div
      class="display-flex gap-x items-center font-medium leading-none"
      style="--gap-x: 2"
    >
      Trending up by 5.2% this month
      <uk-icon icon="trending-up"></uk-icon>
    </div>
    <div
      class="color mt leading-none"
      style="--color: var(--uk-muted-f); --mt: 2"
    >
      Showing total visitors for the last 6 months
    </div>
  </div>
</div>
```

### Multiple

```html
<div class="uk-chart-container max-w-md">
  <div class="p" style="--p: 4">
    <div class="uk-card-title">Area Chart - Smooth</div>
    <div class="uk-text-small mt" style="--mt: 2">January - June 2024</div>
  </div>

  <div class="px" style="--px: 4">
    <uk-chart>
      <script data-fn="config" type="application/json">
        {
          "apexCharts": {
            "series": [
              {
                "name": "Desktops",
                "data": [186, 305, 237, 73, 209, 214]
              },
              {
                "name": "Mobile",
                "data": [80, 200, 120, 190, 130, 140]
              }
            ],
            "chart": {
              "type": "area",
              "zoom": {
                "enabled": false
              },
              "toolbar": {
                "show": false
              }
            },
            "dataLabels": {
              "enabled": false
            },
            "stroke": {
              "curve": "smooth",
              "width": 2
            },
            "colors": ["var(--uk-chart-1)", "var(--uk-chart-2)"],
            "grid": {
              "row": {
                "colors": []
              },
              "borderColor": "color-mix( in srgb, var(--uk-border) var(--uk-border-o), transparent)"
            },
            "xaxis": {
              "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              "tooltip": {
                "enabled": false
              },
              "labels": {
                "style": {
                  "colors": "var(--uk-muted-f)"
                }
              },
              "axisBorder": {
                "show": false
              },
              "axisTicks": {
                "show": false
              }
            },
            "yaxis": {
              "labels": {
                "show": false
              }
            },
            "tooltip": {
              "title": {
                "show": false
              }
            },
            "legend": {
              "show": false
            }
          }
        }
      </script>
    </uk-chart>
  </div>

  <div class="p" style="--p: 4">
    <div
      class="display-flex gap-x items-center font-medium leading-none"
      style="--gap-x: 2"
    >
      Trending up by 5.2% this month
      <uk-icon icon="trending-up"></uk-icon>
    </div>
    <div
      class="color mt leading-none"
      style="--color: var(--uk-muted-f); --mt: 2"
    >
      Showing total visitors for the last 6 months
    </div>
  </div>
</div>
```

## Line Chart

### Smooth

```html
<div class="uk-chart-container max-w-md">
  <div class="p" style="--p: 4">
    <div class="uk-card-title">Area Chart - Smooth</div>
    <div class="uk-text-small mt" style="--mt: 2">January - June 2024</div>
  </div>

  <div class="px" style="--px: 4">
    <uk-chart>
      <script data-fn="config" type="application/json">
        {
          "apexCharts": {
            "series": [
              {
                "name": "Desktops",
                "data": [186, 305, 237, 73, 209, 214]
              }
            ],
            "chart": {
              "type": "line",
              "zoom": {
                "enabled": false
              },
              "toolbar": {
                "show": false
              }
            },
            "dataLabels": {
              "enabled": false
            },
            "stroke": {
              "curve": "smooth",
              "width": 2
            },
            "colors": ["var(--uk-chart-1)"],
            "grid": {
              "row": {
                "colors": []
              },
              "borderColor": "color-mix( in srgb, var(--uk-border) var(--uk-border-o), transparent)"
            },
            "xaxis": {
              "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              "tooltip": {
                "enabled": false
              },
              "labels": {
                "style": {
                  "colors": "var(--uk-muted-f)"
                }
              },
              "axisBorder": {
                "show": false
              },
              "axisTicks": {
                "show": false
              }
            },
            "yaxis": {
              "labels": {
                "show": false
              }
            },
            "tooltip": {
              "title": {
                "show": false
              }
            }
          }
        }
      </script>
    </uk-chart>
  </div>

  <div class="p" style="--p: 4">
    <div
      class="display-flex gap-x items-center font-medium leading-none"
      style="--gap-x: 2"
    >
      Trending up by 5.2% this month
      <uk-icon icon="trending-up"></uk-icon>
    </div>
    <div
      class="color mt leading-none"
      style="--color: var(--uk-muted-f); --mt: 2"
    >
      Showing total visitors for the last 6 months
    </div>
  </div>
</div>
```

### Straight

```html
<div class="uk-chart-container max-w-md">
  <div class="p" style="--p: 4">
    <div class="uk-card-title">Area Chart - Smooth</div>
    <div class="uk-text-small mt" style="--mt: 2">January - June 2024</div>
  </div>

  <div class="px" style="--px: 4">
    <uk-chart>
      <script data-fn="config" type="application/json">
        {
          "apexCharts": {
            "series": [
              {
                "name": "Desktops",
                "data": [186, 305, 237, 73, 209, 214]
              }
            ],
            "chart": {
              "type": "line",
              "zoom": {
                "enabled": false
              },
              "toolbar": {
                "show": false
              }
            },
            "dataLabels": {
              "enabled": false
            },
            "stroke": {
              "curve": "straight",
              "width": 2
            },
            "colors": ["var(--uk-chart-1)"],
            "grid": {
              "row": {
                "colors": []
              },
              "borderColor": "color-mix( in srgb, var(--uk-border) var(--uk-border-o), transparent)"
            },
            "xaxis": {
              "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              "tooltip": {
                "enabled": false
              },
              "labels": {
                "style": {
                  "colors": "var(--uk-muted-f)"
                }
              },
              "axisBorder": {
                "show": false
              },
              "axisTicks": {
                "show": false
              }
            },
            "yaxis": {
              "labels": {
                "show": false
              }
            },
            "tooltip": {
              "title": {
                "show": false
              }
            }
          }
        }
      </script>
    </uk-chart>
  </div>

  <div class="p" style="--p: 4">
    <div
      class="display-flex gap-x items-center font-medium leading-none"
      style="--gap-x: 2"
    >
      Trending up by 5.2% this month
      <uk-icon icon="trending-up"></uk-icon>
    </div>
    <div
      class="color mt leading-none"
      style="--color: var(--uk-muted-f); --mt: 2"
    >
      Showing total visitors for the last 6 months
    </div>
  </div>
</div>
```

### Stepline

```html
<div class="uk-chart-container max-w-md">
  <div class="p" style="--p: 4">
    <div class="uk-card-title">Area Chart - Smooth</div>
    <div class="uk-text-small mt" style="--mt: 2">January - June 2024</div>
  </div>

  <div class="px" style="--px: 4">
    <uk-chart>
      <script data-fn="config" type="application/json">
        {
          "apexCharts": {
            "series": [
              {
                "name": "Desktops",
                "data": [186, 305, 237, 73, 209, 214]
              }
            ],
            "chart": {
              "type": "line",
              "zoom": {
                "enabled": false
              },
              "toolbar": {
                "show": false
              }
            },
            "dataLabels": {
              "enabled": false
            },
            "stroke": {
              "curve": "stepline",
              "width": 2
            },
            "colors": ["var(--uk-chart-1)"],
            "grid": {
              "row": {
                "colors": []
              },
              "borderColor": "color-mix( in srgb, var(--uk-border) var(--uk-border-o), transparent)"
            },
            "xaxis": {
              "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              "tooltip": {
                "enabled": false
              },
              "labels": {
                "style": {
                  "colors": "var(--uk-muted-f)"
                }
              },
              "axisBorder": {
                "show": false
              },
              "axisTicks": {
                "show": false
              }
            },
            "yaxis": {
              "labels": {
                "show": false
              }
            },
            "tooltip": {
              "title": {
                "show": false
              }
            },
            "markers": {
              "hover": {
                "sizeOffset": 4
              }
            }
          }
        }
      </script>
    </uk-chart>
  </div>

  <div class="p" style="--p: 4">
    <div
      class="display-flex gap-x items-center font-medium leading-none"
      style="--gap-x: 2"
    >
      Trending up by 5.2% this month
      <uk-icon icon="trending-up"></uk-icon>
    </div>
    <div
      class="color mt leading-none"
      style="--color: var(--uk-muted-f); --mt: 2"
    >
      Showing total visitors for the last 6 months
    </div>
  </div>
</div>
```

### Multiple

```html
<div class="uk-chart-container max-w-md">
  <div class="p" style="--p: 4">
    <div class="uk-card-title">Area Chart - Smooth</div>
    <div class="uk-text-small mt" style="--mt: 2">January - June 2024</div>
  </div>

  <div class="px" style="--px: 4">
    <uk-chart>
      <script data-fn="config" type="application/json">
        {
          "apexCharts": {
            "series": [
              {
                "name": "Desktops",
                "data": [186, 305, 237, 73, 209, 214]
              },
              {
                "name": "Mobile",
                "data": [80, 200, 120, 190, 130, 140]
              }
            ],
            "chart": {
              "type": "line",
              "zoom": {
                "enabled": false
              },
              "toolbar": {
                "show": false
              }
            },
            "dataLabels": {
              "enabled": false
            },
            "stroke": {
              "curve": "smooth",
              "width": 2
            },
            "colors": ["var(--uk-chart-1)", "var(--uk-chart-2)"],
            "grid": {
              "row": {
                "colors": []
              },
              "borderColor": "color-mix( in srgb, var(--uk-border) var(--uk-border-o), transparent)"
            },
            "xaxis": {
              "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              "tooltip": {
                "enabled": false
              },
              "labels": {
                "style": {
                  "colors": "var(--uk-muted-f)"
                }
              },
              "axisBorder": {
                "show": false
              },
              "axisTicks": {
                "show": false
              }
            },
            "yaxis": {
              "labels": {
                "show": false
              }
            },
            "tooltip": {
              "title": {
                "show": false
              },
              "style": {
                "fontFamily": "inherit",
                "fontSize": "var(--uk-global-font-size-small)",
                "lineHeight": "var(--uk-global-line-height-small)"
              }
            },
            "legend": {
              "fontFamily": "inherit",
              "fontSize": "",
              "lineHeight": "",
              "markers": {
                "strokeWidth": 0
              }
            }
          }
        }
      </script>
    </uk-chart>
  </div>

  <div class="p" style="--p: 4">
    <div
      class="display-flex gap-x items-center font-medium leading-none"
      style="--gap-x: 2"
    >
      Trending up by 5.2% this month
      <uk-icon icon="trending-up"></uk-icon>
    </div>
    <div
      class="color mt leading-none"
      style="--color: var(--uk-muted-f); --mt: 2"
    >
      Showing total visitors for the last 6 months
    </div>
  </div>
</div>
```