/**
 *	Scrollbar component initial
 *	---------------------------
 **/

const ERR_CS_PS_NULL = '[core/scrollbar]: "PerfectScrollbar" is not defined'

export const scrollbarClass = 'custom-scrollbar'

export function scrollbarComponentInit() {
	if (!PerfectScrollbar) return console.error(ERR_CS_PS_NULL)

	const $scrollbars = document.getElementsByClassName(scrollbarClass)

	for (const $scrollbar of $scrollbars) {
		new PerfectScrollbar($scrollbar)
	}
}

document.addEventListener('DOMContentLoaded', scrollbarComponentInit)
