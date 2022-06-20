/**
 *	Form checkbox component initial
 *	-------------------------------
 **/

export const formCheckboxClass = 'form-checkbox'
export const formCheckboxErrorClass = 'is-error'
export const formCheckboxCheckedClass = 'is-checked'

export function formCheckboxChangeHandler() {
	const $checkbox = this
	const $wrapper = this.parentElement

	$wrapper.classList.remove(formCheckboxErrorClass)

	if ($checkbox.checked) {
		$wrapper.classList.add(formCheckboxCheckedClass)
	} else {
		$wrapper.classList.remove(formCheckboxCheckedClass)
	}
}

export function formCheckboxComponentInit() {
	const $formCheckboxes = document.getElementsByClassName(formCheckboxClass)

	for (const $checkbox of $formCheckboxes) {
		if ($checkbox.checked) formCheckboxChangeHandler.call($checkbox)
		$checkbox.removeEventListener('change', formCheckboxChangeHandler)
		$checkbox.addEventListener('change', formCheckboxChangeHandler)
	}
}

document.addEventListener('DOMContentLoaded', formCheckboxComponentInit)
