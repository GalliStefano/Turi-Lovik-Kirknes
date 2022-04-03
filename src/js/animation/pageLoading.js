import gsap from 'gsap';

const loading = (container) => {
	const logo = container.querySelector('.loading-logo');
	return gsap.to(logo, {scale: 1.1, opacity: 1, repeat: -1, transform: "translate(-50%,-50%)", yoyo:true, duration: 0.5});
}

const removeElement = (element) => {
	document.querySelector(element).remove();
}

export {loading, removeElement} ;