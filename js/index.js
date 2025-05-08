const burgerMenu = document.querySelector('.burger-menu')
const burger = document.querySelector('.burger')
document.querySelectorAll('.accordion-header').forEach(header => {
	header.addEventListener('click', () => {
		const item = header.parentElement
		item.classList.toggle('active')
	})
})

burger.addEventListener('click', () => {
	burgerMenu.classList.toggle('active')
	burger.classList.toggle('active')
})
