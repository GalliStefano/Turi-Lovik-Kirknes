import gsap from 'gsap';
import barba from '@barba/core';

const { CSSRulePlugin } = require("gsap/dist/CSSRulePlugin");
// const imagesLoaded = require('imagesloaded');
import {pageEnter, pageLeave} from './animation';
// import {SwipeEventDispatcher} from  '../js/swipedEvents.js';

import Swiper from 'swiper/swiper-bundle';
import {lazyload} from './utils/lazyload'
import {dataCarousel} from './components/carousel';


lazyload();
gsap.install(window);
gsap.registerPlugin(CSSRulePlugin);
// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);


document.addEventListener("DOMContentLoaded", function() {
	// JS MAIN - Start


const multitabLinks = [].slice.call(document.querySelectorAll('footer nav a'))
const pageUrl = window.location.href.split("/").pop();

console.log(pageUrl);

multitabLinks.forEach(el => {
	
	el.addEventListener('click', e => {

		multitabLinks.forEach(el => {
			el.classList.remove('active');
		})

		el.classList.add('active');
	})

	if (el.href.split("/").pop() == pageUrl) el.classList.add('active');

});









	const mainSlider = new Swiper('.swiper.main-round-slider', {

		direction: 'vertical',
		loop: true,
		slidesPerView: 2,
		speed: 600,
		autoplay: false,
		grabCursor: true,
		effect: "creative",
		creativeEffect: {
			limitProgress: 2,
			prev: {
				translate: [0, "-135%", 0],
				rotate: [0, 0, -15],
			},
			next: {
				translate: [0, "135%", 0],
				rotate: [0, 0, 15],
			},
		},
		on: {

		}
	
	});

	barba.init({
		preventRunning: true,
		transitions: [
			{
				name: 'slider',
				to: {
					namespace: ['jewellery', 'fashion']
				},
				// leave: current =>	pageLeave(current.container),
				beforeEnter: ({next}) => dataCarousel(next.namespace),
				enter(next) {
					console.log('dentro enter');
					pageEnter(next.container);
				},
			},
		// 	{
		// 	name: 'jewellery',
		// 	to: {
		// 		namespace: ['jewellery']
		// 	},
		// 	once({next}) {
		// 		console.log('once coming soon');
		// 		loading(next.container);
		// 		setTimeout(() => {
		// 			CsEnter(next.container);
		// 		}, 1000);
		// 	},
		// 	leave: ({current}) =>	hpLeave(current.container), 
		// 	enter({next}) {
		// 		gsap.set("#mc_cs .loading-logo", {opacity: 0});
		// 		CsEnter(next.container);				
		// 	},
		// }
	],
	// views: [{
	// 	namespace: 'home',
	// 	afterEnter() {
	// 		let scrolling = true;
	// 		let titolo = [].slice.call(document.querySelectorAll('#mc_hp article h1 .text-mask .text-reveal'));
	// 		const dispatcher = new SwipeEventDispatcher(document.querySelector('#mc_hp'));

	// 		dispatcher.on('SWIPE_UP', () => { document.querySelector('#mc_hp article + a').click(); });
	// 		dispatcher.on('SWIPE_DOWN', () => { document.querySelector('#mc_hp article + a').click(); });
	// 		window.addEventListener("wheel", () => {
	// 			if (scrolling) {
	// 				document.querySelector('#mc_hp article + a').click();
	// 				scrolling = false;
	// 			}
	// 		});
	// 		titolo.forEach((item) => {
	// 			item.addEventListener("click", () => {
	// 				console.log('dentro link');
	// 				document.querySelector('#mc_hp article + a').click();
	// 			});
	// 		})
		
	// 	}
	// }, {
	// 	namespace: 'coming-soon',
	// 	afterEnter() {
	// 		let resume = document.querySelector('#mc_cs figure');
	// 		resume.addEventListener("click", () => {
	// 			window.open("/pdf/CV-Marco-Carretta.pdf", '_blank');
	// 		});
	// 	}
	// }]
});







	// JS MAIN - End
});

// document.addEventListener("DOMContentLoaded", function() {
// 	// JS MAIN - Start

// 	const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// 	gsap.registerPlugin(CSSRulePlugin);

// 	//Set colors depending on system color - inizio
// 	const handleDarkmode = () => {
// 		let darkModeOn = darkModeMediaQuery.matches;
// 		const favicon = document.querySelector('link[rel="icon"]');
// 		if (!favicon) return; 
// 		if (darkModeOn) {
// 			console.log('dark mode');
// 			favicon.href = '/images/favicon-white.svg';
// 		} else {
// 			console.log('light mode');
// 			favicon.href = '/images/favicon-black.svg';
// 		}
// 	}

// 	darkModeMediaQuery.addEventListener('change', handleDarkmode);
// 	//Set colors depending on system color - fine


// 	barba.init({
// 		preventRunning: true,
// 		transitions: [
// 			{
// 				name: 'homepage',
// 				to: {
// 					namespace: ['home']
// 				},
// 				once({next}) {
// 					console.log('dentro once');
// 					loading(next.container);
// 					imagesLoaded(document.querySelectorAll('.content__img'),function() {
// 						hpEnter(next.container);
// 					});
// 				},
// 				enter({next}) {
// 					console.log('dentro enter');
// 					gsap.set("#mc_hp .loading-logo", {opacity: 0});
// 					imagesLoaded(document.querySelectorAll('.content__img'),function() {
// 						hpEnter(next.container);
// 					});
// 				},
// 			},
// 			{
// 			name: 'coming',
// 			to: {
// 				namespace: ['coming-soon']
// 			},
// 			once({next}) {
// 				console.log('once coming soon');
// 				loading(next.container);
// 				setTimeout(() => {
// 					CsEnter(next.container);
// 				}, 1000);
// 			},
// 			leave: ({current}) =>	hpLeave(current.container), 
// 			enter({next}) {
// 				gsap.set("#mc_cs .loading-logo", {opacity: 0});
// 				CsEnter(next.container);				
// 			},
// 		}
// 	],
// 	views: [{
// 		namespace: 'home',
// 		afterEnter() {
// 			let scrolling = true;
// 			let titolo = [].slice.call(document.querySelectorAll('#mc_hp article h1 .text-mask .text-reveal'));
// 			const dispatcher = new SwipeEventDispatcher(document.querySelector('#mc_hp'));

// 			dispatcher.on('SWIPE_UP', () => { document.querySelector('#mc_hp article + a').click(); });
// 			dispatcher.on('SWIPE_DOWN', () => { document.querySelector('#mc_hp article + a').click(); });
// 			window.addEventListener("wheel", () => {
// 				if (scrolling) {
// 					document.querySelector('#mc_hp article + a').click();
// 					scrolling = false;
// 				}
// 			});
// 			titolo.forEach((item) => {
// 				item.addEventListener("click", () => {
// 					console.log('dentro link');
// 					document.querySelector('#mc_hp article + a').click();
// 				});
// 			})
		
// 		}
// 	}, {
// 		namespace: 'coming-soon',
// 		afterEnter() {
// 			let resume = document.querySelector('#mc_cs figure');
// 			resume.addEventListener("click", () => {
// 				window.open("/pdf/CV-Marco-Carretta.pdf", '_blank');
// 			});
// 		}
// 	}]
// });




// 	// JS MAIN - End
// });


console.log('dentro al js');

