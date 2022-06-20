const navbarFixedClass = 'is-fixed'
const lockedScrollClass = 'locked-scroll'
const navbarMenuOpenedClass = 'is-menu-opened'

export const navbarClass = 'navbar'
export const navbarWrapperClass = 'navbar-wrapper'
export const navbarMenuBtnClass = 'navbar__menu-btn'
export const navbarMenuCloseBtnClass = 'navbar__close-menu-btn'

export function toggleNavbar() {
	document.querySelector('body').classList.toggle(lockedScrollClass)
	document
		.querySelector('.' + navbarClass)
		.classList.toggle(navbarMenuOpenedClass)
}

document.addEventListener('DOMContentLoaded', function () {
	const $navbar = document.querySelector('.' + navbarClass)
	const $wrapper = document.querySelector('.' + navbarWrapperClass)
	const $menuButton = document.querySelector('.' + navbarMenuBtnClass)
	const $menuCloses = document.querySelectorAll('.' + navbarMenuCloseBtnClass)
	let fixedHeight = 0

	if (!($navbar && $wrapper)) {
		console.error('[core/navbar]: Navbar not found. Script skipped')
		return
	}

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
		$menuClose.addEventListener('click', toggleNavbar)

	$menuButton.addEventListener('click', toggleNavbar)

	document.addEventListener('scroll', scroll)

	scroll()
})
