'use strict';

// const gulp = require('gulp');
// const config = require('./gulp/config.js');
// const browserSync = require('browser-sync').create();

import gulp from 'gulp'
import config from './gulp/config.js'
import browserSync from 'browser-sync'

import templates from './gulp/tasks/templates.js'
import stylesTask from './gulp/tasks/styles.js'
import jsTask from "./gulp/tasks/js.js"
import imgTask from "./gulp/tasks/img.js"
import fontsTask from "./gulp/tasks/fonts.js"
import delTask from "./gulp/tasks/clean.js"
import mediaTask from "./gulp/tasks/media.js"

// function lazyRequireTask(taskName, path) {
//   gulp.task(taskName, () => {
//     let task = require(path);
//     return task();
//   });
// }

// lazyRequireTask('templates', './gulp/tasks/templates.js');
// lazyRequireTask('styles', './gulp/tasks/styles.js');
// lazyRequireTask('js', './gulp/tasks/js.js');
// lazyRequireTask('img', './gulp/tasks/img.js');
// lazyRequireTask('fonts', './gulp/tasks/fonts.js');
// lazyRequireTask('clean', './gulp/tasks/clean.js');

// usePolling - chokidar solution for faster resave files
gulp.task('watch', () => {

  browserSync.init({
    server: config.dist.dist,
    notify: false
  });

  gulp.watch(config.watch.pug, {usePolling: true}, gulp.series(templates))
    .on('all', (event, filepath) => {
      global.emittyChangedFile = filepath;
    });

  gulp.watch(config.watch.html).on('change', browserSync.reload);
  gulp.watch(config.watch.styles, {usePolling: true}, gulp.series(stylesTask));
  gulp.watch(config.dist.styles).on('change', browserSync.reload);
  gulp.watch(config.watch.scripts, {usePolling: true}, gulp.series(jsTask));
  gulp.watch(config.dist.scripts).on('change', browserSync.reload);
  gulp.watch(config.watch.img, gulp.series(imgTask));
  gulp.watch(config.watch.fonts, gulp.series(fontsTask));

});

//set env for absolute build optimization
gulp.task('setProdMode', async function () {
  process.env.NODE_ENV = "production";
});

// Finish line, prepare project for production without optimization
gulp.task('build', gulp.series(
  delTask,
  gulp.parallel(
    templates,
    stylesTask,
    jsTask,
    imgTask,
    fontsTask,
    mediaTask
  )
));

// Rebuild the whole project, start watching files & turn on local server
gulp.task('default', gulp.series('build', gulp.parallel('watch')));

// Finish line, prepare project for production with optimization
gulp.task('build', gulp.series('setProdMode', 'build'));
