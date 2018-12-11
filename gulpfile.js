'use strict';

const gulp = require('gulp');
// const rename = require("gulp-rename");
const del = require('del');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');


// Очистка папки минификации
gulp.task('clean', function () {
  console.log('---------- Очистка папки с результатом конвертации');
  return del('fonts-converted');
});

gulp.task('ttf2woff', function(){
  return gulp.src(['src/*.ttf'])
    .pipe(ttf2woff())
    .pipe(gulp.dest('fonts-converted/'));
});

gulp.task('ttf2woff2', function(){
  return gulp.src(['src/*.ttf'])
    .pipe(ttf2woff2())
    .pipe(gulp.dest('fonts-converted/'));
});


// Минификация
gulp.task('convert', gulp.series(
  'clean',
  gulp.parallel('ttf2woff', 'ttf2woff2')
));