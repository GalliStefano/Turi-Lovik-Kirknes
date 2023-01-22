import gsap from 'gsap';

const pageLeave = (container) => {

	const images = document.querySelectorAll('main .main-round-slider.show .swiper-wrapper figure');
	const activeSlider = document.querySelector('main .main-round-slider:not(.show)');
	const imagesNew = activeSlider.querySelectorAll('.swiper-wrapper figure');
	const tl = gsap.timeline();

	tl
		.to(images, {opacity: 0.4, scale: 0.7, ease: "power1.inOut", duration: 0.5}, 0)
		// .add(() => {
		// 	document.querySelector('main .main-round-slider.show').classList.remove('show');
		// 	activeSlider.classList.add('show');
		// 	}, 0.4)
		// .to(imagesNew, {opacity: 1, scale: 1, ease: "power1.inOut", duration: 0.5}, 0.3)




		// .to(titolo, {skewX: '0deg', translateY: '0%',  scaleY: 1, rotate: '0deg', ease: "expo.out", duration: 2.5}, 1)
		// .call(removeElement, ['#mc_hp .loading-logo'], 2)


	return tl;
}

const switchSlide = (container) => {}


const pageEnter = (container) => {


	const images = document.querySelectorAll('main .main-round-slider.show .swiper-wrapper figure');
	const activeSlider = document.querySelector('main .main-round-slider:not(.show)');
	const imagesNew = activeSlider.querySelectorAll('.swiper-wrapper figure');
	const tl = gsap.timeline();

	tl
		.set(activeSlider, {opacity: 1}, 0)
		.set(imagesNew, {scale: 0.7, opacity: 0.4}, 0)
		.to(images, {opacity: 0.4, scale: 0.7, ease: "power3.Out", duration: 0.8}, 0)
		.to(imagesNew, {opacity: 1, scale: 1, ease: "power4.Out", duration: 1}, 0.2)
		.add(() => {
			document.querySelector('main .main-round-slider.show').classList.remove('show');
			activeSlider.classList.add('show');
			}, 0.8)


	return tl;
}


const pageChange = (container) => {
	
	const images = document.querySelectorAll('main .main-round-slider.show .swiper-wrapper figure');
	const activeSlider = document.querySelector('main .main-round-slider:not(.show)');
	const imagesNew = activeSlider.querySelectorAll('.swiper-wrapper figure');
	const tl = gsap.timeline();

	tl
		.set(imagesNew, {opacity: 0, scale: 0.7}, 0)
		.to(images, {opacity: 0, scale: 0.7, ease: "power1.in", duration: 0.7}, 0)
		.to(imagesNew, {opacity: 1, scale: 1, ease: "circ.out", duration: 0.7}, 0.45)
		.add(() => {
			document.querySelector('main .main-round-slider.show').classList.remove('show');
			activeSlider.classList.add('show');
			let swiperMain = document.querySelector('.swiper.main-round-slider:not(.show)');
			swiperMain.remove();
			}, ">")
		// .set(activeSlider, {clearProps: "all"});


	return tl;
}

export {pageEnter, pageLeave, pageChange};