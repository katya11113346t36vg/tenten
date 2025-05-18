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

const TOKEN = "5244437848:AAFWJgPukZphUSzGiPL5RDlYPW1GnL299B4";
const CHAT_ID ="896711938";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const formBtn = document.getElementById('form-btn');

document.getElementById('form')?.addEventListener('submit', function (e) {
	e.preventDefault();

	let massage = `<b>Новая заявка</b> \n\n`;
	massage += `<b>Номер телефона: </b> ${ this.phone.value  } \n`;
	massage += `<b>Имя: </b> ${ this.name.value  }\n`;
	massage += `<b>Пожелания: </b> ${ this.text.value  }\n`;

	axios.post(URL_API, {
		chat_id : CHAT_ID,
		parse_mode: 'html',
		text: massage
	})
		.then((res) =>{
			formBtn.innerText = "Отправленно";
			formBtn.classList.remove('button_primary');
			formBtn.classList.add('button_access');
		})

		.catch((err) =>{
			console.log(err);
		})

		.finally(() =>{
			this.name.value = "";
			this.phone.value = "";
			this.text.value = "";
		})
})