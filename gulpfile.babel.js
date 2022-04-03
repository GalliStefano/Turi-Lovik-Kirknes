'use strict'

// Load plugins
import cache from 'gulp-cache'
import del from 'del'
import {src, dest, series, parallel, watch} from 'gulp'
const sass = require('gulp-sass')(require('sass'));
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import fileinclude from 'gulp-file-include'
import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'
import imageminwebp from 'imagemin-webp'
import imageminSvgo from 'imagemin-svgo'
import extReplace from 'gulp-ext-replace'
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();

import {paths} from './gulp-config';

// clear CACHE
function clearCache() {
	return cache.clearAll();
}

// clean build folder
function clean() {
	return del(`${paths.dist}/**`);
}

// BrowserSync
function serve(cb) {
	browserSync.init({
		server: {
			baseDir: "dist",
			index: "homepage.html"
		},
		logPrefix: 'ʕ•ᴥ•ʔ BrowserSync'
	});
	cb();
}

// BrowserSync Reload
function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

// import fonts
function fonts() {
  return src(paths.fonts.dev)
    .pipe(dest(paths.fonts.dist))
    // .pipe(notify({ message: "fonts moved!!!", onLast: true }))
    .pipe(browserSync.stream());
}

// import pdf
function pdf() {
  return src(paths.pdf.dev)
    .pipe(dest(paths.pdf.dist))
    // .pipe(notify({ message: "pdf moved!!!", onLast: true }))
    .pipe(browserSync.stream());
}


// Copy and optimize img in dist folder
function images() {
  return src(paths.images.dev)
		.pipe(imagemin([imageminwebp({
			lossless: true
		})]))
		.pipe(extReplace(".webp"))
		.pipe(dest(paths.images.dist))
}


function svg() {
	return src(paths.images.svg)
	.pipe(imagemin([
		imagemin.svgo({
			plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
			]
		})
	]))
	.pipe(dest(paths.images.dist))
}


// import pdf
function video() {
  return src(paths.videos.dev)
    .pipe(dest(paths.videos.dist))
    // .pipe(notify({ message: "pdf moved!!!", onLast: true }))
    .pipe(browserSync.stream());
}

// CSS task
function css() {
	return src(paths.styles.dev)
		.pipe(sass.sync({outputStyle: 'compressed', includePaths: ["node_modules"]}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS({level: {1: {specialComments: 0}, 2: {}}}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(paths.styles.dist))
		// .pipe(notify({ message: "Css compiled!!!", onLast: true }))
		.pipe(browserSync.stream());
}

// Copy html in dist folder
function html() {
	return src(paths.html.dev)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(dest(paths.html.dist))
		// .pipe(notify({ message: "Html compiled!!!", onLast: true }))
		.pipe(browserSync.stream());
}

// Copy, concatenate and minify prod html
function minHtml() {
	return src(paths.html.dev)
		.pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(dest(paths.html.dist))
		// .pipe(notify({ message: "Html compiled!!!", onLast: true }))
		.pipe(browserSync.stream());
}

// Copy js in dist folder
function js() {
	return browserify({entries: paths.scripts.main})
		.transform("babelify", {presets: ['@babel/preset-env']})
		.bundle()
		.pipe(source("main.js"))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(paths.scripts.dist))
		// .pipe(notify({ message: "Js compiled!!!", onLast: true }))
		.pipe(browserSync.stream());
}

// Transpile, concatenate and minify scripts
function minJs() {
	return browserify({entries: paths.scripts.main})
		.transform("babelify", {presets: ['@babel/preset-env']})
		.bundle()
		.pipe(source("main.js"))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(paths.scripts.dist))
		// .pipe(notify({ message: "Js compiled!!!", onLast: true }))
		.pipe(browserSync.stream());
}

// Watch files
function watchFiles() {
	watch(paths.styles.dev, css)
	watch('src/**/*.{html,njk}').on("change", series(html, browserSyncReload))
	watch(paths.images.dev, series(images, browserSyncReload))
	watch(paths.scripts.dev, series(js, browserSyncReload))
	watch(paths.videos.dev, series(video, browserSyncReload))
}

// Define complex tasks
const watcher = parallel(watchFiles, serve);
const build = series(clean, clearCache, parallel(fonts, pdf, images, svg, video, css, js, html));
const buildProd = series(clean, clearCache, parallel(fonts, pdf, images, video, svg, css, minJs, minHtml));
const dev = series(build, watcher);
const prod  = series(buildProd, watcher);

// Export tasks
exports.clearCache = clearCache;
exports.clean = clean;
exports.fonts = fonts;
exports.pdf = pdf;
exports.images = images;
exports.css = css;
exports.js = js;
exports.minJs = minJs;
exports.html = html;
exports.minHtml = minHtml;
exports.serve = serve;

exports.default = build;
exports.dev = dev;
exports.prod = prod;