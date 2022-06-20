/**
 *	Dropdown component initial
 *	--------------------------
 **/

const ERR_DROPDOWN_NULL = '[core/dropdown]: dropdown by id not found'
const ERR_DROPDOWN_EVENT_NULL = '[core/dropdown]: event is not defined'

export const dropdownClass = 'dropdown'
export const dropdownButtonSelector = '[data-toggle="dropdown"]'
export const dropdownOpenClass = 'is-opened'
export const dropdownFocusClass = 'is-focused'

function _getDropdownInfoById(id) {
	const $dropdown = document.querySelector(id)
	const $buttons = document.querySelectorAll(
		'[data-toggle="dropdown"][data-target="' + id + '"]'
	)
	if (!$dropdown) return console.error(ERR_DROPDOWN_NULL)
	return { $dropdown, $buttons }
}

// Actions
function _actionDropdown(action, dropdownId) {
	const { $dropdown, $buttons } = _getDropdownInfoById(dropdownId)
	for (const $btn of $buttons) $btn.classList[action](dropdownFocusClass)
	$dropdown.classList[action](dropdownOpenClass)
}

export function openDropdown(dropdownId) {
	_actionDropdown('add', dropdownId)
}

export function toggleDropdown(dropdownId) {
	_actionDropdown('toggle', dropdownId)
}

export function closeDropdown(dropdownId) {
	_actionDropdown('remove', dropdownId)
}

// Events and Handlers
export function dropdownClickHandler() {
	const $button = this
	const dropdownId = $button.getAttribute('data-target')
	toggleDropdown(dropdownId)
}

export function dropdownClickOutsideHandler(event) {
	if (!event) return console.error(ERR_DROPDOWN_EVENT_NULL)
	const $dropdowns = document.getElementsByClassName(dropdownClass)
	const $dropdownButtons = document.querySelectorAll(dropdownButtonSelector)
	let isClickInside = false

	for (const $dropdown of $dropdowns) {
		if (isClickInside) break
		isClickInside = $dropdown.contains(event.target)
	}

	for (const $button of $dropdownButtons) {
		if (isClickInside) break
		isClickInside = $button.contains(event.target)
	}

	if (!isClickInside) {
		for (const $dropdown of $dropdowns)
			$dropdown.classList.remove(dropdownOpenClass)

		for (const $button of $dropdownButtons)
			$button.classList.remove(dropdownFocusClass)
	}
}

export function dropdownComponentInit() {
	const $dropdownButtons = document.querySelectorAll(dropdownButtonSelector)

	for (const $dropdownButton of $dropdownButtons) {
		$dropdownButton.removeEventListener('click', dropdownClickHandler)
		$dropdownButton.addEventListener('click', dropdownClickHandler)
	}
}

document.addEventListener('DOMContentLoaded', dropdownComponentInit)
document.addEventListener('click', dropdownClickOutsideHandler)
