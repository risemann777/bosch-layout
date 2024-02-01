'use strict';

import gulp from 'gulp'
import config from '../config.js'
import gulpif from 'gulp-if'
import gulpChanged from 'gulp-changed'

const imgTask = () => {
	const env = process.env.NODE_ENV === "production" ? "production" : "development"

	return gulp.src(config.app.img)
		.pipe(gulpif(env === "development", gulpChanged(config.dist.img)))
		.pipe(gulp.dest(config.dist.img))
}

export default imgTask