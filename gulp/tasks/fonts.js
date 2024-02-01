'use strict';

import gulp from 'gulp'
import config from '../config.js'
import gulpif from 'gulp-if'
import gulpChanged from 'gulp-changed'

const fontsTask = () => {
	const env = process.env.NODE_ENV === "production" ? "production" : "development"

	return gulp.src(config.app.fonts)
		.pipe(gulpif(env === "development", gulpChanged(config.dist.fonts)))
		.pipe(gulp.dest(config.dist.fonts))
}

export default fontsTask