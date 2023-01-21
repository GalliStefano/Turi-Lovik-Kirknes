import {get} from '../utils/ajax'
import Swiper from 'swiper/swiper-bundle';
import gsap from 'gsap';
import {pageEnter, pageLeave, pageChange} from '../animation';

export const dataCarousel = (page) => {

	get('./data/slider.json').then(
		(response) => {

			const data = response[page.next.namespace];
			const mainSlider = document.querySelector('.main-round-slider.show');
			const slider = document.createElement("article");
			let carousel = `<div class="swiper-wrapper">`;

			data.forEach(el => {
				carousel += `<div class="swiper-slide" data-bg="${el.bgColor}" data-page="${el.page}">
				<figure>
					<img src="/images/${el.url}" alt="${el.alt}">
					<figcaption>
						${el.caption}
					</figcaption>
				</figure>
				</div>`
			});

			carousel += `</div>`;
			slider.classList.add("swiper","main-round-slider");
			slider.innerHTML = carousel;
			document.querySelector("body main").insertBefore(slider, mainSlider)

			const hiddenSlider = new Swiper('.swiper.main-round-slider:not(.show)', {

				direction: 'vertical',
				loop: true,
				slidesPerView: 2,
				speed: 600,
				autoplay: false,
				grabCursor: true,
				observer: true,
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
			
			});

			// let swiperMain = document.querySelector('.swiper.main-round-slider:not(.show)').swiper;
			// swiperMain.destroy();

			pageChange(page.container);

		}
	)


}