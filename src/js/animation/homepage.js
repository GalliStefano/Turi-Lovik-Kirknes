import { gsap } from 'gsap';
import {removeOldTitle} from '../components/title';
import {removeOldSlider} from '../components/carousel';

// FADE IN/FADE OUT SLIDER + COLORI VARI DURANTE CAMBIO PAGINA
const sliderChange = () => {
	
	const activeSlider = document.querySelector('main .main-round-slider:not(.show)');
	const images = gsap.utils.toArray('main .main-round-slider.show .swiper-wrapper figure');
	const imagesNew = [].slice.call(activeSlider.querySelectorAll('.swiper-wrapper figure'));
	const bgColor = activeSlider.querySelector(".swiper-slide-active").dataset.bg
	const color = activeSlider.querySelector(".swiper-slide-active").dataset.color

	const tl = gsap.timeline({onComplete: removeOldSlider});

	tl
		.set(document.body, {backgroundColor: `var(--${bgColor})`, color: `var(--${color})` }, 0)
		.to(images, {opacity: 0, scale: 0.7, ease: "power1.in", duration: 0.7}, 0)
		.from(imagesNew, {opacity: 0, scale: 0.7, ease: "circ.out", duration: 0.7}, 0.45)

	return tl;
}

// SCROLLDOWN DELLO SLIDER MENTRE RITORNO IN HP
const sliderScrolldown = () => {
	
	const activeSlider = document.querySelector('main .main-round-slider:not(.show)');
	const oldImages = gsap.utils.toArray('main .main-round-slider.show .swiper-wrapper figure');
	const prevImg = activeSlider.querySelector(".swiper-slide.swiper-slide-prev figure");
	const nextImg = activeSlider.querySelector(".swiper-slide.swiper-slide-next figure");
	const mainImg = activeSlider.querySelector('.swiper-slide.swiper-slide-active figure');

	const tl = gsap.timeline({ onComplete: removeOldSlider, defaults: {ease: "power2.out", duration: 1.3} });

	tl
		.to(oldImages, {opacity: 0, ease: "power1.in", duration: 0.4}, 0)
		.from(prevImg, {y: "-125%", scale: 0.6, opacity: 0.5, }, 0.3)
		.from(mainImg, {y: "-220%", rotate: "-15deg", scale: 0.6, opacity: 0.5}, 0.3)
		.from(nextImg, {y: "-165%", x: "-25%", rotate: "-21deg", scale: 0.6, opacity: 0.3}, 0.3)

	return tl;
}

// FADE IN/FADE OUT TITLE + CAMBIO COLORI DURANTE SWIPE
const changeTitlesAndBgk = (bgColor, color) => {

	const title = document.querySelector("section article:first-of-type");
	const newTitle = document.querySelector("section article:last-of-type");
	const newUpperTitle = newTitle.querySelector("p");
	const activeVoice = document.querySelector('footer nav a.active');
	const header = gsap.utils.toArray('header ul li a');
	const insta = document.querySelector("footer nav + a");
	const mainLogo = document.querySelector('header ul:first-of-type li a img')

	const tl = gsap.timeline({defaults: { overwrite: "auto" }});

	tl
		.to(title, {opacity: "0", ease: "power1.inOut", duration: 0.3}, 0)
		.add(() => {
			removeOldTitle();
		}, ">")
		.set(document.body, {backgroundColor: `var(--${bgColor})`, color: `var(--${color})` }, 0.25)
		.set(activeVoice, {color: `var(--${bgColor})`, backgroundColor: `var(--${color})` }, 0.25)
		.to(header, {color: `var(--${color})`, ease: "power1.inOut", duration: 0.4}, 0.25)
		.set([insta, mainLogo], {filter: `var(--${color}-filter)`}, 0.25)
		
		.from(newTitle, {width: "0", ease: "power1.inOut", duration: 0.6}, 0.2)
		.from(newUpperTitle, {opacity: "0.2", ease: "power1.inOut", duration: 0.6}, 0.2)

	return tl;
}

// USCITA DALL'HOMEPAGE: TITLE + FOOTER 
const hpExit = (data) => {

	const title = data.querySelector("article");
	const footer = data.querySelector("footer nav");

	const tl = gsap.timeline({ defaults: {ease: "power1.inOut"} });

	tl
		.to(title, {width: 0, opacity: 1, duration: 0.7})
		.to(footer, {opacity: 0, duration: 0.4}, 0)

	return tl;
}

// INGRESSO IN HOMEPAGE: TITLE + FOOTER + ICON
const hpEnter = (data) => {

	const title = data.querySelector("article");
	const footer = data.querySelector("footer nav");
	const insta = data.querySelector("footer nav + a");
	const header = gsap.utils.toArray('header ul li a');
	const mainLogo = document.querySelector('header ul:first-of-type li a img')

	const tl = gsap.timeline({ defaults: {ease: "power1.inOut"} });

	tl
		.from(title, {width: 0, opacity: 0.2, duration: 0.7}, 0.5)
		.from(footer, {yPercent: 100, duration: 0.6}, 0.4)
		.from(insta, {opacity: 0, duration: 0.5}, 0.5)
		.to(header, {color: `var(--beige)`, duration: 0.4}, 0.5)
		.set(mainLogo, {filter: `var(--beige-filter)`}, 0.5)

	return tl;
}

export {sliderChange, sliderScrolldown, changeTitlesAndBgk, hpExit, hpEnter};