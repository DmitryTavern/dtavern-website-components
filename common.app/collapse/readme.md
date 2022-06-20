# collapse component

Use's for add hide/show content logic.

## Examples

```pug
button(data-toggle='collapse', data-target='.collapseTarget') Toggle content

+collapse.collapseTarget: p Content 1
+collapse.is-showed.collapseTarget: p Content 1
+collapse({ show: true }).collapseTarget: p Content 2
```

## Recommendations

1. Don't use `.is-showed` class for a mixin. If your active class changed,
   you need manually find all mixins for changing active class.

## API

- showCollapse(selector) - show collapse
- toggleCollapse(selector) - show/hide collapse
- hideCollapse(selector) - hide collapse

## Using with bootstrap

If the website uses bootstrap, the collapse script will **not be executed**.
Also, all show classes (not from bootstrap) will be removed.

If you use v5, you need fix `data-toggle` to `data-bs-toggle`.
