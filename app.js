gsap.registerPlugin(ScrollTrigger);
const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const isMacOS = /(Mac)/i.test(navigator.platform);
const isAndroid = /(android)/i.test(navigator.userAgent);
const isIpad = /iPad|iPhone|iPod/.test(navigator.platform);
console.log('isChrome ', isChrome);
console.log('isMacOS ', isMacOS);
console.log('isAndroid ', isAndroid);
console.log('isIpad ', isIpad);

if (isChrome && isMacOS) {
	document.querySelector('.js-circles').innerHTML = '';
}

ScrollTrigger.saveStyles('.js-circle-strom, .js-circle-gas, .js-overwrap, .js-heart, .js-fire, .js-rays, .js-strom-title, .js-gas-title, .js-panel, .js-bg, .js-plus, .js-circles, .js-text-top, .js-text-bottom, .i-circle__bg, .js-strom-wrapper, .js-gas-wrapper');

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
				ease: 'none',
				scrollTrigger: {
					trigger: '.js-container',
					pin: false,
					start: 'top center',
					end: 'top top',
					scrub: true,
					onEnterBack: () => {
						strom.classList.add('is-active');
						gas.classList.add('is-active');
					},
					onLeave: () => {
						strom.classList.add('is-active');
						gas.classList.add('is-active');
					}
				}
			})
				.fromTo('.i-circle__bg', {scale: 2}, {scale: 1}, 0)
				.fromTo('.js-strom-wrapper', {x: -200}, {x: 0}, 0)
				.fromTo('.js-gas-wrapper', {x: 200}, {x: 0}, 0)
				.to('.js-circles', {scale: 1, opacity: 0, duration: 0.3}, 0)

			gsap.timeline({
				defaults: { willChange: "transform, opacity" },
				ease: 'none',
				scrollTrigger: {
					trigger: '.js-container',
					pin: true,
					start: 'top top',
					end: '+=1400',
					scrub: true
				}
			})
				.to('.js-plus', {opacity: 0}, 0)
				.to('.js-circle-strom', {x: 37, duration: 2}, 0)
				.to('.js-circle-gas', {x: -37, duration: 2}, 0)
				.to('.js-fire', {maskImage: 'linear-gradient(90deg, transparent 30%, rgba(0, 0, 0, 1) 60%)', duration: 0.8}, 0)
				.to('.js-rays', {maskImage: 'linear-gradient(-90deg, transparent 30%, rgba(0, 0, 0, 1) 60%)', duration: 0.8}, 0)
				.to('.js-bg', {opacity: 1, duration: 1.2}, 1.2)
				.to('.js-overwrap', {x: 0, duration: 1}, 1.03)
				.to('.js-strom-title', {x: -20}, 1.2)
				.to('.js-gas-title', {x: 10}, 1.2)
				.to('.js-text-top', {opacity: 0, duration: 0.1}, 1.5)
				.to('.js-text-bottom', {opacity: 1, duration: 0.1}, 1.5)
				.to('.js-heart', {opacity: 1}, 1.5)
				.to('.js-panel', {opacity: 1, y: 0}, 1.5)
		}
	})
}
