var login = function () {
	
    var signinButton = element(by.name("commit"));

    this.signin = function () {
    	browser.waitForAngularEnabled(false);
		element(by.name("email")).sendKeys("laxmi@shopvox.com");
		element(by.name("password")).sendKeys("test123");
        signinButton.click();
        browser.sleep(6000);

    };

};

module.exports = new login();