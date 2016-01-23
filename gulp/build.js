'use strict';
var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

var app_directory = 'www/';
var vendor_directory = app_directory + 'vendor/';

var vendor_files = [
	'angular/angular.js',
	'angular-ui-router/release/angular-ui-router.js',
	'angular-animate/angular-animate.min.js',
	'angular-toastr/dist/angular-toastr.tpls.js',
	'angular-gettext/dist/angular-gettext.min.js',
	'jquery/dist/jquery.min.js',
	'bootstrap-sass/assets/javascripts/bootstrap.min.js',
	'angular-messages/angular-messages.min.js',
	'angular-dynamic-locale/tmhDynamicLocale.min.js',
	'angular-i18n/angular-locale_es-es.js',
	'angular-i18n/angular-locale_en-gb.js'
];

gulp.task('build-remove', function() {
	return gulp.src(['build/*'], { read: false }).pipe(rimraf());
});




gulp.task('build', ['build-remove'], function() {
	gulp.src([app_directory+'**/*', '!'+vendor_directory, '!'+vendor_directory+'**']).pipe(gulp.dest('build'));
	
	vendor_files.forEach(function(vendor ) {
		gulp.src([vendor_directory + vendor]).pipe(gulp.dest('build/vendor/' + vendor + '/..'));
	});
});