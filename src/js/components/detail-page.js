import gsap from 'gsap';
import {get} from '../utils/ajax'
import {getParameterByName} from '../utils/getParams';
import {goAway, bigImg} from "../animation/details";
import {dataCarousel, updateAndInitSlider} from "../components/carousel";



// INSERISCO LE IMMAGINI CORRETTE
const populateImg = () => {
	const page = getParameterByName('page');
	const allImg = gsap.utils.toArray('[data-barba-namespace="details"]#tlk-category img');

	allImg.forEach((img, i) => {
		img.src = `/images/${page}-img${i + 2}.webp`
	})

}

// CAMBIO I VALORI DENTRO L'HEADER 
const setHeader = (name, url) => {
	const backBtn = document.querySelector('header ul:first-of-type li a');
	const pageName = document.querySelector('header ul:nth-of-type(2) li:last-of-type a');

	backBtn.href = `/${url}.html`;
	pageName.innerText = name;
}

// PERSONALIZZO LA PAGINA DI DETTAGLIO
const dataDetails = (type) => {
	const pageName = getParameterByName('page');
	const allImg = gsap.utils.toArray('[data-barba-namespace="details"]#tlk-category img');

	console.log('parte data details');

	let goBackPage, bgk, color, title = "";

	get('./data/slider.json').then(
		(response) => {

			for (const key in response) {
				response[key].forEach(obj => {
					if (obj.page == pageName) {
						goBackPage = key;
						bgk = obj.bgColor;
						gsap.set(document.body, {backgroundColor: `var(--${bgk})`}, 0)
						color = obj.color ? obj.color : 'beige';
						title = obj.caption.split(" - ")[1];
						title = title.replace('<br>', ' ');
					}
				})
			}

			// allImg.forEach((img, i) => {
			// 	img.src = `/images/${pageName}-img${i + 2}.webp`
			// })

			if (type == 'enter') {
				setHeader(title, goBackPage);
				updateAndInitSlider(pageName);
				goAway(document.querySelector('[data-barba-namespace="details"]#tlk-category'));
				bigImg(document.querySelector('[data-barba-namespace="details"]#tlk-category'));
			} else {
				setHeader(title, goBackPage);
			}

		}
	)
}

export {populateImg, dataDetails}