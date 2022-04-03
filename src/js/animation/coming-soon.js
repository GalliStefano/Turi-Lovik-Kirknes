import gsap from 'gsap';
import {removeElement} from './pageLoading';

const CsEnter = (container) => {

	const logo = document.querySelector('.mc_wrapper nav img');
	const vociMenu = document.querySelectorAll('.mc_wrapper nav ul a');
	const footer = document.querySelector('#mc_link');
	const titoli = container.querySelector('#mc_cs header');
	const info = container.querySelectorAll('#mc_cs p');
	const img = container.querySelector('#mc_cs figure');
	const tl = gsap.timeline();

	tl
		.to('#mc_cs .loading-logo', {opacity: 0, duration: 0.5}, 0.2)
		.call(removeElement, ['#mc_cs .loading-logo'], 0.5)
		.to(logo, {opacity: 1, ease: "power1.inOut", duration: 0.5}, 0.4)
		.to(vociMenu, {opacity: 1, duration: 0.6, stagger: 0.2, ease: "power1.inOut"}, 0)
		.to(titoli, {opacity: 1, filter:"blur(0px)", ease: "circ.out", duration: 1}, 1.5)
		.to(img, {opacity: 1, filter:"blur(0px)", ease: "circ.out", duration: 1}, 1.5)
		.to(info, {opacity: 1, filter:"blur(0px)", ease: "circ.out", duration: 1}, 1.5)
		.to(footer,  {opacity: 1, ease: "power1.inOut", duration: 1}, 1.8)
		.to('#mc_link aside', {marginRight: 0, ease: "power1.inOut", duration: 1}, 1.5);

	return tl;
}




export {CsEnter};