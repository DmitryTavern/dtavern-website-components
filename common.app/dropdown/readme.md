# dropdown component

Use's for add hide/show dropdown logic.

## Examples

```pug
div(style='position: relative')
	button(data-toggle='dropdown', data-target='#drop') Toggle dropdown

	+dropdown#drop
		| Dropdown content
```

## Recommendations

1. **Always use wrapper with `position: relative`.**
2. `.dropdown` is only hide/show content logic. In dropdown you
   need add div's with **background**, **padding** and other styles.

## API

- openDropdown(selector)
- toggleDropdown(selector)
- closeDropdown(selector)

## Using with bootstrap

If you using bootstrap, you need to use `.dropdown` as a wrapper.
But for this component, it is **not valid**. You need to change
component for bootstrap because this component doesn't support bootstrap.
