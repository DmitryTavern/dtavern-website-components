/**
 *	Modal component initial
 *	-----------------------
 **/

const ERR_MODAL_NULL = '[core/modal]: Modal not found. Id: '
const ERR_MODAL_TARGET = '[core/modal]: data-target not found. Element: '
const ERR_MODAL_FAIL = '[core/modal]: Something went wrong'

export const modalClass = 'modal'
export const modalToggleSelector = '[data-toggle="modal"]'
export const modalDismissSelector = '[data-dismiss]'
export const modalActiveClass = 'is-active'

// Actions
export function openModal(id) {
	const $el = document.getElementById(id)
	if (!$el) return console.error(ERR_MODAL_NULL, id)
	$el.classList.add(modalActiveClass)
}

export function closeModal(id) {
	const $el = document.getElementById(id)
	if (!$el) return console.error(ERR_MODAL_NULL, id)
	$el.classList.remove(modalActiveClass)
}

// Events and Handlers
export function modalClickHandler(event) {
	const $modal = this
	if (event.target !== $modal) return
	const id = $modal.getAttribute('id')
	closeModal(id)
}

export function modalButtonHandler() {
	const $modal = this

	let modalId = $modal.getAttribute('data-target')

	if (modalId) {
		openModal(modalId)
	} else {
		console.error(ERR_MODAL_TARGET, this)
	}
}

export function modalDisimisHandler() {
	const $dismissButton = this

	let $modal = $dismissButton.closest('.' + modalClass)

	if ($modal) {
		const id = $modal.getAttribute('id')
		closeModal(id)
	} else {
		console.error(ERR_MODAL_FAIL)
	}
}

document.delegateEventListener('click', '.' + modalClass, modalClickHandler)
document.delegateEventListener('click', modalToggleSelector, modalButtonHandler)
document.delegateEventListener(
	'click',
	modalDismissSelector,
	modalDisimisHandler
)
