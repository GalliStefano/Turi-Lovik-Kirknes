import gsap from 'gsap';

// PER OGNI PAGINA SELEZIONO LA VOCE DA ATTIVARE
export const initFooter = () => {
	const multitabLinks = gsap.utils.toArray('footer nav a');
	const pageUrl = window.location.href.split("/").pop();

	if (!pageUrl) return multitabLinks[0].classList.add('active');
	
	multitabLinks.forEach(el => {
		if (el.href.split("/").pop() == pageUrl) {
			el.classList.add('active');
			if (pageUrl != "fashion.html") el.style.color = 'var(--verde)';
		}
	});

}