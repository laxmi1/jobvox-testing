exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'firefox',
        'moz:firefoxOptions': {
     args: ['--headless','--no-sandbox', '--disable-infobars']
    }

    // capabilities: {
    // 'browserName': 'chrome',
    // 'chromeOptions': {
    //   'args': ['--headless','--no-sandbox', '--disable-infobars']
    // }

    },

    specs: ['maintest.js'],

    resultJsonOutputFile: './ReportInJson.json',

    onPrepare: function() {

        global.MAXWAITTIME = 20000;

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));


        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function(caps) {
                        var browserName = caps.get('browserName');

                    });
                }
            }
        })
    },

    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function(caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');

            var HTMLReport = require('protractor-html-reporter');

            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: './JasmineRports',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 3000000
    }

};