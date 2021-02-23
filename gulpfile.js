'use strict'; 
const browserSync = require('browser-sync');
const cleanCSS    = require("gulp-clean-css");
const gulp        = require('gulp');
const sass        = require('gulp-sass');
// sass.compiler     = require('node-sass');
const concat      = require('gulp-concat');

function makeCss() {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css'));
};

function minimify(){
  return gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'))
    ;
}

function watch(){
  browserSync.init({
    server: {
      baseDir : "./"
    }
  });
  gulp.watch("./scss/*.scss", makeCss);
  gulp.watch("./").on("change", browserSync.reload);
}

exports.watch = watch;
exports.minimify = minimify;