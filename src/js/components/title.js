import {slideChange} from '../animation/homepagE';

export const createTitle = () => {

	const title = document.querySelector('main section article:first-of-type');
	const mainSlider = document.querySelector('.main-round-slider.show').swiper

	mainSlider.on('slideChange',  () => {

		let activeSlide = document.querySelector(`.swiper-slide[data-swiper-slide-index="${mainSlider.realIndex}"] figcaption`).innerText;
		const color = document.querySelector(`.swiper-slide[data-swiper-slide-index="${mainSlider.realIndex}"]`).dataset.bg

		activeSlide = activeSlide.split(" - ");

		let newtitle = document.createElement("article");
		newtitle.innerHTML = `<p>${activeSlide[0]}</p><h1>${activeSlide[1]}</h1>`

		document.querySelector("body main section").insertBefore(newtitle, title.nextSibling);
		slideChange(color);
		
	});

}