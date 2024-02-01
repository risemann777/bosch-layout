'use strict';

import gulp from 'gulp'
import config from '../config.js'
import * as sass from 'sass'
import gulpSass from 'gulp-sass'
import gulpif from 'gulp-if'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const stylesTask = () => {

  const sassCompiler = gulpSass(sass)
  const env = process.env.NODE_ENV === "production" ? "production" : "development"

  return gulp.src(config.app.styles)
    .pipe(plumber({
      errorHandler: notify.onError({
        title: "STYLES",
        message: "<%= error.message %>"
      })
    }))
    .pipe(gulpif(env === "development", sourcemaps.init()))
    .pipe(gulpif(env === "production", autoprefixer()))
    .pipe(sassCompiler({outputStyle: 'compressed'}).on('error', sassCompiler.logError))
    .pipe(gulpif(env === "development", sourcemaps.write()))
    .pipe(gulp.dest(config.dist.styles));
}

export default stylesTask
