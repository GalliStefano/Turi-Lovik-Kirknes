import gsap from 'gsap';
import {populateImg} from '../components/detail-page'


// TRASFORMO LO SLIDER IN UNA SOLA IMG
const bigImg = (container) => {

	const slider = document.querySelector('.main-round-slider.show');
	const slides = [].slice.call(slider.querySelectorAll(".swiper-slide:not(.swiper-slide-active) figure img"));
	const prevImg = slider.querySelector(".swiper-slide.swiper-slide-prev figure");
	const nextImg = slider.querySelector(".swiper-slide.swiper-slide-next figure");
	const mainImg = slider.querySelector('.swiper-slide.swiper-slide-active');
	const imgContainer = mainImg.querySelector("figure");
	const img = imgContainer.querySelector("img");

	const secImg = container.querySelector('.secondary-img');

	const tl = gsap.timeline({onStart: populateImg});

	tl
		.set(document.body, {overflow: "auto"})
		.set(document.querySelector('main'), {overflow: "auto"})
		.set(slider, {pointerEvents: "none", transformOrigin: "left", overflow: "unset"}, 0)
		.to(prevImg, {y: "-25%", ease: "power1.inOut", duration: 0.5}, 0)
		.to(nextImg, {y: "25%", ease: "power1.inOut", duration: 0.5}, 0)
		.set(slides, {opacity: 0}, 0.5)

		.to(slider, {scale: 1.1, ease: "power2.out", duration: 1}, 0)
		.to(imgContainer, {height: img.clientHeight, y: "-5vh", borderRadius: "0px",ease: "power2.out", duration: 1}, 0)
		.to(mainImg, {height: img.clientHeight, ease: "power2.out", duration: 1}, 0)
		.to(img, {translateY: "-3%", ease: "power2.out", duration: 1}, 0)
	
		.to(secImg, {opacity: 1, y: 0, ease: "power2.out", duration: 0.6}, 0.2)
		.to(secImg, {scaleY: 1, ease: "power2.out", duration: 1}, 0.2)

	return tl;
}


// NASCONDO ELEMENTI DA HP E MOSTRO HEADER PAGINA DI DETTAGLIO

const goAway = (container) => {

	const navbar = document.querySelector("footer nav");
	const insta = document.querySelector("footer nav + a");
	const about = document.querySelector("header ul:last-child li:first-child");
	const productName = document.querySelector("header ul:last-child li:last-child");
	const title = container.querySelector("article");

	const mainLogo = document.querySelector("header ul:first-child li:last-child");
	const back = document.querySelector("header ul:first-child li:first-child");

	const productWidth = productName.offsetWidth - productName.parentElement.offsetWidth;

	
	const tl = gsap.timeline();

	tl
		.to(insta, {opacity: "0", ease: "power1.inOut", duration: 0.5}, 0)
		.to(navbar, {y: "40px", ease: "power2.inOut", duration: 0.5}, 0)
		.to(about, {opacity: "0", ease: "power1.inOut", duration: 0.5}, 0.1)

		.to(productName, {opacity: "1", x: `-${productWidth}`, ease: "power2.out", duration: 0.6}, 0)

		.to(back, {x: "0", opacity: "1", ease: "power3.out", duration: 0.5}, 0)
		.to(mainLogo, {x: "70px", ease: "power1.out", duration: 0.5}, 0)

		.to(title, {opacity: "0.2", width: "0", ease: "power2.out", duration: 0.6}, 0)

	return tl;
}


const parallaxScrollImg = (container) => {

	const mainImg = document.querySelector('.main-round-slider.show');
	const secImg = container.querySelector('.secondary-img');

	const tl = gsap.timeline();

	tl
		.to(mainImg, {yPercent: -30, opacity: 0, ease: "none"}, 0)
		.to(secImg, {opacity: 0.3, ease: "none"}, 0)

	return tl;
}


const fullscreenImg = (container) => {
	const terImg = container.querySelector('.third-img');

	return gsap.to(terImg, {scale: 1, ease: "none"}, 0);
}


export {bigImg, goAway, parallaxScrollImg, fullscreenImg};