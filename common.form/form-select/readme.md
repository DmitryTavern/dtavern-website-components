# .form-select Component

Use's for add form select.

## Examples

```pug
-
	var formSelect = {
	  id: "form-select-id",
	  name: 'formSelect',
		placeholder: 'Select option',
	  options: [
	    { name: 'Option 1', value: '1' },
	    { name: 'Option 2', value: '2' },
	    { name: 'Option 3', value: '3' },
	  ]
	}

+form-select(formSelect)
```

## API

- changeFormSelectValue($select, selectValue)
