gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles('.js-circle-strom, .js-circle-gas, .js-overwrap, .js-heart, .js-fire, .js-rays, .js-strom-title, .js-gas-title, .js-panel, .js-bg, .js-plus, .js-circles, .js-text-top, .js-text-bottom, .i-circle__bg');

window.onload = () => {
	const strom = document.querySelector('.js-circle-strom');
	const gas = document.querySelector('.js-circle-gas');
	const switchers = document.querySelectorAll('.js-switcher-btn');
	const buttons = document.querySelectorAll('.js-panel-btn');
	switchers.forEach(switcher => {
		switcher.addEventListener('click', function () {
			switchers.forEach(item => { item.classList.remove('is-active')});
			buttons.forEach(item => { item.classList.remove('is-active')});
			this.classList.add('is-active');
			const index = this.dataset.index;
			document.querySelector(`.js-panel-btn[data-index="${index}"]`).classList.add('is-active');
		})
	})
	ScrollTrigger.matchMedia({
		'(min-width: 960px)': () => {
			gsap.timeline({
				defaults: { willChange: "transform" },
				ease: 'Power1.easeInOut',
				scrollTrigger: {
					trigger: '.js-container',
					pin: false,
					start: 'top center',
					end: 'top top',
					scrub: true,
					onEnter: () => {
						strom.classList.remove('is-active');
						gas.classList.remove('is-active');
					},
					onEnterBack: () => {
						strom.classList.add('is-active');
						gas.classList.add('is-active');
					},
					onLeave: () => {
						strom.classList.add('is-active');
						gas.classList.add('is-active');
					},
					onLeaveBack: () => {
						strom.classList.remove('is-active');
						gas.classList.remove('is-active');
					}
				}
			})
				.fromTo('.i-circle__bg', {scale: 2}, {scale: 1}, 0)
				.fromTo('.js-strom-wrapper', {x: -200}, {x: 0}, 0)
				.fromTo('.js-gas-wrapper', {x: 200}, {x: 0}, 0)
				// .to('.js-circles', {scale: 1, opacity: 0, duration: 0.3}, 0)

			gsap.timeline({
				defaults: { willChange: "transform, opacity" },
				ease: 'Power1.easeInOut',
				scrollTrigger: {
					trigger: '.js-container',
					pin: true,
					start: 'top top',
					end: '+=800',
					scrub: true
				}
			})
				.to('.js-plus', {opacity: 0}, 0)
				.to('.js-circle-strom', {x: 37, duration: 0.5}, 0)
				.to('.js-circle-gas', {x: -37, duration: 0.5}, 0)
				// .to('.js-circles', {scale: 1, opacity: 0, duration: 0.3}, 0)
				.to('.js-fire', {maskImage: 'linear-gradient(90deg, transparent 30%, rgba(0, 0, 0, 1) 60%)', duration: 0.2}, 0)
				.to('.js-rays', {maskImage: 'linear-gradient(-90deg, transparent 30%, rgba(0, 0, 0, 1) 60%)', duration: 0.2}, 0)
				// .to('.js-bg', {opacity: 1, duration: 0.3}, 0.3)
				.to('.js-overwrap', {x: 0, duration: 0.25}, 0.25)
				.to('.js-strom-title', {x: -20}, 0.3)
				.to('.js-gas-title', {x: 10}, 0.3)
				.to('.js-text-top', {opacity: 0, duration: 0.1}, 0.6)
				.to('.js-text-bottom', {opacity: 1, duration: 0.1}, 0.6)
				.to('.js-heart', {opacity: 1, scale: 1}, 0.6)
				.to('.js-panel', {opacity: 1, y: 0}, 0.6)
		}
	})
}
