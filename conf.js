exports.config = {
	
	seleniumAddress: 'http://localhost:4444/wd/hub',

	capabilities: {
	  'browserName': 'chrome',
	  'chromeOptions': {
	    'args': ['--no-sandbox', '--disable-infobars']
	  }
	},

	specs: ['maintest.js'],

    jasmineNodeOpts: {
      defaultTimeoutInterval: 5 * 30000,
      showColors:true
    }

};
