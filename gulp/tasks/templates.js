'use strict';

import gulp from 'gulp'
import config from '../config.js'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import gulpif from 'gulp-if'
import pug from 'gulp-pug'
import debug from 'gulp-debug'
import emitty from 'emitty'

const templates = () => {
  const env = process.env.NODE_ENV === "production" ? "production" : "development"
  const emitySetup = emitty.setup('src/templates', 'pug')

  return new Promise((resolve, reject) => {
    emitySetup.scan(global.emittyChangedFile).then(() => {
      gulp.src(config.app.pug)
        .pipe(plumber({
          errorHandler: notify.onError({
            title: 'PUG',
            message: '<%= error.message %>'
          })
        }))
        .pipe(gulpif(env === "development", emitySetup.filter(global.emittyChangedFile)))
        .pipe(pug())
        .pipe(debug({title: "Emitty:"}))
        .pipe(gulp.dest(config.dist.dist))
        .on('end', resolve)
        .on('error', reject);
    });
  });
}

export default templates
