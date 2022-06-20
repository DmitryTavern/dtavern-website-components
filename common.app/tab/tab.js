/**
 *	Tab component initial
 *	---------------------
 **/

const ERR_CONTROLS_NULL = '[core/tab]: Tab control wrapper not found'
const ERR_CONTROL_NULL = '[core/tab]: Tab control not found. Selector: '
const ERR_CONTENT_NULL = '[core/tab]: Tab pane wrapper not found'
const ERR_TAB_NULL = '[core/tab]: Tab id not found. Tab control: '
const WARN_NOT_ACTIVE = "[core/tab]: Don't use tabs without default active tab."

export const tabContentClass = 'tab-content'
export const tabControlWrapperClass = 'tab-controls'
export const tabControlSelector = '[data-toggle="tab"]'
export const tabActiveClass = 'is-active'

function _getTabControlsFromTabControl($tabControl) {
	const $controls = $tabControl.closest('.' + tabControlWrapperClass)
	if (!$controls) console.error(ERR_CONTROLS_NULL)
	return $controls
}

function _getTargetFromTabControl($tabControl) {
	let id = $tabControl.getAttribute('data-target')
	if (!id) id = $tabControl.getAttribute('href')
	if (!id) console.error(ERR_TAB_NULL, $tabControl)
	return id
}

function _getTabContentFromTabPane($tabPane) {
	const $content = $tabPane.closest('.' + tabContentClass)
	if ($content) return $content
	console.error(ERR_CONTENT_NULL)
}

function _setActiveTabControl(selector) {
	let $control = document.querySelector(
		'[data-toggle="tab"][data-target="' + selector + '"]'
	)

	if (!$control)
		$control = document.querySelector(
			'[data-toggle="tab"][href="' + selector + '"]'
		)

	if (!$control) return console.error(ERR_CONTROL_NULL, selector)

	const $activeControl = _getTabControlsFromTabControl($control).querySelector(
		'.' + tabActiveClass
	)

	if ($activeControl) $activeControl.classList.remove(tabActiveClass)

	$control.classList.add(tabActiveClass)
}

function _setActiveTabPane(selector) {
	const $pane = document.querySelector(selector)

	if (!$pane)
		return console.error('[core/tab]: $pane not found. Selector: ', selector)

	const $activePane = _getTabContentFromTabPane($pane).querySelector(
		'.' + tabActiveClass
	)

	const seconds =
		window.getComputedStyle &&
		parseFloat(window.getComputedStyle($pane).transitionDuration) * 1000

	if ($activePane) $activePane.classList.remove(tabActiveClass)

	setTimeout(() => {
		$pane.classList.add(tabActiveClass)
	}, seconds)
}

// Actions
export function openTab(selector) {
	_setActiveTabControl(selector)
	_setActiveTabPane(selector)
}

// Events and Handlers
export function tabControlClickHandler() {
	const $tabControl = this
	if ($tabControl.classList.contains(tabActiveClass)) return
	const id = _getTargetFromTabControl($tabControl)
	openTab(id)
}

export function tabComponentInit() {
	if (bootstrap && bootstrap.Tab) return

	const $tabControls = document.querySelectorAll(tabControlSelector)

	for (const $tabControl of $tabControls) {
		const $controls = _getTabControlsFromTabControl($tabControl)

		// If group of controls have not active control
		if (!$controls.querySelector('.' + tabActiveClass)) {
			console.warn(WARN_NOT_ACTIVE)
			const $control = $controls.querySelector(tabControlSelector)
			const id = _getTargetFromTabControl($control)
			openTab(id)
		}

		$tabControl.addEventListener('click', tabControlClickHandler)
	}
}

document.addEventListener('DOMContentLoaded', tabComponentInit)
