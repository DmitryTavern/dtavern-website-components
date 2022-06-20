/**
 *	Collapse component initial
 *	--------------------------
 **/

export const collapseClass = 'collapse'
export const collapseWrapperClass = 'collapse'
export const collapseToggleSelector = '[data-toggle="collapse"]'
export const collapseShowClass = 'is-showed'

// Actions
export function toggleCollapse(selector) {
	const $collapses = document.querySelectorAll(selector)

	for (const $collapse of $collapses) {
		if ($collapse.classList.contains(collapseShowClass)) {
			$collapse.style.height = 0
			$collapse.classList.remove(collapseShowClass)
		} else {
			const $wrapper = $collapse.querySelector('.collapse-wrapper')
			$collapse.style.height = $wrapper.clientHeight + 'px'
			$collapse.classList.add(collapseShowClass)
		}
	}
}

// Events and Handlers
export function collapseButtonClickHandler() {
	const $button = this
	const target = $button.getAttribute('data-target')
	toggleCollapse(target)
}

export function collapseComponentInit() {
	const $collapses = document.getElementsByClassName(collapseClass)
	const $collapseButtons = document.querySelectorAll(collapseToggleSelector)

	for (const $collapse of $collapses) {
		if ($collapse.classList.contains(collapseShowClass)) {
			const $wrapper = $collapse.querySelector('.' + collapseWrapperClass)
			$collapse.style.height = $wrapper.clientHeight + 'px'
		} else {
			$collapse.style.height = 0
		}
	}

	for (const $collapseButton of $collapseButtons) {
		$collapseButton.removeEventListener('click', collapseButtonClickHandler)
		$collapseButton.addEventListener('click', collapseButtonClickHandler)
	}
}

document.addEventListener('DOMContentLoaded', collapseComponentInit)
