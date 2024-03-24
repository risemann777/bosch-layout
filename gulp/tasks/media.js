'use strict';

import gulp from 'gulp'
import config from '../config.js'

const mediaTask = () => {
	return gulp.src(config.app.media)
		.pipe(gulp.dest(config.dist.media))
}

export default mediaTask