'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scssLint = require('gulp-scss-lint'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('sass', function(done) {
  gulp.src('./scss/app.scss')
    .pipe(sass({
      errLogToConsole: true,
      style: 'expanded',
      sourceComments: 'normal'
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('sass-lint', function() {
    gulp.src(['./scss/app.scss', './scss/**/*.scss'])
        .pipe(scssLint({
            config: './scss/scss-lint.yaml'
        }));
});


