import {get} from '../utils/ajax'
import Swiper from 'swiper/swiper-bundle';
import {sliderChange} from '../animation/homepage';
import {createTitle} from '../components/title';

// ARRAY CON I PARAMETRI DEGLI SLIDER
const params = {
	direction: 'vertical',
	loop: true,
	slidesPerView: 2,
	speed: 600,
	autoplay: false,
	grabCursor: true,
	observer: true,
	a11y: false,
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
	}
}

// CREO LO SLIDER E LO INIETTO
const dataCarousel = (page, type) => {

	get('./data/slider.json').then(
		(response) => {

			const data = response[page.next.namespace];
			const title = document.querySelector("#tlk-category");
			const slider = document.createElement("article");
			let carousel = `<div class="swiper-wrapper">`;

			data.forEach(el => {
				carousel += `<div class="swiper-slide" data-bg="${el.bgColor}" data-color="${el.color ? el.color : 'beige'}">
				<a href="/detail.html?page=${el.page}">
					<figure>
						<img src="/images/${el.url}" alt="${el.alt}" class="lazyload" loading="lazy">
						<figcaption>${el.caption}</figcaption>
					</figure>
				</a>
				</div>`
			});

			carousel += `</div>`;
			slider.classList.add("swiper","main-round-slider");
			slider.innerHTML = carousel;


			
			if (type == "enter") {
				const mainSlider = document.querySelector('.main-round-slider.show');
				document.querySelector("body main").insertBefore(slider, mainSlider);
				const hiddenSlider = new Swiper('.swiper.main-round-slider:not(.show)', params);
				sliderChange();
			} else {
				slider.classList.add("show");
				document.querySelector("body main").insertBefore(slider, title);
				const mainSlider = new Swiper('.swiper.main-round-slider.show', params);
				gsap.from(gsap.utils.toArray('.main-round-slider.show .swiper-slide'), {opacity: 0, scale: 0.7, ease: "circ.out", duration: 0.7})
				gsap.set(document.body, {backgroundColor: `var(--${slider.querySelector(".swiper-slide-active").dataset.bg})`, color: `var(--${slider.querySelector(".swiper-slide-active").dataset.color})` }, 0)
				createTitle();
			}
			
		}
	)
}

// RIMUOVI SLIDER DOPO AVER INSERITO QUELLO NUOVO
const removeOldSlider = () => {
	const newSlider = document.querySelector('.main-round-slider:not(.show)');
	const oldSlider = document.querySelector('.main-round-slider.show');

	oldSlider.classList.remove('show');
	newSlider.classList.add('show');
	oldSlider.remove();

	createTitle();
}


// POPOLO SLIDER IN PAGINA DI DETTAGLIO E INIZIALIZZO
const updateAndInitSlider = (brand) => {

	console.log('sono dentro a update slider');

	const mainImg = document.querySelector('.main-round-slider.show .swiper-wrapper .swiper-slide:first-of-type figure img');

	mainImg.src = `/images/${brand}-main.webp`;

	console.log(mainImg);

	const mainSlider = new Swiper('.swiper.main-round-slider.show', params);

}

export {removeOldSlider, dataCarousel, updateAndInitSlider};