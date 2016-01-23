'use strict';

exports.config = {
    capabilities: {
            'browserName': 'chrome'
    },
    specs: [
        'e2e/*.js',
    ],
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000,
        isVerbose: true,
    },
    allScriptsTimeout: 20000,
    onPrepare: function(){
        browser.driver.get('http://localhost:8100');
        global.shareData = {};
    },
    onComplete: function() {
        console.log(global.shareData);
    },
      // onPrepare: function() {
    //     browser.driver.get('http://localhost:8100');

            // Using Ripple to emulate
            // This will use cordova 3.0.0 and iPhone5
            // device in ripple, modify as needed.
            // browser.driver.get('http://localhost:4400/?enableripple=cordova-3.0.0-iPhone5');
    // }
};
