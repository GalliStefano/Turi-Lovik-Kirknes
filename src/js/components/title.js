import { gsap } from 'gsap';
import Swiper from 'swiper/swiper-bundle';
import {changeTitlesAndBgk} from '../animation/homepage';

// RIMUOVI TITOLO DOPO AVER INSERITO QUELLO NUOVO
const removeOldTitle = () => {
	const title = document.querySelector("section article:first-of-type");
	title.remove();
}

// CREO TITOLO NUOVO E AL CAMBIO SLIDE FACCIO FADE IN/FADE OUT TRA TITOLI
const createTitle = () => {

	const title = document.querySelector('main section article:first-of-type');
	const mainSlider = document.querySelector('.main-round-slider.show').swiper

	mainSlider.on('slideChange',  () => {
		let activeSlide = document.querySelector(`.swiper-slide[data-swiper-slide-index="${mainSlider.realIndex}"] figcaption`).innerHTML;
		const bgColor = document.querySelector(`.swiper-slide[data-swiper-slide-index="${mainSlider.realIndex}"]`).dataset.bg
		const color = document.querySelector(`.swiper-slide[data-swiper-slide-index="${mainSlider.realIndex}"]`).dataset.color

		activeSlide = activeSlide.split(" - ");

		let newtitle = document.createElement("article");
		newtitle.innerHTML = `<p>${activeSlide[0]}</p><h1>${activeSlide[1]}</h1>`

		document.querySelector("body main section").insertBefore(newtitle, title.nextSibling);

		// CONTROLLO NUMERO DI TITOLI IN PAGINA E NASCONDO IL SECONDO
		let allArticles = gsap.utils.toArray('#tlk-category article');
		if (allArticles.length > 2) allArticles[1].style.display = "none";

		changeTitlesAndBgk(bgColor, color);
		
	});
}

export {removeOldTitle, createTitle}