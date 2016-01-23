'use strict';

var gulp = require('gulp');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('watch', ['sass'], function() {	
  gulp.watch(paths.sass, ['sass']);
});
