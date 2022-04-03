import gsap from 'gsap';
import {removeElement} from './pageLoading';

const hpEnter = (container) => {

	const logo = document.querySelector('.mc_wrapper nav img');
	const vociMenu = document.querySelectorAll('.mc_wrapper nav ul a');
	const footer = document.querySelector('#mc_link');
	const titolo = container.querySelectorAll("article h1 .text-reveal");
	const mouse = container.querySelector("article + a");
	const tl = gsap.timeline();

	tl
		.to(footer, {opacity: 0, ease: "power1.inOut", duration: 0.7}, 0)
		.to([logo, vociMenu], {opacity: 0, ease: "power1.inOut", duration: 0.7}, 0)
		.to(titolo, {skewX: '0deg', translateY: '0%',  scaleY: 1, rotate: '0deg', ease: "expo.out", duration: 2.5}, 1)
		.call(removeElement, ['#mc_hp .loading-logo'], 2)
		.to(mouse, {opacity: 1, scale: 1, transform: "translate(-50%,-50%)", duration: 1}, 1.5);

	return tl;
}


const hpLeave = (container) => {

	const marco = container.querySelector('article h1 .text-mask:first-of-type');
	const carretta = container.querySelector('article h1 .text-mask:nth-of-type(2)');
	const link = container.querySelector('article + a');
	const tl = gsap.timeline();

	tl
		.to(marco, {marginRight: '-117vw', marginLeft: '54vw', skewX: '-6deg', ease: "circ.out", duration: 1}, 0)
		.to(carretta, {marginRight: '204vw', ease: "circ.out", skewX: '6deg', duration: 1}, 0)
		.to(link, {bottom: '-45px', duration: 0.5}, 0.2)
		.to(container, {display: 'none', duration: 0.3}, 0.5);

	return tl;
}

export {hpEnter, hpLeave};