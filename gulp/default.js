'use strict';

var gulp = require('gulp'),
	connect = require('gulp-connect');

var WEB = './www/';

gulp.task('connect', function () {
  return connect.server({
    root: WEB,
    port: 8002,
    livereload: true
  });
});

gulp.task('default', ['connect','sass','watch']);
