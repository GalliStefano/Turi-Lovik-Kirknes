import {get} from '../utils/ajax'

export const dataCarousel = (page) => {

	get('./data/slider.json').then(
		(response) => {
			console.log(response);
		}
	)



	console.log(page);



}