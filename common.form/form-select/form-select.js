import {
	dropdownClass,
	closeDropdown,
} from '../../common.app/dropdown/dropdown'

/**
 *	Form select initial
 *	-------------------
 **/

const ERR_SELECT_GROUP_NULL =
	'[form/select]: Select group not found. Skip. Select:'

export const formSelectClass = 'form-select'
export const formSelectGroupClass = 'form-group'
export const formSelectControlClass = 'form-control'
export const formSelectWrapperClass = 'form-select-wrapper'
export const formSelectErrorClass = 'is-error'
export const formSelectActiveClass = 'is-active'

function _checkFormSelectParent($select) {
	if (
		!$select ||
		!$select.parentElement.classList.contains(formSelectGroupClass)
	) {
		console.error(ERR_SELECT_GROUP_NULL, $select)
		return false
	}
	return true
}

// Actions
export function changeFormSelectValue($select, value) {
	const $parent = $select.closest('.' + formSelectWrapperClass)
	const $menuItems = $parent.querySelectorAll('[data-value]')
	const $menuActiveItem = $parent.querySelector('[data-value="' + value + '"]')
	const dropdownId = $parent
		.querySelector('.' + dropdownClass)
		.getAttribute('id')

	for (const $menuItem of $menuItems)
		$menuItem.classList.remove(formSelectActiveClass)

	$menuActiveItem.classList.add(formSelectActiveClass)

	$select.value = value

	$select.dispatchEvent(new Event('change'))

	closeDropdown('#' + dropdownId)
}

// Events and Handlers
export function formSelectClickHandler() {
	const $parent = this
	$parent.classList.remove(formSelectErrorClass)
}

export function formSelectChangeHandler() {
	const $select = this

	if (!_checkFormSelectParent($select)) return

	const $parent = $select.parentElement
	const $selectFront = $parent.querySelector('.' + formSelectControlClass)
	let frontText = 'Empty selector'

	if ($select.value) {
		$parent.classList.add(formSelectActiveClass)
		frontText = $select.querySelector(
			`option[value="${$select.value}"]`
		).innerHTML
	}

	if (!$select.value) {
		$parent.classList.remove(formSelectActiveClass)
		frontText = $select.querySelector('option[disabled]').innerHTML
	}

	$selectFront.innerHTML = frontText
}

export function formSelectItemClickHandler() {
	const $menuItem = this
	const $select = $menuItem
		.closest('.' + formSelectWrapperClass)
		.querySelector('.' + formSelectClass)

	const value = $menuItem.getAttribute('data-value')

	changeFormSelectValue($select, value)
}

export function formSelectComponentInit() {
	const $selects = document.getElementsByClassName(formSelectClass)
	const $wrappers = document.getElementsByClassName(formSelectWrapperClass)

	// Init select
	for (const $select of $selects) {
		if (!_checkFormSelectParent($select)) continue

		const $parent = $select.parentElement

		$parent.removeEventListener('click', formSelectClickHandler)
		$select.removeEventListener('change', formSelectChangeHandler)

		$parent.addEventListener('click', formSelectClickHandler)
		$select.addEventListener('change', formSelectChangeHandler)

		formSelectChangeHandler.call($select)
	}

	// Init menu item events
	for (const $wrapper of $wrappers) {
		const $menuItems = $wrapper.querySelectorAll('[data-value]')

		for (const $menuItem of $menuItems) {
			$menuItem.removeEventListener('click', formSelectItemClickHandler)
			$menuItem.addEventListener('click', formSelectItemClickHandler)
		}
	}
}

document.addEventListener('DOMContentLoaded', formSelectComponentInit)
