/**
 *	Navbar component initial
 *	------------------------
 **/

const ERR_NAVBAR_NULL = '[core/navbar]: Navbar not found. Script skipped'

export const navbarClass = 'navbar'
export const navbarWrapperClass = 'navbar-wrapper'
export const navbarMenuBtnClass = 'navbar__menu-btn'
export const navbarMenuCloseBtnClass = 'navbar__close-menu-btn'
export const navbarScrollSelector = 'body'
export const navbarFixedClass = 'is-fixed'
export const navbarActiveClass = 'is-active'
export const lockedScrollClass = 'locked-scroll'
export const navbarMenuOpenedClass = 'is-menu-opened'

// Actions
export function openMenu() {
	document.querySelector(navbarScrollSelector).classList.add(lockedScrollClass)
	document.querySelector('.' + navbarClass).classList.add(navbarMenuOpenedClass)
	document
		.querySelector('.' + navbarMenuBtnClass)
		.classList.add(navbarActiveClass)
}
export function toggleMenu() {
	document
		.querySelector(navbarScrollSelector)
		.classList.toggle(lockedScrollClass)
	document
		.querySelector('.' + navbarClass)
		.classList.toggle(navbarMenuOpenedClass)
	document
		.querySelector('.' + navbarMenuBtnClass)
		.classList.toggle(navbarActiveClass)
}
export function closeMenu() {
	document
		.querySelector(navbarScrollSelector)
		.classList.remove(lockedScrollClass)
	document
		.querySelector('.' + navbarClass)
		.classList.remove(navbarMenuOpenedClass)
	document
		.querySelector('.' + navbarMenuBtnClass)
		.classList.remove(navbarActiveClass)
}

// Events and Handlers
export function navbarComponentInit() {
	const $navbar = document.querySelector('.' + navbarClass)
	const $wrapper = document.querySelector('.' + navbarWrapperClass)
	const $menuButton = document.querySelector('.' + navbarMenuBtnClass)
	const $menuCloses = document.getElementsByClassName(navbarMenuCloseBtnClass)
	let fixedHeight = 0

	if (!($navbar && $wrapper)) return console.error(ERR_NAVBAR_NULL)

	const scroll = () => {
		const { top } = $navbar.getBoundingClientRect()

		if (!$navbar.classList.contains(navbarFixedClass)) {
			fixedHeight = $navbar.clientHeight
			$wrapper.style.height = fixedHeight + 'px'
		}

		if (window.scrollY >= top) {
			$navbar.classList.add(navbarFixedClass)
		}
	}

	for (const $menuClose of $menuCloses)
		$menuClose.addEventListener('click', closeMenu)

	$menuButton.addEventListener('click', toggleMenu)

	document.addEventListener('scroll', scroll)

	scroll()
}

document.addEventListener('DOMContentLoaded', navbarComponentInit)
