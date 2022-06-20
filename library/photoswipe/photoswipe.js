/**
 *	Photoswipe component initial
 *	----------------------------
 **/

const ERR_PHOTOSWIPE_NULL =
	'[core/photoswipe]: "PhotoSwipeLightbox" module not found'
const ERR_PHOTOSWIPE_MODULE_NULL =
	'[core/photoswipe]: "PhotoSwipe" module not found'

export const photoswipeToggle = '[data-toggle="gallery"]'

export function photoswipeComponentInit() {
	if (!PhotoSwipeLightbox) return console.error(ERR_PHOTOSWIPE_NULL)
	if (!PhotoSwipe) return console.error(ERR_PHOTOSWIPE_MODULE_NULL)

	const lightbox = new PhotoSwipeLightbox({
		gallery: photoswipeToggle,
		children: 'a',
		pswpModule: PhotoSwipe,
	})

	lightbox.init()
}

document.addEventListener('DOMContentLoaded', photoswipeComponentInit)
