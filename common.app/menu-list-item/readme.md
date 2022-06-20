# menu-list-item component

Use's for add menu item styles.

## Examples

```pug
+menu-list
	+menu-list-item
		| Item 1
	+menu-list-item({ type: 'button' })
		| Item 2
	+menu-list-item({ type: 'link', href: '#' })
		| Item 3
```

## Recommendations

1. Use it with `+menu-list` component.
2. Set own styles
