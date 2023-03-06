import { gsap } from 'gsap';
import {get} from '../utils/ajax'
import {getParameterByName} from '../utils/getParams';
import {detailsEnter, sliderToMainImg, setColorHeader} from "../animation/details";
import {updateAndInitSlider} from "../components/carousel";

// IMPOSTO TESTI E LINK DELL'HEADER 
const setHeader = (name, url) => {
	const backBtn = document.querySelector('header ul:first-of-type li a');
	const pageName = document.querySelector('header ul:nth-of-type(2) li:last-of-type a');

	backBtn.href = `/${url}.html`;
	pageName.innerText = name;
}

// INSERISCO LE IMMAGINI CORRETTE
const populateImg = () => {
	const page = getParameterByName('page');
	const allImg = gsap.utils.toArray('[data-barba-namespace="details"]#tlk-category img');

	allImg.forEach((img, i) => {
		img.src = `/images/${page}-img${i + 2}.webp`
	})

}

// PERSONALIZZO LA PAGINA DI DETTAGLIO
const dataDetails = (container, type) => {
	const pageName = getParameterByName('page');
	const mainImg = document.querySelector('.main-round-slider.show .swiper-slide:first-of-type img')
	let goBackPage, bgk, color, title = "";
	if (type) gsap.set(mainImg, {opacity: 0});

	get('./data/slider.json').then(
		(response) => {

			for (const key in response) {
				response[key].forEach(obj => {
					if (obj.page == pageName) {
						goBackPage = key;
						bgk = obj.bgColor,
						color = obj.color ? obj.color : 'beige';
						title = obj.caption.split(" - ")[1];
						title = title.replace('<br>', ' ');
					}
				})
			}

			setHeader(title, goBackPage);
			if (type) {
				setColorHeader(bgk, color);
				updateAndInitSlider(pageName);
				detailsEnter(container);
				sliderToMainImg(container);
			}
		}
	)
}

export {populateImg, dataDetails}