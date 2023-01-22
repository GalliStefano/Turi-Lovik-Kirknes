import gsap from 'gsap';


const bigImg = (container) => {

	const slider = document.querySelector('.main-round-slider.show');
	const prevImg = slider.querySelector(".swiper-slide.swiper-slide-prev figure");
	const nextImg = slider.querySelector(".swiper-slide.swiper-slide-next figure");
	const mainImg = slider.querySelector('.swiper-slide.swiper-slide-active');
	const imgContainer = mainImg.querySelector("figure");
	const img = imgContainer.querySelector("img");

	
	const tl = gsap.timeline();

	tl
		.set(slider, {pointerEvents: "none", transformOrigin: "left"}, 0)
		.to(prevImg, {y: "-25%", ease: "power1.inOut", duration: 0.5}, 0)
		.to(nextImg, {y: "25%", ease: "power1.inOut", duration: 0.5}, 0)

		.to(slider, {scale: 1.2, ease: "power2.out", duration: 1}, 0)
		.to(imgContainer, {height: "700px", y: "-5vh", borderRadius: "0px",ease: "power2.out", duration: 1}, 0)
		.to(mainImg, {height: "700px", ease: "power2.out", duration: 1}, 0)
		.to(img, {translateY: 0, ease: "power2.out", duration: 1}, 0)


	return tl;
}




const goAway = (container) => {

	const insta = document.querySelector("footer nav + a");
	const about = document.querySelector("header ul:last-child li:first-child");

	
	
	const tl = gsap.timeline();

	tl
		// .set(slider, {pointerEvents: "none", transformOrigin: "left"}, 0)
		// .to(prevImg, {y: "-25%", ease: "power1.inOut", duration: 0.5}, 0)
		// .to(nextImg, {y: "25%", ease: "power1.inOut", duration: 0.5}, 0)

		// .to(slider, {scale: 1.2, ease: "power2.out", duration: 1}, 0)
		// .to(imgContainer, {height: "700px", y: "-5vh", borderRadius: "0px",ease: "power2.out", duration: 1}, 0)
		// .to(mainImg, {height: "700px", ease: "power2.out", duration: 1}, 0)
		// .to(img, {translateY: 0, ease: "power2.out", duration: 1}, 0)


	return tl;
}




export {bigImg, goAway};