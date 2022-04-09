export const lazyload = () => {
	if ('loading' in HTMLImageElement.prototype) {

		const images = document.querySelectorAll('img[loading="lazy"]');
		
		images.forEach(img => {
			if (img.dataset.src) img.src = img.dataset.src;
		});
		
	} else {
	
		// Dynamically import the LazySizes library
		const script = document.createElement('script');
		
		script.src = '/js/lazysizes.min.js?cb=4fa821f33938fdfbe8d3e139310438a544e3323a';
		script.async = true;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
	
	// CLASSI E ATTRIBUTI DA INSERIRE IN OGNI IMMAGINE
	// <img data-src="xxx.jpg" width="360" height="300" alt="" class="lazyload" loading="lazy" />
}