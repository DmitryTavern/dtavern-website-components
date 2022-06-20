/**
 *	Form component initial
 *	----------------------
 *	Need for handle form submit event use axios.
 **/

const ERR_FORM_AXIOS_NULL = '[core/form]: "axios" is not defined'

export function formSubmitHandler(event) {
	event.preventDefault()

	if (!axios) return console.error(ERR_FORM_AXIOS_NULL)

	const $form = this
	const formUrl = $form.action
	const formData = new FormData($form)

	axios
		.post(formUrl, formData)
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.error(error)
		})
}

export function formComponentInit() {
	const $forms = document.getElementsByTagName('form')

	for (const $form of $forms)
		$form.addEventListener('submit', formSubmitHandler)
}

document.addEventListener('DOMContentLoaded', formComponentInit)
