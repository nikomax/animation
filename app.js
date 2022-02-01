gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles('.js-circle-strom, .js-circle-gas, .js-overwrap, .js-heart, .js-fire, .js-rays, .js-strom-title, .js-gas-title, .js-panel, .js-bg, .js-plus, .js-circles');

window.onload = () => {
	ScrollTrigger.matchMedia({
		'(min-width: 960px)': () => {
			gsap.timeline({
				defaults: { force3D: true, willChange: "transform, opacity, mask-image" },
				ease: 'Power1.easeInOut',
				scrollTrigger: {
					id: 'trigger1',
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
				.to('.js-circles', {scale: 1, opacity: 0, duration: 0.5}, 0)
				.to('.js-bg', {opacity: 1, duration: 0.5}, 0)
				.to('.js-fire', {maskImage: 'linear-gradient(90deg, transparent 30%, rgba(0, 0, 0, 1) 60%)', duration: 0.5}, 0)
				.to('.js-rays', {maskImage: 'linear-gradient(-90deg, transparent 30%, rgba(0, 0, 0, 1) 60%)', duration: 0.5}, 0)
				.to('.js-overwrap', {x: 0, duration: 0.25}, 0.25)
				.to('.js-strom-title', {x: -20}, 0.3)
				.to('.js-gas-title', {x: 10}, 0.3)
				.to('.js-heart', {opacity: 1, scale: 1}, 0.6)
				.to('.js-panel', {opacity: 1, y: 0}, 0.6)
		}
	})
}
