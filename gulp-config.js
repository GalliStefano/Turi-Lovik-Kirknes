'use strict'

// Paths to project folders
const paths = {
	dev: 'src',
	dist: 'dist',
	scripts: {
		dev: 'src/js/**/*.js',
		dist: 'dist/js/',
		main: 'src/js/main.js'
	},
	styles: {
		dev: 'src/scss/*.{scss,sass}',
		dist: 'dist/css/',
		main: 'dist/css/main.min.css'
	},
	fonts: {
		dev: 'src/font/*.{eot,otf,svg,woff,ttf,woff2}',
		dist: 'dist/font/'
	},
	pdf: {
		dev: 'src/pdf/*',
		dist: 'dist/pdf/'
	},
	images: {
		dev: 'src/images/**/*.{gif,png,jpg}',
		svg: 'src/images/**/*.svg',
		dist: 'dist/images/'
	},
	videos: {
		dev: 'src/videos/**/*',
		dist: 'dist/videos/'
	},
	html: {
		dev: 'src/pages/*.html',
		dist: 'dist/'
	},
};

export {paths};