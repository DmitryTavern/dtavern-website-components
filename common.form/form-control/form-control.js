/**
 *	Form control component initial
 *	------------------------------
 *	Core component for input.
 * 	If .form-control contains in .form-group,
 * 	all class statuses will be added to .form-group
 **/

const ERR_FORM_CONTROL_TARGET_NULL = '[core/form-control]: $target is null'

export const formControlActiveClass = 'is-active'
export const formControlFocusClass = 'is-focused'
export const formControlErrorClass = 'is-error'

export const formControlClass = 'form-control'
export const formControlParentClass = 'form-group'
export const formTextareaSelector = 'textarea.form-control'

// Actions
function _getFormControlTarget($target) {
	if (!$target) return console.error(ERR_FORM_CONTROL_TARGET_NULL)

	const $parent = $target.parentElement

	if ($parent && $parent.classList.contains(formControlParentClass))
		$target = $parent

	return $target
}

export function addClassToFormControl($target, className) {
	_getFormControlTarget($target).classList.add(className)
}

export function removeClassToFormControl($target, className) {
	_getFormControlTarget($target).classList.remove(className)
}

// Events and Handlers
export function formControlInputHandler() {
	const $formControl = this

	if ($formControl.value.length <= 0) {
		removeClassToFormControl($formControl, formControlActiveClass)
	}

	if ($formControl.value.length > 0) {
		addClassToFormControl($formControl, formControlActiveClass)
	}
}

export function formControlFocusHandler() {
	const $formControl = this

	addClassToFormControl($formControl, formControlFocusClass)
	removeClassToFormControl($formControl, formControlErrorClass)
}

export function formControlBlurHandler() {
	const $formControl = this

	removeClassToFormControl($formControl, formControlFocusClass)
}

export function formTextareaInputHandler() {
	const $textarea = this

	$textarea.style.height = 'auto'
	$textarea.style.height = $textarea.scrollHeight + 'px'
}

export function formControlComponentInit() {
	const $formControls = document.getElementsByClassName(formControlClass)
	const $textareaControls = document.querySelectorAll(formTextareaSelector)

	for (const $formControl of $formControls) {
		$formControl.addEventListener('input', formControlInputHandler)
		$formControl.addEventListener('focus', formControlFocusHandler)
		$formControl.addEventListener('blur', formControlBlurHandler)
	}

	// Auto height in textarea
	for (const $textarea of $textareaControls) {
		let height = $textarea.scrollHeight || 'inherit'

		if (height <= 0) height = 'inherit'
		if (height > 0) height += 'px'

		$textarea.setAttribute('style', `height:${height};overflow-y:hidden;`)
		$textarea.addEventListener('input', formTextareaInputHandler, false)
	}
}

document.addEventListener('DOMContentLoaded', formControlComponentInit)
