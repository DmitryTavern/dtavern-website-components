/**
 *	Form radio component initial
 *	----------------------------
 **/

export const formRadioClass = 'form-radio'
export const formRadioErrorClass = 'is-error'
export const formRadioCheckedClass = 'is-checked'

export function formRadioChangeHandler() {
	const $radio = this
	const $wrapper = this.parentElement

	const name = $radio.getAttribute('name')
	const $radios = document.querySelectorAll('[name="' + name + '"]')

	for (const $radio of $radios) {
		if ($radio !== this) {
			$radio.checked = false
			$radio.parentElement.classList.remove(formRadioCheckedClass)
		}
	}

	$wrapper.classList.remove(formRadioErrorClass)

	if ($radio.checked) {
		$wrapper.classList.add(formRadioCheckedClass)
	}
}

export function formRadioComponentInit() {
	const $formRadios = document.getElementsByClassName(formRadioClass)

	for (const $radio of $formRadios) {
		if ($radio.checked) formRadioChangeHandler.call($radio)

		$radio.removeEventListener('change', formRadioChangeHandler)
		$radio.addEventListener('change', formRadioChangeHandler)
	}
}

document.addEventListener('DOMContentLoaded', formRadioComponentInit)
