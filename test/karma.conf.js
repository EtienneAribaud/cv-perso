'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../www',


    frameworks: ['jasmine'],


    files: [
        'src/app.js',
        'src/**/*.html',
        'src/**/*.module.js',
        '../test/midway/*.js',
        'src/**/*.js',

    ],

    exclude: [
        '**/*.swp'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
        stripPrefix: 'ok-p2p-web/www/',
        moduleName: 'my.templates'
    },

    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    port: 9876,
    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    autoWatch: true,
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],

    proxies: {
        //point this to the root of where your AngularJS application
        //is being hosted locally
        '/': 'http://localhost:8100/#/'
    },

    singleRun: false
  });
};
