var customer = function () {
	
    var plusCreateButton = element(by.buttonText('Create'));
    var newCustomerLink = element(by.css('[ui-sref="companies.new"]'));
    var name = element(by.xpath("//input[@placeholder='Name']"));
    var legalName = element(by.xpath("//input[@placeholder='Legal Name']"));

   

    this.create = function () {
        plusCreateButton.click();
        newCustomerLink.click();
        name.sendKeys("Customer "+Date.now());

    	legalName.isDisplayed().then(function (isVisible) {
    	if (isVisible) {
        legalName.sendKeys("Legal Name ");
    	} else {
        // element is not visible
        console.log('Legal Name is disabled in Customer Forms');
    	}
		});

		
        browser.sleep(1000);
    };

};

module.exports = new customer();