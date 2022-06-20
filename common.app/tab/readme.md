# tab component

Use's for tab logic.

## Examples

```pug
ul.tab-controls
	li: a.is-active(href='#pane-1', data-toggle='tab') Pane 1
	li: a(href='#pane-2', data-toggle='tab') Pane 2
	li: a(href='#pane-3', data-toggle='tab') Pane 3

.tab-content
	#pane-1.tab-pane.is-active Tab content 1
	#pane-2.tab-pane Tab content 2
	#pane-3.tab-pane Tab content 3
```

## Recommendations

1. Always add `.is-active` to `data-toggle` and `tab-pane`. If you cannot add this
   class, script automatic add this class for first **control**.
2. Use only seconds in CSS transition.
3. Classes `.tab-controls` and `.tab-content` uses in js.

## API

- openTab(selector)

## Using with bootstrap

If the website uses bootstrap, the tab script will **not be executed**.
Also, you need rename active class in tab styles.
