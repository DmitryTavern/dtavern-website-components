/**
 *	Collapse component initial
 *	--------------------------
 **/

export const collapseClass = 'collapse'
export const collapseWrapperClass = 'collapse-wrapper'
export const collapseToggleSelector = '[data-toggle="collapse"]'
export const collapseShowClass = 'is-showed'

// Actions
export function showCollapse(selector) {
	const $collapses = document.querySelectorAll(selector)

	for (const $collapse of $collapses) {
		if (!$collapse.classList.contains(collapseShowClass)) {
			const $wrapper = $collapse.querySelector('.collapse-wrapper')
			$collapse.style.height = $wrapper.clientHeight + 'px'
			$collapse.classList.add(collapseShowClass)
		}
	}
}

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

export function hideCollapse(selector) {
	const $collapses = document.querySelectorAll(selector)

	for (const $collapse of $collapses) {
		if ($collapse.classList.contains(collapseShowClass)) {
			$collapse.style.height = 0
			$collapse.classList.remove(collapseShowClass)
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

	if (window.bootstrap && window.bootstrap.Collapse) {
		for (const $collapse of $collapses)
			$collapse.classList.remove(collapseShowClass)
		return
	}

	for (const $collapse of $collapses) {
		if ($collapse.classList.contains(collapseShowClass)) {
			const $wrapper = $collapse.querySelector('.' + collapseWrapperClass)
			$collapse.style.height = $wrapper.clientHeight + 'px'
		} else {
			$collapse.style.height = 0
		}
	}

	for (const $collapseButton of $collapseButtons)
		$collapseButton.addEventListener('click', collapseButtonClickHandler)
}

document.addEventListener('DOMContentLoaded', collapseComponentInit)
