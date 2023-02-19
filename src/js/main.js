import gsap from 'gsap';
import barba from '@barba/core';
const { CSSRulePlugin } = require("gsap/dist/CSSRulePlugin");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import {bigImg, goAway, parallaxScrollImg, fullscreenImg} from './animation/details';

import {hpExit, hpEnter} from './animation/homepage';

import {dataCarousel} from './components/carousel';
import {dataDetails} from './components/detail-page';
import {initFooter} from './components/footer';

gsap.install(window);
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
	// JS MAIN - Start


	barba.init({
		preventRunning: true,
		transitions: [
			{
				sync: true,
				name: 'hp change',
				to: {
					namespace: ['jewellery', 'fashion']
				},
				once: data => {
					dataCarousel(data);
					hpEnter(data.next.container);
				},
				leave: data => hpExit(data.current.container),
				enter: data => {
					dataCarousel(data, "enter");
					hpEnter(data.next.container);
				}
			},
			{
				sync: true,
				name: 'go to detail',
				to: {
					namespace: ['details']
				},
				once: data => {

					console.log('dentro a once');
					goAway(data.next.container);
					dataDetails('enter');

			},
				leave: data => {
					dataDetails();
					goAway(data.current.container)
				},
				
				
				enter: data => bigImg(data.next.container)
			},
	],
	views: [
		{
			namespace: 'jewellery',
			afterEnter: data => initFooter()
		},
		{
			namespace: 'fashion',
			afterEnter: data => initFooter()
		},
		{
			namespace: 'details',
			afterEnter(data) {

				ScrollTrigger.create({
					animation: parallaxScrollImg(data.next.container),
					scroller: "body main",
					trigger: "main #tlk-category .secondary-img",
					start: 1,
					// markers: true,
					scrub: true
				});

				ScrollTrigger.create({
					animation: fullscreenImg(data.next.container),
					scroller: "body main",
					trigger: data.next.container.querySelector('.third-img'),
					start: "top bottom",
					end: "top top",
					// markers: true,
					scrub: true
				});

			},
			afterLeave: () => ScrollTrigger.killAll()

		}
	]
});


	// JS MAIN - End
});