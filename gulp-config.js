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
		dev: 'src/scss/**/*.{scss,sass}',
		dist: 'dist/css/',
		main: 'dist/css/main.min.css'
	},
	fonts: {
		dev: 'src/fonts/*.{eot,otf,svg,woff,ttf,woff2}',
		dist: 'dist/fonts/'
	},
	pdf: {
		dev: 'src/pdf/*',
		dist: 'dist/pdf/'
	},
	data: {
		dev: 'src/data/*',
		dist: 'dist/data/'
	},
	images: {
		dev: 'src/images/**/*.{gif,png,jpg,jpeg}',
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