'use strict';

export default {
  app: {
    pug: 'src/templates/*.pug',
    styles: 'src/styles/*.{sass,scss,css}',
    scripts: ['src/js/main.js'],
    scriptsModules: 'src/js/blocks/*',
    scriptsBackend: 'src/js/js-for-backend/*',
    fonts: 'src/fonts/**/*',
    img: ['src/images/**/*']
  },
  watch: {
    pug: 'src/templates/**/*.pug',
    html: 'public/*.html',
    styles: 'src/styles/**/*.{sass,scss,css}',
    scripts: 'src/js/**/*.js',
    img: 'src/images/*',
    fonts: 'src/fonts/**/*',
  },
  dist: {
    dist: 'public/',
    styles: 'public/css/',
    scripts: 'public/js/',
    img: 'public/images/',
    fonts: 'public/fonts/',
  }
}
