const circle = document.querySelector('.js-circle');
const section = document.querySelector('.js-i-section');
const gasContent = document.querySelector('.js-gas-content');
let directionTop = false
let lastScroll = 0;

const setClasses = () => {
	let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
	if (currentScroll > 0 && lastScroll <= currentScroll){
		lastScroll = currentScroll;
		directionTop = false;
	} else {
		lastScroll = currentScroll;
		directionTop = true;
	}

	if (section.getBoundingClientRect().top - window.innerHeight < 0) {
		section.classList.add('is-active');
	} else {
		section.classList.remove('is-active');
	}

	if (gasContent.getBoundingClientRect().top - window.innerHeight/2 < 0) {
		circle.classList.add('is-gas');
		section.classList.add('theme-changed');
	} else if (directionTop) {
		circle.classList.remove('is-gas');
		section.classList.remove('theme-changed');
	}
}

window.onload = () => {
	setClasses();
	window.addEventListener('scroll', () => {
		setClasses()
	})
}
