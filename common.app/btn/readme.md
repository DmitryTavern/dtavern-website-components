# btn component

Use's for removing default button styles and adding new styles
for non-button tags.

Also, this component need for initials new button classes.
For example `.btn-primary`, `.btn-secondary`, `.btn-round`, `.btn_size_lg`
and more.

You can use this class for any tag.

I don't use pug mixin for btn.

## Examples

```pug
// For button tag
button.btn(type='button') Button

// For div tag
.btn(role='button') Button Div

// For link
a.btn(href='#') Button Link
```

## Recommendations

### **Button type**

Class: `.btn-${type}` or `.btn_type_${type}`.\
Values: `primary`, `secondary`, `outline`, `fill`, `link` or other.

Use for setting **border**, **background**, **color**, and others.

Aslo, button type can have bem mods. For example `.btn-outline_theme_primary`
or `.btn-fill_theme_secondary`.

```pug
button.btn.btn-primary(type='button') 
	| Button primary
button.btn.btn-outline.btn-outline_theme_primary(type='button')
	| Button outline primary
```

```css
.btn-primary {
	border: 2px solid #000;
	background-color: blue;
	color: white;
}
```

### **Button size**

Class: `.btn-${value}` or `.btn_size_${value}`\
Values can be: `sm`, `lg`, `xl` or other.

Use for setting **padding**, **border-radius**, **border-size**,
**font-size**, and others.

```pug
button.btn.btn-sm(type='button') Button
button.btn.btn-lg(type='button') Button
```

```css
.btn-lg {
	padding: 12px 16px;
	border-radius: 8px;
}
```

### **Button theme**

Class: `.btn-theme-${value}` or `.btn_theme_${value}`.\
Values: `light`, `dark` or other.

Use for setting button for different themes. But I recomend you use `prefers-color-scheme`.

```css
.btn-theme-light {
	background-color: #000;
}

.btn-theme-dark {
	background-color: #fff;
}
```

## Using with bootstrap

If you use botstrap, check `:focus`, `:hover`, `disabled` classes.
For setting sizes and styles use button `type`, `size`, and `theme` classes.
